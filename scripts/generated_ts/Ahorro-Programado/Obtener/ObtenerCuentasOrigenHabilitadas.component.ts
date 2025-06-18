import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerCuentasOrigenHabilitadas',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCuentasOrigenHabilitadasComponent1750268693982 {
  pageTitle        = 'Obtener Cuentas Origen Habilitadas';
  description      = `Método para obtener un listado de cuentas habilitadas para debitar periódicamente.`;
  pubName    = 'BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas';
  programa   = 'RBTPG111';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }];
  outputData = [{ Nombre: 'sdtCuentas', Tipo: '[sBTProductoPasivo](#sbtproductopasivo)', Comentarios: 'Listado de cuentas habilitadas para origen del ahorro.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la persona.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador del cliente.' }, { Codigo: '30003', Descripcion: 'No se recibió el identificador del producto de ahorro.' }, { Codigo: '30004', Descripcion: 'No se recuperó el producto de ahorro para el identificador: [Número de identificador].' }, { Codigo: '30005', Descripcion: 'No se recuperó la persona para el identificador: [Número de identificador].' }, { Codigo: '30006', Descripcion: 'No se recuperó la cuenta para el identificador de cliente: [Número de identificador].' }, { Codigo: '40001', Descripcion: 'El producto seleccionado no corresponde a un producto de ahorro.' }, { Codigo: '40002', Descripcion: 'La persona seleccionada no integra la cuenta-cliente.' }, { Codigo: '40101', Descripcion: 'El cliente no se encuentra facultado para operar con cuenta vista.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>2</bts:personaUId>
         <bts:clienteUId>81</bts:clienteUId>
         <bts:productoUId>41</bts:productoUId>
      </bts:BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerCuentasOrigenHabilitadas\' \
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
		"personaUId": 2,
		"clienteUId": 81,
		"productoUId": 41
	}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTAhorroProgramado.ObtenerCuentasOrigenHabilitadasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f2f7be2ebc4A8B5C60A82434</Token>
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
         </sdtCuentas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>371</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-04-30</Fecha>
            <Hora>11:32:24</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ObtenerCuentasOrigenHabilitadasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
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
        "Numero": "402",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas",
        "Fecha": "2018-05-03",
        "Requerimiento": "1",
        "Hora": "11:24:55",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTProductoPasivo', fields: [{ Nombre: 'estado', Tipo: 'String', Comentarios: 'Descripción de estado.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String bantotal (concatenación de todos los conceptos claves de la operación).' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del Producto pasivo.' }, { Nombre: 'saldo', Tipo: 'Decimal', Comentarios: 'Saldo.' }, { Nombre: 'subcuenta', Tipo: 'String', Comentarios: 'Nombre de la cuenta vista.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal de origen de la operación.' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: 'Tipo de producto pasivo (Cuenta Corriente: \'CC\', Caja de Ahorro: \'CA\').' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
