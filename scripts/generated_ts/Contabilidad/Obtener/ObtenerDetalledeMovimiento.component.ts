import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalledeMovimiento',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalledeMovimientoComponent1750268695434 {
  pageTitle        = 'Obtener Detalle de Movimiento';
  description      = `Método para obtener el detalle de un movimiento contable.`;
  pubName    = 'BTContabilidad.ObtenerDetalleMovimiento';
  programa   = 'RBTPG228';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento.' }];
  outputData = [{ Nombre: 'sdtDetalleAsiento', Tipo: '[sBTDetalleAsiento](#sbtdetalleasiento)', Comentarios: 'Datos del movimiento.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de movimiento.' }, { Codigo: '30103', Descripcion: 'No existe registro para el identificador único.' }, { Codigo: '40001', Descripcion: 'No existe el asiento.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.ObtenerDetalleMovimiento>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>IN</bts:Usuario>
            <bts:Token>12420485CD285A89A23FBE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:movimientoUId>8</bts:movimientoUId>
      </bts:BTContabilidad.ObtenerDetalleMovimiento>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerDetalleMovimiento\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	 "Btinreq": {
		"Canal": "BTDIGITAL",
		"Requerimiento": "1",
		"Usuario": "IN",
		"Token": "12420485CD285A89A23FBE",
		"Device": "MC"
	 },
	 "movimientoUId": "8"
  }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.ObtenerDetalleMovimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>IN</Usuario>
            <Token>12420485CD285A89A23FBE</Token>
            <Device>MC</Device>
         </Btinreq>
         <sdtDetalleAsiento>
            <sucursalId>1</sucursalId>
            <descripcion>CAJA, Traspaso entre Cuentas</descripcion>
            <usuarioIngreso>BANTOTAL</usuarioIngreso>
            <usuarioConfirmacion>BANTOTAL</usuarioConfirmacion>
            <fechaContabilizacion>2018-10-15</fechaContabilizacion>
            <hora>13:08:23</hora>
            <fechaValor>2018-10-15</fechaValor>
			<anulado>N</anulado>
			<movimientoUIdOriginal>8</movimientoUIdOriginal>
			<movimientoUIdAnulacion>0</movimientoUIdAnulacion>
            <ordinales>
               <sBTOrdinal>
                  <operacionUId>10189</operacionUId>
                  <idOperacionBT>0010000100021000000000000000002700003000000000000</idOperacionBT>
                  <debitoCredito>D</debitoCredito>
                  <importe>10000.00</importe>
                  <producto>
                     <productoUId>0</productoUId>
                     <nombre>CAJAS DE AHORRO, GENÉRICA</nombre>
                     <moneda>$</moneda>
                     <papel>$</papel>
                  </producto>
               </sBTOrdinal>
               <sBTOrdinal>
                  <operacionUId>10191</operacionUId>
                  <idOperacionBT>0010000100020222200000000000002700002000000000000</idOperacionBT>
                  <debitoCredito>C</debitoCredito>
                  <importe>25.00</importe>
                  <producto>
                     <productoUId>0</productoUId>
                     <nombre>CUENTA CORRIENTE, GENÉRICA</nombre>
                     <moneda>USD</moneda>
                     <papel>$</papel>
                  </producto>
               </sBTOrdinal>
               <sBTOrdinal>
                  <operacionUId>10192</operacionUId>
                  <idOperacionBT>0010000100496222200000000000000000000000000000000</idOperacionBT>
                  <debitoCredito>D</debitoCredito>
                  <importe>25.00</importe>
                  <producto>
                     <productoUId>0</productoUId>
                     <nombre>POSICION MONEDA EXTRANJERA, POSICION MONEDA EXTRANJERA</nombre>
                     <moneda>USD</moneda>
                     <papel>$</papel>
                  </producto>
               </sBTOrdinal>
               <sBTOrdinal>
                  <operacionUId>10193</operacionUId>
                  <idOperacionBT>0010000100497000000000000000000000000000000000000</idOperacionBT>
                  <debitoCredito>C</debitoCredito>
                  <importe>10000.00</importe>
                  <producto>
                     <productoUId>0</productoUId>
                     <nombre>VALUACION MONEDA EXTRANJERA, VALUACION MONEDA EXTRANJERA</nombre>
                     <moneda>$</moneda>
                     <papel>$</papel>
                  </producto>
               </sBTOrdinal>
            </ordinales>
         </sdtDetalleAsiento>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTContabilidad.ObtenerDetalleMovimiento</Servicio>
            <Fecha>2020-10-29</Fecha>
            <Hora>16:13:11</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7704</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTContabilidad.ObtenerDetalleMovimientoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "IN", 
      "Token": "12420485CD285A89A23FBE", 
      "Device": "MC" 
    }, 
    "sdtDetalleAsiento": { 
      "sucursalId": "1", 
      "descripcion": "CAJA, Traspaso entre Cuentas", 
      "usuarioIngreso": "BANTOTAL", 
      "usuarioConfirmacion": "BANTOTAL", 
      "fechaContabilizacion": "2018-10-15", 
      "hora": "13:08:23", 
      "fechaValor": "2018-10-15", 
	  "anulado": "N", 
      "movimientoUIdOriginal": "8", 
      "movimientoUIdAnulacion": "0", 
      "ordinales": { 
        "sBTOrdinal": [ 
          { 
            "operacionUId": "10189", 
            "idOperacionBT": "0010000100021000000000000000002700003000000000000", 
            "debitoCredito": "D", 
            "importe": "10000.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "CAJAS DE AHORRO, GENÉRICA", 
              "moneda": "$", 
              "papel": "$" 
            } 
          }, 
          { 
            "operacionUId": "10191", 
            "idOperacionBT": "0010000100020222200000000000002700002000000000000", 
            "debitoCredito": "C", 
            "importe": "25.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "CUENTA CORRIENTE, GENÉRICA", 
              "moneda": "USD", 
              "papel": "$" 
            } 
          }, 
          { 
            "operacionUId": "10192", 
            "idOperacionBT": "0010000100496222200000000000000000000000000000000", 
            "debitoCredito": "D", 
            "importe": "25.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "POSICION MONEDA EXTRANJERA, POSICION MONEDA EXTRANJERA", 
              "moneda": "USD", 
              "papel": "$" 
            } 
          }, 
          { 
            "operacionUId": "10193", 
            "idOperacionBT": "0010000100497000000000000000000000000000000000000", 
            "debitoCredito": "C", 
            "importe": "10000.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "VALUACION MONEDA EXTRANJERA, VALUACION MONEDA EXTRANJERA", 
              "moneda": "$", 
              "papel": "$" 
            } 
          } 
        ] 
      } 
    }, 
    "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTContabilidad.ObtenerDetalleMovimiento", 
      "Fecha": "2020-10-29", 
      "Hora": "16:13:11", 
      "Requerimiento": "1", 
      "Numero": "7704", 
      "Estado": "OK" 
    } 
  }` }
  };

  structuredTypes = [{ typeName: 'sBTDetalleAsiento', fields: [{ Nombre: 'anulado', Tipo: 'String', Comentarios: '¿Anulado? (S/N)' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del movimiento.' }, { Nombre: 'fechaContabilizacion', Tipo: 'Date', Comentarios: 'Fecha de contabilización.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'hora', Tipo: 'String', Comentarios: 'Hora de contabilización.' }, { Nombre: 'movimientoUIdAnulacion', Tipo: 'Long', Comentarios: 'Identificador único de movimiento de anulación.' }, { Nombre: 'movimientoUIdOriginal', Tipo: 'Long', Comentarios: 'Identificador único de movimiento original.' }, { Nombre: 'ordinales', Tipo: '[sBTOrdinal](#sbtordinal)', Comentarios: 'Listado de ordinales del movimiento.' }, { Nombre: 'sucursalId', Tipo: 'Int', Comentarios: 'Identificador de sucursal.' }, { Nombre: 'usuarioConfirmacion', Tipo: 'String', Comentarios: 'Usuario de confirmación del movimiento.' }, { Nombre: 'usuarioIngreso', Tipo: 'String', Comentarios: 'Usuario de ingreso del movimiento.' }, { Nombre: '### sBTOrdinal', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTOrdinal', fields: [{ Nombre: 'debitoCredito', Tipo: 'String', Comentarios: '¿Es débito o crédito? (Crédito: \'C\', Débito: \'D\').' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del Producto.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
