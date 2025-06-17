import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerBeneficiarios',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerBeneficiariosComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Beneficiarios';
  description = `Metodo para obtener los beneficiarios de una cuenta vista.`;
  pubName    = 'BTCuentasVista.ObtenerBeneficiarios';
  programa   = 'RBTPG630';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion.' }];
  outputCols = ['sdtBeneficiarios'];
  outputData = [{ Nombre: 'sdtBeneficiarios', Tipo: '[sBTBeneficiario](#sbtbeneficiario)', Comentarios: 'Listado de los beneficiarios.' }];
  errorCols  = ['30002', '30003', '30004', '40001'];
  errors     = [{ Codigo: '30002', Descripcion: 'No se recibio el identificador unico de la operacion.' }, { Codigo: '30003', Descripcion: 'No se recupero la operacion origen para el Identificador: [Numero de Identificador].' }, { Codigo: '30004', Descripcion: 'La operacion ingresada no corresponde a una cuenta vista.' }, { Codigo: '40001', Descripcion: 'No se encontraron beneficiaros para el identificador ingresado.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.ObtenerBeneficiarios>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>54878527AF5867CA94C680B0</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>789</bts:operacionUId>
      </bts:BTCuentasVista.ObtenerBeneficiarios>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerBeneficiarios=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "operacionUId": 789
  }'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ObtenerBeneficiariosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>54878527AF5867CA94C680B0</Token>
         </Btinreq>
         <sdtBeneficiarios>
            <sBTBeneficiario>
               <numeroDocumento>13348789</numeroDocumento>
               <parentesco>Padre</parentesco>
               <pais>URUGUAY</pais>
               <tipoDocumentoId>1</tipoDocumentoId>
               <participacion>100.0</participacion>
               <tipoDocumento>Cédula Identidad</tipoDocumento>
               <paisDocumentoId>845</paisDocumentoId>
               <personaUId>193</personaUId>
               <correlativo>1</correlativo>
               <telefono>64211</telefono>
               <nombre>Prueba</nombre>
               <parentescoId>41</parentescoId>
               <apellido/>
            </sBTBeneficiario>
         </sdtBeneficiarios>
         <Erroresnegocio/>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-22</Fecha>
            <Hora>13:14:24</Hora>
            <Numero>26946</Numero>
            <Servicio>BTCuentasVista.ObtenerBeneficiarios</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ObtenerBeneficiariosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "sdtBeneficiarios": {
         "sBTBeneficiario": {
         "numeroDocumento": 13348789,
         "parentesco": "Padre",
         "pais": "URUGUAY",
         "tipoDocumentoId": 1,
         "participacion": 100,
         "tipoDocumento": "Cédula Identidad",
         "paisDocumentoId": 845,
         "personaUId": 193,
         "correlativo": 1,
         "telefono": 64211,
         "nombre": "Prueba",
         "parentescoId": 41,
         "apellido": ""
         }
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCuentasVista.ObtenerBeneficiarios",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'apellido', Tipo: 'String', Comentarios: 'Apellido.' }, { Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Correlativo.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre.' }, { Nombre: 'numeroDocumento', Tipo: 'String', Comentarios: 'Numero de documento del beneficiario.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Pais.' }, { Nombre: 'paisDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del pais del documento.' }, { Nombre: 'parentesco', Tipo: 'String', Comentarios: 'Parentesco del beneficiario.' }, { Nombre: 'parentescoId', Tipo: 'Short', Comentarios: 'Identificador del parentesco.' }, { Nombre: 'participacion', Tipo: 'Double', Comentarios: 'Porcentaje de participacion del beneficiario.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de la persona.' }, { Nombre: 'telefono', Tipo: 'String', Comentarios: 'Telefono.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Tipo de documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
