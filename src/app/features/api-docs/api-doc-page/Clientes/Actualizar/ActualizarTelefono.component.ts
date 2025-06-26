import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ActualizarTelefono',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarTelefonoComponent1750945331658 {
  pageTitle        = 'Actualizar Teléfono';
  description      = `Método para actualizar el teléfono de un cliente.`;
  pubName    = 'BTClientes.ActualizarTelefono';
  programa   = 'RBTPG216';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'domicilioId', Tipo: 'Byte', Comentarios: 'Identificador de tipo de domicilio.' }, { Nombre: 'numeroTelefono', Tipo: 'String', Comentarios: 'Número de teléfono.' }, { Nombre: 'tipoTelefonoId', Tipo: 'Short', Comentarios: 'Identificador de tipo de teléfono.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo "UPD" para este método].' }, { Nombre: 'telefonoId', Tipo: 'Byte', Comentarios: 'Identificador correlativo de teléfono.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de Domicilio.' }, { Codigo: '30003', Descripcion: 'No se recibió Teléfono.' }, { Codigo: '30004', Descripcion: 'No se recibió Tipo de Teléfono.' }, { Codigo: '40002', Descripcion: 'No existe persona con los datos ingresados.' }, { Codigo: '40003', Descripcion: 'El número del teléfono es incorrecto (es muy corto).' }, { Codigo: '40004', Descripcion: 'El número del teléfono es incorrecto (es muy largo).' }, { Codigo: '40005', Descripcion: 'El número del teléfono no acepta caracteres.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ActualizarTelefono>
         <bts:Btinreq>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>A088577A8D1E89A20E6EF27D</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:domicilioId>1</bts:domicilioId>
         <bts:numeroTelefono>099274742</bts:numeroTelefono>
         <bts:tipoTelefonoId>2</bts:tipoTelefonoId>
         <bts:telefonoId>1</bts:telefonoId>
      </bts:BTClientes.ActualizarTelefono>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ActualizarTelefono\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "AV",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"clienteUId": "61",
    "domicilioId": "1",
    "numeroTelefono": "099274742",
    "tipoTelefonoId": "2",  
    "telefonoId": "1"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ActualizarTelefonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>A088577A8D1E89A20E6EF27D</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10294</Numero>
            <Servicio>BTClientes.ActualizarTelefono</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-05</Fecha>
            <Hora>11:40:54</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ActualizarTelefonoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{ 
   "Btinreq": { 
      "Device": "AV", 
      "Usuario": "MINSTALADOR", 
      "Token": "fa2c02c95a4A8B5C60A82434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
   "Btoutreq": { 
      "Numero": "111397", 
      "Estado": "OK", 
      "Servicio": "BTClientes.ActualizarTelefono", 
      "Requerimiento": "1", 
      "Fecha": "2023-05-05", 
      "Canal": "BTDIGITAL", 
      "Hora": "11:45:24" 
   }
}\'` }
  };

  structuredTypes = [];
}
