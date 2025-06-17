import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerDeudaPrstamoCastigado',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDeudaPrestamoCastigadoComponent {
  pageTitle = 'Obtener Deuda Prestamo Castigado';
  description = `Metodo para obtener la deuda de un prestamo castigado.`;
  pubName    = 'BTPrestamos.ObtenerDeudaPrestamoCastigado';
  programa   = 'RBTPG080';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion simulada.' }];
  outputData = [{ Nombre: 'sdtPrestamoCastigado', Tipo: '[sBTPrestamoCastigado](#sbtprestamocastigado)', Comentarios: 'Datos del prestamo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de operacion.' }, { Codigo: '30002', Descripcion: 'No se recupero la operacion para el identificador: [Numero de identificador].' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDeudaPrestamoCastigado>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>908433382F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10164</bts:operacionUId>
      </bts:BTPrestamos.ObtenerDeudaPrestamoCastigado>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDeudaPrestamoCastigado=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9' \
  -d '{
	"Btinreq": {
		"Device": "AC",
		"Usuario": "BANTOTAL",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "908433382F955E77534D3E02"
	},
    "operacionUId": 10164
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDeudaPrestamoCastigadoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>908433382F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPrestamoCastigado>
            <interes>0.00</interes>
            <interesSuspenso>0.00</interesSuspenso>
            <mora>0.00</mora>
            <moraSuspenso>0.00</moraSuspenso>
            <seguros>0.00</seguros>
            <saldoCapital>10456.01</saldoCapital>
         </sdtPrestamoCastigado>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerDeudaPrestamoCastigado</Servicio>
            <Fecha>2020-04-13</Fecha>
            <Hora>17:33:24</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7295</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerDeudaPrestamoCastigadoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtPrestamoCastigado": {
        "interes": 0.00,  
        "interesSuspenso": 0.00,  
        "mora": 0.00,  
        "moraSuspenso": 0.00,  
        "seguros": 0.00,  
        "saldoCapital": 10456.01,  
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "951",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDeudaPrestamoCastigado",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "18:34:34",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTPrestamoCastigado', fields: [{ Nombre: 'interes', Tipo: 'Double', Comentarios: 'Interes generado.' }, { Nombre: 'interesSuspenso', Tipo: 'Double', Comentarios: 'Interes suspenso.' }, { Nombre: 'mora', Tipo: 'Double', Comentarios: 'Mora generada.' }, { Nombre: 'moraSuspenso', Tipo: 'Double', Comentarios: 'Mora suspenso.' }, { Nombre: 'saldoCapital', Tipo: 'Double', Comentarios: 'Saldo capital del prestamo.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Seguros.' }] }];
}
