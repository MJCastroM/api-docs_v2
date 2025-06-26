import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerTareasdeProceso',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTareasdeProcesoComponent1750945335876 {
  pageTitle        = 'Obtener Tareas de Proceso';
  description      = `Método para obtener las tareas de un determinado proceso de Workflow.`;
  pubName    = 'BTWorkflow.ObtenerTareasDeProceso';
  programa   = 'RBTPG462';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'procesoId', Tipo: 'Int', Comentarios: 'Identificador de proceso Workflow.' }];
  outputData = [{ Nombre: 'sdtTareas', Tipo: '[sBTTareaWF](#sbttareawf)', Comentarios: 'Listado de tareas Workflow.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de proceso.' }, { Codigo: '40001', Descripcion: 'El proceso ingresado no existe.' }, { Codigo: '40002', Descripcion: 'No se encontraron tareas para el proceso ingresado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTWorkflow.ObtenerTareasDeProceso>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>GP</bts:Device>
            <bts:Token>151D0C3440510F1D04029085</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
         </bts:Btinreq>
         <bts:procesoId>1</bts:procesoId>
      </bts:BTWorkflow.ObtenerTareasDeProceso>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTWorkflow_v1?ObtenerTareasDeProceso \
-H \'cache-control: no-cache\' \
-H \'content-type: application/json\' \
-d \'{
   "Btinreq": {
      "Canal": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Device": "GP",
      "Requerimiento": "1",
      "Token": "200f0b8b654A8B5C60A82434"
   },
   "procesoId": "1"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTWorkflow.ObtenerTareasDeProcesoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Token>151D0C3440510F1D04029085</Token>
            <Canal>BTDIGITAL</Canal>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
         </Btinreq>
         <sdtTareas>
            <sBTTareaWF>
               <descripcion>Solicitud</descripcion>
               <warning>0.00</warning>
               <deadline>0.00</deadline>
               <tareaId>3</tareaId>
               <nombre>Solicitud</nombre>
               <programaPostcondicional/>
            </sBTTareaWF>
            <sBTTareaWF>
               <descripcion>Evaluación / Propuesta</descripcion>
               <warning>0.00</warning>
               <deadline>0.00</deadline>
               <tareaId>7</tareaId>
               <nombre>Evaluación / Propuesta</nombre>
               <programaPostcondicional>ASNG449</programaPostcondicional>
            </sBTTareaWF>
            <sBTTareaWF>
               <descripcion>Aprobación</descripcion>
               <warning>0.00</warning>
               <deadline>0.00</deadline>
               <tareaId>11</tareaId>
               <nombre>Aprobación</nombre>
               <programaPostcondicional/>
            </sBTTareaWF>
            <sBTTareaWF>
               <descripcion>Desembolso</descripcion>
               <warning>0.00</warning>
               <deadline>43200.00</deadline>
               <tareaId>55</tareaId>
               <nombre>Desembolso</nombre>
               <programaPostcondicional/>
            </sBTTareaWF>
         </sdtTareas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Canal>BTDIGITAL</Canal>
            <Fecha>2022-11-29</Fecha>
            <Servicio>BTWorkflow.ObtenerTareasDeProceso</Servicio>
            <Hora>14:57:20</Hora>
            <Numero>225671</Numero>
            <Requerimiento>1</Requerimiento>
         </Btoutreq>
      </BTWorkflow.ObtenerTareasDeProcesoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'
{
   "Btinreq": {
      "Device": "GP",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "47D750A861C4243EDE981344"
   },
   "sdtTareas": {
      "sBTTareaWF": [
      {
         "descripcion": "Solicitud",
         "warning": "0.00",
         "deadline": "0.00",
         "tareaId": "3",
         "nombre": "Solicitud",
         "programaPostcondicional": ""
      },
      {
         "descripcion": "Evaluación / Propuesta",
         "warning": "0.00",
         "deadline": "0.00",
         "tareaId": "7",
         "nombre": "Evaluación / Propuesta",
         "programaPostcondicional": "ASNG449"
      },
      {
         "descripcion": "Aprobación",
         "warning": "0.00",
         "deadline": "0.00",
         "tareaId": "11",
         "nombre": "Aprobación",
         "programaPostcondicional": ""
      },
      {
         "descripcion": "Desembolso",
         "warning": "0.00",
         "deadline": "43200.00",
         "tareaId": "55",
         "nombre": "Desembolso",
         "programaPostcondicional": ""
      }
      ]
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Estado": "OK",
      "Canal": "BTDIGITAL",
      "Fecha": "2022-11-29",
      "Servicio": "BTWorkflow.ObtenerTareasDeProceso",
      "Hora": "14:57:20",
      "Numero": "225671",
      "Requerimiento": "1"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTTareaWF', fields: [{ Nombre: 'deadline', Tipo: 'Double', Comentarios: 'Tiempo de deadline.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de la tarea.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de la tarea.' }, { Nombre: 'programaPostcondicional', Tipo: 'String', Comentarios: 'Programa postcondicional.' }, { Nombre: 'tareaId', Tipo: 'Int', Comentarios: 'Identificador de tarea Workflow.' }, { Nombre: 'warning', Tipo: 'Double', Comentarios: 'Tiempo de warning.' }] }];
}
