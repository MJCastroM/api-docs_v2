import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-TraspasarEntreCuentasdelaMismaPersona',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class TraspasarEntreCuentasdelaMismaPersonaComponent {
  // Cabecera e info-card
  pageTitle = 'Traspasar Entre Cuentas de la Misma Persona';
  description = `Metodo para realizar un traspaso entre cuentas cuyo titular sea la misma persona.`;
  pubName    = 'BTCuentasVista.TraspasarCuentasMismoTitular';
  programa   = 'RBTPG255';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['personaUId', 'sdtTraspaso'];
  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'sdtTraspaso', Tipo: '[sBTTraspaso](#sbttraspaso)', Comentarios: 'Datos del traspaso.' }];
  outputCols = ['sdtResultadoTraspaso'];
  outputData = [{ Nombre: 'sdtResultadoTraspaso', Tipo: '[sBTResultadoTraspaso](#sbtresultadotraspaso)', Comentarios: 'Datos resultado del traspaso.' }];
  errorCols  = ['30001', '30002', '30003', '30004', '30005', '30006', '30007', '31003', '40001', '40002', '51005', '51006', '51007'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador unico de operacion de origen.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador unico de operacion de destino.' }, { Codigo: '30003', Descripcion: 'Debe ingresar importe.' }, { Codigo: '30004', Descripcion: 'No se recupero la operacion origen para el Identificador.' }, { Codigo: '30005', Descripcion: 'No se recupero la operacion origen para el Identificador.' }, { Codigo: '30006', Descripcion: 'No se recibio el identificador de persona.' }, { Codigo: '30007', Descripcion: 'La operacion origen y operacion destino no pueden ser iguales.' }, { Codigo: '31003', Descripcion: 'No existe registro para el identificador unico.' }, { Codigo: '40001', Descripcion: 'La persona no integra la cuenta de origen.' }, { Codigo: '40002', Descripcion: 'La persona no integra la cuenta de destino.' }, { Codigo: '51005', Descripcion: 'La moneda del traspaso debe coincidir con la moneda de la operacion origen.' }, { Codigo: '51006', Descripcion: 'La operacion origen no existe.' }, { Codigo: '51007', Descripcion: 'La operacion destino no existe.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.TraspasarCuentasMismoTitular>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>GP</bts:Device>
            <bts:Token>cec2eed9744A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:personaUId>101</bts:personaUId>
         <bts:sdtTraspaso>
            <bts:operacionUIdOrigen>461</bts:operacionUIdOrigen>
            <bts:operacionUIdDestino>465</bts:operacionUIdDestino>
            <bts:monedaId>0</bts:monedaId>
            <bts:importe>1000</bts:importe>
            <bts:concepto>?</bts:concepto>
         </bts:sdtTraspaso>
      </bts:BTCuentasVista.TraspasarCuentasMismoTitular>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?TraspasarCuentasMismoTitular \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
      "personaUId": "101",
      "sdtTraspaso": {
        "operacionUIdOrigen": "461",
        "operacionUIdDestino": "465",
        "monedaId": "0",
        "importe": "1000",
        "concepto": "?"
      }
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.TraspasarCuentasMismoTitularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>cec2eed9744A8B5C60A82434</Token>
         </Btinreq>
         <sdtResultadoTraspaso>
            <operacionUIdOrigen>461</operacionUIdOrigen>
            <idMovimiento>00100001000500075000000005320181210</idMovimiento>
            <operacionUIdDestino>465</operacionUIdDestino>
            <saldoOperacionOrigen>-1000.00</saldoOperacionOrigen>
            <movimientoUId>324</movimientoUId>
         </sdtResultadoTraspaso>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>490</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.TraspasarCuentasMismoTitular</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-08-14</Fecha>
            <Hora>15:03:15</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.TraspasarCuentasMismoTitularResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{  
   "Btinreq": {
      "Device": "GP",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "cec2eed9744A8B5C60A82434"
   },
   "sdtResultadoTraspaso": {
      "operacionUIdOrigen": "461",
      "idMovimiento": "00100001000500075000000005320181210",
      "operacionUIdDestino": "465",
      "saldoOperacionOrigen": "-1000.00",
      "movimientoUId": "324"
   },
   "Btoutreq": {
      "Numero": "490",
      "Estado": "OK",
      "Servicio": "BTCuentasVista.TraspasarCuentasMismoTitular",
      "Requerimiento": "1",
      "Fecha": "2019-08-14",
      "Hora": "15:03:15",
      "Canal": "BTDIGITAL"
   }
}` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto del traspaso.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe del movimiento.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador de operacion de destino del traspaso.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador de operacion de origen del traspaso.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTResultadoTraspaso', Tipo: '', Comentarios: '' }, { Nombre: '### sBTResultadoTraspaso', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTResultadoTraspaso son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'idMovimiento', Tipo: 'String', Comentarios: 'Identificador de movimiento String.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador de movimiento.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador de operacion de destino del traspaso.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador de operacion de origen del traspaso.' }, { Nombre: 'saldoOperacionOrigen', Tipo: 'Double', Comentarios: 'Saldo Actual de operacion de origen.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
