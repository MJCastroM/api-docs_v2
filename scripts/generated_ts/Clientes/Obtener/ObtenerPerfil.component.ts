import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerPerfil',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPerfilComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Perfil';
  description = `Metodo para obtener los datos de la persona titular de una cuenta cliente.`;
  pubName    = 'BTClientes.ObtenerPerfil';
  programa   = 'RBTPG002';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }];
  outputCols = ['sCTPersona'];
  outputData = [{ Nombre: 'sCTPersona', Tipo: '[sCTPersona](#sctpersona)', Comentarios: 'Datos de cliente.' }];
  errorCols  = ['30001', '30002'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recupero la cuenta para el Identificador.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerPerfil>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0306ebbd9c4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>181</bts:clienteUId>
      </bts:BTClientes.Obtener>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPerfil=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: dc197965-60bc-3f23-3367-5902a0392e1d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 181
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.118</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>7d434761a1F955E77534D3E0</Token>
         </Btinreq>
         <sCTPersona>
            <profesion/>
            <estadoCivil/>
            <domicilio>
               <localidad>LOS CHILCOS</localidad>
               <departamento>BUENOS AIRES</departamento>
               <direccion>? 123 ?</direccion>
               <pais>ARGENTINA, REPUBLICA</pais>
               <barrio/>
               <propietario/>
               <longitud>0E-9.000000000</longitud>
               <zona/>
               <codPostal/>
               <latitud>0E-9.000000000</latitud>
            </domicilio>
            <fechaNacimiento>1950-12-12</fechaNacimiento>
            <apellidos>Prueba Pruebass</apellidos>
            <personaUId>0</personaUId>
            <sexo>Masculino</sexo>
            <actividad>Familias y Personas Fisicas</actividad>
            <telefono>55555555</telefono>
            <ingresoMensual>0.00</ingresoMensual>
            <email/>
            <ocupacion/>
            <hijos>0</hijos>
            <documento>
               <tipoDocumento>LIBRE</tipoDocumento>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <nombreTipoDocumento>LIBRETA CIVICA</nombreTipoDocumento>
               <nroDocumento>5832073</nroDocumento>
               <pais>ARGENTINA, REPUBLICA</pais>
            </documento>
            <nacionalidad/>
            <celular/>
            <antiguedadLaboral>0</antiguedadLaboral>
            <nivelEducativo/>
            <nombres>Probando Pruebas</nombres>
            <otrosIngresos>0.00</otrosIngresos>
         </sCTPersona>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2181</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerPerfil</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-02-13</Fecha>
            <Hora>16:02:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerPerfilResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sCTPersona": {
        "profesion": "",
        "estadoCivil": "Soltero/a",
        "domicilio": {
            "localidad": "",
            "departamento": "BUENOS AIRES",
            "direccion": "18 de Julio 25",
            "pais": "ARGENTINA, REPUBLICA",
            "barrio": "",
            "propietario": "",
            "longitud": 0,
            "zona": "",
            "codPostal": "",
            "latitud": 0
        },
        "fechaNacimiento": "1901-01-01",
        "apellidos": "Bengoechea Morena",
        "personaUId": 0,
        "sexo": "",
        "actividad": "",
        "telefono": "",
        "ingresoMensual": 0,
        "email": "",
        "ocupacion": "",
        "hijos": 0,
        "documento": {
            "tipoDocumento": "D.N.I",
            "fechaVencimiento": "0000-00-00",
            "nombreTipoDocumento": "D.N.I.",
            "nroDocumento": "10001848",
            "pais": "ARGENTINA, REPUBLICA"
        },
        "nacionalidad": "",
        "celular": "",
        "antiguedadLaboral": 0,
        "nivelEducativo": "",
        "nombres": "Pablo Javier",
        "otrosIngresos": 0
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 2207,
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerPerfil",
        "Requerimiento": "",
        "Fecha": "2019-02-13",
        "Hora": "16:34:42",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'actividad', Tipo: 'String', Comentarios: 'Actividad laboral.' }, { Nombre: 'antiguedadLaboral', Tipo: 'Short', Comentarios: 'Antiguedad laboral.' }, { Nombre: 'apellidos', Tipo: 'String', Comentarios: 'Apellidos.' }, { Nombre: 'celular', Tipo: 'String', Comentarios: 'Celular.' }, { Nombre: 'documento', Tipo: '[sCTDocumento](#sctdocumento)', Comentarios: 'Datos del documento.' }, { Nombre: 'domicilio', Tipo: '[sCTDomicilio](#sctdomicilio)', Comentarios: 'Datos de domicilio.' }, { Nombre: 'email', Tipo: 'String', Comentarios: 'Corre electronico.' }, { Nombre: 'estadoCivil', Tipo: 'String', Comentarios: 'Estado civil.' }, { Nombre: 'fechaNacimiento', Tipo: 'Date', Comentarios: 'Fecha de nacimiento.' }, { Nombre: 'hijos', Tipo: 'Byte', Comentarios: 'Cantidad de hijos.' }, { Nombre: 'ingresoMensual', Tipo: 'Double', Comentarios: 'Ingreso mensual.' }, { Nombre: 'nacionalidad', Tipo: 'String', Comentarios: 'Nacionalidad.' }, { Nombre: 'nivelEducativo', Tipo: 'String', Comentarios: 'Nivel de educacion.' }, { Nombre: 'nombres', Tipo: 'String', Comentarios: 'Nombres.' }, { Nombre: 'ocupacion', Tipo: 'String', Comentarios: 'Ocupacion de la persona.' }, { Nombre: 'otrosIngresos', Tipo: 'Double', Comentarios: 'Otros ingresos.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'profesion', Tipo: 'String', Comentarios: 'Profesion.' }, { Nombre: 'sexo', Tipo: 'String', Comentarios: 'Sexo (M/F).' }, { Nombre: 'telefono', Tipo: 'String', Comentarios: 'Telefono.' }, { Nombre: '### sCTDomicilio', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sCTDomicilio son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'barrio', Tipo: 'String', Comentarios: 'Barrio.' }, { Nombre: 'codPostal', Tipo: 'String', Comentarios: 'Codigo postal.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Departamento del domicilio.' }, { Nombre: 'direccion', Tipo: 'String', Comentarios: 'Direccion.' }, { Nombre: 'latitud', Tipo: 'Double', Comentarios: 'Latitud del domicilio.' }, { Nombre: 'localidad', Tipo: 'String', Comentarios: 'Localidad del domicilio.' }, { Nombre: 'longitud', Tipo: 'Double', Comentarios: 'Longitud del domicilio.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Pais del domicilio.' }, { Nombre: 'propietario', Tipo: 'String', Comentarios: 'Propietario del domicilio.' }, { Nombre: 'zona', Tipo: 'String', Comentarios: 'Zona del domicilio.' }, { Nombre: '### sCTDocumento', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sCTDocumento son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento.' }, { Nombre: 'nombreTipoDocumento', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Numero de documento.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Pais del documento.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Tipo del documento.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
