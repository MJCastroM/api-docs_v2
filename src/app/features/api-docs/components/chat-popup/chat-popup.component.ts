/*
  chat-popup.component.ts
*/
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from '../../../../core/services/chat.service';
import { trigger, transition, style, animate } from '@angular/animations';

interface Message { text: string; isUser: boolean; }
interface ChatEntry { role: string; content: string; }

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
  showChat = false;
  inputMessage = '';
  messages: Message[] = [];
  loading = false;
  typingIndicator = false;
  chatHistory: ChatEntry[] = [];

  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.loadChatHistory();
    if (!this.messages.length) {
      this.clearChatHistory();
    }
  }

  ngAfterViewInit(): void {
    const container = document.querySelector('.chat-messages');
    if (container) {
      new MutationObserver(() => this.scrollToBottom())
        .observe(container, { childList: true });
    }
  }

  toggleChat(): void {
    this.showChat = !this.showChat;
    if (this.showChat) {
      setTimeout(() => this.inputRef.nativeElement.focus(), 0);
    }
  }

  clearChatHistory(): void {
    this.messages = [{ text: '¡Hola!, ¿En qué puedo ayudarte?', isUser: false }];
    this.chatHistory = [];
    localStorage.removeItem('messages');
    localStorage.removeItem('chatHistory');
    localStorage.removeItem('chatSessionId');
    // iniciar nueva sesión
    this.chatService.iniciarSesion()
      .then(() => {
        // sesión iniciada
      })
      .catch(err => console.error('Error iniciando sesión:', err));
  }

  loadChatHistory(): void {
    const savedMsgs = localStorage.getItem('messages');
    const savedHist = localStorage.getItem('chatHistory');
    if (savedMsgs) this.messages = JSON.parse(savedMsgs);
    if (savedHist) this.chatHistory = JSON.parse(savedHist);
  }

  saveChatHistory(): void {
    localStorage.setItem('messages', JSON.stringify(this.messages));
    localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory));
  }

  sendMessage(): void {
    const text = this.inputMessage.trim();
    if (!text) return;

    this.messages.push({ text, isUser: true });
    this.chatHistory.push({ role: 'user', content: text });
    this.inputMessage = '';
    this.showLoader();
    this.typingIndicator = true;

    const sessionId = localStorage.getItem('chatSessionId');
    if (!sessionId) {
      this.chatService.iniciarSesion()
        .then(() => this.proceedChat(text))
        .catch(err => {
          console.error(err);
          this.messages.push({ text: 'Error iniciando sesión.', isUser: false });
          this.hideLoader();
        });
    } else {
      this.proceedChat(text);
    }
  }

  private proceedChat(text: string): void {
    this.chatHistory.push({ role: 'assistant', content: '' });
    this.messages.push({ text: '', isUser: false });
    const msgIdx = this.messages.length - 1;
    const histIdx = this.chatHistory.length - 1;

    this.chatService.streamMessages(text, this.chatHistory)
      .subscribe({
        next: chunk => {
          this.chatHistory[histIdx].content += chunk;
          this.messages[msgIdx].text = this.chatHistory[histIdx].content;
          this.scrollToBottom();
        },
        error: err => {
          console.error(err);
          this.messages.push({ text: 'Error en la solicitud.', isUser: false });
          this.finalizeResponse();
        },
        complete: () => this.finalizeResponse()
      });
  }

  private finalizeResponse(): void {
    this.typingIndicator = false;
    this.hideLoader();
    this.saveChatHistory();
  }

  private showLoader(): void { this.loading = true; }
  private hideLoader(): void { this.loading = false; }
  private scrollToBottom(): void {
    const c = document.querySelector('.chat-messages');
    if (c) c.scrollTop = (c as HTMLElement).scrollHeight;
  }
}
