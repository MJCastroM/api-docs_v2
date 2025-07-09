import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerIntegrantesdeGrupo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerIntegrantesdeGrupoComponent1751987197780 {
  pageTitle        = 'Obtener Integrantes de Grupo';
  description      = `Método para obtener los integrantes de un grupo de crédito.`;
  pubName    = 'BTMicrofinanzas.ObtenerIntegrantesGrupo';
  programa   = 'RBTPG435';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'grupoId', Tipo: 'Int', Comentarios: 'Código de grupo' }];
  outputData = [{ Nombre: 'sdtIntegrantesGrupo', Tipo: '[sBTIntegranteGrupo](#sbtintegrantegrupo)', Comentarios: 'Listado de integrantes.' }];
  errors     = [{ Código: '30011', Descripción: 'No se recibió código de grupo.' }, { Código: '30012', Descripción: 'El grupo ingresado no contiene integrantes.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.ObtenerIntegrantesGrupo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1414147105CD285A89A23FBE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:grupoId>3</bts:grupoId>
      </bts:BTMicrofinanzas.ObtenerIntegrantesGrupo>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerIntegrantesGrupo=\' \
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
	"grupoId": 3
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.ObtenerIntegrantesGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1414147105CD285A89A23FBE</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtIntegrantesGrupo>
            <sBTIntegranteGrupo>
               <clienteUId>27</clienteUId>
               <cuenta>GONZALEZ DUARTE MARÍA LUISA</cuenta>
               <tipoIntegranteId>2</tipoIntegranteId>
               <tipoIntegrante>Integrantes</tipoIntegrante>
               <fechaAlta>2019-05-23</fechaAlta>
               <fechaBaja>0000-00-00</fechaBaja>
               <vigente>S</vigente>
               <identificacionAlternativa/>
            </sBTIntegranteGrupo>
            <sBTIntegranteGrupo>
               <clienteUId>28</clienteUId>
               <cuenta>ILARIO BRAN</cuenta>
               <tipoIntegranteId>2</tipoIntegranteId>
               <tipoIntegrante>Integrantes</tipoIntegrante>
               <fechaAlta>2019-05-23</fechaAlta>
               <fechaBaja>0000-00-00</fechaBaja>
               <vigente>S</vigente>
               <identificacionAlternativa/>
            </sBTIntegranteGrupo>
         </sdtIntegrantesGrupo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ObtenerIntegrantesGrupo</Servicio>
            <Fecha>2020-04-20</Fecha>
            <Hora>17:20:58</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>5016</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerIntegrantesGrupoResponse>
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
	"sdtIntegrantesGrupo": {
		"sBTIntegranteGrupo": [
		  {
			"clienteUId": "27",
			"cuenta": "GONZALEZ DUARTE MARÍA LUISA",
			"tipoIntegranteId": "2",
			"tipoIntegrante": "Integrantes",
			"fechaAlta": "2019-05-23",
			"fechaBaja": "0000-00-00",
			"vigente": "S"
		  },
		  {
			"clienteUId": "28",
			"cuenta": "ILARIO BRAN",
			"tipoIntegranteId": "2",
			"tipoIntegrante": "Integrantes",
			"fechaAlta": "2019-05-23",
			"fechaBaja": "0000-00-00",
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
        "Servicio": "BTMicrofinanzas.ObtenerIntegrantesGrupo",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "16:35:22",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTIntegranteGrupo', fields: [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'cuenta', Tipo: 'String', Comentarios: 'Nombre de la cuenta.' }, { Nombre: 'fechaAlta', Tipo: 'Date', Comentarios: 'Fecha de alta del integrante.' }, { Nombre: 'fechaBaja', Tipo: 'Date', Comentarios: 'Fecha de baja del integrante.' }, { Nombre: 'identificacionAlternativa', Tipo: 'String', Comentarios: 'Identificación alternativa del integrante.' }, { Nombre: 'tipoIntegrante', Tipo: 'String', Comentarios: 'Descripción del tipo de integrante.' }, { Nombre: 'tipoIntegranteId', Tipo: 'Short', Comentarios: 'Tipo de integrante a ser agregado.' }] }];
}
