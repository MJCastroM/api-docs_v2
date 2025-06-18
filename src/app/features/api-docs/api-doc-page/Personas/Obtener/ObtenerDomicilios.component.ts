import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDomicilios',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDomiciliosComponent1750258525365 {
  pageTitle        = 'Obtener Domicilios';
  description      = `Método para obtener los datos del domicilio de una persona.`;
  pubName          = 'Obtener Domicilios';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  outputData = [{ Nombre: 'sbtDomicilio', Tipo: '[sBTDomicilioCompleto](#sbtdomiciliocompleto)', Comentarios: 'Datos de domicilio.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la persona.' }, { Codigo: '30002', Descripcion: 'El identificador de la persona no es correcto.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerDomicilios>
         <bts:Btinreq>
 		   <bts:Btinreq>
             <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>FC</bts:Device>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>6C363FC1CD2072DE525376D3</bts:Token>
         </bts:Btinreq>
         <bts:PersonaUid>237</bts:PersonaUid>
      </bts:BTPersonas.ObtenerDomicilios>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDomicilios=\' \
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
   "PersonaUid": 237
    }` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerDomiciliosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6C363FC1CD2072DE525376D3</Token>
         </Btinreq>
         <sbtDomicilioCompleto>
            <SdtsBTDomicilioCompleto>
               <coloniaId>0</coloniaId>
               <agrupador1Id>0</agrupador1Id>
               <agrupador5/>
               <departamento>Montevideo</departamento>
               <agrupador4/>
               <agrupador3Id>0</agrupador3Id>
               <detalleUbicacion/>
               <barrio/>
               <agrupador3>Apto</agrupador3>
               <agrupador2>Nro Puerta</agrupador2>
               <agrupador1>Calle</agrupador1>
               <agrupador5Id>0</agrupador5Id>
               <tipoDomicilio>Residencia</tipoDomicilio>
               <ubicacionDesde/>
               <direccion>Avenida  No. Puerta  Piso Apto</direccion>
               <colonia/>
               <paisId>845</paisId>
               <tipoVivienda/>
               <pais>URUGUAY</pais>
               <agrupador2Id>0</agrupador2Id>
               <codigoPostal/>
               <tipoViviendaId/>
               <agrupador4Id>0</agrupador4Id>
               <barrioId>10</barrioId>
               <localidadId>10</localidadId>
               <localidad/>
               <tipoDomicilioId>1</tipoDomicilioId>
               <departamentoId>10</departamentoId>
            </SdtsBTDomicilioCompleto>
         </sbtDomicilioCompleto>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>34973</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerDomicilios</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-04-30</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:45:27</Hora>
         </Btoutreq>
      </BTPersonas.ObtenerDomiciliosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDomicilios=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 44ba1342-ce61-303e-bd55-62945147dfe0\' \
  -d \'{
	"Btinreq": {
      "Device": "FC",
      "Usuario": "INSTALADOR",
      "Requerimiento": 0,
      "Canal": "BTDIGITAL",
      "Token": "6C363FC1CD2072DE525376D3"
	},
   "sbtDomicilioCompleto": {
      "SdtsBTDomicilioCompleto": [
        {
            "coloniaId": 0,
            "agrupador1Id": 0,
            "agrupador5": "",
            "departamento": "Montevideo",
            "agrupador4": "",
            "agrupador3Id": 0,
            "detalleUbicacion": "",
            "barrio": "",
            "agrupador3": "Apto",
            "agrupador2": "Nro Puerta",
            "agrupador1": "Calle",
            "agrupador5Id": 0,
            "tipoDomicilio": "Residencia",
            "ubicacionDesde": "",
            "direccion": "Avenida  No. Puerta  Piso Apto",
            "colonia": "",
            "paisId": 845,
            "tipoVivienda": "",
            "pais": "URUGUAY",
            "agrupador2Id": 0,
            "codigoPostal": "",
            "tipoViviendaId": "",
            "agrupador4Id": 0,
            "barrioId": 10,
            "localidadId": 10,
            "localidad": "",
            "tipoDomicilioId": 1,
            "departamentoId": 10
         }
      ]
   },
      "Erroresnegocio": {
         "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": 34973,
      "Estado": "OK",
      "Servicio": "BTPersonas.ObtenerDomicilios",
      "Requerimiento": 0,
      "Fecha": "2025-04-30",
      "Canal": "BTDIGITAL",
      "Hora": "10:45:27"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDomicilioCompleto', fields: [{ Nombre: 'agrupador1', Tipo: 'String', Comentarios: 'Agrupador 1.' }, { Nombre: 'agrupador1Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 1.' }, { Nombre: 'agrupador2', Tipo: 'String', Comentarios: 'Agrupador 2.' }, { Nombre: 'agrupador2Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 2.' }, { Nombre: 'agrupador3', Tipo: 'String', Comentarios: 'Agrupador 3.' }, { Nombre: 'agrupador3Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 3.' }, { Nombre: 'agrupador4', Tipo: 'String', Comentarios: 'Agrupador 4.' }, { Nombre: 'agrupador4Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 4.' }, { Nombre: 'agrupador5', Tipo: 'String', Comentarios: 'Agrupador 5.' }, { Nombre: 'agrupador5Id', Tipo: 'Short', Comentarios: 'Identificador del agrupador 5.' }, { Nombre: 'barrio', Tipo: 'String', Comentarios: 'Nombre del barrio.' }, { Nombre: 'barrioId', Tipo: 'Int', Comentarios: 'Identificador del barrio.' }, { Nombre: 'codigoPostal', Tipo: 'String', Comentarios: 'Código postal.' }, { Nombre: 'colonia', Tipo: 'String', Comentarios: 'Nombre de la colonia.' }, { Nombre: 'coloniaId', Tipo: 'Int', Comentarios: 'Identificador de la colonia.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre del departamento.' }, { Nombre: 'departamentoId', Tipo: 'Int', Comentarios: 'Identificador del departamento.' }, { Nombre: 'detalleUbicacion', Tipo: 'String', Comentarios: 'Detalle de la ubicación.' }, { Nombre: 'direccion', Tipo: 'String', Comentarios: 'Dirección.' }, { Nombre: 'localidad', Tipo: 'String', Comentarios: 'Nombre de la localidad.' }, { Nombre: 'localidadId', Tipo: 'Int', Comentarios: 'Identificador de la localidad.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del país.' }, { Nombre: 'tipoDomicilio', Tipo: 'String', Comentarios: 'Tipo de domicilio.' }, { Nombre: 'tipoDomicilioId', Tipo: 'Short', Comentarios: 'Identificador del tipo de domicilio.' }, { Nombre: 'tipoVivienda', Tipo: 'String', Comentarios: 'Tipo de vivienda.' }, { Nombre: 'tipoViviendaId', Tipo: 'String', Comentarios: 'Identificador del tipo de vivienda.' }, { Nombre: 'ubicacionDesde', Tipo: 'Date', Comentarios: 'Fecha desde la que se utiliza esta ubicación.' }] }];
}
