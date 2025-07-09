import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerModelosPAE',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerModelosPAEComponent1751987197979 {
  pageTitle        = 'Obtener Modelos PAE';
  description      = `Método para obtener los modelos PAE.`;
  pubName    = 'BTPAE.ObtenerModelosPAE';
  programa   = 'RBTPGP51';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtModelosPAE', Tipo: '[sBTModeloPAE](#sbtmodelopae)', Comentarios: 'Listado de modelos PAE.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPAE.ObtenerModelosPAE>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>12106639094A8B5C60A82434</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
      </bts:BTPAE.ObtenerModelosPAE>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
    \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPAE?ObtenerModelosPAE\' \
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
      <BTPAE.ObtenerModelosPAEResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>12106639094A8B5C60A82434</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtModelosPAE>
            <SdtsBTModeloPAE>
               <modeloID>1</modeloID>
               <descripcion>Politicas - Solicitud</descripcion>
               <tipoModelo>P-Politicas</tipoModelo>
            </SdtsBTModeloPAE>
            ...
         </sdtModelosPAE>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPAE.ObtenerModelosPAE</Servicio>
            <Fecha>2022-06-01</Fecha>
            <Hora>15:38:59</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8881</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPAE.ObtenerModelosPAEResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "c2cfd09eff4A8B5C60A82434"
    },
    "sdtModelosPAE": {
        "SdtsBTModeloPAE": [
        { 
            "modeloID": "1", 
            "descripcion": "Politicas - Solicitud", 
            "tipoModelo": "P-Politicas" 
        }, 
        ...
        ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPAE.ObtenerModelosPAE", 
        "Fecha": "2022-06-01", 
        "Hora": "15:38:59", 
        "Requerimiento": "1", 
        "Numero": "8881", 
        "Estado": "OK" 
    } 
}` }
  };

  structuredTypes = [{ typeName: 'sBTModeloPAE', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de modelo.' }, { Nombre: 'modeloId', Tipo: 'Short', Comentarios: 'Código de modelo.' }, { Nombre: 'tipoModelo', Tipo: 'String', Comentarios: 'Tipo de modelo.' }] }];
}
