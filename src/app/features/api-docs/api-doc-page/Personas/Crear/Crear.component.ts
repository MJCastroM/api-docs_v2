import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Crear',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearComponent1751987198530 {
  pageTitle        = 'Crear';
  description      = `Método para crear una persona.`;
  pubName    = 'BTPersonas.Crear';
  programa   = 'RBTPG806';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPersona', Tipo: '[sBTPersonaFisica](#sbtpersonafisica)', Comentarios: 'Datos de la persona física.' }];
  outputData = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  errors     = [{ Código: '30003', Descripción: 'No se pudo obtener identificador único de la persona.' }, { Código: '40001', Descripción: 'Debe ingresar País del Documento.' }, { Código: '40002', Descripción: 'El País del Documento no existe.' }, { Código: '40003', Descripción: 'Debe ingresar Tipo de Documento.' }, { Código: '40004', Descripción: 'El Tipo de Documento no existe.' }, { Código: '40005', Descripción: 'Debe ingresar Nro de Documento.' }, { Código: '40006', Descripción: 'Número de Documento incorrecto.' }, { Código: '40007', Descripción: 'Debe ingresar Primer Apellido.' }, { Código: '40008', Descripción: 'Debe ingresar Primer Nombre.' }, { Código: '40009', Descripción: 'Debe ingresar Fecha de Nacimiento.' }, { Código: '40010', Descripción: 'La Fecha de Nacimiento no puede ser posterior a hoy.' }, { Código: '40011', Descripción: 'La persona no es mayor de [Edad mínima] años.' }, { Código: '40012', Descripción: 'Debe ingresar Sexo.' }, { Código: '40013', Descripción: 'Debe ingresar Ocupación.' }, { Código: '40014', Descripción: 'El código de Ocupación no existe.' }, { Código: '40015', Descripción: 'La Fecha de Inicio de Actividad no puede ser posterior a hoy.' }, { Código: '40016', Descripción: 'Caracteres incorrectos en nombre/apellido.' }, { Código: '40028', Descripción: 'Debe ingresar al menos un Teléfono.' }, { Código: '40029', Descripción: 'Email inválido.' }, { Código: '40030', Descripción: 'La persona se encuentra en la lista de Inhabilitados: [Descripción lista].' }, { Código: '40041', Descripción: 'Debe ingresar Actividad Laboral.' }, { Código: '40042', Descripción: 'El código de Actividad Laboral no existe.' }, { Código: '40043', Descripción: 'El País de la nacionalidad no existe.' }, { Código: '40044', Descripción: 'El sexo ingresado no es válido.' }, { Código: '40051', Descripción: 'La persona ya existe.' }, { Código: '40101', Descripción: 'Código de domicilio no válido.' }, { Código: '40119', Descripción: 'Debe ingresar País del Domicilio' }, { Código: '40120', Descripción: 'El País del Domicilio no existe.' }, { Código: '40121', Descripción: 'Debe ingresar Departamento.' }, { Código: '40122', Descripción: 'El Departamento no existe.' }, { Código: '40123', Descripción: 'Debe ingresar Localidad.' }, { Código: '40124', Descripción: 'La Localidad no existe.' }, { Código: '40125', Descripción: 'El barrio no existe.' }, { Código: '40126', Descripción: 'Debe ingresar calle.' }, { Código: '40127', Descripción: 'Debe ingresar número de puerta.' }, { Código: '40128', Descripción: 'Debe ingresar código postal.' }, { Código: '40130', Descripción: 'El domicilio ingresado ya existe.' }, { Código: '40131', Descripción: 'El domicilio ingresado no existe.' }, { Código: '40132', Descripción: 'El número de puerta no puede superar los 5 dígitos.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.Crear>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1222A10B1A106FB813BD7AE9</bts:Token>
         </bts:Btinreq>
         <bts:sdtPersona>
            <bts:nroDocumento>7896328</bts:nroDocumento>
            <bts:estadoCivil></bts:estadoCivil>
            <bts:segundoNombre>Carlos</bts:segundoNombre>
            <bts:fechaInicioActividad>2023-09-26</bts:fechaInicioActividad>
            <bts:fechaVencimiento>2024-09-26</bts:fechaVencimiento>
            <bts:segundoApellido>Gimenez</bts:segundoApellido>
            <bts:fechaNacimiento>1998-09-26</bts:fechaNacimiento>
            <bts:telefonoCelular>025874532</bts:telefonoCelular>
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
            <bts:actividadLaboral></bts:actividadLaboral>
            <bts:clasificacionInternaId>2</bts:clasificacionInternaId>
            <bts:sexo>M</bts:sexo>
            <bts:primerNombre>Luis</bts:primerNombre>
            <bts:clasificacionInterna></bts:clasificacionInterna>
            <bts:paisDocumentoId>845</bts:paisDocumentoId>
            <bts:telefonoFijo>874525</bts:telefonoFijo>
            <bts:primerApellido>Gonzales</bts:primerApellido>
            <bts:ocupacion></bts:ocupacion>
            <bts:sector></bts:sector>
            <bts:paisDocumento></bts:paisDocumento>
            <bts:ocupacionId>8</bts:ocupacionId>
            <bts:nacionalidad></bts:nacionalidad>
            <bts:sueldo>7845</bts:sueldo>
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
            <bts:correoElectronico>juanLui@mail.com</bts:correoElectronico>
            <bts:sectorId>2</bts:sectorId>
            <bts:actividadLaboralId>3</bts:actividadLaboralId>
            <bts:tipoDocumento></bts:tipoDocumento>
            <bts:nacionalidadId>4</bts:nacionalidadId>
            <bts:estadoCivilId>1</bts:estadoCivilId>
         </bts:sdtPersona>
      </bts:BTPersonas.Crear>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
    \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?Crear\' \
    -H \'cache-control: no-cache\' \
    -H \'content-type: application/json\' \
    -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
    -d \'{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "AC",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
   "sdtPersona": {
      "nroDocumento": 7896328,
      "estadoCivil": "",
      "segundoNombre": "Carlos",
      "fechaInicioActividad": "2023-09-26",
      "fechaVencimiento": "2024-09-26",
      "segundoApellido": "Gimenez",
      "fechaNacimiento": "1998-09-26",
      "telefonoCelular": 25874532,
      "tipoDocumentoId": 1,
      "actividadLaboral": "",
      "clasificacionInternaId": 2,
      "sexo": "M",
      "primerNombre": "Luis",
      "clasificacionInterna": "",
      "paisDocumentoId": 845,
      "telefonoFijo": 874525,
      "primerApellido": "Gonzales",
      "ocupacion": "",
      "sector": "",
      "paisDocumento": "",
      "ocupacionId": 8,
      "nacionalidad": "",
      "sueldo": 7845,
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
      },
      "correoElectronico": "juanLui@mail.com",
      "sectorId": 2,
      "actividadLaboralId": 3,
      "tipoDocumento": "",
      "nacionalidadId": 4,
      "estadoCivilId": 1
   }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <personaUId>181</personaUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>770</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.Crear</Servicio>
            <Fecha>2017-12-14</Fecha>
            <Requerimiento/>
            <Hora>18:17:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.CrearResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "BANTOTAL",
        "Token": "324915377F955E77534D3E02",
        "Device": "AC"
    },
    "personaUId": "181",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTPersonas.Crear",
        "Fecha": "2019-11-19",
        "Hora": "13:05:22",
        "Requerimiento": "",
        "Numero": 6924,
        "Estado": "OK"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTPersonaFisica', fields: [{ Nombre: 'actividadLaboral', Tipo: 'String', Comentarios: 'Descripción de actividad laboral.' }, { Nombre: 'actividadLaboralId', Tipo: 'Int', Comentarios: 'Identificador de la actividad laboral.' }, { Nombre: 'clasificacionInterna', Tipo: 'String', Comentarios: 'Descripción de la clasificación interna.' }, { Nombre: 'clasificacionInternaId', Tipo: 'Short', Comentarios: 'Identificador de la clasificación interna.' }, { Nombre: 'correoElectronico', Tipo: 'String', Comentarios: 'Correo electrónico.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTDatoLista](#sbtdatolista)', Comentarios: 'Listado de datos adicionales.' }, { Nombre: 'domicilios', Tipo: '[sBTDomicilioCompleto](#sbtdomiciliocompleto)', Comentarios: 'Listado de los domicilios.' }, { Nombre: 'estadoCivil', Tipo: 'String', Comentarios: 'Descripción de estado civil.' }, { Nombre: 'estadoCivilId', Tipo: 'String', Comentarios: 'Identificador de estado civil.' }, { Nombre: 'fechaInicioActividad', Tipo: 'Date', Comentarios: 'Fecha de inicio de actividad.' }, { Nombre: 'fechaNacimiento', Tipo: 'Date', Comentarios: 'Fecha de nacimiento.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'nacionalidad', Tipo: 'String', Comentarios: 'Nombre del país de nacimiento.' }, { Nombre: 'nacionalidadId', Tipo: 'Short', Comentarios: 'Identificador del país de nacimiento.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Número de documento.' }, { Nombre: 'ocupacion', Tipo: 'String', Comentarios: 'Descripción de ocupación.' }, { Nombre: 'ocupacionId', Tipo: 'Int', Comentarios: 'Identificador de ocupación.' }, { Nombre: 'paisDocumento', Tipo: 'String', Comentarios: 'Nombre del país del documento.' }, { Nombre: 'paisDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del país del documento.' }, { Nombre: 'primerApellido', Tipo: 'String', Comentarios: 'Primer apellido.' }, { Nombre: 'primerNombre', Tipo: 'String', Comentarios: 'Primer nombre.' }, { Nombre: 'sector', Tipo: 'String', Comentarios: 'Sector.' }, { Nombre: 'sectorId', Tipo: 'Short', Comentarios: 'Identificador del sector.' }, { Nombre: 'segundoApellido', Tipo: 'String', Comentarios: 'Segundo apellido.' }, { Nombre: 'segundoNombre', Tipo: 'String', Comentarios: 'Segundo nombre.' }, { Nombre: 'sexo', Tipo: 'String', Comentarios: 'Sexo (M/F).' }, { Nombre: 'sueldo', Tipo: 'Double', Comentarios: 'Sueldo.' }, { Nombre: 'telefonoCelular', Tipo: 'String', Comentarios: 'Teléfono celular.' }, { Nombre: 'telefonoFijo', Tipo: 'String', Comentarios: 'Teléfono fijo.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }] }, { typeName: 'sBTDomicilioCompleto', fields: [{ Nombre: 'agrupador1', Tipo: 'String', Comentarios: 'Nombre agrupador 1.' }, { Nombre: 'agrupador1Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 1.' }, { Nombre: 'agrupador2', Tipo: 'String', Comentarios: 'Nombre agrupador 2.' }, { Nombre: 'agrupador2Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 2.' }, { Nombre: 'agrupador3', Tipo: 'String', Comentarios: 'Nombre agrupador 3.' }, { Nombre: 'agrupador3Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 3.' }, { Nombre: 'agrupador4', Tipo: 'String', Comentarios: 'Nombre agrupador 4.' }, { Nombre: 'agrupador4Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 4.' }, { Nombre: 'agrupador5', Tipo: 'String', Comentarios: 'Nombre agrupador 5.' }, { Nombre: 'agrupador5Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 5.' }, { Nombre: 'barrio', Tipo: 'String', Comentarios: 'Nombre del barrio.' }, { Nombre: 'barrioId', Tipo: 'int', Comentarios: 'Identificador del barrio.' }, { Nombre: 'codigoPostal', Tipo: 'String', Comentarios: 'Código postal.' }, { Nombre: 'colonia', Tipo: 'String', Comentarios: 'Colonia.' }, { Nombre: 'coloniaId', Tipo: 'int', Comentarios: 'Identificador de la colonia.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre del departamento.' }, { Nombre: 'departamentoId', Tipo: 'int', Comentarios: 'Identificador del departamento.' }, { Nombre: 'detalleUbicacion', Tipo: 'String', Comentarios: 'Detalle de la ubicación.' }, { Nombre: 'direccion', Tipo: 'String', Comentarios: 'Dirección.' }, { Nombre: 'localidad', Tipo: 'String', Comentarios: 'Nombre de la localidad.' }, { Nombre: 'localidadId', Tipo: 'int', Comentarios: 'Identificador de la localidad.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del país.' }, { Nombre: 'tipoDomicilio', Tipo: 'String', Comentarios: 'Descripción del tipo de domicilio.' }, { Nombre: 'tipoDomicilioId', Tipo: 'Byte', Comentarios: 'Identificador del tipo de domicilio.' }, { Nombre: 'tipoVivienda', Tipo: 'String', Comentarios: 'Descripción del tipo de vivienda.' }, { Nombre: 'tipoViviendaId', Tipo: 'String', Comentarios: 'Identificador del tipo de vivienda.' }, { Nombre: 'ubicacionDesde', Tipo: 'Date', Comentarios: 'Fecha desde que reside en ese domicilio.' }] }, { typeName: 'sBTDatoLista', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de información adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de información adicional.' }] }];
}
