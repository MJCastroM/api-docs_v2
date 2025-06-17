import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerPrestamossinMoraDisponiblenicamenteparaV3R1',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPrestamosSinMoraComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Prestamos Sin Mora';
  description = `Metodo para retornar prestamos sin mora.`;
  pubName    = 'BTPrestamos.ObtenerPrestamosSinMora';
  programa   = 'RBTPG471';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['diasMoraDesde', 'diasMoraHasta', 'stringAux', 'update912', 'offset', 'limit', 'contarRegistros'];
  inputData  = [{ Nombre: 'diasMoraDesde', Tipo: 'Int', Comentarios: '[Hidden: Valor fijo '0' para este metodo].' }, { Nombre: 'diasMoraHasta', Tipo: 'Int', Comentarios: '[Hidden: Valor fijo '0' para este metodo].' }, { Nombre: 'stringAux', Tipo: 'String', Comentarios: '[Hidden: Valor fijo 'SIN_MORA' para este metodo].' }, { Nombre: 'update912', Tipo: 'String', Comentarios: '[Hidden: Valor fijo 'N' para este metodo].' }, { Nombre: 'offset', Tipo: 'Int', Comentarios: 'Valor desde donde empieza a contar la cantidad de prestamos.' }, { Nombre: 'limit', Tipo: 'int', Comentarios: 'Cantidad de prestamos que va a mostrar.' }, { Nombre: 'contarRegistros', Tipo: 'Sting', Comentarios: '¿Cuenta el total de prestamos? (S/N).' }];
  outputCols = ['quedanRegistros', 'countRegistros', 'sdtDatosPrestamos'];
  outputData = [{ Nombre: 'quedanRegistros', Tipo: 'String', Comentarios: '¿Quedan registros? (S/N).' }, { Nombre: 'countRegistros', Tipo: 'Int', Comentarios: 'Muestra el total de prestamos sin mora.' }, { Nombre: 'sdtDatosPrestamos', Tipo: '[sBTDatosPrestamo](#sbtdatosprestamo)', Comentarios: 'Listado de los prestamos sin mora.' }];
  errorCols  = ['30003'];
  errors     = [{ Codigo: '30003', Descripcion: 'No existe registro para el producto indicado.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerPrestamosSinMora>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>papa</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>45A5647518BC5FBB73003EA9</bts:Token>
         </bts:Btinreq>
         <bts:offset>1</bts:offset>
         <bts:limit>5</bts:limit>
         <bts:contarRegistros>S</bts:contarRegistros>
      </bts:BTPrestamos.ObtenerPrestamosSinMora>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPrestamosSinMora=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \
  -d '{
	"Btinreq": {
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Device": "GZ",
    "Usuario": "Instalador",
    "Token": "d51ae0498699865B3A2E76CF"
  },
  "offset": 23,
  "limit": 100,
  "contarRegistros": "S"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerPrestamosSinMoraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>papa</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>45A5647518BC5FBB73003EA9</Token>
         </Btinreq>
         <quedanRegistros>S</quedanRegistros>
         <countRegistros>154</countRegistros>
         <sdtDatosPrestamos>
            <sBTDatosPrestamo>
               <plazo>422</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>2623560.33</deudaTotalVencida>
               <periodicidad>30</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2021-01-02</fechaVencimiento>
               <producto>
                  <moneda>CRC</moneda>
                  <papel>$</papel>
                  <otrosConceptos></otrosConceptos>
                  <productoUId>72</productoUId>
                  <nombre>PRÉSTAMOS-Amortización Automática TF</nombre>
               </producto>
               <clienteUId>4</clienteUId>
               <fechaProximoVencimiento/>
               <tasaVigente>10.000000</tasaVigente>
               <fechaPrimerCuotaImpaga>2020-02-07</fechaPrimerCuotaImpaga>
               <valorCuota>-34266.33</valorCuota>
               <saldoCapital>30000.00</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>12</cantidadCuotasVencidas>
               <capitalOriginal>30000.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>2623560.33</deudaCancelacionTotal>
               <diasMora>0</diasMora>
               <operacionUId>15</operacionUId>
               <cantidadCuotasImpagas>12</cantidadCuotasImpagas>
               <deudaTotalAFecha>2623560.33</deudaTotalAFecha>
               <nombreCliente>PRANKA ERIKA</nombreCliente>
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>10.000000</tasaMoraVigente>
               <sucursal>Casa Matriz</sucursal>
               <fechaValor>2019-11-07</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTDatosPrestamo>
            <sBTDatosPrestamo>
               <plazo>452</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>7255644.02</deudaTotalVencida>
               <periodicidad>30</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2021-03-05</fechaVencimiento>
               <producto>
                  <moneda>CRC</moneda>
                  <papel>$</papel>
                  <otrosConceptos></otrosConceptos>
                  <productoUId>72</productoUId>
                  <nombre>PRÉSTAMOS-Amortización Automática TF</nombre>
               </producto>
               <clienteUId>4</clienteUId>
               <fechaProximoVencimiento/>
               <tasaVigente>10.000000</tasaVigente>
               <fechaPrimerCuotaImpaga>2020-06-08</fechaPrimerCuotaImpaga>
               <valorCuota>21968.79</valorCuota>
               <saldoCapital>109602.47</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>10</cantidadCuotasVencidas>
               <capitalOriginal>120000.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>7255644.02</deudaCancelacionTotal>
               <diasMora>0</diasMora>
               <operacionUId>16</operacionUId>
               <cantidadCuotasImpagas>10</cantidadCuotasImpagas>
               <deudaTotalAFecha>7255644.02</deudaTotalAFecha>
               <nombreCliente>PRANKA ERIKA</nombreCliente>
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso>
               <fechaUltimoPago>2020-02-07</fechaUltimoPago>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>10.000000</tasaMoraVigente>
               <sucursal>Casa Matriz</sucursal>
               <fechaValor>2019-12-09</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTDatosPrestamo>
            <sBTDatosPrestamo>
               <plazo>360</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>1818126.01</deudaTotalVencida>
               <periodicidad>30</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2020-12-03</fechaVencimiento>
               <producto>
                  <moneda>CRC</moneda>
                  <papel>$</papel>
                  <otrosConceptos></otrosConceptos>
                  <productoUId>72</productoUId>
                  <nombre>PRÉSTAMOS-Amortización Automática TF</nombre>
               </producto>
               <clienteUId>4</clienteUId>
               <fechaProximoVencimiento/>
               <tasaVigente>10.000000</tasaVigente>
               <fechaPrimerCuotaImpaga/>
               <valorCuota>-48039.65</valorCuota>
               <saldoCapital>24289.29</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>0</cantidadCuotasVencidas>
               <capitalOriginal>38000.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>1818126.01</deudaCancelacionTotal>
               <diasMora>0</diasMora>
               <operacionUId>17</operacionUId>
               <cantidadCuotasImpagas>0</cantidadCuotasImpagas>
               <deudaTotalAFecha>1818126.01</deudaTotalAFecha>
               <nombreCliente>PRANKA ERIKA</nombreCliente>
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>10.000000</tasaMoraVigente>
               <sucursal>Casa Matriz</sucursal>
               <fechaValor>2019-12-09</fechaValor>
               <cantidadCuotas>0</cantidadCuotas>
            </sBTDatosPrestamo>
            <sBTDatosPrestamo>
               <plazo>452</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>6759733.33</deudaTotalVencida>
               <periodicidad>30</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2021-03-05</fechaVencimiento>
               <producto>
                  <moneda>CRC</moneda>
                  <papel>$</papel>
                  <otrosConceptos></otrosConceptos>
                  <productoUId>72</productoUId>
                  <nombre>PRÉSTAMOS-Amortización Automática TF</nombre>
               </producto>
               <clienteUId>4</clienteUId>
               <fechaProximoVencimiento/>
               <tasaVigente>10.000000</tasaVigente>
               <fechaPrimerCuotaImpaga>2020-01-08</fechaPrimerCuotaImpaga>
               <valorCuota>-113220.30</valorCuota>
               <saldoCapital>89000.00</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>12</cantidadCuotasVencidas>
               <capitalOriginal>89000.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>6759733.33</deudaCancelacionTotal>
               <diasMora>0</diasMora>
               <operacionUId>18</operacionUId>
               <cantidadCuotasImpagas>12</cantidadCuotasImpagas>
               <deudaTotalAFecha>6759733.33</deudaTotalAFecha>
               <nombreCliente>PRANKA ERIKA</nombreCliente>
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>10.000000</tasaMoraVigente>
               <sucursal>Casa Matriz</sucursal>
               <fechaValor>2019-12-09</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTDatosPrestamo>
         </sdtDatosPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16823</Numero>
            <Servicio>BTPrestamos.ObtenerPrestamosSinMora</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-25</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>17:00:21</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerPrestamosSinMoraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{ 
	"Btinreq": { 
    "Requerimiento": 0, 
    "Canal": "BTDIGITAL", 
    "Device": "GZ", 
    "Usuario": "Instalador", 
    "Token": "d51ae0498699865B3A2E76CF" 
	}, 
    "quedanRegistros": "S", 
    "countRegistros": 154, 
    "sdtDatosPrestamos": { 
        "sBTDatosPrestamo": [ 
        { 
            "plazo": 422, 
            "eventosPosteriores": "N", 
            "deudaTotalVencida": 2623560.33, 
            "periodicidad": 30, 
            "simboloMoneda": "$", 
            "fechaVencimiento": "2021-01-02", 
            "producto": { 
            "moneda": "CRC", 
            "papel": "$", 
            "otrosConceptos": "", 
            "productoUId": 72, 
            "nombre": "PRÉSTAMOS-Amortización Automática TF" 
            }, 
            "clienteUId": 4, 
            "fechaProximoVencimiento": "", 
            "tasaVigente": 10, 
            "fechaPrimerCuotaImpaga": "2020-02-07", 
            "valorCuota": -34266.33, 
            "saldoCapital": 30000, 
            "otrosConceptos": "", 
            "cantidadCuotasVencidas": 12, 
            "capitalOriginal": 30000, 
            "tir": 0, 
            "deudaCancelacionTotal": 2623560.33, 
            "diasMora": 0, 
            "operacionUId": 15, 
            "cantidadCuotasImpagas": 12, 
            "deudaTotalAFecha": 2623560.33, 
            "nombreCliente": "PRANKA ERIKA", 
            "cuotasPagasConRetraso": 0, 
            "fechaUltimoPago": "", 
            "tipoAmortizacion": "Francés", 
            "datosAdicionales": "", 
            "estado": "Normal", 
            "tasaMoraVigente": 10, 
            "sucursal": "Casa Matriz", 
            "fechaValor": "2019-11-07", 
            "cantidadCuotas": 12 
        }, 
        { 
            "plazo": 452, 
            "eventosPosteriores": "N", 
            "deudaTotalVencida": 7255644.02, 
            "periodicidad": 30, 
            "simboloMoneda": "$", 
            "fechaVencimiento": "2021-03-05", 
            "producto": { 
            "moneda": "CRC", 
            "papel": "$", 
            "otrosConceptos": "", 
            "productoUId": 72, 
            "nombre": "PRÉSTAMOS-Amortización Automática TF" 
            }, 
            "clienteUId": 4, 
            "fechaProximoVencimiento": "", 
            "tasaVigente": 10, 
            "fechaPrimerCuotaImpaga": "2020-06-08", 
            "valorCuota": 21968.79, 
            "saldoCapital": 109602.47, 
            "otrosConceptos": "", 
            "cantidadCuotasVencidas": 10, 
            "capitalOriginal": 120000, 
            "tir": 0, 
            "deudaCancelacionTotal": 7255644.02, 
            "diasMora": 0, 
            "operacionUId": 16, 
            "cantidadCuotasImpagas": 10, 
            "deudaTotalAFecha": 7255644.02, 
            "nombreCliente": "PRANKA ERIKA", 
            "cuotasPagasConRetraso": 0, 
            "fechaUltimoPago": "2020-02-07", 
            "tipoAmortizacion": "Francés con Seg.e Impu.", 
            "datosAdicionales": "", 
            "estado": "Normal", 
            "tasaMoraVigente": 10, 
            "sucursal": "Casa Matriz", 
            "fechaValor": "2019-12-09", 
            "cantidadCuotas": 12 
        }, 
        { 
            "plazo": 360, 
            "eventosPosteriores": "N", 
            "deudaTotalVencida": 1818126.01, 
            "periodicidad": 30, 
            "simboloMoneda": "$", 
            "fechaVencimiento": "2020-12-03", 
            "producto": { 
            "moneda": "CRC", 
            "papel": "$", 
            "otrosConceptos": "", 
            "productoUId": 72, 
            "nombre": "PRÉSTAMOS-Amortización Automática TF" 
            }, 
            "clienteUId": 4, 
            "fechaProximoVencimiento": "", 
            "tasaVigente": 10, 
            "fechaPrimerCuotaImpaga": "", 
            "valorCuota": -48039.65, 
            "saldoCapital": 24289.29, 
            "otrosConceptos": "", 
            "cantidadCuotasVencidas": 0, 
            "capitalOriginal": 38000, 
            "tir": 0, 
            "deudaCancelacionTotal": 1818126.01, 
            "diasMora": 0, 
            "operacionUId": 17, 
            "cantidadCuotasImpagas": 0, 
            "deudaTotalAFecha": 1818126.01, 
            "nombreCliente": "PRANKA ERIKA", 
            "cuotasPagasConRetraso": 0, 
            "fechaUltimoPago": "", 
            "tipoAmortizacion": "Francés", 
            "datosAdicionales": "", 
            "estado": "Normal", 
            "tasaMoraVigente": 10, 
            "sucursal": "Casa Matriz", 
            "fechaValor": "2019-12-09", 
            "cantidadCuotas": 0 
        }, 
        { 
            "plazo": 452, 
            "eventosPosteriores": "N", 
            "deudaTotalVencida": 6759733.33, 
            "periodicidad": 30, 
            "simboloMoneda": "$", 
            "fechaVencimiento": "2021-03-05", 
            "producto": { 
            "moneda": "CRC", 
            "papel": "$", 
            "otrosConceptos": "", 
            "productoUId": 72, 
            "nombre": "PRÉSTAMOS-Amortización Automática TF" 
            }, 
            "clienteUId": 4, 
            "fechaProximoVencimiento": "", 
            "tasaVigente": 10, 
            "fechaPrimerCuotaImpaga": "2020-01-08", 
            "valorCuota": -113220.3, 
            "saldoCapital": 89000, 
            "otrosConceptos": "", 
            "cantidadCuotasVencidas": 12, 
            "capitalOriginal": 89000, 
            "tir": 0, 
            "deudaCancelacionTotal": 6759733.33, 
            "diasMora": 0, 
            "operacionUId": 18, 
            "cantidadCuotasImpagas": 12, 
            "deudaTotalAFecha": 6759733.33, 
            "nombreCliente": "PRANKA ERIKA", 
            "cuotasPagasConRetraso": 0, 
            "fechaUltimoPago": "", 
            "tipoAmortizacion": "Francés", 
            "datosAdicionales": "", 
            "estado": "Normal", 
            "tasaMoraVigente": 10, 
            "sucursal": "Casa Matriz", 
            "fechaValor": "2019-12-09", 
            "cantidadCuotas": 12 
        }, 
        { 
            "plazo": 360, 
            "eventosPosteriores": "N", 
            "deudaTotalVencida": 4996392.44, 
            "periodicidad": 30, 
            "simboloMoneda": "$", 
            "fechaVencimiento": "2020-12-03", 
            "producto": { 
            "moneda": "CRC", 
            "papel": "$", 
            "otrosConceptos": "", 
            "productoUId": 72, 
            "nombre": "PRÉSTAMOS-Amortización Automática TF" 
            }, 
            "clienteUId": 4, 
            "fechaProximoVencimiento": "", 
            "tasaVigente": 10, 
            "fechaPrimerCuotaImpaga": "", 
            "valorCuota": -66151.03, 
            "saldoCapital": 52000, 
            "otrosConceptos": "", 
            "cantidadCuotasVencidas": 0, 
            "capitalOriginal": 52000, 
            "tir": 0, 
            "deudaCancelacionTotal": 4996392.44, 
            "diasMora": 0, 
            "operacionUId": 19, 
            "cantidadCuotasImpagas": 0, 
            "deudaTotalAFecha": 4996392.44, 
            "nombreCliente": "PRANKA ERIKA", 
            "cuotasPagasConRetraso": 0, 
            "fechaUltimoPago": "", 
            "tipoAmortizacion": "Francés", 
            "datosAdicionales": "", 
            "estado": "Normal", 
            "tasaMoraVigente": 10, 
            "sucursal": "Casa Matriz", 
            "fechaValor": "2019-12-09", 
            "cantidadCuotas": 0 
        } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "901", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerPrestamosSinMora", 
        "Fecha": "2023-10-25", 
        "Requerimiento": "", 
        "Hora": "12:27:52", 
        "Canal": "BTDIGITAL" 
    } 
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas del prestamo.' }, { Nombre: 'cantidadCuotasImpagas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas impagas.' }, { Nombre: 'cantidadCuotasVencidas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas vencidas.' }, { Nombre: 'capitalOriginal', Tipo: 'Double', Comentarios: 'Capital original del prestamo.' }, { Nombre: 'clienteUId', Tipo: 'Int', Comentarios: 'Identificador unico del cliente.' }, { Nombre: 'cuotasPagasConRetraso', Tipo: 'Int', Comentarios: 'Cantidad de cuotas pagas con retraso.' }, { Nombre: 'datosAdicionales', Tipo: '[sBTDatoAdicional](#sbtdatoadicional)', Comentarios: 'Listado de datos adicionales.' }, { Nombre: 'deudaCancelacionTotal', Tipo: 'Double', Comentarios: 'Monto de cancelacion total.' }, { Nombre: 'deudaTotalAFecha', Tipo: 'Double', Comentarios: 'Monto a pagar para estar al dia.' }, { Nombre: 'deudaTotalVencida', Tipo: 'Double', Comentarios: 'Monto de la deuda vencida a la fecha.' }, { Nombre: 'diasMora', Tipo: 'Int', Comentarios: 'Dias de mora del prestamo.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado.' }, { Nombre: 'eventosPosteriores', Tipo: 'String', Comentarios: 'Hay eventos posteriores (S/N).' }, { Nombre: 'fechaPrimerCuotaImpaga', Tipo: 'Date', Comentarios: 'Fecha de la primera cuota impaga.' }, { Nombre: 'fechaProximoVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento de la proxima cuota.' }, { Nombre: 'fechaUltimoPago', Tipo: 'Date', Comentarios: 'Fecha de ultimo pago de cuota.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha de alta del prestamo.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del prestamo.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos del prestamo.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Periodo entre cuotas.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Descripcion del producto.' }, { Nombre: 'saldoCapital', Tipo: 'Double', Comentarios: 'Saldo de capital.' }, { Nombre: 'simboloMoneda', Tipo: 'Sting', Comentarios: 'Simbolo monetario.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Sucursal del prestamo.' }, { Nombre: 'tasaMoraVigente', Tipo: 'Double', Comentarios: 'Tasa de mora vigente.' }, { Nombre: 'tasaVigente', Tipo: 'Double', Comentarios: 'Tasa vigente.' }, { Nombre: 'tipoAmortizacion', Tipo: 'String', Comentarios: 'Tipo de amortizacion.' }, { Nombre: 'tir', Tipo: 'Double', Comentarios: 'Tir.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor de la cuota.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTProducto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTDatoAdicional', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'detalle', Tipo: 'String', Comentarios: 'Detalle de dato adicional.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
