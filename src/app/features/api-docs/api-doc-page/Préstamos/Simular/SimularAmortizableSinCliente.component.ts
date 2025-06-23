import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularAmortizableSinCliente',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularAmortizableSinClienteComponent1750713394871 {
  pageTitle        = 'Simular Amortizable Sin Cliente';
  description      = `Método para simular el alta de un préstamo amortizable sin cliente.`;
  pubName    = 'BTPrestamos.SimularAmortizableSinCliente';
  programa   = 'RBTPG265';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtDatosAmortizable', Tipo: '[sBTDatosAmortizable](#sbtdatosamortizable)', Comentarios: 'Datos de la simulación.' }];
  outputData = [{ Nombre: 'sdtSimulacion', Tipo: '[sBTSimulacionPrestamo](#sbtsimulacionprestamo)', Comentarios: 'Datos del préstamo simulado' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de producto.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador.' }, { Codigo: '30004', Descripcion: 'El Identificador único de Producto es incorrecto.' }, { Codigo: '30005', Descripcion: 'No se recibió la Fecha de Primer Pago desde el origen.' }, { Codigo: '30006', Descripcion: 'No se recibió el Monto de Capital desde el origen.' }, { Codigo: '31001', Descripcion: 'La simulación no está vigente.' }, { Codigo: '31002', Descripcion: 'La simulación no existe.' }, { Codigo: '40001', Descripcion: 'La Cuenta indicada es incorrecta.' }, { Codigo: '40012', Descripcion: 'La Fecha de Primer Pago indicada es menor a la Fecha Valor.' }, { Codigo: '40013', Descripcion: 'La Fecha de Vencimiento indicada es menor a la Fecha Valor.' }, { Codigo: '40014', Descripcion: 'La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento.' }, { Codigo: '40015', Descripcion: 'El Plazo Total indicado es incorrecto.' }, { Codigo: '40016', Descripcion: 'La Cantidad de Cuotas indicada es menor al mínimo permitido.' }, { Codigo: '40017', Descripcion: 'La Cantidad de Cuotas indicada es mayor al máximo permitido.' }, { Codigo: '40018', Descripcion: 'La Cantidad de Cuotas indicada es incorrecta.' }, { Codigo: '40019', Descripcion: 'La Cantidad de Cuotas indicada no está preseteada.' }, { Codigo: '40020', Descripcion: 'El período entre Cuotas indicado es menor al mínimo permitido.' }, { Codigo: '40021', Descripcion: 'El período entre Cuotas indicado es mayor al máximo permitido.' }, { Codigo: '40022', Descripcion: 'El período entre Cuotas indicado es incorrecto.' }, { Codigo: '40023', Descripcion: 'El período entre Cuotas indicado no está preseteado.' }, { Codigo: '40024', Descripcion: 'El Valor Cuota indicado es incorrecto.' }, { Codigo: '40025', Descripcion: 'El Capital indicado es menor al mínimo permitido.' }, { Codigo: '40026', Descripcion: 'El Capital indicado es mayor al máximo permitido.' }, { Codigo: '40027', Descripcion: 'El Capital indicado es incorrecto.' }, { Codigo: '40037', Descripcion: 'La Clase de Tasa indicada es incorrecta.' }, { Codigo: '40040', Descripcion: 'La Tasa Fija indicada está fuera de tolerancia.' }, { Codigo: '40041', Descripcion: 'La Tasa indicada es mayor a la Tasa de Usura.' }, { Codigo: '40048', Descripcion: 'El período indicado es incorrecto.' }, { Codigo: '40049', Descripcion: 'El Tipo de Tasa indicado es incorrecto.' }, { Codigo: '40054', Descripcion: 'La Tasa indicada es incorrecta.' }, { Codigo: '40071', Descripcion: 'El Plazo Total de la Operación es mayor al máximo permitido.' }, { Codigo: '40072', Descripcion: 'El Plazo Total de la Operación es menor al mínimo permitido.' }, { Codigo: '40076', Descripcion: 'El Producto indicado no está Preseteado.' }, { Codigo: '40147', Descripcion: 'No se cumple el período mínimo entre Fecha Valor y Fecha de Primer.' }, { Codigo: '40148', Descripcion: 'El Capital indicado debe ser mayor al Valor Cuota.' }, { Codigo: '40149', Descripcion: 'No se cumple el período máximo entre Fecha Valor y Fecha de Primer.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularAmortizableSinCliente>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>72e34bcd9d4A8B5C60A82434</bts:Token>
            <bts:Device>AV</bts:Device>          
         </bts:Btinreq>
         <bts:sdtDatosAmortizable>
            <bts:monto>10000</bts:monto>
            <bts:productoUId>61</bts:productoUId>
            <bts:fechaPrimerPago>2019-01-12</bts:fechaPrimerPago>
            <bts:pizarra></bts:pizarra>
            <bts:tasa></bts:tasa>
            <bts:actividad>11200</bts:actividad>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
         </bts:sdtDatosAmortizable>
      </bts:BTPrestamos.SimularAmortizableSinCliente>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularAmortizableSinCliente=\' \
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
    "sdtDatosAmortizable": {
        "productoUId": 61,
        "fechaPrimerPago": "2018-12-10",
        "monto": 1000,
        "cantidadCuotas": 12,
        "periodoCuotas": 30,
		"pizarra": 0,
		"tasa": 0,
		"actividad": 11200,
		"periodoCuotas": 30,
		"cantidadCuotas": 12
    }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularAmortizableSinClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>72e34bcd9d4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-01-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-02-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-03-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-04-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-05-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-06-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-07-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-08-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-09-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-10-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-11-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.04</importe>
                  <fechaPago>2019-12-12</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <fechaValor>2018-12-11</fechaValor>
            <capital>10000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>1288.18</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>14328.15</totalPrestamo>
            <valorCuota>1194.01</valorCuota>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <operacionUId>1</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2019-01-12</fechaPrimerPago>
            <fechaVencimiento>2019-12-12</fechaVencimiento>
            <plazo>361</plazo>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>61</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>623</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularAmortizableSinCliente</Servicio>
            <Fecha>2019-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>09:23:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularAmortizableSinClienteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "1",
        "Usuario": "BANTOTAL",
        "Token": "1017966210F955E77534D3E0",
        "Device": "AC"
    },
    "sdtSimulacionPrestamo": {
        "operacionUId": 1,
        "producto": {
            "productoUId": 61,
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF",
            "moneda": "$",
            "papel": "$"
        },
        "capital": 1000.00,
        "valorCuota": 420.44,
        "intereses": 87.11,
        "tasa": 3.052000,
        "tasaEfectiva": 0.000000,
        "tasaEfectivaAnual": 3.052000,
        "tasaNominalAnual": 3.010070,
        "totalPrestamo": 5045.27,
        "fechaValor": "2016-08-15",
        "fechaVencimiento": "2019-11-11",
        "fechaPrimerPago": "2018-12-10",
        "plazo": 1183,
        "otrosConceptos": {
            "sBTConcepto": []
        },
        "cronograma": {
            "sBTCuotaPrestamoAlta": [
                {
                    "fechaPago": "2018-12-10",
                    "importe": 2934.49
                },
                {
                    "fechaPago": "2019-01-10",
                    "importe": 192.14
                },
                {
                    "fechaPago": "2019-02-11",
                    "importe": 192.11
                },
                {
                    "fechaPago": "2019-03-11",
                    "importe": 192.00
                },
                {
                    "fechaPago": "2019-04-10",
                    "importe": 191.98
                },
                {
                    "fechaPago": "2019-05-10",
                    "importe": 191.93
                },
                {
                    "fechaPago": "2019-06-10",
                    "importe": 191.89
                },
                {
                    "fechaPago": "2019-07-10",
                    "importe": 191.83
                },
                {
                    "fechaPago": "2019-08-12",
                    "importe": 191.81
                },
                {
                    "fechaPago": "2019-09-10",
                    "importe": 191.73
                },
                {
                    "fechaPago": "2019-10-10",
                    "importe": 191.69
                },
                {
                    "fechaPago": "2019-11-11",
                    "importe": 191.67
                }
            ]
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTPrestamos.SimularAmortizableSinCliente",
        "Fecha": "2019-11-20",
        "Hora": "11:44:44",
        "Requerimiento": "1",
        "Numero": 7048,
        "Estado": "OK"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatosAmortizable', fields: [{ Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Código de actividad (Destino del crédito).' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Capital solicitado.' }, { Nombre: 'periodoCuotas', Tipo: 'Int', Comentarios: 'Período entre cuotas.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Tipo de pizarra. Si no se indica toma la preseteada para el producto.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa. Si no se indica toma la correspondiente al tipo de pizarra.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTSimulacionPrestamo', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTSimulacionPrestamo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del préstamo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTCuotaPrestamoAlta', fields: [{ Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago de la cuota.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la cuota.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
