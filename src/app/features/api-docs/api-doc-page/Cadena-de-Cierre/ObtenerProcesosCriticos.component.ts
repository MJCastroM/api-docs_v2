import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerProcesosCriticos',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProcesosCriticosComponent1750945331238 {
  pageTitle        = 'Obtener Procesos Críticos';
  description      = `Método para obtener un listado de los procesos críticos de la cadena de cierre.`;
  pubName    = 'BTCadenaCierre.ObtenerProcesosCriticos';
  programa   = 'RBTPG508';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtProcesosBatch', Tipo: '[sBTProcesoBatch](#sbtprocesobatch)', Comentarios: 'Listado de procesos críticos.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCadenaCierre.ObtenerProcesosCriticos>
         <bts:Btinreq>
            <bts:Device>mc</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6964034201CD285A89A23FBE</bts:Token>
         </bts:Btinreq>
      </bts:BTCadenaCierre.ObtenerProcesosCriticos>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
    \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCadenaCierre?ObtenerProcesosCriticos\' \
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
      <BTCadenaCierre.ObtenerProcesosCriticosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>mc</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6964034201CD285A89A23FBE</Token>
         </Btinreq>
         <sdtProcesosBatch>
            <SdtsBTProcesoBatch>
               <identificador>1500</identificador>
               <nombre>PPP92005</nombre>
               <descripcion>Cobrador de prestamos</descripcion>
               <periodicidad>DIARIA</periodicidad>
               <parametrosExtendidos>SI</parametrosExtendidos>
               <esReprocesable>No reprocesar nunca</esReprocesable>
            </SdtsBTProcesoBatch>
            <SdtsBTProcesoBatch>
               <identificador>1551</identificador>
               <nombre>PDETCADA</nombre>
               <descripcion>Detiene cadena error tipo A</descripcion>
               <periodicidad>DIARIA</periodicidad>
               <parametrosExtendidos>SI</parametrosExtendidos>
               <esReprocesable>Reprocesar siempre</esReprocesable>
            </SdtsBTProcesoBatch>
            <SdtsBTProcesoBatch>
               <identificador>80001</identificador>
               <nombre>PDETCADA</nombre>
               <descripcion>Detiene cadena con Tipo A</descripcion>
               <periodicidad>DIARIA</periodicidad>
               <parametrosExtendidos>SI</parametrosExtendidos>
               <esReprocesable>Reprocesar siempre</esReprocesable>
            </SdtsBTProcesoBatch>
            <SdtsBTProcesoBatch>
               <identificador>80300</identificador>
               <nombre>PEPECA</nombre>
               <descripcion>CAIDA</descripcion>
               <periodicidad>DIARIA</periodicidad>
               <parametrosExtendidos>SI</parametrosExtendidos>
               <esReprocesable>No reprocesar nunca</esReprocesable>
            </SdtsBTProcesoBatch>
         </sdtProcesosBatch>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>42139</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCadenaCierre.ObtenerProcesosCriticos</Servicio>
            <Fecha>2022-06-01</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>13:22:08</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCadenaCierre.ObtenerProcesosCriticosResponse>
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
    "sdtProcesosBatch": { 
      "SdtsBTProcesoBatch": [ 
        { 
          "identificador": "1500", 
          "nombre": "PPP92005", 
          "descripcion": "Cobrador de prestamos", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        }, 
        { 
          "identificador": "1551", 
          "nombre": "PDETCADA", 
          "descripcion": "Detiene cadena error tipo A", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "80001", 
          "nombre": "PDETCADA", 
          "descripcion": "Detiene cadena con Tipo A", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "Reprocesar siempre" 
        }, 
        { 
          "identificador": "80300", 
          "nombre": "PEPECA", 
          "descripcion": "CAIDA", 
          "periodicidad": "DIARIA", 
          "parametrosExtendidos": "SI", 
          "esReprocesable": "No reprocesar nunca" 
        } 
      ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Numero": "42139", 
      "Estado": "OK", 
      "Servicio": "BTCadenaCierre.ObtenerProcesosCriticos", 
      "Fecha": "2022-06-01", 
      "Requerimiento": "1", 
      "Hora": "13:22:08", 
      "Canal": "BTDIGITAL" 
    } 
  },` }
  };

  structuredTypes = [{ typeName: 'sBTProcesoBatch', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'esReprocesable', Tipo: 'String', Comentarios: 'Descripción para reprocesamiento.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador de proceso batch.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del proceso.' }, { Nombre: 'parametrosExtendidos', Tipo: 'String', Comentarios: '¿Utiliza parámetros extendidos? (SI / NO)' }, { Nombre: 'periodicidad', Tipo: 'String', Comentarios: 'Periodicidad.' }] }];
}
