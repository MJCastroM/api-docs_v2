import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-RegistrarAsiento',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class RegistrarAsientoComponent {
  // Cabecera e info-card
  pageTitle = 'Registrar Asiento';
  description = `Metodo para registrar en el sistema un movimiento entre dos operaciones genericas.`;
  pubName    = 'BTContabilidad.RegistrarAsiento';
  programa   = 'RBTPG029';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['sdtDatosAsiento'];
  inputData  = [{ Nombre: 'sdtDatosAsiento', Tipo: '[sBTDatosAsiento](#sbtdatosasiento)', Comentarios: 'Datos del movimiento' }];
  outputCols = ['movimientoUId'];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador unico de movimiento.' }];
  errorCols  = ['30001', '30004', '30100'];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar al menos una operacion.' }, { Codigo: '30004', Descripcion: 'No se recupero la operacion origen para el Identificador:' }, { Codigo: '30100', Descripcion: 'Error en la contabilizacion.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.RegistrarAsiento>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1244265502F955E77534D3E0</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:sdtDatosAsiento>
            <bts:operacionUId1>10140</bts:operacionUId1>
            <bts:operacionUId2>10141</bts:operacionUId2>
            <bts:operacionUId3></bts:operacionUId3>
            <bts:operacionUId4></bts:operacionUId4>
            <bts:operacionUId5></bts:operacionUId5>
            <bts:importe1>1000</bts:importe1>
            <bts:importe2>5220</bts:importe2>
            <bts:importe3></bts:importe3>
            <bts:importe4></bts:importe4>
            <bts:importe5></bts:importe5>
            <bts:importe6></bts:importe6>
            <bts:importe7></bts:importe7>
            <bts:importe8></bts:importe8>
            <bts:concepto></bts:concepto>
         </bts:sdtDatosAsiento>
      </bts:BTContabilidad.RegistrarAsiento>
   </soapenv:Body>`, json: `curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?RegistrarAsiento=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fde8ae30-8752-c0fe-cf77-f8761a5ddcff' \ 
  -d '{
"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
    }, 
	"sdtDatosAsiento": { 
		"operacionUId1": "10140", 
		"operacionUId2": "10141", 
		"operacionUId3": "", 
		"operacionUId4": "", 
		"operacionUId5": "", 
		"importe1": "1000", 
		"importe2": "5220", 
		"importe3": "", 
		"importe4": "", 
		"importe5": "", 
		"importe6": "", 
		"importe7": "", 
		"importe8": "", 
		"concepto": "" 
	}    
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTContabilidad.RegistrarAsientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
		 <movimientoUId>141</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>864</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTContabilidad.RegistrarAsiento</Servicio> 
            <Requerimiento/> 
            <Fecha>2017-12-18</Fecha> 
            <Hora>17:07:19</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTContabilidad.RegistrarAsientoResponse> 
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{ 
    "Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
    }, 
	"movimientoUId": "142", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "868", 
        "Estado": "OK", 
        "Servicio": "BTContabilidad.RegistrarAsiento", 
        "Requerimiento": "", 
        "Fecha": "2017-12-18", 
        "Hora": "17:15:28", 
        "Canal": "BTDIGITAL" 
    } 
}` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto del movimiento.' }, { Nombre: 'importe1', Tipo: 'Double', Comentarios: 'Importe 1 del movimiento.' }, { Nombre: 'importe2', Tipo: 'Double', Comentarios: 'Importe 2 del movimiento.' }, { Nombre: 'importe3', Tipo: 'Double', Comentarios: 'Importe 3 del movimiento.' }, { Nombre: 'importe4', Tipo: 'Double', Comentarios: 'Importe 4 del movimiento.' }, { Nombre: 'importe5', Tipo: 'Double', Comentarios: 'Importe 5 del movimiento.' }, { Nombre: 'importe6', Tipo: 'Double', Comentarios: 'Importe 6 del movimiento.' }, { Nombre: 'importe7', Tipo: 'Double', Comentarios: 'Importe 7 del movimiento.' }, { Nombre: 'importe8', Tipo: 'Double', Comentarios: 'Importe 8 del movimiento.' }, { Nombre: 'operacionUId1', Tipo: 'Long', Comentarios: 'Identificador unico de operacion 1.' }, { Nombre: 'operacionUId2', Tipo: 'Long', Comentarios: 'Identificador unico de operacion 2.' }, { Nombre: 'operacionUId3', Tipo: 'Long', Comentarios: 'Identificador unico de operacion 3.' }, { Nombre: 'operacionUId4', Tipo: 'Long', Comentarios: 'Identificador unico de operacion 4.' }, { Nombre: 'operacionUId5', Tipo: 'Long', Comentarios: 'Identificador unico de operacion 5.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
