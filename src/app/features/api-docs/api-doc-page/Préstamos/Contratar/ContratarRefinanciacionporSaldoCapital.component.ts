import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ContratarRefinanciacionporSaldoCapital',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarRefinanciacionporSaldoCapitalComponent1751987199244 {
  pageTitle        = 'Contratar Refinanciación por Saldo Capital';
  description      = `Método para contratar un préstamo refinanciado, cancelando las operaciones indicadas en la simulación.`;
  pubName    = 'BTPrestamos.ContratarRefinanciacionSaldoCapital';
  programa   = 'RBTPG235';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `1) Definir la transacción de alta, teniendo en cuenta que: 

	- El préstamo se almacena en el preformato 1 para pfdid = cero. La diferencia entre deuda total y saldo capital se almacena en el importe 2 

	- La cuenta vista de acreditación se almacena en el preformato 2 para pfdid = cero 

	- Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal 

	- Las operaciones a cancelar se almacenan en el preformato 1 para pfdid > cero 

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T). 

3)	Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro. Ademas cargar en el Auxiliar Numérico el ordinal de baja de préstamo.  

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'refinanciacionId', Tipo: 'Long', Comentarios: 'Identificador de la refinanciación simulada.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'accion', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'REFIS\' para este método].' }, { Nombre: 'operacionUId_dif', Tipo: 'Long', Comentarios: 'Identificador único de operación de la cuenta vista de donde se cobrará la diferencia entre la deuda total de los préstamos a refinanciar y el capital del nuevo préstamo.' }, { Nombre: 'operacionUId_cobro', Tipo: 'Long', Comentarios: 'Identificador único de operación de la cuenta vista de donde se cobrará el préstamo.' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento [Asiento].' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de refinanciación.' }, { Código: '30002', Descripción: 'El identificador de refinanciación no es válido.' }, { Código: '30003', Descripción: 'No se recibió el identificador de operación de la cuenta vista.' }, { Código: '30004', Descripción: 'No se recuperó la cuenta vista para el identificador: [Número de Identificador].' }, { Código: '30005', Descripción: 'No se recibió el identificador de operación de la instrucción de cobro.' }, { Código: '30006', Descripción: 'No se recuperó la operación para el identificador: [Número de Identificador].' }, { Código: '30007', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30008', Descripción: 'No se recuperó la cuenta para el identificador de cliente: [Número de Identificador].' }, { Código: '30009', Descripción: 'El préstamo no pertenece al cliente.' }, { Código: '30010', Descripción: 'La operación de cobro no pertenece al cliente.' }, { Código: '30011', Descripción: 'La operación de cobro no pertenece al cliente.' }, { Código: '30012', Descripción: 'No se recuperó la operación para el identificador [Número de Identificador].' }, { Código: '30013', Descripción: 'No se recuperó la operación simulada con identificador.' }, { Código: '40001', Descripción: 'en adelante, errores de contabilización.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ContratarRefinanciacionSaldoCapital>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>18bdf2801e4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:refinanciacionId>122</bts:refinanciacionId>
         <bts:clienteUId>221</bts:clienteUId>
         <bts:operacionUId_dif>211</bts:operacionUId_dif>
         <bts:operacionUId_cobro>211</bts:operacionUId_cobro>
      </bts:BTPrestamos.ContratarRefinanciacionSaldoCapital>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ContratarRefinanciacionSaldoCapital\' \
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
	"refinanciacionId":"122",
	"clienteUId":"221",
	"operacionUId_dif":"211",
	"operacionUId_cobro":"211",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ContratarRefinanciacionSaldoCapitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <Servicio>BTPrestamos.ContratarRefinanciacionSaldoCapital</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Requerimiento/>
            <Hora>15:46:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ContratarRefinanciacionSaldoCapitalResponse>
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
    "movimientoUId": "1536",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "755",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ContratarRefinanciacionSaldoCapital",
        "Fecha": "2017-11-30",
        "Requerimiento": "",
        "Hora": "13:47:48",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
