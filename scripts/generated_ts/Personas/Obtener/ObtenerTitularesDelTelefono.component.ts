import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerTitularesDelTelefono',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTitularesdeTelefonoComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Titulares de Telefono';
  description = `Metodo para obtener los titulares de un telefono.`;
  pubName    = 'BTPersonas.ObtenerTitularesDelTelefono';
  programa   = 'RBTPG552';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['numeroTelefono'];
  inputData  = [{ Nombre: 'numeroTelefono', Tipo: 'String', Comentarios: 'Numero de telefono de la persona.' }];
  outputCols = ['sdtTitulares'];
  outputData = [{ Nombre: 'sdtTitulares', Tipo: '[sBTTitularTelefono](#sbttitulartelefono)', Comentarios: 'Listado de titulares del telefono.' }];
  errorCols  = ['30001', '40001'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el numero de telefono.' }, { Codigo: '40001', Descripcion: 'No existe numero de celular.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerTitularesDelTelefono>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9436BF7CB5B5BB404CC6E5A7</bts:Token>
         </bts:Btinreq>
         <bts:numeroTelefono>099099890</bts:numeroTelefono>
      </bts:BTPersonas.ObtenerTitularesDelTelefono>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerTitularesDelTelefono' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "numeroTelefono": 99099890
    }'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerTitularesDelTelefonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9436BF7CB5B5BB404CC6E5A7</Token>
         </Btinreq>
         <sdtTitulares>
            <sBTTitularTelefono>
               <datosAdicionales></datosAdicionales>
               <personaUId>227</personaUId>
               <nombre>RIVERA PERALTA FLORENCIA</nombre>
            </sBTTitularTelefono>
         </sdtTitulares>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20054</Numero>
            <Servicio>BTPersonas.ObtenerTitularesDelTelefono</Servicio>
            <Estado>OK</Estado>
            <Fecha>2024-04-23</Fecha>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:00:04</Hora>
         </Btoutreq>
      </BTPersonas.ObtenerTitularesDelTelefonoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "sdtTitulares": {
          "sBTTitularTelefono": {
            "datosAdicionales": "",
            "personaUId": 227,
            "nombre": "RIVERA PERALTA FLORENCIA"
        }
    },
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerTitularesDelTelefono",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'datosAdicionales', Tipo: '[sBTDatoAdicional](#sbtdatoadicional)', Comentarios: 'Listado de datos adicionales.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de la persona.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de la persona.' }, { Nombre: '### sBTDatoAdicional', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'detalle', Tipo: 'String', Comentarios: 'Detalle.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
