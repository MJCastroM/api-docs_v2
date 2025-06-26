import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerMenus',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerMenusComponent1750945332329 {
  pageTitle        = 'Obtener Menús';
  description      = `Método para obtener un listado de los menús ingresados en Bantotal.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerMenues';
  programa   = 'RBTPG127';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtMenus', Tipo: '[sBTMenu](#sbtmenu)', Comentarios: 'Listado de menús.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No existen menús ingresados en el sistema.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerMenues>
         <bts:Btinreq>
            <bts:Device>3</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>3</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>33cb514e804A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerMenues>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerMenues\' \
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
	},
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerMenuesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>3</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>3</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>33cb514e804A8B5C60A82434</Token>
         </Btinreq>
         <sdtMenus>
            <sBTMenu>
               <identificador>ADMSGR</identificador>
               <descripcion>Administración de Requerimientos</descripcion>
            </sBTMenu>
            <sBTMenu>
               <identificador>HADMATRB</identificador>
               <descripcion>Administrador de Atributos de Impresión</descripcion>
            </sBTMenu>
            <sBTMenu>
               <identificador>HARQ001</identificador>
               <descripcion>BTS - Publicación de Servicios</descripcion>
            </sBTMenu>
            <sBTMenu>
               <identificador>HAUD001W</identificador>
               <descripcion>Trabajar con Grupos de Auditoría</descripcion>
            </sBTMenu>
         </sdtMenus>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>124</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerMenues</Servicio>
            <Fecha>2018-05-07</Fecha>
            <Requerimiento>3</Requerimiento>
            <Hora>10:34:42</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerMenuesResponse>
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
   "sdtMenus": {
      "sBTMenu": [
         {
         "descripcion": "Administración de Requerimientos",
         "identificador": "ADMSGR"
         },
         {
         "descripcion": "Administrador de Atributos de Impresión",
         "identificador": "HADMATRB"
         },
         {
         "descripcion": "BTS - Publicación de Servicios",
         "identificador": "HARQ001"
         },
         {
         "descripcion": "Trabajar con Grupos de Auditoría",
         "identificador": "HAUD001W"
         },
      ]
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "130",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerMenues",
      "Fecha": "2018-05-07",
      "Requerimiento": "2",
      "Hora": "11:49:23",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [];
}
