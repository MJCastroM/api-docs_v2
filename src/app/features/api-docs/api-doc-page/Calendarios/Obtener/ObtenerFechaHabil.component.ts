import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerFechaHabil',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerFechaHabilComponent1750268694238 {
  pageTitle        = 'Obtener Fecha Hábil';
  description      = `Método para obtener si la fecha ingresada es una fecha hábil.`;
  pubName    = 'BTCalendarios.ObtenerFechaHabil';
  programa   = 'RBTPG293';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'calendarioId', Tipo: 'Short', Comentarios: 'Identificador de calendario (Si no se recibe, devuelve para el calendario de la sucursal central).' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha a consultar.' }];
  outputData = [{ Nombre: 'fechaHabil', Tipo: 'String', Comentarios: '¿Es hábil? (S/N)' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCalendarios.ObtenerFechaHabil>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>120320211555340000388219</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:calendarioId>1</bts:calendarioId>
         <bts:fecha>2020-11-14</bts:fecha>
      </bts:BTCalendarios.ObtenerFechaHabil>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCalendarios_v1?ObtenerFechaHabil\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "INSTALADOR",
	  "Token": "120320211555340000388219",
	  "Device": "AC"
	},
	"calendarioId": "1",
	"fecha": "2020-11-14"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCalendarios.ObtenerFechaHabilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>120320211555340000388219</Token>
            <Device>AC</Device>
         </Btinreq>
         <fechaHabil>N</fechaHabil>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCalendarios.ObtenerFechaHabil</Servicio>
            <Fecha>2021-03-12</Fecha>
            <Hora>15:58:02</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10660</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCalendarios.ObtenerFechaHabilResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{ 
 	"Btinreq": { 
	  "Device": "AC", 
	  "Usuario": "INSTALADOR", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "120320211555340000388219" 
	}, 
	"fechaHabil": "N", 
	"Btoutreq": { 
	  "Numero": "10660", 
	  "Estado": "OK", 
	  "Servicio": "BTCalendarios.ObtenerFechaHabil", 
	  "Requerimiento": "1", 
	  "Fecha": "2021-03-12", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "15:58:02" 
	} 
 }` }
  };

  structuredTypes = [];
}
