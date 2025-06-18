import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarCuentadeCobro',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarCuentadeCobroComponent1750258525552 {
  pageTitle        = 'Agregar Cuenta de Cobro';
  description      = `Método para agregar una cuenta de cobro de un préstamo.`;
  pubName          = 'Agregar Cuenta de Cobro';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación del préstamo.' }, { Nombre: 'operacionUId_cobro', Tipo: 'Long', Comentarios: 'Identificador único de operación de la cuenta de cobro.' }, { Nombre: 'permite_sobregirar', Tipo: 'String', Comentarios: 'Define si la cuenta de cobro puede sobregirar o no (S/N).' }, { Nombre: 'permite_pago_parcial', Tipo: 'String', Comentarios: 'Define si se permiten pagos parciales de la cuenta de cobro (S/N).' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de operación de Préstamo.' }, { Codigo: '30002', Descripcion: 'No se recuperó la operación para el Identificador: [Número de Identificador].' }, { Codigo: '30003', Descripcion: 'No se recibió el identificador único de operación de cobro.' }, { Codigo: '30004', Descripcion: 'No se recuperó la operación de cobro para el Identificador: [Número de Identificador].' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.AgregarCuentaDeCobro>
		<bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
         <bts:operacionUId_cobro>3</bts:operacionUId_cobro>
         <bts:permite_sobregirar>S</bts:permite_sobregirar>
         <bts:permite_pago_parcial>S</bts:permite_pago_parcial>
      </bts:BTPrestamos.AgregarCuentaDeCobro>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?AgregarCuentaDeCobro\' \
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
	"operacionUId": 121,
	"operacionUId_cobro": 2,
	"permite_sobregirar": "S",
	"permite_pago_parcial": "S"
	}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.AgregarCuentaDeCobroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d2dc7b1654A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>100</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.AgregarCuentaDeCobro</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-04</Fecha>
            <Hora>18:04:42</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.AgregarCuentaDeCobroResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
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
        "Numero": "101",
        "Estado": "OK",
        "Servicio": "BTPrestamos.AgregarCuentaDeCobro",
        "Requerimiento": "1",
        "Fecha": "2018-05-04",
        "Hora": "18:07:15",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
