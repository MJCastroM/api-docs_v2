import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerFechaHabilAnterior',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerFechaHabilAnteriorComponent1750945331308 {
  pageTitle        = 'Obtener Fecha Hábil Anterior';
  description      = `Método para obtener la fecha hábil anterior a la fecha ingresada.`;
  pubName    = 'BTCalendario.ObtenerFechaHabilAnterior';
  programa   = 'RBTPG331';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'calendarioId', Tipo: 'Short', Comentarios: 'Identificador de calendario (Si no se recibe, devuelve para el calendario de la sucursal central).' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de consulta.' }, { Nombre: 'sentido', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'D\' para este método].' }];
  outputData = [{ Nombre: 'fechaHabil', Tipo: 'Date', Comentarios: 'Fecha hábil anterior.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar fecha a consultar.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCalendarios.ObtenerFechaHabilAnterior>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>172681201999865B3A2E76CF</bts:Token>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:calendarioId>1</bts:calendarioId>
         <bts:fecha>2021-03-27</bts:fecha>
      </bts:BTCalendarios.ObtenerFechaHabilAnterior>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCalendarios_v1?ObtenerFechaHabilAnterior\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
    "Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "1",
      "Usuario": "Instalador",
      "Token": "172681201999865B3A2E76CF",
      "Device": "1"
    },
	"calendarioId": "1",
    "fecha": "2021-03-27"
  },` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCalendarios.ObtenerFechaHabilAnteriorResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>Instalador</Usuario>
            <Token>172681201999865B3A2E76CF</Token>
            <Device>1</Device>
         </Btinreq>
         <fechaHabil>2021-03-26</fechaHabil>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCalendarios.ObtenerFechaHabilAnterior</Servicio>
            <Fecha>2021-03-24</Fecha>
            <Hora>09:14:10</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8094</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCalendarios.ObtenerFechaHabilAnteriorResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "Instalador", 
      "Token": "172681201999865B3A2E76CF", 
      "Device": "1" 
    }, 
    "fechaHabil": "2021-03-26", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTCalendarios.ObtenerFechaHabilAnterior", 
      "Fecha": "2021-03-24", 
      "Hora": "09:14:10", 
      "Requerimiento": "1", 
      "Numero": "8094", 
      "Estado": "OK" 
    } 
  }` }
  };

  structuredTypes = [];
}
