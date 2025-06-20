import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDatosContacto',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDatosContactoComponent1750446218989 {
  pageTitle        = 'Obtener Datos de Contacto';
  description      = `Método para obtener los datos de contacto de una tarjeta de débito.`;
  pubName    = 'BTTarjetasDeDebito.ObtenerDatosContacto';
  programa   = 'RBTPG634';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta.' }];
  outputData = [{ Nombre: 'sdtDatosContacto', Tipo: '[sBTDatosContacto](#sbtdatoscontacto)', Comentarios: 'Datos del contacto de tarjeta.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de tarjeta de débito.' }, { Codigo: '30004', Descripcion: 'No se recuperaron los datos de contacto para el Identificador de tarjeta.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.ObtenerDatosContacto>
         <bts:Btinreq>
            <bts:Device>AS</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>A75742B0A52C1D7C89252EB0</bts:Token>
         </bts:Btinreq>
         <bts:tarjetaUId>2000002085</bts:tarjetaUId>
      </bts:BTTarjetasDeDebito.ObtenerDatosContacto>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ObtenerDatosContacto\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
   "Btinreq": {
      "Device": "AS",
      "Usuario": "INSTALADOR",
      "Requerimiento": "",
      "Canal": "BTDIGITAL",
      "Token": "jh2c02c95a4A8B5C60A82434"
   },
   "tarjetaUId": "2000002085",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.ObtenerDatosContactoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AS</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>E6B6A4E746ABD90893FEEF74</Token>
         </Btinreq>
         <sdtDatosContacto>
            <codigoDomicilio>1</codigoDomicilio>
            <correoElectronico>AJBantotal@HOTMAIL.COM.UY</correoElectronico>
            <numeroTelefono>422306581</numeroTelefono>
         </sdtDatosContacto>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
         <Numero>3103520</Numero>
            <Servicio>BTTarjetaDebito.ActualizarInformacionContacto</Servicio>
            <Estado>OK</Estado>
            <Fecha>2025-05-26</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>15:03:32</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerDatosContactoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
   "Btinreq": {
        "Device": "AS",
        "Usuario": "INSTALADOR",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "E6B6A4E746ABD90893FEEF74"
      },
      "sdtDatosContacto": {
            "codigoDomicilio": "1",
            "correoElectronico": "AJBantotal@HOTMAIL.COM.UY",
            "numeroTelefono": "422306581"
        },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "3113620",
        "Servicio": "BTTarjetaDebito.ObtenerDatosContacto",
        "Estado": "OK",
        "Fecha": "2025-05-26",
        "Requerimiento": "1",
        "Hora": "15:03:32",
        "Canal": "BTDIGITAL"
        }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatosContacto', fields: [{ Nombre: 'codigoDomicilio', Tipo: 'Byte', Comentarios: 'Identificador del tipo de domicilio.' }, { Nombre: 'correoElectronico', Tipo: 'String', Comentarios: 'Correo electrónico.' }, { Nombre: 'numeroTelefono', Tipo: 'String', Comentarios: 'Teléfono.' }] }];
}
