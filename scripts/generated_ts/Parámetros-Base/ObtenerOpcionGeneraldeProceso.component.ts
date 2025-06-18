import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerOpcionGeneraldeProceso',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerOpcionGeneraldeProcesoComponent1750258525270 {
  pageTitle        = 'Obtener Opción General de Proceso';
  description      = `Método para obtener los datos de una determinada opción general de procesos.`;
  pubName          = 'Obtener Opción General de Proceso';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'empresaId', Tipo: 'Short', Comentarios: 'Código de empresa [Hidden].' }, { Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código de la opción general de procesos.' }];
  outputData = [{ Nombre: 'sdtOpcionGeneralDeProceso', Tipo: '[sBTOpcionGeneral](#sbtopciongeneral)', Comentarios: 'Datos de la opción general de procesos.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de opción general.' }, { Codigo: '40001', Descripcion: 'No existe la opción general con el identificador ingresado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTParametrosBase.ObtenerOpcionGeneralDeProceso>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MI</bts:Usuario>
            <bts:Device>MC</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>200f0b8b654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:codigo>2850</bts:codigo>
      </bts:BTParametrosBase.ObtenerOpcionGeneralDeProceso>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerCorrelativoGuia \
-H \'cache-control: no-cache\' \
-H \'content-type: application/json\' \
-d \'{
    "Btinreq": {
      "Canal": "BTDIGITAL",
      "Usuario": "MI",
      "Device": "MC",
      "Requerimiento": "1",
      "Token": "200f0b8b654A8B5C60A82434"
    },
    "codigo": "2850"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTParametrosBase.ObtenerOpcionGeneralDeProcesoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>MC</Device>
            <Usuario>MI</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>200f0b8b654A8B5C60A82434</Token>
         </Btinreq>
         <sdtOpcionGeneralDeProceso>
            <descripcion>Debug\'s</descripcion>
            <identificador>2850</identificador>
            <valor>S</valor>
         </sdtOpcionGeneralDeProceso>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>109140</Numero>
            <Estado>OK</Estado>
            <Servicio>BTParametrosBase.ObtenerOpcionGeneralDeProceso</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-11-24</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>13:29:43</Hora>
         </Btoutreq>
      </BTParametrosBase.ObtenerOpcionGeneralDeProcesoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
    "Btinreq": {
      "Device": "MC",
      "Usuario": "MI",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "200f0b8b654A8B5C60A82434"
    },
    "sdtOpcionGeneralDeProceso": {
      "descripcion": "Debug\'s",
      "identificador": "2850",
      "valor": "S"
    },
    "Btoutreq": {
      "Numero": "109140",
      "Estado": "OK",
      "Servicio": "BTParametrosBase.ObtenerOpcionGeneralDeProceso",
      "Requerimiento": "1",
      "Fecha": "2020-11-24",
      "Canal": "BTDIGITAL",
      "Hora": "13:29:43"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTOpcionGeneral', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de la opción general de procesos.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Código de la opción general de procesos.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de la opción general de procesos (S/N).' }] }];
}
