import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-IngresarOrdenPago',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class IngresarOrdenPagoComponent1750945331515 {
  pageTitle        = 'Ingresar Orden Pago';
  description      = `Método para ingresar una orden de pago.`;
  pubName    = 'BTCASHManagement.IngresarOrdenPago';
  programa   = 'RBTPGC31';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'contrato', Tipo: 'Int', Comentarios: 'Identificador del contrato CASH del cliente.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Servicio de pago CASH.' }, { Nombre: 'operacionUId_debito', Tipo: 'Long', Comentarios: 'Operación de débito.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe total.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'listaCampoValor', Tipo: '[sBTValorCampoCASH](#sbtvalorcampocash)', Comentarios: 'Listado de valores de campos CASH.' }];
  outputData = [{ Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de orden CASH.' }];
  errors     = [{ Codigo: '1030770', Descripcion: 'No se recupero informacion para la cuenta recibida.' }, { Codigo: '1030771', Descripcion: 'No se recibio importe para la orden.' }, { Codigo: '1030772', Descripcion: 'No se recibio moneda para la orden.' }, { Codigo: '1030773', Descripcion: 'No se recibio fecha para la orden.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.IngresarOrdenPago>
        <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>311020191114150000216393</bts:Token>
            <bts:Device>001</bts:Device>
         </bts:Btinreq>
         <bts:contrato>3</bts:contrato>
         <bts:servicio>10</bts:servicio>
         <bts:operacionUId_debito>1</bts:operacionUId_debito>
         <bts:moneda>101</bts:moneda>
         <bts:importe>1000</bts:importe>
         <bts:fecha>2019-11-06</bts:fecha>
         <bts:listaCampoValor>
            <bts:sBTValorCampoCASH>
               <bts:tag>ORDENANTE_NOM</bts:tag>
               <bts:valor>Francisco Otheguy</bts:valor>
            </bts:sBTValorCampoCASH>
         </bts:listaCampoValor>
      </bts:BTCASHManagement.IngresarOrdenPago>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_CASHManagement_v1?IngresarOrdenPago\' \
  -H \'Content-Type: application/json\' \
  -H \'Postman-Token: e985ea19-7527-41bc-bc60-fe431d9352b0,dbbd8038-2208-48fc-9395-1dfa11f1a0b1\' \
  -H \'User-Agent: PostmanRuntime/7.16.3\' \
  -H \'cache-control: no-cache\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"contrato":3,
	"servicio":10,
	"operacionUId_debito":1,
	"moneda":101,
	"importe":1000,
	"fecha" : "2019-11-06",
	"listaCampoValor": {
		"sBTValorCampoCASH": [
			{
				"tag" : "ORDENANTE_NOM",
				"valor" : "Francisco Otheguy"
			}
		]
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.IngresarOrdenPagoResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>311020191114150000216393</Token>
            <Device>001</Device>
         </Btinreq>
         <ordenId>304</ordenId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCASHManagement.IngresarOrdenPago</Servicio>
            <Fecha>2019-10-31</Fecha>
            <Hora>16:15:43</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>672</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCASHManagement.IngresarOrdenPagoResponse>
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
	"ordenId":304,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "4438",
        "Estado": "OK",
        "Servicio": "BTCASHManagement.IngresarOrdenPago",
        "Fecha": "2018-12-14",
        "Requerimiento": "",
        "Hora": "17:00:28",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTValorCampoCASH', fields: [{ Nombre: 'tag', Tipo: 'String', Comentarios: 'Tag del campo CASH.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor del campo CASH.' }] }];
}
