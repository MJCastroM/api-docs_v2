import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerTitulos',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTitulosComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Titulos';
  description = `Metodo para obtener los titulos de una cuenta cliente.`;
  pubName    = 'BTClientes.ObtenerTitulos';
  programa   = 'RBTPG495';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }];
  outputCols = ['sdtTitulos'];
  outputData = [{ Nombre: 'sdtTitulos', Tipo: '[sBTTitulo](#sbttitulo)', Comentarios: 'Listado de titulos del cliente.' }];
  errorCols  = ['30001', '30002', '30003'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio cliente.' }, { Codigo: '30002', Descripcion: 'No se logro verificar al cliente con el identificador ingresado.' }, { Codigo: '30003', Descripcion: 'No se pudieron obtener los titulos para el cliente ingresado.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerTitulos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>D019598AFAA2ECCC4BA9BF31</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>6</bts:clienteUId>
      </bts:BTClientes.ObtenerTitulos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerTitulos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 6,
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerTitulosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>be9fc8708b4A8B5C60A82434</Token>
         </Btinreq>
         <bts:sdtTitulos>
            <sBTTitulo>
               <bts:moneda>80</bts:moneda>
               <bts:simbolo>$</bts:simbolo>
               <bts:pais>URUGUAY</bts:pais>
               <bts:grupoId>36</bts:grupoId>
               <bts:codigo>1</bts:codigo>
               <bts:nombre>Titulo2</bts:nombre>
               <bts:precioActual>452</bts:precioActual>
               <bts:otrosConceptos></bts:otrosConceptos>
            </sBTTitulo>
         </bts:sdtTitulos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>967</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerTitulos</Servicio>
            <Fecha>2017-12-22</Fecha>
            <Requerimiento/>
            <Hora>12:26:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerTitulosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtTitulos": {
      "sBTTitulo": {
      "moneda": 80,
      "simbolo": "$",
      "pais": "URUGUAY",
      "grupoId": 36,
      "codigo": 1,
      "nombre": "Titulo2",
      "precioActual": 452,
      "otrosConceptos": ""
      }
   },
    "Erroresnegocio": {
      "BTErrorNegocio": []
    },
   "Btoutreq": {
      "Numero": "987",
      "Estado": "NEG_ERROR",
      "Servicio": "BTTarjetasDeDebito.CrearConCuentasAsociadas",
      "Requerimiento": "",
      "Fecha": "2017-12-22",
      "Hora": "16:15:27",
      "Canal": "BTDIGITAL"
   }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Codigo del titulo.' }, { Nombre: 'grupo', Tipo: 'String', Comentarios: 'Nombre del grupo.' }, { Nombre: 'grupoId', Tipo: 'Byte', Comentarios: 'Identificador del grupo.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del titulo.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Listado de otros conceptos.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del pais.' }, { Nombre: 'precioActual', Tipo: 'Double', Comentarios: 'Precio actual.' }, { Nombre: 'simbolo', Tipo: 'String', Comentarios: 'Simbolo de moneda.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
