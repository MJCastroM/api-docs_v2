import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-SimularPrstamoPlazoFijo',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularPlazoFijoComponent {
  // Cabecera e info-card
  pageTitle = 'Simular Plazo Fijo';
  description = `Metodo para simular el alta de un prestamo plazo fijo para un credito individual.`;
  pubName    = 'BTMicrofinanzas.SimularPlazoFijo';
  programa   = 'RBTPG424';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['sBTSimulacionPlazoFijo'];
  inputData  = [{ Nombre: 'sBTSimulacionPlazoFijo', Tipo: '[sBTSimulacionPlazoFijo](#sbtsimulacionplazofijo)', Comentarios: 'Datos de la simulacion.' }];
  outputCols = ['sdtSimulacion'];
  outputData = [{ Nombre: 'sdtSimulacion', Tipo: '[sBTSimulacionPrestamo](#sbtsimulacionprestamo)', Comentarios: 'Datos del prestamo simulado.' }];
  errorCols  = ['30001', '30002', '30003', '30004', '30005', '30006', '30007'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de la solicitud.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30003', Descripcion: 'No se recibio el identificador de producto.' }, { Codigo: '30004', Descripcion: 'El producto indicado no es valido.' }, { Codigo: '30005', Descripcion: 'No se recupero la cuenta para el Identificador.' }, { Codigo: '30006', Descripcion: 'El monto solicitado no puede ser 0.' }, { Codigo: '30007', Descripcion: 'Debe ingresar plazo o fecha de vencimiento.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.SimularPlazoFijo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1571835133CD285A89A23FBE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:sBTSimulacionPlazoFijo>
            <bts:solicitudUId>10972</bts:solicitudUId>
            <bts:clienteUId>2</bts:clienteUId>
            <bts:productoUId>29</bts:productoUId>
            <bts:fechaVencimiento/>
            <bts:plazo>365</bts:plazo>
            <bts:monto>35000</bts:monto>
            <bts:pizarra/>
            <bts:tasa/>
            <bts:destinoCredito>28</bts:destinoCredito>
            <bts:datosAdicionales/>
         </bts:sBTSimulacionPlazoFijo>
      </bts:BTMicrofinanzas.SimularPlazoFijo>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?SimularPlazoFijo \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
        "sBTSimulacionPlazoFijo": {
          "solicitudUId": "10972",
          "clienteUId": "2",
          "productoUId": "29",
          "plazo": "365",
          "monto": "35000",
          "destinoCredito": "28"
        }
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.SimularPlazoFijoResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1571835133CD285A89A23FBE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtSimulacion>
            <operacionUId>18</operacionUId>
            <producto>
               <productoUId>29</productoUId>
               <nombre>PRÉSTAMOS SECTORIALES (PASIVO), Plazo Fijo</nombre>
               <moneda/>
               <papel>$</papel>
            </producto>
            <capital>35000.00</capital>
            <valorCuota>40323.00</valorCuota>
            <intereses>5323.00</intereses>
            <tasa>15.000000</tasa>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <tasaEfectivaAnual>14.985122</tasaEfectivaAnual>
            <tasaNominalAnual>15.000000</tasaNominalAnual>
            <totalPrestamo>40323.00</totalPrestamo>
            <fechaValor>2020-10-20</fechaValor>
            <fechaVencimiento>2021-10-20</fechaVencimiento>
            <fechaPrimerPago>2021-10-20</fechaPrimerPago>
            <plazo>365</plazo>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <fechaPago>2021-10-20</fechaPago>
                  <importe>40323.00</importe>
                  <redondeo>0.00</redondeo>
               </sBTCuotaPrestamoAlta>
            </cronograma>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.SimularPlazoFijo</Servicio>
            <Fecha>2019-10-18</Fecha>
            <Hora>15:43:17</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>1317</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.SimularPlazoFijoResponse>
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
          "operacionUId": "18",
          "producto": {
            "productoUId": "29",
            "nombre": "PRÉSTAMOS SECTORIALES (PASIVO), Plazo Fijo",
            "papel": "$"
          },
          "capital": "35000.00",
          "valorCuota": "40323.00",
          "intereses": "5323.00",
          "tasa": "15.000000",
          "tasaEfectiva": "0.000000",
          "tasaEfectivaAnual": "14.985122",
          "tasaNominalAnual": "15.000000",
          "totalPrestamo": "40323.00",
          "fechaValor": "2020-10-20",
          "fechaVencimiento": "2021-10-20",
          "fechaPrimerPago": "2021-10-20",
          "plazo": "365",
          "cronograma": {
            "sBTCuotaPrestamoAlta": {
              "fechaPago": "2021-10-20",
              "importe": "40323.00",
              "redondeo": "0.00"
            }
          }
        },
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTMicrofinanzas.SimularPlazoFijo",
          "Fecha": "2019-10-18",
          "Hora": "15:43:17",
          "Requerimiento": "95",
          "Numero": "1317",
          "Estado": "OK"
        }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'clienteUId*', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Importe otros conceptos.' }, { Nombre: 'destinoCredito', Tipo: 'Long', Comentarios: 'Codigo de destino del credito.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de Vencimiento (Obligatorio si no se carga plazo).' }, { Nombre: 'monto*', Tipo: 'Double', Comentarios: 'Capital solicitado.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Tipo de pizarra. Si no se indica toma la preseteada para el producto.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo (Obligatorio si no se carga Fecha de Vencimiento).' }, { Nombre: 'productoUId*', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador de instancia Workflow.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa. Si no se indica toma la correspondiente al tipo de pizarra.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'string', Comentarios: 'concepto.' }, { Nombre: 'texto', Tipo: 'string', Comentarios: 'texto.' }, { Nombre: 'valor', Tipo: 'double', Comentarios: 'importe.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTSimulacionPrestamo', Tipo: '', Comentarios: '' }, { Nombre: '### sBTSimulacionPrestamo', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del prestamo.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaSimulacion](#sbtcuotasimulacion)', Comentarios: 'Cronograma del prestamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconceptosalida)', Comentarios: 'Importe otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTProducto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconceptosalida)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConceptoSalida', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTCuotaSimulacion', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Monto de capital en la cuota.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'cuota', Tipo: 'Double', Comentarios: 'Importe total de la cuota.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Monto de impuestos en la cuota.' }, { Nombre: 'interes', Tipo: 'Double', Comentarios: 'Monto de intereses en la cuota.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Importe correspondiente a otros conceptos.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Monto de seguros en la cuota.' }, { Nombre: 'tipoCuota', Tipo: 'String', Comentarios: 'Tipo de la cuota (Capital/Interes).' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
