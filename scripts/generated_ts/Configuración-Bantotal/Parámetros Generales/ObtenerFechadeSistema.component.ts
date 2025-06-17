import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerFechadeSistema',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerFechadeSistemaComponent {
  pageTitle = 'Obtener Fecha de Sistema';
  description = `Metodo para obtener la fecha del sistema.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerFechaDeSistema';
  programa   = 'RBTPG099';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [];
  outputData = [{ Nombre: 'fecha_sistema', Tipo: 'Date', Comentarios: 'Fecha del sistema.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerFechaDeSistema>
         <bts:Btinreq>
            <bts:Device>3</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>3</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>33cb514e804A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerFechaDeSistema>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerFechaDeSistema' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerFechaDeSistemaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>3</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>3</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>33cb514e804A8B5C60A82434</Token>
         </Btinreq>
         <fecha_sistema>2018-05-11</fecha_sistema>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>133</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerFechaDeSistema</Servicio>
            <Requerimiento>3</Requerimiento>
            <Fecha>2018-05-07</Fecha>
            <Hora>12:08:40</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerFechaDeSistemaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "fecha_sistema": "2018-05-11",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "139",
        "Estado": "OK",
        "Servicio": "BTConfiguracionBantotal.ObtenerFechaDeSistema",
        "Requerimiento": "2",
        "Fecha": "2018-05-07",
        "Hora": "12:12:07",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [];
}
