import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularConCronograma',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularConCronogramaComponent1751987197596 {
  pageTitle        = 'Simular Con Cronograma';
  description      = `Método para simular el alta de un depósito a plazo con cronograma.`;
  pubName    = 'BTDepositoAPlazo.SimularConCronograma';
  programa   = 'RBTPG454';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Para configurar los productos habilitados, se debe agregar un registro en la guía especial 70100 para cada producto de la siguiente manera: 

Campo | Valor 
:--------- | :-----------  
Correlativo 1 | Valor incremental. 
Correlativo 2 | Módulo. 
Correlativo 3 | Tipo de operación. 
Valor específico 1 | Moneda. 
Valor específico 2 | Papel. 
Valor específico 3 | Tipo de producto (1- Depósito al vencimiento, 2- Pago periódico de intereses). 
Importe específico 1 | Tipo de día para el cálculo del plazo (1 - Comercial, 2 - Calendario). 
Importe específico 2 | Tipo de año para el cálculo de intereses (1 - Comercial, 2 - Calendario).
Importe específico 3 | Ajuste de día al vencimiento (0 - No ajusta, 1 - Ajuste día anterior, 2 - Ajuste día posterior).

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Importe capital.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Período entre pagos de intereses.' }, { Nombre: 'sdtDatosExtendidos', Tipo: '[sBTDatoExtendido](#sbtdatoextendido)', Comentarios: 'Listado de datos complementarios. Se pueden enviar los siguientes [valores.](#valores)' }];
  outputData = [{ Nombre: 'sdtDatosExtendidos', Tipo: '[sBTDatoExtendido](#sbtdatoextendido)', Comentarios: 'Listado de datos complementarios.' }, { Nombre: 'sBTSimulacionDepositoAPlazo', Tipo: '[sBTSimulacionDepositoAPlazo](#sbtsimulaciondepositoaplazo)', Comentarios: 'Datos de simulación del depósito.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador del Producto.' }, { Código: '30003', Descripción: 'No se recibió el capital del Producto.' }, { Código: '30004', Descripción: 'No se recibió el plazo del Producto.' }, { Código: '40001', Descripción: 'El plazo ingresado es menor al plazo mínimo parametrizado para el producto.' }, { Código: '40003', Descripción: 'El plazo ingresado es mayor al plazo máximo parametrizado para el producto.' }, { Código: '40004', Descripción: 'El monto ingresado es menor al monto mínimo parametrizado para el producto.' }, { Código: '40005', Descripción: 'El monto ingresado es mayor al monto máximo parametrizado para el producto.' }, { Código: '40006', Descripción: 'No se encontró Tasa para el producto a Simular.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.SimularConCronograma>
       <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>30F74741A02C318CEFD55684</bts:Token>
            <bts:Device>GL</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10009</bts:clienteUId>
         <bts:productoUId>132</bts:productoUId>
         <bts:capital>20000</bts:capital>
         <bts:plazo>360</bts:plazo>
         <bts:periodicidad>30</bts:periodicidad>
         <bts:sBTDatosExtendidos/>
      </bts:BTDepositosAPlazo.SimularConCronograma>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
         "Canal": "BTDIGITAL",
         "Requerimiento": 1,
         "Usuario": "INSTALADOR",
         "Token": "30F74741A02C318CEFD55684",
         "Device": "GL"
      },
      "clienteUId": 10009,
      "productoUId": 132,
      "capital": 20000,
      "plazo": 360,
      "periodicidad": 30,
      "sBTDatosExtendidos": ""
   }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.SimularConCronograma xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>30F74741A02C318CEFD55684</Token>
            <Device>GL</Device>
         </Btinreq>
         <sBTDatosExtendidos></sBTDatosExtendidos>
         <sBTSimulacionDepositoAPlazo>
            <simulacionId>92</simulacionId>
            <producto>
               <productoUId>132</productoUId>
               <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.</nombre>
               <moneda>S/.</moneda>
               <papel>$</papel>
            </producto>
            <clienteUId>10009</clienteUId>
            <Sucursal>Sucursal Principal</Sucursal>
            <TipoProducto>PP</TipoProducto>
            <Capital>20000.00</Capital>
            <ValorNominal>0.00</ValorNominal>
            <Precio>0.00000000</Precio>
            <TipoTasa>Efectiva Anual</TipoTasa>
            <Tasa>11.200000</Tasa>
            <TipoAnio>360 Días</TipoAnio>
            <Plazo>360</Plazo>
            <TipoDia>Días Comerciales</TipoDia>
            <FechaInicio>2022-04-21</FechaInicio>
            <FechaVencimiento>2023-04-21</FechaVencimiento>
            <Periodicidad>30</Periodicidad>
            <Intereses>2132.71</Intereses>
            <Impuestos>
               <SdtsBTConcepto>
                  <concepto>GANANCIA</concepto>
                  <valor>106.65</valor>
                  <texto>Impuestos a las ganancias Totales</texto>
               </SdtsBTConcepto>
            </Impuestos>
            <otrosConceptos></otrosConceptos>
            <Cronograma>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-05-23</FechaPago>
                  <Plazo>32</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>189.62</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.48</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-06-23</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-07-25</FechaPago>
                  <Plazo>32</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>189.62</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.48</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-08-25</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-09-26</FechaPago>
                  <Plazo>31</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>183.67</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.18</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-10-26</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-11-28</FechaPago>
                  <Plazo>32</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>189.62</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.48</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2022-12-28</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2023-01-30</FechaPago>
                  <Plazo>32</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>189.62</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>9.48</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2023-02-28</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2023-03-31</FechaPago>
                  <Plazo>30</Plazo>
                  <TipoCuota>I</TipoCuota>
                  <Capital>0.00</Capital>
                  <Interes>177.72</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>8.89</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
               <SdtsBTCuotaPlanDeposito>
                  <FechaPago>2023-04-21</FechaPago>
                  <Plazo>21</Plazo>
                  <TipoCuota>M</TipoCuota>
                  <Capital>20000.00</Capital>
                  <Interes>124.24</Interes>
                  <Impuestos>
                     <SdtsBTConcepto>
                        <concepto>GANANCIA</concepto>
                        <valor>6.21</valor>
                        <texto>Impuestos a las ganancias</texto>
                     </SdtsBTConcepto>
                  </Impuestos>
                  <OtrosConceptos></OtrosConceptos>
               </SdtsBTCuotaPlanDeposito>
            </Cronograma>
         </sBTSimulacionDepositoAPlazo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTDepositosAPlazo.SimularConCronograma</Servicio>
            <Fecha>2022-11-29</Fecha>
            <Hora>10:43:24</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>497</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTDepositosAPlazo.SimularConCronograma>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{ 
"Btinreq": { 
         "Canal": "BTDIGITAL", 
         "Requerimiento": 1, 
         "Usuario": "INSTALADOR", 
         "Token": "30F74741A02C318CEFD55684", 
         "Device": "GL" 
      }, 
      "sBTDatosExtendidos": "", 
      "sBTSimulacionDepositoAPlazo": { 
         "simulacionId": 92, 
         "producto": { 
         "productoUId": 132, 
         "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.", 
         "moneda": "S/.", 
         "papel": "$" 
         }, 
         "clienteUId": 10009, 
         "Sucursal": "Sucursal Principal", 
         "TipoProducto": "PP", 
         "Capital": 20000, 
         "ValorNominal": 0, 
         "Precio": 0, 
         "TipoTasa": "Efectiva Anual", 
         "Tasa": 11.2, 
         "TipoAnio": "360 Días", 
         "Plazo": 360, 
         "TipoDia": "Días Comerciales", 
         "FechaInicio": "2022-04-21", 
         "FechaVencimiento": "2023-04-21", 
         "Periodicidad": 30, 
         "Intereses": 2132.71, 
         "Impuestos": { 
         "SdtsBTConcepto": { 
            "concepto": "GANANCIA", 
            "valor": 106.65, 
            "texto": "Impuestos a las ganancias Totales" 
         } 
         }, 
         "otrosConceptos": "", 
         "Cronograma": { 
         "SdtsBTCuotaPlanDeposito": [ 
            { 
               "FechaPago": "2022-05-23", 
               "Plazo": 32, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 189.62, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.48, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-06-23", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-07-25", 
               "Plazo": 32, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 189.62, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.48, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-08-25", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-09-26", 
               "Plazo": 31, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 183.67, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.18, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-10-26", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-11-28", 
               "Plazo": 32, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 189.62, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.48, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-12-28", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2023-01-30", 
               "Plazo": 32, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 189.62, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.48, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2023-02-28", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2023-03-31", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2023-04-21", 
               "Plazo": 21, 
               "TipoCuota": "M", 
               "Capital": 20000, 
               "Interes": 124.24, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 6.21, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            } 
         ] 
         } 
      } 
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatoExtendido', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Clave del dato extendido.' }, { Nombre: 'lista', Tipo: '[sBTDatoLista](#sbtdatolista)', Comentarios: 'Lista de datos.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de dato extendido.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de dato extendido.' }] }, { typeName: 'sBTDatoLista', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de información adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de información adicional.' }] }, { typeName: 'sBTSimulacionDepositoAPlazo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del cronograma.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador de cliente.' }, { Nombre: 'cronograma', Tipo: '[sBTCuotaPlanDeposito](#sbtcuotaplandeposito)', Comentarios: 'Cronograma del préstamo.' }, { Nombre: 'fechaInicio', Tipo: 'Date', Comentarios: 'Fecha de inicio.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'impuestos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de impuestos.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos.' }, { Nombre: 'periodicidad', Tipo: 'Long', Comentarios: 'Periodicidad.' }, { Nombre: 'plazo', Tipo: 'Long', Comentarios: 'Plazo.' }, { Nombre: 'precio', Tipo: 'Long', Comentarios: 'Precio.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'simulacionId', Tipo: 'Long', Comentarios: 'Identificador de simulación.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Sucursal.' }, { Nombre: 'tasa', Tipo: 'Long', Comentarios: 'Tasa.' }, { Nombre: 'tipoAnio', Tipo: 'String', Comentarios: 'Tipo de año.' }, { Nombre: 'tipoDia', Tipo: 'String', Comentarios: 'Tipo de día.' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: 'Tipo de producto.' }, { Nombre: 'tipoTasa', Tipo: 'String', Comentarios: 'Tipo de tasa.' }, { Nombre: 'valorNominal', Tipo: 'Double', Comentarios: 'Valor nominal.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTCuotaPlanDeposito', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'impuestos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de impuestos.' }, { Nombre: 'interes', Tipo: 'Double', Comentarios: 'Interés.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Long', Comentarios: 'Plazo.' }, { Nombre: 'tipoCuota', Tipo: 'String', Comentarios: 'Tipo de cuota.' }] }];
}
