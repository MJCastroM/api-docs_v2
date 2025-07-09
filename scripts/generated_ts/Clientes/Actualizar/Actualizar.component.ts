import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Actualizar',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarComponent1751987195986 {
  pageTitle        = 'Actualizar';
  description      = `Método para actualizar los datos de un cliente.`;
  pubName    = 'BTClientes.Actualizar';
  programa   = 'RBTPG092';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'sdtPersona', Tipo: '[sBTPersonaFisica](#sbtpersonafisica)', Comentarios: 'Datos de cliente.' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador del cliente.' }, { Código: '30002', Descripción: 'No se recuperó la cuenta para el identificador de cliente: [Número de Identificador].' }, { Código: '40001', Descripción: 'Debe ingresar País del Documento.' }, { Código: '40002', Descripción: 'El País del Documento no existe.' }, { Código: '40003', Descripción: 'Debe ingresar Tipo de Documento.' }, { Código: '40004', Descripción: 'El Tipo de Documento no existe.' }, { Código: '40005', Descripción: 'Debe ingresar Nro de Documento.' }, { Código: '40006', Descripción: 'Número de Documento incorrecto.' }, { Código: '40007', Descripción: 'Debe ingresar Primer Apellido.' }, { Código: '40008', Descripción: 'Debe ingresar Primer Nombre.' }, { Código: '40009', Descripción: 'Debe ingresar Fecha de Nacimiento.' }, { Código: '40010', Descripción: 'La Fecha de Nacimiento no puede ser posterior a hoy.' }, { Código: '40011', Descripción: 'La persona no es mayor de [Edad mínima] años.' }, { Código: '40012', Descripción: 'Debe ingresar Sexo.' }, { Código: '40013', Descripción: 'Debe ingresar Ocupación.' }, { Código: '40014', Descripción: 'El código de Ocupación no existe.' }, { Código: '40015', Descripción: 'La Fecha de Inicio de Actividad no puede ser posterior a hoy.' }, { Código: '40016', Descripción: 'Caracteres incorrectos en nombre/apellido.' }, { Código: '40028', Descripción: 'Debe ingresar al menos un Teléfono.' }, { Código: '40029', Descripción: 'Email inválido.' }, { Código: '40030', Descripción: 'La persona se encuentra en la lista de Inhabilitados: [Descripción lista].' }, { Código: '40035', Descripción: 'Debe ingresar Segmento.' }, { Código: '40036', Descripción: 'El código de Segmento no existe.' }, { Código: '40037', Descripción: 'Debe ingresar clasificación interna.' }, { Código: '40038', Descripción: 'El código de clasificación interna no existe.' }, { Código: '40039', Descripción: 'Debe ingresar código de sector.' }, { Código: '40040', Descripción: 'El código de Sector no existe.' }, { Código: '40041', Descripción: 'Debe ingresar Actividad Laboral.' }, { Código: '40042', Descripción: 'El código de Actividad Laboral no existe.' }, { Código: '40043', Descripción: 'El País de la nacionalidad no existe.' }, { Código: '40044', Descripción: 'El sexo ingresado no es válido.' }, { Código: '40049', Descripción: 'Error al obtener el número de cuenta Bantotal.' }, { Código: '40051', Descripción: 'La persona ya existe.' }, { Código: '40101', Descripción: 'Código de domicilio no válido.' }, { Código: '40119', Descripción: 'Debe ingresar País del Domicilio' }, { Código: '40120', Descripción: 'El País del Domicilio no existe.' }, { Código: '40121', Descripción: 'Debe ingresar Departamento.' }, { Código: '40122', Descripción: 'El Departamento no existe.' }, { Código: '40123', Descripción: 'Debe ingresar Localidad.' }, { Código: '40124', Descripción: 'La Localidad no existe.' }, { Código: '40125', Descripción: 'El barrio no existe.' }, { Código: '40126', Descripción: 'Debe ingresar calle.' }, { Código: '40127', Descripción: 'Debe ingresar número de puerta.' }, { Código: '40128', Descripción: 'Debe ingresar código postal.' }, { Código: '40130', Descripción: 'El domicilio ingresado ya existe.' }, { Código: '40131', Descripción: 'El domicilio ingresado no existe.' }, { Código: '40132', Descripción: 'El número de puerta no puede superar los 5 dígitos.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.Actualizar>
         <bts:Btinreq>
            <bts:Device>AS</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>8301C31B4F2699A90D39F77E</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>301</bts:clienteUId>
         <bts:sdtPersona>
            <bts:nroDocumento>52487610</bts:nroDocumento>
            <bts:estadoCivil></bts:estadoCivil>
            <bts:fechaInicioActividad>2019-09-21</bts:fechaInicioActividad>
            <bts:segundoNombre>Mauricio</bts:segundoNombre>
            <bts:fechaVencimiento>2019-03-15</bts:fechaVencimiento>
            <bts:segundoApellido>HERNANDEZ</bts:segundoApellido>
            <bts:fechaNacimiento>1995-11-05</bts:fechaNacimiento>
            <bts:telefonoCelular>098712654</bts:telefonoCelular>
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
            <bts:actividadLaboral></bts:actividadLaboral>
            <bts:clasificacionInternaId>17</bts:clasificacionInternaId>
            <bts:sexo>M</bts:sexo>
            <bts:primerNombre>ANDRES</bts:primerNombre>
            <bts:clasificacionInterna></bts:clasificacionInterna>
            <bts:paisDocumentoId>845</bts:paisDocumentoId>
            <bts:telefonoFijo>42276832</bts:telefonoFijo>
            <bts:primerApellido>PEREIRA</bts:primerApellido>
            <bts:ocupacion></bts:ocupacion>
            <bts:sector></bts:sector>
            <bts:paisDocumento></bts:paisDocumento>
            <bts:ocupacionId>1</bts:ocupacionId>
            <bts:sueldo>15000</bts:sueldo>
            <bts:nacionalidad></bts:nacionalidad>
            <bts:comentarioCorreo>Correo Profesional</bts:comentarioCorreo>
            <bts:domicilios>
               <bts:SdtsBTDomicilioCompleto>
                  <bts:coloniaId>1</bts:coloniaId>
                  <bts:agrupador1Id>3</bts:agrupador1Id>
                  <bts:agrupador5></bts:agrupador5>
                  <bts:departamento></bts:departamento>
                  <bts:agrupador4>Cerrito</bts:agrupador4>
                  <bts:agrupador3Id>1</bts:agrupador3Id>
                  <bts:detalleUbicacion>ENFRENTE A CAFE LA FARMACIA</bts:detalleUbicacion>
                  <bts:barrio></bts:barrio>
                  <bts:agrupador3>06</bts:agrupador3>
                  <bts:agrupador2>1500</bts:agrupador2>
                  <bts:agrupador1>Ituzaingó</bts:agrupador1>
                  <bts:agrupador5Id></bts:agrupador5Id>
                  <bts:tipoDomicilio></bts:tipoDomicilio>
                  <bts:ubicacionDesde>2023-09-17</bts:ubicacionDesde>
                  <bts:direccion></bts:direccion>
                  <bts:colonia></bts:colonia>
                  <bts:paisId>845</bts:paisId>
                  <bts:tipoVivienda></bts:tipoVivienda>
                  <bts:pais></bts:pais>
                  <bts:agrupador2Id>1</bts:agrupador2Id>
                  <bts:codigoPostal>11800</bts:codigoPostal>
                  <bts:tipoViviendaId>5</bts:tipoViviendaId>
                  <bts:agrupador4Id>1</bts:agrupador4Id>
                  <bts:barrioId>380</bts:barrioId>
                  <bts:localidadId>10</bts:localidadId>
                  <bts:localidad></bts:localidad>
                  <bts:tipoDomicilioId>1</bts:tipoDomicilioId>
                  <bts:departamentoId>10</bts:departamentoId>
               </bts:SdtsBTDomicilioCompleto>
            </bts:domicilios>
            <bts:datosAdicionales>
               <bts:SdtsBTDatoLista>
                  <bts:valor></bts:valor>
                  <bts:clave></bts:clave>
               </bts:SdtsBTDatoLista>
            </bts:datosAdicionales>
            <bts:correoElectronico>Andres@hotmail.com</bts:correoElectronico>
            <bts:sectorId>1</bts:sectorId>
            <bts:actividadLaboralId>74220</bts:actividadLaboralId>
            <bts:tipoDocumento></bts:tipoDocumento>
            <bts:nacionalidadId>845</bts:nacionalidadId>
            <bts:estadoCivilId>1</bts:estadoCivilId>
         </bts:sdtPersona>
      </bts:BTClientes.Actualizar>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?Actualizar=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 531f48b0-2c02-1cfc-7v5c-a063d4hl5nb8\' \
  -d \'{
	"Btinreq": {
          "Device": "AS",
          "Usuario": "INSTALADOR",
          "Requerimiento": "",
          "Canal": "BTDIGITAL",
          "Token": "8301C31B4F2699A90D39F77E"
        },
        "clienteUId": 301,
        "sdtPersona": {
          "nroDocumento": 52487610,
          "estadoCivil": "",
          "fechaInicioActividad": "2019-09-21",
          "segundoNombre": "Mauricio",
          "fechaVencimiento": "2019-03-15",
          "segundoApellido": "HERNANDEZ",
          "fechaNacimiento": "1995-11-05",
          "telefonoCelular": 98712654,
          "tipoDocumentoId": 1,
          "actividadLaboral": "",
          "clasificacionInternaId": 17,
          "sexo": "M",
          "primerNombre": "ANDRES",
          "clasificacionInterna": "",
          "paisDocumentoId": 845,
          "telefonoFijo": 42276832,
          "primerApellido": "PEREIRA",
          "ocupacion": "",
          "sector": "",
          "paisDocumento": "",
          "ocupacionId": 1,
          "sueldo": 15000,
          "nacionalidad": "",
          "comentarioCorreo": "Correo Profesional",
          "domicilios": {
            "SdtsBTDomicilioCompleto": {
              "coloniaId": 1,
              "agrupador1Id": 3,
              "agrupador5": "",  
              "departamento": "",
              "agrupador4": "Cerrito",
              "agrupador3Id": 1,
              "detalleUbicacion": "ENFRENTE A CAFE LA FARMACIA",
              "barrio": "",
              "agrupador3": 6,
              "agrupador2": 1500,
              "agrupador1": "Ituzaingó",
              "agrupador5Id": "",
              "tipoDomicilio": "",
              "ubicacionDesde": "2023-09-17",
              "direccion": "",
              "colonia": "",
              "paisId": 845,
              "tipoVivienda": "",
              "pais": "",
              "agrupador2Id": 1,
              "codigoPostal": 11800,
              "tipoViviendaId": 5,
              "agrupador4Id": 1,
              "barrioId": 380,
              "localidadId": 10,
              "localidad": "",
              "tipoDomicilioId": 1,
              "departamentoId": 10
            }
          },
          "datosAdicionales": {
            "SdtsBTDatoLista": {
              "valor": "",
              "clave": ""
            }
          },
          "correoElectronico": "Andres@hotmail.com",
          "sectorId": 1,
          "actividadLaboralId": 74220,
          "tipoDocumento": "",
          "nacionalidadId": 845,
          "estadoCivilId": 1
        }
      }` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ActualizarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>8301C31B4F2699A90D39F77E</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35494</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.Actualizar</Servicio>
            <Requerimiento/>
            <Fecha>2025-05-20</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:27:47</Hora>
         </Btoutreq>
      </BTClientes.ActualizarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
	"Btinreq": {
          "Device": "AS",
          "Usuario": "INSTALADOR",
          "Requerimiento": "",
          "Canal": "BTDIGITAL",
          "Token": "8301C31B4F2699A90D39F77E"
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Numero": 35494,
          "Estado": "OK",
          "Servicio": "BTClientes.Actualizar",
          "Requerimiento": "",
          "Fecha": "2025-05-20",
          "Canal": "BTDIGITAL",
          "Hora": "11:27:47"
        }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPersonaFisica', fields: [{ Nombre: 'actividadLaboral', Tipo: 'String', Comentarios: 'Descripción de actividad laboral.' }, { Nombre: 'actividadLaboralId', Tipo: 'Int', Comentarios: 'Identificador de la actividad laboral.' }, { Nombre: 'clasificacionInterna', Tipo: 'String', Comentarios: 'Descripción de la clasificación interna.' }, { Nombre: 'clasificacionInternaId', Tipo: 'Short', Comentarios: 'Identificador de la clasificación interna.' }, { Nombre: 'correoElectronico', Tipo: 'String', Comentarios: 'Correo electrónico.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTDatoLista](#sbtdatolista)', Comentarios: 'Listado de datos adicionales.' }, { Nombre: 'domicilios', Tipo: '[sBTDomicilioCompleto](#sbtdomiciliocompleto)', Comentarios: 'Listado de los domicilios.' }, { Nombre: 'estadoCivil', Tipo: 'String', Comentarios: 'Descripción de estado civil.' }, { Nombre: 'estadoCivilId', Tipo: 'String', Comentarios: 'Identificador de estado civil.' }, { Nombre: 'fechaInicioActividad', Tipo: 'Date', Comentarios: 'Fecha de inicio de actividad.' }, { Nombre: 'fechaNacimiento', Tipo: 'Date', Comentarios: 'Fecha de nacimiento.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'nacionalidad', Tipo: 'String', Comentarios: 'Nombre del país de nacimiento.' }, { Nombre: 'nacionalidadId', Tipo: 'Short', Comentarios: 'Identificador del país de nacimiento.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Número de documento.' }, { Nombre: 'ocupacion', Tipo: 'String', Comentarios: 'Descripción de ocupación.' }, { Nombre: 'ocupacionId', Tipo: 'Int', Comentarios: 'Identificador de ocupación.' }, { Nombre: 'paisDocumento', Tipo: 'String', Comentarios: 'Nombre del país del documento.' }, { Nombre: 'paisDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del país del documento.' }, { Nombre: 'primerApellido', Tipo: 'String', Comentarios: 'Primer apellido.' }, { Nombre: 'primerNombre', Tipo: 'String', Comentarios: 'Primer nombre.' }, { Nombre: 'sector', Tipo: 'String', Comentarios: 'Sector.' }, { Nombre: 'sectorId', Tipo: 'Short', Comentarios: 'Identificador del sector.' }, { Nombre: 'segundoApellido', Tipo: 'String', Comentarios: 'Segundo apellido.' }, { Nombre: 'segundoNombre', Tipo: 'String', Comentarios: 'Segundo nombre.' }, { Nombre: 'sexo', Tipo: 'String', Comentarios: 'Sexo (M/F).' }, { Nombre: 'sueldo', Tipo: 'Double', Comentarios: 'Sueldo.' }, { Nombre: 'telefonoCelular', Tipo: 'String', Comentarios: 'Teléfono celular.' }, { Nombre: 'telefonoFijo', Tipo: 'String', Comentarios: 'Teléfono fijo.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }] }, { typeName: 'sBTDomicilioCompleto', fields: [{ Nombre: 'agrupador1', Tipo: 'String', Comentarios: 'Nombre agrupador 1.' }, { Nombre: 'agrupador1Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 1.' }, { Nombre: 'agrupador2', Tipo: 'String', Comentarios: 'Nombre agrupador 2.' }, { Nombre: 'agrupador2Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 2.' }, { Nombre: 'agrupador3', Tipo: 'String', Comentarios: 'Nombre agrupador 3.' }, { Nombre: 'agrupador3Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 3.' }, { Nombre: 'agrupador4', Tipo: 'String', Comentarios: 'Nombre agrupador 4.' }, { Nombre: 'agrupador4Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 4.' }, { Nombre: 'agrupador5', Tipo: 'String', Comentarios: 'Nombre agrupador 5.' }, { Nombre: 'agrupador5Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 5.' }, { Nombre: 'barrio', Tipo: 'String', Comentarios: 'Nombre del barrio.' }, { Nombre: 'barrioId', Tipo: 'int', Comentarios: 'Identificador del barrio.' }, { Nombre: 'codigoPostal', Tipo: 'String', Comentarios: 'Código postal.' }, { Nombre: 'colonia', Tipo: 'String', Comentarios: 'Colonia.' }, { Nombre: 'coloniaId', Tipo: 'int', Comentarios: 'Identificador de la colonia.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre del departamento.' }, { Nombre: 'departamentoId', Tipo: 'int', Comentarios: 'Identificador del departamento.' }, { Nombre: 'detalleUbicacion', Tipo: 'String', Comentarios: 'Detalle de la ubicación.' }, { Nombre: 'direccion', Tipo: 'String', Comentarios: 'Dirección.' }, { Nombre: 'localidad', Tipo: 'String', Comentarios: 'Nombre de la localidad.' }, { Nombre: 'localidadId', Tipo: 'int', Comentarios: 'Identificador de la localidad.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del país.' }, { Nombre: 'tipoDomicilio', Tipo: 'String', Comentarios: 'Descripción del tipo de domicilio.' }, { Nombre: 'tipoDomicilioId', Tipo: 'Byte', Comentarios: 'Identificador del tipo de domicilio.' }, { Nombre: 'tipoVivienda', Tipo: 'String', Comentarios: 'Descripción del tipo de vivienda.' }, { Nombre: 'tipoViviendaId', Tipo: 'String', Comentarios: 'Identificador del tipo de vivienda.' }, { Nombre: 'ubicacionDesde', Tipo: 'Date', Comentarios: 'Fecha desde que reside en ese domicilio.' }] }, { typeName: 'sBTDatoLista', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de información adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de información adicional.' }] }];
}
