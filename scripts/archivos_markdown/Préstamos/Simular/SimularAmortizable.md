---
title: Simular Amortizable
breadcrumb: false
pageInfo: false
toc: false
contributors: false
editLink: false
lastUpdated: false
prev: false
next: false
comment: false
footer: false
backtotop: false
---

<!-- ABRE LOS DATOS DEL MÉTODO -->
::: note Método para simular un préstamo amortizable.

**Nombre publicación:** BTPrestamos.SimularAmortizable

**Programa:** RBTPG523

**Global/País:** Global
:::
<!-- CIERRA LOS DATOS DEL MÉTODO -->

<!-- ABRE LA TABLA DE DATOS -->
::: tabs #Datos

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador único de cliente.
parmsAux | String | [Hidden: Parámetros auxiliares. Se pueden enviar los siguientes [valores](#valores).]
sdtSimulacionInput | [sBTSimulacionInput](#sbtsimulacioninput) | Datos necesarios para la simulación.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtSimulacionOutput | [sBTSimulacionOutput](#sbtsimulacionoutput) | Datos de salida de la simulación.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió identificador de producto ni operación.
30002 | No se puede indicar producto y operación al mismo tiempo.
30003 | No se recibió el identificador de cliente.
30004 | No se recuperó la cuenta para el Identificador: [Número de Identificador].
30005 | No se recuperó la operación para el Identificador: [Número de Identificador].
30006 | La cuenta para el Identificador [Número de Identificador] no coincide con el de la operación.
40001 | La fecha valor no puede ser anterior a la de apertura.
40002 | No se puede indicar capital y valor cuota en una simulación.
:::
<!-- CIERRA LA TABLA DE DATOS -->

<!-- ABRE VALORES -->
::: details Valores Parámetros Auxiliares

### Valores

::: center 
Este campo se compone de 4 valores S/N separados por ; (por ejemplo N;S;S;S), que corresponden a:

Posición |  Valor | Comentarios
:--------- | :--------- | :-----------
1 | [S,N] (Valor por defecto "N") | Permite indicar si el servicio controla el ingreso del campo clienteUId.
2 | [S,N] (Valor por defecto "N") | Seguros. "N": Si no se envía se asumen los preseteados. "S": Si no se envía no se asume ninguno.
3 | [S,N] (Valor por defecto "N") | Comisiones. "N": Si no se envía se asumen los preseteados. "S": Si no se envía no se asume ninguno.
4 | [S,N] (Valor por defecto "N") | Comisiones por Cuota. "N": Si no se envía se asumen los preseteados. "S": Si no se envía no se asume ninguno.

:::
<!-- CIERRA VALORES -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación
::: code-tabs #Formato

@tab XML
```xml
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
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularAmortizable' \
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
}'
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta
::: code-tabs #Formato

@tab XML
```xml
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
</SOAP-ENV:Envelope>
```

@tab JSON
```json
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
}
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->

::: details sBTSimulacionInput  

### sBTSimulacionInput

::: center 
Los campos del tipo de dato estructurado sBTSimulacionInput son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
actividad | Long | Código de actividad.
ballon | Double | Ballon.
cantidadCuotas | Int | Cantidad de cuotas.
comisiones | [sBTComisionPrestamo](#sbtcomisionprestamo) | Listado de comisiones.
comisionesCuota | [sBTComisionPrestamo](#sbtcomisionprestamo) | Listado de comisiones.
cuotasExtraordinarias | [sBTCuotaExtraordinaria](#sbtcuotaextraordinaria) | Listado de datos de cuota extraordinaria.
diaPago | Byte | Día de pago.
fechaPrimerPago | Date | Fecha de primer pago.
fechaValor | Date | Fecha valor.
fechaVencimiento | Date | Fecha de vencimiento.
monto | Double | Monto.
operacionUId | Long | Identificador único de la operación.
periodoCuotas | Int | Período entre cuotas.
periodosGracia | [sBTGraciaPrestamo](#sbtgraciaprestamo) | Listado de períodos de gracia.
pizarra | Int | Pizarra.
plazo | Int | Plazo.
productoUId | Long | Identificador único de producto.
seguros | [sBTSeguroPrestamo](#sbtseguroprestamo) | Listado de seguros.
tasa | Double | Tasa.
valorCuota | Double | Valor de la cuota.

### sBTCuotaExtraordinaria

::: center  
Los campos del tipo de dato estructurado sBTCuotaExtraordinaria son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
mes | Byte | Mes.
porcentajeCuota | Double | Porcentaje de cuota.

### sBTComisionPrestamo

::: center 
Los campos del tipo de dato estructurado sBTComisionPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
codigo | Int | Código de comisión.
descripcion | String | Descripción de la comisión.
importe | Double | Importe de la comisión.
porcentaje | Double | Porcentaje de comisión.

### sBTGraciaPrestamo

::: center 
Los campos del tipo de dato estructurado sBTGraciaPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
aplicaSobre | String | Aplica sobre.
aplicaSobreDsc | String | Descripción de aplicación de sobre.
extiendePlazo | String | Extiende plazo.
mes | Byte | Mes.
numeroPeriodos | Int | Número de períodos.
periodoInicial | Int | Período inicial. 

### sBTSeguroPrestamo

::: center
Los campos del tipo de dato estructurado sBTSeguroPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
codigo | Int | Código del seguro.
descripcion | String | Descripción del seguro.
importeFijo | Decimal | Importe fijo del seguro.
modificable | String | Indica si es modificable.
porcentaje | Decimal | Porcentaje del seguro.
tipo | String | Tipo del seguro.
:::

::: details sBTSimulacionOutput  

### sBTSimulacionOutput

::: center 
Los campos del tipo de dato estructurado sBTSimulacionOutput son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
cantidadCuotas | Int | Cantidad de cuotas.
capital | Double | Capital.
cft | Double | Costo financiero total.
coeficienteIVA | Double | Coeficiente IVA.
comisiones | [sBTComisionPrestamo](#sbtcomisionprestamosalida) | Listado de comisiones.
comisionesCuota | [sBTComisionPrestamo](#sbtcomisionprestamosalida) | Listado de comisiones de cuota.
comisionesDesembolso | Double | Comisiones de desembolso.
cronograma | [sBTCuotaSimulacion](#sbtcuotasimulacion) | Cronograma del préstamo.
diasRevision | Int | Días de revisión.
fechaPrimerPago | Date | Fecha de primer pago.
fechaValor | Date | Fecha valor.
fechaVencimiento | Date | Fecha de vencimiento.
impuestosDesembolso | Double | Impuestos de desembolso.
montoDesembolso | Double | Monto de desembolso.
nomSucursal | String | Nombre de la sucursal.
operacionUid | Long | Identificador único de operación.
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
periodicidad | Int | Periodicidad.
plazo | Int | Plazo.
plus | Double | Tasa plus.
precio | Double | Precio.
producto | [sBTProducto](#sbtproducto) | Datos del producto.
redondeo | Double | Redondeo.
seguros | [sBTSeguroPrestamo](#sbtseguroprestamosalida) | Listado de seguros.
segurosDesembolso | Double | Seguros de desembolso.
tasa | Double | Tasa.
tasaEfectiva | Double | Tasa efectiva.
tasaEfectivaAnual | Double | Tasa efectiva anual.
tasaNominalAnual | Double | Tasa nominal anual.
tipoAmortizacionCod | Byte | Código de tipo amortización.
tipoAmortizacionDsc | String | Tipo de amortización.
totalComisiones | Double | Total de comisiones.
totalImpuestos | Double | Total de impuestos.
totalIntereses | Double | Total de intereses.
totalPrestamo | Double | Total de préstamo.
totalSeguros | Double | Total de seguros.
valorCuota | Double | Valor de la cuota.

### sBTConcepto

::: center
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.

### sBTCuotaSimulacion

::: center
Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
capital | Double | Monto de capital en la cuota.
concepto | String | Concepto.
cuota | Double | Importe total de la cuota.
fechaPago | Date | Fecha de pago.
impuestos | Double | Monto de impuestos en la cuota.
interes | Double | Monto de intereses en la cuota.
otrosConceptos | Double | Importe correspondiente a otros conceptos.
seguros | Double | Monto de seguros en la cuota.
tipoCuota | String | Tipo de la cuota (Capital/Interés).

### sBTProducto

::: center 
Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
moneda | String | Símbolo de la moneda. 
nombre | String | Nombre del producto. 
otrosConceptos | [sBTConcepto](#sbtconcepto) | Datos de otros conceptos.
papel | String | Símbolo del papel. 
productoUId | Long | Identificador único de producto. 

### sBTConcepto

::: center 
Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
concepto | String | Concepto.
texto | String | Texto.
valor | Double | Importe.

### sBTSeguroPrestamoSalida

::: center
Los campos del tipo de dato estructurado sBTSeguroPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
codigo | Int | Código del seguro.
descripcion | String | Descripción del seguro.
tipo | String | Tipo del seguro.
modificable | String | Indica si es modificable.
importeFijo | Decimal | Importe fijo del seguro.
porcentaje | Decimal | Porcentaje del seguro.

### sBTComisionPrestamoSalida

::: center 
Los campos del tipo de dato estructurado sBTComisionPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :-----------
porcentaje | Double | Porcentaje de comisión.
descripcion | String | Descripción de la comisión.
importe | Double | Importe de la comisión.
codigo | Int | Código de comisión.
:::