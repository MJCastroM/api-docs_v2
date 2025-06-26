import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerCalendariodeSucursal',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCalendariodeSucursalComponent1750945332190 {
  pageTitle        = 'Obtener Calendario de Sucursal';
  description      = `Método para obtener el calendario de una sucursal.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerCalendarioDeSucursal';
  programa   = 'RBTPG283';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sucursalId', Tipo: 'Int', Comentarios: 'Identificador de sucursal.' }];
  outputData = [{ Nombre: 'descripcionSucursal', Tipo: 'String', Comentarios: 'Descripción de la sucursal.' }, { Nombre: 'sdtCalendario', Tipo: '[sBTCalendario](#sbtcalendario)', Comentarios: 'Calendario de la sucursal.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de sucursal.' }, { Codigo: '40001', Descripcion: 'No existe sucursal con el identificador ingresado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerCalendarioDeSucursal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MI</bts:Usuario>
            <bts:Device>MC</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>200f0b88B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sucursalId>1000</bts:sucursalId>
      </bts:BTConfiguracionBantotal.ObtenerCalendarioDeSucursal>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X GET \
   \'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerCalendarioDeSucursal\' \
   -H \'cache-control: no-cache\' \
   -H \'content-type: application/json\' \
   -d \'{
   "Btinreq": {
        "Device": "MC",
        "Usuario": "MI",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "200f0b88B5C60A82434"
    },
	"sucursalId":1000
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerCalendarioDeSucursalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>MC</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>200f0b88B5C60A82434</Token>
         </Btinreq>
         <descripcionSucursal>Sucursal Ciudad de la Costa</descripcionSucursal>
         <sdtCalendario>
            <descripcion>Calendario 1</descripcion>
            <identificador>1</identificador>
         </sdtCalendario>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>109092</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerCalendarioDeSucursal</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-11-24</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>09:20:38</Hora>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerCalendarioDeSucursalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
    "Btinreq": {
        "Device": "MC",
        "Usuario": "MI",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "200f0b88B5C60A82434"
    },
	"descripcionSucursal":"Sucursal Ciudad de la Costa",
    "sdtCalendario": {
        "descripcion":"Calendario 1",
        "identificador":1
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 109092,
        "Servicio": "BTConfiguracionBantotal.ObtenerCalendarioDeSucursal",
        "Estado": "OK",
        "Fecha": "2020-11-24",
        "Requerimiento": "0",
        "Hora": "14:13:38",
        "Canal": "BTDIGITAL"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTCalendario', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del calendario.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Código del calendario.' }] }];
}
