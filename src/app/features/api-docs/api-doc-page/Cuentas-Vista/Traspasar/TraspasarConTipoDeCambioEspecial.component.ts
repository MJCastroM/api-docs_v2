import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-TraspasarConTipoDeCambioEspecial',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class TraspasarConTipoDeCambioEspecialComponent1751987197309 {
  pageTitle        = 'Traspasar con Tipo de Cambio Especial';
  description      = `Método para realizar un traspaso entre cuentas de diferente moneda ingresando un tipo de cambio especial.`;
  pubName    = 'BTCuentasVista.TraspasarConTipoDeCambioEspecial ';
  programa   = 'RBTPG569';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `1) Definir la transacción de compra-venta, teniendo en cuenta que:

	- La cuenta vista origen se almacena en el preformato 1.
	
	- La cuenta vista destino en el preformato 2.
	
	- El importe a transferir y el tipo de cambio se almacenan en el preformato 1.
	
	- Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.
	
2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T):

	- Se debe indicar los ordinales donde se encuentra definida la cuenta origen y destino.
 
:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'sdtTraspaso', Tipo: '[sBTTraspasoMoneda](#sbttraspasomoneda)', Comentarios: 'Datos de traspaso.' }, { Nombre: 'tipoCambioEspecial', Tipo: 'Short', Comentarios: 'Identificador del tipo de cambio especial a aplicar.' }, { Nombre: 'modoCambio', Tipo: 'String', Comentarios: 'Modo del tipo de cambio a aplicar (\'CC\': Compra cierre, \'VC\': Venta cierre).' }];
  outputData = [{ Nombre: 'sdtResultadoTraspaso', Tipo: '[sBTResultadoTraspaso](#sbtresultadotraspaso)', Comentarios: 'Resultado del traspaso.' }];
  errors     = [{ Código: '31001', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '31002', Descripción: 'No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].' }, { Código: '31003', Descripción: 'No se recibió el identificador único de operación de origen.' }, { Código: '31004', Descripción: 'No se recibió el identificador único de operación de destino.' }, { Código: '31011', Descripción: 'La operación origen y operación destino no pueden ser iguales.' }, { Código: '31007', Descripción: 'No se recuperó la operación origen para el Identificador: [Número de identificador].' }, { Código: '31008', Descripción: 'La operación origen no pertenece al cliente.' }, { Código: '31009', Descripción: 'No se recuperó la operación destino para el Identificador: [Número de identificador].' }, { Código: '31005', Descripción: 'Debe ingresar importe.' }, { Código: '31012', Descripción: 'Debe ingresar importe a debitar o a acreditar, pero no ambos.' }, { Código: '30001', Descripción: 'Moneda Origen y Moneda Destino no pueden ser la misma.' }, { Código: '30002', Descripción: 'Debe ingresar tipo de cotización.' }, { Código: '30003', Descripción: 'El tipo de cotización ingresado no es correcto.' }, { Código: '30100', Descripción: 'Error en la contabilización.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
    <soapenv:Header/>
    <soapenv:Body>
        <bts:BTCuentasVista.TraspasarConTipoDeCambioEspecial>
            <bts:Btinreq>
                <bts:Device>AV</bts:Device>
                <bts:Usuario>MINSTALADOR</bts:Usuario>
                <bts:Requerimiento></bts:Requerimiento>
                <bts:Canal>BTDIGITAL</bts:Canal>
                <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
            </bts:Btinreq>
            <bts:clienteUId>21</bts:clienteUId>
            <bts:sdtTraspaso>
                <bts:operacionUIdOrigen>281</bts:operacionUIdOrigen>
                <bts:operacionUIdDestino>282</bts:operacionUIdDestino>
                <bts:monedaId></bts:monedaId>
                <bts:concepto>Traspaso</bts:concepto>
                <bts:importeDebito>5000</bts:importeDebito>
                <bts:importeCredito>500</bts:importeCredito>
            </bts:sdtTraspaso>
			<tipoCambioEspecial>1</tipoCambioEspecial>
			<modoCambio>CC</modoCambio>
        </bts:BTCuentasVista.TraspasarConTipoDeCambioEspecial>
    </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?TraspasarConTipoDeCambioEspecial \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
    "Btinreq": {
        "Requerimiento": "1",
        "Device": "GP",
        "Token": "b4ae55b35c4A8B5C60A82434",
        "Usuario": "MINSTALADOR",
        "Canal": "BTDIGITAL"
    },
    "clienteUId": "21",
    "sdtTraspaso":
    {
        "operacionUIdOrigen": "281",
        "importeDebito": "5000",
        "importeCredito": "500",
        "operacionUIdDestino": "282",
        "monedaId": "",
        "concepto": "Traspaso",
    },
	"tipoCambioEspecial": 1,
	"modoCambio": "CC"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAPENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAPENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Body>
        <BTCuentasVista.TraspasarConTipoDeCambioEspecialResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
            <Btinreq>
                <Device>AV</Device>
                <Usuario>MINSTALADOR</Usuario>
                <Requerimiento/>
                <Canal>BTDIGITAL</Canal>
                <Token>268b6d23eb4A8B5C60A82434</Token>
            </Btinreq>
            <sdtResultadoTraspaso>
                <operacionUIdOrigen>281</operacionUIdOrigen>
                <idMovimiento>0010000100050007003720180706</idMovimiento>
                <operacionUIdDestino>282</operacionUIdDestino>
                <saldoOperacionOrigen>7432900.28</saldoOperacionOrigen>
                <movimientoUId>141</movimientoUId>
            </sdtResultadoTraspaso>
            <Erroresnegocio></Erroresnegocio>
            <Btoutreq>
                <Numero>864</Numero>
                <Estado>OK</Estado>
                <Servicio>BTCuentasVista.TraspasarConTipoDeCambioEspecial</Servicio>
                <Requerimiento/>
                <Fecha>2017-12-18</Fecha>
                <Hora>17:07:19</Hora>
                <Canal>BTDIGITAL</Canal>
            </Btoutreq>
        </BTCuentasVista.TraspasarConTipoDeCambioEspecialResponse>
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
    "sdtResultadoTraspaso":
    {
        "operacionUIdOrigen": "281",
        "idMovimiento": "0010000100050007003720180706",
        "operacionUIdDestino": "282",
        "saldoOperacionOrigen": "7432900.28",
        "movimientoUId": "141",
    },
    "Btoutreq": {
        "Numero": "103",
        "Estado": "OK",
        "Servicio": "BTCuentasVista.TraspasarConTipoDeCambioEspecial",
        "Requerimiento": "1",
        "Fecha": "2019-07-22",
        "Canal": "BTDIGITAL",
        "Hora": "16:00:37"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTTraspasoMoneda', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto del Traspaso' }, { Nombre: 'importeCredito', Tipo: 'Double', Comentarios: 'Importe a acreditar.' }, { Nombre: 'importeDebito', Tipo: 'Double', Comentarios: 'Importe a debitar.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de Moneda.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador de operación de origen del traspaso.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador de operación de destino del traspaso.' }] }];
}
