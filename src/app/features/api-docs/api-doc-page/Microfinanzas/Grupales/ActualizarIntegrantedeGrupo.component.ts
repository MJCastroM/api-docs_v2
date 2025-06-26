import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ActualizarIntegrantedeGrupo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarIntegrantedeGrupoComponent1750945333402 {
  pageTitle        = 'Actualizar Integrante de Grupo';
  description      = `Método para actualizar un integrante de un grupo de crédito.`;
  pubName    = 'BTMicrofinanzas.ActualizarIntegranteGrupo';
  programa   = 'RBTPG434';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'grupoId', Tipo: 'Int', Comentarios: 'Identificador de grupo' }, { Nombre: 'sdtIntegranteGrupo', Tipo: '[sBTIntegranteGrupo](#sbtintegrantegrupo)', Comentarios: 'Datos del integrante' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de grupo' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de cliente' }, { Codigo: '30014', Descripcion: 'No existe registro con el identificador indicado' }, { Codigo: '40005', Descripcion: 'Debe ingresar un tipo de integrante válido para el grupo' }, { Codigo: '40006', Descripcion: 'Excedió la cantidad de integrantes Coordinador permitidos para el tipo de grupo' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.ActualizarIntegranteGrupo>
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
      </bts:BTMicrofinanzas.ActualizarIntegranteGrupo>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ActualizarIntegranteGrupo=\' \
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
	"sdtIntegranteGrupo": {
		"clienteUId": "157",
		"tipoIntegranteId": "2",
		"tipoIntegrante": "?",
		"fechaAlta": "2020-04-20",
		"vigente": "S"
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.ActualizarIntegranteGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <Servicio>BTMicrofinanzas.ActualizarIntegranteGrupo</Servicio>
            <Fecha>2020-04-20</Fecha>
            <Hora>16:59:02</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>5004</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ActualizarIntegranteGrupoResponse>
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
        "Servicio": "BTMicrofinanzas.ActualizarIntegranteGrupo",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "16:35:22",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTIntegranteGrupo', fields: [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'cuenta', Tipo: 'String', Comentarios: 'Nombre de la cuenta.' }, { Nombre: 'fechaAlta', Tipo: 'Date', Comentarios: 'Fecha de alta del integrante.' }, { Nombre: 'fechaBaja', Tipo: 'Date', Comentarios: 'Fecha de baja del integrante.' }, { Nombre: 'identificacionAlternativa', Tipo: 'String', Comentarios: 'Identificación alternativa del integrante.' }, { Nombre: 'tipoIntegrante', Tipo: 'String', Comentarios: 'Descripción del tipo de integrante.' }, { Nombre: 'tipoIntegranteId', Tipo: 'Short', Comentarios: 'Tipo de integrante a ser actualizado.' }] }];
}
