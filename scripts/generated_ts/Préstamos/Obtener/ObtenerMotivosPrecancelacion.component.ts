import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerMotivosPrecancelacion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerMotivosPrecancelacionComponent1751987199558 {
  pageTitle        = 'Obtener Motivos de Precancelación';
  description      = `Método para obtener los motivos de precancelación.`;
  pubName    = 'BTPrestamos.ObtenerMotivosPrecancelacion';
  programa   = 'RBTPG571';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único del producto.' }, { Nombre: 'tipoPrecancelacion', Tipo: 'String', Comentarios: 'Tipo de precancelación. Se pueden enviar los siguientes [valores](#valores1).' }];
  outputData = [{ Nombre: 'sdtMotivosPrecancelacion', Tipo: '[sBTValorCampo](#sbtvalorcampo)', Comentarios: 'Listado de motivos de precancelación.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador único del producto.' }, { Código: '30002', Descripción: 'El identificador único del producto es incorrecto.' }, { Código: '30010', Descripción: 'No se ingresó el tipo de precancelación.' }, { Código: '30011', Descripción: 'El valor del campo tipoPrecancelacion tiene que ser P o T.' }, { Código: '40001', Descripción: 'No se encontró el registro.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:prueba.ObtenerMotivosPreCancelacion>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>A1F224CC3030A4926AB6945F</Token>
         </Btinreq>
         <bts:productoUId>120</bts:productoUId>
         <bts:tipoPrecancelacion>T</bts:tipoPrecancelacion>
      </bts:prueba.ObtenerMotivosPreCancelacion>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerMotivosPreCancelacion=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "GZ",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
      "productoUId": 167,
      "tipoPrecancelacion": 5,
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <prueba.ObtenerMotivosPreCancelacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>A1F224CC3030A4926AB6945F</Token>
         </Btinreq>
         <sdtMotivosPrecancelacion>
            <sBTCampo>
               <identificador>1</identificador>
               <descripcion>Por Solicitud del cliente</descripcion>
            </sBTCampo>
         </sdtMotivosPrecancelacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2025-04-02</Fecha>
            <Hora>15:56:52</Hora>
            <Numero>64542</Numero>
            <Servicio>prueba.ObtenerMotivosPreCancelacion</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </prueba.ObtenerMotivosPreCancelacionResponse>
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
    "sdtMotivosPrecancelacion": {
         "sBTCampo": {
         "identificador": 1,
         "descripcion": "Por Solicitud del cliente"
         }
      },
    "Erroresnegocio":,
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTPrestamos.ObtenerMotivosPreCancelacion",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTValorCampo', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del campo.' }, { Nombre: 'identificador', Tipo: 'Long', Comentarios: 'Identificador del campo.' }] }];
}
