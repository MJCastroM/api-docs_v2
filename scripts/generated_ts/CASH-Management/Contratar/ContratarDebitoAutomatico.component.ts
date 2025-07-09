import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ContratarDebitoAutomatico',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarDebitoAutomaticoComponent1751987195731 {
  pageTitle        = 'Contratar Débito Automático';
  description      = `Método para contratar la afiliación a un débito automático.`;
  pubName    = 'BTCASHManagement.ContratarDebitoAutomatico';
  programa   = 'RBTPGC90';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'contratoId', Tipo: 'Long', Comentarios: 'Identificador del contrato.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Código de Servicio CASH.' }, { Nombre: 'operacionUId_debito', Tipo: 'Long', Comentarios: 'Identificador único de la operación de débito.' }, { Nombre: 'clienteID', Tipo: 'String', Comentarios: 'Identificador de cliente.' }, { Nombre: 'dia1', Tipo: 'Byte', Comentarios: 'Dia 1 para intento de pago.' }, { Nombre: 'montoMax', Tipo: 'Double', Comentarios: 'Monto máximo a debitar.' }, { Nombre: 'alias', Tipo: 'String', Comentarios: 'Alias o comentarios.' }, { Nombre: 'accion', Tipo: 'String', Comentarios: 'Tipo de acción. Se pueden enviar los siguientes [valores.](#valores)' }];
  outputData = [];
  errors     = [{ Código: '1030704', Descripción: 'Id de contrato cliente desconocido.' }, { Código: '1030706', Descripción: 'El contrato no esta activo.' }, { Código: '1030714', Descripción: 'El contrato consultado no corresponde al servicio recibido.' }, { Código: '1030760', Descripción: 'No se pudo dar de alta el contrato.' }, { Código: '1030770', Descripción: 'No se recupero información para la cuenta recibida.' }, { Código: '1030790', Descripción: 'Acción desconocida para el alta de débito automático.' }, { Código: '1030791', Descripción: 'Se requiere identificador de deuda para el alta de débito automático.' }, { Código: '1030792', Descripción: 'No se identifica servicio de débito automático.' }, { Código: '1030793', Descripción: 'No existe el contrato de débito automático la acción no puede realizarse.' }, { Código: '1030794', Descripción: 'Estado del contrato de débito automático impide la acción.' }, { Código: '1030795', Descripción: 'Acción no permitida para la afiliación.' }, { Código: '1030796', Descripción: 'Valor incorrecto para primer dia de pago' }, { Código: '1030797', Descripción: 'Debe indicar valor para monto máximo de pago.' }, { Código: '1030798', Descripción: 'En servicio online debe indicar valor para primer dia de pago.' }, { Código: '1030799', Descripción: 'Existe afiliación activa para el identificador de cliente recibido.' }, { Código: '1030800', Descripción: 'Para la cuenta recibida no es posible la afiliación.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.ContratarDebitoAutomatico>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:contratoId>22</bts:contratoId>
         <bts:servicio>500</bts:servicio>
         <bts:operacionUId_debito>831</bts:operacionUId_debito>
         <bts:clienteID>383</bts:clienteID>
         <bts:dia1></bts:dia1>
         <bts:montoMax>20000</bts:montoMax>
         <bts:alias>ID0000001</bts:alias>
         <bts:accion>A</bts:accion>
      </bts:BTCASHManagement.ContratarDebitoAutomatico>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?ContratarDebitoAutomatico=\' \
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
    "contratoId": 22,
    "servicio": 500,
    "operacionUId_debito": 831,
    "clienteID": 383,
    "dia1": "",
    "montoMax": 20000,
    "alias": "ID0000001",
    "accion": "A"
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.ContratarDebitoAutomaticoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-18</Fecha>
            <Hora>14:50:16</Hora>
            <Numero>26035</Numero>
            <Servicio>BTCASHManagement.ContratarDebitoAutomatico</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.ContratarDebitoAutomaticoResponse>
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
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.ContratarDebitoAutomatico",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
