import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerDocumentoDigital',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDocumentoDigitalComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Documento Digital';
  description = `Metodo para obtener los datos de un documento digital determinado de una cuenta cliente.`;
  pubName    = 'BTClientes.ObtenerDocumentoDigital';
  programa   = 'RBTPG192';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId', 'documentoId'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'documentoId', Tipo: 'Long', Comentarios: 'Identificador de documento digital.' }];
  outputCols = ['sdtDocumentosDigitales'];
  outputData = [{ Nombre: 'sdtDocumentosDigitales', Tipo: '[sBTVersionDocumentoDigital](#sbtversiondocumentodigital)', Comentarios: 'Version de documento digital.' }];
  errorCols  = ['30001', '30002', '30024', '30031', '30032'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de la cuenta.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de documento.' }, { Codigo: '30024', Descripcion: 'No existe registro con el identificador indicado.' }, { Codigo: '30031', Descripcion: 'El documento digital no existe.' }, { Codigo: '30032', Descripcion: 'Ocurrio un error al obtener la ultima version del documento.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerDocumentoDigital>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0868626a064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>10.12.10.159</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:documentoId>56</bts:documentoId>
      </bts:BTClientes.ObtenerDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerDocumentoDigital=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a12f013d-9875-6451-dd62-ad7bb0217b5c' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"clienteUId": "61",
	"documentoId": "56",
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0868626a064A8B5C60A82434</Token>
         </Btinreq>
         <sdtDocumentosDigitales>
            <sBTVersionDocumentoDigital>
               <FechaEmision>2017-03-24</FechaEmision>
               <Archivo>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</Archivo>
               <FechaVencimiento>2018-03-24</FechaVencimiento>
               <TipoDocumentoDigital>Balance</TipoDocumentoDigital>
               <Version>1</Version>
               <Nombre>Balance General.PDF</Nombre>
               <documentoId>56</documentoId>
            </sBTVersionDocumentoDigital>
         </sdtDocumentosDigitales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>840</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerDocumentoDigital</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-13</Fecha>
            <Hora>12:32:19</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerDocumentoDigitalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtDocumentosDigitales": {
        "sBTVersionDocumentoDigital": [
            {
                "FechaEmision": "2017-03-24",
                "Archivo": "RG9jdW1lbnRvIGRlIGVqZW1wbG8=",
                "FechaVencimiento": "2018-03-24",
                "TipoDocumentoDigital": "Balance",
                "Version": 1,
                "Nombre": "Balance General.PDF",
                "documentoId": 56
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 842,
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerDocumentoDigital",
        "Requerimiento": "1",
        "Fecha": "2018-11-13",
        "Hora": "12:38:20",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'archivo', Tipo: 'String', Comentarios: 'Documento digital codificado en Base 64.' }, { Nombre: 'documentoId', Tipo: 'Long', Comentarios: 'Titulo del documento digital.' }, { Nombre: 'fechaEmision', Tipo: 'Date', Comentarios: 'Fecha de emision del documento digital.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento digital.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del documento digital.' }, { Nombre: 'tipoDocumentoDigital', Tipo: 'String', Comentarios: 'Tipo del documento digital.' }, { Nombre: 'version', Tipo: 'Int', Comentarios: 'Numero de version del documento digital.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
