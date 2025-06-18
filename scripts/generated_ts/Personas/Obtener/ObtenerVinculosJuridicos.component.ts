import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerVinculosJuridicos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerVinculosJuridicosComponent1750268697692 {
  pageTitle        = 'Obtener Vínculos Juridicos';
  description      = `Método para obtener un listado de los vínculos jurídicos registrados.`;
  pubName    = 'BTPersonas.ObtenerVinculosJuridicos';
  programa   = 'RBTPG395';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de vínculo [Hidden: Valor fijo \'S\' para este método].' }];
  outputData = [{ Nombre: 'sdtVinculos', Tipo: '[sBTVinculo](#sbtvinculo)', Comentarios: 'Listado de vínculos.' }];
  errors     = [{ Codigo: '40001', Descripcion: 'No existen Vínculos ingresados en el sistema.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerVinculosJuridicos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTPersonas.ObtenerVinculosJuridicos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerVinculosJuridicos=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 0ccca369-0793-d62f-ebc0-3033cc750dad\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	}
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerVinculosJuridicosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sBTVinculo>
               <identificador>1</identificador>
               <descripcion>Presidente</descripcion>
               <tipo/>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>2</identificador>
               <descripcion>Vicepresidente</descripcion>
               <tipo/>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>3</identificador>
               <descripcion>Director</descripcion>
               <tipo/>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>4</identificador>
               <descripcion>Secretario</descripcion>
               <tipo/>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>5</identificador>
               <descripcion>Tesorero</descripcion>
               <tipo/>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>6</identificador>
               <descripcion>Prosecretario</descripcion>
               <tipo/>
            </sBTVinculo>
         </sdtVinculos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>828</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerVinculosJuridicos</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>18:47:35</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerVinculosJuridicosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
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
                "descripcion": "Presidente",
                "identificador": "1",
                "tipo": ""
            },
            {
                "descripcion": "Vicepresidente",
                "identificador": "2",
                "tipo": ""
            },
            {
                "descripcion": "Director",
                "identificador": "3",
                "tipo": ""
            },
            {
                "descripcion": "Secretario",
                "identificador": "4",
                "tipo": ""
            },
            {
                "descripcion": "Tesorero",
                "identificador": "5",
                "tipo": ""
            },
            {
                "descripcion": "Prosecretario",
                "identificador": "6",
                "tipo": ""
            },
            {
                "descripcion": "Protesorero",
                "identificador": "7",
                "tipo": ""
            },
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "827",
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerVinculosJuridicos",
        "Fecha": "2017-12-17",
        "Requerimiento": "",
        "Hora": "18:47:21",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTVinculo', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de vínculo.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador de vínculo.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de vínculo.' }] }];
}
