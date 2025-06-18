import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ContratarProductoconAltadeFacultades',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarProductoconAltadeFacultadesComponent1750268695636 {
  pageTitle        = 'Contratar Producto con Alta de Facultades';
  description      = `Método para contratar un producto de cuenta corriente dando de alta las facultades.`;
  pubName    = 'BTCuentasCorrientes.ContratarConFacultades';
  programa   = 'RBTPG102';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'nombreSubCuenta', Tipo: 'String', Comentarios: 'Nombre de la cuenta cliente.' }, { Nombre: 'tipoIntegracion', Tipo: 'String', Comentarios: 'Tipo de integración  (B-Indistinta/C-Conjunta).' }];
  outputData = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para el identificador.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.ContratarConFacultades>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
         <bts:productoUId>1</bts:productoUId>
         <bts:nombreSubCuenta>C.C.</bts:nombreSubCuenta>
         <bts:tipoIntegracion>B</bts:tipoIntegracion>
      </bts:BTCuentasCorrientes.ContratarConFacultades>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ContratarConFacultades=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: b80d8c23-883d-589a-228b-4009ae6eba1c\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 4,
    "productoUId": 1,
    "nombreSubCuenta": "C.C.",
    "tipoIntegracion": "B"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.ContratarConFacultadesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <operacionUId>401</operacionUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>853</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.ContratarConFacultades</Servicio>
            <Fecha>2017-12-18</Fecha>
            <Requerimiento/>
            <Hora>10:33:16</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ContratarConFacultadesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": "402",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "855",
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.ContratarConFacultades",
        "Fecha": "2017-12-18",
        "Requerimiento": "",
        "Hora": "10:35:49",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
