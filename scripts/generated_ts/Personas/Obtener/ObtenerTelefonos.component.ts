import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTelefonos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTelefonosComponent1750446218793 {
  pageTitle        = 'Obtener Teléfonos';
  description      = `Método para obtener los teléfonos de una persona.`;
  pubName    = 'BTPersonas.ObtenerTelefonos';
  programa   = 'RBTPG484';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  outputData = [{ Nombre: 'sdtTelefonos', Tipo: '[sBTTelefono](#sbttelefono)', Comentarios: 'Listado de Teléfonos.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de persona.' }, { Codigo: '30013', Descripcion: 'No existe registro para el identificador único.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerTelefonos>
         <bts:Btinreq>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>A088577A8D1E89A20E6EF27D</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>189</bts:personaUId>
      </bts:BTPersonas.ObtenerTelefonos>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerTelefonos\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"personaUId": "189",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerTelefonosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>A088577A8D1E89A20E6EF27D</Token>
         </Btinreq>
         <sdtTelefonos>
            <sBTTelefono>
               <telefono>23786543</telefono>
               <tipoDeDomicilioId>1</tipoDeDomicilioId>
               <identificador>1</identificador>
               <tipoDeDomicilio>Residencia</tipoDeDomicilio>
            </sBTTelefono>
            <sBTTelefono>
               <telefono>096154763</telefono>
               <tipoDeDomicilioId>1</tipoDeDomicilioId>
               <identificador>2</identificador>
               <tipoDeDomicilio>Residencia</tipoDeDomicilio>
            </sBTTelefono>
         </sdtTelefonos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10341</Numero>
            <Servicio>BTPersonas.ObtenerTelefonos</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-05</Fecha>
            <Hora>12:21:52</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerTelefonosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "fa2c02c95a4A8B5C60A82434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtTelefonos": {
      "sBTTelefono": [
      {
         "telefono": "23786543",
         "tipoDeDomicilioId": "1",
         "identificador": "1",
         "tipoDeDomicilio": "Residencia"
      },
      {
          "telefono": "096154763",
         "tipoDeDomicilioId": "1",
         "identificador": "2",
         "tipoDeDomicilio": "Residencia"
      }
      ]
   },
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPersonas.ObtenerTelefonos",
      "Requerimiento": "1",
      "Fecha": "2023-05-05",
      "Canal": "BTDIGITAL",
      "Hora": "12:21:52"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTTelefono', fields: [{ Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador del tipo de teléfono.' }, { Nombre: 'telefono', Tipo: 'String', Comentarios: 'Número de teléfono.' }, { Nombre: 'tipoDeDomicilio', Tipo: 'String', Comentarios: 'Nombre del tipo de domicilio.' }, { Nombre: 'tipoDeDomicilioId', Tipo: 'Byte', Comentarios: 'Identificador del tipo de domicilio.' }] }];
}
