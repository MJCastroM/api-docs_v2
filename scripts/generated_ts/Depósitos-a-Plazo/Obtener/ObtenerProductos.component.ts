import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerProductos',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProductosComponent {
  pageTitle = 'Obtener Productos';
  description = `Metodo para obtener un listado de los productos de deposito a plazo.`;
  pubName    = 'BTDepositosAPlazo.ObtenerProductos';
  programa   = 'RBTPG093';
  scope      = 'Global';

  

  hasBackendConfig  = true;
  backendText       = `Para configurar los productos habilitados, se debe agregar un registro en la guia especial 70100 para cada producto de la siguiente manera: 

Campo | Valor 
:--------- | :-----------  
Correlativo 1 | Valor incremental. 
Correlativo 2 | Modulo. 
Correlativo 3 | Tipo de operacion. 
Valor especifico 1 | Moneda. 
Valor especifico 2 | Papel. 
Importe especifico 1 | Tipo de dia para el calculo del plazo (1 - Comercial, 2 - Calendario). 
Importe especifico 2 | Tipo de ano para el calculo de intereses (1 - Comercial, 2 - Calendario).
Importe especifico 3 | Ajuste de dia al vencimiento (0 - No ajusta, 1 - Ajuste dia anterior, 2 - Ajuste dia posterior).
:::`;
  backendConfig     = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtProducto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Listado de productos.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.ObtenerProductos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTDepositosAPlazo.ObtenerProductos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerProductos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 5730f6af-ead6-1713-6817-a001379e1a06' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	}
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtProducto>
            <sBTProducto>
               <productoUId>103</productoUId>
               <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>104</productoUId>
               <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
         </sdtProducto>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>907</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ObtenerProductos</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>15:12:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerProductosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtProducto": {
        "sBTProducto": [
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "103",
                "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "104",
                "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "908",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ObtenerProductos",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "15:12:50",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
