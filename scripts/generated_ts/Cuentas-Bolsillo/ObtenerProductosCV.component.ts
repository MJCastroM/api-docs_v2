import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerProductosCV',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProductosCVComponent {
  pageTitle = 'Obtener Productos CV';
  description = `Metodo para obtener un listado de los productos de cuenta bolsillo habilitados para una cuenta vista.`;
  pubName    = 'BTCuentasBolsillo.ObtenerProductosCV';
  programa   = 'RBTPG619';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion de cuenta vista.' }];
  outputData = [{ Nombre: 'sdtProductos', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos de estado de cuenta.' }];
  errors     = [{ Codigo: '30003', Descripcion: 'No se recibio el identificador de operacion.' }, { Codigo: '40001', Descripcion: 'No se pudo determinar los productos habilitados ya que ocurrio un error al recuperar la fecha del dia.' }, { Codigo: '40002', Descripcion: 'No se recuperaron productos habilitados para la cuenta vista.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasBolsillo.ObtenerProductosCV>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>CC6345192D8633F531F01D1D</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>904</bts:operacionUId>
      </bts:BTCuentasBolsillo.ObtenerProductosCV>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasBolsillo?ObtenerProductosCV' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cFC33CD93505A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
    "operacionUId": 904
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasBolsillo.ObtenerProductosCVResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>CC6345192D8633F531F01D1D</Token>
         </Btinreq>
         <sdtProductos>
            <sBTProducto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>512</productoUId>
               <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre>
            </sBTProducto>
            <sBTProducto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>511</productoUId>
               <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre>
            </sBTProducto>
            <sBTProducto>
               <moneda>USD</moneda>
               <papel>$</papel>
               <productoUId>531</productoUId>
               <nombre>CUENTAS BOLSILLO, Bolsillo Ahorro</nombre>
            </sBTProducto>
            <sBTProducto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>451</productoUId>
               <nombre>,</nombre>
            </sBTProducto>
            <sBTProducto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>532</productoUId>
               <nombre>CUENTAS BOLSILLO, Bolsillo Viajes</nombre>
            </sBTProducto>
         </sdtProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>228483</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasBolsillo.ObtenerProductosCV</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-11-01</Fecha>
            <Hora>08:52:59</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasBolsillo.ObtenerProductosCVResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
    "Btinreq": {
        "Device": "1",
        "Usuario": "MINSTALADOR",
        "Token": "16c1cFC33CD93505A5382434",
        "Canal": "BTDIGITAL",
        "Requerimiento": "1"
    },
    "sdtProductos": {
        "sBTProducto": [
        {
            "moneda": "$",
            "papel": "$",
            "productoUId": 512,
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos"
        },
        {
            "moneda": "$",
            "papel": "$",
            "productoUId": 511,
            "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro"
        },
        {
            "moneda": "USD",
            "papel": "$",
            "productoUId": 531,
            "nombre": "CUENTAS BOLSILLO, Bolsillo Ahorro"
        },
        {
            "moneda": "$",
            "papel": "$",
            "productoUId": 451,
            "nombre": ","
        },
        {
            "moneda": "$",
            "papel": "$",
            "productoUId": 532,
            "nombre": "CUENTAS BOLSILLO, Bolsillo Viajes"
        }
        ]
    },
    "Btoutreq": {
        "Numero": "111399",
        "Estado": "OK",
        "Servicio": "BTCuentasBolsillo.ObtenerProductosCV",
        "Requerimiento": "1",
        "Fecha": "2023-05-10",
        "Canal": "BTDIGITAL",
        "Hora": "15:10:52"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
