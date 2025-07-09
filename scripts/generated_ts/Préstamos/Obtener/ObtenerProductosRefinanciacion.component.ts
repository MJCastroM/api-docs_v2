import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerProductosRefinanciacion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProductosRefinanciacionComponent1751987199621 {
  pageTitle        = 'Obtener Productos Refinanciación';
  description      = `Método para obtener los productos de refinanciación.`;
  pubName    = 'BTPrestamos.ObtenerProductosRefinanciacion';
  programa   = 'RBTPG546';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtOperacionesARefinanciar', Tipo: '[sBTPrestamos](#sBTPrestamos)', Comentarios: 'Datos de las operaciones a refinanciar.' }];
  outputData = [{ Nombre: 'sdtProductos', Tipo: '[sBTProducto](#sBTProducto)', Comentarios: 'Listados de los datos de producto.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30002', Descripción: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }, { Código: '30003', Descripción: 'No se indicaron operaciones a refinanciar.' }, { Código: '30004', Descripción: 'No se recuperó la operación para el identificador: [Número de Identificador].' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerProductosRefinanciacion>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>89B4F6D7BEFB0C7F653DB37A</bts:Token>
         </bts:Btinreq>
         <bts:sdtOperacionesARefinanciar>
            <bts:clienteUId>4</bts:clienteUId>
            <bts:fecha>2024-06-12</bts:fecha>
            <bts:operaciones>
               <bts:operacionUId>3</bts:operacionUId>
            </bts:operaciones>
         </bts:sdtOperacionesARefinanciar>
      </bts:BTPrestamos.ObtenerProductosRefinanciacion>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
    \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerProductosRefinanciacion\' \
    -H \'cache-control: no-cache\' \
    -H \'content-type: application/json\' \
    -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
    -d \'{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "AC",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "sdtOperacionesARefinanciar": {
        "clienteUId": 4,
        "fecha": "2024-06-12",
        "operaciones": {
        "operacionUId": 3
        }
    }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerProductosRefinanciacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>89B4F6D7BEFB0C7F653DB37A</Token>
         </Btinreq>
         <sdtProductos>
            <sBTProducto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>60</productoUId>
               <nombre>Crédito Francés REEST</nombre>
            </sBTProducto>
            <sBTProducto>
               <moneda>$</moneda>
               <papel>UI</papel>
               <productoUId>61</productoUId>
               <nombre>Crédito Francés REEST</nombre>
            </sBTProducto>
            <sBTProducto>
               <moneda>USD</moneda>
               <papel>$</papel>
               <productoUId>62</productoUId>
               <nombre>Crédito Francés REEST</nombre>
            </sBTProducto>
         </sdtProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>726669</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerProductosRefinanciacion</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2024-05-14</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:52:37</Hora>
         </Btoutreq>
      </BTPrestamos.ObtenerProductosRefinanciacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "BANTOTAL",
        "Token": "324915377F955E77534D3E02",
        "Device": "AC"
    },
	"sdtProductos": {
        "sBTProducto": [
        {
            "moneda": "$",
            "papel": "$",
            "productoUId": 60,
            "nombre": "Crédito Francés REEST"
        },
        {
            "moneda": "$",
            "papel": "UI",
            "productoUId": 61,
            "nombre": "Crédito Francés REEST"
        },
        {
            "moneda": "USD",
            "papel": "$",
            "productoUId": 62,
            "nombre": "Crédito Francés REEST"
        }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTPrestamos.ObtenerProductosRefinanciacion",
        "Fecha": "2019-11-19",
        "Hora": "13:05:22",
        "Requerimiento": "",
        "Numero": 6924,
        "Estado": "OK"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTPrestamos', fields: [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha.' }, { Nombre: 'operaciones', Tipo: 'Long', Comentarios: 'Lista de idententificares de operaciones.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
