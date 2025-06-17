import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerAvance',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerAvanceComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Avance';
  description = `Metodo para obtener el avance de un deposito a plazo.`;
  pubName    = 'BTDepositosAPlazo.ObtenerAvance';
  programa   = 'RBTPG402';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId', 'depositoUId'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'depositoUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de deposito.' }];
  outputCols = ['fechaAlta', 'fechaVencimiento', 'plazoTranscurrido', 'plazoTotal', 'porcentajeAvance'];
  outputData = [{ Nombre: 'fechaAlta', Tipo: 'Date', Comentarios: 'Fecha de alta del deposito.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del deposito.' }, { Nombre: 'plazoTranscurrido', Tipo: 'Int', Comentarios: 'Plazo transcurrido del deposito.' }, { Nombre: 'plazoTotal', Tipo: 'Int', Comentarios: 'Plazo total del deposito.' }, { Nombre: 'porcentajeAvance', Tipo: 'Double', Comentarios: 'Porcentaje de avance del deposito (segun el plazo).' }];
  errorCols  = ['30001', '30002', '30003', '30004', '30005', '40001'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de la Cuenta.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador del deposito.' }, { Codigo: '30003', Descripcion: 'No existe registro con el identificador indicado.' }, { Codigo: '30004', Descripcion: 'No se recupero la operacion para el identificador recibido.' }, { Codigo: '30005', Descripcion: 'La operacion de deposito no pertenece al cliente ingresado.' }, { Codigo: '40001', Descripcion: 'La operacion de deposito ingresada no existe.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositoAPlazo.ObtenerAvance>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>21226674424A8B5C60A82434</bts:Token>
            <bts:Device>GL</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10003</bts:clienteUId>
         <bts:depositoUId>10121</bts:depositoUId>
      </bts:BTDepositoAPlazo.ObtenerAvance>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositoAPlazo_v1?ObtenerAvance \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "clienteUId": "10003",
   "depositoUId": "10121"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositoAPlazo.ObtenerAvanceResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>21226674424A8B5C60A82434</Token>
            <Device>GL</Device>
         </Btinreq>
         <fechaAlta>2016-07-29</fechaAlta>
         <fechaVencimiento>2016-08-29</fechaVencimiento>
         <plazoTranscurrido>17</plazoTranscurrido>
         <plazoTotal>31</plazoTotal>
         <porcentajeAvance>54.84</porcentajeAvance>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTDepositoAPlazo.ObtenerAvance</Servicio>
            <Fecha>2019-08-22</Fecha>
            <Hora>15:23:05</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6689</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTDepositoAPlazo.ObtenerAvanceResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "fechaAlta": "2016-07-29",
   "fechaVencimiento": "2016-08-29",
   "plazoTranscurrido": "17",
   "plazoTotal": "31",
   "porcentajeAvance": "54.84",
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "6689",
      "Estado": "OK",
      "Servicio": "BTDepositoAPlazo.ObtenerAvance",
      "Requerimiento": "1",
      "Fecha": "2019-08-22",
      "Hora": "15:23:05",
      "Canal": "BTDIGITAL"
   }
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
