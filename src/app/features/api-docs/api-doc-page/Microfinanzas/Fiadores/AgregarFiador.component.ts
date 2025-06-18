import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarFiador',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarFiadorComponent1750268696397 {
  pageTitle        = 'Agregar Fiador';
  description      = `Método para agregar un fiador a una solicitud de crédito individual.`;
  pubName    = 'BTMicrofinanzas.AgregarFiador';
  programa   = 'RBTPG412';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador de instancia Workflow.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente fiador.' }, { Nombre: 'tipoFiador', Tipo: 'Short', Comentarios: '[Hidden: Identificador del tipo de fiador].' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de solicitud.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador de cliente' }, { Codigo: '30011', Descripcion: 'El número de solicitud ingresado no existe.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.AgregarFiador>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>419385365CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:solicitudUId>10856</bts:solicitudUId>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTMicrofinanzas.AgregarFiador>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?AgregarFiador \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
        "bts:solicitudUId": "10856",
        "bts:clienteUId": "4"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.AgregarFiadorResponse>
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
            <Servicio>BTMicrofinanzas.AgregarFiador</Servicio>
            <Fecha>2019-09-12</Fecha>
            <Hora>11:25:54</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>144</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.AgregarFiadorResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTMicrofinanzas.AgregarFiador",
          "Fecha": "2019-09-12",
          "Hora": "11:25:54",
          "Requerimiento": "95",
          "Numero": "144",
          "Estado": "OK"
        }
}\'` }
  };

  structuredTypes = [];
}
