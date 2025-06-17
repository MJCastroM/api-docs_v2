import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-EliminarIntegrante',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class EliminarIntegranteComponent {
  pageTitle = 'Eliminar Integrante';
  description = `Metodo para eliminar un integrante de una cuenta cliente.`;
  pubName    = 'BTClientes.EliminarIntegrantes';
  programa   = 'RBTPG386';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de persona.' }, { Codigo: '30003', Descripcion: 'No existe cuenta para el identificador unico: [Numero de identificador].' }, { Codigo: '30004', Descripcion: 'No existe persona para el identificador unico: [Numero de identificador].' }, { Codigo: '40001', Descripcion: 'La persona ingresada no integra la cuenta.' }, { Codigo: '40002', Descripcion: 'No se puede realizar esta accion para este tipo de titular.' }, { Codigo: '40003', Descripcion: 'No se pueden realizar cambios de integrantes cuando la cuenta cliente tiene productos activos.' }, { Codigo: '40004', Descripcion: 'No se puede eliminar el titular representativo.' }, { Codigo: '40005', Descripcion: 'No se puede eliminar el representante legal.' }, { Codigo: '40006', Descripcion: 'Error: La Autorizacion a sido negada.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.EliminarIntegrante>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>c2cfd09eff4A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTClientes.EliminarIntegrante>
      <bts:clienteUId>1</bts:clienteUId>
      <bts:personaUId>853</bts:personaUId>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?EliminarIntegrante' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "bc8b678bc44A8B5C60A82434"
    },
    "clienteUId": 1,
    "personaUId": 853
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.EliminarIntegranteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Token>c2cfd09eff4A8B5C60A82434</Token>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16576</Numero>
            <Hora>12:36:58</Hora>
            <Fecha>2022-05-26</Fecha>
            <Servicio>BTClientes.EliminarIntegrante</Servicio>
            <Estado>OK</Estado>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
         </Btoutreq>
      </BTClientes.EliminarIntegranteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "c2cfd09eff4A8B5C60A82434"
    },
    "Erroresnegocio": {
    },
    "Btoutreq": {
        "Numero": "839",
        "Estado": "OK",
        "Servicio": "BTClientes.EliminarIntegrante",
        "Requerimiento": "1",
        "Fecha": "2022-05-12",
        "Hora": "15:35:54",
        "Canal": "BTDIGITAL"
    }
}` }
  };

  structuredTypes = [];
}
