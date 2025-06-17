import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ContratarSeguro',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarSeguroComponent {
  // Cabecera e info-card
  pageTitle = 'Contratar Seguro';
  description = ``;
  pubName    = '';
  programa   = '';
  scope      = '';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = [];
  inputData  = [];
  outputCols = [];
  outputData = [];
  errorCols  = [];
  errors     = [];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSegurosVoluntarios.ContratarSeguro>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9436BF7CB5B5BB404CC6E5A7</bts:Token>
         </bts:Btinreq>
         <bts:seguroUId>3</bts:seguroUId>
         <bts:clienteUId>25</bts:clienteUId>
         <bts:importe>3342</bts:importe>
         <bts:cantidadCuotas>6</bts:cantidadCuotas>
         <bts:monedaId>1</bts:monedaId>
         <bts:numeroAfiliacion>3</bts:numeroAfiliacion>
         <bts:operacionCobroUId>47</bts:operacionCobroUId>
      </bts:BTSegurosVoluntarios.ContratarSeguro>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSegurosVoluntarios?ContratarSeguro' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "AC",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "seguroUId": 3,
    "clienteUId": 25,
    "importe": 3342,
    "cantidadCuotas": 6,
    "monedaId": 1,
    "numeroAfiliacion": 3,
    "operacionCobroUId": 47
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSegurosVoluntarios.ContratarSeguroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>89B4F6D7BEFB0C7F653DB37A</Token>
         </Btinreq>
         <bts:operacionUId>754</bts:operacionUId>
         <bts:movimientoUId>76</bts:movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20473</Numero>
            <Estado>OK</Estado>
            <Servicio>BTSegurosVoluntarios.ContratarSeguro</Servicio>
            <Fecha>2024-05-14</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>15:58:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTSegurosVoluntarios.ContratarSeguroResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
   "Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "",
      "Usuario": "BANTOTAL",
      "Token": "324915377F955E77534D3E02",
      "Device": "AC"
   },
   "operacionUId": 754,
   "movimientoUId": 76,
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTSegurosVoluntarios.ObtenerSeguros",
      "Fecha": "2019-11-19",
      "Hora": "13:05:22",
      "Requerimiento": "",
      "Numero": 6924,
      "Estado": "OK"
   }
}` } };

  // Datos estructurados
  structuredTypes = [];
}
