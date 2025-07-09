import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-CashOut',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CashOutComponent1751987196838 {
  pageTitle        = 'Cash Out';
  description      = `Método para realizar un traspaso hacia la cuenta principal.`;
  pubName    = 'BTCuentasBolsillo.CashOut';
  programa   = 'RBTPG612';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'sdtTraspaso', Tipo: '[sBTTraspaso](#sbttraspaso)', Comentarios: 'Datos del traspaso.' }];
  outputData = [{ Nombre: 'sdtResultadoTraspaso', Tipo: '[sBTResultadoTraspaso](#sbtresultadotraspaso)', Comentarios: 'Datos resultado del traspaso.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador único de operación de origen.' }, { Código: '30002', Descripción: 'No se recibió el identificador único de operación de destino.' }, { Código: '30003', Descripción: 'Debe ingresar importe.' }, { Código: '30004', Descripción: 'No se recuperó la operación origen para el Identificador: [Número de identificador].' }, { Código: '30005', Descripción: 'No se recuperó la operación destino para el Identificador: [Número de identificador].' }, { Código: '30006', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30007', Descripción: 'No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].' }, { Código: '30008', Descripción: 'La cuenta destino no pertenece al cliente [Número de identificador].' }, { Código: '30009', Descripción: 'La operación origen no pertenece al cliente.' }, { Código: '30020', Descripción: 'El estado de la operación origen no permite operar.' }, { Código: '30021', Descripción: 'El estado de la operación destino no permite operar.' }, { Código: '30023', Descripción: 'La cuenta origen y cuenta destino son diferentes.' }, { Código: '30024', Descripción: 'La cuenta bolsillo no pertenece a la operación principal.' }, { Código: '30100', Descripción: 'Error en la contabilización.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasBolsillo.CashOut>
         <bts:Btinreq>
            <bts:Requerimiento>10</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>364730bc6eF955E77534D3E0</bts:Token>
            <bts:Device>FP</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>5</bts:clienteUId>
         <bts:sdtTraspaso>
            <bts:operacionUIdOrigen>8</bts:operacionUIdOrigen>
            <bts:importeCredito>100</bts:importeCredito>
            <bts:importeDebito>100</bts:importeDebito>
            <bts:importe>100</bts:importe>
            <bts:operacionUIdDestino>9</bts:operacionUIdDestino>
            <bts:monedaId>0</bts:monedaId>
            <bts:concepto>cash out</bts:concepto>
         </bts:sdtTraspaso>
      </bts:BTCuentasBolsillo.CashOut>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasBolsillo?CashOut\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cFC33CD93505A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
    "clienteUId": 5,
    "sdtTraspaso": {
        "operacionUIdOrigen": 9,
        "importeCredito": 100,
        "importeDebito": 100,
        "importe": 100,
        "operacionUIdDestino": 9,
        "monedaId": 0,
        "concepto": "cash out"
    }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasBolsillo.CashOutResponse xmlns=http://uy.com.dlya.bantotal/BTSOA/>
         <Btinreq>
            <Device>FP</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>10</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>364730bc6eF955E77534D3E0</Token>
         </Btinreq>
         <sdtResultadoTraspaso>
            <operacionUIdOrigen>8</operacionUIdOrigen>
            <idMovimiento>001001320020000520230731</idMovimiento>
            <operacionUIdDestino>9</operacionUIdDestino>
            <saldoOperacionOrigen>21981.00</saldoOperacionOrigen>
            <movimientoUId>16</movimientoUId>
         </sdtResultadoTraspaso>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>254</Numero>
            <Servicio>BTCuentasBolsillo.CashOut</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-11-01</Fecha>
            <Requerimiento>10</Requerimiento>
            <Hora>09:48:58</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasBolsillo.CashOutResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
    "Btinreq": {
        "Device": "1",
        "Usuario": "MINSTALADOR",
        "Token": "16c1cFC33CD93505A5382434",
        "Canal": "BTDIGITAL",
        "Requerimiento": "1"
    },
    "sdtResultadoTraspaso": {
        "operacionUIdOrigen": 8,
        "idMovimiento": 001001320020000520230731,
        "operacionUIdDestino": 9,
        "saldoOperacionOrigen": 21981.00,
        "movimientoUId": 16
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "111399",
        "Estado": "OK",
        "Servicio": "BTCuentasBolsillo.CashOut",
        "Requerimiento": "1",
        "Fecha": "2023-05-10",
        "Canal": "BTDIGITAL",
        "Hora": "15:10:52"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTTraspaso', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto del Traspaso.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe del Movimiento.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de Moneda.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador de operación de destino del traspaso.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador de operación de origen del traspaso.' }] }, { typeName: 'sBTResultadoTraspaso', fields: [{ Nombre: 'idMovimiento', Tipo: 'String', Comentarios: 'Identificador de movimiento string.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador único de operación destino del traspaso.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador único de operación de origen del traspaso.' }, { Nombre: 'saldoOperacionOrigen', Tipo: 'Double', Comentarios: 'Saldo actual de operación de origen.' }] }];
}
