import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarVictimaHechoViolento',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarVictimaHechoViolentoComponent1751987198521 {
  pageTitle        = 'Agregar Víctima Hecho Violento';
  description      = `Método para agregar la información de una persona víctima de un hecho violento.`;
  pubName    = 'BTPersonas.AgregarVictimaHechoViolento';
  programa   = 'RBTPCO04';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'esVictima', Tipo: 'String', Comentarios: 'Es víctima de hecho violento (S/N).' }, { Nombre: 'sdtVictimaHechoViolento', Tipo: '[sBTPCOVictimaHechoViolento](#sbtpcovictimahechoviolento)', Comentarios: 'Datos de persona víctima de hecho violento (Se ingresa solo si el campo esVictima = S).' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió identificador de persona.' }, { Código: '40001', Descripción: 'Debe ingresar entidad.' }, { Código: '40002', Descripción: 'La entidad ingresada no es válida.' }, { Código: '40003', Descripción: 'Debe ingresar fecha del hecho.' }, { Código: '40004', Descripción: 'La fecha del hecho no puede ser posterior a la fecha de apertura.' }, { Código: '40005', Descripción: 'Debe ingresar fecha de certificación.' }, { Código: '40006', Descripción: 'La fecha de certificación no puede ser anterior a la fecha del hecho.' }, { Código: '40007', Descripción: 'Debe ingresar fecha de vencimiento.' }, { Código: '40008', Descripción: 'La fecha de vencimiento no puede ser anterior a la fecha del hecho.' }, { Código: '40009', Descripción: 'La fecha de vencimiento no puede ser anterior a la fecha de certificación.' }, { Código: '40010', Descripción: 'Debe ingresar departamento.' }, { Código: '40011', Descripción: 'El departamento ingresado no es válido.' }, { Código: '40012', Descripción: 'Debe ingresar municipio.' }, { Código: '40013', Descripción: 'El municipio ingresado no es válido.' }, { Código: '40014', Descripción: 'Debe ingresar corregimiento.' }, { Código: '40015', Descripción: 'Debe ingresar inspección de policía.' }, { Código: '40016', Descripción: 'Debe ingresar vereda.' }, { Código: '40017', Descripción: 'Debe ingresar sitio.' }, { Código: '40018', Descripción: 'Debe ingresar tipo de hecho.' }, { Código: '40019', Descripción: 'El tipo de hecho ingresado no es válido.' }, { Código: '40020', Descripción: 'Ya existe registro.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.AgregarVictimaHechoViolento>
         <bts:Btinreq>
            <bts:Token>042638a184CD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>42</bts:personaUId>
         <bts:esVictima>S</bts:esVictima>
         <bts:sdtVictimaHechoViolento>
            <bts:entidadId>3</bts:entidadId>
            <bts:municipio></bts:municipio>
            <bts:departamento></bts:departamento>
            <bts:inspeccionPolicia>Golpes</bts:inspeccionPolicia>
            <bts:sitio>Casa</bts:sitio>
            <bts:municipioId>421</bts:municipioId>
            <bts:tipoId>3</bts:tipoId>
            <bts:vereda>Av Italia</bts:vereda>
            <bts:entidad></bts:entidad>
            <bts:tipo></bts:tipo>
            <bts:fechaCertificacion>2020-08-20</bts:fechaCertificacion>
            <bts:fechaVencimiento>2021-08-20</bts:fechaVencimiento>
            <bts:corregimiento>No tiene</bts:corregimiento>
            <bts:departamentoId>8</bts:departamentoId>
            <bts:fechaHecho>2020-06-20</bts:fechaHecho>
         </bts:sdtVictimaHechoViolento>
      </bts:BTPersonas.AgregarVictimaHechoViolento>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarVictimaHechoViolento \
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
	"personaUId": "42",
	"esVictima": "S",
	"sdtVictimaHechoViolento": {
	  "entidadId": "3",
	  "inspeccionPolicia": "Golpes",
	  "sitio": "Casa",
	  "municipioId": "421",
	  "tipoId": "3",
	  "vereda": "Av Italia",
	  "fechaCertificacion": "2020-08-20",
	  "fechaVencimiento": "2021-08-20",
	  "corregimiento": "No tiene",
	  "departamentoId": "8",
	  "fechaHecho": "2020-06-20"
	},
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.AgregarVictimaHechoViolentoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>042638a184CD285A89A23FBE</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2073</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.AgregarVictimaHechoViolento</Servicio>
            <Fecha>2020-03-10</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>07:51:55</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.AgregarVictimaHechoViolentoResponse>
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
   "Btoutreq": {
      "Numero": "2073",
      "Estado": "OK",
      "Servicio": "BTPersonas.AgregarVictimaHechoViolento",
      "Fecha": "2020-03-10",
      "Requerimiento": "1",
      "Hora": "07:51:55",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPCOVictimaHechoViolento', fields: [{ Nombre: 'corregimiento', Tipo: 'String', Comentarios: 'Corregimiento.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre del departamento donde ocurrió el hecho.' }, { Nombre: 'departamentoId', Tipo: 'Short', Comentarios: 'Identificador de departamento.' }, { Nombre: 'entidad', Tipo: 'String', Comentarios: 'Nombre de entidad.' }, { Nombre: 'entidadId', Tipo: 'Long', Comentarios: 'Identificador de entidad.' }, { Nombre: 'fechaCertificacion', Tipo: 'Date', Comentarios: 'Fecha en la que recibió la certificación.' }, { Nombre: 'fechaHecho', Tipo: 'Date', Comentarios: 'Fecha en la que ocurrió el hecho.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento de la certificación.' }, { Nombre: 'inspeccionPolicia', Tipo: 'String', Comentarios: 'Inspección de policía.' }, { Nombre: 'municipio', Tipo: 'String', Comentarios: 'Nombre del municipio donde ocurrió el hecho.' }, { Nombre: 'municipioId', Tipo: 'Short', Comentarios: 'Identificador de municipio.' }, { Nombre: 'sitio', Tipo: 'String', Comentarios: 'Sitio.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de hecho.' }, { Nombre: 'tipoId', Tipo: 'Short', Comentarios: 'Identificador de tipo de hecho (1 = Leve / 2 = Medio / 3 = Grave) .' }, { Nombre: 'vereda', Tipo: 'String', Comentarios: 'Vereda.' }] }];
}
