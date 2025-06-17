import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-SimularRefinanciacion',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularRefinanciacionComponent {
  // Cabecera e info-card
  pageTitle = 'Simular Refinanciacion';
  description = ``;
  pubName    = '';
  programa   = '';
  scope      = '';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = [];
  inputData  = [];
  outputCols = [];
  outputData = [];
  errorCols  = [];
  errors     = [];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularRefinanciacion>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>BA82EC9B3D92C048CE2FEEC7</bts:Token>
         </bts:Btinreq>
         <bts:simulacionUId>21882</bts:simulacionUId>
         <bts:clienteUId>4</bts:clienteUId>
         <bts:sdtSimulacionRefinanciacion>
            <bts:plazo>0</bts:plazo>
            <bts:tasa>36</bts:tasa>
            <bts:diaPago>14</bts:diaPago>
            <bts:ballon></bts:ballon>
            <bts:cuotasExtraordinarias>
               <bts:SdtsBTCuotaExtraordinaria>
                  <bts:mes></bts:mes>
                  <bts:porcentajeCuota></bts:porcentajeCuota>
               </bts:SdtsBTCuotaExtraordinaria>
            </bts:cuotasExtraordinarias>
            <bts:pizarra>0</bts:pizarra>
            <bts:fechaVencimiento>2025-11-14</bts:fechaVencimiento>
            <bts:periodoCuotas>35</bts:periodoCuotas>
            <bts:fechaPrimerPago>2023-11-14</bts:fechaPrimerPago>
            <bts:comisiones>
               <bts:SdtsBTComisionPrestamo>
                  <bts:porcentaje></bts:porcentaje>
                  <bts:descripcion></bts:descripcion>
                  <bts:importe></bts:importe>
                  <bts:modificable></bts:modificable>
                  <bts:codigo></bts:codigo>
               </bts:SdtsBTComisionPrestamo>
            </bts:comisiones>
            <bts:actividad>3</bts:actividad>
            <bts:importesCancelacion>
               <bts:totalSeguros></bts:totalSeguros>
               <bts:otrosSeguros></bts:otrosSeguros>
               <bts:totalComisiones></bts:totalComisiones>
               <bts:intereses></bts:intereses>
               <bts:impuestoComision></bts:impuestoComision>
               <bts:otrosConceptos></bts:otrosConceptos>
               <bts:impuestoInteres></bts:impuestoInteres>
               <bts:impuestoMora></bts:impuestoMora>
               <bts:interesMora></bts:interesMora>
               <bts:capital></bts:capital>
               <bts:seguroIncendio></bts:seguroIncendio>
               <bts:comisionCuota></bts:comisionCuota>
               <bts:comisionMora></bts:comisionMora>
               <bts:impuestoComisionMora></bts:impuestoComisionMora>
               <bts:seguroVehicular></bts:seguroVehicular>
               <bts:entregaInicial></bts:entregaInicial>
               <bts:totalImpuestos></bts:totalImpuestos>
               <bts:seguroVida></bts:seguroVida>
            </bts:importesCancelacion>
            <bts:periodosGracia>
               <bts:SdtsBTGraciaPrestamo>
                  <bts:aplicaSobre></bts:aplicaSobre>
                  <bts:extiendePlazo></bts:extiendePlazo>
                  <bts:numeroPeriodos></bts:numeroPeriodos>
                  <bts:mes></bts:mes>
                  <bts:periodoInicial></bts:periodoInicial>
                  <bts:aplicaSobreDsc></bts:aplicaSobreDsc>
               </bts:SdtsBTGraciaPrestamo>
            </bts:periodosGracia>
            <bts:operacionUId></bts:operacionUId>
            <bts:seguros>
               <bts:SdtsBTSeguroPrestamo>
                  <bts:porcentaje></bts:porcentaje>
                  <bts:descripcion></bts:descripcion>
                  <bts:importe></bts:importe>
                  <bts:tipo></bts:tipo>
                  <bts:codigo></bts:codigo>
               </bts:SdtsBTSeguroPrestamo>
            </bts:seguros>
            <bts:comisionesCuota>
               <bts:SdtsBTComisionPrestamo>
                  <bts:porcentaje></bts:porcentaje>
                  <bts:descripcion></bts:descripcion>
                  <bts:importe></bts:importe>
                  <bts:modificable></bts:modificable>
                  <bts:codigo></bts:codigo>
               </bts:SdtsBTComisionPrestamo>
            </bts:comisionesCuota>
            <bts:fechaValor>2023-11-14</bts:fechaValor>
            <bts:cantidadCuotas>5</bts:cantidadCuotas>
         </bts:sdtSimulacionRefinanciacion>
      </bts:BTPrestamos.SimularRefinanciacion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
   'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularRefinanciacion' \
   -H 'cache-control: no-cache' \
   -H 'content-type: application/json' \
   -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
   -d '{
   "Btinreq": {
      "Requerimiento": 0,
      "Canal": "BTDIGITAL",
      "Device": "AC",
      "Usuario": "Instalador",
      "Token": "8e3a8ef2dd99865B3A2E76CF"
   },
    "simulacionUId": 21882,
   "clienteUId": 4,
   "sdtSimulacionRefinanciacion": {
      "plazo": 0,
      "tasa": 36,
      "diaPago": 14,
      "ballon": "",
      "cuotasExtraordinarias": {
      "SdtsBTCuotaExtraordinaria": {
         "mes": "",
         "porcentajeCuota": ""
      }
      },
      "pizarra": 0,
      "fechaVencimiento": "2025-11-14",
      "periodoCuotas": 35,
      "fechaPrimerPago": "2023-11-14",
      "comisiones": {
      "SdtsBTComisionPrestamo": {
         "porcentaje": "",
         "descripcion": "",
         "importe": "",
         "modificable": "",
         "codigo": ""
      }
      },
      "actividad": 3,
      "importesCancelacion": {
      "totalSeguros": "",
      "otrosSeguros": "",
      "totalComisiones": "",
      "intereses": "",
      "impuestoComision": "",
      "otrosConceptos": "",
      "impuestoInteres": "",
      "impuestoMora": "",
      "interesMora": "",
      "capital": "",
      "seguroIncendio": "",
      "comisionCuota": "",
      "comisionMora": "",
      "impuestoComisionMora": "",
      "seguroVehicular": "",
      "entregaInicial": "",
      "totalImpuestos": "",
      "seguroVida": ""
      },
      "periodosGracia": {
      "SdtsBTGraciaPrestamo": {
         "aplicaSobre": "",
         "extiendePlazo": "",
         "numeroPeriodos": "",
         "mes": "",
         "periodoInicial": "",
         "aplicaSobreDsc": ""
      }
      },
      "operacionUId": "",
      "seguros": {
      "SdtsBTSeguroPrestamo": {
         "porcentaje": "",
         "descripcion": "",
         "importe": "",
         "tipo": "",
         "codigo": ""
      }
      },
      "comisionesCuota": {
      "SdtsBTComisionPrestamo": {
         "porcentaje": "",
         "descripcion": "",
         "importe": "",
         "modificable": "",
         "codigo": ""
      }
      },
      "fechaValor": "2023-11-14",
      "cantidadCuotas": 5
   }
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPartners.SimularRefinanciacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1222A10B1A106FB813BD7AE9</Token>
         </Btinreq>
         <sdtSimulacionOutput>
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
         </sdtSimulacionOutput>
         <montoPerdon>0</montoPerdon>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPartners.SimularRefinanciacion</Servicio>
            <Fecha>2021-03-18</Fecha>
            <Hora>10:03:41</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8032</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPartners.SimularRefinanciacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtSimulacionOutput": {
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
            "montoPerdon":0,
            "Erroresnegocio": "",
            "Btoutreq": {
               "Canal": "BTDIGITAL",
               "Servicio": "BTPartners.SimularRefinanciacion",
               "Fecha": "2021-03-18",
               "Hora": "10:03:41",
               "Requerimiento": 1,
               "Numero": 8032,
               "Estado": "OK"
            }
            }
         }
      }
      }
   }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Actividad.' }, { Nombre: 'ballon', Tipo: 'Double', Comentarios: 'Ballon.' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'comisiones', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamo)', Comentarios: 'Listado de comisiones.' }, { Nombre: 'comisionesCuota', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamo)', Comentarios: 'Listado de comisiones.' }, { Nombre: 'cuotasExtraordinarias', Tipo: '[sBTCuotaExtraordinaria](#sbtcuotaextraordinaria)', Comentarios: 'Listado de datos de cuota extraordinaria.' }, { Nombre: 'diaPago', Tipo: 'Byte', Comentarios: 'Dia de pago.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha del primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha del vencimiento.' }, { Nombre: 'importesCancelacion', Tipo: '[sBTImportesCancelacion](#sbtimportescancelacion)', Comentarios: 'Datos del importe de cancelacion.' }, { Nombre: 'operacionUid', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'periodoCuotas', Tipo: 'Int', Comentarios: 'Periodo entre cuotas.' }, { Nombre: 'periodosGracia', Tipo: '[sBTGraciaPrestamo](#sbtgraciaprestamo)', Comentarios: 'Listado de periodos de gracia.' }, { Nombre: 'pizarra', Tipo: 'Int', Comentarios: 'Pizarra.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'seguros', Tipo: '[sBTSeguroPrestamo](#sBTSeguroPrestamo)', Comentarios: 'Listado de seguros.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: '### sBTCuotaExtraordinaria', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTCuotaExtraordinaria son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'mes', Tipo: 'Byte', Comentarios: 'Mes.' }, { Nombre: 'porcentajeCuota', Tipo: 'Double', Comentarios: 'Porcentaje de cuota.' }, { Nombre: '### sBTImportesCancelacion', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTImportesCancelacion son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital.' }, { Nombre: 'comisionCuota', Tipo: 'Double', Comentarios: 'Monto total de comision de cuota.' }, { Nombre: 'comisionMora', Tipo: 'Double', Comentarios: 'Monto total de comision de mora.' }, { Nombre: 'entregaInicial', Tipo: 'Double', Comentarios: 'Entrega inicial.' }, { Nombre: 'impuestoComision', Tipo: 'Double', Comentarios: 'Monto total para comision de impuestos.' }, { Nombre: 'impuestoComisionMora', Tipo: 'Double', Comentarios: 'Monto total de impuesto de comision de mora.' }, { Nombre: 'impuestoInteres', Tipo: 'Double', Comentarios: 'Monto total de impuesto de intereses.' }, { Nombre: 'impuestoMora', Tipo: 'Double', Comentarios: 'Monto total de impuesto de mora.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Monto total para intereses.' }, { Nombre: 'interesMora', Tipo: 'Double', Comentarios: 'Monto total de intereses de mora.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Monto total de otros conceptos.' }, { Nombre: 'otrosSeguros', Tipo: 'Double', Comentarios: 'Monto total para otros seguros.' }, { Nombre: 'seguroIncendio', Tipo: 'Double', Comentarios: 'Monto total de seguro de incendio.' }, { Nombre: 'seguroVehicular', Tipo: 'Double', Comentarios: 'Monto total de seguro vehicular.' }, { Nombre: 'seguroVida', Tipo: 'Double', Comentarios: 'Seguro de vida.' }, { Nombre: 'totalComisiones', Tipo: 'Double', Comentarios: 'Monto total para comisiones.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Total de impuestos.' }, { Nombre: 'totalSeguros', Tipo: 'Double', Comentarios: 'Monto total para seguros.' }, { Nombre: '### sBTGraciaPrestamo', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTGraciaPrestamo son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'aplicaSobre', Tipo: 'String', Comentarios: 'Aplica sobre.' }, { Nombre: 'aplicaSobreDsc', Tipo: 'String', Comentarios: 'Descripcion de aplicacion de sobre.' }, { Nombre: 'extiendePlazo', Tipo: 'String', Comentarios: 'Extiende plazo.' }, { Nombre: 'mes', Tipo: 'Byte', Comentarios: 'Mes.' }, { Nombre: 'numeroPeriodos', Tipo: 'Int', Comentarios: 'Numero de periodos.' }, { Nombre: 'periodoInicial', Tipo: 'Int', Comentarios: 'Periodo inicial.' }, { Nombre: '### sBTSeguroPrestamo', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTSeguroPrestamo son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Codigo del seguro.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion del seguro.' }, { Nombre: 'importeFijo', Tipo: 'Decimal', Comentarios: 'Importe fijo del seguro.' }, { Nombre: 'modificable', Tipo: 'String', Comentarios: 'Indica si es modificable.' }, { Nombre: 'porcentaje', Tipo: 'Decimal', Comentarios: 'Porcentaje del seguro.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo del seguro.' }, { Nombre: '### sBTComisionPrestamo', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTComisionPrestamo son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Codigo de comision.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion de la comision.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la comision.' }, { Nombre: 'porcentaje', Tipo: 'Double', Comentarios: 'Porcentaje de comision.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTSimulacionOutput', Tipo: '', Comentarios: '' }, { Nombre: '### sBTSimulacionOutput', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTSimulacionOutput son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital.' }, { Nombre: 'cft', Tipo: 'Double', Comentarios: 'Costo financiero total.' }, { Nombre: 'coeficienteIVA', Tipo: 'Double', Comentarios: 'Coeficiente IVA.' }, { Nombre: 'comisiones', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamosalida)', Comentarios: 'Listado de comisiones.' }, { Nombre: 'comisionesCuota', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamosalida)', Comentarios: 'Listado de comisiones de cuota.' }, { Nombre: 'comisionesDesembolso', Tipo: 'Double', Comentarios: 'Comisiones de desembolso.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaSimulacion](#sbtcuotasimulacion)', Comentarios: 'Cronograma del prestamo.' }, { Nombre: 'diasRevision', Tipo: 'Int', Comentarios: 'Dias de revision.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'impuestosDesembolso', Tipo: 'Double', Comentarios: 'Impuestos de desembolso.' }, { Nombre: 'montoDesembolso', Tipo: 'Double', Comentarios: 'Monto de desembolso.' }, { Nombre: 'nomSucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'operacionUid', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Periodicidad.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'plus', Tipo: 'Double', Comentarios: 'Tasa plus.' }, { Nombre: 'precio', Tipo: 'Double', Comentarios: 'Precio.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'redondeo', Tipo: 'Double', Comentarios: 'Redondeo.' }, { Nombre: 'seguros', Tipo: '[sBTSeguroPrestamo](#sbtseguroprestamosalida)', Comentarios: 'Listado de seguros.' }, { Nombre: 'segurosDesembolso', Tipo: 'Double', Comentarios: 'Seguros de desembolso.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'tipoAmortizacionCod', Tipo: 'Byte', Comentarios: 'Codigo de tipo amortizacion.' }, { Nombre: 'tipoAmortizacionDsc', Tipo: 'String', Comentarios: 'Tipo de amortizacion.' }, { Nombre: 'totalComisiones', Tipo: 'Double', Comentarios: 'Total de comisiones.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Total de impuestos.' }, { Nombre: 'totalIntereses', Tipo: 'Double', Comentarios: 'Total de intereses.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total de prestamo.' }, { Nombre: 'totalSeguros', Tipo: 'Double', Comentarios: 'Total de seguros.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor de la cuota.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: '---------', Tipo: '-----------', Comentarios: '-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTCuotaSimulacion', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: '---------', Tipo: '-----------', Comentarios: '-----------' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Monto de capital en la cuota.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'cuota', Tipo: 'Double', Comentarios: 'Importe total de la cuota.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Monto de impuestos en la cuota.' }, { Nombre: 'interes', Tipo: 'Double', Comentarios: 'Monto de intereses en la cuota.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Importe correspondiente a otros conceptos.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Monto de seguros en la cuota.' }, { Nombre: 'tipoCuota', Tipo: 'String', Comentarios: 'Tipo de la cuota (Capital/Interes).' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTProducto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTSeguroPrestamoSalida', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTSeguroPrestamo son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: '---------', Tipo: '-----------', Comentarios: '-----------' }, { Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Codigo del seguro.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion del seguro.' }, { Nombre: 'importeFijo', Tipo: 'Decimal', Comentarios: 'Importe fijo del seguro.' }, { Nombre: 'modificable', Tipo: 'String', Comentarios: 'Indica si es modificable.' }, { Nombre: 'porcentaje', Tipo: 'Decimal', Comentarios: 'Porcentaje del seguro.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo del seguro.' }, { Nombre: '### sBTComisionPrestamoSalida', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTComisionPrestamo son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: '---------', Tipo: '-----------', Comentarios: '-----------' }, { Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Codigo de comision.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion de la comision.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la comision.' }, { Nombre: 'porcentaje', Tipo: 'Double', Comentarios: 'Porcentaje de comision.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
