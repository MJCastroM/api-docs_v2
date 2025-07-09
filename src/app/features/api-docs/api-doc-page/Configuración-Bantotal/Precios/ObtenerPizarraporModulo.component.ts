import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPizarraporModulo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPizarraporModuloComponent1751987196645 {
  pageTitle        = 'Obtener Pizarra por Módulo';
  description      = `Método para obtener la pizarra genérica por módulo.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerPizarraPorModulo';
  programa   = 'RBTPG294';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'modulo', Tipo: 'Int', Comentarios: 'Módulo.' }];
  outputData = [{ Nombre: 'sdtPizarras', Tipo: '[sBTPizarra](#sbtpizarra)', Comentarios: 'Listado de pizarras.' }];
  errors     = [{ Código: '40001', Descripción: 'No se encontraron pizarras de tasas para el módulo indicado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerPizarraPorModulo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>480647346F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:modulo>20</bts:modulo>
      </bts:BTConfiguracionBantotal.ObtenerPizarraPorModulo>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerPizarraPorModulo\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'
  	"bts:Btinreq": {
	  "bts:Canal": "BTDIGITAL",
	  "bts:Requerimiento": "1",
	  "bts:Usuario": "BANTOTAL",
	  "bts:Token": "480647346F955E77534D3E02",
	  "bts:Device": "AC"
	},
	"modulo": 20,` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerPizarraPorModuloResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>480647346F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPizarras>
            <sBTPizarra>
               <codigo>99998</codigo>
               <descripcion>Pizarra Atrib. Exten</descripcion>
            </sBTPizarra>
         </sdtPizarras>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTConfiguracionBantotal.ObtenerPizarraPorModulo</Servicio>
            <Fecha>2021-03-18</Fecha>
            <Hora>10:49:45</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8033</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerPizarraPorModuloResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "480647346F955E77534D3E02",
	  "Device": "AC"
	},
	"sdtPizarras": {
	  "sBTPizarra": {
		"codigo": "99998",
		"descripcion": "Pizarra Atrib. Exten"
	  }
	},
	"Erroresnegocio": {},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTConfiguracionBantotal.ObtenerPizarraPorModulo",
	  "Fecha": "2021-03-18",
	  "Hora": "10:49:45",
	  "Requerimiento": "1",
	  "Numero": "8033",
	  "Estado": "OK"
	}
}` }
  };

  structuredTypes = [];
}
