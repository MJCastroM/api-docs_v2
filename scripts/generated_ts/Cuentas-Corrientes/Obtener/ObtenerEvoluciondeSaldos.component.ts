import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerEvoluciondeSaldos',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerEvoluciondeSaldosComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Evolucion de Saldos';
  description = `Metodo para obtener la evolucion del saldo de un producto de cuenta corriente.`;
  pubName    = 'BTCuentasCorrientes.ObtenerEvolucionDeSaldos';
  programa   = 'RBTPG005';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }];
  outputCols = ['sdtEvolucionSaldo'];
  outputData = [{ Nombre: 'sdtEvolucionSaldo', Tipo: '[sBTEvolucionSaldos](#sbtevolucionsaldos)', Comentarios: 'Datos de evolucion de saldos.' }];
  errorCols  = ['30001', '30002', '30003'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador unico de operacion.' }, { Codigo: '30002', Descripcion: 'No se recupero la operacion para el identificador: [Numero de identificador].' }, { Codigo: '30003', Descripcion: 'La operacion ingresada no corresponde a una cuenta corriente.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.ObtenerEvolucionDeSaldos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>9</bts:operacionUId>
      </bts:BTCuentasCorrientes.ObtenerEvolucionDeSaldos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerEvolucionDeSaldos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 9
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.ObtenerEvolucionDeSaldosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtEvolucionSaldo>
            <productoUId>9</productoUId>
            <saldos>
               <sBTSaldoMensual>
                  <anio>2018</anio>
                  <mes>9</mes>
                  <saldo>0.00</saldo>
               </sBTSaldoMensual>
               <sBTSaldoMensual>
                  <anio>2018</anio>
                  <mes>8</mes>
                  <saldo>0.00</saldo>
               </sBTSaldoMensual>
               <sBTSaldoMensual>
                  <anio>2018</anio>
                  <mes>7</mes>
                  <saldo>0.00</saldo>
               </sBTSaldoMensual>
               <sBTSaldoMensual>
                  <anio>2018</anio>
                  <mes>6</mes>
                  <saldo>0.00</saldo>
               </sBTSaldoMensual>
               <sBTSaldoMensual>
                  <anio>2018</anio>
                  <mes>5</mes>
                  <saldo>0.00</saldo>
               </sBTSaldoMensual>
               <sBTSaldoMensual>
                  <anio>2018</anio>
                  <mes>4</mes>
                  <saldo>0.00</saldo>
               </sBTSaldoMensual>
               <sBTSaldoMensual>
                  <anio>2018</anio>
                  <mes>3</mes>
                  <saldo>0.00</saldo>
               </sBTSaldoMensual>
               <sBTSaldoMensual>
                  <anio>2018</anio>
                  <mes>2</mes>
                  <saldo>0.00</saldo>
               </sBTSaldoMensual>
               <sBTSaldoMensual>
                  <anio>2018</anio>
                  <mes>1</mes>
                  <saldo>0.00</saldo>
               </sBTSaldoMensual>
               <sBTSaldoMensual>
                  <anio>2017</anio>
                  <mes>12</mes>
                  <saldo>0.00</saldo>
               </sBTSaldoMensual>
               <sBTSaldoMensual>
                  <anio>2017</anio>
                  <mes>11</mes>
                  <saldo>0.00</saldo>
               </sBTSaldoMensual>
               <sBTSaldoMensual>
                  <anio>2017</anio>
                  <mes>10</mes>
                  <saldo>0.00</saldo>
               </sBTSaldoMensual>
            </saldos>
         </sdtEvolucionSaldo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>930</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.ObtenerEvolucionDeSaldos</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:35:25</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerEvolucionDeSaldosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtEvolucionSaldo": {
        "productoUId": "9",
        "saldos": {
            "sBTSaldoMensual": [
                {
                    "saldo": "0.00",
                    "mes": "9",
                    "anio": "2018"
                },
                {
                    "saldo": "0.00",
                    "mes": "8",
                    "anio": "2018"
                },
                {
                    "saldo": "0.00",
                    "mes": "7",
                    "anio": "2018"
                },
                {
                    "saldo": "0.00",
                    "mes": "6",
                    "anio": "2018"
                },
                {
                    "saldo": "0.00",
                    "mes": "5",
                    "anio": "2018"
                },
                {
                    "saldo": "0.00",
                    "mes": "4",
                    "anio": "2018"
                },
                {
                    "saldo": "0.00",
                    "mes": "3",
                    "anio": "2018"
                },
                {
                    "saldo": "0.00",
                    "mes": "2",
                    "anio": "2018"
                },
                {
                    "saldo": "0.00",
                    "mes": "1",
                    "anio": "2018"
                },
                {
                    "saldo": "0.00",
                    "mes": "12",
                    "anio": "2017"
                },
                {
                    "saldo": "0.00",
                    "mes": "11",
                    "anio": "2017"
                },
                {
                    "saldo": "0.00",
                    "mes": "10",
                    "anio": "2017"
                }
            ]
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "931",
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.ObtenerEvolucionDeSaldos",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "17:35:37",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: 'saldos', Tipo: '[sBTSaldoMensual](#sbtsaldomensual)', Comentarios: 'Listado de saldo mensual.' }, { Nombre: '### sBTSaldoMensual', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTSaldoMensual son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'anio', Tipo: 'Short', Comentarios: 'Ano.' }, { Nombre: 'mes', Tipo: 'Byte', Comentarios: 'Mes.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo mensual.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
