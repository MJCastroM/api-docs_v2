import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTiposdeIntegrante',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTiposdeIntegranteComponent1750713394058 {
  pageTitle        = 'Obtener Tipos de Integrante';
  description      = `Método para obtener los tipos de integrante correspondientes a un tipo de grupo de crédito.`;
  pubName    = 'BTMicrofinanzas.ObtenerTiposDeIntegrante';
  programa   = 'RBTPG432';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tipoGrupoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de grupo.' }];
  outputData = [{ Nombre: 'sdtTiposIntegrantesGrupo', Tipo: '[sBTTipoIntegranteGrupo](#sbttipointegrantegrupo)', Comentarios: 'Listado de tipos de integrantes.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No existen Tipos de Grupo ingresados en el sistema.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.ObtenerTiposDeIntegrante>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1414147105CD285A89A23FBE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:tipoGrupoId>1</bts:tipoGrupoId>
      </bts:BTMicrofinanzas.ObtenerTiposDeIntegrante>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerTiposDeIntegrante=\' \
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
	"tipoGrupoId": 1
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.ObtenerTiposDeIntegranteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1414147105CD285A89A23FBE</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtTiposIntegrantesGrupo>
            <sBTTipoIntegranteGrupo>
               <codigo>1</codigo>
               <descripcion>Coordinador</descripcion>
               <cantidadPermitida>1</cantidadPermitida>
               <coordinador>S</coordinador>
               <vigente>S</vigente>
            </sBTTipoIntegranteGrupo>
            <sBTTipoIntegranteGrupo>
               <codigo>2</codigo>
               <descripcion>Integrantes</descripcion>
               <cantidadPermitida>9</cantidadPermitida>
               <coordinador>N</coordinador>
               <vigente>S</vigente>
            </sBTTipoIntegranteGrupo>
         </sdtTiposIntegrantesGrupo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ObtenerTiposDeIntegrante</Servicio>
            <Fecha>2020-04-20</Fecha>
            <Hora>16:35:36</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>4998</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerTiposDeIntegranteResponse>
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
    "sdtTiposIntegrantesGrupo": {
		"sBTTipoIntegranteGrupo": [
		  {
			"codigo": "1",
			"descripcion": "Coordinador",
			"cantidadPermitida": "1",
			"coordinador": "S",
			"vigente": "S"
		  },
		  {
			"codigo": "2",
			"descripcion": "Integrantes",
			"cantidadPermitida": "9",
			"coordinador": "N",
			"vigente": "S"
		  }
		]
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "786",
        "Estado": "OK",
        "Servicio": "BTMicrofinanzas.ObtenerTiposDeIntegrante",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "16:35:22",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTTipoIntegranteGrupo', fields: [{ Nombre: 'cantidadPermitida', Tipo: 'Int', Comentarios: 'Cantidad máxima de integrantes de este tipo permitidos.' }, { Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Identificador del tipo de integrante.' }, { Nombre: 'coordinador', Tipo: 'String', Comentarios: 'Indica si el integrante es coordinador o no (S/N).' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del tipo de integrante.' }, { Nombre: 'vigente', Tipo: 'String', Comentarios: 'Indica si el tipo de integrante está vigente (S/N).' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
