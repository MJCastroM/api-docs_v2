import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-Cancelar',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CancelarComponent1751987196824 {
  pageTitle        = 'Cancelar';
  description      = `Método para realizar la liquidación y cierre de una cuenta bolsillo.`;
  pubName    = 'BTCuentasBolsillo.Cancelar';
  programa   = 'RBTPG613';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'bolsilloUId', Tipo: 'Long', Comentarios: 'Identificador único del bolsillo.' }, { Nombre: 'operacionCobroUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación de cobro.' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único del movimiento.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador del cliente.' }, { Código: '30002', Descripción: 'La cuenta indicada no existe.' }, { Código: '30003', Descripción: 'No se recibió el identificador de la cuenta.' }, { Código: '30004', Descripción: 'La cuenta indicada no existe.' }, { Código: '30005', Descripción: 'La cuenta a liquidar y la cuenta de acreditación no pueden ser la misma.' }, { Código: '30006', Descripción: 'La cuenta de cobro indicada no existe.' }, { Código: '30007', Descripción: 'La cuenta indicada no pertenece al cliente.' }, { Código: '30008', Descripción: 'Las monedas de la cuenta a liquidar y la cuenta de acreditación deben ser la misma.' }, { Código: '30009', Descripción: 'No se pudo obtener el identificador para el movimiento realizado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasBolsillo.Cancelar>
         <bts:Btinreq>
           <bts:Device>1</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>3E7C0C38BBBB8ECFE4C31B86</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>7</bts:Requerimiento>
         </bts:Btinreq>
         <bts:cuentaUId>322</bts:cuentaUId>
         <bts:bolsilloUId>18830</bts:bolsilloUId>
         <bts:operacionCobroUId>1133</bts:operacionCobroUId>
      </bts:BTCuentasBolsillo.Cancelar>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasBolsillo?Cancelar\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cFC33CD93505A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
    "cuentaUId": 322,
    "bolsilloUId": 18830,
    "operacionCobroUId": 1133,
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasBolsillo.Cancelar xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>7</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>3E7C0C38BBBB8ECFE4C31B86</Token>
         </Btinreq>
         <movimientoUId>1843</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>228487</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasBolsillo.Cancelar</Servicio>
            <Requerimiento>7</Requerimiento>
            <Fecha>2023-11-01</Fecha>
            <Hora>10:03:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasBolsillo.Cancelar>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
    "Btinreq": {
        "Device": "1",
        "Usuario": "MINSTALADOR",
        "Token": "16c1cFC33CD93505A5382434",
        "Canal": "BTDIGITAL",
        "Requerimiento": "1"
    },
    "movimientoUId":1843,
    "Btoutreq": {
        "Numero": "111399",
        "Estado": "OK",
        "Servicio": "BTCuentasBolsillo.Cancelar",
        "Requerimiento": "1",
        "Fecha": "2023-05-10",
        "Canal": "BTDIGITAL",
        "Hora": "15:10:52"
    }
}\'` }
  };

  structuredTypes = [];
}
