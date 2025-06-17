import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ResimularAmpliacion',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ResimularAmpliacionComponent {
  pageTitle = 'Resimular Ampliacion';
  description = `Metodo para resimular la ampliacion de un prestamo.`;
  pubName    = 'BTPrestamos.ResimularAmpliacion';
  programa   = 'RBTPG575';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'simulacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la simulacion.' }, { Nombre: 'sdtSimulacionUpdate', Tipo: '[sBTSimulacionUpdate](#sbtsimulacionupdate)', Comentarios: 'Datos de la resimulacion.' }, { Nombre: 'accion', Tipo: 'String', Comentarios: '[Hidden: Valor fijo "AMPLI" para este metodo].' }];
  outputData = [{ Nombre: 'sdtSimulacion', Tipo: '[sBTSimulacionOutput](#sbtsimulacionoutput)', Comentarios: 'Datos de salida de la simulacion.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de Ampliacion.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30003', Descripcion: 'No se recupero la cuenta para el Identificador: [Numero de Identificador].' }, { Codigo: '30004', Descripcion: 'El identificador de Ampliacion no es valido.' }, { Codigo: '30005', Descripcion: 'El prestamo no pertenece al cliente.' }, { Codigo: '30006', Descripcion: 'No se recupero la operacionUId de la operacion a ampliar.' }, { Codigo: '30007', Descripcion: 'No se recupero la operacion a cancelar para el identificador [Numero de Identificador].' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ResimularAmpliacion>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>308D1CEF6605E4CB1E0F5F84</bts:Token>
         </bts:Btinreq>
         <bts:simulacionUId>16</bts:simulacionUId>
         <bts:sdtSimulacionUpdate>
            <bts:fechaPrimerPago>2023-06-21</bts:fechaPrimerPago>
            <bts:otrosConceptos>
               <bts:SdtsBTConcepto>
                  <bts:texto></bts:texto>
                  <bts:valor></bts:valor>
                  <bts:concepto></bts:concepto>
               </bts:SdtsBTConcepto>
            </bts:otrosConceptos>
            <bts:diaPago></bts:diaPago>
            <bts:clienteUid>370</bts:clienteUid>
         </bts:sdtSimulacionUpdate>
      </bts:BTPrestamos.ResimularAmpliacion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ResimularAmpliacion=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "GZ",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
      "simulacionUId": 16,
      "sdtSimulacionUpdate": {
         "fechaPrimerPago": "2023-06-21",
         "otrosConceptos": {
         "SdtsBTConcepto": {
            "texto": "",
            "valor": "",
            "concepto": ""
         }
         },
         "diaPago": "",
         "clienteUid": 370
      }
  }'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ResimularAmpliacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>308D1CEF6605E4CB1E0F5F84</Token>
         </Btinreq>
         <sdtSimulacion>
            <cft>218.87</cft>
            <plus>0.0</plus>
            <nomSucursal>Casa Matriz</nomSucursal>
            <otrosConceptos></otrosConceptos>
            <tasaNominalAnual>5.0</tasaNominalAnual>
            <precio>0.0</precio>
            <tipoAmortizacionDsc>Francés con Seg.e Impu.</tipoAmortizacionDsc>
            <cronograma>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>68207.76</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones>
                     <SdtsBTComisionPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>F.H.A.</descripcion>
                        <importe>508.57</importe>
                        <modificable/>
                        <codigo>200</codigo>
                     </SdtsBTComisionPrestamo>
                  </detalleComisiones>
                  <nroCuota>1</nroCuota>
                  <intereses>0.0</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2023-06-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>-25300.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>450.0</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>0</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>-24850.0</seguros>
                  <comisiones>508.57</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>38517.74</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>2</nroCuota>
                  <intereses>3829.28</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2023-07-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>419.31</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1519.31</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>38693.37</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>3</nroCuota>
                  <intereses>3670.99</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2023-08-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>401.97</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1501.97</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>38869.79</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>4</nroCuota>
                  <intereses>3511.98</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2023-09-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>384.56</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1484.56</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>39047.02</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>5</nroCuota>
                  <intereses>3352.24</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2023-10-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>367.07</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1467.07</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>39225.06</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>6</nroCuota>
                  <intereses>3191.77</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2023-11-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>349.5</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1449.5</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>39403.91</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>7</nroCuota>
                  <intereses>3030.57</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2023-12-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>331.85</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1431.85</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>39583.57</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>8</nroCuota>
                  <intereses>2868.64</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2024-01-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>314.12</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1414.12</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>39764.06</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>9</nroCuota>
                  <intereses>2705.97</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2024-02-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>296.3</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1396.3</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>39945.37</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>10</nroCuota>
                  <intereses>2542.55</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2024-03-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>278.41</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1378.41</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>40127.51</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>11</nroCuota>
                  <intereses>2378.39</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2024-04-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>260.43</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1360.43</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>40310.46</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>12</nroCuota>
                  <intereses>2213.49</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2024-05-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>242.38</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1342.38</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>40494.26</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>13</nroCuota>
                  <intereses>2047.83</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2024-06-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>224.24</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1324.24</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>40678.91</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>14</nroCuota>
                  <intereses>1881.41</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2024-07-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>206.01</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1306.01</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>40864.38</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>15</nroCuota>
                  <intereses>1714.24</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2024-08-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>187.71</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1287.71</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>41050.71</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>16</nroCuota>
                  <intereses>1546.3</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2024-09-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>169.32</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1269.32</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>41237.88</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>17</nroCuota>
                  <intereses>1377.6</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2024-10-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>150.85</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1250.85</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>41425.91</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>18</nroCuota>
                  <intereses>1208.13</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2024-11-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>132.29</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1232.29</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>41614.79</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>19</nroCuota>
                  <intereses>1037.89</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2024-12-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>113.65</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1213.65</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>41804.54</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>20</nroCuota>
                  <intereses>866.87</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2025-01-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>94.92</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1194.92</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>41995.15</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>21</nroCuota>
                  <intereses>695.07</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2025-02-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>76.11</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1176.11</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>42186.64</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>22</nroCuota>
                  <intereses>522.48</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2025-03-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>57.21</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1157.21</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>42378.99</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>23</nroCuota>
                  <intereses>349.11</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2025-04-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>38.23</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1138.23</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>0.0</otrosConceptos>
                  <capital>42572.22</capital>
                  <impuestos>0.0</impuestos>
                  <detalleComisiones></detalleComisiones>
                  <nroCuota>24</nroCuota>
                  <intereses>174.95</intereses>
                  <subsidios>0.0</subsidios>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <redondeo>0.0</redondeo>
                  <cuota>43866.33</cuota>
                  <fechaPago>2025-05-21</fechaPago>
                  <detalleSeguros>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR - Vida - Variante 1</descripcion>
                        <importe>1100.0</importe>
                        <tipo>VIDA</tipo>
                        <codigo>100</codigo>
                     </SdtsBTSeguroPrestamo>
                     <SdtsBTSeguroPrestamo>
                        <porcentaje>0.0</porcentaje>
                        <descripcion>SANCOR- Desempleo %saldos</descripcion>
                        <importe>19.16</importe>
                        <tipo>DESEMPLEO</tipo>
                        <codigo>200</codigo>
                     </SdtsBTSeguroPrestamo>
                  </detalleSeguros>
                  <plazo>30</plazo>
                  <detalleConceptos></detalleConceptos>
                  <seguros>1119.16</seguros>
                  <comisiones>0.0</comisiones>
               </SdtsBTCuotaSimulacion>
            </cronograma>
            <comisionesDesembolso>10000.0</comisionesDesembolso>
            <segurosDesembolso>0.0</segurosDesembolso>
            <cantidadCuotas>24</cantidadCuotas>
            <impuestosDesembolso>0.0</impuestosDesembolso>
            <fechaPrimerPago>2023-06-21</fechaPrimerPago>
            <operacionUId>415</operacionUId>
            <valorCuota>43866.33</valorCuota>
            <diasRevision>0</diasRevision>
            <totalSeguros>5565.6</totalSeguros>
            <plazo>690</plazo>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>198</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <capital>1000000.0</capital>
            <tipoAmortizacionCod>3</tipoAmortizacionCod>
            <totalIntereses>46717.75</totalIntereses>
            <seguros>
               <SdtsBTSeguroPrestamo>
                  <porcentaje>0.0</porcentaje>
                  <descripcion>SANCOR- Desempleo %saldos</descripcion>
                  <importe>5565.6</importe>
                  <tipo>DESEMPLEO</tipo>
                  <codigo>200</codigo>
               </SdtsBTSeguroPrestamo>
            </seguros>
            <fechaValor>2025-05-30</fechaValor>
            <tasaEfectiva>0.0</tasaEfectiva>
            <coeficienteIVA>0.0</coeficienteIVA>
            <totalImpuestos>0.0</totalImpuestos>
            <periodicidad>30</periodicidad>
            <tasaEfectivaAnual>5.116339</tasaEfectivaAnual>
            <totalPrestamo>1062791.92</totalPrestamo>
            <fechaVencimiento>2025-05-21</fechaVencimiento>
            <tasa>5.0</tasa>
            <redondeo>0.0</redondeo>
            <montoDesembolso>990000.0</montoDesembolso>
            <comisiones>
               <SdtsBTComisionPrestamo>
                  <porcentaje>0.0</porcentaje>
                  <descripcion>Hipotecario - Importe Fijo</descripcion>
                  <importe>0.0</importe>
                  <modificable/>
                  <codigo>141</codigo>
               </SdtsBTComisionPrestamo>
               <SdtsBTComisionPrestamo>
                  <porcentaje>0.0</porcentaje>
                  <descripcion>F.H.A.</descripcion>
                  <importe>10000.0</importe>
                  <modificable/>
                  <codigo>200</codigo>
               </SdtsBTComisionPrestamo>
            </comisiones>
            <totalComisiones>10508.57</totalComisiones>
            <comisionesCuota>
               <SdtsBTComisionPrestamo>
                  <porcentaje>0.0</porcentaje>
                  <descripcion>F.H.A.</descripcion>
                  <importe>508.57</importe>
                  <modificable/>
                  <codigo>200</codigo>
               </SdtsBTComisionPrestamo>
            </comisionesCuota>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35545</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ResimularAmpliacion</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-05-26</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>14:58:49</Hora>
         </Btoutreq>
      </BTPrestamos.ResimularAmpliacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "sdtSimulacion": {
          "cft": 218.87,
          "plus": 0,
          "nomSucursal": "Casa Matriz",
          "otrosConceptos": "",
          "tasaNominalAnual": 5,
          "precio": 0,
          "tipoAmortizacionDsc": "Francés con Seg.e Impu.",
          "cronograma": {
            "SdtsBTCuotaSimulacion": [
              {
                "otrosConceptos": 0,
                "capital": 68207.76,
                "impuestos": 0,
                "detalleComisiones": {
                  "SdtsBTComisionPrestamo": {
                    "porcentaje": 0,
                    "descripcion": "F.H.A.",
                    "importe": 508.57,
                    "modificable": "",
                    "codigo": 200
                  }
                },
                "nroCuota": 1,
                "intereses": 0,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2023-06-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": -25300,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 450,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 0,
                "detalleConceptos": "",
                "seguros": -24850,
                "comisiones": 508.57
              },
              {
                "otrosConceptos": 0,
                "capital": 38517.74,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 2,
                "intereses": 3829.28,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2023-07-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 419.31,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1519.31,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 38693.37,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 3,
                "intereses": 3670.99,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2023-08-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 401.97,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1501.97,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 38869.79,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 4,
                "intereses": 3511.98,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2023-09-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 384.56,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1484.56,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 39047.02,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 5,
                "intereses": 3352.24,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2023-10-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 367.07,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1467.07,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 39225.06,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 6,
                "intereses": 3191.77,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2023-11-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 349.5,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1449.5,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 39403.91,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 7,
                "intereses": 3030.57,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2023-12-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 331.85,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1431.85,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 39583.57,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 8,
                "intereses": 2868.64,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2024-01-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 314.12,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1414.12,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 39764.06,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 9,
                "intereses": 2705.97,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2024-02-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 296.3,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1396.3,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 39945.37,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 10,
                "intereses": 2542.55,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2024-03-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 278.41,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1378.41,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 40127.51,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 11,
                "intereses": 2378.39,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2024-04-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 260.43,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1360.43,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 40310.46,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 12,
                "intereses": 2213.49,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2024-05-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 242.38,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1342.38,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 40494.26,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 13,
                "intereses": 2047.83,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2024-06-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 224.24,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1324.24,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 40678.91,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 14,
                "intereses": 1881.41,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2024-07-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 206.01,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1306.01,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 40864.38,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 15,
                "intereses": 1714.24,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2024-08-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 187.71,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1287.71,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 41050.71,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 16,
                "intereses": 1546.3,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2024-09-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 169.32,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1269.32,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 41237.88,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 17,
                "intereses": 1377.6,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2024-10-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 150.85,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1250.85,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 41425.91,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 18,
                "intereses": 1208.13,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2024-11-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 132.29,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1232.29,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 41614.79,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 19,
                "intereses": 1037.89,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2024-12-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 113.65,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1213.65,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 41804.54,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 20,
                "intereses": 866.87,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2025-01-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 94.92,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1194.92,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 41995.15,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 21,
                "intereses": 695.07,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2025-02-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 76.11,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1176.11,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 42186.64,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 22,
                "intereses": 522.48,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2025-03-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 57.21,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1157.21,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 42378.99,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 23,
                "intereses": 349.11,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2025-04-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 38.23,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1138.23,
                "comisiones": 0
              },
              {
                "otrosConceptos": 0,
                "capital": 42572.22,
                "impuestos": 0,
                "detalleComisiones": "",
                "nroCuota": 24,
                "intereses": 174.95,
                "subsidios": 0,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "redondeo": 0,
                "cuota": 43866.33,
                "fechaPago": "2025-05-21",
                "detalleSeguros": {
                  "SdtsBTSeguroPrestamo": [
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR - Vida - Variante 1",
                      "importe": 1100,
                      "tipo": "VIDA",
                      "codigo": 100
                    },
                    {
                      "porcentaje": 0,
                      "descripcion": "SANCOR- Desempleo %saldos",
                      "importe": 19.16,
                      "tipo": "DESEMPLEO",
                      "codigo": 200
                    }
                  ]
                },
                "plazo": 30,
                "detalleConceptos": "",
                "seguros": 1119.16,
                "comisiones": 0
              }
            ]
          },
          "comisionesDesembolso": 10000,
          "segurosDesembolso": 0,
          "cantidadCuotas": 24,
          "impuestosDesembolso": 0,
          "fechaPrimerPago": "2023-06-21",
          "operacionUId": 415,
          "valorCuota": 43866.33,
          "diasRevision": 0,
          "totalSeguros": 5565.6,
          "plazo": 690,
          "producto": {
            "moneda": "$",
            "papel": "$",
            "productoUId": 198,
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
          },
          "capital": 1000000,
          "tipoAmortizacionCod": 3,
          "totalIntereses": 46717.75,
          "seguros": {
            "SdtsBTSeguroPrestamo": {
              "porcentaje": 0,
              "descripcion": "SANCOR- Desempleo %saldos",
              "importe": 5565.6,
              "tipo": "DESEMPLEO",
              "codigo": 200
            }
          },
          "fechaValor": "2025-05-30",
          "tasaEfectiva": 0,
          "coeficienteIVA": 0,
          "totalImpuestos": 0,
          "periodicidad": 30,
          "tasaEfectivaAnual": 5.116339,
          "totalPrestamo": 1062791.92,
          "fechaVencimiento": "2025-05-21",
          "tasa": 5,
          "redondeo": 0,
          "montoDesembolso": 990000,
          "comisiones": {
            "SdtsBTComisionPrestamo": [
              {
                "porcentaje": 0,
                "descripcion": "Hipotecario - Importe Fijo",
                "importe": 0,
                "modificable": "",
                "codigo": 141
              },
              {
                "porcentaje": 0,
                "descripcion": "F.H.A.",
                "importe": 10000,
                "modificable": "",
                "codigo": 200
              }
            ]
          },
          "totalComisiones": 10508.57,
          "comisionesCuota": {
            "SdtsBTComisionPrestamo": {
              "porcentaje": 0,
              "descripcion": "F.H.A.",
              "importe": 508.57,
              "modificable": "",
              "codigo": 200
            }
          }
        },
    "Erroresnegocio":,
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTPrestamos.ResimularAmpliacion",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTSimulacionUpdate', fields: [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'diaPago', Tipo: 'Byte', Comentarios: 'Dias de pago.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha del primer pago.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto1)', Comentarios: 'Otros conceptos.' }, { Nombre: '### sBTConcepto1', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTConcepto1', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital.' }, { Nombre: 'cft', Tipo: 'Double', Comentarios: 'Costo financiero total.' }, { Nombre: 'coeficienteIVA', Tipo: 'Double', Comentarios: 'Coeficiente IVA.' }, { Nombre: 'comisiones', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamo)', Comentarios: 'Listado de comisiones.' }, { Nombre: 'comisionesCuota', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamo)', Comentarios: 'Listado de comisiones de cuota.' }, { Nombre: 'comisionesDesembolso', Tipo: 'Double', Comentarios: 'Comisiones de desembolso.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaSimulacion](#sbtcuotasimulacion)', Comentarios: 'Cronograma del prestamo.' }, { Nombre: 'diasRevision', Tipo: 'Int', Comentarios: 'Dias de revision.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'impuestosDesembolso', Tipo: 'Double', Comentarios: 'Impuestos de desembolso.' }, { Nombre: 'montoDesembolso', Tipo: 'Double', Comentarios: 'Monto de desembolso.' }, { Nombre: 'nomSucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'operacionUid', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto2)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Periodicidad.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'plus', Tipo: 'Double', Comentarios: 'Tasa plus.' }, { Nombre: 'precio', Tipo: 'Double', Comentarios: 'Precio.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'redondeo', Tipo: 'Double', Comentarios: 'Redondeo.' }, { Nombre: 'seguros', Tipo: '[sBTSeguroPrestamo](#sbtseguroprestamo)', Comentarios: 'Listado de seguros.' }, { Nombre: 'segurosDesembolso', Tipo: 'Double', Comentarios: 'Seguros de desembolso.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'tipoAmortizacionCod', Tipo: 'Byte', Comentarios: 'Codigo de tipo amortizacion.' }, { Nombre: 'tipoAmortizacionDsc', Tipo: 'String', Comentarios: 'Tipo de amortizacion.' }, { Nombre: 'totalComisiones', Tipo: 'Double', Comentarios: 'Total de comisiones.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Total de impuestos.' }, { Nombre: 'totalIntereses', Tipo: 'Double', Comentarios: 'Total de intereses.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total de prestamo.' }, { Nombre: 'totalSeguros', Tipo: 'Double', Comentarios: 'Total de seguros.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor de la cuota.' }, { Nombre: '### sBTConcepto2', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTCuotaSimulacion', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Monto de capital en la cuota.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'cuota', Tipo: 'Double', Comentarios: 'Importe total de la cuota.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Monto de impuestos en la cuota.' }, { Nombre: 'interes', Tipo: 'Double', Comentarios: 'Monto de intereses en la cuota.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Importe correspondiente a otros conceptos.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Monto de seguros en la cuota.' }, { Nombre: 'tipoCuota', Tipo: 'String', Comentarios: 'Tipo de la cuota (Capital/Interes).' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTSimulacionOutput', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital.' }, { Nombre: 'cft', Tipo: 'Double', Comentarios: 'Costo financiero total.' }, { Nombre: 'coeficienteIVA', Tipo: 'Double', Comentarios: 'Coeficiente IVA.' }, { Nombre: 'comisiones', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamo)', Comentarios: 'Listado de comisiones.' }, { Nombre: 'comisionesCuota', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamo)', Comentarios: 'Listado de comisiones de cuota.' }, { Nombre: 'comisionesDesembolso', Tipo: 'Double', Comentarios: 'Comisiones de desembolso.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaSimulacion](#sbtcuotasimulacion)', Comentarios: 'Cronograma del prestamo.' }, { Nombre: 'diasRevision', Tipo: 'Int', Comentarios: 'Dias de revision.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'impuestosDesembolso', Tipo: 'Double', Comentarios: 'Impuestos de desembolso.' }, { Nombre: 'montoDesembolso', Tipo: 'Double', Comentarios: 'Monto de desembolso.' }, { Nombre: 'nomSucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'operacionUid', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto2)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Periodicidad.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'plus', Tipo: 'Double', Comentarios: 'Tasa plus.' }, { Nombre: 'precio', Tipo: 'Double', Comentarios: 'Precio.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'redondeo', Tipo: 'Double', Comentarios: 'Redondeo.' }, { Nombre: 'seguros', Tipo: '[sBTSeguroPrestamo](#sbtseguroprestamo)', Comentarios: 'Listado de seguros.' }, { Nombre: 'segurosDesembolso', Tipo: 'Double', Comentarios: 'Seguros de desembolso.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'tipoAmortizacionCod', Tipo: 'Byte', Comentarios: 'Codigo de tipo amortizacion.' }, { Nombre: 'tipoAmortizacionDsc', Tipo: 'String', Comentarios: 'Tipo de amortizacion.' }, { Nombre: 'totalComisiones', Tipo: 'Double', Comentarios: 'Total de comisiones.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Total de impuestos.' }, { Nombre: 'totalIntereses', Tipo: 'Double', Comentarios: 'Total de intereses.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total de prestamo.' }, { Nombre: 'totalSeguros', Tipo: 'Double', Comentarios: 'Total de seguros.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor de la cuota.' }, { Nombre: '### sBTConcepto2', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTCuotaSimulacion', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Monto de capital en la cuota.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'cuota', Tipo: 'Double', Comentarios: 'Importe total de la cuota.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Monto de impuestos en la cuota.' }, { Nombre: 'interes', Tipo: 'Double', Comentarios: 'Monto de intereses en la cuota.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Importe correspondiente a otros conceptos.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Monto de seguros en la cuota.' }, { Nombre: 'tipoCuota', Tipo: 'String', Comentarios: 'Tipo de la cuota (Capital/Interes).' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto2', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto3)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto3', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTCuotaSimulacion', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto3)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto3', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto3)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto3', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto3', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTSeguroPrestamo', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTSeguroPrestamo son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Codigo del seguro.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion del seguro.' }, { Nombre: 'importeFijo', Tipo: 'Decimal', Comentarios: 'Importe fijo del seguro.' }, { Nombre: 'modificable', Tipo: 'String', Comentarios: 'Indica si es modificable.' }, { Nombre: 'porcentaje', Tipo: 'Decimal', Comentarios: 'Porcentaje del seguro.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo del seguro.' }, { Nombre: '### sBTComisionPrestamo', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTComisionPrestamo son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Codigo de comision.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion de la comision.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la comision.' }, { Nombre: 'porcentaje', Tipo: 'Double', Comentarios: 'Porcentaje de comision.' }] }];
}
