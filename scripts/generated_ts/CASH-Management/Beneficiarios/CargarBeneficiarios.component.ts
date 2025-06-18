import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CargarBeneficiarios',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CargarBeneficiariosComponent1750258524688 {
  pageTitle        = 'Cargar Beneficiarios';
  description      = `Método para cargar un archivo con los beneficiarios de los pagos.`;
  pubName          = 'Cargar Beneficiarios';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'contratoId', Tipo: 'Int', Comentarios: 'Identificador del contrato CASH del cliente.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Servicio de pago CASH.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'agendaId', Tipo: 'Short', Comentarios: 'Identificador del tipo de agenda.' }, { Nombre: 'nomArchBeneficiarios', Tipo: 'String', Comentarios: 'Nombre del Archivo de beneficiarios a subir.' }];
  outputData = [{ Nombre: 'archivoId', Tipo: 'Long', Comentarios: 'Identificador de archivo subido.' }, { Nombre: 'lineasCant', Tipo: 'Int', Comentarios: 'Cantidad de líneas del archivo recibido.' }];
  errors     = [{ Codigo: '1030701', Descripcion: 'El Servicio no existe.' }, { Codigo: '1030704', Descripcion: 'Id de contrato cliente desconocido.' }, { Codigo: '1030713', Descripcion: 'El contrato consultado no corresponde a la cuenta recibida.' }, { Codigo: '1030770', Descripcion: 'No se recupero información para la cuenta recibida.' }, { Codigo: '1030774', Descripcion: 'No se recibió Identificador de Cliente ni de Contrato. Por lo menos uno debe tener valor.' }, { Codigo: '1030775', Descripcion: 'No se identifico servicio para la Agenda.' }, { Codigo: '1030776', Descripcion: 'No se identifico la Agenda para la cual se realiza la Carga.' }, { Codigo: '1030702', Descripcion: 'El archivo esta vacío.' }, { Codigo: '1030703', Descripcion: 'No hay información en el archivo.' }, { Codigo: '1030707', Descripcion: 'Error al abrir el archivo.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.CargarBeneficiarios>
         <bts:Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </bts:Btinreq>
         <bts:contratoId>8</bts:contratoId>
         <bts:servicio>240</bts:servicio>
         <bts:clienteUId></bts:clienteUId>
         <bts:agendaId></bts:agendaId>
         <bts:nomArchBeneficiarios>Agenda_8_240.xls</bts:nomArchBeneficiarios>
      </bts:BTCASHManagement.CargarBeneficiarios>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?CargarBeneficiarios=\' \
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
    "contratoId": 8,
    "servicio": 240,
    "clienteUId": "",
    "agendaId": "",
    "nomArchBeneficiarios": "Agenda_8_240.xls"
  }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.CargarBeneficiariosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <archivoId>322</archivoId>
         <lineasCant>1</lineasCant>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-20</Fecha>
            <Hora>12:20:19</Hora>
            <Numero>26771</Numero>
            <Servicio>BTCASHManagement.CargarBeneficiarios</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.CargarBeneficiariosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "archivoId": 322,
    "lineasCant": 1,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.CargarBeneficiarios",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
