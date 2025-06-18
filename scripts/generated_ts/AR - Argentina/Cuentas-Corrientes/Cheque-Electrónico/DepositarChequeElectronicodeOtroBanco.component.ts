import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../../route-animations';

@Component({
  selector: 'app-DepositarChequeElectronicodeOtroBanco',
  templateUrl: '../../../DocTemplate.component.html',
  styleUrls: ['../../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class DepositarChequeElectronicodeOtroBancoComponent1750258524621 {
  pageTitle        = 'Depositar Cheque Electrónico de Otro Banco';
  description      = `Método para depositar un cheque electrónico de otro banco.`;
  pubName          = 'Depositar Cheque Electrónico de Otro Banco';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación de subcuenta.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'numeroCheque', Tipo: 'Int', Comentarios: 'Número de cheque a emitir.' }, { Nombre: 'bancoLibradorId', Tipo: 'Short', Comentarios: 'Identificador de banco librador.' }, { Nombre: 'sucursalLibradoraId', Tipo: 'Short', Comentarios: 'Identificador de sucursal del banco librador.' }, { Nombre: 'cuentaDeCheque', Tipo: 'String', Comentarios: 'Cuenta del cheque a depositar.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la operación.' }, { Codigo: '30002', Descripcion: 'No existe registro con el identificador indicado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.DepositarChequeElectronicoDeOtroBanco> 
         <bts:Btinreq> 
           <bts:Device>10</bts:Device> 
            <bts:Usuario>BA</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>ec8CE93AA1</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>15</bts:operacionUId> 
         <bts:importe>3000</bts:importe> 
         <bts:bancoLibradorId>1</bts:bancoLibradorId> 
         <bts:sucursalLibradoraId>2</bts:sucursalLibradoraId> 
         <bts:numeroCheque>3434</bts:numeroCheque> 
         <bts:cuentaDeCheque>32</bts:cuentaDeCheque> 
      </bts:BTCuentasCorrientes.DepositarChequeElectronicoDeOtroBanco> 
   </soapenv:Body> 
</soapenv:Envelope></soapenv:Envelope>`, json: `curl -X POST \ 
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.?DepositarChequeElectronicoDeOtroBanco\' \ 
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
	"operacionUId": "15", 
	"importe": "3000", 
	"bancoLibradorId": "1", 
	"sucursalLibradoraId": "2", 
	"numeroCheque": "3434", 
	"cuentaDeCheque": "32", 
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCuentasCorrientes.DepositarChequeElectronicoDeOtroBancoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
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
            <Servicio>BTCuentasCorrientes.DepositarChequeElectronicoDeOtroBanco</Servicio> 
            <Fecha>2019-05-28</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:40:41</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.DepositarChequeElectronicoDeOtroBancoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope>`,  json: `\'{ 
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
        "Servicio": "BTCuentasCorrientes.DepositarChequeElectronicoDeOtroBanco", 
        "Requerimiento": "1", 
        "Fecha": "2019-05-07", 
        "Hora": "15:54:44", 
        "Canal": "BTDIGITAL" 
    } 
}\'` }
  };

  structuredTypes = [];
}
