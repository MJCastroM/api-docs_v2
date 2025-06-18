import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalledePrestamoCancelado',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalledePrestamoCanceladoComponent1750268698060 {
  pageTitle        = 'Obtener Detalle de Préstamo Cancelado';
  description      = `Devuelve el detalle del préstamo cancelado indicado.`;
  pubName    = 'BTPrestamos.ObtenerDetallePrestamoCancelado';
  programa   = 'RBTPG248';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }];
  outputData = [{ Nombre: 'sdtPrestamo', Tipo: '[sBTPrestamoCancelado](#sbtprestamocancelado)', Comentarios: 'Datos del préstamo cancelado.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de operación.' }, { Codigo: '30002', Descripcion: 'No se recuperó la operación para el Identificador: [Número de Identificador].' }, { Codigo: '30003', Descripcion: 'El préstamo no se encuentra cancelado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetallePrestamoCancelado>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1576177365F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10118</bts:operacionUId>
      </bts:BTPrestamos.ObtenerDetallePrestamoCancelado>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ObtenerDetallePrestamoCancelado\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"operacionUId": "10118"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDetallePrestamoCanceladoResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1576177365F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPrestamo>
            <operacionUId>10118</operacionUId>
            <idOperacionFmt>74-0</idOperacionFmt>
            <idOperacionBT>0010100000101000000000000000002800000000000074001</idOperacionBT>
            <producto>
               <productoUId>36</productoUId>
               <nombre>Amortización Automática TF</nombre>
               <moneda>$</moneda>
               <papel>$</papel>
            </producto>
            <tipoProducto>AM</tipoProducto>
            <sucursal>Casa Matriz</sucursal>
            <simboloMoneda>$</simboloMoneda>
            <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
            <capitalOriginal>19999.00</capitalOriginal>
            <fechaValor>2018-05-15</fechaValor>
            <fechaVencimiento>2019-05-16</fechaVencimiento>
            <periodicidad>30</periodicidad>
            <plazo>366</plazo>
            <cantidadCuotas>12</cantidadCuotas>
            <fechaCancelacion>2020-03-05</fechaCancelacion>
            <claseTasa/>
            <tipoTasa>Lineal Anual</tipoTasa>
            <tipoDia>Meses Calendario</tipoDia>
            <tipoAno>365 Días</tipoAno>
            <tasaOriginal>23.000000</tasaOriginal>
            <plus>0.000000</plus>
            <cronograma>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2486.68</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2499.33</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2466.81</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2442.12</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2431.69</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2403.76</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2380.28</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2358.28</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2326.69</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2307.67</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2280.59</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2251.73</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
            </cronograma>
         </sdtPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerDetallePrestamoCancelado</Servicio>
            <Fecha>2019-08-13</Fecha>
            <Hora>10:04:44</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6656</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerDetallePrestamoCanceladoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1576177365F955E77534D3E0",
	  "Device": "AC"
	},
	"sdtPrestamo": {
	  "operacionUId": "10118",
	  "idOperacionFmt": "74-0",
	  "idOperacionBT": "0010100000101000000000000000002800000000000074001",
	  "producto": {
		"productoUId": "36",
		"nombre": "Amortización Automática TF",
		"moneda": "$",
		"papel": "$"
	  },
	  "tipoProducto": "AM",
	  "sucursal": "Casa Matriz",
	  "simboloMoneda": "$",
	  "tipoAmortizacion": "Francés con Seg.e Impu.",
	  "capitalOriginal": "19999.00",
	  "fechaValor": "2018-05-15",
	  "fechaVencimiento": "2019-05-16",
	  "periodicidad": "30",
	  "plazo": "366",
	  "cantidadCuotas": "12",
	  "fechaCancelacion": "2020-03-05",
	  "tipoTasa": "Lineal Anual",
	  "tipoDia": "Meses Calendario",
	  "tipoAno": "365 Días",
	  "tasaOriginal": "23.000000",
	  "plus": "0.000000",
	  "cronograma": {
		"sBTCuotaCancelada": [
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2486.68",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2499.33",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2466.81",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2442.12",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2431.69",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2403.76",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2380.28",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2358.28",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2326.69",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2307.67",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2280.59",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2251.73",
			"diasMora": "0"
		  }
		]
	  }
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTPrestamos.ObtenerDetallePrestamoCancelado",
	  "Fecha": "2019-08-13",
	  "Hora": "10:04:44",
	  "Requerimiento": "1",
	  "Numero": "6656",
	  "Estado": "OK"
	}
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPrestamoCancelado', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas del préstamo.' }, { Nombre: 'capitalOriginal', Tipo: 'Double', Comentarios: 'Capital original del préstamo.' }, { Nombre: 'claseTasa', Tipo: 'String', Comentarios: 'Clase de tasa.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaCancelada](#sbtcuotacancelada)', Comentarios: 'Cronograma de pagos del préstamo.' }, { Nombre: 'fechaCancelacion', Tipo: 'Date', Comentarios: 'Fecha de cancelación del préstamo.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha de alta del préstamo.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del préstamo.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador texto de operación.' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación simulada.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Período entre cuotas.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del préstamo.' }, { Nombre: 'plus', Tipo: 'Double', Comentarios: 'Tasa plus.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del Producto.' }, { Nombre: 'simboloMoneda', Tipo: 'String', Comentarios: 'Símbolo monetario.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Sucursal del préstamo.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaOriginal', Tipo: 'Double', Comentarios: 'Tasa original.' }, { Nombre: 'tipoAmortizacion', Tipo: 'String', Comentarios: 'Tipo de amortización.' }, { Nombre: 'tipoAno', Tipo: 'String', Comentarios: 'Tipo de año.' }, { Nombre: 'tipoDia', Tipo: 'String', Comentarios: 'Tipo de día del préstamo.' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: 'Tipo de producto (Amortizable/Plan de pagos).' }, { Nombre: 'tipoTasa', Tipo: 'String', Comentarios: 'Tipo de tasa.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTCuotaCancelada', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTCuotaCancelada', fields: [{ Nombre: 'diasMora', Tipo: 'Short', Comentarios: 'Días de mora con los que se pago la cuota.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'importePago', Tipo: 'Double', Comentarios: 'Importe total pago de la cuota.' }] }];
}
