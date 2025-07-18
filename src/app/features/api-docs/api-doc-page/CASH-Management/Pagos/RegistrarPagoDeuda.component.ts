import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-RegistrarPagoDeuda',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class RegistrarPagoDeudaComponent1751987195881 {
  pageTitle        = 'Registrar Pago de Deuda';
  description      = `Método para registrar el pago de una factura realizado en canal externo.`;
  pubName    = 'BTCASHManagement.RegistrarPagoDeuda';
  programa   = 'RBTPGC62';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de la orden.' }, { Nombre: 'nroLineaOrden', Tipo: 'Int', Comentarios: 'Número de línea de orden CASH.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'importePago', Tipo: 'Double', Comentarios: 'Importe pagado.' }];
  outputData = [{ Nombre: 'transaccionId', Tipo: 'Long', Comentarios: 'Identificador de transacción.' }];
  errors     = [{ Código: '1030610', Descripción: 'Debe indicar el numero de la orden.' }, { Código: '1030611', Descripción: 'Debe indicar el numero de linea en la orden.' }, { Código: '1030612', Descripción: 'El valor recibido no corresponde a un numero de orden.' }, { Código: '1030614', Descripción: 'Canal no habilitado para el servicio.' }, { Código: '1030615', Descripción: 'Canal no habilitado para el contrato.' }, { Código: '1030616', Descripción: 'Numero de linea de la orden no existe.' }, { Código: '1030617', Descripción: 'Estado de la linea de la orden no permite pago.' }, { Código: '1030618', Descripción: 'El importe debe ser mayor a cero.' }, { Código: '1030619', Descripción: 'Código de Moneda desconocido.' }, { Código: '1030620', Descripción: 'El importe del pago es inferior a la deuda.' }, { Código: '1030621', Descripción: 'El importe del pago supera a la deuda.' }, { Código: '1030751', Descripción: 'Estado de la orden no permite procesar.' }, { Código: '1030761', Descripción: 'No se obtuvo Canal CASH para el canal que invoca.' }, { Código: '1039999', Descripción: 'No se obtuvo Regla para determinar la Transacción a ejecutar.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.RegistrarPagoDeuda>
         <bts:Btinreq>
            <Canal>AGENTECORRESPONSAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>4A287DE2D400320135CCA4E5</Token>
         </bts:Btinreq>
         <bts:ordenId>293</bts:ordenId>
         <bts:nroLineaOrden>1</bts:nroLineaOrden>
         <bts:moneda>0</bts:moneda>
         <bts:importePago>100</bts:importePago>
      </bts:BTCASHManagement.RegistrarPagoDeuda>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?RegistrarPagoDeuda=\' \
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
    "ordenId": 293,
    "nroLineaOrden": 1,
    "moneda": 0,
    "importePago": 100
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.RegistrarPagoDeudaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>AGENTECORRESPONSAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>4A287DE2D400320135CCA4E5</Token>
         </Btinreq>
         <transaccionId>95</transaccionId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-19</Fecha>
            <Hora>11:12:48</Hora>
            <Numero>26123</Numero>
            <Servicio>BTCASHManagement.RegistrarPagoDeuda</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>AGENTECORRESPONSAL</Canal>
         </Btoutreq>
      </BTCASHManagement.RegistrarPagoDeudaResponse>
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
    "transaccionId": 95,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.RegistrarPagoDeuda",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
