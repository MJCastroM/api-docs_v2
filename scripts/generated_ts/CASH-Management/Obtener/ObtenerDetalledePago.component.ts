import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalledePago',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalledePagoComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Detalle de Pago';
  description = `Metodo para obtener la informacion de lineas de detalle de pago.`;
  pubName    = 'BTCASHManagement.ObtenerDetallePago';
  programa   = 'RBTPGC22';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['archivoId'];
  inputData  = [{ Nombre: 'archivoId', Tipo: 'Long', Comentarios: 'Identificador de archivo.' }];
  outputCols = ['cuentaDebito', 'cantidadLineas', 'moneda', 'importe', 'referencia', 'fechaPago', 'estado', 'erroresPago', 'detallePagos'];
  outputData = [{ Nombre: 'cuentaDebito', Tipo: 'Long', Comentarios: 'Operacion de debito.' }, { Nombre: 'cantidadLineas', Tipo: 'Int', Comentarios: 'Cantidad de lineas del archivo.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Moneda.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe total.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia del pago o cobro.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago o cobro.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del archivo.' }, { Nombre: 'erroresPago', Tipo: 'String', Comentarios: 'Lista de mensajes del cabezal de pago.' }, { Nombre: 'detallePagos', Tipo: '[sBTDetallePago](#sbtdetallepago)', Comentarios: 'Lista de informacion del archivo con su estado y mensaje.' }];
  errorCols  = ['1030711'];
  errors     = [{ Codigo: '1030711', Descripcion: 'No se recupero informacion para el identificador de archivo recibido.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.ObtenerDetallePago>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>311020191114150000216393</bts:Token>
            <bts:Device>001</bts:Device>
         </bts:Btinreq>
         <bts:archivoId>104</bts:archivoId>
      </bts:BTCASHManagement.ObtenerDetallePago>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/odwsbt_BTCASHManagement_v1?ObtenerDetallePago' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"archivoId":104
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.ObtenerDetallePagoResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>311020191114150000216393</Token>
            <Device>001</Device>
         </Btinreq>
         <cuentaDebito>1</cuentaDebito>
         <cantidadLineas>5</cantidadLineas>
         <moneda>101</moneda>
         <importe>50</importe>
         <referencia></referencia>
         <fechaPago>2019-05-30</fechaPago>
         <estado>P</estado>
         <detallePagos>
            <sBTDetallePago>
               <nombre>RAMON PEREIRA</nombre>
               <beneficiarioId/>
               <beneficiarioCuenta>4466885511</beneficiarioCuenta>
               <beneficiarioBanco/>
               <fechaPago>2019-05-30</fechaPago>
               <moneda>101</moneda>
               <importe>11.00</importe>
               <estado>V</estado>
               <mensajesError></mensajesError>
            </sBTDetallePago>
            <sBTDetallePago>
               <nombre/>
               <beneficiarioId/>
               <beneficiarioCuenta>020000010100001</beneficiarioCuenta>
               <beneficiarioBanco/>
               <fechaPago>2019-05-30</fechaPago>
               <moneda>101</moneda>
               <importe>12.00</importe>
               <estado>M</estado>
               <mensajesError>
                  <item>PCSM237-Moneda de orden no puede ser distinta de moneda de cuenta destino</item>
               </mensajesError>
            </sBTDetallePago>
            <sBTDetallePago>
               <nombre>DANIEL COHEN</nombre>
               <beneficiarioId/>
               <beneficiarioCuenta>369354899</beneficiarioCuenta>
               <beneficiarioBanco/>
               <fechaPago>2019-05-30</fechaPago>
               <moneda>101</moneda>
               <importe>13.00</importe>
               <estado>V</estado>
               <mensajesError></mensajesError>
            </sBTDetallePago>
            <sBTDetallePago>
               <nombre>VICTOR SARRIAS</nombre>
               <beneficiarioId/>
               <beneficiarioCuenta>44556677</beneficiarioCuenta>
               <beneficiarioBanco/>
               <fechaPago>2019-05-30</fechaPago>
               <moneda>101</moneda>
               <importe>14.00</importe>
               <estado>V</estado>
               <mensajesError></mensajesError>
            </sBTDetallePago>
         </detallePagos>
         <Erroresnegocio>
            <BTErrorNegocio/>
         </Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCASHManagement.ObtenerDetallePago</Servicio>
            <Fecha>2019-10-31</Fecha>
            <Hora>12:13:22</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>652</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCASHManagement.ObtenerDetallePagoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"cuentaDebito":1,
	"cantidadLineas":5,
	"moneda":101,
	"importe":50,
	"referencia" : "",
	"fechaPago" : "0000-00-00",
	"estado" : "P",	 
	"detallePagos": {
		"sBTDetallePago": [
		   {
			  "nombre": "RAMON PEREIRA",
			  "beneficiarioId": [],
			  "beneficiarioCuenta": "4466885511",
			  "beneficiarioBanco": [],
			  "fechaPago": "2019-05-30",
			  "moneda": "101",
			  "importe": "11.00",
			  "estado": "V",
			  "mensajesError": []
		   },
		   {
			  "nombre": [],
			  "beneficiarioId": [],
			  "beneficiarioCuenta": "020000010100001",
			  "beneficiarioBanco": [],
			  "fechaPago": "2019-05-30",
			  "moneda": "101",
			  "importe": "12.00",
			  "estado": "M",
			  "mensajesError": {
				 "item": "PCSM237-Moneda de orden no puede ser distinta de moneda de cuenta destino"
			  }
		   },
		   {
			  "nombre": "DANIEL COHEN",
			  "beneficiarioId": [],
			  "beneficiarioCuenta": "369354899",
			  "beneficiarioBanco": [],
			  "fechaPago": "2019-05-30",
			  "moneda": "101",
			  "importe": "13.00",
			  "estado": "V",
			  "mensajesError": []
		   },
		   {
			  "nombre": "VICTOR SARRIAS",
			  "beneficiarioId": [],
			  "beneficiarioCuenta": "44556677",
			  "beneficiarioBanco": [],
			  "fechaPago": "2019-05-30",
			  "moneda": "101",
			  "importe": "14.00",
			  "estado": "V",
			  "mensajesError": []
		   }
		]
	},
	"Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "790",
        "Estado": "OK",
        "Servicio": "BTCASHManagement.ObtenerDetallePago",
        "Fecha": "2017-12-17",
        "Requerimiento": "",
        "Hora": "16:48:12",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'beneficiarioBanco', Tipo: 'String', Comentarios: 'Banco del Beneficiario.' }, { Nombre: 'beneficiarioCuenta', Tipo: 'String', Comentarios: 'Cuenta del Beneficiario.' }, { Nombre: 'beneficiarioId', Tipo: 'String', Comentarios: 'Identificador de Beneficiario.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado de la linea.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de Pago o Cobro.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'mensajesError', Tipo: 'String', Comentarios: 'Lista de mensajes de la linea.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del Beneficiario de Pago.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
