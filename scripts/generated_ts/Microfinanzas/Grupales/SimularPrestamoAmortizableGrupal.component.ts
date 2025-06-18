import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularPrestamoAmortizableGrupal',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularPrestamoAmortizableGrupalComponent1750268696502 {
  pageTitle        = 'Simular Amortizable Grupal';
  description      = `Método para simular la solicitud de un préstamo amortizable grupal.`;
  pubName    = 'BTMicrofinanzas.SimularAmortizableGrupal';
  programa   = 'RBTPG439';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtSimulacionAmortizableGrupal', Tipo: '[sBTSimulacionAmortizableGrupal](#sbtsimulacionamortizablegrupal)', Comentarios: 'Datos de la simulación grupal.' }];
  outputData = [{ Nombre: 'sdtSimulacionPrestamo', Tipo: '[sBTSimulacionPrestamo](#sbtsimulacionprestamo)', Comentarios: 'Datos del préstamo simulado.' }, { Nombre: 'sdtIntegrantesGrupo', Tipo: '[sBTIntegranteGrupoSolicitud](#sbtintegrantegruposolicitud)', Comentarios: 'Datos de los integrantes del grupo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la solicitud.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de producto.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador: [Número de identificador].' }, { Codigo: '30004', Descripcion: 'No se recibió ningún integrante del grupo.' }, { Codigo: '40001', Descripcion: 'El integrante no pertenece al grupo.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.SimulaAmortizableGrupal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1973148151CD285A89A23FBE</bts:Token>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:sdtSimulacionAmortizableGrupal>
            <bts:solicitudUId>11341</bts:solicitudUId>
            <bts:productoUId>17</bts:productoUId>
            <bts:fechaPrimerPago>2018-08-14</bts:fechaPrimerPago>
            <bts:cantidadCuotas></bts:cantidadCuotas>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:pizarra/>
            <bts:tasa/>
            <bts:integrantesGrupo>
               <bts:sBTIntegranteGrupoSolicitud>
                  <bts:empresa></bts:empresa>
                  <bts:clienteUId>91</bts:clienteUId>
                  <bts:cuenta></bts:cuenta>
                  <bts:monto>10500</bts:monto>
                  <bts:destinoCredito>41</bts:destinoCredito>
                  <bts:destinoCreditoDesc></bts:destinoCreditoDesc>
                  <bts:valorCuota></bts:valorCuota>
               </bts:sBTIntegranteGrupoSolicitud>
               <bts:sBTIntegranteGrupoSolicitud>
                  <bts:empresa></bts:empresa>
                  <bts:clienteUId>102</bts:clienteUId>
                  <bts:cuenta></bts:cuenta>
                  <bts:monto>15000</bts:monto>
                  <bts:destinoCredito>42</bts:destinoCredito>
                  <bts:destinoCreditoDesc></bts:destinoCreditoDesc>
                  <bts:valorCuota></bts:valorCuota>
               </bts:sBTIntegranteGrupoSolicitud>
               <bts:sBTIntegranteGrupoSolicitud>
                  <bts:empresa></bts:empresa>
                  <bts:clienteUId>119</bts:clienteUId>
                  <bts:cuenta></bts:cuenta>
                  <bts:monto>12500</bts:monto>
                  <bts:destinoCredito>43</bts:destinoCredito>
                  <bts:destinoCreditoDesc></bts:destinoCreditoDesc>
                  <bts:valorCuota></bts:valorCuota>
               </bts:sBTIntegranteGrupoSolicitud>
            </bts:integrantesGrupo>
            <bts:datosAdicionales>
            </bts:datosAdicionales>
         </bts:sdtSimulacionAmortizableGrupal>
      </bts:BTMicrofinanzas.SimulaAmortizableGrupal>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?SimularAmortizableGrupal \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "1",
        "Usuario": "INSTALADOR",
        "Token": "669747179CD285A89A23FBEE",
        "Device": "1"
    },
    "sdtSimulacionAmortizableGrupal": {
        "solicitudUId": "11341",
        "productoUId": "17",
        "fechaPrimerPago": "2018-08-14",
        "cantidadCuotas": "",
        "periodoCuotas": "30",
        "integrantesGrupo": {
            "sBTIntegranteGrupoSolicitud": [
                {
                "clienteUId": "91",
                "monto": "10500",
                "destinoCredito": "41"
                },
                {
                "clienteUId": "102",
                "monto": "15000",
                "destinoCredito": "42"
                },
                {
                "clienteUId": "119",
                "monto": "12500",
                "destinoCredito": "43"
                }
            ]
        },
        "datosAdicionales": ""
    }
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.SimulaAmortizableGrupalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1973148151CD285A89A23FBE</Token>
            <Device>1</Device>
         </Btinreq>
         <sdtSimulacionPrestamo>
            <operacionUId>94</operacionUId>
            <producto>
               <productoUId>17</productoUId>
               <nombre>PRESTAMOS, GRUPAL PAGO MENSUAL INT Y CAP</nombre>
               <moneda>Q</moneda>
               <papel>$</papel>
            </producto>
            <capital>38000.00</capital>
            <valorCuota>7467.00</valorCuota>
            <intereses>6802.02</intereses>
            <tasa>36.000000</tasa>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <tasaEfectivaAnual>42.576089</tasaEfectivaAnual>
            <tasaNominalAnual>36.000000</tasaNominalAnual>
            <totalPrestamo>44802.02</totalPrestamo>
            <fechaValor>2018-07-19</fechaValor>
            <fechaVencimiento>2019-01-14</fechaVencimiento>
            <fechaPrimerPago>2018-08-14</fechaPrimerPago>
            <plazo>179</plazo>
            <otrosConceptos></otrosConceptos>
            <cronograma></cronograma>
         </sdtSimulacionPrestamo>
         <sdtIntegrantesGrupo>
            <sBTIntegranteGrupoSolicitud>
               <empresa>1</empresa>
               <clienteUId>91</clienteUId>
               <cuenta>PONTES SILVA GABRIEL</cuenta>
               <monto>10500.00</monto>
               <destinoCredito>41</destinoCredito>
               <destinoCreditoDesc>CAPITAL DE TRABAJO PARA TEMPORADA ALTA</destinoCreditoDesc>
               <valorCuota>2063.25</valorCuota>
            </sBTIntegranteGrupoSolicitud>
            <sBTIntegranteGrupoSolicitud>
               <empresa>1</empresa>
               <clienteUId>102</clienteUId>
               <cuenta>BERGESSIO MARTINEZ GONZALO</cuenta>
               <monto>15000.00</monto>
               <destinoCredito>42</destinoCredito>
               <destinoCreditoDesc>CAPITAL DE TRABAJO P.E.A.</destinoCreditoDesc>
               <valorCuota>2947.50</valorCuota>
            </sBTIntegranteGrupoSolicitud>
            <sBTIntegranteGrupoSolicitud>
               <empresa>1</empresa>
               <clienteUId>119</clienteUId>
               <cuenta>CERON RODRIGUEZ CESAR MAURICIO</cuenta>
               <monto>12500.00</monto>
               <destinoCredito>43</destinoCredito>
               <destinoCreditoDesc>CAPITAL DE TRABAJO PERMANENTE P.E.A.</destinoCreditoDesc>
               <valorCuota>2456.25</valorCuota>
            </sBTIntegranteGrupoSolicitud>
         </sdtIntegrantesGrupo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.SimulaAmortizableGrupal</Servicio>
            <Fecha>2020-10-28</Fecha>
            <Hora>11:03:57</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>5417</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.SimulaAmortizableGrupalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
   "Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "1",
      "Usuario": "INSTALADOR",
      "Token": "1973148151CD285A89A23FBE",
      "Device": "1"
   },
   "sdtSimulacionPrestamo": {
      "operacionUId": "94",
      "producto": {
         "productoUId": "17",
         "nombre": "PRESTAMOS, GRUPAL PAGO MENSUAL INT Y CAP",
         "moneda": "Q",
         "papel": "$"
      },
      "capital": "38000.00",
      "valorCuota": "7467.00",
      "intereses": "6802.02",
      "tasa": "36.000000",
      "tasaEfectiva": "0.000000",
      "tasaEfectivaAnual": "42.576089",
      "tasaNominalAnual": "36.000000",
      "totalPrestamo": "44802.02",
      "fechaValor": "2018-07-19",
      "fechaVencimiento": "2019-01-14",
      "fechaPrimerPago": "2018-08-14",
      "plazo": "179"
   },
   "sdtIntegrantesGrupo": {
      "sBTIntegranteGrupoSolicitud": [
      {
         "empresa": "1",
         "clienteUId": "91",
         "cuenta": "PONTES SILVA GABRIEL",
         "monto": "10500.00",
         "destinoCredito": "41",
         "destinoCreditoDesc": "CAPITAL DE TRABAJO PARA TEMPORADA ALTA",
         "valorCuota": "2063.25"
      },
      {
         "empresa": "1",
         "clienteUId": "102",
         "cuenta": "BERGESSIO MARTINEZ GONZALO",
         "monto": "15000.00",
         "destinoCredito": "42",
         "destinoCreditoDesc": "CAPITAL DE TRABAJO P.E.A.",
         "valorCuota": "2947.50"
      },
      {
         "empresa": "1",
         "clienteUId": "119",
         "cuenta": "CERON RODRIGUEZ CESAR MAURICIO",
         "monto": "12500.00",
         "destinoCredito": "43",
         "destinoCreditoDesc": "CAPITAL DE TRABAJO PERMANENTE P.E.A.",
         "valorCuota": "2456.25"
      }
      ]
   },
   "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTMicrofinanzas.SimulaAmortizableGrupal",
      "Fecha": "2020-10-28",
      "Hora": "11:03:57",
      "Requerimiento": "1",
      "Numero": "5417",
      "Estado": "OK"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTSimulacionAmortizableGrupal', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Importe otros conceptos.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'integrantesGrupo', Tipo: '[sBTIntegranteGrupoSolicitud](#sbtintegrantegruposolicitud)', Comentarios: 'Datos de los integrantes del grupo.' }, { Nombre: 'periodoCuotas', Tipo: 'Int', Comentarios: 'Período entre vencimiento de cada cuota.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Tipo de pizarra. Si no se indica toma la preseteada para el producto.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador de instancia Workflow.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa. Si no se indica toma la correspondiente al tipo de pizarra.' }, { Nombre: '### sBTIntegranteGrupoSolicitud', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTIntegranteGrupoSolicitud', fields: [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'cuenta', Tipo: 'String', Comentarios: 'Cuenta del cliente.' }, { Nombre: 'destinoCredito', Tipo: 'Int', Comentarios: 'Identificador del destino del crédito.' }, { Nombre: 'destinoCreditoDesc', Tipo: 'String', Comentarios: 'Nombre del destino del crédito.' }, { Nombre: 'empresa', Tipo: 'Short', Comentarios: 'Identificador de empresa.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Monto solicitado por el cliente.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor de la cuota.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTSimulacionPrestamo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaSimulacion](#sbtcuotasimulacion)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconceptosalida)', Comentarios: 'Importe otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconceptosalida)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConceptoSalida', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConceptoSalida', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTCuotaSimulacion', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTCuotaSimulacion', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Monto de capital en la cuota.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'cuota', Tipo: 'Double', Comentarios: 'Importe total de la cuota.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Monto de impuestos en la cuota.' }, { Nombre: 'interes', Tipo: 'Double', Comentarios: 'Monto de intereses en la cuota.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Importe correspondiente a otros conceptos.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Monto de seguros en la cuota.' }, { Nombre: 'tipoCuota', Tipo: 'String', Comentarios: 'Tipo de la cuota (Capital/Interés).' }] }];
}
