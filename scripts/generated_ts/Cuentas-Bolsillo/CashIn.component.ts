import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-CashIn',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CashInComponent {
  // Cabecera e info-card
  pageTitle = 'Cash In';
  description = `Metodo para realizar un deposito en cuenta bolsillo.`;
  pubName    = 'BTCuentasBolsillo.CashIn';
  programa   = 'RBTPG611';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId', 'sdtTraspaso'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico del cliente.' }, { Nombre: 'sdtTraspaso', Tipo: '[sBTTraspaso](#sbttraspaso)', Comentarios: 'Datos del traspaso.' }];
  outputCols = ['sdtResultadoTraspaso'];
  outputData = [{ Nombre: 'sdtResultadoTraspaso', Tipo: '[sBTResultadoTraspaso](#sbtresultadotraspaso)', Comentarios: 'Datos resultado del traspaso.' }];
  errorCols  = ['30001', '30002', '30003', '30004', '30005', '30006', '30007', '30008', '30009', '30020', '30021', '30023', '30024', '30100'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador unico de operacion de origen.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador unico de operacion de destino.' }, { Codigo: '30003', Descripcion: 'Debe ingresar importe.' }, { Codigo: '30004', Descripcion: 'No se recupero la operacion origen para el Identificador: [Numero de identificador].' }, { Codigo: '30005', Descripcion: 'No se recupero la operacion destino para el Identificador: [Numero de identificador].' }, { Codigo: '30006', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30007', Descripcion: 'No se recupero la cuenta para el Identificador de cliente: [Numero de identificador].' }, { Codigo: '30008', Descripcion: 'La cuenta destino no pertenece al cliente [Numero de identificador].' }, { Codigo: '30009', Descripcion: 'La operacion origen no pertenece al cliente.' }, { Codigo: '30020', Descripcion: 'El estado de la operacion origen no permite operar.' }, { Codigo: '30021', Descripcion: 'El estado de la operacion destino no permite operar.' }, { Codigo: '30023', Descripcion: 'La cuenta origen y cuenta destino son diferentes.' }, { Codigo: '30024', Descripcion: 'La cuenta bolsillo no pertenece a la operacion principal.' }, { Codigo: '30100', Descripcion: 'Error en la contabilizacion.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasBolsillo.CashIn>
         <bts:Btinreq>
           <bts:Device>FP</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>64d9fe0781F955E77534D3E0</bts:Token>
            <bts:Requerimiento>10</bts:Requerimiento>
         </bts:Btinreq>
         <bts:clienteUId>5</bts:clienteUId>
         <bts:sdtTraspaso>
            <bts:operacionUIdOrigen>9</bts:operacionUIdOrigen>
            <bts:importeCredito>100</bts:importeCredito>
            <bts:importeDebito>100</bts:importeDebito>
            <bts:importe>100</bts:importe>
            <bts:operacionUIdDestino>8</bts:operacionUIdDestino>
            <bts:monedaId>0</bts:monedaId>
            <bts:concepto>cash in</bts:concepto>
         </bts:sdtTraspaso>
      </bts:BTCuentasBolsillo.CashIn>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasBolsillo?CashIn' \
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
    "clienteUId": 5,
    "sdtTraspaso": {
        "operacionUIdOrigen": 9,
        "importeCredito": 100,
        "importeDebito": 100,
        "importe": 100,
        "operacionUIdDestino": 8,
        "monedaId": 0,
        "concepto": "cash in"
    }
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasBolsillo.CashInResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FP</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>10</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>64d9fe0781F955E77534D3E0</Token>
         </Btinreq>
         <sdtResultadoTraspaso>
            <operacionUIdOrigen>9</operacionUIdOrigen>
            <idMovimiento>001001320010002820230731</idMovimiento>
            <operacionUIdDestino>8</operacionUIdDestino>
            <saldoOperacionOrigen>69919.00</saldoOperacionOrigen>
            <movimientoUId>15</movimientoUId>
         </sdtResultadoTraspaso>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>243</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasBolsillo.CashIn</Servicio>
            <Requerimiento>10</Requerimiento>
            <Fecha>2023-11-01</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>09:21:36</Hora>
         </Btoutreq>
      </BTCuentasBolsillo.CashInResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
    "Btinreq": {
        "Device": "1",
        "Usuario": "MINSTALADOR",
        "Token": "16c1cFC33CD93505A5382434",
        "Canal": "BTDIGITAL",
        "Requerimiento": "1"
    },
    "sdtResultadoTraspaso": {
        "operacionUIdOrigen": 9,
        "idMovimiento": 1.0013200100028202e+21,
        "operacionUIdDestino": 8,
        "saldoOperacionOrigen": 69919,
        "movimientoUId": 15
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "111399",
        "Estado": "OK",
        "Servicio": "BTCuentasBolsillo.CashIn",
        "Requerimiento": "1",
        "Fecha": "2023-05-10",
        "Canal": "BTDIGITAL",
        "Hora": "15:10:52"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto del Traspaso.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe del Movimiento.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de Moneda.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador de operacion de destino del traspaso.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador de operacion de origen del traspaso.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTResultadoTraspaso', Tipo: '', Comentarios: '' }, { Nombre: '### sBTResultadoTraspaso', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTResultadoTraspaso son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'idMovimiento', Tipo: 'String', Comentarios: 'Identificador de movimiento string.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador unico de movimiento.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador unico de operacion destino del traspaso.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de origen del traspaso.' }, { Nombre: 'saldoOperacionOrigen', Tipo: 'Double', Comentarios: 'Saldo actual de operacion de origen.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
