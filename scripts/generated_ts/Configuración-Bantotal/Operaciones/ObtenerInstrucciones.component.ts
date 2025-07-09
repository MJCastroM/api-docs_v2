import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerInstrucciones',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerInstruccionesComponent1751987196503 {
  pageTitle        = 'Obtener Instrucciones';
  description      = `Método para obtener un listado de las instrucciones ingresadas en Bantotal.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerInstrucciones';
  programa   = 'RBTPG098';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtInstrucciones', Tipo: '[sBTEInstruccion](#sbteinstruccion)', Comentarios: 'Listado de instrucciones.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerInstrucciones>
         <bts:Btinreq>             
            <bts:Device>ES</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>dac8c7fdec4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerInstrucciones>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerInstrucciones=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: c918ef54-f215-94e0-6632-9deabcd4676b\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerInstruccionesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>ES</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>dac8c7fdec4A8B5C60A82434</Token>
         </Btinreq>
         <sdtInstrucciones>
            <sBTEInstruccion>
               <identificador>1</identificador>
               <descripcion>Acreditar Intereses</descripcion>
            </sBTEInstruccion>
            <sBTEInstruccion>
               <identificador>2</identificador>
               <descripcion>Cancelar y Acreditar al vto.</descripcion>
            </sBTEInstruccion>
            <sBTEInstruccion>
               <identificador>3</identificador>
               <descripcion>Acreditar al Vencimiento</descripcion>
            </sBTEInstruccion>
            <sBTEInstruccion>
               <identificador>4</identificador>
               <descripcion>Acreditar Intereses y Renovar</descripcion>
            </sBTEInstruccion>
            <sBTEInstruccion>
               <identificador>5</identificador>
               <descripcion>Debitar al Vencimiento</descripcion>
            </sBTEInstruccion>
            <sBTEInstruccion>
               <identificador>6</identificador>
               <descripcion>Renovación Automática</descripcion>
            </sBTEInstruccion>
            <sBTEInstruccion>
               <identificador>7</identificador>
               <descripcion>Acreditación</descripcion>
            </sBTEInstruccion>
            <sBTEInstruccion>
               <identificador>8</identificador>
               <descripcion>Capitalización Periódica Int.</descripcion>
            </sBTEInstruccion>
            <sBTEInstruccion>
               <identificador>17</identificador>
               <descripcion>Debito Ahorro Programado</descripcion>
            </sBTEInstruccion>
            <sBTEInstruccion>
               <identificador>80</identificador>
               <descripcion>Comisiones Periódicas</descripcion>
            </sBTEInstruccion>
            <sBTEInstruccion>
               <identificador>43</identificador>
               <descripcion>Hold</descripcion>
            </sBTEInstruccion>
            <sBTEInstruccion>
               <identificador>0</identificador>
               <descripcion>Cobro de Comisión Cofres Segur</descripcion>
            </sBTEInstruccion>
         </sdtInstrucciones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>875</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerInstrucciones</Servicio>
            <Fecha>2017-12-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:45:34</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerInstruccionesResponse>
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
   "sdtInstrucciones": {
      "sBTEInstruccion": [
         {
               "descripcion": "Acreditar Intereses",
               "identificador": "1"
         },
         {
               "descripcion": "Cancelar y Acreditar al vto.",
               "identificador": "2"
         },
         {
               "descripcion": "Acreditar al Vencimiento",
               "identificador": "3"
         },
         {
               "descripcion": "Acreditar Intereses y Renovar",
               "identificador": "4"
         },
         {
               "descripcion": "Debitar al Vencimiento",
               "identificador": "5"
         },
         {
               "descripcion": "Renovación Automática",
               "identificador": "6"
         },
         {
               "descripcion": "Acreditación",
               "identificador": "7"
         },
         {
               "descripcion": "Capitalización Periódica Int.",
               "identificador": "8"
         },
         {
               "descripcion": "Debito Ahorro Programado",
               "identificador": "17"
         },
         {
               "descripcion": "Comisiones Periódicas",
               "identificador": "80"
         },
         {
               "descripcion": "Hold",
               "identificador": "43"
         },
         {
               "descripcion": "Cobro de Comisión Cofres Segur",
               "identificador": "0"
         }
      ]
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "899",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerInstrucciones",
      "Fecha": "2017-12-21",
      "Requerimiento": "",
      "Hora": "12:05:30",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [];
}
