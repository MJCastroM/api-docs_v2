import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularAmortizable',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularAmortizableComponent1750713394868 {
  pageTitle        = 'Simular Amortizable';
  description      = `Método para simular un préstamo amortizable.`;
  pubName    = 'BTPrestamos.SimularAmortizable';
  programa   = 'RBTPG523';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'parmsAux', Tipo: 'String', Comentarios: '[Hidden: Parámetros auxiliares. Se pueden enviar los siguientes [valores](#valores).]' }, { Nombre: 'sdtSimulacionInput', Tipo: '[sBTSimulacionInput](#sbtsimulacioninput)', Comentarios: 'Datos necesarios para la simulación.' }];
  outputData = [{ Nombre: 'sdtSimulacionOutput', Tipo: '[sBTSimulacionOutput](#sbtsimulacionoutput)', Comentarios: 'Datos de salida de la simulación.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de producto ni operación.' }, { Codigo: '30002', Descripcion: 'No se puede indicar producto y operación al mismo tiempo.' }, { Codigo: '30003', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30004', Descripcion: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }, { Codigo: '30005', Descripcion: 'No se recuperó la operación para el Identificador: [Número de Identificador].' }, { Codigo: '30006', Descripcion: 'La cuenta para el Identificador [Número de Identificador] no coincide con el de la operación.' }, { Codigo: '40001', Descripcion: 'La fecha valor no puede ser anterior a la de apertura.' }, { Codigo: '40002', Descripcion: 'No se puede indicar capital y valor cuota en una simulación.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularAmortizable>
         <bts:Btinreq>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
         <bts:sdtSimulacionInput>
            <bts:plazo>0</bts:plazo>
            <bts:tasa>36.000000</bts:tasa>
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
                  	<porcentaje></porcentaje>
               	<descripcion></descripcion>
               	<importe></importe>
               	<codigo></codigo>
               </bts:SdtsBTComisionPrestamo>
            </bts:comisiones>
            <bts:valorCuota>0.00</bts:valorCuota>
            <bts:productoUId>78</bts:productoUId>
            <bts:actividad></bts:actividad>
            <bts:periodosGracia>
               <bts:SdtsBTGraciaPrestamo>
                  <bts:aplicaSobre></bts:aplicaSobre>
                  <bts:numeroPeriodos></bts:numeroPeriodos>
                  <bts:extiendePlazo></bts:extiendePlazo>
                  <bts:mes></bts:mes>
                  <bts:periodoInicial></bts:periodoInicial>
                  <bts:aplicaSobreDsc></bts:aplicaSobreDsc>
               </bts:SdtsBTGraciaPrestamo>
            </bts:periodosGracia>
            <bts:operacionUId>1568</bts:operacionUId>
            <bts:monto>15543</bts:monto>
            <bts:seguros>
               <bts:SdtsBTSeguroPrestamo>
                  <bts:porcentaje>0.1000</bts:porcentaje>
                  <bts:descripcion></bts:descripcion>
                  <bts:tipo></bts:tipo>
                  <bts:importe>100.00</bts:importe>
                  <bts:codigo>100</bts:codigo>
               </bts:SdtsBTSeguroPrestamo>
            </bts:seguros>
            <bts:comisionesCuota>
               <bts:SdtsBTComisionPrestamo>
                  <bts:porcentaje></bts:porcentaje>
                  <bts:descripcion></bts:descripcion>
                  <bts:importe></bts:importe>
                  <bts:codigo></bts:codigo>
               </bts:SdtsBTComisionPrestamo>
            </bts:comisionesCuota>
            <bts:fechaValor>2023-11-14</bts:fechaValor>
            <bts:cantidadCuotas>6</bts:cantidadCuotas>
         </bts:sdtSimulacionInput>
      </bts:BTPrestamos.SimularAmortizable>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
    \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularAmortizable\' \
    -H \'cache-control: no-cache\' \
    -H \'content-type: application/json\' \
    -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
    -d \'{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "AC",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
      "clienteUId": 1,
      "sdtSimulacionInput": {
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
            "codigo": ""
         }
         },
         "valorCuota": 0,
         "productoUId": 78,
         "actividad": "",
         "periodosGracia": {
         "SdtsBTGraciaPrestamo": {
            "aplicaSobre": "",
            "numeroPeriodos": "",
            "extiendePlazo": "",
            "mes": "",
            "periodoInicial": "",
            "aplicaSobreDsc": ""
         }
         },
         "operacionUId": 1568,
         "monto": 15543,
         "seguros": {
         "SdtsBTSeguroPrestamo": {
            "porcentaje": 0.1,
            "descripcion": "",
            "tipo": "",
            "importe": 100,
            "codigo": 100
         }
         },
         "comisionesCuota": {
         "SdtsBTComisionPrestamo": {
            "porcentaje": "",
            "descripcion": "",
            "importe": "",
            "codigo": ""
         }
         },
         "fechaValor": "2023-11-14",
         "cantidadCuotas": 6
      }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularAmortizableResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>52005b89a6F955E77534D3E0</Token>
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
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>677</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularAmortizable</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-04-23</Fecha>
            <Hora>16:17:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularAmortizableResponse>
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
            }
          }
        }
      }
    }
  },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTPrestamos.SimularAmortizable",
        "Fecha": "2019-11-19",
        "Hora": "13:05:22",
        "Requerimiento": "",
        "Numero": 6924,
        "Estado": "OK"
    }
}` }
  };

  structuredTypes = [];
}
