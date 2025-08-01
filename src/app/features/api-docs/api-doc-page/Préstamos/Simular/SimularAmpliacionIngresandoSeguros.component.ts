import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularAmpliacionIngresandoSeguros',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularAmpliacionIngresandoSegurosComponent1751987199812 {
  pageTitle        = 'Simular Ampliación Ingresando Seguros';
  description      = `Método para simular una ampliación de uno o más préstamos ingresando los seguros a aplicar.`;
  pubName    = 'BTPrestamos.SimularAmpliacionIngresandoSeguros';
  programa   = 'RBTPG488';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Tiempo de validez de la simulación de una ampliación o refinanciación: 

Por defecto es 1440 minutos (24 horas). Este valor se puede modificar ingresando los minutos en el valor específico 1 de la guía especial 20100 para los correlativos 1, 2 y 3 igual cero. 

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtAmpliacion', Tipo: '[sBTAmpliacionAlta](#sbtampliacionalta)', Comentarios: 'Datos de simulación.' }, { Nombre: 'sinSeguros', Tipo: 'String', Comentarios: 'Acción a tomar cuando la lista de seguros a aplicar es vacía (S: Simula sin tener en cuenta ningún seguro, N: Simula con los seguros preseteados).' }, { Nombre: 'sdtSeguros', Tipo: '[sBTSegurosSimulacion](#sbtsegurossimulacion)', Comentarios: 'Listado de códigos de seguros a aplicar.' }];
  outputData = [{ Nombre: 'ampliacionId', Tipo: 'Long', Comentarios: 'Identificador de ampliación.' }, { Nombre: 'sdtSimulacion', Tipo: '[sBTSimulacionPrestamo](#sbtsimulacionprestamo)', Comentarios: 'Datos del préstamo simulado.' }, { Nombre: 'deudaTotalCancelacion', Tipo: 'Double', Comentarios: 'Monto de cancelación total de los préstamos a consolidar.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador de producto.' }, { Código: '30003', Descripción: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }, { Código: '30004', Descripción: 'No se indicaron operaciones a ampliar.' }, { Código: '30005', Descripción: 'No se recuperó la operación para el identificador [Número de Identificador].' }, { Código: '40001', Descripción: 'La Cuenta indicada es incorrecta.' }, { Código: '40012', Descripción: 'La Fecha de Primer Pago indicada es menor a la Fecha Valor.' }, { Código: '40013', Descripción: 'La Fecha de Vencimiento indicada es menor a la Fecha Valor.' }, { Código: '40014', Descripción: 'La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento.' }, { Código: '40015', Descripción: 'El Plazo Total indicado es incorrecto.' }, { Código: '40016', Descripción: 'La Cantidad de Cuotas indicada es menor al mínimo permitido.' }, { Código: '40017', Descripción: 'La Cantidad de Cuotas indicada es mayor al máximo permitido.' }, { Código: '40018', Descripción: 'La Cantidad de Cuotas indicada es incorrecta.' }, { Código: '40019', Descripción: 'La Cantidad de Cuotas indicada no está preseteada.' }, { Código: '40020', Descripción: 'El período entre Cuotas indicado es menor al mínimo permitido.' }, { Código: '40021', Descripción: 'El período entre Cuotas indicado es mayor al máximo permitido.' }, { Código: '40022', Descripción: 'El período entre Cuotas indicado es incorrecto.' }, { Código: '40023', Descripción: 'El período entre Cuotas indicado no está preseteado.' }, { Código: '40024', Descripción: 'El Valor Cuota indicado es incorrecto.' }, { Código: '40025', Descripción: 'El Capital indicado es menor al mínimo permitido.' }, { Código: '40026', Descripción: 'El Capital indicado es mayor al máximo permitido.' }, { Código: '40027', Descripción: 'El Capital indicado es incorrecto.' }, { Código: '40037', Descripción: 'La Clase de Tasa indicada es incorrecta.' }, { Código: '40040', Descripción: 'La Tasa Fija indicada está fuera de tolerancia.' }, { Código: '40041', Descripción: 'La Tasa indicada es mayor a la Tasa de Usura.' }, { Código: '40048', Descripción: 'El período indicado es incorrecto.' }, { Código: '40049', Descripción: 'El Tipo de Tasa indicado es incorrecto.' }, { Código: '40054', Descripción: 'La Tasa indicada es incorrecta.' }, { Código: '40071', Descripción: 'El Plazo Total de la Operación es mayor al máximo permitido.' }, { Código: '40072', Descripción: 'El Plazo Total de la Operación es menor al mínimo permitido.' }, { Código: '40076', Descripción: 'El Producto indicado no está Preseteado.' }, { Código: '40147', Descripción: 'No se cumple el período mínimo entre Fecha Valor y Fecha de Primer Pago.' }, { Código: '40148', Descripción: 'El Capital indicado debe ser mayor al Valor Cuota.' }, { Código: '40149', Descripción: 'No se cumple el período máximo entre Fecha Valor y Fecha de Primer Pago.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularAmpliacionIngresandoSeguros>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>72e34bcd9d4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtAmpliacion>
            <bts:productoUId>61</bts:productoUId>
            <bts:monto>20000</bts:monto>
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
         </bts:sdtAmpliacion>
         <bts:sinSeguros>N</bts:sinSeuros>
         <bts:sdtSeguros>
            <bts:sBTSegurosSimulacion>
                <bts:codigo>100</bts:codigo>
            </bts:sBTSegurosSimulacion>
         </bts:sdtSeguros>
      </bts:BTPrestamos.SimularAmpliacionIngresandoSeguros>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularAmpliacionIngresandoSeguros=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "72e34bcd9d4A8B5C60A82434"
	},
   "sdtAmpliacion": {
      "productoUId": 61,
      "monto": 20000,
      "clienteUId": 221,
      "actividad": 1111,
      "periodoCuotas": 30,
      "cantidadCuotas": 12,
      "tasa": 0,
      "fechaPrimerPago": "",
      "operaciones": {
         "item": 541
      },
      "pizarra": 0
   },
   "sinSeguros": "N",
   "sdtSeguros": {
      "sBTSegurosSimulacion": {
         "codigo": 100
      }
   }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularAmpliacionIngresandoSegurosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>72e34bcd9d4A8B5C60A82434</Token>
         </Btinreq>
         <ampliacionId>122</ampliacionId>
         <sdtSimulacion>
            <sBTConceptos>
               <concepto>100</concepto>
               <valor>1500.00</valor>
               <texto>Seguro vida</texto>
            </sBTConceptos>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-01-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-02-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-03-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-04-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-05-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-06-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-07-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-08-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-09-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-10-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-11-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-12-12</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <fechaValor>2020-03-13</fechaValor>
            <capital>37524.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>2541.18</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>26742.34</totalPrestamo>
            <valorCuota>2228.53</valorCuota>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <operacionUId>1</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2020-04-13</fechaPrimerPago>
            <fechaVencimiento>2021-03-13</fechaVencimiento>
            <plazo>0</plazo>
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
            <Servicio>BTPrestamos.SimularAmpliacionIngresandoSeguros</Servicio>
            <Fecha>2019-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>09:23:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularAmpliacionIngresandoSegurosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
	"Btinreq": {
      "Device": "AV",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "72e34bcd9d4A8B5C60A82434"
   },
   "ampliacionId": 122,
   "sdtSimulacion": {
      "sBTConceptos": {
         "concepto": 100,
         "valor": 1500,
         "texto": "Seguro vida"
      },
      "cronograma": {
         "sBTCuotaPrestamoAlta": [
            {
               "importe": 2228.53,
               "fechaPago": "2019-01-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-02-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-03-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-04-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-05-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-06-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-07-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-08-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-09-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-10-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-11-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-12-12"
            }
         ]
      },
      "fechaValor": "2020-03-13",
      "capital": 37524,
      "tasaEfectiva": 0,
      "intereses": 2541.18,
      "tasaNominalAnual": 23,
      "totalPrestamo": 26742.34,
      "valorCuota": 2228.53,
      "tasaEfectivaAnual": 25.590075,
      "operacionUId": 1,
      "tasa": 23,
      "fechaPrimerPago": "2020-04-13",
      "fechaVencimiento": "2021-03-13",
      "plazo": 0,
      "producto": {
      "papel": "$",
      "moneda": "$",
      "productoUId": 61,
      "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
      }
   },
    "Erroresnegocio": {
    },
    "Btoutreq": {
      "Numero": "623",
      "Estado": "OK",
      "Servicio": "BTPrestamos.SimularAmpliacionIngresandoSeguros",
      "Fecha": "2019-11-20",
      "Requerimiento": "1",
      "Hora": "09:23:04",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTAmpliacionAlta', fields: [{ Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Código de actividad (Destino del crédito).' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Capital solicitado.' }, { Nombre: 'operaciones', Tipo: 'Long', Comentarios: 'Lista de identificadores de operaciones a cancelar.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Tipo de pizarra. Si no se indica toma la preseteada para el producto.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo de la operación.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa. Si no se indica toma la correspondiente al tipo de pizarra.' }] }, { typeName: 'sBTSegurosSimulacion', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código de seguro a aplicar.' }] }, { typeName: 'sBTSimulacionPrestamo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del préstamo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTCuotaPrestamoAlta', fields: [{ Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago de la cuota.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la cuota.' }] }];
}
