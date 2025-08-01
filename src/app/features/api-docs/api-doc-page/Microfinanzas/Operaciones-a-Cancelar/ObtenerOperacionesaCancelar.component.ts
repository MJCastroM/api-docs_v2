import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerOperacionesaCancelar',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerOperacionesaCancelarComponent1751987197884 {
  pageTitle        = 'Obtener Operaciones a Cancelar';
  description      = `Método para obtener las operaciones seleccionadas a cancelar para una solicitud de créditos.`;
  pubName    = 'BTMicrofinanzas.ObtenerOperacionesACancelar';
  programa   = 'RBTPG364';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador de instancia Workflow.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }];
  outputData = [{ Nombre: 'sdtOperaciones', Tipo: '[sBTOperacionWF](#sbtoperacionwf)', Comentarios: 'Listado de operaciones.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de solicitud.' }, { Código: '30002', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30003', Descripción: 'No se recuperó la cuenta para el identificador de cliente: [Número de identificador].' }, { Código: '40001', Descripción: 'La solicitud ingresada no existe.' }, { Código: '40002', Descripción: 'El cliente ingresado no corresponde con la solicitud.' }, { Código: '40003', Descripción: 'No se encontraron operaciones para cancelar.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.ObtenerOperacionesACancelar>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>dbfad05a474A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:solicitudUId>11887</bts:solicitudUId>
         <bts:clienteUId>862</bts:clienteUId>
      </bts:BTMicrofinanzas.ObtenerOperacionesACancelar>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas?ObtenerOperacionesACancelar\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "GP",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"solicitudUId": "11887",
	"clienteUId": "862"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.ObtenerOperacionesACancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>dbfad05a474A8B5C60A82434</Token>
         </Btinreq>
         <sdtOperaciones>
            <sBTOperacionWF>
               <fechaUltimoPago>2016-03-01</fechaUltimoPago>
               <diasMora>1674</diasMora>
               <saldo>-30340.61</saldo>
               <fechaVencimiento>2016-01-02</fechaVencimiento>
               <montoCancelacion>511820.42</montoCancelacion>
               <operacionUId>1724</operacionUId>
               <fechaValor>2020-03-13</fechaValor>
            </sBTOperacionWF>
            <sBTOperacionWF>
               <fechaUltimoPago>2017-11-14</fechaUltimoPago>
               <diasMora>0</diasMora>
               <saldo>-15000.00</saldo>
               <fechaVencimiento>2016-01-02</fechaVencimiento>
               <montoCancelacion>0.00</montoCancelacion>
               <operacionUId>1727</operacionUId>
               <fechaValor>2020-03-13</fechaValor>
            </sBTOperacionWF>
         </sdtOperaciones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>111406</Numero>
            <Estado>OK</Estado>
            <Servicio>BTMicrofinanzas.ObtenerOperacionesACancelar</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2021-10-18</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>09:09:54</Hora>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerOperacionesACancelarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
   "Btinreq": {
      "Device": "GP",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cc9b534A8B5C60A82434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtOperaciones": {
      "sBTOperacionWF": [
      {
         "fechaUltimoPago": "2016-03-01",
         "diasMora": "1674",
         "saldo": "-30340.61",
         "fechaVencimiento": "2016-01-02",
         "montoCancelacion": "511820.42",
         "operacionUId": "1724",
         "fechaValor": "2020-03-13"
      },
      {
         "fechaUltimoPago": "2017-11-14",
         "diasMora": "0",
         "saldo": "-15000.00",
         "fechaVencimiento": "2016-01-02",
         "montoCancelacion": "0.00",
         "operacionUId": "1727",
         "fechaValor": "2020-03-13"
      }
      ]
   },
   "Btoutreq": {
      "Numero": "111406",
      "Estado": "OK",
      "Servicio": "BTMicrofinanzas.ObtenerOperacionesACancelar",
      "Requerimiento": "1",
      "Fecha": "2021-10-18",
      "Canal": "BTDIGITAL",
      "Hora": "09:09:54"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTOperacionWF', fields: [{ Nombre: 'diasMora', Tipo: 'Int', Comentarios: 'Días de mora de la operación.' }, { Nombre: 'fechaUltimoPago', Tipo: 'Date', Comentarios: 'Fecha de último pago de la operación.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor de la operación.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento de la operación.' }, { Nombre: 'montoCancelacion', Tipo: 'Double', Comentarios: 'Monto de cancelación de la operación.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo de la operación.' }] }];
}
