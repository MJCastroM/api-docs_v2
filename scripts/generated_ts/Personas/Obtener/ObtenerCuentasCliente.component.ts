import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerCuentasCliente',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCuentasClienteComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Cuentas Cliente';
  description = `Metodo para obtener un listado de las cuentas de una persona.`;
  pubName    = 'BTPersonas.ObtenerCuentasCliente';
  programa   = 'RBTPG182';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['personaUId'];
  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }];
  outputCols = ['sdtCuentasCliente'];
  outputData = [{ Nombre: 'sdtCuentasCliente', Tipo: '[sBTCuentaCliente](#sbtcuentacliente)', Comentarios: 'Listado de cuentas cliente.' }];
  errorCols  = ['30001', '30002', '30015', '30023'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de persona.' }, { Codigo: '30002', Descripcion: 'No se pudo obtener identificador unico de la cuenta.' }, { Codigo: '30015', Descripcion: 'No se recibio identificador de cuenta a consultar.' }, { Codigo: '30023', Descripcion: 'No existe registro para el identificador unico.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerCuentasCliente>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>69bc094e014A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>41</bts:personaUId>
      </bts:BTPersonas.ObtenerCuentasCliente>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerCuentasCliente' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId": "41",
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerCuentasClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>69bc094e014A8B5C60A82434</Token>
         </Btinreq>
         <sdtCuentasCliente>
            <sBTCuentaCliente>
               <clienteUId>21</clienteUId>
               <titularidad>
                  <identificador>1</identificador>
                  <descripcion>Titular</descripcion>
               </titularidad>
               <representativo>N</representativo>
            </sBTCuentaCliente>
            <sBTCuentaCliente>
               <clienteUId>242</clienteUId>
               <titularidad>
                  <identificador>4</identificador>
                  <descripcion>Vice Presidente</descripcion>
               </titularidad>
               <representativo>N</representativo>
            </sBTCuentaCliente>
         </sdtCuentasCliente>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2724</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerCuentasCliente</Servicio>
            <Fecha>2018-10-26</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>15:58:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerCuentasClienteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtCuentasCliente": {
        "sBTCuentaCliente": [ {
            "clienteUId": "21",
            "titularidad": {
               "descripcion": "Titular",
               "identificador": "1"
            },
            "representativo": "N"
         },
         {
            "clienteUId": "242",
            "titularidad": {
               "descripcion": "Vice Presidente",
               "identificador": "4"
            },
            "representativo": "N"
         } ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "2722",
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerCuentasCliente",
        "Fecha": "2018-10-26",
        "Requerimiento": "1",
        "Hora": "15:56:11",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cuenta.' }, { Nombre: 'representativo', Tipo: 'String', Comentarios: 'Indica si es titular representativo (S/N).' }, { Nombre: 'titularidad', Tipo: '[sBTTipoIntegrante](#sbttipointegrante)', Comentarios: 'Datos de tipo de integrante.' }, { Nombre: '### sBTTipoIntegrante', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTTipoIntegrante son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion del integrante.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador del integrante.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
