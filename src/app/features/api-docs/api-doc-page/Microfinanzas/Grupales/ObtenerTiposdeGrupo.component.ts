import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTiposdeGrupo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTiposdeGrupoComponent1750258525157 {
  pageTitle        = 'Obtener Tipos de Grupo';
  description      = `Método para obtener los tipos de grupo de crédito.`;
  pubName          = 'Obtener Tipos de Grupo';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtTiposGrupos', Tipo: '[sBTTipoGrupo](#sbttipogrupo)', Comentarios: 'Listado de tipos de grupos.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No existen Tipos de Grupo ingresados en el sistema.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.ObtenerTiposGrupo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1126115841CD285A89A23FBE</bts:Token>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
      </bts:BTMicrofinanzas.ObtenerTiposGrupo>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerTiposGrupo=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.ObtenerTiposGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1126115841CD285A89A23FBE</Token>
            <Device>1</Device>
         </Btinreq>
         <sdtTiposGrupos>
            <sBTTipoGrupo>
               <Codigo>1</Codigo>
               <Descripcion>Grupo Solidario</Descripcion>
            </sBTTipoGrupo>
            <sBTTipoGrupo>
               <Codigo>2</Codigo>
               <Descripcion>Grupo 2</Descripcion>
            </sBTTipoGrupo>
            <sBTTipoGrupo>
               <Codigo>4</Codigo>
               <Descripcion>Grupo Compartamos</Descripcion>
            </sBTTipoGrupo>
            <sBTTipoGrupo>
               <Codigo>5</Codigo>
               <Descripcion>Domingo</Descripcion>
            </sBTTipoGrupo>
         </sdtTiposGrupos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ObtenerTiposGrupo</Servicio>
            <Fecha>2020-04-16</Fecha>
            <Hora>09:30:37</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>4942</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerTiposGrupoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtTiposGrupos": {
		"sBTTipoGrupo": [
		  {
			"codigo": "1",
			"descripcion": "Grupo Solidario"
		  },
		  {
			"codigo": "2",
			"descripcion": "Grupo 2"
		  },
		  {
			"codigo": "4",
			"descripcion": "Grupo Compartamos"
		  },
		  {
			"codigo": "5",
			"descripcion": "Domingo"
		  }
		]
	  },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "786",
        "Estado": "OK",
        "Servicio": "BTMicrofinanzas.ObtenerTiposGrupo",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "16:35:22",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTTipogrupo', fields: [{ Nombre: 'codigo', Tipo: 'Long', Comentarios: 'Código del tipo de grupo.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del tipo de grupo.' }] }];
}
