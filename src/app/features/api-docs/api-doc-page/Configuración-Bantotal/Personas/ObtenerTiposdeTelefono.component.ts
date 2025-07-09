import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTiposdeTelefono',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTiposdeTelefonoComponent1751987196637 {
  pageTitle        = 'Obtener Tipos de Telefono';
  description      = `Método para obtener un listado de los tipos de teléfono ingresados en Bantotal.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerTiposDeTelefono';
  programa   = 'RBTPG217';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtTiposTelefono', Tipo: '[sBTTipoTelefono](#sbttipotelefono)', Comentarios: 'Listado de tipos de teléfono.' }];
  errors     = [{ Código: '30011', Descripción: 'No existen tipos de teléfono ingresados en el sistema.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerTiposDeTelefono>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>ccbe8f2e2434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerTiposDeTelefono>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerTiposDeTelefono\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerTiposDeTelefonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ccbe8f2e2434</Token>
         </Btinreq>
         <sdtTiposTelefono>
            <sBTTipoTelefono>
               <descripcion>Telefono Fijo</descripcion>
               <identificador>1</identificador>
            </sBTTipoTelefono>
            <sBTTipoTelefono>
               <descripcion>Celular</descripcion>
               <identificador>2</identificador>
            </sBTTipoTelefono>
            <sBTTipoTelefono>
               <descripcion>Telefono de trabajo</descripcion>
               <identificador>3</identificador>
            </sBTTipoTelefono>
         </sdtTiposTelefono>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8514</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerTiposDeTelefono</Servicio>
            <Fecha>2019-05-09</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:43:07</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerTiposDeTelefonoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"sdtTiposTelefono": {
		"sBTTipoTelefono": [
			{
         "descripcion": "Telefono Fijo",
         "identificador": "1"
			},
			{
         "descripcion": "Celular",
         "identificador": "2"
			},
			{
         "descripcion": "Telefono de trabajo",
         "identificador": "3"
			}
		]
	},
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": 8396,
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerTiposDeTelefono",
      "Requerimiento": "1",
      "Fecha": "2019-05-07",
      "Hora": "15:54:44",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTTipoTelefono', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de tipo de teléfono.' }, { Nombre: 'identificador', Tipo: 'Long', Comentarios: 'Identificador de tipo de teléfono.' }] }];
}
