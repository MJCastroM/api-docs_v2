---
title: Actualizar Domicilio
icon: /assets/image/nuevo.svg
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
::: note Método para actualizar los datos del domicilio de una persona.

**Nombre publicación:** BTPersonas.ActualizarDomicilio

**Programa:** RBTPG196

**Global/País:** Global
:::
<!-- CIERRA DATOS DEL MÉTODO -->

<!-- ABRE TABLA DE DATOS -->
::: tabs #Datos 

@tab Datos de Entrada

Nombre | Tipo | Comentarios
:--------- | :--------- | :---------
personaUId | Long | Identificador único de persona.
sbtDomicilio | [sBTDomicilioCompleto](#sbtdomiciliocompleto) | Datos de domicilio.

@tab Datos de Salida

No aplica.

@tab Errores

Código | Descripción
:--------- | :-----------
30001 | No se recibió el identificador de la persona.
30002 | El identificador de la persona no es correcto.
30011 | Código de domicilio no válido.
31011 | No existe el domicilio de la persona.
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
      <bts:BTPersonas.ActualizarDomicilio>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>FC</bts:Device>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>6C363FC1CD2072DE525376D3</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>237</bts:personaUId>
         <bts:sbtDomicilio>
            <bts:coloniaId>1</bts:coloniaId>
            <bts:agrupador1Id>1</bts:agrupador1Id>
            <bts:agrupador5></bts:agrupador5>
            <bts:departamento></bts:departamento>
            <bts:agrupador4></bts:agrupador4>
            <bts:agrupador3Id>1</bts:agrupador3Id>
            <bts:detalleUbicacion></bts:detalleUbicacion>
            <bts:barrio></bts:barrio>
            <bts:agrupador3>Apto</bts:agrupador3>
            <bts:agrupador2>Nro Puerta</bts:agrupador2>
            <bts:agrupador1>Calle</bts:agrupador1>
            <bts:agrupador5Id></bts:agrupador5Id>
            <bts:tipoDomicilio></bts:tipoDomicilio>
            <bts:ubicacionDesde></bts:ubicacionDesde>
            <bts:direccion></bts:direccion>
            <bts:colonia></bts:colonia>
            <bts:paisId>845</bts:paisId>
            <bts:tipoVivienda></bts:tipoVivienda>
            <bts:pais></bts:pais>
            <bts:agrupador2Id>1</bts:agrupador2Id>
            <bts:codigoPostal></bts:codigoPostal>
            <bts:tipoViviendaId>1</bts:tipoViviendaId>
            <bts:agrupador4Id></bts:agrupador4Id>
            <bts:barrioId>10</bts:barrioId>
            <bts:localidadId>10</bts:localidadId>
            <bts:localidad>?</bts:localidad>
            <bts:tipoDomicilioId>1</bts:tipoDomicilioId>
            <bts:departamentoId>10</bts:departamentoId>
         </bts:sbtDomicilio>
      </bts:BTPersonas.ActualizarDomicilio>
   </soapenv:Body>
</soapenv:Envelope>
```

@tab JSON
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarDomicilio=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 44ba1342-ce61-303e-bd55-62945147dfe0' \
  -d '{
  "Btinreq": {
    "Device": "FC",
    "Usuario": "INSTALADOR",
    "Requerimiento": "0",
    "Canal": "BTDIGITAL",
    "Token": "6C363FC1CD2072DE525376D3"
  },
 "personaUId": 237,
 "sbtDomicilio": {
          "coloniaId": 1,
          "agrupador1Id": 1,
          "agrupador5": "",
          "departamento": "",
          "agrupador4": "",
          "agrupador3Id": 1,
          "detalleUbicacion": "",
          "barrio": "",
          "agrupador3": "Apto",
          "agrupador2": "Nro Puerta",
          "agrupador1": "Calle",
          "agrupador5Id": "",
          "tipoDomicilio": "",
          "ubicacionDesde": "",
          "direccion": "",
          "colonia": "",
          "paisId": 845,
          "tipoVivienda": "",
          "pais": "",
          "agrupador2Id": 1,
          "codigoPostal": "",
          "tipoViviendaId": 1,
          "agrupador4Id": "",
          "barrioId": 10,
          "localidadId": 10,
          "localidad": "?",
          "tipoDomicilioId": 1,
          "departamentoId": 10
         }   
      }
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
      <BTPersonas.ActualizarDomicilioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6C363FC1CD2072DE525376D3</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>34970</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ActualizarDomicilio</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-04-30</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:31:34</Hora>
         </Btoutreq>
      </BTPersonas.ActualizarDomicilioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

@tab JSON
```json
'{
	"Btinreq": {
      "Device": "FC",
      "Usuario": "INSTALADOR",
      "Requerimiento": 0,
      "Canal": "BTDIGITAL",
      "Token": "6C363FC1CD2072DE525376D3"
	},
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": 34970,
      "Estado": "OK",
      "Servicio": "BTPersonas.ActualizarDomicilio",
      "Requerimiento": 0,
      "Fecha": "2025-04-30",
      "Canal": "BTDIGITAL",
      "Hora": "10:31:34"
   }
}'
```
::: 
<!-- CIERRA EJEMPLO DE RESPUESTA -->

## **Tipos de Dato Estructurado**

<!-- ABRE SDT -->
::: details sBTDomicilioCompleto  

### sBTDomicilioCompleto

::: center 
Los campos del tipo de dato estructurado sBTDomicilioCompleto son los siguientes: 

Nombre | Tipo | Comentarios  
:--------- | :----------- | :-----------  
agrupador1 | String | Agrupador 1.  
agrupador1Id | Short | Identificador del agrupador 1.  
agrupador2 | String | Agrupador 2.  
agrupador2Id | Short | Identificador del agrupador 2.  
agrupador3 | String | Agrupador 3.  
agrupador3Id | Short | Identificador del agrupador 3.  
agrupador4 | String | Agrupador 4.  
agrupador4Id | Short | Identificador del agrupador 4.  
agrupador5 | String | Agrupador 5.  
agrupador5Id | Short | Identificador del agrupador 5.  
barrio | String | Nombre del barrio.
barrioId | Int | Identificador del barrio.  
codigoPostal | String | Código postal. 
colonia | String | Nombre de la colonia.  
coloniaId | Int | Identificador de la colonia.  
departamento | String | Nombre del departamento.  
departamentoId | Int | Identificador del departamento.  
detalleUbicacion | String | Detalle de la ubicación.  
direccion | String | Dirección.  
localidad | String | Nombre de la localidad.  
localidadId | Int | Identificador de la localidad.  
pais | String | Nombre del país.  
paisId | Short | Identificador del país.  
tipoDomicilio | String | Tipo de domicilio.  
tipoDomicilioId | Short | Identificador del tipo de domicilio.  
tipoVivienda | String | Tipo de vivienda.  
tipoViviendaId | String | Identificador del tipo de vivienda.  
ubicacionDesde | Date | Fecha desde la que se utiliza esta ubicación.  
:::
<!-- CIERRA SDT -->