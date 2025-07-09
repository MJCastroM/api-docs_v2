import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPrecioaFecha',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPrecioaFechaComponent1751987199108 {
  pageTitle        = 'Obtener Precio a Fecha';
  description      = `Método para obtener la cotización en moneda nacional de una especie en la fecha recibida.`;
  pubName    = 'BTPrecios.ObtenerPrecioAFecha';
  programa   = 'RBTPG049';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'especie', Tipo: 'Long', Comentarios: 'Identificador de la especie.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha a consultar.' }];
  outputData = [{ Nombre: 'precio', Tipo: 'Double', Comentarios: 'Cotización.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió una especie.' }, { Código: '40001', Descripción: 'La especie no es un índice.' }, { Código: '40002', Descripción: 'La especie no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrecios.ObtenerPrecioAFecha>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>324915377F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:especie>500</bts:especie>
         <bts:fecha>2017-11-11</bts:fecha>
      </bts:BTPrecios.ObtenerPrecioAFecha>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerPrecioAFecha=\' \
  -H \'cache-control: no-cache,no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: d20f4b05-03a0-49c1-ba1f-d026339b8367,3f56f9d3-094e-474b-8730-6840899770d7\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "especie": "500",
   "fecha": "2017-11-11"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrecios.ObtenerPrecioAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>324915377F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <precio>17282.89</precio>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrecios.ObtenerPrecioAFecha</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Hora>15:34:16</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6957</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrecios.ObtenerPrecioAFechaResponse>
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
   "precio": 17282.89,
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": 56,
      "Servicio": "BTPrecios.ObtenerPrecioAFecha",
      "Estado": "OK",
      "Fecha": "2019-10-25",
      "Requerimiento": "1",
      "Hora": "13:51:52",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [];
}
