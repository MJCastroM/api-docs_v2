import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDatosPEP',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDatosPEPComponent1750268697413 {
  pageTitle        = 'Obtener Datos PEP';
  description      = `Método para obtener los datos de una persona expuesta políticamente.`;
  pubName    = 'BTPersonas.ObtenerDatosPEP';
  programa   = 'RBTPG229';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  outputData = [{ Nombre: 'esPEP', Tipo: 'String', Comentarios: 'Es persona políticamente expuesta? (S/N).' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de persona.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerDatosPEP>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>110220211247090000683511</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>1</bts:personaUId>
      </bts:BTPersonas.ObtenerDatosPEP>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDatosPEP=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: a0776b33-6711-6c56-044c-42d681d3742f\' \
  -d \'{
  	"Btinreq": {
		"Device": "GP",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "2081397563CD285A89A23FBE"
	},
	"personaUId": 1
  }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerDatosPEPResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>110220211247090000683511</Token>
            <Device>GP</Device>
         </Btinreq>
         <esPEP>S</esPEP>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ObtenerDatosPEP</Servicio>
            <Fecha>2021-02-11</Fecha>
            <Hora>12:48:16</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10595</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ObtenerDatosPEPResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "110220211247090000683511",
	  "Device": "GP"
	},
	"esPEP": "S",
	"Erroresnegocio": {
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTPersonas.ObtenerDatosPEP",
	  "Fecha": "2021-02-11",
	  "Hora": "12:48:16",
	  "Requerimiento": "1",
	  "Numero": "10595",
	  "Estado": "OK"
	}
}` }
  };

  structuredTypes = [{ typeName: 'sBTDatosPEP', fields: [{ Nombre: 'cargoRelacion', Tipo: 'String', Comentarios: 'Cargo que ocupa.' }, { Nombre: 'entidad', Tipo: 'String', Comentarios: 'Entidad.' }, { Nombre: 'fechaInicio', Tipo: 'Date', Comentarios: 'Fecha de inicio.' }, { Nombre: 'fechaSalida', Tipo: 'Date', Comentarios: 'Fecha de salida.' }, { Nombre: 'observacion', Tipo: 'String', Comentarios: 'Observación.' }] }];
}
