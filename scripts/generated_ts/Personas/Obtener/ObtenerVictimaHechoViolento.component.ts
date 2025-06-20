import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerVictimaHechoViolento',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerVictimaHechoViolentoComponent1750446218798 {
  pageTitle        = 'Obtener Víctima Hecho Violento';
  description      = `Método para obtener la información de una persona víctima de un hecho violento.`;
  pubName    = 'BTPersonas.ObtenerVictimaHechoViolento';
  programa   = 'RBTPCO06';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona' }];
  outputData = [{ Nombre: 'esVictima', Tipo: 'String', Comentarios: 'Es víctima de hecho violento (S/N).' }, { Nombre: 'sdtVictimaHechoViolento', Tipo: '[sBTPCOVictimaHechoViolento](#sbtpcovictimahechoviolento)', Comentarios: 'Datos de víctima de hecho violento.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de persona.' }, { Codigo: '30013', Descripcion: 'No existe registro para el identificador único.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerVictimaHechoViolento>
         <bts:Btinreq>
            <bts:Token>d235ac28e6CD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>21</bts:personaUId>
      </bts:BTPersonas.ObtenerVictimaHechoViolento>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerVictimaHechoViolento \
-H \'cache-control: no-cache\' \
-H \'content-type: application/json\' \
-d \'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId": "21"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerVictimaHechoViolentoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>d235ac28e6CD285A89A23FBE</Token>
         </Btinreq>
         <esVictima>S</esVictima>
         <sdtVictimaHechoViolento>
            <entidadId>4</entidadId>
            <municipio>SAN JUAN DEL CESAR</municipio>
            <departamento>LA GUAJIRA</departamento>
            <inspeccionPolicia>Herida de arma</inspeccionPolicia>
            <sitio>Casa</sitio>
            <municipioId>650</municipioId>
            <tipoId>2</tipoId>
            <vereda>25 de Agosto</vereda>
            <fechaCertificacion>2020-01-07</fechaCertificacion>
            <tipo>Medio</tipo>
            <entidad>Personerías Municipales</entidad>
            <fechaVencimiento>2021-11-30</fechaVencimiento>
            <corregimiento>No tiene</corregimiento>
            <departamentoId>44</departamentoId>
            <fechaHecho>2019-05-03</fechaHecho>
         </sdtVictimaHechoViolento>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1966</Numero>
            <Servicio>BTPersonas.ObtenerVictimaHechoViolento</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-03-09</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>10:36:30</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerVictimaHechoViolentoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"esVictima": "S",
	"sdtVictimaHechoViolento": {
		"entidadId": "4",
		"municipio": "SAN JUAN DEL CESAR",
		"departamento": "LA GUAJIRA",
		"inspeccionPolicia": "Herida de arma",
		"sitio": "Casa",
		"municipioId": "650",
		"tipoId": "2",
		"vereda": "25 de Agosto",
		"fechaCertificacion": "2020-01-07",
		"tipo": "Medio",
		"entidad": "Personerías Municipales",
		"fechaVencimiento": "2021-11-30",
		"corregimiento": "No tiene",
		"departamentoId": "44",
		"fechaHecho": "2019-05-03"
	},
	"Btoutreq": {
	  "Numero": "1729",
	  "Estado": "OK",
	  "Servicio": "BTPersonas.ObtenerVictimaHechoViolento",
	  "Requerimiento": "1",
	  "Fecha": "2020-03-05",
	  "Canal": "BTDIGITAL",
	  "Hora": "13:10:51"
	}
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPCOVictimaHechoViolento', fields: [{ Nombre: 'corregimiento', Tipo: 'String', Comentarios: 'Corregimiento.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre del departamento donde ocurrió el hecho.' }, { Nombre: 'departamentoId', Tipo: 'Short', Comentarios: 'Identificador de departamento.' }, { Nombre: 'entidad', Tipo: 'String', Comentarios: 'Nombre de entidad.' }, { Nombre: 'entidadId', Tipo: 'Long', Comentarios: 'Identificador de entidad.' }, { Nombre: 'fechaCertificacion', Tipo: 'Date', Comentarios: 'Fecha en la que recibió la certificación.' }, { Nombre: 'fechaHecho', Tipo: 'Date', Comentarios: 'Fecha en la que ocurrió el hecho.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento de la certificación.' }, { Nombre: 'inspeccionPolicia', Tipo: 'String', Comentarios: 'Inspección de policía.' }, { Nombre: 'municipio', Tipo: 'String', Comentarios: 'Nombre del municipio donde ocurrió el hecho.' }, { Nombre: 'municipioId', Tipo: 'Short', Comentarios: 'Identificador de municipio.' }, { Nombre: 'sitio', Tipo: 'String', Comentarios: 'Sitio.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de hecho.' }, { Nombre: 'tipoId', Tipo: 'Short', Comentarios: 'Identificador de tipo de hecho (1 = Leve / 2 = Medio / 3 = Grave) .' }, { Nombre: 'vereda', Tipo: 'String', Comentarios: 'Vereda.' }] }];
}
