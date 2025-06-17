import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerEstadodeCuenta',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerEstadodeCuentaComponent {
  pageTitle = 'Obtener Estado de Cuenta';
  description = `Metodo para obtener el estado de cuenta de un producto de cuenta de ahorro.`;
  pubName    = 'BTCuentasDeAhorro.ObtenerEstadoDeCuenta';
  programa   = 'RBTPG004';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'cantidadDias', Tipo: 'Int', Comentarios: 'Cantidad de dias para atras (Se puede parametrizar como parametro Hidden para que el servicio siempre tome el mismo valor por defecto, o se puede dejar editable para que el usuario ingrese el valor).' }, { Nombre: 'cantidadMovimientos', Tipo: 'Int', Comentarios: 'Cantidad de movimientos (Se puede parametrizar como parametro Hidden para que el servicio siempre tome el mismo valor por defecto, o se puede dejar editable para que el usuario ingrese el valor).' }];
  outputData = [{ Nombre: 'sdtEstadoDeCuenta', Tipo: '[sBTEstadoCuentaCV](#sbtestadocuentacv)', Comentarios: 'Datos de estado de cuenta.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador unico de operacion.' }, { Codigo: '30002', Descripcion: 'No se recupero operacion para el identificador: [Numero de identificador].' }, { Codigo: '30003', Descripcion: 'La operacion ingresada no corresponde a una cuenta de ahorro.' }, { Codigo: '30004', Descripcion: 'No se recibio la cantidad de dias.' }, { Codigo: '30005', Descripcion: 'No se recibio la cantidad de movimientos.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasDeAhorro.ObtenerEstadoDeCuenta>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>281</bts:operacionUId>
      </bts:BTCuentasDeAhorro.ObtenerEstadoDeCuenta>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ObtenerEstadoDeCuenta=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: c27aec65-f66f-b138-f9d3-15a243b6d5e4' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 281
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasDeAhorro.ObtenerEstadoDeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtEstadoDeCuenta>
            <saldoPartida>208750.00</saldoPartida>
            <fechaHasta>2018-10-09</fechaHasta>
            <productoUId>9</productoUId>
            <movimientos>
               <sBTMovimiento>
                  <movimientoUId>135</movimientoUId>
                  <fecha>2018-10-09</fecha>
                  <hora>16:45:54</hora>
                  <concepto/>
                  <referencia/>
                  <numeroCheque>0</numeroCheque>
                  <debitoCredito>D</debitoCredito>
                  <moneda/>
                  <importe>5000.00</importe>
                  <tipoCambio>0.000000</tipoCambio>
                  <arbitraje>0.000000</arbitraje>
                  <saldo>143750.00</saldo>
               </sBTMovimiento>
               <sBTMovimiento>
                  <movimientoUId>216</movimientoUId>
                  <fecha>2018-09-10</fecha>
                  <hora>12:10:37</hora>
                  <concepto/>
                  <referencia/>
                  <numeroCheque>0</numeroCheque>
                  <debitoCredito>D</debitoCredito>
                  <moneda/>
                  <importe>5000.00</importe>
                  <tipoCambio>0.000000</tipoCambio>
                  <arbitraje>0.000000</arbitraje>
                  <saldo>148750.00</saldo>
               </sBTMovimiento>
            </movimientos>
            <fechaDesde>2018-07-11</fechaDesde>
         </sdtEstadoDeCuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>927</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasDeAhorro.ObtenerEstadoDeCuenta</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:32:38</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasDeAhorro.ObtenerEstadoDeCuentaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtEstadoDeCuenta": {
        "saldoPartida": "208750.00",
        "fechaHasta": "2018-10-09",
        "productoUId": "9",
        "movimientos": {
            "sBTMovimiento": [
                {
                    "moneda": "",
                    "hora": "16:45:54",
                    "referencia": "",
                    "concepto": "",
                    "movimientoUId": "135",
                    "debitoCredito": "D",
                    "saldo": "143750.00",
                    "importe": "5000.00",
                    "numeroCheque": "0",
                    "tipoCambio": "0.000000",
                    "arbitraje": "0.000000",
                    "fecha": "2018-10-09"
                },
                {
                    "moneda": "",
                    "hora": "12:10:37",
                    "referencia": "",
                    "concepto": "",
                    "movimientoUId": "216",
                    "debitoCredito": "D",
                    "saldo": "148750.00",
                    "importe": "5000.00",
                    "numeroCheque": "0",
                    "tipoCambio": "0.000000",
                    "arbitraje": "0.000000",
                    "fecha": "2018-09-10"
                }
            ]
        },
        "fechaDesde": "2018-07-11"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "928",
        "Estado": "OK",
        "Servicio": "BTCuentasDeAhorro.ObtenerEstadoDeCuenta",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "17:33:12",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTEstadoCuentaCV', fields: [{ Nombre: 'fechaDesde', Tipo: 'Date', Comentarios: 'Fecha desde la cual se emite el estado de cuenta.' }, { Nombre: 'fechaHasta', Tipo: 'Date', Comentarios: 'Fecha hasta la cual se emite el estado de cuenta.' }, { Nombre: 'movimientos', Tipo: '[sBTMovimiento](#sbtmovimiento)', Comentarios: 'Datos de movimiento.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: 'saldoPartida', Tipo: 'Double', Comentarios: 'Saldo inicial.' }, { Nombre: '### sBTMovimiento', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTMovimiento', fields: [{ Nombre: 'arbitraje', Tipo: 'Double', Comentarios: 'Arbitraje de moneda.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto de movimiento.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTDatoAdicional](#sbtdatoadicional)', Comentarios: 'Listado de datos adicionales.' }, { Nombre: 'debitoCredito', Tipo: 'String', Comentarios: 'Debito o Credito (D/C)..' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de movimiento.' }, { Nombre: 'hora', Tipo: 'String', Comentarios: 'Hora de movimiento.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de movimiento.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de moneda' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador unico de movimiento.' }, { Nombre: 'numeroCheque', Tipo: 'Int', Comentarios: 'Numero de cheque' }, { Nombre: 'ordinal', Tipo: 'Int', Comentarios: 'Numero de ordinal.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia..' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo de cuenta vista.' }, { Nombre: 'tipoCambio', Tipo: 'Double', Comentarios: 'Tipo de cambio de moneda.' }, { Nombre: '### sBTDatoAdicional', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTDatoAdicional', fields: [{ Nombre: 'detalle', Tipo: 'String', Comentarios: 'Detalle de dato adicional.' }] }];
}
