import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SolicitarBajadeAdhesion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SolicitarBajadeAdhesionComponent1751987195515 {
  pageTitle        = 'Solicitar Baja de Adhesión';
  description      = `Método para solicitar la baja de la adhesión.`;
  pubName    = 'BTSNP.SolicitarBajaDeAdhesion';
  programa   = 'RBTPG326';
  scope      = 'Argentina';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'prestacion', Tipo: 'String', Comentarios: 'Identificador de prestación.' }, { Nombre: 'empresaOriginante', Tipo: 'String', Comentarios: 'Identificador de la empresa originante.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'idCliente', Tipo: 'String', Comentarios: 'Identificador del Cliente SNP.' }, { Nombre: 'tipoDeDebito', Tipo: 'Byte', Comentarios: 'Tipo de débito (1=Abierto/2=Cerrado).' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió identificador del cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador de la empresa originante.' }, { Código: '30003', Descripción: 'No se recibió el tipo de débito.' }, { Código: '30004', Descripción: 'No se recibió la prestación.' }, { Código: '30005', Descripción: 'No se recibió el ID del cliente SNP.' }, { Código: '30006', Descripción: 'No se encontró un cliente para el identificador:  [Número de identificador].' }, { Código: '30007', Descripción: 'El tipo de débito no es correcto.' }, { Código: '40001', Descripción: 'La adhesión no existe.' }, { Código: '40002', Descripción: 'La adhesión ya está dada de baja.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSNP.SolicitarBajaDeAdhesion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>e8c844e3a0F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>2</bts:clienteUId>
         <bts:empresaOriginante>3050001626</bts:empresaOriginante>
         <bts:tipoDeDebito>1</bts:tipoDeDebito>
         <bts:prestacion>DEB RIO</bts:prestacion>
         <bts:idCliente>2750101459380000006000</bts:idCliente>
      </bts:BTSNP.SolicitarBajaDeAdhesion>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?SolicitarBajaDeAdhesion\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
      "Btinreq": {
        "Device": "AC",
        "Usuario": "BANTOTAL",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "e8c844e3a0F955E77534D3E0"
    },
    "clienteUId": 2,
    "empresaOriginante": "3050001626",
    "tipoDeDebito": 1,
    "prestacion": "DEB RIO",
    "idCliente": "2750101459380000006000"
  }` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSNP.SolicitarBajaDeAdhesionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>e8c844e3a0F955E77534D3E0</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1630</Numero>
            <Servicio>BTSNP.SolicitarBajaDeAdhesion</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:12:29</Hora>
         </Btoutreq>
      </BTSNP.SolicitarBajaDeAdhesionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
    "Btinreq": {
        "Device": "AC",
        "Usuario": "BANTOTAL",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "e8c844e3a0F955E77534D3E0"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1622,
        "Servicio": "BTSNP.SolicitarBajaDeAdhesion",
        "Estado": "OK",
        "Fecha": "2021-06-17",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Hora": "12:27:59"
    }
}` }
  };

  structuredTypes = [];
}
