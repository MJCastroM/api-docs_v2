import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetallePagoPrestamo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetallePagoPrestamoComponent1750713394757 {
  pageTitle        = 'Obtener Detalle Pago Préstamo';
  description      = `Método para obtener el detalle de un pago de préstamo a partir del movimiento.`;
  pubName    = 'BTPrestamos.ObtenerDetallePagoPrestamo';
  programa   = 'RBTPG838';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento.' }];
  outputData = [{ Nombre: 'sdtDetallePagoPrestamo', Tipo: '[sBTDetallePagoPrestamo](#sbtdetallepagoprestamo)', Comentarios: 'Detalle del pago del préstamo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de operación.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de movimiento.' }, { Codigo: '30003', Descripcion: 'No se recuperó el préstamo para el identificador: [Número de Identificador].' }, { Codigo: '30103', Descripcion: 'No existe registro para el identificador único.' }, { Codigo: '30104', Descripcion: 'No existe registro para el movimiento indicado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetallePagoPrestamo>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>ae6041cefd4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>751</bts:operacionUId>
         <bts:movimientoUId>981</bts:movimientoUId>
      </bts:BTPrestamos.ObtenerDetallePagoPrestamo>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetallePagoPrestamo\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
          "Requerimiento": 0,
          "Canal": "BTDIGITAL",
          "Device": "1",
          "Usuario": "MINSTALADOR",
          "Token": "ae6041cefd4A8B5C60A82434"
        },
        "operacionUId": 751,
        "movimientoUId": 981
    }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDetallePagoPrestamoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ae6041cefd4A8B5C60A82434</Token>
         </Btinreq>
         <sbtDetallePagoPrestamo>
            <redondeos>0.00</redondeos>
            <otrosConceptos>0.00</otrosConceptos>
            <capital>883.21</capital>
            <impuestos>26.92</impuestos>
            <intereses>109.13</intereses>
            <detalle>
               <sBTDetallePagoCuota>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>126.50</capital>
                  <impuestos>0.88</impuestos>
                  <intereses>0.00</intereses>
                  <redondeo>0.00</redondeo>
                  <total>0.00</total>
                  <fechaPago>2022-05-27</fechaPago>
                  <detalleConceptos>
                     <sBTConcepto>
                        <texto>Impuesto de Interés</texto>
                        <valor>0.88</valor>
                        <concepto>IMPUESTO_INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Comisión</texto>
                        <valor>4.90</valor>
                        <concepto>COMISION</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Comisión Mora</texto>
                        <valor>77.70</valor>
                        <concepto>COMISION_MORA</concepto>
                     </sBTConcepto>
                  </detalleConceptos>
                  <seguros>0.00</seguros>
                  <comisiones>82.60</comisiones>
               </sBTDetallePagoCuota>
               <sBTDetallePagoCuota>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>98.19</capital>
                  <impuestos>5.20</impuestos>
                  <intereses>23.99</intereses>
                  <redondeo>0.00</redondeo>
                  <total>0.00</total>
                  <fechaPago>2022-06-12</fechaPago>
                  <detalleConceptos>
                     <sBTConcepto>
                        <texto>Interés</texto>
                        <valor>23.99</valor>
                        <concepto>INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Impuesto de Interés</texto>
                        <valor>5.20</valor>
                        <concepto>IMPUESTO_INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Comisión</texto>
                        <valor>4.90</valor>
                        <concepto>COMISION</concepto>
                     </sBTConcepto>
                  </detalleConceptos>
                  <seguros>0.00</seguros>
                  <comisiones>4.90</comisiones>
               </sBTDetallePagoCuota>
               <sBTDetallePagoCuota>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>98.15</capital>
                  <impuestos>5.21</impuestos>
                  <intereses>24.02</intereses>
                  <redondeo>0.00</redondeo>
                  <total>0.00</total>
                  <fechaPago>2022-06-30</fechaPago>
                  <detalleConceptos>
                     <sBTConcepto>
                        <texto>Interés</texto>
                        <valor>24.02</valor>
                        <concepto>INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Impuesto de Interés</texto>
                        <valor>5.21</valor>
                        <concepto>IMPUESTO_INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Comisión</texto>
                        <valor>4.90</valor>
                        <concepto>COMISION</concepto>
                     </sBTConcepto>
                  </detalleConceptos>
                  <seguros>0.00</seguros>
                  <comisiones>4.90</comisiones>
               </sBTDetallePagoCuota>
               <sBTDetallePagoCuota>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>105.90</capital>
                  <impuestos>4.02</impuestos>
                  <intereses>17.46</intereses>
                  <redondeo>0.00</redondeo>
                  <total>0.00</total>
                  <fechaPago>2022-07-15</fechaPago>
                  <detalleConceptos>
                     <sBTConcepto>
                        <texto>Interés</texto>
                        <valor>17.46</valor>
                        <concepto>INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Impuesto de Interés</texto>
                        <valor>4.02</valor>
                        <concepto>IMPUESTO_INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Comisión</texto>
                        <valor>4.90</valor>
                        <concepto>COMISION</concepto>
                     </sBTConcepto>
                  </detalleConceptos>
                  <seguros>0.00</seguros>
                  <comisiones>4.90</comisiones>
               </sBTDetallePagoCuota>
               <sBTDetallePagoCuota>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>107.91</capital>
                  <impuestos>3.72</impuestos>
                  <intereses>15.75</intereses>
                  <redondeo>0.00</redondeo>
                  <total>0.00</total>
                  <fechaPago>2022-07-31</fechaPago>
                  <detalleConceptos>
                     <sBTConcepto>
                        <texto>Interés</texto>
                        <valor>15.75</valor>
                        <concepto>INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Impuesto de Interés</texto>
                        <valor>3.72</valor>
                        <concepto>IMPUESTO_INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Comisión</texto>
                        <valor>4.90</valor>
                        <concepto>COMISION</concepto>
                     </sBTConcepto>
                  </detalleConceptos>
                  <seguros>0.00</seguros>
                  <comisiones>4.90</comisiones>
               </sBTDetallePagoCuota>
               <sBTDetallePagoCuota>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>112.35</capital>
                  <impuestos>3.04</impuestos>
                  <intereses>11.99</intereses>
                  <redondeo>0.00</redondeo>
                  <total>0.00</total>
                  <fechaPago>2022-08-15</fechaPago>
                  <detalleConceptos>
                     <sBTConcepto>
                        <texto>Interés</texto>
                        <valor>11.99</valor>
                        <concepto>INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Impuesto de Interés</texto>
                        <valor>3.04</valor>
                        <concepto>IMPUESTO_INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Comisión</texto>
                        <valor>4.90</valor>
                        <concepto>COMISION</concepto>
                     </sBTConcepto>
                  </detalleConceptos>
                  <seguros>0.00</seguros>
                  <comisiones>4.90</comisiones>
               </sBTDetallePagoCuota>
               <sBTDetallePagoCuota>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>115.00</capital>
                  <impuestos>2.64</impuestos>
                  <intereses>9.74</intereses>
                  <redondeo>0.00</redondeo>
                  <total>0.00</total>
                  <fechaPago>2022-08-31</fechaPago>
                  <detalleConceptos>
                     <sBTConcepto>
                        <texto>Interés</texto>
                        <valor>9.74</valor>
                        <concepto>INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Impuesto de Interés</texto>
                        <valor>2.64</valor>
                        <concepto>IMPUESTO_INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Comisión</texto>
                        <valor>4.90</valor>
                        <concepto>COMISION</concepto>
                     </sBTConcepto>
                  </detalleConceptos>
                  <seguros>0.00</seguros>
                  <comisiones>4.90</comisiones>
               </sBTDetallePagoCuota>
               <sBTDetallePagoCuota>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>119.21</capital>
                  <impuestos>1.99</impuestos>
                  <intereses>6.18</intereses>
                  <redondeo>0.00</redondeo>
                  <total>0.00</total>
                  <fechaPago>2022-09-15</fechaPago>
                  <detalleConceptos>
                     <sBTConcepto>
                        <texto>Interés</texto>
                        <valor>6.18</valor>
                        <concepto>INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Impuesto de Interés</texto>
                        <valor>1.99</valor>
                        <concepto>IMPUESTO_INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Comisión</texto>
                        <valor>4.90</valor>
                        <concepto>COMISION</concepto>
                     </sBTConcepto>
                  </detalleConceptos>
                  <seguros>0.00</seguros>
                  <comisiones>4.90</comisiones>
               </sBTDetallePagoCuota>
               <sBTDetallePagoCuota>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.22</impuestos>
                  <intereses>0.00</intereses>
                  <redondeo>0.00</redondeo>
                  <total>0.00</total>
                  <fechaPago>2022-09-30</fechaPago>
                  <detalleConceptos>
                     <sBTConcepto>
                        <texto>Impuesto de Interés</texto>
                        <valor>0.22</valor>
                        <concepto>IMPUESTO_INTERES</concepto>
                     </sBTConcepto>
                     <sBTConcepto>
                        <texto>Comisión</texto>
                        <valor>1.23</valor>
                        <concepto>COMISION</concepto>
                     </sBTConcepto>
                  </detalleConceptos>
                  <seguros>0.00</seguros>
                  <comisiones>1.23</comisiones>
               </sBTDetallePagoCuota>
            </detalle>
            <fechaPago>2022-09-15</fechaPago>
            <total>1137.39</total>
            <seguros>0.00</seguros>
            <comisiones>118.13</comisiones>
         </sbtDetallePagoPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>155926</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDetallePagoPrestamo</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2022-12-01</Fecha>
            <Hora>18:43:49</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetallePagoPrestamoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{ 
	"Btinreq": { 
          "Device": "1", 
          "Usuario": "MINSTALADOR", 
          "Requerimiento": 0, 
          "Canal": "BTDIGITAL", 
          "Token": "ae6041cefd4A8B5C60A82434" 
        }, 
        "sbtDetallePagoPrestamo": { 
          "redondeos": 0, 
          "otrosConceptos": 0, 
          "capital": 883.21, 
          "impuestos": 26.92, 
          "intereses": 109.13, 
          "detalle": { 
            "sBTDetallePagoCuota": [ 
              { 
                "otrosConceptos": 0, 
                "capital": 126.5, 
                "impuestos": 0.88, 
                "intereses": 0, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-05-27", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 0.88, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    }, 
                    { 
                      "texto": "Comisión Mora", 
                      "valor": 77.7, 
                      "concepto": "COMISION_MORA" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 82.6 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 98.19, 
                "impuestos": 5.2, 
                "intereses": 23.99, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-06-12", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Interés", 
                      "valor": 23.99, 
                      "concepto": "INTERES" 
                    }, 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 5.2, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 4.9 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 98.15, 
                "impuestos": 5.21, 
                "intereses": 24.02, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-06-30", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Interés", 
                      "valor": 24.02, 
                      "concepto": "INTERES" 
                    }, 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 5.21, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 4.9 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 105.9, 
                "impuestos": 4.02, 
                "intereses": 17.46, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-07-15", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Interés", 
                      "valor": 17.46, 
                      "concepto": "INTERES" 
                    }, 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 4.02, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 4.9 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 107.91, 
                "impuestos": 3.72, 
                "intereses": 15.75, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-07-31", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Interés", 
                      "valor": 15.75, 
                      "concepto": "INTERES" 
                    }, 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 3.72, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 4.9 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 112.35, 
                "impuestos": 3.04, 
                "intereses": 11.99, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-08-15", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Interés", 
                      "valor": 11.99, 
                      "concepto": "INTERES" 
                    }, 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 3.04, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 4.9 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 115, 
                "impuestos": 2.64, 
                "intereses": 9.74, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-08-31", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Interés", 
                      "valor": 9.74, 
                      "concepto": "INTERES" 
                    }, 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 2.64, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 4.9 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 119.21, 
                "impuestos": 1.99, 
                "intereses": 6.18, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-09-15", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Interés", 
                      "valor": 6.18, 
                      "concepto": "INTERES" 
                    }, 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 1.99, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 4.9 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 0, 
                "impuestos": 0.22, 
                "intereses": 0, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-09-30", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 0.22, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 1.23, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 1.23 
              } 
            ] 
          }, 
          "fechaPago": "2022-09-15", 
          "total": 1137.39, 
          "seguros": 0, 
          "comisiones": 118.13 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Numero": 155926, 
          "Estado": "OK", 
          "Servicio": "BTPrestamos.ObtenerDetallePagoPrestamo", 
          "Requerimiento": 0, 
          "Fecha": "2022-12-01", 
          "Hora": "18:43:49", 
          "Canal": "BTDIGITAL" 
        } 
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDetallePagoPrestamo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital.' }, { Nombre: 'comisiones', Tipo: 'Double', Comentarios: 'Comisiones de la cuota.' }, { Nombre: 'detalle', Tipo: '[sBTDetallePagoCuota](#sbtdetallepagocuota)', Comentarios: 'Detalle pago de la cuota.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago prevista.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Impuestos de la cuota.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses de la cuota.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Importe otros conceptos.' }, { Nombre: 'redondeos', Tipo: 'Double', Comentarios: 'Redondeos.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Seguros de la cuota.' }, { Nombre: 'total', Tipo: 'Double', Comentarios: 'Total de la cuota.' }] }, { typeName: 'sBTDetallePagoCuota', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital de la cuota.' }, { Nombre: 'comisiones', Tipo: 'Double', Comentarios: 'Comisiones de la cuota.' }, { Nombre: 'detalleConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Detalle de los conceptos adicionales.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago prevista.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Impuestos de la cuota.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses de la cuota.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Importe otros conceptos.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Seguros de la cuota.' }, { Nombre: 'total', Tipo: 'Double', Comentarios: 'Total de la cuota.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
