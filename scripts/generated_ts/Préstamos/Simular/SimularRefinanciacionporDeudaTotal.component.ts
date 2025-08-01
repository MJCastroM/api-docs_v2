import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularRefinanciacionporDeudaTotal',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularRefinanciacionporDeudaTotalComponent1751987199954 {
  pageTitle        = 'Simular Refinanciación por Deuda Total';
  description      = `Método para simular una refinanciación de uno o más préstamos, siendo el capital del nuevo préstamo la suma de la deuda total de los seleccionados.`;
  pubName    = 'BTPrestamos.SimularRefinanciacionDeudaTotal';
  programa   = 'RBTPG234';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Tiempo de validez de la simulación de una ampliación o refinanciación: 

Por defecto es 1440 minutos (24 horas). Este valor se puede modificar ingresando los minutos en el valor específico 1 de la guía especial 20100 para los correlativos 1, 2 y 3 igual cero. 

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtRefinanciacion', Tipo: '[sBTRefinanciacionAlta](#sbtrefinanciacionalta)', Comentarios: 'Datos de simulación.' }, { Nombre: 'accion', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'REFIT\' para este método].' }];
  outputData = [{ Nombre: 'refinanciacionId', Tipo: 'Long', Comentarios: 'Identificador de refinanciación.' }, { Nombre: 'sdtSimulacion', Tipo: '[sBTSimulacionPrestamo](#sbtsimulacionprestamo)', Comentarios: 'Datos del préstamo simulado.' }, { Nombre: 'saldoCapitalCancelacion', Tipo: 'Double', Comentarios: 'Saldo de capital total de los préstamos a consolidar.' }, { Nombre: 'deudaTotalCancelacion', Tipo: 'Double', Comentarios: 'Monto de cancelación total de los préstamos a consolidar.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador de producto.' }, { Código: '30003', Descripción: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }, { Código: '30004', Descripción: 'No se indicaron operaciones a ampliar.' }, { Código: '30005', Descripción: 'No se recuperó la operación para el identificador [Número de Identificador].' }, { Código: '40001', Descripción: 'La Cuenta indicada es incorrecta..' }, { Código: '40012', Descripción: 'La Fecha de Primer Pago indicada es menor a la Fecha Valor.' }, { Código: '40013', Descripción: 'La Fecha de Vencimiento indicada es menor a la Fecha Valor.' }, { Código: '40014', Descripción: 'La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento.' }, { Código: '40015', Descripción: 'El Plazo Total indicado es incorrecto.' }, { Código: '40016', Descripción: 'La Cantidad de Cuotas indicada es menor al mínimo permitido.' }, { Código: '40017', Descripción: 'La Cantidad de Cuotas indicada es mayor al máximo permitido.' }, { Código: '40018', Descripción: 'La Cantidad de Cuotas indicada es incorrecta.' }, { Código: '40019', Descripción: 'La Cantidad de Cuotas indicada no está preseteada.' }, { Código: '40020', Descripción: 'El período entre Cuotas indicado es menor al mínimo permitido.' }, { Código: '40021', Descripción: 'El período entre Cuotas indicado es mayor al máximo permitido.' }, { Código: '40022', Descripción: 'El período entre Cuotas indicado es incorrecto.' }, { Código: '40023', Descripción: 'El período entre Cuotas indicado no está preseteado.' }, { Código: '40024', Descripción: 'El Valor Cuota indicado es incorrecto.' }, { Código: '40025', Descripción: 'El Capital indicado es menor al mínimo permitido.' }, { Código: '40026', Descripción: 'El Capital indicado es mayor al máximo permitido.' }, { Código: '40027', Descripción: 'El Capital indicado es incorrecto.' }, { Código: '40037', Descripción: 'La Clase de Tasa indicada es incorrecta.' }, { Código: '40040', Descripción: 'La Tasa Fija indicada está fuera de tolerancia.' }, { Código: '40041', Descripción: 'La Tasa indicada es mayor a la Tasa de Usura.' }, { Código: '40048', Descripción: 'El período indicado es incorrecto.' }, { Código: '40049', Descripción: 'El Tipo de Tasa indicado es incorrecto.' }, { Código: '40054', Descripción: 'La Tasa indicada es incorrecta.' }, { Código: '40071', Descripción: 'El Plazo Total de la Operación es mayor al máximo permitido.' }, { Código: '40072', Descripción: 'El Plazo Total de la Operación es menor al mínimo permitido.' }, { Código: '40076', Descripción: 'El Producto indicado no está Preseteado.' }, { Código: '40147', Descripción: 'No se cumple el período mínimo entre Fecha Valor y Fecha de Primer Pago.' }, { Código: '40148', Descripción: 'El Capital indicado debe ser mayor al Valor Cuota.' }, { Código: '40149', Descripción: 'No se cumple el período máximo entre Fecha Valor y Fecha de Primer Pago.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularRefinanciacionDeudaTotal>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>18bdf2801e4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtRefinanciacion>
            <bts:productoUId>61</bts:productoUId>
            <bts:clienteUId>221</bts:clienteUId>
            <bts:actividad>1111</bts:actividad>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
            <bts:tasa>0</bts:tasa>
            <bts:fechaPrimerPago/>
            <bts:operaciones>
                <item>541</item>
               </bts:operaciones>
            <bts:pizarra>0</bts:pizarra>
         </bts:sdtRefinanciacion>
      </bts:BTPrestamos.SimularRefinanciacionDeudaTotal>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularRefinanciacionDeudaTotal=\' \
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
    "sdtRefinanciacion": {
        "clienteUId": 4,
        "productoUId": 61,
        "fechaPrimerPago": "2018-12-10",
        "monto": 1000,
        "cantidadCuotas": 12,
        "periodoCuotas": 30,
		"tasa": 0,
		"pizarra": 0,
		"actividad": 11200
		"operaciones": {
			"item":541		 
		}

    }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularRefinanciacionDeudaTotalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>18bdf2801e4A8B5C60A82434</Token>
         </Btinreq>
         <refinanciacionId>122</refinanciacionId>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2020-03-13</fechaValor>
            <capital>34500.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>2541.84</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>26742.34</totalPrestamo>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <valorCuota>2228.53</valorCuota>
            <operacionUId>541</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2020-04-13</fechaPrimerPago>
            <fechaVencimiento>2021-03-13</fechaVencimiento>
            <plazo>0</plazo>
            <producto>
               <papel/>
               <moneda>$</moneda>
               <productoUId>61</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <fechaPago>2017-08-10</fechaPago>
                  <importe>10000.00</importe>
               </sBTCuotaPrestamoAlta>
            </cronograma>
         </sdtSimulacion>
         <saldoCapitalCancelacion>33000.00</saldoCapitalCancelacion>
         <deudaTotalCancelacion>34500.00</deudaTotalCancelacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>4417</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularRefinanciacionDeudaTotal</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Requerimiento/>
            <Hora>15:19:29</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularRefinanciacionDeudaTotalResponse>
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
        "fechaValor": "2018-11-05",
        "capital": "1000.00",
        "tasaEfectiva": "0.000000",
        "intereses": "28.97",
        "tasaNominalAnual": "23.000000",
        "totalPrestamo": "2515.00",
        "valorCuota": "209.58",
        "tasaEfectivaAnual": "25.590075",
        "operacionUId": "261",
        "tasa": "23.000000",
        "fechaPrimerPago": "2018-12-10",
        "fechaVencimiento": "2019-11-10",
        "producto": {
            "papel": "",
            "moneda": "$",
            "productoUId": "0",
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
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
        "Numero": "727",
        "Estado": "OK",
        "Servicio": "BTPrestamos.SimularRefinanciacionDeudaTotal",
        "Fecha": "2017-11-24",
        "Requerimiento": "",
        "Hora": "15:59:42",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTRefinanciacionAlta', fields: [{ Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Código de actividad (Destino del crédito).' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'operaciones', Tipo: 'Long', Comentarios: 'Lista de identificadores de operaciones a cancelar.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Tipo de pizarra. Si no se indica toma la preseteada para el producto.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo de la operación.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa. Si no se indica toma la correspondiente al tipo de pizarra.' }] }, { typeName: 'sBTSimulacionPrestamo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del préstamo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTCuotaPrestamoAlta', fields: [{ Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago de la cuota.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la cuota.' }] }];
}
