import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerDatosdelPrximoVencimiento',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDatosdelProximoVencimientoComponent {
  pageTitle = 'Obtener Datos del Proximo Vencimiento';
  description = `Metodo para obtener los datos de proximo vencimiento de cuota.`;
  pubName    = 'BTPrestamos.ObtenerDatosProxVencimiento';
  programa   = 'RBTPG526';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de prestamo.' }, { Nombre: 'fechaConsulta', Tipo: 'Date', Comentarios: 'Fecha de consulta.' }, { Nombre: 'modoConsulta', Tipo: 'String', Comentarios: '[Hidden: Valor fijo '' para este metodo].' }];
  outputData = [{ Nombre: 'sdtProxVencimiento', Tipo: '[sBTProximoVto](#sbtproximovto)', Comentarios: 'Datos del proximo vencimiento del prestamo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de operacion.' }, { Codigo: '30002', Descripcion: 'No se recupero prestamo para el identificador: [Numero de Identificador].' }, { Codigo: '30006', Descripcion: 'La Fecha para Consultas es anterior a la de la Operacion.' }, { Codigo: '30007', Descripcion: 'La Operacion no es valida para la Solicitud realizada.' }, { Codigo: '30008', Descripcion: 'La Operacion se encuentra cancelada.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDatosProxVencimiento>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>DF1F942C6EC60E8B95BBEA69</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>9</bts:operacionUId>
         <bts:fechaConsulta>2020-08-09</bts:fechaConsulta>
      </bts:BTPrestamos.ObtenerDatosProxVencimiento>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDatosProxVencimiento' \
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
	"operacionUId": 9,
    "fechaConsulta": "2020-08-09"
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDatosProxVencimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <sdtProxVencimiento>
            <otrosConceptos></otrosConceptos>
            <fechaPrimerIncumplimiento>2020-05-09</fechaPrimerIncumplimiento>
            <deudaVencida>41395.15</deudaVencida>
            <cantCuoImpagas>12</cantCuoImpagas>
            <monto>41395.15</monto>
            <fechaProxVencimiento>2020-08-09</fechaProxVencimiento>
            <cantCuoPagas>0</cantCuoPagas>
            <fechaUltPago/>
            <cantCuoImpVenc>4</cantCuoImpVenc>
            <cuotaVigente>0.00</cuotaVigente>
         </sdtProxVencimiento>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16849</Numero>
            <Servicio>BTPrestamos.ObtenerDatosProxVencimiento</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-26</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>12:27:02</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDatosProxVencimientoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtProxVencimiento": {
      "otrosConceptos": "",
      "fechaPrimerIncumplimiento": "2020-05-09",
      "deudaVencida": 41395.15,
      "cantCuoImpagas": 12,
      "monto": 41395.15,
      "fechaProxVencimiento": "2020-08-09",
      "cantCuoPagas": 0,
      "fechaUltPago": "",
      "cantCuoImpVenc": 4,
      "cuotaVigente": 0
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPrestamos.ObtenerDatosProxVencimiento",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "17:08:56"
   }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTProximoVto', fields: [{ Nombre: 'cantCuoImpVenc', Tipo: 'Int', Comentarios: 'Cantidad de cuotas impagas vencidas.' }, { Nombre: 'cantCuoPagas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas pagas.' }, { Nombre: 'cuotaVigente', Tipo: 'Decimal', Comentarios: 'Cuota vigente.' }, { Nombre: 'deudaVencida', Tipo: 'Decimal', Comentarios: 'Deuda vencida.' }, { Nombre: 'fechaPrimerIncumplimiento', Tipo: 'Date', Comentarios: 'Fecha de primer incumplimiento.' }, { Nombre: 'fechaProxVencimiento', Tipo: 'Date', Comentarios: 'Identificador de informacion adicional.' }, { Nombre: 'fechaUltPago', Tipo: 'Date', Comentarios: 'Fecha de ultimo pago.' }, { Nombre: 'monto', Tipo: 'Decimal', Comentarios: 'Valor de informacion adicional.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Campo', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
