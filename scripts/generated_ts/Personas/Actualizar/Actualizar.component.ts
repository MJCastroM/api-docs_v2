import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-Actualizar',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarComponent {
  // Cabecera e info-card
  pageTitle = 'Actualizar';
  description = `Metodo para actualizar los datos de una persona.`;
  pubName    = 'BTPersonas.Actualizar';
  programa   = 'RBTPG398';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['personaUId', 'sdtPersona'];
  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'sdtPersona', Tipo: '[sBTPersonaFisica](#sbtpersonafisica)', Comentarios: 'Datos de la persona fisica.' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '30002', '40001', '40002', '40003', '40004', '40005', '40006', '40007', '40008', '40009', '40010', '40011', '40012', '40013', '40014', '40015', '40016', '40028', '40029', '40030', '40041', '40042', '40043', '40044', '40051', '40101', '40119', '40120', '40121', '40122', '40123', '40124', '40125', '40126', '40127', '40128', '40130', '40131', '40132'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de persona.' }, { Codigo: '30002', Descripcion: 'No se recupero la persona para el identificador de persona: [Numero de Identificador].' }, { Codigo: '40001', Descripcion: 'Debe ingresar Pais del Documento.' }, { Codigo: '40002', Descripcion: 'El Pais del Documento no existe.' }, { Codigo: '40003', Descripcion: 'Debe ingresar Tipo de Documento.' }, { Codigo: '40004', Descripcion: 'El Tipo de Documento no existe.' }, { Codigo: '40005', Descripcion: 'Debe ingresar Nro de Documento.' }, { Codigo: '40006', Descripcion: 'Numero de Documento incorrecto.' }, { Codigo: '40007', Descripcion: 'Debe ingresar Primer Apellido.' }, { Codigo: '40008', Descripcion: 'Debe ingresar Primer Nombre.' }, { Codigo: '40009', Descripcion: 'Debe ingresar Fecha de Nacimiento.' }, { Codigo: '40010', Descripcion: 'La Fecha de Nacimiento no puede ser posterior a hoy.' }, { Codigo: '40011', Descripcion: 'La persona no es mayor de [Edad minima] anos.' }, { Codigo: '40012', Descripcion: 'Debe ingresar Sexo.' }, { Codigo: '40013', Descripcion: 'Debe ingresar Ocupacion.' }, { Codigo: '40014', Descripcion: 'El codigo de Ocupacion no existe.' }, { Codigo: '40015', Descripcion: 'La Fecha de Inicio de Actividad no puede ser posterior a hoy.' }, { Codigo: '40016', Descripcion: 'Caracteres incorrectos en nombre/apellido.' }, { Codigo: '40028', Descripcion: 'Debe ingresar al menos un Telefono.' }, { Codigo: '40029', Descripcion: 'Email invalido.' }, { Codigo: '40030', Descripcion: 'La persona se encuentra en la lista de Inhabilitados: [Descripcion lista].' }, { Codigo: '40041', Descripcion: 'Debe ingresar Actividad Laboral.' }, { Codigo: '40042', Descripcion: 'El codigo de Actividad Laboral no existe.' }, { Codigo: '40043', Descripcion: 'El Pais de la nacionalidad no existe.' }, { Codigo: '40044', Descripcion: 'El sexo ingresado no es valido.' }, { Codigo: '40051', Descripcion: 'La persona ya existe.' }, { Codigo: '40101', Descripcion: 'Codigo de domicilio no valido.' }, { Codigo: '40119', Descripcion: 'Debe ingresar Pais del Domicilio' }, { Codigo: '40120', Descripcion: 'El Pais del Domicilio no existe.' }, { Codigo: '40121', Descripcion: 'Debe ingresar Departamento.' }, { Codigo: '40122', Descripcion: 'El Departamento no existe.' }, { Codigo: '40123', Descripcion: 'Debe ingresar Localidad.' }, { Codigo: '40124', Descripcion: 'La Localidad no existe.' }, { Codigo: '40125', Descripcion: 'El barrio no existe.' }, { Codigo: '40126', Descripcion: 'Debe ingresar calle.' }, { Codigo: '40127', Descripcion: 'Debe ingresar numero de puerta.' }, { Codigo: '40128', Descripcion: 'Debe ingresar codigo postal.' }, { Codigo: '40130', Descripcion: 'El domicilio ingresado ya existe.' }, { Codigo: '40131', Descripcion: 'El domicilio ingresado no existe.' }, { Codigo: '40132', Descripcion: 'El numero de puerta no puede superar los 5 digitos.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.Actualizar>
         <bts:Btinreq>
            <bts:Device>AS</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>571F9E08C47490ACEBE3A263</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>219</bts:personaUId>
         <bts:sdtPersona>
            <nroDocumento>13348799</nroDocumento>
            <estadoCivil>Soltero/a</estadoCivil>
            <segundoNombre>Batista</segundoNombre>
            <fechaInicioActividad>2021-03-15</fechaInicioActividad>
            <fechaVencimiento>2045-01-01</fechaVencimiento>
            <segundoApellido>Rodriguez</segundoApellido>
            <fechaNacimiento>1890-01-20</fechaNacimiento>
            <telefonoCelular>099876531</telefonoCelular>
            <tipoDocumentoId>1</tipoDocumentoId>
            <actividadLaboral>92410 Actividades deportivas</actividadLaboral>
            <clasificacionInternaId>1</clasificacionInternaId>
            <sexo>M</sexo>
            <clasificacionInterna/>
            <primerNombre>JULIO</primerNombre>
            <paisDocumentoId>845</paisDocumentoId>
            <telefonoFijo>24044040</telefonoFijo>
            <primerApellido>ALVAREZ</primerApellido>
            <ocupacion>Pensionado</ocupacion>
            <sector/>
            <paisDocumento>URUGUAY</paisDocumento>
            <ocupacionId>2</ocupacionId>
            <sueldo>100000.0</sueldo>
            <nacionalidad>URUGUAY</nacionalidad>
            <bts:comentarioCorreo>Correo Personal</bts:comentarioCorreo>
            <bts:domicilios>
               <bts:SdtsBTDomicilioCompleto>
                  <bts:coloniaId>1</bts:coloniaId>
                  <bts:agrupador1Id>3</bts:agrupador1Id>
                  <bts:agrupador5></bts:agrupador5>
                  <bts:departamento>Montevideo</bts:departamento>
                  <bts:agrupador4>Ejidio</bts:agrupador4>
                  <bts:agrupador3Id>1</bts:agrupador3Id>
                  <bts:detalleUbicacion>ENFRENTE A PANADERIA</bts:detalleUbicacion>
                  <bts:barrio></bts:barrio>
                  <bts:agrupador3>4</bts:agrupador3>
                  <bts:agrupador2>1190</bts:agrupador2>
                  <bts:agrupador1>Maldonado</bts:agrupador1>
                  <bts:agrupador5Id></bts:agrupador5Id>
                  <bts:tipoDomicilio></bts:tipoDomicilio>
                  <bts:ubicacionDesde>2024-08-17</bts:ubicacionDesde>
                  <bts:direccion></bts:direccion>
                  <bts:colonia></bts:colonia>
                  <bts:paisId>845</bts:paisId>
                  <bts:tipoVivienda>Inquilino</bts:tipoVivienda>
                  <bts:pais></bts:pais>
                  <bts:agrupador2Id>1</bts:agrupador2Id>
                  <bts:codigoPostal>19870</bts:codigoPostal>
                  <bts:tipoViviendaId>2</bts:tipoViviendaId>
                  <bts:agrupador4Id>1</bts:agrupador4Id>
                  <bts:barrioId>140</bts:barrioId>
                  <bts:localidadId>10</bts:localidadId>
                  <bts:localidad>Montevideo</bts:localidad>
                  <bts:tipoDomicilioId>1</bts:tipoDomicilioId>
                  <bts:departamentoId>10</bts:departamentoId>
               </bts:SdtsBTDomicilioCompleto>
            </bts:domicilios>
            <bts:datosAdicionales>
               <bts:SdtsBTDatoAdicional>
                  <bts:detalle></bts:detalle>
               </bts:SdtsBTDatoAdicional>
            </bts:datosAdicionales>
            <bts:correoElectronico>JULIOB@GMAIL.COM</bts:correoElectronico>
            <bts:sectorId>1</bts:sectorId>
            <bts:actividadLaboralId>92410</bts:actividadLaboralId>
            <bts:tipoDocumento></bts:tipoDocumento>
            <bts:nacionalidadId>845</bts:nacionalidadId>
            <bts:estadoCivilId>1</bts:estadoCivilId>
         </bts:sdtPersona>
      </bts:BTPersonas.Actualizar>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?Actualizar=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8' \
  -d '{
	"Btinreq": {
          "Device": "AS",
          "Usuario": "INSTALADOR",
          "Requerimiento": "",
          "Canal": "BTDIGITAL",
          "Token": "571F9E08C47490ACEBE3A263"
        },
        "personaUId": 219,
        "sdtPersona": {
          "nroDocumento": 13348799,
          "estadoCivil": "Soltero/a",
          "segundoNombre": "Batista",
          "fechaInicioActividad": "2021-03-15",
          "fechaVencimiento": "2045-01-01",
          "segundoApellido": "Rodriguez",
          "fechaNacimiento": "1890-01-20",
          "telefonoCelular": 99876531,
          "tipoDocumentoId": 1,
          "actividadLaboral": "92410 Actividades deportivas",
          "clasificacionInternaId": 1,
          "sexo": "M",
          "clasificacionInterna": "",
          "primerNombre": "JULIO",
          "paisDocumentoId": 845,
          "telefonoFijo": 24044040,
          "primerApellido": "ALVAREZ",
          "ocupacion": "Pensionado",
          "sector": "",
          "paisDocumento": "URUGUAY",
          "ocupacionId": 2,
          "sueldo": 100000,
          "nacionalidad": "URUGUAY", 
          "comentarioCorreo": "Correo Personal",
          "domicilios": {
            "SdtsBTDomicilioCompleto": {
              "coloniaId": 1,
              "agrupador1Id": 3,
              "agrupador5": "",
              "departamento": "Montevideo",
              "agrupador4": "Ejidio",
              "agrupador3Id": 1,
              "detalleUbicacion": "ENFRENTE A PANADERIA",
              "barrio": "",
              "agrupador3": 4,
              "agrupador2": 1190,
              "agrupador1": "Maldonado",
              "agrupador5Id": "",
              "tipoDomicilio": "",
              "ubicacionDesde": "2024-08-17",
              "direccion": "",
              "colonia": "",
              "paisId": 845,
              "tipoVivienda": "Inquilino",
              "pais": "",
              "agrupador2Id": 1,
              "codigoPostal": 19870,
              "tipoViviendaId": 2,
              "agrupador4Id": 1,
              "barrioId": 140,
              "localidadId": 10,
              "localidad": "Montevideo",
              "tipoDomicilioId": 1,
              "departamentoId": 10
            }
          },
          "datosAdicionales": {
            "SdtsBTDatoAdicional": {
              "detalle": ""
            }
          },
          "correoElectronico": "JULIOB@GMAIL.COM",
          "sectorId": 1,
          "actividadLaboralId": 92410,
          "tipoDocumento": "",
          "nacionalidadId": 845,
          "estadoCivilId": 1
        }
      }
    }` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ActualizarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>571F9E08C47490ACEBE3A263</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35461</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.Actualizar</Servicio>
            <Requerimiento/>
            <Fecha>2025-05-20</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>09:35:42</Hora>
         </Btoutreq>
      </BTPersonas.ActualizarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
          "Device": "AS",
          "Usuario": "INSTALADOR",
          "Requerimiento": "",
          "Canal": "BTDIGITAL",
          "Token": "571F9E08C47490ACEBE3A263"
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Numero": 35461,
          "Estado": "OK",
          "Servicio": "BTPersonas.Actualizar",
          "Requerimiento": "",
          "Fecha": "2025-05-20",
          "Canal": "BTDIGITAL",
          "Hora": "09:35:42"
        }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'actividadLaboral', Tipo: 'String', Comentarios: 'Descripcion de actividad laboral.' }, { Nombre: 'actividadLaboralId', Tipo: 'Int', Comentarios: 'Identificador de la actividad laboral.' }, { Nombre: 'clasificacionInterna', Tipo: 'String', Comentarios: 'Descripcion de la clasificacion interna.' }, { Nombre: 'clasificacionInternaId', Tipo: 'Short', Comentarios: 'Identificador de la clasificacion interna.' }, { Nombre: 'correoElectronico', Tipo: 'String', Comentarios: 'Correo electronico.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTDatoLista](#sbtdatolista)', Comentarios: 'Listado de datos adicionales.' }, { Nombre: 'domicilios', Tipo: '[sBTDomicilioCompleto](#sbtdomiciliocompleto)', Comentarios: 'Listado de los domicilios.' }, { Nombre: 'estadoCivil', Tipo: 'String', Comentarios: 'Descripcion de estado civil.' }, { Nombre: 'estadoCivilId', Tipo: 'String', Comentarios: 'Identificador de estado civil.' }, { Nombre: 'fechaInicioActividad', Tipo: 'Date', Comentarios: 'Fecha de inicio de actividad.' }, { Nombre: 'fechaNacimiento', Tipo: 'Date', Comentarios: 'Fecha de nacimiento.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'nacionalidad', Tipo: 'String', Comentarios: 'Nombre del pais de nacimiento.' }, { Nombre: 'nacionalidadId', Tipo: 'Short', Comentarios: 'Identificador del pais de nacimiento.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Numero de documento.' }, { Nombre: 'ocupacion', Tipo: 'String', Comentarios: 'Descripcion de ocupacion.' }, { Nombre: 'ocupacionId', Tipo: 'Int', Comentarios: 'Identificador de ocupacion.' }, { Nombre: 'paisDocumento', Tipo: 'String', Comentarios: 'Nombre del pais del documento.' }, { Nombre: 'paisDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del pais del documento.' }, { Nombre: 'primerApellido', Tipo: 'String', Comentarios: 'Primer apellido.' }, { Nombre: 'primerNombre', Tipo: 'String', Comentarios: 'Primer nombre.' }, { Nombre: 'sector', Tipo: 'String', Comentarios: 'Sector.' }, { Nombre: 'sectorId', Tipo: 'Short', Comentarios: 'Identificador del sector.' }, { Nombre: 'segundoApellido', Tipo: 'String', Comentarios: 'Segundo apellido.' }, { Nombre: 'segundoNombre', Tipo: 'String', Comentarios: 'Segundo nombre.' }, { Nombre: 'sexo', Tipo: 'String', Comentarios: 'Sexo (M/F).' }, { Nombre: 'sueldo', Tipo: 'Double', Comentarios: 'Sueldo.' }, { Nombre: 'telefonoCelular', Tipo: 'String', Comentarios: 'Telefono celular.' }, { Nombre: 'telefonoFijo', Tipo: 'String', Comentarios: 'Telefono fijo.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }, { Nombre: '### sBTDomicilioCompleto', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTDomicilioCompleto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'agrupador1', Tipo: 'String', Comentarios: 'Nombre agrupador 1.' }, { Nombre: 'agrupador1Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 1.' }, { Nombre: 'agrupador2', Tipo: 'String', Comentarios: 'Nombre agrupador 2.' }, { Nombre: 'agrupador2Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 2.' }, { Nombre: 'agrupador3', Tipo: 'String', Comentarios: 'Nombre agrupador 3.' }, { Nombre: 'agrupador3Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 3.' }, { Nombre: 'agrupador4', Tipo: 'String', Comentarios: 'Nombre agrupador 4.' }, { Nombre: 'agrupador4Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 4.' }, { Nombre: 'agrupador5', Tipo: 'String', Comentarios: 'Nombre agrupador 5.' }, { Nombre: 'agrupador5Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 5.' }, { Nombre: 'barrio', Tipo: 'String', Comentarios: 'Nombre del barrio.' }, { Nombre: 'barrioId', Tipo: 'int', Comentarios: 'Identificador del barrio.' }, { Nombre: 'codigoPostal', Tipo: 'String', Comentarios: 'Codigo postal.' }, { Nombre: 'colonia', Tipo: 'String', Comentarios: 'Colonia.' }, { Nombre: 'coloniaId', Tipo: 'int', Comentarios: 'Identificador de la colonia.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre del departamento.' }, { Nombre: 'departamentoId', Tipo: 'int', Comentarios: 'Identificador del departamento.' }, { Nombre: 'detalleUbicacion', Tipo: 'String', Comentarios: 'Detalle de la ubicacion.' }, { Nombre: 'direccion', Tipo: 'String', Comentarios: 'Direccion.' }, { Nombre: 'localidad', Tipo: 'String', Comentarios: 'Nombre de la localidad.' }, { Nombre: 'localidadId', Tipo: 'int', Comentarios: 'Identificador de la localidad.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del pais.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del pais.' }, { Nombre: 'tipoDomicilio', Tipo: 'String', Comentarios: 'Descripcion del tipo de domicilio.' }, { Nombre: 'tipoDomicilioId', Tipo: 'Byte', Comentarios: 'Identificador del tipo de domicilio.' }, { Nombre: 'tipoVivienda', Tipo: 'String', Comentarios: 'Descripcion del tipo de vivienda.' }, { Nombre: 'tipoViviendaId', Tipo: 'String', Comentarios: 'Identificador del tipo de vivienda.' }, { Nombre: 'ubicacionDesde', Tipo: 'Date', Comentarios: 'Fecha desde que reside en ese domicilio.' }, { Nombre: '### sBTDatoLista', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTDatoLista son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de informacion adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de informacion adicional.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
