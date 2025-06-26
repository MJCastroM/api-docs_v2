import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarOperacionesaCancelar',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarOperacionesaCancelarComponent1750945333548 {
  pageTitle        = 'Agregar Operaciones a Cancelar';
  description      = `Método para agregar operaciones a cancelar para una solicitud de créditos.`;
  pubName    = 'BTMicrofinanzas.AgregarOperacionesACancelar';
  programa   = 'RBTPG362';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador de instancia Workflow.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'sdtOperaciones', Tipo: '[sBTOperacionId](#sbtoperacionid)', Comentarios: 'Listado de operaciones.' }];
  outputData = [{ Nombre: 'montoCancelacion', Tipo: 'Double', Comentarios: 'Monto de cancelación de la operación.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de solicitud.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30003', Descripcion: 'No se recibió ninguna operación para ampliar.' }, { Codigo: '30004', Descripcion: 'No se recuperó la cuenta para el identificador de cliente: [Número de identificador].' }, { Codigo: '30005', Descripcion: 'No se recuperó la operación para el identificador: [Número de identificador].' }, { Codigo: '40001', Descripcion: 'La solicitud ingresada no existe.' }, { Codigo: '40002', Descripcion: 'El cliente ingresado no corresponde con la solicitud.' }, { Codigo: '40003', Descripcion: 'El máximo de créditos a cancelar no puede ser mayor a [Número parametrizado].' }, { Codigo: '40004', Descripcion: 'La operación ingresada ya fue dada de alta previamente.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.AgregarOperacionesACancelar>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>16c1cc9b534A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:solicitudUId>11887</bts:solicitudUId>
         <bts:clienteUId>862</bts:clienteUId>
         <bts:sdtOperaciones>
            <bts:sBTOperacionId>
               <bts:operacionUId>1727</bts:operacionUId>
            </bts:sBTOperacionId>
         </bts:sdtOperaciones>
      </bts:BTMicrofinanzas.AgregarOperacionesACancelar>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas?AgregarOperacionesACancelar\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "GP",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"solicitudUId": "11887",
	"clienteUId": "862",
	"sdtOperaciones": {
	  "sBTOperacionId": {
		"operacionUId": "1727"
      },
   },
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.AgregarOperacionesACancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>16c1cc9b534A8B5C60A82434</Token>
         </Btinreq>
         <montoCancelacion>511820.42</montoCancelacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>111401</Numero>
            <Estado>OK</Estado>
            <Servicio>BTMicrofinanzas.AgregarOperacionesACancelar</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2021-10-15</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>14:56:43</Hora>
         </Btoutreq>
      </BTMicrofinanzas.AgregarOperacionesACancelarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{ 
   "Btinreq": { 
      "Device": "GP", 
      "Usuario": "MINSTALADOR", 
      "Token": "16c1cc9b534A8B5C60A82434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
   "montoCancelacion": "511820.42", 
   "Erroresnegocio": { 
   }, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTMicrofinanzas.AgregarOperacionesACancelar", 
      "Fecha": "2021-10-28", 
      "Hora": "15:39:53", 
      "Requerimiento": "1", 
      "Numero": "11003", 
      "Estado": "OK" 
   } 
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTOperacionId', fields: [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }] }];
}
