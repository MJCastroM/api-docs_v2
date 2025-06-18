import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-AnularMovimiento',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AnularMovimientoComponent1750268695342 {
  pageTitle        = 'Anular Movimiento';
  description      = `Método para anular un movimiento.`;
  pubName    = 'BTContabilidad.AnularMovimiento';
  programa   = 'RBTPG237';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de anulación.' }];
  outputData = [{ Nombre: 'movimientoUIdAnulacion', Tipo: 'Long', Comentarios: 'Identificador único de la anulación de movimiento.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de movimiento.' }, { Codigo: '30002', Descripcion: 'No se recibió fecha de anulación.' }, { Codigo: '40003', Descripcion: 'No se permite ingresar operaciones anteriores al último cierre.' }, { Codigo: '40004', Descripcion: 'Usuario no autorizado a cambiar la Fecha Valor Contable.' }, { Codigo: '40071', Descripcion: 'La fecha valor contable no puede ser un feriado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.AnularMovimiento>
         <bts:Btinreq>
            <bts:Device>2</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>2</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6461dd29c54A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:movimientoUId>250</bts:movimientoUId>
         <bts:fecha>2018-08-10</bts:fecha>
      </bts:BTContabilidad.AnularMovimiento>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?AnularMovimiento\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "movimientoUId": 245,
    "fecha": 2018-08-10
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.AnularMovimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>2</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>2</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6461dd29c54A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUIdAnulacion>28</movimientoUIdAnulacion>
         <Erroresnegocio></Erroresnegocio>  
         <Btoutreq>
            <Numero>4444</Numero>
            <Estado>OK</Estado>
            <Servicio>BTContabilidad.AnularMovimiento</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Requerimiento>2</Requerimiento>
            <Hora>17:17:56</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTContabilidad.AnularMovimientoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "movimientoUIdAnulacion":28,
   "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "4445",
        "Estado": "OK",
        "Servicio": "BTContabilidad.AnularMovimiento",
        "Fecha": "2018-12-14",
        "Requerimiento": "",
        "Hora": "17:22:04",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
