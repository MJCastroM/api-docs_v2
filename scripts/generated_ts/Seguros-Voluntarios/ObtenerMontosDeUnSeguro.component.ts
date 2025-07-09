import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerMontosDeUnSeguro',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerMontosDeUnSeguroComponent1751987200090 {
  pageTitle        = 'Obtener Montos de Seguro';
  description      = `Método para obtener los montos de un seguro.`;
  pubName    = 'BTSegurosVoluntarios.ObtenerMontosDeUnSeguro';
  programa   = 'RBTPG544';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'seguroUId', Tipo: 'Long', Comentarios: 'Identificador único del seguro.' }];
  outputData = [{ Nombre: 'montoAdeudado', Tipo: 'Double', Comentarios: 'Monto adeudado.' }, { Nombre: 'montoMinimo', Tipo: 'Double', Comentarios: 'Monto mínimo.' }, { Nombre: 'montoCancelacion', Tipo: 'Double', Comentarios: 'Monto de cancelación.' }];
  errors     = [{ Código: '30002', Descripción: 'No se recibió el identificador de operación del seguro.' }, { Código: '30003', Descripción: 'No se recuperó la clave de operación para el identificador del seguro: [Número de Identificador].' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSegurosVoluntarios.ObtenerMontosDeUnSeguro>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>89B4F6D7BEFB0C7F653DB37A</bts:Token>
         </bts:Btinreq>
         <bts:seguroUId>107</bts:seguroUId>
      </bts:BTSegurosVoluntarios.ObtenerMontosDeUnSeguro>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
    \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSegurosVoluntarios?ObtenerMontosDeUnSeguro\' \
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
    "seguroUId": 107
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSegurosVoluntarios.ObtenerMontosDeUnSeguroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>89B4F6D7BEFB0C7F653DB37A</Token>
         </Btinreq>
         <montoAdeudado>10000.0</montoAdeudado>
         <montoMinimo>10000.0</montoMinimo>
         <montoCancelacion>10000.0</montoCancelacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20457</Numero>
            <Estado>OK</Estado>
            <Servicio>BTSegurosVoluntarios.ObtenerMontosDeUnSeguro</Servicio>
            <Fecha>2024-05-14</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>14:57:11</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTSegurosVoluntarios.ObtenerMontosDeUnSeguroResponse>
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
	"montoAdeudado": 10000,
    "montoMinimo": 10000,
    "montoCancelacion": 10000,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTSegurosVoluntarios.ObtenerMontosDeUnSeguro",
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
