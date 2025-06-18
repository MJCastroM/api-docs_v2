import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-VisualizarResultadoProcesamiento',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class VisualizarResultadoProcesamientoComponent1750258524729 {
  pageTitle        = 'Visualizar Resultado Procesamiento';
  description      = `Método para visualizar el resultado del procesamiento de un archivo.`;
  pubName          = 'Visualizar Resultado Procesamiento';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'archivoId', Tipo: 'Long', Comentarios: 'Identificador de archivo.' }];
  outputData = [{ Nombre: 'cantidadLineas', Tipo: 'Int', Comentarios: 'Cantidad de líneas del archivo.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Moneda del archivo.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe total del pago.' }, { Nombre: 'cantidadProcesadasOK', Tipo: 'Int', Comentarios: 'Cantidad de líneas procesadas.' }, { Nombre: 'importePagado', Tipo: 'Double', Comentarios: 'Importe total efectivamente pago.' }, { Nombre: 'cantidadLineasError', Tipo: 'Int', Comentarios: 'Cantidad de líneas en error.' }, { Nombre: 'cantidadPendientes', Tipo: 'Int', Comentarios: 'Cantidad de líneas pendientes de procesar.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del archivo.' }, { Nombre: 'situacionLineas', Tipo: '[sBTSituacionLinea](#sbtsituacionlinea)', Comentarios: 'Lista de las líneas con su estado.' }];
  errors     = [{ Codigo: '1030711', Descripcion: 'No se recuperó información para el identificador de archivo recibido.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
     <soapenv:Body>
      <bts:BTCASHManagement.VisualizarResultadoProcesamiento>
         <bts:Btinreq>
            <bts:Device>001</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:archivoId>95</bts:archivoId>
      </bts:BTCASHManagement.VisualizarResultadoProcesamiento>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?VisualizarResultadoProcesamiento=\' \
  -H \'Content-Type: application/json\' \
  -H \'Postman-Token: 1c730fd2-5de9-415a-855d-9bfdb517098a,bf88767f-74e5-4941-80fd-4f8cfb1f888a\' \
  -H \'cache-control: no-cache\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "archivoId": "95"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.VisualizarResultadoProcesamientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>001</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1e39d33c824A8B5C60A82434</Token>
         </Btinreq>
         <cantidadLineas>2</cantidadLineas>
         <moneda>0</moneda>
         <importe>25.0</importe>
         <cantidadProcesadasOK>0</cantidadProcesadasOK>
         <importePagado>0.0</importePagado>
         <cantidadLineasError>0</cantidadLineasError>
         <cantidadPendientes>2</cantidadPendientes>
         <estado>Z</estado>
         <situacionLineas>
            <sBTSituacionLineas>
               <mensajesError></mensajesError>
               <linea>DAYANARA PAEZ,3-34-1593,7,001020110000771009,3,13.00,32,REF*TXT**PAGO ultima DE QUINCENA \</linea>
               <estado>V</estado>
            </sBTSituacionLineas>
            <sBTSituacionLineas>
               <mensajesError></mensajesError>
               <linea>BETZAIRA LIMA,8-766-1860,7,025021110000479001,3,12.00,32,REF*TXT**PAGO DE QUINCENA \</linea>
               <estado>V</estado>
            </sBTSituacionLineas>
         </situacionLineas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>7187</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCASHManagement.VisualizarResultadoProcesamiento</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-04-24</Fecha>
            <Hora>17:27:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.VisualizarResultadoProcesamientoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "cantidadLineas": 2,
    "moneda": 0,
    "importe": 25,
    "cantidadProcesadasOK": 0,
    "importePagado": 0,
    "cantidadLineasError": 0,
    "cantidadPendientes": 2,
    "estado": "Z",
    "situacionLineas": {
        "sBTSituacionLineas": [
            {
                "mensajesError": {
                    "internal": []
                },
                "linea": "DAYANARA PAEZ,3-34-1593,7,001020110000771009,3,13.00,32,REF*TXT**PAGO ultima DE QUINCENA \\",
                "estado": "V"
            },
            {
                "mensajesError": {
                    "internal": []
                },
                "linea": "BETZAIRA LIMA,8-766-1860,7,025021110000479001,3,12.00,32,REF*TXT**PAGO DE QUINCENA \\",
                "estado": "V"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 7188,
        "Estado": "OK",
        "Servicio": "BTCASHManagement.VisualizarResultadoProcesamiento",
        "Requerimiento": "1",
        "Fecha": "2019-04-24",
        "Hora": "17:28:39",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTSituacionLinea', fields: [{ Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado de la línea.' }, { Nombre: 'linea', Tipo: 'String', Comentarios: 'Línea de texto.' }, { Nombre: 'mensajesError', Tipo: 'String', Comentarios: 'Lista de mensajes de la línea.' }] }];
}
