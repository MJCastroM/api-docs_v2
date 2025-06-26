import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Simular',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularComponent1750945335257 {
  pageTitle        = 'Simular';
  description      = `Método para simular el alta de un préstamo amortizable.`;
  pubName    = 'BTPrestamos.Simular';
  programa   = 'RBTPG075';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Si la opción general de procesos 3281 se encuentra activada, el servicio considera la sucursal del usuario de conexión, en caso contrario, simula con la sucursal de la cuenta cliente. 

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPrestamo', Tipo: '[sBTPrestamoAlta](#sbtprestamoalta)', Comentarios: 'Datos de la simulación.' }];
  outputData = [{ Nombre: 'sdtSimulacion', Tipo: '[sBTSimulacionPrestamo](#sbtsimulacionprestamo)', Comentarios: 'Datos del préstamo simulado' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de producto.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador.' }, { Codigo: '30004', Descripcion: 'El Identificador único de Producto es incorrecto.' }, { Codigo: '30005', Descripcion: 'No se resolvió el identificador único de la operación.' }, { Codigo: '40001', Descripcion: 'La Cuenta indicada es incorrecta.' }, { Codigo: '40012', Descripcion: 'La Fecha de Primer Pago indicada es menor a la Fecha Valor.' }, { Codigo: '40013', Descripcion: 'La Fecha de Vencimiento indicada es menor a la Fecha Valor.' }, { Codigo: '40014', Descripcion: 'La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento.' }, { Codigo: '40015', Descripcion: 'El Plazo Total indicado es incorrecto.' }, { Codigo: '40016', Descripcion: 'La Cantidad de Cuotas indicada es menor al mínimo permitido.' }, { Codigo: '40017', Descripcion: 'La Cantidad de Cuotas indicada es mayor al máximo permitido.' }, { Codigo: '40018', Descripcion: 'La Cantidad de Cuotas indicada es incorrecta.' }, { Codigo: '40019', Descripcion: 'La Cantidad de Cuotas indicada no está preseteada.' }, { Codigo: '40020', Descripcion: 'El período entre Cuotas indicado es menor al mínimo permitido.' }, { Codigo: '40021', Descripcion: 'El período entre Cuotas indicado es mayor al máximo permitido' }, { Codigo: '40022', Descripcion: 'El período entre Cuotas indicado es incorrecto.' }, { Codigo: '40023', Descripcion: 'El período entre Cuotas indicado no está preseteado.' }, { Codigo: '40024', Descripcion: 'El Valor Cuota indicado es incorrecto.' }, { Codigo: '40025', Descripcion: 'El Capital indicado es menor al mínimo permitido.' }, { Codigo: '40026', Descripcion: 'El Capital indicado es mayor al máximo permitido.' }, { Codigo: '40027', Descripcion: 'El Capital indicado es incorrecto.' }, { Codigo: '40037', Descripcion: 'La Clase de Tasa indicada es incorrecta.' }, { Codigo: '40040', Descripcion: 'La Tasa Fija indicada está fuera de tolerancia.' }, { Codigo: '40041', Descripcion: 'La Tasa indicada es mayor a la Tasa de Usura.' }, { Codigo: '40048', Descripcion: 'El período indicado es incorrecto.' }, { Codigo: '40049', Descripcion: 'El Tipo de Tasa indicado es incorrecto.' }, { Codigo: '40054', Descripcion: 'La Tasa indicada es incorrecta.' }, { Codigo: '40071', Descripcion: 'El Plazo Total de la Operación es mayor al máximo permitido.' }, { Codigo: '40072', Descripcion: 'El Plazo Total de la Operación es menor al mínimo permitido.' }, { Codigo: '40076', Descripcion: 'El Producto indicado no está Preseteado.' }, { Codigo: '40147', Descripcion: 'No se cumple el período mínimo entre Fecha Valor y Fecha de Primer Pago.' }, { Codigo: '40148', Descripcion: 'El Capital indicado debe ser mayor al Valor Cuota.' }, { Codigo: '40149', Descripcion: 'No se cumple el período máximo entre Fecha Valor y Fecha de Primer Pago.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.Simular>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>72e34bcd9d4A8B5C60A82434</bts:Token>
            <bts:Device>AV</bts:Device>          
         </bts:Btinreq>
         <bts:sdtPrestamo>
            <bts:fechaPrimerPago>2019-01-12</bts:fechaPrimerPago>
            <bts:monto>10000</bts:monto>
            <bts:tasa>0</bts:tasa>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
            <bts:productoUId>61</bts:productoUId>
            <bts:pizarra>0</bts:pizarra>
            <bts:clienteUId>4</bts:clienteUId>
            <bts:actividad>11200</bts:actividad>
         </bts:sdtPrestamo>
      </bts:BTPrestamos.Simular>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?Simular=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
	"Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "1",
      "Usuario": "MINSTALADOR",
      "Token": "72e34bcd9d4A8B5C60A82434",
      "Device": "AV"
    },
    "sdtPrestamo": {
      "fechaPrimerPago": "2019-01-12",
      "monto": "10000",
      "tasa": "0",
      "periodoCuotas": "30",
      "cantidadCuotas": "12",
      "productoUId": "61",
      "pizarra": "0",
      "clienteUId": "4",
      "actividad": "11200"
    }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <Servicio>BTPrestamos.Simular</Servicio>
            <Fecha>2019-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>09:23:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularResponse>
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
	"sdtSimulacion": {
	  "otrosConceptos": {
	  },
	  "cronograma": {
		"sBTCuotaPrestamoAlta": [
		  {
			"importe": "1194.01",
			"fechaPago": "2019-01-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-02-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-03-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-04-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-05-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-06-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-07-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-08-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-09-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-10-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-11-12"
		  },
		  {
			"importe": "1194.04",
			"fechaPago": "2019-12-12"
		  }
		]
	  },
	  "fechaValor": "2018-12-11",
	  "capital": "10000.00",
	  "tasaEfectiva": "0.000000",
	  "intereses": "1288.18",
	  "tasaNominalAnual": "23.000000",
	  "totalPrestamo": "14328.15",
	  "valorCuota": "1194.01",
	  "tasaEfectivaAnual": "25.590075",
	  "operacionUId": "1",
	  "tasa": "23.000000",
	  "fechaPrimerPago": "2019-01-12",
	  "fechaVencimiento": "2019-12-12",
	  "plazo": "361",
	  "producto": {
		"papel": "$",
		"moneda": "$",
		"productoUId": "61",
		"nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
	  }
	},
	"Erroresnegocio": {
	},
	"Btoutreq": {
	  "Numero": "623",
	  "Estado": "OK",
	  "Servicio": "BTPrestamos.Simular",
	  "Fecha": "2019-11-20",
	  "Requerimiento": "1",
	  "Hora": "09:23:04",
	  "Canal": "BTDIGITAL"
	}
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPrestamoAlta', fields: [{ Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Código de actividad (Destino del crédito).' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Capital solicitado.' }, { Nombre: 'periodoCuotas', Tipo: 'Int', Comentarios: 'Período entre las cuotas.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Tipo de pizarra. Si no se indica toma la preseteada para el producto.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa. Si no se indica toma la correspondiente al tipo de pizarra.' }] }, { typeName: 'sBTSimulacionPrestamo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del préstamo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTCuotaPrestamoAlta', fields: [{ Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago de la cuota.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la cuota.' }] }];
}
