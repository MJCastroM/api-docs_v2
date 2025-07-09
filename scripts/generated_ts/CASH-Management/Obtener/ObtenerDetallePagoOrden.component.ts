import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetallePagoOrden',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetallePagoOrdenComponent1751987195765 {
  pageTitle        = 'Obtener Detalle de Pago de una Orden';
  description      = `Método para obtener la información de las lineas del detalle del pago para una orden.`;
  pubName    = 'BTCASHManagement.ObtenerDetallePagoOrden';
  programa   = 'RBTPGC23';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de la orden.' }];
  outputData = [{ Nombre: 'cuentaDebito', Tipo: 'Long', Comentarios: 'Operación de débito.' }, { Nombre: 'cantidadLineas', Tipo: 'Int', Comentarios: 'Cantidad de líneas del archivo.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Moneda.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe total.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia del pago o cobro.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago o cobro.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del archivo.' }, { Nombre: 'erroresPago', Tipo: 'String', Comentarios: 'Lista de mensajes del cabezal de pago.' }, { Nombre: 'detallePagos', Tipo: '[sBTDetallePago](#sbtdetallepago)', Comentarios: 'Lista de información del archivo con su estado y mensaje.' }];
  errors     = [{ Código: '1030753', Descripción: 'No se encontró la orden para el identificador recibido.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.ObtenerDetallePagoOrden>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:ordenId>345</bts:ordenId>
      </bts:BTCASHManagement.ObtenerDetallePagoOrden>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?ObtenerDetallePagoOrden=\' \
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
    "ordenId": 345
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.ObtenerDetallePagoOrdenResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <cuentaDebito>825</cuentaDebito>
         <cantidadLineas>2</cantidadLineas>
         <moneda>0</moneda>
         <importe>400.0</importe>
         <referencia/>
         <fechaPago>2024-11-01</fechaPago>
         <estado>S</estado>
         <erroresPago></erroresPago>
         <detallePagos>
            <sBTDetallePago>
               <moneda>0</moneda>
               <beneficiarioCuenta>Pago Caja</beneficiarioCuenta>
               <estado>C</estado>
               <beneficiarioBanco/>
               <mensajesError/>
               <beneficiarioId/>
               <importe>100.0</importe>
               <fechaPago>2024-11-01</fechaPago>
               <nombre/>
            </sBTDetallePago>
            <sBTDetallePago>
               <moneda>0</moneda>
               <beneficiarioCuenta>Pago Caja</beneficiarioCuenta>
               <estado>C</estado>
               <beneficiarioBanco/>
               <mensajesError/>
               <beneficiarioId/>
               <importe>300.0</importe>
               <fechaPago>2024-11-01</fechaPago>
               <nombre/>
            </sBTDetallePago>
         </detallePagos>
         <Erroresnegocio/>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-18</Fecha>
            <Hora>12:46:29</Hora>
            <Numero>26013</Numero>
            <Servicio>BTCASHManagement.ObtenerDetallePagoOrden</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.ObtenerDetallePagoOrdenResponse>
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
      "cuentaDebito": 825,
      "cantidadLineas": 2,
      "moneda": 0,
      "importe": 400,
      "referencia": "",
      "fechaPago": "2024-11-01",
      "estado": "S",
      "erroresPago": "",
      "detallePagos": {
         "sBTDetallePago": [
         {
            "moneda": 0,
            "beneficiarioCuenta": "Pago Caja",
            "estado": "C",
            "beneficiarioBanco": "",
            "mensajesError": "",
            "beneficiarioId": "",
            "importe": 100,
            "fechaPago": "2024-11-01",
            "nombre": ""
         },
         {
            "moneda": 0,
            "beneficiarioCuenta": "Pago Caja",
            "estado": "C",
            "beneficiarioBanco": "",
            "mensajesError": "",
            "beneficiarioId": "",
            "importe": 300,
            "fechaPago": "2024-11-01",
            "nombre": ""
         }
      ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.ObtenerDetallePagoOrden",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDetallePago', fields: [{ Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del Beneficiario de Pago.' }, { Nombre: 'beneficiarioId', Tipo: 'String', Comentarios: 'Identificador de Beneficiario.' }, { Nombre: 'beneficiarioCuenta', Tipo: 'String', Comentarios: 'Cuenta del Beneficiario.' }, { Nombre: 'beneficiarioBanco', Tipo: 'String', Comentarios: 'Banco del Beneficiario.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de Pago o Cobro.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Moneda.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado de la línea.' }, { Nombre: 'mensajesError', Tipo: 'String', Comentarios: 'Lista de mensajes de la línea.' }] }];
}
