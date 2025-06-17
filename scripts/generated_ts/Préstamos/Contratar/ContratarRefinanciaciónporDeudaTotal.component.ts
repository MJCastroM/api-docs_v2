import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ContratarRefinanciacinporDeudaTotal',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarRefinanciacionporDeudaTotalComponent {
  // Cabecera e info-card
  pageTitle = 'Contratar Refinanciacion por Deuda Total';
  description = `Metodo para contratar un prestamo refinanciado, cancelando las operaciones indicadas en la simulacion.`;
  pubName    = 'BTPrestamos.ContratarRefinanciacionDeudaTotal';
  programa   = 'RBTPG235';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['refinanciacionId', 'clienteUId', 'accion', 'operacionUId_cobro'];
  inputData  = [{ Nombre: 'refinanciacionId', Tipo: 'Long', Comentarios: 'Identificador de la refinanciacion simulada.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'accion', Tipo: 'String', Comentarios: '[Hidden: Valor fijo 'REFIT' para este metodo].' }, { Nombre: 'operacionUId_cobro', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de la cuenta vista de donde se cobrara el prestamo.' }];
  outputCols = ['movimientoUId'];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador unico de movimiento [Asiento].' }];
  errorCols  = ['30001', '30002', '30003', '30004', '30005', '30006', '30007', '30008', '30009', '30010', '30011', '30012', '30013', '40001'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de refinanciacion.' }, { Codigo: '30002', Descripcion: 'El identificador de refinanciacion no es valido.' }, { Codigo: '30003', Descripcion: 'No se recibio el identificador de operacion de la cuenta vista.' }, { Codigo: '30004', Descripcion: 'No se recupero la cuenta vista para el identificador: [Numero de Identificador].' }, { Codigo: '30005', Descripcion: 'No se recibio el identificador de operacion de la instruccion de cobro.' }, { Codigo: '30006', Descripcion: 'No se recupero la operacion para el identificador: [Numero de Identificador].' }, { Codigo: '30007', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30008', Descripcion: 'No se recupero la cuenta para el identificador de cliente: [Numero de Identificador].' }, { Codigo: '30009', Descripcion: 'El prestamo no pertenece al cliente.' }, { Codigo: '30010', Descripcion: 'La operacion de cobro no pertenece al cliente.' }, { Codigo: '30011', Descripcion: 'La operacion de cobro no pertenece al cliente.' }, { Codigo: '30012', Descripcion: 'No se recupero la operacion para el identificador [Numero de Identificador].' }, { Codigo: '30013', Descripcion: 'No se recupero la operacion simulada con identificador .' }, { Codigo: '40001', Descripcion: 'en adelante, errores de contabilizacion.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ContratarRefinanciacionDeudaTotal>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>18bdf2801e4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:refinanciacionId>122</bts:refinanciacionId>
         <bts:clienteUId>221</bts:clienteUId>
         <bts:operacionUId_cobro>211</bts:operacionUId_cobro>
      </bts:BTPrestamos.ContratarRefinanciacionDeudaTotal>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ContratarRefinanciacionDeudaTotal' \
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
	"refinanciacionId":"122",
	"clienteUId":"221",
	"operacionUId_cobro":"211",
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ContratarRefinanciacionDeudaTotalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <Servicio>BTPrestamos.ContratarRefinanciacionDeudaTotal</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Requerimiento/>
            <Hora>15:46:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ContratarRefinanciacionDeudaTotalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
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
        "Servicio": "BTPrestamos.ContratarRefinanciacionDeudaTotal",
        "Fecha": "2017-11-30",
        "Requerimiento": "",
        "Hora": "13:47:48",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
