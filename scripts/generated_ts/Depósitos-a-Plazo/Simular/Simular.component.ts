import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-Simular',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularComponent {
  // Cabecera e info-card
  pageTitle = 'Simular';
  description = `Metodo para simular el alta de un deposito a plazo.`;
  pubName    = 'BTDepositosAPlazo.Simular';
  programa   = 'RBTPG074';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId', 'monto', 'productoUId', 'plazo'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Monto del deposito.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del DPF.' }];
  outputCols = ['fechaAlta', 'fechaVencimiento', 'intereses', 'tasa', 'operacionUId'];
  outputData = [{ Nombre: 'fechaAlta', Tipo: 'Date', Comentarios: 'Fecha de alta.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha en que venceria el DPF.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de la simulacion.' }];
  errorCols  = ['30001', '30002', '30003', '30004'];
  errors     = [{ Codigo: '30001', Descripcion: 'El monto es de ingreso obligatorio.' }, { Codigo: '30002', Descripcion: 'El Plazo es de ingreso obligatorio.' }, { Codigo: '30003', Descripcion: 'No se recibio el identificador de la Cuenta.' }, { Codigo: '30004', Descripcion: 'No se recibio el identificador del Producto.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.Simular>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>161</bts:clienteUId>
         <bts:monto>1000</bts:monto>
         <bts:productoUId>103</bts:productoUId>
         <bts:plazo>360</bts:plazo>
      </bts:BTDepositosAPlazo.Simular>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?Simular=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: e47433ff-563b-4c72-89ee-bc163180c9ae' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "clienteUId": 161,
   "monto": 000,
   "productoUId": 103,
   "plazo": 360
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.SimularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <fechaAlta>2018-10-09</fechaAlta>
         <fechaVencimiento>2019-10-09</fechaVencimiento>
         <intereses>1001.78</intereses>
         <tasa>0.18</tasa>
         <simulacionUId>1</simulacionUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>941</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.Simular</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:53:52</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.SimularResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "fechaAlta": "2018-10-09",
   "fechaVencimiento": "2019-10-09",
   "intereses": "1001.78",
   "tasa": "0.18",
   "simulacionUId": "21",
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "946",
      "Estado": "OK",
      "Servicio": "BTDepositosAPlazo.Simular",
      "Fecha": "2017-12-21",
      "Requerimiento": "",
      "Hora": "18:10:30",
      "Canal": "BTDIGITAL"
   }
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
