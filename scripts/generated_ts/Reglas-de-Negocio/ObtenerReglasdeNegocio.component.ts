import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerReglasdeNegocio',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerReglasdeNegocioComponent {
  pageTitle = 'Obtener Reglas de Negocio';
  description = `Metodo para obtener un listado de las reglas de negocio.`;
  pubName    = 'BTReglasNegocio.ObtenerReglasNegocio';
  programa   = 'RBTPGR53';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtReglasNegocio', Tipo: '[sBTReglaNegocio](#sbtreglanegocio)', Comentarios: 'Listado de reglas de negocio.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTReglasNegocio.ObtenerReglasNegocio>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>86b12d9cbaCD285A89A23FBE</bts:Token>
         </bts:Btinreq>
      </bts:BTReglasNegocio.ObtenerReglasNegocio>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTReglasNegocio?ObtenerReglasNegocio' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "bc8b678bc44A8B5C60A82434"
    },
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTReglasNegocio.ObtenerReglasNegocioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>86b12d9cbaCD285A89A23FBE</Token>
         </Btinreq>
         <sdtReglasNegocio>
            <SdtsBTReglaNegocio>
               <descripcion>Tipo de Cambio</descripcion>
               <reglaId>1</reglaId>
            </SdtsBTReglaNegocio>
            <SdtsBTReglaNegocio>
               <descripcion>Botón Datos Pep's</descripcion>
               <reglaId>4</reglaId>
            </SdtsBTReglaNegocio>
            ...
         </sdtReglasNegocio>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>43439</Numero>
            <Estado>OK</Estado>
            <Servicio>BTReglasNegocio.ObtenerReglasNegocio</Servicio>
            <Fecha>2022-06-02</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>07:56:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTReglasNegocio.ObtenerReglasNegocioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "c2cfd09eff4A8B5C60A82434"
    },
    "sdtReglasNegocio": {
         "SdtsBTReglaNegocio": [
         { 
            "descripcion": "Tipo de Cambio", 
            "reglaId": "1" 
         }, 
         { 
            "descripcion": "Botón Datos Pep's", 
            "reglaId": "4" 
         },
         ...
         ]
      },
      "Erroresnegocio": { 
      }, 
      "Btoutreq": { 
         "Numero": "43439", 
         "Estado": "OK", 
         "Servicio": "BTReglasNegocio.ObtenerReglasNegocio", 
         "Fecha": "2022-06-02", 
         "Requerimiento": "1", 
         "Hora": "07:56:48", 
         "Canal": "BTDIGITAL" 
    } 
}` }
  };

  structuredTypes = [{ typeName: 'sBTReglaNegocio', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion de regla de negocio.' }, { Nombre: 'reglaId', Tipo: 'Long', Comentarios: 'Codigo de regla de negocio.' }] }];
}
