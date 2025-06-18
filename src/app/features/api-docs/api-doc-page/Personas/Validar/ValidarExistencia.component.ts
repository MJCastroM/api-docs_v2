import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ValidarExistencia',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ValidarExistenciaComponent1750268697730 {
  pageTitle        = 'Validar Existencia';
  description      = `Método para validar la existencia de una persona.`;
  pubName    = 'BTPersonas.ValidarExistencia';
  programa   = 'RBTPG489';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del país de origen del documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }, { Nombre: 'numeroDocumento', Tipo: 'String', Comentarios: 'Número de documento de la persona.' }];
  outputData = [{ Nombre: 'existe', Tipo: 'String', Comentarios: '¿Existe? (S/N).' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de país.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de tipo de documento.' }, { Codigo: '30003', Descripcion: 'No se recibió el número de documento.' }, { Codigo: '30004', Descripcion: 'La persona no existe.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ValidarExistencia>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>8e3a8ef2dd99865B3A2E76CF</bts:Token>
         </bts:Btinreq>
         <bts:paisId>604</bts:paisId>
         <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
         <bts:numeroDocumento>10587456</bts:numeroDocumento>
      </bts:BTPersonas.ValidarExistencia>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ValidarExistencia\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "paisId": 604,
    "tipoDocumentoId": 1,
    "numeroDocumento": 10587456
    }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ValidarExistenciaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>8e3a8ef2dd99865B3A2E76CF</Token>
         </Btinreq>
         <existe>S</existe>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>249703</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ValidarExistencia</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-10-10</Fecha>
            <Hora>17:11:02</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ValidarExistenciaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "existe": "S",
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPersonas.ValidarExistencia",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
