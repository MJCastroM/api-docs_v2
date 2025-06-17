import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ContratarAmpliacin',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarAmpliacionComponent {
  pageTitle = 'Contratar Ampliacion';
  description = `Metodo para contratar un prestamo ampliado, cancelando las operaciones indicadas en la simulacion.`;
  pubName    = 'BTPrestamos.ContratarAmpliacion';
  programa   = 'RBTPG235';
  scope      = 'Global';

  

  hasBackendConfig  = true;
  backendText       = `1) Definir la transaccion de alta, teniendo en cuenta que: 

   - El prestamo se almacena en el preformato 1 para pfdid = cero. 

	- La cuenta vista de acreditacion se almacena en el preformato 2 para pfdid = cero. 

	- Los correlativos del subordinal deben corresponderse con los modulos de los productos definidos en el subordinal. 

	- Las operaciones a cancelar se almacenan en el preformato 1 para pfdid > cero. 

2) Configurar la transaccion parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T). 

3) Se debe indicar los ordinales donde se encuentra definido el prestamo y la cuenta de cobro. Ademas cargar en el Auxiliar Numerico el ordinal de baja de prestamo.  

:::`;
  backendConfig     = [];

  inputData  = [{ Nombre: 'ampliacionId', Tipo: 'Long', Comentarios: 'Identificador de la ampliacion simulada.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'accion', Tipo: 'String', Comentarios: '[Hidden: Valor fijo 'AMPLI' para este metodo].' }, { Nombre: 'operacionUId_desembolso', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de la cuenta vista donde se acreditara el monto solicitado.' }, { Nombre: 'operacionUId_cobro', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de la cuenta vista de donde se cobrara el prestamo.' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador unico del movimiento [Asiento].' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de ampliacion.' }, { Codigo: '30002', Descripcion: 'El identificador de ampliacion no es valido.' }, { Codigo: '30003', Descripcion: 'No se recibio el identificador de oper. de la cuenta vista.' }, { Codigo: '30004', Descripcion: 'No se recupero la cuenta vista para el identificador: [Numero de Identificador].' }, { Codigo: '30005', Descripcion: 'No se recibio el identificador de oper. de la intruccion de cobro.' }, { Codigo: '30006', Descripcion: 'No se recupero la operacion para el identificador: [Numero de Identificador].' }, { Codigo: '30007', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30008', Descripcion: 'No se recupero la cuenta para el identificador de cliente: [Numero de Identificador].' }, { Codigo: '30009', Descripcion: 'El prestamo no pertenece al cliente.' }, { Codigo: '30010', Descripcion: 'La operacion de cobro no pertenece al cliente.' }, { Codigo: '30011', Descripcion: 'La operacion de cobro no pertenece al cliente.' }, { Codigo: '30012', Descripcion: 'No se recupero la operacion para el identificador: [Numero de Identificador].' }, { Codigo: '30013', Descripcion: 'No se recupero la operacion simulada con identificador.' }, { Codigo: '40001', Descripcion: 'en adelante, errores de contabilizacion.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ContratarAmpliacion>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>18bdf2801e4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:ampliacionId>122</bts:ampliacionId>
         <bts:clienteUId>221</bts:clienteUId>
         <bts:operacionUId_desembolso>211</bts:operacionUId_desembolso>
         <bts:operacionUId_cobro>211</bts:operacionUId_cobro>
      </bts:BTPrestamos.ContratarAmpliacion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ContratarAmpliacion' \
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
	"ampliacionId":"122",
	"clienteUId":"221",
	"operacionUId_desembolso":"211",
	"operacionUId_cobro":"211",
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ContratarAmpliacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>18bdf2801e4A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>1536</movimientoUId>
         <Btoutreq>
            <Numero>4418</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ContratarAmpliacion</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Requerimiento/>
            <Hora>15:46:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ContratarAmpliacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "movimientoUId": "1536",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "755",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ContratarAmpliacion",
        "Fecha": "2017-11-30",
        "Requerimiento": "",
        "Hora": "13:47:48",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [];
}
