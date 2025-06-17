import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerClientedeunaOperacin',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerClientedeunaOperacionComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Cliente de una Operacion';
  description = `Metodo para obtener el identificador de cuenta cliente asociado a una operacion.`;
  pubName    = 'BTContabilidad.ObtenerClienteDeOperacion';
  programa   = 'RBTPG298';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion' }];
  outputCols = ['clienteUId'];
  outputData = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }];
  errorCols  = ['30001', '30101'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio identificador unico de operacion.' }, { Codigo: '30101', Descripcion: 'No se recupero la operacion para el identificador recibido.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.ObtenerClienteDeOperacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>0d3a8212b3F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>787</bts:operacionUId>
      </bts:BTContabilidad.ObtenerClienteDeOperacion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerClienteDeOperacion' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"bts:Btinreq": {
	  "bts:Canal": "BTDIGITAL",
	  "bts:Requerimiento": "1",
	  "bts:Usuario": "BANTOTAL",
	  "bts:Token": "0d3a8212b3F955E77534D3E0",
	  "bts:Device": "AC"
	},
	"bts:operacionUId": "787"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.ObtenerClienteDeOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d3a8212b3F955E77534D3E0</Token>
         </Btinreq>
         <clienteUId>822</clienteUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>110086</Numero>
            <Estado>OK</Estado>
            <Servicio>BTContabilidad.ObtenerClienteDeOperacion</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2021-02-18</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>14:37:54</Hora>
         </Btoutreq>
      </BTContabilidad.ObtenerClienteDeOperacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{ 
 	"Btinreq": { 
	  "Device": "AC", 
	  "Usuario": "BANTOTAL", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "0d3a8212b3F955E77534D3E0" 
	}, 
	"clienteUId": "822", 
	"Btoutreq": { 
	  "Numero": "110086", 
	  "Estado": "OK", 
	  "Servicio": "BTContabilidad.ObtenerClienteDeOperacion", 
	  "Requerimiento": "1", 
	  "Fecha": "2021-02-18", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "14:37:54" 
	} 
 }` } };

  // Datos estructurados
  structuredTypes = [];
}
