import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-TraspasarEntreCuentasdelaMismaPersona',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class TraspasarEntreCuentasdelaMismaPersonaComponent1751987197318 {
  pageTitle        = 'Traspasar Entre Cuentas de la Misma Persona';
  description      = `Método para realizar un traspaso entre cuentas cuyo titular sea la misma persona.`;
  pubName    = 'BTCuentasVista.TraspasarCuentasMismoTitular';
  programa   = 'RBTPG255';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'sdtTraspaso', Tipo: '[sBTTraspaso](#sbttraspaso)', Comentarios: 'Datos del traspaso.' }];
  outputData = [{ Nombre: 'sdtResultadoTraspaso', Tipo: '[sBTResultadoTraspaso](#sbtresultadotraspaso)', Comentarios: 'Datos resultado del traspaso.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador único de operación de origen.' }, { Código: '30002', Descripción: 'No se recibió el identificador único de operación de destino.' }, { Código: '30003', Descripción: 'Debe ingresar importe.' }, { Código: '30004', Descripción: 'No se recuperó la operación origen para el Identificador.' }, { Código: '30005', Descripción: 'No se recuperó la operación origen para el Identificador.' }, { Código: '30006', Descripción: 'No se recibió el identificador de persona.' }, { Código: '30007', Descripción: 'La operación origen y operación destino no pueden ser iguales.' }, { Código: '31003', Descripción: 'No existe registro para el identificador único.' }, { Código: '40001', Descripción: 'La persona no integra la cuenta de origen.' }, { Código: '40002', Descripción: 'La persona no integra la cuenta de destino.' }, { Código: '51005', Descripción: 'La moneda del traspaso debe coincidir con la moneda de la operación origen.' }, { Código: '51006', Descripción: 'La operación origen no existe.' }, { Código: '51007', Descripción: 'La operación destino no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?TraspasarCuentasMismoTitular \
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
      "personaUId": "101",
      "sdtTraspaso": {
        "operacionUIdOrigen": "461",
        "operacionUIdDestino": "465",
        "monedaId": "0",
        "importe": "1000",
        "concepto": "?"
      }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
</SOAP-ENV:Envelope>`,
    json: `
{  
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
}` }
  };

  structuredTypes = [{ typeName: 'sBTTraspaso', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto del traspaso.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe del movimiento.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador de operación de destino del traspaso.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador de operación de origen del traspaso.' }] }, { typeName: 'sBTResultadoTraspaso', fields: [{ Nombre: 'idMovimiento', Tipo: 'String', Comentarios: 'Identificador de movimiento String.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador de movimiento.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador de operación de destino del traspaso.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador de operación de origen del traspaso.' }, { Nombre: 'saldoOperacionOrigen', Tipo: 'Double', Comentarios: 'Saldo Actual de operación de origen.' }] }];
}
