import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPersonasVinculadas',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPersonasVinculadasComponent1750713394565 {
  pageTitle        = 'Obtener Personas Vinculadas';
  description      = `Método para obtener un listado de los vínculos de la persona.`;
  pubName    = 'BTPersonas.ObtenerPersonasVinculadas';
  programa   = 'RBTPG375';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  outputData = [{ Nombre: 'sdtPersonasVinculadas', Tipo: '[sBTPersonaVinculada](#sbtpersonavinculada)', Comentarios: 'Datos de la persona vinculada.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de persona.' }, { Codigo: '31003', Descripcion: 'No existe registro para el identificador único.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerPersonasVinculadas>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>120109606CD285A89A23FBEE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>1</bts:personaUId>
      </bts:BTPersonas.ObtenerPersonasVinculadas>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerPersonasVinculadas\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "GP",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"personaUId": "1",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerPersonasVinculadasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>120109606CD285A89A23FBEE</Token>
            <Device>MC</Device>
         </Btinreq>
         <sdtPersonasVinculadas>
            <sBTPersonaVinculada>
               <personaUId>3</personaUId>
               <nombre>PEREZ MANRIQUE JORGE</nombre>
               <vinculo>
                  <identificador>41</identificador>
                  <descripcion>Padre</descripcion>
                  <tipo>C</tipo>
               </vinculo>
            </sBTPersonaVinculada>
            <sBTPersonaVinculada>
               <personaUId>2</personaUId>
               <nombre>ABARCA CARLOS</nombre>
               <vinculo>
                  <identificador>43</identificador>
                  <descripcion>Hijo</descripcion>
                  <tipo>C</tipo>
               </vinculo>
            </sBTPersonaVinculada>
         </sdtPersonasVinculadas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ObtenerPersonasVinculadas</Servicio>
            <Fecha>2021-11-30</Fecha>
            <Hora>11:04:47</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8767</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ObtenerPersonasVinculadasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{ 
    "Btinreq": { 
	    "Device": "GP", 
	    "Usuario": "MINSTALADOR", 
	    "Token": "16c1cc9b534A8B5C60A82434", 
	    "Canal": "BTDIGITAL", 
	    "Requerimiento": "1" 
    }, 
    "sdtPersonasVinculadas": { 
      "sBTPersonaVinculada": [ 
      { 
         "personaUId": "3", 
         "nombre": "PEREZ MANRIQUE JORGE", 
         "vinculo": { 
            "identificador": "41", 
            "descripcion": "Padre", 
            "tipo": "C" 
         } 
      }, 
      { 
         "personaUId": "2", 
         "nombre": "ABARCA CARLOS", 
         "vinculo": { 
            "identificador": "43", 
            "descripcion": "Hijo", 
            "tipo": "C" 
         } 
      } 
      ] 
    },   
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPersonas.ObtenerPersonasVinculadasResponse", 
        "Fecha": "2021-10-28", 
        "Hora": "15:39:53", 
        "Requerimiento": "1", 
        "Numero": "11003", 
        "Estado": "OK" 
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPersonaVinculada', fields: [{ Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de la persona.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'vinculo', Tipo: '[sBTVinculo](#sbtvinculo)', Comentarios: 'Datos del vínculo.' }] }, { typeName: 'sBTVinculo', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de vínculo.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador de vínculo.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de vínculo.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
