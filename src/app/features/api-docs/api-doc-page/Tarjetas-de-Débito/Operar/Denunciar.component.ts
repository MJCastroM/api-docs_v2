import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Denunciar',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class DenunciarComponent1750272791888 {
  pageTitle        = 'Denunciar';
  description      = `Método para denunciar una tarjeta de débito y darla de baja.`;
  pubName    = 'BTTarjetasDeDebito.Denunciar';
  programa   = 'RBTPG070';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la tarjeta.' }, { Codigo: '30002', Descripcion: 'No se recuperó la tarjeta de débito para el identificador: [Número de identificador]' }, { Codigo: '40001', Descripcion: 'Error interno.' }, { Codigo: '40002', Descripcion: 'No existen tarjetas de débito para los datos ingresados.' }, { Codigo: '40003', Descripcion: 'Error en parámetros de input.' }, { Codigo: '40004', Descripcion: 'No existe la persona (con los datos del titular recibidos).' }, { Codigo: '40005', Descripcion: 'No existe la funcionalidad en TDD025.' }, { Codigo: '40006', Descripcion: 'Motivo de cancelación no valido.' }, { Codigo: '40007', Descripcion: 'Funcionalidad TDD025 inhabilitada.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.Denunciar>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:tarjetaUId>2000002072</bts:tarjetaUId>
         <bts:clienteUId>161</bts:clienteUId>
      </bts:BTTarjetasDeDebito.Denunciar>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?Denunciar\' \
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
   "tarjetaUId": 2000002072,
   "clienteUId": 161
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.DenunciarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>be9fc8708b4A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>985</Numero>
            <Estado>NEG_ERROR</Estado>
            <Servicio>BTTarjetasDeDebito.Denunciar</Servicio>
            <Requerimiento/>
            <Fecha>2017-12-22</Fecha>
            <Hora>14:51:47</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.DenunciarResponse>
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
      "Numero": "987",
      "Estado": "NEG_ERROR",
      "Servicio": "BTTarjetasDeDebito.Denunciar",
      "Requerimiento": "",
      "Fecha": "2017-12-22",
      "Hora": "16:15:27",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [];
}
