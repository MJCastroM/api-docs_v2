import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ContratarDebitoAutomatico',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarDebitoAutomaticoComponent1750268694363 {
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
  errors     = [{ Codigo: '1030704', Descripcion: 'Id de contrato cliente desconocido.' }, { Codigo: '1030706', Descripcion: 'El contrato no esta activo.' }, { Codigo: '1030714', Descripcion: 'El contrato consultado no corresponde al servicio recibido.' }, { Codigo: '1030760', Descripcion: 'No se pudo dar de alta el contrato.' }, { Codigo: '1030770', Descripcion: 'No se recupero información para la cuenta recibida.' }, { Codigo: '1030790', Descripcion: 'Acción desconocida para el alta de débito automático.' }, { Codigo: '1030791', Descripcion: 'Se requiere identificador de deuda para el alta de débito automático.' }, { Codigo: '1030792', Descripcion: 'No se identifica servicio de débito automático.' }, { Codigo: '1030793', Descripcion: 'No existe el contrato de débito automático la acción no puede realizarse.' }, { Codigo: '1030794', Descripcion: 'Estado del contrato de débito automático impide la acción.' }, { Codigo: '1030795', Descripcion: 'Acción no permitida para la afiliación.' }, { Codigo: '1030796', Descripcion: 'Valor incorrecto para primer dia de pago' }, { Codigo: '1030797', Descripcion: 'Debe indicar valor para monto máximo de pago.' }, { Codigo: '1030798', Descripcion: 'En servicio online debe indicar valor para primer dia de pago.' }, { Codigo: '1030799', Descripcion: 'Existe afiliación activa para el identificador de cliente recibido.' }, { Codigo: '1030800', Descripcion: 'Para la cuenta recibida no es posible la afiliación.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`, json: `curl -X POST \
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
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
</SOAP-ENV:Envelope>`,  json: `\'{
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
