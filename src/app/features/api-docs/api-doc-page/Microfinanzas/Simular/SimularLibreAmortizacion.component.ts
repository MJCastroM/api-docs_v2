import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularLibreAmortizacion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularLibreAmortizacionComponent1750268696595 {
  pageTitle        = 'Simular Libre Amortización';
  description      = `Método para simular el alta de un préstamo libre amortización para un crédito individual.`;
  pubName    = 'BTMicrofinanzas.SimularLibreAmortizacion';
  programa   = 'RBTPG423';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sBTSimulacionLibreAmortizacion', Tipo: '[sBTSimulacionLibreAmortizacion](#sbtsimulacionlibreamortizacion)', Comentarios: 'Datos de la simulación.' }, { Nombre: 'generaCuotaInteres', Tipo: 'String', Comentarios: '[Hidden: Valores \'S\'/\'N\' Indica si se generan cuotas de intereses].' }];
  outputData = [{ Nombre: 'sdtSimulacion', Tipo: '[sBTSimulacionPrestamoLA](#sbtsimulacionprestamola)', Comentarios: 'Datos del préstamo simulado.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de solicitud.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30003', Descripcion: 'No se recibió el identificador de producto.' }, { Codigo: '30004', Descripcion: 'No se recuperó la cuenta para el identificador.' }, { Codigo: '30005', Descripcion: 'Debe ingresar el monto del préstamo.' }, { Codigo: '30006', Descripcion: 'No se recibió la lista de cuotas de capital.' }, { Codigo: '30007', Descripcion: 'No se recibió la lista de cuotas de interés.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.SimularLibreAmortizacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1001009404CD285A89A23FBE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:sBTSimulacionLibreAmortizacion>
            <bts:solicitudUId>11077</bts:solicitudUId>
            <bts:clienteUId>3</bts:clienteUId>
            <bts:productoUId>21</bts:productoUId>
            <bts:cantidadCuotas>2</bts:cantidadCuotas>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:monto>10000</bts:monto>
            <bts:pizarra></bts:pizarra>
            <bts:tasa></bts:tasa>
            <bts:destinoCredito>2</bts:destinoCredito>
            <bts:cuotasCapital>
                <bts:sBTCuotaPrestamoAlta>
                    <bts:fechaPago>2021-12-30</bts:fechaPago>
                    <bts:importe>2000</bts:importe>
                </bts:sBTCuotaPrestamoAlta>
                <bts:sBTCuotaPrestamoAlta>
                    <bts:fechaPago>2022-01-30</bts:fechaPago>
                    <bts:importe>8000</bts:importe>
                </bts:sBTCuotaPrestamoAlta>
            </bts:cuotasCapital>
            <bts:cuotasInteres/>
         </bts:sBTSimulacionLibreAmortizacion>
      </bts:BTMicrofinanzas.SimularLibreAmortizacion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?SimularLibreAmortizacion \
-H \'cache-control: no-cache\' \
-H \'content-type: application/json\' \
-H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
-d \'{
    ":Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "95",
        "Usuario": "INSTALADOR",
        "Token": "1001009404CD285A89A23FBE",
        "Device": "GP"
        },
        "sBTSimulacionLibreAmortizacion": {
        "solicitudUId": "11077",
        "clienteUId": "3",
        "productoUId": "21",
        "cantidadCuotas": "2",
        "periodoCuotas": "30",
        "monto": "10000",
        "destinoCredito": "2",
        "cuotasCapital": {
            "sBTCuotaPrestamoAlta": [
            {
                "fechaPago": "2021-12-30",
                "importe": "2000"
            },
            {
                "fechaPago": "2022-01-30",
                "importe": "8000"
            }
            ]
        }
    }
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.SimularLibreAmortizacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1001009404CD285A89A23FBE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtSimulacion>
            <operacionUId>21</operacionUId>
            <producto>
               <productoUId>21</productoUId>
               <nombre>PRESTAMOS, CADENA DE VALOR CAFE DIF.</nombre>
               <moneda>Q</moneda>
               <papel>$</papel>
            </producto>
            <fechaValor>2021-11-30</fechaValor>
            <fechaPrimerPago>2021-12-30</fechaPrimerPago>
            <fechaVencimiento>2022-01-30</fechaVencimiento>
            <capital>10000.00</capital>
            <intereses>548.00</intereses>
            <impuestos>0.00</impuestos>
            <comisiones>385.00</comisiones>
            <totalPrestamo>10000.00</totalPrestamo>
            <plazo>0</plazo>
            <tasa>36.000000</tasa>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <tasaEfectivaAnual>42.576089</tasaEfectivaAnual>
            <tasaNominalAnual>36.000000</tasaNominalAnual>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaSimulacion>
                  <fechaPago>2021-12-30</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>300.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>300.00</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2021-12-30</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>2000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>2000.00</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2022-01-30</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>248.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>248.00</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2022-01-30</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>8000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>8000.00</cuota>
               </sBTCuotaSimulacion>
            </cronograma>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.SimularLibreAmortizacion</Servicio>
            <Fecha>2019-11-01</Fecha>
            <Hora>11:36:49</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>1398</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.SimularLibreAmortizacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
   "Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "95",
      "Usuario": "INSTALADOR",
      "Token": "1001009404CD285A89A23FBE",
      "Device": "GP"
      },
      "sdtSimulacion": {
         "operacionUId": "21",
         "producto": {
            "productoUId": "21",
            "nombre": "PRESTAMOS, CADENA DE VALOR CAFE DIF.",
            "moneda": "Q",
            "papel": "$"
         },
         "fechaValor": "2021-11-30",
         "fechaPrimerPago": "2021-12-30",
         "fechaVencimiento": "2022-01-30",
         "capital": "10000.00",
         "intereses": "548.00",
         "impuestos": "0.00",
         "comisiones": "385.00",
         "totalPrestamo": "10000.00",
         "plazo": "0",
         "tasa": "36.000000",
         "tasaEfectiva": "0.000000",
         "tasaEfectivaAnual": "42.576089",
         "tasaNominalAnual": "36.000000",
         "cronograma": {
            "sBTCuotaSimulacion": [
               {
               "fechaPago": "2021-12-30",
               "tipoCuota": "I",
               "capital": "300.00",
               "intereses": "0.00",
               "seguros": "0.00",
               "impuestos": "0.00",
               "otrosConceptos": "0.00",
               "cuota": "300.00"
               },
               {
               "fechaPago": "2021-12-30",
               "tipoCuota": "K",
               "capital": "2000.00",
               "intereses": "0.00",
               "seguros": "0.00",
               "impuestos": "0.00",
               "otrosConceptos": "0.00",
               "cuota": "2000.00"
               },
               {
               "fechaPago": "2022-01-30",
               "tipoCuota": "I",
               "capital": "248.00",
               "intereses": "0.00",
               "seguros": "0.00",
               "impuestos": "0.00",
               "otrosConceptos": "0.00",
               "cuota": "248.00"
               },
               {
               "fechaPago": "2022-01-30",
               "tipoCuota": "K",
               "capital": "8000.00",
               "intereses": "0.00",
               "seguros": "0.00",
               "impuestos": "0.00",
               "otrosConceptos": "0.00",
               "cuota": "8000.00"
               }
            ]
         }
      },
      "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTMicrofinanzas.SimularLibreAmortizacion",
      "Fecha": "2019-11-01",
      "Hora": "11:36:49",
      "Requerimiento": "95",
      "Numero": "1398",
      "Estado": "OK"
      }
}` }
  };

  structuredTypes = [{ typeName: 'sBTSimulacionLibreAmortizacion', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Long', Comentarios: 'Cantidad de cuotas del préstamo.' }, { Nombre: 'clienteUId*', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'cuotasCapital', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cuotas de capital.' }, { Nombre: 'cuotasInteres', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cuotas de intereses.' }, { Nombre: 'destinoCredito', Tipo: 'Long', Comentarios: 'Código de actividad.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Capital solicitado.' }, { Nombre: 'periodoCuotas', Tipo: 'Long', Comentarios: 'Período entre vencimiento de cada cuota.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Tipo de pizarra. Si no se indica toma la preseteada para el producto.' }, { Nombre: 'productoUId*', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador de instancia Workflow.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa. Si no se indica toma la correspondiente al tipo de pizarra.' }, { Nombre: '### sBTCuotaPrestamoAlta', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTCuotaPrestamoAlta', fields: [{ Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago de la cuota.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la cuota.' }] }, { typeName: 'sBTSimulacionPrestamoLA', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'comisiones', Tipo: 'Double', Comentarios: 'Comisiones.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaSimulacion](#sbtcuotasimulacion)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Impuestos.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Importe otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTCuotaSimulacion', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTCuotaSimulacion', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Monto de capital en la cuota.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'cuota', Tipo: 'Double', Comentarios: 'Importe total de la cuota.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Monto de impuestos en la cuota.' }, { Nombre: 'interes', Tipo: 'Double', Comentarios: 'Monto de intereses en la cuota.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Importe correspondiente a otros conceptos.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Monto de seguros en la cuota.' }, { Nombre: 'tipoCuota', Tipo: 'String', Comentarios: 'Tipo de la cuota (Capital/Interés).' }] }];
}
