import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-InhabilitarIntegrantedeunGrupo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class InhabilitarIntegrantedeunGrupoComponent1750713394044 {
  pageTitle        = 'Inhabilitar Integrante de Grupo';
  description      = `Método para inhabilitar un integrante de un grupo de crédito.`;
  pubName    = 'BTMicrofinanzas.InhabilitarIntegranteGrupo';
  programa   = 'RBTPG436';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'grupoId', Tipo: 'Int', Comentarios: 'Identificador de grupo' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió código de grupo' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de cliente' }, { Codigo: '30014', Descripcion: 'No existe registro con el identificador indicado' }, { Codigo: '40001', Descripcion: 'No se puede dar de baja integrante porque el grupo conforma una instancia' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.InhabilitarIntegranteGrupo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1204799820CD285A89A23FBE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:grupoId>1</bts:grupoId>
         <bts:clienteUId>156</bts:clienteUId>
      </bts:BTMicrofinanzas.InhabilitarIntegranteGrupo>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?InhabilitarIntegranteGrupo=\' \
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
	"clienteUId": "156"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.InhabilitarIntegranteGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <Servicio>BTMicrofinanzas.InhabilitarIntegranteGrupo</Servicio>
            <Fecha>2020-04-20</Fecha>
            <Hora>16:59:02</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>5004</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.InhabilitarIntegranteGrupoResponse>
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
        "Servicio": "BTMicrofinanzas.InhabilitarIntegranteGrupo",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "16:35:22",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
