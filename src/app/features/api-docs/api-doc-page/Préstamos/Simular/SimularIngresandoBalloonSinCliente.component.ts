import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularIngresandoBalloonSinCliente',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularIngresandoBalloonSinClienteComponent1751987199877 {
  pageTitle        = 'Simular Ingresando Balloon Sin Cliente';
  description      = `Método para simular un préstamo sin cliente ingresando el balloon.`;
  pubName    = 'BTPrestamos.SimularIngresandoBalloonSC';
  programa   = 'RBTPG466';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPrestamoAlta', Tipo: '[sBTDatosDespejeSinCliente](#sbtdatosdespejesincliente)', Comentarios: 'Datos del préstamo a dar de alta.' }, { Nombre: 'modoDespeje', Tipo: 'Short', Comentarios: '[Hidden: Valor fijo \'6\' para este método].' }];
  outputData = [{ Nombre: 'sdtSimulacionPrestamo', Tipo: '[sBTSimulacionPrestamo](#sbtsimulacionprestamo)', Comentarios: 'Datos de la simulación.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador de producto.' }, { Código: '30003', Descripción: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularIngresandoBalloonSC>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GP</bts:Device>
            <bts:Token>387E2B35D9F43B80C31D1FF0</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta> 
            <bts:plazoTotal>300</bts:plazoTotal> 
            <bts:productoUId>71</bts:productoUId> 
            <bts:monto>20000</bts:monto> 
            <bts:actividad>1111</bts:actividad> 
            <bts:valorCuota>5000</bts:valorCuota> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:cantidadCuotas/> 
            <bts:tasa/> 
            <bts:fechaPrimerPago>2020-11-13</bts:fechaPrimerPago> 
            <bts:pizarra/> 
         </bts:sdtPrestamoAlta> 
      </bts:BTPrestamos.SimularIngresandoBalloonSC>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \ 
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularIngresandoBalloonSC\' \ 
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
		"sdtPrestamoAlta": { 
         "plazoTotal": "300", 
         "productoUId": "71", 
         "monto": "20000", 
         "actividad": "1111", 
         "valorCuota": "5000", 
         "periodoCuotas": "30", 
         "cantidadCuotas": "", 
         "tasa": "", 
         "fechaPrimerPago": "2020-11-13", 
         "pizarra": "" 
      } 
	}` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTPrestamos.SimularIngresandoBalloonSCResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>387E2B35D9F43B80C31D1FF0</Token> 
         </Btinreq> 
         <sdtSimulacionPrestamo> 
            <cft>27.380000</cft> 
            <plazo>31</plazo> 
            <tasa>23.000000</tasa> 
            <impuestos>82.850000</impuestos> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <fechaVencimiento>2020-11-14</fechaVencimiento> 
            <producto> 
               <papel>$</papel> 
               <moneda>$</moneda> 
               <productoUId>71</productoUId> 
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
            </producto> 
            <intereses>348.02</intereses> 
            <fechaPrimerPago>2020-11-13</fechaPrimerPago> 
            <comisiones>0.000000</comisiones> 
            <valorCuota>15544.58</valorCuota> 
            <otrosConceptos></otrosConceptos> 
            <cronograma> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>15544.58</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-11-13</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
               <SdtsBTCuotaPrestamoAlta> 
                  <importe>5000.00</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-11-14</fechaPago> 
               </SdtsBTCuotaPrestamoAlta> 
            </cronograma> 
            <totalPrestamo>20573.18</totalPrestamo> 
            <capital>20000.00</capital> 
            <operacionUId>1</operacionUId> 
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual> 
            <seguros>120.000000</seguros> 
            <tasaNominalAnual>20.881010</tasaNominalAnual> 
            <fechaValor>2020-10-13</fechaValor> 
         </sdtSimulacionPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>11920</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.SimularIngresandoBalloonSC</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-19</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>11:36:39</Hora> 
         </Btoutreq> 
      </BTPrestamos.SimularIngresandoBalloonSCResponse> 
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
      "cft": "27.380000", 
      "plazo": "31", 
      "tasa": "23.000000", 
      "impuestos": "82.850000", 
      "tasaEfectiva": "0.000000", 
      "fechaVencimiento": "2020-11-14", 
      "producto": { 
         "papel": "$", 
         "moneda": "$", 
         "productoUId": "71", 
         "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
      }, 
      "intereses": "348.02", 
      "fechaPrimerPago": "2020-11-13", 
      "comisiones": "0.000000", 
      "valorCuota": "15544.58", 
      "otrosConceptos": "", 
      "cronograma": { 
         "SdtsBTCuotaPrestamoAlta": [ 
            { 
               "importe": "15544.58", 
               "redondeo": "0.00", 
               "fechaPago": "2020-11-13" 
            }, 
            { 
               "importe": "5000.00", 
               "redondeo": "0.00", 
               "fechaPago": "2020-11-14" 
            } 
         ] 
      }, 
      "totalPrestamo": "20573.18", 
      "capital": "20000.00", 
      "operacionUId": "1", 
      "tasaEfectivaAnual": "23.000000", 
      "seguros": "120.000000", 
      "tasaNominalAnual": "20.881010", 
      "fechaValor": "2020-10-13" 
   }, 
   "Erroresnegocio": { 
        "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "110672", 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.SimularIngresandoBalloonSC", 
      "Requerimiento": "1", 
      "Fecha": "2021-03-18", 
      "Canal": "BTDIGITAL", 
      "Hora": "12:34:44" 
   } 
}` }
  };

  structuredTypes = [{ typeName: 'sBTDatosDespejeSinCliente', fields: [{ Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Código de actividad.' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha primer pago.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Monto del préstamo.' }, { Nombre: 'periodoCuotas', Tipo: 'Int', Comentarios: 'Período entre cuotas.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Código de pizarra.' }, { Nombre: 'plazoTotal', Tipo: 'Int', Comentarios: 'Plazo total.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }, { typeName: 'sBTSimulacionPrestamo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del préstamo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTCuotaPrestamoAlta', fields: [{ Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago de la cuota.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la cuota.' }] }];
}
