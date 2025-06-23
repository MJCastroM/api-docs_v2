import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalleOfertaVehicular',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalleOfertaVehicularComponent1750713394181 {
  pageTitle        = 'Obtener Detalle de Oferta Vehicular';
  description      = `Método para obtener el detalle de una oferta vehicular.`;
  pubName    = 'BTPartners.ObtenerDetalleOfertaVehicular';
  programa   = 'RBTPNV08';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPartner', Tipo: '[sBTPartnerInReq](#sbtpartnerinreq)', Comentarios: 'Datos del usuario.' }, { Nombre: 'simulacionUId', Tipo: 'Long', Comentarios: 'Identificador de la simulación.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'destinoCredito', Tipo: 'Long', Comentarios: 'Destino del crédito' }];
  outputData = [{ Nombre: 'sdtSimulacion', Tipo: '[sBTSimulacionOutput](#sbtsimulacionoutput)', Comentarios: 'Datos de salida de la simulación.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de simulación.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }, { Codigo: '30004', Descripcion: 'La simulación no corresponde al cliente: [Número de Identificador].' }, { Codigo: '30005', Descripcion: 'La cantidad de cuotas indicada no forma parte de las ofertas.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPartners.ObtenerDetalleOfertaVehicular>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1222A10B1A106FB813BD7AE9</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>2</bts:puntoVentaUId>
            <bts:vendedorUId>0</bts:vendedorUId>
            <bts:partnerUId>1</bts:partnerUId>
         </bts:sdtPartner>
         <bts:simulacionUId>12</bts:simulacionUId>
         <bts:clienteUId>359</bts:clienteUId>
         <bts:cantidadCuotas>3</bts:cantidadCuotas>
         <bts:destinoCredito>12</bts:destinoCredito>
      </bts:BTPartners.ObtenerDetalleOfertaVehicular>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ObtenerDetalleOfertaVehicular\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "sdtPartner": {
      "puntoVentaUId": 2,
      "vendedorUId": 0,
      "partnerUId": 1
    },
    "simulacionUId": 12,
    "clienteUId": 359,
    "cantidadCuotas": 3,
    "destinoCredito": 12
    }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPartners.ObtenerDetalleOfertaVehicularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1222A10B1A106FB813BD7AE9</Token>
         </Btinreq>
         <sdtSimulacion>
            <cft>28.21</cft>
            <plus>0.000000</plus>
            <nomSucursal>Casa Matriz<nomSucursal/>
            <otrosConceptos/>
            <tasaNominalAnual>30.000000</tasaNominalAnual>
            <precio>7282.89</precio>
            <tipoAmortizacionDsc>Leasing<tipoAmortizacionDsc/>
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
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-06-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-07-06</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-08-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-09-07</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-10-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-11-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-12-07</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2021-01-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2021-02-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2021-03-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.60</cuota>
                  <fechaPago>2021-04-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
            </cronograma>
            <comisionesDesembolso>0.00</comisionesDesembolso>
            <segurosDesembolso>0.00</segurosDesembolso>
            <cantidadCuotas>7</cantidadCuotas>
            <impuestosDesembolso>0.00</impuestosDesembolso>
            <fechaPrimerPago>2020-05-05<fechaPrimerPago/>
            <operacionUId>156</operacionUId>
            <valorCuota>268.67</valorCuota>
            <diasRevision>0</diasRevision>
            <totalSeguros>0.00</totalSeguros>
            <plazo>497</plazo>
            <producto>
               <moneda>$</moneda>
               <papel/>
               <productoUId>512</productoUId>
               <nombre>CUENTAS BOLSILLO, Bolsillo Gastos</nombre>
            </producto>
            <capital>20000.00</capital>
            <tipoAmortizacionCod>0</tipoAmortizacionCod>
            <totalIntereses>2613.64</totalIntereses>
            <seguros>
               <codigo>100</codigo>
               <descripcion>ALICO - Vida %s/cap. inicial</descripcion>
               <tipo>VIDA</tipo>
               <modificable>S</modificable>
               <importeFijo>100.00</importeFijo>
               <porcentaje>0.1000</porcentaje>
            </seguros>
            <fechaValor>2018-05-15<fechaValor/>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <totalImpuestos>0.00</totalImpuestos>
            <coeficienteIVA>0.000000</coeficienteIVA>
            <periodicidad>30</periodicidad>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <totalPrestamo>3223.97</totalPrestamo>
            <fechaVencimiento>2025-04-05<fechaVencimiento/>
            <tasa>0.000000</tasa>
            <redondeo>0.00</redondeo>
            <montoDesembolso>3154.93</montoDesembolso>
            <comisiones>
               <sBTComisionPrestamo>
                  <porcentaje>0.0000</porcentaje>
                  <descripcion>Comision por venta seguro</descripcion>
                  <importe>0.00</importe>
                  <codigo>137</codigo>
               </sBTComisionPrestamo>
               <sBTComisionPrestamo>
                  <porcentaje>0.0000</porcentaje>
                  <descripcion>MiAuto - Otorgamiento</descripcion>
                  <importe>0.00</importe>
                  <codigo>300</codigo>
               </sBTComisionPrestamo>
            </comisiones>
            <totalComisiones>0.00</totalComisiones>
            <comisionesCuota></comisionesCuota>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPartners.ObtenerDetalleOfertaVehicular</Servicio>
            <Fecha>2021-03-18</Fecha>
            <Hora>10:03:41</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8032</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPartners.ObtenerDetalleOfertaVehicularResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "c2cfd09eff4A8B5C60A82434"
    },
    "sdtSimulacion": {
      "cft": 28.21,
      "plus": 0,
      "nomSucursal": {
      "#text": "Casa Matriz",
      "nomSucursal": "",
      "otrosConceptos": "",
      "tasaNominalAnual": 30,
      "precio": 7282.89,
      "tipoAmortizacionDsc": {
         "#text": "Leasing",
         "tipoAmortizacionDsc": "",
         "cronograma": {
            "sBTCuotaSimulacion": [
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-05-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-06-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-07-06",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-08-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-09-07",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-10-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-11-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2020-12-07",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2021-01-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2021-02-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.67,
               "fechaPago": "2021-03-05",
               "seguros": 0
            },
            {
               "otrosConceptos": 0,
               "capital": 0,
               "impuestos": 0,
               "intereses": 0,
               "concepto": "",
               "tipoCuota": "",
               "cuota": 268.6,
               "fechaPago": "2021-04-05",
               "seguros": 0
            }
            ]
         },
         "comisionesDesembolso": 0,
         "segurosDesembolso": 0,
         "cantidadCuotas": 7,
         "impuestosDesembolso": 0,
         "fechaPrimerPago": {
            "#text": "2020-05-05",
            "fechaPrimerPago": "",
            "operacionUId": 156,
            "valorCuota": 268.67,
            "diasRevision": 0,
            "totalSeguros": 0,
            "plazo": 497,
            "producto": {
            "moneda": "$",
            "papel": "",
            "productoUId": 512,
            "nombre": "CUENTAS BOLSILLO, Bolsillo Gastos"
            },
            "capital": 20000,
            "tipoAmortizacionCod": 0,
            "totalIntereses": 2613.64,
            "seguros": {
            "codigo": 100,
            "descripcion": "ALICO - Vida %s/cap. inicial",
            "tipo": "VIDA",
            "modificable": "S",
            "importeFijo": 100,
            "porcentaje": 0.1
            },
            "fechaValor": {
            "#text": "2018-05-15",
            "fechaValor": "",
            "tasaEfectiva": 0,
            "totalImpuestos": 0,
            "coeficienteIVA": 0,
            "periodicidad": 30,
            "tasaEfectivaAnual": 25.590075,
            "totalPrestamo": 3223.97,
            "fechaVencimiento": {
               "#text": "2025-04-05",
               "fechaVencimiento": "",
               "tasa": 0,
               "redondeo": 0,
               "montoDesembolso": 3154.93,
               "comisiones": {
                  "sBTComisionPrestamo": [
                  {
                     "porcentaje": 0,
                     "descripcion": "Comision por venta seguro",
                     "importe": 0,
                     "codigo": 137
                  },
                  {
                     "porcentaje": 0,
                     "descripcion": "MiAuto - Otorgamiento",
                     "importe": 0,
                     "codigo": 300
                  }
                  ]
               },
               "totalComisiones": 0,
               "comisionesCuota": ""
            },
      }
      }
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPartnerInReq', fields: [{ Nombre: 'partnerUId', Tipo: 'Int', Comentarios: 'Identificador del Partner.' }, { Nombre: 'puntoVentaUId', Tipo: 'Int', Comentarios: 'Identificador del punto de venta.' }, { Nombre: 'vendedorUId', Tipo: 'Int', Comentarios: 'Identificador del vendedor.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTSimulacionOutput', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTSimulacionOutput', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital.' }, { Nombre: 'cft', Tipo: 'Double', Comentarios: 'Costo financiero total.' }, { Nombre: 'coeficienteIVA', Tipo: 'Double', Comentarios: 'Coeficiente IVA.' }, { Nombre: 'comisiones', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamosalida)', Comentarios: 'Listado de comisiones.' }, { Nombre: 'comisionesCuota', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamosalida)', Comentarios: 'Listado de comisiones de cuota.' }, { Nombre: 'comisionesDesembolso', Tipo: 'Double', Comentarios: 'Comisiones de desembolso.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaSimulacion](#sbtcuotasimulacion)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'diasRevision', Tipo: 'Int', Comentarios: 'Días de revisión.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'impuestosDesembolso', Tipo: 'Double', Comentarios: 'Impuestos de desembolso.' }, { Nombre: 'montoDesembolso', Tipo: 'Double', Comentarios: 'Monto de desembolso.' }, { Nombre: 'nomSucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'operacionUid', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Periodicidad.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'plus', Tipo: 'Double', Comentarios: 'Tasa plus.' }, { Nombre: 'precio', Tipo: 'Double', Comentarios: 'Precio.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'redondeo', Tipo: 'Double', Comentarios: 'Redondeo.' }, { Nombre: 'seguros', Tipo: '[sBTSeguroPrestamo](#sbtseguroprestamosalida)', Comentarios: 'Listado de seguros.' }, { Nombre: 'segurosDesembolso', Tipo: 'Double', Comentarios: 'Seguros de desembolso.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'tipoAmortizacionCod', Tipo: 'Byte', Comentarios: 'Código de tipo amortización.' }, { Nombre: 'tipoAmortizacionDsc', Tipo: 'String', Comentarios: 'Tipo de amortización.' }, { Nombre: 'totalComisiones', Tipo: 'Double', Comentarios: 'Total de comisiones.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Total de impuestos.' }, { Nombre: 'totalIntereses', Tipo: 'Double', Comentarios: 'Total de intereses.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total de préstamo.' }, { Nombre: 'totalSeguros', Tipo: 'Double', Comentarios: 'Total de seguros.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor de la cuota.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTCuotaSimulacion', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Monto de capital en la cuota.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'cuota', Tipo: 'Double', Comentarios: 'Importe total de la cuota.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Monto de impuestos en la cuota.' }, { Nombre: 'interes', Tipo: 'Double', Comentarios: 'Monto de intereses en la cuota.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Importe correspondiente a otros conceptos.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Monto de seguros en la cuota.' }, { Nombre: 'tipoCuota', Tipo: 'String', Comentarios: 'Tipo de la cuota (Capital/Interés).' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTSeguroPrestamoSalida', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código del seguro.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del seguro.' }, { Nombre: 'importeFijo', Tipo: 'Decimal', Comentarios: 'Importe fijo del seguro.' }, { Nombre: 'modificable', Tipo: 'String', Comentarios: 'Indica si es modificable.' }, { Nombre: 'porcentaje', Tipo: 'Decimal', Comentarios: 'Porcentaje del seguro.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo del seguro.' }] }, { typeName: 'sBTComisionPrestamoSalida', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código de comisión.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de la comisión.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la comisión.' }, { Nombre: 'porcentaje', Tipo: 'Double', Comentarios: 'Porcentaje de comisión.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
