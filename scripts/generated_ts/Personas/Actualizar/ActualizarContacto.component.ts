import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ActualizarContacto',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarContactoComponent1751987198259 {
  pageTitle        = 'Actualizar Contacto';
  description      = `Método para actualizar un contacto jurídico de una persona.`;
  pubName    = 'BTPersonas.ActualizarContacto';
  programa   = 'RBTPG309';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'sdtContacto', Tipo: '[sBTContactoJuridico](#sbtcontactojuridico)', Comentarios: 'Datos del contacto jurídico.' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'Identificador de persona requerido.' }, { Código: '30002', Descripción: 'No existe persona con el identificador ingresada.' }, { Código: '40001', Descripción: 'Correlativo no puede ser vacío.' }, { Código: '40002', Descripción: 'Correlativo no existe.' }, { Código: '40003', Descripción: 'Vínculo Código no puede ser vacío.' }, { Código: '40004', Descripción: 'Vínculo Código Incorrecto.' }, { Código: '40005', Descripción: 'Nombre no puede ser vacío.' }, { Código: '40006', Descripción: 'Domicilio1 no puede ser vacío.' }, { Código: '40007', Descripción: 'Teléfono no puede ser vacío.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ActualizarContacto>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>ccbe8f2e60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>21</bts:personaUId>
         <bts:sdtContacto>
            <bts:vinculoId>3</bts:vinculoId>
            <bts:domicilio3></bts:domicilio3>
            <bts:domicilio2></bts:domicilio2>
            <bts:domicilio1>18 de Julio 1234</bts:domicilio1>
            <bts:correlativo>3</bts:correlativo>
            <bts:telefono>1234 5678</bts:telefono>
            <bts:nombre>Rodolfo Rias</bts:nombre>
            <bts:vinculo></bts:vinculo>
         </bts:sdtContacto>
      </bts:BTPersonas.ActualizarContacto>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarContacto\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId":"21",
	"sdtContacto": {
		"vinculoId": "3",
		"domicilio3": "",
		"domicilio2": "",
		"domicilio1": "18 de Julio 1234",
		"correlativo": "3",
		"telefono": "1234 5678",
		"nombre": "Rodolfo Rías",
		"vinculo": ""
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ActualizarContactoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ccbe8f2e60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8529</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ActualizarContacto</Servicio>
            <Fecha>2019-05-09</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>13:42:53</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ActualizarContactoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "Erroresnegocio": {
		"BTErrorNegocio": []
    },
    "Btoutreq": {
		"Numero": 8396,
		"Estado": "OK",
  	    "Servicio": "BTPersonas.ActualizarContacto",
		"Requerimiento": "1",
		"Fecha": "2019-05-07",
		"Hora": "15:54:44",
		"Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTContactoJuridico', fields: [{ Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Correlativo.' }, { Nombre: 'domicilio1', Tipo: 'String', Comentarios: 'Domicilio 1.' }, { Nombre: 'domicilio2', Tipo: 'String', Comentarios: 'Domicilio 2.' }, { Nombre: 'domicilio3', Tipo: 'String', Comentarios: 'Domicilio 3.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre completo de la referencia.' }, { Nombre: 'telefono', Tipo: 'String', Comentarios: 'Número de teléfono.' }, { Nombre: 'vinculo', Tipo: 'String', Comentarios: 'Vínculo.' }, { Nombre: 'vinculoId', Tipo: 'Short', Comentarios: 'Identificador de vínculo.' }] }];
}
