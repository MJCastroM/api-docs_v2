import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../../route-animations';

@Component({
  selector: 'app-ObtenerIdentificadorUnicodeMovimiento',
  templateUrl: '../../../DocTemplate.component.html',
  styleUrls: ['../../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerIdentificadorUnicodeMovimientoComponent1751987196737 {
  pageTitle        = 'Obtener Identificador Único de Movimiento';
  description      = `Método para obtener el identificador único de un movimiento contable.`;
  pubName    = 'BTContabilidad.ObtenerIdentificadorUnicoMovimiento';
  programa   = 'RBTPG835';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'empresaId', Tipo: 'Short', Comentarios: 'Identificador de empresa.' }, { Nombre: 'sucursalId', Tipo: 'Int', Comentarios: 'Identificador de sucursal.' }, { Nombre: 'moduloId', Tipo: 'Int', Comentarios: 'Módulo Bantotal.' }, { Nombre: 'transaccionId', Tipo: 'Int', Comentarios: 'Identificador de transacción Bantotal.' }, { Nombre: 'relacion', Tipo: 'Int', Comentarios: 'Relación.' }, { Nombre: 'fechaContabilizacion', Tipo: 'Date', Comentarios: 'Fecha de contabilización.' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento (asiento).' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió empresa.' }, { Código: '30002', Descripción: 'No se recibió sucursal.' }, { Código: '30003', Descripción: 'No se recibió módulo.' }, { Código: '30004', Descripción: 'No se recibió transacción.' }, { Código: '30005', Descripción: 'No se recibió relación.' }, { Código: '30006', Descripción: 'No se recibió fecha de contabilización.' }, { Código: '30007', Descripción: 'Movimiento no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.ObtenerIdentificadorUnicoMovimiento>
         <bts:Btinreq>
            <bts:Device>bms</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:empresaId>1</bts:empresaId>
         <bts:sucursalId>1</bts:sucursalId>
         <bts:moduloId>18</bts:moduloId>
         <bts:transaccionId>402</bts:transaccionId>
         <bts:relacion>1</bts:relacion>
         <bts:fechaContabilizacion>2013-01-02</bts:fechaContabilizacion>
      </bts:BTContabilidad.ObtenerIdentificadorUnicoMovimiento>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerIdentificadorUnicoMovimiento\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -d \'{
    "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "faa36bd33f4A8B5C60A82434"
    },
    "empresaId": "1",
    "sucursalId": "1",
    "moduloId": "18",
    "transaccionId": "402",
    "relacion": "1",
    "fechaContabilizacion": "2013-01-02"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.ObtenerIdentificadorUnicoMovimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>bms</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f99a68ce154A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>1</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1100</Numero>
            <Servicio>BTContabilidad.ObtenerIdentificadorUnicoMovimiento</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-10-30</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>19:20:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTContabilidad.ObtenerIdentificadorUnicoMovimientoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{ 
    "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "faa36bd33f4A8B5C60A82434" 
    }, 
    "movimientoUId": 1, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 1105, 
        "Servicio": "BTContabilidad.ObtenerIdentificadorUnicoMovimiento", 
        "Estado": "OK", 
        "Fecha": "2020-11-02", 
        "Requerimiento": "0", 
        "Hora": "18:08:09", 
        "Canal": "BTDIGITAL" 
    } 
}` }
  };

  structuredTypes = [];
}
