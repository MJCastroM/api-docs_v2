import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CrearStopDebitparaAdhesionconImporte',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearStopDebitparaAdhesionconImporteComponent1750713393104 {
  pageTitle        = 'Crear Stop Debit para Adhesión con Importe';
  description      = `Método para crear un stop debit con importe dada una adhesión.`;
  pubName    = 'BTSNP.CrearStopDebitParaAdhesionConImporte';
  programa   = 'RBTPG345';
  scope      = 'Argentina';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'prestacion', Tipo: 'String', Comentarios: 'Identificador de prestación.' }, { Nombre: 'empresaOriginante', Tipo: 'String', Comentarios: 'Identificador de la empresa originante.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'idCliente', Tipo: 'String', Comentarios: 'Identificador del Cliente SNP.' }, { Nombre: 'tipoDeDebito', Tipo: 'Byte', Comentarios: 'Tipo de débito (1=Abierto/2=Cerrado).' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'montoMaximoDebito', Tipo: 'String', Comentarios: 'Monto máximo de débito (M=Mensual/F=Factura).' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe del Stop Debit.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de la empresa originante.' }, { Codigo: '30003', Descripcion: 'No se recibió el tipo de débito.' }, { Codigo: '30004', Descripcion: 'No se recibió la prestación.' }, { Codigo: '30005', Descripcion: 'No se recibió el ID del cliente SNP.' }, { Codigo: '30006', Descripcion: 'No se encontró un cliente para el identificador: [Número de identificador].' }, { Codigo: '30007', Descripcion: 'El tipo de débito no es correcto.' }, { Codigo: '40001', Descripcion: 'El código de moneda no es válido.' }, { Codigo: '40002', Descripcion: 'El código de monto máximo de débito es incorrecto.' }, { Codigo: '40003', Descripcion: 'El monto no puede ser nulo.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSNP.CrearStopDebitParaAdhesionConImporte>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>7649e27cf5F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>2</bts:clienteUId>
         <bts:tipoDeDebito>1</bts:tipoDeDebito>
         <bts:empresaOriginante>3050001626</bts:empresaOriginante>
         <bts:prestacion>DEB RIO</bts:prestacion>
         <bts:idCliente>2750101516490000004000</bts:idCliente>
         <bts:moneda>80</bts:moneda>
         <bts:montoMaximoDebito>F</bts:montoMaximoDebito>
         <bts:importe>2000</bts:importe>
      </bts:BTSNP.CrearStopDebitParaAdhesionConImporte>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?CrearStopDebitParaAdhesionConImporte\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
    "Btinreq": {
        "Device": "AC",
        "Usuario": "BANTOTAL",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "7649e27cf5F955E77534D3E0"
    },
    "clienteUId": 2,
    "empresaOriginante": "3050001626",
    "tipoDeDebito": 1,
    "prestacion": "DEB RIO",
    "idCliente": "2750101516490000004000",
    "moneda": 80,
    "montoMaximoDebito": "F",
    "importe": 2000
  }` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSNP.CrearStopDebitParaAdhesionConImporteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>7649e27cf5F955E77534D3E0</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1636</Numero>
            <Servicio>BTSNP.CrearStopDebitParaAdhesionConImporte</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:21:07</Hora>
         </Btoutreq>
      </BTSNP.CrearStopDebitParaAdhesionConImporteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
` }
  };

  structuredTypes = [];
}
