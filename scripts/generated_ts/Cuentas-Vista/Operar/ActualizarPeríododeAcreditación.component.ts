import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ActualizarPerododeAcreditacin',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarPeriododeAcreditacionComponent {
  pageTitle = 'Actualizar Periodo de Acreditacion';
  description = `Metodo para actualizar el periodo de acreditacion de intereses de una subcuenta contratada.`;
  pubName    = 'BTCuentasVista.ActualizarPeriodoDeAcreditacion';
  programa   = 'RBTPG359';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador de subcuenta.' }, { Nombre: 'periodoAcreditacion', Tipo: 'Int', Comentarios: 'Periodo de acreditacion.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador unico de operacion.' }, { Codigo: '30002', Descripcion: 'El periodo de acreditacion ingresado es invalido.' }, { Codigo: '30003', Descripcion: 'No se recupero la operacion para el Identificador: [Numero de identificador].' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.ActualizarPeriodoDeAcreditacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>599605168CD285A89A23FBEE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10209</bts:operacionUId>
         <bts:periodoAcreditacion>1</bts:periodoAcreditacion>
      </bts:BTCuentasVista.ActualizarPeriodoDeAcreditacion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "1121622302CD285A89A23FBE",
        "Device": ""
    },
    "operacionUId": "10209",
    "periodoAcreditacion": "15"
}` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ActualizarPeriodoDeAcreditacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>599605168CD285A89A23FBEE</Token>
            <Device/>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasVista.ActualizarPeriodoDeAcreditacion</Servicio>
            <Fecha>2021-10-29</Fecha>
            <Hora>13:28:31</Hora>
            <Requerimiento/>
            <Numero>8447</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasVista.ActualizarPeriodoDeAcreditacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "1121622302CD285A89A23FBE",
        "Device": ""
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTCuentasVista.ActualizarPeriodoDeAcreditacion",
        "Fecha": "2021-10-29",
        "Hora": "12:53:57",
        "Requerimiento": "",
        "Numero": 8445,
        "Estado": "OK"
    }
}` }
  };

  structuredTypes = [];
}
