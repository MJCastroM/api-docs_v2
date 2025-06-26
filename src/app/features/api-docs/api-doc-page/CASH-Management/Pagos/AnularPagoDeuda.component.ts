import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AnularPagoDeuda',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AnularPagoDeudaComponent1750945331533 {
  pageTitle        = 'Anular Pago Deuda';
  description      = `Método para anular un pago realizado de una factura.`;
  pubName    = 'BTCASHManagement.AnularPagoDeuda';
  programa   = 'RBTPGC63';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de la orden.' }, { Nombre: 'nroLineaOrden', Tipo: 'Int', Comentarios: 'Número de línea de orden CASH.' }];
  outputData = [{ Nombre: 'transaccionId', Tipo: 'Long', Comentarios: 'Identificador de transacción.' }];
  errors     = [{ Codigo: '1030610', Descripcion: 'Debe indicar el numero de la orden.' }, { Codigo: '1030611', Descripcion: 'Debe indicar el numero de linea en la orden.' }, { Codigo: '1030612', Descripcion: 'El valor recibido no corresponde a un numero de orden.' }, { Codigo: '1030616', Descripcion: 'Numero de linea de la orden no existe.' }, { Codigo: '1030622', Descripcion: 'Estado de la linea no permite anulación.' }, { Codigo: '1030623', Descripcion: 'Solo se permiten anulaciones en el mismo dia.' }, { Codigo: '1030624', Descripcion: 'Error al procesar la anulación.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.AnularPagoDeuda>
         <bts:Btinreq>
            <Canal>AGENTECORRESPONSAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>4A287DE2D400320135CCA4E5</Token>
         </bts:Btinreq>
         <bts:ordenId>293</bts:ordenId>
         <bts:nroLineaOrden>1</bts:nroLineaOrden>
      </bts:BTCASHManagement.AnularPagoDeuda>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?AnularPagoDeuda=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "1",
          "Canal": "AGENTECORRESPONSAL",
          "Usuario": "INSTALADOR",
          "Token": "4A287DE2D400320135CCA4E5"
    },
    "ordenId": 293,
    "nroLineaOrden": 1
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.AnularPagoDeudaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>AGENTECORRESPONSAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>4A287DE2D400320135CCA4E5</Token>
         </Btinreq>
         <transaccionId>97</transaccionId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-19</Fecha>
            <Hora>11:16:08</Hora>
            <Numero>26124</Numero>
            <Servicio>BTCASHManagement.AnularPagoDeuda</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>AGENTECORRESPONSAL</Canal>
         </Btoutreq>
      </BTCASHManagement.AnularPagoDeudaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
    "Btinreq": {
      "Device": "1",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "AGENTECORRESPONSAL",
      "Token": "4A287DE2D400320135CCA4E5"
    },
    "transaccionId": 97,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.AnularPagoDeuda",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
