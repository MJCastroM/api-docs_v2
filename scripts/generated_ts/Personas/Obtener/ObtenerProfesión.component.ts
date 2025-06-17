import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerProfesin',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProfesionComponent {
  pageTitle = 'Obtener Profesion';
  description = `Metodo para obtener la profesion de una persona fisica.`;
  pubName    = 'BTPersonas.ObtenerProfesion';
  programa   = 'RBTPG289';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }];
  outputData = [{ Nombre: 'sdtProfesion', Tipo: '[sBTProfesion](#sbtprofesion)', Comentarios: 'Datos de la profesion.' }, { Nombre: 'fechaInicioProfesion', Tipo: 'Date', Comentarios: 'Fecha de inicio de la profesion.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerProfesion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>761768101CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>10003</bts:personaUId>
      </bts:BTPersonas.ObtenerProfesion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerProfesionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>761768101CD285A89A23FBEE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtProfesion>
            <identificador>8</identificador>
            <descripcion>Contador</descripcion>
         </sdtProfesion>
         <fechaInicioProfesion>2012-03-01</fechaInicioProfesion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ObtenerProfesion</Servicio>
            <Fecha>2021-02-05</Fecha>
            <Hora>13:37:57</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7984</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ObtenerProfesionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "INSTALADOR",
	  "Token": "761768101CD285A89A23FBEE",
	  "Device": "GP"
	},
	"sdtProfesion": {
	  "identificador": "8",
	  "descripcion": "Contador"
	},
	"fechaInicioProfesion": "2012-03-01",
	"Erroresnegocio": {
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTPersonas.ObtenerProfesion",
	  "Fecha": "2021-02-05",
	  "Hora": "13:37:57",
	  "Requerimiento": "1",
	  "Numero": "7984",
	  "Estado": "OK"
	}
}` }
  };

  structuredTypes = [{ typeName: 'sBTProfesion', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion de profesion.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador de profesion.' }] }];
}
