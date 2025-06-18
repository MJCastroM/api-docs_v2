import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerCuentasAsociadasPorTipo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCuentasAsociadasPorTipoComponent1750268698683 {
  pageTitle        = 'Obtener Cuentas Asociadas Por Tipo';
  description      = `Método para obtener un listado de las cuentas del tipo ingresado para una tarjeta de débito.`;
  pubName    = 'BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo';
  programa   = 'RBTPG448';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta.' }, { Nombre: 'tipoDeCuenta', Tipo: 'Short', Comentarios: 'Tipo de cuenta.' }];
  outputData = [{ Nombre: 'sdtCuentasAsociadasTD', Tipo: '[sBTCuentasAsociadasTD](#sbtcuentasasociadastd)', Comentarios: 'Listado de cuentas asociadas.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el Identificador de cuenta.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>B086B798299A7DB5B8310AAA</bts:Token>
            <bts:Device>GL</bts:Device>
         </bts:Btinreq>
         <bts:tarjetaUID>2000001957</bts:tarjetaUID>
         <bts:tipoDeCuenta>?</bts:tipoDeCuenta>
      </bts:BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerCuentasAsociadasPorTipo\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
          "Canal": "BTDIGITAL",
          "Requerimiento": 1,
          "Usuario": "INSTALADOR",
          "Token": "B086B798299A7DB5B8310AAA",
          "Device": "GL"
        },
        "tarjetaUID": 2000001957,
        "tipoDeCuenta": "?"
    }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>B086B798299A7DB5B8310AAA</Token>
            <Device>GL</Device>
         </Btinreq>
         <sdtCuentasAsociadasTD>
            <tarjetaUId>2000001957</tarjetaUId>
            <cuentas>
               <SdtsBTCuentaAsociadaTD>
                  <operacionUId>10216</operacionUId>
                  <idOperacionFmt>000000040_008</idOperacionFmt>
                  <producto>
                     <productoUId>93</productoUId>
                     <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                     <moneda>S/.</moneda>
                     <papel/>
                  </producto>
                  <sucursal>Sucursal Cusco</sucursal>
                  <simboloMoneda>S/.</simboloMoneda>
                  <subCuenta/>
                  <tipoDeCuenta>1</tipoDeCuenta>
                  <saldo>10003628.81</saldo>
                  <estado>CUENTAS INACTIVAS</estado>
               </SdtsBTCuentaAsociadaTD>
            </cuentas>
         </sdtCuentasAsociadasTD>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo</Servicio>
            <Fecha>2022-11-30</Fecha>
            <Hora>17:25:57</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>513</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
          "Canal": "BTDIGITAL",
          "Requerimiento": 1,
          "Usuario": "INSTALADOR",
          "Token": "B086B798299A7DB5B8310AAA",
          "Device": "GL"
        },
        "sdtCuentasAsociadasTD": {
          "tarjetaUId": 2000001957,
          "cuentas": {
            "SdtsBTCuentaAsociadaTD": {
              "operacionUId": 10216,
              "idOperacionFmt": "000000040_008",
              "producto": {
                "productoUId": 93,
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física",
                "moneda": "S/.",
                "papel": ""
              },
              "sucursal": "Sucursal Cusco",
              "simboloMoneda": "S/.",
              "subCuenta": "",
              "tipoDeCuenta": 1,
              "saldo": 10003628.81,
              "estado": "CUENTAS INACTIVAS"
            }
          }
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo",
          "Fecha": "2022-11-30",
          "Hora": "17:25:57",
          "Requerimiento": 1,
          "Numero": 513,
          "Estado": "OK"
        }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTCuentasAsociadasTD', fields: [{ Nombre: 'cuentas', Tipo: '[sBTCuentaAsociadaTD](#sbtcuentaasociadatd)', Comentarios: 'Datos cuenta asociada.' }, { Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta..' }, { Nombre: '### sBTCuentaAsociadaTD', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTCuentaAsociadaTD', fields: [{ Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado.' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de Operación.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos producto.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo.' }, { Nombre: 'simboloMoneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'subCuenta', Tipo: 'String', Comentarios: 'Sub cuenta.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Sucursal.' }, { Nombre: 'tipoDeCuenta', Tipo: 'Short', Comentarios: 'Tipo de cuenta.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
