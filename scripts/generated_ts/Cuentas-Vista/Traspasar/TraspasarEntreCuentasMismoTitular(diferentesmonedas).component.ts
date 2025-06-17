import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-TraspasarEntreCuentasMismoTitulardiferentesmonedas',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent {
  pageTitle = 'Traspasar Entre Cuentas Mismo Titular (diferentes monedas)';
  description = `Metodo para realizar un traspaso entre cuentas de diferente moneda cuyo titular sea la misma persona.`;
  pubName    = 'BTCuentasVista.TraspasarMismoTitularDiferentesMonedas';
  programa   = 'RBTPG272';
  scope      = 'Global';

  

  hasBackendConfig  = true;
  backendText       = `1) Definir la transaccion de traspaso, teniendo en cuenta que:

   - La cuenta vista origen se almacena en el preformato 1.

   - La cuenta vista destino en el preformato 2.

   - El importe a transferir se almacena en el preformato 1.

   - Los correlativos del subordinal deben corresponderse con los modulos de los productos definidos en el subordinal.

2) Configurar la transaccion parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T):

   - Se debe indicar los ordinales donde se encuentra definida la cuenta origen y destino.

:::`;
  backendConfig     = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador de cliente.' }, { Nombre: 'sdtTraspaso', Tipo: '[sBTTraspaso](#sbttraspaso)', Comentarios: 'Datos del Traspaso.' }];
  outputData = [{ Nombre: 'sdtResultadoTraspaso', Tipo: '[sBTResultadoTraspasoDatos](#sbtresultadotraspasodatos)', Comentarios: 'Resultado del traspaso.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador unico de operacion de origen.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador unico de operacion de destino.' }, { Codigo: '30004', Descripcion: 'No se recupero la operacion origen para el Identificador: [Numero de identificador].' }, { Codigo: '30006', Descripcion: 'No se recibio el identificador de persona.' }, { Codigo: '30007', Descripcion: 'Debe ingresar importe a acreditar.' }, { Codigo: '30008', Descripcion: 'No se recupero la operacion destino para el Identificador: [Numero de identificador].' }, { Codigo: '30009', Descripcion: 'Debe ingresar importe a debitar.' }, { Codigo: '31003', Descripcion: 'No existe registro para el identificador unico.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
    <soapenv:Header/>
    <soapenv:Body>
        <bts:BTCuentasVista.TraspasarMismoTitularDiferentesMonedas>
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
        </bts:BTCuentasVista.TraspasarMismoTitularDiferentesMonedas>
    </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?TraspasarMismoTitularDiferentesMonedas \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
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
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAPENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAPENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Body>
        <BTCuentasVista.TraspasarMismoTitularDiferentesMonedasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
                <Servicio>BTCuentasVista.TraspasarMismoTitularDiferentesMonedas</Servicio>
                <Requerimiento/>
                <Fecha>2017-12-18</Fecha>
                <Hora>17:07:19</Hora>
                <Canal>BTDIGITAL</Canal>
            </Btoutreq>
        </BTCuentasVista.TraspasarMismoTitularDiferentesMonedasResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
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
        "Servicio": "BTCuentasVista.TraspasarMismoTitularDiferentesMonedas",
        "Requerimiento": "1",
        "Fecha": "2019-07-22",
        "Canal": "BTDIGITAL",
        "Hora": "16:00:37"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTTraspaso', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto del Traspaso.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe del Movimiento.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de Moneda.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador de operacion de destino del traspaso.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador de operacion de origen del traspaso.' }] }, { typeName: 'sBTResultadoTraspasoDatos', fields: [{ Nombre: 'idMovimiento', Tipo: 'String', Comentarios: 'Identificador de Movimiento String.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador de Movimiento.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador de operacion de destino del traspaso.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador de operacion de origen del traspaso.' }, { Nombre: 'saldoOperacionOrigen', Tipo: 'Double', Comentarios: 'Saldo Actual de operacion de origen.' }] }];
}
