import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPartners',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPartnersComponent1750268696800 {
  pageTitle        = 'Obtener Partners';
  description      = `Método para obtener los Partners.`;
  pubName    = 'BTPartner.ObtenerPartners';
  programa   = 'RBTPN003';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtPartners', Tipo: '[sBTPartner](#sbtpartner)', Comentarios: 'Listado de los Partners.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPartners.ObtenerPartners>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>DF1F942C6EC60E8B95BBEA69</bts:Token>
         </bts:Btinreq>
      </bts:BTPartners.ObtenerPartners>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ObtenerPartners\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "3JPL6DC33CD84655A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPartners.ObtenerPartnersResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <sdtPartners>
            <sBTPartner>
               <partnerUId>1</partnerUId>
               <nombre>Concesionario 1</nombre>
            </sBTPartner>
            <sBTPartner>
               <partnerUId>2</partnerUId>
               <nombre>Concesionario 2</nombre>
            </sBTPartner>
            <sBTPartner>
               <partnerUId>3</partnerUId>
               <nombre>Concesionario 3</nombre>
            </sBTPartner>
            <sBTPartner>
               <partnerUId>4</partnerUId>
               <nombre>Concesionario 4</nombre>
            </sBTPartner>
            <sBTPartner>
               <partnerUId>5</partnerUId>
               <nombre>No Vehicular 1</nombre>
            </sBTPartner>
         </sdtPartners>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16859</Numero>
            <Servicio>BTPartners.ObtenerPartners</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-27</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>12:30:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ObtenerPartnersResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtPartners": {
        "sBTPartner": [
        {
            "partnerUId": 1,
            "nombre": "Concesionario 1"
        },
        {
            "partnerUId": 2,
            "nombre": "Concesionario 2"
        },
        {
            "partnerUId": 3,
            "nombre": "Concesionario 3"
        },
        {
            "partnerUId": 4,
            "nombre": "Concesionario 4"
        },
        {
            "partnerUId": 5,
            "nombre": "No Vehicular 1"
        }
        ]
    },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPartners.ObtenerPartners",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "17:08:56"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPartner', fields: [{ Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del Partner.' }, { Nombre: 'partnerUId', Tipo: 'Int', Comentarios: 'Identificador del Partner.' }] }];
}
