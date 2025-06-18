import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-PagarCuotaTerceros',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class PagarCuotaTercerosComponent1750268698308 {
  pageTitle        = 'Pagar Cuota Terceros';
  description      = `Método para realizar el pago de cuota de un préstamo con una cuenta de cobro de terceros.`;
  pubName    = 'BTPrestamos.PagarCuotaTerceros';
  programa   = 'RBTPG831';
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

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación simulada.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe a pagar.' }, { Nombre: 'operacionCobroUId', Tipo: 'Long', Comentarios: 'Identificador único de operación de la cuenta vista de donde se cobrará el préstamo.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento (asiento).' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de operación de préstamo.' }, { Codigo: '30003', Descripcion: 'Debe ingresar importe.' }, { Codigo: '30004', Descripcion: 'No se recuperó la operación para el Identificador: [Número de Identificador].' }, { Codigo: '30006', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30007', Descripcion: 'No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador].' }, { Codigo: '30008', Descripcion: 'El préstamo no pertenece al cliente.' }, { Codigo: '30100', Descripcion: 'Error en la Contabilización.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.PagarCuotaTerceros>
         <bts:Btinreq>
            <bts:Device>bms</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>b6275b301e4A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:operacionUId>39</bts:operacionUId>
         <bts:clienteUId>9</bts:clienteUId>
         <bts:importe>1000</bts:importe>
         <bts:operacionCobroUId>800</bts:operacionCobroUId>
         <bts:referencia>Una cuenta de terceros</bts:referencia>
      </bts:BTPrestamos.PagarCuotaTerceros>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?PagarCuotaTerceros\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -d \'{
	"Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "faa36bd33f4A8B5C60A82434"
    },
    "operacionUId": "40",
    "clienteUId": "9",
    "importe": "950",
    "operacionCobroUId": "865",
    "referencia": "Paga cuota terceros"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.PagarCuotaTercerosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>bms</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b6275b301e4A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>58</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1090</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.PagarCuotaTerceros</Servicio>
            <Fecha>2020-10-30</Fecha>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:46:32</Hora>
         </Btoutreq>
      </BTPrestamos.PagarCuotaTercerosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
    "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "faa36bd33f4A8B5C60A82434"
    },
    "movimientoUId": 61,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1093,
        "Estado": "OK",
        "Servicio": "BTPrestamos.PagarCuotaTerceros",
        "Fecha": "2020-10-30",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Hora": "14:29:28"
    }
}` }
  };

  structuredTypes = [];
}
