import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-Contratar',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarComponent {
  pageTitle = 'Contratar';
  description = `Metodo para contratar un prestamo amortizable.`;
  pubName    = 'BTPrestamos.Contratar';
  programa   = 'RBTPG077';
  scope      = 'Global';

  

  hasBackendConfig  = true;
  backendText       = `1) Definir la transaccion de alta, teniendo en cuenta que: 

	- El prestamo se almacena en el preformato 1. 

	- La cuenta vista de acreditacion se almacena en el preformato 2. 

	- Los correlativos del subordinal deben corresponderse con los modulos de los productos definidos en el subordinal. 

2) Configurar la transaccion parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T). 

3) Se debe indicar los ordinales donde se encuentra definido el prestamo y la cuenta de cobro. 

4) Si la opcion de procesos por modulo 3282 se encuentra activada, el servicio considera que se permiten cobros parciales.

:::`;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion simulada.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'operacionUId_desembolso', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de la cuenta vista donde se acreditara el monto solicitado.' }, { Nombre: 'operacionUId_cobro', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de la cuenta vista de donde se cobrara el prestamo. En caso de no solicitarse una operacion de cobro, enviar valor 999999999.' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador unico de movimiento [Asiento].' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de operacion de prestamo.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de operacion de Acreditacion.' }, { Codigo: '30004', Descripcion: 'No se recupero el prestamo para el identificador: [Numero de identificador].' }, { Codigo: '30005', Descripcion: 'No se recupero la operacion para el identificador: [Numero de identificador].' }, { Codigo: '30006', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30007', Descripcion: 'No se recupero la cuenta para el Identificador de cliente: [Numero de identificador].' }, { Codigo: '30008', Descripcion: 'El prestamo no pertenece al cliente.' }, { Codigo: '30009', Descripcion: 'La operacion de cobro no pertenece al cliente.' }, { Codigo: '30010', Descripcion: 'No se recibio el identificador unico de operacion de cobro.' }, { Codigo: '51001', Descripcion: 'No se recibio numero de cliente.' }, { Codigo: '51002', Descripcion: 'La operacion no existe.' }, { Codigo: '51003', Descripcion: 'La operacion de cobro no existe.' }, { Codigo: '51005', Descripcion: 'Atencion: No se pudo obtener el numerador para la transaccion.' }, { Codigo: '51006', Descripcion: 'La operacion esta cancelada.' }, { Codigo: '51007', Descripcion: 'La operacion ya existe.' }, { Codigo: '51013', Descripcion: 'La operacion de cobro esta cancelada.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.Contratar>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>5453369fee4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>341</bts:operacionUId>
         <bts:clienteUId>161</bts:clienteUId>
         <bts:operacionUId_desembolso>281</bts:operacionUId_desembolso>
         <bts:operacionUId_cobro>281</bts:operacionUId_cobro>
      </bts:BTPrestamos.Contratar>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?Contratar=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9d6db2ed-3171-3f9c-11d1-3ed6402467a1' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 342,
    "clienteUId": 161,
    "operacionUId_desembolso": 281,
    "operacionUId_cobro": 281
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ContratarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>5453369fee4A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>101</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>752</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.Contratar</Servicio>
            <Fecha>2017-11-30</Fecha>
            <Requerimiento/>
            <Hora>13:38:18</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ContratarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "movimientoUId": "102",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "755",
        "Estado": "OK",
        "Servicio": "BTPrestamos.Contratar",
        "Fecha": "2017-11-30",
        "Requerimiento": "",
        "Hora": "13:47:48",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [];
}
