import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularOfertas',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularOfertasComponent1750268696855 {
  pageTitle        = 'Simular Ofertas';
  description      = `Método para simular ofertas del Partner.`;
  pubName    = 'BTPartners.SimularOfertas';
  programa   = 'RBTPN011';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPartner', Tipo: '[sBTPartnerInReq](#sbtpartnerinreq)', Comentarios: 'Datos del usuario.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'textoAux', Tipo: 'String', Comentarios: 'Texto auxiliar [Hidden].' }, { Nombre: 'sdtOfertaInput', Tipo: '[sBTOfertaInput](#sbtofertainput)', Comentarios: 'Datos de entrada de la oferta.' }];
  outputData = [{ Nombre: 'simulacionId', Tipo: 'Long', Comentarios: 'Identificador de la simulación.' }, { Nombre: 'sdtOfertasPrestamo', Tipo: '[sBTOfertaPrestamo](#sbtofertaprestamo)', Comentarios: 'Listado de ofertas de préstamo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de producto.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }, { Codigo: '30004', Descripcion: 'No se recuperó el producto para el Identificador: [Número de Identificador].' }, { Codigo: '30005', Descripcion: 'No se recibió Lista de cuotas a simular.' }, { Codigo: '30007', Descripcion: 'No se recibió Partner ni canal.' }, { Codigo: '30008', Descripcion: 'El Partner no se encuentra habilitado.' }, { Codigo: '30009', Descripcion: 'No existe Partner con ese identificador.' }, { Codigo: '30018', Descripcion: 'No se recibió punto de venta.' }, { Codigo: '30019', Descripcion: 'No se recibió vendedor.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPartners.SimularOfertas>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1222A10B1A106FB813BD7AE9</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>2</bts:puntoVentaUId>
            <bts:vendedorUId>0</bts:vendedorUId>
            <bts:partnerUId>1</bts:partnerUId>
         </bts:sdtPartner>
         <bts:clienteUId>351</bts:clienteUId>
         <bts:sdtOfertaInput>
            <bts:pizzarra>0</bts:pizzarra>
            <bts:fechaValor>2023-11-14</bts:fechaValor>
            <bts:productoUId>48</bts:productoUId>
            <bts:monto>8745</bts:monto>
            <bts:comisionesCuota>
               <bts:SdtsBTComisionPrestamo>
                  <bts:porcentaje></bts:porcentaje>
                  <bts:descripcion></bts:descripcion>
                  <bts:importe></bts:importe>
                  <bts:codigo></bts:codigo>
               </bts:SdtsBTComisionPrestamo>
            </bts:comisionesCuota>
            <bts:periodoCuotas>35</bts:periodoCuotas>
            <bts:diaPago>14</bts:diaPago>
            <bts:ballon></bts:ballon>
            <bts:tasa>36</bts:tasa>
            <bts:cuotas>
               <bts:Int></bts:Int>
            </bts:cuotas>
            <bts:fechaPrimerPago>2023-11-14</bts:fechaPrimerPago>
            <bts:cuotasExtraordinarias>
               <bts:SdtsBTCuotaExtraordinaria>
                  <bts:mes></bts:mes>
                  <bts:porcentajeCuota></bts:porcentajeCuota>
               </bts:SdtsBTCuotaExtraordinaria>
            </bts:cuotasExtraordinarias>
            <bts:seguros>
               <bts:SdtsBTSeguroPrestamo>
                  <bts:porcentaje></bts:porcentaje>
                  <bts:descripcion></bts:descripcion>
                  <bts:tipo></bts:tipo>
                  <bts:importe></bts:importe>
                  <bts:codigo></bts:codigo>
               </bts:SdtsBTSeguroPrestamo>
            </bts:seguros>
            <bts:comisiones>
               <bts:SdtsBTComisionPrestamo>
                  <bts:porcentaje></bts:porcentaje>
                  <bts:descripcion></bts:descripcion>
                  <bts:importe></bts:importe>
                  <bts:codigo></bts:codigo>
               </bts:SdtsBTComisionPrestamo>
            </bts:comisiones>
         </bts:sdtOfertaInput>
      </bts:BTPartners.SimularOfertas>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?SimularOfertas\' \
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
      "puntoVentaUId": 2,
      "vendedorUId": 0,
      "partnerUId": 1
   },
   "clienteUId": 351,
   "sdtOfertaInput": {
      "pizzarra": 0,
      "fechaValor": "2023-11-14",
      "productoUId": 48,
      "monto": 8745,
      "comisionesCuota": {
      "SdtsBTComisionPrestamo": {
         "porcentaje": "",
         "descripcion": "",
         "importe": "",
         "codigo": ""
      }
      },
      "periodoCuotas": 35,
      "diaPago": 14,
      "ballon": "",
      "tasa": 36,
      "cuotas": {
      "Int": ""
      },
      "fechaPrimerPago": "2023-11-14",
      "cuotasExtraordinarias": {
      "SdtsBTCuotaExtraordinaria": {
         "mes": "",
         "porcentajeCuota": ""
      }
      },
      "seguros": {
      "SdtsBTSeguroPrestamo": {
         "porcentaje": "",
         "descripcion": "",
         "tipo": "",
         "importe": "",
         "codigo": ""
      }
      },
      "comisiones": {
      "SdtsBTComisionPrestamo": {
         "porcentaje": "",
         "descripcion": "",
         "importe": "",
         "codigo": ""
      }
      }
   }
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPartners.SimularOfertasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <simulacionId>256</simulacionId>
         <sdtOfertasPrestamo>
            <sBTOfertaPrestamo>
               <otrosConceptos>0.00</otrosConceptos>
               <fechaValor>2019-11-25</fechaValor>
               <capital>1000.00</capital>
               <totalComisiones>0.00</totalComisiones>
               <valorCuota>101.81</valorCuota>
               <cantidadCuotas>12</cantidadCuotas>
               <tasa>23.000000</tasa>
               <totalSeguros>0.00</totalSeguros>
               <fechaPrimerPago>2020-05-05</fechaPrimerPago>
               <totalIntereses>221.74</totalIntereses>
               <fechaVencimiento>2021-04-05</fechaVencimiento>
               <tea>25.590075</tea>
               <plazo>497</plazo>
               <totalAPagar>1221.74</totalAPagar>
               <totalImpuestos>0.00</totalImpuestos>
               <cft>25.030000</cft>
            </sBTOfertaPrestamo>
         </sdtOfertasPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>770</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.SimularOfertas</Servicio>
            <Fecha>2017-12-14</Fecha>
            <Requerimiento/>
            <Hora>18:17:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.SimularOfertasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "simulacionId": 256,
   "sdtOfertasPrestamo": {
      "sBTOfertaPrestamo": {
      "otrosConceptos": 0,
      "fechaValor": "2019-11-25",
      "capital": 1000,
      "totalComisiones": 0,
      "valorCuota": 101.81,
      "cantidadCuotas": 12,
      "tasa": 23,
      "totalSeguros": 0,
      "fechaPrimerPago": "2020-05-05",
      "totalIntereses": 221.74,
      "fechaVencimiento": "2021-04-05",
      "tea": 25.590075,
      "plazo": 497,
      "totalAPagar": 1221.74,
      "totalImpuestos": 0,
      "cft": 25.03
      }
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPartners.SimularOfertas",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "17:08:56"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPartnerInReq', fields: [{ Nombre: 'partnerUId', Tipo: 'Int', Comentarios: 'Identificador del Partner.' }, { Nombre: 'puntoVentaUId', Tipo: 'Int', Comentarios: 'Identificador del punto de venta.' }, { Nombre: 'vendedorUId', Tipo: 'Int', Comentarios: 'Identificador del vendedor.' }] }, { typeName: 'sBTOfertaInput', fields: [{ Nombre: 'ballon', Tipo: 'Double', Comentarios: 'Ballon.' }, { Nombre: 'comisiones', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamo)', Comentarios: 'Listado de comisiones.' }, { Nombre: 'comisionesCuota', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamo)', Comentarios: 'Listado de comisiones.' }, { Nombre: 'cuotas', Tipo: 'Int', Comentarios: 'Listado de cuotas.' }, { Nombre: 'cuotasExtraordinarias', Tipo: '[sBTCuotaExtraordinaria](#sbtcuotaextraordinaria)', Comentarios: 'Listado de datos de cuota extraordinaria.' }, { Nombre: 'diaPago', Tipo: 'Byte', Comentarios: 'Dia de pago.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha de valor.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Monto.' }, { Nombre: 'periodoCuotas', Tipo: 'Int', Comentarios: 'Periodo de cuotas.' }, { Nombre: 'pizarra', Tipo: 'Int', Comentarios: 'Pizarra.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'seguros', Tipo: '[sBTSeguroPrestamo](#sbtseguroprestamo)', Comentarios: 'Listado de seguros.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: '### sBTComisionPrestamo', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTComisionPrestamo', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código de comisión.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de la comisión.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la comisión.' }, { Nombre: 'porcentaje', Tipo: 'Double', Comentarios: 'Porcentaje de comisión.' }, { Nombre: '### sBTCuotaExtraordinaria', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTCuotaExtraordinaria', fields: [{ Nombre: 'mes', Tipo: 'Byte', Comentarios: 'Mes.' }, { Nombre: 'porcentajeCuota', Tipo: 'Double', Comentarios: 'Porcentaje de cuota.' }, { Nombre: '### sBTSeguroPrestamo', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTSeguroPrestamo', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código del seguro.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del seguro.' }, { Nombre: 'importeFijo', Tipo: 'Decimal', Comentarios: 'Importe fijo del seguro.' }, { Nombre: 'modificable', Tipo: 'String', Comentarios: 'Indica si es modificable.' }, { Nombre: 'porcentaje', Tipo: 'Decimal', Comentarios: 'Porcentaje del seguro.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo del seguro.' }] }, { typeName: 'sBTOfertaPrestamo', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de las cuotas.' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'cft', Tipo: 'Double', Comentarios: 'CFT del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Monto para otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo para el préstamo.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa del préstamo.' }, { Nombre: 'tea', Tipo: 'Double', Comentarios: 'TEA del préstamo.' }, { Nombre: 'totalAPagar', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'totalComisiones', Tipo: 'Double', Comentarios: 'Monto total para comisiones.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Monto total para impuestos.' }, { Nombre: 'totalIntereses', Tipo: 'Double', Comentarios: 'Monto total para intereses.' }, { Nombre: 'totalSeguros', Tipo: 'Double', Comentarios: 'Monto total para seguros.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }];
}
