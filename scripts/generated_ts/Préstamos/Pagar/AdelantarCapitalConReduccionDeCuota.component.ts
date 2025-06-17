import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-AdelantarCapitalConReduccionDeCuota',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AdelantarCapitalConReduccionDeCuotaComponent {
  // Cabecera e info-card
  pageTitle = 'Adelantar Capital Con Reduccion De Cuota';
  description = `Metodo para realizar el pago de cuota de un prestamo con adelanto de capital.`;
  pubName    = 'BTPrestamos.AdelantarCapitalConReduccionDeCuota';
  programa   = 'RBTPG555';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId', 'clienteUId', 'importe', 'operacionUId_Cobro', 'referencia', 'modo', 'modalidadIntereses'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico del cliente.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'operacionUId_Cobro', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion de cobro.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo 'A' para este metodo].' }, { Nombre: 'modalidadIntereses', Tipo: 'String', Comentarios: 'Modalidad de intereses. Se pueden enviar los siguientes [valores](#valores).' }];
  outputCols = ['movimientoUId'];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador unico del movimiento.' }];
  errorCols  = ['30001', '30002', '30003', '30004', '30005', '30006', '30007', '30008', '30009', '30010', '30011', '30100', '51002', '51003', '51012', '51013'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador unico de operacion de prestamo.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador unico de operacion de cobro.' }, { Codigo: '30003', Descripcion: 'Debe ingresar importe.' }, { Codigo: '30004', Descripcion: 'No se recupero la operacion para el Identificador: [Numero de Identificador].' }, { Codigo: '30005', Descripcion: 'No se recupero la operacion para el Identificador: [Numero de Identificador].' }, { Codigo: '30006', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30007', Descripcion: 'No se recupero la cuenta para el Identificador de cliente: [Numero de Identificador].' }, { Codigo: '30008', Descripcion: 'El prestamo no pertenece al cliente.' }, { Codigo: '30009', Descripcion: 'La operacion de cobro no pertenece al cliente.' }, { Codigo: '30010', Descripcion: 'No se ingreso la modalidad de intereses.' }, { Codigo: '30011', Descripcion: 'El valor del campo modalidadIntereses tiene que ser CP o SP.' }, { Codigo: '30100', Descripcion: 'Error en la contabilizacion.' }, { Codigo: '51002', Descripcion: 'La operacion no existe.' }, { Codigo: '51003', Descripcion: 'La operacion de cobro no existe.' }, { Codigo: '51012', Descripcion: 'La operacion esta cancelada.' }, { Codigo: '51013', Descripcion: 'La operacion de cobro esta cancelada.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.AdelantarCapitalConReduccionDeCuota>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9436BF7CB5B5BB404CC6E5A7</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>212</bts:operacionUId>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:importe>30</bts:importe>
         <bts:operacionUId_Cobro>21</bts:operacionUId_Cobro>
         <bts:referencia></bts:referencia>
         <bts:modalidadIntereses>SP</bts:modalidadIntereses>
      </bts:BTPrestamos.AdelantarCapitalConReduccionDeCuota>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?AdelantarCapitalConReduccionDeCuota' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "operacionUId": 212,
    "clienteUId": 61,
    "importe": 30,
    "operacionUId_Cobro": 21,
    "referencia": "",
    "modalidadIntereses": "SP"
    }'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.AdelantarCapitalConReduccionDeCuotaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9436BF7CB5B5BB404CC6E5A7</Token>
         </Btinreq>
         <movimientoUId>66</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20604</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.AdelantarCapitalConReduccionDeCuota</Servicio>
            <Fecha>2024-05-21</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>15:43:23</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.AdelantarCapitalConReduccionDeCuotaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "movimientoUId": 66,
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPrestamos.AdelantarCapitalConReduccionDeCuota",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
