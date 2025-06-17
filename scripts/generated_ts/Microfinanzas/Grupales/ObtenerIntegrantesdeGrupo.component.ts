import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerIntegrantesdeGrupo',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerIntegrantesdeGrupoComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Integrantes de Grupo';
  description = `Metodo para obtener los integrantes de un grupo de credito.`;
  pubName    = 'BTMicrofinanzas.ObtenerIntegrantesGrupo';
  programa   = 'RBTPG435';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['grupoId'];
  inputData  = [{ Nombre: 'grupoId', Tipo: 'Int', Comentarios: 'Codigo de grupo' }];
  outputCols = ['sdtIntegrantesGrupo'];
  outputData = [{ Nombre: 'sdtIntegrantesGrupo', Tipo: '[sBTIntegranteGrupo](#sbtintegrantegrupo)', Comentarios: 'Listado de integrantes.' }];
  errorCols  = ['30011', '30012'];
  errors     = [{ Codigo: '30011', Descripcion: 'No se recibio codigo de grupo.' }, { Codigo: '30012', Descripcion: 'El grupo ingresado no contiene integrantes.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerIntegrantesGrupo=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"grupoId": 3
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
</SOAP-ENV:Envelope>`, json: `'{
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
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico del cliente.' }, { Nombre: 'cuenta', Tipo: 'String', Comentarios: 'Nombre de la cuenta.' }, { Nombre: 'fechaAlta', Tipo: 'Date', Comentarios: 'Fecha de alta del integrante.' }, { Nombre: 'fechaBaja', Tipo: 'Date', Comentarios: 'Fecha de baja del integrante.' }, { Nombre: 'identificacionAlternativa', Tipo: 'String', Comentarios: 'Identificacion alternativa del integrante.' }, { Nombre: 'tipoIntegrante', Tipo: 'String', Comentarios: 'Descripcion del tipo de integrante.' }, { Nombre: 'tipoIntegranteId', Tipo: 'Short', Comentarios: 'Tipo de integrante a ser agregado.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
