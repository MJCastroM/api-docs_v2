import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Inhabilitar',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class InhabilitarComponent1751987196107 {
  pageTitle        = 'Inhabilitar';
  description      = `Método para inhabilitar una cuenta cliente que se encuentra habilitada.`;
  pubName    = 'BTClientes.Inhabilitar';
  programa   = 'RBTPG498';
  scope      = 'Institucional';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'motivo', Tipo: 'Short', Comentarios: 'Código de motivo de inhabilitación.' }, { Nombre: 'justificacion', Tipo: 'String', Comentarios: 'Justificación de la inhabilitación' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'Debe ingresar identificador de cliente.' }, { Código: '30002', Descripción: 'Debe ingresar motivo de inhabilitación.' }, { Código: '30003', Descripción: 'Debe ingresar justificación.' }, { Código: '40001', Descripción: 'No se puede inhabilitar la cuenta porque está cerrada.' }, { Código: '40002', Descripción: 'La cuenta ya se encuentra inhabilitada.' }, { Código: '40003', Descripción: 'La cuenta ingresada no existe.' }, { Código: '40004', Descripción: 'No se puede cambiar estado porque la cuenta tiene saldos.' }, { Código: '40005', Descripción: 'El motivo ya se encuentra ingresado.' }, { Código: '40006', Descripción: 'El motivo ingresado no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.Inhabilitar>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>47D750A861C4243EDE981344</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10009</bts:clienteUId>
         <bts:motivo>3</bts:motivo>
         <bts:justificacion>Prueba</bts:justificacion>
      </bts:BTClientes.Inhabilitar>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?Inhabilitar \
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
   "clienteUId": 10009,
   "motivo": 3,
   "justificacion": "Prueba"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.InhabilitarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>47D750A861C4243EDE981344</Token>
            <Device>GP</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTClientes.Inhabilitar</Servicio>
            <Fecha>2022-11-17</Fecha>
            <Hora>11:46:15</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>463</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTClientes.InhabilitarResponse>
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
	"Erroresnegocio": {
        "BTErrorNegocio": []
	},
	"Btoutreq": {
	  "Numero": "109140",
	  "Estado": "OK",
	  "Servicio": "BTClientes.Inhabilitar",
	  "Requerimiento": "1",
	  "Fecha": "2022-11-17",
	  "Canal": "BTDIGITAL",
	  "Hora": "11:46:15"
	}
}\'` }
  };

  structuredTypes = [];
}
