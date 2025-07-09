import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-EliminarStopDebit',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class EliminarStopDebitComponent1751987195471 {
  pageTitle        = 'Eliminar Stop Debit';
  description      = `Método para eliminar un stop debit.`;
  pubName    = 'BTSNP.EliminarStopDebit';
  programa   = 'RBTPG344';
  scope      = 'Argentina';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Correlativo del stop debit.' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió identificador del cliente.' }, { Código: '30002', Descripción: 'No se encontró un cliente para el identificador: [Número de identificador].' }, { Código: '30003', Descripción: 'No se recibió correlativo del Stop Debit.' }, { Código: '40001', Descripción: 'El Stop Debit ya está dado de baja.' }, { Código: '40002', Descripción: 'El Stop Debit no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSNP.EliminarStopDebit>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>bc479c1c0eF955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>2</bts:clienteUId>
         <bts:correlativo>4</bts:correlativo>
      </bts:BTSNP.EliminarStopDebit>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?SolicitarBajaDeAdhesion\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
    "Btinreq": {
        "Device": "AC",
        "Usuario": "BANTOTAL",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "bc479c1c0eF955E77534D3E0"
    },
    "clienteUId": 2,
    "correlativo": 4
  }` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSNP.EliminarStopDebitResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>bc479c1c0eF955E77534D3E0</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1635</Numero>
            <Servicio>BTSNP.EliminarStopDebit</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:20:08</Hora>
         </Btoutreq>
      </BTSNP.EliminarStopDebitResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
` }
  };

  structuredTypes = [];
}
