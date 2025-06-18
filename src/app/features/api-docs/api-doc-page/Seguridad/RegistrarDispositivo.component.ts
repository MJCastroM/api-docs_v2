import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-RegistrarDispositivo',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class RegistrarDispositivoComponent1750258525615 {
  pageTitle        = 'Registrar Dispositivo';
  description      = `Método para registrar un dispositivo en el sistema.`;
  pubName          = 'Registrar Dispositivo';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'usuario', Tipo: 'String', Comentarios: 'Nombre identificador de usuario.' }, { Nombre: 'idDispositivo', Tipo: 'String', Comentarios: 'Identificador de dispositivo.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el usuario.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador para notificaciones.' }, { Codigo: '30003', Descripcion: 'Usuario no válido.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSeguridad.RegistrarDispositivo>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:usuario>BANTOTAL</bts:usuario>
         <bts:idDispositivo>MFYCE9TC1215TP56789</bts:idDispositivo>
      </bts:BTSeguridad.RegistrarDispositivo>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSeguridad?RegistrarDispositivo=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 08206ddb-aee6-e62e-eb5a-0eb81f95e87f\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "usuario": "BANTOTAL",
    "idDispositivo": "MFYCE9TC1215TP56789"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSeguridad.RegistrarDispositivoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>be9fc8708b4A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>971</Numero>
            <Estado>OK</Estado>
            <Servicio>BTSeguridad.RegistrarDispositivo</Servicio>
            <Fecha>2017-12-22</Fecha>
            <Requerimiento/>
            <Hora>12:39:38</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTSeguridad.RegistrarDispositivoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
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
        "Numero": "959",
        "Estado": "OK",
        "Servicio": "BTSeguridad.RegistrarDispositivo",
        "Fecha": "2017-12-22",
        "Requerimiento": "",
        "Hora": "10:58:58",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
