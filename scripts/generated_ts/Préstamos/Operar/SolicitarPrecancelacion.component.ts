import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SolicitarPrecancelacion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SolicitarPrecancelacionComponent1751987199696 {
  pageTitle        = 'Solicitar Precancelación';
  description      = `Método para solicitar la precancelación de un préstamo.`;
  pubName    = 'BTPrestamos.SolicitarPrecancelacion';
  programa   = 'RBTPG572';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor del préstamo.' }, { Nombre: 'tipoPrecancelacion', Tipo: 'String', Comentarios: 'Tipo de precancelación. Se pueden enviar los siguientes [valores](#valores1).' }, { Nombre: 'prepagoManual', Tipo: 'String', Comentarios: '¿El prepago es manual? (S = Si / N = No).' }, { Nombre: 'tipoReduccion', Tipo: 'String', Comentarios: 'Tipo de reducción. Se pueden enviar los siguientes [valores](#valores2).' }, { Nombre: 'modalidadIntereses', Tipo: 'String', Comentarios: 'Modalidad de intereses. Se pueden enviar los siguientes [valores](#valores3).' }, { Nombre: 'motivoPrecancelacion', Tipo: 'Byte', Comentarios: 'Identificador del motivo de precancelación.' }];
  outputData = [{ Nombre: 'numeroLote', Tipo: 'int', Comentarios: 'Número de lote.' }, { Nombre: 'logPrecancelacion', Tipo: 'int', Comentarios: 'Identificador del log de precancelación.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador único de operación de préstamo.' }, { Código: '30002', Descripción: 'No se recuperó la operación para el Identificador: [Número de identificador].' }, { Código: '30003', Descripción: 'Debe ingresar importe.' }, { Código: '30006', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30007', Descripción: 'No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].' }, { Código: '30008', Descripción: 'El préstamo no pertenece al cliente.' }, { Código: '30010', Descripción: 'No se ingresó el tipo de precancelación.' }, { Código: '30011', Descripción: 'El valor del campo tipoPrecancelacion tiene que ser P o T.' }, { Código: '30012', Descripción: 'No se ingresó si es pre pago manual.' }, { Código: '30013', Descripción: 'El valor del campo prepagoManual tiene que ser S o N.' }, { Código: '30014', Descripción: 'No se ingresó el tipo de reducción.' }, { Código: '30015', Descripción: 'El valor del campo tipoReduccion tiene que ser P o C.' }, { Código: '30016', Descripción: 'No se ingresó la modalidad de intereses.' }, { Código: '30017', Descripción: 'El valor del campo modalidadIntereses tiene que ser CP o SP.' }, { Código: '30018', Descripción: 'No se ingresó el motivo de la precancelación.' }, { Código: '30019', Descripción: 'No se ingresó la fecha valor.' }, { Código: '40001', Descripción: 'El identificador de motivo de precancelación no está registrado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SolicitarPrecancelacion>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>3D61565504E071EF8B946737</Token>
         </Btinreq>
         <bts:operacionUId>167</bts:operacionUId>
         <bts:clienteUId>5</bts:clienteUId>
         <bts:importe>5000</bts:importe>
         <bts:referencia>Prueba</bts:referencia>
         <bts:fechaValor>2024-09-18</bts:fechaValor>
         <bts:tipoPrecancelacion>P</bts:tipoPrecancelacion>
         <bts:prepagoManual>S</bts:prepagoManual>
         <bts:tipoReduccion>C</bts:tipoReduccion>
         <bts:modalidadIntereses>SP</bts:modalidadIntereses>
         <bts:motivoPrecancelacion>1</bts:motivoPrecancelacion>
      </bts:BTPrestamos.SolicitarPrecancelacion>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SolicitarPrecancelacion=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "GZ",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
      "operacionUId": 167,
      "clienteUId": 5,
      "importe": 5000,
      "referencia": "Prueba",
      "fechaValor": "2024-09-18",
      "tipoPrecancelacion": "P",
      "prepagoManual": "S",
      "tipoReduccion": "C",
      "modalidadIntereses": "SP",
      "motivoPrecancelacion": 1
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SolicitarPrecancelacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>0E93EA2F1B3F9ED212A0449F</Token>
         </Btinreq>
         <numeroLote>23411</numeroLote>
         <logPrecancelacion>22</logPrecancelacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-09</Fecha>
            <Hora>10:29:05</Hora>
            <Numero>24965</Numero>
            <Servicio>BTPrestamos.SolicitarPrecancelacion</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SolicitarPrecancelacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "numeroLote": 23411,
    "logPrecancelacion": 22,
    "Erroresnegocio":,
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTPrestamos.SolicitarPrecancelacion",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
