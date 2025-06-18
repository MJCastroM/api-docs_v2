import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerCorrelativoGuiaEspecial',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCorrelativoGuiaEspecialComponent1750258525265 {
  pageTitle        = 'Obtener Correlativo Guía Especial';
  description      = `Método para obtener los datos de un correlativo de una determinada guía especial de procesos.`;
  pubName          = 'Obtener Correlativo Guía Especial';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'empresaId', Tipo: 'Short', Comentarios: 'Código de empresa [Hidden].' }, { Nombre: 'codigo', Tipo: 'Long', Comentarios: 'Código de la Guía de Procesos.' }, { Nombre: 'correlativo1', Tipo: 'Short', Comentarios: 'Correlativo 1.' }, { Nombre: 'correlativo2', Tipo: 'Short', Comentarios: 'Correlativo 2.' }, { Nombre: 'correlativo3', Tipo: 'Short', Comentarios: 'Correlativo 3.' }];
  outputData = [{ Nombre: 'sdtCorrelativo', Tipo: '[sBTCorrelativoGuiaEspecial](#sbtcorrelativoguiaespecial)', Comentarios: 'Datos de la guía especial de proceso.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió código de guía.' }, { Codigo: '40001', Descripcion: 'No existe el registro.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTParametrosBase.ObtenerCorrelativoGuiaEspecial>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>43f21ff61cCD285A89A23FBE</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:codigo>73</bts:codigo>
         <bts:correlativo1>50</bts:correlativo1>
         <bts:correlativo2>539</bts:correlativo2>
         <bts:correlativo3></bts:correlativo3>
      </bts:BTParametrosBase.ObtenerCorrelativoGuiaEspecial>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerCorrelativoGuiaEspecial \
-H \'cache-control: no-cache\' \
-H \'content-type: application/json\' \
-d \'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"codigo": "73",
	"correlativo1": "50",
	"correlativo2": "539",
	"correlativo3": ""
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTParametrosBase.ObtenerCorrelativoGuiaEspecialResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>43f21ff61cCD285A89A23FBE</Token>
         </Btinreq>
         <sdtCorrelativo>
            <correlativo3>0</correlativo3>
            <correlativo2>539</correlativo2>
            <descripcion>Prima sin cuenta</descripcion>
            <correlativo1>50</correlativo1>
            <valorEspecifico3>0</valorEspecifico3>
            <valorEspecifico2>0</valorEspecifico2>
            <valorEspecifico1>0</valorEspecifico1>
            <importeEspecifico3>0.00</importeEspecifico3>
            <importeEspecifico2>0.00</importeEspecifico2>
            <importeEspecifico1>0.00</importeEspecifico1>
         </sdtCorrelativo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>596</Numero>
            <Servicio>BTParametrosBase.ObtenerCorrelativoGuiaEspecial</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-03-11</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:04:38</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTParametrosBase.ObtenerCorrelativoGuiaEspecialResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"sdtCorrelativo": {
	  "correlativo3": "0",
	  "correlativo2": "539",
	  "descripcion": "Prima sin cuenta",
	  "correlativo1": "50",
	  "valorEspecifico3": "0",
	  "valorEspecifico2": "0",
	  "valorEspecifico1": "0",
	  "importeEspecifico3": "0.00",
	  "importeEspecifico2": "0.00",
	  "importeEspecifico1": "0.00"
	},
	"Btoutreq": {
	  "Numero": "596",
	  "Servicio": "BTParametrosBase.ObtenerCorrelativoGuiaEspecial",
	  "Estado": "OK",
	  "Fecha": "2020-03-11",
	  "Requerimiento": "1",
	  "Hora": "12:04:38",
	  "Canal": "BTDIGITAL"
	}
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTCorrelativoGuiaEspecial', fields: [{ Nombre: 'correlativo1', Tipo: 'Short', Comentarios: 'Correlativo 1.' }, { Nombre: 'correlativo2', Tipo: 'Short', Comentarios: 'Correlativo 2.' }, { Nombre: 'correlativo3', Tipo: 'Short', Comentarios: 'Correlativo 3.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'importeEspecifico1', Tipo: 'Double', Comentarios: 'Importe específico 1.' }, { Nombre: 'importeEspecifico2', Tipo: 'Double', Comentarios: 'Importe específico 2.' }, { Nombre: 'importeEspecifico3', Tipo: 'Double', Comentarios: 'Importe específico 3.' }, { Nombre: 'valorEspecifico1', Tipo: 'Long', Comentarios: 'Valor específico 1.' }, { Nombre: 'valorEspecifico2', Tipo: 'Long', Comentarios: 'Valor específico 2.' }, { Nombre: 'valorEspecifico3', Tipo: 'Long', Comentarios: 'Valor específico 3.' }] }];
}
