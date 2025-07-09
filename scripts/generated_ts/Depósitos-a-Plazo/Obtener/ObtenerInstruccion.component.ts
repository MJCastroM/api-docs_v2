import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerInstruccion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerInstruccionComponent1751987197514 {
  pageTitle        = 'Obtener Instrucción';
  description      = `Método para obtener una lista de las instrucciones de un depósito.`;
  pubName    = 'BTDepositosAPlazo.ObtenerInstruccion';
  programa   = 'RBTPG109';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'depositoUId', Tipo: 'Long', Comentarios: 'Identificador único de operación del depósito.' }];
  outputData = [{ Nombre: 'instruccionVencimiento', Tipo: '[sBTInstruccion](#sbtinstruccion)', Comentarios: 'Datos de instrucción al vencimiento.' }, { Nombre: 'instruccionAcreditacion', Tipo: '[sBTInstruccion](#sbtinstruccion)', Comentarios: 'Datos de instrucción de acreditación.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador del cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador de la operación del depósito.' }, { Código: '30003', Descripción: 'No se recuperó la cuenta para el identificador de cliente: [Número de identificador].' }, { Código: '30004', Descripción: 'No se recuperó la operación del depósito para el identificador: [Número de identificador].' }, { Código: '30005', Descripción: 'La operación asociada al identificador: ? no pertenece a un depósito a plazo' }, { Código: '30006', Descripción: 'La cuenta del depósito no pertenece al identificador del cliente: [Número de identificador].' }, { Código: '30007', Descripción: 'No se encontró instrucción de acreditación para el depósito ingresado' }, { Código: '30008', Descripción: 'No se encontró código de instrucción.' }, { Código: '30009', Descripción: 'No se recuperó la operación de la instrucción para el identificador: [Número de identificador].' }, { Código: '30012', Descripción: 'No se recuperó la sucursal de la cuenta.' }, { Código: '30015', Descripción: 'No se recuperó la sucursal de la cuenta.' }, { Código: '30016', Descripción: 'No se encontró instrucción de acreditación para el depósito ingresado.' }, { Código: '30017', Descripción: 'No se encontró código de instrucción.' }, { Código: '30018', Descripción: 'No se recuperó la operación de la instrucción para el identificador: [Número de identificador].' }, { Código: '30021', Descripción: 'No se recuperó la sucursal de la cuenta.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerInstruccion=\' \
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
   "clienteUId": 61,
	"depositoUId": 4
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTInstruccion', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de la instrucción.' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos de producto.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la Sucursal de la operación.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
