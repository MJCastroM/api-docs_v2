import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerTiposDeDesembolso',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTiposDeDesembolsoComponent1750268696255 {
  pageTitle        = 'Obtener Tipos de Desembolso';
  description      = `Método para obtener los tipos de desembolso.`;
  pubName    = 'BTDescuentoDocumentos.ObtenerTiposDeDesembolso';
  programa   = 'RBTPG578';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtTiposDesembolso', Tipo: '[sBTTipoDesembolso](#sbttipodesembolso)', Comentarios: 'Listado de tipos de desembolso.' }];
  errors     = [{ Codigo: '40001', Descripcion: 'No hay tipos de desembolsos parametrizados.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDescuentoDocumentos.ObtenerTiposDeDesembolso>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>A7F3401198A610A75018BA88</bts:Token>
         </bts:Btinreq>
      </bts:BTDescuentoDocumentos.ObtenerTiposDeDesembolso>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDescuentoDocumentos?ObtenerTiposDeDesembolso=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "GZ",
          "Canal": "BTDIGITAL",
          "Usuario": "INSTALADOR",
          "Token": "BE98B0157319F32A4ACF3501"
    },
  }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDescuentoDocumentos.ObtenerTiposDeDesembolsoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>A7F3401198A610A75018BA88</Token>
         </Btinreq>
         <sdtTiposDesembolso>
            <sBTTipoDesembolso>
               <papelDesembolso>0</papelDesembolso>
               <simboloMonedaDesembolso>$</simboloMonedaDesembolso>
               <referencia/>
               <descripcion>Cuentas Corrientes:</descripcion>
               <rubro>0</rubro>
               <simboloPapelDesembolso>$</simboloPapelDesembolso>
               <monedaDesembolso>0</monedaDesembolso>
               <pideCuenta>4</pideCuenta>
               <modulo>20</modulo>
               <pideOperacion>S</pideOperacion>
               <tipo>0</tipo>
               <pideSucursal>N</pideSucursal>
               <pideCheque>N</pideCheque>
               <identificador>1</identificador>
            </sBTTipoDesembolso>
            <sBTTipoDesembolso>
               <papelDesembolso>0</papelDesembolso>
               <simboloMonedaDesembolso>$</simboloMonedaDesembolso>
               <referencia/>
               <descripcion>Cuenta Ahorros</descripcion>
               <rubro>0</rubro>
               <simboloPapelDesembolso>$</simboloPapelDesembolso>
               <monedaDesembolso>0</monedaDesembolso>
               <pideCuenta>4</pideCuenta>
               <modulo>21</modulo>
               <pideOperacion>S</pideOperacion>
               <tipo>0</tipo>
               <pideSucursal>N</pideSucursal>
               <pideCheque>N</pideCheque>
               <identificador>2</identificador>
            </sBTTipoDesembolso>
            <sBTTipoDesembolso>
               <papelDesembolso>0</papelDesembolso>
               <simboloMonedaDesembolso>$</simboloMonedaDesembolso>
               <referencia/>
               <descripcion>Efectivo</descripcion>
               <rubro>101002001</rubro>
               <simboloPapelDesembolso>$</simboloPapelDesembolso>
               <monedaDesembolso>0</monedaDesembolso>
               <pideCuenta>0</pideCuenta>
               <modulo>0</modulo>
               <pideOperacion>N</pideOperacion>
               <tipo>0</tipo>
               <pideSucursal>N</pideSucursal>
               <pideCheque>N</pideCheque>
               <identificador>3</identificador>
            </sBTTipoDesembolso>
            <sBTTipoDesembolso>
               <papelDesembolso>0</papelDesembolso>
               <simboloMonedaDesembolso>$</simboloMonedaDesembolso>
               <referencia/>
               <descripcion>Cuenta Corresponsal:</descripcion>
               <rubro>0</rubro>
               <simboloPapelDesembolso>$</simboloPapelDesembolso>
               <monedaDesembolso>0</monedaDesembolso>
               <pideCuenta>4</pideCuenta>
               <modulo>93</modulo>
               <pideOperacion>S</pideOperacion>
               <tipo>0</tipo>
               <pideSucursal>N</pideSucursal>
               <pideCheque>N</pideCheque>
               <identificador>4</identificador>
            </sBTTipoDesembolso>
         </sdtTiposDesembolso>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>34720</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDescuentoDocumentos.ObtenerTiposDeDesembolso</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-03-25</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>16:35:48</Hora>
         </Btoutreq>
      </BTDescuentoDocumentos.ObtenerTiposDeDesembolsoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
   "Btinreq": {
      "Canal": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Device": "GZ",
      "Requerimiento": "1",
      "Token": "BE98B0157319F32A4ACF3501"
   },
   "sdtTiposDesembolso": {
      "sBTTipoDesembolso": [
         {
            "papelDesembolso": 0,
            "simboloMonedaDesembolso": "$",
            "referencia": "",
            "descripcion": "Cuentas Corrientes:",
            "rubro": 0,
            "simboloPapelDesembolso": "$",
            "monedaDesembolso": 0,
            "pideCuenta": 4,
            "modulo": 20,
            "pideOperacion": "S",
            "tipo": 0,
            "pideSucursal": "N",
            "pideCheque": "N",
            "identificador": 1
         },
         {
            "papelDesembolso": 0,
            "simboloMonedaDesembolso": "$",
            "referencia": "",
            "descripcion": "Cuenta Ahorros",
            "rubro": 0,
            "simboloPapelDesembolso": "$",
            "monedaDesembolso": 0,
            "pideCuenta": 4,
            "modulo": 21,
            "pideOperacion": "S",
            "tipo": 0,
            "pideSucursal": "N",
            "pideCheque": "N",
            "identificador": 2
         },
         {
            "papelDesembolso": 0,
            "simboloMonedaDesembolso": "$",
            "referencia": "",
            "descripcion": "Efectivo",
            "rubro": 101002001,
            "simboloPapelDesembolso": "$",
            "monedaDesembolso": 0,
            "pideCuenta": 0,
            "modulo": 0,
            "pideOperacion": "N",
            "tipo": 0,
            "pideSucursal": "N",
            "pideCheque": "N",
            "identificador": 3
         },
         {
            "papelDesembolso": 0,
            "simboloMonedaDesembolso": "$",
            "referencia": "",
            "descripcion": "Cuenta Corresponsal:",
            "rubro": 0,
            "simboloPapelDesembolso": "$",
            "monedaDesembolso": 0,
            "pideCuenta": 4,
            "modulo": 93,
            "pideOperacion": "S",
            "tipo": 0,
            "pideSucursal": "N",
            "pideCheque": "N",
            "identificador": 4
         }
      ]
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Estado": "OK",
      "Fecha": "2024-11-07",
      "Hora": "13:16:44",
      "Numero": "25167",
      "Servicio": "BTDescuentoDocumentos.ObtenerTiposDeDesembolso",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTTipoDesembolso', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del tipo de desembolso.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador del tipo de desembolso.' }, { Nombre: 'modulo', Tipo: 'Int', Comentarios: 'Modulo.' }, { Nombre: 'monedaDesembolso', Tipo: 'Short', Comentarios: 'Moneda del tipo de desembolso.' }, { Nombre: 'papelDesembolso', Tipo: 'Int', Comentarios: 'Papel del tipo de desembolso.' }, { Nombre: 'pideCheque', Tipo: 'String', Comentarios: '¿Pide cheque? (S = Si / N = No).' }, { Nombre: 'pideCuenta', Tipo: 'String', Comentarios: '¿Pide cuenta? (S = Si / N = No).' }, { Nombre: 'pideOperacion', Tipo: 'String', Comentarios: '¿Pide operación? (S = Si / N = No).' }, { Nombre: 'pideSucursal', Tipo: 'String', Comentarios: '¿Pide sucursal? (S = Si / N = No).' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia.' }, { Nombre: 'rubro', Tipo: 'Long', Comentarios: 'Rubro.' }, { Nombre: 'simboloMonedaDesembolso', Tipo: 'String', Comentarios: 'Símbolo de la moneda del tipo de desembolso.' }, { Nombre: 'simboloPapelDesembolso', Tipo: 'String', Comentarios: 'Símbolo del papel del tipo de desembolso.' }, { Nombre: 'tipo', Tipo: 'Byte', Comentarios: 'Tipo.' }] }];
}
