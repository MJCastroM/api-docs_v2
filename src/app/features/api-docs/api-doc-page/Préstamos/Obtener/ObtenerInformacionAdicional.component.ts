import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerInformacionAdicional',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerInformacionAdicionalComponent1750268698134 {
  pageTitle        = 'Obtener Información Adicional';
  description      = `Método para obtener la información adicional de un préstamo.`;
  pubName    = 'BTPrestamos.ObtenerInformacionAdicional';
  programa   = 'RBTPG468';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }];
  outputData = [{ Nombre: 'sdtInformacionAdicional', Tipo: '[sBTDatoLista](#sbtdatolista)', Comentarios: 'Información Adicional de datos.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar identificador de operación.' }, { Codigo: '30013', Descripcion: 'No existe registro para el identificador único.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerInformacionAdicional>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>D6F899CBE6D99B71A5E627F1</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>61</bts:operacionUId>
      </bts:BTPrestamos.ObtenerInformacionAdicional>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerInformacionAdicional\' \
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
	"operacionUId": "101",
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>976EB9CBE6D99B71A5E627F1</Token>
         </Btinreq>
         <sdtInformacionAdicional>
            <sBTDatoLista>
		   <clave>Impuesto s/Intereses en Cuota</clave>
               <valor>S</valor>
            </sBTDatoLista>
            <sBTDatoLista>
		   <clave>Renovar a 30 dias</clave>
               <valor>N</valor>
            </sBTDatoLista>
         </sdtInformacionAdicional>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11261</Numero>
            <Servicio>BTPrestamos.ObtenerInformacionAdicional</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-16</Fecha>
            <Hora>15:48:08</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerInformacionAdicionalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "27c9bFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtInformacionAdicional": {
      "sBTDatoLista": [
      {
         "clave": "Impuesto s/Intereses en Cuota",
         "valor": "S"
      },
      {
          "clave": "Renovar a 30 dias",
          "valor": "N"
      }
      ]
   },
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPrestamos.ObtenerInformacionAdicional",
      "Requerimiento": "1",
      "Fecha": "2023-05-16",
      "Canal": "BTDIGITAL",
      "Hora": "16:01:52"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatoLista', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de información adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de información adicional.' }] }];
}
