import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-VisualizarListaResumenCabezal',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class VisualizarListaResumenCabezalComponent1750272790829 {
  pageTitle        = 'Visualizar Lista Resumen Cabezal';
  description      = `Método para visualizar una lista del resumen de información de archivos.`;
  pubName    = 'BTCASHManagement.VisualizarListaResumenCabezal';
  programa   = 'RBTPGC21';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador de la Cuenta Cliente.' }, { Nombre: 'contratoF', Tipo: 'Long', Comentarios: 'Lista de identificadores de contratos CASH del cliente.' }, { Nombre: 'servicioF', Tipo: 'Short', Comentarios: 'Servicio CASH.' }, { Nombre: 'estadoF', Tipo: 'String', Comentarios: 'Estado del archivo.' }, { Nombre: 'fechaDesdeF', Tipo: 'Date', Comentarios: 'Fecha de pago o cobro, desde.' }, { Nombre: 'fechaHastaF', Tipo: 'Date', Comentarios: 'Fecha de pago o cobro, hasta.' }];
  outputData = [{ Nombre: 'listaArchivos', Tipo: '[sBTResumenCabezal](#sbtresumencabezal)', Comentarios: 'Listado de cabezales solicitado.' }];
  errors     = [{ Codigo: '1030705', Descripcion: 'Cuenta cliente sin contrato vinculado.' }, { Codigo: '1030708', Descripcion: 'Estado de archivo desconocido.' }, { Codigo: '1030709', Descripcion: 'Se requiere identificacion de cuenta cliente.' }, { Codigo: '1030712', Descripcion: 'Se requiere cuenta para recuperar la informacion.' }, { Codigo: '1030714', Descripcion: 'El contrato consultado no corresponde al servicio recibido.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.VisualizarListaResumenCabezal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>311020191114150000216393</bts:Token>
            <bts:Device>001</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
         <bts:contratoF></bts:contratoF>
         <bts:servicioF></bts:servicioF>
         <bts:estadoF></bts:estadoF>
         <bts:fechaDesdeF></bts:fechaDesdeF>
         <bts:fechaHastaF></bts:fechaHastaF>
      </bts:BTCASHManagement.VisualizarListaResumenCabezal>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?VisualizarListaResumenCabezal \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"clienteUId":1,
	"contratoF": 
	{},
	"servicioF":0,
	"estadoF" : "",
	"fechaDesdeF" : "",
	"fechaHastaF" : ""
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.VisualizarListaResumenCabezalResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>311020191114150000216393</Token>
            <Device>001</Device>
         </Btinreq>
         <listaArchivos>
            <sBTResumenCabezal>
               <archivoId>56</archivoId>
               <contratoId>7</contratoId>
               <servicio>20</servicio>
               <ordenId>121</ordenId>
               <cuentaDebito>1</cuentaDebito>
               <fechaPago>2019-11-29</fechaPago>
               <estado>N</estado>
               <cantidadLineas>6</cantidadLineas>
               <moneda>101</moneda>
               <importe>2600.00</importe>
               <referencia/>
               <nombreArchivo>Servicio20_001.csv</nombreArchivo>
               <mensajesError>
                  <item>El monto total es distinto al importe del cabezal</item>
               </mensajesError>
            </sBTResumenCabezal>
            <sBTResumenCabezal>
               <archivoId>57</archivoId>
               <contratoId>7</contratoId>
               <servicio>20</servicio>
               <ordenId>122</ordenId>
               <cuentaDebito>1</cuentaDebito>
               <fechaPago>2019-11-29</fechaPago>
               <estado>N</estado>
               <cantidadLineas>4</cantidadLineas>
               <moneda>101</moneda>
               <importe>2600.00</importe>
               <referencia/>
               <nombreArchivo>Servicio20_001.csv</nombreArchivo>
               <mensajesError></mensajesError>
            </sBTResumenCabezal>
            <sBTResumenCabezal>
               <archivoId>58</archivoId>
               <contratoId>7</contratoId>
               <servicio>20</servicio>
               <ordenId>123</ordenId>
               <cuentaDebito>1</cuentaDebito>
               <fechaPago>2019-11-29</fechaPago>
               <estado>P</estado>
               <cantidadLineas>4</cantidadLineas>
               <moneda>101</moneda>
               <importe>2600.00</importe>
               <referencia/>
               <nombreArchivo>Servicio20_001.csv</nombreArchivo>
               <mensajesError></mensajesError>
            </sBTResumenCabezal>
         </listaArchivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCASHManagement.VisualizarListaResumenCabezal</Servicio>
            <Fecha>2019-10-31</Fecha>
            <Hora>15:47:53</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>670</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCASHManagement.VisualizarListaResumenCabezalResponse>
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

	"listaArchivos": {
		"sBTResumenCabezal": [     
			{
				"archivoId": "56",
				"contratoId": "7",
				"servicio": "20",
				"ordenId": "121",
				"cuentaDebito": "1",
				"fechaPago": "2019-11-29",
				"estado": "N",
				"cantidadLineas": "6",
				"moneda": "101",
				"importe": "2600.00",
				"referencia": [],
				"nombreArchivo": "Servicio20_001.csv",
				"mensajesError":  
				{
					"item": "El monto total es distinto al importe del cabezal"
				}
			},     
			{
				"archivoId": "57",
				"contratoId": "7",
				"servicio": "20",
				"ordenId": "122",
				"cuentaDebito": "1",
				"fechaPago": "2019-11-29",
				"estado": "N",
				"cantidadLineas": "4",
				"moneda": "101",
				"importe": "2600.00",
				"referencia": [],
				"nombreArchivo": "Servicio20_001.csv",
				"mensajesError": []
			},     
			{
				"archivoId": "58",
				"contratoId": "7",
				"servicio": "20",
				"ordenId": "123",
				"cuentaDebito": "1",
				"fechaPago": "2019-11-29",
				"estado": "P",
				"cantidadLineas": "4",
				"moneda": "101",
				"importe": "2600.00",
				"referencia": [],
				"nombreArchivo": "Servicio20_001.csv",
				"mensajesError": []
			}
		]
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 46,
        "Servicio": "BTCASHManagement.VisualizarListaResumenCabezal",
        "Estado": "OK",
        "Fecha": "2019-10-24",
        "Requerimiento": "",
        "Hora": "20:55:06",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTResumenCabezal', fields: [{ Nombre: 'archivoId', Tipo: 'Long', Comentarios: 'Identificador de archivo.' }, { Nombre: 'cantidadLineas', Tipo: 'Int', Comentarios: 'Cantidad de líneas del archivo.' }, { Nombre: 'contratoId', Tipo: 'Int', Comentarios: 'Identificador del contrato CASH.' }, { Nombre: 'cuentaDebito', Tipo: 'Long', Comentarios: 'Identificador único de la cuenta débito.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del archivo.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago o cobro.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe total.' }, { Nombre: 'mensajesError', Tipo: 'String', Comentarios: 'Lista de mensajes de la línea.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Moneda.' }, { Nombre: 'nombreArchivo', Tipo: 'String', Comentarios: 'Nombre del archivo.' }, { Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de orden CASH.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia del pago o cobro.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Servicio CASH.' }] }];
}
