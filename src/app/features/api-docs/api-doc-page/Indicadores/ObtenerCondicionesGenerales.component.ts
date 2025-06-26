import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerCondicionesGenerales',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCondicionesGeneralesComponent1750945333284 {
  pageTitle        = 'Obtener Condiciones Generales';
  description      = `Método para obtener las condiciones generales ingresadas en el sistema.`;
  pubName    = 'BTIndicadores.ObtenerCondicionesGenerales';
  programa   = 'RBTPG703';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtCondicionesGenerales', Tipo: '[sBTCondicionesGenerales](#sbtcondicionesgenerales)', Comentarios: 'Listado de las Condiciones Generales.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTIndicadores.ObtenerCondicionesGenerales>
         <bts:Btinreq>
           <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>?</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerCondicionesGenerales>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerCondicionesGenerales\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
      "Btinreq": {
         "Device": 1,
         "Canal": "BTDIGITAL",
         "Token": "959C2E0AEF210ABC0D8AA8F7",
         "Usuario": "INSTALADOR",
         "Requerimiento": "?"
      }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTIndicadores.ObtenerCondicionesGeneralesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>?</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>959C2E0AEF210ABC0D8AA8F7</Token>
         </Btinreq>
         <sdtCondicionesGenerales>
            <parametrosGeneralesWF>NO</parametrosGeneralesWF>
            <reglasNegocio>SI</reglasNegocio>
            <debug>SI</debug>
            <opcionPAE>NO</opcionPAE>
            <fechaCierreCanales>2022-10-12</fechaCierreCanales>
            <fechaCierre>2020-10-12</fechaCierre>
            <fechaAperturaCanales>2022-10-13</fechaAperturaCanales>
            <empresasIguales>NO</empresasIguales>
            <opcionWorkFlow>SI</opcionWorkFlow>
            <cantidadPAE>21</cantidadPAE>
            <opcion7x24>SI</opcion7x24>
            <fechaApertura>2020-10-13</fechaApertura>
            <cantidadReglas>294</cantidadReglas>
            <periodo7x24/>
         </sdtCondicionesGenerales>
         <Erroresnegocio/>
         <Btoutreq>
            <Numero>11990</Numero>
            <Estado>OK</Estado>
            <Servicio>BTIndicadores.ObtenerCondicionesGenerales</Servicio>
            <Requerimiento>?</Requerimiento>
            <Fecha>2023-05-22</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>14:55:00</Hora>
         </Btoutreq>
      </BTIndicadores.ObtenerCondicionesGeneralesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
   "Btinreq": {
      "Device": 1,
      "Usuario": "INSTALADOR",
      "Requerimiento": "?",
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7"
   },
   "sdtCondicionesGenerales": {
      "parametrosGeneralesWF": "NO",
      "reglasNegocio": "SI",
      "debug": "SI",
      "opcionPAE": "NO",
      "fechaCierreCanales": "2022-10-12",
      "fechaCierre": "2020-10-12",
      "fechaAperturaCanales": "2022-10-13",
      "empresasIguales": "NO",
      "opcionWorkFlow": "SI",
      "cantidadPAE": 21,
      "opcion7x24": "SI",
      "fechaApertura": "2020-10-13",
      "cantidadReglas": 294,
      "periodo7x24": ""
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": 11990,
      "Estado": "OK",
      "Servicio": "BTIndicadores.ObtenerCondicionesGenerales",
      "Requerimiento": "?",
      "Fecha": "2023-05-22",
      "Canal": "BTDIGITAL",
      "Hora": "14:55:00"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTCondicionesGenerales', fields: [{ Nombre: 'cantidadPAE', Tipo: 'Int', Comentarios: 'Cantidad PAE.' }, { Nombre: 'cantidadReglas', Tipo: 'Int', Comentarios: 'Cantidad reglas.' }, { Nombre: 'debug', Tipo: 'String', Comentarios: 'Opción debug.' }, { Nombre: 'empresasIguales', Tipo: 'String', Comentarios: 'Empresas iguales.' }, { Nombre: 'fechaApertura', Tipo: 'Date', Comentarios: 'Fecha de apertura.' }, { Nombre: 'fechaAperturaCanales', Tipo: 'Date', Comentarios: 'Fecha de apertura de canales.' }, { Nombre: 'fechaCierre', Tipo: 'Date', Comentarios: 'Fecha de cierre.' }, { Nombre: 'fechaCierreCanales', Tipo: 'Date', Comentarios: 'Fecha de cierre de canales.' }, { Nombre: 'opcion7x24', Tipo: 'String', Comentarios: 'Opción 7x24.' }, { Nombre: 'opcionPAE', Tipo: 'String', Comentarios: 'Opción PAE.' }, { Nombre: 'opcionWorkFlow', Tipo: 'String', Comentarios: 'Opción Workflow.' }, { Nombre: 'parametrosGeneralesWF', Tipo: 'String', Comentarios: 'Parámetros Generales de Workflow.' }, { Nombre: 'periodo7x24', Tipo: 'String', Comentarios: 'Periodo 7x24.' }, { Nombre: 'reglasNegocio', Tipo: 'String', Comentarios: 'Opción reglas de negocio.' }] }];
}
