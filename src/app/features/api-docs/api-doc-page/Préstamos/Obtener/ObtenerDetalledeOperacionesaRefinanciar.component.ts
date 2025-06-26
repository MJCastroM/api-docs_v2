import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalledeOperacionesaRefinanciar',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalledeOperacionesaRefinanciarComponent1750945334953 {
  pageTitle        = 'Obtener Detalle de Operaciones a Refinanciar';
  description      = `Método para obtener detalle de las operaciones a refinanciar.`;
  pubName    = 'BTPrestamos.ObtenerDetalleOperacionesARefinanciar';
  programa   = 'RBTPG547';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtOperacionesARefinanciar', Tipo: '[sBTPrestamos](#sbtprestamos)', Comentarios: 'Datos de las operaciones a refinanciar.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único del producto.' }];
  outputData = [{ Nombre: 'simulacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la simulación.' }, { Nombre: 'sdtPrestamosACancelar', Tipo: '[sBTPrestamoACancelar](#sbtprestamoacancelar)', Comentarios: 'Listado de préstamos a cancelar.' }, { Nombre: 'sdtConceptosPrestamo', Tipo: '[sBTConceptosPrestamo](#sbtconceptosprestamo)', Comentarios: 'Conceptos del préstamo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }, { Codigo: '30003', Descripcion: 'No se recibió el identificador de producto.' }, { Codigo: '30004', Descripcion: 'No se recuperó el producto para el Identificador: [Número de Identificador].' }, { Codigo: '30005', Descripcion: 'No se indicaron operaciones a refinanciar.' }, { Codigo: '30013', Descripcion: 'El producto indicado es incorrecto' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalleOperacionesARefinanciar>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>A53FB4EFAB131F3431674966</bts:Token>
         </bts:Btinreq>
         <bts:sdtOperacionesARefinanciar>
            <bts:clienteUId>2</bts:clienteUId>
            <bts:fecha></bts:fecha>
            <bts:operaciones>
               <bts:Long>66322</bts:Long>
            </bts:operaciones>
         </bts:sdtOperacionesARefinanciar>
         <bts:productoUId>60</bts:productoUId>
      </bts:BTPrestamos.ObtenerDetalleOperacionesARefinanciar>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
   \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleOperacionesARefinanciar\' \
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
   "sdtOperacionesARefinanciar": {
      "clienteUId": 2,
      "fecha": "",
      "operaciones": {
      "Long": 66322
      }
   },
   "productoUId": 60
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDetalleOperacionesARefinanciarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>A53FB4EFAB131F3431674966</Token>
         </Btinreq>
         <simulacionUId>21879</simulacionUId>
         <sdtPrestamosACancelar>
            <sBTPrestamoACancelar>
               <otrosConceptos>0.0</otrosConceptos>
               <fechaValor>2023-02-17</fechaValor>
               <capital>0.0</capital>
               <intereses>0.0</intereses>
               <totalComisiones>0.0</totalComisiones>
               <deudaTotal>0.0</deudaTotal>
               <operacionUId>66322</operacionUId>
               <totalSeguros>0.0</totalSeguros>
               <interesMora>0.0</interesMora>
               <fechaUltimoPago/>
               <fechaVencimiento/>
               <diasMora>0</diasMora>
               <producto>
                  <moneda>$</moneda>
                  <papel>$</papel>
                  <productoUId>60</productoUId>
                  <nombre>PRESTAMO VEHICULAR, Credito Convencional</nombre>
               </producto>
               <detalleConceptos></detalleConceptos>
               <totalImpuestos>0.0</totalImpuestos>
            </sBTPrestamoACancelar>
         </sdtPrestamosACancelar>
         <sdtConceptosPrestamo>
            <totalSeguros>0.0</totalSeguros>
            <otrosSeguros>0.0</otrosSeguros>
            <detalleSeguros></detalleSeguros>
            <detalleConceptos></detalleConceptos>
            <totalComisiones>0.0</totalComisiones>
            <intereses>0.0</intereses>
            <precio>0.0</precio>
            <impuestoComision>0.0</impuestoComision>
            <otrosConceptos>0.0</otrosConceptos>
            <impuestoInteres>0.0</impuestoInteres>
            <impuestoMora>0.0</impuestoMora>
            <tipoCambio>0.0</tipoCambio>
            <interesMora>0.0</interesMora>
            <deudaTotal>0.0</deudaTotal>
            <capital>0.0</capital>
            <seguroIncendio>0.0</seguroIncendio>
            <comisionMora>0.0</comisionMora>
            <impuestoComisionMora>0.0</impuestoComisionMora>
            <seguroVehicular>0.0</seguroVehicular>
            <totalImpuestos>0.0</totalImpuestos>
            <comisionesCuota>0.0</comisionesCuota>
            <seguroVida>0.0</seguroVida>
            <signoImportes/>
         </sdtConceptosPrestamo>
         <Erroresnegocio/>
         <Btoutreq>
            <Numero>733122</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDetalleOperacionesARefinanciar</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2024-05-23</Fecha>
            <Hora>17:11:20</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleOperacionesARefinanciarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
   "Btinreq": {
      "Device": "GP",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "c2cfd09eff4A8B5C60A82434"
   },
   "simulacionUId": 21879,
   "sdtPrestamosACancelar": {
      "sBTPrestamoACancelar": {
      "otrosConceptos": 0,
      "fechaValor": "2023-02-17",
      "capital": 0,
      "intereses": 0,
      "totalComisiones": 0,
      "deudaTotal": 0,
      "operacionUId": 66322,
      "totalSeguros": 0,
      "interesMora": 0,
      "fechaUltimoPago": "",
      "fechaVencimiento": "",
      "diasMora": 0,
      "producto": {
         "moneda": "$",
         "papel": "$",
         "productoUId": 60,
         "nombre": "PRESTAMO VEHICULAR, Credito Convencional"
      },
      "detalleConceptos": "",
      "totalImpuestos": 0
      }
   },
   "sdtConceptosPrestamo": {
      "totalSeguros": 0,
      "otrosSeguros": 0,
      "detalleSeguros": "",
      "detalleConceptos": "",
      "totalComisiones": 0,
      "intereses": 0,
      "precio": 0,
      "impuestoComision": 0,
      "otrosConceptos": 0,
      "impuestoInteres": 0,
      "impuestoMora": 0,
      "tipoCambio": 0,
      "interesMora": 0,
      "deudaTotal": 0,
      "capital": 0,
      "seguroIncendio": 0,
      "comisionMora": 0,
      "impuestoComisionMora": 0,
      "seguroVehicular": 0,
      "totalImpuestos": 0,
      "comisionesCuota": 0,
      "seguroVida": 0,
      "signoImportes": ""
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTPrestamos.ObtenerDetalleOperacionesARefinanciar",
      "Fecha": "2021-03-18",
      "Hora": "10:03:41",
      "Requerimiento": 1,
      "Numero": 8032,
      "Estado": "OK"
   }
}` }
  };

  structuredTypes = [{ typeName: 'sBTPrestamos', fields: [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha.' }, { Nombre: 'operaciones', Tipo: 'Long', Comentarios: 'Listado de operaciones.' }] }, { typeName: 'sBTPrestamoACancelar', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital.' }, { Nombre: 'detalleConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Listado de detalles concepto.' }, { Nombre: 'deudaTotal', Tipo: 'Double', Comentarios: 'Deuda total.' }, { Nombre: 'diasMora', Tipo: 'Int', Comentarios: 'Días de mora.' }, { Nombre: 'fechaUltimoPago', Tipo: 'Date', Comentarios: 'Fecha del último pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor de la operación.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Total de intereses.' }, { Nombre: 'interesMora', Tipo: 'Double', Comentarios: 'Interés mora.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Total de otros conceptos.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'totalComisiones', Tipo: 'Double', Comentarios: 'Total de comisiones.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Total de impuestos.' }, { Nombre: 'totalSeguros', Tipo: 'Double', Comentarios: 'Total de seguros.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTConceptosPrestamo', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital.' }, { Nombre: 'comisionesCuota', Tipo: 'Double', Comentarios: 'Comisiones de las cuotas.' }, { Nombre: 'comisionMora', Tipo: 'Double', Comentarios: 'Comisión de mora.' }, { Nombre: 'detalleConceptos', Tipo: 'sBTConcepto', Comentarios: 'Listado del detalle de los conceptos.' }, { Nombre: 'detalleSeguros', Tipo: 'sBTConcepto', Comentarios: 'Listado del detalle de los seguros.' }, { Nombre: 'deudaTotal', Tipo: 'Double', Comentarios: 'Deuda total.' }, { Nombre: 'impuestoComision', Tipo: 'Double', Comentarios: 'Total de impuestos de comisión.' }, { Nombre: 'impuestoComisionMora', Tipo: 'Double', Comentarios: 'Impuesto de comisión de mora.' }, { Nombre: 'impuestoInteres', Tipo: 'Double', Comentarios: 'Total de impuesto de intereses.' }, { Nombre: 'impuestoMora', Tipo: 'Double', Comentarios: 'Impuesto de mora.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Total de intereses.' }, { Nombre: 'interesMora', Tipo: 'Double', Comentarios: 'Interés de mora.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Total de otros conceptos.' }, { Nombre: 'otrosSeguros', Tipo: 'Double', Comentarios: 'Total de otros seguros.' }, { Nombre: 'precio', Tipo: 'Double', Comentarios: 'Precio.' }, { Nombre: 'seguroIncendio', Tipo: 'Double', Comentarios: 'Seguro de incendio.' }, { Nombre: 'seguroVehicular', Tipo: 'Double', Comentarios: 'Seguro vehicular.' }, { Nombre: 'seguroVida', Tipo: 'Double', Comentarios: 'Seguro de vida.' }, { Nombre: 'signoImportes', Tipo: 'String', Comentarios: 'Signo de importes.' }, { Nombre: 'tipoCambio', Tipo: 'Double', Comentarios: 'Tipo de cambio.' }, { Nombre: 'totalComisiones', Tipo: 'Double', Comentarios: 'Total de comisiones.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Total de impuestos.' }, { Nombre: 'totalSeguros', Tipo: 'Double', Comentarios: 'Total de seguros.' }] }];
}
