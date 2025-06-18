import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerSucursales',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerSucursalesComponent1750258524946 {
  pageTitle        = 'Obtener Sucursales';
  description      = `Método para obtener un listado de las sucursales ingresadas en Bantotal.`;
  pubName          = 'Obtener Sucursales';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtSucursales', Tipo: '[sBTSucursal](#sbtsucursal)', Comentarios: 'Listado de sucursales.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerSucursales>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerSucursales>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerSucursales=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 44ba1342-ce61-303e-bd55-62945147dfe0\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	}
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerSucursalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSucursales>
            <sBTSucursal>
               <identificador>1</identificador>
               <descripcion>Sucursal Beta</descripcion>
               <direccion>10222141</direccion>
               <telefono>15554454</telefono>
               <latitud>0E-14</latitud>
               <longitud>0E-14</longitud>
            </sBTSucursal>
            <sBTSucursal>
               <identificador>1000</identificador>
               <descripcion>Casa Matriz</descripcion>
               <direccion>102141</direccion>
               <telefono>25182777 int.127</telefono>
               <latitud>0E-14</latitud>
               <longitud>0E-14</longitud>
            </sBTSucursal>
            <sBTSucursal>
               <identificador>25634</identificador>
               <descripcion>Sucursal 25634</descripcion>
               <direccion>10448</direccion>
               <telefono>4503614</telefono>
               <latitud>0E-14</latitud>
               <longitud>0E-14</longitud>
            </sBTSucursal>
         </sdtSucursales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>808</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerSucursales</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>18:09:39</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerSucursalesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtSucursales": {
      "sBTSucursal": [
         {
         "telefono": "15554454",
         "descripcion": "Sucursal Beta",
         "direccion": "10222141",
         "identificador": "1",
         "latitud": "0E-14",
         "longitud": "0E-14"
         },
         {
         "telefono": "25182777 int.127",
         "descripcion": "Casa Matriz",
         "direccion": "102141",
         "identificador": "1000",
         "latitud": "0E-14",
         "longitud": "0E-14"
         },
         {
         "telefono": "4503614",
         "descripcion": "Sucursal 25634",
         "direccion": "10448",
         "identificador": "25634",
         "latitud": "0E-14",
         "longitud": "0E-14"
         }
      ]
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "809",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerSucursales",
      "Fecha": "2017-12-17",
      "Requerimiento": "",
      "Hora": "18:09:55",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [];
}
