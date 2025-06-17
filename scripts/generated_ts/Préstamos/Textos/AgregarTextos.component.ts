import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-AgregarTextos',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarTextosComponent {
  pageTitle = 'Agregar Textos';
  description = `Metodo para agregar textos de un prestamo.`;
  pubName    = 'BTPrestamos.AgregarTextos';
  programa   = 'RBTPG562';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion.' }, { Nombre: 'sdtTextos', Tipo: '[sBTTextoOperacion](#sbttextooperacion)', Comentarios: 'Listado de textos de la operacion.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo "INS" para este metodo].' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de la operacion.' }, { Codigo: '30011', Descripcion: 'No se recupero la operacion para el identificador recibido.' }, { Codigo: '40001', Descripcion: 'No existe texto para el codigo [Numero de identificador].' }, { Codigo: '40002', Descripcion: 'No se ingreso el codigo del texto.' }, { Codigo: '40003', Descripcion: 'No se ingreso el reglon del texto.' }, { Codigo: '40004', Descripcion: 'No se ingreso el texto.' }, { Codigo: '40005', Descripcion: 'El codigo [Numero del codigo] y renglon [Numero del renglon] ya tiene texto ingresado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.AgregarTextos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>0E93EA2F1B3F9ED212A0449F</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>49</bts:operacionUId>
         <bts:sdtTextos>
            <bts:sBTTextoOperacion>
               <texto>Prueba1</texto>
               <renglon>3</renglon>
               <descripcion>NOMBRE DE CURSO</descripcion>
               <codigo>8</codigo>
            </bts:sBTTextoOperacion>
            <bts:sBTTextoOperacion>
               <texto>Prueba2</texto>
               <renglon>4</renglon>
               <descripcion>NOMBRE DE CURSO</descripcion>
               <codigo>8</codigo>
            </bts:sBTTextoOperacion>
         </bts:sdtTextos>
      </bts:BTPrestamos.AgregarTextos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?AgregarTextos=' \
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
      "operacionUId": 49,
      "sdtTextos": {
         "sBTTextoOperacion": [
         {
            "texto": "Prueba1",
            "renglon": 3,
            "descripcion": "NOMBRE DE CURSO",
            "codigo": 8
         },
         {
            "texto": "Prueba2",
            "renglon": 4,
            "descripcion": "NOMBRE DE CURSO",
            "codigo": 8
         }
         ]
      }
  }'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.AgregarTextosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>0E93EA2F1B3F9ED212A0449F</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-09</Fecha>
            <Hora>10:29:05</Hora>
            <Numero>24965</Numero>
            <Servicio>BTPrestamos.AgregarTextos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.AgregarTextosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTPrestamos.AgregarTextos",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTTextoOperacion', fields: [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Codigo.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion.' }, { Nombre: 'renglon', Tipo: 'Short', Comentarios: 'Renglon.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }] }];
}
