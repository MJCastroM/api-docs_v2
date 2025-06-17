import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerDatos',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDatosComponent {
  pageTitle = 'Obtener Datos';
  description = `Metodo para obtener los datos de un producto de deposito a plazo.`;
  pubName    = 'BTDepositosAPlazo.ObtenerDatos';
  programa   = 'RBTPG014';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'expresadoEn', Tipo: 'String', Comentarios: '[M-Moneda / E-Especie]' }];
  outputData = [{ Nombre: 'sdtPlazoFijo', Tipo: '[sBTPlazoFijo](#sbtplazofijo)', Comentarios: 'Datos del deposito a plazo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de operacion.' }, { Codigo: '30002', Descripcion: 'No se recupero la operacion para el identificador.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.ObtenerDatos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>5</bts:operacionUId>
      </bts:BTDepositosAPlazo.ObtenerDatos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerDatos=' \
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
   "operacionUId": 5,
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>be9fc8708b4A8B5C60A82434</Token>
         </Btinreq>
         <sdtPlazoFijo>
            <plazo>360</plazo>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <periodicidad>0</periodicidad>
            <simboloMoneda>$</simboloMoneda>
            <fechaVencimiento>2016-12-22</fechaVencimiento>
            <producto>
               <papel/>
               <moneda>$</moneda>
               <productoUId>0</productoUId>
               <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre>
            </producto>
            <intereses>55465.38</intereses>
            <fechaProximoVencimiento>0000-00-00</fechaProximoVencimiento>
            <tasaVigente>3.750000</tasaVigente>
            <idOperacionBT>0010100000022000000000000000002700000000000085001</idOperacionBT>
            <renovacionAutomatica>N</renovacionAutomatica>
            <idOperacionFmt>85-0</idOperacionFmt>
            <interesesPendientes>0.00</interesesPendientes>
            <cantidadRenovaciones>0</cantidadRenovaciones>
            <tasaOriginal>3.750000</tasaOriginal>
            <interesesAcreditados>0.00</interesesAcreditados>
            <tipoTasa>Efectiva Anual</tipoTasa>
            <acreditacionPeriodicaIntereses>N</acreditacionPeriodicaIntereses>
            <cuentaContable/>
            <operacionUId>5</operacionUId>
            <instruccionVencimiento>
               <sucursal>Casa Matriz</sucursal>
               <producto>
                  <papel/>
                  <moneda>$</moneda>
                  <productoUId>0</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
               </producto>
               <descripcion>Cancelar y Acreditar al vto.</descripcion>
               <operacionUId>9</operacionUId>
               <idOperacionFmt>000000027_001</idOperacionFmt>
            </instruccionVencimiento>
            <instruccionAcreditacion>
               <sucursal/>
               <producto>
                  <papel/>
                  <moneda/>
                  <productoUId>0</productoUId>
                  <nombre/>
               </producto>
               <descripcion/>
               <operacionUId>0</operacionUId>
               <idOperacionFmt/>
            </instruccionAcreditacion>
            <saldo>0.00</saldo>
            <montoInicial>1500000.00</montoInicial>
            <estado/>
            <diasHastaVencimiento>0</diasHastaVencimiento>
            <montoFinal>0.00</montoFinal>
            <sucursal>Casa Matriz</sucursal>
            <fechaValor>2015-12-28</fechaValor>
         </sdtPlazoFijo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>986</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ObtenerDatos</Servicio>
            <Requerimiento/>
            <Fecha>2017-12-22</Fecha>
            <Hora>14:57:24</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerDatosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtPlazoFijo": {
      "plazo": "360",
      "tasaEfectiva": "0.000000",
      "periodicidad": "0",
      "simboloMoneda": "$",
      "fechaVencimiento": "2016-12-22",
      "producto": {
        "papel": "",
        "moneda": "$",
        "productoUId": "0",
        "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible"
      },
      "intereses": "55465.38",
      "fechaProximoVencimiento": "0000-00-00",
      "tasaVigente": "3.750000",
      "idOperacionBT": "0010100000022000000000000000002700000000000085001",
      "renovacionAutomatica": "N",
      "idOperacionFmt": "85-0",
      "interesesPendientes": "0.00",
      "cantidadRenovaciones": "0",
      "tasaOriginal": "3.750000",
      "interesesAcreditados": "0.00",
      "tipoTasa": "Efectiva Anual",
      "acreditacionPeriodicaIntereses": "N",
      "cuentaContable": "",
      "operacionUId": "5",
      "instruccionVencimiento": {
        "sucursal": "Casa Matriz",
        "producto": {
          "papel": "",
          "moneda": "$",
          "productoUId": "0",
          "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
        },
        "descripcion": "Cancelar y Acreditar al vto.",
        "operacionUId": "9",
        "idOperacionFmt": "000000027_001"
      },
      "instruccionAcreditacion": {
        "sucursal": "",
        "producto": {
          "papel": "",
          "moneda": "",
          "productoUId": "0",
          "nombre": ""
        },
        "descripcion": "",
        "operacionUId": "0",
        "idOperacionFmt": ""
      },
      "saldo": "0.00",
      "montoInicial": "1500000.00",
      "estado": "",
      "diasHastaVencimiento": "0",
      "montoFinal": "0.00",
      "sucursal": "Casa Matriz",
      "fechaValor": "2015-12-28"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "986",
      "Estado": "OK",
      "Servicio": "BTDepositosAPlazo.ObtenerDatos",
      "Requerimiento": "",
      "Fecha": "2017-12-22",
      "Hora": "14:57:24",
      "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTPlazoFijo', fields: [{ Nombre: 'acreditacionPeriodicaIntereses', Tipo: 'String', Comentarios: 'Acredita periodicamente intereses (S/N).' }, { Nombre: 'cantidadRenovaciones', Tipo: 'Short', Comentarios: 'Cantidad de renovaciones del deposito.' }, { Nombre: 'cuentaContable', Tipo: 'String', Comentarios: 'Nombre de la cuenta contable.' }, { Nombre: 'diasHastaVencimiento', Tipo: 'Int', Comentarios: 'Dias restantes hasta el vencimiento.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Descripcion de estado.' }, { Nombre: 'fechaProximoVencimiento', Tipo: 'Date', Comentarios: 'Fecha para proximo vencimiento.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha de alta.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal (concatenacion de todos los conceptos claves de la operacion).' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenacion de algunos conceptos claves de la operacion).' }, { Nombre: 'instruccionAcreditacion', Tipo: '[sBTInstruccion](#sbtinstruccion)', Comentarios: 'Datos de la instruccion de acreditacion.' }, { Nombre: 'instruccionVencimiento', Tipo: '[sBTInstruccion](#sbtinstruccion)', Comentarios: 'Datos de la instruccion al vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Total de intereses del deposito.' }, { Nombre: 'interesesAcreditados', Tipo: 'Double', Comentarios: 'Intereses acreditados.' }, { Nombre: 'interesesPendientes', Tipo: 'Double', Comentarios: 'Intereses pendientes.' }, { Nombre: 'montoInicial', Tipo: 'Double', Comentarios: 'Capital inicial del deposito.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Periodicidad de acreditacion de intereses.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo en dias.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'renovacionAutomatica', Tipo: 'String', Comentarios: 'Renovacion automatica (S/N).' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo Actual.' }, { Nombre: 'simboloMoneda', Tipo: 'String', Comentarios: 'Simbolo moneda.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal de alta.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaOriginal', Tipo: 'Double', Comentarios: 'Tasa original.' }, { Nombre: 'tasaVigente', Tipo: 'Double', Comentarios: 'Tasa vigente.' }, { Nombre: 'tipoTasa', Tipo: 'String', Comentarios: 'Tipo de tasa.' }, { Nombre: '### sBTInstruccion', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTInstruccion', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion de la instruccion.' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenacion de algunos conceptos claves de la operacion).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos de producto.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la Sucursal de la operacion.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
