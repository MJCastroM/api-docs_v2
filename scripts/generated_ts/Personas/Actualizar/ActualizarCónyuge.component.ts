import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ActualizarCnyuge',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarConyugeComponent {
  pageTitle = 'Actualizar Conyuge';
  description = `Metodo para actualizar el conyuge de una persona.`;
  pubName    = 'BTPersonas.ActualizarConyuge';
  programa   = 'RBTPG372';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'conyugeUId', Tipo: 'Long', Comentarios: 'Identificador unico del conyuge de la persona.' }, { Nombre: 'estadoCivilId', Tipo: 'String', Comentarios: 'Identificador del estado civil de la persona.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de persona.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador del conyuge de la persona.' }, { Codigo: '31003', Descripcion: 'No existe registro para el identificador unico.' }, { Codigo: '32003', Descripcion: 'Error en identificador del conyuge de la persona: No existe registro para el identificador unico.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ActualizarConyuge>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>101560665CD285A89A23FBEE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>1</bts:personaUId>
         <bts:conyugeUId>3</bts:conyugeUId>
         <bts:estadoCivilId>2</bts:estadoCivilId>
      </bts:BTPersonas.ActualizarConyuge>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ActualizarConyuge' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "GP",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"personaUId": "1",
	"conyugeUId": "3",
	"estadoCivilId" : "2"
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ActualizarConyugeResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>101560665CD285A89A23FBEE</Token>
            <Device>MC</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ActualizarConyugeResponse</Servicio>
            <Fecha>2021-11-08</Fecha>
            <Hora>15:41:46</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8673</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ActualizarConyugeResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{ 
    "Btinreq": { 
	    "Device": "GP", 
	    "Usuario": "MINSTALADOR", 
	    "Token": "16c1cc9b534A8B5C60A82434", 
	    "Canal": "BTDIGITAL", 
	    "Requerimiento": "1" 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPersonas.ActualizarConyugeResponse", 
        "Fecha": "2021-10-28", 
        "Hora": "15:39:53", 
        "Requerimiento": "1", 
        "Numero": "11003", 
        "Estado": "OK" 
    }
}'` }
  };

  structuredTypes = [];
}
