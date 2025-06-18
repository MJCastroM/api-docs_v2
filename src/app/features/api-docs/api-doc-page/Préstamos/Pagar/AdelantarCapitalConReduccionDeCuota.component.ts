import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AdelantarCapitalConReduccionDeCuota',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AdelantarCapitalConReduccionDeCuotaComponent1750268698281 {
  pageTitle        = 'Adelantar Capital Con Reducción De Cuota';
  description      = `Método para realizar el pago de cuota de un préstamo con adelanto de capital.`;
  pubName    = 'BTPrestamos.AdelantarCapitalConReduccionDeCuota';
  programa   = 'RBTPG555';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'operacionUId_Cobro', Tipo: 'Long', Comentarios: 'Identificador único de la operación de cobro.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'A\' para este método].' }, { Nombre: 'modalidadIntereses', Tipo: 'String', Comentarios: 'Modalidad de intereses. Se pueden enviar los siguientes [valores](#valores).' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único del movimiento.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de operación de préstamo.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador único de operación de cobro.' }, { Codigo: '30003', Descripcion: 'Debe ingresar importe.' }, { Codigo: '30004', Descripcion: 'No se recuperó la operación para el Identificador: [Número de Identificador].' }, { Codigo: '30005', Descripcion: 'No se recuperó la operación para el Identificador: [Número de Identificador].' }, { Codigo: '30006', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30007', Descripcion: 'No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador].' }, { Codigo: '30008', Descripcion: 'El préstamo no pertenece al cliente.' }, { Codigo: '30009', Descripcion: 'La operación de cobro no pertenece al cliente.' }, { Codigo: '30010', Descripcion: 'No se ingresó la modalidad de intereses.' }, { Codigo: '30011', Descripcion: 'El valor del campo modalidadIntereses tiene que ser CP o SP.' }, { Codigo: '30100', Descripcion: 'Error en la contabilización.' }, { Codigo: '51002', Descripcion: 'La operación no existe.' }, { Codigo: '51003', Descripcion: 'La operación de cobro no existe.' }, { Codigo: '51012', Descripcion: 'La operación esta cancelada.' }, { Codigo: '51013', Descripcion: 'La operación de cobro esta cancelada.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.AdelantarCapitalConReduccionDeCuota>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9436BF7CB5B5BB404CC6E5A7</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>212</bts:operacionUId>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:importe>30</bts:importe>
         <bts:operacionUId_Cobro>21</bts:operacionUId_Cobro>
         <bts:referencia></bts:referencia>
         <bts:modalidadIntereses>SP</bts:modalidadIntereses>
      </bts:BTPrestamos.AdelantarCapitalConReduccionDeCuota>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?AdelantarCapitalConReduccionDeCuota\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "operacionUId": 212,
    "clienteUId": 61,
    "importe": 30,
    "operacionUId_Cobro": 21,
    "referencia": "",
    "modalidadIntereses": "SP"
    }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.AdelantarCapitalConReduccionDeCuotaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9436BF7CB5B5BB404CC6E5A7</Token>
         </Btinreq>
         <movimientoUId>66</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20604</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.AdelantarCapitalConReduccionDeCuota</Servicio>
            <Fecha>2024-05-21</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>15:43:23</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.AdelantarCapitalConReduccionDeCuotaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "movimientoUId": 66,
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPrestamos.AdelantarCapitalConReduccionDeCuota",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
