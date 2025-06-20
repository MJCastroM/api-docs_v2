import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CrearAdhesion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearAdhesionComponent1750446218089 {
  pageTitle        = 'Crear Adhesión';
  description      = `Método para crear una adhesión.`;
  pubName    = 'BTSNP.CrearAdhesion';
  programa   = 'RBTPG346';
  scope      = 'Argentina';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'prestacion', Tipo: 'String', Comentarios: 'Identificador de prestación.' }, { Nombre: 'empresaOriginante', Tipo: 'String', Comentarios: 'Identificador de la empresa originante.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'idCliente', Tipo: 'String', Comentarios: 'Identificador del Cliente SNP.' }, { Nombre: 'tipoDeDebito', Tipo: 'Byte', Comentarios: 'Tipo de débito (1=Abierto/2=Cerrado).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'avisoRechazo', Tipo: 'String', Comentarios: '¿Aviso rechazo? (S/N)' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'montoMaximoDebito', Tipo: 'String', Comentarios: 'Monto máximo de débito (M=Mensual/F=Factura)' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe del Stop Debit.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de la empresa originante.' }, { Codigo: '30003', Descripcion: 'No se recibió el tipo de débito.' }, { Codigo: '30004', Descripcion: 'No se recibió la prestación.' }, { Codigo: '30005', Descripcion: 'No se recibió el ID del cliente SNP.' }, { Codigo: '30006', Descripcion: 'No se encontró un cliente para el identificador: [Número de Identificador].' }, { Codigo: '30007', Descripcion: 'El tipo de débito no es correcto.' }, { Codigo: '30008', Descripcion: 'No se recibió importe.' }, { Codigo: '30021', Descripcion: 'La operación no corresponde al cliente.' }, { Codigo: '40001', Descripcion: 'El largo del ID no coincide con el esperado.' }, { Codigo: '40002', Descripcion: 'El código de moneda no es válido.' }, { Codigo: '40003', Descripcion: 'La prestación para la empresa seleccionada no está disponible.' }, { Codigo: '40004', Descripcion: 'No existe prestación para la empresa seleccionada.' }, { Codigo: '40005', Descripcion: 'Empresa Originante Inexistente.' }, { Codigo: '40006', Descripcion: 'No se pudieron generar los bloques de CBU a partir de la operación dada.' }, { Codigo: '40007', Descripcion: 'La operación recibida para obtener el CBU no pertenece al cliente especificado.' }, { Codigo: '40008', Descripcion: 'No existe la cuenta.' }, { Codigo: '40009', Descripcion: 'Cuenta bloqueada, no permite la adhesión.' }, { Codigo: '40010', Descripcion: 'El tipo de débito no es correcto.' }, { Codigo: '40011', Descripcion: 'El código de monto máximo de débito es incorrecto.' }, { Codigo: '40012', Descripcion: 'El monto no puede ser nulo.' }, { Codigo: '40013', Descripcion: 'Ya existe un alta activa o pendiente de proceso.' }, { Codigo: '40014', Descripcion: 'Cargar Programa de generación de CBU.' }, { Codigo: '40102', Descripcion: 'Cuenta Vinculada debe ser distinto de cero.' }, { Codigo: '40104', Descripcion: 'Cuenta BT inexistente.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSNP.CrearAdhesion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>7649e27cf5F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
         <bts:tipoDeDebito>1</bts:tipoDeDebito>
         <bts:empresaOriginante>3050001626</bts:empresaOriginante>
         <bts:prestacion>DEB RIO</bts:prestacion>
         <bts:idCliente>5550101516490000005000</bts:idCliente>
         <bts:operacionUId>6</bts:operacionUId>
         <bts:avisoRechazo>S</bts:avisoRechazo>
         <bts:moneda>80</bts:moneda>
         <bts:montoMaximoDebito>M</bts:montoMaximoDebito>
         <bts:importe>1000</bts:importe>
      </bts:BTSNP.CrearAdhesion>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?CrearAdhesion\' \
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
    "clienteUId": 4,
    "empresaOriginante": "3050001626",
    "tipoDeDebito": 1,
    "prestacion": "DEB RIO",
    "idCliente": "5550101516490000005000",
    "operacionUId": 6,
    "avisoRechazo": "N",
    "moneda": 80,
    "montoMaximoDebito": "M",
    "importe": 1000
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSNP.CrearAdhesionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>7649e27cf5F955E77534D3E0</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1637</Numero>
            <Servicio>BTSNP.CrearAdhesion</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:22:09</Hora>
         </Btoutreq>
      </BTSNP.CrearAdhesionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
` }
  };

  structuredTypes = [];
}
