import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ActualizarDomicilio',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarDomicilioComponent1750945333949 {
  pageTitle        = 'Actualizar Domicilio';
  description      = `Método para actualizar los datos del domicilio de una persona.`;
  pubName    = 'BTPersonas.ActualizarDomicilio';
  programa   = 'RBTPG196';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'sbtDomicilio', Tipo: '[sBTDomicilioCompleto](#sbtdomiciliocompleto)', Comentarios: 'Datos de domicilio.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la persona.' }, { Codigo: '30002', Descripcion: 'El identificador de la persona no es correcto.' }, { Codigo: '30011', Descripcion: 'Código de domicilio no válido.' }, { Codigo: '31011', Descripcion: 'No existe el domicilio de la persona.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ActualizarDomicilio>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>FC</bts:Device>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>6C363FC1CD2072DE525376D3</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>237</bts:personaUId>
         <bts:sbtDomicilio>
            <bts:coloniaId>1</bts:coloniaId>
            <bts:agrupador1Id>1</bts:agrupador1Id>
            <bts:agrupador5></bts:agrupador5>
            <bts:departamento></bts:departamento>
            <bts:agrupador4></bts:agrupador4>
            <bts:agrupador3Id>1</bts:agrupador3Id>
            <bts:detalleUbicacion></bts:detalleUbicacion>
            <bts:barrio></bts:barrio>
            <bts:agrupador3>Apto</bts:agrupador3>
            <bts:agrupador2>Nro Puerta</bts:agrupador2>
            <bts:agrupador1>Calle</bts:agrupador1>
            <bts:agrupador5Id></bts:agrupador5Id>
            <bts:tipoDomicilio></bts:tipoDomicilio>
            <bts:ubicacionDesde></bts:ubicacionDesde>
            <bts:direccion></bts:direccion>
            <bts:colonia></bts:colonia>
            <bts:paisId>845</bts:paisId>
            <bts:tipoVivienda></bts:tipoVivienda>
            <bts:pais></bts:pais>
            <bts:agrupador2Id>1</bts:agrupador2Id>
            <bts:codigoPostal></bts:codigoPostal>
            <bts:tipoViviendaId>1</bts:tipoViviendaId>
            <bts:agrupador4Id></bts:agrupador4Id>
            <bts:barrioId>10</bts:barrioId>
            <bts:localidadId>10</bts:localidadId>
            <bts:localidad>?</bts:localidad>
            <bts:tipoDomicilioId>1</bts:tipoDomicilioId>
            <bts:departamentoId>10</bts:departamentoId>
         </bts:sbtDomicilio>
      </bts:BTPersonas.ActualizarDomicilio>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarDomicilio=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 44ba1342-ce61-303e-bd55-62945147dfe0\' \
  -d \'{
  "Btinreq": {
    "Device": "FC",
    "Usuario": "INSTALADOR",
    "Requerimiento": "0",
    "Canal": "BTDIGITAL",
    "Token": "6C363FC1CD2072DE525376D3"
  },
 "personaUId": 237,
 "sbtDomicilio": {
          "coloniaId": 1,
          "agrupador1Id": 1,
          "agrupador5": "",
          "departamento": "",
          "agrupador4": "",
          "agrupador3Id": 1,
          "detalleUbicacion": "",
          "barrio": "",
          "agrupador3": "Apto",
          "agrupador2": "Nro Puerta",
          "agrupador1": "Calle",
          "agrupador5Id": "",
          "tipoDomicilio": "",
          "ubicacionDesde": "",
          "direccion": "",
          "colonia": "",
          "paisId": 845,
          "tipoVivienda": "",
          "pais": "",
          "agrupador2Id": 1,
          "codigoPostal": "",
          "tipoViviendaId": 1,
          "agrupador4Id": "",
          "barrioId": 10,
          "localidadId": 10,
          "localidad": "?",
          "tipoDomicilioId": 1,
          "departamentoId": 10
         }   
      }` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ActualizarDomicilioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6C363FC1CD2072DE525376D3</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>34970</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ActualizarDomicilio</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-04-30</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:31:34</Hora>
         </Btoutreq>
      </BTPersonas.ActualizarDomicilioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
      "Device": "FC",
      "Usuario": "INSTALADOR",
      "Requerimiento": 0,
      "Canal": "BTDIGITAL",
      "Token": "6C363FC1CD2072DE525376D3"
	},
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": 34970,
      "Estado": "OK",
      "Servicio": "BTPersonas.ActualizarDomicilio",
      "Requerimiento": 0,
      "Fecha": "2025-04-30",
      "Canal": "BTDIGITAL",
      "Hora": "10:31:34"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDomicilioCompleto', fields: [{ Nombre: 'agrupador1', Tipo: 'String', Comentarios: 'Agrupador 1.' }, { Nombre: 'agrupador1Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 1.' }, { Nombre: 'agrupador2', Tipo: 'String', Comentarios: 'Agrupador 2.' }, { Nombre: 'agrupador2Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 2.' }, { Nombre: 'agrupador3', Tipo: 'String', Comentarios: 'Agrupador 3.' }, { Nombre: 'agrupador3Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 3.' }, { Nombre: 'agrupador4', Tipo: 'String', Comentarios: 'Agrupador 4.' }, { Nombre: 'agrupador4Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 4.' }, { Nombre: 'agrupador5', Tipo: 'String', Comentarios: 'Agrupador 5.' }, { Nombre: 'agrupador5Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 5.' }, { Nombre: 'barrio', Tipo: 'String', Comentarios: 'Nombre del barrio.' }, { Nombre: 'barrioId', Tipo: 'Int', Comentarios: 'Identificador del barrio.' }, { Nombre: 'codigoPostal', Tipo: 'String', Comentarios: 'Código postal.' }, { Nombre: 'colonia', Tipo: 'String', Comentarios: 'Nombre de la colonia.' }, { Nombre: 'coloniaId', Tipo: 'Int', Comentarios: 'Identificador de la colonia.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre del departamento.' }, { Nombre: 'departamentoId', Tipo: 'Int', Comentarios: 'Identificador del departamento.' }, { Nombre: 'detalleUbicacion', Tipo: 'String', Comentarios: 'Detalle de la ubicación.' }, { Nombre: 'direccion', Tipo: 'String', Comentarios: 'Dirección.' }, { Nombre: 'localidad', Tipo: 'String', Comentarios: 'Nombre de la localidad.' }, { Nombre: 'localidadId', Tipo: 'Int', Comentarios: 'Identificador de la localidad.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del país.' }, { Nombre: 'tipoDomicilio', Tipo: 'String', Comentarios: 'Tipo de domicilio.' }, { Nombre: 'tipoDomicilioId', Tipo: 'Short', Comentarios: 'Identificador del tipo de domicilio.' }, { Nombre: 'tipoVivienda', Tipo: 'String', Comentarios: 'Tipo de vivienda.' }, { Nombre: 'tipoViviendaId', Tipo: 'String', Comentarios: 'Identificador del tipo de vivienda.' }, { Nombre: 'ubicacionDesde', Tipo: 'Date', Comentarios: 'Fecha desde la que se utiliza esta ubicación.' }] }];
}
