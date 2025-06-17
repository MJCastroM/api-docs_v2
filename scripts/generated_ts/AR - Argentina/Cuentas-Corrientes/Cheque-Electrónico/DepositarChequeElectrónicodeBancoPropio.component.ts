import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-DepositarChequeElectrnicodeBancoPropio',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class DepositarChequeElectronicodeBancoPropioComponent {
  // Cabecera e info-card
  pageTitle = 'Depositar Cheque Electronico de Banco Propio';
  description = `Metodo para depositar un cheque electronico propio.`;
  pubName    = 'BTCuentasCorrientes.DepositarChequeElectronicoPropio';
  programa   = 'RBTPAR34';
  scope      = 'Argentina';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUIdOrigen', 'operacionUIdDestino', 'importe', 'numeroCheque'];
  inputData  = [{ Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de origen.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador unico de operacion destino.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'numeroCheque', Tipo: 'Long', Comentarios: 'Numero de cheque.' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '30002', '30003', '30004'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de la operacion origen.' }, { Codigo: '30002', Descripcion: 'No existe registro con el identificador indicado.' }, { Codigo: '30003', Descripcion: 'No se recibio el identificador de la operacion destino.' }, { Codigo: '30004', Descripcion: 'No existe registro con el identificador indicado.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.DepositarChequeElectronicoPropio>
         <bts:Btinreq>
           <bts:Device>10</bts:Device>
            <bts:Usuario>BA</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>ec8CE93AA1</bts:Token>
         </bts:Btinreq>
         <bts:operacionUIdOrigen>15</bts:operacionUIdOrigen>
         <bts:operacionUIdDestino>30</bts:operacionUIdDestino>
         <bts:importe>3000</bts:importe>
         <bts:numeroCheque>5030</bts:numeroCheque>
      </bts:BTCuentasCorrientes.DepositarChequeElectronicoPropio>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?DepositarChequeElectronicoPropio' \
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
	"operacionUIdOrigen": "15",
	"operacionUIdDestino": "30",
	"importe": "3000",
	"numeroCheque": "5030",
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.DepositarChequeElectronicoPropioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>BA</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ec8CE93AA1</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2565</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.DepositarChequeElectronicoPropio</Servicio>
            <Fecha>2019-05-28</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:40:41</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.DepositarChequeElectronicoPropioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.DepositarChequeElectronicoPropio",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
