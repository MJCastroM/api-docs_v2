import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ValidarDocumento',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ValidarDocumentoComponent {
  // Cabecera e info-card
  pageTitle = 'Validar Documento';
  description = `Metodo para validar el documento de una persona.`;
  pubName    = 'BTPersonas.ValidarDocumento';
  programa   = 'RBTPG531';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['paisDocumentoId', 'tipoDocumentoId', 'nroDocumento'];
  inputData  = [{ Nombre: 'paisDocumentoId', Tipo: 'Short', Comentarios: 'Identificador de pais del documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador de tipo de documento.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Numero de documento.' }];
  outputCols = ['valido', 'mensaje'];
  outputData = [{ Nombre: 'valido', Tipo: 'String', Comentarios: '¿Valido? (S/N).' }, { Nombre: 'mensaje', Tipo: 'String', Comentarios: 'Mensaje de salida cuando el documento no es valido.' }];
  errorCols  = ['30001', '30002', '30003'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de pais.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de tipo de documento.' }, { Codigo: '30003', Descripcion: 'No se recibio el numero de documento.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ValidarDocumento>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>E1F15D391E5C8FAC4189A627</bts:Token>
         </bts:Btinreq>
         <bts:paisDocumentoId>845</bts:paisDocumentoId>
         <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
         <bts:numeroDocumento>52116325</bts:numeroDocumento>
      </bts:BTPersonas.ValidarDocumento>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ValidarDocumento=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8' \
  -d '{
	"Btinreq": {
		"Device": "GZ",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "paisDocumentoId":845,
   "tipoDocumentoId":1,
   "numeroDocumento":"52116325"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ValidarDocumentoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>E1F15D391E5C8FAC4189A627</Token>
         </Btinreq>
         <valido>S</valido>
         <mensajeValido/>
         <Erroresnegocio/>
         <Btoutreq>
            <Numero>16884</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ValidarDocumento</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-10-30</Fecha>
            <Hora>15:04:42</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ValidarDocumentoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "GZ",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "valido": "S",
   "mensajeValido": "",
   "Erroresnegocio": {
       "BTErrorNegocio": []
   },
   "Btoutreq": {
       "Numero": "835",
       "Estado": "OK",
       "Servicio": "BTPersonas.ValidarDocumento",
       "Fecha": "2023-12-18",
       "Requerimiento": "",
       "Hora": "01:48:53",
       "Canal": "BTDIGITAL"
   }
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
