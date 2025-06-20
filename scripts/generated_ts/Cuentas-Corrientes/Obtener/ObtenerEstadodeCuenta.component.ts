import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerEstadodeCuenta',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerEstadodeCuentaComponent1750446218500 {
  pageTitle        = 'Obtener Estado de Cuenta';
  description      = `Método para obtener el estado de cuenta de un producto de cuenta corriente.`;
  pubName    = 'BTCuentasCorrientes.ObtenerEstadoDeCuenta';
  programa   = 'RBTPG004';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'cantidadDias', Tipo: 'Int', Comentarios: 'Cantidad de días para atrás (Se puede parametrizar como parámetro Hidden para que el servicio siempre tome el mismo valor por defecto, o se puede dejar editable para que el usuario ingrese el valor).' }, { Nombre: 'cantidadMovimientos', Tipo: 'Int', Comentarios: 'Cantidad de movimientos (Se puede parametrizar como parámetro Hidden para que el servicio siempre tome el mismo valor por defecto, o se puede dejar editable para que el usuario ingrese el valor).' }];
  outputData = [{ Nombre: 'sdtEstadoDeCuenta', Tipo: '[sBTEstadoCuentaCV](#sbtestadocuentacv)', Comentarios: 'Datos de estado de cuenta.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.ObtenerEstadoDeCuenta>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>9</bts:operacionUId>
      </bts:BTCuentasCorrientes.ObtenerEstadoDeCuenta>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerEstadoDeCuenta=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: d377be9a-1521-dfea-bdb6-2a2771ba0303\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 9
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.ObtenerEstadoDeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
                  <movimientoUId>161</movimientoUId>
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
               ...
            </movimientos>
            <fechaDesde>2018-07-11</fechaDesde>
         </sdtEstadoDeCuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>927</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.ObtenerEstadoDeCuenta</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:32:38</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerEstadoDeCuentaResponse>
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
                    "movimientoUId": "161",
                    "debitoCredito": "D",
                    "saldo": "143750.00",
                    "importe": "5000.00",
                    "numeroCheque": "0",
                    "tipoCambio": "0.000000",
                    "arbitraje": "0.000000",
                    "fecha": "2018-10-09"
                },
                ...
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
        "Servicio": "BTCuentasCorrientes.ObtenerEstadoDeCuenta",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "17:33:12",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTEstadoCuentaCV', fields: [{ Nombre: 'fechaDesde', Tipo: 'Date', Comentarios: 'Fecha desde la cual se emite el estado de cuenta.' }, { Nombre: 'fechaHasta', Tipo: 'Date', Comentarios: 'Fecha hasta la cual se emite el estado de cuenta.' }, { Nombre: 'movimientos', Tipo: '[sBTMovimiento](#sbtmovimiento)', Comentarios: 'Datos de movimiento.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'saldoPartida', Tipo: 'Double', Comentarios: 'Saldo inicial.' }, { Nombre: '### sBTMovimiento', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTMovimiento', fields: [{ Nombre: 'arbitraje', Tipo: 'Double', Comentarios: 'Arbitraje de moneda.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto de movimiento.' }, { Nombre: 'debitoCredito', Tipo: 'String', Comentarios: 'Débito o Crédito (D/C).' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de movimiento.' }, { Nombre: 'hora', Tipo: 'String', Comentarios: 'Hora de movimiento.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de movimiento.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de moneda.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento.' }, { Nombre: 'numeroCheque', Tipo: 'Int', Comentarios: 'Número de cheque.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo de Cuenta Vista.' }, { Nombre: 'tipoCambio', Tipo: 'Double', Comentarios: 'Tipo de cambio de moneda.' }] }];
}
