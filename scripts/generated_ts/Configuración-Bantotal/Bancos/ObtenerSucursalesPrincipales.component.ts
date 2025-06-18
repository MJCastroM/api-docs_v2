import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerSucursalesPrincipales',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerSucursalesPrincipalesComponent1750268695078 {
  pageTitle        = 'Obtener Sucursales Principales';
  description      = `Método para obtener un listado de las sucursales principales.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerSucursalesPrincipales';
  programa   = 'RBTPG570';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtSucursalesPrincipales', Tipo: '[sBTSucursal](#sbtsucursal)', Comentarios: 'Listado de sucursales principales.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerSucursalesPrincipales>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>GP</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>6B4647555001A737F61D4995</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerSucursalesPrincipales>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerSucursalesPrincipales=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
      "Btinreq": {
      "Usuario": "INSTALADOR",
      "Device": "GP",
      "Requerimiento": "1",
      "Token": "6B4647555001A737F61D4995",
      "Canal": "BTDIGITAL"
    }
  }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerSucursalesPrincipalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6B4647555001A737F61D4995</Token>
         </Btinreq>
         <sdtSucursalesPrincipales>
            <sBTSucursal>
               <telefono>15554454</telefono>
               <descripcion>Casa Matriz</descripcion>
               <identificador>1</identificador>
               <direccion>1022, Pedro Cosio 2141</direccion>
               <latitud>-30.407849</latitud>
               <longitud>-56.474655</longitud>
            </sBTSucursal>
            <sBTSucursal>
               <telefono>25182777 int.127</telefono>
               <descripcion>Sucursal Ciudad de la Costa</descripcion>
               <identificador>1000</identificador>
               <direccion>10, Pedro Cosio 2141</direccion>
               <latitud>0.0</latitud>
               <longitud>0.0</longitud>
            </sBTSucursal>
         </sdtSucursalesPrincipales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35110</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerSucursalesPrincipales</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2025-05-05</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>15:58:51</Hora>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerSucursalesPrincipalesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
  "Btinreq": {
    "Device": "GP",
    "Usuario": "INSTALADOR",
    "Requerimiento": "1",
    "Canal": "BTDIGITAL",
    "Token": "6B4647555001A737F61D4995"
  },
  "sdtSucursalesPrincipales": [
    {
      "telefono": "15554454",
      "descripcion": "Casa Matriz",
      "identificador": 1,
      "direccion": "1022, Pedro Cosio 2141",
      "latitud": -30.407849,
      "longitud": -56.474655
    },
    {
      "telefono": "25182777 int.127",
      "descripcion": "Sucursal Ciudad de la Costa",
      "identificador": 1000,
      "direccion": "10, Pedro Cosio 2141",
      "latitud": 0.0,
      "longitud": 0.0
    }
  ],
  "Erroresnegocio": "",
  "Btoutreq": {
    "Numero": 35110,
    "Estado": "OK",
    "Servicio": "BTConfiguracionBantotal.ObtenerSucursalesPrincipales",
    "Requerimiento": "1",
    "Fecha": "2025-05-05",
    "Canal": "BTDIGITAL",
    "Hora": "15:58:51"
  }
}
\'` }
  };

  structuredTypes = [{ typeName: 'sBTSucursal', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de sucursal.' }, { Nombre: 'direccion', Tipo: 'String', Comentarios: 'Dirección de sucursal.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador de sucursal.' }, { Nombre: 'latitud', Tipo: 'Long', Comentarios: 'Latitud de sucursal.' }, { Nombre: 'longitud', Tipo: 'Long', Comentarios: 'Longitud de sucursal.' }, { Nombre: 'telefono', Tipo: 'String', Comentarios: 'Teléfono de sucursal.' }] }];
}
