import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDeuda',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDeudaComponent1751987195771 {
  pageTitle        = 'Obtener Deuda';
  description      = `Método para obtener información de la deuda de un identificador para un contrato y servicio.`;
  pubName    = 'BTCASHManagement.ObtenerDeuda';
  programa   = 'RBTPGC61';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'contratoId', Tipo: 'Int', Comentarios: 'Identificador del contrato CASH.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Servicio CASH.' }, { Nombre: 'deudaId', Tipo: 'String', Comentarios: 'Identificador de la deuda.' }, { Nombre: 'sdtValorCampoCash', Tipo: '[sBTValorCampoCASH](#sbtvalorcampocash)', Comentarios: 'Datos de valores de campos CASH.' }];
  outputData = [{ Nombre: 'sdtInfoDetalleCash', Tipo: '[sBTInfoDetalleCASH](#sbtinfodetallecash)', Comentarios: 'Listado de cabezales de los resúmenes.' }];
  errors     = [{ Código: '1030701', Descripción: 'El Servicio no existe.' }, { Código: '1030704', Descripción: 'Id de contrato cliente desconocido.' }, { Código: '1030706', Descripción: 'El convenio no está activo.' }, { Código: '1030762', Descripción: 'El servicio no es de recaudos.' }, { Código: '1030763', Descripción: 'Debe indicar el identificador de la deuda.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.ObtenerDeuda>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:contratoId>13</bts:contratoId>
         <bts:servicio>600</bts:servicio>
         <bts:deudaId>42525261</bts:deudaId>
         <bts:sdtValorCampoCash>
            <bts:sBTValorCampoCash>
               <bts:tag>CSMD006IMP</bts:tag>
               <bts:valor></bts:valor>
            </bts:sBTValorCampoCash>
         </bts:sdtValorCampoCash>
      </bts:BTCASHManagement.ObtenerDeuda>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?ObtenerDeuda=\' \
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
    "contratoId": 13,
    "servicio": 600,
    "deudaId": 42525261,
    "sdtValorCampoCash": {
      "sBTValorCampoCash": {
      "tag": "CSMD006IMP",
      "valor": ""
      }
    }
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.ObtenerDeudaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <sdtInfoDetalleCash>
            <BTInfoDetalleCASH>
               <detalleOrden>2</detalleOrden>
               <ordenId>293</ordenId>
               <valoresDetalle>
                  <SdtsBTValorCampoCASH>
                     <tag>CSMD006IMP</tag>
                     <valor>100.00</valor>
                  </SdtsBTValorCampoCASH>
               </valoresDetalle>
            </BTInfoDetalleCASH>
         </sdtInfoDetalleCash>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-19</Fecha>
            <Hora>12:22:16</Hora>
            <Numero>26139</Numero>
            <Servicio>BTCASHManagement.ObtenerDeuda</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.ObtenerDeudaResponse>
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
    "sdtInfoDetalleCash": {
      "BTInfoDetalleCASH": {
         "detalleOrden": 2,
         "ordenId": 293,
         "valoresDetalle": {
            "SdtsBTValorCampoCASH": {
               "tag": "CSMD006IMP",
               "valor": 100
            }
         }
      }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.ObtenerDeuda",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTValorCampoCASH', fields: [{ Nombre: 'tag', Tipo: 'String', Comentarios: 'Tag del campo CASH.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor del campo CASH.' }] }];
}
