import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-AgregarPersonaVinculada',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarPersonaVinculadaComponent {
  // Cabecera e info-card
  pageTitle = 'Agregar Persona Vinculada';
  description = `Metodo para agregar un vinculo de afinidad a una persona.`;
  pubName    = 'BTPersonas.AgregarPersonaVinculada';
  programa   = 'RBTPG370';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['personaUId', 'personaVinculadaUId', 'vinculoId'];
  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'personaVinculadaUId', Tipo: 'Long', Comentarios: 'Identificador unico del vinculo de la persona.' }, { Nombre: 'vinculoId', Tipo: 'Short', Comentarios: 'Identificador del vinculo de consanguinidad.' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '30002', '31003', '32003', '40001', '41001', '42000'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de persona.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de persona a relacionar.' }, { Codigo: '31003', Descripcion: 'No existe registro para el identificador unico.' }, { Codigo: '32003', Descripcion: 'Error en identificador de la persona a relacionar: No existe registro para el identificador unico.' }, { Codigo: '40001', Descripcion: 'No se recibio el codigo de vinculo.' }, { Codigo: '41001', Descripcion: 'Registro de relacion de personas existente.' }, { Codigo: '42000', Descripcion: 'El codigo de vinculo ingresado es invalido.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.AgregarPersonaVinculada>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>101560665CD285A89A23FBEE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>1</bts:personaUId>
         <bts:personaVinculadaUId>3</bts:personaVinculadaUId>
         <bts:vinculoId>53</bts:vinculoId>
      </bts:BTPersonas.AgregarPersonaVinculada>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?AgregarPersonaVinculada' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "GP",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"personaUId": "1",
	"personaVinculadaUId": "3",
	"vinculoId": "53"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.AgregarPersonaVinculadaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>101560665CD285A89A23FBEE</Token>
            <Device>MC</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.AgregarPersonaVinculadaResponse</Servicio>
            <Fecha>2021-11-08</Fecha>
            <Hora>15:41:46</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8673</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.AgregarPersonaVinculadaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{ 
    "Btinreq": {
	    "Device": "GP",
	    "Usuario": "MINSTALADOR",
	    "Token": "16c1cc9b534A8B5C60A82434",
	    "Canal": "BTDIGITAL",
	    "Requerimiento": "1"
    },
    "Erroresnegocio": {
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTPersonas.AgregarPersonaVinculadaResponse",
        "Fecha": "2021-10-28",
        "Hora": "15:39:53",
        "Requerimiento": "1",
        "Numero": "11003",
        "Estado": "OK"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
