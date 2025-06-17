import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-SimularIngresandoSeguros',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularIngresandoSegurosComponent {
  // Cabecera e info-card
  pageTitle = 'Simular Ingresando Seguros';
  description = `Metodo para simular el alta de un prestamo ingresando los seguros a aplicar.`;
  pubName    = 'BTPrestamos.SimularIngresandoSeguros';
  programa   = 'RBTPG509';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['sdtPrestamoAlta', 'sinSeguros', 'sdtSeguros'];
  inputData  = [{ Nombre: 'sdtPrestamoAlta', Tipo: '[sBTPrestamoAlta](#sbtprestamoalta)', Comentarios: 'Datos de la simulacion.' }, { Nombre: 'sinSeguros', Tipo: 'String', Comentarios: 'Accion a tomar cuando la lista de seguros a aplicar es vacia (S: Simula sin tener en cuenta ningun seguro, N: Simula con los seguros preseteados).' }, { Nombre: 'sdtSeguros', Tipo: '[sBTSegurosSimulacion](#sbtsegurossimulacion)', Comentarios: 'Listado de codigos de seguros a aplicar.' }];
  outputCols = ['sBTSimulacionPrestamo'];
  outputData = [{ Nombre: 'sBTSimulacionPrestamo', Tipo: '[sBTSimulacionPrestamo](#sbtsimulacionprestamo)', Comentarios: 'Datos de simulacion del prestamo.' }];
  errorCols  = ['30001', '30002'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de producto.' }, { Codigo: '30002', Descripcion: 'No se recupero la cuenta para el Identificador: [Numero de identificador].' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularIngresandoSeguros>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>GL</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>01D45E9964612A4C8CCB1055</bts:Token>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta>
            <bts:fechaPrimerPago>2019-01-12</bts:fechaPrimerPago>
            <bts:monto>10000</bts:monto>
            <bts:tasa>0</bts:tasa>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
            <bts:productoUId>61</bts:productoUId>
            <bts:pizarra>0</bts:pizarra>
            <bts:clienteUId>4</bts:clienteUId>
            <bts:actividad>11200</bts:actividad>
         </bts:sdtPrestamoAlta>
         <bts:sinSeguros>N</bts:sinSeuros>
         <bts:sdtSeguros>
            <bts:sBTSegurosSimulacion>
                <bts:codigo>100</bts:codigo>
            </bts:sBTSegurosSimulacion>
         </bts:sdtSeguros>
      </bts:BTPrestamos.SimularIngresandoSeguros>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Device": "GL",
          "Requerimiento": 1,
          "Token": "01D45E9964612A4C8CCB1055"
        },
        "sdtPrestamoAlta": {
          "fechaPrimerPago": "2019-01-12",
          "monto": 10000,
          "tasa": 0,
          "periodoCuotas": 30,
          "cantidadCuotas": 12,
          "productoUId": 61,
          "pizarra": 0,
          "clienteUId": 4,
          "actividad": 11200
        },
        "sinSeguros": "N",
        "sdtSeguros": {
          "sBTSegurosSimulacion": {
            "codigo": 100
          }
        }
    }'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularIngresandoSegurosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>72e34bcd9d4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos>
                <sBTConceptos>
                    <concepto>100</concepto>
                    <valor>1500.00</valor>
                    <texto>Seguro vida</texto>
                </sBTConceptos>
            </otrosConceptos>
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
            <Servicio>BTPrestamos.SimularIngresandoSeguros</Servicio>
            <Fecha>2019-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>09:23:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularIngresandoSegurosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
          "Device": "AV",
          "Usuario": "MINSTALADOR",
          "Requerimiento": 1,
          "Canal": "BTDIGITAL",
          "Token": "72e34bcd9d4A8B5C60A82434"
        },
        "sdtSimulacion": {
          "otrosConceptos": {
            "sBTConceptos": {
              "concepto": 100,
              "valor": 1500,
              "texto": "Seguro vida"
            }
          },
          "cronograma": {
            "sBTCuotaPrestamoAlta": [
              {
                "importe": 1194.01,
                "fechaPago": "2019-01-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-02-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-03-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-04-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-05-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-06-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-07-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-08-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-09-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-10-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-11-12"
              },
              {
                "importe": 1194.04,
                "fechaPago": "2019-12-12"
              }
            ]
          },
          "fechaValor": "2018-12-11",
          "capital": 10000,
          "tasaEfectiva": 0,
          "intereses": 1288.18,
          "tasaNominalAnual": 23,
          "totalPrestamo": 14328.15,
          "valorCuota": 1194.01,
          "tasaEfectivaAnual": 25.590075,
          "operacionUId": 1,
          "tasa": 23,
          "fechaPrimerPago": "2019-01-12",
          "fechaVencimiento": "2019-12-12",
          "plazo": 361,
          "producto": {
            "papel": "$",
            "moneda": "$",
            "productoUId": 61,
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
          }
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Numero": 623,
          "Estado": "OK",
          "Servicio": "BTPrestamos.SimularIngresandoSeguros",
          "Fecha": "2019-11-20",
          "Requerimiento": 1,
          "Hora": "09:23:04",
          "Canal": "BTDIGITAL"
        }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Codigo de actividad (Destino del credito).' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Capital solicitado.' }, { Nombre: 'periodoCuotas', Tipo: 'Int', Comentarios: 'Periodo entre las cuotas.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Tipo de pizarra. Si no se indica toma la preseteada para el producto.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa. Si no se indica toma la correspondiente al tipo de pizarra.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTSegurosSimulacion', Tipo: '', Comentarios: '' }, { Nombre: '### sBTSegurosSimulacion', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTSegurosSimulacion son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Codigo de seguro a aplicar.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTSimulacionPrestamo', Tipo: '', Comentarios: '' }, { Nombre: '### sBTSimulacionPrestamo', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del prestamo.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cronograma del prestamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del prestamo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTProducto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTCuotaPrestamoAlta', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago de la cuota.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la cuota.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
