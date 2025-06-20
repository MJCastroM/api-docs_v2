import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalledeProceso',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalledeProcesoComponent1750272790737 {
  pageTitle        = 'Obtener Detalle de Proceso';
  description      = `Método para obtener el detalle de un proceso de la cadena de cierre.`;
  pubName    = 'BTCadenaCierre.ObtenerDetalleProceso';
  programa   = 'RBTPG503';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador de proceso batch.' }];
  outputData = [{ Nombre: 'procesosBatch', Tipo: '[sBTProcesoBatch](#sbtprocesobatch)', Comentarios: 'Datos de proceso de cadena de cierre.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCadenaCierre.ObtenerDetalleProceso>
         <bts:Btinreq>
            <bts:Device>mc</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6964034201CD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:identificador>93</bts:identificador>
      </bts:BTCadenaCierre.ObtenerDetalleProceso>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
    \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCadenaCierre?ObtenerDetalleProceso\' \
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
    "identificador":"93",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCadenaCierre.ObtenerDetalleProcesoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>mc</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6964034201CD285A89A23FBE</Token>
         </Btinreq>
         <sBTProcesoBatch>
            <identificador>93</identificador>
            <nombre>POCDE002</nombre>
            <descripcion>Busca Indicios OCODEí</descripcion>
            <periodicidad>DIARIA</periodicidad>
            <parametrosExtendidos>SI</parametrosExtendidos>
            <esReprocesable>No reprocesar nunca</esReprocesable>
         </sBTProcesoBatch>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>42156</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCadenaCierre.ObtenerDetalleProceso</Servicio>
            <Fecha>2022-06-01</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>13:44:21</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCadenaCierre.ObtenerDetalleProcesoResponse>
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
    "sBTProcesoBatch": { 
      "identificador": "93", 
      "nombre": "POCDE002", 
      "descripcion": "Busca Indicios OCODEí", 
      "periodicidad": "DIARIA", 
      "parametrosExtendidos": "SI", 
      "esReprocesable": "No reprocesar nunca" 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Numero": "42156", 
      "Estado": "OK", 
      "Servicio": "BTCadenaCierre.ObtenerDetalleProceso", 
      "Fecha": "2022-06-01", 
      "Requerimiento": "1", 
      "Hora": "13:44:21", 
      "Canal": "BTDIGITAL" 
    } 
  },` }
  };

  structuredTypes = [{ typeName: 'sBTProcesoBatch', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'esReprocesable', Tipo: 'String', Comentarios: 'Descripción para reprocesamiento.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador de proceso batch.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del proceso.' }, { Nombre: 'parametrosExtendidos', Tipo: 'String', Comentarios: '¿Utiliza parámetros extendidos? (SI / NO)' }, { Nombre: 'periodicidad', Tipo: 'String', Comentarios: 'Periodicidad.' }] }];
}
