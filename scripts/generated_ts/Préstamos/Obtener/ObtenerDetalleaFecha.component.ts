import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalleaFecha',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalleaFechaComponent {
  pageTitle = 'Obtener Detalle a Fecha';
  description = `Metodo para obtener los datos de un prestamo a una fecha especifica.`;
  pubName    = 'BTPrestamos.ObtenerDetalleAFecha';
  programa   = 'RBTPG223';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion simulada.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha a consultar.' }];
  outputData = [{ Nombre: 'sdtPrestamo', Tipo: '[sBTPrestamo](#sbtprestamo)', Comentarios: 'Datos del prestamo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de operacion.' }, { Codigo: '30002', Descripcion: 'No se recupero la operacion para el identificador.' }, { Codigo: '30003', Descripcion: 'No se recibio fecha.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalleAFecha>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>324915377F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>15</bts:operacionUId>
         <bts:fecha>2018-11-15</bts:fecha>
      </bts:BTPrestamos.ObtenerDetalleAFecha>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleAFecha=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 142,
	"fecha": "2018-11-15"
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDetalleAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>324915377F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPrestamo>
            <claseTasa/>
            <tipoTasa>Lineal Anual</tipoTasa>
            <tipoDia>Meses Calendario</tipoDia>
            <tipoAno>360 Días</tipoAno>
            <tasaOriginal>19.000000</tasaOriginal>
            <tasaVigente>19.000000</tasaVigente>
            <plus>0.000000</plus>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <diasRevision>0</diasRevision>
            <tipoTasaMora>Lineal Anual</tipoTasaMora>
            <tasaMoraOriginal>19.000000</tasaMoraOriginal>
            <tasaMoraVigente>0.000000</tasaMoraVigente>
            <tasaPunitorios>0.000000</tasaPunitorios>
            <operacionUId>15</operacionUId>
            <idOperacionFmt>189-0</idOperacionFmt>
            <idOperacionBT>0010000100103000000000000000002700000000000189001</idOperacionBT>
            <producto>
               <productoUId>0</productoUId>
               <nombre>PRÉSTAMOS CONSUMO, Amortización Automática TF</nombre>
               <moneda>$</moneda>
               <papel>$</papel>
            </producto>
            <tipoProducto>AM</tipoProducto>
            <sucursal>Sucursal Beta</sucursal>
            <simboloMoneda>$</simboloMoneda>
            <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
            <cuentaContable>Consumo reajustables</cuentaContable>
            <actividad>01112 Trigo</actividad>
            <estado>Normal</estado>
            <precioOriginal>0.000000</precioOriginal>
            <precioActual>0.000000</precioActual>
            <coeficienteIVA>22.000000</coeficienteIVA>
            <capitalOriginal>12000.00</capitalOriginal>
            <saldoCapital>12000.00</saldoCapital>
            <valorCuota>1231.74</valorCuota>
            <fechaValor>2018-09-25</fechaValor>
            <fechaVencimiento>2019-09-25</fechaVencimiento>
            <interesDevengado>0.00</interesDevengado>
            <interesMoraDevengado>0.00</interesMoraDevengado>
            <resultadoInteresNormalDevengado>0.00</resultadoInteresNormalDevengado>
            <interesSuspenso>0.00</interesSuspenso>
            <deudaCancelacionTotal>14793.06</deudaCancelacionTotal>
            <deudaTotalAFecha>2475.64</deudaTotalAFecha>
            <cantidadCuotasVencidas>1</cantidadCuotasVencidas>
            <deudaTotalVencida>1243.90</deudaTotalVencida>
            <interesVigente>313.03</interesVigente>
            <interesMora>9.97</interesMora>
            <interesPunitorio>0.00</interesPunitorio>
            <totalImpuestos>287.27</totalImpuestos>
            <periodicidad>30</periodicidad>
            <plazo>365</plazo>
            <diasMora>21</diasMora>
            <diasMoraPromedio>0</diasMoraPromedio>
            <cantidadCuotas>12</cantidadCuotas>
            <cantidadCuotasImpagas>12</cantidadCuotasImpagas>
            <cuotasPagasConRetaso>0</cuotasPagasConRetaso>
            <fechaPrimerPago>2018-10-25</fechaPrimerPago>
            <fechaProximoVencimiento>2018-11-26</fechaProximoVencimiento>
            <fechaPrimerCuotaImpaga>2018-10-25</fechaPrimerCuotaImpaga>
            <fechaUltimoPago>0000-00-00</fechaUltimoPago>
         </sdtPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerDetalleAFecha</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Hora>16:03:15</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6975</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleAFechaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
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
        "Servicio": "BTPrestamos.ObtenerDetalleAFecha",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "18:34:34",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTPrestamo', fields: [{ Nombre: 'actividad', Tipo: 'String', Comentarios: 'Actividad.' }, { Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas del prestamo.' }, { Nombre: 'cantidadCuotasImpagas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas impagas.' }, { Nombre: 'cantidadCuotasVencidas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas vencidas.' }, { Nombre: 'capitalOriginal', Tipo: 'Double', Comentarios: 'Capital original del prestamo.' }, { Nombre: 'claseTasa', Tipo: 'String', Comentarios: 'Clase de tasa.' }, { Nombre: 'coeficienteIVA', Tipo: 'Double', Comentarios: 'Coeficiente de IVA.' }, { Nombre: 'costoFinancieroTotal', Tipo: 'Double', Comentarios: 'Costo financiero total (Argentina).' }, { Nombre: 'cuentaContable', Tipo: 'String', Comentarios: 'Descripcion del rubro.' }, { Nombre: 'cuotasPagasConRetaso', Tipo: 'Int', Comentarios: 'Cantidad de cuotas pagas con atraso.' }, { Nombre: 'deudaCancelacionTotal', Tipo: 'Double', Comentarios: 'Monto de cancelacion total.' }, { Nombre: 'deudaTotalAFecha', Tipo: 'Double', Comentarios: 'Monto a pagar para estar al dia.' }, { Nombre: 'deudaTotalVencida', Tipo: 'Double', Comentarios: 'Monto de la deuda vencida a la fecha.' }, { Nombre: 'diasMora', Tipo: 'Int', Comentarios: 'Dias de mora del prestamo.' }, { Nombre: 'diasMoraPromedio', Tipo: 'Int', Comentarios: 'Dias de mora promedio.' }, { Nombre: 'diasRevision', Tipo: 'Int', Comentarios: 'Dias de revision (Tasa variable).' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del prestamo.' }, { Nombre: 'fechaPrimerCuotaImpaga', Tipo: 'Date', Comentarios: 'Fecha de la primera cuota impaga.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaProximoVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento de la proxima cuota.' }, { Nombre: 'fechaUltimoPago', Tipo: 'Date', Comentarios: 'Fecha de ultimo pago de cuota.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha de alta del prestamo.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del prestamo.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador texto de operacion.' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenacion de algunos conceptos claves de la operacion).' }, { Nombre: 'interesDevengado', Tipo: 'Double', Comentarios: 'Intereses devengados.' }, { Nombre: 'interesMora', Tipo: 'Double', Comentarios: 'Intereses de mora.' }, { Nombre: 'interesMoraDevengado', Tipo: 'Double', Comentarios: 'Intereses de mora devengados.' }, { Nombre: 'interesPunitorio', Tipo: 'Double', Comentarios: 'Intereses punitorios.' }, { Nombre: 'interesSuspenso', Tipo: 'Double', Comentarios: 'Intereses en suspenso.' }, { Nombre: 'interesVigente', Tipo: 'Double', Comentarios: 'Monto de interes vigente.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion simulada.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Periodo entre cuotas.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del prestamo.' }, { Nombre: 'plus', Tipo: 'Double', Comentarios: 'Tasa plus.' }, { Nombre: 'precioActual', Tipo: 'Double', Comentarios: 'Precio del papel actual.' }, { Nombre: 'precioOriginal', Tipo: 'Double', Comentarios: 'Precio original del papel.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Producto.' }, { Nombre: 'resultadoInteresNormalDevengado', Tipo: 'Double', Comentarios: 'Resultado de intereses normal devengados.' }, { Nombre: 'saldoCapital', Tipo: 'Double', Comentarios: 'Saldo de capital.' }, { Nombre: 'saldosPendiente', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Saldos pendientes.' }, { Nombre: 'simboloMoneda', Tipo: 'String', Comentarios: 'Simbolo monetario.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Sucursal del prestamo.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaMoraOriginal', Tipo: 'Double', Comentarios: 'Tasa de mora original.' }, { Nombre: 'tasaMoraVigente', Tipo: 'Double', Comentarios: 'Tasa de mora vigente.' }, { Nombre: 'tasaOriginal', Tipo: 'Double', Comentarios: 'Tasa original.' }, { Nombre: 'tasaPunitorios', Tipo: 'Double', Comentarios: 'Tasa punitorios.' }, { Nombre: 'tasaVigente', Tipo: 'Double', Comentarios: 'Tasa vigente.' }, { Nombre: 'tipoAmortizacion', Tipo: 'String', Comentarios: 'Tipo de amortizacion.' }, { Nombre: 'tipoAno', Tipo: 'String', Comentarios: 'Tipo de ano.' }, { Nombre: 'tipoDia', Tipo: 'String', Comentarios: 'Tipo de dia del prestamo.' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: 'Tipo de producto (Amortizable / Plan de pagos).' }, { Nombre: 'tipoTasa', Tipo: 'String', Comentarios: 'Tipo de tasa.' }, { Nombre: 'tipoTasaMora', Tipo: 'String', Comentarios: 'Tipo de tasa de mora.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Total de impuestos.' }, { Nombre: 'totalSaldosPendiente', Tipo: 'Double', Comentarios: 'Total saldos pendiente.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor de la cuota.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
