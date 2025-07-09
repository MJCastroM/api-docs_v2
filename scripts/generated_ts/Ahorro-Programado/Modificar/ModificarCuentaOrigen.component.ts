import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ModificarCuentaOrigen',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ModificarCuentaOrigenComponent1751987195308 {
  pageTitle        = 'Modificar Cuenta Origen';
  description      = `Método para modificar la cuenta de origen desde donde se toman los fondos para el ahorro.`;
  pubName    = 'BTAhorroProgramado.ModificarCuentaOrigen';
  programa   = 'RBTPG113';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'ahorroUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación de ahorro.' }, { Nombre: 'cuentaUId', Tipo: 'Long', Comentarios: 'Identificador único de la nueva operación cuenta origen del ahorro.' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador del cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador del ahorro.' }, { Código: '30003', Descripción: 'No se recibió el identificador de operación de la cuenta origen.' }, { Código: '30004', Descripción: 'No se recuperó la cuenta para el identificador de cliente: [Número de identificador].' }, { Código: '30005', Descripción: 'No se recuperó la operación del ahorro para el identificador: [Número de identificador].' }, { Código: '30006', Descripción: 'No se recuperó la operación de la cuenta vista para el identificador: [Número de identificador].' }, { Código: '30007', Descripción: 'El ahorro no pertenece al identificador del cliente: [Número de identificador].' }, { Código: '30008', Descripción: 'La cuenta vista no pertenece al identificador del cliente: [Número de identificador].' }, { Código: '40001', Descripción: 'La operación seleccionada no corresponde a un producto de ahorro.' }, { Código: '40002', Descripción: 'El ahorro seleccionado no se encuentra habilitado para operar.' }, { Código: '40003', Descripción: 'El producto de la cuenta de origen seleccionado no se encuentra habilitado para operar.' }, { Código: '40004', Descripción: 'El producto del ahorro no permite operar con cuentas de distinta moneda.' }, { Código: '40005', Descripción: 'El producto acredita una cuenta externa, no es posible modificar la misma.' }, { Código: '40006', Descripción: 'El producto del ahorro no permite operar con cuentas de distintos clientes.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTAhorroProgramado.ModificarCuentaOrigen>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d927483a74A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>81</bts:clienteUId>
         <bts:ahorroUId>61</bts:ahorroUId>
         <bts:cuentaUId>81</bts:cuentaUId>
      </bts:BTAhorroProgramado.ModificarCuentaOrigen>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ModificarCuentaOrigen\' \
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
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTAhorroProgramado.ModificarCuentaOrigenResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d927483a74A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>408</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ModificarCuentaOrigen</Servicio>
            <Fecha>2018-05-03</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>16:52:30</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ModificarCuentaOrigenResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
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
        "Numero": "409",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ModificarCuentaOrigen",
        "Fecha": "2018-05-03",
        "Requerimiento": "1",
        "Hora": "16:54:31",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
