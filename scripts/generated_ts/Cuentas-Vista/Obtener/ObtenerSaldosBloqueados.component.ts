import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerSaldosBloqueados',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerSaldosBloqueadosComponent1750272791198 {
  pageTitle        = 'Obtener Saldos Bloqueados';
  description      = `Método para obtener los saldos bloqueados de una cuenta vista.`;
  pubName    = 'BTCuentasVista.ObtenerSaldosBloqueados';
  programa   = 'RBTPG551';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }];
  outputData = [{ Nombre: 'sdtSaldosBloqueados', Tipo: '[sBTBloqueoSaldo](#sbtbloqueosaldo)', Comentarios: 'Listado de saldos bloqueados.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de operación.' }, { Codigo: '30002', Descripcion: 'No se encontró el identificador de la operación para la cuenta vista bloqueada.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.ObtenerSaldosBloqueados>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9436BF7CB5B5BB404CC6E5A7</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>213</bts:operacionUId>
      </bts:BTCuentasVista.ObtenerSaldosBloqueados>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerSaldosBloqueados\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "operacionUId": 213,
    }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ObtenerSaldosBloqueadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9436BF7CB5B5BB404CC6E5A7</Token>
         </Btinreq>
         <sdtSaldosBloqueados>
            <sBTBloqueoSaldo>
               <fechaVencimiento>2025-10-15T00:00:00</fechaVencimiento>
               <motivo/>
               <importe>50000.00</importe>
               <bloqueoId>7</bloqueoId>
            </sBTBloqueoSaldo>
            <sBTBloqueoSaldo>
               <fechaVencimiento>2025-10-15T00:00:00</fechaVencimiento>
               <motivo/>
               <importe>50000.00</importe>
               <bloqueoId>8</bloqueoId>
            </sBTBloqueoSaldo>
         </sdtSaldosBloqueados>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20364</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.ObtenerSaldosBloqueados</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2024-05-07</Fecha>
            <Hora>17:56:50</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ObtenerSaldosBloqueadosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "sdtSaldosBloqueados": {
    "sBTBloqueoSaldo": [
      {
        "fechaVencimiento": "2025-10-15T00:00:00",
        "motivo": "",
        "importe": 50000,
        "bloqueoId": 7
      },
      {
        "fechaVencimiento": "2025-10-15T00:00:00",
        "motivo": "",
        "importe": 50000,
        "bloqueoId": 8
      }
    ]
  },
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTCuentasVista.ObtenerSaldosBloqueados",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTBloqueoSaldo', fields: [{ Nombre: 'bloqueoId', Tipo: 'Long', Comentarios: 'Identificador del bloqueo.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'motivo', Tipo: 'String', Comentarios: 'Motivo.' }] }];
}
