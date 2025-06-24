import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ResimularRefinanciacion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ResimularRefinanciacionComponent1750713394862 {
  pageTitle        = 'Resimular Refinanciación';
  description      = `Método para resimular la refinanciación de un préstamo.`;
  pubName    = 'BTPrestamos.ResimularRefinanciacion';
  programa   = 'RBTPG575';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'simulacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la simulación.' }, { Nombre: 'sdtSimulacionUpdate', Tipo: '[sBTSimulacionUpdate](#sbtsimulacionupdate)', Comentarios: 'Datos de la resimulación.' }, { Nombre: 'accion', Tipo: 'String', Comentarios: '[Hidden: Valor fijo "REFI" para este método].' }];
  outputData = [{ Nombre: 'sdtSimulacion', Tipo: '[sBTSimulacionOutput](#sbtsimulacionoutput)', Comentarios: 'Datos de salida de la simulación.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de Refinanciación.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }, { Codigo: '30004', Descripcion: 'El identificador de Refinanciación no es válido.' }, { Codigo: '30005', Descripcion: 'El préstamo no pertenece al cliente.' }, { Codigo: '30006', Descripcion: 'No se recuperó la operacionUId de la operación a refinanciar.' }, { Codigo: '30007', Descripcion: 'No se recuperó la operación a cancelar para el identificador [Número de Identificador].' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ResimularRefinanciacion>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>308D1CEF6605E4CB1E0F5F84</bts:Token>
         </bts:Btinreq>
         <bts:simulacionUId>16</bts:simulacionUId>
         <bts:sdtSimulacionUpdate>
            <bts:fechaPrimerPago>2023-06-21</bts:fechaPrimerPago>
            <bts:otrosConceptos>
               <bts:SdtsBTConcepto>
                  <bts:texto></bts:texto>
                  <bts:valor></bts:valor>
                  <bts:concepto></bts:concepto>
               </bts:SdtsBTConcepto>
            </bts:otrosConceptos>
            <bts:diaPago></bts:diaPago>
            <bts:clienteUid>370</bts:clienteUid>
         </bts:sdtSimulacionUpdate>
      </bts:BTPrestamos.ResimularRefinanciacion>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ResimularRefinanciacion=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "GZ",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
      "simulacionUId": 16,
      "sdtSimulacionUpdate": {
         "fechaPrimerPago": "2023-06-21",
         "otrosConceptos": {
         "SdtsBTConcepto": {
            "texto": "",
            "valor": "",
            "concepto": ""
         }
         },
         "diaPago": "",
         "clienteUid": 370
      }
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ResimularRefinanciacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>308D1CEF6605E4CB1E0F5F84</Token>
         </Btinreq>
         <sdtSimulacion>
            <cft>218.87</cft>
            <plus>0.0</plus>
            <nomSucursal>Casa Matriz</nomSucursal>
            <otrosConceptos></otrosConceptos>
            <tasaNominalAnual>5.0</tasaNominalAnual>
            <precio>0.0</precio>
            <tipoAmortizacionDsc>Francés con Seg.e Impu.</tipoAmortizacionDsc>
            <cronograma>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>42186.64</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>22</nroCuota>
                  <intereses>522.48</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2025-03-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>57.21</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1157.21</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>42378.99</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>23</nroCuota>
                  <intereses>349.11</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2025-04-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>38.23</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1138.23</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>42572.22</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>24</nroCuota>
                  <intereses>174.95</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2025-05-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>19.16</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1119.16</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
            </cronograma>
            <comisionesDesembolso>10000.0</comisionesDesembolso>
            <segurosDesembolso>0.0</segurosDesembolso>
            <cantidadCuotas>24</cantidadCuotas>
            <impuestosDesembolso>0.0</impuestosDesembolso>
            <fechaPrimerPago>2023-06-21</fechaPrimerPago>
            <operacionUId>415</operacionUId>
            <valorCuota>43866.33</valorCuota>
            <diasRevision>0</diasRevision>
            <totalSeguros>5565.6</totalSeguros>
            <plazo>690</plazo>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>198</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <capital>1000000.0</capital>
            <tipoAmortizacionCod>3</tipoAmortizacionCod>
            <totalIntereses>46717.75</totalIntereses>
            <seguros>
               <SdtsBTSeguroPrestamo>
                  <porcentaje>0.0</porcentaje>
                  <descripcion>SANCOR- Desempleo %saldos</descripcion>
                  <importe>5565.6</importe>
                  <tipo>DESEMPLEO</tipo>
                  <codigo>200</codigo>
               </SdtsBTSeguroPrestamo>
            </seguros>
            <fechaValor>2025-05-30</fechaValor>
            <tasaEfectiva>0.0</tasaEfectiva>
            <coeficienteIVA>0.0</coeficienteIVA>
            <totalImpuestos>0.0</totalImpuestos>
            <periodicidad>30</periodicidad>
            <tasaEfectivaAnual>5.116339</tasaEfectivaAnual>
            <totalPrestamo>1062791.92</totalPrestamo>
            <fechaVencimiento>2025-05-21</fechaVencimiento>
            <tasa>5.0</tasa>
            <redondeo>0.0</redondeo>
            <montoDesembolso>990000.0</montoDesembolso>
            <comisiones>
               <SdtsBTComisionPrestamo>
                  <porcentaje>0.0</porcentaje>
                  <descripcion>Hipotecario - Importe Fijo</descripcion>
                  <importe>0.0</importe>
                  <modificable/>
                  <codigo>141</codigo>
               </SdtsBTComisionPrestamo>
               <SdtsBTComisionPrestamo>
                  <porcentaje>0.0</porcentaje>
                  <descripcion>F.H.A.</descripcion>
                  <importe>10000.0</importe>
                  <modificable/>
                  <codigo>200</codigo>
               </SdtsBTComisionPrestamo>
            </comisiones>
            <totalComisiones>10508.57</totalComisiones>
            <comisionesCuota>
               <SdtsBTComisionPrestamo>
                  <porcentaje>0.0</porcentaje>
                  <descripcion>F.H.A.</descripcion>
                  <importe>508.57</importe>
                  <modificable/>
                  <codigo>200</codigo>
               </SdtsBTComisionPrestamo>
            </comisionesCuota>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35545</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ResimularRefinanciacion</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-05-26</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>14:58:49</Hora>
         </Btoutreq>
      </BTPrestamos.ResimularRefinanciacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "sdtSimulacion": {
          "cft": 218.87,
          "plus": 0,
          "nomSucursal": "Casa Matriz",
          "otrosConceptos": "",
          "tasaNominalAnual": 5,
          "precio": 0,
          "tipoAmortizacionDsc": "Francés con Seg.e Impu.",
          "cronograma": {
            "SdtsBTCuotaSimulacion": [
              {
                "otrosConceptos": 0,
                "capital": 42186.64,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 22,
                "intereses": 522.48,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2025-03-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 57.21,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1157.21,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 42378.99,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 23,
                "intereses": 349.11,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2025-04-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 38.23,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1138.23,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 42572.22,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 24,
                "intereses": 174.95,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2025-05-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 19.16,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1119.16,
                "comisiones": 0
              }
            ]
          },
          "comisionesDesembolso": 10000,
          "segurosDesembolso": 0,
          "cantidadCuotas": 24,
          "impuestosDesembolso": 0,
          "fechaPrimerPago": "2023-06-21",
          "operacionUId": 415,
          "valorCuota": 43866.33,
          "diasRevision": 0,
          "totalSeguros": 5565.6,
          "plazo": 690,
          "producto": {
            "moneda": "$",
            "papel": "$",
            "productoUId": 198,
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
          },
          "capital": 1000000,
          "tipoAmortizacionCod": 3,
          "totalIntereses": 46717.75,
          "seguros": {
            "SdtsBTSeguroPrestamo": {
              "porcentaje": 0,
              "descripcion": "SANCOR- Desempleo %saldos",
              "importe": 5565.6,
              "tipo": "DESEMPLEO",
              "codigo": 200
            }
          },
          "fechaValor": "2025-05-30",
          "tasaEfectiva": 0,
          "coeficienteIVA": 0,
          "totalImpuestos": 0,
          "periodicidad": 30,
          "tasaEfectivaAnual": 5.116339,
          "totalPrestamo": 1062791.92,
          "fechaVencimiento": "2025-05-21",
          "tasa": 5,
          "redondeo": 0,
          "montoDesembolso": 990000,
          "comisiones": {
            "SdtsBTComisionPrestamo": [
              {
                "porcentaje": 0,
                "descripcion": "Hipotecario - Importe Fijo",
                "importe": 0,
                "modificable": "",
                "codigo": 141
              },
              {
                "porcentaje": 0,
                "descripcion": "F.H.A.",
                "importe": 10000,
                "modificable": "",
                "codigo": 200
              }
            ]
          },
          "totalComisiones": 10508.57,
          "comisionesCuota": {
            "SdtsBTComisionPrestamo": {
              "porcentaje": 0,
              "descripcion": "F.H.A.",
              "importe": 508.57,
              "modificable": "",
              "codigo": 200
            }
          }
        },
    "Erroresnegocio":,
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTPrestamos.ResimularRefinanciacion",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTSimulacionUpdate', fields: [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'diaPago', Tipo: 'Byte', Comentarios: 'Días de pago.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha del primer pago.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto1)', Comentarios: 'Otros conceptos.' }] }, { typeName: 'sBTConcepto1', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTSimulacionOutput', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTSimulacionOutput', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital.' }, { Nombre: 'cft', Tipo: 'Double', Comentarios: 'Costo financiero total.' }, { Nombre: 'coeficienteIVA', Tipo: 'Double', Comentarios: 'Coeficiente IVA.' }, { Nombre: 'comisiones', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamo)', Comentarios: 'Listado de comisiones.' }, { Nombre: 'comisionesCuota', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamo)', Comentarios: 'Listado de comisiones de cuota.' }, { Nombre: 'comisionesDesembolso', Tipo: 'Double', Comentarios: 'Comisiones de desembolso.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaSimulacion](#sbtcuotasimulacion)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'diasRevision', Tipo: 'Int', Comentarios: 'Días de revisión.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'impuestosDesembolso', Tipo: 'Double', Comentarios: 'Impuestos de desembolso.' }, { Nombre: 'montoDesembolso', Tipo: 'Double', Comentarios: 'Monto de desembolso.' }, { Nombre: 'nomSucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'operacionUid', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto2)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Periodicidad.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'plus', Tipo: 'Double', Comentarios: 'Tasa plus.' }, { Nombre: 'precio', Tipo: 'Double', Comentarios: 'Precio.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'redondeo', Tipo: 'Double', Comentarios: 'Redondeo.' }, { Nombre: 'seguros', Tipo: '[sBTSeguroPrestamo](#sbtseguroprestamo)', Comentarios: 'Listado de seguros.' }, { Nombre: 'segurosDesembolso', Tipo: 'Double', Comentarios: 'Seguros de desembolso.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'tipoAmortizacionCod', Tipo: 'Byte', Comentarios: 'Código de tipo amortización.' }, { Nombre: 'tipoAmortizacionDsc', Tipo: 'String', Comentarios: 'Tipo de amortización.' }, { Nombre: 'totalComisiones', Tipo: 'Double', Comentarios: 'Total de comisiones.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Total de impuestos.' }, { Nombre: 'totalIntereses', Tipo: 'Double', Comentarios: 'Total de intereses.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total de préstamo.' }, { Nombre: 'totalSeguros', Tipo: 'Double', Comentarios: 'Total de seguros.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor de la cuota.' }] }, { typeName: 'sBTConcepto2', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTCuotaSimulacion', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Monto de capital en la cuota.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'cuota', Tipo: 'Double', Comentarios: 'Importe total de la cuota.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Monto de impuestos en la cuota.' }, { Nombre: 'interes', Tipo: 'Double', Comentarios: 'Monto de intereses en la cuota.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Importe correspondiente a otros conceptos.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Monto de seguros en la cuota.' }, { Nombre: 'tipoCuota', Tipo: 'String', Comentarios: 'Tipo de la cuota (Capital/Interés).' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto3)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto3', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTSeguroPrestamo', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código del seguro.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del seguro.' }, { Nombre: 'importeFijo', Tipo: 'Decimal', Comentarios: 'Importe fijo del seguro.' }, { Nombre: 'modificable', Tipo: 'String', Comentarios: 'Indica si es modificable.' }, { Nombre: 'porcentaje', Tipo: 'Decimal', Comentarios: 'Porcentaje del seguro.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo del seguro.' }] }, { typeName: 'sBTComisionPrestamo', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código de comisión.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de la comisión.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la comisión.' }, { Nombre: 'porcentaje', Tipo: 'Double', Comentarios: 'Porcentaje de comisión.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
