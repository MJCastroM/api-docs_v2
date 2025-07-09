import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-QuitarOperacionesaCancelar',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class QuitarOperacionesaCancelarComponent1751987197889 {
  pageTitle        = 'Quitar Operaciones a Cancelar';
  description      = `Método para quitar operaciones a cancelar para una solicitud de créditos.`;
  pubName    = 'BTMicrofinanzas.QuitarOperacionesACancelar';
  programa   = 'RBTPG363';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador de instancia Workflow' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente' }, { Nombre: 'sdtOperaciones', Tipo: '[sBTOperacionId](#sbtoperacionid)', Comentarios: 'Listado de operaciones' }];
  outputData = [{ Nombre: 'montoCancelacion', Tipo: 'Double', Comentarios: 'Monto de cancelación de la operación' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de solicitud' }, { Código: '30002', Descripción: 'No se recibió el identificador de cliente' }, { Código: '30003', Descripción: 'No se recibió ninguna operación para cancelar' }, { Código: '30004', Descripción: 'No se recuperó la cuenta para el identificador de cliente: [Número de identificador]' }, { Código: '30005', Descripción: 'No se recuperó la operación para el identificador: [Número de identificador]' }, { Código: '40001', Descripción: 'La solicitud ingresada no existe' }, { Código: '40002', Descripción: 'El cliente ingresado no corresponde con la solicitud' }, { Código: '40004', Descripción: 'No existe registro para la operación ingresada' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.QuitarOparacionesACancelar>
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
               <bts:operacionUId>1725</bts:operacionUId>
            </bts:sBTOperacionId>
         </bts:sdtOperaciones>
      </bts:BTMicrofinanzas.QuitarOparacionesACancelar>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas?QuitarOperacionesACancelar\' \
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
		"operacionUId": "1725"
      },
   },
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.QuitarOparacionesACancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <Servicio>BTMicrofinanzas.QuitarOparacionesACancelar</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2021-10-15</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>14:56:43</Hora>
         </Btoutreq>
      </BTMicrofinanzas.QuitarOparacionesACancelarResponse>
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
      "Servicio": "BTMicrofinanzas.QuitarOparacionesACancelar",
      "Fecha": "2021-10-28",
      "Hora": "15:39:53",
      "Requerimiento": "1",
      "Numero": "11003",
      "Estado": "OK"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTOperacionId', fields: [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'identificador único de operación.' }] }];
}
