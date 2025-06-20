import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularOfertasVehicular',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularOfertasVehicularComponent1750446218688 {
  pageTitle        = 'Simular Ofertas Vehicular';
  description      = `Método para simular ofertas de préstamos vehicular.`;
  pubName    = 'BTPartners.SimularOfertasVehicular';
  programa   = 'RBTPNV07';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPartner', Tipo: '[sBTPartnerInReq](#sbtpartnerinreq)', Comentarios: 'Datos del usuario.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'strAux', Tipo: 'String', Comentarios: '[Hidden: Valor fijo vacío para este método].' }, { Nombre: 'sdtDatosVehiculo', Tipo: '[sBTSimulacionVeh](#sbtsimulacionveh)', Comentarios: 'Datos del vehículo.' }, { Nombre: 'sdtDatosOferta', Tipo: '[sBTOfertaInput](#sbtofertainput)', Comentarios: 'Datos de la oferta.' }];
  outputData = [{ Nombre: 'simulacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la simulación.' }, { Nombre: 'sdtOfertas', Tipo: '[sBTOfertaPrestamo](#sbtofertaprestamo)', Comentarios: 'Listado de ofertas del préstamo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de producto.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador].' }, { Codigo: '30004', Descripcion: 'No se recuperó el producto para el Identificador: [Número de Identificador].' }, { Codigo: '30005', Descripcion: 'No se recibió Lista de cuotas a simular.' }, { Codigo: '30006', Descripcion: 'No se recibió partner ni canal.' }, { Codigo: '30007', Descripcion: 'El Partner no se encuentra habilitado.' }, { Codigo: '30008', Descripcion: 'No existe Partner con ese identificador.' }, { Codigo: '30017', Descripcion: 'No se recibió punto de venta.' }, { Codigo: '30018', Descripcion: 'No se recibió vendedor.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPartners.SimularOfertasVehicular>
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
         <bts:clienteUId>342</bts:clienteUId>
         <bts:sdtDatosVehiculo>
            <bts:tipoCambioPref>1</bts:tipoCambioPref>
            <bts:proveedorGps>2</bts:proveedorGps>
            <bts:precio>33</bts:precio>
            <bts:monedaPrecio>1</bts:monedaPrecio>
            <bts:datosAdicionales>
               <bts:SdtsBTConcepto>
                  <bts:texto></bts:texto>
                  <bts:valor></bts:valor>
                  <bts:concepto></bts:concepto>
               </bts:SdtsBTConcepto>
            </bts:datosAdicionales>
            <bts:versionUId>2</bts:versionUId>
            <bts:kitMantenimiento>1</bts:kitMantenimiento>
            <bts:estadoId>1</bts:estadoId>
            <bts:entregaInicial>43</bts:entregaInicial>
            <bts:tipoGps>1</bts:tipoGps>
         </bts:sdtDatosVehiculo>
         <bts:sdtDatosOferta>
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
               <bts:Int>1</bts:Int>
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
         </bts:sdtDatosOferta>
      </bts:BTPartners.SimularOfertasVehicular>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?SimularOfertasVehicular\' \
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
        "clienteUId": 342,
        "sdtDatosVehiculo": {
          "tipoCambioPref": 1,
          "proveedorGps": 2,
          "precio": 33,
          "monedaPrecio": 1,
          "datosAdicionales": {
            "SdtsBTConcepto": {
              "texto": "",
              "valor": "",
              "concepto": ""
            }
          },
          "versionUId": 2,
          "kitMantenimiento": 1,
          "estadoId": 1,
          "entregaInicial": 43,
          "tipoGps": 1
        },
        "sdtDatosOferta": {
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
            "Int": 1
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
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPartners.SimularOfertasVehicularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b6a06c447cCD285A89A23FBE</Token>
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
         <Btoutreq>
            <Numero>269</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.SimularOfertasVehicular</Servicio>
            <Fecha>2024-05-07</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>12:42:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.SimularOfertasVehicularResponse>
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
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPartners.SimularOfertasVehicular",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPartnerInReq', fields: [{ Nombre: 'partnerUId', Tipo: 'Int', Comentarios: 'Identificador del Partner.' }, { Nombre: 'puntoVentaUId', Tipo: 'Int', Comentarios: 'Identificador del punto de venta.' }, { Nombre: 'vendedorUId', Tipo: 'Int', Comentarios: 'Identificador del vendedor.' }] }, { typeName: 'sBTSimulacionVeh', fields: [{ Nombre: 'datosAdicionales', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos adicionales.' }, { Nombre: 'entregaInicial', Tipo: 'Double', Comentarios: 'Entrega inicial.' }, { Nombre: 'estadoId', Tipo: 'Short', Comentarios: 'Identificador del estado.' }, { Nombre: 'kitMantenimiento', Tipo: 'Double', Comentarios: 'Kit de mantenimiento.' }, { Nombre: 'monedaPrecio', Tipo: 'Short', Comentarios: 'Precio moneda.' }, { Nombre: 'precio', Tipo: 'Double', Comentarios: 'Precio.' }, { Nombre: 'proveedorGps', Tipo: 'Int', Comentarios: 'Proveedor del GPS.' }, { Nombre: 'tipoCambioPref', Tipo: 'Double', Comentarios: 'Tipo de cambios.' }, { Nombre: 'tipoGps', Tipo: 'Int', Comentarios: 'Tipo de GPS.' }, { Nombre: 'versionUId', Tipo: 'Long', Comentarios: 'Identificador único de la versión.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTOfertaInput', fields: [{ Nombre: 'ballon', Tipo: 'Double', Comentarios: 'Ballon.' }, { Nombre: 'comisiones', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamo)', Comentarios: 'Listado de comisiones.' }, { Nombre: 'comisionesCuota', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamo)', Comentarios: 'Listado de comisiones.' }, { Nombre: 'cuotas', Tipo: 'Int', Comentarios: 'Listado de cuotas.' }, { Nombre: 'cuotasExtraordinarias', Tipo: '[sBTCuotaExtraordinaria](#sbtcuotaextraordinaria)', Comentarios: 'Listado de datos de cuota extraordinaria.' }, { Nombre: 'diaPago', Tipo: 'Byte', Comentarios: 'Dia de pago.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha de valor.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Monto.' }, { Nombre: 'periodoCuotas', Tipo: 'Int', Comentarios: 'Periodo de cuotas.' }, { Nombre: 'pizarra', Tipo: 'Int', Comentarios: 'Pizarra.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'seguros', Tipo: '[sBTSeguroPrestamo](#sbtseguroprestamo)', Comentarios: 'Listado de seguros.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: '### sBTComisionPrestamo', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTComisionPrestamo', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código de comisión.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de la comisión.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la comisión.' }, { Nombre: 'porcentaje', Tipo: 'Double', Comentarios: 'Porcentaje de comisión.' }, { Nombre: '### sBTCuotaExtraordinaria', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTCuotaExtraordinaria', fields: [{ Nombre: 'mes', Tipo: 'Byte', Comentarios: 'Mes.' }, { Nombre: 'porcentajeCuota', Tipo: 'Double', Comentarios: 'Porcentaje de cuota.' }, { Nombre: '### sBTSeguroPrestamo', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTSeguroPrestamo', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Codigo del seguro.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del seguro.' }, { Nombre: 'importeFijo', Tipo: 'Decimal', Comentarios: 'Importe fijo del seguro.' }, { Nombre: 'modificable', Tipo: 'String', Comentarios: 'Indica si es modificable.' }, { Nombre: 'porcentaje', Tipo: 'Decimal', Comentarios: 'Porcentaje del seguro.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo del seguro.' }] }, { typeName: 'sBTOfertaPrestamo', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de las cuotas.' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'cft', Tipo: 'Double', Comentarios: 'CFT del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Monto para otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo para el préstamo.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa del préstamo.' }, { Nombre: 'tea', Tipo: 'Double', Comentarios: 'TEA del préstamo.' }, { Nombre: 'totalAPagar', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'totalComisiones', Tipo: 'Double', Comentarios: 'Monto total para comisiones.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Monto total para impuestos.' }, { Nombre: 'totalIntereses', Tipo: 'Double', Comentarios: 'Monto total para intereses.' }, { Nombre: 'totalSeguros', Tipo: 'Double', Comentarios: 'Monto total para seguros.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }];
}
