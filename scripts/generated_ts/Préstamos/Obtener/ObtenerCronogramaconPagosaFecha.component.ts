import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerCronogramaconPagosaFecha',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCronogramaconPagosaFechaComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Cronograma con Pagos a Fecha';
  description = `Metodo para obtener el cronograma de un prestamo teniendo en cuenta solamente los pagos hasta la fecha indicada.`;
  pubName    = 'BTPrestamos.ObtenerCronogramaConPagosAFecha';
  programa   = 'RBTPG440';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId', 'fecha'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de los pagos.' }];
  outputCols = ['sdtCuotasPrestamos'];
  outputData = [{ Nombre: 'sdtCuotasPrestamos', Tipo: '[sBTCuotaPrestamo](#sbtcuotaprestamo)', Comentarios: 'Cronograma del prestamo.' }];
  errorCols  = ['30001', '30002', '30003'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de operacion.' }, { Codigo: '30002', Descripcion: 'No se recupero la operacion para el Identificador.' }, { Codigo: '30003', Descripcion: 'No se recibio fecha para consulta.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerCronogramaConPagosAFecha>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>9aaec33a3bCD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>8892</bts:operacionUId>
         <bts:fecha>2022-11-16</bts:fecha>
      </bts:BTPrestamos.ObtenerCronogramaConPagosAFecha>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerCronogramaConPagosAFecha=' \
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
    "operacionUId" : 8892,
    "fecha" : "2022-11-16"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerCronogramaConPagosAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
        <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
        </Btinreq>
        <sdtCuotasPrestamos>
            <SdtsBTCuotaPrestamo>
                <impuestos>0</impuestos>
                <importePago>292.6</importePago>
                <subsidios>0</subsidios>
                <detalleConceptos>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto al Interés</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a la Mora</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a las Comisiones</concepto>
                    </SdtsBTConcepto>
                </detalleConceptos>
                <fechaVencimiento></fechaVencimiento>
                <intereses>0</intereses>
                <estadoDsc></estadoDsc>
                <comisiones>0</comisiones>
                <otrosConceptos>0</otrosConceptos>
                <concepto>Capital/Interés</concepto>
                <interesMora>0</interesMora>
                <capital>0</capital>
                <diasMora>0</diasMora>
                <tipoCuota>M</tipoCuota>
                <nroCuota>1</nroCuota>
                <seguros>0</seguros>
                <fechaUltimoPago>2022-11-07</fechaUltimoPago>
                <redondeo>0</redondeo>
                <estado>Paga</estado>
                <fechaPago>2022-09-21</fechaPago>
                <total>0</total>
            </SdtsBTCuotaPrestamo>
            ...
        </sdtCuotasPrestamos>
        <Erroresnegocio></Erroresnegocio>
        <Btoutreq>
            <Numero>898</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerCronogramaConPagosAFechaResponse</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>11:44:49</Hora>
            <Canal>BTDIGITAL</Canal>
        </Btoutreq>
      </BTPrestamos.ObtenerCronogramaConPagosAFechaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtCuotasPrestamos": {
        "SdtsBTCuotaPrestamo": [
            {
                "impuestos": 0,
                "importePago": 292.6,
                "subsidios": 0,
                "detalleConceptos": {
                    "SdtsBTConcepto": [
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto al Interés"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a la Mora"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a las Comisiones"
                        }
                    ]
                },
                "fechaVencimiento": "\n\t\t",
                "intereses": 0,
                "estadoDsc": "",
                "comisiones": 0,
                "otrosConceptos": 0,
                "concepto": "Capital/Interés",
                "interesMora": 0,
                "capital": 0,
                "diasMora": 0,
                "tipoCuota": "M",
                "nroCuota": 1,
                "seguros": 0,
                "fechaUltimoPago": "2022-11-07",
                "redondeo": 0,
                "estado": "Paga",
                "fechaPago": "2022-09-21",
                "total": 0
            },
            ...
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
