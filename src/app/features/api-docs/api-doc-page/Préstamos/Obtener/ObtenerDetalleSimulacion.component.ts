import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalleSimulacion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalleSimulacionComponent1750268698085 {
  pageTitle        = 'Obtener Detalle Simulación';
  description      = `Método para obtener el detalle de la simulación de un préstamo.`;
  pubName    = 'BTPrestamos.ObtenerDetalleSimulacion';
  programa   = 'RBTPG456';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [{ Nombre: 'sdtDetalleSimulacion', Tipo: '[sBTDetalleSimulacion](#sbtdetallesimulacion)', Comentarios: 'Detalles de la simulación.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de operación.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30003', Descripcion: 'No se recuperó la cuenta para el Identificador: [Número de identificador].' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalleSimulacion>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>AV</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>DC534B7EE96C31983417C526</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>18544</bts:operacionUId>
         <bts:clienteUId>342</bts:clienteUId>
      </bts:BTPrestamos.ObtenerDetalleSimulacion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
          "Requerimiento": 1,
          "Usuario": "MINSTALADOR",
          "Device": "AV",
          "Canal": "BTDIGITAL",
          "Token": "DC534B7EE96C31983417C526"
        },
        "operacionUId": 18544,
        "clienteUId": 342
  }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDetalleSimulacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Token>DC534B7EE96C31983417C526</Token>
            <Canal>BTDIGITAL</Canal>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
         </Btinreq>
         <sdtDetalleSimulacion>
            <cft>28.21</cft>
            <tasa>23.00</tasa>
            <plazo>360</plazo>
            <impuestos>25.30</impuestos>
            <tasaEfectiva>0.00</tasaEfectiva>
            <fechaVencimiento>2021-01-02</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>0</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <intereses>115.01</intereses>
            <fechaPrimerPago>2020-02-02</fechaPrimerPago>
            <comisiones>650.84</comisiones>
            <valorCuota>263.74</valorCuota>
            <otrosConceptos>
               <SdtsBTConcepto>
                  <texto/>
                  <valor>10.00</valor>
                  <concepto>COMIS_DESEMB</concepto>
               </SdtsBTConcepto>
            </otrosConceptos>
            <cronograma>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>90.52</otrosConceptos>
                  <capital>75.76</capital>
                  <impuestos>5.609999999999999</impuestos>
                  <intereses>17.16</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>301.90</cuota>
                  <fechaPago>2020-02-02</fechaPago>
                  <seguros>112.85000000000001</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>84.28999999999999</otrosConceptos>
                  <capital>77.06</capital>
                  <impuestos>5.32</impuestos>
                  <intereses>15.86</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>295.35</cuota>
                  <fechaPago>2020-03-02</fechaPago>
                  <seguros>112.82000000000001</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>77.96</otrosConceptos>
                  <capital>78.38</capital>
                  <impuestos>5.03</impuestos>
                  <intereses>14.54</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>288.69</cuota>
                  <fechaPago>2020-04-02</fechaPago>
                  <seguros>112.78</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>71.52</otrosConceptos>
                  <capital>79.73</capital>
                  <impuestos>4.73</impuestos>
                  <intereses>13.19</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>281.92</cuota>
                  <fechaPago>2020-05-02</fechaPago>
                  <seguros>112.75</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>64.97</otrosConceptos>
                  <capital>81.1</capital>
                  <impuestos>4.43</impuestos>
                  <intereses>11.82</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>275.03</cuota>
                  <fechaPago>2020-06-02</fechaPago>
                  <seguros>112.71000000000001</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>58.3</otrosConceptos>
                  <capital>82.49000000000001</capital>
                  <impuestos>4.12</impuestos>
                  <intereses>10.43</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>268.01</cuota>
                  <fechaPago>2020-07-02</fechaPago>
                  <seguros>112.67</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>51.519999999999996</otrosConceptos>
                  <capital>83.9</capital>
                  <impuestos>3.81</impuestos>
                  <intereses>9.02</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>260.89</cuota>
                  <fechaPago>2020-08-02</fechaPago>
                  <seguros>112.64</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>44.62</otrosConceptos>
                  <capital>85.34</capital>
                  <impuestos>3.5</impuestos>
                  <intereses>7.58</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>253.64</cuota>
                  <fechaPago>2020-09-02</fechaPago>
                  <seguros>112.60000000000001</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>37.61</otrosConceptos>
                  <capital>86.81</capital>
                  <impuestos>3.17</impuestos>
                  <intereses>6.11</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>246.26</cuota>
                  <fechaPago>2020-10-02</fechaPago>
                  <seguros>112.56</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>30.47</otrosConceptos>
                  <capital>88.3</capital>
                  <impuestos>2.85</impuestos>
                  <intereses>4.62</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>238.76</cuota>
                  <fechaPago>2020-11-02</fechaPago>
                  <seguros>112.52000000000001</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>23.22</otrosConceptos>
                  <capital>89.81</capital>
                  <impuestos>2.5100000000000002</impuestos>
                  <intereses>3.11</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>231.13</cuota>
                  <fechaPago>2020-12-02</fechaPago>
                  <seguros>112.48</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>15.84</otrosConceptos>
                  <capital>91.32000000000001</capital>
                  <impuestos>2.18</impuestos>
                  <intereses>1.57</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>223.35</cuota>
                  <fechaPago>2021-01-02</fechaPago>
                  <seguros>112.44000000000001</seguros>
               </SdtsBTCuotaSimulacion>
            </cronograma>
            <totalPrestamo>3164.93</totalPrestamo>
            <capital>1000.00</capital>
            <operacionUId>18544</operacionUId>
            <tasaEfectivaAnual>23.00</tasaEfectivaAnual>
            <seguros>1351.82</seguros>
            <tasaNominalAnual>20.878535</tasaNominalAnual>
            <montoDesembolso>3154.93</montoDesembolso>
            <fechaValor>2020-01-02</fechaValor>
         </sdtDetalleSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Canal>BTDIGITAL</Canal>
            <Fecha>2022-11-25</Fecha>
            <Servicio>BTPrestamos.ObtenerDetalleSimulacion</Servicio>
            <Hora>08:48:45</Hora>
            <Numero>225610</Numero>
            <Requerimiento>1</Requerimiento>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleSimulacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{ 
	"Btinreq": { 
          "Token": "DC534B7EE96C31983417C526", 
          "Canal": "BTDIGITAL", 
          "Device": "AV", 
          "Usuario": "MINSTALADOR", 
          "Requerimiento": 1 
        }, 
        "sdtDetalleSimulacion": { 
          "cft": 28.21, 
          "tasa": 23, 
          "plazo": 360, 
          "impuestos": 25.3, 
          "tasaEfectiva": 0, 
          "fechaVencimiento": "2021-01-02", 
          "producto": { 
            "papel": "$", 
            "moneda": "$", 
            "productoUId": 0, 
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
          }, 
          "intereses": 115.01, 
          "fechaPrimerPago": "2020-02-02", 
          "comisiones": 650.84, 
          "valorCuota": 263.74, 
          "otrosConceptos": { 
            "SdtsBTConcepto": { 
              "texto": "", 
              "valor": 10, 
              "concepto": "COMIS_DESEMB" 
            } 
          }, 
          "cronograma": { 
            "SdtsBTCuotaSimulacion": [ 
              { 
                "otrosConceptos": 90.52, 
                "capital": 75.76, 
                "impuestos": 5.609999999999999, 
                "intereses": 17.16, 
                "concepto": "Capital/Interés", 
                "tipoCuota": "M", 
                "cuota": 301.9, 
                "fechaPago": "2020-02-02", 
                "seguros": 112.85000000000001 
              }, 
              { 
                "otrosConceptos": 84.28999999999999, 
                "capital": 77.06, 
                "impuestos": 5.32, 
                "intereses": 15.86, 
                "concepto": "Capital/Interés", 
                "tipoCuota": "M", 
                "cuota": 295.35, 
                "fechaPago": "2020-03-02", 
                "seguros": 112.82000000000001 
              }, 
              { 
                "otrosConceptos": 77.96, 
                "capital": 78.38, 
                "impuestos": 5.03, 
                "intereses": 14.54, 
                "concepto": "Capital/Interés", 
                "tipoCuota": "M", 
                "cuota": 288.69, 
                "fechaPago": "2020-04-02", 
                "seguros": 112.78 
              }, 
              { 
                "otrosConceptos": 71.52, 
                "capital": 79.73, 
                "impuestos": 4.73, 
                "intereses": 13.19, 
                "concepto": "Capital/Interés", 
                "tipoCuota": "M", 
                "cuota": 281.92, 
                "fechaPago": "2020-05-02", 
                "seguros": 112.75 
              }, 
              { 
                "otrosConceptos": 64.97, 
                "capital": 81.1, 
                "impuestos": 4.43, 
                "intereses": 11.82, 
                "concepto": "Capital/Interés", 
                "tipoCuota": "M", 
                "cuota": 275.03, 
                "fechaPago": "2020-06-02", 
                "seguros": 112.71000000000001 
              }, 
              { 
                "otrosConceptos": 58.3, 
                "capital": 82.49000000000001, 
                "impuestos": 4.12, 
                "intereses": 10.43, 
                "concepto": "Capital/Interés", 
                "tipoCuota": "M", 
                "cuota": 268.01, 
                "fechaPago": "2020-07-02", 
                "seguros": 112.67 
              }, 
              { 
                "otrosConceptos": 51.519999999999996, 
                "capital": 83.9, 
                "impuestos": 3.81, 
                "intereses": 9.02, 
                "concepto": "Capital/Interés", 
                "tipoCuota": "M", 
                "cuota": 260.89, 
                "fechaPago": "2020-08-02", 
                "seguros": 112.64 
              }, 
              { 
                "otrosConceptos": 44.62, 
                "capital": 85.34, 
                "impuestos": 3.5, 
                "intereses": 7.58, 
                "concepto": "Capital/Interés", 
                "tipoCuota": "M", 
                "cuota": 253.64, 
                "fechaPago": "2020-09-02", 
                "seguros": 112.60000000000001 
              }, 
              { 
                "otrosConceptos": 37.61, 
                "capital": 86.81, 
                "impuestos": 3.17, 
                "intereses": 6.11, 
                "concepto": "Capital/Interés", 
                "tipoCuota": "M", 
                "cuota": 246.26, 
                "fechaPago": "2020-10-02", 
                "seguros": 112.56 
              }, 
              { 
                "otrosConceptos": 30.47, 
                "capital": 88.3, 
                "impuestos": 2.85, 
                "intereses": 4.62, 
                "concepto": "Capital/Interés", 
                "tipoCuota": "M", 
                "cuota": 238.76, 
                "fechaPago": "2020-11-02", 
                "seguros": 112.52000000000001 
              }, 
              { 
                "otrosConceptos": 23.22, 
                "capital": 89.81, 
                "impuestos": 2.5100000000000002, 
                "intereses": 3.11, 
                "concepto": "Capital/Interés", 
                "tipoCuota": "M", 
                "cuota": 231.13, 
                "fechaPago": "2020-12-02", 
                "seguros": 112.48 
              }, 
              { 
                "otrosConceptos": 15.84, 
                "capital": 91.32000000000001, 
                "impuestos": 2.18, 
                "intereses": 1.57, 
                "concepto": "Capital/Interés", 
                "tipoCuota": "M", 
                "cuota": 223.35, 
                "fechaPago": "2021-01-02", 
                "seguros": 112.44000000000001 
              } 
            ] 
          }, 
          "totalPrestamo": 3164.93, 
          "capital": 1000, 
          "operacionUId": 18544, 
          "tasaEfectivaAnual": 23, 
          "seguros": 1351.82, 
          "tasaNominalAnual": 20.878535, 
          "montoDesembolso": 3154.93, 
          "fechaValor": "2020-01-02" 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Estado": "OK", 
          "Canal": "BTDIGITAL", 
          "Fecha": "2022-11-25", 
          "Servicio": "BTPrestamos.ObtenerDetalleSimulacion", 
          "Hora": "08:48:45", 
          "Numero": 225610, 
          "Requerimiento": 1 
        } 
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDetalleSimulacion', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital.' }, { Nombre: 'cft', Tipo: 'Double', Comentarios: 'Costo financiero total.' }, { Nombre: 'comisiones', Tipo: 'Double', Comentarios: 'Comisiones.' }, { Nombre: 'cronograma', Tipo: 'sBTCuotaSimulacion', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha de valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Impuestos.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'montoDesembolso', Tipo: 'Double', Comentarios: 'Monto de desembolso.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: 'sBTConceptos', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del Producto.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Seguros.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'tasaEfectiva', Tipo: 'Double', Comentarios: 'Tasa efectiva.' }, { Nombre: 'tasaEfectivaAnual', Tipo: 'Double', Comentarios: 'Tasa efectiva anual.' }, { Nombre: 'tasaNominalAnual', Tipo: 'Double', Comentarios: 'Tasa nominal anual.' }, { Nombre: 'totalPrestamo', Tipo: 'Double', Comentarios: 'Total del préstamo.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor de cuota.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: '### sBTCuotaSimulacion', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTCuotaSimulacion', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Monto de capital en la cuota.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'cuota', Tipo: 'Double', Comentarios: 'Importe total de la cuota.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Monto de impuestos en la cuota.' }, { Nombre: 'interes', Tipo: 'Double', Comentarios: 'Monto de intereses en la cuota.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Importe correspondiente a otros conceptos.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Monto de seguros en la cuota.' }, { Nombre: 'tipoCuota', Tipo: 'String', Comentarios: 'Tipo de la cuota (Capital/Interés).' }] }];
}
