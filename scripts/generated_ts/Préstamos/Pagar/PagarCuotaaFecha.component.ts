import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-PagarCuotaaFecha',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class PagarCuotaaFechaComponent1750268698298 {
  pageTitle        = 'Pagar Cuota a Fecha';
  description      = `Método para realizar el pago de cuota de un préstamo a una fecha valor.`;
  pubName    = 'BTPrestamos.PagarCuotaAFecha';
  programa   = 'RBTPG225';
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

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación simulada.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe a pagar.' }, { Nombre: 'operacionUId_cobro', Tipo: 'Long', Comentarios: 'Identificador único de operación de la cuenta vista de donde se cobrará el préstamo.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha Valor del pago.' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento [Asiento].' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de operación de préstamo.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de operación de cobro.' }, { Codigo: '30004', Descripcion: 'No se recuperó la operación para el Identificador: [Número de Identificador].' }, { Codigo: '30005', Descripcion: 'No se recuperó la operación para el Identificador: [Número de Identificador].' }, { Codigo: '30006', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30007', Descripcion: 'No se recuperó la operación para el Identificador de Cliente: [Número de Identificador].' }, { Codigo: '30008', Descripcion: 'El préstamo no pertenece al cliente.' }, { Codigo: '30009', Descripcion: 'La operación de cobro no pertenece al cliente.' }, { Codigo: '30010', Descripcion: 'No se recibió una fecha para la operación.' }, { Codigo: '40001', Descripcion: 'La Cuenta indicada es incorrecta.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.PagarCuotaAFecha>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>191631443CD285A89A23FBEE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>37675</bts:operacionUId>
         <bts:clienteUId>1600</bts:clienteUId>
         <bts:importe>1000</bts:importe>
         <bts:operacionUId_cobro>59</bts:operacionUId_cobro>
         <bts:referencia>Prueba</bts:referencia>
         <bts:fecha>2019-07-26</bts:fecha>
      </bts:BTPrestamos.PagarCuotaAFecha>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?PagarCuota=\' \
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
    "Importe": 1000,
    "operacionUId_cobro": 281,
    "referencia": "Cancelar"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.PagarCuotaAFechaResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>191631443CD285A89A23FBEE</Token>
            <Device>AC</Device>
         </Btinreq>
         <movimientoUId>1807</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.PagarCuotaAFecha</Servicio>
            <Fecha>2019-07-26</Fecha>
            <Hora>12:04:55</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>120425</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.PagarCuotaAFechaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "movimientoUId": "1807",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "120425",
        "Estado": "OK",
        "Servicio": "BTPrestamos.PagarCuotaAFecha",
        "Requerimiento": "",
        "Fecha": "2019-07-26",
        "Hora": "12:04:55",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
