import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerAdhesiones',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerAdhesionesComponent1751987195473 {
  pageTitle        = 'Obtener Adhesiones';
  description      = `Método para obtener las adhesiones de un cliente a una determinada empresa originante.`;
  pubName    = 'BTSNP.ObtenerAdhesiones';
  programa   = 'RBTPG324';
  scope      = 'Argentina';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'empresaOriginante', Tipo: 'String', Comentarios: 'Identificador de la empresa originante.' }];
  outputData = [{ Nombre: 'sdtAdhesiones', Tipo: '[sBTAdhesion](#sbtadhesion)', Comentarios: 'Listado de adhesiones.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió identificador del cliente.' }, { Código: '30002', Descripción: 'No se encontró un cliente para el identificador: [Número de identificador].' }, { Código: '30003', Descripción: 'No se recibió empresa originante.' }, { Código: '40001', Descripción: 'No existe la empresa originante.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSNP.ObtenerAdhesiones>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>e8c844e3a0F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
         <bts:empresaOriginante>3050001626</bts:empresaOriginante>
      </bts:BTSNP.ObtenerAdhesiones>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?ObtenerEmpresasOriginantes\' \
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
		"clienteUId": 4,
		"empresaOriginante": "3050001626"
	}` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSNP.ObtenerAdhesionesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>e8c844e3a0F955E77534D3E0</Token>
         </Btinreq>
         <sdtAdhesiones>
            <sBTAdhesion>
               <CBU2>20004129980018</CBU2>
               <CBU1>02700052</CBU1>
               <estado>PP</estado>
               <prestacion>DEB RIO</prestacion>
               <empresaOriginante>3050001626</empresaOriginante>
               <fechaDeBaja>0001-01-01</fechaDeBaja>
               <clienteUId>4</clienteUId>
               <idCliente>5550101516490000005000</idCliente>
               <fechaDeAlta>2021-06-14</fechaDeAlta>
               <transaccionInfoAd>3</transaccionInfoAd>
               <transaccionCod>38</transaccionCod>
               <dscEmpresaOri>ACE SEGUROS S.A.</dscEmpresaOri>
               <tipoDeDebito>1</tipoDeDebito>
            </sBTAdhesion>
         </sdtAdhesiones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1629</Numero>
            <Servicio>BTSNP.ObtenerAdhesiones</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:11:29</Hora>
         </Btoutreq>
      </BTSNP.ObtenerAdhesionesResponse>
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
    "sdtAdhesiones": {
        "sBTAdhesion": [
            {
                "CBU2": "20004129980018",
                "CBU1": "02700052",
                "estado": "PP",
                "prestacion": "DEB RIO",
                "empresaOriginante": "3050001626",
                "fechaDeBaja": "0001-01-01",
                "clienteUId": 4,
                "idCliente": "5550101516490000005000",
                "fechaDeAlta": "2021-06-14",
                "transaccionInfoAd": 3,
                "transaccionCod": 38,
                "dscEmpresaOri": "ACE SEGUROS S.A.",
                "tipoDeDebito": 1
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1621,
        "Servicio": "BTSNP.ObtenerAdhesiones",
        "Estado": "OK",
        "Fecha": "2021-06-17",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Hora": "12:14:12"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTAdhesion', fields: [{ Nombre: 'CBU1', Tipo: 'String', Comentarios: 'Primer bloque del CBU.' }, { Nombre: 'CBU2', Tipo: 'String', Comentarios: 'Segundo bloque del CBU.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'dscEmpresaOri', Tipo: 'String', Comentarios: 'Descripción empresa originante.' }, { Nombre: 'empresaOriginante', Tipo: 'String', Comentarios: 'Identificador de la empresa originante.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado de la adhesión.' }, { Nombre: 'fechaDeAlta', Tipo: 'Date', Comentarios: 'Fecha de alta' }, { Nombre: 'fechaDeBaja', Tipo: 'Date', Comentarios: 'Fecha de baja.' }, { Nombre: 'idCliente', Tipo: 'String', Comentarios: 'Identificador del Cliente SNP.' }, { Nombre: 'prestacion', Tipo: 'String', Comentarios: 'Identificador de prestación.' }, { Nombre: 'tipoDeDebito', Tipo: 'Byte', Comentarios: 'Tipo de débito (1=Abierto/2=Cerrado).' }, { Nombre: 'transaccionCod', Tipo: 'Byte', Comentarios: 'Código de transacción.' }, { Nombre: 'transaccionInfoAd', Tipo: 'Byte', Comentarios: 'Código de transacción para información adicional.' }] }];
}
