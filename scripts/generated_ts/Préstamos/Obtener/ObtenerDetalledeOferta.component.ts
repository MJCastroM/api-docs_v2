import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalledeOferta',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalledeOfertaComponent1750713394744 {
  pageTitle        = 'Obtener Detalle de Oferta';
  description      = `Método para obtener el detalle de una oferta de préstamo simulada.`;
  pubName    = 'BTPrestamos.ObtenerDetalleOferta';
  programa   = 'RBTPG125';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'simulacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la simulación.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Destino del crédito.' }];
  outputData = [{ Nombre: 'sdtOferta', Tipo: '[sBTSimulacionPrestamoOferta](#sbtsimulacionprestamooferta)', Comentarios: 'Detalle de la oferta de préstamo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de simulación.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }, { Codigo: '30004', Descripcion: 'La simulación no corresponde al cliente: [Número de Cliente].' }, { Codigo: '30005', Descripcion: 'La cantidad de cuotas indicada no forma parte de las ofertas.' }, { Codigo: '30012', Descripcion: 'La simulación no existe.' }, { Codigo: '40238', Descripcion: 'El Código de Actividad indicado es incorrecto.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalleOferta>
         <bts:Btinreq>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token>
         </bts:Btinreq>
         <bts:simulacionUId>47</bts:simulacionUId>
         <bts:clienteUId>1</bts:clienteUId>
         <bts:cantidadCuotas>12</bts:cantidadCuotas>
         <bts:actividad>1111</bts:actividad>
      </bts:BTPrestamos.ObtenerDetalleOferta>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ObtenerDetalleOferta=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "324915377F955E77534D3E02"
	},
	"simulacionUId": 47,
    "clienteUId": "1",
	"cantidadCuotas": "12",
	"actividad": 1111
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDetalleOfertaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>52005b89a6F955E77534D3E0</Token>
         </Btinreq>
         <sdtOferta>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2019-11-25</fechaValor>
            <capital>1000.00</capital>
            <cronograma>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-05-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               ...
            </cronograma>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>279.90</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>3223.97</totalPrestamo>
            <valorCuota>268.67</valorCuota>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <operacionUId>194</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2020-05-05</fechaPrimerPago>
            <idOperacionBT>0010100000101000000000000000004200000000000418001</idOperacionBT>
            <fechaVencimiento>2021-04-05</fechaVencimiento>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>43</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <plazo>497</plazo>
         </sdtOferta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>697</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDetalleOferta</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-04-24</Fecha>
            <Hora>12:42:27</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleOfertaResponse>
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
	"sdtOferta": { 
		"otrosConceptos" : {}, 
		"fechaValor": "2019-11-25", 
		"capital": "1000.00", 
		"cronograma": { 
		  "sBTCuotaSimulacion": [ 
			{ 
			  "otrosConceptos": "0.00", 
			  "capital": "0.00", 
			  "impuestos": "0.00", 
			  "intereses": "0.00", 
			  "concepto": "", 
			  "tipoCuota": "", 
			  "cuota": "268.67", 
			  "fechaPago": "2020-05-05", 
			  "seguros": "0.00" 
			}, 
			...
		  ] 
		}, 
		"tasaEfectiva": "0.000000", 
		"intereses": "279.90", 
		"tasaNominalAnual": "23.000000", 
		"totalPrestamo": "3223.97", 
		"valorCuota": "268.67", 
		"tasaEfectivaAnual": "25.590075", 
		"operacionUId": "194", 
		"tasa": "23.000000", 
		"fechaPrimerPago": "2020-05-05", 
		"idOperacionBT": "0010100000101000000000000000004200000000000418001", 
		"fechaVencimiento": "2021-04-05", 
		"producto": { 
		  "moneda": "$", 
		  "papel": "$", 
		  "productoUId": "43", 
		  "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
		}, 
		"plazo": "497" 
	},
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPrestamos.ObtenerDetalleOferta", 
        "Fecha": "2019-11-19", 
        "Hora": "13:05:22", 
        "Requerimiento": "", 
        "Numero": 6924, 
        "Estado": "OK" 
    } 
}` }
  };

  structuredTypes = [{ typeName: 'sBTSimulacionPrestamoOferta', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital total.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaSimulacion](#sbtcuotasimulacion)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha vencimiento.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses totales.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos de la simulación.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del préstamo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Descripción del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa del préstamo.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total del préstamo.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTCuotaSimulacion', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Monto de capital en la cuota.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'cuota', Tipo: 'Double', Comentarios: 'Importe total de la cuota.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Monto de impuestos en la cuota.' }, { Nombre: 'interes', Tipo: 'Double', Comentarios: 'Monto de intereses en la cuota.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Importe correspondiente a otros conceptos.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Monto de seguros en la cuota.' }, { Nombre: 'tipoCuota', Tipo: 'String', Comentarios: 'Tipo de la cuota (Capital/Interés).' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
