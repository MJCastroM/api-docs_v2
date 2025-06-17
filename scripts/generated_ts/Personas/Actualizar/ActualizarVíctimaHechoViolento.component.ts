import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ActualizarVctimaHechoViolento',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarVictimaHechoViolentoComponent {
  pageTitle = 'Actualizar Victima Hecho Violento';
  description = `Metodo para actualizar la informacion de una persona victima de un hecho violento.`;
  pubName    = 'BTPersonas.ActualizarVictimaHechoViolento';
  programa   = 'RBTPCO05';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'esVictima', Tipo: 'String', Comentarios: 'Es victima de hecho violento (S/N).' }, { Nombre: 'sdtVictimaHechoViolento', Tipo: '[sBTPCOVictimaHechoViolento](#sbtpcovictimahechoviolento)', Comentarios: 'Datos de persona victima de hecho violento (Se ingresa solo si el campo esVictima = S).' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio identificador de persona.' }, { Codigo: '40001', Descripcion: 'Debe ingresar entidad.' }, { Codigo: '40002', Descripcion: 'La entidad ingresada no es valida.' }, { Codigo: '40003', Descripcion: 'Debe ingresar fecha del hecho.' }, { Codigo: '40004', Descripcion: 'La fecha del hecho no puede ser posterior a la fecha de apertura.' }, { Codigo: '40005', Descripcion: 'Debe ingresar fecha de certificacion.' }, { Codigo: '40006', Descripcion: 'La fecha de certificacion no puede ser anterior a la fecha del hecho.' }, { Codigo: '40007', Descripcion: 'Debe ingresar fecha de vencimiento.' }, { Codigo: '40008', Descripcion: 'La fecha de vencimiento no puede ser anterior a la fecha del hecho.' }, { Codigo: '40009', Descripcion: 'La fecha de vencimiento no puede ser anterior a la fecha de certificacion.' }, { Codigo: '40011', Descripcion: 'El departamento ingresado no es valido.' }, { Codigo: '40013', Descripcion: 'El municipio ingresado no es valido.' }, { Codigo: '40019', Descripcion: 'El tipo de hecho ingresado no es valido.' }, { Codigo: '40020', Descripcion: 'No existe registro.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ActualizarVictimaHechoViolento>
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
            <bts:fechaCertificacion>2021-10-20</bts:fechaCertificacion>
            <bts:fechaVencimiento>2022-08-20</bts:fechaVencimiento>
            <bts:corregimiento>No tiene</bts:corregimiento>
            <bts:departamentoId>8</bts:departamentoId>
            <bts:fechaHecho>2021-06-20</bts:fechaHecho>
         </bts:sdtVictimaHechoViolento>
      </bts:BTPersonas.ActualizarVictimaHechoViolento>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarVictimaHechoViolento \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
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
	  "fechaCertificacion": "2021-10-20",
	  "fechaVencimiento": "2022-08-20",
	  "corregimiento": "No tiene",
	  "departamentoId": "8",
	  "fechaHecho": "2021-06-20"
	}
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ActualizarVictimaHechoViolentoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>042638a184CD285A89A23FBE</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2089</Numero>
            <Servicio>BTPersonas.ActualizarVictimaHechoViolento</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-03-10</Fecha>
            <Hora>08:29:11</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ActualizarVictimaHechoViolentoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
        "Btoutreq": {
          "Numero": "2089",
          "Servicio": "BTPersonas.ActualizarVictimaHechoViolento",
          "Estado": "OK",
          "Requerimiento": "1",
          "Fecha": "2020-03-10",
          "Hora": "08:29:11",
          "Canal": "BTDIGITAL"
        }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTPCOVictimaHechoViolento', fields: [{ Nombre: 'corregimiento', Tipo: 'String', Comentarios: 'Corregimiento.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre del departamento donde ocurrio el hecho.' }, { Nombre: 'departamentoId', Tipo: 'Short', Comentarios: 'Identificador de departamento.' }, { Nombre: 'entidad', Tipo: 'String', Comentarios: 'Nombre de entidad.' }, { Nombre: 'entidadId', Tipo: 'Long', Comentarios: 'Identificador de entidad.' }, { Nombre: 'fechaCertificacion', Tipo: 'Date', Comentarios: 'Fecha en la que recibio la certificacion.' }, { Nombre: 'fechaHecho', Tipo: 'Date', Comentarios: 'Fecha en la que ocurrio el hecho.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento de la certificacion.' }, { Nombre: 'inspeccionPolicia', Tipo: 'String', Comentarios: 'Inspeccion de policia.' }, { Nombre: 'municipio', Tipo: 'String', Comentarios: 'Nombre del municipio donde ocurrio el hecho.' }, { Nombre: 'municipioId', Tipo: 'Short', Comentarios: 'Identificador de municipio.' }, { Nombre: 'sitio', Tipo: 'String', Comentarios: 'Sitio.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de hecho.' }, { Nombre: 'tipoId', Tipo: 'Short', Comentarios: 'Identificador de tipo de hecho (1 = Leve / 2 = Medio / 3 = Grave) .' }, { Nombre: 'vereda', Tipo: 'String', Comentarios: 'Vereda.' }] }];
}
