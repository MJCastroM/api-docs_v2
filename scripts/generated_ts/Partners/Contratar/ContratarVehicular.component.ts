import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ContratarVehicular',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarVehicularComponent1750945333725 {
  pageTitle        = 'Contratar Vehicular';
  description      = `Método para contratar un préstamo vehicular.`;
  pubName    = 'BTPartners.ContratarVehicular';
  programa   = 'RBTPNV10';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPartner', Tipo: '[sBTPartnerInReq](#sbtpartnerinreq)', Comentarios: 'Datos del usuario.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'sdtDatosVehiculo', Tipo: '[sBTDatosAltaVeh](#sbtdatosaltaveh)', Comentarios: 'Datos del vehículo.' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único del movimiento.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de operación de préstamo.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador].' }, { Codigo: '30004', Descripcion: 'No se recuperó el préstamo para el identificador: [Número de Identificador].' }, { Codigo: '30005', Descripcion: 'El préstamo no pertenece al cliente.' }, { Codigo: '30007', Descripcion: 'El Partner no se encuentra habilitado.' }, { Codigo: '30009', Descripcion: 'No existe Partner con ese identificador.' }, { Codigo: '30010', Descripcion: 'No se obtuvo la persona para el identificador [Número de Identificador].' }, { Codigo: '30012', Descripcion: 'No se obtuvo el fiador para el identificador [Número de Identificador].' }, { Codigo: '30017', Descripcion: 'No se recibió punto de venta.' }, { Codigo: '30018', Descripcion: 'No se recibió vendedor.' }, { Codigo: '30100', Descripcion: 'Error en la contabilización.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPartners.ContratarVehicular>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9436BF7CB5B5BB404CC6E5A7</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>1</bts:puntoVentaUId>
            <bts:vendedorUId>1</bts:vendedorUId>
            <bts:partnerUId>1</bts:partnerUId>
         </bts:sdtPartner>
         <bts:operacionUId>123</bts:operacionUId>
         <bts:clienteUId>342</bts:clienteUId>
         <bts:sdtDatosVehiculo>
            <bts:color>1</bts:color>
            <bts:datosAdicionales>
               <bts:SdtsBTConcepto>
                  <bts:texto></bts:texto>
                  <bts:valor></bts:valor>
                  <bts:concepto></bts:concepto>
               </bts:SdtsBTConcepto>
            </bts:datosAdicionales>
            <bts:placa>AAA</bts:placa>
            <bts:fiadores>
               <bts:Long></bts:Long>
            </bts:fiadores>
            <bts:numeroMotor>23</bts:numeroMotor>
            <bts:compraPara>62</bts:compraPara>
            <bts:anioConstruccion>2003</bts:anioConstruccion>
         </bts:sdtDatosVehiculo>
      </bts:BTPartners.ContratarVehicular>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ContratarVehicular\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "sdtPartner": {
          "puntoVentaUId": 1,
          "vendedorUId": 1,
          "partnerUId": 1
        },
        "operacionUId": 123,
        "clienteUId": 342,
        "sdtDatosVehiculo": {
          "color": 1,
          "datosAdicionales": {
            "SdtsBTConcepto": {
              "texto": "",
              "valor": "",
              "concepto": ""
            }
          },
          "placa": "AAA",
          "fiadores": {
            "Long": ""
          },
          "numeroMotor": 23,
          "compraPara": 62,
          "anioConstruccion": 2003
        }
    }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPartners.ContratarVehicularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b6a06c447cCD285A89A23FBE</Token>
         </Btinreq>
         <bts:movimientoUId>36</bts:movimientoUId>
         <Btoutreq>
            <Numero>269</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.ContratarVehicular</Servicio>
            <Fecha>2024-05-07</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>12:42:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ContratarVehicularResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "movimientoUId": 36,
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPartners.ContratarVehicular",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPartnerInReq', fields: [{ Nombre: 'partnerUId', Tipo: 'Int', Comentarios: 'Identificador del Partner.' }, { Nombre: 'puntoVentaUId', Tipo: 'Int', Comentarios: 'Identificador del punto de venta.' }, { Nombre: 'vendedorUId', Tipo: 'Int', Comentarios: 'Identificador del vendedor.' }] }, { typeName: 'sBTDatosAltaVeh', fields: [{ Nombre: 'anioConstruccion', Tipo: 'Short', Comentarios: 'Año de construcción.' }, { Nombre: 'color', Tipo: 'Int', Comentarios: 'Número del color.' }, { Nombre: 'compraPara', Tipo: 'Long', Comentarios: 'Propietario del vehículo.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros datos.' }, { Nombre: 'fiadores', Tipo: 'Long', Comentarios: 'Listado de fiadores.' }, { Nombre: 'numeroMotor', Tipo: 'String', Comentarios: 'Número del motor.' }, { Nombre: 'placa', Tipo: 'String', Comentarios: 'Placa.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
