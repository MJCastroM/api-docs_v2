import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPersonas',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPersonasComponent1750446218783 {
  pageTitle        = 'Obtener Personas';
  description      = `Método para obtener los datos de la/s persona/s con el nombre ingresado.`;
  pubName    = 'BTPersonas.ObtenerPersonas';
  programa   = 'RBTPG300';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'primerNombre', Tipo: 'String', Comentarios: 'Primer nombre.' }, { Nombre: 'segundoNombre', Tipo: 'String', Comentarios: 'Segundo nombre.' }, { Nombre: 'primerApellido', Tipo: 'String', Comentarios: 'Primer apellido.' }, { Nombre: 'segundoApellido', Tipo: 'String', Comentarios: 'Segundo apellido.' }];
  outputData = [{ Nombre: 'sdtPersonas', Tipo: '[sBTPersonaBusqueda](#sbtpersonabusqueda)', Comentarios: 'Listado de datos de persona.' }];
  errors     = [{ Codigo: '30002', Descripcion: 'Campo primer nombre requerido.' }, { Codigo: '30003', Descripcion: 'Campo primer apellido requerido.' }, { Codigo: '40001', Descripcion: 'No se encontró persona(s) con el patron de búsqueda ingresado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerPersonas>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>0d402ef5c94A84</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:primerNombre>ALEJANDRO</bts:primerNombre>
         <bts:segundoNombre></bts:segundoNombre>
         <bts:primerApellido>VAZQUEZ</bts:primerApellido>
         <bts:segundoApellido>SZENTANDRASI</bts:segundoApellido>
      </bts:BTPersonas.ObtenerPersonas>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerPersonas=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"primerNombre":"ALEJANDRO",
	"segundoNombre":"",
	"primerApellido":"VAZQUEZ",
	"segundoApellido":"SZENTANDRASI"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerPersonasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.118</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d402ef5c94A8B5C60A82434</Token>
         </Btinreq>
         <sdtPersonas>
            <sBTPersonaBusqueda>
               <segundoApellido>SZENTANDRASI</segundoApellido>
               <nroDocumento>27573084</nroDocumento>
               <primerApellido>VAZQUEZ</primerApellido>
               <pais>URUGUAY</pais>
               <tipoDocumentoId>1</tipoDocumentoId>
               <tipoDocumento>Cédula Identidad</tipoDocumento>
               <primerNombre>ALEJANDRO</primerNombre>
               <segundoNombre/>
               <fechaNacimiento>1956-02-26</fechaNacimiento>
               <personaUId>43</personaUId>
               <paisId>845</paisId>
            </sBTPersonaBusqueda>
            <sBTPersonaBusqueda>
               <segundoApellido>SZENTANDRASI</segundoApellido>
               <nroDocumento>11380673</nroDocumento>
               <primerApellido>VAZQUEZ</primerApellido>
               <pais>URUGUAY</pais>
               <tipoDocumentoId>1</tipoDocumentoId>
               <tipoDocumento>Cédula Identidad</tipoDocumento>
               <primerNombre>ALEJANDRO</primerNombre>
               <segundoNombre/>
               <fechaNacimiento>1966-02-26</fechaNacimiento>
               <personaUId>44</personaUId>
               <paisId>845</paisId>
            </sBTPersonaBusqueda>
            <sBTPersonaBusqueda>
               <segundoApellido>SZENTANDRASI</segundoApellido>
               <nroDocumento>27512189</nroDocumento>
               <primerApellido>VAZQUEZ</primerApellido>
               <pais>URUGUAY</pais>
               <tipoDocumentoId>1</tipoDocumentoId>
               <tipoDocumento>Cédula Identidad</tipoDocumento>
               <primerNombre>ALEJANDRO</primerNombre>
               <segundoNombre/>
               <fechaNacimiento>1976-02-26</fechaNacimiento>
               <personaUId>48</personaUId>
               <paisId>845</paisId>
            </sBTPersonaBusqueda>
            <sBTPersonaBusqueda>
               <segundoApellido>SZENTANDRASI</segundoApellido>
               <nroDocumento>27510989</nroDocumento>
               <primerApellido>VAZQUEZ</primerApellido>
               <pais>URUGUAY</pais>
               <tipoDocumentoId>1</tipoDocumentoId>
               <tipoDocumento>Cédula Identidad</tipoDocumento>
               <primerNombre>ALEJANDRO</primerNombre>
               <segundoNombre/>
               <fechaNacimiento>1986-02-26</fechaNacimiento>
               <personaUId>50</personaUId>
               <paisId>845</paisId>
            </sBTPersonaBusqueda>
         </sdtPersonas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8477</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerPersonas</Servicio>
            <Fecha>2019-05-08</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>16:54:26</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerPersonasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"sdtPersonas": {
		"sBTPersonaBusqueda": [
			{
				"segundoApellido": "SZENTANDRASI",
				"nroDocumento": "43496418",
				"primerApellido": "VAZQUEZ",
				"pais": "URUGUAY",
				"tipoDocumentoId": "1",
				"tipoDocumento": "Cédula Identidad",
				"primerNombre": "ALEJANDRO",
				"segundoNombre": "",
				"fechaNacimiento": "1976-02-26",
				"personaUId": "23",
				"paisId": "845"
			},
			{
				"segundoApellido": "SZENTANDRASI",
				"nroDocumento": "43496419",
				"primerApellido": "VAZQUEZ",
				"pais": "URUGUAY",
				"tipoDocumentoId": "1",
				"tipoDocumento": "Cédula Identidad",
				"primerNombre": "ALEJANDRO",
				"segundoNombre": "",
				"fechaNacimiento": "1976-02-26",
				"personaUId": "46",
				"paisId": "845"
			},
			{
				"segundoApellido": "SZENTANDRASI",
				"nroDocumento": "27511184",
				"primerApellido": "VAZQUEZ",
				"pais": "URUGUAY",
				"tipoDocumentoId": "1",
				"tipoDocumento": "Cédula Identidad",
				"primerNombre": "ALEJANDRO",
				"segundoNombre": "",
				"fechaNacimiento": "1976-02-26",
				"personaUId": "21",
				"paisId": "845"
			},
			{
				"segundoApellido": "SZENTANDRASI",
				"nroDocumento": "27510189",
				"primerApellido": "VAZQUEZ",
				"pais": "URUGUAY",
				"tipoDocumentoId": "1",
				"tipoDocumento": "Cédula Identidad",
				"primerNombre": "ALEJANDRO",
				"segundoNombre": "",
				"fechaNacimiento": "1976-02-26",
				"personaUId": "49",
				"paisId": "845"
			},
			{
				"segundoApellido": "SZENTANDRASI",
				"nroDocumento": "27510989",
				"primerApellido": "VAZQUEZ",
				"pais": "URUGUAY",
				"tipoDocumentoId": "1",
				"tipoDocumento": "Cédula Identidad",
				"primerNombre": "ALEJANDRO",
				"segundoNombre": "",
				"fechaNacimiento": "1976-02-26",
				"personaUId": "50",
				"paisId": "845"
			}
		]
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerPersonas",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPersonaBusqueda', fields: [{ Nombre: 'fechaNacimiento', Tipo: 'Date', Comentarios: 'Fecha de nacimiento.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Número de documento.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del país.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'primerApellido', Tipo: 'String', Comentarios: 'Primer apellido.' }, { Nombre: 'primerNombre', Tipo: 'String', Comentarios: 'Primer nombre.' }, { Nombre: 'segundoApellido', Tipo: 'String', Comentarios: 'Segundo apellido.' }, { Nombre: 'segundoNombre', Tipo: 'String', Comentarios: 'Segundo nombre.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Descripción del tipo de documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador de tipo de documento.' }] }];
}
