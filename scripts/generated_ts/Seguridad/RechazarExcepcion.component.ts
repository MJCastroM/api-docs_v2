import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-RechazarExcepcion',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class RechazarExcepcionComponent1750713394982 {
  pageTitle        = 'Rechazar Excepción';
  description      = `Método para rechazar una excepción.`;
  pubName    = 'BTSeguridad.RechazarExcepcion';
  programa   = 'RBTPG088';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'idExcepcion', Tipo: 'Int', Comentarios: 'Identificador de excepción.' }, { Nombre: 'usuario', Tipo: 'String', Comentarios: 'Usuario.' }, { Nombre: 'contraseña', Tipo: 'String', Comentarios: 'Contraseña.' }, { Nombre: 'autoriza', Tipo: 'String', Comentarios: 'Autoriza [Hidden: Valor fijo \'N\' para este método].' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'Excepción asignada a otro Usuario.' }, { Codigo: '30011', Descripcion: 'No se recibió el identificador de excepción.' }, { Codigo: '30012', Descripcion: 'No se recibió Usuario.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSeguridad.RechazarExcepcion>
         <bts:Btinreq>             
            <bts:Device>ES</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>dac8c7fdec4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:idExcepcion>1852</bts:idExcepcion>
         <bts:usuario>BANTOTAL</bts:usuario>
         <bts:contraseña>z0na#1357</bts:contraseña>
      </bts:BTSeguridad.RechazarExcepcion>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSeguridad?AutorizarExcepcion=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 08206ddb-aee6-e62e-eb5a-0eb81f95e87f\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "idExcepcion": 1854,
    "usuario": "BANTOTAL",
    "contraseña": "z0na#1357"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSeguridad.RechazarExcepcionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>ES</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>dac8c7fdec4A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>890</Numero>
            <Estado>OK</Estado>
            <Servicio>BTSeguridad.RechazarExcepcion</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2017-12-20</Fecha>
            <Hora>16:39:15</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTSeguridad.RechazarExcepcionResponse>
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
        "Numero": "959",
        "Estado": "OK",
        "Servicio": "BTSeguridad.RechazarExcepcion",
        "Fecha": "2017-12-22",
        "Requerimiento": "",
        "Hora": "10:58:58",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
