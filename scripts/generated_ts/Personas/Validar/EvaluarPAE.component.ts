import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-EvaluarPAE',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class EvaluarPAEComponent {
  // Cabecera e info-card
  pageTitle = 'Evaluar PAE';
  description = `Metodo para retornar el resultado de evaluar el PAE de una persona.`;
  pubName    = 'BTPersonas.EvaluarPAE';
  programa   = 'RBTPGP50';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['modeloId', 'personaUId', 'productoUId', 'sdtValores'];
  inputData  = [{ Nombre: 'modeloId', Tipo: 'Int', Comentarios: 'Identificador del modelo.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico del producto.' }, { Nombre: 'sdtValores', Tipo: '[sBTPAEValorItem](#sbtpaevaloritem)', Comentarios: 'Coleccion de valores PAE.' }];
  outputCols = ['valor', 'mensaje', 'sdtPoliticas', 'numeroEjecucion'];
  outputData = [{ Nombre: 'valor', Tipo: 'Double', Comentarios: 'Valor.' }, { Nombre: 'mensaje', Tipo: 'String', Comentarios: 'Mensaje.' }, { Nombre: 'sdtPoliticas', Tipo: '[sBTPoliticaIncumplida](#sbtpoliticaincumplida)', Comentarios: 'Coleccion de politicas incumplidas.' }, { Nombre: 'numeroEjecucion', Tipo: 'Long', Comentarios: 'Numero de la ejecucion.' }];
  errorCols  = ['1011050', '1011051', '1011052', '1011053', '1011054', '1011055', '1011056', '1011056', '1011057'];
  errors     = [{ Codigo: '1011050', Descripcion: 'No se recibio modelo de evaluacion PAE.' }, { Codigo: '1011051', Descripcion: 'No se recupero la persona para el Id recibido.' }, { Codigo: '1011052', Descripcion: 'No se recupero el producto para el Id recibido.' }, { Codigo: '1011053', Descripcion: 'El modelo de evaluacion no esta definido.' }, { Codigo: '1011054', Descripcion: 'El modelo de evaluacion no tiene tipo definido.' }, { Codigo: '1011055', Descripcion: 'No hay items a resolver para la evaluacion solicitada.' }, { Codigo: '1011056', Descripcion: 'No es posible evaluar reglas en la plataforma de ejecucion.' }, { Codigo: '1011056', Descripcion: 'Error en la parametrizacion del modelo de evaluacion.' }, { Codigo: '1011057', Descripcion: 'Error en la ejecucion del modelo de evaluacion.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.EvaluarPAE>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>E1F15D391E5C8FAC4189A627</bts:Token>
         </bts:Btinreq>
         <bts:modeloId>23</bts:modeloId>
         <bts:personaUId>62</bts:personaUId>
         <bts:productoUId>3</bts:productoUId>
         <bts:sdtValores>
            <bts:sBTPAEValorItem>
               <bts:itemValor></bts:itemValor>
               <bts:itemNombre></bts:itemNombre>
            </bts:sBTPAEValorItem>
         </bts:sdtValores>
      </bts:BTPersonas.EvaluarPAE>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?EvaluarPAE=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8' \
  -d '{
	"Btinreq": {
		"Device": "GZ",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "modeloId": 23,
   "personaUId": 62,
   "productoUId": 3,
   "sdtValores": {
      "sBTPAEValorItem": {
      "itemValor": "",
      "itemNombre": ""
      }
   }
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.EvaluarPAEResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>E1F15D391E5C8FAC4189A627</Token>
         </Btinreq>
         <valor>10000.0</valor>
         <mensaje/>
         <sdtPoliticas/>
         <numeroEjecucion>2</numeroEjecucion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16893</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.EvaluarPAE</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-10-31</Fecha>
            <Hora>08:50:51</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.EvaluarPAEResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "valor": 10000,
   "mensaje": "",
   "sdtPoliticas": "",
   "numeroEjecucion": 2,
   "Erroresnegocio": {
       "BTErrorNegocio": []
   },
   "Btoutreq": {
       "Numero": "835",
       "Estado": "OK",
       "Servicio": "BTPersonas.EvaluarPAE",
       "Fecha": "2017-12-18",
       "Requerimiento": "",
       "Hora": "01:48:53",
       "Canal": "BTDIGITAL"
   }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'itemNombre', Tipo: 'String', Comentarios: 'Nombre del item.' }, { Nombre: 'itemValor', Tipo: 'String', Comentarios: 'Valor del item.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTPoliticaIncumplida', Tipo: '', Comentarios: '' }, { Nombre: '### sBTPoliticaIncumplida', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTPoliticaIncumplida son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado.' }, { Nombre: 'estadoDsc', Tipo: 'String', Comentarios: 'Descripcion del estado.' }, { Nombre: 'nroAutorizacion', Tipo: 'Long', Comentarios: 'Numero de la autorizacion.' }, { Nombre: 'observacion', Tipo: 'String', Comentarios: 'Observacion.' }, { Nombre: 'politica', Tipo: 'String', Comentarios: 'Politica.' }, { Nombre: 'politicaId', Tipo: 'Int', Comentarios: 'Identificador de la politica.' }, { Nombre: 'restriccion', Tipo: 'String', Comentarios: 'Restriccion.' }, { Nombre: 'restriccionDsc', Tipo: 'String', Comentarios: 'Descripcion de la restriccion.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
