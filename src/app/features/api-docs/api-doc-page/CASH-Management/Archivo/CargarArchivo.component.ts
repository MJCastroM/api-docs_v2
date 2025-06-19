import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CargarArchivo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CargarArchivoComponent1750272790775 {
  pageTitle        = 'Cargar Archivo';
  description      = `Método para realizar la carga de un archivo.`;
  pubName    = 'BTCASHManagement.CargarArchivo';
  programa   = 'RBTPG360';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'contrato', Tipo: 'Int', Comentarios: 'Identificador del contrato CASH.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Servicio CASH.' }, { Nombre: 'archivo', Tipo: 'String', Comentarios: 'Nombre del archivo a subir.' }];
  outputData = [{ Nombre: 'archivoId', Tipo: 'Long', Comentarios: 'Identificador de archivo.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del archivo.' }, { Nombre: 'cantidadLineas', Tipo: 'Int', Comentarios: 'Cantidad de líneas del archivo.' }];
  errors     = [{ Codigo: '1030701', Descripcion: 'El servicio no existe.' }, { Codigo: '1030702', Descripcion: 'El archivo esta vacío.' }, { Codigo: '1030703', Descripcion: 'No hay informacion en el archivo.' }, { Codigo: '1030704', Descripcion: 'Id de contrato cliente desconocido.' }, { Codigo: '1030706', Descripcion: 'El contrato no esta activo.' }, { Codigo: '1030707', Descripcion: 'Error al abrir el archivo.' }, { Codigo: '1030710', Descripcion: 'Error interno al procesar.' }, { Codigo: '1030715', Descripcion: 'No se procesa, este archivo ya fue recibido y procesado.' }, { Codigo: '1030720', Descripcion: 'Error procesando el archivo. Ver detalle.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.CargarArchivo>
         <bts:Btinreq>
            <bts:Device>001</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:contrato>94</bts:contrato>
         <bts:servicio>33</bts:servicio>
         <bts:archivo>nomina201903.txt</bts:archivo>
      </bts:BTCASHManagement.CargarArchivo>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?CargarArchivo=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'Postman-Token: 71f989b4-091e-46eb-943e-2f53f669b9bb,685d27e3-9d5e-48c2-866a-030669223f5d\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "contrato": "94",
    "servicio": "33",
    "archivo": "ACH.txt"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.CargarArchivoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>001</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1e39d33c824A8B5C60A82434</Token>
         </Btinreq>
         <archivoId>179</archivoId>
         <estado>P</estado>
         <cantidadLineas>2</cantidadLineas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>7157</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCASHManagement.CargarArchivo</Servicio>
            <Fecha>2019-04-23</Fecha>
            <Requerimiento>?</Requerimiento>
            <Hora>17:21:58</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.CargarArchivoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
   "Btinreq":{
      "Device":"001",
      "Usuario":"MINSTALADOR",
      "Requerimiento":"1",
      "Canal":"BTDIGITAL",
      "Token":"1e39d33c824A8B5C60A82434"
   },
   "archivoId":181,
   "estado":"N",
   "cantidadLineas":2,
   "Erroresnegocio":{
      "BTErrorNegocio":[

      ]
   },
   "Btoutreq":{
      "Numero":7167,
      "Estado":"OK",
      "Servicio":"BTCASHManagement.CargarArchivo",
      "Requerimiento":"1",
      "Fecha":"2019-04-24",
      "Hora":"11:43:15",
      "Canal":"BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [];
}
