import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-VisualizarSituacionArchivos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class VisualizarSituacionArchivosComponent1750713393283 {
  pageTitle        = 'Visualizar Situación Archivos';
  description      = `Método para visualizar la situación de los archivos subidos por el cliente.`;
  pubName    = 'BTCASHManagement.VisualizarSituacionArchivos';
  programa   = 'RBTPGC10';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'contratoF', Tipo: 'Int', Comentarios: 'Lista de identificadores de contratos CASH del cliente.' }, { Nombre: 'servicioF', Tipo: 'Short', Comentarios: 'Servicio CASH.' }, { Nombre: 'estadoF', Tipo: 'String', Comentarios: 'Estado del archivo.' }, { Nombre: 'fechaDesdeF', Tipo: 'Date', Comentarios: 'Fecha de pago o cobro, desde.' }, { Nombre: 'fechaHastaF', Tipo: 'Date', Comentarios: 'Fecha de pago o cobro, hasta.' }];
  outputData = [{ Nombre: 'listaArchivos', Tipo: '[sBTSituacionArchivo](#sbtsituacionarchivo)', Comentarios: 'Listado de archivos solicitado.' }];
  errors     = [{ Codigo: '1030705', Descripcion: 'Cuenta cliente sin contrato vinculado.' }, { Codigo: '1030708', Descripcion: 'Estado de archivo desconocido.' }, { Codigo: '1030709', Descripcion: 'Se requiere identificacion de cuenta cliente.' }, { Codigo: '1030712', Descripcion: 'Se requiere cuenta para recuperar la informacion.' }, { Codigo: '1030714', Descripcion: 'El contrato consultado no corresponde al servicio recibido.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.VisualizarSituacionArchivos>
          <bts:Btinreq>
            <bts:Device>001</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
         <bts:contratoF></bts:contratoF>
         <bts:servicioF></bts:servicioF>
         <bts:estadoF></bts:estadoF>
         <bts:fechaDesdeF>2018-01-01</bts:fechaDesdeF>
         <bts:fechaHastaF></bts:fechaHastaF>
      </bts:BTCASHManagement.VisualizarSituacionArchivos>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?VisualizarSituacionArchivos=\' \
  -H \'Content-Type: application/json\' \
  -H \'Postman-Token: 8ae78366-8aaf-484e-9e0c-d6438a3b88c5,993b6845-9245-4afc-9048-660c34300f13\' \
  -H \'cache-control: no-cache\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": "1",
    "contratoF": {"item":[]},
    "servicioF": "",
    "estadoF": "",
    "fechaDesdeF": "2018-01-01",
    "fechaHastaF": ""
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.VisualizarSituacionArchivosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>001</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1e39d33c824A8B5C60A82434</Token>
         </Btinreq>
         <listaArchivos>
            <sBTSituacionArchivo>
               <moneda>0</moneda>
               <nomArchivo>Archivo1</nomArchivo>
               <estado>N</estado>
               <referencia>Ref123</referencia>
               <contratoId>1</contratoId>
               <cantidadLineas>2</cantidadLineas>
               <servicio>1</servicio>
               <importe>2.40</importe>
               <fechaPago>2018-01-03</fechaPago>
               <archivoId>107</archivoId>
            </sBTSituacionArchivo>
            <sBTSituacionArchivo>
               <moneda>0</moneda>
               <nomArchivo>Archivo1</nomArchivo>
               <estado>N</estado>
               <referencia>Ref123</referencia>
               <contratoId>1</contratoId>
               <cantidadLineas>2</cantidadLineas>
               <servicio>1</servicio>
               <importe>2.40</importe>
               <fechaPago>2018-01-03</fechaPago>
               <archivoId>108</archivoId>
            </sBTSituacionArchivo>
            <sBTSituacionArchivo>
               <moneda>0</moneda>
               <nomArchivo>Archivo1</nomArchivo>
               <estado>N</estado>
               <referencia>Ref123</referencia>
               <contratoId>1</contratoId>
               <cantidadLineas>2</cantidadLineas>
               <servicio>1</servicio>
               <importe>2.40</importe>
               <fechaPago>2018-01-03</fechaPago>
               <archivoId>109</archivoId>
            </sBTSituacionArchivo>
            <sBTSituacionArchivo>
               <moneda>0</moneda>
               <nomArchivo>Archivo1</nomArchivo>
               <estado>N</estado>
               <referencia>Ref123</referencia>
               <contratoId>1</contratoId>
               <cantidadLineas>2</cantidadLineas>
               <servicio>1</servicio>
               <importe>2.40</importe>
               <fechaPago>2018-01-03</fechaPago>
               <archivoId>110</archivoId>
            </sBTSituacionArchivo>
         </listaArchivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>7177</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCASHManagement.VisualizarSituacionArchivos</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-04-24</Fecha>
            <Hora>15:48:30</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.VisualizarSituacionArchivosResponse>
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
        "sBTSituacionArchivo": [
            {
                "moneda": 0,
                "nomArchivo": "Archivo1",
                "estado": "N",
                "referencia": "Ref123",
                "contratoId": 1,
                "cantidadLineas": 2,
                "servicio": 1,
                "importe": 2.4,
                "fechaPago": "2018-01-03",
                "archivoId": 107
            },
            {
                "moneda": 0,
                "nomArchivo": "Archivo1",
                "estado": "N",
                "referencia": "Ref123",
                "contratoId": 1,
                "cantidadLineas": 2,
                "servicio": 1,
                "importe": 2.4,
                "fechaPago": "2018-01-03",
                "archivoId": 108
            },
            {
                "moneda": 0,
                "nomArchivo": "Archivo1",
                "estado": "N",
                "referencia": "Ref123",
                "contratoId": 1,
                "cantidadLineas": 2,
                "servicio": 1,
                "importe": 2.4,
                "fechaPago": "2018-01-03",
                "archivoId": 109
            },
            {
                "moneda": 0,
                "nomArchivo": "Archivo1",
                "estado": "N",
                "referencia": "Ref123",
                "contratoId": 1,
                "cantidadLineas": 2,
                "servicio": 1,
                "importe": 2.4,
                "fechaPago": "2018-01-03",
                "archivoId": 110
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 7185,
        "Estado": "OK",
        "Servicio": "BTCASHManagement.VisualizarSituacionArchivos",
        "Requerimiento": "1",
        "Fecha": "2019-04-24",
        "Hora": "17:02:11",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTSituacionArchivo', fields: [{ Nombre: 'archivoId', Tipo: 'Long', Comentarios: 'Identificador de archivo.' }, { Nombre: 'cantidadLineas', Tipo: 'Int', Comentarios: 'Cantidad de líneas del archivo.' }, { Nombre: 'contratoId', Tipo: 'Long', Comentarios: 'Identificador del contrato CASH.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del archivo.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago o cobro.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe total.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Moneda.' }, { Nombre: 'nomArchivo', Tipo: 'String', Comentarios: 'Nombre del archivo.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia del pago o cobro.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Servicio CASH.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
