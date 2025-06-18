import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalle',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalleComponent1750258525512 {
  pageTitle        = 'Obtener Detalle';
  description      = `Método para obtener los datos de un préstamo.`;
  pubName          = 'Obtener Detalle';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación simulada.' }];
  outputData = [{ Nombre: 'sdtPrestamo', Tipo: '[sBTPrestamo](#sbtprestamo)', Comentarios: 'Datos del préstamo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de operación.' }, { Codigo: '30002', Descripcion: 'No se recuperó la operación para el identificador.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalle>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6453f934f94A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:OperacionUId>142</bts:OperacionUId>
      </bts:BTPrestamos.ObtenerDetalle>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalle=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "OperacionUId": 142
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDetalleResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtPrestamo>
            <interesVigente>6812.75</interesVigente>
            <deudaTotalVencida>17614.00</deudaTotalVencida>
            <tipoTasaMora>Lineal Anual</tipoTasaMora>
            <cuotasPagasConRetaso>0</cuotasPagasConRetaso>
            <sucursal>Sucursal Beta</sucursal>
            <diasMoraPromedio>0</diasMoraPromedio>
            <plus>0.000000</plus>
            <actividad>01112 Trigo</actividad>
            <tasaOriginal>10.000000</tasaOriginal>
            <idOperacionBT>0010000100115000000000000000002700000000000326001</idOperacionBT>
            <diasMora>83</diasMora>
            <cantidadCuotas>37</cantidadCuotas>
            <estado>Normal</estado>
            <capitalOriginal>180000.00</capitalOriginal>
            <tipoDia>Meses Calendario</tipoDia>
            <fechaPrimerPago>2018-07-18</fechaPrimerPago>
            <claseTasa/>
            <tipoAmortizacion>Leasing</tipoAmortizacion>
            <simboloMoneda>$</simboloMoneda>
            <operacionUId>142</operacionUId>
            <fechaPrimerCuotaImpaga>2018-07-18</fechaPrimerCuotaImpaga>
            <valorCuota>0.00</valorCuota>
            <diasRevision>0</diasRevision>
            <precioOriginal>0.000000</precioOriginal>
            <tasaVigente>10.000000</tasaVigente>
            <tasaMoraVigente>0.000000</tasaMoraVigente>
            <interesDevengado>0.00</interesDevengado>
            <interesSuspenso>0.00</interesSuspenso>
            <deudaCancelacionTotal>213849.01</deudaCancelacionTotal>
            <plazo>1096</plazo>
            <tipoTasa>Lineal Anual</tipoTasa>
            <interesMora>154.45</interesMora>
            <saldoCapital>174180.15</saldoCapital>
            <precioActual>0.000000</precioActual>
            <cantidadCuotasVencidas>3</cantidadCuotasVencidas>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>0</productoUId>
               <nombre>LEASING, Amort. - Capital F./Empr.- T/F</nombre>
            </producto>
            <fechaUltimoPago>2018-05-18</fechaUltimoPago>
            <interesMoraDevengado>0.00</interesMoraDevengado>
            <idOperacionFmt>326-0</idOperacionFmt>
            <fechaProximoVencimiento>2018-10-18</fechaProximoVencimiento>
            <fechaValor>2018-05-18</fechaValor>
            <tasaMoraOriginal>10.000000</tasaMoraOriginal>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <totalImpuestos>0.00</totalImpuestos>
            <coeficienteIVA>0.000000</coeficienteIVA>
            <periodicidad>30</periodicidad>
            <resultadoInteresNormalDevengado>0.00</resultadoInteresNormalDevengado>
            <fechaVencimiento>2021-05-18</fechaVencimiento>
            <cantidadCuotasImpagas>36</cantidadCuotasImpagas>
            <cuentaContable>Ds.P/Arrend.Financ.No Reaj.Res.</cuentaContable>
            <tipoAno>360 Días</tipoAno>
            <interesPunitorio>0.00</interesPunitorio>
            <tipoProducto>AM</tipoProducto>
            <tasaPunitorios>0.000000</tasaPunitorios>
            <deudaTotalAFecha>23433.85</deudaTotalAFecha>
         </sdtPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>950</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDetalle</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>18:33:21</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtPrestamo": {
        "interesVigente": "6812.75",
        "deudaTotalVencida": "17614.00",
        "tipoTasaMora": "Lineal Anual",
        "cuotasPagasConRetaso": "0",
        "sucursal": "Sucursal Beta",
        "diasMoraPromedio": "0",
        "plus": "0.000000",
        "actividad": "01112 Trigo",
        "tasaOriginal": "10.000000",
        "idOperacionBT": "0010000100115000000000000000002700000000000326001",
        "diasMora": "83",
        "cantidadCuotas": "37",
        "estado": "Normal",
        "capitalOriginal": "180000.00",
        "tipoDia": "Meses Calendario",
        "fechaPrimerPago": "2018-07-18",
        "claseTasa": "",
        "tipoAmortizacion": "Leasing",
        "simboloMoneda": "$",
        "operacionUId": "142",
        "fechaPrimerCuotaImpaga": "2018-07-18",
        "valorCuota": "0.00",
        "diasRevision": "0",
        "precioOriginal": "0.000000",
        "tasaVigente": "10.000000",
        "tasaMoraVigente": "0.000000",
        "interesDevengado": "0.00",
        "interesSuspenso": "0.00",
        "deudaCancelacionTotal": "213849.01",
        "plazo": "1096",
        "tipoTasa": "Lineal Anual",
        "interesMora": "154.45",
        "saldoCapital": "174180.15",
        "precioActual": "0.000000",
        "cantidadCuotasVencidas": "3",
        "producto": {
            "papel": "$",
            "moneda": "$",
            "productoUId": "0",
            "nombre": "LEASING, Amort. - Capital F./Empr.- T/F"
        },
        "fechaUltimoPago": "2018-05-18",
        "interesMoraDevengado": "0.00",
        "idOperacionFmt": "326-0",
        "fechaProximoVencimiento": "2018-10-18",
        "fechaValor": "2018-05-18",
        "tasaMoraOriginal": "10.000000",
        "tasaEfectiva": "0.000000",
        "totalImpuestos": "0.00",
        "coeficienteIVA": "0.000000",
        "periodicidad": "30",
        "resultadoInteresNormalDevengado": "0.00",
        "fechaVencimiento": "2021-05-18",
        "cantidadCuotasImpagas": "36",
        "cuentaContable": "Ds.P/Arrend.Financ.No Reaj.Res.",
        "tipoAno": "360 Días",
        "interesPunitorio": "0.00",
        "tipoProducto": "AM",
        "tasaPunitorios": "0.000000",
        "deudaTotalAFecha": "23433.85"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "951",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDetalle",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "18:34:34",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPrestamo', fields: [{ Nombre: 'actividad', Tipo: 'String', Comentarios: 'Actividad.' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas del préstamo.' }, { Nombre: 'cantidadCuotasImpagas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas impagas.' }, { Nombre: 'cantidadCuotasVencidas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas vencidas.' }, { Nombre: 'capitalOriginal', Tipo: 'Double', Comentarios: 'Capital original del préstamo.' }, { Nombre: 'claseTasa', Tipo: 'String', Comentarios: 'Clase de tasa.' }, { Nombre: 'coeficienteIVA', Tipo: 'Double', Comentarios: 'Coeficiente de IVA.' }, { Nombre: 'costoFinancieroTotal', Tipo: 'Double', Comentarios: 'Costo financiero total (Argentina).' }, { Nombre: 'cuentaContable', Tipo: 'String', Comentarios: 'Descripción del rubro.' }, { Nombre: 'cuotasPagasConRetaso', Tipo: 'Int', Comentarios: 'Cantidad de cuotas pagas con atraso.' }, { Nombre: 'deudaCancelacionTotal', Tipo: 'Double', Comentarios: 'Monto de cancelación total.' }, { Nombre: 'deudaTotalAFecha', Tipo: 'Double', Comentarios: 'Monto a pagar para estar al día.' }, { Nombre: 'deudaTotalVencida', Tipo: 'Double', Comentarios: 'Monto de la deuda vencida a la fecha.' }, { Nombre: 'diasMora', Tipo: 'Int', Comentarios: 'Días de mora del préstamo.' }, { Nombre: 'diasMoraPromedio', Tipo: 'Int', Comentarios: 'Días de mora promedio.' }, { Nombre: 'diasRevision', Tipo: 'Int', Comentarios: 'Días de revisión (Tasa variable).' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del préstamo.' }, { Nombre: 'fechaPrimerCuotaImpaga', Tipo: 'Date', Comentarios: 'Fecha de la primera cuota impaga.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaProximoVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento de la próxima cuota.' }, { Nombre: 'fechaUltimoPago', Tipo: 'Date', Comentarios: 'Fecha de último pago de cuota.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha de alta del préstamo.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del préstamo.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador texto de operación.' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'interesDevengado', Tipo: 'Double', Comentarios: 'Intereses devengados.' }, { Nombre: 'interesMora', Tipo: 'Double', Comentarios: 'Intereses de mora.' }, { Nombre: 'interesMoraDevengado', Tipo: 'Double', Comentarios: 'Intereses de mora devengados.' }, { Nombre: 'interesPunitorio', Tipo: 'Double', Comentarios: 'Intereses punitorios.' }, { Nombre: 'interesSuspenso', Tipo: 'Double', Comentarios: 'Intereses en suspenso.' }, { Nombre: 'interesVigente', Tipo: 'Double', Comentarios: 'Monto de interés vigente.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación simulada.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Período entre cuotas.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del préstamo.' }, { Nombre: 'plus', Tipo: 'Double', Comentarios: 'Tasa plus.' }, { Nombre: 'precioActual', Tipo: 'Double', Comentarios: 'Precio del papel actual.' }, { Nombre: 'precioOriginal', Tipo: 'Double', Comentarios: 'Precio original del papel.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Producto.' }, { Nombre: 'resultadoInteresNormalDevengado', Tipo: 'Double', Comentarios: 'Resultado de intereses normal devengados.' }, { Nombre: 'saldoCapital', Tipo: 'Double', Comentarios: 'Saldo de capital.' }, { Nombre: 'saldosPendiente', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Saldos pendientes.' }, { Nombre: 'simboloMoneda', Tipo: 'String', Comentarios: 'Símbolo monetario.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Sucursal del préstamo.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaMoraOriginal', Tipo: 'Double', Comentarios: 'Tasa de mora original.' }, { Nombre: 'tasaMoraVigente', Tipo: 'Double', Comentarios: 'Tasa de mora vigente.' }, { Nombre: 'tasaOriginal', Tipo: 'Double', Comentarios: 'Tasa original.' }, { Nombre: 'tasaPunitorios', Tipo: 'Double', Comentarios: 'Tasa punitorios.' }, { Nombre: 'tasaVigente', Tipo: 'Double', Comentarios: 'Tasa vigente.' }, { Nombre: 'tipoAmortizacion', Tipo: 'String', Comentarios: 'Tipo de amortización.' }, { Nombre: 'tipoAno', Tipo: 'String', Comentarios: 'Tipo de año.' }, { Nombre: 'tipoDia', Tipo: 'String', Comentarios: 'Tipo de día del préstamo.' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: 'Tipo de producto (Amortizable / Plan de pagos).' }, { Nombre: 'tipoTasa', Tipo: 'String', Comentarios: 'Tipo de tasa.' }, { Nombre: 'tipoTasaMora', Tipo: 'String', Comentarios: 'Tipo de tasa de mora.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Total de impuestos.' }, { Nombre: 'totalSaldosPendiente', Tipo: 'Double', Comentarios: 'Total saldos pendiente.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor de la cuota.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
