import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Contratar',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarComponent1751987199209 {
  pageTitle        = 'Contratar';
  description      = `Método para contratar un préstamo amortizable.`;
  pubName    = 'BTPrestamos.Contratar';
  programa   = 'RBTPG077';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `1) Definir la transacción de alta, teniendo en cuenta que: 

	- El préstamo se almacena en el preformato 1. 

	- La cuenta vista de acreditación se almacena en el preformato 2. 

	- Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal. 

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T). 

3) Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro. 

4) Si la opción de procesos por módulo 3282 se encuentra activada, el servicio considera que se permiten cobros parciales.

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación simulada.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'operacionUId_desembolso', Tipo: 'Long', Comentarios: 'Identificador único de operación de la cuenta vista donde se acreditará el monto solicitado.' }, { Nombre: 'operacionUId_cobro', Tipo: 'Long', Comentarios: 'Identificador único de operación de la cuenta vista de donde se cobrará el préstamo. En caso de no solicitarse una operación de cobro, enviar valor 999999999.' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento [Asiento].' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de operación de préstamo.' }, { Código: '30002', Descripción: 'No se recibió el identificador de operación de Acreditación.' }, { Código: '30004', Descripción: 'No se recuperó el préstamo para el identificador: [Número de identificador].' }, { Código: '30005', Descripción: 'No se recuperó la operación para el identificador: [Número de identificador].' }, { Código: '30006', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30007', Descripción: 'No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].' }, { Código: '30008', Descripción: 'El préstamo no pertenece al cliente.' }, { Código: '30009', Descripción: 'La operación de cobro no pertenece al cliente.' }, { Código: '30010', Descripción: 'No se recibió el identificador único de operación de cobro.' }, { Código: '51001', Descripción: 'No se recibió número de cliente.' }, { Código: '51002', Descripción: 'La operación no existe.' }, { Código: '51003', Descripción: 'La operación de cobro no existe.' }, { Código: '51005', Descripción: 'Atención: No se pudo obtener el numerador para la transacción.' }, { Código: '51006', Descripción: 'La operación esta cancelada.' }, { Código: '51007', Descripción: 'La operación ya existe.' }, { Código: '51013', Descripción: 'La operación de cobro esta cancelada.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?Contratar=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 9d6db2ed-3171-3f9c-11d1-3ed6402467a1\' \
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
    "operacionUId_desembolso": 281,
    "operacionUId_cobro": 281
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
}\'` }
  };

  structuredTypes = [];
}
