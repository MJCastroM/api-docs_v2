import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-PagarSeguro',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class PagarSeguroComponent1750945335533 {
  pageTitle        = 'Pagar Seguro';
  description      = `Método para pagar un seguro.`;
  pubName    = 'BTSegurosVoluntarios.PagarSeguro';
  programa   = 'RBTPG545';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'seguroUId', Tipo: 'Long', Comentarios: 'Identificador único del seguro.' }, { Nombre: 'montoPago', Tipo: 'Double', Comentarios: 'Monto a pagar.' }, { Nombre: 'operacionUIdCobro', Tipo: 'Long', Comentarios: 'Identificador único de la operación de cobro.' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'long', Comentarios: 'Identificador único del movimiento.' }];
  errors     = [{ Codigo: '30002', Descripcion: 'No se recibió el identificador de operación del seguro.' }, { Codigo: '30003', Descripcion: 'Se debe ingresar un monto.' }, { Codigo: '30004', Descripcion: 'No se recuperó la clave de operación para el identificador del seguro: [Número de Identificador].' }, { Codigo: '30005', Descripcion: 'No se recuperó la clave de operación de cobro para el identificador: [Número de Identificador].' }, { Codigo: '50002', Descripcion: 'La operación no existe.' }, { Codigo: '50003', Descripcion: 'La operación de cobro no existe.' }, { Codigo: '50005', Descripcion: 'Atención: No se pudo obtener el numerador para la transacción.' }, { Codigo: '50006', Descripcion: 'La operación esta cancelada.' }, { Codigo: '50008', Descripcion: 'La operación de cobro esta cancelada.' }, { Codigo: '50010', Descripcion: 'El monto ingresado supera al monto total de la deuda.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSegurosVoluntarios.PagarSeguro>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>89B4F6D7BEFB0C7F653DB37A</bts:Token>
         </bts:Btinreq>
         <bts:seguroUId>286</bts:seguroUId>
         <bts:montoPago>543</bts:montoPago>
         <bts:operacionUIdCobro>22</bts:operacionUIdCobro>
      </bts:BTSegurosVoluntarios.PagarSeguro>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
    \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSegurosVoluntarios?ObtenerSeguros\' \
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
    "seguroUId": 286,
    "montoPago": 543,
    "operacionUIdCobro": 22
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSegurosVoluntarios.PagarSeguroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>89B4F6D7BEFB0C7F653DB37A</Token>
         </Btinreq>
         <movimientoUId>125</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20473</Numero>
            <Estado>OK</Estado>
            <Servicio>BTSegurosVoluntarios.PagarSeguro</Servicio>
            <Fecha>2024-05-14</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>15:58:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTSegurosVoluntarios.PagarSeguroResponse>
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
    "movimientoUId": 125,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTSegurosVoluntarios.PagarSeguro",
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
