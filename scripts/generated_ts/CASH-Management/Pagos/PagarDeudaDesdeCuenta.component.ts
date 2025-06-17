import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-PagarDeudaDesdeCuenta',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class PagarDeudaDesdeCuentaComponent {
  // Cabecera e info-card
  pageTitle = 'Pagar Deuda Desde Cuenta';
  description = `Metodo para pagar una factura debitando desde una cuenta vista.`;
  pubName    = 'BTCASHManagement.PagarDeudaDesdeCuenta';
  programa   = 'RBTPGC65';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['ordenId', 'nroLineaOrden', 'monedaId', 'importePago', 'operacionUId'];
  inputData  = [{ Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de la orden.' }, { Nombre: 'nroLineaOrden', Tipo: 'Int', Comentarios: 'Numero de linea de orden CASH.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de la moneda.' }, { Nombre: 'importePago', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion de cuenta vista.' }];
  outputCols = ['transaccionId'];
  outputData = [{ Nombre: 'transaccionId', Tipo: 'Long', Comentarios: 'Identificador de transaccion.' }];
  errorCols  = ['1030610', '1030611', '1030612', '1030614', '1030615', '1030616', '1030617', '1030618', '1030619', '1030620', '1030621', '1030751', '1030761', '1030770', '1030801', '1039999'];
  errors     = [{ Codigo: '1030610', Descripcion: 'Debe indicar el numero de la orden.' }, { Codigo: '1030611', Descripcion: 'Debe indicar el numero de linea en la orden.' }, { Codigo: '1030612', Descripcion: 'El valor recibido no corresponde a un numero de orden.' }, { Codigo: '1030614', Descripcion: 'Canal no habilitado para el servicio.' }, { Codigo: '1030615', Descripcion: 'Canal no habilitado para el contrato.' }, { Codigo: '1030616', Descripcion: 'Numero de linea de la orden no existe.' }, { Codigo: '1030617', Descripcion: 'Estado de la linea de la orden no permite pago.' }, { Codigo: '1030618', Descripcion: 'El importe debe ser mayor a cero.' }, { Codigo: '1030619', Descripcion: 'codigo de Moneda desconocido' }, { Codigo: '1030620', Descripcion: 'El importe del pago es inferior a la deuda.' }, { Codigo: '1030621', Descripcion: 'El importe del pago supera a la deuda.' }, { Codigo: '1030751', Descripcion: 'Estado de la orden no permite procesar.' }, { Codigo: '1030761', Descripcion: 'No se obtuvo Canal CASH para el canal que invoca.' }, { Codigo: '1030770', Descripcion: 'No se recupero informacion para la cuenta recibida.' }, { Codigo: '1030801', Descripcion: 'Saldo insuficiente para realizar el pago.' }, { Codigo: '1039999', Descripcion: 'No se obtuvo Regla para determinar la Transaccion a ejecutar.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.PagarDeudaDesdeCuenta>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:ordenId>293</bts:ordenId>
         <bts:nroLineaOrden>1</bts:nroLineaOrden>
         <bts:monedaId>0</bts:monedaId>
         <bts:importePago>100</bts:importePago>
         <bts:operacionUId>835</bts:operacionUId>
      </bts:BTCASHManagement.PagarDeudaDesdeCuenta>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?PagarDeudaDesdeCuenta=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "ordenId": 293,
    "nroLineaOrden": 1,
    "monedaId": 0,
    "importePago": 100,
    "operacionUId": 835
  }'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.PagarDeudaDesdeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <transaccionId>98</transaccionId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-19</Fecha>
            <Hora>11:36:57</Hora>
            <Numero>26133</Numero>
            <Servicio>BTCASHManagement.PagarDeudaDesdeCuenta</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.PagarDeudaDesdeCuentaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "transaccionId": 98,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.PagarDeudaDesdeCuenta",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
