import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTiposdeVivienda',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTiposdeViviendaComponent1750268695288 {
  pageTitle        = 'Obtener Tipos de Vivienda';
  description      = `Método para obtener un listado de los tipos de vivienda ingresados en Bantotal.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerTiposDeVivienda';
  programa   = 'RBTPG374';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtViviendas', Tipo: '[sBTTipoDeVivienda](#sbttipodevivienda)', Comentarios: 'Listado de viviendas.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerTiposDeVivienda>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1394857355CD285A89A23FBE</bts:Token>
            <bts:Device>AV</bts:Device>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerTiposDeVivienda>
   </soapenv:Body>
</soapenv:Envelope>`, json: `{
    "Btinreq": {
         "Canal": "BTDIGITAL",
         "Requerimiento": "1",
         "Usuario": "INSTALADOR",
         "Token": "963643292CD285A89A23FBEE",
         "Device": "AV"
      }
}` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerTiposDeViviendaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1394857355CD285A89A23FBE</Token>
            <Device>AV</Device>
         </Btinreq>
         <sdtViviendas>
            <tipoDeVivienda>
               <codigo>1</codigo>
               <descripcion>Propietario</descripcion>
            </tipoDeVivienda>
            <tipoDeVivienda>
               <codigo>2</codigo>
               <descripcion>Inquilino</descripcion>
            </tipoDeVivienda>
            <tipoDeVivienda>
               <codigo>3</codigo>
               <descripcion>BHU</descripcion>
            </tipoDeVivienda>
            <tipoDeVivienda>
               <codigo>4</codigo>
               <descripcion>Usufructo</descripcion>
            </tipoDeVivienda>
            <tipoDeVivienda>
               <codigo>5</codigo>
               <descripcion>Familiar</descripcion>
            </tipoDeVivienda>
            <tipoDeVivienda>
               <codigo>6</codigo>
               <descripcion>Otros</descripcion>
            </tipoDeVivienda>
         </sdtViviendas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTConfiguracionBantotal.ObtenerTiposDeVivienda</Servicio>
            <Fecha>2021-11-15</Fecha>
            <Hora>12:47:10</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8696</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerTiposDeViviendaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "1",
        "Usuario": "INSTALADOR",
        "Token": "963643292CD285A89A23FBEE",
        "Device": "AV"
    },
    "sdtViviendas": {
        "tipoDeVivienda": [
            {
                "codigo": "1",
                "descripcion": "Propietario"
            },
            {
                "codigo": "2",
                "descripcion": "Inquilino"
            },
            {
                "codigo": "3",
                "descripcion": "BHU"
            },
            {
                "codigo": "4",
                "descripcion": "Usufructo"
            },
            {
                "codigo": "5",
                "descripcion": "Familiar"
            },
            {
                "codigo": "6",
                "descripcion": "Otros"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTConfiguracionBantotal.ObtenerTiposDeVivienda",
        "Fecha": "2021-11-15",
        "Hora": "11:21:59",
        "Requerimiento": "1",
        "Numero": 8693,
        "Estado": "OK"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTTipoDeVivienda', fields: [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Código de vivienda.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de vivienda.' }] }];
}
