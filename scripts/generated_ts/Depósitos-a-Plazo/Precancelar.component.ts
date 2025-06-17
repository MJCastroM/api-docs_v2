import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-Precancelar',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class PrecancelarComponent {
  pageTitle = 'Precancelar';
  description = `Metodo para precancelar una operacion de un deposito a plazo.`;
  pubName    = 'BTDepositosAPlazo.Precancelar';
  programa   = 'RBTPG637';
  scope      = 'Global';

  

  hasBackendConfig  = true;
  backendText       = `1) Definir la transaccion de cancelacion teniendo en cuenta que:
   
   - Tenga asociada la RTE PRT006 en el ordinal de la operacion.
   
2) Configurar la transaccion parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

:::`;
  backendConfig     = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico del cliente.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'cuentaAcreditacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de cuenta vista de cobro.' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador unico del movimiento.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de operacion.' }, { Codigo: '30003', Descripcion: 'No se recupero la operacion origen para el Identificador ingresado.' }, { Codigo: '30004', Descripcion: 'La operacion recuperada no tiene relacion con la cuenta.' }, { Codigo: '30005', Descripcion: 'No se recibio el identificador de operacion de acreditacion.' }, { Codigo: '30006', Descripcion: 'La operacion a precancelar y de acreditacion no pueden ser la misma.' }, { Codigo: '30007', Descripcion: 'No se recupero la operacion de acreditacion para el Identificador ingresado.' }, { Codigo: '30008', Descripcion: 'La operacion de acreditacion no tiene relacion con la cuenta.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.Precancelar>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>853547DAE3BFB2C1EC0A3148</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
         <bts:operacionUId>100</bts:operacionUId>
         <bts:cuentaAcreditacionUId>12</bts:cuentaAcreditacionUId>
      </bts:BTDepositosAPlazo.Precancelar>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerDatosPrecancelacion=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: dc197965-60bc-3f23-3367-5902a0392e1d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "clienteUId": 4,
	"operacionUId": 100,
   "cuentaAcreditacionUId": 12
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.PrecancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>MC</Device>
            <Requerimiento>1</Requerimiento>
            <Token>853547DAE3BFB2C1EC0A3148</Token>
         </Btinreq>
         <movimientoUId>14</movimientoUId>
         </Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-26</Fecha>
            <Hora>16:19:56</Hora>
            <Numero>30629</Numero>
            <Servicio>BTDepositosAPlazo.Precancelar</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.PrecancelarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "movimientoUId": 14,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "3108",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ObtenerDocumentoDigital",
        "Fecha": "2018-11-21",
        "Requerimiento": "1",
        "Hora": "12:09:09",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [];
}
