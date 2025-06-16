import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-markup.js';  
import 'prismjs/components/prism-json.min.js';    // XML/HTML
// NO importas prism-json

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.scss']
})
export class CodeExampleComponent implements OnInit, OnChanges {
  @Input() examples!: { invocation: { xml: string; json: string } };

  view: 'xml' | 'json' = 'xml';
  highlightedCode: Record<'xml' | 'json', string> = { xml: '', json: '' };

  ngOnInit() {
    this.updateHighlight();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['examples'] && !changes['examples'].isFirstChange()) {
      this.updateHighlight();
    }
  }

  switchView(newView: 'xml' | 'json') {
    this.view = newView;
    this.updateHighlight();
  }

  private updateHighlight() {
    const inv = this.examples.invocation;

    // XML usa markup
    this.highlightedCode.xml = Prism.highlight(
      inv.xml,
      Prism.languages['markup'],
      'xml'
    );

    // JSON lo tratamos como JS
    this.highlightedCode.json = Prism.highlight(
      inv.json,
      Prism.languages['json'],
      'json'
    );
  }

  copyCode() {
    navigator.clipboard.writeText(this.examples.invocation[this.view]);
  }
  
}
