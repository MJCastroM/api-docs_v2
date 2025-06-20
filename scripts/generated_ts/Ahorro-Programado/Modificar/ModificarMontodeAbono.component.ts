import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ModificarMontodeAbono',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ModificarMontodeAbonoComponent1750446218059 {
  pageTitle        = 'Modificar Monto de Abono';
  description      = `Método para modificar el monto del abono para el ahorro.`;
  pubName    = 'BTAhorroProgramado.ModificarMontoDeAbono';
  programa   = 'RBTPG115';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'ahorroUId', Tipo: 'Long', Comentarios: 'Identificador único de operación de ahorro.' }, { Nombre: 'montoAbono', Tipo: 'Double', Comentarios: 'Nuevo monto de abono para el ahorro.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador del ahorro.' }, { Codigo: '30003', Descripcion: 'No se recibió el nuevo monto para el abono.' }, { Codigo: '30004', Descripcion: 'El monto indicado no puede ser menor a cero.' }, { Codigo: '30005', Descripcion: 'No se recuperó la cuenta para el identificador de cliente: [Número de identificador].' }, { Codigo: '30006', Descripcion: 'No se recuperó la operación del ahorro para el identificador: [Número de identificador].' }, { Codigo: '30007', Descripcion: 'El ahorro no pertenece al identificador del cliente: [Número de identificador].' }, { Codigo: '40006', Descripcion: 'La cuota indicada es menor al mínimo permitido.' }, { Codigo: '40007', Descripcion: 'La cuota indicada es mayor al máximo permitido.' }, { Codigo: '40019', Descripcion: 'La variación del abono por monto indicada es menor al mínimo permitido.' }, { Codigo: '40020', Descripcion: 'La variación del abono por monto indicada es mayor al máximo permitido.' }, { Codigo: '40021', Descripcion: 'La variación del abono por % indicado es menor al mínimo permitido.' }, { Codigo: '40950', Descripcion: 'El ahorro seleccionado no se encuentra habilitado para operar.' }, { Codigo: '40951', Descripcion: 'No se permite modificar el abono para el producto seleccionado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTAhorroProgramado.ModificarMontoDeAbono>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>81</bts:clienteUId>
         <bts:ahorroUId>61</bts:ahorroUId>
         <bts:montoAbono>2000</bts:montoAbono>
      </bts:BTAhorroProgramado.ModificarMontoDeAbono>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ModificarMontoDeAbono\' \
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
      "montoAbono": 2500
	}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTAhorroProgramado.ModificarMontoDeAbonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f2f7be2ebc4A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>388</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ModificarMontoDeAbono</Servicio>
            <Fecha>2018-04-30</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>17:43:27</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ModificarMontoDeAbonoResponse>
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
        "Numero": "405",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ModificarMontoDeAbono",
        "Fecha": "2018-05-03",
        "Requerimiento": "1",
        "Hora": "12:29:59",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
