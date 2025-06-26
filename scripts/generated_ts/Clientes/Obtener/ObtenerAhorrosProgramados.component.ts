import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerAhorrosProgramados',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerAhorrosProgramadosComponent1750945331778 {
  pageTitle        = 'Obtener Ahorros Programados';
  description      = `Método para obtener un listado de los productos de ahorro programado que tiene contratado un cliente.`;
  pubName    = 'BTClientes.ObtenerAhorrosProgramados';
  programa   = 'RBTPG278';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :-----------  
Correlativo 1 | 3 
Correlativo 2 | 1 
Valor específico 1 | Identificador del módulo a incluir. 

Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :----------- 
Correlativo 1 | 3 
Correlativo 2 | 2 
Valor específico 1 | Módulo del tipo de operación a excluir. 
Valor específico 2 | Tipo de operación a excluir. 

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [{ Nombre: 'sdtProductosPasivos', Tipo: '[sBTProductoPasivo](#sbtproductopasivo)', Comentarios: 'Listado de ahorros programados.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para el Identificador.' }, { Codigo: '40001', Descripcion: 'No existe la cuenta consultada.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerAhorrosProgramados>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTClientes.ObtenerAhorrosProgramados>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerAhorrosProgramados=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 315347e0-dc1b-de4d-6160-6f4f39d19acb\' \
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
      <BTClientes.ObtenerAhorrosProgramadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>845cec4b724A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosPasivos>
            <sBTProductoPasivo>
               <operacionUId>6</operacionUId>
               <idOperacionFmt>0000000028_000</idOperacionFmt>
               <idOperacionBT>0010100000022000000000000000002700000000000028001</idOperacionBT>
               <producto>
                  <productoUId>4</productoUId>
                  <nombre>AHORRO PROGRAMADO, Ahorro Programado</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>AH</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta/>
               <saldo>15000.00</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>7</operacionUId>
               <idOperacionFmt>0000000092_000</idOperacionFmt>
               <idOperacionBT>0010000100022000000000000000002700000000000092001</idOperacionBT>
               <producto>
                  <productoUId>4</productoUId>
                  <nombre>AHORRO PROGRAMADO, Ahorro Programado</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>AH</tipoProducto>
               <sucursal>Sucursal Beta</sucursal>
               <subCuenta/>
               <saldo>350000.00</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
         </sdtProductosPasivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>783</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerAhorrosProgramados</Servicio>
            <Fecha>2017-12-15</Fecha>
            <Requerimiento/>
            <Hora>13:49:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerAhorrosProgramadosResponse>
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
                "tipoProducto": "AH",
                "estado": "Normal",
                "subCuenta": "",
                "operacionUId": "6",
                "saldo": "15000.00",
                "idOperacionFmt": "0000000028_000",
                "idOperacionBT": "0010100000022000000000000000002700000000000028001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "4",
                    "nombre": "AHORRO PROGRAMADO, Ahorro Programado"
                },
                "sucursal": "Casa Matriz"
            },
            {
                "tipoProducto": "AH",
                "estado": "Normal",
                "subCuenta": "",
                "operacionUId": "7",
                "saldo": "350000.00",
                "idOperacionFmt": "0000000092_000",
                "idOperacionBT": "0010000100022000000000000000002700000000000092001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "1",
                    "nombre": "AHORRO PROGRAMADO, Ahorro Programado"
                },
                "sucursal": "Sucursal Beta"
            },
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "784",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerAhorrosProgramados",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "13:50:44",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTProductoPasivo', fields: [{ Nombre: 'estado', Tipo: 'String', Comentarios: 'Descripción de estado.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo del ahorro programado.' }, { Nombre: 'subCuenta', Tipo: 'String', Comentarios: 'Nombre de la cuenta vista.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: 'Tipo de producto.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
