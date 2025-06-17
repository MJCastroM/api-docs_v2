import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerIdBantotalOperacin',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerIdentificadorBantotaldeOperacionComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Identificador Bantotal de Operacion';
  description = `Metodo para obtener la clave de identificacion Bantotal de una operacion.`;
  pubName    = 'BTContabilidad.ObtenerIdBantotalOperacion';
  programa   = 'RBTPG369';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }];
  outputCols = ['empresa', 'sucursalId', 'moduloId', 'monedaId', 'papelId', 'cuenta', 'operacionId', 'subOperacionId', 'tipoOperacionId'];
  outputData = [{ Nombre: 'empresa', Tipo: 'Short', Comentarios: 'Identificador de empresa.' }, { Nombre: 'sucursalId', Tipo: 'Int', Comentarios: 'Identificador de sucursal.' }, { Nombre: 'moduloId', Tipo: 'Int', Comentarios: 'Identificador de modulo.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'papelId', Tipo: 'Int', Comentarios: 'Identificador de papel.' }, { Nombre: 'cuenta', Tipo: 'Int', Comentarios: 'Numero de cuenta.' }, { Nombre: 'operacionId', Tipo: 'Int', Comentarios: 'Identificador de operacion.' }, { Nombre: 'subOperacionId', Tipo: 'Int', Comentarios: 'Identificador de sub operacion.' }, { Nombre: 'tipoOperacionId', Tipo: 'Short', Comentarios: 'Identificador de tipo de operacion.' }];
  errorCols  = ['30001', '30002'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de operacion.' }, { Codigo: '30002', Descripcion: 'No existe registro para el identificador de operacion ingresado.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.ObtenerIdBantotalOperacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>281020211424260000881155</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>3</bts:operacionUId>
      </bts:BTContabilidad.ObtenerIdBantotalOperacion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?ObtenerIdBantotalOperacion' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "GP",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"operacionUId": "3"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.ObtenerIdBantotalOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>281020211424260000881155</Token>
            <Device>GP</Device>
         </Btinreq>
         <empresa>1</empresa>
         <sucursalId>1</sucursalId>
         <moduloId>522</moduloId>
         <monedaId>2225</monedaId>
         <papelId>0</papelId>
         <cuenta>29</cuenta>
         <operacionId>80</operacionId>
         <subOperacionId>0</subOperacionId>
         <tipoOperacionId>3</tipoOperacionId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTContabilidad.ObtenerIdBantotalOperacion</Servicio>
            <Fecha>2021-10-29</Fecha>
            <Hora>10:25:26</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>11008</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTContabilidad.ObtenerIdBantotalOperacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{ 
    "Btinreq": { 
	    "Device": "GP", 
	    "Usuario": "MINSTALADOR", 
	    "Token": "16c1cc9b534A8B5C60A82434", 
	    "Canal": "BTDIGITAL", 
	    "Requerimiento": "1" 
    }, 
    "empresa": "1", 
    "sucursalId": "1", 
    "moduloId": "522", 
    "monedaId": "2225", 
    "papelId": "0", 
    "cuenta": "29", 
    "operacionId": "80", 
    "subOperacionId": "0", 
    "tipoOperacionId": "3", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTContabilidad.ObtenerIdBantotalOperacion", 
        "Fecha": "2021-10-28", 
        "Hora": "15:39:53", 
        "Requerimiento": "1", 
        "Numero": "11003", 
        "Estado": "OK" 
    } 
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
