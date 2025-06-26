import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarIntegrante',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarIntegranteComponent1750945331683 {
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
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de persona.' }, { Codigo: '30003', Descripcion: 'No se recibió código de titularidad.' }, { Codigo: '30004', Descripcion: 'No se recuperó la cuenta para el identificador de cliente: [Número de identificador].' }, { Codigo: '30014', Descripcion: 'No existe registro con el identificador indicado.' }, { Codigo: '30023', Descripcion: 'No existe registro para el identificador único.' }, { Codigo: '30032', Descripcion: 'La persona tiene que haber sido ingresado con Alta Normal para poder integrar una cuenta.' }, { Codigo: '30033', Descripcion: 'Persona inhabilitada por Banco Central.' }, { Codigo: '30034', Descripcion: 'La persona seleccionada no tiene segmento asociado.' }, { Codigo: '30036', Descripcion: 'La persona se encuentra en la lista de inhabilitados: [Número de identificador].' }, { Codigo: '30037', Descripcion: 'La persona se encuentra en la lista de inhabilitados: [Número de identificador].' }, { Codigo: '30038', Descripcion: 'La persona seleccionada figura como fallecida.' }, { Codigo: '30039', Descripcion: 'Persona seleccionada no tiene domicilio legal.' }, { Codigo: '30040', Descripcion: 'Código de Titularidad Incorrecto.' }, { Codigo: '30041', Descripcion: 'La persona no tiene condición ante el impuesto.' }, { Codigo: '30042', Descripcion: 'La persona tiene alta inconclusa no puede asociarse.' }, { Codigo: '30043', Descripcion: 'La persona seleccionada no tiene actividad económica.' }, { Codigo: '30046', Descripcion: 'La cuenta [Número de identificador] tiene la misma integración que la cuenta actual.' }];

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
