import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerCuentasDestinoHabilitadas',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCuentasDestinoHabilitadasComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Cuentas Destino Habilitadas';
  description = `Metodo para obtener un listado de cuentas habilitadas para acreditar el ahorro.`;
  pubName    = 'BTAhorroProgramado.ObtenerCuentasDestinoHabilitadas';
  programa   = 'RBTPG112';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId', 'clienteDestinoUId', 'productoUId', 'cuentaOrigenUId'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'clienteDestinoUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente destino de fondos de ahorro.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: 'cuentaOrigenUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de la cuenta origen.' }];
  outputCols = ['sdtCuentas'];
  outputData = [{ Nombre: 'sdtCuentas', Tipo: '[sBTProductoPasivo](#sbtproductopasivo)', Comentarios: 'Listado de cuentas habilitadas para origen del ahorro.' }];
  errorCols  = ['30001', '30002', '30003', '30004', '30005', '30006', '30007', '30008', '30009', '40001', '40101', '40999'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador del cliente destino de fondos.' }, { Codigo: '30003', Descripcion: 'No se recibio el identificador del producto de ahorro.' }, { Codigo: '30004', Descripcion: 'No se recibio el identificador de la cuenta de origen del ahorro.' }, { Codigo: '30005', Descripcion: 'No se recupero la cuenta para el identificador de cliente: [Numero de identificador].' }, { Codigo: '30006', Descripcion: 'No se recupero la cuenta destino para el identificador de cliente destino de fondos: [Numero de identificador].' }, { Codigo: '30007', Descripcion: 'No se recupero el producto de ahorro para el identificador: [Numero de identificador].' }, { Codigo: '30008', Descripcion: 'No se recupero cuenta de origen para el identificador: [Numero de identificador].' }, { Codigo: '30009', Descripcion: 'La cuenta de origen no corresponde al cliente.' }, { Codigo: '40001', Descripcion: 'El producto seleccionado no corresponde a un producto de ahorro.' }, { Codigo: '40101', Descripcion: 'El cliente destino debe ser igual al cliente origen.' }, { Codigo: '40999', Descripcion: 'Este producto no se encuentra habilitado para operar por este canal.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTAhorroProgramado.ObtenerCuentasDestinoHabilitadas>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d927483a74A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>81</bts:clienteUId>
         <bts:clienteDestinoUId>81</bts:clienteDestinoUId>
         <bts:productoUId>41</bts:productoUId>
         <bts:cuentaOrigenUId>21</bts:cuentaOrigenUId>
      </bts:BTAhorroProgramado.ObtenerCuentasDestinoHabilitadas>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerCuentasDestinoHabilitadas' \
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
      "clienteUId": 81,
      "clienteDestinoUId": 81,
      "productoUId": 41,
      "cuentaOrigenUId": 21
	}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTAhorroProgramado.ObtenerCuentasDestinoHabilitadasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d927483a74A8B5C60A82434</Token>
         </Btinreq>
         <sdtCuentas>
            <sBTProductoPasivo>
               <operacionUId>21</operacionUId>
               <idOperacionFmt>000000028_001</idOperacionFmt>
               <idOperacionBT>0010010210000000000000028001000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CA</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta>Mi account 1</subCuenta>
               <saldo>10000000.00</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>81</operacionUId>
               <idOperacionFmt>000000028_002</idOperacionFmt>
               <idOperacionBT>0010010210000000000000028002000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CA</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta>Mi account 2</subCuenta>
               <saldo>0.00</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
         </sdtCuentas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>403</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ObtenerCuentasDestinoHabilitadas</Servicio>
            <Fecha>2018-05-03</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:54:19</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ObtenerCuentasDestinoHabilitadasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtCuentas": {
        "sBTProductoPasivo": [
            {
                "tipoProducto": "CA",
                "estado": "Normal",
                "subCuenta": "Mi account 1",
                "operacionUId": "21",
                "saldo": "10000000.00",
                "idOperacionFmt": "000000028_001",
                "idOperacionBT": "0010010210000000000000028001000000000001",
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
                "subCuenta": "Mi account 2",
                "operacionUId": "81",
                "saldo": "0.00",
                "idOperacionFmt": "000000028_002",
                "idOperacionBT": "0010010210000000000000028002000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física"
                },
                "sucursal": "Casa Matriz"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "404",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ObtenerCuentasDestinoHabilitadas",
        "Fecha": "2018-05-03",
        "Requerimiento": "1",
        "Hora": "11:57:10",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'estado', Tipo: 'String', Comentarios: 'Descripcion de estado.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal (concatenacion de todos los conceptos claves de la operacion).' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenacion de algunos conceptos claves de la operacion).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del Producto pasivo.' }, { Nombre: 'saldo', Tipo: 'Decimal', Comentarios: 'Saldo.' }, { Nombre: 'subcuenta', Tipo: 'String', Comentarios: 'Nombre de la cuenta vista.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal de origen de la operacion.' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: 'Tipo de producto pasivo (Cuenta Corriente: 'CC', Caja de Ahorro: 'CA').' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTProducto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
