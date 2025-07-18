import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerResumenOrden',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerResumenOrdenComponent1751987195779 {
  pageTitle        = 'Obtener Resumen de una Orden';
  description      = `Método para obtener el resumen de la información de la orden recibida.`;
  pubName    = 'BTCASHManagement.ObtenerResumenOrden';
  programa   = 'RBTPGC24';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de la orden.' }];
  outputData = [{ Nombre: 'sdtResumenCabezal', Tipo: '[sBTResumenCabezal](#sbtresumencabezal)', Comentarios: 'Listado de cabezales de los resúmenes.' }];
  errors     = [{ Código: '1030705', Descripción: 'Cuenta cliente sin contrato vinculado.' }, { Código: '1030708', Descripción: 'Estado de archivo desconocido.' }, { Código: '1030709', Descripción: 'Se requiere identificación de cuenta cliente.' }, { Código: '1030712', Descripción: 'Se requiere cuenta para recuperar la información.' }, { Código: '1030714', Descripción: 'El contrato consultado no corresponde al servicio recibido.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.ObtenerResumenOrden>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:ordenId>345</bts:ordenId>
      </bts:BTCASHManagement.ObtenerResumenOrden>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?ObtenerResumenOrden=\' \
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
      <BTCASHManagement.ObtenerResumenOrdenResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <sdtResumenCabezal>
            <moneda>0</moneda>
            <cuentaDebito>825</cuentaDebito>
            <estado>S</estado>
            <nombreArchivo>Serv100Pcaja.txt</nombreArchivo>
            <referencia/>
            <cantidadLineas>2</cantidadLineas>
            <ordenId>345</ordenId>
            <servicio>100</servicio>
            <contratoId>60</contratoId>
            <importe>400.0</importe>
            <mensajesError></mensajesError>
            <archivoId>272</archivoId>
            <fechaPago>2024-11-01</fechaPago>
         </sdtResumenCabezal>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-18</Fecha>
            <Hora>12:47:36</Hora>
            <Numero>26014</Numero>
            <Servicio>BTCASHManagement.ObtenerResumenOrden</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.ObtenerResumenOrdenResponse>
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
    "sdtResumenCabezal": {
         "moneda": 0,
         "cuentaDebito": 825,
         "estado": "S",
         "nombreArchivo": "Serv100Pcaja.txt",
         "referencia": "",
         "cantidadLineas": 2,
         "ordenId": 345,
         "servicio": 100,
         "contratoId": 60,
         "importe": 400,
         "mensajesError": "",
         "archivoId": 272,
         "fechaPago": "2024-11-01"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.ObtenerResumenOrden",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTResumenCabezal', fields: [{ Nombre: 'archivoId', Tipo: 'Long', Comentarios: 'Identificador de archivo.' }, { Nombre: 'contratoId', Tipo: 'Int', Comentarios: 'Identificador del contrato CASH.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Servicio CASH.' }, { Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de orden CASH.' }, { Nombre: 'cuentaDebito', Tipo: 'Long', Comentarios: 'Identificador único de la cuenta débito.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago o cobro.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del archivo.' }, { Nombre: 'cantidadLineas', Tipo: 'Int', Comentarios: 'Cantidad de líneas del archivo.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Moneda.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe total.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia del pago o cobro.' }, { Nombre: 'nombreArchivo', Tipo: 'String', Comentarios: 'Nombre del archivo.' }, { Nombre: 'mensajesError', Tipo: 'String', Comentarios: 'Lista de mensajes de la línea.' }] }];
}
