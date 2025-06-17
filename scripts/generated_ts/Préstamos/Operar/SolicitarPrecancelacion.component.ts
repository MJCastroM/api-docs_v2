import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-SolicitarPrecancelacion',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SolicitarPrecancelacionComponent {
  pageTitle = 'Solicitar Precancelacion';
  description = `Metodo para solicitar la precancelacion de un prestamo.`;
  pubName    = 'BTPrestamos.SolicitarPrecancelacion';
  programa   = 'RBTPG572';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico del cliente.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor del prestamo.' }, { Nombre: 'tipoPrecancelacion', Tipo: 'String', Comentarios: 'Tipo de precancelacion. Se pueden enviar los siguientes [valores](#valores1).' }, { Nombre: 'prepagoManual', Tipo: 'String', Comentarios: '¿El prepago es manual? (S = Si / N = No).' }, { Nombre: 'tipoReduccion', Tipo: 'String', Comentarios: 'Tipo de reduccion. Se pueden enviar los siguientes [valores](#valores2).' }, { Nombre: 'modalidadIntereses', Tipo: 'String', Comentarios: 'Modalidad de intereses. Se pueden enviar los siguientes [valores](#valores3).' }, { Nombre: 'motivoPrecancelacion', Tipo: 'Byte', Comentarios: 'Identificador del motivo de precancelacion.' }];
  outputData = [{ Nombre: 'numeroLote', Tipo: 'int', Comentarios: 'Numero de lote.' }, { Nombre: 'logPrecancelacion', Tipo: 'int', Comentarios: 'Identificador del log de precancelacion.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador unico de operacion de prestamo.' }, { Codigo: '30002', Descripcion: 'No se recupero la operacion para el Identificador: [Numero de identificador].' }, { Codigo: '30003', Descripcion: 'Debe ingresar importe.' }, { Codigo: '30006', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30007', Descripcion: 'No se recupero la cuenta para el Identificador de cliente: [Numero de identificador].' }, { Codigo: '30008', Descripcion: 'El prestamo no pertenece al cliente.' }, { Codigo: '30010', Descripcion: 'No se ingreso el tipo de precancelacion.' }, { Codigo: '30011', Descripcion: 'El valor del campo tipoPrecancelacion tiene que ser P o T.' }, { Codigo: '30012', Descripcion: 'No se ingreso si es pre pago manual.' }, { Codigo: '30013', Descripcion: 'El valor del campo prepagoManual tiene que ser S o N.' }, { Codigo: '30014', Descripcion: 'No se ingreso el tipo de reduccion.' }, { Codigo: '30015', Descripcion: 'El valor del campo tipoReduccion tiene que ser P o C.' }, { Codigo: '30016', Descripcion: 'No se ingreso la modalidad de intereses.' }, { Codigo: '30017', Descripcion: 'El valor del campo modalidadIntereses tiene que ser CP o SP.' }, { Codigo: '30018', Descripcion: 'No se ingreso el motivo de la precancelacion.' }, { Codigo: '30019', Descripcion: 'No se ingreso la fecha valor.' }, { Codigo: '40001', Descripcion: 'El identificador de motivo de precancelacion no esta registrado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SolicitarPrecancelacion=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
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
  }'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
</SOAP-ENV:Envelope>`,  json: `'{
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
}'` }
  };

  structuredTypes = [];
}
