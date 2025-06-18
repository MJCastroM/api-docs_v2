import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerEstadodeCuentaporPeriodo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerEstadodeCuentaporPeriodoComponent1750268695814 {
  pageTitle        = 'Obtener Estado de Cuenta por Período';
  description      = `Método para obtener el estado de cuenta y los movimientos realizados para una cuenta vista en determinado rango de fechas.`;
  pubName    = 'BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo';
  programa   = 'RBTPG250';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'fechaDesde', Tipo: 'Date', Comentarios: 'Fecha desde la cual se emite el estado de cuenta.' }, { Nombre: 'fechaHasta', Tipo: 'Date', Comentarios: 'Fecha hasta la cual se emite el estado de cuenta.' }, { Nombre: 'cantidadMovimientos', Tipo: 'Int', Comentarios: 'Cantidad de movimientos [Hidden: Valor fijo \'20\' para este método].' }];
  outputData = [{ Nombre: 'sdtEstadoDeCuenta', Tipo: '[sBTEstadoCuentaCV](#sbtestadocuentacv)', Comentarios: 'Datos de Estado de Cuenta.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de operación.' }, { Codigo: '30002', Descripcion: 'No se recuperó la operación para el Identificador: [Número de identificador].' }, { Codigo: '30004', Descripcion: 'La operación ingresada no corresponde a una cuenta vista.' }, { Codigo: '30005', Descripcion: 'Debe ingresar cantidad de movimientos.' }, { Codigo: '30006', Descripcion: 'Debe ingresar la fecha desde.' }, { Codigo: '30007', Descripcion: 'Debe ingresar la fecha hasta.' }, { Codigo: '30008', Descripcion: 'Fecha desde tiene que ser menor a fecha hasta.' }, { Codigo: '40001', Descripcion: 'No existe una empresa con los datos ingresados.' }, { Codigo: '40002', Descripcion: 'No se pudo resolver la empresa del usuario.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>GP</bts:Device>
            <bts:Token>ad9ab7ecba4A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:operacionUId>523</bts:operacionUId>
         <bts:fechaDesde>2018-12-09</bts:fechaDesde>
         <bts:fechaHasta>2018-12-10</bts:fechaHasta>
         <bts:cantidadMovimientos>2</bts:cantidadMovimientos>
      </bts:BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?ObtenerEstadoDeCuentaPorPeriodo \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
      "operacionUId": "523",
      "fechaDesde": "2018-12-09",
      "fechaHasta": "2018-12-10",
      "cantidadMovimientos": "2"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ad9ab7ecba4A8B5C60A82434</Token>
         </Btinreq>
         <sdtEstadoDeCuenta>
            <saldoPartida>166666.67</saldoPartida>
            <fechaHasta>2018-12-10</fechaHasta>
            <productoUID>523</productoUID>
            <movimientos>
               <sBTMovimiento>
                  <moneda>$</moneda>
                  <hora>13:56:48</hora>
                  <referencia/>
                  <concepto>Transferencia entre cuentas</concepto>
                  <movimientoUId>344</movimientoUId>
                  <datosAdicionales></datosAdicionales>
                  <debitoCredito>C</debitoCredito>
                  <saldo>246666.67</saldo>
                  <importe>80000.00</importe>
                  <numeroCheque>0</numeroCheque>
                  <tipoCambio>0.000000</tipoCambio>
                  <arbitraje>0.000000</arbitraje>
                  <fecha>2018-12-10</fecha>
               </sBTMovimiento>
               <sBTMovimiento>
                  <moneda>$</moneda>
                  <hora>13:55:11</hora>
                  <referencia/>
                  <concepto>Transferencia entre cuentas</concepto>
                  <movimientoUId>343</movimientoUId>
                  <datosAdicionales></datosAdicionales>
                  <debitoCredito>C</debitoCredito>
                  <saldo>166666.67</saldo>
                  <importe>20000.00</importe>
                  <numeroCheque>0</numeroCheque>
                  <tipoCambio>0.000000</tipoCambio>
                  <arbitraje>0.000000</arbitraje>
                  <fecha>2018-12-10</fecha>
               </sBTMovimiento>
            </movimientos>
            <fechaDesde>2018-12-09</fechaDesde>
         </estadoDeCuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>546</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-08-15</Fecha>
            <Hora>13:57:44</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
      "sdtEstadoDeCuenta": {
         "saldoPartida": "166666.67",
         "fechaHasta": "2018-12-10",
         "productoUID": "523",
         "movimientos": [
            {
            "moneda": "$",
            "hora": "13:56:48",
            "concepto": "Transferencia entre cuentas",
            "movimientoUId": "344",
            "debitoCredito": "C",
            "saldo": "246666.67",
            "importe": "80000.00",
            "numeroCheque": "0",
            "tipoCambio": "0.000000",
            "arbitraje": "0.000000",
            "fecha": "2018-12-10"
            },
            {
            "moneda": "$",
            "hora": "13:55:11",
            "concepto": "Transferencia entre cuentas",
            "movimientoUId": "343",
            "debitoCredito": "C",
            "saldo": "166666.67",
            "importe": "20000.00",
            "numeroCheque": "0",
            "tipoCambio": "0.000000",
            "arbitraje": "0.000000",
            "fecha": "2018-12-10"
            }
         ]	 
	  },
	  "fechaDesde": "2018-12-09",
	  "Btoutreq": {
		"Numero": "546",
		"Estado": "OK",
		"Servicio": "BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo",
		"Requerimiento": "1",
		"Fecha": "2019-08-15",
		"Hora": "13:57:44",
		"Canal": "BTDIGITAL"
	}
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTEstadoCuentaCV', fields: [{ Nombre: 'fechaDesde', Tipo: 'Date', Comentarios: 'Fecha desde la cual se emite el estado de cuenta.' }, { Nombre: 'fechaHasta', Tipo: 'Date', Comentarios: 'Fecha hasta la cual se emite el estado de cuenta.' }, { Nombre: 'movimientos', Tipo: '[sBTMovimiento](#sbtmovimiento)', Comentarios: 'Datos de Movimiento.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador de producto.' }, { Nombre: 'saldoPartida', Tipo: 'Double', Comentarios: 'Saldo inicial.' }, { Nombre: '### sBTMovimiento', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTMovimiento', fields: [{ Nombre: 'arbitraje', Tipo: 'Double', Comentarios: 'Arbitraje de moneda.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto de movimiento.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTDatoAdicional](#sbtdatoadicional)', Comentarios: 'Datos Adicionales.' }, { Nombre: 'debitoCredito', Tipo: 'String', Comentarios: 'Débito o Crédito (D o C).' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'fecha de movimiento.' }, { Nombre: 'hora', Tipo: 'String', Comentarios: 'hora de movimiento.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de movimiento.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de moneda.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador de movimiento.' }, { Nombre: 'numeroCheque', Tipo: 'Int', Comentarios: 'Número de cheque.' }, { Nombre: 'ordinal', Tipo: 'Short', Comentarios: 'Ordinal.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo de Cuenta Vista.' }, { Nombre: 'tipoCambio', Tipo: 'Double', Comentarios: 'Tipo de cambio de moneda.' }, { Nombre: '### sBTDatoAdicional', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTDatoAdicional', fields: [{ Nombre: 'detalle', Tipo: 'String', Comentarios: 'Detalle del dato adicional.' }] }];
}
