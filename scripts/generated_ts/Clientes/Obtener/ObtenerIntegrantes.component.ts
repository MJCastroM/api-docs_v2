import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerIntegrantes',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerIntegrantesComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Integrantes';
  description = `Metodo para obtener los integrantes de una cuenta cliente.`;
  pubName    = 'BTClientes.ObtenerIntegrantes';
  programa   = 'RBTPG139';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }];
  outputCols = ['sdtIntegrantes'];
  outputData = [{ Nombre: 'sdtIntegrantes', Tipo: '[sBTIntegrante](#sbtintegrante)', Comentarios: 'Datos de integrantes del cliente.' }];
  errorCols  = ['30001', '30002', '30011'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recupero la cuenta para el identificador de cliente: ?' }, { Codigo: '30011', Descripcion: 'No existe el cliente seleccionado.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerIntegrantes>
         <bts:Btinreq>
            <bts:Device>3</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>3</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>a5cd5311ae4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>21</bts:clienteUId>
      </bts:BTClientes.ObtenerIntegrantes>
   </soapenv:Body>
</soapenv:Envelope>`, json: `'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerIntegrantes=' \
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
	"clienteUId": "21",
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerIntegrantesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>3</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>3</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>034028176e4A8B5C60A82434</Token>
         </Btinreq>
         <sdtIntegrantes>
            <sBTIntegrante>
               <numeroDocumento>19126689</numeroDocumento>
               <tipoDocumento>Cédula Identidad</tipoDocumento>
               <titularidad>
                  <descripcion>Titular</descripcion>
                  <identificador>1</identificador>
               </titularidad>
               <representativo>S</representativo>
               <personaUId>141</personaUId>
               <nombre>VAZQUEZZ SZENTANDRASI ALEJANDR</nombre>
               <paisDocumento>URUGUAY</paisDocumento>
            </sBTIntegrante>
         </sdtIntegrantes>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>599</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerIntegrantes</Servicio>
            <Fecha>2019-09-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:13:06</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerIntegrantesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtIntegrantes": {
        "sBTIntegrante": [
            {
				"numeroDocumento": "19126689",
				"tipoDocumento": "Cédula Identidad",
                "titularidad": {
                    "descripcion": "Titular",
                    "identificador": "1"
                },
                "representativo": "S",
                "personaUId": "141",
                "nombre": "vVAZQUEZ SZENTANDRASI aALEJAND",
				"paisDocumento": "URUGUAY"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "85",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerIntegrantes",
        "Requerimiento": "2",
        "Fecha": "2018-05-04",
        "Hora": "16:11:00",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de la persona.' }, { Nombre: 'numeroDocumento', Tipo: 'String', Comentarios: 'Numero de documento.' }, { Nombre: 'paisDocumento', Tipo: 'String', Comentarios: 'Nombre del pais del documento.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'representativo', Tipo: 'String', Comentarios: 'Indica si es titular representativo (S/N).' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }, { Nombre: 'titularidad', Tipo: '[sBTTipoIntegrante](#sbttipointegrante)', Comentarios: 'Tipo de integrante.' }, { Nombre: '### sBTTipoIntegrante', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTTipoIntegrante son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion del tipo de integrante.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador del tipo de integrante.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
