import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CancelaraFecha',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CancelaraFechaComponent1750446218831 {
  pageTitle        = 'Cancelar a Fecha';
  description      = `Método para realizar la cancelación de un préstamo a una fecha valor dada.`;
  pubName    = 'BTPrestamos.CancelarAFecha';
  programa   = 'RBTPG246';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `1) Definir la transacción de pago, teniendo en cuenta que: 

	- El préstamo se almacena en el preformato 1. 

	- La cuenta vista de cobro se almacena en el preformato 2. 

	- Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal. 

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T). 

3) Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro. 

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación simulada.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'operacionUId_cobro', Tipo: 'Long', Comentarios: 'Identificador único de operación de la cuenta vista donde se cobrará el préstamo.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha valor de la cancelación.' }, { Nombre: 'controlaExistenciaOpCobro', Tipo: 'String', Comentarios: 'Indica si se controla la existencia de la operación de cobro [Hidden: Valores \'S\'/\'N\'].' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único del movimiento.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de operación de préstamo.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de operación de cobro.' }, { Codigo: '30004', Descripcion: 'No se recuperó la operación para el Identificador: [Número de Identificador].' }, { Codigo: '30005', Descripcion: 'No se recuperó la operación para el Identificador: [Número de Identificador]-' }, { Codigo: '30006', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30007', Descripcion: 'No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador].' }, { Codigo: '30008', Descripcion: 'El préstamo no pertenece al cliente.' }, { Codigo: '30009', Descripcion: 'La operación de cobro no pertenece al cliente.' }, { Codigo: '40001', Descripcion: 'La Cuenta indicada es incorrecta.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.CancelarAFecha>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>dc7d30c0044A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>321</bts:operacionUId>
         <bts:clienteUId>161</bts:clienteUId>
         <bts:operacionUId_cobro>281</bts:operacionUId_cobro>
         <bts:referencia>Cancelar</bts:referencia>
         <bts:fecha>2016-10-10</bts:fecha>
      </bts:BTPrestamos.CancelarafECHA>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?CancelarAFecha=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 9bdf8096-2be0-d0b4-4017-971713b37367\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 342,
    "clienteUId": 161,
    "operacionUId_cobro": 281,
    "referencia": "Cancelar"
	"fecha": "2020-10-10"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.CancelarAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>dc7d30c0044A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>121</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>758</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.CancelarAFecha</Servicio>
            <Requerimiento/>
            <Fecha>2017-12-05</Fecha>
            <Hora>13:32:15</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.CancelarAFechaResponse>
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
    "movimientoUId": "122",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "759",
        "Estado": "OK",
        "Servicio": "BTPrestamos.CancelarAFecha",
        "Requerimiento": "",
        "Fecha": "2017-12-05",
        "Hora": "13:39:04",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
