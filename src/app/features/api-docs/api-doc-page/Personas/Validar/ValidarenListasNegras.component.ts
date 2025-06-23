import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ValidarenListasNegras',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ValidarenListasNegrasComponent1750713394618 {
  pageTitle        = 'Validar en Listas Negras';
  description      = `Método para validar si una persona pertenece a alguna lista negra.`;
  pubName    = 'BTPersonas.ValidarEnListasNegras';
  programa   = 'RBTPG019';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'paisDocumentoId', Tipo: 'Short', Comentarios: 'Identificador de país.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador de tipo de documento.' }, { Nombre: 'numeroDocumento', Tipo: 'String', Comentarios: 'Número de documento.' }, { Nombre: 'primerNombre', Tipo: 'String', Comentarios: 'Primer nombre.' }, { Nombre: 'segundoNombre', Tipo: 'String', Comentarios: 'Segundo nombre.' }, { Nombre: 'primerApellido', Tipo: 'String', Comentarios: 'Primer apellido.' }, { Nombre: 'segundoApellido', Tipo: 'String', Comentarios: 'Segundo apellido.' }, { Nombre: 'nombreEmpresa', Tipo: 'String', Comentarios: 'Nombre de empresa.' }];
  outputData = [{ Nombre: 'existeEnLista', Tipo: 'String', Comentarios: '¿Existe en lista? (S/N).' }, { Nombre: 'sdtListasInhabilitados', Tipo: '[sBTListaInhabilitados](#sbtlistainhabilitados)', Comentarios: 'Listado de listas negras.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se ingresó código de país.' }, { Codigo: '30002', Descripcion: 'No se ingresó código de tipo de documento.' }, { Codigo: '30003', Descripcion: 'No se ingresó número de documento.' }, { Codigo: '30004', Descripcion: 'No se ingresó primer nombre.' }, { Codigo: '30005', Descripcion: 'No se ingresó primer apellido.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
  <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ValidarEnListasNegras>
         <bts:Btinreq>
            <bts:Device>10.12.10.159</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>8ab636f8624A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:paisDocumentoId>80</bts:paisDocumentoId>
         <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
         <bts:numeroDocumento>23330162449</bts:numeroDocumento>
         <bts:primerNombre>SERVICES</bts:primerNombre>
         <bts:segundoNombre>TEST</bts:segundoNombre>
         <bts:primerApellido>SUPER</bts:primerApellido>
         <bts:segundoApellido>VIELLE</bts:segundoApellido>
         <bts:nombreEmpresa></bts:nombreEmpresa>
      </bts:BTPersonas.ValidarEnListasNegras>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ValidarEnListasNegras=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: a12f013d-9875-6451-dd62-ad7bb0217b5c\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "paisDocumentoId": "80",
    "tipoDocumentoId": "1",
    "numeroDocumento": "23330162449",
    "primerNombre": "SERVICES",
    "segundoNombre": "TEST",
    "primerApellido": "SUPER",
    "segundoApellido": "VIELLE",
    "nombreEmpresa": ""
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ValidarEnListasNegrasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>8ab636f8624A8B5C60A82434</Token>
         </Btinreq>
         <ExisteEnLista>S</ExisteEnLista>
         <sdtListasInhabilitados>
            <sBTListaInhabilitados>
               <descripcion>La persona se encuentra en la lista de Inhabilitados: LAVADO DE DINERO.</descripcion>
               <codigo>0</codigo>
               <bloqueante>S</bloqueante>
            </sBTListaInhabilitados>
         </sdtListasInhabilitados>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>158</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ValidarEnListasNegras</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-10-29</Fecha>
            <Hora>13:56:35</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ValidarEnListasNegrasResponse>
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
    "ExisteEnLista": "S",
    "sdtListasInhabilitados": {
        "sBTListaInhabilitados": [ {
            "descripcion": "La persona se encuentra en la lista de Inhabilitados: LAVADO DE DINERO.",
            "codigo": 0,
            "bloqueante": "S"
        } ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 163,
        "Estado": "OK",
        "Servicio": "BTPersonas.ValidarEnListasNegras",
        "Requerimiento": "1",
        "Fecha": "2018-10-29",
        "Hora": "15:02:08",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTListaInhabilitados', fields: [{ Nombre: 'bloqueante', Tipo: 'String', Comentarios: '¿Es bloqueante? (S/N).' }, { Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Identificador de lista negra.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de lista negra.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
