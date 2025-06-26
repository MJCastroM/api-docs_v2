import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750945335096 {
  pageTitle        = 'Obtener Préstamos por Rango Mora';
  description      = `Método para obtener los préstamos que estén dentro del rango de mora ingresado.`;
  pubName    = 'BTPrestamos.ObtenerPrestamosPorRangoMora';
  programa   = 'RBTPG471';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'diasMoraDesde', Tipo: 'Int', Comentarios: 'Días de mora desde.' }, { Nombre: 'diasMoraHasta', Tipo: 'Int', Comentarios: 'Días de mora hasta.' }, { Nombre: 'actualiza', Tipo: 'String', Comentarios: 'Habilita la actualización en la tabla SNG912 con los datos del préstamo [Hidden: Valor fijo \'S\'].' }];
  outputData = [{ Nombre: 'sdtDatosPrestamos', Tipo: '[sBTDatosPrestamo](#sbtdatosprestamo)', Comentarios: 'Listado de los préstamos que están dentro del rango de días de mora.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'Días Mora Hasta no puede ser menor a Días Mora Desde.' }, { Codigo: '30003', Descripcion: 'No existe registro para el producto indicado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerPrestamosPorRangoMora>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>d51ae0498699865B3A2E76CF</bts:Token>
         </bts:Btinreq>
         <bts:diasMoraDesde>23</bts:diasMoraDesde>
         <bts:diasMoraHasta>100</bts:diasMoraHasta>
      </bts:BTPrestamos.ObtenerPrestamosPorRangoMora>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPrestamosPorRangoMora=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e\' \
  -d \'{
	"Btinreq": {
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Device": "GZ",
    "Usuario": "Instalador",
    "Token": "d51ae0498699865B3A2E76CF"
  },
  "diasMoraDesde": 23,
  "diasMoraHasta": 100
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
        <BTPrestamos.ObtenerPrestamosPorRangoMoraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ad33e17b1199865B3A2E76CF</Token>
         </Btinreq>
         <sdtDatosPrestamos>
            <sBTDatosPrestamo>
               <plazo>113</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>521.12</deudaTotalVencida>
               <periodicidad>15</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2023-02-15</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>S/</moneda>
                  <productoUId>1</productoUId>
                  <nombre>PRÉSTAMO-Financiero 9</nombre>
               </producto>
               <clienteUId>253</clienteUId>
               <fechaProximoVencimiento>2023-01-31</fechaProximoVencimiento>
               <tasaVigente>83.230000</tasaVigente>
               <fechaPrimerCuotaImpaga>2022-10-25</fechaPrimerCuotaImpaga>
               <valorCuota>75.77</valorCuota>
               <saldoCapital>500.00</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>6</cantidadCuotasVencidas>
               <capitalOriginal>500.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>672.70</deudaCancelacionTotal>
               <diasMora>95</diasMora>
               <operacionUId>5819</operacionUId>
               <cantidadCuotasImpagas>8</cantidadCuotasImpagas>
               <deudaTotalAFecha>596.89</deudaTotalAFecha>
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>40.000000</tasaMoraVigente>
               <sucursal>MIRAFLORES</sucursal>
               <fechaValor>2022-10-25</fechaValor>
               <cantidadCuotas>8</cantidadCuotas>
            </sBTDatosPrestamo>
            <sBTDatosPrestamo>
               <plazo>112</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>770.80</deudaTotalVencida>
               <periodicidad>15</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2023-02-15</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>S/</moneda>
                  <productoUId>1</productoUId>
                  <nombre>PRÉSTAMO-Financiero 9</nombre>
               </producto>
               <clienteUId>310</clienteUId>
               <fechaProximoVencimiento>2023-01-31</fechaProximoVencimiento>
               <tasaVigente>83.230000</tasaVigente>
               <fechaPrimerCuotaImpaga>2022-10-26</fechaPrimerCuotaImpaga>
               <valorCuota>117.50</valorCuota>
               <saldoCapital>800.00</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>6</cantidadCuotasVencidas>
               <capitalOriginal>800.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>1006.52</deudaCancelacionTotal>
               <diasMora>94</diasMora>
               <operacionUId>9197</operacionUId>
               <cantidadCuotasImpagas>8</cantidadCuotasImpagas>
               <deudaTotalAFecha>888.30</deudaTotalAFecha>
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>40.000000</tasaMoraVigente>
               <sucursal>MIRAFLORES</sucursal>
               <fechaValor>2022-10-26</fechaValor>
               <cantidadCuotas>8</cantidadCuotas>
            </sBTDatosPrestamo>
         </sdtDatosPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>227484</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerPrestamosPorRangoMora</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-05-09</Fecha>
            <Hora>12:58:32</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerPrestamosPorRangoMoraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Device": "GZ",
    "Usuario": "Instalador",
    "Token": "d51ae0498699865B3A2E76CF"
	},
    "sdtDatosPrestamos": {
    "sBTDatosPrestamo": [
      {
        "plazo": 113,
        "eventosPosteriores": "N",
        "deudaTotalVencida": 521.12,
        "periodicidad": 15,
        "simboloMoneda": "$",
        "fechaVencimiento": "2023-02-15",
        "producto": {
          "papel": "$",
          "moneda": "S/",
          "productoUId": 1,
          "nombre": "PRÉSTAMO-Financiero 9"
        },
        "clienteUId": 253,
        "fechaProximoVencimiento": "2023-01-31",
        "tasaVigente": 83.23,
        "fechaPrimerCuotaImpaga": "2022-10-25",
        "valorCuota": 75.77,
        "saldoCapital": 500,
        "otrosConceptos": "",
        "cantidadCuotasVencidas": 6,
        "capitalOriginal": 500,
        "tir": 0,
        "deudaCancelacionTotal": 672.7,
        "diasMora": 95,
        "operacionUId": 5819,
        "cantidadCuotasImpagas": 8,
        "deudaTotalAFecha": 596.89,
        "cuotasPagasConRetraso": 0,
        "fechaUltimoPago": "",
        "tipoAmortizacion": "Francés con Seg.e Impu.",
        "datosAdicionales": "",
        "estado": "Normal",
        "tasaMoraVigente": 40,
        "sucursal": "MIRAFLORES",
        "fechaValor": "2022-10-25",
        "cantidadCuotas": 8
      },
      {
        "plazo": 112,
        "eventosPosteriores": "N",
        "deudaTotalVencida": 770.8,
        "periodicidad": 15,
        "simboloMoneda": "$",
        "fechaVencimiento": "2023-02-15",
        "producto": {
          "papel": "$",
          "moneda": "S/",
          "productoUId": 1,
          "nombre": "PRÉSTAMO-Financiero 9"
        },
        "clienteUId": 310,
        "fechaProximoVencimiento": "2023-01-31",
        "tasaVigente": 83.23,
        "fechaPrimerCuotaImpaga": "2022-10-26",
        "valorCuota": 117.5,
        "saldoCapital": 800,
        "otrosConceptos": "",
        "cantidadCuotasVencidas": 6,
        "capitalOriginal": 800,
        "tir": 0,
        "deudaCancelacionTotal": 1006.52,
        "diasMora": 94,
        "operacionUId": 9197,
        "cantidadCuotasImpagas": 8,
        "deudaTotalAFecha": 888.3,
        "cuotasPagasConRetraso": 0,
        "fechaUltimoPago": "",
        "tipoAmortizacion": "Francés con Seg.e Impu.",
        "datosAdicionales": "",
        "estado": "Normal",
        "tasaMoraVigente": 40,
        "sucursal": "MIRAFLORES",
        "fechaValor": "2022-10-26",
        "cantidadCuotas": 8
      }
    ]
  },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "901",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerPrestamosPorRangoMora",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "12:27:52",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatosPrestamo', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas del préstamo.' }, { Nombre: 'cantidadCuotasImpagas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas impagas.' }, { Nombre: 'cantidadCuotasVencidas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas vencidas.' }, { Nombre: 'capitalOriginal', Tipo: 'Double', Comentarios: 'Capital original del préstamo.' }, { Nombre: 'clienteUId', Tipo: 'Int', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'cuotasPagasConRetraso', Tipo: 'Int', Comentarios: 'Cantidad de cuotas pagas con retraso.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTDatoAdicional](#sbtdatoadicional)', Comentarios: 'Listado de datos adicionales.' }, { Nombre: 'deudaCancelacionTotal', Tipo: 'Double', Comentarios: 'Monto de cancelación total.' }, { Nombre: 'deudaTotalAFecha', Tipo: 'Double', Comentarios: 'Monto a pagar para estar al día.' }, { Nombre: 'deudaTotalVencida', Tipo: 'Double', Comentarios: 'Monto de la deuda vencida a la fecha.' }, { Nombre: 'diasMora', Tipo: 'Int', Comentarios: 'Días de mora del préstamo.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado.' }, { Nombre: 'eventosPosteriores', Tipo: 'String', Comentarios: 'Hay eventos posteriores (S/N).' }, { Nombre: 'fechaPrimerCuotaImpaga', Tipo: 'Date', Comentarios: 'Fecha de la primera cuota impaga.' }, { Nombre: 'fechaProximoVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento de la próxima cuota.' }, { Nombre: 'fechaUltimoPago', Tipo: 'Date', Comentarios: 'Fecha de último pago de cuota.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha de alta del préstamo.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del préstamo.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos del préstamo.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Período entre cuotas.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Descripción del producto.' }, { Nombre: 'saldoCapital', Tipo: 'Double', Comentarios: 'Saldo de capital.' }, { Nombre: 'simboloMoneda', Tipo: 'Sting', Comentarios: 'Símbolo monetario.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Sucursal del préstamo.' }, { Nombre: 'tasaMoraVigente', Tipo: 'Double', Comentarios: 'Tasa de mora vigente.' }, { Nombre: 'tasaVigente', Tipo: 'Double', Comentarios: 'Tasa vigente.' }, { Nombre: 'tipoAmortizacion', Tipo: 'String', Comentarios: 'Tipo de amortización.' }, { Nombre: 'tir', Tipo: 'Double', Comentarios: 'Tir.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor de la cuota.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTDatoAdicional', fields: [{ Nombre: 'detalle', Tipo: 'String', Comentarios: 'Detalle de dato adicional.' }] }];
}
