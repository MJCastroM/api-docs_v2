import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ContratarConFacultades',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarConFacultadesComponent1751987197383 {
  pageTitle        = 'Contratar con Facultades';
  description      = `Método para contratar un depósito a plazo fijo dando de alta las facultades correspondientes.`;
  pubName    = 'BTDepositosAPlazo.ContratarConFacultades';
  programa   = 'RBTPG573';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'simulacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la simulación.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador único de la operación de donde se retira el monto del DPF.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador único de la operación de acreditación (Capital y/o intereses según instrucción).' }, { Nombre: 'instruccionAlVencimiento', Tipo: 'Short', Comentarios: 'Identificador de instrucción al vencimiento.' }, { Nombre: 'controlaMismoCliente', Tipo: 'String', Comentarios: '¿Controla correspondencia de cuenta de débito contra cuenta cliente originante? [Hidden: Valores \'S\'/\'N\'].' }, { Nombre: 'tipoIntegracionCuenta', Tipo: 'String', Comentarios: 'Tipo de integración de la cuenta (Ej: Conjunta, Individual).' }];
  outputData = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'transaccionUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de la Cuenta.' }, { Código: '30002', Descripción: 'No se recibió el identificador de la Simulación.' }, { Código: '30003', Descripción: 'No se recibió el identificador de la operación a utilizar para el débito.' }, { Código: '30007', Descripción: 'La simulación ya no se encuentra habilitada para su contratación.' }, { Código: '30008', Descripción: 'La simulación ingresada no pertenece al cliente ingresado.' }, { Código: '30010', Descripción: 'La operación del débito no pertenece al cliente ingresado.' }, { Código: '30012', Descripción: 'La operación de acreditación no pertenece al cliente ingresado.' }, { Código: '30014', Descripción: 'Error de configuración: No se definió control de CAC.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.ContratarConFacultades>
         <bts:Btinreq>
            <bts:Device>FP</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>00C39357A152407BC2F8A995</bts:Token>
         </bts:Btinreq>
         <bts:simulacionUId>528</bts:simulacionUId>
         <bts:clienteUId>322</bts:clienteUId>
         <bts:operacionUIdOrigen>1128</bts:operacionUIdOrigen>
         <bts:operacionUIdDestino>824</bts:operacionUIdDestino>
         <bts:instruccionAlVencimiento>1</bts:instruccionAlVencimiento>
         <bts:controlaMismoCliente>N</bts:controlaMismoCliente>
         <bts:tipoIntegracionCuenta>A</bts:tipoIntegracionCuenta>
      </bts:BTDepositosAPlazo.ContratarConFacultades>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ContratarConFacultades=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: b80d8c23-883d-589a-228b-4009ae6eba1c\' \
  -d \'{
    "Btinreq": {
        "Device": "FP",
        "Usuario": "INSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "00C39357A152407BC2F8A995"
    },
    "simulacionUId": "528",
    "clienteUId": "322",
    "operacionUIdOrigen": "1128",
    "operacionUIdDestino": "824",
    "instruccionAlVencimiento": "1",
    "controlaMismoCliente": "N",
    "tipoIntegracionCuenta": "A"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ContratarConFacultadesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6CD13C161EE607C42B83D501</Token>
         </Btinreq>
         <operacionUId>969</operacionUId>
         <transaccionUId>167</transaccionUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35523</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ContratarConFacultades</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-05-21</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>17:50:29</Hora>
         </Btoutreq>
      </BTDepositosAPlazo.ContratarConFacultadesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
  "Btinreq": {
      "Device": "FC",
      "Usuario": "INSTALADOR",
      "Requerimiento": "0",
      "Canal": "BTDIGITAL",
      "Token": "6CD13C161EE607C42B83D501"
  },
  "opreacionUid": "969",
  "transaccionUId": "167",
  "Erroresnegocio": "",
  "Btoutreq": {
    "Numero": "35523",
    "Estado": "OK",
    "Servicio": "BTDepositosAPlazo.ContratarConFacultades",
    "Requerimiento": "0",
    "Fecha": "2025-05-21",
    "Canal": "BTDIGITAL",
    "Hora": "17:50:29"
  },
}\'` }
  };

  structuredTypes = [];
}
