import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ContratarRefinanciacion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarRefinanciacionComponent1751987199230 {
  pageTitle        = 'Contratar Refinanciación';
  description      = `Método para contratar la refinanciación de un préstamo.`;
  pubName    = 'BTPrestamos.ContratarRefinanciacion';
  programa   = 'RBTPG549';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'simulacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la simulación.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'parmsAux', Tipo: 'String', Comentarios: '[Hidden: Parámetros auxiliares. Se pueden enviar los siguientes [valores](#valores)].' }, { Nombre: 'operacionCobroUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación de cobro.' }, { Nombre: 'operacionUIdIns', Tipo: 'Long', Comentarios: '[Hidden: Valor fijo vacío para este método].' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único del movimiento.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de la operación a contratar.' }, { Código: '30002', Descripción: 'No se recuperó la operación a contratar para el Identificador: [Número de Identificador].' }, { Código: '30003', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30004', Descripción: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }, { Código: '30005', Descripción: 'No se recibió el identificador de la simulación.' }, { Código: '30006', Descripción: 'No se recuperaron datos de la simulación para el identificador [Número de Identificador].' }, { Código: '30007', Descripción: 'El cliente ingresado no coincide con el de la operación.' }, { Código: '30008', Descripción: 'No se recuperó la operación para el identificador: [Número de Identificador].' }, { Código: '30009', Descripción: 'No se recuperó la operación de cobro para el identificador: [Número de Identificador].' }, { Código: '30010', Descripción: 'La operación de cobro no pertenece al cliente.' }, { Código: '30011', Descripción: 'No se recibió identificador de la operación de cuenta vista.' }, { Código: '30012', Descripción: 'No se recibió identificador de la operación de instrucción de cobro.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ContratarRefinanciacion>
         <bts:Btinreq>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>2</bts:operacionUId>
         <bts:simulacionUId>5</bts:simulacionUId>
         <bts:clienteUId>6</bts:clienteUId>
         <bts:operacionCobroUId>23</bts:operacionCobroUId>
      </bts:BTPrestamos.ContratarRefinanciacion>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
    \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ContratarRefinanciacion\' \
    -H \'cache-control: no-cache\' \
    -H \'content-type: application/json\' \
    -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
    -d \'{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "AC",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "operacionUId": 2,
    "simulacionUId": 5,
    "clienteUId": 6,
    "operacionCobroUId": 23,
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ContratarRefinanciacion xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>52005b89a6F955E77534D3E0</Token>
         </Btinreq>
         <movimientoUId>9</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>677</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ContratarRefinanciacion</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-04-23</Fecha>
            <Hora>16:17:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ContratarRefinanciacion>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "BANTOTAL",
        "Token": "324915377F955E77534D3E02",
        "Device": "AC"
    },
	"movimientoUId": 9,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTPrestamos.ContratarRefinanciacion",
        "Fecha": "2019-11-19",
        "Hora": "13:05:22",
        "Requerimiento": "",
        "Numero": 6924,
        "Estado": "OK"
    }
}` }
  };

  structuredTypes = [];
}
