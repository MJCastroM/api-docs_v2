import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerMonedaNacional',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerMonedaNacionalComponent1750258524944 {
  pageTitle        = 'Obtener Moneda Nacional';
  description      = `Método para obtener los datos de la moneda nacional.`;
  pubName          = 'Obtener Moneda Nacional';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tipoMoneda', Tipo: 'String', Comentarios: '[Hidden: Valor fijo "MN" para este método].' }];
  outputData = [{ Nombre: 'sdtMoneda', Tipo: '[sBTMoneda](#sbtmoneda)', Comentarios: 'Datos de la moneda.' }];
  errors     = [{ Codigo: '40001', Descripcion: 'No existen Monedas ingresadas en el sistema.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerMonedaNacional>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>669747179CD285A89A23FBEE</bts:Token>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerMonedaNacional>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerMonedaNacional=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: e023a871-d995-ad63-255b-99f4d8773111\' \
  -d \'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "669747179CD285A89A23FBEE"
	}
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerMonedaNacionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>669747179CD285A89A23FBEE</Token>
            <Device>1</Device>
         </Btinreq>
         <sdtMoneda>
            <identificador>0</identificador>
            <descripcion>PESOS</descripcion>
            <simbolo>$</simbolo>
         </sdtMoneda>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTConfiguracionBantotal.ObtenerMonedaNacional</Servicio>
            <Fecha>2020-10-23</Fecha>
            <Hora>15:48:04</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7534</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerMonedaNacionalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
    "Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "669747179CD285A89A23FBEE"
    },
    "sdtMoneda": {
        "identificador": "0",
        "descripcion": "PESOS",
        "simbolo": "$"
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTConfiguracionBantotal.ObtenerMonedaNacional",
        "Fecha": "2020-10-23",
        "Hora": "15:48:04",
        "Requerimiento": "1",
        "Numero": "7534",
        "Estado": "OK"
    }
}\'` }
  };

  structuredTypes = [];
}
