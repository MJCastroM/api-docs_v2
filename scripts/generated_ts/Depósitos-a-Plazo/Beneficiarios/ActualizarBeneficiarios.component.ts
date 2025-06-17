import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ActualizarBeneficiarios',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarBeneficiariosComponent {
  // Cabecera e info-card
  pageTitle = 'Actualizar Beneficiarios';
  description = `Metodo para actualizar el listado de beneficiarios de un deposito a plazo. Luego de la ejecucion, se eliminaran los beneficiarios previamente registrados, y se asociaran los ingresados en el listado.`;
  pubName    = 'BTDepositosAPlazo.ActualizarBeneficiarios';
  programa   = 'RBTPG622';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId', 'sdtBeneficiarios', 'modo'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion.' }, { Nombre: 'sdtBeneficiarios', Tipo: '[sBTBeneficiario](#sbtbeneficiario)', Comentarios: 'Listado de beneficiarios del deposito a plazo.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo 'UPD' para este metodo].' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30002', '30003', '30004', '30005', '30006', '30007', '40001', '40002', '40003', '40004', '40005', '40006', '40007'];
  errors     = [{ Codigo: '30002', Descripcion: 'No se recibio el identificador unico de la operacion.' }, { Codigo: '30003', Descripcion: 'No se recupero la operacion para el identificador [Numero de Identificador].' }, { Codigo: '30004', Descripcion: 'Se tiene que ingresar al menos un beneficiario.' }, { Codigo: '30005', Descripcion: 'Debe ingresar identificador unico de la persona o numero de documento completo, pero no ambos.' }, { Codigo: '30006', Descripcion: 'No se recibio el porcentaje de participacion para la persona ingresada.' }, { Codigo: '30007', Descripcion: 'No se recibio el identificador de parentesco para la persona ingresada.' }, { Codigo: '40001', Descripcion: 'Debe ingresar Pais del Documento.' }, { Codigo: '40002', Descripcion: 'El Pais del Documento no existe.' }, { Codigo: '40003', Descripcion: 'El identificador de parentesco [Numero de Identificador] no es correcto.' }, { Codigo: '40004', Descripcion: 'El Tipo de Documento no existe.' }, { Codigo: '40005', Descripcion: 'Debe ingresar Nro de Documento.' }, { Codigo: '40006', Descripcion: 'La sumatoria de porcentajes de beneficiarios supera el 100%.' }, { Codigo: '40007', Descripcion: 'El porcentaje de participacion acumulado difiere del 100%.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.ActualizarBeneficiarios>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9060352790A5422FE377DB47</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>791</bts:operacionUId>
         <bts:sdtBeneficiarios>
            <bts:sBTBeneficiario>
               <bts:numeroDocumento></bts:numeroDocumento>
               <bts:parentesco></bts:parentesco>
               <bts:pais></bts:pais>
               <bts:tipoDocumentoId></bts:tipoDocumentoId>
               <bts:participacion>100</bts:participacion>
               <bts:tipoDocumento></bts:tipoDocumento>
               <bts:paisDocumentoId></bts:paisDocumentoId>
               <bts:personaUId>229</bts:personaUId>
               <bts:correlativo></bts:correlativo>
               <bts:telefono></bts:telefono>
               <bts:nombre></bts:nombre>
               <bts:parentescoId>43</bts:parentescoId>
               <bts:apellido></bts:apellido>
            </bts:sBTBeneficiario>
         </bts:sdtBeneficiarios>
      </bts:BTDepositosAPlazo.ActualizarBeneficiarios>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ActualizarBeneficiarios=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
      "Btinreq": {
            "Requerimiento": "1",
            "Device": "GZ",
            "Canal": "BTDIGITAL",
            "Usuario": "MINSTALADOR",
            "Token": "6fc29caa9d4A8B5C60A82434"
      },
      "operacionUId": 791,
      "sdtBeneficiarios": {
         "sBTBeneficiario": {
         "numeroDocumento": "",
         "parentesco": "",
         "pais": "",
         "tipoDocumentoId": "",
         "participacion": 100,
         "tipoDocumento": "",
         "paisDocumentoId": "",
         "personaUId": 229,
         "correlativo": "",
         "telefono": "",
         "nombre": "",
         "parentescoId": 43,
         "apellido": ""
         }
      }
  }'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ActualizarBeneficiariosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>9060352790A5422FE377DB47</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-10</Fecha>
            <Hora>17:06:36</Hora>
            <Numero>24976</Numero>
            <Servicio>BTDepositosAPlazo.ActualizarBeneficiarios</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ActualizarBeneficiariosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTDepositosAPlazo.ActualizarBeneficiarios",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'numeroDocumento', Tipo: 'String', Comentarios: 'Numero de documento del beneficiario.' }, { Nombre: 'parentesco', Tipo: 'String', Comentarios: 'Parentesco del beneficiario.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Pais.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }, { Nombre: 'participacion', Tipo: 'Double', Comentarios: 'Porcentaje de participacion del beneficiario.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Tipo de documento.' }, { Nombre: 'paisDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del pais del documento.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de la persona.' }, { Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Correlativo.' }, { Nombre: 'telefono', Tipo: 'String', Comentarios: 'Telefono.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre.' }, { Nombre: 'parentescoId', Tipo: 'Short', Comentarios: 'Identificador del parentesco.' }, { Nombre: 'apellido', Tipo: 'String', Comentarios: 'Apellido.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
