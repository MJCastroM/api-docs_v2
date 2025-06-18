import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPeriododeAcreditacion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPeriododeAcreditacionComponent1750258525038 {
  pageTitle        = 'Obtener Período de Acreditación';
  description      = `Método para obtener el período de acreditación de una cuenta vista.`;
  pubName          = 'Obtener Período de Acreditación';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador de Subcuenta con acreditación.' }];
  outputData = [{ Nombre: 'sdtPeriodoAcreditacion', Tipo: '[sBTPeriodoDeAcreditacion](#sbtperiododeacreditacion)', Comentarios: 'Datos de la acreditación de la subcuenta.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de Operacion.' }, { Codigo: '30003', Descripcion: 'No se recuperó la Operacion para el Identificador: [Número de identificador].' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.ObtenerPeriodoDeAcreditacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1136448858CD285A89A23FBE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10211</bts:operacionUId>
      </bts:BTCuentasVista.ObtenerPeriodoDeAcreditacion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "432782790CD285A89A23FBEE",
        "Device": ""
    },
    "operacionUId": 10211
}` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ObtenerPeriodoDeAcreditacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1136448858CD285A89A23FBE</Token>
            <Device/>
         </Btinreq>
         <sdtperiodoAcreditacion>
            <descripcion>Diario</descripcion>
            <valor>1</valor>
         </sdtperiodoAcreditacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasVista.ObtenerPeriodoDeAcreditacion</Servicio>
            <Fecha>2021-11-01</Fecha>
            <Hora>12:27:47</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8476</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasVista.ObtenerPeriodoDeAcreditacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "432782790CD285A89A23FBEE",
        "Device": ""
    },
    "sdtperiodoAcreditacion": {
        "descripcion": "Diario",
        "valor": 1
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTCuentasVista.ObtenerPeriodoDeAcreditacion",
        "Fecha": "2021-11-01",
        "Hora": "12:40:20",
        "Requerimiento": "",
        "Numero": 8478,
        "Estado": "OK"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTPeriodoDeAcreditacion', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del periodo.' }, { Nombre: 'valor', Tipo: 'Int', Comentarios: 'Valor del periodo.' }] }];
}
