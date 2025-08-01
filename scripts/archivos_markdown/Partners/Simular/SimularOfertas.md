---
title: Simular Ofertas
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

<!-- ABRE DATOS DEL MÉTODO -->
::: note Método para simular ofertas del Partner.

**Nombre publicación:** BTPartners.SimularOfertas

**Programa:** RBTPN011

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
sdtPartner | [sBTPartnerInReq](#sbtpartnerinreq) | Datos del usuario.
clienteUId | Long | Identificador único del cliente.
textoAux | String | Texto auxiliar [Hidden].
sdtOfertaInput | [sBTOfertaInput](#sbtofertainput) | Datos de entrada de la oferta.

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
simulacionId | Long | Identificador de la simulación.
sdtOfertasPrestamo | [sBTOfertaPrestamo](#sbtofertaprestamo) | Listado de ofertas de préstamo.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de producto.
30002 | No se recibió el identificador de cliente.
30003 | No se recuperó la cuenta para el Identificador: [Número de Identificador].
30004 | No se recuperó el producto para el Identificador: [Número de Identificador].
30005 | No se recibió Lista de cuotas a simular.
30007 | No se recibió Partner ni canal.
30008 | El Partner no se encuentra habilitado.
30009 | No existe Partner con ese identificador.
30018 | No se recibió punto de venta.
30019 | No se recibió vendedor.
::: 
<!-- CIERRA TABLA DE DATOS -->

## **Ejemplos**

<!-- ABRE EJEMPLO DE INVOCACIÓN -->
::: details Ejemplo de Invocación 
::: code-tabs #Formato

@tab XML
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPartners.SimularOfertas>
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
         <bts:clienteUId>351</bts:clienteUId>
         <bts:sdtOfertaInput>
            <bts:pizzarra>0</bts:pizzarra>
            <bts:fechaValor>2023-11-14</bts:fechaValor>
            <bts:productoUId>48</bts:productoUId>
            <bts:monto>8745</bts:monto>
            <bts:comisionesCuota>
               <bts:SdtsBTComisionPrestamo>
                  <bts:porcentaje></bts:porcentaje>
                  <bts:descripcion></bts:descripcion>
                  <bts:importe></bts:importe>
                  <bts:codigo></bts:codigo>
               </bts:SdtsBTComisionPrestamo>
            </bts:comisionesCuota>
            <bts:periodoCuotas>35</bts:periodoCuotas>
            <bts:diaPago>14</bts:diaPago>
            <bts:ballon></bts:ballon>
            <bts:tasa>36</bts:tasa>
            <bts:cuotas>
               <bts:Int></bts:Int>
            </bts:cuotas>
            <bts:fechaPrimerPago>2023-11-14</bts:fechaPrimerPago>
            <bts:cuotasExtraordinarias>
               <bts:SdtsBTCuotaExtraordinaria>
                  <bts:mes></bts:mes>
                  <bts:porcentajeCuota></bts:porcentajeCuota>
               </bts:SdtsBTCuotaExtraordinaria>
            </bts:cuotasExtraordinarias>
            <bts:seguros>
               <bts:SdtsBTSeguroPrestamo>
                  <bts:porcentaje></bts:porcentaje>
                  <bts:descripcion></bts:descripcion>
                  <bts:tipo></bts:tipo>
                  <bts:importe></bts:importe>
                  <bts:codigo></bts:codigo>
               </bts:SdtsBTSeguroPrestamo>
            </bts:seguros>
            <bts:comisiones>
               <bts:SdtsBTComisionPrestamo>
                  <bts:porcentaje></bts:porcentaje>
                  <bts:descripcion></bts:descripcion>
                  <bts:importe></bts:importe>
                  <bts:codigo></bts:codigo>
               </bts:SdtsBTComisionPrestamo>
            </bts:comisiones>
         </bts:sdtOfertaInput>
      </bts:BTPartners.SimularOfertas>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?SimularOfertas' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "3JPL6DC33CD84655A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
   "sdtPartner": {
      "puntoVentaUId": 2,
      "vendedorUId": 0,
      "partnerUId": 1
   },
   "clienteUId": 351,
   "sdtOfertaInput": {
      "pizzarra": 0,
      "fechaValor": "2023-11-14",
      "productoUId": 48,
      "monto": 8745,
      "comisionesCuota": {
      "SdtsBTComisionPrestamo": {
         "porcentaje": "",
         "descripcion": "",
         "importe": "",
         "codigo": ""
      }
      },
      "periodoCuotas": 35,
      "diaPago": 14,
      "ballon": "",
      "tasa": 36,
      "cuotas": {
      "Int": ""
      },
      "fechaPrimerPago": "2023-11-14",
      "cuotasExtraordinarias": {
      "SdtsBTCuotaExtraordinaria": {
         "mes": "",
         "porcentajeCuota": ""
      }
      },
      "seguros": {
      "SdtsBTSeguroPrestamo": {
         "porcentaje": "",
         "descripcion": "",
         "tipo": "",
         "importe": "",
         "codigo": ""
      }
      },
      "comisiones": {
      "SdtsBTComisionPrestamo": {
         "porcentaje": "",
         "descripcion": "",
         "importe": "",
         "codigo": ""
      }
      }
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
      <BTPartners.SimularOfertasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <simulacionId>256</simulacionId>
         <sdtOfertasPrestamo>
            <sBTOfertaPrestamo>
               <otrosConceptos>0.00</otrosConceptos>
               <fechaValor>2019-11-25</fechaValor>
               <capital>1000.00</capital>
               <totalComisiones>0.00</totalComisiones>
               <valorCuota>101.81</valorCuota>
               <cantidadCuotas>12</cantidadCuotas>
               <tasa>23.000000</tasa>
               <totalSeguros>0.00</totalSeguros>
               <fechaPrimerPago>2020-05-05</fechaPrimerPago>
               <totalIntereses>221.74</totalIntereses>
               <fechaVencimiento>2021-04-05</fechaVencimiento>
               <tea>25.590075</tea>
               <plazo>497</plazo>
               <totalAPagar>1221.74</totalAPagar>
               <totalImpuestos>0.00</totalImpuestos>
               <cft>25.030000</cft>
            </sBTOfertaPrestamo>
         </sdtOfertasPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>770</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.SimularOfertas</Servicio>
            <Fecha>2017-12-14</Fecha>
            <Requerimiento/>
            <Hora>18:17:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.SimularOfertasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "simulacionId": 256,
   "sdtOfertasPrestamo": {
      "sBTOfertaPrestamo": {
      "otrosConceptos": 0,
      "fechaValor": "2019-11-25",
      "capital": 1000,
      "totalComisiones": 0,
      "valorCuota": 101.81,
      "cantidadCuotas": 12,
      "tasa": 23,
      "totalSeguros": 0,
      "fechaPrimerPago": "2020-05-05",
      "totalIntereses": 221.74,
      "fechaVencimiento": "2021-04-05",
      "tea": 25.590075,
      "plazo": 497,
      "totalAPagar": 1221.74,
      "totalImpuestos": 0,
      "cft": 25.03
      }
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPartners.SimularOfertas",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "17:08:56"
   }
}'
```
:::
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->

::: details sBTPartnerInReq  

### sBTPartnerInReq

::: center 
Los campos del tipo de dato estructurado sBTPartnerInReq son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
partnerUId | Int | Identificador del Partner.
puntoVentaUId | Int | Identificador del punto de venta.
vendedorUId | Int | Identificador del vendedor.
:::

::: details sBTOfertaInput  

### sBTOfertaInput

::: center 
Los campos del tipo de dato estructurado sBTOfertaInput son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
ballon | Double | Ballon.
comisiones | [sBTComisionPrestamo](#sbtcomisionprestamo) | Listado de comisiones.
comisionesCuota | [sBTComisionPrestamo](#sbtcomisionprestamo) | Listado de comisiones.
cuotas | Int | Listado de cuotas.
cuotasExtraordinarias | [sBTCuotaExtraordinaria](#sbtcuotaextraordinaria) | Listado de datos de cuota extraordinaria.
diaPago | Byte | Dia de pago.
fechaPrimerPago | Date | Fecha de primer pago.
fechaValor | Date | Fecha de valor.
monto | Double | Monto.
periodoCuotas | Int | Periodo de cuotas.
pizarra | Int | Pizarra.
productoUId | Long | Identificador único de producto.
seguros | [sBTSeguroPrestamo](#sbtseguroprestamo) | Listado de seguros.
tasa | Double | Tasa.

### sBTComisionPrestamo

::: center 
Los campos del tipo de dato estructurado sBTComisionPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
codigo | Int | Código de comisión.
descripcion | String | Descripción de la comisión.
importe | Double | Importe de la comisión.
porcentaje | Double | Porcentaje de comisión.

### sBTCuotaExtraordinaria

::: center 
Los campos del tipo de dato estructurado sBTCuotaExtraordinaria son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
mes | Byte | Mes.
porcentajeCuota | Double | Porcentaje de cuota.

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

::: details sBTOfertaPrestamo  

### sBTOfertaPrestamo

::: center 
Los campos del tipo de dato estructurado sBTOfertaPrestamo son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
cantidadCuotas | Int | Cantidad de las cuotas.
capital | Double | Capital del préstamo.
cft | Double | CFT del préstamo.
fechaPrimerPago | Date | Fecha de primer pago.
fechaValor | Date | Fecha valor.
fechaVencimiento | Date | Fecha de vencimiento.
otrosConceptos | Double | Monto para otros conceptos.
plazo | Int | Plazo para el préstamo.
tasa | Double | Tasa del préstamo.
tea | Double | TEA del préstamo.
totalAPagar | Double | Total a pagar.
totalComisiones | Double | Monto total para comisiones.
totalImpuestos | Double | Monto total para impuestos.
totalIntereses | Double | Monto total para intereses.
totalSeguros | Double | Monto total para seguros.
valorCuota | Double | Valor cuota.
:::
<!-- CIERRA SDT -->