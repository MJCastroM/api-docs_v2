import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Activar',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActivarComponent1750945335637 {
  pageTitle        = 'Activar';
  description      = `Método para activar una tarjeta de débito física.`;
  pubName    = 'BTTarjetasDeDebito.Activar';
  programa   = 'RBTPG069';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la tarjeta.' }, { Codigo: '30002', Descripcion: 'No se recuperó la tarjeta de débito para el identificador: [Número de identificador].' }, { Codigo: '30003', Descripcion: 'No existe registro con el identificador indicado.' }, { Codigo: '30004', Descripcion: 'La tarjeta no pertenece al cliente.' }, { Codigo: '40001', Descripcion: 'Error interno.' }, { Codigo: '40002', Descripcion: 'Error en parámetros de input.' }, { Codigo: '40003', Descripcion: 'No existen tarjetas de débito para los datos ingresados [Número de Tarjeta].' }, { Codigo: '40004', Descripcion: 'No Existe la funcionalidad en TDD025.' }, { Codigo: '40005', Descripcion: 'Funcionalidad TDD025 inhabilitada.' }, { Codigo: '40006', Descripcion: 'Motivo de cancelación no válido.' }, { Codigo: '40007', Descripcion: 'Error al ejecutar la funcionalidad en PTDD0017.' }, { Codigo: '40008', Descripcion: 'El servicio se encuentra en ejecución.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.Activar>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>407fce50864A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:tarjetaUId>2000002072</bts:tarjetaUId>
         <bts:clienteUId>161</bts:clienteUId>
      </bts:BTTarjetasDeDebito.Activar>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?Activar=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 19f16614-b11e-9eaf-4034-1d7994c6019f\' \
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
      <BTTarjetasDeDebito.ActivarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>407fce50864A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>997</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTarjetasDeDebito.Activar</Servicio>
            <Fecha>2017-12-26</Fecha>
            <Requerimiento/>
            <Hora>11:30:24</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.ActivarResponse>
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
      "Numero": "974",
      "Estado": "NEG_ERROR",
      "Servicio": "BTTarjetasDeDebito.Activar",
      "Fecha": "2017-12-22",
      "Requerimiento": "",
      "Hora": "13:11:46",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [];
}
