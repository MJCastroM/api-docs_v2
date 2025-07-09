import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CrearAdhesion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearAdhesionComponent1751987195460 {
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
  errors     = [{ Código: '30001', Descripción: 'No se recibió identificador del cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador de la empresa originante.' }, { Código: '30003', Descripción: 'No se recibió el tipo de débito.' }, { Código: '30004', Descripción: 'No se recibió la prestación.' }, { Código: '30005', Descripción: 'No se recibió el ID del cliente SNP.' }, { Código: '30006', Descripción: 'No se encontró un cliente para el identificador: [Número de Identificador].' }, { Código: '30007', Descripción: 'El tipo de débito no es correcto.' }, { Código: '30008', Descripción: 'No se recibió importe.' }, { Código: '30021', Descripción: 'La operación no corresponde al cliente.' }, { Código: '40001', Descripción: 'El largo del ID no coincide con el esperado.' }, { Código: '40002', Descripción: 'El código de moneda no es válido.' }, { Código: '40003', Descripción: 'La prestación para la empresa seleccionada no está disponible.' }, { Código: '40004', Descripción: 'No existe prestación para la empresa seleccionada.' }, { Código: '40005', Descripción: 'Empresa Originante Inexistente.' }, { Código: '40006', Descripción: 'No se pudieron generar los bloques de CBU a partir de la operación dada.' }, { Código: '40007', Descripción: 'La operación recibida para obtener el CBU no pertenece al cliente especificado.' }, { Código: '40008', Descripción: 'No existe la cuenta.' }, { Código: '40009', Descripción: 'Cuenta bloqueada, no permite la adhesión.' }, { Código: '40010', Descripción: 'El tipo de débito no es correcto.' }, { Código: '40011', Descripción: 'El código de monto máximo de débito es incorrecto.' }, { Código: '40012', Descripción: 'El monto no puede ser nulo.' }, { Código: '40013', Descripción: 'Ya existe un alta activa o pendiente de proceso.' }, { Código: '40014', Descripción: 'Cargar Programa de generación de CBU.' }, { Código: '40102', Descripción: 'Cuenta Vinculada debe ser distinto de cero.' }, { Código: '40104', Descripción: 'Cuenta BT inexistente.' }];

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
