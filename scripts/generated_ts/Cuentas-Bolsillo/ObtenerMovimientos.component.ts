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
  description = `Metodo para obtener los movimientos de una cuenta bolsillo.`;
  pubName    = 'BTCuentasBolsillo.ObtenerMovimientos';
  programa   = 'RBTPG618';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['bolsilloUId', 'cantDias', 'cantMov'];
  inputData  = [{ Nombre: 'bolsilloUId', Tipo: 'Long', Comentarios: 'Identificador unico del bolsillo.' }, { Nombre: 'cantDias', Tipo: 'Int', Comentarios: 'Cantidad de dias.' }, { Nombre: 'cantMov', Tipo: 'Int', Comentarios: 'Cantidad de movimientos.' }];
  outputCols = ['sdtEstadoDeCuenta'];
  outputData = [{ Nombre: 'sdtEstadoDeCuenta', Tipo: '[sBTEstadoCuentaCV](#sbtestadocuentacv)', Comentarios: 'Datos de estado de cuenta.' }];
  errorCols  = ['30001', '30002', '30003', '30004', '30005'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador unico de operacion.' }, { Codigo: '30002', Descripcion: 'No se recupero la operacion para el identificador: [Numero de identificador].' }, { Codigo: '30003', Descripcion: 'La operacion ingresada no corresponde a una cuenta bolsillo.' }, { Codigo: '30004', Descripcion: 'No se recibio la cantidad de dias.' }, { Codigo: '30005', Descripcion: 'No se recibio la cantidad de movimientos.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasBolsillo.ObtenerMovimientos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>CC6345192D8633F531F01D1D</bts:Token>
         </bts:Btinreq>
         <bts:BolsilloUID>18848</bts:BolsilloUID>
         <bts:CantDias>4</bts:CantDias>
         <bts:CantMov>3</bts:CantMov>
      </bts:BTCuentasBolsillo.ObtenerMovimientos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasBolsillo?ObtenerMovimientos' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cFC33CD93505A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
    "bolsilloUId": 18848,
    "cantDias": 281,
    "cantMov": 281
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasBolsillo.ObtenerMovimientosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>CC6345192D8633F531F01D1D</Token>
         </Btinreq>
         <sdtEstadoDeCuenta>
            <saldoPartida>0.00</saldoPartida>
            <fechaHasta>2020-04-30</fechaHasta>
            <productoUID>512</productoUID>
            <movimientos>
               <sBTMovimiento>
                  <moneda/>
                  <hora>16:39:10</hora>
                  <referencia/>
                  <concepto>Cash Out</concepto>
                  <movimientoUId>1842</movimientoUId>
                  <datosAdicionales></datosAdicionales>
                  <debitoCredito>D</debitoCredito>
                  <saldo>-910000.00</saldo>
                  <ordinal>85001</ordinal>
                  <importe>910000.00</importe>
                  <numeroCheque>0</numeroCheque>
                  <tipoCambio>0.00</tipoCambio>
                  <arbitraje>0.00</arbitraje>
                  <fecha>2020-04-30</fecha>
               </sBTMovimiento>
            </movimientos>
            <fechaDesde>2020-04-26</fechaDesde>
         </sdtEstadoDeCuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>228478</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasBolsillo.ObtenerMovimientos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-11-01</Fecha>
            <Hora>08:30:40</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasBolsillo.ObtenerMovimientosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
    "Btinreq": {
        "Device": "1",
        "Usuario": "MINSTALADOR",
        "Token": "16c1cFC33CD93505A5382434",
        "Canal": "BTDIGITAL",
        "Requerimiento": "1"
    },
    "sdtEstadoDeCuenta": {
        "saldoPartida": 0,
        "fechaHasta": "2020-04-30",
        "productoUID": 512,
        "movimientos": {
        "sBTMovimiento": {
            "moneda": "",
            "hora": "16:39:10",
            "referencia": "",
            "concepto": "Cash Out",
            "movimientoUId": 1842,
            "datosAdicionales": "",
            "debitoCredito": "D",
            "saldo": -910000,
            "ordinal": 85001,
            "importe": 910000,
            "numeroCheque": 0,
            "tipoCambio": 0,
            "arbitraje": 0,
            "fecha": "2020-04-30"
        }
        },
        "fechaDesde": "2020-04-26"
    },
    "Btoutreq": {
        "Numero": "111399",
        "Estado": "OK",
        "Servicio": "BTCuentasBolsillo.ObtenerMovimientos",
        "Requerimiento": "1",
        "Fecha": "2023-05-10",
        "Canal": "BTDIGITAL",
        "Hora": "15:10:52"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'fechaDesde', Tipo: 'Date', Comentarios: 'Fecha desde la cual se emite el estado de cuenta.' }, { Nombre: 'fechaHasta', Tipo: 'Date', Comentarios: 'Fecha hasta la cual se emite el estado de cuenta.' }, { Nombre: 'movimientos', Tipo: '[sBTMovimiento](#sbtmovimiento)', Comentarios: 'Datos de movimiento.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: 'saldoPartida', Tipo: 'Double', Comentarios: 'Saldo inicial.' }, { Nombre: '### sBTMovimiento', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTMovimiento son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'arbitraje', Tipo: 'Double', Comentarios: 'Arbitraje de moneda.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto de movimiento.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTDatoAdicional](#sbtdatoadicional)', Comentarios: 'Listado de datos adicionales.' }, { Nombre: 'debitoCredito', Tipo: 'String', Comentarios: 'Debito o Credito (D/C)..' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de movimiento.' }, { Nombre: 'hora', Tipo: 'String', Comentarios: 'Hora de movimiento.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de movimiento.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de moneda' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador unico de movimiento.' }, { Nombre: 'numeroCheque', Tipo: 'Int', Comentarios: 'Numero de cheque' }, { Nombre: 'ordinal', Tipo: 'Int', Comentarios: 'Numero de ordinal.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia..' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo de cuenta vista.' }, { Nombre: 'tipoCambio', Tipo: 'Double', Comentarios: 'Tipo de cambio de moneda.' }, { Nombre: '### sBTDatoAdicional', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'detalle', Tipo: 'String', Comentarios: 'Detalle de dato adicional.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
