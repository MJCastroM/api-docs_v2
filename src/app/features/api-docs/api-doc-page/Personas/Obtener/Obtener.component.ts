import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Obtener',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerComponent1750272791564 {
  pageTitle        = 'Obtener';
  description      = `Método para obtener los datos de una persona.`;
  pubName    = 'BTPersonas.Obtener';
  programa   = 'RBTPG085';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  outputData = [{ Nombre: 'sdtPersona', Tipo: '[sBTPersonaFisica](#sbtpersonafisica)', Comentarios: 'Datos de la persona física.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de persona.' }, { Codigo: '30002', Descripcion: 'El identificador no corresponde a una persona física' }, { Codigo: '30013', Descripcion: 'No existe registro para el identificador único.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.Obtener>
         <bts:Btinreq>
            <bts:Device>AS</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>E90CADA1F3E3690DCCF3217A</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>239</bts:personaUId>
      </bts:BTPersonas.Obtener>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?Obtener\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
   "Btinreq": {
      "Device": "AS",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "",
      "Canal": "BTDIGITAL",
      "Token": "jh2c02c95a4A8B5C60A82434"
   },
   "personaUId": "239",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>E90CADA1F3E3690DCCF3217A</Token>
         </Btinreq>
         <sdtPersona>
            <nroDocumento>73284906</nroDocumento>
            <estadoCivil>Soltero/a</estadoCivil>
            <segundoNombre>LUCIA</segundoNombre>
            <fechaInicioActividad>2023-05-09</fechaInicioActividad>
            <fechaVencimiento>2030-10-12</fechaVencimiento>
            <segundoApellido>GOMEZ</segundoApellido>
            <fechaNacimiento>1989-04-10</fechaNacimiento>
            <telefonoCelular>095376512</telefonoCelular>
            <tipoDocumentoId>1</tipoDocumentoId>
            <actividadLaboral>67110 Administración de mercados financieros</actividadLaboral>
            <clasificacionInternaId>0</clasificacionInternaId>
            <sexo>F</sexo>
            <clasificacionInterna/>
            <primerNombre>ANA</primerNombre>
            <paisDocumentoId>845</paisDocumentoId>
            <telefonoFijo>42235681</telefonoFijo>
            <primerApellido>LOPEZ</primerApellido>
            <ocupacion>Asalariado</ocupacion>
            <sector/>
            <paisDocumento>URUGUAY</paisDocumento>
            <ocupacionId>1</ocupacionId>
            <sueldo>65000.0</sueldo>
            <nacionalidad>URUGUAY</nacionalidad>
            <comentarioCorreo/>
            <domicilios>
               <SdtsBTDomicilioCompleto>
                  <coloniaId>0</coloniaId>
                  <agrupador1Id>1</agrupador1Id>
                  <agrupador5/>
                  <departamento>Montevideo</departamento>
                  <agrupador4>301</agrupador4>
                  <agrupador3Id>4</agrupador3Id>
                  <detalleUbicacion/>
                  <barrio>Centro</barrio>
                  <agrupador3>3</agrupador3>
                  <agrupador2>1147</agrupador2>
                  <agrupador1>18 de julio</agrupador1>
                  <agrupador5Id>0</agrupador5Id>
                  <tipoDomicilio>Residencia</tipoDomicilio>
                  <ubicacionDesde>2010-01-01</ubicacionDesde>
                  <direccion>AVENIDA 18 DE JULIO NO. PUERTA 1147 PISO 3 OFICINA 301</direccion>
                  <colonia/>
                  <paisId>845</paisId>
                  <tipoVivienda>Propietario</tipoVivienda>
                  <pais>URUGUAY</pais>
                  <agrupador2Id>1</agrupador2Id>
                  <codigoPostal>11800</codigoPostal>
                  <tipoViviendaId>1</tipoViviendaId>
                  <agrupador4Id>1</agrupador4Id>
                  <barrioId>330</barrioId>
                  <localidadId>10</localidadId>
                  <localidad>Montevideo</localidad>
                  <tipoDomicilioId>1</tipoDomicilioId>
                  <departamentoId>10</departamentoId>
               </SdtsBTDomicilioCompleto>
            </domicilios>
            <datosAdicionales></datosAdicionales>
            <correoElectronico>alucia@gmail.com</correoElectronico>
            <sectorId>0</sectorId>
            <actividadLaboralId>67110</actividadLaboralId>
            <tipoDocumento>Cédula Identidad</tipoDocumento>
            <nacionalidadId>845</nacionalidadId>
            <estadoCivilId>1</estadoCivilId>
         </sdtPersona>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35202</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.Obtener</Servicio>
            <Requerimiento/>
            <Fecha>2025-05-13</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:19:37</Hora>
         </Btoutreq>
      </BTPersonas.ObtenerResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
   "Btinreq": {
      "Device": "AS",
         "Usuario": "INSTALADOR",
         "Requerimiento": "",
         "Canal": "BTDIGITAL",
         "Token": "E90CADA1F3E3690DCCF3217A"
      },
      "sdtPersona": {
         "nroDocumento": "73284906",
         "estadoCivil": "Soltero/a",
         "segundoNombre": "LUCIA",
         "fechaInicioActividad": "2023-05-09",
         "fechaVencimiento": "2030-10-12",
         "segundoApellido": "GOMEZ",
         "fechaNacimiento": "1989-04-10",
         "telefonoCelular": "095376512",
         "tipoDocumentoId": "1",
         "actividadLaboral": "67110 Administración de mercados financieros",
         "clasificacionInternaId": "0",
         "sexo": "F",
         "clasificacionInterna": "",
         "primerNombre": "ANA",
         "paisDocumentoId": "845",
         "telefonoFijo": "42235681",
         "primerApellido": "LOPEZ",
         "ocupacion": "Asalariado",
         "sector": "",
         "paisDocumento": "URUGUAY",
         "ocupacionId": "1",
         "sueldo": "65000.0",
         "nacionalidad": "URUGUAY",
         "comentarioCorreo": "",
         "domicilios": {
            "SdtsBTDomicilioCompleto": {
               "coloniaId": "0",
               "agrupador1Id": "1",
               "agrupador5": "",
               "departamento": "Montevideo",
               "agrupador4": "301",
               "agrupador3Id": "4",
               "detalleUbicacion": "",
               "barrio": "Centro",
               "agrupador3": "3",
               "agrupador2": "1147",
               "agrupador1": "18 de julio",
               "agrupador5Id": "0",
               "tipoDomicilio": "Residencia",
               "ubicacionDesde": "2010-01-01",
               "direccion": "AVENIDA 18 DE JULIO NO. PUERTA 1147 PISO 3 OFICINA 301",
               "colonia": "",
               "paisId": "845",
               "tipoVivienda": "Propietario",
               "pais": "URUGUAY",
               "agrupador2Id": "1",
               "codigoPostal": "11800",
               "tipoViviendaId": "1",
               "agrupador4Id": "1",
               "barrioId": "330",
               "localidadId": "10",
               "localidad": "Montevideo",
               "tipoDomicilioId": "1",
               "departamentoId": "10"
            }
         },
         "datosAdicionales": "",
         "correoElectronico": "alucia@gmail.com",
         "sectorId": "0",
         "actividadLaboralId": "67110",
         "tipoDocumento": "Cédula Identidad",
         "nacionalidadId": "845",
         "estadoCivilId": "1"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "35202",
         "Estado": "OK",
         "Servicio": "BTPersonas.Obtener",
         "Requerimiento": "",
         "Fecha": "2025-05-13",
         "Canal": "BTDIGITAL",
         "Hora": "10:19:37"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPersonaFisica', fields: [{ Nombre: 'actividadLaboral', Tipo: 'String', Comentarios: 'Descripción de actividad laboral.' }, { Nombre: 'actividadLaboralId', Tipo: 'Int', Comentarios: 'Identificador de la actividad laboral.' }, { Nombre: 'clasificacionInterna', Tipo: 'String', Comentarios: 'Descripción de la clasificación interna.' }, { Nombre: 'clasificacionInternaId', Tipo: 'Short', Comentarios: 'Identificador de la clasificación interna.' }, { Nombre: 'correoElectronico', Tipo: 'String', Comentarios: 'Correo electrónico.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTDatoLista](#sbtdatolista)', Comentarios: 'Listado de datos adicionales.' }, { Nombre: 'domicilios', Tipo: '[sBTDomicilioCompleto](#sbtdomiciliocompleto)', Comentarios: 'Listado de los domicilios.' }, { Nombre: 'estadoCivil', Tipo: 'String', Comentarios: 'Descripción de estado civil.' }, { Nombre: 'estadoCivilId', Tipo: 'String', Comentarios: 'Identificador de estado civil.' }, { Nombre: 'fechaInicioActividad', Tipo: 'Date', Comentarios: 'Fecha de inicio de actividad.' }, { Nombre: 'fechaNacimiento', Tipo: 'Date', Comentarios: 'Fecha de nacimiento.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'nacionalidad', Tipo: 'String', Comentarios: 'Nombre del país de nacimiento.' }, { Nombre: 'nacionalidadId', Tipo: 'Short', Comentarios: 'Identificador del país de nacimiento.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Número de documento.' }, { Nombre: 'ocupacion', Tipo: 'String', Comentarios: 'Descripción de ocupación.' }, { Nombre: 'ocupacionId', Tipo: 'Int', Comentarios: 'Identificador de ocupación.' }, { Nombre: 'paisDocumento', Tipo: 'String', Comentarios: 'Nombre del país del documento.' }, { Nombre: 'paisDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del país del documento.' }, { Nombre: 'primerApellido', Tipo: 'String', Comentarios: 'Primer apellido.' }, { Nombre: 'primerNombre', Tipo: 'String', Comentarios: 'Primer nombre.' }, { Nombre: 'sector', Tipo: 'String', Comentarios: 'Sector.' }, { Nombre: 'sectorId', Tipo: 'Short', Comentarios: 'Identificador del sector.' }, { Nombre: 'segundoApellido', Tipo: 'String', Comentarios: 'Segundo apellido.' }, { Nombre: 'segundoNombre', Tipo: 'String', Comentarios: 'Segundo nombre.' }, { Nombre: 'sexo', Tipo: 'String', Comentarios: 'Sexo (M/F).' }, { Nombre: 'sueldo', Tipo: 'Double', Comentarios: 'Sueldo.' }, { Nombre: 'telefonoCelular', Tipo: 'String', Comentarios: 'Teléfono celular.' }, { Nombre: 'telefonoFijo', Tipo: 'String', Comentarios: 'Teléfono fijo.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }, { Nombre: '### sBTDomicilioCompleto', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTDomicilioCompleto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'agrupador1', Tipo: 'String', Comentarios: 'Nombre agrupador 1.' }, { Nombre: 'agrupador1Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 1.' }, { Nombre: 'agrupador2', Tipo: 'String', Comentarios: 'Nombre agrupador 2.' }, { Nombre: 'agrupador2Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 2.' }, { Nombre: 'agrupador3', Tipo: 'String', Comentarios: 'Nombre agrupador 3.' }, { Nombre: 'agrupador3Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 3.' }, { Nombre: 'agrupador4', Tipo: 'String', Comentarios: 'Nombre agrupador 4.' }, { Nombre: 'agrupador4Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 4.' }, { Nombre: 'agrupador5', Tipo: 'String', Comentarios: 'Nombre agrupador 5.' }, { Nombre: 'agrupador5Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 5.' }, { Nombre: 'barrio', Tipo: 'String', Comentarios: 'Nombre del barrio.' }, { Nombre: 'barrioId', Tipo: 'int', Comentarios: 'Identificador del barrio.' }, { Nombre: 'codigoPostal', Tipo: 'String', Comentarios: 'Código postal.' }, { Nombre: 'colonia', Tipo: 'String', Comentarios: 'Colonia.' }, { Nombre: 'coloniaId', Tipo: 'int', Comentarios: 'Identificador de la colonia.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre del departamento.' }, { Nombre: 'departamentoId', Tipo: 'int', Comentarios: 'Identificador del departamento.' }, { Nombre: 'detalleUbicacion', Tipo: 'String', Comentarios: 'Detalle de la ubicación.' }, { Nombre: 'direccion', Tipo: 'String', Comentarios: 'Dirección.' }, { Nombre: 'localidad', Tipo: 'String', Comentarios: 'Nombre de la localidad.' }, { Nombre: 'localidadId', Tipo: 'int', Comentarios: 'Identificador de la localidad.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del país.' }, { Nombre: 'tipoDomicilio', Tipo: 'String', Comentarios: 'Descripción del tipo de domicilio.' }, { Nombre: 'tipoDomicilioId', Tipo: 'Byte', Comentarios: 'Identificador del tipo de domicilio.' }, { Nombre: 'tipoVivienda', Tipo: 'String', Comentarios: 'Descripción del tipo de vivienda.' }, { Nombre: 'tipoViviendaId', Tipo: 'String', Comentarios: 'Identificador del tipo de vivienda.' }, { Nombre: 'ubicacionDesde', Tipo: 'Date', Comentarios: 'Fecha desde que reside en ese domicilio.' }, { Nombre: '### sBTDatoLista', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTDomicilioCompleto', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de información adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de información adicional.' }] }, { typeName: 'sBTDatoLista', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de información adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de información adicional.' }] }];
}
