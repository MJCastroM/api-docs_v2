import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-RegistrarPagoEnLineaDesdeCuenta',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class RegistrarPagoEnLineaDesdeCuentaComponent1750713393258 {
  pageTitle        = 'Registrar Pago En Linea Desde Cuenta';
  description      = `Método para registrar el pago en linea de una factura, debitando desde la cuenta.`;
  pubName    = 'BTCASHManagement.RegistrarPagoEnLineaDesdeCuenta';
  programa   = 'RBTPGC67';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'contratoId', Tipo: 'Short', Comentarios: 'Identificador del contrato.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Servicio CASH.' }, { Nombre: 'deudaId', Tipo: 'String', Comentarios: 'Identificador de la deuda.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de la moneda.' }, { Nombre: 'importePago', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'sdtValoresCamposCash', Tipo: '[sBTValorCampoCASH](#sbtvalorcampocash)', Comentarios: 'Lista de valores de campos CASH a buscar.' }];
  outputData = [{ Nombre: 'transaccionId', Tipo: 'Long', Comentarios: 'Identificador de transacción.' }, { Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de la orden.' }, { Nombre: 'nroLineaOrden', Tipo: 'Int', Comentarios: 'Número de línea de orden CASH.' }];
  errors     = [{ Codigo: '1030614', Descripcion: 'Canal no habilitado para el servicio.' }, { Codigo: '1030615', Descripcion: 'Canal no habilitado para el contrato.' }, { Codigo: '1030618', Descripcion: 'El importe debe ser mayor a cero.' }, { Codigo: '1030619', Descripcion: 'Código de Moneda desconocido.' }, { Codigo: '1030701', Descripcion: 'El Servicio no existe.' }, { Codigo: '1030704', Descripcion: 'Id de contrato cliente desconocido.' }, { Codigo: '1030706', Descripcion: 'El contrato no esta activo.' }, { Codigo: '1030761', Descripcion: 'No se obtuvo Canal CASH para el canal que invoca.' }, { Codigo: '1030762', Descripcion: 'El servicio no es de recaudos.' }, { Codigo: '1030763', Descripcion: 'Debe indicar el identificador de la deuda.' }, { Codigo: '1030764', Descripcion: 'El servicio no es en linea, no se crea el cobro.' }, { Codigo: '1030765', Descripcion: 'La moneda del pago difiere con la del convenio.' }, { Codigo: '1030770', Descripcion: 'No se recupero información para la cuenta recibida.' }, { Codigo: '1030801', Descripcion: 'Saldo insuficiente para realizar el pago.' }, { Codigo: '1039999', Descripcion: 'No se determino módulo/transacción en la regla: [Número de regla].' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.RegistrarPagoEnLineaDesdeCuenta>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>54878527AF5867CA94C680B0</bts:Token>
         </bts:Btinreq>
         <bts:contratoId>8</bts:contratoId>
         <bts:servicio>240</bts:servicio>
         <bts:deudaId>4</bts:deudaId>
         <bts:monedaId>0</bts:monedaId>
         <bts:importePago>543</bts:importePago>
         <bts:operacionUId>54</bts:operacionUId>
         <bts:sdtValoresCamposCash>
            <bts:sBTValorCampoCash>
               <bts:tag></bts:tag>
               <bts:valor></bts:valor>
            </bts:sBTValorCampoCash>
         </bts:sdtValoresCamposCash>
      </bts:BTCASHManagement.RegistrarPagoEnLineaDesdeCuenta>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?RegistrarPagoEnLineaDesdeCuenta=\' \
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
    "contratoId": 8,
    "serivicio": 240,
    "deudaId": 4,
    "monedaId": 0,
    "importePago": 543,
    "operacionUId": 54,
    "sdtValoresCamposCash": {
      "sBTValorCampoCash": {
         "tag": "",
         "valor": ""
      }
    }
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.RegistrarPagoEnLineaDesdeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>BANTOTAL</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>E362E52FED059AA3BF86A6E3</Token>
         </Btinreq>
         <transaccionId>124</transaccionId>
         <ordenId>532</ordenId>
         <nroLineaOrden>4</nroLineaOrden>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-08</Fecha>
            <Hora>12:27:14</Hora>
            <Numero>742</Numero>
            <Servicio>BTCASHManagement.RegistrarPagoEnLineaDesdeCuenta</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.RegistrarPagoEnLineaDesdeCuentaResponse>
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
    "transaccionId": 124,
    "ordenId": 532,
    "nroLineaOrden": 4,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.RegistrarPagoEnLineaDesdeCuenta",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTValorCampoCASH', fields: [{ Nombre: 'tag', Tipo: 'String', Comentarios: 'Tag del campo CASH.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor del campo CASH.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
