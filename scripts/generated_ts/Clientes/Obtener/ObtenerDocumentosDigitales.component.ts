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
  description = `Metodo para obtener un listado de los documentos digitales asociados a una cuenta cliente.`;
  pubName    = 'BTClientes.ObtenerDocumentosDigitales';
  programa   = 'RBTPG181';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }];
  outputCols = ['sdtDocumentosDigitales'];
  outputData = [{ Nombre: 'sdtDocumentosDigitales', Tipo: '[sBTDocumentoDigital](#sbtdocumentodigital)', Comentarios: 'Listado de documentos digitales.' }];
  errorCols  = ['30001', '30024', '30033'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de la cuenta.' }, { Codigo: '30024', Descripcion: 'No existe registro con el identificador indicado.' }, { Codigo: '30033', Descripcion: 'El cliente indicado no existe.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerDocumentosDigitales>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0868626a064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>10.12.10.159</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
      </bts:BTClientes.ObtenerDocumentosDigitales>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerDocumentosDigitales=' \
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
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerDocumentosDigitalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0868626a064A8B5C60A82434</Token>
         </Btinreq>
         <sdtDocumentosDigitales>
            <sBTDocumentoDigital>
               <Titulo>Balnace</Titulo>
               <FechaActualizacion>2017-03-24</FechaActualizacion>
               <FechaVencimiento>2018-03-24</FechaVencimiento>
               <TipoDocumentoDigital>Balance</TipoDocumentoDigital>
               <Instancia>56</Instancia>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>C.I</Titulo>
               <FechaActualizacion>2007-03-24</FechaActualizacion>
               <FechaVencimiento>2018-03-24</FechaVencimiento>
               <TipoDocumentoDigital>Cédula de Identidad Vigente o Comprobante</TipoDocumentoDigital>
               <Instancia>58</Instancia>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>C.I 2</Titulo>
               <FechaActualizacion>2017-03-24</FechaActualizacion>
               <FechaVencimiento>2018-03-24</FechaVencimiento>
               <TipoDocumentoDigital>Cédula de Identidad Vigente o Comprobante</TipoDocumentoDigital>
               <Instancia>59</Instancia>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>Estado</Titulo>
               <FechaActualizacion>2017-03-24</FechaActualizacion>
               <FechaVencimiento>2018-03-24</FechaVencimiento>
               <TipoDocumentoDigital>Estados financieros</TipoDocumentoDigital>
               <Instancia>60</Instancia>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>Estado 2</Titulo>
               <FechaActualizacion>2017-03-24</FechaActualizacion>
               <FechaVencimiento>2018-03-24</FechaVencimiento>
               <TipoDocumentoDigital>Estados financieros</TipoDocumentoDigital>
               <Instancia>61</Instancia>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>Solicitud</Titulo>
               <FechaActualizacion>2017-03-24</FechaActualizacion>
               <FechaVencimiento>2018-03-24</FechaVencimiento>
               <TipoDocumentoDigital>Solicitud de Préstamo - Persona Jurídica</TipoDocumentoDigital>
               <Instancia>62</Instancia>
            </sBTDocumentoDigital>
         </sdtDocumentosDigitales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>792</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerDocumentosDigitales</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-12</Fecha>
            <Hora>16:27:59</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerDocumentosDigitalesResponse>
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
        "sBTDocumentoDigital": [
            {
                "Titulo": "Balnace",
                "FechaActualizacion": "2017-03-24",
                "FechaVencimiento": "2018-03-24",
                "TipoDocumentoDigital": "Balance",
                "Instancia": 56
            },
            {
                "Titulo": "C.I",
                "FechaActualizacion": "2007-03-24",
                "FechaVencimiento": "2018-03-24",
                "TipoDocumentoDigital": "Cédula de Identidad Vigente o Comprobante",
                "Instancia": 58
            },
            {
                "Titulo": "C.I 2",
                "FechaActualizacion": "2017-03-24",
                "FechaVencimiento": "2018-03-24",
                "TipoDocumentoDigital": "Cédula de Identidad Vigente o Comprobante",
                "Instancia": 59
            },
            {
                "Titulo": "Estado",
                "FechaActualizacion": "2017-03-24",
                "FechaVencimiento": "2018-03-24",
                "TipoDocumentoDigital": "Estados financieros",
                "Instancia": 60
            },
            {
                "Titulo": "Estado 2",
                "FechaActualizacion": "2017-03-24",
                "FechaVencimiento": "2018-03-24",
                "TipoDocumentoDigital": "Estados financieros",
                "Instancia": 61
            },
            {
                "Titulo": "Solicitud",
                "FechaActualizacion": "2017-03-24",
                "FechaVencimiento": "2018-03-24",
                "TipoDocumentoDigital": "Solicitud de Préstamo - Persona Jurídica",
                "Instancia": 62
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 794,
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerDocumentosDigitales",
        "Requerimiento": "1",
        "Fecha": "2018-11-12",
        "Hora": "16:29:06",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'fechaActualizacion', Tipo: 'Date', Comentarios: 'Fecha de actualizacion del documento digital.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento digital.' }, { Nombre: 'instancia', Tipo: 'Long', Comentarios: 'Instancia del documento digital.' }, { Nombre: 'tipoDocumentoDigital', Tipo: 'String', Comentarios: 'Tipo del documento digital.' }, { Nombre: 'titulo', Tipo: 'String', Comentarios: 'Titulo del documento digital.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
