import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerIdBantotalMovimiento',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerIdentificadorBantotaldeMovimientoComponent {
  pageTitle = 'Obtener Identificador Bantotal de Movimiento';
  description = `Metodo para obtener la clave de identificacion Bantotal de un movimiento.`;
  pubName    = 'BTContabilidad.ObtenerIdBantotalMovimiento';
  programa   = 'RBTPG368';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador unico de movimiento.' }];
  outputData = [{ Nombre: 'empresa', Tipo: 'Short', Comentarios: 'Identificador de empresa.' }, { Nombre: 'sucursalId', Tipo: 'Int', Comentarios: 'Identificador de sucursal.' }, { Nombre: 'moduloId', Tipo: 'Int', Comentarios: 'Identificador de modulo.' }, { Nombre: 'transaccionId', Tipo: 'Int', Comentarios: 'Identificador de transaccion.' }, { Nombre: 'relacion', Tipo: 'Int', Comentarios: 'Relacion.' }, { Nombre: 'fechaContabilizacion', Tipo: 'Date', Comentarios: 'Fecha de contabilizacion.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de movimiento.' }, { Codigo: '30002', Descripcion: 'No existe registro para el identificador de movimiento ingresado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.ObtenerIdBantotalMovimiento>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>281020211424260000881155</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:movimientoUId>2</bts:movimientoUId>
      </bts:BTContabilidad.ObtenerIdBantotalMovimiento>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?ObtenerIdBantotalMovimiento' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "GP",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"movimientoUId": "2"
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.ObtenerIdBantotalMovimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>281020211424260000881155</Token>
            <Device>GP</Device>
         </Btinreq>
         <empresa>1</empresa>
         <sucursalId>1</sucursalId>
         <moduloId>21</moduloId>
         <transaccionId>750</transaccionId>
         <relacion>30</relacion>
         <fechaContabilizacion>2020-05-11</fechaContabilizacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTContabilidad.ObtenerIdBantotalMovimiento</Servicio>
            <Fecha>2021-10-28</Fecha>
            <Hora>15:39:53</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>11003</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTContabilidad.ObtenerIdBantotalMovimientoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{ 
    "Btinreq": { 
	    "Device": "GP", 
	    "Usuario": "MINSTALADOR", 
	    "Token": "16c1cc9b534A8B5C60A82434", 
	    "Canal": "BTDIGITAL", 
	    "Requerimiento": "1" 
    }, 
    "empresa": "1", 
    "sucursalId": "1", 
    "moduloId": "21", 
    "transaccionId": "750", 
    "relacion": "30", 
    "fechaContabilizacion": "2020-05-11", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTContabilidad.ObtenerIdBantotalMovimiento", 
        "Fecha": "2021-10-28", 
        "Hora": "15:39:53", 
        "Requerimiento": "1", 
        "Numero": "11003", 
        "Estado": "OK" 
    } 
}'` }
  };

  structuredTypes = [];
}
