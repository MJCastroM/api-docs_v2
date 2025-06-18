import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerGuiadeProceso',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerGuiadeProcesoComponent1750268696900 {
  pageTitle        = 'Obtener Guía de Proceso';
  description      = `Método para obtener los datos de una determinada guía de procesos.`;
  pubName    = 'BTParametrosBase.ObtenerGuiaDeProceso';
  programa   = 'RBTPG050';
  scope      = 'Institucional';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'empresaId', Tipo: 'Short', Comentarios: 'Código de empresa [Hidden].' }, { Nombre: 'codigo', Tipo: 'Long', Comentarios: 'Código de la Guía de Procesos.' }];
  outputData = [{ Nombre: 'sdtGuiaDeProceso', Tipo: '[sBTCorrelativoGuia](#sbtcorrelativoguia)', Comentarios: 'Listado de datos de la guía de proceso.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió código de guía.' }, { Codigo: '40001', Descripcion: 'No existe la guía.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTParametrosBase.ObtenerGuiaDeProceso>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>43f21ff61cCD285A89A23FBE</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:codigo>50</bts:codigo>
      </bts:BTParametrosBase.ObtenerGuiaDeProceso>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerGuiaDeProceso \
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
	"codigo": "50"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTParametrosBase.ObtenerGuiaDeProcesoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>43f21ff61cCD285A89A23FBE</Token>
         </Btinreq>
         <sdtGuiaDeProceso>
            <sBTCorrelativoGuia>
               <descripcion>Depósitos Efectivo Ctas Vista</descripcion>
               <importeEspecifico>5.00</importeEspecifico>
               <valorEspecifico>50</valorEspecifico>
               <correlativo>1</correlativo>
            </sBTCorrelativoGuia>
            <sBTCorrelativoGuia>
               <descripcion>Depósitos Cheques otros Bancos</descripcion>
               <importeEspecifico>20.00</importeEspecifico>
               <valorEspecifico>50</valorEspecifico>
               <correlativo>2</correlativo>
            </sBTCorrelativoGuia>
            <sBTCorrelativoGuia>
               <descripcion>Retiros Cuentas Vista</descripcion>
               <importeEspecifico>25.00</importeEspecifico>
               <valorEspecifico>50</valorEspecifico>
               <correlativo>3</correlativo>
            </sBTCorrelativoGuia>
         </sdtGuiaDeProceso>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>584</Numero>
            <Servicio>BTParametrosBase.ObtenerGuiaDeProceso</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-03-11</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>09:36:54</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTParametrosBase.ObtenerGuiaDeProcesoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"sdtGuiaDeProceso": {
	  "sBTCorrelativoGuia": [
		{
		  "descripcion": "Depósitos Efectivo Ctas Vista",
		  "importeEspecifico": "5.00",
		  "valorEspecifico": "50",
		  "correlativo": "1"
		},
		{
		  "descripcion": "Depósitos Cheques otros Bancos",
		  "importeEspecifico": "20.00",
		  "valorEspecifico": "50",
		  "correlativo": "2"
		},
		{
		  "descripcion": "Retiros Cuentas Vista",
		  "importeEspecifico": "25.00",
		  "valorEspecifico": "50",
		  "correlativo": "3"
		}
	  ]
	},
	"Btoutreq": {
	  "Numero": "2064",
	  "Estado": "OK",
	  "Servicio": "BTParametrosBase.ObtenerGuiaDeProceso",
	  "Requerimiento": "1",
	  "Fecha": "2020-03-10",
	  "Canal": "BTDIGITAL",
	  "Hora": "07:31:11"
	}
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTCorrelativoGuia', fields: [{ Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Correlativo de la guía.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del correlativo.' }, { Nombre: 'importeEspecifico', Tipo: 'Double', Comentarios: 'Importe específico del correlativo.' }, { Nombre: 'valorEspecifico', Tipo: 'Long', Comentarios: 'Valor específico del correlativo.' }] }];
}
