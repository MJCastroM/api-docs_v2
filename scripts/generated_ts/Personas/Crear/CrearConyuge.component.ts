import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CrearConyuge',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearConyugeComponent1751987198540 {
  pageTitle        = 'Crear Cónyuge';
  description      = `Método para crear una persona de forma reducida y asociarla en una relación de cónyuge con otra.`;
  pubName    = 'BTPersonas.CrearConyuge';
  programa   = 'RBTPG396';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'estadoCivilId', Tipo: 'String', Comentarios: 'Identificador del estado civil.' }, { Nombre: 'sdtPersona', Tipo: '[sBTDatosBasicosPersona](#sbtdatosbasicospersona)', Comentarios: 'Datos del cónyuge.' }];
  outputData = [{ Nombre: 'personaUIdConyuge', Tipo: 'Long', Comentarios: 'Identificador único del cónyuge.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de persona.' }, { Código: '30002', Descripción: 'No se recibió el código de estado civil.' }, { Código: '40001', Descripción: 'Debe ingresar País del Documento.' }, { Código: '40002', Descripción: 'El País del Documento no existe.' }, { Código: '40003', Descripción: 'Debe ingresar Tipo de Documento.' }, { Código: '40004', Descripción: 'El Tipo de Documento no existe.' }, { Código: '40005', Descripción: 'Debe ingresar Nro de Documento.' }, { Código: '40006', Descripción: 'Número de Documento incorrecto.' }, { Código: '40007', Descripción: 'Debe ingresar Primer Apellido.' }, { Código: '40008', Descripción: 'Debe ingresar Primer Nombre.' }, { Código: '40012', Descripción: 'Debe ingresar Sexo.' }, { Código: '40016', Descripción: 'Caracteres incorrectos en nombre/apellido.' }, { Código: '40051', Descripción: 'La persona ya existe.' }, { Código: '70001', Descripción: 'El estado civil ingresado no admite cónyuge.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.CrearConyuge>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>1</bts:personaUId>
         <bts:estadoCivilId>2</bts:estadoCivilId>
         <bts:sdtPersona>
            <bts:paisDocumentoId>845</bts:paisDocumentoId>
            <bts:paisDocumento></bts:paisDocumento>
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
            <bts:tipoDocumento></bts:tipoDocumento>
            <bts:nroDocumento>96900034</bts:nroDocumento>
            <bts:primerApellido>CASTRO</bts:primerApellido>
            <bts:segundoApellido></bts:segundoApellido>
            <bts:primerNombre>MARCOS</bts:primerNombre>
            <bts:segundoNombre></bts:segundoNombre>
            <bts:sexo>M</bts:sexo>
         </bts:sdtPersona>
      </bts:BTPersonas.CrearConyuge>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?CrearConyuge=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 0ccca369-0793-d62f-ebc0-3033cc750dad\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId": "1",
	"estadoCivilId": "2",
	"sdtPersona": {
	  "paisDocumentoId": "845",
	  "tipoDocumentoId": "1",
	  "nroDocumento": "96900034",
	  "primerApellido": "CASTRO",
	  "primerNombre": "MARCOS",
	  "sexo": "M"
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.CrearConyugeResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>879953578CD285A89A23FBEE</Token>
            <Device>MC</Device>
         </Btinreq>
         <personaUIdConyuge>10023</personaUIdConyuge>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.CrearConyuge</Servicio>
            <Fecha>2022-06-02</Fecha>
            <Hora>16:25:37</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.CrearConyugeResponse>
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
    "personaUIdConyuge": "10023",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "827",
        "Estado": "OK",
        "Servicio": "BTPersonas.CrearConyuge",
        "Fecha": "2017-12-17",
        "Requerimiento": "",
        "Hora": "18:47:21",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatosBasicosPersona', fields: [{ Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Número de documento.' }, { Nombre: 'paisDocumento', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del país.' }, { Nombre: 'primerApellido', Tipo: 'String', Comentarios: 'Primer apellido.' }, { Nombre: 'primerNombre', Tipo: 'String', Comentarios: 'Primer nombre.' }, { Nombre: 'segundoApellido', Tipo: 'String', Comentarios: 'Segundo apellido.' }, { Nombre: 'segundoNombre', Tipo: 'String', Comentarios: 'Segundo nombre.' }, { Nombre: 'sexo', Tipo: 'String', Comentarios: 'Sexo (M/F).' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }] }];
}
