import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerCuentaCliente',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCuentaClienteComponent {
  pageTitle = 'Obtener Cuenta Cliente';
  description = `Metodo para obtener la empresa y numero de cuenta de una cuenta cliente.`;
  pubName    = 'BTClientes.ObtenerCuentaCliente';
  programa   = 'RBTPG211';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Short', Comentarios: 'Identificador unico de cliente.' }];
  outputData = [{ Nombre: 'empresaId', Tipo: 'Short', Comentarios: 'Identificador de la empresa del cliente.' }, { Nombre: 'cuentaBT', Tipo: 'Long', Comentarios: 'Identificador de la cuenta cliente.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de cliente.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerCuentaCliente>
         <bts:Btinreq>
            <bts:Device>10.12.10.118</bts:Device>
            <bts:Token>3183d9a8b64A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:clienteUId>21</bts:clienteUId>
      </bts:BTClientes.ObtenerCuentaCliente>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerCuentaCliente' \
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
	"clienteUId": "21",
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerCuentaClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.118</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>3183d9a8b64A8B5C60A82434</Token>
         </Btinreq>
         <empresaId>1</empresaId>
         <cuentaBT>79</cuentaBT>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>3021</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerCuentaCliente</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-12-12</Fecha>
            <Hora>12:10:23</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerCuentaClienteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "empresaId": 1,
    "cuentaBT": 79,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 3020,
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerCuentaCliente",
        "Requerimiento": "1",
        "Fecha": "2018-12-12",
        "Hora": "12:09:15",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [];
}
