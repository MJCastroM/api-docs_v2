import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalledeCancelacionTotal',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalledeCancelacionTotalComponent1750945334930 {
  pageTitle        = 'Obtener Detalle de Cancelación Total';
  description      = `Método para obtener el detalle de la cancelación total de un préstamo.`;
  pubName    = 'BTPrestamos.ObtenerDetalleCancelacionTotal';
  programa   = 'RBTPG539';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha.' }, { Nombre: 'perdonaIntereses', Tipo: 'String', Comentarios: '¿Perdona intereses? (S/N).' }, { Nombre: 'cancelacionTotal', Tipo: 'String', Comentarios: '¿Es cancelación total? (S/N).' }, { Nombre: 'expresadoEn', Tipo: 'String', Comentarios: '[M-Moneda / E-Especie].' }];
  outputData = [{ Nombre: 'sdtConceptosPrestamo', Tipo: '[sBTConceptosPrestamo](#sbtconceptosprestamo)', Comentarios: 'Datos de la cancelación total del préstamo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de operación.' }, { Codigo: '30002', Descripcion: 'No se recuperó préstamo para el identificador: [Número de Identificador].' }, { Codigo: '30003', Descripcion: 'No se recibió el modo expresado.' }, { Codigo: '30004', Descripcion: 'El valor de expresadoEn no es correcto.' }, { Codigo: '30005', Descripcion: 'No se recibió si es cancelacion total.' }, { Codigo: '30006', Descripcion: 'El valor de cancelacionTotal no es correcto.' }, { Codigo: '30007', Descripcion: 'No se recibió si se perdona intereses.' }, { Codigo: '30008', Descripcion: 'El valor de perdonaIntereses no es correcto.' }, { Codigo: '40001', Descripcion: 'La Fecha para Consultas es anterior a la de la Operación.' }, { Codigo: '40002', Descripcion: 'La Operación no es válida para la Solicitud realizada.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalleCancelacionTotal>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>b6a06c447cCD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>56</bts:operacionUId>
         <bts:fecha></bts:fecha>
         <bts:perdonaIntereses>S</bts:perdonaIntereses>
         <bts:cancelacionTotal>S</bts:cancelacionTotal>
         <bts:expresadoEn>M</bts:expresadoEn>
      </bts:BTPrestamos.ObtenerDetalleCancelacionTotal>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleCancelacionTotal\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "operacionUId": 227,
    "fecha": "",
    "perdonaIntereses": "S",
    "cancelacionTotal": "S",
    "expresadoEn": "M"
    }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDetalleCancelacionTotalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b6a06c447cCD285A89A23FBE</Token>
         </Btinreq>
         <sdtConceptosPrestamo>
            <totalSeguros>0.00</totalSeguros>
            <fecha>2024-01-06</fecha>
            <otrosSeguros>0.00</otrosSeguros>
            <detalleSeguros></detalleSeguros>
            <detalleConceptos>
               <sBTConcepto>
                  <texto>Impuesto Canon</texto>
                  <valor>10676.119999999999</valor>
                  <concepto>IMPUESTO_CANON</concepto>
               </sBTConcepto>
               <sBTConcepto>
                  <texto>Total Interes Punitorio</texto>
                  <valor>3231.39</valor>
                  <concepto>PUNITORIO</concepto>
               </sBTConcepto>
            </detalleConceptos>
            <totalComisiones>0.00</totalComisiones>
            <intereses>656.41</intereses>
            <precio>0.00</precio>
            <impuestoComision>0.00</impuestoComision>
            <porcentaje>0.00</porcentaje>
            <otrosConceptos>0.00</otrosConceptos>
            <impuestoInteres>2169.47</impuestoInteres>
            <impuestoMora>2174.47</impuestoMora>
            <tipoCambio>1.00</tipoCambio>
            <interesMora>7123.25</interesMora>
            <deudaTotal>25429.44</deudaTotal>
            <capital>10074.45</capital>
            <seguroIncendio>0.00</seguroIncendio>
            <comisionMora>0.00</comisionMora>
            <impuestoComisionMora>0.00</impuestoComisionMora>
            <seguroVehicular>0.00</seguroVehicular>
            <perdon>0.00</perdon>
            <totalImpuestos>4343.94</totalImpuestos>
            <comisionesCuota>0.00</comisionesCuota>
            <seguroVida>0.00</seguroVida>
            <signoImportes>$</signoImportes>
         </sdtConceptosPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>269</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDetalleCancelacionTotal</Servicio>
            <Fecha>2024-05-07</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>12:42:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleCancelacionTotalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "sdtConceptosPrestamo": {
    "totalSeguros": 0,
    "fecha": "2024-01-06",
    "otrosSeguros": 0,
    "detalleSeguros": "",
    "detalleConceptos": {
      "sBTConcepto": [
        {
          "texto": "Impuesto Canon",
          "valor": 10676.119999999999,
          "concepto": "IMPUESTO_CANON"
        },
        {
          "texto": "Total Interes Punitorio",
          "valor": 3231.39,
          "concepto": "PUNITORIO"
        }
      ]
    },
    "totalComisiones": 0,
    "intereses": 656.41,
    "precio": 0,
    "impuestoComision": 0,
    "porcentaje": 0,
    "otrosConceptos": 0,
    "impuestoInteres": 2169.47,
    "impuestoMora": 2174.47,
    "tipoCambio": 1,
    "interesMora": 7123.25,
    "deudaTotal": 25429.44,
    "capital": 10074.45,
    "seguroIncendio": 0,
    "comisionMora": 0,
    "impuestoComisionMora": 0,
    "seguroVehicular": 0,
    "perdon": 0,
    "totalImpuestos": 4343.94,
    "comisionesCuota": 0,
    "seguroVida": 0,
    "signoImportes": "$"
    },
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDetalleCancelacionTotal",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTConceptosPrestamo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital.' }, { Nombre: 'comisionesCuota', Tipo: 'Double', Comentarios: 'Total de comisiones de las cuotas.' }, { Nombre: 'comisionMora', Tipo: 'Double', Comentarios: 'Comisión de mora.' }, { Nombre: 'detalleConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Detalle de los conceptos adicionales.' }, { Nombre: 'detalleSeguros', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Listado de los seguros.' }, { Nombre: 'deudaTotal', Tipo: 'Double', Comentarios: 'Deuda total.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha.' }, { Nombre: 'impuestoComision', Tipo: 'Double', Comentarios: 'Impuesto de la comisión.' }, { Nombre: 'impuestoComisionMora', Tipo: 'Double', Comentarios: 'Impuesto de comisión de mora.' }, { Nombre: 'impuestoInteres', Tipo: 'Double', Comentarios: 'Impuesto de intereses.' }, { Nombre: 'impuestoMora', Tipo: 'Double', Comentarios: 'Impuesto de mora.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses.' }, { Nombre: 'interesMora', Tipo: 'Double', Comentarios: 'Interés de mora.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Total de los conceptos adicionales.' }, { Nombre: 'otrosSeguros', Tipo: 'Double', Comentarios: 'Total de los otros seguros.' }, { Nombre: 'perdon', Tipo: 'Double', Comentarios: 'Perdón.' }, { Nombre: 'porcentaje', Tipo: 'Double', Comentarios: 'Porcentaje.' }, { Nombre: 'precio', Tipo: 'Double', Comentarios: 'Precio.' }, { Nombre: 'seguroIncendio', Tipo: 'Double', Comentarios: 'Seguro de incendio.' }, { Nombre: 'seguroVehicular', Tipo: 'Double', Comentarios: 'Seguro vehicular.' }, { Nombre: 'seguroVida', Tipo: 'Double', Comentarios: 'Seguro de vida.' }, { Nombre: 'signoImportes', Tipo: 'String', Comentarios: 'Signo de importe.' }, { Nombre: 'tipoCambio', Tipo: 'Double', Comentarios: 'Tipo de cambio.' }, { Nombre: 'totalComisiones', Tipo: 'Double', Comentarios: 'Total de las comisiones.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Total de impuestos.' }, { Nombre: 'totalSeguros', Tipo: 'Double', Comentarios: 'Total de seguros.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Date', Comentarios: 'Importe.' }] }];
}
