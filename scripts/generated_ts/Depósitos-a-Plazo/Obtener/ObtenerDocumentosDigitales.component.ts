import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerDocumentosDigitales',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDocumentosDigitalesComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Documentos Digitales';
  description = `Metodo para obtener un listado de los documentos digitales asociados a una operacion de depositos a plazo.`;
  pubName    = 'BTDepositosAPlazo.ObtenerDocumentosDigitales';
  programa   = 'RBTPG482';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId', 'codigoSistema'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'codigoSistema', Tipo: 'Short', Comentarios: '[Hidden: Valor fijo '3' para este metodo].' }];
  outputCols = ['sdtDocumentosDigitales'];
  outputData = [{ Nombre: 'sdtDocumentosDigitales', Tipo: '[sBTDocumentoDigital](#sbtdocumentodigital)', Comentarios: 'Listado de documentos digitales.' }];
  errorCols  = ['30001', '30021'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de la operacion.' }, { Codigo: '30021', Descripcion: 'No se recupero la operacion para el identificador recibido.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerDocumentosDigitales' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"operacionUId": "1018",
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
</SOAP-ENV:Envelope>`, json: `'{
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
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'documentoId', Tipo: 'Long', Comentarios: 'Identificador del documento digital.' }, { Nombre: 'fechaActualizacion', Tipo: 'Date', Comentarios: 'Fecha de actualizacion del documento digital.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento digital.' }, { Nombre: 'tipoDocumentoDigital', Tipo: 'String', Comentarios: 'Tipo del documento digital.' }, { Nombre: 'titulo', Tipo: 'String', Comentarios: 'Titulo del documento digital.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
