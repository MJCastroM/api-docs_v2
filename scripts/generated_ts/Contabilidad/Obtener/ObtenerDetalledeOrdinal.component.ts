import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalledeOrdinal',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalledeOrdinalComponent1751987196785 {
  pageTitle        = 'Obtener Detalle de Ordinal';
  description      = `Método para obtener el detalle de un determinado ordinal de un movimiento.`;
  pubName    = 'BTContabilidad.ObtenerDetalleOrdinal';
  programa   = 'RBTPG337';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento.' }, { Nombre: 'ordinal', Tipo: 'Short', Comentarios: 'Ordinal del movimiento.' }, { Nombre: 'subOrdinal', Tipo: 'Short', Comentarios: 'Subordinal del movimiento.' }];
  outputData = [{ Nombre: 'sdtOrdinal', Tipo: '[sBTOrdinal](#sbtordinal)', Comentarios: 'Ordinales del movimiento.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió identificador de movimiento.' }, { Código: '30103', Descripción: 'No existe registro para el identificador único.' }, { Código: '40001', Descripción: 'No existe el asiento.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.ObtenerDetalleOrdinal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>IN</bts:Usuario>
            <bts:Token>12420485CD285A89A23FBE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:movimientoUId>8</bts:movimientoUId>
         <bts:ordinal>1</bts:ordinal>
         <bts:subOrdinal>1</bts:subOrdinal>
      </bts:BTContabilidad.ObtenerDetalleOrdinal>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerDetalleOrdinal\' \
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
	 "movimientoUId": "8",
	 "ordinal":1,
	 "subOrdinal":1
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.ObtenerDetalleOrdinalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>IN</Usuario>
            <Token>12420485CD285A89A23FBE</Token>
            <Device>MC</Device>
         </Btinreq>
	     <sdtOrdinal>
			  <operacionUId>10189</operacionUId>
			  <idOperacionBT>0010000100021000000000000000002700003000000000000</idOperacionBT>
			  <debeHaber>D</debeHaber> debitoCredito
			  <importe>10000.00</importe>
			  <producto>
				 <productoUId>0</productoUId>  
				 <nombre>CAJAS DE AHORRO, GENÉRICA</nombre>
				 <moneda>$</moneda>
				 <papel>$</papel>
			  </producto>
	     </sdtOrdinal>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTContabilidad.ObtenerDetalleOrdinal</Servicio>
            <Fecha>2020-10-29</Fecha>
            <Hora>16:13:11</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7704</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTContabilidad.ObtenerDetalleOrdinalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{ 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "IN", 
      "Token": "12420485CD285A89A23FBE", 
      "Device": "MC" 
   },
	"sdtOrdinal":  
	{ 
	  "operacionUId": "10189", 
	  "idOperacionBT": "0010000100021000000000000000002700003000000000000", 
	  "debeHaber": "D", 
	  "importe": "10000.00", 
	  "producto": { 
		 "productoUId": "0", 
		 "nombre": "CAJAS DE AHORRO, GENÉRICA", 
		 "moneda": "$", 
		 "papel": "$" 
	  } 
   },
   "Erroresnegocio": null, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTContabilidad.ObtenerDetalleOrdinal", 
      "Fecha": "2020-10-29", 
      "Hora": "16:13:11", 
      "Requerimiento": "1", 
      "Numero": "7704", 
      "Estado": "OK" 
   }
}` }
  };

  structuredTypes = [{ typeName: 'sBTOrdinal', fields: [{ Nombre: 'debeHaber', Tipo: 'String', Comentarios: 'Debe/Haber (Crédito: \'C\', Débito: \'D\').' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del Producto.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
