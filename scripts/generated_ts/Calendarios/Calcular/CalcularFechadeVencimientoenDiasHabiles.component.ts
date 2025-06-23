import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CalcularFechadeVencimientoenDiasHabiles',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CalcularFechadeVencimientoenDiasHabilesComponent1750713393150 {
  pageTitle        = 'Calcular Fecha de Vencimiento en Días Hábiles';
  description      = `Método para calcular la fecha de vencimiento en días hábiles de un plazo, a partir de la fecha de inicio.`;
  pubName    = 'BTCalendarios.CalcularFechaVencimientoDiasHabiles';
  programa   = 'RBTPG340';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sucursalId', Tipo: 'Int', Comentarios: 'Identificador de sucursal.' }, { Nombre: 'fechaInicio', Tipo: 'Date', Comentarios: 'Fecha de inicio del plazo.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'tipoDia', Tipo: 'Byte', Comentarios: '[Hidden: Valor fijo 6 para este método].' }, { Nombre: 'tipoVencimiento', Tipo: 'String', Comentarios: 'Tipo de ajuste al vencimiento (\'A\': Hábil anterior, \'P\': Hábil posterior, \'N\': No ajusta).' }];
  outputData = [{ Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del plazo.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCalendarios.CalcularFechaVencimientoDiasHabiles>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>573607534CD285A89A23FBEE</bts:Token>
            <bts:Device>N</bts:Device>
         </bts:Btinreq>
         <bts:sucursalId></bts:sucursalId>
         <bts:plazo>30</bts:plazo>
         <bts:fechaInicio>2020-02-15</bts:fechaInicio>
         <bts:tipoVencimiento>A</bts:tipoVencimiento>
      </bts:BTCalendarios.CalcularFechaVencimientoDiasHabiles>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCalendarios_v1?CalcularFechaVencimientoDiasHabiles\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
  "Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "1",
      "Usuario": "INSTALADOR",
      "Token": "573607534CD285A89A23FBEE",
      "Device": "N"
    },
    "sucursalId": "",
    "plazo": "30",
    "fechaInicio": "2020-02-15",
    "tipoVencimiento": "A"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCalendarios.CalcularFechaVencimientoDiasHabilesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>573607534CD285A89A23FBEE</Token>
            <Device>N</Device>
         </Btinreq>
         <fechaFin>2020-03-15</fechaFin>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCalendarios.CalcularFechaVencimientoDiasHabiles</Servicio>
            <Fecha>2021-04-07</Fecha>
            <Hora>17:52:43</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8156</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCalendarios.CalcularFechaVencimientoDiasHabilesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "INSTALADOR", 
      "Token": "573607534CD285A89A23FBEE", 
      "Device": "N" 
    }, 
    "fechaFin": "2020-03-15", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTCalendarios.CalcularFechaVencimientoDiasHabiles", 
      "Fecha": "2021-04-07", 
      "Hora": "17:52:43", 
      "Requerimiento": "1", 
      "Numero": "8156", 
      "Estado": "OK" 
    } 
  }` }
  };

  structuredTypes = [];
}
