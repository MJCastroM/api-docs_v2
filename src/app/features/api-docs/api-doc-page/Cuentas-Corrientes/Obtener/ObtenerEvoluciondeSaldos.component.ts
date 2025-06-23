import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerEvoluciondeSaldos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerEvoluciondeSaldosComponent1750713393765 {
  pageTitle        = 'Obtener Evolución de Saldos';
  description      = `Método para obtener la evolución del saldo de un producto de cuenta corriente.`;
  pubName    = 'BTCuentasCorrientes.ObtenerEvolucionDeSaldos';
  programa   = 'RBTPG005';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }];
  outputData = [{ Nombre: 'sdtEvolucionSaldo', Tipo: '[sBTEvolucionSaldos](#sbtevolucionsaldos)', Comentarios: 'Datos de evolución de saldos.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de operación.' }, { Codigo: '30002', Descripcion: 'No se recuperó la operación para el identificador: [Número de identificador].' }, { Codigo: '30003', Descripcion: 'La operación ingresada no corresponde a una cuenta corriente.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerEvolucionDeSaldos=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
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
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTEvolucionSaldos', fields: [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'saldos', Tipo: '[sBTSaldoMensual](#sbtsaldomensual)', Comentarios: 'Listado de saldo mensual.' }] }, { typeName: 'sBTSaldoMensual', fields: [{ Nombre: 'anio', Tipo: 'Short', Comentarios: 'Año.' }, { Nombre: 'mes', Tipo: 'Byte', Comentarios: 'Mes.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo mensual.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
