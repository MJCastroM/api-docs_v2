import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-AgregarDatosPEP',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarDatosPEPComponent {
  pageTitle = 'Agregar Datos PEP';
  description = `Metodo para agregar los datos de una persona expuesta politicamente.`;
  pubName    = 'BTPersonas.AgregarDatosPEP';
  programa   = 'RBTPG146';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'esPEP', Tipo: 'String', Comentarios: 'Es persona politicamente expuesta? (S/N).' }, { Nombre: 'sdtDatosPEP', Tipo: '[sBTDatosPEP](#sbtdatospep)', Comentarios: 'Datos de la PEP.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de la persona.' }, { Codigo: '30002', Descripcion: 'No se recibio si la persona es politicamente expuesta.' }, { Codigo: '30003', Descripcion: 'No se pudo determinar si la persona es politicamente expuesta. (¿Es PEP? S / N).' }, { Codigo: '50001', Descripcion: 'Fecha Inicio cargo PEP es de ingreso obligatorio.' }, { Codigo: '50002', Descripcion: 'Entidad es de ingreso obligatorio.' }, { Codigo: '50003', Descripcion: 'Cargo y Relacion es de ingreso obligatorio.' }, { Codigo: '50004', Descripcion: 'Fecha Salida cargo PEP debe de ser mayor a Fecha Inicio cargo PEP.' }, { Codigo: '50005', Descripcion: 'Fecha Inicio cargo PEP debe de ser anterior a la Fecha de Hoy.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.AgregarDatosPEP>
		   <Btinreq>
			  <Canal>BTDIGITAL</Canal>
			  <Device>AV</Device>
			  <Requerimiento />
			  <Token>1254960580EF744F35AE6963</Token>
			  <Usuario>INSTALADOR</Usuario>
		   </Btinreq>
		   <personaUId>3</personaUId>  
		   <esPEP>S</esPEP>
		   <sdtDatosPEP>
            <entidad>Bantotal</entidad>
            <cargoRelacion>Político</cargoRelacion>
            <observacion>No corresponde</observacion>
            <fechaInicio>2012-12-12</fechaInicio>
            <fechaSalida>0000-00-00</fechaSalida>
            <correlativo>1</correlativo>
            <tipoPEPId>1</tipoPEPId>
            <tipoFuncionarioPublicoId>1</tipoFuncionarioPublicoId>
            <tipoPEP>Actividad Pública</tipoPEP>
            <tipoFuncionarioPublico>PEP Nacional</tipoFuncionarioPublico>
         </sdtDatosPEP>
	   </bts:BTPersonas.AgregarDatosPEP>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarDatosPEP' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
   "Btinreq": {
        "Device": "AV",
        "Usuario": "INSTALADOR",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "1254960580EF744F35AE6963"
    },
   "personaUId": "3",
   "esPEP": "S",
   "sdtDatosPEP": {
      "entidad": "abc125",
      "cargoRelacion": "politic00",
      "observacion": "no corresponde",
      "fechaInicio": "2014-05-20",
      "fechaSalida": "",
      "correlativo": 1,
      "tipoPEPId": 1, 
      "tipoFuncionarioPublicoId": 1, 
      "tipoPEP": "",
      "tipoFuncionarioPublico": "",
   }
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.AgregarDatosPEPResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
		  <Btinreq>
			  <Canal>BTDIGITAL</Canal>
			  <Device>AV</Device>
			  <Requerimiento />
			  <Token>1254960580EF744F35AE6963</Token>
			  <Usuario>INSTALADOR</Usuario>
		   </Btinreq>
		   <Erroresnegocio></Erroresnegocio>
		   <Btoutreq>
			  <Canal>BTDIGITAL</Canal>
			  <Estado>OK</Estado>
			  <Fecha>2020-07-30</Fecha>
			  <Hora>13:13:12</Hora>
			  <Numero>50199</Numero>
			  <Requerimiento />
			  <Servicio>BTPersonas.AgregarDatosPEP</Servicio>
		   </Btoutreq>
      </BTPersonas.AgregarDatosPEPResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{ 
    "Btinreq": { 
        "Device": "AV", 
        "Usuario": "INSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "1254960580EF744F35AE6963" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPersonas.AgregarDatosPEP", 
        "Fecha": "2020-07-30", 
        "Hora": "13:13:12", 
        "Requerimiento": "", 
        "Numero": 50199, 
        "Estado": "OK" 
    } 
}` }
  };

  structuredTypes = [{ typeName: 'sBTDatosPEP', fields: [{ Nombre: 'cargoRelacion', Tipo: 'String', Comentarios: 'Cargo que ocupa.' }, { Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Correlativo.' }, { Nombre: 'entidad', Tipo: 'String', Comentarios: 'Entidad.' }, { Nombre: 'fechaInicio', Tipo: 'Date', Comentarios: 'Fecha de inicio.' }, { Nombre: 'fechaSalida', Tipo: 'Date', Comentarios: 'Fecha de salida.' }, { Nombre: 'observacion', Tipo: 'String', Comentarios: 'Observacion.' }, { Nombre: 'tipoFuncionarioPublico', Tipo: 'String', Comentarios: 'Tipo de funcionario publico.' }, { Nombre: 'tipoFuncionarioPublicoId', Tipo: 'Short', Comentarios: 'Identificador de tipo de funcionario publico.' }, { Nombre: 'tipoPEP', Tipo: 'String', Comentarios: 'Tipo de PEP.' }, { Nombre: 'tipoPEPId', Tipo: 'Short', Comentarios: 'Identificador de tipo de PEP.' }] }];
}
