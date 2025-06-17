import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerCuentasdeAhorroSaldoDisponible',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCuentasdeAhorroSaldoDisponibleComponent {
  pageTitle = 'Obtener Cuentas de Ahorro (Saldo Disponible)';
  description = `Metodo para obtener los productos de cuenta de ahorro que tiene contratado un cliente, junto con su saldo disponible.`;
  pubName    = 'BTClientes.ObtenerCuentasAhorroSD';
  programa   = 'RBTPG083';
  scope      = 'Global';

  

  hasBackendConfig  = true;
  backendText       = `Se pueden parametrizar modulos adicionales a incluir ingresando en la guia especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :-----------  
Correlativo 1 | 2
Correlativo 2 | 1 
Valor especifico 1 | Identificador del modulo a incluir. 

Se pueden parametrizar tipos de operacion a excluir ingresando en la guia especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :-----------  
Correlativo 1 | 1 
Correlativo 2 | 2 
Valor especifico 1 | Modulo del tipo de operacion a excluir. 
Valor especifico 2 | Tipo de operacion a excluir.	 

:::`;
  backendConfig     = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }];
  outputData = [{ Nombre: 'sdtProductosPasivos', Tipo: '[sBTProductoPasivo](#sbtproductopasivo)', Comentarios: 'Listado de cajas de ahorro.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recupero la cuenta para el identificador.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerCuentasAhorroSD>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>161</bts:clienteUId>
      </bts:BTClientes.ObtenerCuentasAhorroSD>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerCuentasAhorroSD=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: af7c827f-03c0-79ac-a271-92fb1c13a461' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 161
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerCuentasAhorroSDResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>845cec4b724A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosPasivos>
            <sBTProductoPasivo>
               <operacionUId>281</operacionUId>
               <idOperacionFmt>000000011_001</idOperacionFmt>
               <idOperacionBT>0010100000021000000000000000001100001000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CA</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta>PESOS</subCuenta>
               <saldo>7433400.28</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>282</operacionUId>
               <idOperacionFmt>000000011_004</idOperacionFmt>
               <idOperacionBT>0010000100021222200000000000001100004000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre>
                  <moneda>USD</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CA</tipoProducto>
               <sucursal>Sucursal Beta</sucursal>
               <subCuenta/>
               <saldo>0.00</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
         </sdtProductosPasivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>779</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerCuentasAhorro</Servicio>
            <Fecha>2017-12-15</Fecha>
            <Requerimiento/>
            <Hora>11:41:09</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerCuentasAhorroSDResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtProductosPasivos": {
        "sBTProductoPasivo": [
            {
                "tipoProducto": "CA",
                "estado": "Normal",
                "subCuenta": "PESOS",
                "operacionUId": "281",
                "saldo": "7433400.28",
                "idOperacionFmt": "000000011_001",
                "idOperacionBT": "0010100000021000000000000000001100001000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física"
                },
                "sucursal": "Casa Matriz"
            },
            {
                "tipoProducto": "CA",
                "estado": "Normal",
                "subCuenta": "",
                "operacionUId": "282",
                "saldo": "0.00",
                "idOperacionFmt": "000000011_004",
                "idOperacionBT": "0010000100021222200000000000001100004000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "USD",
                    "productoUId": "0",
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física"
                },
                "sucursal": "Sucursal Beta"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "780",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerCuentasAhorro",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "11:42:37",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTProductoPasivo', fields: [{ Nombre: 'estado', Tipo: 'String', Comentarios: 'Descripcion de estado.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal (concatenacion de todos los conceptos claves de la operacion).' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenacion de algunos conceptos claves de la operacion).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo disponible de la CC.' }, { Nombre: 'subCuenta', Tipo: 'String', Comentarios: 'Nombre de la subcuenta.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: 'Tipo de producto.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
