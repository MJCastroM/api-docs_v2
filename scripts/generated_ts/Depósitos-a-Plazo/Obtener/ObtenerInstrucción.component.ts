import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerInstruccin',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerInstruccionComponent {
  pageTitle = 'Obtener Instruccion';
  description = `Metodo para obtener una lista de las instrucciones de un deposito.`;
  pubName    = 'BTDepositosAPlazo.ObtenerInstruccion';
  programa   = 'RBTPG109';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'depositoUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion del deposito.' }];
  outputData = [{ Nombre: 'instruccionVencimiento', Tipo: '[sBTInstruccion](#sbtinstruccion)', Comentarios: 'Datos de instruccion al vencimiento.' }, { Nombre: 'instruccionAcreditacion', Tipo: '[sBTInstruccion](#sbtinstruccion)', Comentarios: 'Datos de instruccion de acreditacion.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de la operacion del deposito.' }, { Codigo: '30003', Descripcion: 'No se recupero la cuenta para el identificador de cliente: [Numero de identificador].' }, { Codigo: '30004', Descripcion: 'No se recupero la operacion del deposito para el identificador: [Numero de identificador].' }, { Codigo: '30005', Descripcion: 'La operacion asociada al identificador: ? no pertenece a un deposito a plazo' }, { Codigo: '30006', Descripcion: 'La cuenta del deposito no pertenece al identificador del cliente: [Numero de identificador].' }, { Codigo: '30007', Descripcion: 'No se encontro instruccion de acreditacion para el deposito ingresado' }, { Codigo: '30008', Descripcion: 'No se encontro codigo de instruccion.' }, { Codigo: '30009', Descripcion: 'No se recupero la operacion de la instruccion para el identificador: [Numero de identificador].' }, { Codigo: '30012', Descripcion: 'No se recupero la sucursal de la cuenta.' }, { Codigo: '30015', Descripcion: 'No se recupero la sucursal de la cuenta.' }, { Codigo: '30016', Descripcion: 'No se encontro instruccion de acreditacion para el deposito ingresado.' }, { Codigo: '30017', Descripcion: 'No se encontro codigo de instruccion.' }, { Codigo: '30018', Descripcion: 'No se recupero la operacion de la instruccion para el identificador: [Numero de identificador].' }, { Codigo: '30021', Descripcion: 'No se recupero la sucursal de la cuenta.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.ObtenerInstruccion>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6c275823524A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:depositoUId>4</bts:depositoUId>
      </bts:BTDepositosAPlazo.ObtenerInstruccion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerInstruccion=' \
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
   "clienteUId": 61,
	"depositoUId": 4
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ObtenerInstruccionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6c275823524A8B5C60A82434</Token>
         </Btinreq>
         <instruccionVencimiento>
            <sBTInstruccion>
               <descripcion>Cancelar y Acreditar al vto.</descripcion>
               <operacionUId>2</operacionUId>
               <idOperacionFmt>000000029_001</idOperacionFmt>
               <producto>
                  <productoUId>21</productoUId>
                  <nombre>CUENTA CORRIENTE, int.</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
            </sBTInstruccion>
         </instruccionVencimiento>
         <instruccionAcreditacion>
            <sBTInstruccion>
               <descripcion>Acreditación</descripcion>
               <operacionUId>2</operacionUId>
               <idOperacionFmt>000000029_001</idOperacionFmt>
               <producto>
                  <productoUId>21</productoUId>
                  <nombre>CUENTA CORRIENTE, int.</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
            </sBTInstruccion>
         </instruccionAcreditacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>144</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ObtenerInstruccion</Servicio>
            <Fecha>2018-03-01</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:07:39</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerInstruccionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "instruccionVencimiento": {
      "sBTInstruccion": [ {
         "descripcion": "Cancelar y Acreditar al vto.",
         "operacionUId": 2,
         "idOperacionFmt": "000000029_001",
         "sucursal": "Casa Matriz",
         "producto": [ {
           "productoUId": 21,
               "nombre": "CUENTA CORRIENTE, int.",
               "moneda": "$",
               "papel": ""
            }
         ]
      }
      ]
   },
   "instruccionAcreditacion": {
      "sBTInstruccion": [ {
         "descripcion": "Acreditación",
         "operacionUId": 2,
         "idOperacionFmt": "000000029_001",
         "sucursal": "Casa Matriz",
         "producto": [ {
               "productoUId": 21,
               "nombre": "CUENTA CORRIENTE, int.",
               "moneda": "$",
               "papel": ""
            }
         ],
      }
      ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "144",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ObtenerInstruccion",
        "Fecha": "2018-03-01",
        "Requerimiento": "1",
        "Hora": "11:07:39",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTInstruccion', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion de la instruccion.' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenacion de algunos conceptos claves de la operacion).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos de producto.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la Sucursal de la operacion.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
