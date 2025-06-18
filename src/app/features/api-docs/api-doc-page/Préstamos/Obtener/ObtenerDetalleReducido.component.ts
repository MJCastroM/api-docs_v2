import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalleReducido',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalleReducidoComponent1750258525522 {
  pageTitle        = 'Obtener Detalle Reducido';
  description      = `Método para obtener los datos básicos de un préstamo.`;
  pubName          = 'Obtener Detalle Reducido';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación simulada.' }];
  outputData = [{ Nombre: 'sdtPrestamo', Tipo: '[sBTPrestamo](#sbtprestamo)', Comentarios: 'Datos del préstamo' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de operación.' }, { Codigo: '30002', Descripcion: 'No se recuperó la operación para el identificador: [Número de Identificador].' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalleReducido>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6453f934f94A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:OperacionUId>142</bts:OperacionUId>
      </bts:BTPrestamos.ObtenerDetalleReducido>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleReducido=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "OperacionUId": 142
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDetalleReducidoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>6453f934f94A8B5C60A82434</Token>
         </Btinreq>
         <sdtPrestamo>
            <sucursal>Sucursal Beta</sucursal>
            <cuotasPagasConRetaso>0</cuotasPagasConRetaso>
            <idOperacionBT>0010000100115000000000000000002700000000000326001</idOperacionBT>
            <cantidadCuotas>37</cantidadCuotas>
            <capitalOriginal>180000.00</capitalOriginal>
            <estado>Normal</estado>
            <operacionUId>142</operacionUId>
            <tasaVigente>10.000000</tasaVigente>
            <plazo>1096</plazo>
            <saldoCapital>-174180.15</saldoCapital>
            <tipoTasa>Lineal Anual</tipoTasa>
            <producto>
               <papel/>
               <moneda/>
               <productoUId>0</productoUId>
               <nombre>Amort. - Capital F./Empr.- T/F</nombre>
            </producto>
            <idOperacionFmt>326-0</idOperacionFmt>
            <fechaValor>2018-05-18</fechaValor>
            <fechaVencimiento>2021-05-18</fechaVencimiento>
            <cantidadCuotasImpagas>36</cantidadCuotasImpagas>
         </sdtPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>766</Numero>
            <Servicio>BTPrestamos.ObtenerDetalleReducido</Servicio>
            <Estado>OK</Estado>
            <Requerimiento/>
            <Fecha>2017-12-12</Fecha>
            <Hora>10:55:30</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleReducidoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtPrestamo": {
        "sucursal": "Sucursal Beta",
        "idOperacionBT": "0010000100115000000000000000002700000000000326001",
        "cantidadCuotas": "37",
        "capitalOriginal": "180000.00",
        "estado": "Normal",
        "operacionUId": "142",
        "tasaVigente": "10.000000",
        "plazo": "1096",
        "saldoCapital": "-174180.15",
        "tipoTasa": "Lineal Anual",
        "producto": {
            "papel": "",
            "moneda": "",
            "productoUId": "0",
            "nombre": "Amort. - Capital F./Empr.- T/F"
        },
        "fechaValor": "2018-05-18",
        "fechaVencimiento": "2021-05-18",
        "cantidadCuotasImpagas": "36",
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "767",
        "Servicio": "BTPrestamos.ObtenerDetalleReducido",
        "Estado": "OK",
        "Requerimiento": "",
        "Fecha": "2017-12-12",
        "Hora": "11:15:09",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPrestamo', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas del préstamo.' }, { Nombre: 'cantidadCuotasImpagas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas impagas.' }, { Nombre: 'capitalOriginal', Tipo: 'Double', Comentarios: 'Capital original del préstamo.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del préstamo.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha de alta del préstamo.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del préstamo.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador texto de operación.' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación simulada.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del préstamo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Producto.' }, { Nombre: 'saldoCapital', Tipo: 'Double', Comentarios: 'Saldo de capital.' }, { Nombre: 'simboloMoneda', Tipo: 'String', Comentarios: 'Símbolo monetario.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Sucursal del préstamo.' }, { Nombre: 'tasaVigente', Tipo: 'Double', Comentarios: 'Tasa vigente.' }, { Nombre: 'tipoTasa', Tipo: 'String', Comentarios: 'Tipo de tasa.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
