import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-EliminarInformacionAdicional',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class EliminarInformacionAdicionalComponent1750446218749 {
  pageTitle        = 'Eliminar Información Adicional';
  description      = `Método para eliminar la información adicional de una persona.`;
  pubName    = 'BTPersonas.EliminarInformacionAdicional';
  programa   = 'RBTPG517';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'sdtInformacionAdicional', Tipo: '[sBTDatoLista](#sbtdatolista)', Comentarios: 'Listado de datos.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'DLT\' para este método].' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de persona.' }, { Codigo: '40001', Descripcion: 'La persona ingresada no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.EliminarInformacionAdicional>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>e2db881814CD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>12217</bts:personaUId>
         <bts:sdtInformacionAdicional>
            <bts:sBTDatoLista>
               <bts:clave>SCORE</bts:clave>
               <bts:valor></bts:valor>
            </bts:sBTDatoLista>
         </bts:sdtInformacionAdicional>
      </bts:BTPersonas.EliminarInformacionAdicional>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?EliminarInformacionAdicional\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "INSTALADOR",
	  "Token": "e2db881814CD285A89A23FBE",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"personaUId": 12217,
        "sdtInformacionAdicional": {
          "sBTDatoLista": {
            "clave": "SCORE",
            "valor": ""
          }
        }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.EliminarInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>e2db881814CD285A89A23FBE</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>589696</Numero>
            <Servicio>BTPersonas.EliminarInformacionAdicional</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-10</Fecha>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>17:40:47</Hora>
         </Btoutreq>
      </BTPersonas.EliminarInformacionAdicionalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{ 
   "Btinreq": { 
      "Device": "1", 
      "Usuario": "MINSTALADOR", 
      "Token": "16c1cFC33CD93505A5382434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 

   "Btoutreq": { 
      "Numero": "111399", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.EliminarInformacionAdicional", 
      "Requerimiento": "1", 
      "Fecha": "2023-10-10", 
      "Canal": "BTDIGITAL", 
      "Hora": "12:21:52" 
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatoLista', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de información adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de información adicional.' }] }];
}
