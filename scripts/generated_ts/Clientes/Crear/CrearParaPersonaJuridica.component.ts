import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CrearParaPersonaJuridica',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearParaPersonaJuridicaComponent1750446218230 {
  pageTitle        = 'Crear Para Persona Jurídica';
  description      = `Método para crear una persona jurídica y su cuenta cliente.`;
  pubName    = 'BTClientes.CrearParaPersonaJuridica';
  programa   = 'RBTPG282';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPersonaJuridica', Tipo: '[sBTPersonaJuridica1](#sbtpersonajuridica1)', Comentarios: 'Datos de la persona jurídica.' }, { Nombre: 'sdtIntegrantesJuridicosAlta', Tipo: '[sBTIntegranteJuridicoAlta](#sbtintegrantejuridicoalta)', Comentarios: 'Listado de personas físicas integrantes de la persona jurídica.' }];
  outputData = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar al menos un integrante.' }, { Codigo: '30002', Descripcion: 'Debe ingresar identificador de vínculo.' }, { Codigo: '30003', Descripcion: 'No se pudo obtener identificador único de la persona.' }, { Codigo: '30004', Descripcion: 'No se pudo recuperar el número de cuenta.' }, { Codigo: '30005', Descripcion: 'No se pudo obtener identificador único de la cuenta.' }, { Codigo: '40001', Descripcion: 'Ya existe persona con los datos ingresados.' }, { Codigo: '40002', Descripcion: 'Debe ingresar país.' }, { Codigo: '40003', Descripcion: 'El país ingresado no existe.' }, { Codigo: '40004', Descripcion: 'Debe ingresar tipo de documento.' }, { Codigo: '40005', Descripcion: 'El tipo de documento ingresado no existe.' }, { Codigo: '40006', Descripcion: 'El tipo de documento ingresado no aplica para una persona jurídica.' }, { Codigo: '40007', Descripcion: 'Debe ingresar número de documento.' }, { Codigo: '40008', Descripcion: 'Número de documento incorrecto.' }, { Codigo: '40009', Descripcion: 'Debe ingresar razón social.' }, { Codigo: '40010', Descripcion: 'Caracteres incorrectos en razón social.' }, { Codigo: '40011', Descripcion: 'Caracteres incorrectos en nombre reducido.' }, { Codigo: '40012', Descripcion: 'Debe ingresar naturaleza jurídica.' }, { Codigo: '40013', Descripcion: 'La naturaleza jurídica ingresada no existe.' }, { Codigo: '40014', Descripcion: 'Debe ingresar la fecha de constitución.' }, { Codigo: '40015', Descripcion: 'La fecha de constitución no puede ser posterior a la fecha de apertura.' }, { Codigo: '40016', Descripcion: 'Debe ingresar tipo de actividad.' }, { Codigo: '40017', Descripcion: 'El tipo de actividad ingresado no existe.' }, { Codigo: '40018', Descripcion: 'Debe ingresar actividad.' }, { Codigo: '40019', Descripcion: 'La actividad ingresada no existe.' }, { Codigo: '40020', Descripcion: 'Debe ingresar país del domicilio.' }, { Codigo: '40021', Descripcion: 'El país del domicilio no existe.' }, { Codigo: '40022', Descripcion: 'Debe ingresar departamento.' }, { Codigo: '40023', Descripcion: 'El departamento no existe.' }, { Codigo: '40024', Descripcion: 'Debe ingresar localidad.' }, { Codigo: '40025', Descripcion: 'La localidad no existe.' }, { Codigo: '40026', Descripcion: 'El barrio no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.CrearParaPersonaJuridica>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>247d9cc0a3CD285A89A23FBE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:sdtPersonaJuridica>
            <bts:nroDocumento>219999990016</bts:nroDocumento>
            <bts:nombreReducido>prueba</bts:nombreReducido>
            <bts:razonSocial>EMPRESA</bts:razonSocial>
            <bts:nroRegistro></bts:nroRegistro>
            <bts:naturalezaJuridica>1</bts:naturalezaJuridica>
            <bts:tipoDocumentoId>2</bts:tipoDocumentoId>
            <bts:tipoActividadId>1</bts:tipoActividadId>
            <bts:fechaConstitucion>2020-01-01</bts:fechaConstitucion>
            <bts:fechaExpiracion>2027-01-01</bts:fechaExpiracion>
            <bts:paisId>845</bts:paisId>
            <bts:actividad></bts:actividad>
            <bts:pais></bts:pais>
            <bts:tipoActividad></bts:tipoActividad>
            <bts:actividadId>1111</bts:actividadId>
            <bts:tipoDocumento>2</bts:tipoDocumento>
            <bts:naturalezaJuridicaId>1</bts:naturalezaJuridicaId>
            <bts:correoElectronico>AV@GMAIL.COM</bts:correoElectronico>
            <bts:telefonoFijo>3213342222</bts:telefonoFijo>
            <bts:telefonoCelular>05985423</bts:telefonoCelular>
            <bts:domicilios>
               <bts:SdtsBTDomicilioCompleto>
                  <bts:agrupador1Id>1</bts:agrupador1Id>
                  <bts:coloniaId>3</bts:coloniaId>
                  <bts:departamento></bts:departamento>
                  <bts:agrupador5></bts:agrupador5>
                  <bts:agrupador4></bts:agrupador4>
                  <bts:agrupador3Id>1</bts:agrupador3Id>
                  <bts:agrupador3></bts:agrupador3>
                  <bts:barrio></bts:barrio>
                  <bts:detalleUbicacion></bts:detalleUbicacion>
                  <bts:agrupador2></bts:agrupador2>
                  <bts:agrupador1></bts:agrupador1>
                  <bts:agrupador5Id>3</bts:agrupador5Id>
                  <bts:ubicacionDesde></bts:ubicacionDesde>
                  <bts:tipoDomicilio></bts:tipoDomicilio>
                  <bts:direccion></bts:direccion>
                  <bts:colonia></bts:colonia>
                  <bts:paisId>845</bts:paisId>
                  <bts:tipoVivienda></bts:tipoVivienda>
                  <bts:pais></bts:pais>
                  <bts:agrupador2Id>2</bts:agrupador2Id>
                  <bts:codigoPostal>7852</bts:codigoPostal>
                  <bts:tipoViviendaId>1</bts:tipoViviendaId>
                  <bts:agrupador4Id>1</bts:agrupador4Id>
                  <bts:barrioId>2</bts:barrioId>
                  <bts:localidad></bts:localidad>
                  <bts:localidadId>2</bts:localidadId>
                  <bts:tipoDomicilioId>1</bts:tipoDomicilioId>
                  <bts:departamentoId>1</bts:departamentoId>
               </bts:SdtsBTDomicilioCompleto>
            </bts:domicilios>
         </bts:sdtPersonaJuridica>
         <bts:sdtIntegrantesJuridicosAlta>
            <bts:sBTIntegranteJuridicoAlta>
               <bts:vinculoId>1</bts:vinculoId>
               <bts:personaUId>141</bts:personaUId>
               <bts:participacion></bts:participacion>
            </bts:sBTIntegranteJuridicoAlta>
         </bts:sdtIntegrantesJuridicosAlta>
      </bts:BTClientes.CrearParaPersonaJuridica>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?CrearParaPersonaJuridica\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
   "Btinreq": {
   "Canal": "BTDIGITAL",
   "Requerimiento": "1",
   "Usuario": "INSTALADOR",
   "Token": "247d9cc0a3CD285A89A23FBE",
   "Device": "MC"
   },
   "sdtPersonaJuridica": {
      "nroDocumento": 219999990016,
      "nombreReducido": "prueba",
      "razonSocial": "EMPRESA",
      "nroRegistro": "",
      "naturalezaJuridica": 1,
      "tipoDocumentoId": 2,
      "tipoActividadId": 1,
      "fechaConstitucion": "2020-01-01",
      "fechaExpiracion": "2027-01-01",
      "paisId": 845,
      "actividad": "",
      "pais": "",
      "tipoActividad": "",
      "actividadId": 1111,
      "tipoDocumento": 2,
      "naturalezaJuridicaId": 1,
      "correoElectronico": "AV@GMAIL.COM",
      "telefonoFijo": 3213342222,
      "telefonoCelular": 5985423,
      "domicilios": {
         "SdtsBTDomicilioCompleto": {
            "agrupador1Id": 1,
            "coloniaId": 3,
            "departamento": "",
            "agrupador5": "",
            "agrupador4": "",
            "agrupador3Id": 1,
            "agrupador3": "",
            "barrio": "",
            "detalleUbicacion": "",
            "agrupador2": "",
            "agrupador1": "",
            "agrupador5Id": 3,
            "ubicacionDesde": "",
            "tipoDomicilio": "",
            "direccion": "",
            "colonia": "",
            "paisId": 845,
            "tipoVivienda": "",
            "pais": "",
            "agrupador2Id": 2,
            "codigoPostal": 7852,
            "tipoViviendaId": 1,
            "agrupador4Id": 1,
            "barrioId": 2,
            "localidad": "",
            "localidadId": 2,
            "tipoDomicilioId": 1,
            "departamentoId": 1
         }
      }
   },
   "sdtIntegrantesJuridicosAlta": {
      "sBTIntegranteJuridicoAlta": {
         "vinculoId": 1,
         "personaUId": 141,
         "participacion": ""
      }
   }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.CrearParaPersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>MC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>247d9cc0a3CD285A89A23FBE</Token>
         </Btinreq>
         <clienteUId>783</clienteUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>107355</Numero>
            <Servicio>BTClientes.CrearParaPersonaJuridica</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-11-06</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:42:14</Hora>
         </Btoutreq>
      </BTClientes.CrearParaPersonaJuridicaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{ 
	 "Btinreq": { 
		"Device": "MC", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "247d9cc0a3CD285A89A23FBE" 
	 }, 
	 "clienteUId": "783", 
	 "Erroresnegocio": null, 
	 "Btoutreq": { 
		"Numero": "107338", 
		"Servicio": "BTClientes.CrearParaPersonaJuridica", 
		"Estado": "OK", 
		"Fecha": "2020-11-05", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Hora": "12:31:25" 
	 } 
 }` }
  };

  structuredTypes = [{ typeName: 'sBTPersonaJuridica1', fields: [{ Nombre: 'actividad', Tipo: 'String', Comentarios: 'Nombre de actividad.' }, { Nombre: 'actividadId', Tipo: 'Long', Comentarios: 'Identificador de actividad.' }, { Nombre: 'correoElectronico', Tipo: 'String', Comentarios: 'Correo electrónico.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTDatoLista](#sbtdatolista)', Comentarios: 'Listado de datos adicionales.' }, { Nombre: 'domicilios', Tipo: '[sBTDomicilioCompleto](#sbtdomiciliocompleto)', Comentarios: 'Listado de los domicilios.' }, { Nombre: 'fechaConstitucion', Tipo: 'Date', Comentarios: 'Fecha de constitución.' }, { Nombre: 'fechaExpiracion', Tipo: 'Date', Comentarios: 'Fecha de expiración.' }, { Nombre: 'naturalezaJuridica', Tipo: 'String', Comentarios: 'Nombre de naturaleza jurídica.' }, { Nombre: 'naturalezaJuridicaId', Tipo: 'Short', Comentarios: 'Identificador de naturaleza jurídica.' }, { Nombre: 'nombreReducido', Tipo: 'String', Comentarios: 'Nombre reducido.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Número de documento.' }, { Nombre: 'nroRegistro', Tipo: 'Long', Comentarios: 'Número de registro.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del país.' }, { Nombre: 'razonSocial', Tipo: 'String', Comentarios: 'Razón social.' }, { Nombre: 'telefonoCelular', Tipo: 'String', Comentarios: 'Número de teléfono celular.' }, { Nombre: 'telefonoFijo', Tipo: 'String', Comentarios: 'Número de teléfono fijo.' }, { Nombre: 'tipoActividad', Tipo: 'String', Comentarios: 'Nombre de tipo de actividad.' }, { Nombre: 'tipoActividadId', Tipo: 'Long', Comentarios: 'Identificador de tipo de actividad.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }, { Nombre: '### sBTDomicilioCompleto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTDomicilioCompleto', fields: [{ Nombre: 'agrupador1', Tipo: 'String', Comentarios: 'Nombre agrupador 1.' }, { Nombre: 'agrupador1Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 1.' }, { Nombre: 'agrupador2', Tipo: 'String', Comentarios: 'Nombre agrupador 2.' }, { Nombre: 'agrupador2Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 2.' }, { Nombre: 'agrupador3', Tipo: 'String', Comentarios: 'Nombre agrupador 3.' }, { Nombre: 'agrupador3Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 3.' }, { Nombre: 'agrupador4', Tipo: 'String', Comentarios: 'Nombre agrupador 4.' }, { Nombre: 'agrupador4Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 4.' }, { Nombre: 'agrupador5', Tipo: 'String', Comentarios: 'Nombre agrupador 5.' }, { Nombre: 'agrupador5Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 5.' }, { Nombre: 'barrio', Tipo: 'String', Comentarios: 'Nombre del barrio.' }, { Nombre: 'barrioId', Tipo: 'int', Comentarios: 'Identificador del barrio.' }, { Nombre: 'codigoPostal', Tipo: 'String', Comentarios: 'Código postal.' }, { Nombre: 'colonia', Tipo: 'String', Comentarios: 'Colonia.' }, { Nombre: 'coloniaId', Tipo: 'int', Comentarios: 'Identificador de la colonia.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre del departamento.' }, { Nombre: 'departamentoId', Tipo: 'int', Comentarios: 'Identificador del departamento.' }, { Nombre: 'detalleUbicacion', Tipo: 'String', Comentarios: 'Detalle de la ubicación.' }, { Nombre: 'direccion', Tipo: 'String', Comentarios: 'Dirección.' }, { Nombre: 'localidad', Tipo: 'String', Comentarios: 'Nombre de la localidad.' }, { Nombre: 'localidadId', Tipo: 'int', Comentarios: 'Identificador de la localidad.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del país.' }, { Nombre: 'tipoDomicilio', Tipo: 'String', Comentarios: 'Descripción del tipo de domicilio.' }, { Nombre: 'tipoDomicilioId', Tipo: 'Byte', Comentarios: 'Identificador del tipo de domicilio.' }, { Nombre: 'tipoVivienda', Tipo: 'String', Comentarios: 'Descripción del tipo de vivienda.' }, { Nombre: 'tipoViviendaId', Tipo: 'String', Comentarios: 'Identificador del tipo de vivienda.' }, { Nombre: 'ubicacionDesde', Tipo: 'Date', Comentarios: 'Fecha desde que reside en ese domicilio.' }, { Nombre: '### sBTDatoLista', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTDatoLista', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de información adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de información adicional.' }] }, { typeName: 'sBTIntegranteJuridicoAlta', fields: [{ Nombre: 'participacion', Tipo: 'Double', Comentarios: 'Porcentaje de participación del integrante.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'vinculoId', Tipo: 'Short', Comentarios: 'Identificador de vínculo.' }] }];
}
