import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularPlazoFijo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularPlazoFijoComponent1751987199937 {
  pageTitle        = 'Simular Plazo Fijo';
  description      = `Método para simular el alta de un préstamo plazo fijo.`;
  pubName    = 'BTPrestamos.SimularPlazoFijo';
  programa   = 'RBTPG230';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPrestamoPlazoFijo', Tipo: '[sBTPrestamoAltaPF](#sbtprestamoaltapf)', Comentarios: 'Datos de la simulación.' }];
  outputData = [{ Nombre: 'sdtSimulacion', Tipo: '[sBTSimulacionPrestamo](#sbtsimulacionprestamo)', Comentarios: 'Datos del préstamo simulado.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador de producto.' }, { Código: '30003', Descripción: 'No se recuperó la cuenta para el Identificador.' }, { Código: '30004', Descripción: 'El Identificador único de Producto es incorrecto.' }, { Código: '30005', Descripción: 'No se recibió la Fecha de Primer Pago desde el origen.' }, { Código: '30006', Descripción: 'No se recibió el Monto de Capital desde el origen.' }, { Código: '31001', Descripción: 'La simulación no está vigente.' }, { Código: '31002', Descripción: 'La simulación no existe.' }, { Código: '40001', Descripción: 'La Cuenta indicada es incorrecta.' }, { Código: '40012', Descripción: 'La Fecha de Primer Pago indicada es menor a la Fecha Valor.' }, { Código: '40013', Descripción: 'La Fecha de Vencimiento indicada es menor a la Fecha Valor.' }, { Código: '40014', Descripción: 'La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento.' }, { Código: '40015', Descripción: 'El Plazo Total indicado es incorrecto.' }, { Código: '40016', Descripción: 'La Cantidad de Cuotas indicada es menor al mínimo permitido.' }, { Código: '40017', Descripción: 'La Cantidad de Cuotas indicada es mayor al máximo permitido.' }, { Código: '40018', Descripción: 'La Cantidad de Cuotas indicada es incorrecta.' }, { Código: '40019', Descripción: 'La Cantidad de Cuotas indicada no está preseteada.' }, { Código: '40020', Descripción: 'El período entre Cuotas indicado es menor al mínimo permitido.' }, { Código: '40021', Descripción: 'El período entre Cuotas indicado es mayor al máximo permitido.' }, { Código: '40022', Descripción: 'El período entre Cuotas indicado es incorrecto.' }, { Código: '40023', Descripción: 'El período entre Cuotas indicado no está preseteado.' }, { Código: '40024', Descripción: 'El Valor Cuota indicado es incorrecto.' }, { Código: '40025', Descripción: 'El Capital indicado es menor al mínimo permitido.' }, { Código: '40026', Descripción: 'El Capital indicado es mayor al máximo permitido.' }, { Código: '40027', Descripción: 'El Capital indicado es incorrecto.' }, { Código: '40037', Descripción: 'La Clase de Tasa indicada es incorrecta.' }, { Código: '40040', Descripción: 'La Tasa Fija indicada está fuera de tolerancia.' }, { Código: '40041', Descripción: 'La Tasa indicada es mayor a la Tasa de Usura.' }, { Código: '40048', Descripción: 'El período indicado es incorrecto.' }, { Código: '40049', Descripción: 'El Tipo de Tasa indicado es incorrecto.' }, { Código: '40054', Descripción: 'La Tasa indicada es incorrecta.' }, { Código: '40071', Descripción: 'El Plazo Total de la Operación es mayor al máximo permitido.' }, { Código: '40072', Descripción: 'El Plazo Total de la Operación es menor al mínimo permitido.' }, { Código: '40076', Descripción: 'El Producto indicado no está Preseteado.' }, { Código: '40147', Descripción: 'No se cumple el período mínimo entre Fecha Valor y Fecha de Primer Pago.' }, { Código: '40148', Descripción: 'El Capital indicado debe ser mayor al Valor Cuota.' }, { Código: '40149', Descripción: 'No se cumple el período máximo entre Fecha Valor y Fecha de Primer Pago.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularPlazoFijo>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>3252eea5d94A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtPrestamoPlazoFijo>
            <bts:clienteUId>221</bts:clienteUId>
            <bts:monto>10000</bts:monto>
            <bts:tasa/>
            <bts:fechaVencimiento/>
            <bts:plazo>360</bts:plazo>
            <bts:productoUId>79</bts:productoUId>
            <bts:pizarra/>
            <bts:actividad>1111</bts:actividad>
         </bts:sdtPrestamoPlazoFijo>
      </bts:BTPrestamos.SimularPlazoFijo>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularPlazoFijo\' \
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
    "sdtPrestamoPlazoFijo": {
        "clienteUId": 221,
        "productoUId": 79,
        "fechaPrimerPago": "",
        "monto": 10000,
        "plazo": 360,
        "pizarra": 0,
        "tasa": 0,
        "actividad": 1111
    }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularPlazoFijoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>3252eea5d94A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2020-03-13</fechaValor>
            <capital>10000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>1200.00</intereses>
            <tasaNominalAnual>12.000000</tasaNominalAnual>
            <totalPrestamo>11200.00</totalPrestamo>
            <tasaEfectivaAnual>12.000000</tasaEfectivaAnual>
            <valorCuota>11200.00</valorCuota>
            <operacionUId>661</operacionUId>
            <tasa>12.000000</tasa>
            <fechaPrimerPago>2021-03-08</fechaPrimerPago>
            <fechaVencimiento>2021-03-08</fechaVencimiento>
            <plazo>360</plazo>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>0</productoUId>
               <nombre>PRÉSTAMOS CAPITAL DE TRABAJO, Plazo Fijo</nombre>
            </producto>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <fechaPago>2017-08-10</fechaPago>
                  <importe>10000.00</importe>
               </sBTCuotaPrestamoAlta>
            </cronograma>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>12535</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularPlazoFijo</Servicio>
            <Requerimiento/>
            <Fecha>2019-02-25</Fecha>
            <Hora>14:47:13</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularPlazoFijoResponse>
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
        "fechaValor": "2020-03-13",
        "capital": "10000.00",
        "tasaEfectiva": "0.000000",
        "intereses": "1200.00",
        "tasaNominalAnual": "12.000000",
        "totalPrestamo": "11200.00",
        "tasaEfectivaAnual": "12.000000",
        "valorCuota": "11200.00",
        "operacionUId": "662",
        "tasa": "12.000000",
        "fechaPrimerPago": "2021-03-08",
        "fechaVencimiento": "2021-03-08",
        "plazo": "360",
        "producto": {
            "moneda": "$",
            "papel": "$",
            "productoUId": "0",
            "nombre": "PRÉSTAMOS CAPITAL DE TRABAJO, Plazo Fijo"
        }
        "cronograma": {
            "sBTCuotaPrestamoAlta": [
                {
                    "fechaPago": "2017-08-10",
                    "importe": 10000.00
                }
            ]
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "12536",
        "Estado": "OK",
        "Servicio": "BTPrestamos.SimularPlazoFijo",
        "Requerimiento": "",
        "Fecha": "2019-02-25",
        "Hora": "15:13:12",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPrestamoAltaPF', fields: [{ Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Código de actividad (Destino del crédito).' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de Vencimiento (Obligatorio si no se carga plazo).' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Capital solicitado.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Tipo de pizarra. Si no se indica toma la preseteada para el producto.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo (Obligatorio si no se carga Fecha de Vencimiento).' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa. Si no se indica toma la correspondiente al tipo de pizarra.' }] }, { typeName: 'sBTSimulacionPrestamo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del préstamo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTCuotaPrestamoAlta', fields: [{ Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago de la cuota.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la cuota.' }] }];
}
