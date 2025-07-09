import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ContratarSimulacion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarSimulacionComponent1751987195230 {
  pageTitle        = 'Contratar Simulación';
  description      = `Método para contratar un ahorro programado a partir de una simulación.`;
  pubName    = 'BTAhorroProgramado.ContratarSimulacion';
  programa   = 'RBTPG445';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtDatos', Tipo: '[sBTCrearSolicitudAhorro](#sbtcrearsolicitudahorro)', Comentarios: 'Datos de la solicitud de ahorro programado.' }];
  outputData = [{ Nombre: 'ahorroUId', Tipo: 'Long', Comentarios: 'Identificador de ahorro.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de la simulación.' }, { Código: '30002', Descripción: 'No se recibió el identificador del cliente.' }, { Código: '30009', Descripción: 'No se recuperó la cuenta para el identificador de cliente: [Número de Identificador].' }, { Código: '30010', Descripción: 'No se recuperó la cuenta origen del ahorro para el identificador: [Número de Identificador].' }, { Código: '30011', Descripción: 'No se recuperó la cuenta destino del ahorro para el identificador: [Número de Identificador].' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTAhorroProgramado.ContratarSimulacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>GL</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>01D45E9964612A4C8CCB1055</bts:Token>
         </bts:Btinreq>
         <bts:sdtDatos>
            <bts:simulacionId>741</bts:simulacionId>
            <bts:cuentaDestinoUid>661</bts:cuentaDestinoUid>
            <bts:motivoAhorro>Prueba</bts:motivoAhorro>
            <bts:cuentaOrigenUid>661</bts:cuentaOrigenUid>
            <bts:clienteUid>61</bts:clienteUid>
         </bts:sdtDatos>
      </bts:BTAhorroProgramado.ContratarSimulacion>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ContratarSimulacion\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Device": "GL",
          "Requerimiento": 1,
          "Token": "01D45E9964612A4C8CCB1055"
        },
        "sdtDatos": {
          "simulacionId": 741,
          "cuentaDestinoUid": 661,
          "motivoAhorro": "Prueba",
          "cuentaOrigenUid": 661,
          "clienteUid": 61
        }
    }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTAhorroProgramado.ContratarSimulacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>MINSTALADOR</Usuario>
            <Device>GL</Device>
            <Requerimiento>1</Requerimiento>
            <Token>01D45E9964612A4C8CCB1055</Token>
         </Btinreq>
         <ahorroUId>1102</ahorroUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2022-11-29</Fecha>
            <Hora>17:23:23</Hora>
            <Numero>11097</Numero>
            <Servicio>BTAhorroProgramado.ContratarSimulacion</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ContratarSimulacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
	"Btinreq": {
        "Canal": "BTDIGITAL",
        "Usuario": "MINSTALADOR",
        "Device": "GL",
        "Requerimiento": 1,
        "Token": "01D45E9964612A4C8CCB1055"
    },
    "ahorroUId": 1102,
    "Erroresnegocio": "",
    "Btoutreq": {
        "Estado": "OK",
        "Fecha": "2022-11-29",
        "Hora": "17:23:23",
        "Numero": 11097,
        "Servicio": "BTAhorroProgramado.ContratarSimulacion",
        "Requerimiento": 1,
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTCrearSolicitudAhorro', fields: [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador de cliente.' }, { Nombre: 'cuentaDestinoUId', Tipo: 'Long', Comentarios: 'Identificador de cuenta destino.' }, { Nombre: 'cuentaOrigenUId', Tipo: 'Long', Comentarios: 'Identificador de cuenta origen.' }, { Nombre: 'motivoAhorro', Tipo: 'String', Comentarios: 'Motivo de ahorro.' }, { Nombre: 'simulacionId', Tipo: 'Long', Comentarios: 'Identificador de simulación.' }] }];
}
