import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerSolicitudesCliente',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerSolicitudesClienteComponent1750268696560 {
  pageTitle        = 'Obtener Solicitudes Cliente';
  description      = `Método para obtener un listado de las solicitudes activas de préstamos de un cliente.`;
  pubName    = 'BTMicrofinanzas.ObtenerSolicitudesCliente';
  programa   = 'RBTPG416';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [{ Nombre: 'sdtDatosInstancias', Tipo: '[sBTDatosInstancia](#sbtdatosinstancia)', Comentarios: 'Listado de solicitudes.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.ObtenerSolicitudesCliente>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>419385365CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>3</bts:clienteUId>
      </bts:BTMicrofinanzas.ObtenerSolicitudesCliente>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerSolicitudesCliente \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": "3"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.ObtenerSolicitudesClienteResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>419385365CD285A89A23FBEE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtDatosInstancias>
            <sBTDatosInstancia>
               <operacionUId>8</operacionUId>
               <instancia>10844</instancia>
               <capital>8000.00</capital>
               <asesor>ETRIESGO</asesor>
               <tarea>Solicitud</tarea>
            </sBTDatosInstancia>
            <sBTDatosInstancia>
               <operacionUId>7</operacionUId>
               <instancia>10856</instancia>
               <capital>5000.00</capital>
               <asesor>INSTALADOR</asesor>
               <tarea>Solicitud</tarea>
            </sBTDatosInstancia>
         </sdtDatosInstancias>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ObtenerSolicitudesCliente</Servicio>
            <Fecha>2019-09-24</Fecha>
            <Hora>14:27:00</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>245</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerSolicitudesClienteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtDatosInstancias": {
      "sBTDatosInstancia": [
      {
         "operacionUId": "8",
         "instancia": "10844",
         "capital": "8000.00",
         "asesor": "ETRIESGO",
         "tarea": "Solicitud"
      },
      {
         "operacionUId": "7",
         "instancia": "10856",
         "capital": "5000.00",
         "asesor": "INSTALADOR",
         "tarea": "Solicitud"
      }
      ]
   },
   "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTMicrofinanzas.ObtenerSolicitudesCliente",
      "Fecha": "2019-09-24",
      "Hora": "14:27:00",
      "Requerimiento": "95",
      "Numero": "245",
      "Estado": "OK"
   }
}` }
  };

  structuredTypes = [{ typeName: 'sBTDatosInstancia', fields: [{ Nombre: 'asesor', Tipo: 'String', Comentarios: 'Usuario asesor del crédito.' }, { Nombre: 'capital', Tipo: 'Decimal', Comentarios: 'Importe capital del crédito.' }, { Nombre: 'instancia', Tipo: 'Long', Comentarios: 'Número de instancia WorkFlow.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'tarea', Tipo: 'String', Comentarios: 'Tarea en la que se encuentra la instancia.' }] }];
}
