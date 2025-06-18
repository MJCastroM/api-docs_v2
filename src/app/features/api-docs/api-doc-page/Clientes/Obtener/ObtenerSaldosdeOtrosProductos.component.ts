import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerSaldosdeOtrosProductos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerSaldosdeOtrosProductosComponent1750258524821 {
  pageTitle        = 'Obtener Saldos de Otros Productos';
  description      = `Método para obtener los saldos de los productos de un cliente.`;
  pubName          = 'Obtener Saldos de Otros Productos';
  programa         = '';
  scope            = '';

  hasBackendConfig = true;
  backendText      = `Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :-----------  
Correlativo 1 | 1000 
Correlativo 2 | Valor del segundo parámetro del servicio. 
Valor específico 1 | Identificador del módulo a incluir. 	 

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'cuentaUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'correlativo', Tipo: 'Long', Comentarios: 'Correlativo 2 de la guía especial.' }];
  outputData = [{ Nombre: 'sdtSaldosProducto', Tipo: '[sBTSaldoProducto](#sbtsaldoproducto)', Comentarios: 'Listado de productos.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para el identificador.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerSaldosProducto>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>ca42f513ed4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:cuentaUId>61</bts:cuentaUId>
         <bts:correlativo>1</bts:correlativo>
      </bts:BTClientes.ObtenerSaldosProducto>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerSaldosProducto=\' \
  -H \'cache-control: no-cache,no-cache\' \
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
    "cuentaUId":"61",
    "correlativo":"1"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerSaldosProductoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ca42f513ed4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSaldosProducto>
            <sBTSaldoProducto>
               <fechaValor>2015-12-05</fechaValor>
               <estado>Normal</estado>
               <operacionUId>162</operacionUId>
               <saldo>60000.00</saldo>
               <tasa>0.000000</tasa>
               <idOperacionFmt>0000000000-006</idOperacionFmt>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <idOperacionBT>0010010210000050000000029006000000000003</idOperacionBT>
               <producto>
                  <moneda>$</moneda>
                  <papel>UI</papel>
                  <productoUId>62</productoUId>
                  <nombre>CAJAS DE AHORRO, Caja Ahorro P.Física Especie</nombre>
               </producto>
               <plazo>0</plazo>
               <sucursal>Casa Matriz</sucursal>
            </sBTSaldoProducto>
            <sBTSaldoProducto>
               <fechaValor>2015-12-05</fechaValor>
               <estado>Normal</estado>
               <operacionUId>163</operacionUId>
               <saldo>1400.00</saldo>
               <tasa>0.000000</tasa>
               <idOperacionFmt>0000000000-005</idOperacionFmt>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <idOperacionBT>0010010212222000000000029005000000000001</idOperacionBT>
               <producto>
                  <moneda>USD</moneda>
                  <papel/>
                  <productoUId>63</productoUId>
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre>
               </producto>
               <plazo>0</plazo>
               <sucursal>Casa Matriz</sucursal>
            </sBTSaldoProducto>
         </sdtSaldosProducto>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>9342</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerSaldosProducto</Servicio>
            <Fecha>2019-10-28</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>18:38:31</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerSaldosProductoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{ 
    "Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
    }, 
    "sdtSaldosProducto": { 
        "sBTSaldoProducto": [ 
            { 
                "fechaValor": "2015-12-05", 
                "estado": "Normal", 
                "operacionUId": 162, 
                "saldo": 60000, 
                "tasa": 0, 
                "idOperacionFmt": "0000000000-006", 
                "fechaVencimiento": "0000-00-00", 
                "idOperacionBT": "0010010210000050000000029006000000000003", 
                "producto": { 
                    "moneda": "$", 
                    "papel": "UI", 
                    "productoUId": 62, 
                    "nombre": "CAJAS DE AHORRO, Caja Ahorro P.Física Especie" 
                }, 
                "plazo": 0, 
                "sucursal": "Casa Matriz" 
            }, 
            { 
                "fechaValor": "2015-12-05", 
                "estado": "Normal", 
                "operacionUId": 163, 
                "saldo": 1400, 
                "tasa": 0, 
                "idOperacionFmt": "0000000000-005", 
                "fechaVencimiento": "0000-00-00", 
                "idOperacionBT": "0010010212222000000000029005000000000001", 
                "producto": { 
                    "moneda": "USD", 
                    "papel": "", 
                    "productoUId": 63, 
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
                }, 
                "plazo": 0, 
                "sucursal": "Casa Matriz" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 9343, 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerSaldosProducto", 
        "Fecha": "2019-10-28", 
        "Requerimiento": "", 
        "Hora": "18:41:21", 
        "Canal": "BTDIGITAL" 
    } 
}` }
  };

  structuredTypes = [{ typeName: 'sBTSaldoProducto', fields: [{ Nombre: 'estado', Tipo: 'String', Comentarios: 'Descripción de estado.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha de alta del saldo.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Capital.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
