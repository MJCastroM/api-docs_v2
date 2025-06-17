import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerCorrelativoGua',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCorrelativoGuiaComponent {
  pageTitle = 'Obtener Correlativo Guia';
  description = `Metodo para obtener los datos de un correlativo de una determinada guia de procesos.`;
  pubName    = 'BTParametrosBase.ObtenerCorrelativoGuia';
  programa   = 'RBTPG053';
  scope      = 'Institucional';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'empresaId', Tipo: 'Short', Comentarios: 'Codigo de empresa [Hidden].' }, { Nombre: 'codigo', Tipo: 'Long', Comentarios: 'Codigo de la Guia de Procesos.' }, { Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Correlativo.' }];
  outputData = [{ Nombre: 'sdtCorrelativo', Tipo: '[sBTCorrelativoGuia](#sbtcorrelativoguia)', Comentarios: 'Datos de la guia de proceso.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio codigo de guia.' }, { Codigo: '40001', Descripcion: 'No existe el correlativo.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTParametrosBase.ObtenerCorrelativoGuia>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>43f21ff61cCD285A89A23FBE</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:codigo>50</bts:codigo>
         <bts:correlativo>1</bts:correlativo>
      </bts:BTParametrosBase.ObtenerCorrelativoGuia>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerCorrelativoGuia \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"codigo": "50",
	"correlativo": "1"
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTParametrosBase.ObtenerCorrelativoGuiaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>43f21ff61cCD285A89A23FBE</Token>
         </Btinreq>
         <sdtCorrelativo>
            <descripcion>Depósitos Efectivo Ctas Vista</descripcion>
            <importeEspecifico>5.00</importeEspecifico>
            <valorEspecifico>50</valorEspecifico>
            <correlativo>1</correlativo>
         </sdtCorrelativo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>593</Numero>
            <Servicio>BTParametrosBase.ObtenerCorrelativoGuia</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-03-11</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:51:13</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTParametrosBase.ObtenerCorrelativoGuiaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"sdtCorrelativo": {
	  "descripcion": "Depósitos Efectivo Ctas Vista",
	  "importeEspecifico": "5.00",
	  "valorEspecifico": "50",
	  "correlativo": "1"
	},
	"Btoutreq": {
	  "Numero": "593",
	  "Servicio": "BTParametrosBase.ObtenerCorrelativoGuia",
	  "Estado": "OK",
	  "Fecha": "2020-03-11",
	  "Requerimiento": "1",
	  "Hora": "11:51:13",
	  "Canal": "BTDIGITAL"
	}
}'` }
  };

  structuredTypes = [{ typeName: 'sBTCorrelativoGuia', fields: [{ Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Correlativo de la guia.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion del correlativo.' }, { Nombre: 'importeEspecifico', Tipo: 'Double', Comentarios: 'Importe especifico del correlativo.' }, { Nombre: 'valorEspecifico', Tipo: 'Long', Comentarios: 'Valor especifico del correlativo.' }] }];
}
