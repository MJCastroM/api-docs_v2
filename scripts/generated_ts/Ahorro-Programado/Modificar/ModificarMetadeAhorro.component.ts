import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ModificarMetadeAhorro',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ModificarMetadeAhorroComponent {
  // Cabecera e info-card
  pageTitle = 'Modificar Meta de Ahorro';
  description = `Metodo para modificar la meta de ahorro.`;
  pubName    = 'BTAhorroProgramado.ModificarMetaDeAhorro';
  programa   = 'RBTPG117';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId', 'ahorroUId', 'motivoAhorro', 'montoMetaAhorro', 'fechaMetaAhorro'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'ahorroUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de ahorro.' }, { Nombre: 'motivoAhorro', Tipo: 'String', Comentarios: 'Descripcion del motivo por el cual se ahorra [Ingreso opcional].' }, { Nombre: 'montoMetaAhorro', Tipo: 'Double', Comentarios: 'Monto propuesto como meta para el ahorro [Discriminante el ingreso segun si se definio "Meta de ahorro por monto" o "Meta de ahorro por fecha"].' }, { Nombre: 'fechaMetaAhorro', Tipo: 'Date', Comentarios: 'Fecha propuesta como meta para el ahorro [Discriminante el ingreso segun si se definio "Meta de ahorro por monto" o "Meta de ahorro por fecha"].' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '30002', '30003', '30004', '30005', '30006', '40001', '40002', '40003'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador del ahorro.' }, { Codigo: '30003', Descripcion: 'El monto indicado no puede ser menor que cero.' }, { Codigo: '30004', Descripcion: 'No se recupero la cuenta para el identificador de cliente.' }, { Codigo: '30005', Descripcion: 'No se recupero la operacion del ahorro para el identificador: [Numero de identificador].' }, { Codigo: '30006', Descripcion: 'El ahorro no pertenece al identificador del cliente: [Numero de identificador].' }, { Codigo: '40001', Descripcion: 'No existe la operacion de ahorro seleccionada.' }, { Codigo: '40002', Descripcion: 'El producto seleccionado no es un producto con meta de ahorro.' }, { Codigo: '40003', Descripcion: 'La fecha seleccionada como meta de ahorro no puede ser inferior a la del dia.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTAhorroProgramado.ModificarMetaDeAhorro>
		<bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b3c6f2d0e34A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>81</bts:clienteUId>
         <bts:ahorroUId>141</bts:ahorroUId>
         <bts:motivoAhorro>Mi ahorro 1</bts:motivoAhorro>
         <bts:montoMetaAhorro>15000</bts:montoMetaAhorro>
         <bts:fechaMetaAhorro></bts:fechaMetaAhorro>
      </bts:BTAhorroProgramado.ModificarMetaDeAhorro>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ModificarMetaDeAhorro' \
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
      "clienteUId": 81,
      "ahorroUId": 141,
      "motivoAhorro": "Mi ahorro 1",
      "montoMetaAhorro": 15000,  
      "fechaMetaAhorro": "0001-01-01"
	}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTAhorroProgramado.ModificarMetaDeAhorroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b3c6f2d0e34A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>151</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ModificarMetaDeAhorro</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-07</Fecha>
            <Hora>13:26:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ModificarMetaDeAhorroResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
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
        "Numero": "152",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ModificarMetaDeAhorro",
        "Requerimiento": "1",
        "Fecha": "2018-05-07",
        "Hora": "13:30:54",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
