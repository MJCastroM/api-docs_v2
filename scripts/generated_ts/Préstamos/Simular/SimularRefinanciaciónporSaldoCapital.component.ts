import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-SimularRefinanciacinporSaldoCapital',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularRefinanciacionporSaldoCapitalComponent {
  // Cabecera e info-card
  pageTitle = 'Simular Refinanciacion por Saldo Capital';
  description = `Metodo para simular una refinanciacion de uno o mas prestamos, siendo el capital del nuevo prestamo la suma de los saldos capitales de los seleccionados.`;
  pubName    = 'BTPrestamos.SimularRefinanciacionSaldoCapital';
  programa   = 'RBTPG234';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['sdtRefinanciacion', 'accion'];
  inputData  = [{ Nombre: 'sdtRefinanciacion', Tipo: '[sBTRefinanciacionAlta](#sbtrefinanciacionalta)', Comentarios: 'Datos de simulacion.' }, { Nombre: 'accion', Tipo: 'String', Comentarios: '[Hidden: Valor fijo 'REFIS' para este metodo].' }];
  outputCols = ['refinanciacionId', 'sdtSimulacion', 'saldoCapitalCancelacion', 'deudaTotalCancelacion'];
  outputData = [{ Nombre: 'refinanciacionId', Tipo: 'Long', Comentarios: 'Identificador de refinanciacion.' }, { Nombre: 'sdtSimulacion', Tipo: '[sBTSimulacionPrestamo](#sbtsimulacionprestamo)', Comentarios: 'Datos del prestamo simulado.' }, { Nombre: 'saldoCapitalCancelacion', Tipo: 'Double', Comentarios: 'Saldo de capital total de los prestamos a consolidar.' }, { Nombre: 'deudaTotalCancelacion', Tipo: 'Double', Comentarios: 'Monto de cancelacion total de los prestamos a consolidar.' }];
  errorCols  = ['30001', '30002', '30003', '30004', '30005', '40001', '40012', '40013', '40014', '40015', '40016', '40017', '40018', '40019', '40020', '40021', '40022', '40023', '40024', '40025', '40026', '40027', '40037', '40040', '40041', '40048', '40049', '40054', '40071', '40072', '40076', '40147', '40148', '40149'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de producto.' }, { Codigo: '30003', Descripcion: 'No se recupero la cuenta para el Identificador: [Numero de Identificador].' }, { Codigo: '30004', Descripcion: 'No se indicaron operaciones a ampliar.' }, { Codigo: '30005', Descripcion: 'No se recupero la operacion para el identificador [Numero de Identificador].' }, { Codigo: '40001', Descripcion: 'La Cuenta indicada es incorrecta.' }, { Codigo: '40012', Descripcion: 'La Fecha de Primer Pago indicada es menor a la Fecha Valor.' }, { Codigo: '40013', Descripcion: 'La Fecha de Vencimiento indicada es menor a la Fecha Valor.' }, { Codigo: '40014', Descripcion: 'La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento.' }, { Codigo: '40015', Descripcion: 'El Plazo Total indicado es incorrecto.' }, { Codigo: '40016', Descripcion: 'La Cantidad de Cuotas indicada es menor al minimo permitido.' }, { Codigo: '40017', Descripcion: 'La Cantidad de Cuotas indicada es mayor al maximo permitido.' }, { Codigo: '40018', Descripcion: 'La Cantidad de Cuotas indicada es incorrecta.' }, { Codigo: '40019', Descripcion: 'La Cantidad de Cuotas indicada no esta preseteada.' }, { Codigo: '40020', Descripcion: 'El periodo entre Cuotas indicado es menor al minimo permitido.' }, { Codigo: '40021', Descripcion: 'El periodo entre Cuotas indicado es mayor al maximo permitido.' }, { Codigo: '40022', Descripcion: 'El periodo entre Cuotas indicado es incorrecto.' }, { Codigo: '40023', Descripcion: 'El periodo entre Cuotas indicado no esta preseteado.' }, { Codigo: '40024', Descripcion: 'El Valor Cuota indicado es incorrecto.' }, { Codigo: '40025', Descripcion: 'El Capital indicado es menor al minimo permitido.' }, { Codigo: '40026', Descripcion: 'El Capital indicado es mayor al maximo permitido.' }, { Codigo: '40027', Descripcion: 'El Capital indicado es incorrecto.' }, { Codigo: '40037', Descripcion: 'La Clase de Tasa indicada es incorrecta.' }, { Codigo: '40040', Descripcion: 'La Tasa Fija indicada esta fuera de tolerancia.' }, { Codigo: '40041', Descripcion: 'La Tasa indicada es mayor a la Tasa de Usura.' }, { Codigo: '40048', Descripcion: 'El periodo indicado es incorrecto.' }, { Codigo: '40049', Descripcion: 'El Tipo de Tasa indicado es incorrecto.' }, { Codigo: '40054', Descripcion: 'La Tasa indicada es incorrecta.' }, { Codigo: '40071', Descripcion: 'El Plazo Total de la Operacion es mayor al maximo permitido.' }, { Codigo: '40072', Descripcion: 'El Plazo Total de la Operacion es menor al minimo permitido.' }, { Codigo: '40076', Descripcion: 'El Producto indicado no esta Preseteado.' }, { Codigo: '40147', Descripcion: 'No se cumple el periodo minimo entre Fecha Valor y Fecha de Primer Pago.' }, { Codigo: '40148', Descripcion: 'El Capital indicado debe ser mayor al Valor Cuota.' }, { Codigo: '40149', Descripcion: 'No se cumple el periodo maximo entre Fecha Valor y Fecha de Primer Pago.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularRefinanciacionSaldoCapital>
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
      </bts:BTPrestamos.SimularRefinanciacionSaldoCapital>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularRefinanciacionSaldoCapital=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
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
		"actividad": 11200,
		"operaciones": {
			"item":541		 
		}

    }
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularRefinanciacionSaldoCapitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <capital>33000.00</capital>
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
            <Servicio>BTPrestamos.SimularRefinanciacionSaldoCapital</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Requerimiento/>
            <Hora>15:19:29</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularRefinanciacionSaldoCapitalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
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
        "Servicio": "BTPrestamos.SimularRefinanciacionSaldoCapital",
        "Fecha": "2017-11-24",
        "Requerimiento": "",
        "Hora": "15:59:42",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Codigo de actividad (Destino del credito).' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'operaciones', Tipo: 'Long', Comentarios: 'Lista de identificadores de operaciones a cancelar.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Tipo de pizarra. Si no se indica toma la preseteada para el producto.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo de la operacion.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa. Si no se indica toma la correspondiente al tipo de pizarra.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTSimulacionPrestamo', Tipo: '', Comentarios: '' }, { Nombre: '### sBTSimulacionPrestamo', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del prestamo.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cronograma del prestamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del prestamo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTProducto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTCuotaPrestamoAlta', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago de la cuota.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la cuota.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
