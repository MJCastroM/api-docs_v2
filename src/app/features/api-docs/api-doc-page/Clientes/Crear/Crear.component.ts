import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Crear',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearComponent1751987196122 {
  pageTitle        = 'Crear';
  description      = `Método para crear una persona y su cuenta cliente.`;
  pubName    = 'BTClientes.Crear';
  programa   = 'RBTPG027';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPersona', Tipo: '[sBTPersona1](#sbtpersona1)', Comentarios: 'Datos de cliente.' }];
  outputData = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  errors     = [{ Código: '30003', Descripción: 'No se pudo obtener identificador único de la cuenta.' }, { Código: '40001', Descripción: 'Debe ingresar País del Documento.' }, { Código: '40002', Descripción: 'El País del Documento no existe.' }, { Código: '40003', Descripción: 'Debe ingresar Tipo de Documento.' }, { Código: '40004', Descripción: 'El Tipo de Documento no existe.' }, { Código: '40005', Descripción: 'Debe ingresar Nro de Documento.' }, { Código: '40006', Descripción: 'Número de Documento incorrecto.' }, { Código: '40007', Descripción: 'Debe ingresar Primer Apellido.' }, { Código: '40008', Descripción: 'Debe ingresar Primer Nombre.' }, { Código: '40009', Descripción: 'Debe ingresar Fecha de Nacimiento.' }, { Código: '40010', Descripción: 'La Fecha de Nacimiento no puede ser posterior a hoy.' }, { Código: '40011', Descripción: 'La persona no es mayor de [Edad mínima] años.' }, { Código: '40012', Descripción: 'Debe ingresar Sexo.' }, { Código: '40013', Descripción: 'Debe ingresar Ocupación.' }, { Código: '40014', Descripción: 'El código de Ocupación no existe.' }, { Código: '40015', Descripción: 'La Fecha de Inicio de Actividad no puede ser posterior a hoy.' }, { Código: '40016', Descripción: 'Caracteres incorrectos en nombre/apellido.' }, { Código: '40028', Descripción: 'Debe ingresar al menos un Teléfono.' }, { Código: '40029', Descripción: 'Email inválido.' }, { Código: '40030', Descripción: 'La persona se encuentra en la lista de Inhabilitados: [Descripción lista].' }, { Código: '40035', Descripción: 'Debe ingresar Segmento.' }, { Código: '40036', Descripción: 'El código de Segmento no existe.' }, { Código: '40037', Descripción: 'Debe ingresar clasificación interna.' }, { Código: '40038', Descripción: 'El código de clasificación interna no existe.' }, { Código: '40039', Descripción: 'Debe ingresar código de sector.' }, { Código: '40040', Descripción: 'El código de Sector no existe.' }, { Código: '40041', Descripción: 'Debe ingresar Actividad Laboral.' }, { Código: '40042', Descripción: 'El código de Actividad Laboral no existe.' }, { Código: '40043', Descripción: 'El País de la nacionalidad no existe.' }, { Código: '40044', Descripción: 'El sexo ingresado no es válido.' }, { Código: '40049', Descripción: 'Error al obtener el número de cuenta Bantotal.' }, { Código: '40051', Descripción: 'La persona ya existe.' }, { Código: '40101', Descripción: 'Código de domicilio no válido.' }, { Código: '40119', Descripción: 'Debe ingresar País del Domicilio' }, { Código: '40120', Descripción: 'El País del Domicilio no existe.' }, { Código: '40121', Descripción: 'Debe ingresar Departamento.' }, { Código: '40122', Descripción: 'El Departamento no existe.' }, { Código: '40123', Descripción: 'Debe ingresar Localidad.' }, { Código: '40124', Descripción: 'La Localidad no existe.' }, { Código: '40125', Descripción: 'El barrio no existe.' }, { Código: '40126', Descripción: 'Debe ingresar calle.' }, { Código: '40127', Descripción: 'Debe ingresar número de puerta.' }, { Código: '40128', Descripción: 'Debe ingresar código postal.' }, { Código: '40130', Descripción: 'El domicilio ingresado ya existe.' }, { Código: '40131', Descripción: 'El domicilio ingresado no existe.' }, { Código: '40132', Descripción: 'El número de puerta no puede superar los 5 dígitos.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.Crear>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0306ebbd9c4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtPersona>
            <bts:paisDocumentoId>845</bts:paisDocumentoId>
            <bts:paisDocumento></bts:paisDocumento>
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
            <bts:tipoDocumento></bts:tipoDocumento>
            <bts:nroDocumento>27573084</bts:nroDocumento>
            <bts:segundoNombre/>
            <bts:sexo>M</bts:sexo>
            <bts:estadoCivil>?</bts:estadoCivil>
            <bts:nacionalidad></bts:nacionalidad>
            <bts:ingresos>1500</bts:ingresos>
            <bts:ocupacionId>1</bts:ocupacionId>
            <bts:actividadLaboral></bts:actividadLaboral>
            <bts:apartamento>13B</bts:apartamento>
            <bts:localidad>10</bts:localidad>
            <bts:barrio/>
            <bts:sectorId>3</bts:sectorId>
            <bts:clasificacionInternaId>1</bts:clasificacionInternaId>
            <bts:telefonoCelular>091897718</bts:telefonoCelular>
            <bts:departamentoId>10</bts:departamentoId>
            <bts:nacionalidadId>845</bts:nacionalidadId>
            <bts:localidadId>10</bts:localidadId>
            <bts:clasificacionInterna></bts:clasificacionInterna>
            <bts:paisDomicilioId>845</bts:paisDomicilioId>
            <bts:sector></bts:sector>
            <bts:telefonoFijo>26004288</bts:telefonoFijo>
            <bts:codigoPostal/>
            <bts:primerNombre>ALEJANDRO</bts:primerNombre>
            <bts:fechaNacimiento>1976-02-26</bts:fechaNacimiento>
            <bts:actividadLaboralId>1112</bts:actividadLaboralId>
            <bts:primerApellido>VAZQUEZ</bts:primerApellido>
            <bts:estadoCivilId>1</bts:estadoCivilId>
            <bts:segundoApellido>SZENTANDRASI</bts:segundoApellido>
            <bts:paisDocumento></bts:paisDocumento>
            <bts:fechaInicioActividad/>
            <bts:ocupacion></bts:ocupacion>
            <bts:paisDomicilio></bts:paisDomicilio>
            <bts:departamento></bts:departamento>
            <bts:fechaVencimiento></bts:fechaVencimiento>
            <bts:correoElectronico>AV@GMAIL.COM</bts:correoElectronico>
            <bts:numeroPuerta>7216</bts:numeroPuerta>
            <bts:calle>BAZZURRO</bts:calle>
            <bts:barrioId></bts:barrioId>
            <bts:direccion></bts:direccion>
            <bts:referencia>EN LA ESQUINA</bts:referencia>
            <bts:piso>123</bts:piso>
         </bts:sdtPersona>
      </bts:BTClientes.Crear>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?Crear=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtPersona": {
      "paisDocumentoId": 845,
      "tipoDocumentoId": 1,
      "nroDocumento": "41875255",
      "ingresos": "1500.00",
      "nacionalidad": "URUGUAY",
      "sexo": "M",
      "clasificacionInternaId": 1,
      "segundoNombre": "",
      "telefonoCelular": "",
      "departamentoId": 10,
      "ocupacionId": "1",
      "actividadLaboralId": 1112,
      "nacionalidadId": 845,
      "localidadId": "10",
      "paisDomicilioId": 845,
      "telefonoFijo": "26004288",
      "codigoPostal": "",
      "primerNombre": "aALEJANDRO",
      "fechaNacimiento": "1976-02-26",
      "primerApellido": "vVAZQUEZ",
      "estadoCivilId": "1",
      "segundoApellido": "SZENTANDRASI",
      "paisDocumento": "URUGUAY",
      "fechaInicioActividad": "1980-01-01",
      "ocupacion": "Empleado",
      "paisDomicilio": "URUGUAY",
      "fechaVencimiento": "2025-01-01",
      "correoElectronico": "AV@GMAIL.COM",
      "numeroPuerta": "7216",
      "calle": "BAZZURRO",
      "apartamento": "13B",
      "barrioId": 0,
      "sectorId": 3,
      "direccion": "",
      "referencia": "EN LA ESQUINA",
      "piso": "123"
   }  
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>0306ebbd9c4A8B5C60A82434</Token>
         </Btinreq>
         <clienteUId>181</clienteUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>770</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.Crear</Servicio>
            <Fecha>2017-12-14</Fecha>
            <Requerimiento/>
            <Hora>18:17:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.CrearResponse>
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
    "clienteUId": "202",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "835",
        "Estado": "OK",
        "Servicio": "BTClientes.Crear",
        "Fecha": "2017-12-18",
        "Requerimiento": "",
        "Hora": "01:48:53",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPersona1', fields: [{ Nombre: 'actividadLaboralId', Tipo: 'Int', Comentarios: 'Identificador de actividad.' }, { Nombre: 'apartamento', Tipo: 'String', Comentarios: 'Apartamento.' }, { Nombre: 'barrioId', Tipo: 'Int', Comentarios: 'Identificador de localidad.' }, { Nombre: 'calle', Tipo: 'String', Comentarios: 'Calle.' }, { Nombre: 'clasificacionInternaId', Tipo: 'Short', Comentarios: 'Identificador de clasificación interna.' }, { Nombre: 'codigoPostal', Tipo: 'String', Comentarios: 'Código postal.' }, { Nombre: 'correoElectronico', Tipo: 'String', Comentarios: 'Correo electrónico.' }, { Nombre: 'departamentoId', Tipo: 'Int', Comentarios: 'Identificador de departamento.' }, { Nombre: 'ejecutivoId', Tipo: 'Int', Comentarios: 'Identificador del ejecutivo.' }, { Nombre: 'estadoCivil', Tipo: 'String', Comentarios: 'Descripción de estado civil.' }, { Nombre: 'estadoCivilId', Tipo: 'String', Comentarios: 'Identificador de estado civil.' }, { Nombre: 'fechaInicioActividad', Tipo: 'Date', Comentarios: 'Fecha inicio actividad.' }, { Nombre: 'fechaNacimiento', Tipo: 'Date', Comentarios: 'Fecha de nacimiento.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento de documento.' }, { Nombre: 'ingresos', Tipo: 'Double', Comentarios: 'Ingresos.' }, { Nombre: 'localidadId', Tipo: 'Int', Comentarios: 'Identificador de localidad.' }, { Nombre: 'nacionalidadId', Tipo: 'Short', Comentarios: 'Identificador de país.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Número de documento.' }, { Nombre: 'numeroPuerta', Tipo: 'String', Comentarios: 'Número de puerta.' }, { Nombre: 'ocupacionId', Tipo: 'Int', Comentarios: 'Identificador de ocupación.' }, { Nombre: 'paisDocumentoId', Tipo: 'Short', Comentarios: 'Identificador de país del documento.' }, { Nombre: 'paisDomicilioId', Tipo: 'Short', Comentarios: 'Identificador de país de domicilio.' }, { Nombre: 'piso', Tipo: 'String', Comentarios: 'Piso del domicilio.' }, { Nombre: 'primerApellido', Tipo: 'String', Comentarios: 'Primer apellido.' }, { Nombre: 'primerNombre', Tipo: 'String', Comentarios: 'Primer nombre.' }, { Nombre: 'sectorId', Tipo: 'Short', Comentarios: 'Identificador de sector.' }, { Nombre: 'segundoApellido', Tipo: 'String', Comentarios: 'Segundo apellido.' }, { Nombre: 'segundoNombre', Tipo: 'String', Comentarios: 'Segundo nombre.' }, { Nombre: 'sexo', Tipo: 'String', Comentarios: 'Sexo (M/F).' }, { Nombre: 'telefonoCelular', Tipo: 'String', Comentarios: 'Teléfono celular.' }, { Nombre: 'telefonoFijo', Tipo: 'String', Comentarios: 'Teléfono fijo.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador de tipo de documento.' }] }];
}
