import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerReferencias',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerReferenciasComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Referencias';
  description = `Metodo para obtener los datos de las referencias de una persona.`;
  pubName    = 'BTPersonas.ObtenerReferencias';
  programa   = 'RBTPG301';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['personaUId'];
  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }];
  outputCols = ['sdtReferencias'];
  outputData = [{ Nombre: 'sdtReferencias', Tipo: '[sBTReferencia](#sbtreferencia)', Comentarios: 'Listado de referencias.' }];
  errorCols  = ['30001', '30002', '40001'];
  errors     = [{ Codigo: '30001', Descripcion: 'Identificador de persona requerido.' }, { Codigo: '30002', Descripcion: 'No existe persona con el identificador ingresado.' }, { Codigo: '40001', Descripcion: 'No existe Referencias para la persona en consulta.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerReferencias>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>0d402C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>51</bts:personaUId>
      </bts:BTPersonas.ObtenerReferencias>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerReferencias' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId":"51"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerReferenciasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d402C60A82434</Token>
         </Btinreq>
         <sdtReferencias>
            <sBTReferencia>
               <vinculoId>3</vinculoId>
               <domicilio3/>
               <domicilio2/>
               <domicilio1>18 de Julio 1234</domicilio1>
               <tipoId>P</tipoId>
               <correlativo>1</correlativo>
               <tipo>Personal</tipo>
               <telefono>1234 5678</telefono>
               <nombre>Rodolfo Rías</nombre>
               <vinculo>Director</vinculo>
            </sBTReferencia>
         </sdtReferencias>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8484</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerReferencias</Servicio>
            <Fecha>2019-05-08</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>17:29:11</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerReferenciasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"sdtReferencias": {
		"sBTReferencia": {
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
        "Servicio": "BTPersonas.ObtenerReferencias",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Correlativo.' }, { Nombre: 'domicilio1', Tipo: 'String', Comentarios: 'Domicilio 1.' }, { Nombre: 'domicilio2', Tipo: 'String', Comentarios: 'Domicilio 2.' }, { Nombre: 'domicilio3', Tipo: 'String', Comentarios: 'Domicilio 3.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre completo de la referencia.' }, { Nombre: 'telefono', Tipo: 'String', Comentarios: 'Numero de telefono.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Descripcion del tipo de referencia' }, { Nombre: 'tipoId', Tipo: 'String', Comentarios: 'Identificador de tipo de referencia.' }, { Nombre: 'vinculo', Tipo: 'String', Comentarios: 'Vinculo.' }, { Nombre: 'vinculoId', Tipo: 'Short', Comentarios: 'Identificador de vinculo.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
