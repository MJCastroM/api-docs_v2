import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-Obtener',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener';
  description = `Metodo para obtener los datos de un ahorro programado.`;
  pubName    = 'BTAhorroProgramado.Obtener';
  programa   = 'RBTPG256';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['ahorroUId'];
  inputData  = [{ Nombre: 'ahorroUId', Tipo: 'Long', Comentarios: 'Identificador unico del ahorro.' }];
  outputCols = ['sdtDetalleAhorro'];
  outputData = [{ Nombre: 'sdtDetalleAhorro', Tipo: '[sBTDetalleAhorro](#sbtdetalleahorro)', Comentarios: 'Datos del ahorro.' }];
  errorCols  = ['30001', '30011'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio identificador de la operacion.' }, { Codigo: '30011', Descripcion: 'No se recupero la operacion para el identificador recibido.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTAhorroProgramado.Obtener>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>f22e83a6eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:ahorroUId>205</bts:ahorroUId>
      </bts:BTAhorroProgramado.Obtener>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?Obtener=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \
  -d '{
"Btinreq": {
   "Device": "AV",
   "Usuario": "MINSTALADOR",
   "Requerimiento": "",
   "Canal": "BTDIGITAL",
   "Token": "75e20bd1614A8B5C60A82434"
},
   "ahorroUId": 205
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTAhorroProgramado.ObtenerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f22e83a6eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtDetalleAhorro>
            <plazo>60</plazo>
            <ahorroUId>205</ahorroUId>
            <diaDeIncremento>9</diaDeIncremento>
            <periodicidad>1</periodicidad>
            <fechaAltaSolicitud>2017-03-06</fechaAltaSolicitud>
            <periodosDeGraciaHabilitados>3</periodosDeGraciaHabilitados>
            <fechaVencimiento>2017-05-08</fechaVencimiento>
            <fechaProximaRenovacion>0000-00-00</fechaProximaRenovacion>
            <clienteUId>61</clienteUId>
            <montoMeta>0.00</montoMeta>
            <intentosDeIncrementoUtilizados>0</intentosDeIncrementoUtilizados>
            <productoUId>82</productoUId>
            <periodosDeGraciaUtilizados>0</periodosDeGraciaUtilizados>
            <tasaActual>10.200000</tasaActual>
            <observacion/>
            <tipoDeDia>Días Calendario</tipoDeDia>
            <motivoMeta/>
            <intentosDeIncrementoHabilitados>30</intentosDeIncrementoHabilitados>
            <fechaMeta>0000-00-00</fechaMeta>
            <tasaOriginal>10.200000</tasaOriginal>
            <saldoActual>0.00</saldoActual>
            <tipoTasa>Lineal Anual</tipoTasa>
            <fechaProximoIncremento>2017-06-09</fechaProximoIncremento>
            <renueva>No</renueva>
            <operacionUIdOrigen>541</operacionUIdOrigen>
            <operacionUIdDestino>541</operacionUIdDestino>
            <estado>Cancelado</estado>
            <abono>5000.00</abono>
            <fechaValor>2017-03-09</fechaValor>
         </sdtDetalleAhorro>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>9360</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.Obtener</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:44:25</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ObtenerResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{ 
    "Btinreq": { 
        "Device": "AV", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "75e20bd1614A8B5C60A82434" 
    }, 
    "sdtDetalleAhorro": { 
        "plazo": 60, 
        "ahorroUId": 205, 
        "diaDeIncremento": 9, 
        "periodicidad": 1, 
        "fechaAltaSolicitud": "2017-03-06", 
        "periodosDeGraciaHabilitados": 3, 
        "fechaVencimiento": "2017-05-08", 
        "fechaProximaRenovacion": "0000-00-00", 
        "clienteUId": 61, 
        "montoMeta": 0, 
        "intentosDeIncrementoUtilizados": 0, 
        "productoUId": 82, 
        "periodosDeGraciaUtilizados": 0, 
        "tasaActual": 10.2, 
        "observacion": "", 
        "tipoDeDia": "Días Calendario", 
        "motivoMeta": "", 
        "intentosDeIncrementoHabilitados": 30, 
        "fechaMeta": "0000-00-00", 
        "tasaOriginal": 10.2, 
        "saldoActual": 0, 
        "tipoTasa": "Lineal Anual", 
        "fechaProximoIncremento": "2017-06-09", 
        "renueva": "No", 
        "operacionUIdOrigen": 541, 
        "operacionUIdDestino": 541, 
        "estado": "Cancelado", 
        "abono": 0, 
        "fechaValor": "2017-03-09" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 9361, 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.Obtener", 
        "Fecha": "2019-11-19", 
        "Requerimiento": "", 
        "Hora": "11:46:44", 
        "Canal": "BTDIGITAL" 
    } 
}` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'abono', Tipo: 'Double', Comentarios: 'Abono.' }, { Nombre: 'ahorroUId', Tipo: 'Long', Comentarios: 'Identificador unico del ahorro.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico del cliente.' }, { Nombre: 'diadeIncremento', Tipo: 'Short', Comentarios: 'Dia en que se da el incremento.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del ahorro.' }, { Nombre: 'fechaAltaSolicitud', Tipo: 'Date', Comentarios: 'Fecha de alta de la solicitud.' }, { Nombre: 'fechaMeta', Tipo: 'Date', Comentarios: 'Fecha meta del ahorro.' }, { Nombre: 'fechaProximaRenovacion', Tipo: 'Date', Comentarios: 'Fecha del proximo incremento.' }, { Nombre: 'fechaProximoIncremento', Tipo: 'Date', Comentarios: 'Fecha del proximo incremento.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor del ahorro.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha del vencimiento del ahorro.' }, { Nombre: 'intentosDeIncrementoHabilitados', Tipo: 'Short', Comentarios: 'Intentos de incremento habilitados.' }, { Nombre: 'intentosDeIncrementoUtilizados', Tipo: 'Short', Comentarios: 'Intentos de incremento utilizados.' }, { Nombre: 'montoMeta', Tipo: 'Double', Comentarios: 'Monto meta del ahorro.' }, { Nombre: 'motivoMeta', Tipo: 'String', Comentarios: 'Motivo de la meta.' }, { Nombre: 'observacion', Tipo: 'String', Comentarios: 'Observacion.' }, { Nombre: 'operacionUIddestino', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion de destino.' }, { Nombre: 'operacionUIdorigen', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion de origen.' }, { Nombre: 'periodicidad', Tipo: 'Short', Comentarios: 'Periodicidad (en dias) del ahorro.' }, { Nombre: 'periodosDeGraciaHabilitados', Tipo: 'Short', Comentarios: 'Periodos de gracia habilitados.' }, { Nombre: 'periodosDeGraciaUtilizados', Tipo: 'Short', Comentarios: 'Periodos de gracia utilizados.' }, { Nombre: 'plazo', Tipo: 'Short', Comentarios: 'Plazo para el ahorro.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: 'renueva', Tipo: 'String', Comentarios: '¿Renueva? (S/N).' }, { Nombre: 'saldoActual', Tipo: 'Double', Comentarios: 'Saldo actual del ahorro.' }, { Nombre: 'tasaActual', Tipo: 'Double', Comentarios: 'Tasa actual.' }, { Nombre: 'tasaOriginal', Tipo: 'Double', Comentarios: 'Tasa original.' }, { Nombre: 'tipoDeDia', Tipo: 'String', Comentarios: 'Tipo de dia utilizado.' }, { Nombre: 'tipoTasa', Tipo: 'String', Comentarios: 'Tipo de tasa.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
