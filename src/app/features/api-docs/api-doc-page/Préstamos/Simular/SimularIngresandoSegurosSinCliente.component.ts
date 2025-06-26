import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularIngresandoSegurosSinCliente',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularIngresandoSegurosSinClienteComponent1750945335365 {
  pageTitle        = 'Simular Ingresando Seguros Sin Cliente';
  description      = `Método para simular el alta de un préstamo sin cliente ingresando los seguros a aplicar.`;
  pubName    = 'BTPrestamos.SimularIngresandoSegurosSC';
  programa   = 'RBTPG467';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPrestamoAlta', Tipo: '[sBTDatosDespejeSinCliente](#sbtdatosdespejesincliente)', Comentarios: 'Datos de la simulación.' }, { Nombre: 'sinSeguros', Tipo: 'String', Comentarios: 'Acción a tomar cuando la lista de seguros a aplicar es vacía (S: Simula sin tener en cuenta ningún seguro, N: Simula con los seguros preseteados).' }, { Nombre: 'sdtSeguros', Tipo: '[sBTSegurosSimulacion](#sbtsegurossimulacion)', Comentarios: 'Listado de códigos de seguros a aplicar.' }];
  outputData = [{ Nombre: 'sBTSimulacionPrestamo', Tipo: '[sBTSimulacionPrestamo](#sbtsimulacionprestamo)', Comentarios: 'Datos de simulación del préstamo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de producto.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularIngresandoSegurosSC>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>387E2B35D9F43B80C31D1FF0</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta>
            <bts:plazoTotal>300</bts:plazoTotal>
            <bts:productoUId>71</bts:productoUId>
            <bts:monto>20000</bts:monto>
            <bts:actividad>1111</bts:actividad>
            <bts:valorCuota>5000</bts:valorCuota>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas></bts:cantidadCuotas>
            <bts:tasa></bts:tasa>
            <bts:fechaPrimerPago>2020-11-13</bts:fechaPrimerPago>
            <bts:pizarra></bts:pizarra>
         </bts:sdtPrestamoAlta>
         <bts:sinSeguros>N</bts:sinSeguros>
         <bts:sdtSeguros>
            <bts:sBTSeguroSimulacion>
               <bts:codigo>100</bts:codigo>
            </bts:sBTSeguroSimulacion>
         </bts:sdtSeguros>
      </bts:BTPrestamos.SimularIngresandoSegurosSC>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularIngresandoSegurosSC\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
      "Canal": "BTDIGITAL",
      "Usuario": "MINSTALADOR",
      "Device": "GL",
      "Requerimiento": 1,
      "Token": "01D45E9964612A4C8CCB1055"
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
   },
   "sinSeguros": "N",
   "sdtSeguros": {
      "sBTSeguroSimulacion": {
      "codigo": "100"
      }
   }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularIngresandoSegurosSCResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>387E2B35D9F43B80C31D1FF0</Token>
         </Btinreq>
         <sdtSimulacionPrestamo>
            <cft>28.210000</cft>
            <plazo>360</plazo>
            <tasa>23.000000</tasa>
            <impuestos>452.410000</impuestos>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <fechaVencimiento>2021-10-13</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>71</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <intereses>2027.72</intereses>
            <fechaPrimerPago>2020-11-13</fechaPrimerPago>
            <comisiones>0.000000</comisiones>
            <valorCuota>5000.00</valorCuota>
            <otrosConceptos>
               <SdtsBTConcepto>
                  <texto>SANCOR - Vida - Variante 1</texto>
                  <valor>1440.00</valor>
                  <concepto>100</concepto>
               </SdtsBTConcepto>
            </otrosConceptos>
            <cronograma>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-11-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-12-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-01-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-02-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-03-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-04-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-05-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-06-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-07-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-08-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-09-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-10-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
            </cronograma>
            <totalPrestamo>23942.44</totalPrestamo>
            <capital>20000.00</capital>
            <operacionUId>1</operacionUId>
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual>
            <seguros>1440.000000</seguros>
            <tasaNominalAnual>20.881010</tasaNominalAnual>
            <fechaValor>2020-10-13</fechaValor>
         </sdtSimulacionPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11921</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularIngresandoSegurosSC</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-19</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:42:21</Hora>
         </Btoutreq>
      </BTPrestamos.SimularIngresandoSegurosSCResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
      "Device": "AV",
      "Usuario": "MINSTALADOR",
      "Requerimiento": 1,
      "Canal": "BTDIGITAL",
      "Token": "72e34bcd9d4A8B5C60A82434"
   },
   "sdtSimulacionPrestamo": {
      "cft": "28.210000",
      "plazo": "360",
      "tasa": "23.000000",
      "impuestos": "452.410000",
      "tasaEfectiva": "0.000000",
      "fechaVencimiento": "2021-10-13",
      "producto": {
      "papel": "$",
      "moneda": "$",
      "productoUId": "71",
      "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
      },
      "intereses": "2027.72",
      "fechaPrimerPago": "2020-11-13",
      "comisiones": "0.000000",
      "valorCuota": "5000.00",
      "otrosConceptos": {
      "SdtsBTConcepto": {
         "texto": "SANCOR - Vida - Variante 1",
         "valor": "1440.00",
         "concepto": "100"
      }
      },
      "cronograma": {
      "SdtsBTCuotaPrestamoAlta": [
         {
            "importe": "5000.00",
            "redondeo": "0.00",
            "fechaPago": "2020-11-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2020-12-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-01-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-02-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-03-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-04-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-05-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-06-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-07-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-08-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-09-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-10-13"
         }
      ]
      },
      "totalPrestamo": "23942.44",
      "capital": "20000.00",
      "operacionUId": "1",
      "tasaEfectivaAnual": "23.000000",
      "seguros": "1440.000000",
      "tasaNominalAnual": "20.881010",
      "fechaValor": "2020-10-13"
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": 623,
      "Estado": "OK",
      "Servicio": "BTPrestamos.SimularIngresandoSeguros",
      "Fecha": "2019-11-20",
      "Requerimiento": 1,
      "Hora": "09:23:04",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatosDespejeSinCliente', fields: [{ Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Código de actividad.' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha primer pago.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Monto del préstamo.' }, { Nombre: 'periodoCuotas', Tipo: 'Int', Comentarios: 'Período entre cuotas.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Código de pizarra.' }, { Nombre: 'plazoTotal', Tipo: 'Int', Comentarios: 'Plazo total.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }, { typeName: 'sBTSegurosSimulacion', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código de seguro a aplicar.' }] }, { typeName: 'sBTSimulacionPrestamo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del préstamo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTCuotaPrestamoAlta', fields: [{ Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago de la cuota.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la cuota.' }] }];
}
