import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTasadeOperacion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTasadeOperacionComponent1750446218825 {
  pageTitle        = 'Obtener Tasa de Operación';
  description      = `Método para obtener la tasa de la operación junto con la fecha de vigencia.`;
  pubName    = 'BTPrecios.ObtenerTasaOperacion';
  programa   = 'RBTPG318';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador de operación.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de consulta.' }, { Nombre: 'importe', Tipo: 'Long', Comentarios: 'Importe.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }];
  outputData = [{ Nombre: 'tipoTasa', Tipo: 'String', Comentarios: 'Tipo de tasa.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaMinima', Tipo: 'Double', Comentarios: 'Tasa mínima.' }, { Nombre: 'tasaMaxima', Tipo: 'Double', Comentarios: 'Tasa máxima.' }, { Nombre: 'fechaVigencia', Tipo: 'Date', Comentarios: 'Fecha de vigencia' }];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar identificador de operación.' }, { Codigo: '30002', Descripcion: 'Debe ingresar fecha.' }, { Codigo: '30003', Descripcion: 'Debe ingresar importe.' }, { Codigo: '30004', Descripcion: 'Debe ingresar plazo.' }, { Codigo: '40001', Descripcion: 'No se recuperó la operación para el identificador recibido.' }, { Codigo: '50001', Descripcion: 'El registro no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrecios.ObtenerTasaOperacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1600460797F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>1</bts:operacionUId>
         <bts:fecha>2020-11-11</bts:fecha>
         <bts:importe>100000</bts:importe>
         <bts:plazo>360</bts:plazo>
      </bts:BTPrecios.ObtenerTasaOperacion>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerTasaOperacion\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"bts:Btinreq": {
	  "bts:Canal": "BTDIGITAL",
	  "bts:Requerimiento": "1",
	  "bts:Usuario": "BANTOTAL",
	  "bts:Token": "1600460797F955E77534D3E0",
	  "bts:Device": "AC"
	},
	"operacionUId": 10118,
	"fecha": "2020-11-11",
	"importe": 100000,
	"plazo": 360
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrecios.ObtenerTasaOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1600460797F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <tipoTasa>Efectiva Anual</tipoTasa>
         <tasa>0.3</tasa>
         <tasaMinima>0.3</tasaMinima>
         <tasaMaxima>0.3</tasaMaxima>
		 <fechaVigencia>2021-11-11</fechaVigencia>	  
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrecios.ObtenerTasaOperacion</Servicio>
            <Fecha>2021-03-18</Fecha>
            <Hora>14:13:11</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8063</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrecios.ObtenerTasaOperacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1600460797F955E77534D3E0",
	  "Device": "AC"
	},
	"tipoTasa": "Efectiva Anual",
	"tasa": "0.3",
	"tasaMinima": "0.3",
	"tasaMaxima": "0.3",
	"fechaVigencia": "2021-11-11",
	"Erroresnegocio": {
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTPrecios.ObtenerTasaOperacion",
	  "Fecha": "2021-03-18",
	  "Hora": "14:13:11",
	  "Requerimiento": "1",
	  "Numero": "8063",
	  "Estado": "OK"
	}
}` }
  };

  structuredTypes = [];
}
