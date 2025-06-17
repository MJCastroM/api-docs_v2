import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerCronograma',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCronogramaComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Cronograma';
  description = `Metodo para obtener el cronograma de un prestamo.`;
  pubName    = 'BTPrestamos.ObtenerCronograma';
  programa   = 'RBTPG072';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }];
  outputCols = ['sdtCuotaPrestamo'];
  outputData = [{ Nombre: 'sdtCuotaPrestamo', Tipo: '[sBTCuotaPrestamo](#sbtcuotaprestamo)', Comentarios: 'Cronograma del prestamo.' }];
  errorCols  = ['30001', '30002'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de operacion.' }, { Codigo: '30002', Descripcion: 'No se recupero la operacion para el Identificador.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerCronograma>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>361</bts:operacionUId>
      </bts:BTPrestamos.ObtenerCronograma>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerCronograma=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 361
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerCronogramaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>1</nroCuota> 
               <fechaPago>2018-11-05</fechaPago> 
               <tipoCuota>I</tipoCuota> 
               <concepto>Interés Vencido</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>0.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>0.00</total> 
               <estado>Paga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>2018-11-05</fechaUltimoPago> 
               <importePago>1287.08</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>2</nroCuota> 
               <fechaPago>2018-12-05</fechaPago> 
               <tipoCuota>I</tipoCuota> 
               <concepto>Interés Vencido</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>0.00</capital> 
               <intereses>1287.08</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>1287.08</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>3</nroCuota> 
               <fechaPago>2018-12-05</fechaPago> 
               <tipoCuota>K</tipoCuota> 
               <concepto>Capital</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>25000.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>200.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>25200.00</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>4</nroCuota> 
               <fechaPago>2019-01-07</fechaPago> 
               <tipoCuota>I</tipoCuota> 
               <concepto>Interés Vencido</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>0.00</capital> 
               <intereses>2027.16</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>2027.16</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>5</nroCuota> 
               <fechaPago>2019-01-07</fechaPago> 
               <tipoCuota>K</tipoCuota> 
               <concepto>Capital</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>25000.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>200.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>25200.00</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>6</nroCuota> 
               <fechaPago>2019-02-05</fechaPago> 
               <tipoCuota>I</tipoCuota> 
               <concepto>Interés Vencido</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>0.00</capital> 
               <intereses>622.09</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>622.09</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>7</nroCuota> 
               <fechaPago>2019-02-05</fechaPago> 
               <tipoCuota>K</tipoCuota> 
               <concepto>Capital</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>25000.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>200.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>25200.00</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>8</nroCuota> 
               <fechaPago>2019-03-05</fechaPago> 
               <tipoCuota>K</tipoCuota> 
               <concepto>Capital</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>25000.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>200.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>25200.00</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
         </sdtCuotaPrestamo> 
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>898</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerCronograma</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>11:44:49</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerCronogramaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtCuotaPrestamo": { 
        "sBTCuotaPrestamo": [ 
            { 
                "impuestos": "0.00", 
                "importePago": "1287.08", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Interés Vencido", 
                "interesMora": "0.00", 
                "capital": "0.00", 
                "diasMora": "0", 
                "tipoCuota": "I", 
                "nroCuota": "1", 
                "seguros": "0.00", 
                "fechaUltimoPago": "2018-11-05", 
                "estado": "Paga", 
                "fechaPago": "2018-11-05", 
                "total": "0.00" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "1287.08", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Interés Vencido", 
                "interesMora": "0.00", 
                "capital": "0.00", 
                "diasMora": "0", 
                "tipoCuota": "I", 
                "nroCuota": "2", 
                "seguros": "0.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2018-12-05", 
                "total": "1287.08" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Capital", 
                "interesMora": "0.00", 
                "capital": "25000.00", 
                "diasMora": "0", 
                "tipoCuota": "K", 
                "nroCuota": "3", 
                "seguros": "200.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2018-12-05", 
                "total": "25200.00" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "2027.16", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Interés Vencido", 
                "interesMora": "0.00", 
                "capital": "0.00", 
                "diasMora": "0", 
                "tipoCuota": "I", 
                "nroCuota": "4", 
                "seguros": "0.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-01-07", 
                "total": "2027.16" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Capital", 
                "interesMora": "0.00", 
                "capital": "25000.00", 
                "diasMora": "0", 
                "tipoCuota": "K", 
                "nroCuota": "5", 
                "seguros": "200.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-01-07", 
                "total": "25200.00" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "622.09", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Interés Vencido", 
                "interesMora": "0.00", 
                "capital": "0.00", 
                "diasMora": "0", 
                "tipoCuota": "I", 
                "nroCuota": "6", 
                "seguros": "0.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-02-05", 
                "total": "622.09" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Capital", 
                "interesMora": "0.00", 
                "capital": "25000.00", 
                "diasMora": "0", 
                "tipoCuota": "K", 
                "nroCuota": "7", 
                "seguros": "200.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-02-05", 
                "total": "25200.00" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Capital", 
                "interesMora": "0.00", 
                "capital": "25000.00", 
                "diasMora": "0", 
                "tipoCuota": "K", 
                "nroCuota": "8", 
                "seguros": "200.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-03-05", 
                "total": "25200.00" 
            } 
        ] 
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "901",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerCronograma",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "12:27:52",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital de la cuota.' }, { Nombre: 'comisiones', Tipo: 'Double', Comentarios: 'Comisiones de la cuota.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: '(Capital / Interes / Capital-Interes / Pago Minimo / Cuota Fija).' }, { Nombre: 'detalleConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Detalle de los conceptos adicionales.' }, { Nombre: 'diasMora', Tipo: 'Int', Comentarios: 'Dias de mora de la cuota.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado de la cuota.' }, { Nombre: 'estadoDsc', Tipo: 'String', Comentarios: 'Descripcion del estado de la cuota.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago prevista .' }, { Nombre: 'fechaUltimoPago', Tipo: 'Date', Comentarios: 'Fecha de ultimo pago de la cuota.' }, { Nombre: 'importePago', Tipo: 'Double', Comentarios: 'Importe pagado.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Impuestos de la cuota.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses de la cuota.' }, { Nombre: 'interesMora', Tipo: 'Double', Comentarios: 'Intereses de mora de la cuota.' }, { Nombre: 'nroCuota', Tipo: 'Int', Comentarios: 'Numero de cuota.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Importe otros conceptos.' }, { Nombre: 'redondeo', Tipo: 'Double', Comentarios: 'Redondeo.' }, { Nombre: 'seguros', Tipo: 'Double', Comentarios: 'Seguros de la cuota.' }, { Nombre: 'subsidios', Tipo: 'Double', Comentarios: 'Subsidios  de la cuota.' }, { Nombre: 'tipoCuota', Tipo: 'String', Comentarios: 'Tipo de cuota (Capital - K / Interes - I / Capital-Interes - M / Pago Minimo - T / Cuota Fija - F).' }, { Nombre: 'total', Tipo: 'Double', Comentarios: 'Total de la cuota.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
