import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPrestamos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPrestamosComponent1750268694904 {
  pageTitle        = 'Obtener Préstamos';
  description      = `Método para obtener los préstamos de un cliente.`;
  pubName    = 'BTClientes.ObtenerPrestamos';
  programa   = 'RBTPG486';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'cancelado', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'\' para este método].' }];
  outputData = [{ Nombre: 'sdtPrestamos', Tipo: '[sBTPrestamoItem](#sbtprestamoitem)', Comentarios: 'Listado de prestamos del cliente.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de cuenta.' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para el Identificador: [Número de identificador].' }, { Codigo: '40001', Descripcion: 'El cliente no tiene operaciones.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerPrestamos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>0B59FAC5EC89F5A9FBB8D64E</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
      </bts:BTClientes.ObtenerPrestamos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerPrestamos=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "clienteUId": 61,
  }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerPrestamosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>0B59FAC5EC89F5A9FBB8D64E</Token>
         </Btinreq>
         <sdtPrestamos>
            <sBTPrestamoItem>
               <plazo>365</plazo>
               <periodicidad>30</periodicidad>
               <fechaVencimiento>2021-04-09</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>26.0</tasaVigente>
               <idOperacionBT>0010000100101000000000000000002900000000000941001</idOperacionBT>
               <valorCuota>10051.7</valorCuota>
               <saldoCapital>100000.0</saldoCapital>
               <fechaPrimerIncumplimiento>2020-05-09</fechaPrimerIncumplimiento>
               <otrosConceptos></otrosConceptos>
               <idOperacionFmt>0000000941-000</idOperacionFmt>
               <capitalOriginal>100000.0</capitalOriginal>
               <cantidadCuotasPagas>0</cantidadCuotasPagas>
               <operacionUId>9</operacionUId>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <estado>Normal</estado>
               <sucursal>Casa Matriz</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2020-04-09</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>360</plazo>
               <periodicidad>30</periodicidad>
               <fechaVencimiento>2025-01-06</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>23.0</tasaVigente>
               <idOperacionBT>0010000100101000000000000000002900000000001598001</idOperacionBT>
               <valorCuota>10.0</valorCuota>
               <saldoCapital>55.4</saldoCapital>
               <fechaPrimerIncumplimiento>2024-08-12</fechaPrimerIncumplimiento>
               <otrosConceptos></otrosConceptos>
               <idOperacionFmt>0000001598-000</idOperacionFmt>
               <capitalOriginal>72.51</capitalOriginal>
               <cantidadCuotasPagas>6</cantidadCuotasPagas>
               <operacionUId>201</operacionUId>
               <fechaUltimoPago>2024-01-12</fechaUltimoPago>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <estado>Normal</estado>
               <sucursal>Casa Matriz</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2024-01-12</fechaValor>
               <cantidadCuotas>0</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>360</plazo>
               <periodicidad>30</periodicidad>
               <fechaVencimiento>2025-01-06</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>23.0</tasaVigente>
               <idOperacionBT>0010000100101000000000000000002900000000001600001</idOperacionBT>
               <valorCuota>85.78</valorCuota>
               <saldoCapital>670.18</saldoCapital>
               <fechaPrimerIncumplimiento>2024-04-12</fechaPrimerIncumplimiento>
               <otrosConceptos></otrosConceptos>
               <idOperacionFmt>0000001600-000</idOperacionFmt>
               <capitalOriginal>725.18</capitalOriginal>
               <cantidadCuotasPagas>2</cantidadCuotasPagas>
               <operacionUId>212</operacionUId>
               <fechaUltimoPago>2024-03-08</fechaUltimoPago>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <estado>Normal</estado>
               <sucursal>Casa Matriz</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2024-01-12</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>360</plazo>
               <periodicidad>30</periodicidad>
               <fechaVencimiento>2025-03-03</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>23.0</tasaVigente>
               <idOperacionBT>0010000100101000000000000000002900000000001601001</idOperacionBT>
               <valorCuota>777.36</valorCuota>
               <saldoCapital>5803.03</saldoCapital>
               <fechaPrimerIncumplimiento>2024-04-08</fechaPrimerIncumplimiento>
               <otrosConceptos></otrosConceptos>
               <idOperacionFmt>0000001601-000</idOperacionFmt>
               <capitalOriginal>5803.03</capitalOriginal>
               <cantidadCuotasPagas>0</cantidadCuotasPagas>
               <operacionUId>214</operacionUId>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <estado>Normal</estado>
               <sucursal>Casa Matriz</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2024-03-08</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>360</plazo>
               <periodicidad>30</periodicidad>
               <fechaVencimiento>2025-01-06</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>23.0</tasaVigente>
               <idOperacionBT>0010000100101000000000000000002900000000001602001</idOperacionBT>
               <valorCuota>561.84</valorCuota>
               <saldoCapital>5551.49</saldoCapital>
               <fechaPrimerIncumplimiento>2024-03-12</fechaPrimerIncumplimiento>
               <otrosConceptos></otrosConceptos>
               <idOperacionFmt>0000001602-000</idOperacionFmt>
               <capitalOriginal>5801.49</capitalOriginal>
               <cantidadCuotasPagas>1</cantidadCuotasPagas>
               <operacionUId>215</operacionUId>
               <fechaUltimoPago>2024-02-12</fechaUltimoPago>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <estado>Normal</estado>
               <sucursal>Casa Matriz</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2024-01-12</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>360</plazo>
               <periodicidad>30</periodicidad>
               <fechaVencimiento>2025-01-06</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>23.0</tasaVigente>
               <idOperacionBT>0010000100101000000000000000002900000000001603001</idOperacionBT>
               <valorCuota>697.47</valorCuota>
               <saldoCapital>7051.86</saldoCapital>
               <fechaPrimerIncumplimiento>2024-03-12</fechaPrimerIncumplimiento>
               <otrosConceptos></otrosConceptos>
               <idOperacionFmt>0000001603-000</idOperacionFmt>
               <capitalOriginal>7251.86</capitalOriginal>
               <cantidadCuotasPagas>1</cantidadCuotasPagas>
               <operacionUId>216</operacionUId>
               <fechaUltimoPago>2024-02-12</fechaUltimoPago>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <estado>Normal</estado>
               <sucursal>Casa Matriz</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2024-01-12</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>360</plazo>
               <periodicidad>30</periodicidad>
               <fechaVencimiento>2025-04-25</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>23.0</tasaVigente>
               <idOperacionBT>0010000100101000000000000000002900000000001614001</idOperacionBT>
               <valorCuota>699.66</valorCuota>
               <saldoCapital>7001.01</saldoCapital>
               <fechaPrimerIncumplimiento>2024-06-30</fechaPrimerIncumplimiento>
               <otrosConceptos></otrosConceptos>
               <idOperacionFmt>0000001614-000</idOperacionFmt>
               <capitalOriginal>7254.16</capitalOriginal>
               <cantidadCuotasPagas>1</cantidadCuotasPagas>
               <operacionUId>290</operacionUId>
               <fechaUltimoPago>2024-05-30</fechaUltimoPago>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <estado>Normal</estado>
               <sucursal>Casa Matriz</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2024-04-30</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>365</plazo>
               <periodicidad>30</periodicidad>
               <fechaVencimiento>2025-08-05</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>23.0</tasaVigente>
               <idOperacionBT>0010000100101000000000000000002900000000001710001</idOperacionBT>
               <valorCuota>1058.6</valorCuota>
               <saldoCapital>10000.0</saldoCapital>
               <fechaPrimerIncumplimiento>2024-09-05</fechaPrimerIncumplimiento>
               <otrosConceptos></otrosConceptos>
               <idOperacionFmt>0000001710-000</idOperacionFmt>
               <capitalOriginal>10000.0</capitalOriginal>
               <cantidadCuotasPagas>0</cantidadCuotasPagas>
               <operacionUId>833</operacionUId>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <estado>Normal</estado>
               <sucursal>Casa Matriz</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2024-08-05</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>365</plazo>
               <periodicidad>30</periodicidad>
               <fechaVencimiento>2019-12-10</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>19.0</tasaVigente>
               <idOperacionBT>0010000100103000000000000000002900000000000627001</idOperacionBT>
               <valorCuota>1315.17</valorCuota>
               <saldoCapital>20482.89</saldoCapital>
               <fechaPrimerIncumplimiento/>
               <otrosConceptos/>
               <idOperacionFmt>0000000627-000</idOperacionFmt>
               <capitalOriginal>20500.0</capitalOriginal>
               <cantidadCuotasPagas>0</cantidadCuotasPagas>
               <operacionUId>270</operacionUId>
               <fechaUltimoPago/>
               <tipoAmortizacion/>
               <estado>Normal</estado>
               <sucursal>Casa Matriz</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2018-12-10</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>3600</plazo>
               <periodicidad>30</periodicidad>
               <fechaVencimiento>2029-09-07</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>10.0</tasaVigente>
               <idOperacionBT>0010000100103000000000000000002900000000000803001</idOperacionBT>
               <valorCuota>61600.1</valorCuota>
               <saldoCapital>499982.89</saldoCapital>
               <fechaPrimerIncumplimiento/>
               <otrosConceptos/>
               <idOperacionFmt>0000000803-000</idOperacionFmt>
               <capitalOriginal>500000.0</capitalOriginal>
               <cantidadCuotasPagas>0</cantidadCuotasPagas>
               <operacionUId>271</operacionUId>
               <fechaUltimoPago/>
               <tipoAmortizacion/>
               <estado>Normal</estado>
               <sucursal>Casa Matriz</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2019-10-30</fechaValor>
               <cantidadCuotas>120</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>1800</plazo>
               <periodicidad>30</periodicidad>
               <fechaVencimiento>2024-10-03</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>5.0</tasaVigente>
               <idOperacionBT>0010000100103000000000000000002900000000000804001</idOperacionBT>
               <valorCuota>19239.7</valorCuota>
               <saldoCapital>256556.69</saldoCapital>
               <fechaPrimerIncumplimiento/>
               <otrosConceptos/>
               <idOperacionFmt>0000000804-000</idOperacionFmt>
               <capitalOriginal>300000.0</capitalOriginal>
               <cantidadCuotasPagas>30</cantidadCuotasPagas>
               <operacionUId>272</operacionUId>
               <fechaUltimoPago/>
               <tipoAmortizacion/>
               <estado>Normal</estado>
               <sucursal>Casa Matriz</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2019-10-30</fechaValor>
               <cantidadCuotas>60</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>450</plazo>
               <periodicidad>15</periodicidad>
               <fechaVencimiento>2021-01-22</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>10.0</tasaVigente>
               <idOperacionBT>0010000100103000000000000000002900000000000805001</idOperacionBT>
               <valorCuota>5811.71</valorCuota>
               <saldoCapital>36556.69</saldoCapital>
               <fechaPrimerIncumplimiento/>
               <otrosConceptos/>
               <idOperacionFmt>0000000805-000</idOperacionFmt>
               <capitalOriginal>80000.0</capitalOriginal>
               <cantidadCuotasPagas>0</cantidadCuotasPagas>
               <operacionUId>273</operacionUId>
               <fechaUltimoPago/>
               <tipoAmortizacion/>
               <estado>Normal</estado>
               <sucursal>Casa Matriz</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2019-10-30</fechaValor>
               <cantidadCuotas>30</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>1080</plazo>
               <periodicidad>30</periodicidad>
               <fechaVencimiento>2022-10-14</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>5.0</tasaVigente>
               <idOperacionBT>0010000100103000000000000000002900000000000806001</idOperacionBT>
               <valorCuota>7121.15</valorCuota>
               <saldoCapital>56556.69</saldoCapital>
               <fechaPrimerIncumplimiento/>
               <otrosConceptos/>
               <idOperacionFmt>0000000806-000</idOperacionFmt>
               <capitalOriginal>100000.0</capitalOriginal>
               <cantidadCuotasPagas>0</cantidadCuotasPagas>
               <operacionUId>274</operacionUId>
               <fechaUltimoPago/>
               <tipoAmortizacion/>
               <estado>Normal</estado>
               <sucursal>Casa Matriz</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2019-10-30</fechaValor>
               <cantidadCuotas>36</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>365</plazo>
               <periodicidad>0</periodicidad>
               <fechaVencimiento>2022-10-14</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS, Amortización Libre TF</nombre>
               </producto>
               <tasaVigente>5.0</tasaVigente>
               <idOperacionBT>0010100000103000000000000000002900000000000079002</idOperacionBT>
               <valorCuota>7121.15</valorCuota>
               <saldoCapital>12056.69</saldoCapital>
               <fechaPrimerIncumplimiento/>
               <otrosConceptos/>
               <idOperacionFmt>0000000079-000</idOperacionFmt>
               <capitalOriginal>55500.0</capitalOriginal>
               <cantidadCuotasPagas>0</cantidadCuotasPagas>
               <operacionUId>275</operacionUId>
               <fechaUltimoPago/>
               <tipoAmortizacion/>
               <estado>Normal</estado>
               <sucursal>Sucursal Ciudad de la Costa</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2018-02-13</fechaValor>
               <cantidadCuotas>24</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>366</plazo>
               <periodicidad>0</periodicidad>
               <fechaVencimiento>2016-05-04</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>10.0</tasaVigente>
               <idOperacionBT>0010100000103000000000000000002900000000000083001</idOperacionBT>
               <valorCuota>32099.83</valorCuota>
               <saldoCapital>293550.45</saldoCapital>
               <fechaPrimerIncumplimiento/>
               <otrosConceptos/>
               <idOperacionFmt>0000000083-000</idOperacionFmt>
               <capitalOriginal>368496.88</capitalOriginal>
               <cantidadCuotasPagas>1</cantidadCuotasPagas>
               <operacionUId>276</operacionUId>
               <fechaUltimoPago/>
               <tipoAmortizacion/>
               <estado>Normal</estado>
               <sucursal>Sucursal Ciudad de la Costa</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2015-05-04</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTPrestamoItem>
            <sBTPrestamoItem>
               <plazo>361</plazo>
               <periodicidad>30</periodicidad>
               <fechaVencimiento>2024-10-21</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>198</productoUId>
                  <nombre>PRÉSTAMOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>10.0</tasaVigente>
               <idOperacionBT>0010100000103000000000000000002900000000001372001</idOperacionBT>
               <valorCuota>1033.47</valorCuota>
               <saldoCapital>5980.2</saldoCapital>
               <fechaPrimerIncumplimiento>2024-04-22</fechaPrimerIncumplimiento>
               <otrosConceptos></otrosConceptos>
               <idOperacionFmt>0000001372-000</idOperacionFmt>
               <capitalOriginal>10000.0</capitalOriginal>
               <cantidadCuotasPagas>5</cantidadCuotasPagas>
               <operacionUId>20</operacionUId>
               <fechaUltimoPago>2024-04-09</fechaUltimoPago>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <estado>Normal</estado>
               <sucursal>Sucursal Ciudad de la Costa</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2023-10-20</fechaValor>
               <cantidadCuotas>12</cantidadCuotas>
            </sBTPrestamoItem>
         </sdtPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-11</Fecha>
            <Hora>15:46:20</Hora>
            <Numero>25277</Numero>
            <Servicio>BTClientes.ObtenerPrestamos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerPrestamosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "sdtPrestamos": {
         "sBTPrestamoItem": [
         {
            "plazo": 365,
            "periodicidad": 30,
            "fechaVencimiento": "2021-04-09",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
            },
            "tasaVigente": 26,
            "idOperacionBT": 1.0000100101e+46,
            "valorCuota": 10051.7,
            "saldoCapital": 100000,
            "fechaPrimerIncumplimiento": "2020-05-09",
            "otrosConceptos": "",
            "idOperacionFmt": "0000000941-000",
            "capitalOriginal": 100000,
            "cantidadCuotasPagas": 0,
            "operacionUId": 9,
            "fechaUltimoPago": "",
            "tipoAmortizacion": "Francés con Seg.e Impu.",
            "estado": "Normal",
            "sucursal": "Casa Matriz",
            "tipoProducto": "AM",
            "fechaValor": "2020-04-09",
            "cantidadCuotas": 12
         },
         {
            "plazo": 360,
            "periodicidad": 30,
            "fechaVencimiento": "2025-01-06",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
            },
            "tasaVigente": 23,
            "idOperacionBT": 1.0000100101e+46,
            "valorCuota": 10,
            "saldoCapital": 55.4,
            "fechaPrimerIncumplimiento": "2024-08-12",
            "otrosConceptos": "",
            "idOperacionFmt": "0000001598-000",
            "capitalOriginal": 72.51,
            "cantidadCuotasPagas": 6,
            "operacionUId": 201,
            "fechaUltimoPago": "2024-01-12",
            "tipoAmortizacion": "Francés con Seg.e Impu.",
            "estado": "Normal",
            "sucursal": "Casa Matriz",
            "tipoProducto": "AM",
            "fechaValor": "2024-01-12",
            "cantidadCuotas": 0
         },
         {
            "plazo": 360,
            "periodicidad": 30,
            "fechaVencimiento": "2025-01-06",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
            },
            "tasaVigente": 23,
            "idOperacionBT": 1.0000100101e+46,
            "valorCuota": 85.78,
            "saldoCapital": 670.18,
            "fechaPrimerIncumplimiento": "2024-04-12",
            "otrosConceptos": "",
            "idOperacionFmt": "0000001600-000",
            "capitalOriginal": 725.18,
            "cantidadCuotasPagas": 2,
            "operacionUId": 212,
            "fechaUltimoPago": "2024-03-08",
            "tipoAmortizacion": "Francés con Seg.e Impu.",
            "estado": "Normal",
            "sucursal": "Casa Matriz",
            "tipoProducto": "AM",
            "fechaValor": "2024-01-12",
            "cantidadCuotas": 12
         },
         {
            "plazo": 360,
            "periodicidad": 30,
            "fechaVencimiento": "2025-03-03",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
            },
            "tasaVigente": 23,
            "idOperacionBT": 1.0000100101e+46,
            "valorCuota": 777.36,
            "saldoCapital": 5803.03,
            "fechaPrimerIncumplimiento": "2024-04-08",
            "otrosConceptos": "",
            "idOperacionFmt": "0000001601-000",
            "capitalOriginal": 5803.03,
            "cantidadCuotasPagas": 0,
            "operacionUId": 214,
            "fechaUltimoPago": "",
            "tipoAmortizacion": "Francés con Seg.e Impu.",
            "estado": "Normal",
            "sucursal": "Casa Matriz",
            "tipoProducto": "AM",
            "fechaValor": "2024-03-08",
            "cantidadCuotas": 12
         },
         {
            "plazo": 360,
            "periodicidad": 30,
            "fechaVencimiento": "2025-01-06",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
            },
            "tasaVigente": 23,
            "idOperacionBT": 1.0000100101e+46,
            "valorCuota": 561.84,
            "saldoCapital": 5551.49,
            "fechaPrimerIncumplimiento": "2024-03-12",
            "otrosConceptos": "",
            "idOperacionFmt": "0000001602-000",
            "capitalOriginal": 5801.49,
            "cantidadCuotasPagas": 1,
            "operacionUId": 215,
            "fechaUltimoPago": "2024-02-12",
            "tipoAmortizacion": "Francés con Seg.e Impu.",
            "estado": "Normal",
            "sucursal": "Casa Matriz",
            "tipoProducto": "AM",
            "fechaValor": "2024-01-12",
            "cantidadCuotas": 12
         },
         {
            "plazo": 360,
            "periodicidad": 30,
            "fechaVencimiento": "2025-01-06",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
            },
            "tasaVigente": 23,
            "idOperacionBT": 1.0000100101e+46,
            "valorCuota": 697.47,
            "saldoCapital": 7051.86,
            "fechaPrimerIncumplimiento": "2024-03-12",
            "otrosConceptos": "",
            "idOperacionFmt": "0000001603-000",
            "capitalOriginal": 7251.86,
            "cantidadCuotasPagas": 1,
            "operacionUId": 216,
            "fechaUltimoPago": "2024-02-12",
            "tipoAmortizacion": "Francés con Seg.e Impu.",
            "estado": "Normal",
            "sucursal": "Casa Matriz",
            "tipoProducto": "AM",
            "fechaValor": "2024-01-12",
            "cantidadCuotas": 12
         },
         {
            "plazo": 360,
            "periodicidad": 30,
            "fechaVencimiento": "2025-04-25",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
            },
            "tasaVigente": 23,
            "idOperacionBT": 1.0000100101e+46,
            "valorCuota": 699.66,
            "saldoCapital": 7001.01,
            "fechaPrimerIncumplimiento": "2024-06-30",
            "otrosConceptos": "",
            "idOperacionFmt": "0000001614-000",
            "capitalOriginal": 7254.16,
            "cantidadCuotasPagas": 1,
            "operacionUId": 290,
            "fechaUltimoPago": "2024-05-30",
            "tipoAmortizacion": "Francés con Seg.e Impu.",
            "estado": "Normal",
            "sucursal": "Casa Matriz",
            "tipoProducto": "AM",
            "fechaValor": "2024-04-30",
            "cantidadCuotas": 12
         },
         {
            "plazo": 365,
            "periodicidad": 30,
            "fechaVencimiento": "2025-08-05",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
            },
            "tasaVigente": 23,
            "idOperacionBT": 1.0000100101e+46,
            "valorCuota": 1058.6,
            "saldoCapital": 10000,
            "fechaPrimerIncumplimiento": "2024-09-05",
            "otrosConceptos": "",
            "idOperacionFmt": "0000001710-000",
            "capitalOriginal": 10000,
            "cantidadCuotasPagas": 0,
            "operacionUId": 833,
            "fechaUltimoPago": "",
            "tipoAmortizacion": "Francés con Seg.e Impu.",
            "estado": "Normal",
            "sucursal": "Casa Matriz",
            "tipoProducto": "AM",
            "fechaValor": "2024-08-05",
            "cantidadCuotas": 12
         },
         {
            "plazo": 365,
            "periodicidad": 30,
            "fechaVencimiento": "2019-12-10",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS, Amortización Automática TF"
            },
            "tasaVigente": 19,
            "idOperacionBT": 1.0000100103e+46,
            "valorCuota": 1315.17,
            "saldoCapital": 20482.89,
            "fechaPrimerIncumplimiento": "",
            "otrosConceptos": "",
            "idOperacionFmt": "0000000627-000",
            "capitalOriginal": 20500,
            "cantidadCuotasPagas": 0,
            "operacionUId": 270,
            "fechaUltimoPago": "",
            "tipoAmortizacion": "",
            "estado": "Normal",
            "sucursal": "Casa Matriz",
            "tipoProducto": "AM",
            "fechaValor": "2018-12-10",
            "cantidadCuotas": 12
         },
         {
            "plazo": 3600,
            "periodicidad": 30,
            "fechaVencimiento": "2029-09-07",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS, Amortización Automática TF"
            },
            "tasaVigente": 10,
            "idOperacionBT": 1.0000100103e+46,
            "valorCuota": 61600.1,
            "saldoCapital": 499982.89,
            "fechaPrimerIncumplimiento": "",
            "otrosConceptos": "",
            "idOperacionFmt": "0000000803-000",
            "capitalOriginal": 500000,
            "cantidadCuotasPagas": 0,
            "operacionUId": 271,
            "fechaUltimoPago": "",
            "tipoAmortizacion": "",
            "estado": "Normal",
            "sucursal": "Casa Matriz",
            "tipoProducto": "AM",
            "fechaValor": "2019-10-30",
            "cantidadCuotas": 120
         },
         {
            "plazo": 1800,
            "periodicidad": 30,
            "fechaVencimiento": "2024-10-03",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS, Amortización Automática TF"
            },
            "tasaVigente": 5,
            "idOperacionBT": 1.0000100103e+46,
            "valorCuota": 19239.7,
            "saldoCapital": 256556.69,
            "fechaPrimerIncumplimiento": "",
            "otrosConceptos": "",
            "idOperacionFmt": "0000000804-000",
            "capitalOriginal": 300000,
            "cantidadCuotasPagas": 30,
            "operacionUId": 272,
            "fechaUltimoPago": "",
            "tipoAmortizacion": "",
            "estado": "Normal",
            "sucursal": "Casa Matriz",
            "tipoProducto": "AM",
            "fechaValor": "2019-10-30",
            "cantidadCuotas": 60
         },
         {
            "plazo": 450,
            "periodicidad": 15,
            "fechaVencimiento": "2021-01-22",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS, Amortización Automática TF"
            },
            "tasaVigente": 10,
            "idOperacionBT": 1.0000100103e+46,
            "valorCuota": 5811.71,
            "saldoCapital": 36556.69,
            "fechaPrimerIncumplimiento": "",
            "otrosConceptos": "",
            "idOperacionFmt": "0000000805-000",
            "capitalOriginal": 80000,
            "cantidadCuotasPagas": 0,
            "operacionUId": 273,
            "fechaUltimoPago": "",
            "tipoAmortizacion": "",
            "estado": "Normal",
            "sucursal": "Casa Matriz",
            "tipoProducto": "AM",
            "fechaValor": "2019-10-30",
            "cantidadCuotas": 30
         },
         {
            "plazo": 1080,
            "periodicidad": 30,
            "fechaVencimiento": "2022-10-14",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS, Amortización Automática TF"
            },
            "tasaVigente": 5,
            "idOperacionBT": 1.0000100103e+46,
            "valorCuota": 7121.15,
            "saldoCapital": 56556.69,
            "fechaPrimerIncumplimiento": "",
            "otrosConceptos": "",
            "idOperacionFmt": "0000000806-000",
            "capitalOriginal": 100000,
            "cantidadCuotasPagas": 0,
            "operacionUId": 274,
            "fechaUltimoPago": "",
            "tipoAmortizacion": "",
            "estado": "Normal",
            "sucursal": "Casa Matriz",
            "tipoProducto": "AM",
            "fechaValor": "2019-10-30",
            "cantidadCuotas": 36
         },
         {
            "plazo": 365,
            "periodicidad": 0,
            "fechaVencimiento": "2022-10-14",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS, Amortización Libre TF"
            },
            "tasaVigente": 5,
            "idOperacionBT": 1.0100000103e+46,
            "valorCuota": 7121.15,
            "saldoCapital": 12056.69,
            "fechaPrimerIncumplimiento": "",
            "otrosConceptos": "",
            "idOperacionFmt": "0000000079-000",
            "capitalOriginal": 55500,
            "cantidadCuotasPagas": 0,
            "operacionUId": 275,
            "fechaUltimoPago": "",
            "tipoAmortizacion": "",
            "estado": "Normal",
            "sucursal": "Sucursal Ciudad de la Costa",
            "tipoProducto": "AM",
            "fechaValor": "2018-02-13",
            "cantidadCuotas": 24
         },
         {
            "plazo": 366,
            "periodicidad": 0,
            "fechaVencimiento": "2016-05-04",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS, Amortización Automática TF"
            },
            "tasaVigente": 10,
            "idOperacionBT": 1.0100000103e+46,
            "valorCuota": 32099.83,
            "saldoCapital": 293550.45,
            "fechaPrimerIncumplimiento": "",
            "otrosConceptos": "",
            "idOperacionFmt": "0000000083-000",
            "capitalOriginal": 368496.88,
            "cantidadCuotasPagas": 1,
            "operacionUId": 276,
            "fechaUltimoPago": "",
            "tipoAmortizacion": "",
            "estado": "Normal",
            "sucursal": "Sucursal Ciudad de la Costa",
            "tipoProducto": "AM",
            "fechaValor": "2015-05-04",
            "cantidadCuotas": 12
         },
         {
            "plazo": 361,
            "periodicidad": 30,
            "fechaVencimiento": "2024-10-21",
            "producto": {
               "papel": "$",
               "moneda": "$",
               "productoUId": 198,
               "nombre": "PRÉSTAMOS, Amortización Automática TF"
            },
            "tasaVigente": 10,
            "idOperacionBT": 1.0100000103e+46,
            "valorCuota": 1033.47,
            "saldoCapital": 5980.2,
            "fechaPrimerIncumplimiento": "2024-04-22",
            "otrosConceptos": "",
            "idOperacionFmt": "0000001372-000",
            "capitalOriginal": 10000,
            "cantidadCuotasPagas": 5,
            "operacionUId": 20,
            "fechaUltimoPago": "2024-04-09",
            "tipoAmortizacion": "Francés con Seg.e Impu.",
            "estado": "Normal",
            "sucursal": "Sucursal Ciudad de la Costa",
            "tipoProducto": "AM",
            "fechaValor": "2023-10-20",
            "cantidadCuotas": 12
         }
         ]
      },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTClientes.ObtenerPrestamos",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sbtprestamoitem', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'cantidadCuotasPagas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas del préstamo.' }, { Nombre: 'capitalOriginal', Tipo: 'Double', Comentarios: 'Capital original del préstamo.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del préstamo.' }, { Nombre: 'fechaPrimerIncumplimiento', Tipo: 'Date', Comentarios: 'Fecha de primer incumplimiento.' }, { Nombre: 'fechaUltimoPago', Tipo: 'Date', Comentarios: 'Fecha de último pago de la cuota.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del préstamo.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador texto de operación.' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Importe otros conceptos.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Período entre cuotas.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'saldoCapital', Tipo: 'Double', Comentarios: 'Saldo de capital.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'tasaVigente', Tipo: 'Double', Comentarios: 'Tasa vigente.' }, { Nombre: 'tipoAmortizacion', Tipo: 'String', Comentarios: 'Tipo de amortización.' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: 'Tipo de producto pasivo (Cuenta Corriente: \'CC\', Caja de Ahorro: \'CA\').' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor de la cuota.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
