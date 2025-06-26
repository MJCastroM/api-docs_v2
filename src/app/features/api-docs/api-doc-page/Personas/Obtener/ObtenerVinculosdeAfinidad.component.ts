import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerVinculosdeAfinidad',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerVinculosdeAfinidadComponent1750945334563 {
  pageTitle        = 'Obtener Vínculos de Afinidad';
  description      = `Método para obtener un listado de los vínculos de afinidad registrados.`;
  pubName    = 'BTPersonas.ObtenerVinculosAfinidad';
  programa   = 'RBTPG395';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de vínculo [Hidden: Valor fijo \'A\' para este método].' }];
  outputData = [{ Nombre: 'sdtVinculos', Tipo: '[sBTVinculo](#sbtvinculo)', Comentarios: 'Listado de vínculos.' }];
  errors     = [{ Codigo: '40001', Descripcion: 'No existen Vínculos ingresados en el sistema.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerVinculosAfinidad>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTPersonas.ObtenerVinculosAfinidad>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerVinculosAfinidadResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtVinculos>
            <sBTVinculo>
               <identificador>40</identificador>
               <descripcion>Cónyuge</descripcion>
               <tipo>A</tipo>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>100</identificador>
               <descripcion>Amigo</descripcion>
               <tipo>A</tipo>
            </sBTVinculo>
         </sdtVinculos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>828</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerVinculosAfinidad</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>18:47:35</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerVinculosAfinidadResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtVinculos": {
    "sBTVinculo": [
      {
        "identificador": "40",
        "descripcion": "Cónyuge",
        "tipo": "A"
      },
      {
        "identificador": "100",
        "descripcion": "Amigo",
        "tipo": "A"
      }
     ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "827",
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerVinculosAfinidad",
        "Fecha": "2017-12-17",
        "Requerimiento": "",
        "Hora": "18:47:21",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTVinculo', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de vínculo.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador de vínculo.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de vínculo.' }] }];
}
