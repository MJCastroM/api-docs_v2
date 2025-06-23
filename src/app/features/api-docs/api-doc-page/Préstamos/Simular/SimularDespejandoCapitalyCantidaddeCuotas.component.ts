import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularDespejandoCapitalyCantidaddeCuotas',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularDespejandoCapitalyCantidaddeCuotasComponent1750713394881 {
  pageTitle        = 'Simular Despejando Capital y Cantidad de Cuotas';
  description      = `Método para simular un préstamo despejando capital y cantidad de cuotas.`;
  pubName    = 'BTPrestamos.SimularDespejandoCapitalCantCuotas';
  programa   = 'RBTPG322';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPrestamoAlta', Tipo: '[sBTPrestamoAltaConDespeje](#sbtprestamoaltacondespeje)', Comentarios: 'Datos del préstamo a dar de alta.' }, { Nombre: 'modoDespeje', Tipo: 'Short', Comentarios: '[Hidden: Valor fijo \'5\' para este método].' }];
  outputData = [{ Nombre: 'sdtSimulacionPrestamo', Tipo: '[sBTSimulacionPrestamo](#sbtsimulacionprestamo)', Comentarios: 'Datos de la simulación.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de producto.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularDespejandoCapitalCantCuotas>
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
            <bts:monto></bts:monto>
            <bts:clienteUId>342</bts:clienteUId>
            <bts:actividad>1111</bts:actividad>
            <bts:valorCuota>5000</bts:valorCuota>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas></bts:cantidadCuotas>
            <bts:tasa>0</bts:tasa>
            <bts:fechaPrimerPago>10-10-2021</bts:fechaPrimerPago>
            <bts:pizarra>0</bts:pizarra>
         </bts:sdtPrestamoAlta>
      </bts:BTPrestamos.SimularDespejandoCapitalCantCuotas>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularDespejandoCapitalCantCuotas\' \
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
		   "monto": [],
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
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularDespejandoCapitalCantCuotasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <capital>45587.56</capital>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>9594.84</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-02-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>9230.36</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-03-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>8859.63</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-04-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>8482.52</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-05-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>8098.96</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-06-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>7708.80</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-07-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>7311.97</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-08-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6908.30</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-09-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6497.72</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-10-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6080.09</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-11-01</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>4412.43</intereses>
            <tasaNominalAnual>20.878536</tasaNominalAnual>
            <totalPrestamo>78773.19</totalPrestamo>
            <valorCuota>7877.32</valorCuota>
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual>
            <operacionUId>1607</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2020-02-01</fechaPrimerPago>
            <fechaVencimiento>2020-11-01</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>181</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <plazo>300</plazo>
         </sdtSimulacionPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>110672</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularDespejandoCapitalCantCuotas</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2021-03-18</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:34:44</Hora>
         </Btoutreq>
      </BTPrestamos.SimularDespejandoCapitalCantCuotasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{ 
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
      "capital": "45587.56", 
      "cronograma": { 
         "sBTCuotaPrestamoAlta": [ 
            { 
               "importe": "9594.84", 
               "redondeo": "0.00", 
               "fechaPago": "2020-02-01" 
            }, 
            { 
               "importe": "9230.36", 
               "redondeo": "0.00", 
               "fechaPago": "2020-03-01" 
            }, 
            { 
               "importe": "8859.63", 
               "redondeo": "0.00", 
               "fechaPago": "2020-04-01" 
            }, 
            { 
               "importe": "8482.52", 
               "redondeo": "0.00", 
               "fechaPago": "2020-05-01" 
            }, 
            { 
               "importe": "8098.96", 
               "redondeo": "0.00", 
               "fechaPago": "2020-06-01" 
            }, 
            { 
               "importe": "7708.80", 
               "redondeo": "0.00", 
               "fechaPago": "2020-07-01" 
            }, 
            { 
               "importe": "7311.97", 
               "redondeo": "0.00", 
               "fechaPago": "2020-08-01" 
            }, 
            { 
               "importe": "6908.30", 
               "redondeo": "0.00", 
               "fechaPago": "2020-09-01" 
            }, 
            { 
               "importe": "6497.72", 
               "redondeo": "0.00", 
               "fechaPago": "2020-10-01" 
            }, 
            { 
               "importe": "6080.09", 
               "redondeo": "0.00", 
               "fechaPago": "2020-11-01" 
            } 
         ] 
      }, 
      "tasaEfectiva": "0.000000", 
      "intereses": "4412.43", 
      "tasaNominalAnual": "20.878536", 
      "totalPrestamo": "78773.19", 
      "valorCuota": "7877.32", 
      "tasaEfectivaAnual": "23.000000", 
      "tasa": "23.000000", 
      "fechaPrimerPago": "2020-02-01", 
      "fechaVencimiento": "2020-11-01", 
      "producto": { 
         "papel": "$", 
         "moneda": "$", 
         "productoUId": "181", 
         "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
      }, 
      "plazo": "300" 
   }, 
   "Erroresnegocio": { 
        "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "110672", 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.SimularDespejandoCapitalCantCuotas", 
      "Requerimiento": "1", 
      "Fecha": "2021-03-18", 
      "Canal": "BTDIGITAL", 
      "Hora": "12:34:44" 
   } 
}` }
  };

  structuredTypes = [{ typeName: 'sBTPrestamoAltaConDespeje', fields: [{ Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Código de actividad.' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador del cliente.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha primer pago.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Monto del préstamo.' }, { Nombre: 'periodoCuotas', Tipo: 'Int', Comentarios: 'Período entre cuotas.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Código de pizarra.' }, { Nombre: 'plazoTotal', Tipo: 'Int', Comentarios: 'Plazo total.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTSimulacionPrestamo', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTSimulacionPrestamo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del préstamo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTCuotaPrestamoAlta', fields: [{ Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago de la cuota.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la cuota.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
