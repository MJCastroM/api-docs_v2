import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ActualizarPersonaJurdica',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarPersonaJuridicaComponent {
  pageTitle = 'Actualizar Persona Juridica';
  description = `Metodo para actualizar una persona juridica.`;
  pubName    = 'BTPersonas.ActualizarPersonaJuridica';
  programa   = 'RBTPG479';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'sdtPersonaJuridica', Tipo: '[sBTPersonaJuridica1](#sbtpersonajuridica1)', Comentarios: 'Datos de la persona juridica.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de persona.' }, { Codigo: '30013', Descripcion: 'No existe registro para el identificador unico.' }, { Codigo: '40001', Descripcion: 'No existe persona con los datos ingresados.' }, { Codigo: '40002', Descripcion: 'Debe ingresar pais.' }, { Codigo: '40003', Descripcion: 'El pais ingresado no existe.' }, { Codigo: '40004', Descripcion: 'Debe ingresar tipo de documento.' }, { Codigo: '40005', Descripcion: 'El tipo de documento ingresado no existe.' }, { Codigo: '40006', Descripcion: 'El tipo de documento ingresado no aplica para una persona juridica.' }, { Codigo: '40007', Descripcion: 'Debe ingresar numero de documento.' }, { Codigo: '40008', Descripcion: 'Numero de documento incorrecto.' }, { Codigo: '40009', Descripcion: 'Debe ingresar razon social.' }, { Codigo: '40010', Descripcion: 'Caracteres incorrectos en razon social.' }, { Codigo: '40011', Descripcion: 'Caracteres incorrectos en nombre reducido.' }, { Codigo: '40012', Descripcion: 'Debe ingresar naturaleza juridica.' }, { Codigo: '40013', Descripcion: 'La naturaleza juridica ingresada no existe.' }, { Codigo: '40014', Descripcion: 'Debe ingresar la fecha de constitucion.' }, { Codigo: '40015', Descripcion: 'La fecha de constitucion no puede ser posterior a la fecha de apertura.' }, { Codigo: '40016', Descripcion: 'Debe ingresar tipo de actividad.' }, { Codigo: '40017', Descripcion: 'El tipo de actividad ingresado no existe.' }, { Codigo: '40018', Descripcion: 'Debe ingresar actividad.' }, { Codigo: '40019', Descripcion: 'La actividad ingresada no existe.' }, { Codigo: '40020', Descripcion: 'Debe ingresar pais del domicilio.' }, { Codigo: '40021', Descripcion: 'El pais del domicilio no existe.' }, { Codigo: '40022', Descripcion: 'Debe ingresar departamento.' }, { Codigo: '40023', Descripcion: 'El departamento no existe.' }, { Codigo: '40024', Descripcion: 'Debe ingresar localidad.' }, { Codigo: '40025', Descripcion: 'La localidad no existe.' }, { Codigo: '40026', Descripcion: 'El barrio no existe.' }, { Codigo: '40027', Descripcion: 'Correo electronico no valido.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ActualizarPersonaJuridica>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>IN</bts:Usuario>
            <bts:Token>247d9cc0aD285A89A23FBE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>103</bts:personaUId>
         <bts:sdtPersonaJuridica>
            <bts:nroDocumento>219999990016</bts:nroDocumento>
            <bts:fechaExpiracion>2030-31-31</bts:fechaExpiracion>
            <bts:numeroPuerta>1</bts:numeroPuerta>
            <bts:nombreReducido>prueba</bts:nombreReducido>
            <bts:paisDomicilio></bts:paisDomicilio>
            <bts:razonSocial>EMPRESA</bts:razonSocial>
            <bts:departamento></bts:departamento>
            <bts:nroRegistro></bts:nroRegistro>
            <bts:naturalezaJuridica>1</bts:naturalezaJuridica>
            <bts:barrio>1</bts:barrio>
            <bts:apartamento></bts:apartamento>
            <bts:tipoDocumentoId>2</bts:tipoDocumentoId>
            <bts:tipoActividadId>1</bts:tipoActividadId>
            <bts:fechaConstitucion>2020-01-01</bts:fechaConstitucion>
            <bts:paisId>845</bts:paisId>
            <bts:actividad></bts:actividad>
            <bts:paisDomicilioId>845</bts:paisDomicilioId>
            <bts:pais></bts:pais>
            <bts:codigoPostal>91000</bts:codigoPostal>
            <bts:tipoActividad></bts:tipoActividad>
            <bts:barrioId>1</bts:barrioId>
            <bts:localidad></bts:localidad>
            <bts:localidadId>1008</bts:localidadId>
            <bts:actividadId>1111</bts:actividadId>
            <bts:calle>1</bts:calle>
            <bts:tipoDocumento>2</bts:tipoDocumento>
            <bts:naturalezaJuridicaId>1</bts:naturalezaJuridicaId>
            <bts:departamentoId>2</bts:departamentoId>
            <bts:correoElectronico>AV@GMAIL.COM</bts:correoElectronico>
            <bts:telefonoFijo>3213342222</bts:telefonoFijo>
            <bts:piso>123</bts:piso>
         </bts:sdtPersonaJuridica>
      </bts:BTPersonas.ActualizarPersonaJuridica>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarPersonaJuridica' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
   "Btinreq": {
   "Canal": "BTDIGITAL",
   "Requerimiento": "1",
   "Usuario": "IN",
   "Token": "247d9cc0aD285A89A23FBE",
   "Device": "MC"
   },
   "personaUId": "103",
    "sdtPersonaJuridica": {
        "nroDocumento": "219999990016",
        "fechaExpiracion": "2030-31-31",
        "numeroPuerta": "1",
        "nombreReducido": "prueba",
        "paisDomicilio": "",
        "razonSocial": "EMPRESA",
        "departamento": "",
        "nroRegistro": "",
        "naturalezaJuridica": "1",
        "barrio": "1",
        "apartamento": "",
        "tipoDocumentoId": "2",
        "tipoActividadId": "1",
        "fechaConstitucion": "2020-01-01",
        "paisId": "845",
        "actividad": "",
        "paisDomicilioId": "845",
        "pais": "",
        "codigoPostal": "91000",
        "tipoActividad": "",
        "barrioId": "1",
        "localidad": "",
        "localidadId": "1008",
        "actividadId": "1111",
        "calle": "1",
        "tipoDocumento": "2",
        "naturalezaJuridicaId": "1",
        "departamentoId": "2",
        "correoElectronico": "AV@GMAIL.COM",
        "telefonoFijo": "3213342222",
        "piso": "123"
    },
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ActualizarPersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>MC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>247d9cc0a3CD285A89A23FBE</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>107338</Numero>
            <Servicio>BTPersonas.ActualizarPersonaJuridica</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-11-05</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:31:25</Hora>
         </Btoutreq>
      </BTPersonas.ActualizarPersonaJuridicaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{ 
	 "Btinreq": { 
		"Device": "MC", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "247d9cc0a3CD285A89A23FBE" 
	 }, 
	 "Erroresnegocio": null, 
	 "Btoutreq": { 
		"Numero": "107338", 
		"Servicio": "BTPersonas.ActualizarPersonaJuridica", 
		"Estado": "OK", 
		"Fecha": "2020-11-05", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Hora": "12:31:25" 
	 } 
 }` }
  };

  structuredTypes = [{ typeName: 'sBTPersonaJuridica1', fields: [{ Nombre: 'actividad', Tipo: 'String', Comentarios: 'Nombre de actividad.' }, { Nombre: 'actividadId', Tipo: 'Long', Comentarios: 'Identificador de actividad.' }, { Nombre: 'apartamento', Tipo: 'String', Comentarios: 'Apartamento.' }, { Nombre: 'barrio', Tipo: 'String', Comentarios: 'Nombre de barrio.' }, { Nombre: 'barrioId', Tipo: 'Int', Comentarios: 'Identificador de barrio.' }, { Nombre: 'calle', Tipo: 'String', Comentarios: 'Calle.' }, { Nombre: 'codigoPostal', Tipo: 'String', Comentarios: 'Codigo postal.' }, { Nombre: 'correoElectronico', Tipo: 'String', Comentarios: 'Correo electronico.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre de departamento.' }, { Nombre: 'departamentoId', Tipo: 'Int', Comentarios: 'Identificador de departamento.' }, { Nombre: 'fechaConstitucion', Tipo: 'Date', Comentarios: 'Fecha de constitucion.' }, { Nombre: 'localidad', Tipo: 'String', Comentarios: 'Nombre de localidad.' }, { Nombre: 'localidadId', Tipo: 'Int', Comentarios: 'Identificador de localidad.' }, { Nombre: 'naturalezaJuridica', Tipo: 'String', Comentarios: 'Nombre de naturaleza juridica.' }, { Nombre: 'naturalezaJuridicaId', Tipo: 'Short', Comentarios: 'Identificador de naturaleza juridica.' }, { Nombre: 'nombreReducido', Tipo: 'String', Comentarios: 'Nombre reducido.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Numero de documento.' }, { Nombre: 'nroRegistro', Tipo: 'Long', Comentarios: 'Numero de registro.' }, { Nombre: 'numeroPuerta', Tipo: 'String', Comentarios: 'Numero de puerta.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del pais.' }, { Nombre: 'paisDomicilio', Tipo: 'String', Comentarios: 'Nombre del pais de domicilio.' }, { Nombre: 'paisDomicilioId', Tipo: 'Short', Comentarios: 'Identificador del pais de domicilio.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del pais.' }, { Nombre: 'piso', Tipo: 'String', Comentarios: 'Piso.' }, { Nombre: 'razonSocial', Tipo: 'String', Comentarios: 'Razon social.' }, { Nombre: 'telefonoFijo', Tipo: 'String', Comentarios: 'Numero de telefono fijo.' }, { Nombre: 'tipoActividad', Tipo: 'String', Comentarios: 'Nombre de tipo de actividad.' }, { Nombre: 'tipoActividadId', Tipo: 'Long', Comentarios: 'Identificador de tipo de actividad.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }] }];
}
