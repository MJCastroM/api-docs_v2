import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerProcesosHabilitados',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProcesosHabilitadosComponent1750446219038 {
  pageTitle        = 'Obtener Procesos Habilitados';
  description      = `Método para obtener un listado de los procesos habilitados de Workflow.`;
  pubName    = 'BTWorkflow.ObtenerProcesosHabilitados';
  programa   = 'RBTPG515 ';
  scope      = 'Global ';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtProcesos', Tipo: '[sBTProcesoWF](#sbtprocesowf)', Comentarios: 'Listado de procesos habilitados.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTWorkflow.ObtenerProcesosHabilitados> 
         <bts:Btinreq> 
            <bts:Requerimiento>2</bts:Requerimiento> 
            <bts:Device>FP</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>3789c5608bCD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
      </bts:BTWorkflow.ObtenerProcesosHabilitados> 
   </soapenv:Body> 
</soapenv:Envelope>`, 
    json: `
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTWorkflow_v1?ObtenerProcesosHabilitados \ 
-H \'cache-control: no-cache\' \ 
-H \'content-type: application/json\' \ 
-d \'{ 
    "Btinreq": { 
        "Requerimiento": 2, 
        "Device": "FP", 
        "Canal": "BTDIGITAL", 
        "Usuario": "INSTALADOR", 
        "Token": "3789c5608bCD285A89A23FBE" 
    }, 
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTWorkflow.ObtenerProcesosHabilitadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>FP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>2</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>3789c5608bCD285A89A23FBE</Token> 
         </Btinreq> 
         <sBTProcesosWF> 
            <sBTProcesoWF> 
               <idProceso>3</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2014-05-26</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2014-07-28</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>ALTA PRODUCTO</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>6</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2013-08-06</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2013-08-06</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>LIM_CAJA_SUC</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>8</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2014-07-21</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2014-07-21</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>Aplicaciones_Móviles</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>9</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2015-09-09</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2015-09-09</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>ALTA_MOD_CONTRATO</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>10</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2015-09-14</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2013-02-26</fechaCreacion> 
               <idVersion>2</idVersion> 
               <nombre>Créditos Individuales</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>11</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2015-09-14</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2013-02-26</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>Créditos Grupales</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>12</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2015-09-14</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2013-02-26</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>Creditos Retorno</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>13</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2015-09-14</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2013-02-26</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>Créditos Nuevos Reducido</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>14</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2015-05-13</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2015-05-06</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>FLUJO_ALERTAS</nombre> 
            </sBTProcesoWF> 
         </sBTProcesosWF> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>31109</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTWorkflow.ObtenerProcesosHabilitados</Servicio> 
            <Requerimiento>2</Requerimiento> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>13:04:36</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTWorkflow.ObtenerProcesosHabilitadosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope>`,  
    json: `
\'{ 
  "Btinreq": { 
      "Device": "GP", 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "1", 
      "Canal": "BTDIGITAL", 
      "Token": "47D750A861C4243EDE981344" 
  }, 
  "sBTProcesosWF": { 
      "sBTProcesoWF": [ 
        { 
          "idProceso": 3, 
          "descripcion": "", 
          "fechaActualizacion": "2014-05-26", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2014-07-28", 
          "idVersion": 1, 
          "nombre": "ALTA PRODUCTO" 
        }, 
        { 
          "idProceso": 6, 
          "descripcion": "", 
          "fechaActualizacion": "2013-08-06", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2013-08-06", 
          "idVersion": 1, 
          "nombre": "LIM_CAJA_SUC" 
        }, 
        { 
          "idProceso": 8, 
          "descripcion": "", 
          "fechaActualizacion": "2014-07-21", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2014-07-21", 
          "idVersion": 1, 
          "nombre": "Aplicaciones_Móviles" 
        }, 
        { 
          "idProceso": 9, 
          "descripcion": "", 
          "fechaActualizacion": "2015-09-09", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2015-09-09", 
          "idVersion": 1, 
          "nombre": "ALTA_MOD_CONTRATO" 
        }, 
        { 
          "idProceso": 10, 
          "descripcion": "", 
          "fechaActualizacion": "2015-09-14", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2013-02-26", 
          "idVersion": 2, 
          "nombre": "Créditos Individuales" 
        }, 
        { 
          "idProceso": 11, 
          "descripcion": "", 
          "fechaActualizacion": "2015-09-14", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2013-02-26", 
          "idVersion": 1, 
          "nombre": "Créditos Grupales" 
        }, 
        { 
          "idProceso": 12, 
          "descripcion": "", 
          "fechaActualizacion": "2015-09-14", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2013-02-26", 
          "idVersion": 1, 
          "nombre": "Creditos Retorno" 
        }, 
        { 
          "idProceso": 13, 
          "descripcion": "", 
          "fechaActualizacion": "2015-09-14", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2013-02-26", 
          "idVersion": 1, 
          "nombre": "Créditos Nuevos Reducido" 
        }, 
        { 
          "idProceso": 14, 
          "descripcion": "", 
          "fechaActualizacion": "2015-05-13", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2015-05-06", 
          "idVersion": 1, 
          "nombre": "FLUJO_ALERTAS" 
        } 
      ] 
  }, 
  "Erroresnegocio": "", 
  "Btoutreq": { 
      "Numero": 31109, 
      "Estado": "OK", 
      "Servicio": "BTWorkflow.ObtenerProcesosHabilitados", 
      "Requerimiento": 2, 
      "Fecha": "2022-11-29", 
      "Hora": "13:04:36", 
      "Canal": "BTDIGITAL" 
  } 
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTProcesoWF', fields: [{ Nombre: 'deadline', Tipo: 'Double', Comentarios: 'Tiempo de deadline.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'fechaActualizacion', Tipo: 'Date', Comentarios: 'Fecha de actualización.' }, { Nombre: 'fechaCreacion', Tipo: 'Date', Comentarios: 'Fecha de creación.' }, { Nombre: 'idProceso', Tipo: 'Long', Comentarios: 'Código de proceso.' }, { Nombre: 'idVersion', Tipo: 'Short', Comentarios: 'Versión del proceso.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del proceso.' }, { Nombre: 'warning', Tipo: 'Double', Comentarios: 'Tiempo de warning.' }] }];
}
