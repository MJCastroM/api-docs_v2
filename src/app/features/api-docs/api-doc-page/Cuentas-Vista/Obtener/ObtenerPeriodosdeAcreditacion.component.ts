import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPeriodosdeAcreditacion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPeriodosdeAcreditacionComponent1751987197184 {
  pageTitle        = 'Obtener Períodos de Acreditación';
  description      = `Método para obtener los períodos de acreditación cargados en el sistema.`;
  pubName    = 'BTCuentasVista.ObtenerPeriodosDeAcreditacion';
  programa   = 'RBTPG365';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtPeriodosDeAcreditacion', Tipo: '[sBTPeriodoDeAcreditacion](#sbtperiododeacreditacion)', Comentarios: 'Listado de períodos de acreditación.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.ObtenerPeriodosDeAcreditacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1080548031CD285A89A23FBE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
      </bts:BTCuentasVista.ObtenerPeriodosDeAcreditacion>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "1518870407CD285A89A23FBE",
        "Device": ""
    }
}` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ObtenerPeriodosDeAcreditacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>1080548031CD285A89A23FBE</Token>
            <Device/>
         </Btinreq>
         <sdtPeriodosDeAcreditacion>
            <SdtsBTPeriodoDeAcreditacion>
               <descripcion>Diario</descripcion>
               <valor>1</valor>
            </SdtsBTPeriodoDeAcreditacion>
            <SdtsBTPeriodoDeAcreditacion>
               <descripcion>Semanal</descripcion>
               <valor>5</valor>
            </SdtsBTPeriodoDeAcreditacion>
            <SdtsBTPeriodoDeAcreditacion>
               <descripcion>Quincenal</descripcion>
               <valor>15</valor>
            </SdtsBTPeriodoDeAcreditacion>
            <SdtsBTPeriodoDeAcreditacion>
               <descripcion>Mensual</descripcion>
               <valor>30</valor>
            </SdtsBTPeriodoDeAcreditacion>
            <SdtsBTPeriodoDeAcreditacion>
               <descripcion>Trimestral</descripcion>
               <valor>90</valor>
            </SdtsBTPeriodoDeAcreditacion>
            <SdtsBTPeriodoDeAcreditacion>
               <descripcion>Semestral</descripcion>
               <valor>180</valor>
            </SdtsBTPeriodoDeAcreditacion>
            <SdtsBTPeriodoDeAcreditacion>
               <descripcion>Anual</descripcion>
               <valor>360</valor>
            </SdtsBTPeriodoDeAcreditacion>
         </sdtPeriodosDeAcreditacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasVista.ObtenerPeriodosDeAcreditacion</Servicio>
            <Fecha>2021-10-29</Fecha>
            <Hora>14:27:12</Hora>
            <Requerimiento/>
            <Numero>8451</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasVista.ObtenerPeriodosDeAcreditacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "1518870407CD285A89A23FBE",
        "Device": ""
    },
    "sdtPeriodosDeAcreditacion": {
        "SdtsBTPeriodoDeAcreditacion": [
            {
                "descripcion": "Diario",
                "valor": 1
            },
            {
                "descripcion": "Semanal",
                "valor": 5
            },
            {
                "descripcion": "Quincenal",
                "valor": 15
            },
            {
                "descripcion": "Mensual",
                "valor": 30
            },
            {
                "descripcion": "Trimestral",
                "valor": 90
            },
            {
                "descripcion": "Semestral",
                "valor": 180
            },
            {
                "descripcion": "Anual",
                "valor": 360
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTCuentasVista.ObtenerPeriodosDeAcreditacion",
        "Fecha": "2021-10-29",
        "Hora": "13:37:58",
        "Requerimiento": "",
        "Numero": 8449,
        "Estado": "OK"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTPeriodoDeAcreditacion', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del período.' }, { Nombre: 'valor', Tipo: 'Int', Comentarios: 'Valor del período.' }] }];
}
