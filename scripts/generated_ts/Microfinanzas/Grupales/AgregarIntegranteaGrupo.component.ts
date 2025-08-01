import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarIntegranteaGrupo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarIntegranteaGrupoComponent1751987197754 {
  pageTitle        = 'Agregar Integrante a Grupo';
  description      = `Método para agregar un integrante a un grupo de crédito.`;
  pubName    = 'BTMicrofinanzas.AgregarIntegranteAGrupo';
  programa   = 'RBTPG433';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'grupoId', Tipo: 'Int', Comentarios: 'Código de grupo' }, { Nombre: 'sdtIntegranteGrupo', Tipo: '[sBTIntegranteGrupo](#sbtintegrantegrupo)', Comentarios: 'Datos del integrante' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de grupo' }, { Código: '30002', Descripción: 'No se recibió el identificador de cliente' }, { Código: '30014', Descripción: 'No existe registro con el identificador indicado' }, { Código: '40005', Descripción: 'Debe ingresar un tipo de integrante válido para el grupo' }, { Código: '40006', Descripción: 'Excedió la cantidad de integrantes Coordinador permitidos para el tipo de grupo' }, { Código: '40008', Descripción: 'La cuenta ya integra el grupo' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.AgregarIntegranteAGrupo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1414147105CD285A89A23FBE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:grupoId>3</bts:grupoId>
         <bts:sdtIntegranteGrupo>
            <bts:clienteUId>157</bts:clienteUId>
            <bts:cuenta></bts:cuenta>
            <bts:tipoIntegranteId>2</bts:tipoIntegranteId>
            <bts:tipoIntegrante></bts:tipoIntegrante>
            <bts:fechaAlta>2020-04-20</bts:fechaAlta>
            <bts:fechaBaja></bts:fechaBaja>
            <bts:vigente>S</bts:vigente>
            <bts:identificacionAlternativa></bts:identificacionAlternativa>
         </bts:sdtIntegranteGrupo>
      </bts:BTMicrofinanzas.AgregarIntegranteAGrupo>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?AgregarIntegranteAGrupo=\' \
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
	"grupoId": 3,
	"sdtIntegranteGrupo": {
		"clienteUId": "157",
		"tipoIntegranteId": "2",
		"tipoIntegrante": "",
		"fechaAlta": "2020-04-20",
		"vigente": "S"
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.AgregarIntegranteAGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1414147105CD285A89A23FBE</Token>
            <Device>AC</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.AgregarIntegranteAGrupo</Servicio>
            <Fecha>2020-04-20</Fecha>
            <Hora>16:59:02</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>5004</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.AgregarIntegranteAGrupoResponse>
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
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "786",
        "Estado": "OK",
        "Servicio": "BTMicrofinanzas.AgregarIntegranteAGrupo",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "16:35:22",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTIntegranteGrupo', fields: [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'cuenta', Tipo: 'String', Comentarios: 'Nombre de la cuenta.' }, { Nombre: 'fechaAlta', Tipo: 'Date', Comentarios: 'Fecha de alta del integrante.' }, { Nombre: 'fechaBaja', Tipo: 'Date', Comentarios: 'Fecha de baja del integrante.' }, { Nombre: 'identificacionAlternativa', Tipo: 'String', Comentarios: 'Identificación alternativa del integrante.' }, { Nombre: 'tipoIntegrante', Tipo: 'String', Comentarios: 'Descripción del tipo de integrante.' }, { Nombre: 'tipoIntegranteId', Tipo: 'Short', Comentarios: 'Tipo de integrante a ser agregado.' }] }];
}
