import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTiposdeTarjeta',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTiposdeTarjetaComponent1750272790988 {
  pageTitle        = 'Obtener Tipos de Tarjeta';
  description      = `Método para obtener un listado de los tipos de tarjeta ingresados en Bantotal.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerTiposTarjeta';
  programa   = 'RBTPG213';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtTipos', Tipo: '[sBTTipoTarjeta](#sbttipotarjeta)', Comentarios: 'Listado de tipos de tarjeta.' }];
  errors     = [{ Codigo: '30011', Descripcion: 'No existen Tipos de tarjeta ingresados en el sistema.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerTiposTarjeta>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>74</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerTiposTarjeta>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerTiposTarjeta\' \
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
      <BTConfiguracionBantotal.ObtenerTiposTarjetaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>74</Token>
         </Btinreq>
         <sdtTipos>
            <sBTTipoTarjeta>
               <descripcion>365 Tradicional Nominada</descripcion>
               <identificador>M</identificador>
            </sBTTipoTarjeta>
            <sBTTipoTarjeta>
               <descripcion>365 Nominada B</descripcion>
               <identificador>N</identificador>
            </sBTTipoTarjeta>
         </sdtTipos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>262</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerTiposTarjeta</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-01-09</Fecha>
            <Hora>14:32:38</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerTiposTarjetaResponse>
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
   "sdtTipos": {
      "sBTTipoTarjeta": [
         {
         "descripcion": "365 Tradicional Nominada",
         "identificador": "M"
         },
         {
         "descripcion": "365 Nominada B",
         "identificador": "N"
         }
      ]
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": 266,
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerTiposTarjeta",
      "Requerimiento": "1",
      "Fecha": "2019-01-09",
      "Hora": "15:04:38",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTTipoTarjeta', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de tipo de tarjeta.' }, { Nombre: 'identificador', Tipo: 'String', Comentarios: 'Identificador de tipo de tarjeta.' }] }];
}
