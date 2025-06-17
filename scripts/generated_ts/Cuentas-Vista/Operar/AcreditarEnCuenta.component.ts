import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-AcreditarEnCuenta',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AcreditarenCuentaComponent {
  pageTitle = 'Acreditar en Cuenta';
  description = `Metodo para realizar una acreditacion a una cuenta vista determinada.`;
  pubName    = 'BTCuentasVista.AcreditarEnCuenta ';
  programa   = 'RBTPG569';
  scope      = 'Global';

  

  hasBackendConfig  = true;
  backendText       = `1) Definir la transaccion de compra, teniendo en cuenta que:

	- La cuenta vista origen se almacena en el preformato 1.
		
	- Los diferentes importes se almacenan en los preformatos 1, 2, 3, y 4 respectivamente.
	
	- Los diferentes conceptos se almacenan en los preformatos 1, 2, 3, y 4 respectivamente.
	
	- Los correlativos del subordinal deben corresponderse con los modulos de los productos definidos en el subordinal.
	
2) Configurar la transaccion parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T):

	- Se debe indicar los ordinales donde se encuentra definida la cuenta origen y destino.
 
:::`;
  backendConfig     = [];

  inputData  = [{ Nombre: 'sdtDatosAcreditar', Tipo: '[sBTDatosAcreditarDebitar](#sbtdatosacreditardebitar)', Comentarios: 'Datos de la acreditacion.' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador del movimiento realizado.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar una operacion.' }, { Codigo: '30002', Descripcion: 'Debe ingresar al menos un importe.' }, { Codigo: '30004', Descripcion: 'No se recupero la operacion origen para el Identificador: X.' }, { Codigo: '30004', Descripcion: 'No se recupero la cuenta cliente origen para el Identificador: X.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.AcreditarEnCuenta>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1244265502F955E77534D3E0</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:sdtDatosAcreditar>
            <bts:clienteUId>140</bts:clienteUId>
            <bts:operacionUId>10140</bts:operacionUId>
            <bts:importe1>1000</bts:importe1>
            <bts:importe2>5220</bts:importe2>
            <bts:importe3></bts:importe3>
            <bts:importe4></bts:importe4>
            <bts:concepto1>test</bts:concepto1>
            <bts:concepto2></bts:concepto2>
            <bts:concepto3></bts:concepto3>
            <bts:concepto4></bts:concepto4>
         </bts:sdtDatosAcreditar>
      </bts:BTCuentasVista.AcreditarEnCuenta>
   </soapenv:Body>`, json: `curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?AcreditarEnCuenta=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fde8ae30-8752-c0fe-cf77-f8761a5ddcff' \ 
  -d '{
"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
    }, 
	"sdtDatosAcreditar": { 
		"operacionUId1": "10140", 
		"operacionUId2": "10141", 
		"operacionUId3": "", 
		"operacionUId4": "", 
		"operacionUId5": "", 
		"importe1": "1000", 
		"importe2": "5220", 
		"importe3": "", 
		"importe4": "", 
		"importe5": "", 
		"importe6": "", 
		"importe7": "", 
		"importe8": "", 
		"concepto": "" 
	}    
}' 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?AcreditarEnCuenta=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fde8ae30-8752-c0fe-cf77-f8761a5ddcff' \ 
  -d '{
"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
    }, 
	"sdtDatosAcreditar": { 
		"clienteUId": "140",
		"operacionUId": "10140", 
		"importe1": "1000", 
		"importe2": "5220", 
		"importe3": "", 
		"importe4": "", 
		"concepto1": "test",
		"concepto2": "",
		"concepto3": "",
		"concepto4": ""
	}    
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAPENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAPENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Body>
        <BTCuentasVista.AcreditarEnCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
            <Btinreq>
                <Device>AV</Device>
                <Usuario>MINSTALADOR</Usuario>
                <Requerimiento/>
                <Canal>BTDIGITAL</Canal>
                <Token>268b6d23eb4A8B5C60A82434</Token>
            </Btinreq>
            <movimientoUId>141</movimientoUId>
            <Erroresnegocio></Erroresnegocio>
            <Btoutreq>
                <Numero>864</Numero>
                <Estado>OK</Estado>
                <Servicio>BTCuentasVista.AcreditarEnCuenta</Servicio>
                <Requerimiento/>
                <Fecha>2017-12-18</Fecha>
                <Hora>17:07:19</Hora>
                <Canal>BTDIGITAL</Canal>
            </Btoutreq>
        </BTCuentasVista.AcreditarEnCuentaResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
    "Btinreq": {
        "Device": "AV",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "fa2c02c95a4A8B5C60A82434"
    },
    "movimientoUId": "141",
    "Btoutreq": {
        "Numero": "103",
        "Estado": "OK",
        "Servicio": "BTCuentasVista.AcreditarEnCuenta",
        "Requerimiento": "1",
        "Fecha": "2019-07-22",
        "Canal": "BTDIGITAL",
        "Hora": "16:00:37"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTDatosAcreditarDebitar', fields: [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'concepto1', Tipo: 'String', Comentarios: 'Concepto 1 del movimiento.' }, { Nombre: 'concepto2', Tipo: 'String', Comentarios: 'Concepto 2 del movimiento.' }, { Nombre: 'concepto3', Tipo: 'String', Comentarios: 'Concepto 3 del movimiento.' }, { Nombre: 'concepto4', Tipo: 'String', Comentarios: 'Concepto 4 del movimiento.' }, { Nombre: 'importe1', Tipo: 'Double', Comentarios: 'Importe 1 del movimiento.' }, { Nombre: 'importe2', Tipo: 'Double', Comentarios: 'Importe 2 del movimiento.' }, { Nombre: 'importe3', Tipo: 'Double', Comentarios: 'Importe 3 del movimiento.' }, { Nombre: 'importe4', Tipo: 'Double', Comentarios: 'Importe 4 del movimiento.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }] }];
}
