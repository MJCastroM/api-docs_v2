import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerCuentasAsociadas',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCuentasAsociadasComponent1750272791856 {
  pageTitle        = 'Obtener Cuentas Asociadas';
  description      = `Método para obtener las cuentas a las que está asociada una tarjeta de débito.`;
  pubName    = 'BTTarjetasDeDebito.ObtenerCuentasAsociadas';
  programa   = 'RBTPG017';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta de débito.' }];
  outputData = [{ Nombre: 'sdtCuentasAsociadasTD', Tipo: '[sBDCuentasAsociadasTD](#sbdcuentasasociadastd)', Comentarios: 'Listado de cuentas asociadas.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de tarjeta.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.ObtenerCuentasAsociadas>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:tarjetaUId>3</bts:tarjetaUId>
      </bts:BTTarjetasDeDebito.ObtenerCuentasAsociadas>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerCuentasAsociadas=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: bdcb7be8-1291-68f0-58ec-504b3f3e8fc5\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "tarjetaUId": 3
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.ObtenerCuentasAsociadasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>be9fc8708b4A8B5C60A82434</Token>
         </Btinreq>
         <sdtCuentasAsociadasTD>
            <cuentas>
               <sBDCuentaAsociadaTD>
                  <operacionUId>101</operacionUId>
                  <idOperacionFmt>000000040_005</idOperacionFmt>
                  <producto>
                     <productoUId>0</productoUId>
                     <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                     <moneda>$</moneda>
                     <papel/>
                  </producto>
                  <sucursal>Casa Matriz</sucursal>
                  <simboloMoneda>$</simboloMoneda>
                  <subCuenta/>
                  <saldo>100.00</saldo>
                  <estado>Normal</estado>
               </sBDCuentaAsociadaTD>
            </cuentas>
            <tarjetaUId>3</tarjetaUId>
         </sdtCuentasAsociadasTD>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>975</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTarjetasDeDebito.ObtenerCuentasAsociadas</Servicio>
            <Fecha>2017-12-22</Fecha>
            <Requerimiento/>
            <Hora>13:14:14</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerCuentasAsociadasResponse>
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
   "sdtCuentasAsociadasTD": {
      "cuentas": {
         "sBDCuentaAsociadaTD": [ {
            "saldo": "100.00",
            "simboloMoneda": "$",
            "sucursal": "Casa Matriz",
            "producto": {
               "papel": "",
               "moneda": "$",
               "productoUId": "0",
               "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
            },
            "operacionUId": "101",
            "subCuenta": "",
            "idOperacionFmt": "000000040_005",
            "estado": "Normal"
         } ]
      },
      "tarjetaUId": "3"
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "976",
      "Estado": "OK",
      "Servicio": "BTTarjetasDeDebito.ObtenerCuentasAsociadas",
      "Fecha": "2017-12-22",
      "Requerimiento": "",
      "Hora": "13:15:07",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBDCuentasAsociadasTD', fields: [{ Nombre: 'cuentas', Tipo: '[sBDCuentaAsociadaTD](#sbdcuentaasociadatd)', Comentarios: 'Datos de cuenta asociada.' }, { Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta.' }, { Nombre: '### sBDCuentaAsociadaTD', Tipo: '', Comentarios: '' }] }, { typeName: 'sBDCuentaAsociadaTD', fields: [{ Nombre: 'estado', Tipo: 'String', Comentarios: 'Descripción de estado.' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo de la cuenta.' }, { Nombre: 'simboloMoneda', Tipo: 'String', Comentarios: 'Símbolo de moneda.' }, { Nombre: 'subCuenta', Tipo: 'String', Comentarios: 'Nombre de la subcuenta.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
