import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerTasaParaCliente',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTasaParaClienteComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Tasa Para Cliente';
  description = `Metodo para obtener la tasa parametrizada al cliente para el producto indicado, junto con la fecha de vigencia.`;
  pubName    = 'BTPrecios.ObtenerTasaCliente';
  programa   = 'RBTPG319';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId', 'productoUId', 'fecha', 'importe', 'plazo'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador del cliente.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador del producto.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha del consulta.' }, { Nombre: 'importe', Tipo: 'Long', Comentarios: 'Importe a calcular.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }];
  outputCols = ['tipoTasa', 'tasa', 'tasaMinima', 'tasaMaxima', 'fechaVigencia'];
  outputData = [{ Nombre: 'tipoTasa', Tipo: 'String', Comentarios: 'Tipo de tasa.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaMinima', Tipo: 'Double', Comentarios: 'Tasa minima.' }, { Nombre: 'tasaMaxima', Tipo: 'Double', Comentarios: 'Tasa maxima.' }, { Nombre: 'fechaVigencia', Tipo: 'Date', Comentarios: 'Fecha de vigencia' }];
  errorCols  = ['30001', '30002', '30003', '30004', '30005', '40003', '40004', '40005', '41003', '41004', '50001'];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar identificador de cliente.' }, { Codigo: '30002', Descripcion: 'Debe ingresar identificador de producto.' }, { Codigo: '30003', Descripcion: 'Debe ingresar fecha.' }, { Codigo: '30004', Descripcion: 'Debe ingresar importe.' }, { Codigo: '30005', Descripcion: 'Debe ingresar plazo.' }, { Codigo: '40003', Descripcion: 'No existe registro con la cuenta indicada.' }, { Codigo: '40004', Descripcion: 'No existe registro con el identificador indicado.' }, { Codigo: '40005', Descripcion: 'No se recibio identificador de cuenta a consultar.' }, { Codigo: '41003', Descripcion: 'No existe registro para el identificador unico.' }, { Codigo: '41004', Descripcion: 'No existe registro para el producto indicado.' }, { Codigo: '50001', Descripcion: 'El registro no existe.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrecios.ObtenerTasaCliente>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1600460797F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10014</bts:clienteUId>
         <bts:productoUId>96</bts:productoUId>
         <bts:fecha>2021-11-11</bts:fecha>
         <bts:importe>10000</bts:importe>
         <bts:plazo>360</bts:plazo>
      </bts:BTPrecios.ObtenerTasaCliente>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerTasaCliente' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"bts:Btinreq": {
	  "bts:Canal": "BTDIGITAL",
	  "bts:Requerimiento": "1",
	  "bts:Usuario": "BANTOTAL",
	  "bts:Token": "1600460797F955E77534D3E0",
	  "bts:Device": "AC"
	},
	"clienteUId": 10014,
	"productoUId": 96,
	"fecha": "2021-11-11",
	"importe": 10000,
	"plazo": 360
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrecios.ObtenerTasaClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1600460797F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <tipoTasa>Efectiva Anual</tipoTasa>
         <tasa>0.04</tasa>
         <tasaMinima>0.04</tasaMinima>
         <tasaMaxima>0.04</tasaMaxima>
		 <fechaVigencia>2021-11-11</fechaVigencia>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrecios.ObtenerTasaCliente</Servicio>
            <Fecha>2021-03-18</Fecha>
            <Hora>13:49:02</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8050</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrecios.ObtenerTasaClienteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1600460797F955E77534D3E0",
	  "Device": "AC"
	},
	"tipoTasa": "Efectiva Anual",
	"tasa": "0.04",
	"tasaMinima": "0.04",
	"tasaMaxima": "0.04",
	"fechaVigencia": "2021-11-11",
	"Erroresnegocio": {},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTPrecios.ObtenerTasaCliente",
	  "Fecha": "2021-03-18",
	  "Hora": "13:49:02",
	  "Requerimiento": "1",
	  "Numero": "8050",
	  "Estado": "OK"
	}
}` } };

  // Datos estructurados
  structuredTypes = [];
}
