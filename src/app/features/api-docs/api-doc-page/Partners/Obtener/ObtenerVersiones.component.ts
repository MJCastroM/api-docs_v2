import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerVersiones',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerVersionesComponent1751987198140 {
  pageTitle        = 'Obtener Versiones';
  description      = `Método para retornar las versiones del modelo.`;
  pubName    = 'BTPartners.ObtenerVersiones';
  programa   = 'RBTPNV05';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPartner', Tipo: '[sBTPartnerInReq](#sbtpartnerinreq)', Comentarios: 'Datos del usuario.' }, { Nombre: 'modeloUId', Tipo: 'Long', Comentarios: 'Identificador del modelo.' }];
  outputData = [{ Nombre: 'sdtVersiones', Tipo: '[sBTVersion](#sbtversion)', Comentarios: 'Listado de versiones.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió Partner ni canal.' }, { Código: '30002', Descripción: 'El Partner no se encuentra habilitado.' }, { Código: '30003', Descripción: 'No existe Partner con ese identificador.' }, { Código: '30012', Descripción: 'No se recibió punto de venta.' }, { Código: '30013', Descripción: 'No se recibió vendedor.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPartners.ObtenerVersiones>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>DF1F942C6EC60E8B95BBEA69</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>2</bts:puntoVentaUId>
            <bts:vendedorUId>0</bts:vendedorUId>
            <bts:partnerUId>1</bts:partnerUId>
         </bts:sdtPartner>
         <bts:modeloUId>1</bts:modeloUId>
      </bts:BTPartners.ObtenerVersiones>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ObtenerVersiones\' \
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
    "sdtPartner": {
        "puntoVentaUId": 2,
        "vendedorUId": 3,
        "partnerUId": 1
    },
    "modeloUId": 1
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPartners.ObtenerVersionesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <sdtVersiones>
            <sBTVersion>
               <nombreVersion>3.0 TFSI (SQ5)</nombreVersion>
               <anio>2023</anio>
               <puertas>5</puertas>
               <combustibleId>1</combustibleId>
               <transmisionId>1</transmisionId>
               <versionUId>1</versionUId>
               <condicion/>
               <precioUS>50000.00</precioUS>
               <precioMN>2000000.00</precioMN>
               <condicionId>1</condicionId>
               <combustible>Nafta</combustible>
               <transmision>Automática</transmision>
               <modeloUId>1</modeloUId>
               <puertasId>4</puertasId>
               <marcaUId>1</marcaUId>
            </sBTVersion>
         </sdtVersiones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16874</Numero>
            <Servicio>BTPartners.ObtenerVersiones</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-27</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>17:48:46</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ObtenerVersionesResponse>
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
   "sdtVersiones": {
        "sBTVersion": {
        "nombreVersion": "3.0 TFSI (SQ5)",
        "anio": 2023,
        "puertas": 5,
        "combustibleId": 1,
        "transmisionId": 1,
        "versionUId": 1,
        "condicion": "",
        "precioUS": 50000,
        "precioMN": 2000000,
        "condicionId": 1,
        "combustible": "Nafta",
        "transmision": "Automática",
        "modeloUId": 1,
        "puertasId": 4,
        "marcaUId": 1
        }
    },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPartners.ObtenerVersiones",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "17:08:56"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPartnerInReq', fields: [{ Nombre: 'partnerUId', Tipo: 'Int', Comentarios: 'Identificador del Partner.' }, { Nombre: 'puntoVentaUId', Tipo: 'Int', Comentarios: 'Identificador del punto de venta.' }, { Nombre: 'vendedorUId', Tipo: 'Int', Comentarios: 'Identificador del vendedor.' }] }, { typeName: 'sBTVersion', fields: [{ Nombre: 'anio', Tipo: 'Short', Comentarios: 'Año.' }, { Nombre: 'combustibleId', Tipo: 'Short', Comentarios: 'Identificador del combustible.' }, { Nombre: 'condicion', Tipo: 'String', Comentarios: 'Condición.' }, { Nombre: 'condicionId', Tipo: 'Short', Comentarios: 'Identificador de la condición.' }, { Nombre: 'nombreVersion', Tipo: 'String', Comentarios: 'Nombre de versión.' }, { Nombre: 'precioMN', Tipo: 'Duble', Comentarios: 'Precio moneda nacional.' }, { Nombre: 'precioUS', Tipo: 'Double', Comentarios: 'Precio moneda USA.' }, { Nombre: 'puertas', Tipo: 'String', Comentarios: 'Puertas.' }, { Nombre: 'transmisionId', Tipo: 'Short', Comentarios: 'Identificador de la trasmisión.' }, { Nombre: 'versionUId', Tipo: 'Long', Comentarios: 'Identificador de la versión.' }] }];
}
