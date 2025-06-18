import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarDomicilio',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarDomicilioComponent1750268697112 {
  pageTitle        = 'Agregar Domicilio';
  description      = `Método para agregar domicilio a una persona.`;
  pubName    = 'BTPersonas.AgregarDomicilio';
  programa   = 'RBTPG238';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'sbtDomicilio', Tipo: '[sBTDomicilioCompleto](#sbtdomiciliocompleto)', Comentarios: 'Datos de domicilio.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la persona.' }, { Codigo: '30002', Descripcion: 'El identificador de la persona no es correcto.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.AgregarDomicilio>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>FC</bts:Device>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>07FA51224D38D18C61F15934</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>238</bts:personaUId>
         <bts:domicilio>
		   <bts:coloniaId>1</bts:coloniaId>
             <bts:agrupador1Id>1</bts:agrupador1Id>
             <bts:agrupador5></bts:agrupador5>
             <bts:departamento></bts:departamento>
             <bts:agrupador3Id>1</bts:agrupador3Id>
             <bts:agrupador4></bts:agrupador4>
             <bts:barrio></bts:barrio>
             <bts:detalleUbicacion></bts:detalleUbicacion>
             <bts:agrupador3>Apto</bts:agrupador3>
             <bts:agrupador2>1</bts:agrupador2>
             <bts:agrupador1>Calle</bts:agrupador1>
             <bts:agrupador5Id></bts:agrupador5Id>
             <bts:ubicacionDesde></bts:ubicacionDesde>
             <bts:tipoDomicilio></bts:tipoDomicilio>
             <bts:direccion></bts:direccion>
             <bts:colonia></bts:colonia>
             <bts:paisId>845</bts:paisId>
             <bts:tipoVivienda></bts:tipoVivienda>
             <bts:pais></bts:pais>
             <bts:agrupador2Id>1</bts:agrupador2Id>
             <bts:tipoViviendaId>1</bts:tipoViviendaId>
             <bts:codigoPostal>12800</bts:codigoPostal>
             <bts:agrupador4Id></bts:agrupador4Id>
             <bts:barrioId>10</bts:barrioId>
             <bts:localidadId>10</bts:localidadId>
             <bts:localidad>1</bts:localidad>
             <bts:tipoDomicilioId>4</bts:tipoDomicilioId>
             <bts:departamentoId>10</bts:departamentoId>
         </bts:domicilio>
      </bts:BTPersonas.AgregarDomicilio>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarDomicilio=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 44ba1342-ce61-303e-bd55-62945147dfe0\' \
  -d \'{
  "Btinreq": {
    "Device": "FC",
    "Usuario": "INSTALADOR",
    "Requerimiento": "0",
    "Canal": "BTDIGITAL",
    "Token": "07FA51224D38D18C61F15934"
  },
 "personaUId": 238,
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
          "agrupador2": 1,
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
          "localidad": "",
          "tipoDomicilioId": 4,
          "departamentoId": 10
         }   
      }` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.AgregarDomicilioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>07FA51224D38D18C61F15934</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35076</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.AgregarDomicilio</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-05-02</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>09:35:16</Hora>
         </Btoutreq>
      </BTPersonas.AgregarDomicilioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
      "Device": "FC",
      "Usuario": "INSTALADOR",
      "Requerimiento": 0,
      "Canal": "BTDIGITAL",
      "Token": "07FA51224D38D18C61F15934"
	},
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": 35076,
      "Estado": "OK",
      "Servicio": "BTPersonas.AgregarDomicilio",
      "Requerimiento": 0,
      "Fecha": "2025-05-02",
      "Canal": "BTDIGITAL",
      "Hora": "09:35:16"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDomicilioCompleto', fields: [{ Nombre: 'agrupador1', Tipo: 'String', Comentarios: 'Agrupador 1.' }, { Nombre: 'agrupador1Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 1.' }, { Nombre: 'agrupador2', Tipo: 'String', Comentarios: 'Agrupador 2.' }, { Nombre: 'agrupador2Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 2.' }, { Nombre: 'agrupador3', Tipo: 'String', Comentarios: 'Agrupador 3.' }, { Nombre: 'agrupador3Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 3.' }, { Nombre: 'agrupador4', Tipo: 'String', Comentarios: 'Agrupador 4.' }, { Nombre: 'agrupador4Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 4.' }, { Nombre: 'agrupador5', Tipo: 'String', Comentarios: 'Agrupador 5.' }, { Nombre: 'agrupador5Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 5.' }, { Nombre: 'barrio', Tipo: 'String', Comentarios: 'Nombre del barrio.' }, { Nombre: 'barrioId', Tipo: 'Int', Comentarios: 'Identificador del barrio.' }, { Nombre: 'codigoPostal', Tipo: 'String', Comentarios: 'Código postal.' }, { Nombre: 'colonia', Tipo: 'String', Comentarios: 'Nombre de la colonia.' }, { Nombre: 'coloniaId', Tipo: 'Int', Comentarios: 'Identificador de la colonia.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre del departamento.' }, { Nombre: 'departamentoId', Tipo: 'Int', Comentarios: 'Identificador del departamento.' }, { Nombre: 'detalleUbicacion', Tipo: 'String', Comentarios: 'Detalle de la ubicación.' }, { Nombre: 'direccion', Tipo: 'String', Comentarios: 'Dirección.' }, { Nombre: 'localidad', Tipo: 'String', Comentarios: 'Nombre de la localidad.' }, { Nombre: 'localidadId', Tipo: 'Int', Comentarios: 'Identificador de la localidad.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del país.' }, { Nombre: 'tipoDomicilio', Tipo: 'String', Comentarios: 'Tipo de domicilio.' }, { Nombre: 'tipoDomicilioId', Tipo: 'Short', Comentarios: 'Identificador del tipo de domicilio.' }, { Nombre: 'tipoVivienda', Tipo: 'String', Comentarios: 'Tipo de vivienda.' }, { Nombre: 'tipoViviendaId', Tipo: 'String', Comentarios: 'Identificador del tipo de vivienda.' }, { Nombre: 'ubicacionDesde', Tipo: 'Date', Comentarios: 'Fecha desde la que se utiliza esta ubicación.' }] }];
}
