import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarTelefono',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarTelefonoComponent1750713394366 {
  pageTitle        = 'Agregar Teléfono';
  description      = `Método para agregar el teléfono de una persona.`;
  pubName    = 'BTPersonas.AgregarTelefono';
  programa   = 'RBTPG483';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'numeroTelefono', Tipo: 'String', Comentarios: 'Número de teléfono.' }, { Nombre: 'tipoTelefonoId', Tipo: 'Short', Comentarios: 'Identificador de tipo de teléfono.' }, { Nombre: 'domicilioId', Tipo: 'Byte', Comentarios: 'Identificador de tipo de domicilio.' }];
  outputData = [{ Nombre: 'telefonoId', Tipo: 'Byte', Comentarios: 'Identificador correlativo de teléfono.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de persona.' }, { Codigo: '30002', Descripcion: 'Debe ingresar al menos un teléfono.' }, { Codigo: '30005', Descripcion: 'No se recibió el tipo del teléfono.' }, { Codigo: '30006', Descripcion: 'No se recibió el código del domicilio.' }, { Codigo: '40002', Descripcion: 'No existe persona con los datos ingresados.' }, { Codigo: '40003', Descripcion: 'El número del teléfono es incorrecto (es muy corto).' }, { Codigo: '40004', Descripcion: 'El número del teléfono es incorrecto (es muy largo).' }, { Codigo: '40005', Descripcion: 'El número del teléfono no acepta caracteres.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.AgregarTelefono>
         <bts:Btinreq>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>A088577A8D1E89A20E6EF27D</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>61</bts:personaUId>
         <bts:numeroTelefono>099274742</bts:numeroTelefono>
         <bts:tipoTelefonoId>2</bts:tipoTelefonoId>
         <bts:domicilioId>1</bts:domicilioId>
      </bts:BTPersonas.AgregarTelefono>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?AgregarTelefono\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "GP",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"personaUId": "61",
   "numeroTelefono": "099274742",
   "tipoTelefonoId": "2",
   "domicilioId": "1",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.AgregarTelefonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>A088577A8D1E89A20E6EF27D</Token>
         </Btinreq>
         <telefonoId>1</telefonoId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10268</Numero>
            <Servicio>BTPersonas.AgregarTelefono</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-05</Fecha>
            <Hora>10:47:23</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.AgregarTelefonoResponse>
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
      "Servicio": "BTPersonas.AgregarTelefono",
      "Requerimiento": "1",
      "Fecha": "2021-10-15",
      "Canal": "BTDIGITAL",
      "Hora": "13:14:15"
   }
}\'` }
  };

  structuredTypes = [];
}
