import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-BloquearSaldo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class BloquearSaldoComponent1751987197262 {
  pageTitle        = 'Bloquear Saldo';
  description      = `Método para realizar un bloqueo de saldo.`;
  pubName    = 'BTCuentasVista.BloquearSaldo';
  programa   = 'RBTPG090';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'importe', Tipo: 'Long', Comentarios: 'Importe a bloquear.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha vencimiento de bloqueo.' }, { Nombre: 'motivo', Tipo: 'String', Comentarios: 'Motivo del bloqueo.' }];
  outputData = [{ Nombre: 'idBloqueo', Tipo: 'Long', Comentarios: 'Identificador de bloqueo.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo disponible de la operación.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de la Operación a bloquear.' }, { Código: '30002', Descripción: 'No se encontró el Id de Operación para la Cuenta Vista a bloquear.' }, { Código: '30003', Descripción: 'No se recibió el identificador del Cliente.' }, { Código: '30004', Descripción: 'No se encontró el Id del Cliente.' }, { Código: '30005', Descripción: 'La Cuenta Vista a bloquear no pertenece al Cliente.' }, { Código: '30100', Descripción: 'Error en la contabilización.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.BloquearSaldo>
         <bts:Btinreq>
            <bts:Device>3</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>3</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b1848faff14A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>3</bts:operacionUId>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:importe>5</bts:importe>
         <bts:fechaVencimiento>2018-05-14</bts:fechaVencimiento>
         <bts:motivo>Motivo Bloqueo 01</bts:motivo>
      </bts:BTCuentasVista.BloquearSaldo>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.BloquearSaldoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>3</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>3</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b1848faff14A8B5C60A82434</Token>
         </Btinreq>
         <idBloqueo>18</idBloqueo>
         <movimientoUId>4</movimientoUId>
         <saldo>4924.0</saldo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>194</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.BloquearSaldo</Servicio>
            <Fecha>2018-05-08</Fecha>
            <Requerimiento>3</Requerimiento>
            <Hora>14:59:44</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.BloquearSaldoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
` }
  };

  structuredTypes = [];
}
