import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-VisualizarResumenCabezal',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class VisualizarResumenCabezalComponent1751987195945 {
  pageTitle        = 'Visualizar Resumen Cabezal';
  description      = `Método para visualizar un resumen de información de un archivo CASH.`;
  pubName    = 'BTCASHManagement.VisualizarResumenCabezal';
  programa   = 'RBTPGC21I';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'archivoId', Tipo: 'Long', Comentarios: 'Identificador de archivo.' }];
  outputData = [{ Nombre: 'resumenCabezal', Tipo: '[sBTResumenCabezal](#sbtresumencabezal)', Comentarios: 'Resumen de información de un archivo.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.VisualizarResumenCabezal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>311020191114150000216393</bts:Token>
            <bts:Device>001</bts:Device>
         </bts:Btinreq>
         <bts:archivoId>105</bts:archivoId>
      </bts:BTCASHManagement.VisualizarResumenCabezal>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/odwsbt_BTCASHManagement_v1?VisualizarResumenCabezal\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: a0776b33-6711-6c56-044c-42d681d3742f\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"archivoId":105,
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.VisualizarResumenCabezalResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>311020191114150000216393</Token>
            <Device>001</Device>
         </Btinreq>
         <resumenCabezal>
            <archivoId>105</archivoId>
            <contratoId>6</contratoId>
            <servicio>50</servicio>
            <ordenId>303</ordenId>
            <cuentaDebito>2</cuentaDebito>
            <fechaPago>2019-05-30</fechaPago>
            <estado>E</estado>
            <cantidadLineas>3</cantidadLineas>
            <moneda>101</moneda>
            <importe>25.00</importe>
            <referencia/>
            <nombreArchivo>Proveedores201910</nombreArchivo>
            <mensajesError>
               <item>Pcsmjph1 - La cuenta no pudo ser determinada</item>
            </mensajesError>
         </resumenCabezal>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCASHManagement.VisualizarResumenCabezal</Servicio>
            <Fecha>2019-10-31</Fecha>
            <Hora>15:55:51</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>671</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCASHManagement.VisualizarResumenCabezalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"resumenCabezal": 
	{
		"archivoId": "105",
		"contratoId": "6",
		"servicio": "50",
		"ordenId": "303",
		"cuentaDebito": "2",
		"fechaPago": "2019-05-30",
		"estado": "E",
		"cantidadLineas": "3",
		"moneda": "101",
		"importe": "25.00",
		"referencia": "",
		"nombreArchivo": "Proveedores201910",
		"mensajesError": 
		{
			"item": "Pcsmjph1 - La cuenta no pudo ser determinada"
		}
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "671",
        "Estado": "OK",
        "Servicio": "BTCASHManagement.VisualizarResumenCabezal",
        "Fecha": "2019-10-31",
        "Hora": "15:55:51",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTResumenCabezal', fields: [{ Nombre: 'archivoId', Tipo: 'Long', Comentarios: 'Identificador de Archivo.' }, { Nombre: 'cantidadLineas', Tipo: 'Int', Comentarios: 'Cantidad de líneas del archivo.' }, { Nombre: 'contratoId', Tipo: 'Int', Comentarios: 'Identificador del contrato CASH.' }, { Nombre: 'cuentaDebito', Tipo: 'Long', Comentarios: 'Identificador único de la cuenta débito.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del archivo.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago o cobro.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe total.' }, { Nombre: 'mensajesError', Tipo: 'String', Comentarios: 'Lista de mensajes de la línea.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Moneda.' }, { Nombre: 'nombreArchivo', Tipo: 'String', Comentarios: 'Nombre del archivo.' }, { Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de orden CASH.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia del pago o cobro.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Servicio CASH.' }] }];
}
