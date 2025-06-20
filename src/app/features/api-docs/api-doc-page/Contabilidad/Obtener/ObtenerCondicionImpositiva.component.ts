import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerCondicionImpositiva',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCondicionImpositivaComponent1750446218424 {
  pageTitle        = 'Obtener Condición Impositiva';
  description      = `Método para obtener una condición impositiva de una persona.`;
  pubName    = 'BTContabilidad.ObtenerCondicionImpositiva';
  programa   = 'RBTPG533';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'codigoImpuesto', Tipo: 'Short', Comentarios: 'Código de impuesto.' }];
  outputData = [{ Nombre: 'codigoCondicion', Tipo: 'Short', Comentarios: 'Código de condición.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de persona.' }, { Codigo: '30002', Descripcion: 'No se recibió el código del impuesto.' }, { Codigo: '40004', Descripcion: 'Condición por Impuesto/Persona inexistente.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.ObtenerCondicionImpositiva>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>E1F15D391E5C8FAC4189A627</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>202</bts:personaUId>
         <bts:codigoImpuesto>1</bts:codigoImpuesto>
      </bts:BTContabilidad.ObtenerCondicionImpositiva>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerCondicionImpositiva=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: a0776b33-6711-6c56-044c-42d681d3742f\' \
  -d \'{
  	"Btinreq": {
		"Device": "GZ",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "2081397563CD285A89A23FBE"
	},
	"personaUId": 202,
	"codigoImpuesto": 1,
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.ObtenerCondicionImpositivaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>E1F15D391E5C8FAC4189A627</Token>
         </Btinreq>
         <codigoCondicion>1</codigoCondicion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16883</Numero>
            <Estado>OK</Estado>
            <Servicio>BTContabilidad.ObtenerCondicionImpositiva</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-10-30</Fecha>
            <Hora>14:20:13</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTContabilidad.ObtenerCondicionImpositivaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "INSTALADOR",
	  "Token": "761768101CD285A89A23FBEE",
	  "Device": "GP"
	},
    "codigoCondicion": 1,
	"Erroresnegocio": {
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTContabilidad.ObtenerCondicionImpositiva",
	  "Fecha": "2021-02-05",
	  "Hora": "13:37:57",
	  "Requerimiento": "1",
	  "Numero": "7984",
	  "Estado": "OK"
	}
}` }
  };

  structuredTypes = [];
}
