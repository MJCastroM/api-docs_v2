import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerCuentasCorrientesSaldoDisponible',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCuentasCorrientesSaldoDisponibleComponent1751987196191 {
  pageTitle        = 'Obtener Cuentas Corrientes (Saldo Disponible)';
  description      = `Método para obtener los productos de cuenta corriente que tiene contratado un cliente, junto con su saldo disponible.`;
  pubName    = 'BTClientes.ObtenerCuentasCorrientesSD';
  programa   = 'RBTPG084';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :-----------  
Correlativo 1 | 1 
Correlativo 2 | 1 
Valor específico 1 | Identificador del módulo a incluir. 

Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :-----------  
Correlativo 1 | 1 
Correlativo 2 | 2 
Valor específico 1 | Módulo del tipo de operación a excluir. 
Valor específico 2 | Tipo de operación a excluir.	 

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [{ Nombre: 'sdtProductosPasivos', Tipo: '[sBTProductoPasivo](#sbtproductopasivo)', Comentarios: 'Listado de cuentas corrientes.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30002', Descripción: 'No se recuperó la cuenta para el Identificador.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerCuentasCorrientes>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTClientes.ObtenerCuentasCorrientes>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerCuentasCorrientes=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: d1963f3a-531c-6f87-db06-4ea6bee01768\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 4
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerCuentasCorrientesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>845cec4b724A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosPasivos>
            <sBTProductoPasivo>
               <operacionUId>9</operacionUId>
               <idOperacionFmt>000000027_001</idOperacionFmt>
               <idOperacionBT>0010100000020000000000000000002700001000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CC</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta>PESOS</subCuenta>
               <saldo>26675306.42</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>81</operacionUId>
               <idOperacionFmt>000000027_004</idOperacionFmt>
               <idOperacionBT>0010100000020000000000000000002700004000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CC</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta>Prueba CC</subCuenta>
               <saldo>4500.00</saldo>
               <estado>Cobro Administrativo</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>61</operacionUId>
               <idOperacionFmt>000000027_003</idOperacionFmt>
               <idOperacionBT>0010100000020000000000000000002700003000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CC</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta/>
               <saldo>120000.00</saldo>
               <estado>Cobro Administrativo</estado>
            </sBTProductoPasivo>
         </sdtProductosPasivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>781</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerCuentasCorrientes</Servicio>
            <Fecha>2017-12-15</Fecha>
            <Requerimiento/>
            <Hora>12:58:50</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerCuentasCorrientesSDResponse>
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
    "sdtProductosPasivos": {
        "sBTProductoPasivo": [
            {
                "tipoProducto": "CC",
                "estado": "Normal",
                "subCuenta": "PESOS",
                "operacionUId": "9",
                "saldo": "26675306.42",
                "idOperacionFmt": "000000027_001",
                "idOperacionBT": "0010100000020000000000000000002700001000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
                },
                "sucursal": "Casa Matriz"
            },
            {
                "tipoProducto": "CC",
                "estado": "Cobro Administrativo",
                "subCuenta": "Prueba CC",
                "operacionUId": "81",
                "saldo": "4500.00",
                "idOperacionFmt": "000000027_004",
                "idOperacionBT": "0010100000020000000000000000002700004000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
                },
                "sucursal": "Casa Matriz"
            },
            {
                "tipoProducto": "CC",
                "estado": "Cobro Administrativo",
                "subCuenta": "",
                "operacionUId": "61",
                "saldo": "120000.00",
                "idOperacionFmt": "000000027_003",
                "idOperacionBT": "0010100000020000000000000000002700003000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
                },
                "sucursal": "Casa Matriz"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "782",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerCuentasCorrientes",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "13:02:32",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTProductoPasivo', fields: [{ Nombre: 'estado', Tipo: 'String', Comentarios: 'Descripción de estado.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo disponible de la CC.' }, { Nombre: 'subCuenta', Tipo: 'String', Comentarios: 'Nombre de la subcuenta.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: 'Tipo de producto.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
