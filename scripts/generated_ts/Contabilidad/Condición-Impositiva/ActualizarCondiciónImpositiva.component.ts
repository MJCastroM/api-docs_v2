import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ActualizarCondicinImpositiva',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarCondicionImpositivaComponent {
  // Cabecera e info-card
  pageTitle = 'Actualizar Condicion Impositiva';
  description = `Metodo para actualizar una condicion impositiva para una persona.`;
  pubName    = 'BTContabilidad.ActualizarCondicionImpositiva';
  programa   = 'RBTPG288';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['personaUId', 'codigoImpuesto', 'codigoCondicion'];
  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'codigoImpuesto', Tipo: 'Short', Comentarios: 'Codigo de impuesto.' }, { Nombre: 'codigoCondicion', Tipo: 'Short', Comentarios: 'Codigo de condicion.' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de persona.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.ActualizarCondicionImpositiva>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>761768101CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>10003</bts:personaUId>
         <bts:codigoImpuesto>1</bts:codigoImpuesto>
         <bts:codigoCondicion>2</bts:codigoCondicion>
      </bts:BTContabilidad.ActualizarCondicionImpositiva>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ActualizarCondicionImpositiva=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \
  -d '{
  	"Btinreq": {
		"Device": "GP",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "2081397563CD285A89A23FBE"
	},
	"personaUId": 10003,
	"codigoImpuesto": 1,
	"codigoCondicion": 2
  }'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.ActualizarCondicionImpositivaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>761768101CD285A89A23FBEE</Token>
            <Device>GP</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTContabilidad.ActualizarCondicionImpositiva</Servicio>
            <Fecha>2021-02-05</Fecha>
            <Hora>13:37:57</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7984</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTContabilidad.ActualizarCondicionImpositivaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "INSTALADOR",
	  "Token": "761768101CD285A89A23FBEE",
	  "Device": "GP"
	},
	"Erroresnegocio": {
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTContabilidad.ActualizarCondicionImpositiva",
	  "Fecha": "2021-02-05",
	  "Hora": "13:37:57",
	  "Requerimiento": "1",
	  "Numero": "7984",
	  "Estado": "OK"
	}
}` } };

  // Datos estructurados
  structuredTypes = [];
}
