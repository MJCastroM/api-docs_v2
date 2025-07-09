import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDocumentosDigitales',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDocumentosDigitalesComponent1751987197493 {
  pageTitle        = 'Obtener Documentos Digitales';
  description      = `Método para obtener un listado de los documentos digitales asociados a una operación de depósitos a plazo.`;
  pubName    = 'BTDepositosAPlazo.ObtenerDocumentosDigitales';
  programa   = 'RBTPG482';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Se puede parametrizar la opción general por módulo 1416. En caso de estar en \'S\', se inhabilitará el control de existencia de la operación en la tabla FSD011.
 
:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'codigoSistema', Tipo: 'Short', Comentarios: '[Hidden: Valor fijo \'3\' para este método].' }];
  outputData = [{ Nombre: 'sdtDocumentosDigitales', Tipo: '[sBTDocumentoDigital](#sbtdocumentodigital)', Comentarios: 'Listado de documentos digitales.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de la operación.' }, { Código: '30021', Descripción: 'No se recuperó la operación para el identificador recibido.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.ObtenerDocumentosDigitales>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GP</bts:Device>
            <bts:Token>65386256C895CD01D7DC796E</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>1018</bts:operacionUId>
      </bts:BTDepositosAPlazo.ObtenerDocumentosDigitales>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerDocumentosDigitales\' \
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
	"operacionUId": "1018",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ObtenerDocumentosDigitalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>65386256C895CD01D7DC796E</Token>
         </Btinreq>
         <sdtDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>PRUEBA</Titulo>
               <FechaActualizacion>2015-01-01</FechaActualizacion>
               <FechaVencimiento/>
               <TipoDocumentoDigital>Plan de Pagos</TipoDocumentoDigital>
               <DocumentoId>265</DocumentoId>
            </sBTDocumentoDigital>
         </sdtDocumentoDigital>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>12028</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ObtenerDocumentosDigitales</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-23</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:50:30</Hora>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerDocumentosDigitalesResponse>
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
    "sdtDocumentoDigital": {
        "sBTDocumentoDigital": {
            "Titulo": "PRUEBA GABO",
            "FechaActualizacion": "2015-01-01",
            "FechaVencimiento": "",
            "TipoDocumentoDigital": "Plan de Pagos",
            "DocumentoId": "265"
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 823,
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ObtenerDocumentosDigitales",
        "Requerimiento": "1",
        "Fecha": "2018-11-12",
        "Hora": "17:47:27",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDocumentoDigital', fields: [{ Nombre: 'documentoId', Tipo: 'Long', Comentarios: 'Identificador del documento digital.' }, { Nombre: 'fechaActualizacion', Tipo: 'Date', Comentarios: 'Fecha de actualización del documento digital.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento digital.' }, { Nombre: 'tipoDocumentoDigital', Tipo: 'String', Comentarios: 'Tipo del documento digital.' }, { Nombre: 'titulo', Tipo: 'String', Comentarios: 'Titulo del documento digital.' }] }];
}
