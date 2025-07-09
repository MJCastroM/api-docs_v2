import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarIntegrante',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarIntegranteComponent1751987196042 {
  pageTitle        = 'Agregar Integrante';
  description      = `Método para agregar un integrante a una cuenta cliente.`;
  pubName    = 'BTClientes.AgregarIntegrante';
  programa   = 'RBTPG186';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'codigoDeTitularidad', Tipo: 'Byte', Comentarios: 'Código de titularidad.' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador de persona.' }, { Código: '30003', Descripción: 'No se recibió código de titularidad.' }, { Código: '30004', Descripción: 'No se recuperó la cuenta para el identificador de cliente: [Número de identificador].' }, { Código: '30014', Descripción: 'No existe registro con el identificador indicado.' }, { Código: '30023', Descripción: 'No existe registro para el identificador único.' }, { Código: '30032', Descripción: 'La persona tiene que haber sido ingresado con Alta Normal para poder integrar una cuenta.' }, { Código: '30033', Descripción: 'Persona inhabilitada por Banco Central.' }, { Código: '30034', Descripción: 'La persona seleccionada no tiene segmento asociado.' }, { Código: '30036', Descripción: 'La persona se encuentra en la lista de inhabilitados: [Número de identificador].' }, { Código: '30037', Descripción: 'La persona se encuentra en la lista de inhabilitados: [Número de identificador].' }, { Código: '30038', Descripción: 'La persona seleccionada figura como fallecida.' }, { Código: '30039', Descripción: 'Persona seleccionada no tiene domicilio legal.' }, { Código: '30040', Descripción: 'Código de Titularidad Incorrecto.' }, { Código: '30041', Descripción: 'La persona no tiene condición ante el impuesto.' }, { Código: '30042', Descripción: 'La persona tiene alta inconclusa no puede asociarse.' }, { Código: '30043', Descripción: 'La persona seleccionada no tiene actividad económica.' }, { Código: '30046', Descripción: 'La cuenta [Número de identificador] tiene la misma integración que la cuenta actual.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.AgregarIntegrante>
         <bts:Btinreq>
            <bts:Device>10.12.10.159</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>d19fba5fa44A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>21</bts:clienteUId>
         <bts:personaUId>61</bts:personaUId>
         <bts:codigoDeTitularidad>1</bts:codigoDeTitularidad>
      </bts:BTClientes.AgregarIntegrante>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?AgregarIntegrante=\' \
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
    "clienteUId": "21",
    "personaUId": "41",
    "codigoDeTitularidad": "1"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.AgregarIntegranteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>d19fba5fa44A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2701</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.AgregarIntegrante</Servicio>
            <Fecha>2018-10-26</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:48:44</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.AgregarIntegranteResponse>
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
        "Numero": "2719",
        "Estado": "OK",
        "Servicio": "BTClientes.AgregarIntegrante",
        "Fecha": "2018-10-26",
        "Requerimiento": "1",
        "Hora": "15:31:49",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
