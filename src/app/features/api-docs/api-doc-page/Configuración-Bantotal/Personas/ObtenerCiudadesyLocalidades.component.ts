import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerCiudadesyLocalidades',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCiudadesyLocalidadesComponent1750945332268 {
  pageTitle        = 'Obtener Ciudades y Localidades';
  description      = `Método para obtener un listado de las ciudades/localidades ingresadas en Bantotal para un determinado estado de un país.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerCiudadesLocalidades';
  programa   = 'RBTPG044';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'pais', Tipo: 'Short', Comentarios: 'Identificador de país.' }, { Nombre: 'estado', Tipo: 'Int', Comentarios: 'Identificador de estado.' }];
  outputData = [{ Nombre: 'sdtCiudades', Tipo: '[sBTCiudad](#sbtciudad)', Comentarios: 'Listado de Ciudades.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerCiudadesLocalidades>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:pais>845</bts:pais>
         <bts:estado>10</bts:estado>
      </bts:BTConfiguracionBantotal.ObtenerCiudadesLocalidades>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerCiudadesLocalidades=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 5b3289df-1fdd-e053-7cce-7c555e3fa072\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "pais": 845,
   "estado": 10
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerCiudadesLocalidadesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtCiudades>
            <sBTCiudad>
               <identificador>10</identificador>
               <descripcion>Montevideo</descripcion>
            </sBTCiudad>
         </sdtCiudades>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>798</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerCiudadesLocalidades</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>17:59:42</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerCiudadesLocalidadesResponse>
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
    "sdtCiudades": {
        "sBTCiudad": [
            {
                "descripcion": "Montevideo",
                "identificador": "10"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "799",
        "Estado": "OK",
        "Servicio": "BTConfiguracionBantotal.ObtenerCiudadesLocalidades",
        "Fecha": "2017-12-17",
        "Requerimiento": "",
        "Hora": "18:00:38",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTCiudad', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de Ciudad.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador de Ciudad.' }] }];
}
