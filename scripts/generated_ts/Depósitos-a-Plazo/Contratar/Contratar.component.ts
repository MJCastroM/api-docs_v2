import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Contratar',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarComponent1750945333048 {
  pageTitle        = 'Contratar';
  description      = `Método para contratar un depósito a plazo.`;
  pubName    = 'BTDepositosAPlazo.Contratar';
  programa   = 'RBTPG094';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `1) Definir la transacción de alta de depósito a plazo, teniendo en cuenta que:

   - El depósito a plazo se almacena en el preformato 1.
   - La cuenta vista de débito se almacena en el preformato 2.
   - Los correlativos del subordinal deben corresponderse con los módulos de los productos de cuenta vista definidos en el subordinal.

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T)

   - Se debe indicar los ordinales donde se encuentra definido el depósito a plazo y la cuenta vista de débito.

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'simulacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la simulación.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador único de la operación de donde se retira el monto del DPF.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador único de la operación de acreditación (Capital y/o intereses según instrucción).' }, { Nombre: 'instruccionAlVencimiento', Tipo: 'Short', Comentarios: 'Identificador de instrucción al vencimiento.' }, { Nombre: 'controlaMismoCliente', Tipo: 'String', Comentarios: '¿Controla correspondencia de cuenta de débito contra cuenta cliente originante? [Hidden: Valores \'S\'/\'N\'].' }];
  outputData = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para el identificador.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.Contratar>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>407fce50864A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:simulacionUId>41</bts:simulacionUId>
         <bts:clienteUId>161</bts:clienteUId>
         <bts:operacionUIdOrigen>281</bts:operacionUIdOrigen>
         <bts:operacionUIdDestino>281</bts:operacionUIdDestino>
         <bts:instruccionAlVencimiento>2</bts:instruccionAlVencimiento>
      </bts:BTDepositosAPlazo.Contratar>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?Contratar=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "simulacionUId":41,
    "clienteUId":161,
    "operacionUIdOrigen":281,
    "operacionUIdDestino":281,
    "instruccionAlVencimiento":2   
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ContratarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>407fce50864A8B5C60A82434</Token>
         </Btinreq>
         <operacionUId>321</operacionUId>
         <fechaAlta>2018-10-09</fechaAlta>
         <fechaVencimiento>2019-10-09</fechaVencimiento>
         <intereses>1001.78</intereses>
         <tasa>0.18</tasa>
         <movimientoUId>357</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>995</Numero>
            <Estado>NEG_ERROR</Estado>
            <Servicio>BTDepositosAPlazo.Contratar</Servicio>
            <Fecha>2017-12-26</Fecha>
            <Requerimiento/>
            <Hora>11:21:19</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ContratarResponse>
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
	"operacionUId": "358",
   "fechaAlta": "2018-10-09",
   "fechaVencimiento": "2019-10-09",
   "intereses": "1001.78",
   "tasa": "0.18",
   "simulacionUId": "21",
	"movimientoUId": "357",
   "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "946",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.Contratar",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "18:10:30",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
