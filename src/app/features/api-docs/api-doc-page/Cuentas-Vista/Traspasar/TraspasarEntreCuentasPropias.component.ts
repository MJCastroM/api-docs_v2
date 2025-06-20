import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-TraspasarEntreCuentasPropias',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class TraspasarEntreCuentasPropiasComponent1750272791233 {
  pageTitle        = 'Traspasar Entre Cuentas Propias';
  description      = `Método para realizar un traspaso entre cuentas propias.`;
  pubName    = 'BTCuentasVista.TraspasarEntreCuentasPropias';
  programa   = 'RBTPG031';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `1) Definir la transacción de traspaso, teniendo en cuenta que:

   - La cuenta vista origen se almacena en el preformato 1.

   - La cuenta vista destino en el preformato 2.

   - El importe a transferir se almacena en el preformato 1.

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T):

   - Se debe indicar los ordinales donde se encuentra definida la cuenta origen y destino.

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'sdtTraspaso', Tipo: '[sBTTraspaso](#sbttraspaso)', Comentarios: 'Datos del traspaso.' }];
  outputData = [{ Nombre: 'sdtResultadoTraspaso', Tipo: '[sBTResultadoTraspaso](#sbtresultadotraspaso)', Comentarios: 'Datos resultado del traspaso.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de operación de origen.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador único de operación de destino.' }, { Codigo: '30003', Descripcion: 'Debe ingresar importe.' }, { Codigo: '30004', Descripcion: 'No se recuperó la operación origen para el Identificador: [Número de identificador]' }, { Codigo: '30005', Descripcion: 'No se recuperó la operación destino para el Identificador: [Número de identificador]' }, { Codigo: '30006', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30007', Descripcion: 'No se recuperó la cuenta para el Identificador de cliente: [Número de identificador]' }, { Codigo: '30008', Descripcion: 'La cuenta destino no pertenece al cliente [Número de cuenta].' }, { Codigo: '30009', Descripcion: 'La operación origen no pertenece al cliente.' }, { Codigo: '51005', Descripcion: 'La moneda del traspaso debe coincidir con la moneda de la operación origen' }, { Codigo: '51008', Descripcion: 'Error de configuración: No se definió transacción a ejecutar.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.TraspasarEntreCuentasPropias>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtTraspaso>
            <bts:operacionUIdOrigen>281</bts:operacionUIdOrigen>
            <bts:importe>500</bts:importe>
            <bts:operacionUIdDestino>282</bts:operacionUIdDestino>
            <bts:monedaId></bts:monedaId>
            <bts:concepto>Traspaso</bts:concepto>
         </bts:sdtTraspaso>
      </bts:BTCuentasVista.TraspasarEntreCuentasPropias>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?TraspasarEntreCuentasPropias=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: fde8ae30-8752-c0fe-cf77-f8761a5ddcff\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"sdtTraspaso": {
		"operacionUIdOrigen": 281,
		"operacionUIdDestino": 282,
		"importe": 500,
		"concepto": "Traspaso"
	}      
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.TraspasarEntreCuentasPropiasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtResultadoTraspaso>
            <operacionUIdOrigen>281</operacionUIdOrigen>
            <idMovimiento>00100001000500075000000003720180706</idMovimiento>
            <operacionUIdDestino>282</operacionUIdDestino>
            <saldoOperacionOrigen>7432900.28</saldoOperacionOrigen>
            <movimientoUId>141</movimientoUId>
         </sdtResultadoTraspaso>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>864</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.TraspasarEntreCuentasPropias</Servicio>
            <Requerimiento/>
            <Fecha>2017-12-18</Fecha>
            <Hora>17:07:19</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.TraspasarEntreCuentasPropiasResponse>
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
    "sdtResultadoTraspaso": {
        "operacionUIdOrigen": "281",
        "idMovimiento": "00100001000500075000000003820180809",
        "operacionUIdDestino": "282",
        "saldoOperacionOrigen": "7432400.28",
        "movimientoUId": "142"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "868",
        "Estado": "OK",
        "Servicio": "BTCuentasVista.TraspasarEntreCuentasPropias",
        "Requerimiento": "",
        "Fecha": "2017-12-18",
        "Hora": "17:15:28",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
