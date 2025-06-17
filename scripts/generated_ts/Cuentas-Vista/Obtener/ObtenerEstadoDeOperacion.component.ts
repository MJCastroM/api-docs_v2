import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerEstadoDeOperacion',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerEstadoDeOperacionComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Estado De Operacion';
  description = `Metodo para obtener el estado de una cuenta vista.`;
  pubName    = 'BTCuentasVista.ObtenerEstadoDeOperacion';
  programa   = 'RBTPG559';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion.' }];
  outputCols = ['sdtEstadoOperacion'];
  outputData = [{ Nombre: 'sdtEstadoOperacion', Tipo: '[sBTEstadoOperacion](#sbtestadooperacion)', Comentarios: 'Listado de estados.' }];
  errorCols  = ['30001', '30002', '30003', '30004'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador unico de la operacion.' }, { Codigo: '30002', Descripcion: 'La operacion ingresada no corresponde a una cuenta vista.' }, { Codigo: '30003', Descripcion: 'No se recupero la operacion para el identificador ingresado.' }, { Codigo: '30004', Descripcion: 'No fue posible recuperar el estado para la operacion ingresada.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.ObtenerEstadoDeOperacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>844919B7576C42C91062EBB4</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>210</bts:operacionUId>
      </bts:BTCuentasVista.ObtenerEstadoDeOperacion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerEstadoDeOperacion' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	 "Btinreq": {
         "Canal": "BTDIGITAL",
         "Token": "fa2c02c95a4A8B5C60A76209",
         "Usuario": "INSTALADOR",
         "Requerimiento": 1,
         "Device": 1
      },
      "operacionUId": 150
   }` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ObtenerEstadoDeOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>844919B7576C42C91062EBB4</Token>
         </Btinreq>
         <sdtEstadoOperacion>
            <descripcion>Normal</descripcion>
            <permiteOperar>S</permiteOperar>
            <codigo>0</codigo>
         </sdtEstadoOperacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20534</Numero>
            <Servicio>BTCuentasVista.ObtenerEstadoDeOperacion</Servicio>
            <Estado>OK</Estado>
            <Fecha>2024-05-20</Fecha>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Hora>09:22:42</Hora>
         </Btoutreq>
      </BTCuentasVista.ObtenerEstadoDeOperacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
   "Btinreq": {
      "Device": 1,
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "fa2c02c95a4A8B5C60A76209"
   },
   "sdtEstadoOperacion": {
      "sBTEstadoOperacion": {
         "descripcion": "Normal",
         "permiteOperar": "S",
         "codigo": 0
      }
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": 20535,
      "Servicio": "BTCuentasVista.ObtenerEstadoDeOperacion",
      "Estado": "OK",
      "Fecha": "2024-05-20",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Hora": "11:42:12"
   }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Codigo del estado.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion del estado.' }, { Nombre: 'permiteOperar', Tipo: 'String', Comentarios: '¿Permite Operar?' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
