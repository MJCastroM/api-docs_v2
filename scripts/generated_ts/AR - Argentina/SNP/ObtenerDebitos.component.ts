import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDebitos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDebitosComponent1750268694101 {
  pageTitle        = 'Obtener Débitos';
  description      = `Método para obtener los débitos de una adhesión, dado el estado ingresado.`;
  pubName    = 'BTSNP.ConsultarDebitos';
  programa   = 'RBTPG335';
  scope      = 'Argentina';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'prestacion', Tipo: 'String', Comentarios: 'Identificador de prestación.' }, { Nombre: 'empresaOriginante', Tipo: 'String', Comentarios: 'Identificador de la empresa originante.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'idCliente', Tipo: 'String', Comentarios: 'Identificador del Cliente SNP.' }, { Nombre: 'tipoDeDebito', Tipo: 'Byte', Comentarios: 'Tipo de débito (1=Abierto/2=Cerrado).' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del débito (PP=Para Procesar/PR=Procesado/RC=Rechazado).' }];
  outputData = [{ Nombre: 'sdtDebitos', Tipo: '[sBTDebito](#sbtdebito)', Comentarios: 'Listado de débitos.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de la empresa originante.' }, { Codigo: '30003', Descripcion: 'No se recibió el tipo de débito.' }, { Codigo: '30004', Descripcion: 'No se recibió la prestación.' }, { Codigo: '30005', Descripcion: 'No se recibió el ID del cliente SNP.' }, { Codigo: '30006', Descripcion: 'No se encontró un cliente para el identificador: [Número de identificador].' }, { Codigo: '30007', Descripcion: 'El tipo de débito no es correcto.' }, { Codigo: '30008', Descripcion: 'El estado recibido no es correcto.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSNP.ConsultarDebitos>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>7649e27cf5F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>2</bts:clienteUId>
         <bts:empresaOriginante>3050001626</bts:empresaOriginante>
         <bts:tipoDeDebito>1</bts:tipoDeDebito>
         <bts:prestacion>DEB RIO</bts:prestacion>
         <bts:idCliente>2750101598490000002000</bts:idCliente>
         <bts:estado>RC</bts:estado>
      </bts:BTSNP.ConsultarDebitos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?ConsultarDebitos\' \
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
		"idCliente": "2750101598490000002000",
		"estado": "RC"
  }` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSNP.ConsultarDebitosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>7649e27cf5F955E77534D3E0</Token>
         </Btinreq>
         <sdtDebitos>
            <sBTDebito>
               <CBU2>80010000898653</CBU2>
               <monedaSigno>$</monedaSigno>
               <estado>RC</estado>
               <prestacion>DEB RIO</prestacion>
               <referencia>015984900000216</referencia>
               <empresaOriginante>3050001626</empresaOriginante>
               <clienteUId>2</clienteUId>
               <idCliente>2750101598490000002000</idCliente>
               <importe>5355.62</importe>
               <monedaId>80</monedaId>
               <fechaVencimiento>2019-11-20</fechaVencimiento>
               <tipoDeDebito>1</tipoDeDebito>
            </sBTDebito>
         </sdtDebitos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1631</Numero>
            <Servicio>BTSNP.ConsultarDebitos</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:13:50</Hora>
         </Btoutreq>
      </BTSNP.ConsultarDebitosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
    "Btinreq": {
        "Device": "AC",
        "Usuario": "BANTOTAL",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "7649e27cf5F955E77534D3E0"
    },
    "sdtDebitos": {
        "sBTDebito": [
            {
                "CBU2": 80010000898653,
                "monedaSigno": "$",
                "estado": "RC",
                "prestacion": "DEB RIO",
                "referencia": "015984900000216",
                "empresaOriginante": "3050001626",
                "clienteUId": 2,
                "idCliente": "2750101598490000002000",
                "importe": 5355.62,
                "monedaId": 80,
                "fechaVencimiento": "2019-11-20",
                "tipoDeDebito": 1
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1625,
        "Servicio": "BTSNP.ConsultarDebitos",
        "Estado": "OK",
        "Fecha": "2021-06-17",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Hora": "17:46:44"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTDebito', fields: [{ Nombre: 'CBU2', Tipo: 'String', Comentarios: 'CBU.' }, { Nombre: 'monedaSigno', Tipo: 'String', Comentarios: 'Signo de la moneda.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del débito (PP=Para Procesar/PR=Procesado/RC=Rechazado).' }, { Nombre: 'prestacion', Tipo: 'String', Comentarios: 'Identificador de prestación.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia del débito.' }, { Nombre: 'empresaOriginante', Tipo: 'String', Comentarios: 'Identificador de la empresa originante.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'idCliente', Tipo: 'String', Comentarios: 'Identificador del Cliente SNP.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de la moneda.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'tipoDeDebito', Tipo: 'Byte', Comentarios: 'Tipo de débito (1=Abierto/2=Cerrado).' }] }];
}
