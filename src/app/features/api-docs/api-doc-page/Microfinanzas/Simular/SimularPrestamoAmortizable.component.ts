import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularPrestamoAmortizable',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularPrestamoAmortizableComponent1751987197897 {
  pageTitle        = 'Simular Amortizable';
  description      = `Método para simular el alta de un préstamo amortizable para un crédito individual.`;
  pubName    = 'BTMicrofinanzas.SimularAmortizable';
  programa   = 'RBTPG422';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sBTSimulacionAmortizable', Tipo: '[sBTSimulacionAmortizable](#sbtsimulacionamortizable)', Comentarios: 'Datos de la simulación.' }];
  outputData = [{ Nombre: 'sdtSimulacion', Tipo: '[sBTSimulacionPrestamo](#sbtsimulacionprestamo)', Comentarios: 'Datos del préstamo simulado.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de la solicitud.' }, { Código: '30002', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30003', Descripción: 'No se recibió el identificador de producto.' }, { Código: '30004', Descripción: 'No se recuperó la cuenta para el Identificador [Número de identificador].' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.SimularAmortizable>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>987391075CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:sBTSimulacionAmortizable>
            <bts:solicitudUId>10896</bts:solicitudUId>
            <bts:clienteUId>7</bts:clienteUId>
            <bts:productoUId>23</bts:productoUId>
            <bts:fechaPrimerPago>2020-12-21</bts:fechaPrimerPago>
            <bts:cantidadCuotas>3</bts:cantidadCuotas>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:monto>30000</bts:monto>
            <bts:pizarra>0</bts:pizarra>
            <bts:tasa>0</bts:tasa>
            <bts:destinoCredito>33</bts:destinoCredito>
            <bts:datosAdicionales/>
         </bts:sBTSimulacionAmortizable>
      </bts:BTMicrofinanzas.SimularAmortizable>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?SimularAmortizable \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
      "sBTSimulacionAmortizable": {
          "solicitudUId": "10896",
          "clienteUId": "7",
          "productoUId": "23",
          "fechaPrimerPago": "2020-12-21",
          "cantidadCuotas": "3",
          "periodoCuotas": "30",
          "monto": "30000",
          "pizarra": "0",
          "tasa": "0",
          "destinoCredito": "33"
        }
      }
    }
  }
}` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.SimularAmortizableResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1571835133CD285A89A23FBE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtSimulacion>
            <operacionUId>15</operacionUId>
            <producto>
               <productoUId>23</productoUId>
               <nombre>HIPOTECARIOS VIVIENDA, VIVIENDA HIPOTECARIO</nombre>
               <moneda>Q</moneda>
               <papel>$</papel>
            </producto>
            <capital>30000.00</capital>
            <valorCuota>10783.16</valorCuota>
            <intereses>2349.48</intereses>
            <tasa>30.000000</tasa>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <tasaEfectivaAnual>34.488882</tasaEfectivaAnual>
            <tasaNominalAnual>30.000000</tasaNominalAnual>
            <totalPrestamo>32349.48</totalPrestamo>
            <fechaValor>2020-10-20</fechaValor>
            <fechaVencimiento>2021-02-20</fechaVencimiento>
            <fechaPrimerPago>2020-12-21</fechaPrimerPago>
            <plazo>123</plazo>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <fechaPago>2020-12-21</fechaPago>
                  <importe>10783.16</importe>
                  <redondeo>0.00</redondeo>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <fechaPago>2021-01-21</fechaPago>
                  <importe>10783.16</importe>
                  <redondeo>0.00</redondeo>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <fechaPago>2021-02-20</fechaPago>
                  <importe>10783.16</importe>
                  <redondeo>0.00</redondeo>
               </sBTCuotaPrestamoAlta>
            </cronograma>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.SimularAmortizable</Servicio>
            <Fecha>2019-10-18</Fecha>
            <Hora>15:48:00</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>1319</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.SimularAmortizableResponse>
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
      "sdtSimulacion": {
          "operacionUId": "15",
          "producto": {
            "productoUId": "23",
            "nombre": "HIPOTECARIOS VIVIENDA, VIVIENDA HIPOTECARIO",
            "moneda": "Q",
            "papel": "$"
          },
          "capital": "30000.00",
          "valorCuota": "10783.16",
          "intereses": "2349.48",
          "tasa": "30.000000",
          "tasaEfectiva": "0.000000",
          "tasaEfectivaAnual": "34.488882",
          "tasaNominalAnual": "30.000000",
          "totalPrestamo": "32349.48",
          "fechaValor": "2020-10-20",
          "fechaVencimiento": "2021-02-20",
          "fechaPrimerPago": "2020-12-21",
          "plazo": "123",
          "cronograma": {
            "sBTCuotaPrestamoAlta": [
              {
                "fechaPago": "2020-12-21",
                "importe": "10783.16",
                "redondeo": "0.00"
              },
              {
                "fechaPago": "2021-01-21",
                "importe": "10783.16",
                "redondeo": "0.00"
              },
              {
                "fechaPago": "2021-02-20",
                "importe": "10783.16",
                "redondeo": "0.00"
              }
            ]
          }
        },
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTMicrofinanzas.SimularAmortizable",
          "Fecha": "2019-10-18",
          "Hora": "15:48:00",
          "Requerimiento": "95",
          "Numero": "1319",
          "Estado": "OK"
        }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTSimulacionAmortizable', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Importe otros conceptos.' }, { Nombre: 'destinoCredito', Tipo: 'Long', Comentarios: 'Código de destino del crédito.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Capital solicitado.' }, { Nombre: 'periodoCuotas', Tipo: 'Int', Comentarios: 'Período entre vencimiento de cada cuota.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Tipo de pizarra. Si no se indica toma la preseteada para el producto.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador de instancia Workflow.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa. Si no se indica toma la correspondiente al tipo de pizarra.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTSimulacionPrestamo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaSimulacion](#sbtcuotasimulacion)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconceptosalida)', Comentarios: 'Importe otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconceptosalida)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConceptoSalida', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTCuotaSimulacion', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Monto de capital en la cuota.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'cuota', Tipo: 'Double', Comentarios: 'Importe total de la cuota.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Monto de impuestos en la cuota.' }, { Nombre: 'interes', Tipo: 'Double', Comentarios: 'Monto de intereses en la cuota.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Importe correspondiente a otros conceptos.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Monto de seguros en la cuota.' }, { Nombre: 'tipoCuota', Tipo: 'String', Comentarios: 'Tipo de la cuota (Capital/Interés).' }] }];
}
