import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPaquetes',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPaquetesComponent1750272791001 {
  pageTitle        = 'Obtener Paquetes';
  description      = `Método para obtener un listado de los paquetes ingresados en Bantotal.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerPaquetes';
  programa   = 'RBTPG187';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtPaquetes', Tipo: '[sBTPaquete](#sbtpaquete)', Comentarios: 'Listado de paquetes.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerPaquetes>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerPaquetes>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerPaquetes=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: a0776b33-6711-6c56-044c-42d681d3742f\' \
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
      <BTConfiguracionBantotal.ObtenerPaquetesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtPaquetes>
            <sBTPaquete>
               <codigo>1</codigo>
               <descripcion>Cuenta Persona</descripcion>
               <vigente>S</vigente>
               <productos>
                  <SdtsBTProductoPaquete>
                     <productoUId>154</productoUId>
                     <nombre/>
                     <moneda>PESOS</moneda>
                     <papel>Billete</papel>
                     <cantidad>0</cantidad>
                  </SdtsBTProductoPaquete>
                  <SdtsBTProductoPaquete>
                     <productoUId>93</productoUId>
                     <nombre>Cuenta corriente P.Física</nombre>
                     <moneda>PESOS</moneda>
                     <papel>Billete</papel>
                     <cantidad>1</cantidad>
                  </SdtsBTProductoPaquete>
                  <SdtsBTProductoPaquete>
                     <productoUId>134</productoUId>
                     <nombre>Caja de Ahorro P.Física</nombre>
                     <moneda>DÓLAR ESTADOUNIDENSE</moneda>
                     <papel>Billete</papel>
                     <cantidad>1</cantidad>
                  </SdtsBTProductoPaquete>
                  <SdtsBTProductoPaquete>
                     <productoUId>155</productoUId>
                     <nombre>TARJETA DE DEBITO</nombre>
                     <moneda>PESOS</moneda>
                     <papel>Billete</papel>
                     <cantidad>0</cantidad>
                  </SdtsBTProductoPaquete>
               </productos>
            </sBTPaquete>
         </sdtPaquetes>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>788</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerPaquetes</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>16:47:42</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerPaquetesResponse>
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
   "paquetes": {
         "sBTPaquete": {
         "codigo": "1",
         "descripcion": "Cuenta Persona",
         "vigente": "S",
         "productos": {
            "SdtsBTProductoPaquete": [
               {
               "productoUId": "154",
               "moneda": "PESOS",
               "papel": "Billete",
               "cantidad": "0"
               },
               {
               "productoUId": "93",
               "nombre": "Cuenta corriente P.Física",
               "moneda": "PESOS",
               "papel": "Billete",
               "cantidad": "1"
               },
               {
               "productoUId": "134",
               "nombre": "Caja de Ahorro P.Física",
               "moneda": "DÓLAR ESTADOUNIDENSE",
               "papel": "Billete",
               "cantidad": "1"
               },
               {
               "productoUId": "155",
               "nombre": "TARJETA DE DEBITO",
               "moneda": "PESOS",
               "papel": "Billete",
               "cantidad": "0"
               }
            ]
         }
         }
      },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "790",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerPaquetes",
      "Fecha": "2017-12-17",
      "Requerimiento": "",
      "Hora": "16:48:12",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [];
}
