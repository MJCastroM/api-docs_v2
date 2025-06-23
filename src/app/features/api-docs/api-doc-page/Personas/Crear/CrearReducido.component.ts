import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CrearReducido',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearReducidoComponent1750713394384 {
  pageTitle        = 'Crear Reducido';
  description      = `Método para crear una persona de forma reducida.`;
  pubName    = 'BTPersonas.CrearReducido';
  programa   = 'RBTPG534';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPersona', Tipo: '[sBTPersona1](#sbtpersona1)', Comentarios: 'Datos de la persona.' }];
  outputData = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar País del Documento.' }, { Codigo: '30002', Descripcion: 'Debe ingresar Tipo de Documento.' }, { Codigo: '30003', Descripcion: 'Debe ingresar Nro de Documento.' }, { Codigo: '30004', Descripcion: 'Debe ingresar apellido paterno.' }, { Codigo: '30005', Descripcion: 'Debe ingresar primer nombre.' }, { Codigo: '30006', Descripcion: 'Debe ingresar fecha de nacimiento.' }, { Codigo: '30007', Descripcion: 'Debe ingresar sexo.' }, { Codigo: '30008', Descripcion: 'Debe ingresar estado civil.' }, { Codigo: '30009', Descripcion: 'Debe ingresar ocupación.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.CrearReducido>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>4C814AD45391BD0C360941C7</bts:Token>
         </bts:Btinreq>
         <bts:sdtPersona>
            <bts:paisDocumentoId>845</bts:paisDocumentoId>
            <bts:apartamento></bts:apartamento>
            <bts:sectorId></bts:sectorId>
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
            <bts:ingresos></bts:ingresos>
            <bts:nacionalidad></bts:nacionalidad>
            <bts:ocupacionId>1</bts:ocupacionId>
            <bts:sexo>M</bts:sexo>
            <bts:barrio></bts:barrio>
            <bts:estadoCivil></bts:estadoCivil>
            <bts:direccion></bts:direccion>
            <bts:nroDocumento>52116335</bts:nroDocumento>
            <bts:localidad></bts:localidad>
            <bts:clasificacionInternaId></bts:clasificacionInternaId>
            <bts:segundoNombre></bts:segundoNombre>
            <bts:telefonoCelular></bts:telefonoCelular>
            <bts:departamentoId></bts:departamentoId>
            <bts:actividadLaboral></bts:actividadLaboral>
            <bts:nacionalidadId></bts:nacionalidadId>
            <bts:localidadId></bts:localidadId>
            <bts:clasificacionInterna></bts:clasificacionInterna>
            <bts:paisDomicilioId></bts:paisDomicilioId>
            <bts:sector></bts:sector>
            <bts:telefonoFijo></bts:telefonoFijo>
            <bts:referencia></bts:referencia>
            <bts:codigoPostal></bts:codigoPostal>
            <bts:primerNombre>Gonzalo</bts:primerNombre>
            <bts:fechaNacimiento>1980-10-20</bts:fechaNacimiento>
            <bts:actividadLaboralId></bts:actividadLaboralId>
            <bts:primerApellido>Zanelli</bts:primerApellido>
            <bts:estadoCivilId>1</bts:estadoCivilId>
            <bts:segundoApellido></bts:segundoApellido>
            <bts:paisDocumento></bts:paisDocumento>
            <bts:fechaInicioActividad></bts:fechaInicioActividad>
            <bts:ocupacion></bts:ocupacion>
            <bts:paisDomicilio></bts:paisDomicilio>
            <bts:departamento></bts:departamento>
            <bts:fechaVencimiento></bts:fechaVencimiento>
            <bts:correoElectronico>mail@mail.com</bts:correoElectronico>
            <bts:numeroPuerta></bts:numeroPuerta>
            <bts:calle></bts:calle>
            <bts:barrioId></bts:barrioId>
            <bts:tipoDocumento></bts:tipoDocumento>
         </bts:sdtPersona>
      </bts:BTPersonas.CrearReducido>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?CrearReducido=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8\' \
  -d \'{
	"Btinreq": {
		"Device": "GZ",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "personaUId":"2",
   "sdtPersona": {
        "paisDocumentoId": 845,
        "apartamento": "",
        "sectorId": "",
        "tipoDocumentoId": 1,
        "ingresos": "",
        "nacionalidad": "",
        "ocupacionId": 1,
        "sexo": "M",
        "barrio": "",
        "estadoCivil": "",
        "direccion": "",
        "nroDocumento": 52116335,
        "localidad": "",
        "clasificacionInternaId": "",
        "segundoNombre": "",
        "telefonoCelular": "",
        "departamentoId": "",
        "actividadLaboral": "",
        "nacionalidadId": "",
        "localidadId": "",
        "clasificacionInterna": "",
        "paisDomicilioId": "",
        "sector": "",
        "telefonoFijo": "",
        "referencia": "",
        "codigoPostal": "",
        "primerNombre": "Gonzalo",
        "fechaNacimiento": "1980-10-20",
        "actividadLaboralId": "",
        "primerApellido": "Zanelli",
        "estadoCivilId": 1,
        "segundoApellido": "",
        "paisDocumento": "",
        "fechaInicioActividad": "",
        "ocupacion": "",
        "paisDomicilio": "",
        "departamento": "",
        "fechaVencimiento": "",
        "correoElectronico": "mail@mail.com",
        "numeroPuerta": "",
        "calle": "",
        "barrioId": "",
        "tipoDocumento": ""
    }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.CrearReducidoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>4C814AD45391BD0C360941C7</Token>
         </Btinreq>
         <personaUId>8841</personaUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>228443</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.CrearReducido</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-10-27</Fecha>
            <Hora>11:12:09</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.CrearReducidoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
		"Device": "GZ",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "personaUId": 8841,
   "Erroresnegocio": {
       "BTErrorNegocio": []
   },
   "Btoutreq": {
       "Numero": "835",
       "Estado": "OK",
       "Servicio": "BTPersonas.CrearReducidoResponse",
       "Fecha": "2017-12-18",
       "Requerimiento": "",
       "Hora": "01:48:53",
       "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPersona1', fields: [{ Nombre: 'actividadLaboral', Tipo: 'String', Comentarios: 'Descripción de actividad laboral.' }, { Nombre: 'actividadLaboralId', Tipo: 'Int', Comentarios: 'Identificador de actividad laboral.' }, { Nombre: 'apartamento', Tipo: 'String', Comentarios: 'Apartamento.' }, { Nombre: 'barrio', Tipo: 'String', Comentarios: 'Nombre de barrio.' }, { Nombre: 'barrioId', Tipo: 'Int', Comentarios: 'Identificador de barrio.' }, { Nombre: 'calle', Tipo: 'String', Comentarios: 'Calle.' }, { Nombre: 'codigoPostal', Tipo: 'String', Comentarios: 'Código postal.' }, { Nombre: 'correoElectronico', Tipo: 'String', Comentarios: 'Correo electrónico.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre de departamento.' }, { Nombre: 'departamentoId', Tipo: 'Int', Comentarios: 'Identificador de departamento.' }, { Nombre: 'estadoCivil', Tipo: 'String', Comentarios: 'Descripción de estado civil.' }, { Nombre: 'estadoCivilId', Tipo: 'String', Comentarios: 'Identificador de estado civil.' }, { Nombre: 'fechaInicioActividad', Tipo: 'Date', Comentarios: 'Fecha inicio actividad.' }, { Nombre: 'fechaNacimiento', Tipo: 'Date', Comentarios: 'Fecha de nacimiento.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento de documento.' }, { Nombre: 'ingresos', Tipo: 'Double', Comentarios: 'Ingresos.' }, { Nombre: 'localidad', Tipo: 'String', Comentarios: 'Nombre de localidad.' }, { Nombre: 'localidadId', Tipo: 'Int', Comentarios: 'Identificador de localidad.' }, { Nombre: 'nacionalidad', Tipo: 'String', Comentarios: 'Nombre del país de nacimiento.' }, { Nombre: 'nacionalidadId', Tipo: 'Short', Comentarios: 'Identificador del país de nacimiento.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Número de documento.' }, { Nombre: 'numeroPuerta', Tipo: 'String', Comentarios: 'Número de puerta.' }, { Nombre: 'ocupacion', Tipo: 'String', Comentarios: 'Descripción de ocupación.' }, { Nombre: 'ocupacionId', Tipo: 'Int', Comentarios: 'Identificador de ocupación.' }, { Nombre: 'paisDocumento', Tipo: 'String', Comentarios: 'Nombre del país del documento.' }, { Nombre: 'paisDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del país del documento.' }, { Nombre: 'paisDomicilio', Tipo: 'String', Comentarios: 'Nombre del país de domicilio.' }, { Nombre: 'paisDomicilioId', Tipo: 'Short', Comentarios: 'Identificador del país de domicilio.' }, { Nombre: 'primerApellido', Tipo: 'String', Comentarios: 'Primer apellido.' }, { Nombre: 'primerNombre', Tipo: 'String', Comentarios: 'Primer nombre.' }, { Nombre: 'segundoApellido', Tipo: 'String', Comentarios: 'Segundo apellido.' }, { Nombre: 'segundoNombre', Tipo: 'String', Comentarios: 'Segundo nombre.' }, { Nombre: 'sexo', Tipo: 'String', Comentarios: 'Sexo (M/F).' }, { Nombre: 'telefonoCelular', Tipo: 'String', Comentarios: 'Teléfono celular.' }, { Nombre: 'telefonoFijo', Tipo: 'String', Comentarios: 'Teléfono fijo.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
