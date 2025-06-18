import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalledeOrdendeCuenta',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalledeOrdendeCuentaComponent1750268694369 {
  pageTitle        = 'Obtener Detalle de Orden de Cuenta';
  description      = `Método para obtener la información de las líneas del detalle de orden de cuenta.`;
  pubName    = 'BTCASHManagement.ObtenerDetalleOrdenCuenta';
  programa   = 'RBTPGC23F';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de orden.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [{ Nombre: 'cuentaDebito', Tipo: 'Long', Comentarios: 'Operación de débito.' }, { Nombre: 'cantidadLineas', Tipo: 'Int', Comentarios: 'Cantidad de líneas del archivo.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Moneda.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe total.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia del pago o cobro.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago o cobro.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del archivo.' }, { Nombre: 'erroresPago', Tipo: 'String', Comentarios: 'Lista de mensajes del cabezal de pago.' }, { Nombre: 'detallePagos', Tipo: '[sBTDetallePago](#sbtdetallepago)', Comentarios: 'Lista de información del archivo con su estado y mensaje.' }];
  errors     = [{ Codigo: '1030712', Descripcion: 'Se requiere cuenta para recuperar la información.' }, { Codigo: '1030713', Descripcion: 'El contrato consultado no corresponde a la cuenta recibida.' }, { Codigo: '1030770', Descripcion: 'No se recuperó información para la cuenta recibida.' }, { Codigo: '1039999', Descripcion: 'Error no clasificado' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.ObtenerDetalleOrdenCuenta>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>744307195e99865B3A2E76CF</bts:Token>
         </bts:Btinreq>
         <bts:ordenId>204</bts:ordenId>
         <bts:clienteUId>376</bts:clienteUId>
      </bts:BTCASHManagement.ObtenerDetalleOrdenCuenta>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?ObtenerDetalleOrdenCuenta=\' \
  -H \'Content-Type: application/json\' \
  -H \'Postman-Token: 5671946f-3030-43ca-9d7b-58d54d588d21,a454ff51-cf63-4795-a47b-05a16d861dcd\' \
  -H \'cache-control: no-cache\' \
  -d \'{
	"Btinreq": {
		"Device": "GZ",
		"Usuario": "Instalador",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "ordenId": "204",
    "clienteUId": "376"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.ObtenerDetalleOrdenCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>744307195e99865B3A2E76CF</Token>
         </Btinreq>
         <cuentaDebito>34</cuentaDebito>
         <cantidadLineas>3</cantidadLineas>
         <moneda>0</moneda>
         <importe>82</importe>
         <referencia/>
         <fechaPago>2023-09-04</fechaPago>
         <estado>P<estado/>
         <erroresPago/>
         <detallePagos/>
         <Erroresnegocio>
            <BTErrorNegocio>
               <Severidad/>
               <Descripcion/>
               <Codigo>0</Codigo>
            </BTErrorNegocio>
         </Erroresnegocio>
         <Btoutreq>
            <Numero>254019</Numero>
            <Estado>NEG_INFO</Estado>
            <Servicio>BTCASHManagement.ObtenerDetalleOrdenCuenta</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-11-27</Fecha>
            <Hora>14:57:02</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.ObtenerDetalleOrdenCuentaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "cuentaDebito": 34,
    "cantidadLineas": 3,
    "moneda": 0,
    "importe": 82,
    "referencia": "",
    "fechaPago": "2023-09-04",
    "estado": "P",
    "erroresPago": "",
    "detallePagos": "",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 7174,
        "Estado": "OK",
        "Servicio": "BTCASHManagement.ObtenerDetalleOrdenCuenta",
        "Requerimiento": "1",
        "Fecha": "2019-04-24",
        "Hora": "15:23:16",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDetallePago', fields: [{ Nombre: 'beneficiarioBanco', Tipo: 'String', Comentarios: 'Banco del Beneficiario.' }, { Nombre: 'beneficiarioCuenta', Tipo: 'String', Comentarios: 'Cuenta del Beneficiario.' }, { Nombre: 'beneficiarioId', Tipo: 'String', Comentarios: 'Identificador de Beneficiario.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado de la línea.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de Pago o Cobro.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'mensajesError', Tipo: 'String', Comentarios: 'Lista de mensajes de la línea.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del Beneficiario de Pago.' }] }];
}
