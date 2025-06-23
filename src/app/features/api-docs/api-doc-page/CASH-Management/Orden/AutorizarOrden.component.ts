import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AutorizarOrden',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AutorizarOrdenComponent1750713393231 {
  pageTitle        = 'Autorizar Orden';
  description      = `Método para autorizar una orden determinada.`;
  pubName    = 'BTCASHManagement.AutorizarOrden';
  programa   = 'RBTPGC08';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de orden.' }];
  outputData = [];
  errors     = [{ Codigo: '1030725', Descripcion: 'No se encontro orden a autorizar.' }, { Codigo: '1030722', Descripcion: 'El estado de la orden, no permite autorizar.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.AutorizarOrden>
          <bts:Btinreq>
            <bts:Device>001</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:ordenId>1414</bts:ordenId>
      </bts:BTCASHManagement.AutorizarOrden>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?AutorizarOrden=\' \
  -H \'Content-Type: application/json\' \
  -H \'Postman-Token: 13ba5b1a-ee0f-44d1-a89c-33f50a9886ca,b554e081-e513-4d70-a311-824eb3e9218a\' \
  -H \'cache-control: no-cache\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "ordenId": "1416"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.AutorizarOrdenResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>001</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1e39d33c824A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>7189</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCASHManagement.AutorizarOrden</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-04-25</Fecha>
            <Hora>10:40:55</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.AutorizarOrdenResponse>
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
        "Numero": 7190,
        "Estado": "OK",
        "Servicio": "BTCASHManagement.AutorizarOrden",
        "Requerimiento": "1",
        "Fecha": "2019-04-25",
        "Hora": "10:45:20",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
