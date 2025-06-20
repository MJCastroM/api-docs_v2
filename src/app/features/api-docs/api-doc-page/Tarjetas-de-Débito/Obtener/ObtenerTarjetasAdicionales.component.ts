import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTarjetasAdicionales',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTarjetasAdicionalesComponent1750446218995 {
  pageTitle        = 'Obtener Tarjetas Adicionales';
  description      = `Método para obtener las tarjetas adicionales que están asociadas a una tarjeta de débito.`;
  pubName    = 'BTTarjetasDeDebito.ObtenerTarjetasAdicionales';
  programa   = 'RBTPG018';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta.' }];
  outputData = [{ Nombre: 'sdtTarjetaDebitoAdicionales', Tipo: '[sBDTarjetasDebitoAdicionales](#sbdtarjetadebitoadicional)', Comentarios: 'Datos de la tarjeta de débito.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de tarjeta.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.ObtenerTarjetasAdicionales>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:tarjetaUId>3</bts:tarjetaUId>
      </bts:BTTarjetasDeDebito.ObtenerTarjetasAdicionales>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerTarjetasAdicionales=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 94079d62-3b2f-c624-4677-6e00bde48a50\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "tarjetaUId": 3
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.ObtenerTarjetasAdicionalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtTarjetaDebitoAdicionales>
            <adicionales></adicionales>
            <tarjetaUId>3</tarjetaUId>
         </sdtTarjetaDebitoAdicionales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>938</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTarjetasDeDebito.ObtenerTarjetasAdicionales</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:43:03</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerTarjetasAdicionalesResponse>
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
   "sdtTarjetaDebitoAdicionales": {
      "adicionales": {
         "sBDTarjetaDebitoAdicional": []
      },
      "tarjetaUId": "3"
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "939",
      "Estado": "OK",
      "Servicio": "BTTarjetasDeDebito.ObtenerTarjetasAdicionales",
      "Fecha": "2017-12-21",
      "Requerimiento": "",
      "Hora": "17:43:19",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTTarjetasDebitoAdicionales', fields: [{ Nombre: 'adicionales', Tipo: '[sBDTarjetaDebitoAdicional](#sbdtarjetadebitoadicional)', Comentarios: 'Listado de tarjetas de débito adicionales.' }, { Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta.' }, { Nombre: '### sBDTarjetaDebitoAdicional', Tipo: '', Comentarios: '' }] }, { typeName: 'sBDTarjetaDebitoAdicional', fields: [{ Nombre: 'estado', Tipo: 'String', Comentarios: 'Descripción de estado.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'nombreTarjeta', Tipo: 'String', Comentarios: 'Nombre de tarjeta.' }, { Nombre: 'numeroTarjeta', Tipo: 'String', Comentarios: 'Número de tarjeta.' }, { Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta.' }] }];
}
