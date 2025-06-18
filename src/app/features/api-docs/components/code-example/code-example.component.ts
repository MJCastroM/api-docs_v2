import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-markup.js';  
import 'prismjs/components/prism-json.min.js';    // JSON highlighter

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.scss']
})
export class CodeExampleComponent implements OnInit, OnChanges {
  /** Las dos secciones que iteramos en el template */
  readonly sections: Array<'invocation' | 'response'> = ['invocation', 'response'];

  @Input() examples!: {
    invocation: { xml: string; json: string };
    response:   { xml: string; json: string };
  };

  /** Vista activa por sección */
  view: {
    invocation: 'xml' | 'json';
    response:   'xml' | 'json';
  } = {
    invocation: 'xml',
    response:   'xml'
  };

  /** Código resaltado por sección y por tipo */
  highlightedCode: {
    invocation: { xml: string; json: string };
    response:   { xml: string; json: string };
  } = {
    invocation: { xml: '', json: '' },
    response:   { xml: '', json: '' }
  };

  ngOnInit() {
    this.updateHighlight();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['examples'] && !changes['examples'].isFirstChange()) {
      this.updateHighlight();
    }
  }

  /**
   * Cambia la vista (xml/json) de la sección indicada
   */
  switchView(
    section: 'invocation' | 'response',
    newView: 'xml' | 'json'
  ) {
    this.view[section] = newView;
    // volvemos a generar el resaltado por si cambió el contenido
    this.updateHighlight();
  }

  /**
   * Copia al portapapeles el código crudo de la sección/vista actual
   */
  copyCode(section: 'invocation' | 'response') {
    const text = this.examples[section][this.view[section]];
    navigator.clipboard.writeText(text);
  }

  /**
   * Recorre ambas secciones y actualiza el highlightedCode usando Prism.
   */
  private updateHighlight() {
    for (const section of this.sections) {
      const data = this.examples[section];
      // XML con el lenguaje "markup"
      this.highlightedCode[section].xml = Prism.highlight(
        data.xml,
        Prism.languages['markup'],
        'xml'
      );
      // JSON con el lenguaje "json"
      this.highlightedCode[section].json = Prism.highlight(
        data.json,
        Prism.languages['json'],
        'json'
      );
    }
  }
}
