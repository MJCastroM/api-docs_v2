import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerScores',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerScoresComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Scores';
  description = `Metodo para obtener los scores de los modelos de evaluacion.`;
  pubName    = 'BTPAE.ObtenerScores';
  programa   = 'RBTPG511';
  scope      = 'Institucional';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['modeloEvaluacionId'];
  inputData  = [{ Nombre: 'modeloEvaluacionId', Tipo: 'Int', Comentarios: 'Codigo de modelo de evaluacion.' }];
  outputCols = ['sdtScoresPAE'];
  outputData = [{ Nombre: 'sdtScoresPAE', Tipo: '[sBTScorePAE](#sbtscorepae)', Comentarios: 'Listado de scores de un modelo PAE.' }];
  errorCols  = [];
  errors     = [];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPAE.ObtenerScores>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>FP</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>3789c5608bCD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:modeloEvaluacionId>101</bts:modeloEvaluacionId>
      </bts:BTPAE.ObtenerScores>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPAE_v1?ObtenerScores \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
  "Btinreq": {
      "Requerimiento": 13,
      "Device": "FP",
      "Canal": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Token": "3789c5608bCD285A89A23FBE"
  },
  "modeloEvaluacionId": 101
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPAE.ObtenerScoresResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>FP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>3789c5608bCD285A89A23FBE</Token>
         </Btinreq>
         <sdtScoresPAE>
            <sBTScorePAE>
               <valorScoreRango>-0.409</valorScoreRango>
               <tipoRestriccion/>
               <idPolitica>0</idPolitica>
               <codigoModelo>101</codigoModelo>
               <desdeNumerico>0</desdeNumerico>
               <hastaFecha>0001-01-01</hastaFecha>
               <hastaNumerico>25</hastaNumerico>
               <valorPolitica/>
               <mensajeIncumPolitica/>
               <correlativo>1</correlativo>
               <desdeCaracter/>
               <codigoItem>1</codigoItem>
               <desdeFecha>0001-01-01</desdeFecha>
               <hastaCaracter/>
            </sBTScorePAE>
            ...
         </sdtScoresPAE>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>31107</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPAE.ObtenerScores</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2022-11-29</Fecha>
            <Hora>12:32:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPAE.ObtenerScoresResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
  "Envelope": {
    "Body": {
      "BTPAE.ObtenerScoresResponse": {
        "Btinreq": {
          "Device": "FP",
          "Usuario": "INSTALADOR",
          "Requerimiento": 1,
          "Canal": "BTDIGITAL",
          "Token": "3789c5608bCD285A89A23FBE"
        },
        "sdtScoresPAE": {
          "sBTScorePAE": [
            {
              "valorScoreRango": -0.409,
              "tipoRestriccion": "",
              "idPolitica": 0,
              "codigoModelo": 101,
              "desdeNumerico": 0,
              "hastaFecha": "0001-01-01",
              "hastaNumerico": 25,
              "valorPolitica": "",
              "mensajeIncumPolitica": "",
              "correlativo": 1,
              "desdeCaracter": "",
              "codigoItem": 1,
              "desdeFecha": "0001-01-01",
              "hastaCaracter": ""
            },
            ...
          ]
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Numero": 31107,
          "Estado": "OK",
          "Servicio": "BTPAE.ObtenerScores",
          "Requerimiento": 1,
          "Fecha": "2022-11-29",
          "Hora": "12:32:04",
          "Canal": "BTDIGITAL"
        }
      }
    }
  }
}` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'codigoItem', Tipo: 'Numerico', Comentarios: 'Codigo de item.' }, { Nombre: 'codigoModelo', Tipo: 'Numerico', Comentarios: 'Codigo de modelo.' }, { Nombre: 'correlativo', Tipo: 'Numerico', Comentarios: 'Correlativo.' }, { Nombre: 'desdeNumerico', Tipo: 'Numerico', Comentarios: 'Numero desde.' }, { Nombre: 'desdeCaracter', Tipo: 'String', Comentarios: 'Caracter desde.' }, { Nombre: 'desdeFecha', Tipo: 'Date', Comentarios: 'Fecha desde.' }, { Nombre: 'hastaNumerico', Tipo: 'Numerico', Comentarios: 'Numero hasta.' }, { Nombre: 'hastaCaracter', Tipo: 'String', Comentarios: 'Caracter hasta.' }, { Nombre: 'hastaFecha', Tipo: 'Date', Comentarios: 'Fecha hasta.' }, { Nombre: 'idPolitica', Tipo: 'Numerico', Comentarios: 'Codigo de politica.' }, { Nombre: 'mensajeIncumPolitica', Tipo: 'String', Comentarios: 'Mensaje de politica incumplida.' }, { Nombre: 'tipoRestriccion', Tipo: 'String', Comentarios: 'Tipo de restriccion por defecto. ('I'= Informativa; 'A'= Alerta; 'B'= Bloqueante; 'E'= Bloqueante con Excepcion;).' }, { Nombre: 'valorPolitica', Tipo: 'String', Comentarios: 'Valor de politica para el rango (S/N).' }, { Nombre: 'valorScoreRango', Tipo: 'Numerico', Comentarios: 'Rango del valor score.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
