import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerScores',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerScoresComponent1751987197988 {
  pageTitle        = 'Obtener Scores';
  description      = `Método para obtener los scores de los modelos de evaluación.`;
  pubName    = 'BTPAE.ObtenerScores';
  programa   = 'RBTPG511';
  scope      = 'Institucional';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'modeloEvaluacionId', Tipo: 'Int', Comentarios: 'Código de modelo de evaluación.' }];
  outputData = [{ Nombre: 'sdtScoresPAE', Tipo: '[sBTScorePAE](#sbtscorepae)', Comentarios: 'Listado de scores de un modelo PAE.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`,
    json: `
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPAE_v1?ObtenerScores \
-H \'cache-control: no-cache\' \
-H \'content-type: application/json\' \
-d \'{
  "Btinreq": {
      "Requerimiento": 13,
      "Device": "FP",
      "Canal": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Token": "3789c5608bCD285A89A23FBE"
  },
  "modeloEvaluacionId": 101
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
</SOAP-ENV:Envelope>`,
    json: `
{
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
}` }
  };

  structuredTypes = [{ typeName: 'sBTScorePAE', fields: [{ Nombre: 'codigoItem', Tipo: 'Numérico', Comentarios: 'Código de item.' }, { Nombre: 'codigoModelo', Tipo: 'Numérico', Comentarios: 'Código de modelo.' }, { Nombre: 'correlativo', Tipo: 'Numérico', Comentarios: 'Correlativo.' }, { Nombre: 'desdeNumerico', Tipo: 'Numerico', Comentarios: 'Número desde.' }, { Nombre: 'desdeCaracter', Tipo: 'String', Comentarios: 'Caracter desde.' }, { Nombre: 'desdeFecha', Tipo: 'Date', Comentarios: 'Fecha desde.' }, { Nombre: 'hastaNumerico', Tipo: 'Numerico', Comentarios: 'Número hasta.' }, { Nombre: 'hastaCaracter', Tipo: 'String', Comentarios: 'Caracter hasta.' }, { Nombre: 'hastaFecha', Tipo: 'Date', Comentarios: 'Fecha hasta.' }, { Nombre: 'idPolitica', Tipo: 'Numérico', Comentarios: 'Código de política.' }, { Nombre: 'mensajeIncumPolitica', Tipo: 'String', Comentarios: 'Mensaje de política incumplida.' }, { Nombre: 'tipoRestriccion', Tipo: 'String', Comentarios: 'Tipo de restricción por defecto. (\'I\'= Informativa; \'A\'= Alerta; \'B\'= Bloqueante; \'E\'= Bloqueante con Excepción;).' }, { Nombre: 'valorPolitica', Tipo: 'String', Comentarios: 'Valor de política para el rango (S/N).' }, { Nombre: 'valorScoreRango', Tipo: 'Numérico', Comentarios: 'Rango del valor score.' }] }];
}
