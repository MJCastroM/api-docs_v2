import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerConyuge',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerConyugeComponent1751987198680 {
  pageTitle        = 'Obtener Cónyuge';
  description      = `Método para obtener los datos del cónyuge de una persona física.`;
  pubName    = 'BTPersonas.ObtenerConyuge';
  programa   = 'RBTPG290';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador de persona.' }];
  outputData = [{ Nombre: 'apellidoMatrimonio', Tipo: 'String', Comentarios: 'Apellido de matrimonio' }, { Nombre: 'sdtDatosConyuge', Tipo: '[sBTDatosConyuge](#sbtdatosconyuge)', Comentarios: 'Datos del cónyuge.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de persona.' }, { Código: '30002', Descripción: 'El identificador no corresponde a una persona física.' }, { Código: '30013', Descripción: 'No existe registro para el identificador único.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerConyuge>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>170320211539200000477790</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>2</bts:personaUId>
      </bts:BTPersonas.ObtenerConyuge>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerConyuge\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
  	"bts:Btinreq": {
	  "bts:Canal": "BTDIGITAL",
	  "bts:Requerimiento": "1",
	  "bts:Usuario": "INSTALADOR",
	  "bts:Token": "170320211539200000477790",
	  "bts:Device": "AC"
	},
	"personaUId": 2,
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerConyugeResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>170320211539200000477790</Token>
            <Device>AC</Device>
         </Btinreq>
         <apellidoMatrimonio/>
         <sdtDatosConyuge>
            <personaUId>18</personaUId>
            <primerNombre>PEDRO</primerNombre>
            <segundoNombre/>
            <primerApellido>CRAMPET</primerApellido>
            <segundoApellido/>
         </sdtDatosConyuge>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ObtenerConyuge</Servicio>
            <Fecha>2021-03-17</Fecha>
            <Hora>15:44:26</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10689</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ObtenerConyugeResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "INSTALADOR",
	  "Token": "170320211539200000477790",
	  "Device": "AC"
	},
	"apellidoMatrimonio":"",
	"sdtDatosConyuge": {
	  "personaUId": "18",
	  "primerNombre": "PEDRO",
	  "segundoNombre": "",
	  "primerApellido": "CRAMPET",
	  "segundoApellido": ""
	},
	"Erroresnegocio": {
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTPersonas.ObtenerConyuge",
	  "Fecha": "2021-03-17",
	  "Hora": "15:44:26",
	  "Requerimiento": "1",
	  "Numero": "10689",
	  "Estado": "OK"
	}
}` }
  };

  structuredTypes = [{ typeName: 'sBTDatosConyuge', fields: [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador del cónyuge.' }, { Nombre: 'primerApellido', Tipo: 'String', Comentarios: 'Primer apellido del cónyuge.' }, { Nombre: 'primerNombre', Tipo: 'String', Comentarios: 'Primer nombre del cónyuge.' }, { Nombre: 'segundoApellido', Tipo: 'String', Comentarios: 'Segundo apellido del cónyuge.' }, { Nombre: 'segundoNombre', Tipo: 'String', Comentarios: 'Segundo nombre del cónyuge.' }] }];
}
