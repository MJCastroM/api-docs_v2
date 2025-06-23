import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-DesbloquearSaldo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class DesbloquearSaldoComponent1750713393848 {
  pageTitle        = 'Desbloquear Saldo';
  description      = `Método para realizar la baja de un bloqueo de saldo.`;
  pubName    = 'BTCuentasVista.DesbloquearSaldo';
  programa   = 'RBTPG091';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'idBloqueo', Tipo: 'Long', Comentarios: 'Identificador de bloqueo.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador del Bloqueo.' }, { Codigo: '30002', Descripcion: 'No se encontró el ID del bloqueo.' }, { Codigo: '30003', Descripcion: 'El Bloqueo ya no está Activo, no se puede dar de baja.' }, { Codigo: '30004', Descripcion: 'No se recibió el identificador del Cliente.' }, { Codigo: '30005', Descripcion: 'No se encontró el ID del Cliente.' }, { Codigo: '30006', Descripcion: 'El Bloqueo no pertenece al Cliente.' }, { Codigo: '30100', Descripcion: 'Error en la contabilización.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.DesbloquearSaldo>
         <bts:Btinreq>
            <bts:Device>3</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>3</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b1848faff14A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:idBloqueo>21</bts:idBloqueo>
         <bts:clienteUId>61</bts:clienteUId>
      </bts:BTCuentasVista.DesbloquearSaldo>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?BloquearSaldo=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "idBloqueo": 22,
    "clienteUId": 61
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.DesbloquearSaldoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>3</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>3</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b1848faff14A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>211</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.DesbloquearSaldo</Servicio>
            <Requerimiento>3</Requerimiento>
            <Fecha>2018-05-08</Fecha>
            <Hora>15:40:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.DesbloquearSaldoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "213",
        "Estado": "OK",
        "Servicio": "BTCuentasVista.DesbloquearSaldo",
        "Requerimiento": "2",
        "Fecha": "2018-05-08",
        "Hora": "15:48:40",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
