import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularLibreAmortizacionSinCliente',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularLibreAmortizacionSinClienteComponent1751987199919 {
  pageTitle        = 'Simular Libre Amortización Sin Cliente';
  description      = `Método para simular el alta de un préstamo libre amortización sin cliente.`;
  pubName    = 'BTPrestamos.SimularLibreAmortizacionSinCliente';
  programa   = 'RBTPG267';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtDatosLibreAmortizacion', Tipo: '[sBTDatosLibreAmortizacion](#sbtdatoslibreamortizacion)', Comentarios: 'Datos de la simulación.' }, { Nombre: 'generaCuotaInteres', Tipo: 'Character', Comentarios: 'Indica si se generan cuotas de intereses. [Hidden: Valores \'S\'/\'N\'].' }];
  outputData = [{ Nombre: 'sdtSimulacion', Tipo: '[sBTSimulacionPrestamoLA](#sbtsimulacionprestamola)', Comentarios: 'Datos del préstamo simulado.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador de producto.' }, { Código: '30003', Descripción: 'No se recuperó la cuenta para el Identificador.' }, { Código: '30004', Descripción: 'El Identificador único de Producto es incorrecto.' }, { Código: '30005', Descripción: 'No se recibió la Fecha de Primer Pago desde el origen.' }, { Código: '30006', Descripción: 'No se recibió el Monto de Capital desde el origen.' }, { Código: '31001', Descripción: 'La simulación no está vigente.' }, { Código: '31002', Descripción: 'La simulación no existe.' }, { Código: '40001', Descripción: 'La Cuenta indicada es incorrecta.' }, { Código: '40012', Descripción: 'La Fecha de Primer Pago indicada es menor a la Fecha Valor.' }, { Código: '40013', Descripción: 'La Fecha de Vencimiento indicada es menor a la Fecha Valor.' }, { Código: '40014', Descripción: 'La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento.' }, { Código: '40015', Descripción: 'El Plazo Total indicado es incorrecto.' }, { Código: '40016', Descripción: 'La Cantidad de Cuotas indicada es menor al mínimo permitido.' }, { Código: '40017', Descripción: 'La Cantidad de Cuotas indicada es mayor al máximo permitido.' }, { Código: '40018', Descripción: 'La Cantidad de Cuotas indicada es incorrecta.' }, { Código: '40019', Descripción: 'La Cantidad de Cuotas indicada no está preseteada.' }, { Código: '40020', Descripción: 'El período entre Cuotas indicado es menor al mínimo permitido.' }, { Código: '40021', Descripción: 'El período entre Cuotas indicado es mayor al máximo permitido.' }, { Código: '40022', Descripción: 'El período entre Cuotas indicado es incorrecto.' }, { Código: '40023', Descripción: 'El período entre Cuotas indicado no está preseteado.' }, { Código: '40024', Descripción: 'El Valor Cuota indicado es incorrecto.' }, { Código: '40025', Descripción: 'El Capital indicado es menor al mínimo permitido.' }, { Código: '40026', Descripción: 'El Capital indicado es mayor al máximo permitido.' }, { Código: '40027', Descripción: 'El Capital indicado es incorrecto.' }, { Código: '40037', Descripción: 'La Clase de Tasa indicada es incorrecta.' }, { Código: '40040', Descripción: 'La Tasa Fija indicada está fuera de tolerancia.' }, { Código: '40041', Descripción: 'La Tasa indicada es mayor a la Tasa de Usura.' }, { Código: '40048', Descripción: 'El período indicado es incorrecto.' }, { Código: '40049', Descripción: 'El Tipo de Tasa indicado es incorrecto.' }, { Código: '40054', Descripción: 'La Tasa indicada es incorrecta.' }, { Código: '40071', Descripción: 'El Plazo Total de la Operación es mayor al máximo permitido.' }, { Código: '40072', Descripción: 'El Plazo Total de la Operación es menor al mínimo permitido.' }, { Código: '40076', Descripción: 'El Producto indicado no está Preseteado.' }, { Código: '40147', Descripción: 'No se cumple el período mínimo entre Fecha Valor y Fecha de Primer Pago.' }, { Código: '40148', Descripción: 'El Capital indicado debe ser mayor al Valor Cuota.' }, { Código: '40149', Descripción: 'No se cumple el período máximo entre Fecha Valor y Fecha de Primer Pago.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularLibreAmortizacionSinCliente>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>72e34bcd9d4A8B5C60A82434</bts:Token>
            <bts:Device>AV</bts:Device>          
         </bts:Btinreq>
         <bts:sdtDatosLibreAmortizacion>
            <bts:actividad>11200</bts:actividad>
            <bts:pizarra>0</bts:pizarra>
            <bts:tasa>0</bts:tasa>
            <bts:productoUId>75</bts:productoUId>
            <bts:monto>10000</bts:monto>
            <bts:cantidadCuotas>0</bts:cantidadCuotas>
            <bts:periodoCuotas>30</bts:periodoCuotas>
			   <bts:cuotasCapital>
				   <bts:sBTCuotaPrestamoAlta>
					   <bts:fechaPago>2019-01-10</bts:fechaPago>
					   <bts:importe>2000</bts:importe>
				   </bts:sBTCuotaPrestamoAlta>
				   <bts:sBTCuotaPrestamoAlta>
					   <bts:fechaPago>2019-02-10</bts:fechaPago>
					   <bts:importe>2000</bts:importe>
				   </bts:sBTCuotaPrestamoAlta>
				   <bts:sBTCuotaPrestamoAlta>
					   <bts:fechaPago>2019-03-10</bts:fechaPago>
					   <bts:importe>1000</bts:importe>
				   </bts:sBTCuotaPrestamoAlta>
				   <bts:sBTCuotaPrestamoAlta>
					   <bts:fechaPago>2019-04-10</bts:fechaPago>
					   <bts:importe>2000</bts:importe>
				   </bts:sBTCuotaPrestamoAlta>
				   <bts:sBTCuotaPrestamoAlta>
					   <bts:fechaPago>2019-05-10</bts:fechaPago>
					   <bts:importe>2000</bts:importe>
				   </bts:sBTCuotaPrestamoAlta>
				   <bts:sBTCuotaPrestamoAlta>
					   <bts:fechaPago>2019-06-10</bts:fechaPago>
					   <bts:importe>1000</bts:importe>
				   </bts:sBTCuotaPrestamoAlta>
			   </bts:cuotasCapital>
         </bts:sdtDatosLibreAmortizacion>
      </bts:BTPrestamos.SimularLibreAmortizacionSinCliente>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularLibreAmortizacionSinCliente\' \
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
		"sdtDatosLibreAmortizacion": {
			"actividad": "11200",
			"pizarra": "0",
			"tasa": "0",
			"productoUId": "75",
			"monto": "10000",
			"cantidadCuotas": "0",
			"periodoCuotas": "30",
			"cuotasCapital": {
			  "sBTCuotaPrestamoAlta": [
			  	  {
			  	  	"fechaPago": "2019-01-10",
			  	  	"importe": "2000"
			  	  },
			  	  {
			  	  	"fechaPago": "2019-02-10",
			  	  	"importe": "2000"
			  	  },
			  	  {
			  	  	"fechaPago": "2019-03-10",
			  	  	"importe": "1000"
			  	  },
			  	  {
			  	  	"fechaPago": "2019-04-10",
			  	  	"importe": "2000"
			  	  },
			  	  {
			  	  	"fechaPago": "2019-05-10",
			  	  	"importe": "2000"
			  	  },
			  	  {
			  	  	"fechaPago": "2019-06-10",
			  	  	"importe": "1000"
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
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "BANTOTAL", 
        "Token": "1017966210F955E77534D3E0", 
        "Device": "AC" 
    }, 
    "sdtSimulacion": { 
        "operacionUId": 0, 
        "producto": { 
            "productoUId": 0, 
            "nombre": "PRÉSTAMOS SECTORIALES (PASIVO), Irregular o Amort. Libre", 
            "moneda": "$", 
            "papel": "$" 
        }, 
        "fechaValor": "2016-08-15", 
        "fechaPrimerPago": "2019-01-10", 
        "fechaVencimiento": "2019-06-10", 
        "capital": 10000.00, 
        "intereses": 3946.66, 
        "impuestos": 868.26, 
        "comisiones": 0.00, 
        "totalPrestamo": 10000.00, 
        "plazo": 0, 
        "tasa": 15.000000, 
        "tasaEfectiva": 0.000000, 
        "tasaEfectivaAnual": 16.068320, 
        "tasaNominalAnual": 15.000000, 
        "otrosConceptos": { 
            "sBTConcepto": [] 
        }, 
        "cronograma": { 
            "sBTCuotaSimulacion": [ 
                { 
                    "fechaPago": "2019-01-10", 
                    "tipoCuota": "I", 
                    "concepto": "", 
                    "capital": 3658.33, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 804.83, 
                    "otrosConceptos": 0.00, 
                    "cuota": 4463.16 
                }, 
                { 
                    "fechaPago": "2019-01-10", 
                    "tipoCuota": "K", 
                    "concepto": "", 
                    "capital": 2000.00, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 0.00, 
                    "otrosConceptos": 0.00, 
                    "cuota": 2000.00 
                }, 
                { 
                    "fechaPago": "2019-02-10", 
                    "tipoCuota": "I", 
                    "concepto": "", 
                    "capital": 103.33, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 22.73, 
                    "otrosConceptos": 0.00, 
                    "cuota": 126.06 
                }, 
                { 
                    "fechaPago": "2019-02-10", 
                    "tipoCuota": "K", 
                    "concepto": "", 
                    "capital": 2000.00, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 0.00, 
                    "otrosConceptos": 0.00, 
                    "cuota": 2000.00 
                }, 
                { 
                    "fechaPago": "2019-03-10", 
                    "tipoCuota": "I", 
                    "concepto": "", 
                    "capital": 70.00, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 15.40, 
                    "otrosConceptos": 0.00, 
                    "cuota": 85.40 
                }, 
                { 
                    "fechaPago": "2019-03-10", 
                    "tipoCuota": "K", 
                    "concepto": "", 
                    "capital": 1000.00, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 0.00, 
                    "otrosConceptos": 0.00, 
                    "cuota": 1000.00 
                }, 
                { 
                    "fechaPago": "2019-04-10", 
                    "tipoCuota": "I", 
                    "concepto": "", 
                    "capital": 64.58, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 14.21, 
                    "otrosConceptos": 0.00, 
                    "cuota": 78.79 
                }, 
                { 
                    "fechaPago": "2019-04-10", 
                    "tipoCuota": "K", 
                    "concepto": "", 
                    "capital": 2000.00, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 0.00, 
                    "otrosConceptos": 0.00, 
                    "cuota": 2000.00 
                }, 
                { 
                    "fechaPago": "2019-05-10", 
                    "tipoCuota": "I", 
                    "concepto": "", 
                    "capital": 37.50, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 8.25, 
                    "otrosConceptos": 0.00, 
                    "cuota": 45.75 
                }, 
                { 
                    "fechaPago": "2019-05-10", 
                    "tipoCuota": "K", 
                    "concepto": "", 
                    "capital": 2000.00, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 0.00, 
                    "otrosConceptos": 0.00, 
                    "cuota": 2000.00 
                }, 
                { 
                    "fechaPago": "2019-06-10", 
                    "tipoCuota": "I", 
                    "concepto": "", 
                    "capital": 12.92, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 2.84, 
                    "otrosConceptos": 0.00, 
                    "cuota": 15.76 
                }, 
                { 
                    "fechaPago": "2019-06-10", 
                    "tipoCuota": "K", 
                    "concepto": "", 
                    "capital": 1000.00, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 0.00, 
                    "otrosConceptos": 0.00, 
                    "cuota": 1000.00 
                } 
            ] 
        } 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPrestamos.SimularLibreAmortizacionSinCliente", 
        "Fecha": "2019-11-20", 
        "Hora": "11:19:16", 
        "Requerimiento": "", 
        "Numero": 7035, 
        "Estado": "OK" 
    } 
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatosLibreAmortizacion', fields: [{ Nombre: 'actividad', Tipo: 'Long', Comentarios: 'Código de actividad (Destino del crédito).' }, { Nombre: 'cantidadCuotas', Tipo: 'Long', Comentarios: 'Cantidad de cuotas del préstamo.' }, { Nombre: 'cuotasCapital', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cuotas de capital.' }, { Nombre: 'cuotasInteres', Tipo: '[sBTCuotaPrestamoAlta](#sbtcuotaprestamoalta)', Comentarios: 'Cuotas de intereses.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Capital solicitado.' }, { Nombre: 'periodoCuotas', Tipo: 'Long', Comentarios: 'Período entre vencimiento de cada cuota.' }, { Nombre: 'pizarra', Tipo: 'Short', Comentarios: 'Tipo de pizarra. Si no se indica toma la preseteada para el producto.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa. Si no se indica toma la correspondiente al tipo de pizarra.' }] }, { typeName: 'sBTCuotaPrestamoAlta', fields: [{ Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago de la cuota.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la cuota.' }] }, { typeName: 'sBTSimulacionPrestamoLA', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'comisiones', Tipo: 'Double', Comentarios: 'Comisiones.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Impuestos.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total a pagar.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
