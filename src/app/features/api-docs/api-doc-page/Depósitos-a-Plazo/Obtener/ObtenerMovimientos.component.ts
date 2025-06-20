import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerMovimientos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerMovimientosComponent1750446218580 {
  pageTitle        = 'Obtener Movimientos';
  description      = `Método para obtener un listado de los movimientos realizados para un producto depósito a plazo.`;
  pubName    = 'BTDepositosAPlazo.ObtenerMovimientos';
  programa   = 'RBTPG004';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'cantidadDias', Tipo: 'Int', Comentarios: 'Cantidad de días para atrás (Se puede parametrizar como parámetro Hidden para que el servicio siempre tome el mismo valor por defecto, o se puede dejar editable para que el usuario ingrese el valor).' }, { Nombre: 'cantidadMovimientos', Tipo: 'Int', Comentarios: 'Cantidad de movimientos (Se puede parametrizar como parámetro Hidden para que el servicio siempre tome el mismo valor por defecto, o se puede dejar editable para que el usuario ingrese el valor).' }];
  outputData = [{ Nombre: 'sdtEstadoDeCuenta', Tipo: '[sBTEstadoCuentaCV](#sbtestadocuentacv)', Comentarios: 'Datos de estado de cuenta.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de operación.' }, { Codigo: '30002', Descripcion: 'No se recuperó la operación para el identificador: [Número de identificador].' }, { Codigo: '30004', Descripcion: 'No se recibió la cantidad de días.' }, { Codigo: '30005', Descripcion: 'No se recibió la cantidad de movimientos.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.ObtenerMovimientos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>5</bts:operacionUId>
      </bts:BTDepositosAPlazo.ObtenerMovimientos>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerMovimientos=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "a519a7f39d4A8B5C60A82434"
	},
    "operacionUId": 5
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ObtenerMovimientosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtEstadoDeCuenta>
            <saldoPartida>0.00</saldoPartida>
            <fechaHasta>2018-10-09</fechaHasta>
            <productoUId>5</productoUId>
            <movimientos></movimientos>
            <fechaDesde>2018-07-11</fechaDesde>
         </sdtEstadoDeCuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>914</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ObtenerMovimientos</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:00:53</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerMovimientosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtEstadoDeCuenta": {
      "saldoPartida": "0.00",
      "fechaHasta": "2018-10-09",
      "productoUId": "5",
      "fechaDesde": "2018-07-11",
      "movimientos": {
         "sBTMovimiento": []
      },
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "915",
      "Estado": "OK",
      "Servicio": "BTDepositosAPlazo.ObtenerMovimientos",
      "Fecha": "2017-12-21",
      "Requerimiento": "",
      "Hora": "17:01:31",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTEstadoCuentaCV', fields: [{ Nombre: 'fechaDesde', Tipo: 'Date', Comentarios: 'Fecha desde la cual se emite el estado de cuenta.' }, { Nombre: 'fechaHasta', Tipo: 'Date', Comentarios: 'Fecha hasta la cual se emite el estado de cuenta.' }, { Nombre: 'movimientos', Tipo: '[sBTMovimiento](#sbtmovimiento)', Comentarios: 'Listado de movimientos.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'saldoPartida', Tipo: 'Double', Comentarios: 'Saldo inicial.' }, { Nombre: '### sBTMovimiento', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTMovimiento', fields: [{ Nombre: 'arbitraje', Tipo: 'Double', Comentarios: 'Arbitraje de moneda.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto de movimiento.' }, { Nombre: 'debitoCredito', Tipo: 'String', Comentarios: 'Débito o Crédito (D/C).' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de movimiento.' }, { Nombre: 'hora', Tipo: 'String', Comentarios: 'Hora de movimiento.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de movimiento.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de moneda.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento.' }, { Nombre: 'numeroCheque', Tipo: 'Int', Comentarios: 'Número de cheque.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo del depósito.' }, { Nombre: 'tipoCambio', Tipo: 'Double', Comentarios: 'Tipo de cambio de moneda.' }] }];
}
