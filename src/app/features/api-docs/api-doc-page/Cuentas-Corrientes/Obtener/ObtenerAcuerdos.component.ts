import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerAcuerdos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerAcuerdosComponent1750258525004 {
  pageTitle        = 'Obtener Acuerdos';
  description      = `Método para obtener los acuerdos de sobregiro de una cuenta corriente.`;
  pubName          = 'Obtener Acuerdos';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }];
  outputData = [{ Nombre: 'sdtAcuerdosCliente', Tipo: '[sBTAcuerdoClienteCC](#sbtacuerdoclientecc)', Comentarios: 'Listado de acuerdos del cliente.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30004', Descripcion: 'No existe registro con el identificador indicado.' }, { Codigo: '30101', Descripcion: 'No se recupero la operación para el identificador recibido.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.ObtenerAcuerdos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>BF79D7D88EC1865C343DAC53</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTCuentasCorrientes.ObtenerAcuerdos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerAcuerdos=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "clienteUId": 1,
  }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.ObtenerAcuerdosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>BF79D7D88EC1865C343DAC53</Token>
         </Btinreq>
         <sdtAcuerdosCliente>
            <sBTAcuerdoClienteCC>
               <moneda>$</moneda>
               <limiteUtilizado>-3647.62</limiteUtilizado>
               <limiteOtorgado>50000.0</limiteOtorgado>
               <limiteDisponible>46352.38</limiteDisponible>
               <descripcion/>
               <operacionUId>828</operacionUId>
               <tasa>6.7</tasa>
               <operacionUIdCuentaVista>41</operacionUIdCuentaVista>
               <fechaValor>2028-05-11</fechaValor>
               <fechaVencimiento>2030-05-11</fechaVencimiento>
               <tipoTasa>1</tipoTasa>
               <plazo>180</plazo>
               <tasaActualizada>0.0</tasaActualizada>
            </sBTAcuerdoClienteCC>
            <sBTAcuerdoClienteCC>
               <moneda>$</moneda>
               <limiteUtilizado>-3647.62</limiteUtilizado>
               <limiteOtorgado>60000.0</limiteOtorgado>
               <limiteDisponible>56352.38</limiteDisponible>
               <descripcion/>
               <operacionUId>829</operacionUId>
               <tasa>6.7</tasa>
               <operacionUIdCuentaVista>41</operacionUIdCuentaVista>
               <fechaValor>2028-05-11</fechaValor>
               <fechaVencimiento>2030-05-11</fechaVencimiento>
               <tipoTasa>1</tipoTasa>
               <plazo>30</plazo>
               <tasaActualizada>0.0</tasaActualizada>
            </sBTAcuerdoClienteCC>
         </sdtAcuerdosCliente>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-30</Fecha>
            <Hora>15:18:48</Hora>
            <Numero>25039</Numero>
            <Servicio>BTCuentasCorrientes.ObtenerAcuerdos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerAcuerdosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
   "sdtAcuerdosCliente": {
      "sBTAcuerdoClienteCC": [
      {
         "moneda": "$",
         "limiteUtilizado": -3647.62,
         "limiteOtorgado": 50000,
         "limiteDisponible": 46352.38,
         "descripcion": "",
         "operacionUId": 828,
         "tasa": 6.7,
         "operacionUIdCuentaVista": 41,
         "fechaValor": "2028-05-11",
         "fechaVencimiento": "2030-05-11",
         "tipoTasa": 1,
         "plazo": 180,
         "tasaActualizada": 0
      },
      {
         "moneda": "$",
         "limiteUtilizado": -3647.62,
         "limiteOtorgado": 60000,
         "limiteDisponible": 56352.38,
         "descripcion": "",
         "operacionUId": 829,
         "tasa": 6.7,
         "operacionUIdCuentaVista": 41,
         "fechaValor": "2028-05-11",
         "fechaVencimiento": "2030-05-11",
         "tipoTasa": 1,
         "plazo": 30,
         "tasaActualizada": 0
      }
      ]
   },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCuentasCorrientes.ObtenerAcuerdos",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTAcuerdoClienteCC', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha de inicio del acuerdo.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha del vencimiento.' }, { Nombre: 'limiteDisponible', Tipo: 'Double', Comentarios: 'Limite disponible.' }, { Nombre: 'limiteOtorgado', Tipo: 'Double', Comentarios: 'Limite otorgado.' }, { Nombre: 'limiteUtilizado', Tipo: 'Double', Comentarios: 'Limite utilizado.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'operacionUIdCuentaVista', Tipo: 'Long', Comentarios: 'Identificador único de la operación de la cuenta vista.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaActualizada', Tipo: 'Double', Comentarios: 'Tasa actualizada.' }, { Nombre: 'tipoTasa', Tipo: 'Byte', Comentarios: 'Tipo de tasa.' }] }];
}
