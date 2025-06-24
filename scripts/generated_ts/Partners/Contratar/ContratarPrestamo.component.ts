import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ContratarPrestamo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarPrestamoComponent1750713394157 {
  pageTitle        = 'Contratar Préstamo';
  description      = `Método para contratar un préstamo de Partner.`;
  pubName    = 'BTPartners.ContratarPrestamo';
  programa   = 'RBTPN008';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPartner', Tipo: '[sBTPartnerInReq](#sbtpartnerinreq)', Comentarios: 'Datos del usuario.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'cuentaUId', Tipo: 'Long', Comentarios: 'Identificador único de la cuenta.' }, { Nombre: 'operacionAcreditacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación de acreditación.' }, { Nombre: 'operacionCobroUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación de cobro' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único del movimiento' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de operación de préstamo' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de operación de Acreditación' }, { Codigo: '30004', Descripcion: 'No se recuperó el préstamo para el identificador: [Número de identificador]' }, { Codigo: '30005', Descripcion: 'No se recuperó la operación para el identificador: [Número de identificador]' }, { Codigo: '30006', Descripcion: 'No se recibió el identificador de cliente' }, { Codigo: '30007', Descripcion: 'No se recuperó la cuenta para el Identificador de cliente: [Número de identificador]' }, { Codigo: '30008', Descripcion: 'El préstamo no pertenece al cliente' }, { Codigo: '30009', Descripcion: 'La operación de cobro no pertenece al cliente' }, { Codigo: '30010', Descripcion: 'No se recibió el identificador único de operación de cobro' }, { Codigo: '30014', Descripcion: 'No existe una empresa con los datos ingresados' }, { Codigo: '30015', Descripcion: 'No se pudo resolver la empresa del usuario' }, { Codigo: '30100', Descripcion: 'Error en la contabilización' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ContratarPrestamo\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
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
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
</SOAP-ENV:Envelope>`,  
    json: `
{
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
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPartnerInReq', fields: [{ Nombre: 'partnerUId', Tipo: 'Int', Comentarios: 'Identificador del Partner.' }, { Nombre: 'puntoVentaUId', Tipo: 'Int', Comentarios: 'Identificador del punto de venta.' }, { Nombre: 'vendedorUId', Tipo: 'Int', Comentarios: 'Identificador del vendedor.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
