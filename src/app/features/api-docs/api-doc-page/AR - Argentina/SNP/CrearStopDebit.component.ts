import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CrearStopDebit',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearStopDebitComponent1751987195465 {
  pageTitle        = 'Crear Stop Debit';
  description      = `Método para crear un stop debit sin importe.`;
  pubName    = 'BTSNP.CrearStopDebit';
  programa   = 'RBTPG341';
  scope      = 'Argentina';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtStopDebit', Tipo: '[sBTStopDebit](#sbtstopdebit)', Comentarios: 'Datos del alta de Stop Debits.' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió identificador del cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador de la empresa originante.' }, { Código: '30003', Descripción: 'No se recibió el tipo de débito.' }, { Código: '30007', Descripción: 'El tipo de débito no es correcto.' }, { Código: '30008', Descripción: 'No se encontró un cliente para el identificador: [Número de Identificador].' }, { Código: '30009', Descripción: 'Se indicó fecha de inicio del rango de fechas pero no de fin.' }, { Código: '40001', Descripción: 'No existe la empresa originante.' }, { Código: '40002', Descripción: 'No existe el tipo de débito.' }, { Código: '40003', Descripción: 'No existe la prestación.' }, { Código: '40004', Descripción: 'El largo del ID del cliente no es correcto.' }, { Código: '40005', Descripción: 'No existe la moneda.' }, { Código: '40006', Descripción: 'Aviso: ID del cliente no pertenece a la adhesión.' }, { Código: '40007', Descripción: 'Si ingresa tipo de débito, debe ingresar la empresa originante.' }, { Código: '40008', Descripción: 'Si ingresa Prestación, debe ingresar el tipo de débito.' }, { Código: '40009', Descripción: 'Si ingresa el ID Cliente, debe ingresar la prestación.' }, { Código: '40010', Descripción: 'Es posible indicar Fecha de Vencimiento ó Rango de fecha de vencimiento, pero no ambas.' }, { Código: '40011', Descripción: 'La fecha desde debe ser menor o igual que la fecha hasta.' }, { Código: '40012', Descripción: 'Si ingresa monto máximo, debe ingresar empresa, tipo de débito, prestación, cliente, moneda e importe.' }, { Código: '40013', Descripción: 'Si ingresa monto máximo, no debe ingresar fecha de vencimiento ni referencia.' }, { Código: '40014', Descripción: 'Si ingresa Id Cliente, la cantidad de caracteres debe corresponderse con el Largo Id.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSNP.CrearStopDebit>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>bc479c1c0eF955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:sdtStopDebit>
            <bts:prestacion>DEB RIO</bts:prestacion>
            <bts:referencia></bts:referencia>
            <bts:empresaOriginante>3050001626</bts:empresaOriginante>
            <bts:clienteUId>2</bts:clienteUId>
            <bts:idCliente>2750909950770000003000</bts:idCliente>
            <bts:fechaDesde>2019-04-04</bts:fechaDesde>
            <bts:fechaVencimiento></bts:fechaVencimiento>
            <bts:fechaHasta>2019-06-05</bts:fechaHasta>
            <bts:tipoDeDebito>1</bts:tipoDeDebito>
         </bts:sdtStopDebit>
      </bts:BTSNP.CrearStopDebit>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?CrearStopDebit\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"Btinreq": {
        "Device": "AC",
        "Usuario": "BANTOTAL",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "bc479c1c0eF955E77534D3E0"
    },
    "sdtStopDebit": {
        "clienteUId": 2,
        "empresaOriginante": "3050001626",
        "tipoDeDebito": "1",
        "prestacion": "DEB RIO",
        "idCliente": "2750909950770000003000",
        "fechaVencimiento": "",
        "referencia": "",
        "fechaHasta": "2019-06-05",
        "fechaDesde": "2019-04-04"
    }
  }` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSNP.CrearStopDebitResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>bc479c1c0eF955E77534D3E0</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1633</Numero>
            <Servicio>BTSNP.CrearStopDebit</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:18:39</Hora>
         </Btoutreq>
      </BTSNP.CrearStopDebitResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
    "Btinreq": {
        "Device": "AC",
        "Usuario": "BANTOTAL",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "bc479c1c0eF955E77534D3E0"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1618,
        "Estado": "OK",
        "Servicio": "BTSNP.CrearStopDebit",
        "Requerimiento": "",
        "Fecha": "2021-06-16",
        "Hora": "16:46:14",
        "Canal": "BTDIGITAL"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTStopDebit', fields: [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'empresaOriginante', Tipo: 'String', Comentarios: 'Identificador de la empresa originante.' }, { Nombre: 'fechaDesde', Tipo: 'Date', Comentarios: 'Fecha desde para aplicar el Stop Debit.' }, { Nombre: 'fechaHasta', Tipo: 'Date', Comentarios: 'Fecha hasta para aplicar el Stop Debit.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento' }, { Nombre: 'idCliente', Tipo: 'String', Comentarios: 'Identificador del Cliente SNP.' }, { Nombre: 'prestacion', Tipo: 'String', Comentarios: 'Identificador de prestación.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia del débito.' }, { Nombre: 'tipoDeDebito', Tipo: 'Byte', Comentarios: 'Tipo de débito (1=Abierto/2=Cerrado).' }] }];
}
