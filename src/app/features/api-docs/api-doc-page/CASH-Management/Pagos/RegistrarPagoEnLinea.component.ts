import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-RegistrarPagoEnLinea',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class RegistrarPagoEnLineaComponent1750258524723 {
  pageTitle        = 'Registrar Pago en Linea';
  description      = `Método para registrar el pago de una deuda en línea, realizado mediante canal externo.`;
  pubName          = 'Registrar Pago en Linea';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'contrato', Tipo: 'Short', Comentarios: 'Identificador del contrato.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Servicio CASH.' }, { Nombre: 'deuda', Tipo: 'String', Comentarios: 'Identificador de la deuda.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Identificador de la moneda.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }];
  outputData = [{ Nombre: 'transaccionId', Tipo: 'Long', Comentarios: 'Identificador de transacción.' }, { Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de la orden.' }, { Nombre: 'nroLineaOrden', Tipo: 'Int', Comentarios: 'Número de línea de orden CASH.' }];
  errors     = [{ Codigo: '1030614', Descripcion: 'Canal no habilitado para el servicio.' }, { Codigo: '1030615', Descripcion: 'Canal no habilitado para el contrato.' }, { Codigo: '1030618', Descripcion: 'El importe debe ser mayor a cero.' }, { Codigo: '1030619', Descripcion: 'Código de Moneda desconocido.' }, { Codigo: '1030701', Descripcion: 'El Servicio no existe.' }, { Codigo: '1030704', Descripcion: 'Id de contrato cliente desconocido.' }, { Codigo: '1030706', Descripcion: 'El contrato no esta activo.' }, { Codigo: '1030761', Descripcion: 'No se obtuvo Canal CASH para el canal que invoca.' }, { Codigo: '1030762', Descripcion: 'El servicio no es de recaudos.' }, { Codigo: '1030763', Descripcion: 'Debe indicar el identificador de la deuda.' }, { Codigo: '1030764', Descripcion: 'El servicio no es en linea, no se crea el cobro.' }, { Codigo: '1030765', Descripcion: 'La moneda del pago difiere con la del convenio.' }, { Codigo: '1030766', Descripcion: 'No se pudo dar de alta la orden.' }, { Codigo: '1039999', Descripcion: 'No se determino módulo/transacción en la regla: [Número de regla].' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.RegistrarPagoEnLinea>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>54878527AF5867CA94C680B0</bts:Token>
         </bts:Btinreq>
         <bts:contrato>8</bts:contrato>
         <bts:servicio>240</bts:servicio>
         <bts:deuda>4</bts:deuda>
         <bts:moneda>0</bts:moneda>
         <bts:importe>543</bts:importe>
      </bts:BTCASHManagement.RegistrarPagoEnLinea>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?RegistrarPagoEnLinea=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "contrato": 8,
    "servicio": 240,
    "deuda": 4,
    "moneda": 0,
    "importe": 543
  }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.RegistrarPagoEnLineaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>BANTOTAL</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>E362E52FED059AA3BF86A6E3</Token>
         </Btinreq>
         <transaccionId>124</transaccionId>
         <ordenId>532</ordenId>
         <nroLineaOrden>4</nroLineaOrden>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-08</Fecha>
            <Hora>12:27:14</Hora>
            <Numero>742</Numero>
            <Servicio>BTCASHManagement.RegistrarPagoEnLinea</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.RegistrarPagoEnLineaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "transaccionId": 124,
    "ordenId": 532,
    "nroLineaOrden": 4,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.RegistrarPagoEnLinea",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
