import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CargarArchivoRecibidoComoDato',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CargarArchivoRecibidoComoDatoComponent1750446218137 {
  pageTitle        = 'Cargar Archivo Recibido Como Dato';
  description      = `Método para cargar un archivo recibido como dato.`;
  pubName    = 'BTCASHManagement.CargarArchivoDato';
  programa   = 'RBTPG360D';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'contrato', Tipo: 'Int', Comentarios: 'Identificador del contrato CASH del cliente.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Servicio de pago CASH.' }, { Nombre: 'archivo', Tipo: 'String', Comentarios: 'Nombre del archivo a subir.' }, { Nombre: 'archivoDato', Tipo: 'String', Comentarios: 'Archivo recibido como dato comprimido expresado en Base 64.' }];
  outputData = [{ Nombre: 'archivoId', Tipo: 'Long', Comentarios: 'Identificacion de archivo.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del archivo.' }, { Nombre: 'cantidadLineas', Tipo: 'Int', Comentarios: 'Cantidad de líneas del archivo.' }];
  errors     = [{ Codigo: '1030701', Descripcion: 'El Servicio no existe.' }, { Codigo: '1030702', Descripcion: 'El archivo esta vacio.' }, { Codigo: '1030703', Descripcion: 'No hay informacion en el archivo.' }, { Codigo: '1030710', Descripcion: 'Error interno al procesar.' }, { Codigo: '1030715', Descripcion: 'No se procesa, este archivo ya fue recibido y procesado.' }, { Codigo: '1030720', Descripcion: 'Error procesando el archivo. Ver detalle.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.CargarArchivoDato>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>311020191114150000216393</bts:Token>
            <bts:Device>001</bts:Device>
         </bts:Btinreq>
         <bts:contrato>6</bts:contrato>
         <bts:servicio>50</bts:servicio>
         <bts:archivo>Proveedores201910</bts:archivo>
         <bts:archivoDato>SDtQUk9WRUVEMTsxMDE7MjU7MzAvMDUvMjAxOTsyMDAwNTE4NDgxOzsyOwpEOzI7NDQ2Njg4NTUxMTsgREFOSUVMIFNBUlJ</bts:archivoDato>
      </bts:BTCASHManagement.CargarArchivoDato>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?CargarArchivoDato \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
        "Btinreq": {
          "Device": "AV",
          "Usuario": "MINSTALADOR",
          "Canal": "BTDIGITAL",
          "Token": "658fcb0b034A8B5C60A82434"
        },
		"contrato":6,
		"servicio":50,
		"archivo" : "Proveedores201910",
		"archivoDato" : "SDtQUk9WRUVEMTsxMDE7MjU7MzAvMDUvMjAxOTsyMDAwNTE4NDgxOzsyOwpEOzI7NDQ2Njg4NTUxMTsgREFOSUVMIFNBUlJ"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.CargarArchivoDatoResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>311020191114150000216393</Token>
            <Device>001</Device>
         </Btinreq>
         <archivoId>105</archivoId>
         <estado>N</estado>
         <cantidadLineas>3</cantidadLineas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCASHManagement.CargarArchivoDato</Servicio>
            <Fecha>2019-10-31</Fecha>
            <Hora>12:46:33</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>654</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCASHManagement.CargarArchivoDatoResponse>
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
	"archivoId":105,
	"estado" : "N",
	"cantidadLineas":3,
	"Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "13299",
        "Estado": "OK",
        "Servicio": "BTCASHManagement.CargarArchivoDato",
        "Fecha": "2019-04-24",
        "Requerimiento": "",
        "Hora": "10:35:16",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
