import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerMovimientos',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerMovimientosComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Movimientos';
  description = `Metodo para obtener los movimientos de una tarjeta de debito.`;
  pubName    = 'BTTarjetasDeDebito.ObtenerMovimientos';
  programa   = 'RBTPG026';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['tarjetaUId', 'fechaDesde', 'fechaHasta'];
  inputData  = [{ Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador unico de la tarjeta.' }, { Nombre: 'fechaDesde', Tipo: 'Date', Comentarios: 'Fecha desde la cual se emite el estado de cuenta.' }, { Nombre: 'fechaHasta', Tipo: 'Date', Comentarios: 'Fecha hasta la cual se emite el estado de cuenta.' }];
  outputCols = ['sdtEstadoDeCuenta'];
  outputData = [{ Nombre: 'sdtEstadoDeCuenta', Tipo: '[sBTEstadoCuentaDebito](#sbtestadocuentadebito)', Comentarios: 'Datos del estado de cuenta de la tarjeta de debito.' }];
  errorCols  = ['30001'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio identificador de tarjeta.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.ObtenerMovimientos>
         <bts:Btinreq>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token>
         </bts:Btinreq>
         <bts:tarjetaUId>2000002067</bts:tarjetaUId>
         <bts:fechaDesde>2000-01-01</bts:fechaDesde>
         <bts:fechaHasta>2020-01-01</bts:fechaHasta>
      </bts:BTTarjetasDeDebito.ObtenerMovimientos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ObtenerMovimientos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "324915377F955E77534D3E02"
	},
   "tarjetaUId": "2000002067",
   "fechaDesde": "2000-01-01",
   "fechaHasta": "2020-01-01"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.ObtenerMovimientosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>52005b89a6F955E77534D3E0</Token>
         </Btinreq>
         <sdtEstadoDeCuenta>
            <movimientos>
               <sBTMovimientoDebito>
                  <moneda>PESOS</moneda>
                  <hora>11:32:16</hora>
                  <codigoMovimiento>EXTRACCIÓN EXTERIOR</codigoMovimiento>
                  <referencia/>
                  <red>LINK</red>
                  <concepto/>
                  <importe>100.00</importe>
                  <debitoOCredito>D</debitoOCredito>
                  <banco/>
                  <fecha>2017-06-20</fecha>
               </sBTMovimientoDebito>
               <sBTMovimientoDebito>
                  <moneda>PESOS</moneda>
                  <hora>11:32:17</hora>
                  <codigoMovimiento>EXTRACCIÓN EXTERIOR</codigoMovimiento>
                  <referencia/>
                  <red>LINK</red>
                  <concepto/>
                  <importe>100.00</importe>
                  <debitoOCredito>D</debitoOCredito>
                  <banco/>
                  <fecha>2017-06-20</fecha>
               </sBTMovimientoDebito>
               <sBTMovimientoDebito>
                  <moneda>PESOS</moneda>
                  <hora>11:32:18</hora>
                  <codigoMovimiento>EXTRACCIÓN EXTERIOR</codigoMovimiento>
                  <referencia/>
                  <red>LINK</red>
                  <concepto/>
                  <importe>100.00</importe>
                  <debitoOCredito>D</debitoOCredito>
                  <banco/>
                  <fecha>2017-06-20</fecha>
               </sBTMovimientoDebito>               <sBTMovimientoDebito>
                  <moneda>PESOS</moneda>
                  <hora>11:32:19</hora>
                  <codigoMovimiento>EXTRACCIÓN EXTERIOR</codigoMovimiento>
                  <referencia/>
                  <red>LINK</red>
                  <concepto/>
                  <importe>100.00</importe>
                  <debitoOCredito>D</debitoOCredito>
                  <banco/>
                  <fecha>2017-06-20</fecha>
               </sBTMovimientoDebito>
			   <sBTMovimientoDebito>
                  <moneda>PESOS</moneda>
                  <hora>11:32:56</hora>
                  <codigoMovimiento>EXTRACCIÓN LOCAL</codigoMovimiento>
                  <referencia/>
                  <red>REDBROU</red>
                  <concepto/>
                  <importe>100.00</importe>
                  <debitoOCredito>D</debitoOCredito>
                  <banco/>
                  <fecha>2017-06-20</fecha>
               </sBTMovimientoDebito>
               <sBTMovimientoDebito>
                  <moneda>PESOS</moneda>
                  <hora>11:32:57</hora>
                  <codigoMovimiento>COMPRAS POS EXTERIOR</codigoMovimiento>
                  <referencia/>
                  <red>CIRRUS</red>
                  <concepto/>
                  <importe>120.00</importe>
                  <debitoOCredito>D</debitoOCredito>
                  <banco/>
                  <fecha>2017-06-20</fecha>
               </sBTMovimientoDebito>
            </movimientos>
         </sdtEstadoDeCuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>673</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTarjetasDeDebito.ObtenerMovimientos</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-04-23</Fecha>
            <Hora>14:06:18</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerMovimientosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{ 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "", 
      "Usuario": "BANTOTAL", 
      "Token": "324915377F955E77534D3E02", 
      "Device": "AC" 
   }, 
	"sdtEstadoDeCuenta": { 
		"movimientos": { 
		  "sBTMovimientoDebito": [ 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:16", 
			  "codigoMovimiento": "EXTRACCIÓN EXTERIOR", 
			  "referencia": "", 
			  "red": "LINK", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:17", 
			  "codigoMovimiento": "EXTRACCIÓN EXTERIOR", 
			  "referencia": "", 
			  "red": "LINK", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:18", 
			  "codigoMovimiento": "EXTRACCIÓN EXTERIOR", 
			  "referencia": "", 
			  "red": "LINK", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:19", 
			  "codigoMovimiento": "EXTRACCIÓN EXTERIOR", 
			  "referencia": "", 
			  "red": "LINK", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:56", 
			  "codigoMovimiento": "EXTRACCIÓN LOCAL", 
			  "referencia": "", 
			  "red": "REDBROU", 
			  "concepto": "", 
			  "importe": "100.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			}, 
			{ 
			  "moneda": "PESOS", 
			  "hora": "11:32:57", 
			  "codigoMovimiento": "COMPRAS POS EXTERIOR", 
			  "referencia": "", 
			  "red": "CIRRUS", 
			  "concepto": "", 
			  "importe": "120.00", 
			  "debitoOCredito": "D", 
			  "banco": "", 
			  "fecha": "2017-06-20" 
			} 
		  ] 
		} 
	}, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTTarjetasDeDebito.ObtenerMovimientos", 
      "Fecha": "2019-11-19", 
      "Hora": "13:05:22", 
      "Requerimiento": "", 
      "Numero": 6924, 
      "Estado": "OK" 
   } 
}` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'movimientos', Tipo: '[sBTMovimientoDebito](#sbtmovimientodebito)', Comentarios: 'Listado de movimientos.' }, { Nombre: '### sBTMovimientoDebito', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTMovimientoDebito son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'banco', Tipo: 'String', Comentarios: 'Nombre del banco.' }, { Nombre: 'codigoMovimiento', Tipo: 'String', Comentarios: 'Codigo de movimiento.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto del movimiento.' }, { Nombre: 'debitoOCredito', Tipo: 'String', Comentarios: 'Debito o credito (D/C).' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha del movimiento.' }, { Nombre: 'hora', Tipo: 'String', Comentarios: 'Hora de movimiento.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Moneda del movimiento.' }, { Nombre: 'red', Tipo: 'String', Comentarios: 'Red por donde se realizo el movimiento.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
