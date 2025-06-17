import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerCuentadeCobro',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCuentasdeCobroComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Cuentas de Cobro';
  description = `Metodo para obtener un listado de las cuentas de cobro de un prestamo.`;
  pubName    = 'BTPrestamos.ObtenerCuentasDeCobro';
  programa   = 'RBTPG134';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion de prestamo.' }];
  outputCols = ['sdtCuentasDeCobro'];
  outputData = [{ Nombre: 'sdtCuentasDeCobro', Tipo: '[sBTCuentaDeCobro](#sbtcuentadecobro)', Comentarios: 'Listado de cuentas de cobro.' }];
  errorCols  = ['30001', '30002', '40101', '40102'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador unico de operacion de prestamo.' }, { Codigo: '30002', Descripcion: 'No se recupero la operacion para el identificador: [Numero de Identificador].' }, { Codigo: '40101', Descripcion: 'El Prestamo no existe.' }, { Codigo: '40102', Descripcion: 'No se encuentra Cuenta de Cobro.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerCuentaDeCobro>
		<bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>74</bts:operacionUId>
      </bts:BTPrestamos.ObtenerCuentaDeCobro>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerCuentaDeCobro' \
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
		"operacionUId": 74
	}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerCuentasDeCobroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>18C92AB2FE19E361315BA14B</Token>
         </Btinreq>
         <sdtCuentasDeCobro>
            <sBTCuentaDeCobro>
               <sucursal>Sucursal #3</sucursal>
               <producto>
                  <moneda>$</moneda>
                  <papel>Bill</papel>
                  <productoUId>6</productoUId>
                  <nombre>CAJA DE AHORROS, 656</nombre>
               </producto>
               <idOperacionBT>00100302100800000000060929001000000000001</idOperacionBT>
               <operacionUId>108</operacionUId>
               <subCuenta/>
               <idOperacionFmt>000060929_001</idOperacionFmt>
               <sucursalId>3</sucursalId>
               <tipoProducto>CA</tipoProducto>
            </sBTCuentaDeCobro>
         </sdtCuentasDeCobro>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>5861</Numero>
            <Servicio>BTPrestamos.ObtenerCuentasDeCobro</Servicio>
            <Estado>OK</Estado>
            <Fecha>2024-06-12</Fecha>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:02:38</Hora>
         </Btoutreq>
      </BTPrestamos.ObtenerCuentasDeCobroResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtCuentasDeCobro": {
      "sBTCuentaDeCobro": {
      "sucursal": "Sucursal #3",
      "producto": {
         "moneda": "$",
         "papel": "Bill",
         "productoUId": 6,
         "nombre": "CAJA DE AHORROS, 656"
      },
      "idOperacionBT": 1.003021008e+38,
      "operacionUId": 108,
      "subCuenta": "",
      "idOperacionFmt": "000060929_001",
      "sucursalId": 3,
      "tipoProducto": "CA"
      }
   },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "111",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerCuentasDeCobro",
        "Requerimiento": "1",
        "Fecha": "2018-05-04",
        "Hora": "18:27:34",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal (concatenacion de todos los conceptos claves de la operacion).' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenacion de algunos conceptos claves de la operacion).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador de la operacion.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Informacion del producto.' }, { Nombre: 'subCuenta', Tipo: 'String', Comentarios: 'Sub cuenta.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'sucursalId', Tipo: 'Short', Comentarios: 'Identificador de sucursal.' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: 'Tipo de producto.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTProducto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
