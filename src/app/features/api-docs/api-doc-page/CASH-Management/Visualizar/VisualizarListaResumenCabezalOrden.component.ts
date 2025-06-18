import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-VisualizarListaResumenCabezalOrden',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class VisualizarListaResumenCabezalOrdenComponent1750268694503 {
  pageTitle        = 'Visualizar Lista de Órdenes con su Resumen';
  description      = `Método para obtener la lista de órdenes con su resumen de información de un archivo CASH.`;
  pubName    = 'BTCASHManagement.VisualizarListaResumenCabezalOrden';
  programa   = 'RBTPGC25';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'archivoId', Tipo: 'Long', Comentarios: 'Identificador de archivo.' }];
  outputData = [{ Nombre: 'listaResumenOrdenes', Tipo: '[sBTResumenCabezal](#sbtresumencabezal)', Comentarios: 'Listados de resumen de ordenes.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.VisualizarListaResumenCabezalOrden>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:archivoId>279</bts:archivoId>
      </bts:BTCASHManagement.VisualizarListaResumenCabezalOrden>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?VisualizarListaResumenCabezalOrden=\' \
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
    "archivoId": 279
  }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.VisualizarListaResumenCabezalOrdenResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <listaResumenOrdenes>
            <sBTResumenCabezal>
               <moneda>0</moneda>
               <cuentaDebito>825</cuentaDebito>
               <estado>S</estado>
               <nombreArchivo>archivoWS.txt</nombreArchivo>
               <referencia/>
               <cantidadLineas>2</cantidadLineas>
               <ordenId>352</ordenId>
               <servicio>100</servicio>
               <contratoId>60</contratoId>
               <importe>400.0</importe>
               <mensajesError></mensajesError>
               <archivoId>279</archivoId>
               <fechaPago/>
            </sBTResumenCabezal>
         </listaResumenOrdenes>
         <Erroresnegocio/>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-19</Fecha>
            <Hora>08:57:07</Hora>
            <Numero>26090</Numero>
            <Servicio>BTCASHManagement.VisualizarListaResumenCabezalOrden</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.VisualizarListaResumenCabezalOrdenResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "listaResumenOrdenes": {
      "sBTResumenCabezal": {
         "moneda": 0,
         "cuentaDebito": 825,
         "estado": "S",
         "nombreArchivo": "archivoWS.txt",
         "referencia": "",
         "cantidadLineas": 2,
         "ordenId": 352,
         "servicio": 100,
         "contratoId": 60,
         "importe": 400,
         "mensajesError": "",
         "archivoId": 279,
         "fechaPago": ""
      }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.VisualizarListaResumenCabezalOrden",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTResumenCabezal', fields: [{ Nombre: 'archivoId', Tipo: 'Long', Comentarios: 'Identificador de archivo.' }, { Nombre: 'cantidadLineas', Tipo: 'Int', Comentarios: 'Cantidad de líneas del archivo.' }, { Nombre: 'contratoId', Tipo: 'Int', Comentarios: 'Identificador del contrato CASH.' }, { Nombre: 'cuentaDebito', Tipo: 'Long', Comentarios: 'Identificador único de la cuenta débito.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del archivo.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago o cobro.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe total.' }, { Nombre: 'mensajesError', Tipo: 'String', Comentarios: 'Lista de mensajes de la línea.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Moneda.' }, { Nombre: 'nombreArchivo', Tipo: 'String', Comentarios: 'Nombre del archivo.' }, { Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de orden CASH.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia del pago o cobro.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Servicio CASH.' }] }];
}
