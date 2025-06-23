import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularLibreAmortizacion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularLibreAmortizacionComponent1750713394921 {
  pageTitle        = 'Simular Libre Amortización';
  description      = `Método para simular el alta de un préstamo libre amortización.`;
  pubName    = 'BTPrestamos.SimularLibreAmortizacion';
  programa   = 'RBTPG231';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPrestamo', Tipo: '[sBTPrestamoAltaLA](#sbtprestamoaltala)', Comentarios: 'Datos de la simulación.' }, { Nombre: 'generaCuotaInteres', Tipo: 'String', Comentarios: 'Indica si se generan cuotas de intereses. [Hidden: Valores \'S\'/\'N\'].' }];
  outputData = [{ Nombre: 'sdtSimulacion', Tipo: '[sBTSimulacionPrestamoLA](#sbtsimulacionprestamola)', Comentarios: 'Datos del préstamo simulado.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de producto.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador.' }, { Codigo: '30004', Descripcion: 'El Identificador único de Producto es incorrecto.' }, { Codigo: '30005', Descripcion: 'No se recibió la Fecha de Primer Pago desde el origen.' }, { Codigo: '30006', Descripcion: 'No se recibió el Monto de Capital desde el origen.' }, { Codigo: '31001', Descripcion: 'La simulación no está vigente.' }, { Codigo: '31002', Descripcion: 'La simulación no existe.' }, { Codigo: '40001', Descripcion: 'La Cuenta indicada es incorrecta..' }, { Codigo: '40012', Descripcion: 'La Fecha de Primer Pago indicada es menor a la Fecha Valor.' }, { Codigo: '40013', Descripcion: 'La Fecha de Vencimiento indicada es menor a la Fecha Valor.' }, { Codigo: '40014', Descripcion: 'La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento.' }, { Codigo: '40015', Descripcion: 'El Plazo Total indicado es incorrecto.' }, { Codigo: '40016', Descripcion: 'La Cantidad de Cuotas indicada es menor al mínimo permitido.' }, { Codigo: '40017', Descripcion: 'La Cantidad de Cuotas indicada es mayor al máximo permitido.' }, { Codigo: '40018', Descripcion: 'La Cantidad de Cuotas indicada es incorrecta.' }, { Codigo: '40019', Descripcion: 'La Cantidad de Cuotas indicada no está preseteada.' }, { Codigo: '40020', Descripcion: 'El período entre Cuotas indicado es menor al mínimo permitido.' }, { Codigo: '40021', Descripcion: 'El período entre Cuotas indicado es mayor al máximo permitido.' }, { Codigo: '40022', Descripcion: 'El período entre Cuotas indicado es incorrecto.' }, { Codigo: '40023', Descripcion: 'El período entre Cuotas indicado no está preseteado.' }, { Codigo: '40024', Descripcion: 'El Valor Cuota indicado es incorrecto.' }, { Codigo: '40025', Descripcion: 'El Capital indicado es menor al mínimo permitido.' }, { Codigo: '40026', Descripcion: 'El Capital indicado es mayor al máximo permitido.' }, { Codigo: '40027', Descripcion: 'El Capital indicado es incorrecto.' }, { Codigo: '40037', Descripcion: 'La Clase de Tasa indicada es incorrecta.' }, { Codigo: '40040', Descripcion: 'La Tasa Fija indicada está fuera de tolerancia.' }, { Codigo: '40041', Descripcion: 'La Tasa indicada es mayor a la Tasa de Usura.' }, { Codigo: '40048', Descripcion: 'El período indicado es incorrecto.' }, { Codigo: '40049', Descripcion: 'El Tipo de Tasa indicado es incorrecto.' }, { Codigo: '40054', Descripcion: 'La Tasa indicada es incorrecta.' }, { Codigo: '40071', Descripcion: 'El Plazo Total de la Operación es mayor al máximo permitido.' }, { Codigo: '40072', Descripcion: 'El Plazo Total de la Operación es menor al mínimo permitido.' }, { Codigo: '40076', Descripcion: 'El Producto indicado no está Preseteado.' }, { Codigo: '40147', Descripcion: 'No se cumple el período mínimo entre Fecha Valor y Fecha de Primer pago.' }, { Codigo: '40148', Descripcion: 'El Capital indicado debe ser mayor al Valor Cuota.' }, { Codigo: '40149', Descripcion: 'No se cumple el período máximo entre Fecha Valor y Fecha de Primer pago.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularLibreAmortizacion>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>fe9c2c642d4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtPrestamo>
            <bts:productoUId>75</bts:productoUId>
            <bts:monto>10000</bts:monto>
            <bts:clienteUId>221</bts:clienteUId>
            <bts:actividad>1111</bts:actividad>
            <bts:periodoCuotas/>
            <bts:cantidadCuotas>?</bts:cantidadCuotas>
            <bts:tasa/>
            <bts:cuotasInteres/>
            <bts:pizarra/>
            <bts:cuotasCapital>
                <bts:sBTCuotaPrestamoAlta>
                    <bts:fechaPago>2020-04-15</bts:fechaPago>
                    <bts:importe>3000</bts:importe>
                </bts:sBTCuotaPrestamoAlta>
                <bts:sBTCuotaPrestamoAlta>
                    <bts:fechaPago>2020-05-15</bts:fechaPago>
                    <bts:importe>3000</bts:importe>
                </bts:sBTCuotaPrestamoAlta>
                <bts:sBTCuotaPrestamoAlta>
                    <bts:fechaPago>2020-06-15</bts:fechaPago>
                    <bts:importe>4000</bts:importe>
                </bts:sBTCuotaPrestamoAlta>
            </bts:cuotasCapital>
         </bts:sdtPrestamo>
      </bts:BTPrestamos.SimularLibreAmortizacion>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularLibreAmortizacion \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
        "Btinreq": {
          "Device": "AV",
          "Usuario": "MINSTALADOR",
          "Canal": "BTDIGITAL",
          "Token": "658fcb0b034A8B5C60A82434"
        },
        "sdtPrestamo": {
          "productoUId": "75",
          "monto": "10000",
          "clienteUId": "221",
          "actividad": "1111",
          "cantidadCuotas": "?",
          "cuotasCapital": {
            "sBTCuotaPrestamoAlta": [
              {
                "fechaPago": "2020-04-15",
                "importe": "3000"
              },
              {
                "fechaPago": "2020-05-15",
                "importe": "3000"
              },
              {
                "fechaPago": "2020-06-15",
                "importe": "4000"
              }
            ]
          }
        }
      }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularLibreAmortizacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>fe9c2c642d4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-04-15</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>160.74</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>160.74</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-04-15</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>3000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>217.73</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>3217.73</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-05-15</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>102.21</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>102.21</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-05-15</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>3000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>216.38</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>3216.38</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-06-15</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>60.37</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>60.37</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-06-15</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>4000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>215.03</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>4215.03</cuota>
               </sBTCuotaSimulacion>
            </cronograma>
            <fechaValor>2020-03-13</fechaValor>
            <capital>10000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <impuestos>0.00</impuestos>
            <intereses>323.32</intereses>
            <tasaNominalAnual>17.522024</tasaNominalAnual>
            <totalPrestamo>10000.00</totalPrestamo>
            <tasaEfectivaAnual>19.000000</tasaEfectivaAnual>
            <operacionUId>682</operacionUId>
            <tasa>19.000000</tasa>
            <fechaPrimerPago>2020-04-15</fechaPrimerPago>
            <fechaVencimiento>2020-06-15</fechaVencimiento>
            <plazo>0</plazo>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>0</productoUId>
               <nombre>PRÉSTAMOS CONSUMO, Amortización Libre TF</nombre>
            </producto>
            <comisiones>0.00</comisiones>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>12993</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularLibreAmortizacion</Servicio>
            <Requerimiento/>
            <Fecha>2019-03-06</Fecha>
            <Hora>13:00:00</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularLibreAmortizacionResponse>
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
        "otrosConceptos": {
            "sBTConcepto": []
        },
        "capital": "10000.00",
        "fechaValor": "2018-10-30",
        "cronograma": {
            "sBTCuotaSimulacion": [
                {
                    "otrosConceptos": "0.00",
                    "capital": "2937.53",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "I",
                    "cuota": "2937.53",
                    "fechaPago": "2020-04-15",
                    "seguros": "0.00"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "3000.00",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "K",
                    "cuota": "3245.50",
                    "fechaPago": "2020-04-15",
                    "seguros": "245.50"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "102.21",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "I",
                    "cuota": "102.21",
                    "fechaPago": "2020-05-15",
                    "seguros": "0.00"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "3000.00",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "K",
                    "cuota": "3244.15",
                    "fechaPago": "2020-05-15",
                    "seguros": "244.15"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "60.37",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "I",
                    "cuota": "60.37",
                    "fechaPago": "2020-06-15",
                    "seguros": "0.00"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "4000.00",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "K",
                    "cuota": "4242.80",
                    "fechaPago": "2020-06-15",
                    "seguros": "242.80"
                }
            ]
        },
        "impuestos": "0.00",
        "tasaEfectiva": "0.000000",
        "intereses": "3100.11",
        "tasaNominalAnual": "17.522024",
        "totalPrestamo": "10000.00",
        "tasaEfectivaAnual": "19.000000",
        "operacionUId": "761",
        "tasa": "19.000000",
        "fechaPrimerPago": "2020-04-15",
        "fechaVencimiento": "2020-06-15",
        "plazo": "0",
        "producto": {
            "papel": "$",
            "moneda": "$",
            "productoUId": "0",
            "nombre": "PRÉSTAMOS CONSUMO, Amortización Libre TF"
        },
        "comisiones": "0.00"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "13299",
        "Estado": "OK",
        "Servicio": "BTPrestamos.SimularLibreAmortizacion",
        "Fecha": "2019-04-24",
        "Requerimiento": "",
        "Hora": "10:35:16",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPrestamoAltaLA', fields: [{ Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Código de actividad (Destino del crédito).' }, { Nombre: 'cantidadCuotas', Tipo: 'Long', Comentarios: 'Cantidad de cuotas del préstamo.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'cuotasCapital', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cuotas de capital.' }, { Nombre: 'cuotasInteres', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cuotas de intereses.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Capital solicitado.' }, { Nombre: 'periodoCuotas', Tipo: 'Long', Comentarios: 'Período entre vencimiento de cada cuota.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Tipo de pizarra. Si no se indica toma la preseteada para el producto.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa. Si no se indica toma la correspondiente al tipo de pizarra.' }] }, { typeName: 'sBTCuotaPrestamoAlta', fields: [{ Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago de la cuota.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la cuota.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTSimulacionPrestamoLA', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTSimulacionPrestamoLA', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'comisiones', Tipo: 'Double', Comentarios: 'Comisiones.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Impuestos.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
