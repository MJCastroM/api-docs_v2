import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-AgregaraListaNegra',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregaraListaNegraComponent {
  pageTitle = 'Agregar a Lista Negra';
  description = `Metodo para agregar una persona a una lista negra.`;
  pubName    = 'BTPersonas.AgregarAListaNegra';
  programa   = 'RBTPG310';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'codigoDeLista', Tipo: 'Short', Comentarios: 'Identificador de lista negra.' }, { Nombre: 'motivo', Tipo: 'String', Comentarios: 'Motivo por el cual la persona debe estar en la lista.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'Identificador de persona requerido.' }, { Codigo: '30002', Descripcion: 'No existe persona con el identificador ingresado.' }, { Codigo: '40001', Descripcion: 'Codigo Lista no puede ser vacio.' }, { Codigo: '40002', Descripcion: 'Codigo Lista Invalido.' }, { Codigo: '40003', Descripcion: 'Motivo no puede ser vacio.' }, { Codigo: '40004', Descripcion: 'La persona ya se encuentra inhabilitada.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.AgregarAListaNegra>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>0d402ef5A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>21</bts:personaUId>
         <bts:codigoDeLista>1</bts:codigoDeLista>
         <bts:motivo>Lavado de dinero</bts:motivo>
      </bts:BTPersonas.AgregarAListaNegra>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarAListaNegra' \
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
	"personaUId":"21",
	"codigoDeLista":"1",
	"motivo":"Lavado de dinero"
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.AgregarAListaNegraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d402ef5A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8496</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.AgregarAListaNegra</Servicio>
            <Fecha>2019-05-08</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>18:55:05</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.AgregarAListaNegraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
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
        "Servicio": "BTPersonas.AgregarAListaNegra",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [];
}
