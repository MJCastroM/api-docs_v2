import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerContactos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerContactosComponent1751987198654 {
  pageTitle        = 'Obtener Contactos';
  description      = `Método para obtener los contactos de una persona.`;
  pubName    = 'BTPersonas.ObtenerContactos';
  programa   = 'RBTPG307';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  outputData = [{ Nombre: 'sdtContactos', Tipo: '[sBTContactoJuridico](#sbtcontactojuridico)', Comentarios: 'Listado de contactos.' }];
  errors     = [{ Código: '30001', Descripción: 'Identificador de persona requerido.' }, { Código: '30002', Descripción: 'No existe persona con el identificador ingresado.' }, { Código: '40001', Descripción: 'No existe Contactos para la persona en consulta.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerContactos>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>0d402C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>51</bts:personaUId>
      </bts:BTPersonas.ObtenerContactos>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerContactos\' \
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
	"personaUId":"51"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerContactosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d402C60A82434</Token>
         </Btinreq>
         <sdtContactos>
            <sBTContactoJuridico>
               <domicilio3/>
               <domicilio2/>
               <telefono>1234 5678</telefono>
               <domicilio1>18 de Julio 1234</domicilio1>
               <vinculoId>3</vinculoId>
               <correlativo>1</correlativo>
               <nombre>Rodolfo Rías</nombre>
               <vinculo>Director</vinculo>
            </sBTContactoJuridico>
         </sdtContactos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8492</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerContactos</Servicio>
            <Fecha>2019-05-08</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>18:40:36</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerContactosResponse>
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
	"sdtContactos": {
		"sBTContactoJuridico": {
			"vinculoId": "3",
			"domicilio3": "",
			"domicilio2": "",
			"domicilio1": "18 de Julio 1234",
			"tipoId": "P",
			"correlativo": "1",
			"tipo": "Personal",
			"telefono": "1234 5678",
			"nombre": "Rodolfo Rías",
			"vinculo": "Director"
		}
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerContactos",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTContactoJuridico', fields: [{ Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Correlativo.' }, { Nombre: 'domicilio1', Tipo: 'String', Comentarios: 'Domicilio 1.' }, { Nombre: 'domicilio2', Tipo: 'String', Comentarios: 'Domicilio 2.' }, { Nombre: 'domicilio3', Tipo: 'String', Comentarios: 'Domicilio 3.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre completo de la referencia.' }, { Nombre: 'telefono', Tipo: 'String', Comentarios: 'Número de teléfono.' }, { Nombre: 'vinculo', Tipo: 'String', Comentarios: 'Vínculo.' }, { Nombre: 'vinculoId', Tipo: 'Short', Comentarios: 'Identificador de vínculo.' }] }];
}
