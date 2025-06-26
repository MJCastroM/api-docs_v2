import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerProgramaParticular',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProgramaParticularComponent1750945333911 {
  pageTitle        = 'Obtener Programa Particular';
  description      = `Método para obtener el programa particular a ejecutar según el programa estándar ingresado.`;
  pubName    = 'BTParametrosBase.ObtenerProgramaParticular';
  programa   = 'RBTPG444';
  scope      = 'Institucional';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'empresaId', Tipo: 'Short', Comentarios: 'Código de empresa [Hidden].' }, { Nombre: 'programaStandard', Tipo: 'String', Comentarios: 'Nombre de programa Standard.' }];
  outputData = [{ Nombre: 'sdtProgramaParticular', Tipo: '[sBTProgramaParticular](#sbtprogramaparticular)', Comentarios: 'Datos del programa particular.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de empresa.' }, { Codigo: '30002', Descripcion: 'No se recibió el programa standard.' }, { Codigo: '40001', Descripcion: 'No existe programa particular para el programa standard ingresado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTParametrosBase.ObtenerProgramaParticular>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GP</bts:Device>
            <bts:Token>7d3fb9540aCD285A89A23FBE</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:programaStandard>BLOCKING1</bts:programaStandard>
      </bts:BTParametrosBase.ObtenerProgramaParticular>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerProgramaParticular \
-H \'cache-control: no-cache\' \
-H \'content-type: application/json\' \
-d \'{
    "Btinreq": {
      "Canal": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Device": "GP",
      "Requerimiento": "1",
      "Token": "200f0b8b654A8B5C60A82434"
    },
   "programaStandard": "BLOCKING1"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTParametrosBase.ObtenerProgramaParticularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>7d3fb9540aCD285A89A23FBE</Token>
         </Btinreq>
         <sdtProgramaParticular>
            <descripcion>PRUEBA BLOQUEO</descripcion>
            <programaParticular>10834</programaParticular>
            <programaStandard>BLOCKING1</programaStandard>
            <valorCaracteres>11</valorCaracteres>
            <valorNumerico>25</valorNumerico>
         </sdtProgramaParticular>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1895</Numero>
            <Servicio>BTParametrosBase.ObtenerProgramaParticular</Servicio>
            <Estado>OK</Estado>
            <Fecha>2022-11-22</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>09:25:20</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTParametrosBase.ObtenerProgramaParticularResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
    "Btinreq": {
	  "Device": "GP",
	  "Usuario": "INSTALADOR",
	  "Requerimiento": "1",
	  "Canal": "BTDIGITAL",
	  "Token": "47D750A861C4243EDE981344"
	},
	"sdtProgramaParticular": {
	  "descripcion": "PRUEBA BLOQUEO",
	  "programaParticular": "10834",
     "programaStandard": "BLOCKING1",
     "valorCaracteres": 11,
     "valorNumerico": 25
	},
	"Btoutreq": {
	  "Numero": "109140",
	  "Estado": "OK",
	  "Servicio": "BTParametrosBase.ObtenerProgramaParticular",
	  "Requerimiento": "1",
	  "Fecha": "2020-11-24",
	  "Canal": "BTDIGITAL",
	  "Hora": "13:29:43"
	}
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTProgramaParticular', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de la opción general de procesos.' }, { Nombre: 'programaParticular', Tipo: 'String', Comentarios: 'Nombre de programa particular.' }, { Nombre: 'programaStandard', Tipo: 'String', Comentarios: 'Nombre de programa standard.' }, { Nombre: 'valorCaracteres', Tipo: 'String', Comentarios: 'Valor caracteres.' }, { Nombre: 'valorNumerico', Tipo: 'Int', Comentarios: 'Valor numérico.' }] }];
}
