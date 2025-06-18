import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularDespejandoFechadeVencimientoyCantidaddeCuotas',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750258525576 {
  pageTitle        = 'Simular Despejando Fecha de Vencimiento y Cantidad de Cuotas';
  description      = `Método para simular un préstamo despejando fecha de vencimiento y cantidad de cuotas.`;
  pubName          = 'Simular Despejando Fecha de Vencimiento y Cantidad de Cuotas';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPrestamoAlta', Tipo: '[sBTPrestamoAlta](#sbtprestamoaltacondespeje)', Comentarios: 'Datos del préstamo a dar de alta.' }, { Nombre: 'modoDespeje', Tipo: 'Short', Comentarios: '[Hidden: Valor fijo \'4\' para este método].' }];
  outputData = [{ Nombre: 'sdtSimulacionPrestamo', Tipo: '[sBTSimulacionPrestamo](#sbtsimulacionprestamo)', Comentarios: 'Datos de la simulación.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de producto.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularDespejandoFechaVtoCantCuotas>
         <bts:Btinreq>
            <bts:Device>BTDIGITAL</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>d25cdaf98eCD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta>
            <bts:plazoTotal>300</bts:plazoTotal>
            <bts:productoUId>181</bts:productoUId>
            <bts:monto>20000</bts:monto>
            <bts:clienteUId>342</bts:clienteUId>
            <bts:actividad>1111</bts:actividad>
            <bts:valorCuota>5000</bts:valorCuota>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas></bts:cantidadCuotas>
            <bts:tasa>0</bts:tasa>
            <bts:fechaPrimerPago>10-10-2021</bts:fechaPrimerPago>
            <bts:pizarra>0</bts:pizarra>
         </bts:sdtPrestamoAlta>
      </bts:BTPrestamos.SimularDespejandoFechaVtoCantCuotas>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularDespejandoFechaVtoCantCuotas\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
		"Btinreq": {
			"Canal": "BTDIGITAL",
			"Requerimiento": "1",
			"Usuario": "INSTALADOR",
			"Token": "d25cdaf98eCD285A89A23FBE",
			"Device": "BTDIGITAL"		 
		},  
		"sdtPrestamoAlta":{
		   "plazoTotal": "300",
		   "productoUId": "181",
		   "monto": "20000",
		   "clienteUId": "342",
		   "actividad": "1111",
		   "valorCuota": "5000",
		   "periodoCuotas": "30",
		   "cantidadCuotas": [],
		   "tasa": "0",
		   "fechaPrimerPago": "10-10-2021",
		   "pizarra": "0"
		}
	}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularDespejandoFechaVtoCantCuotasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>BTDIGITAL</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>d25cdaf98eCD285A89A23FBE</Token>
         </Btinreq>
         <sdtSimulacionPrestamo>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2020-01-01</fechaValor>
            <capital>20000.00</capital>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>7059.37</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-02-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6656.94</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-03-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6247.60</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-04-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>5831.24</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-05-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1310.83</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-06-01</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>903.09</intereses>
            <tasaNominalAnual>20.878536</tasaNominalAnual>
            <totalPrestamo>27105.98</totalPrestamo>
            <valorCuota>5421.20</valorCuota>
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual>
            <operacionUId>1606</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2020-02-01</fechaPrimerPago>
            <fechaVencimiento>2020-06-01</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>181</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <plazo>150</plazo>
         </sdtSimulacionPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>110671</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularDespejandoFechaVtoCantCuotas</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2021-03-18</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:33:02</Hora>
         </Btoutreq>
      </BTPrestamos.SimularDespejandoFechaVtoCantCuotasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{ 
   "Btinreq": { 
      "Device": "BTDIGITAL", 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "1", 
      "Canal": "BTDIGITAL", 
      "Token": "d25cdaf98eCD285A89A23FBE" 
   }, 
   "sdtSimulacionPrestamo": { 
	  "otrosConceptos": { 
	  	"sBTConcepto": [] 
	  }, 
      "fechaValor": "2020-01-01", 
      "capital": "20000.00", 
      "cronograma": { 
         "sBTCuotaPrestamoAlta": [ 
            { 
               "importe": "7059.37", 
               "redondeo": "0.00", 
               "fechaPago": "2020-02-01" 
            }, 
            { 
               "importe": "6656.94", 
               "redondeo": "0.00", 
               "fechaPago": "2020-03-01" 
            }, 
            { 
               "importe": "6247.60", 
               "redondeo": "0.00", 
               "fechaPago": "2020-04-01" 
            }, 
            { 
               "importe": "5831.24", 
               "redondeo": "0.00", 
               "fechaPago": "2020-05-01" 
            }, 
            { 
               "importe": "1310.83", 
               "redondeo": "0.00", 
               "fechaPago": "2020-06-01" 
            } 
         ] 
      }, 
      "tasaEfectiva": "0.000000", 
      "intereses": "903.09", 
      "tasaNominalAnual": "20.878536", 
      "totalPrestamo": "27105.98", 
      "valorCuota": "5421.20", 
      "tasaEfectivaAnual": "23.000000", 
      "operacionUId": "1606", 
      "tasa": "23.000000", 
      "fechaPrimerPago": "2020-02-01", 
      "fechaVencimiento": "2020-06-01", 
      "producto": { 
         "papel": "$", 
         "moneda": "$", 
         "productoUId": "181", 
         "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
      }, 
      "plazo": "150" 
   }, 
   "Erroresnegocio": { 
        "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "110671", 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.SimularDespejandoFechaVtoCantCuotas", 
      "Requerimiento": "1", 
      "Fecha": "2021-03-18", 
      "Canal": "BTDIGITAL", 
      "Hora": "12:33:02" 
   } 
}` }
  };

  structuredTypes = [{ typeName: 'sBTPrestamoAltaConDespeje', fields: [{ Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Código de actividad.' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha primer pago.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Monto del préstamo.' }, { Nombre: 'periodoCuotas', Tipo: 'Int', Comentarios: 'Período entre cuotas.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Código de pizarra.' }, { Nombre: 'plazoTotal', Tipo: 'Int', Comentarios: 'Plazo total.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }, { typeName: 'sBTSimulacionPrestamo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del préstamo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTCuotaPrestamoAlta', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago de la cuota.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la cuota.' }] }];
}
