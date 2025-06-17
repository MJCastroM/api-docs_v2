import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerDatosPrecancelacion',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDatosdePrecancelacionComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Datos de Precancelacion';
  description = `Metodo para obtener la simulacion de la precancelacion de un deposito a plazo para una fecha dada.`;
  pubName    = 'BTDepositosAPlazo.ObtenerDatosPrecancelacion';
  programa   = 'RBTPG636';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId', 'fecha'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de la precancelacion.' }];
  outputCols = ['sdtPrecancelar'];
  outputData = [{ Nombre: 'sdtPrecancelar', Tipo: '[sBTDatoPrecancelar](#sbtdatoprecancelar)', Comentarios: 'Datos de la precancelacion.' }];
  errorCols  = ['30001', '30002', '40003'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de operacion.' }, { Codigo: '30002', Descripcion: 'No se recibio la fecha.' }, { Codigo: '40003', Descripcion: 'La operacion no corresponde a un deposito a plazo.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.ObtenerDatosPrecancelacion>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>853547DAE3BFB2C1EC0A3148</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>100</bts:operacionUId>
         <bts:fecha>2024-11-11</bts:fecha>
      </bts:BTDepositosAPlazo.ObtenerDatosPrecancelacion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerDatosPrecancelacion=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: dc197965-60bc-3f23-3367-5902a0392e1d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"operacionUId": 100,
   "fecha": "2024-11-11"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ObtenerDatosPrecancelacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>MC</Device>
            <Requerimiento>1</Requerimiento>
            <Token>853547DAE3BFB2C1EC0A3148</Token>
         </Btinreq>
         <sdtPrecancelar>
            <tasaDescripcion>Efectiva Anual</tasaDescripcion>
            <fechaVencimiento>2020-06-19</fechaVencimiento>
            <datosAdicionales>
               <detalle/>
            </datosAdicionales>
            <plazo>90</plazo>
            <valorInicial>12000.0</valorInicial>
            <tasaOriginal>3.0</tasaOriginal>
            <tasaPrecancelacion>3.0</tasaPrecancelacion>
         </sdtPrecancelar>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-26</Fecha>
            <Hora>16:19:41</Hora>
            <Numero>30628</Numero>
            <Servicio>BTDepositosAPlazo.ObtenerDatosPrecancelacion</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerDatosPrecancelacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtPrecancelar": {
      "tasaDescripcion": "Efectiva Anual",
      "fechaVencimiento": "2020-06-19",
      "datosAdicionales": {
         "detalle": ""
      },
      "plazo": 90,
      "valorInicial": 12000,
      "tasaOriginal": 3,
      "tasaPrecancelacion": 3
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "3108",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ObtenerDocumentoDigital",
        "Fecha": "2018-11-21",
        "Requerimiento": "1",
        "Hora": "12:09:09",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'tasaDescripcion', Tipo: 'String', Comentarios: 'Descripcion de la tasa.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTDatoAdicional](#sbtdatoAdicional)', Comentarios: 'Listado de datos adicionales.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'valorInicial', Tipo: 'Double', Comentarios: 'Valor inicial.' }, { Nombre: 'tasaOriginal', Tipo: 'Double', Comentarios: 'Tasa original.' }, { Nombre: 'tasaPrecancelacion', Tipo: 'Double', Comentarios: 'Tasa de precancelacion.' }, { Nombre: '### sBTDatoAdicional', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'detalle', Tipo: 'String', Comentarios: 'Detalle.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
