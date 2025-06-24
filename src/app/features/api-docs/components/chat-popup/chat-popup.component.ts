import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ChatService } from '../../../../core/services/chat.service';

interface Message { text: SafeHtml; isUser: boolean; }
interface ChatEntry { role: string; content: string /* raw text */; }

@Component({
  selector: 'app-chat-popup',
  templateUrl: './chat-popup.component.html',
  styleUrls: ['./chat-popup.component.scss'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class ChatPopupComponent implements OnInit, AfterViewInit {
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

  showChat = false;
  inputMessage = '';
  messages: Message[] = [];
  loading = false;
  typingIndicator = false;
  chatHistory: ChatEntry[] = [];

  constructor(
    private chatService: ChatService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.loadChatHistory();
    if (!this.messages.length) {
      this.clearChatHistory();
    }
  }

  ngAfterViewInit() {
    const c = document.querySelector('.chat-messages');
    if (c) {
      new MutationObserver(() => this.scrollToBottom())
        .observe(c, { childList: true });
    }
  }

  toggleChat() {
    this.showChat = !this.showChat;
    if (this.showChat) {
      setTimeout(() => this.inputRef.nativeElement.focus(), 0);
    }
  }

  clearChatHistory() {
    this.messages = [
      { text: this.sanitize('¡Hola!, ¿En qué puedo ayudarte?'), isUser: false }
    ];
    this.chatHistory = [];
    localStorage.clear();
    this.chatService.iniciarSesion().catch(console.error);
  }

  loadChatHistory() {
    const savedMsgs = localStorage.getItem('messages');
    if (savedMsgs) {
      JSON.parse(savedMsgs).forEach((m: any) =>
        this.messages.push({ text: this.sanitize(m.text), isUser: m.isUser })
      );
    }
    const savedHist = localStorage.getItem('chatHistory');
    if (savedHist) {
      this.chatHistory = JSON.parse(savedHist);
    }
  }

  saveChatHistory() {
    localStorage.setItem('messages',
      JSON.stringify(this.messages.map(m => ({ text: m.text.toString(), isUser: m.isUser })))
    );
    localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory));
  }

  sendMessage() {
    const txt = this.inputMessage.trim();
    if (!txt) return;

    this.messages.push({ text: this.sanitize(txt), isUser: true });
    this.chatHistory.push({ role: 'user', content: txt });
    this.inputMessage = '';
    this.loading = true;
    this.typingIndicator = true;

    const sid = localStorage.getItem('chatSessionId');
    if (sid) {
      this.proceedChat(txt);
    } else {
      this.chatService.iniciarSesion()
        .then(() => this.proceedChat(txt))
        .catch(err => {
          console.error(err);
          this.messages.push({
            text: this.sanitize('Error iniciando sesión.'),
            isUser: false
          });
          this.loading = this.typingIndicator = false;
        });
    }
  }

  private proceedChat(userMsg: string) {
    // Push a new assistant entry with empty raw content
    this.chatHistory.push({ role: 'assistant', content: '' });
    // Also push an empty display message
    this.messages.push({ text: this.sanitize(''), isUser: false });
    const msgIdx = this.messages.length - 1;
    const histIdx = this.chatHistory.length - 1;

    this.chatService.streamMessages(userMsg, this.chatHistory)
      .subscribe({
        next: chunk => {
          // Accumulate raw chunk
          this.chatHistory[histIdx].content += chunk;
          // Format entire raw content each time
          const formatted = this.formatMessage(this.chatHistory[histIdx].content);
          this.messages[msgIdx].text = this.sanitize(formatted);
          this.scrollToBottom();
        },
        error: err => {
          console.error(err);
          this.messages.push({
            text: this.sanitize('Error en la solicitud.'),
            isUser: false
          });
          this.finalize();
        },
        complete: () => this.finalize()
      });
  }

  private finalize() {
    this.loading = false;
    this.typingIndicator = false;
    this.saveChatHistory();
  }

  /** Escape HTML chars in code blocks */
  private escapeHtml(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /**
   * Apply Markdown-like formatting:
   * - Extract and escape ```xml```/```json``` blocks
   * - Bold **text**, headings, lists, links
   * - Convert single \n → <br/>
   */
  private formatMessage(raw: string): string {
    let text = raw.replace(/\r\n?/g, '\n');

    // 1) extract code blocks
    const blocks: { ph: string; html: string }[] = [];
    text = text.replace(/```(xml|json)\n([\s\S]*?)```/g,
      (_, lang, inner) => {
        const esc = this.escapeHtml(inner);
        const html = `<div class="${lang}-code"><code>${esc}</code>` +
                     `<button class="copy-button">Copiar</button></div>`;
        const ph = `@@BLK${blocks.length}@@`;
        blocks.push({ ph, html });
        return ph;
      }
    );

    // 2) bold **
    text = text.replace(/\*\*([\s\S]+?)\*\*/g, '<strong>$1</strong>');

    // 3) headings
    text = text
      .replace(/^######\s*(.+)$/gm, '<h6>$1</h6>')
      .replace(/^#####\s*(.+)$/gm, '<h5>$1</h5>')
      .replace(/^####\s*(.+)$/gm, '<h4>$1</h4>')
      .replace(/^###\s*(.+)$/gm, '<h3>$1</h3>')
      .replace(/^##\s*(.+)$/gm, '<h2>$1</h2>')
      .replace(/^#\s*(.+)$/gm, '<h1>$1</h1>');

    // 4) lists
    text = text.replace(/^\-\s+(.+)$/gm, '<li>$1</li>');
    text = text.replace(
      /(<li>[\s\S]+?<\/li>)(\s*<li>[\s\S]+?<\/li>)+/g,
      m => `<ul>${m.replace(/<\/li>\s*<li>/g,'</li><li>')}</ul>`
    );

    // 5) links
    text = text.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank">$1</a>'
    );

    // 6) single-line breaks
    text = text.replace(/\n/g, '<br/>');

    // 7) restore code blocks
    for (const b of blocks) {
      text = text.replace(b.ph, b.html);
    }
    return text;
  }

  /** Handle copy button clicks */
  @HostListener('click', ['$event'])
  onHostClick(e: MouseEvent) {
    const btn = (e.target as HTMLElement).closest('.copy-button') as HTMLElement;
    if (!btn) return;
    e.stopPropagation();
    e.preventDefault();
    const code = btn.parentElement?.querySelector('code');
    if (!code) return;
    navigator.clipboard.writeText(code.textContent || '').then(() => {
      btn.textContent = 'Copiado';
      setTimeout(() => (btn.textContent = 'Copiar'), 2000);
    });
  }

  /** Mark HTML safe for innerHTML */
  private sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  private scrollToBottom() {
    const c = document.querySelector('.chat-messages');
    if (c) (c as HTMLElement).scrollTop = c.scrollHeight;
  }
}
