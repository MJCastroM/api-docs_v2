import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerEvoluciondeSaldos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerEvoluciondeSaldosComponent1751987197049 {
  pageTitle        = 'Obtener Evolución de Saldos';
  description      = `Método para obtener la evolución del saldo de un producto de cuenta de ahorro.`;
  pubName    = 'BTCuentasDeAhorro.ObtenerEvolucionDeSaldos';
  programa   = 'RBTPG005';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }];
  outputData = [{ Nombre: 'sdtEvolucionSaldo', Tipo: '[sBTEvolucionSaldos](#sbtevolucionsaldos)', Comentarios: 'Datos de la evolución de saldos.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador único de operación.' }, { Código: '30002', Descripción: 'No se recuperó Operación para el identificador: [Número de identificador].' }, { Código: '30003', Descripción: 'La operación ingresada no corresponde a una cuenta de ahorro.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasDeAhorro.ObtenerEvolucionDeSaldos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>9</bts:operacionUId>
      </bts:BTCuentasDeAhorro.ObtenerEvolucionDeSaldos>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ObtenerEvolucionDeSaldos=\' \
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
      <BTCuentasDeAhorro.ObtenerEvolucionDeSaldosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
               ...
            </saldos>
         </sdtEvolucionSaldo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>930</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasDeAhorro.ObtenerEvolucionDeSaldos</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:35:25</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasDeAhorro.ObtenerEvolucionDeSaldosResponse>
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
                ...
            ]
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "931",
        "Estado": "OK",
        "Servicio": "BTCuentasDeAhorro.ObtenerEvolucionDeSaldos",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "17:35:37",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTEvolucionSaldos', fields: [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'saldos', Tipo: '[sBTSaldoMensual](#sbtsaldomensual)', Comentarios: 'Listado de saldo mensual.' }] }, { typeName: 'sBTSaldoMensual', fields: [{ Nombre: 'anio', Tipo: 'Short', Comentarios: 'Año.' }, { Nombre: 'mes', Tipo: 'Byte', Comentarios: 'Mes.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo mensual.' }] }];
}
