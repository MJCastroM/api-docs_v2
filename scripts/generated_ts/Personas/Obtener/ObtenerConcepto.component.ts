import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerConcepto',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerConceptoComponent1750446218756 {
  pageTitle        = 'Obtener Concepto';
  description      = `Método para obtener los conceptos de los programas de personas.`;
  pubName    = 'BTPersonas.ObtenerConcepto';
  programa   = 'RBTPG529';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'programa', Tipo: 'String', Comentarios: 'Nombre del programa.' }, { Nombre: 'conceptoId', Tipo: 'Long', Comentarios: 'Identificador del concepto.' }];
  outputData = [{ Nombre: 'sdtValorCampo', Tipo: '[sBTValorCampo](#sbtvalorcampo)', Comentarios: 'Listado de conceptos del programa.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el nombre del programa.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador del campo.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerConcepto>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>45A5647518BC5FBB73003EA9</bts:Token>
         </bts:Btinreq>
         <bts:programa>HDECOCPD</bts:programa>
         <bts:conceptoId>11</bts:conceptoId>
      </bts:BTPersonas.ObtenerConcepto>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerConcepto=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "programa":"HDECOCPD",
   "conceptoId": 11
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerConceptoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <sdtValorCampo>
            <sBTValorCampo>
               <descripcion>Cliente</descripcion>
               <identificador>1</identificador>
            </sBTValorCampo>
            <sBTValorCampo>
               <descripcion>Agencia</descripcion>
               <identificador>2</identificador>
            </sBTValorCampo>
         </sdtValorCampo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16846</Numero>
            <Servicio>BTPersonas.ObtenerConcepto</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-26</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>11:44:45</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerConceptoResponse>
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
   "sdtValorCampo": {
        "sBTValorCampo": [
        {
            "descripcion": "Cliente",
            "identificador": 1
        },
        {
            "descripcion": "Agencia",
            "identificador": 2
        }
        ]
    },  
   "Erroresnegocio": {
       "BTErrorNegocio": []
   },
   "Btoutreq": {
       "Numero": "835",
       "Estado": "OK",
       "Servicio": "BTPersonas.ObtenerConcepto",
       "Fecha": "2023-12-18",
       "Requerimiento": "",
       "Hora": "01:48:53",
       "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTValorCampo', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador.' }] }];
}
