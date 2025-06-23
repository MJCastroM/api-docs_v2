import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-EliminarDocumentoDigital',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class EliminarDocumentoDigitalComponent1750713393905 {
  pageTitle        = 'Eliminar Documento Digital';
  description      = `Método para eliminar un documento digital de un depósito a plazo.`;
  pubName    = 'BTDepositosAPlazo.EliminarDocumentoDigital';
  programa   = 'RBTPG566';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'documentoId', Tipo: 'Long', Comentarios: 'Identificador del documento digital.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de instancia de documento digital.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de la operación.' }, { Codigo: '30003', Descripcion: 'La operación ingresada no corresponde a un depósito a plazo.' }, { Codigo: '30021', Descripcion: 'No se recuperó la operación para el identificador recibido.' }, { Codigo: '40993', Descripcion: 'Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío.' }, { Codigo: '40994', Descripcion: 'Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.EliminarDocumentoDigital>
         <bts:Btinreq>
		  <bts:Device>10.12.10.159</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b98a5858014A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>21</bts:operacionUId>
         <bts:documentoId>87</bts:documentoId>
      </bts:BTDepositosAPlazo.EliminarDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?EliminarDocumentoDigital=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: dc197965-60bc-3f23-3367-5902a0392e1d\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"operacionUId": "21",
	"documentoId": "87",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.EliminarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
		    <bts:Device>10.12.10.159</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b98a5858014A8B5C60A82434</bts:Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>3110</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.EliminarDocumentoDigital</Servicio>
            <Fecha>2018-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:12:07</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.EliminarDocumentoDigitalResponse>
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
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "3109",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.EliminarDocumentoDigital",
        "Fecha": "2018-11-21",
        "Requerimiento": "1",
        "Hora": "12:11:36",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
