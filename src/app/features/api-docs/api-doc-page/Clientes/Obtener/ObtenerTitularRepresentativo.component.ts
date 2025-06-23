import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTitularRepresentativo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTitularRepresentativoComponent1750713393505 {
  pageTitle        = 'Obtener Titular Representativo';
  description      = `Método para obtener el identificador del titular representativo de una cuenta cliente.`;
  pubName    = 'BTClientes.ObtenerTitularRepresentativo';
  programa   = 'RBTPG131';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de la persona titular representativa.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para el identificador de cliente: [Número de identificador].' }, { Codigo: '30011', Descripcion: 'No existe el cliente seleccionado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerTitularRepresentativo>
         <bts:Btinreq>
            <bts:Device>3</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>3</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>a5cd5311ae4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>21</bts:clienteUId>
      </bts:BTClientes.ObtenerTitularRepresentativo>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerTitularRepresentativo=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"clienteUId": "21",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerTitularRepresentativoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>3</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>3</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>a5cd5311ae4A8B5C60A82434</Token>
         </Btinreq>
         <personaUId>21</personaUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>49</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerTitularRepresentativo</Servicio>
            <Requerimiento>3</Requerimiento>
            <Fecha>2018-05-04</Fecha>
            <Hora>12:38:34</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerTitularRepresentativoResponse>
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
    "personaUId": "21",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "104",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerTitularRepresentativo",
        "Requerimiento": "2",
        "Fecha": "2018-05-04",
        "Hora": "18:11:19",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
