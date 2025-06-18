import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerGrupos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerGruposComponent1750268696471 {
  pageTitle        = 'Obtener Grupos';
  description      = `Método para obtener los grupos de crédito existentes.`;
  pubName    = 'BTMicrofinanzas.ObtenerGrupos';
  programa   = 'RBTPG428';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tipoGrupoId', Tipo: 'Short', Comentarios: 'Tipo de grupos.' }];
  outputData = [{ Nombre: 'sdtGrupos', Tipo: '[sBTGrupo](#sbtgrupo)', Comentarios: 'Listado de grupos.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el tipo de grupo.' }, { Codigo: '30002', Descripcion: 'No existen grupos para el tipo de grupo ingresado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.ObtenerGrupos>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1271951833CD285A89A23FBE</bts:Token>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:tipoGrupoId>4</bts:tipoGrupoId>
      </bts:BTMicrofinanzas.ObtenerGrupos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerGrupos=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7\' \
  -d \'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "tipoGrupoId": 4
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.ObtenerGruposResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1271951833CD285A89A23FBE</Token>
            <Device>1</Device>
         </Btinreq>
         <sdtGrupos>
            <sBTGrupo>
               <codigo>4</codigo>
               <nombre>Compartamos</nombre>
            </sBTGrupo>
            <sBTGrupo>
               <codigo>27</codigo>
               <nombre>Prueba CD</nombre>
            </sBTGrupo>
            <sBTGrupo>
               <codigo>29</codigo>
               <nombre>Cartera Digital</nombre>
            </sBTGrupo>
         </sdtGrupos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ObtenerGrupos</Servicio>
            <Fecha>2020-04-20</Fecha>
            <Hora>14:46:58</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>4992</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerGruposResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtGrupos": {
		"sBTGrupo": [
		  {
			"codigo": "4",
			"nombre": "Compartamos"
		  },
		  {
			"codigo": "27",
			"nombre": "Prueba CD"
		  },
		  {
			"codigo": "29",
			"nombre": "Cartera Digital"
		  }
		]
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "786",
        "Estado": "OK",
        "Servicio": "BTMicrofinanzas.ObtenerGrupos",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "16:35:22",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTGrupo', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código del grupo.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Descripción del grupo.' }] }];
}
