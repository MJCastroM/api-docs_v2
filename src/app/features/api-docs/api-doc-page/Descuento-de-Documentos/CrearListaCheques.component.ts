import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-CrearListaCheques',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearListaChequesComponent1750446218592 {
  pageTitle        = 'Crear Lista Cheques';
  description      = `Método para crear una lista de cheques a descontar.`;
  pubName    = 'BTDescuentoDocumentos.CrearListaCheques';
  programa   = 'RBTPG162';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'sdtListaCheques', Tipo: '[sBTDescuentoCheque](#sbtdescuentocheque)', Comentarios: 'Lista de documentos.' }, { Nombre: 'montoADescontar', Tipo: 'Long', Comentarios: 'Monto total a descontar.' }, { Nombre: 'tasa', Tipo: 'Long', Comentarios: 'Tasa para aplicar.' }, { Nombre: 'porcentajeAforo', Tipo: 'Long', Comentarios: 'Porcentaje de aforo.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }];
  outputData = [{ Nombre: 'listaUId', Tipo: 'Long', Comentarios: 'Identificador de lista.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de producto.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el identificador.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDescuentoDocumentos.CrearListaCheques>
         <bts:Btinreq>             
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1485239356EB8880B52090F2</bts:Token>
            <bts:Device>ES</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>12</bts:clienteUId>
         <bts:productoUId>17</bts:productoUId>
         <bts:sListaCheques>
            <bts:sBTDescuentoCheque>
               <bts:identificacion>1522156151</bts:identificacion>
               <bts:fechaEmision>2018-11-20</bts:fechaEmision>
               <bts:fechaVto>2020-12-20</bts:fechaVto>
               <bts:monto>1000</bts:monto>
               <bts:personaUId>1</bts:personaUId>
               <bts:banco>1</bts:banco>
               <bts:agencia>25634</bts:agencia>
               <bts:plaza>502</bts:plaza>
               <bts:ciudad>CIUDAD</bts:ciudad>
               <bts:domicilio>DOMICILIO</bts:domicilio>
               <bts:telefono>098756022</bts:telefono>
               <bts:tasa>0</bts:tasa>
            </bts:sBTDescuentoCheque>
         </bts:sListaCheques>
         <bts:montoADescontar>1000</bts:montoADescontar>
         <bts:tasa>10</bts:tasa>
         <bts:porcentajeAforo>10</bts:porcentajeAforo>
         <bts:fechaValor>2018-11-20</bts:fechaValor>
      </bts:BTDescuentoDocumentos.CrearListaCheques>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDescuentoDocumentos?CrearListaCheques=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"clienteUId":12,
	"productoUId":17,
	"montoADescontar":1000,
	"tasa":10,
	"porcentajeAforo":10,
	"sListaCheques": {
      "sBTDescuentoCheque": {
         "identificacion": "1522156151",
         "fechaEmision": "2018-11-20",
         "fechaVto": "2020-12-20",
         "monto": "1000",
         "banco": "1",
         "agencia": "25634",
         "plaza": "502",
         "personaUId": "1",
         "ciudad": "CIUDAD",
         "domicilio": "DOMICILIO",
         "telefono": "098756022",
         "tasa": "0"
      }
   }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDescuentoDocumentos.CrearListaChequesResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1485239356EB8880B52090F2</Token>
            <Device>ES</Device>
         </Btinreq>
         <listaUId>75</listaUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTDescuentoDocumentos.CrearLista</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Hora>15:26:20</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>1980</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTDescuentoDocumentos.CrearListaChequesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "listaUId":75,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "727",
        "Estado": "OK",
        "Servicio": "BTDescuentoDocumentos.CrearListaCheques",
        "Fecha": "2017-11-24",
        "Requerimiento": "",
        "Hora": "15:59:42",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDescuentoCheque', fields: [{ Nombre: 'agencia', Tipo: 'Int', Comentarios: 'Agencia.' }, { Nombre: 'banco', Tipo: 'Int', Comentarios: 'Banco.' }, { Nombre: 'ciudad', Tipo: 'String', Comentarios: 'Ciudad.' }, { Nombre: 'domicilio', Tipo: 'String', Comentarios: 'Domicilio.' }, { Nombre: 'fechaEmision', Tipo: 'Date', Comentarios: 'Fecha de emisión del documento.' }, { Nombre: 'fechaVto', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del documento.' }, { Nombre: 'identificacion', Tipo: 'String', Comentarios: 'Identificador del documento.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Monto.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona titular del documento.' }, { Nombre: 'plaza', Tipo: 'Short', Comentarios: 'Plaza.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa a aplicar al documento.' }, { Nombre: 'telefono', Tipo: 'String', Comentarios: 'Teléfono.' }] }];
}
