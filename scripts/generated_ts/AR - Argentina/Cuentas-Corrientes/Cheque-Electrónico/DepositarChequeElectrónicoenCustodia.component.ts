import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-DepositarChequeElectrnicoenCustodia',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class DepositarChequeElectronicoenCustodiaComponent {
  // Cabecera e info-card
  pageTitle = 'Depositar Cheque Electronico en Custodia';
  description = `Metodo para depositar un cheque electronico bajo custodia.`;
  pubName    = 'BTCuentasCorrientes.DepositarChequeElectronicoEnCustodia';
  programa   = 'RBTPAR32';
  scope      = 'Argentina';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId', 'importe', 'numeroCheque', 'bancoLibradorId', 'sucursalLibradoraId', 'CUITBeneficiario', 'paisBeneficiarioId', 'tipoDocumentoBeneficiarioId'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de subcuenta.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'numeroCheque', Tipo: 'Int', Comentarios: 'Numero de cheque a emitir.' }, { Nombre: 'bancoLibradorId', Tipo: 'Short', Comentarios: 'Identificador de banco librador.' }, { Nombre: 'sucursalLibradoraId', Tipo: 'Short', Comentarios: 'Identificador de sucursal del banco librador.' }, { Nombre: 'CUITBeneficiario', Tipo: 'String', Comentarios: 'CUIT beneficiario.' }, { Nombre: 'paisBeneficiarioId', Tipo: 'Long', Comentarios: 'Identificador del pais del beneficiario.' }, { Nombre: 'tipoDocumentoBeneficiarioId', Tipo: 'Long', Comentarios: 'Identificador del tipo de documento del beneficiario.' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '30002'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de la operacion.' }, { Codigo: '30002', Descripcion: 'No existe registro con el identificador indicado.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.DepositarChequeElectronicoEnCustodia>
         <bts:Btinreq>
           <bts:Device>10</bts:Device>
            <bts:Usuario>BA</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>ec8CE93AA1</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>15</bts:operacionUId>
         <bts:importe>3434</bts:importe>
         <bts:bancoLibradorId></bts:bancoLibradorId>
         <bts:sucursalLibradoraId></bts:sucursalLibradoraId>
         <bts:numeroCheque></bts:numeroCheque>
         <bts:CUITBeneficiario></bts:CUITBeneficiario>
         <bts:tipoDocumentoBeneficiarioId></bts:tipoDocumentoBeneficiarioId>
         <bts:paisBeneficiarioId></bts:paisBeneficiarioId>
         <bts:fechaVencimiento></bts:fechaVencimiento>
      </bts:BTCuentasCorrientes.DepositarChequeElectronicoEnCustodia>
   </soapenv:Body>
</soapenv:Envelope></soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?DepositarChequeElectronicoEnCustodia' \
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
	"operacionUId": "15",
	"importe": "3434",
	"bancoLibradorId": "",
	"sucursalLibradoraId": "",
	"numeroCheque": "",
	"CUITBeneficiario": "",
	"tipoDocumentoBeneficiarioId": "",
	"paisBeneficiarioId": "",
	"fechaVencimiento": ""
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.DepositarChequeElectronicoEnCustodiaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <Servicio>BTCuentasCorrientes.DepositarChequeElectronicoEnCustodia</Servicio>
            <Fecha>2019-05-28</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:40:41</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.DepositarChequeElectronicoEnCustodiaResponse>
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
        "Servicio": "BTCuentasCorrientes.DepositarChequeElectronicoEnCustodia",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
