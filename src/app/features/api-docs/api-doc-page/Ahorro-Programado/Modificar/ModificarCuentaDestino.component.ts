import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ModificarCuentaDestino',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ModificarCuentaDestinoComponent1750258524587 {
  pageTitle        = 'Modificar Cuenta Destino';
  description      = `Método para modificar la cuenta destino donde se acreditarán los ahorros al vencimiento.`;
  pubName          = 'Modificar Cuenta Destino';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'ahorroUId', Tipo: 'Long', Comentarios: 'Identificador de operación de ahorro.' }, { Nombre: 'cuentaUId', Tipo: 'Int', Comentarios: 'Identificador único de la operación de cuenta vista destino.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador del ahorro.' }, { Codigo: '30003', Descripcion: 'No se recibió el identificador de operación de la cuenta destino.' }, { Codigo: '30004', Descripcion: 'No se recuperó la cuenta para el identificador de cliente: [Número de identificador].' }, { Codigo: '30005', Descripcion: 'No se recuperó la operación del ahorro para el identificador: [Número de identificador].' }, { Codigo: '30006', Descripcion: 'No se recuperó la operación de la cuenta vista para el identificador: [Número de identificador].' }, { Codigo: '30007', Descripcion: 'El ahorro no pertenece al identificador del cliente: [Número de identificador].' }, { Codigo: '40001', Descripcion: 'La operación seleccionada no corresponde a un producto de ahorro.' }, { Codigo: '40002', Descripcion: 'El ahorro seleccionado no se encuentra habilitado para operar.' }, { Codigo: '40003', Descripcion: 'El producto de la cuenta de origen seleccionado no se encuentra habilitado para operar.' }, { Codigo: '40004', Descripcion: 'El producto del ahorro no permite operar con cuentas de distinta moneda.' }, { Codigo: '40005', Descripcion: 'El producto acredita una cuenta externa, no es posible modificar la misma.' }, { Codigo: '40006', Descripcion: 'El producto del ahorro no permite operar con cuentas vistas de distintos clientes.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTAhorroProgramado.ModificarCuentaDestino>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>81</bts:clienteUId>
         <bts:ahorroUId>61</bts:ahorroUId>
         <bts:cuentaUId>81</bts:cuentaUId>
      </bts:BTAhorroProgramado.ModificarCuentaDestino>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ModificarCuentaDestino\' \
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
      "clienteUId": 81,
      "ahorroUId": 61,
      "cuentaUId": 21
	}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTAhorroProgramado.ModificarCuentaDestinoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f2f7be2ebc4A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>385</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ModificarCuentaDestino</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-04-30</Fecha>
            <Hora>17:33:27</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ModificarCuentaDestinoResponse>
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
        "Numero": "410",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ModificarCuentaDestino",
        "Fecha": "2018-05-03",
        "Requerimiento": "1",
        "Hora": "17:08:21",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
