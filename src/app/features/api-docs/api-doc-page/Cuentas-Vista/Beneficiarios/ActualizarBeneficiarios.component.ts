import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ActualizarBeneficiarios',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarBeneficiariosComponent1750272791160 {
  pageTitle        = 'Actualizar Beneficiarios';
  description      = `Método para actualizar el listado de beneficiarios de una cuenta vista. Luego de la ejecución, se eliminarán los beneficiarios previamente registrados, y se asociarán los ingresados en el listado.`;
  pubName    = 'BTCuentasVista.ActualizarBeneficiarios';
  programa   = 'RBTPG631';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'sdtBeneficiarios', Tipo: '[sBTBeneficiario](#sbtbeneficiario)', Comentarios: 'Listado de los beneficiarios.' }];
  outputData = [];
  errors     = [{ Codigo: '30002', Descripcion: 'No se recibió el identificador único de la operación.' }, { Codigo: '30003', Descripcion: 'No se recuperó la operación origen para el Identificador: [Número de Identificador].' }, { Codigo: '30004', Descripcion: 'Se tiene que ingresar al menos un beneficiario.' }, { Codigo: '30005', Descripcion: 'Debe ingresar identificador único de la persona o número de documento completo.' }, { Codigo: '30006', Descripcion: 'No se recibió el porcentaje de participación para la persona ingresada.' }, { Codigo: '30007', Descripcion: 'No se recibió el identificador de parentesco para la persona ingresada.' }, { Codigo: '30008', Descripcion: 'Debe ingresar identificador único de la persona o número de documento completo, pero no ambos.' }, { Codigo: '30009', Descripcion: 'La operación ingresada no corresponde a una cuenta vista.' }, { Codigo: '40001', Descripcion: 'Debe ingresar País del Documento.' }, { Codigo: '40002', Descripcion: 'El País del Documento no existe.' }, { Codigo: '40003', Descripcion: 'El identificador de parentesco [Número de Identificador] no es correcto.' }, { Codigo: '40004', Descripcion: 'El Tipo de Documento no existe.' }, { Codigo: '40005', Descripcion: 'Debe ingresar Nro de Documento.' }, { Codigo: '40006', Descripcion: 'La sumatoria de porcentajes de beneficiarios supera el 100%.' }, { Codigo: '40007', Descripcion: 'El porcentaje de participación acumulado difiere del 100%.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.ActualizarBeneficiarios>
		<bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>54878527AF5867CA94C680B0</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>789</bts:operacionUId>
         <bts:sdtBeneficiarios>
            <bts:sBTBeneficiario>
               <bts:numeroDocumento></bts:numeroDocumento>
               <bts:parentesco></bts:parentesco>
               <bts:pais></bts:pais>
               <bts:tipoDocumentoId></bts:tipoDocumentoId>
               <bts:participacion>100</bts:participacion>
               <bts:tipoDocumento></bts:tipoDocumento>
               <bts:paisDocumentoId></bts:paisDocumentoId>
               <bts:personaUId>193</bts:personaUId>
               <bts:correlativo>?</bts:correlativo>
               <bts:telefono>64211</bts:telefono>
               <bts:nombre>Prueba</bts:nombre>
               <bts:parentescoId>41</bts:parentescoId>
               <bts:apellido></bts:apellido>
            </bts:sBTBeneficiario>
         </bts:sdtBeneficiarios>
      </bts:BTCuentasVista.ActualizarBeneficiarios>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ActualizarBeneficiarios=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "operacionUId": 789,
      "sdtBeneficiarios": {
         "sBTBeneficiario": {
         "numeroDocumento": "",
         "parentesco": "",
         "pais": "",
         "tipoDocumentoId": "",
         "participacion": 100,
         "tipoDocumento": "",
         "paisDocumentoId": "",
         "personaUId": 193,
         "correlativo": "?",
         "telefono": 64211,
         "nombre": "Prueba",
         "parentescoId": 41,
         "apellido": ""
         }
      }
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ActualizarBeneficiariosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>54878527AF5867CA94C680B0</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-22</Fecha>
            <Hora>13:14:16</Hora>
            <Numero>26945</Numero>
            <Servicio>BTCuentasVista.ActualizarBeneficiarios</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ActualizarBeneficiariosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCuentasVista.ActualizarBeneficiarios",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTBeneficiario', fields: [{ Nombre: 'apellido', Tipo: 'String', Comentarios: 'Apellido.' }, { Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Correlativo.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre.' }, { Nombre: 'numeroDocumento', Tipo: 'String', Comentarios: 'Numero de documento del beneficiario.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'País.' }, { Nombre: 'paisDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del país del documento.' }, { Nombre: 'parentesco', Tipo: 'String', Comentarios: 'Parentesco del beneficiario.' }, { Nombre: 'parentescoId', Tipo: 'Short', Comentarios: 'Identificador del parentesco.' }, { Nombre: 'participacion', Tipo: 'Double', Comentarios: 'Porcentaje de participación del beneficiario.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de la persona.' }, { Nombre: 'telefono', Tipo: 'String', Comentarios: 'Teléfono.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Tipo de documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }] }];
}
