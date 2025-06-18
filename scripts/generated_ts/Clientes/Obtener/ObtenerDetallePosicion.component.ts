import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetallePosicion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetallePosicionComponent1750258524785 {
  pageTitle        = 'Obtener Detalle de Posición';
  description      = `Método para obtener el detalle de una posición de los títulos de un cliente.`;
  pubName          = 'Obtener Detalle de Posición';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de la moneda.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha.' }, { Nombre: 'identificadorClaseActivo', Tipo: 'Int', Comentarios: 'Identificador de la clase del activo.' }, { Nombre: 'numeradorConsulta', Tipo: 'Int', Comentarios: 'Numerador de la consulta.' }];
  outputData = [{ Nombre: 'totalGeneral', Tipo: 'Double', Comentarios: 'Total general.' }, { Nombre: 'sdtDetalleClaseActivo', Tipo: '[sBTDetalleClaseActivo](#sbtdetalleclaseactivo)', Comentarios: 'Datos del detalle de la clase del activo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'Debe ingresar la fecha.' }, { Codigo: '30003', Descripcion: 'No se recibió el identificador de la clase de activo.' }, { Codigo: '30004', Descripcion: 'No se recibió el numerador de la consulta.' }, { Codigo: '30013', Descripcion: 'No existe registro con la cuenta indicada.' }, { Codigo: '40001', Descripcion: 'No se recuperó el componente del portafolio para el identificador: [Número de Identificador].' }, { Codigo: '40002', Descripcion: 'No se encontraron datos de la posición del cliente, ejecutar el servicio de consultar posición del cliente.' }, { Codigo: '40021', Descripcion: 'Error - No hay precio para el papel [Número de Identificador].' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerDetallePosicion>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>E362E52FED059AA3BF86A6E3</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>341</bts:clienteUId>
         <bts:monedaId>2222</bts:monedaId>
         <bts:fecha>2020-08-06</bts:fecha>
         <bts:identificadorClaseActivo>10</bts:identificadorClaseActivo>
         <bts:numeradorConsulta>12928</bts:numeradorConsulta>
      </bts:BTClientes.ObtenerDetallePosicion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDetallePosicion=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "clienteUId": 341,
    "monedaId": 2222,
    "fecha": "2020-08-06",
    "identificadorClaseActivo": 10,
    "numeradorConsulta": 12928
  }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerDetallePosicionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>BANTOTAL</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>E362E52FED059AA3BF86A6E3</Token>
         </Btinreq>
         <totalGeneral>527406.43</totalGeneral>
         <sdtDetalleClaseActivo>
            <sBTDetalleClaseActivo>
               <nombreElemento>Depósitos a plazo fijo</nombreElemento>
               <datosSinManejoEspecie>
                  <SdtsBTDatoSinManejoEspecie>
                     <signo>$</signo>
                     <monedaId>0</monedaId>
                     <total>5263.16</total>
                     <cantidadOperaciones>2</cantidadOperaciones>
                     <totalOrigen>200000.00</totalOrigen>
                  </SdtsBTDatoSinManejoEspecie>
               </datosSinManejoEspecie>
               <porcentajeComposicion>1.00</porcentajeComposicion>
               <datosConManejoEspecie></datosConManejoEspecie>
               <total>5263.16</total>
            </sBTDetalleClaseActivo>
            <sBTDetalleClaseActivo>
               <nombreElemento>Cuenta Corrientes</nombreElemento>
               <datosSinManejoEspecie>
                  <SdtsBTDatoSinManejoEspecie>
                     <signo>USD</signo>
                     <monedaId>2222</monedaId>
                     <total>496723.14</total>
                     <cantidadOperaciones>2</cantidadOperaciones>
                     <totalOrigen>522143.27</totalOrigen>
                  </SdtsBTDatoSinManejoEspecie>
               </datosSinManejoEspecie>
               <porcentajeComposicion>99.00</porcentajeComposicion>
               <datosConManejoEspecie></datosConManejoEspecie>
               <total>522143.27</total>
            </sBTDetalleClaseActivo>
         </sdtDetalleClaseActivo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-08</Fecha>
            <Hora>12:46:22</Hora>
            <Numero>744</Numero>
            <Servicio>BTClientes.ObtenerDetallePosicion</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerDetallePosicionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "totalGeneral": 527406.43,
      "sdtDetalleClaseActivo": {
         "sBTDetalleClaseActivo": [
         {
            "nombreElemento": "Depósitos a plazo fijo",
            "datosSinManejoEspecie": {
               "SdtsBTDatoSinManejoEspecie": {
               "signo": "$",
               "monedaId": 0,
               "total": 5263.16,
               "cantidadOperaciones": 2,
               "totalOrigen": 200000
               }
            },
            "porcentajeComposicion": 1,
            "datosConManejoEspecie": "",
            "total": 5263.16
         },
         {
            "nombreElemento": "Cuenta Corrientes",
            "datosSinManejoEspecie": {
               "SdtsBTDatoSinManejoEspecie": {
               "signo": "USD",
               "monedaId": 2222,
               "total": 496723.14,
               "cantidadOperaciones": 2,
               "totalOrigen": 522143.27
               }
            },
            "porcentajeComposicion": 99,
            "datosConManejoEspecie": "",
            "total": 522143.27
         }
         ]
      },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTClientes.ObtenerDetallePosicion",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDetalleClaseActivo', fields: [{ Nombre: 'datosConManejoEspecie', Tipo: '[sBTDatoConManejoEspecie](#sbtdatoconmanejoespecie)', Comentarios: 'Listado de datos con manejo de especie.' }, { Nombre: 'datosSinManejoEspecie', Tipo: '[sBTDatoSinManejoEspecie](#sbtdatosinmanejoespecie)', Comentarios: 'Listado de datos sin manejo de especie.' }, { Nombre: 'nombreElemento', Tipo: 'String', Comentarios: 'Nombre del elemento del detalle.' }, { Nombre: 'porcentajeComposicion', Tipo: 'Double', Comentarios: 'Porcentaje de composición del elemento del detalle.' }, { Nombre: 'total', Tipo: 'Double', Comentarios: 'Total del elemento del detalle.' }, { Nombre: '### sBTDatoConManejoEspecie', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTDatoConManejoEspecie son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'papelId', Tipo: 'Int', Comentarios: 'Identificador del papel.' }, { Nombre: 'resultado', Tipo: 'Double', Comentarios: 'Resultado.' }, { Nombre: 'totalEfectivo', Tipo: 'Double', Comentarios: 'Total en efectivo.' }, { Nombre: 'totalNominal', Tipo: 'Double', Comentarios: 'Total nominal.' }, { Nombre: '### sBTDatoSinManejoEspecie', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTDatoSinManejoEspecie son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'cantidadOperaciones', Tipo: 'Int', Comentarios: 'Cantidad de operaciones.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de la moneda.' }, { Nombre: 'signo', Tipo: 'String', Comentarios: 'Signo de la moneda.' }, { Nombre: 'total', Tipo: 'Double', Comentarios: 'Total.' }, { Nombre: 'totalOrigen', Tipo: 'Double', Comentarios: 'Total del origen.' }] }];
}
