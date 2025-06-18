import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarCorreoElectronico',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarCorreoElectronicoComponent1750268697085 {
  pageTitle        = 'Agregar Correo Electrónico';
  description      = `Método para agregar un correo electrónico a una persona.`;
  pubName    = 'BTPersonas.AgregarCorreoElectronico';
  programa   = 'RBTPG722';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de la persona.' }, { Nombre: 'sdtCorreoElectronico', Tipo: '[sBTCorreoElectronico](#sbtcorreoelectronico)', Comentarios: 'Datos del correo electrónico.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se ingresó el usuario del correo electrónico.' }, { Codigo: '30002', Descripcion: 'Caracteres inválidos en el dominio.' }, { Codigo: '30003', Descripcion: 'No se ingresó dominio.' }, { Codigo: '30004', Descripcion: 'Dominio inválido.' }, { Codigo: '30005', Descripcion: 'No se recibió el identificador único de persona.' }, { Codigo: '30006', Descripcion: 'El correo electrónico ya existe (Correlativo [Número del correlativo]).' }, { Codigo: '40003', Descripcion: 'No existe registro para el identificador único.' }, { Codigo: '60001', Descripcion: 'El registro ya existe.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.AgregarCorreoElectronico>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>41</bts:personaUId>
         <bts:sdtCorreoElectronico>           
            <bts:correoElectronico>AABB@GMAIL.COM</bts:correoElectronico>
            <bts:correlativo>1</bts:correlativo>
         </bts:sdtCorreoElectronico>
      </bts:BTPersonas.AgregarCorreoElectronico>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?AgregarCorreoElectronico\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "personaUId": 227,
    "sdtCorreoElectronico": {
        "correoElectronico": "AABB@GMAIL.COM",
        "correlativo": 1
    }
    }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.AgregarCorreoElectronicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9436BF7CB5B5BB404CC6E5A7</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20275</Numero>
            <Servicio>BTPersonas.AgregarCorreoElectronico</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>0</Requerimiento>
            <Fecha>2024-05-06</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>15:39:36</Hora>
         </Btoutreq>
      </BTPersonas.AgregarCorreoElectronicoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPersonas.AgregarCorreoElectronico",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTCorreoElectronico', fields: [{ Nombre: 'correlativo', Tipo: 'Int', Comentarios: 'Correlativo de correo electrónico.' }, { Nombre: 'correoElectronico', Tipo: 'String', Comentarios: 'Correo electrónico.' }] }];
}
