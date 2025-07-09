import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ActualizarInformacionAdicional',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarInformacionAdicionalComponent1751987196002 {
  pageTitle        = 'Actualizar Información Adicional';
  description      = `Método para actualizar la información adicional de una cuenta cliente.`;
  pubName    = 'BTClientes.ActualizarInformacionAdicional';
  programa   = 'RBTPG516';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'sdtInformacionAdicional', Tipo: '[sBTDatoLista](#sbtdatolista)', Comentarios: 'Listado de datos adicionales.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'UPD\' para este método].' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '40002', Descripción: 'El atributo [Identificador de información adicional] no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ActualizarInformacionAdicional>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>976EB9CBE6D99B71A5E627F1</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:sdtInformacionAdicional>
            <bts:sBTDatoLista>
               <bts:clave>Código Pais</bts:clave>
               <bts:valor>695</bts:valor>
            </bts:sBTDatoLista>
         </bts:sdtInformacionAdicional>
      </bts:BTClientes.ActualizarInformacionAdicional>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ActualizarInformacionAdicional\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cFC33CD93505A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"clienteUId": "61",
	"sdtInformacionAdicional": {
      "sBTDatoLista": {
         "clave": "Código Pais",
         "valor": "695"
      }
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ActualizarInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>976EB9CBE6D99B71A5E627F1</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10782</Numero>
            <Servicio>BTClientes.ActualizarInformacionAdicional</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-10</Fecha>
            <Hora>14:59:19</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ActualizarInformacionAdicionalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },

   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTClientes.ActualizarInformacionAdicional",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "15:10:52"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatoLista', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de información adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de información adicional.' }] }];
}
