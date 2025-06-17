import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-EliminarFiador',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class EliminarFiadorComponent {
  pageTitle = 'Eliminar Fiador';
  description = `Metodo para eliminar un fiador de una solicitud de credito individual.`;
  pubName    = 'BTMicrofinanzas.EliminarFiador';
  programa   = 'RBTPG413';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador de instancia Workflow.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico del cliente fiador.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de solicitud.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30003', Descripcion: 'No se recupero la cuenta para el Identificador de cliente' }, { Codigo: '30011', Descripcion: 'El numero de solicitud ingresado no existe.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.EliminarFiador>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>419385365CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:solicitudUId>10856</bts:solicitudUId>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTMicrofinanzas.EliminarFiador>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?EliminarFiador \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "solicitudUId": "10856",
    "clienteUId": "4"
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.EliminarFiadorResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>419385365CD285A89A23FBEE</Token>
            <Device>GP</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.EliminarFiador</Servicio>
            <Fecha>2019-09-12</Fecha>
            <Hora>11:51:14</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>145</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.EliminarFiadorResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTMicrofinanzas.EliminarFiador",
          "Fecha": "2019-09-12",
          "Hora": "11:51:14",
          "Requerimiento": "95",
          "Numero": "145",
          "Estado": "OK"
        }
}'` }
  };

  structuredTypes = [];
}
