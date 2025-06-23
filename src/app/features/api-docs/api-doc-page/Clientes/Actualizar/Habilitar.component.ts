import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Habilitar',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class HabilitarComponent1750713393367 {
  pageTitle        = 'Habilitar';
  description      = `Método para habilitar una cuenta cliente que se encuentra inhabilitada.`;
  pubName    = 'BTClientes.Habilitar';
  programa   = 'RBTPG499';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar identificador de cliente.' }, { Codigo: '40001', Descripcion: 'No se puede habilitar la cuenta porque está cerrada.' }, { Codigo: '40002', Descripcion: 'La cuenta ya se encuentra habilitada.' }, { Codigo: '40003', Descripcion: 'La cuenta ingresada no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.Habilitar>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>GP</bts:Device>
            <bts:Token>f3fced1925CD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
         </bts:Btinreq>
         <bts:clienteUId>882</bts:clienteUId>
      </bts:BTClientes.Habilitar>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?Habilitar\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
		"Device": "GP",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "f3fced1925CD285A89A23FBE"
	},
	"clienteUId": 882,
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.HabilitarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Token>f3fced1925CD285A89A23FBE</Token>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Requerimiento>1</Requerimiento>
            <Numero>16651</Numero>
            <Servicio>BTClientes.Habilitar</Servicio>
            <Hora>08:58:44</Hora>
            <Canal>BTDIGITAL</Canal>
            <Fecha>2022-10-04</Fecha>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTClientes.HabilitarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	 "Btinreq": {
        "Device": "GP",
        "Token": "f3fced1925CD285A89A23FBE",
        "Canal": "BTDIGITAL",
        "Usuario": "INSTALADOR",
        "Requerimiento": "1"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Requerimiento": "1",
        "Numero": "16651",
        "Servicio": "BTClientes.Habilitar",
        "Hora": "08:58:44",
        "Canal": "BTDIGITAL",
        "Fecha": "2022-10-04",
        "Estado": "OK"
    }
}\'` }
  };

  structuredTypes = [];
}
