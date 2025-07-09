import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerBolsillos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerBolsillosComponent1751987196159 {
  pageTitle        = 'Obtener Bolsillos';
  description      = `Método para obtener las cuentas bolsillo de un cliente.`;
  pubName    = 'BTClientes.ObtenerBolsillos';
  programa   = 'RBTPG617';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [{ Nombre: 'sdtProductosPasivos', Tipo: '[sBTProductoPasivo](#sbtproductopasivo)', Comentarios: 'Listado de bolsillos.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador único de cuenta.' }, { Código: '30002', Descripción: 'No se recuperó la cuenta para el Identificador: [Número de identificador].' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerBolsillos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>CC6345192D8633F531F01D1D</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>322</bts:clienteUId>
      </bts:BTClientes.ObtenerBolsillos>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerBolsillos\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "INSTALADOR",
	  "Token": "e2db881814CD285A89A23FBE",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"clienteUId": 322,
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerBolsillosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>CC6345192D8633F531F01D1D</Token>
         </Btinreq>
         <sdtProductosPasivos>
            <sBTProductoPasivo>
               <tipoProducto>CB</tipoProducto>
               <estado>Normal</estado>
               <subCuenta/>
               <operacionUId>18766</operacionUId>
               <saldo>910000.00</saldo>
               <idOperacionFmt>000000029_010</idOperacionFmt>
               <idOperacionBT>0010100000221000000000000000002900010000000000002</idOperacionBT>
               <producto>
                  <moneda>$</moneda>
                  <papel/>
                  <productoUId>512</productoUId>
                  <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre>
               </producto>
               <sucursal>Sucursal Ciudad de la Costa</sucursal>
            </sBTProductoPasivo>
            ...
         </sdtProductosPasivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>228501</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerBolsillos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-11-01</Fecha>
            <Hora>11:31:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerBolsillosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "INSTALADOR",
      "Token": "e2db881814CD285A89A23FBE",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtProductosPasivos": {
      "sBTProductoPasivo": [
      {
         "tipoProducto": "CB",
         "estado": "Normal",
         "subCuenta": "",
         "operacionUId": 18766,
         "saldo": 910000,
         "idOperacionFmt": "000000029_010",
         "idOperacionBT": 1.0100000221e+46,
         "producto": {
            "moneda": "$",
            "papel": "",
            "productoUId": 512,
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos"
         },
         "sucursal": "Sucursal Ciudad de la Costa"
      },
      ...
      ]
   },
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTClientes.ObtenerBolsillos",
      "Requerimiento": "1",
      "Fecha": "2023-10-11",
      "Canal": "BTDIGITAL",
      "Hora": "15:10:52"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTProductoPasivo', fields: [{ Nombre: 'estado', Tipo: 'String', Comentarios: 'Descripción de estado.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del Producto pasivo.' }, { Nombre: 'saldo', Tipo: 'Decimal', Comentarios: 'Saldo.' }, { Nombre: 'subcuenta', Tipo: 'String', Comentarios: 'Nombre de la cuenta vista.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal de origen de la operación.' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: 'Tipo de producto pasivo (Cuenta Corriente: \'CC\', Caja de Ahorro: \'CA\').' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
