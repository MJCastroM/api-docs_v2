import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ContratarPrstamo',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarPrestamoComponent {
  // Cabecera e info-card
  pageTitle = 'Contratar Prestamo';
  description = `Metodo para contratar un prestamo de Partner.`;
  pubName    = 'BTPartners.ContratarPrestamo';
  programa   = 'RBTPN008';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['sdtPartner', 'operacionUId', 'cuentaUId', 'operacionAcreditacionUId', 'operacionCobroUId'];
  inputData  = [{ Nombre: 'sdtPartner', Tipo: '[sBTPartnerInReq](#sbtpartnerinreq)', Comentarios: 'Datos del usuario.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'cuentaUId', Tipo: 'Long', Comentarios: 'Identificador unico de la cuenta.' }, { Nombre: 'operacionAcreditacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion de acreditacion.' }, { Nombre: 'operacionCobroUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion de cobro' }];
  outputCols = ['movimientoUId'];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador unico del movimiento' }];
  errorCols  = ['30001', '30002', '30004', '30005', '30006', '30007', '30008', '30009', '30010', '30014', '30015', '30100'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de operacion de prestamo' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de operacion de Acreditacion' }, { Codigo: '30004', Descripcion: 'No se recupero el prestamo para el identificador: [Numero de identificador]' }, { Codigo: '30005', Descripcion: 'No se recupero la operacion para el identificador: [Numero de identificador]' }, { Codigo: '30006', Descripcion: 'No se recibio el identificador de cliente' }, { Codigo: '30007', Descripcion: 'No se recupero la cuenta para el Identificador de cliente: [Numero de identificador]' }, { Codigo: '30008', Descripcion: 'El prestamo no pertenece al cliente' }, { Codigo: '30009', Descripcion: 'La operacion de cobro no pertenece al cliente' }, { Codigo: '30010', Descripcion: 'No se recibio el identificador unico de operacion de cobro' }, { Codigo: '30014', Descripcion: 'No existe una empresa con los datos ingresados' }, { Codigo: '30015', Descripcion: 'No se pudo resolver la empresa del usuario' }, { Codigo: '30100', Descripcion: 'Error en la contabilizacion' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPartners.ContratarPrestamo>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1222A10B1A106FB813BD7AE9</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>3</bts:puntoVentaUId>
            <bts:vendedorUId>56</bts:vendedorUId>
            <bts:partnerUId>23</bts:partnerUId>
         </bts:sdtPartner>
         <bts:operacionUId>32123</bts:operacionUId>
         <bts:cuentaUId>23</bts:cuentaUId>
         <bts:operacionAcreditacionUId>8542</bts:operacionAcreditacionUId>
         <bts:operacionCobroUId>8412</bts:operacionCobroUId>
      </bts:BTPartners.ContratarPrestamo>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ContratarPrestamo' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "3JPL6DC33CD84655A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
   "sdtPartner": {
      "puntoVentaUId": 3,
      "vendedorUId": 56,
      "partnerUId": 23
   },
   "operacionUId": 32123,
   "cuentaUId": 23,
   "operacionAcreditacionUId": 8542,
   "operacionCobroUId": 8412
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPartners.ContratarPrestamoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
		 <movimientoUId>141</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>864</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.ContratarPrestamo</Servicio>
            <Requerimiento/>
            <Fecha>2017-12-18</Fecha>
            <Hora>17:07:19</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ContratarPrestamoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
   "Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
    },
	"movimientoUId": "142",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "868",
        "Estado": "OK",
        "Servicio": "BTPartners.ContratarPrestamo",
        "Requerimiento": "",
        "Fecha": "2017-12-18",
        "Hora": "17:15:28",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'partnerUId', Tipo: 'Int', Comentarios: 'Identificador del Partner.' }, { Nombre: 'puntoVentaUId', Tipo: 'Int', Comentarios: 'Identificador del punto de venta.' }, { Nombre: 'vendedorUId', Tipo: 'Int', Comentarios: 'Identificador del vendedor.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
