import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerValoresOrdenSegunCampo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerValoresOrdenSegunCampoComponent1750713393228 {
  pageTitle        = 'Obtener Valores de Orden Según Campo';
  description      = `Método para obtener los valores de los campos CASH recibidos para la orden que pertenezca al campo/valor recibido.`;
  pubName    = 'BTCASHManagement.ObtenerValoresOrdenSegunCampo';
  programa   = 'RBTPGC33';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'contratoId', Tipo: 'Int', Comentarios: 'Identificador del Contrato CASH del Cliente.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Servicio CASH.' }, { Nombre: 'campoBusqueda', Tipo: '[sBTValorCampoCASH](#sbtvalorcampocash)', Comentarios: 'Lista de valores de campos CASH a buscar.' }, { Nombre: 'camposCash', Tipo: '[sBTValorCampoCASH](#sbtvalorcampocash)', Comentarios: 'Lista de campos CASH a devolver valor.' }];
  outputData = [{ Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de orden CASH.' }, { Nombre: 'numeroLineaOrden', Tipo: 'Int', Comentarios: 'Número de línea de orden CASH.' }, { Nombre: 'valoresCampoCASH', Tipo: '[sBTValorCampoCASH](#sbtvalorcampocash)', Comentarios: 'Lista de valores de campos CASH.' }];
  errors     = [{ Codigo: '1030754', Descripcion: 'El campo de búsqueda no existe en el servicio recibido.' }, { Codigo: '1030755', Descripcion: 'No se encontró la orden para el campo/valor recibido.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.ObtenerValoresOrdenSegunCampo>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:contratoId>60</bts:contratoId>
         <bts:servicio>100</bts:servicio>
         <bts:campoBusqueda>
            <bts:tag>CSMD006NRO</bts:tag>
            <bts:valor>47758889</bts:valor>
         </bts:campoBusqueda>
         <bts:camposCash>
            <bts:sBTValorCampoCash>
               <bts:tag></bts:tag>
               <bts:valor></bts:valor>
            </bts:sBTValorCampoCash>
         </bts:camposCash>
      </bts:BTCASHManagement.ObtenerValoresOrdenSegunCampo>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?ObtenerValoresOrdenSegunCampo=\' \
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
    "contratoId": 60,
    "servicio": 100,
    "campoBusqueda": {
      "tag": "CSMD006NRO",
      "valor": 47758889
    },
    "camposCash": {
      "sBTValorCampoCash": {
         "tag": "",
         "valor": ""
         }
      }
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.ObtenerValoresOrdenSegunCampoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <ordenId>354</ordenId>
         <numeroLineaOrden>1</numeroLineaOrden>
         <valoresCampoCASH>
            <sBTValorCampoCASH>
               <tag/>
               <valor/>
            </sBTValorCampoCASH>
         </valoresCampoCASH>
         <Erroresnegocio/>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-19</Fecha>
            <Hora>09:01:15</Hora>
            <Numero>26093</Numero>
            <Servicio>BTCASHManagement.ObtenerValoresOrdenSegunCampo</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.ObtenerValoresOrdenSegunCampoResponse>
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
    "ordenId": 354,
    "numeroLineaOrden": 1,
    "valoresCampoCASH": {
      "sBTValorCampoCASH": {
         "tag": "",
         "valor": ""
      }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.ObtenerValoresOrdenSegunCampo",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTValorCampoCASH', fields: [{ Nombre: 'tag', Tipo: 'String', Comentarios: 'Tag del campo CASH.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor del campo CASH.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
