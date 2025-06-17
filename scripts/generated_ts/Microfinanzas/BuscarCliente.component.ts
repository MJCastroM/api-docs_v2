import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-BuscarCliente',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class BuscarClienteComponent {
  // Cabecera e info-card
  pageTitle = 'Buscar Cliente';
  description = `Metodo para buscar una persona y sus cuentas cliente.`;
  pubName    = 'BTMicrofinanzas.BuscarCliente';
  programa   = 'RBTPG411';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['paisDocumentoId', 'tipoDocumentoId', 'numeroDocumento'];
  inputData  = [{ Nombre: 'paisDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del pais de origen del documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }, { Nombre: 'numeroDocumento', Tipo: 'String', Comentarios: 'Numero de documento de la persona.' }];
  outputCols = ['sdtCuentas'];
  outputData = [{ Nombre: 'sdtCuentas', Tipo: '[sBTCuentasCliente](#sbtcuentascliente)', Comentarios: 'Listado de cuentas de la persona.' }];
  errorCols  = ['30001', '30002', '30003', '30004', '30005', '30006'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador del Pais de documento.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador del Tipo de documento.' }, { Codigo: '30003', Descripcion: 'No se recibio el numero de documento.' }, { Codigo: '30004', Descripcion: 'No existe registro de la Persona.' }, { Codigo: '30005', Descripcion: 'No se pudo obtener identificador unico de la persona.' }, { Codigo: '30006', Descripcion: 'No se pudo obtener identificador unico de la cuenta.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.BuscarCliente>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>419385365CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:paisDocumento>320</bts:paisDocumento>
         <bts:tipoDocumento>1</bts:tipoDocumento>
         <bts:numeroDocumento>2131248150408</bts:numeroDocumento>
      </bts:BTMicrofinanzas.BuscarCliente>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?BuscarCliente \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
        "paisDocumento": "320",
        "tipoDocumento": "1",
        "numeroDocumento": "2131248150408"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.BuscarClienteResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>419385365CD285A89A23FBEE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtCuentas>
            <Cuenta>
               <clienteUId>2</clienteUId>
               <titularidad>
                  <identificador>1</identificador>
                  <descripcion>Titular</descripcion>
               </titularidad>
               <representativo>S</representativo>
            </Cuenta>
         </sdtCuentas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.BuscarCliente</Servicio>
            <Fecha>2019-09-11</Fecha>
            <Hora>11:32:30</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>128</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.BuscarClienteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
        "sdtCuentas": {
          "Cuenta": {
            "clienteUId": "2",
            "titularidad": {
              "identificador": "1",
              "descripcion": "Titular"
            },
            "representativo": "S"
          }
        },
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTMicrofinanzas.BuscarCliente",
          "Fecha": "2019-09-11",
          "Hora": "11:32:30",
          "Requerimiento": "95",
          "Numero": "128",
          "Estado": "OK"
        }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cuenta.' }, { Nombre: 'representativo', Tipo: 'String', Comentarios: 'Indica si es titular representativo (S/N).' }, { Nombre: 'titularidad', Tipo: '[sBTTipoIntegrante](#sbttipointegrante)', Comentarios: 'Tipo de integrante.' }, { Nombre: '### sBTTipoIntegrante', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTTipoIntegrante son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion del integrante.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador del integrante.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
