import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-Contratar',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarComponent1751987196847 {
  pageTitle        = 'Contratar';
  description      = `Método para contratar una nueva cuenta bolsillo.`;
  pubName    = 'BTCuentasBolsillo.Contratar';
  programa   = 'RBTPG609';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'cuentaPrincipalUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación de cuenta principal.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único del producto.' }, { Nombre: 'nombreSubCuenta', Tipo: 'String', Comentarios: 'Nombre de la sub cuenta.' }, { Nombre: 'metaAhorro', Tipo: 'Double', Comentarios: 'Monto de la meta de ahorro.' }];
  outputData = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador único de la Cuenta principal.' }, { Código: '30002', Descripción: 'No se recuperó la clave de operación para el Identificador: [Número de identificador].' }, { Código: '30003', Descripción: 'No se recibió el identificador único de producto.' }, { Código: '30004', Descripción: 'No existe registro para el identificador único de producto.' }, { Código: '30005', Descripción: 'El producto ingresado no corresponde a una cuenta bolsillo.' }, { Código: '30011', Descripción: 'Cuenta principal no es un producto admitido.' }, { Código: '30012', Descripción: 'Debe indicar nombre de subcuenta.' }, { Código: '30013', Descripción: 'Debe indicar meta de ahorro.' }, { Código: '30019', Descripción: 'Superó cantidad máxima de cuentas bolsillos.' }, { Código: '30020', Descripción: 'No existe cuenta de acreditación asociada.' }, { Código: '30021', Descripción: 'Cuenta principal no permite operar.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasBolsillo.Contratar>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>3E7C0C38BBBB8ECFE4C31B86</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>7</bts:Requerimiento>
         </bts:Btinreq>
         <bts:cuentaPrincipalUId>1137</bts:cuentaPrincipalUId>
         <bts:productoUId>511</bts:productoUId>
         <bts:nombreSubCuenta>Contratacion</bts:nombreSubCuenta>
         <bts:metaAhorro>10000</bts:metaAhorro>
      </bts:BTCuentasBolsillo.Contratar>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasBolsillo?Contratar\' \
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
    "cuentaPrincipalUId": 1137,
    "productoUId": 511,
    "nombreSubCuenta": "Contratacion",
    "metaAhorro": 10000
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasBolsillo.ContratarResponse xmlns=http://uy.com.dlya.bantotal/BTSOA/>
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>7</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>3E7C0C38BBBB8ECFE4C31B86</Token>
         </Btinreq>
         <operacionUId>19170</operacionUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>228493</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasBolsillo.Contratar</Servicio>
            <Requerimiento>7</Requerimiento>
            <Fecha>2023-11-01</Fecha>
            <Hora>10:23:59</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasBolsillo.ContratarResponse>
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
    "operacionUId": 19170,
    "Btoutreq": {
        "Numero": "111399",
        "Estado": "OK",
        "Servicio": "BTCuentasBolsillo.Contratar",
        "Requerimiento": "1",
        "Fecha": "2023-05-10",
        "Canal": "BTDIGITAL",
        "Hora": "15:10:52"
    }
}\'` }
  };

  structuredTypes = [];
}
