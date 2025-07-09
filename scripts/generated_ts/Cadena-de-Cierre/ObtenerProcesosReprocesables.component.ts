import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerProcesosReprocesables',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProcesosReprocesablesComponent1751987195577 {
  pageTitle        = 'Obtener Procesos Reprocesables';
  description      = `Método para obtener un listado de los procesos reprocesables de la cadena de cierre.`;
  pubName    = 'BTCadenaCierre.ObtenerProcesosReprocesables';
  programa   = 'RBTPG506';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtProcesosBatch', Tipo: '[sBTProcesoBatch](#sbtprocesobatch)', Comentarios: 'Colección de procesos de cadena de cierre.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCadenaCierre.ObtenerProcesosReprocesables>
         <bts:Btinreq>
            <bts:Device>mc</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6964034201CD285A89A23FBE</bts:Token>
         </bts:Btinreq>
      </bts:BTCadenaCierre.ObtenerProcesosReprocesables>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
    \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCadenaCierre?ObtenerProcesosReprocesables\' \
    -H \'cache-control: no-cache\' \
    -H \'content-type: application/json\' \
    -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
    -d \'{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "bc8b678bc44A8B5C60A82434"
    },
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCadenaCierre.ObtenerProcesosReprocesablesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>mc</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6964034201CD285A89A23FBE</Token>
         </Btinreq>
         <SdtsBTProcesoBatch>
            <SdtsBTProcesoBatch>
               <identificador>69</identificador>
               <nombre>PCLE252</nombre>
               <descripcion>Generación de C. Gerencia</descripcion>
               <periodicidad>DIARIA</periodicidad>
               <parametrosExtendidos>SI</parametrosExtendidos>
               <esReprocesable>Reprocesar siempre</esReprocesable>
            </SdtsBTProcesoBatch>
            ...
         </SdtsBTProcesoBatch>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>42133</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCadenaCierre.ObtenerProcesosReprocesables</Servicio>
            <Fecha>2022-06-01</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>13:14:51</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCadenaCierre.ObtenerProcesosReprocesablesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
    "Btinreq": {
      "Device": "mc",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6964034201CD285A89A23FBE"
    },
    "SdtsBTProcesoBatch": {
      "SdtsBTProcesoBatch": [
        {
          "identificador": "69",
          "nombre": "PCLE252",
          "descripcion": "Generación de C. Gerencia",
          "periodicidad": "DIARIA",
          "parametrosExtendidos": "SI",
          "esReprocesable": "Reprocesar siempre"
        },
        ...
      ]
    },
    "Erroresnegocio": {
    },
    "Btoutreq": {
      "Numero": "42133",
      "Estado": "OK",
      "Servicio": "BTCadenaCierre.ObtenerProcesosReprocesables",
      "Fecha": "2022-06-01",
      "Requerimiento": "1",
      "Hora": "13:14:51",
      "Canal": "BTDIGITAL"
    }
  },` }
  };

  structuredTypes = [{ typeName: 'sBTProcesoBatch', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'esReprocesable', Tipo: 'String', Comentarios: 'Descripción para reprocesamiento.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador de proceso batch.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del proceso.' }, { Nombre: 'parametrosExtendidos', Tipo: 'String', Comentarios: '¿Utiliza parámetros extendidos? (SI / NO)' }, { Nombre: 'periodicidad', Tipo: 'String', Comentarios: 'Periodicidad.' }] }];
}
