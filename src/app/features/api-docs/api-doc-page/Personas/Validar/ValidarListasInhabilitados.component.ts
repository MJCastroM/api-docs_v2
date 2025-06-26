import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ValidarListasInhabilitados',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ValidarListasInhabilitadosComponent1750945334634 {
  pageTitle        = 'Validar Listas Inhabilitados';
  description      = `Método para obtener todas las listas de inhabilitados en las que se encuentra una persona a partir de los datos ingresados. (Es mandatorio ingresar al menos una de las siguientes claves: país, tipo de documento y número de documento, o primer nombre y primer apellido)`;
  pubName    = 'BTPersonas.ValidarListasInhabilitados';
  programa   = 'RBTPG313';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'pais', Tipo: 'Short', Comentarios: 'Identificador de país.' }, { Nombre: 'tipoDocumento', Tipo: 'Short', Comentarios: 'Identificador de tipo de documento.' }, { Nombre: 'numeroDocumento', Tipo: 'String', Comentarios: 'Número de documento.' }, { Nombre: 'tipoPersona', Tipo: 'String', Comentarios: 'Tipo de persona (Física / Jurídica).' }, { Nombre: 'primerNombre', Tipo: 'String', Comentarios: 'Primer nombre.' }, { Nombre: 'segundoNombre', Tipo: 'String', Comentarios: 'Segundo nombre.' }, { Nombre: 'primerApellido', Tipo: 'String', Comentarios: 'Primer apellido.' }, { Nombre: 'segundoApellido', Tipo: 'String', Comentarios: 'Segundo apellido.' }, { Nombre: 'razonSocial', Tipo: 'String', Comentarios: 'Razón social' }];
  outputData = [{ Nombre: 'listaInhabilitados', Tipo: '[sBTListaInhabilitados](#sbtlistainhabilitados)', Comentarios: 'Listado de lista de inhabilitados.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se ingresó primer nombre de la persona.' }, { Codigo: '30002', Descripcion: 'No se ingresó primer apellido de la persona.' }, { Codigo: '30003', Descripcion: 'No se ingresó país de la persona.' }, { Codigo: '30004', Descripcion: 'No se ingresó tipo de documento de la persona.' }, { Codigo: '30005', Descripcion: 'No se ingresó documento de la persona.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ValidarListasInhabilitados>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>ccbe8f2A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:pais>845</bts:pais>
         <bts:tipoDocumento>1</bts:tipoDocumento>
         <bts:numeroDeDocumento>27511184</bts:numeroDeDocumento>
         <bts:tipoPersona></bts:tipoPersona>
         <bts:primerNombre></bts:primerNombre>
         <bts:segundoNombre></bts:segundoNombre>
         <bts:primerApellido></bts:primerApellido>
         <bts:segundoApellido></bts:segundoApellido>
         <bts:razonSocial></bts:razonSocial>
      </bts:BTPersonas.ValidarListasInhabilitados>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ValidarListasInhabilitados\' \
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
	"pais":"845",
	"tipoDocumento":"1",
	"numeroDeDocumento":"27511184",
	"tipoPersona":"",
	"primerNombre":"",
	"segundoNombre":"",
	"primerApellido":"",
	"segundoApellido":"",
	"razonSocial":""
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ValidarListasInhabilitadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ccbe8f2A82434</Token>
         </Btinreq>
         <sdtListaInhabilitados>
            <sBTListaInhabilitados>
               <descripcion>LAVADO DE DINERO</descripcion>
               <fechaHasta>0000-00-00</fechaHasta>
               <fechaDesde>2016-06-13</fechaDesde>
               <codigo>1</codigo>
               <bloqueante>S</bloqueante>
            </sBTListaInhabilitados>
         </sdtListaInhabilitados>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8508</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ValidarListasInhabilitados</Servicio>
            <Fecha>2019-05-09</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>10:32:18</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ValidarListasInhabilitadosResponse>
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
	"sdtListaInhabilitados": {
		"sBTListaInhabilitados": {
			"descripcion": "LAVADO DE DINERO",
			"fechaHasta": "0000-00-00",
			"fechaDesde": "2016-06-13",
			"codigo": "1",
			"bloqueante": "S"
		}
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTPersonas.ValidarListasInhabilitados",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTListaInhabilitados', fields: [{ Nombre: 'bloqueante', Tipo: 'String', Comentarios: '¿Es bloqueante? (S/N).' }, { Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Identificador de lista de inhabilitados.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de lista de inhabilitados.' }, { Nombre: 'fechaDesde', Tipo: 'Date', Comentarios: 'Fecha en que la persona ingresa a la lista de inhabilitados.' }, { Nombre: 'fechaHasta', Tipo: 'Date', Comentarios: 'Fecha en que la persona deja de pertenecer a la lista.' }] }];
}
