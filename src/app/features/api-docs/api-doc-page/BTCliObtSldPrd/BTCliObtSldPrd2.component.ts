import { Component } from '@angular/core';
import { fadeInOut }  from '../../../../route-animations';

@Component({
  selector: 'app-BTCliObtSldPrd2',
  templateUrl: './BTCliObtSldPrd.component.html',
  styleUrls: ['./BTCliObtSldPrd.component.scss'],
  animations: [ fadeInOut ],
  // Esto enlaza el trigger al host, para que el enter/leave funcione
  host: { '[@fadeInOut]': '' }
})
export class BTCliObtSldPrdComp2 {
  // Cabecera e info‐card
  pageTitle = 'Obtener Saldos de Otros Productos2';
  description = 'Método para obtener los saldos de los productos de un cliente.';
  pubName     = 'BTClientes.ObtenerSaldosProducto';
  programa    = 'RBTPG260';
  scope       = 'Global';

  // Backend config
  hasBackendConfig = true;
  backendText = 'Esto es un ejemplo de configuración backend:'
  //opcional
  backendConfig = [
    { campo: 'Correlativo 1',    valor: '1000' },
    { campo: 'Correlativo 2',    valor: 'Valor del segundo parámetro' },
    { campo: 'Id de Módulo',     valor: 'Identificador del módulo a incluir' }
  ];

  // Pestañas de Input/Output/Errors
  // si no aplica, mandar colecciones vacias
  inputCols  = ['Nombre', 'Tipo', 'Comentarios'];
  inputData  = [
    { Nombre: 'cuentaUId', Tipo: 'Long', Comentarios: 'ID único de cliente' },
    { Nombre: 'correlativo', Tipo: 'Long', Comentarios: 'Correlativo guía' }
  ];

  outputCols = ['Nombre', 'Tipo', 'Comentarios'];
  outputData = [
    { Nombre: 'sdtSaldosProducto', Tipo: 'sBTSaldoProducto', Comentarios: 'Listado de productos' }
  ];

  errorCols  = ['Código', 'Descripción'];
  errors     = [
    { Código: '30001', Descripción: 'No se recibió el identificador de cliente' },
    { Código: '30002', Descripción: 'No se recuperó la cuenta' }
  ];

  // Ejemplos de invocación / respuesta
  examples = {
    invocation: {
      xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"?>
  <soapenv:Body>
    <BTClientes.ObtenerSaldosProducto>
      <cuentaUId>12345</cuentaUId>
      <correlativo>6789</correlativo>
    </BTClientes.ObtenerSaldosProducto>
  </soapenv:Body>
</soapenv:Envelope>`,
      json: `{
  "BTClientes.ObtenerSaldosProducto": {
    "cuentaUId": 12345,
    "correlativo": 6789
  }
}`
    }
  };

  // Datos estructurados
  structuredTypes = [
    { Nombre: 'estado',     Tipo: 'String', Comentarios: 'Descripción de estado' },
    { Nombre: 'fechaValor', Tipo: 'Date',   Comentarios: 'Fecha de alta del saldo' },
    { Nombre: 'saldo',      Tipo: 'Decimal',Comentarios: 'Valor numérico del saldo' }
  ];
}
