---
title: Traspasar Entre Cuentas Propias (con tipo de cambio)
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
::: note Método para realizar un traspaso con cotización entre cuentas propias.

**Nombre publicación:** BTCuentasVista.TraspasarCuentasPropiasConCotizacion

**Programa:** RBTPG263

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE CONFIGURACIÓN BACKEND -->
::: info Configuración Backend

1) Definir la transacción de traspaso, teniendo en cuenta que:

   - La cuenta vista origen se almacena en el preformato 1.

   - La cuenta vista destino en el preformato 2.

   - El importe a transferir se almacena en el preformato 1.

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T):

   - Se debe indicar los ordinales donde se encuentra definida la cuenta origen y destino.

:::
<!-- CIERRA CONFIGURACIÓN BACKEND -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
clienteUId | Long | Identificador de cliente.
sdtTraspaso | [sBTTraspaso](#sbttraspaso) | Datos del Traspaso.
tipoDeCambio | Double | Cotización

@tab Datos de Salida

Nombre | Tipo | Comentarios
:--------- | :----------- | :-----------
sdtResultadoTraspaso | [sBTResultadoTraspasoDatos](#sbtresultadotraspasodatos) | Resultado del traspaso.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el Identificador.
30003 | No se recibió el identificador único de operación de origen.
30004 | No se recibió el identificador único de operación de destino.
30005 | Debe ingresar importe.
30006 | Debe ingresar tipo de cambio a aplicar.
30007 | No se recuperó la operación origen para el Identificador: [Número de identificador].
30008 | La operación origen no pertenece al cliente.
30009 | No se recuperó la operación destino para el Identificador: [Número de identificador].
30010 | La cuenta destino debe coincidir con la cuenta origen.
30011 | La operación origen y operación destino no pueden ser iguales.
30100 | Error en la contabilización.
51005 | La moneda del traspaso debe coincidir con la moneda de la operación origen
51008 | Error de configuración: No se definió transacción a ejecutar.
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
        <bts:BTCuentasVista.TraspasarCuentasPropiasConCotizacion>  
            <bts:Btinreq>        
                <bts:Device>AV</bts:Device> 
                <bts:Usuario>MINSTALADOR</bts:Usuario> 
                <bts:Requerimiento></bts:Requerimiento> 
                <bts:Canal>BTDIGITAL</bts:Canal> 
                <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
            </bts:Btinreq> 
            <bts:clienteUId>21</bts:clienteUId> 
            <bts:sdtTraspaso> 
                <bts:operacionUIdOrigen>281</bts:operacionUIdOrigen> 
                <bts:importe>500</bts:importe> 
                <bts:operacionUIdDestino>282</bts:operacionUIdDestino> 
                <bts:monedaId></bts:monedaId>    
                <bts:concepto>Traspaso</bts:concepto>     
            </bts:sdtTraspaso>   
            <bts:tipoDeCambio>31.5</bts:tipoDeCambio>  
        </bts:BTCuentasVista.TraspasarCuentasPropiasConCotizacion>  
    </soapenv:Body> 
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?TraspasarCuentasPropiasConCotizacion \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
    "Btinreq": { 
        "Requerimiento": "1", 
        "Device": "GP", 
        "Token": "b4ae55b35c4A8B5C60A82434", 
        "Usuario": "MINSTALADOR", 
        "Canal": "BTDIGITAL" 
    }, 
    "clienteUId": "21", 
    "sdtTraspaso":  
      { 
        "operacionUIdOrigen": "281", 
        "importe": "500", 
        "operacionUIdDestino": "282", 
        "monedaId": "", 
        "concepto": "Traspaso", 
      }, 
    "tipoDeCambio": "31.5" 
}'
```
:::
<!-- CIERRA EJEMPLO DE INVOCACIÓN -->

<!-- ABRE EJEMPLO DE RESPUESTA -->
::: details Ejemplo de Respuesta 
::: code-tabs #Formato

@tab XML
```xml
<SOAP-ENV:Envelope xmlns:SOAPENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAPENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">   
    <SOAP-ENV:Body>       
        <BTCuentasVista.TraspasarCuentasPropiasConCotizacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">  
            <Btinreq>      
                <Device>AV</Device>     
                <Usuario>MINSTALADOR</Usuario>      
                <Requerimiento/>        
                <Canal>BTDIGITAL</Canal>        
                <Token>268b6d23eb4A8B5C60A82434</Token>    
            </Btinreq>      
            <sdtResultadoTraspaso> 
                <operacionUIdOrigen>281</operacionUIdOrigen>            
                <idMovimiento>0010000100050007003720180706</idMovimiento>  
                <operacionUIdDestino>282</operacionUIdDestino>       
                <saldoOperacionOrigen>7432900.28</saldoOperacionOrigen>     
                <movimientoUId>141</movimientoUId>   
            </sdtResultadoTraspaso>       
            <Erroresnegocio></Erroresnegocio>  
            <Btoutreq>           
                <Numero>864</Numero>   
                <Estado>OK</Estado>      
                <Servicio>BTCuentasVista.TraspasarCuentasPropiasConCotizacion</Servicio> 
                <Requerimiento/>       
                <Fecha>2017-12-18</Fecha> 
                <Hora>17:07:19</Hora>       
                <Canal>BTDIGITAL</Canal>        
            </Btoutreq>       
        </BTCuentasVista.TraspasarCuentasPropiasConCotizacionResponse> 
    </SOAP-ENV:Body>  
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{ 
    "Btinreq": { 
        "Device": "AV", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "fa2c02c95a4A8B5C60A82434" 
    },         
    "sdtResultadoTraspaso":  
      { 
        "operacionUIdOrigen": "281", 
        "idMovimiento": "0010000100050007003720180706", 
        "operacionUIdDestino": "282", 
        "saldoOperacionOrigen": "7432900.28", 
        "movimientoUId": "141", 
      }, 
    "Btoutreq": { 
        "Numero": "103", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.TraspasarCuentasPropiasCot", 
        "Requerimiento": "1", 
        "Fecha": "2019-07-22", 
        "Canal": "BTDIGITAL", 
        "Hora": "16:00:37" 
    } 
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTTraspaso  

### sBTTraspaso

::: center 
Los campos del tipo de dato estructurado sBTTraspaso son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
concepto | String | Concepto del Traspaso. 
importe | Double | Importe del Movimiento. 
monedaId | Short | Identificador de Moneda.  
operacionUIdDestino | Long | Identificador de operación de destino del traspaso.  
operacionUIdOrigen | Long | Identificador de operación de origen del traspaso.  
:::

::: details sBTResultadoTraspasoDatos

### sBTResultadoTraspasoDatos

::: center 
Los campos del tipo de dato estructurado sBTResultadoTraspasoDatos son los siguientes: 

Nombre | Tipo | Comentarios 
:--------- | :----------- | :----------- 
idMovimiento | String | Identificador de Movimiento String. 
movimientoUId |	Long | Identificador de Movimiento.  
operacionUIdDestino | Long | Identificador de operación de destino del traspaso.  
operacionUIdOrigen | Long | Identificador de operación de origen del traspaso.  
saldoOperacionOrigen | Double | Saldo Actual de operación de origen.  
:::
<!-- CIERRA SDT -->