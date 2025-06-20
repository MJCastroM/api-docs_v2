import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerModelos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerModelosComponent1750272791429 {
  pageTitle        = 'Obtener Modelos';
  description      = `Método para retornar los modelos de una marca.`;
  pubName    = 'BTPartners.ObtenerModelos';
  programa   = 'RBTPNV04';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPartner', Tipo: '[sBTPartnerInReq](#sbtpartnerinreq)', Comentarios: 'Datos del usuario.' }, { Nombre: 'marcaUId', Tipo: 'Long', Comentarios: 'Identificador de la marca.' }];
  outputData = [{ Nombre: 'sdtModelos', Tipo: '[sBTModelo](#sbtmodelo)', Comentarios: 'Listado de los modelos de una marca.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió Partner ni canal.' }, { Codigo: '30002', Descripcion: 'El Partner no se encuentra habilitado.' }, { Codigo: '30003', Descripcion: 'No existe Partner con ese identificador.' }, { Codigo: '30012', Descripcion: 'No se recibió punto de venta.' }, { Codigo: '30013', Descripcion: 'No se recibió vendedor.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPartners.ObtenerModelos>
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
         <bts:marcaUId>1</bts:marcaUId>
      </bts:BTPartners.ObtenerModelos>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ObtenerModelos\' \
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
          "vendedorUId": 0,
          "partnerUId": 1
   },
   "marcaUId": 1
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPartners.ObtenerModelosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <sdtModelos>
            <sBTModelo>
               <carroceria>Opción 3</carroceria>
               <modeloUId>1</modeloUId>
               <gpsObligatorio>S</gpsObligatorio>
               <tipoVehiculo>Opción 2</tipoVehiculo>
               <tipoVehiculoId>2</tipoVehiculoId>
               <carroceriaId>3</carroceriaId>
               <marcaUId>1</marcaUId>
               <nombreModelo>Q5</nombreModelo>
            </sBTModelo>
         </sdtModelos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16858</Numero>
            <Servicio>BTPartners.ObtenerModelos</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-27</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>12:11:18</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ObtenerModelosResponse>
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
   "sdtModelos": {
      "sBTModelo": {
      "carroceria": "Opción 3",
      "modeloUId": 1,
      "gpsObligatorio": "S",
      "tipoVehiculo": "Opción 2",
      "tipoVehiculoId": 2,
      "carroceriaId": 3,
      "marcaUId": 1,
      "nombreModelo": "Q5"
      }
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPartners.ObtenerModelos",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "17:08:56"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPartnerInReq', fields: [{ Nombre: 'partnerUId', Tipo: 'Int', Comentarios: 'Identificador del Partner.' }, { Nombre: 'puntoVentaUId', Tipo: 'Int', Comentarios: 'Identificador del punto de venta.' }, { Nombre: 'vendedorUId', Tipo: 'Int', Comentarios: 'Identificador del vendedor.' }] }, { typeName: 'sBTModelo', fields: [{ Nombre: 'carroceria', Tipo: 'String', Comentarios: 'Carrocería.' }, { Nombre: 'carroceriaId', Tipo: 'Short', Comentarios: 'Identificador de la carrocería.' }, { Nombre: 'gpsObligatorio', Tipo: 'String', Comentarios: '¿Es el GPS obligatorio? (S/N)' }, { Nombre: 'marcaUId', Tipo: 'Long', Comentarios: 'Identificador de la marca.' }, { Nombre: 'modeloUId', Tipo: 'Long', Comentarios: 'Identificador del modelo.' }, { Nombre: 'nombreModelo', Tipo: 'String', Comentarios: 'Nombre del modelo.' }, { Nombre: 'tipoVehiculo', Tipo: 'String', Comentarios: 'Tipo de vehículo.' }, { Nombre: 'tipoVehiculoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de vehículo.' }] }];
}
