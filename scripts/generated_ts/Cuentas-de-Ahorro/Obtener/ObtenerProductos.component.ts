import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerProductos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProductosComponent1750268695737 {
  pageTitle        = 'Obtener Productos';
  description      = `Método para obtener un listado de los productos de cuenta de ahorro.`;
  pubName    = 'BTCuentasDeAhorro.ObtenerProductos';
  programa   = 'RBTPG054';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtProductos', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Listado de productos.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCuentasDeAhorro.ObtenerProductos xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
      </BTCuentasDeAhorro.ObtenerProductos> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope>`, json: `curl -X POST \ 
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ObtenerProductos=\' \ 
  -H \'cache-control: no-cache\' \ 
  -H \'content-type: application/json\' \ 
  -H \'postman-token: 6bd8fd4d-69ed-56f1-79fc-8d458f726066\' \ 
  -d \'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCuentasDeAhorro.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProductos> 
            <sBTProducto> 
               <productoUId>1</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>2</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>3</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Jurídica</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>4</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Jurídica</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            ...
         </sdtProductos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>988</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasDeAhorro.ObtenerProductos</Servicio> 
            <Requerimiento/> 
            <Fecha>2017-12-22</Fecha> 
            <Hora>17:52:40</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasDeAhorro.ObtenerProductosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope>`,  json: `\'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "sdtProductos": { 
        "sBTProducto": [ 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "1", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "2", 
                "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
            }, 
            ...
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "989", 
        "Estado": "OK", 
        "Servicio": "BTCuentasDeAhorro.ObtenerProductos", 
        "Requerimiento": "", 
        "Fecha": "2017-12-22", 
        "Hora": "17:55:13", 
        "Canal": "BTDIGITAL" 
    } 
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
