import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ActualizarCorreoElectrnico',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarCorreoElectronicoComponent {
  // Cabecera e info-card
  pageTitle = 'Actualizar Correo Electronico';
  description = `Metodo para actualizar el correo electronico de una persona.`;
  pubName    = 'BTPersonas.ActualizarCorreoElectronico';
  programa   = 'RBTPG023';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['personaUId', 'sdtCorreoElectronico'];
  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'sdtCorreoElectronico', Tipo: '[sBTCorreoElectronico](#sbtcorreoelectronico)', Comentarios: 'Datos de correo electronico.' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '40015'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '40015', Descripcion: 'El registro no existe.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ActualizarCorreoElectronico>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>41</bts:personaUId>
         <bts:sdtCorreoElectronico>            
            <bts:correoElectronico>CD@GMAIL.COM</bts:correoElectronico>
            <bts:correlativo>1</bts:correlativo>
         </bts:sdtCorreoElectronico>
      </bts:BTPersonas.ActualizarCorreoElectronico>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarCorreoElectronico=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9109670d-2d57-ee79-7754-63220119f31a' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "PersonaUId": 41,
    "sdtCorreoElectronico": {
        "correoElectronico": "avs@gmail.com",
        "correlativo": 1
    }
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ActualizarCorreoElectronicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>814</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ActualizarCorreoElectronico</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>18:30:42</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ActualizarCorreoElectronicoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "815",
      "Estado": "OK",
      "Servicio": "BTPersonas.ActualizarCorreoElectronico",
      "Fecha": "2017-12-17",
      "Requerimiento": "",
      "Hora": "18:34:28",
      "Canal": "BTDIGITAL"
   }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'correlativo', Tipo: 'Int', Comentarios: 'Correlativo de correo electronico.' }, { Nombre: 'correoElectronico', Tipo: 'String', Comentarios: 'Correo electronico.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
