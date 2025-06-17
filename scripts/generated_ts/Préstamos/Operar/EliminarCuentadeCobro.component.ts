import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-EliminarCuentadeCobro',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class EliminarCuentadeCobroComponent {
  pageTitle = 'Eliminar Cuenta de Cobro';
  description = `Metodo para eliminar una cuenta de cobro de un prestamo.`;
  pubName    = 'BTPrestamos.EliminarCuentaDeCobro';
  programa   = 'RBTPG133';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de prestamo.' }, { Nombre: 'operacionUId_cobro', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de la cuenta de cobro.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador unico de operacion de prestamo.' }, { Codigo: '30002', Descripcion: 'No se recupero la operacion para el identificador: [Numero de Identificador].' }, { Codigo: '30003', Descripcion: 'No se recibio el identificador unico de operacion de cobro.' }, { Codigo: '30004', Descripcion: 'No se recupero la operacion de cobro para el identificador: [Numero de Identificador].' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.EliminarCuentaDeCobro>
		<bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
         <bts:operacionUId_cobro>3</bts:operacionUId_cobro>
      </bts:BTPrestamos.EliminarCuentaDeCobro>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?EliminarCuentaDeCobro' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
		"operacionUId": 121,
		"operacionUId_cobro": 2
	}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.EliminarCuentaDeCobroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d2dc7b1654A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>105</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.EliminarCuentaDeCobro</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-04</Fecha>
            <Hora>18:19:52</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.EliminarCuentaDeCobroResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
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
        "Numero": "106",
        "Estado": "OK",
        "Servicio": "BTPrestamos.EliminarCuentaDeCobro",
        "Requerimiento": "1",
        "Fecha": "2018-05-04",
        "Hora": "18:22:19",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [];
}
