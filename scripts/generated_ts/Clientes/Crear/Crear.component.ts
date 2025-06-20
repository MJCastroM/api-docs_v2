import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Crear',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearComponent1750272790877 {
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
  errors     = [{ Codigo: '30003', Descripcion: 'No se pudo obtener identificador único de la cuenta.' }, { Codigo: '40001', Descripcion: 'Debe ingresar País del Documento.' }, { Codigo: '40002', Descripcion: 'El País del Documento no existe.' }, { Codigo: '40003', Descripcion: 'Debe ingresar Tipo de Documento.' }, { Codigo: '40004', Descripcion: 'El Tipo de Documento no existe.' }, { Codigo: '40005', Descripcion: 'Debe ingresar Nro de Documento.' }, { Codigo: '40006', Descripcion: 'Número de Documento incorrecto.' }, { Codigo: '40007', Descripcion: 'Debe ingresar Primer Apellido.' }, { Codigo: '40008', Descripcion: 'Debe ingresar Primer Nombre.' }, { Codigo: '40009', Descripcion: 'Debe ingresar Fecha de Nacimiento.' }, { Codigo: '40010', Descripcion: 'La Fecha de Nacimiento no puede ser posterior a hoy.' }, { Codigo: '40011', Descripcion: 'La persona no es mayor de [Edad mínima] años.' }, { Codigo: '40012', Descripcion: 'Debe ingresar Sexo.' }, { Codigo: '40013', Descripcion: 'Debe ingresar Ocupación.' }, { Codigo: '40014', Descripcion: 'El código de Ocupación no existe.' }, { Codigo: '40015', Descripcion: 'La Fecha de Inicio de Actividad no puede ser posterior a hoy.' }, { Codigo: '40016', Descripcion: 'Caracteres incorrectos en nombre/apellido.' }, { Codigo: '40028', Descripcion: 'Debe ingresar al menos un Teléfono.' }, { Codigo: '40029', Descripcion: 'Email inválido.' }, { Codigo: '40030', Descripcion: 'La persona se encuentra en la lista de Inhabilitados: [Descripción lista].' }, { Codigo: '40035', Descripcion: 'Debe ingresar Segmento.' }, { Codigo: '40036', Descripcion: 'El código de Segmento no existe.' }, { Codigo: '40037', Descripcion: 'Debe ingresar clasificación interna.' }, { Codigo: '40038', Descripcion: 'El código de clasificación interna no existe.' }, { Codigo: '40039', Descripcion: 'Debe ingresar código de sector.' }, { Codigo: '40040', Descripcion: 'El código de Sector no existe.' }, { Codigo: '40041', Descripcion: 'Debe ingresar Actividad Laboral.' }, { Codigo: '40042', Descripcion: 'El código de Actividad Laboral no existe.' }, { Codigo: '40043', Descripcion: 'El País de la nacionalidad no existe.' }, { Codigo: '40044', Descripcion: 'El sexo ingresado no es válido.' }, { Codigo: '40049', Descripcion: 'Error al obtener el número de cuenta Bantotal.' }, { Codigo: '40051', Descripcion: 'La persona ya existe.' }, { Codigo: '40101', Descripcion: 'Código de domicilio no válido.' }, { Codigo: '40119', Descripcion: 'Debe ingresar País del Domicilio' }, { Codigo: '40120', Descripcion: 'El País del Domicilio no existe.' }, { Codigo: '40121', Descripcion: 'Debe ingresar Departamento.' }, { Codigo: '40122', Descripcion: 'El Departamento no existe.' }, { Codigo: '40123', Descripcion: 'Debe ingresar Localidad.' }, { Codigo: '40124', Descripcion: 'La Localidad no existe.' }, { Codigo: '40125', Descripcion: 'El barrio no existe.' }, { Codigo: '40126', Descripcion: 'Debe ingresar calle.' }, { Codigo: '40127', Descripcion: 'Debe ingresar número de puerta.' }, { Codigo: '40128', Descripcion: 'Debe ingresar código postal.' }, { Codigo: '40130', Descripcion: 'El domicilio ingresado ya existe.' }, { Codigo: '40131', Descripcion: 'El domicilio ingresado no existe.' }, { Codigo: '40132', Descripcion: 'El número de puerta no puede superar los 5 dígitos.' }];

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
