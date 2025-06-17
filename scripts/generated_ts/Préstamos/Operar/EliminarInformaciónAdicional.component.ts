import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-EliminarInformacinAdicional',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class EliminarInformacionAdicionalComponent {
  // Cabecera e info-card
  pageTitle = 'Eliminar Informacion Adicional';
  description = `Metodo para eliminar la informacion adicional de un prestamo.`;
  pubName    = 'BTPrestamos.EliminarInformacionAdicional';
  programa   = 'RBTPG469';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId', 'sdtInformacionAdicional', 'modo'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de prestamo.' }, { Nombre: 'sdtInformacionAdicional', Tipo: '[sBTDatoLista](#sbtdatolista)', Comentarios: 'Listado de datos.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo 'DLT' para este metodo].' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '30002', '30002'];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar identificador de operacion.' }, { Codigo: '30002', Descripcion: 'Debe ingresar al menos un valor de metadata.' }, { Codigo: '30002', Descripcion: 'Debe ingresar un dato en el campo atributo.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.EliminarInformacionAdicional>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>e2db881814CD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>2</bts:operacionUId>
         <bts:sdtInformacionAdicional>
            <bts:sBTDatoLista>
               <bts:clave>CUENTA_ST</bts:clave>
               <bts:valor></bts:valor>
            </bts:sBTDatoLista>
         </bts:sdtInformacionAdicional>
      </bts:BTPrestamos.EliminarInformacionAdicional>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?EliminarInformacionAdicional' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "INSTALADOR",
	  "Token": "e2db881814CD285A89A23FBE",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	 "operacionUId": 202,
        "sdtInformacionAdicional": {
          "sBTDatoLista": {
            "clave": "CUENTA_ST",
            "valor": ""
          }
        }
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.EliminarInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>e2db881814CD285A89A23FBE</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>589871</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.EliminarInformacionAdicional</Servicio>
            <Fecha>2023-10-11</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>08:55:31</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.EliminarInformacionAdicionalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{ 
   "Btinreq": { 
      "Device": "1", 
      "Usuario": "INSTALADOR", 
      "Token": "e2db881814CD285A89A23FBE", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 

   "Btoutreq": { 
      "Numero": "111399", 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.EliminarInformacionAdicional", 
      "Requerimiento": "1", 
      "Fecha": "2023-10-11", 
      "Canal": "BTDIGITAL", 
      "Hora": "17:08:56" 
   }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de informacion adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de informacion adicional.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
