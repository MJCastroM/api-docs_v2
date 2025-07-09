import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AdelantarCapitalConReduccionDePlazo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AdelantarCapitalConReduccionDePlazoComponent1751987199713 {
  pageTitle        = 'Adelantar Capital Con Reducción De Plazo';
  description      = `Método para realizar el pago de cuota de un préstamo con reducción de plazo.`;
  pubName    = 'BTPrestamos.AdelantarCapitalConReduccionDePlazo';
  programa   = 'RBTPG555';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'operacionUId_Cobro', Tipo: 'Long', Comentarios: 'Identificador único de la operación de cobro.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'S\' para este método].' }, { Nombre: 'modalidadIntereses', Tipo: 'String', Comentarios: 'Modalidad de intereses. Se pueden enviar los siguientes [valores](#valores).' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único del movimiento.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador único de operación de préstamo.' }, { Código: '30002', Descripción: 'No se recibió el identificador único de operación de cobro.' }, { Código: '30003', Descripción: 'Debe ingresar importe.' }, { Código: '30004', Descripción: 'No se recuperó la operación para el Identificador: [Número de Identificador].' }, { Código: '30005', Descripción: 'No se recuperó la operación para el Identificador: [Número de Identificador].' }, { Código: '30006', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30007', Descripción: 'No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador].' }, { Código: '30008', Descripción: 'El préstamo no pertenece al cliente.' }, { Código: '30009', Descripción: 'La operación de cobro no pertenece al cliente.' }, { Código: '30010', Descripción: 'No se ingresó la modalidad de intereses.' }, { Código: '30011', Descripción: 'El valor del campo modalidadIntereses tiene que ser CP o SP.' }, { Código: '30100', Descripción: 'Error en la contabilización.' }, { Código: '51002', Descripción: 'La operación no existe.' }, { Código: '51003', Descripción: 'La operación de cobro no existe.' }, { Código: '51012', Descripción: 'La operación esta cancelada.' }, { Código: '51013', Descripción: 'La operación de cobro esta cancelada.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.AdelantarCapitalConReduccionDePlazo>
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
      </bts:BTPrestamos.AdelantarCapitalConReduccionDePlazo>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?AdelantarCapitalConReduccionDePlazo\' \
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
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.AdelantarCapitalConReduccionDePlazoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9436BF7CB5B5BB404CC6E5A7</Token>
         </Btinreq>
         <movimientoUId>67</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20604</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.AdelantarCapitalConReduccionDePlazo</Servicio>
            <Fecha>2024-05-21</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>15:43:23</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.AdelantarCapitalConReduccionDePlazoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "movimientoUId": 67,
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPrestamos.AdelantarCapitalConReduccionDePlazo",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
