import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerPrestamosaVencerDisponiblenicamenteparaV3R1',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPrestamosaVencerComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Prestamos a Vencer';
  description = `Metodo para obtener los prestamos que estan por vencer dentro de determinados dias.`;
  pubName    = 'BTPrestamos.ObtenerPrestamosAVencer';
  programa   = 'RBTPG472';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['diasVtoCuota', 'actualiza'];
  inputData  = [{ Nombre: 'diasVtoCuota', Tipo: 'Int', Comentarios: 'Dias que faltan para el vencimiento de los prestamos.' }, { Nombre: 'actualiza', Tipo: 'String', Comentarios: 'Habilita la actualizacion en la tabla SNG912 con los datos del prestamo [Hidden: Valor fijo 'S'].' }];
  outputCols = ['sdtDatosPrestamos'];
  outputData = [{ Nombre: 'sdtDatosPrestamos', Tipo: '[sBTDatosPrestamo](#sbtdatosprestamo)', Comentarios: 'Listado de los prestamos que estan por vencer en determinados dias.' }];
  errorCols  = ['30003'];
  errors     = [{ Codigo: '30003', Descripcion: 'No existe registro para el producto indicado.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerPrestamosAVencer>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>ad33e17b1199865B3A2E76CF</bts:Token>
         </bts:Btinreq>
         <bts:diasVtoCuota>2</bts:diasVtoCuota>
      </bts:BTPrestamos.ObtenerPrestamosAVencer>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPrestamosAVencer=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \
  -d '{
	"Btinreq": {
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Device": "GZ",
    "Usuario": "Instalador",
    "Token": "ad33e17b1199865B3A2E76CF"
  },
  "diasVtoCuota": 2
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
        <BTPrestamos.ObtenerPrestamosAVencerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ad33e17b1199865B3A2E76CF</Token>
         </Btinreq>
         <sdtDatosPrestamos>
            <sBTDatosPrestamo>
               <plazo>124</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>0.00</deudaTotalVencida>
               <periodicidad>15</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2023-05-31</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>S/</moneda>
                  <productoUId>1</productoUId>
                  <nombre>PRÉSTAMO-Financiero 9</nombre>
               </producto>
               <clienteUId>407</clienteUId>
               <fechaProximoVencimiento>2023-03-31</fechaProximoVencimiento>
               <tasaVigente>83.230000</tasaVigente>
               <fechaPrimerCuotaImpaga>2023-03-31</fechaPrimerCuotaImpaga>
               <valorCuota>106.10</valorCuota>
               <saldoCapital>458.21</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>0</cantidadCuotasVencidas>
               <capitalOriginal>800.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>530.57</deudaCancelacionTotal>
               <diasMora>0</diasMora>
               <operacionUId>10752</operacionUId>
               <cantidadCuotasImpagas>5</cantidadCuotasImpagas>
               <deudaTotalAFecha>106.10</deudaTotalAFecha>
               <cuotasPagasConRetraso>3</cuotasPagasConRetraso>
               <fechaUltimoPago>2023-03-29</fechaUltimoPago>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>40.000000</tasaMoraVigente>
               <sucursal>MIRAFLORES</sucursal>
               <fechaValor>2023-01-27</fechaValor>
               <cantidadCuotas>9</cantidadCuotas>
            </sBTDatosPrestamo>
         </sdtDatosPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>227484</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerPrestamosAVencer</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-05-09</Fecha>
            <Hora>12:58:32</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerPrestamosAVencerResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Device": "GZ",
    "Usuario": "Instalador",
    "Token": "d51ae0498699865B3A2E76CF"
	},
    "sdtDatosPrestamos": {
    "sBTDatosPrestamo": {
      "plazo": 124,
      "eventosPosteriores": "N",
      "deudaTotalVencida": 0,
      "periodicidad": 15,
      "simboloMoneda": "$",
      "fechaVencimiento": "2023-05-31",
      "producto": {
        "papel": "$",
        "moneda": "S/",
        "productoUId": 1,
        "nombre": "PRÉSTAMO-Financiero 9"
      },
      "clienteUId": 407,
      "fechaProximoVencimiento": "2023-03-31",
      "tasaVigente": 83.23,
      "fechaPrimerCuotaImpaga": "2023-03-31",
      "valorCuota": 106.1,
      "saldoCapital": 458.21,
      "otrosConceptos": "",
      "cantidadCuotasVencidas": 0,
      "capitalOriginal": 800,
      "tir": 0,
      "deudaCancelacionTotal": 530.57,
      "diasMora": 0,
      "operacionUId": 10752,
      "cantidadCuotasImpagas": 5,
      "deudaTotalAFecha": 106.1,
      "cuotasPagasConRetraso": 3,
      "fechaUltimoPago": "2023-03-29",
      "tipoAmortizacion": "Francés con Seg.e Impu.",
      "datosAdicionales": "",
      "estado": "Normal",
      "tasaMoraVigente": 40,
      "sucursal": "MIRAFLORES",
      "fechaValor": "2023-01-27",
      "cantidadCuotas": 9
    }
  },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "901",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerPrestamosAVencer",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "12:27:52",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas del prestamo.' }, { Nombre: 'cantidadCuotasImpagas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas impagas.' }, { Nombre: 'cantidadCuotasVencidas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas vencidas.' }, { Nombre: 'capitalOriginal', Tipo: 'Double', Comentarios: 'Capital original del prestamo.' }, { Nombre: 'clienteUId', Tipo: 'Int', Comentarios: 'Identificador unico del cliente.' }, { Nombre: 'cuotasPagasConRetraso', Tipo: 'Int', Comentarios: 'Cantidad de cuotas pagas con retraso.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTDatoAdicional](#sbtdatoadicional)', Comentarios: 'Listado de datos adicionales.' }, { Nombre: 'deudaCancelacionTotal', Tipo: 'Double', Comentarios: 'Monto de cancelacion total.' }, { Nombre: 'deudaTotalAFecha', Tipo: 'Double', Comentarios: 'Monto a pagar para estar al dia.' }, { Nombre: 'deudaTotalVencida', Tipo: 'Double', Comentarios: 'Monto de la deuda vencida a la fecha.' }, { Nombre: 'diasMora', Tipo: 'Int', Comentarios: 'Dias de mora del prestamo.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado.' }, { Nombre: 'eventosPosteriores', Tipo: 'String', Comentarios: 'Hay eventos posteriores (S/N).' }, { Nombre: 'fechaPrimerCuotaImpaga', Tipo: 'Date', Comentarios: 'Fecha de la primera cuota impaga.' }, { Nombre: 'fechaProximoVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento de la proxima cuota.' }, { Nombre: 'fechaUltimoPago', Tipo: 'Date', Comentarios: 'Fecha de ultimo pago de cuota.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha de alta del prestamo.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del prestamo.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos del prestamo.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Periodo entre cuotas.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Descripcion del producto.' }, { Nombre: 'saldoCapital', Tipo: 'Double', Comentarios: 'Saldo de capital.' }, { Nombre: 'simboloMoneda', Tipo: 'Sting', Comentarios: 'Simbolo monetario.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Sucursal del prestamo.' }, { Nombre: 'tasaMoraVigente', Tipo: 'Double', Comentarios: 'Tasa de mora vigente.' }, { Nombre: 'tasaVigente', Tipo: 'Double', Comentarios: 'Tasa vigente.' }, { Nombre: 'tipoAmortizacion', Tipo: 'String', Comentarios: 'Tipo de amortizacion.' }, { Nombre: 'tir', Tipo: 'Double', Comentarios: 'Tir.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor de la cuota.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTProducto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTDatoAdicional', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'detalle', Tipo: 'String', Comentarios: 'Detalle de dato adicional.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
