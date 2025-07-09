import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-DetenerArchivo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class DetenerArchivoComponent1751987195695 {
  pageTitle        = 'Detener Archivo';
  description      = `Método para detener la ejecución de pagos o transferencias ya autorizados.`;
  pubName    = 'BTCASHManagement.DetenerArchivo';
  programa   = 'RBTPGC12';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'archivoId', Tipo: 'Long', Comentarios: 'Identificador de archivo.' }];
  outputData = [];
  errors     = [{ Código: '1030711', Descripción: 'No se recuperó informacion para el identificador de archivo recibido.' }, { Código: '1030727', Descripción: 'Solo se pueden detener ordenes autorizadas.' }, { Código: '1030728', Descripción: 'No se recuperaron ordenes para el archivo recibido.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.DetenerArchivo>
         <bts:Btinreq>
            <bts:Device>001</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:archivoId>77</bts:archivoId>
      </bts:BTCASHManagement.DetenerArchivo>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?DetenerArchivo=\' \
  -H \'cache-control: no-cache\' \
  -H \'Content-Type: application/json\' \
  -H \'Postman-Token: a3abeef5-c6e8-489a-a545-f8cd71ab0d0b,96462f7f-a32a-4d49-8f49-57e1403cfd0a\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "archivoId": "103"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.DetenerArchivoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>001</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1e39d33c824A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>7171</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCASHManagement.DetenerArchivo</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-04-24</Fecha>
            <Hora>15:12:08</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.DetenerArchivoResponse>
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
        "Numero": 7172,
        "Estado": "OK",
        "Servicio": "BTCASHManagement.DetenerArchivo",
        "Requerimiento": "1",
        "Fecha": "2019-04-24",
        "Hora": "15:13:38",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
