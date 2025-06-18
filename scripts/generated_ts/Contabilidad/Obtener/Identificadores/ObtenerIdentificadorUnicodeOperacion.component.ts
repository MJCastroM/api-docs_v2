import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../../route-animations';

@Component({
  selector: 'app-ObtenerIdentificadorUnicodeOperacion',
  templateUrl: '../../../DocTemplate.component.html',
  styleUrls: ['../../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerIdentificadorUnicodeOperacionComponent1750268695402 {
  pageTitle        = 'Obtener Identificador Único de Operación';
  description      = `Método para obtener el identificador único de una operación.`;
  pubName    = 'BTContabilidad.ObtenerIdentificadorUnicoOperacion';
  programa   = 'RBTPG836';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Se puede parametrizar la opción general por módulo 1416. En caso de estar en \'S\', se inhabilitará el control de existencia de la operación en la tabla FSD011. 

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'empresaId', Tipo: 'Short', Comentarios: 'Identificador de empresa.' }, { Nombre: 'moduloId', Tipo: 'Int', Comentarios: 'Módulo Bantotal.' }, { Nombre: 'sucursalId', Tipo: 'Int', Comentarios: 'Identificador de sucursal.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'papelId', Tipo: 'Int', Comentarios: 'Identificador de papel.' }, { Nombre: 'cuentaBT', Tipo: 'Int', Comentarios: 'Cuenta Bantotal.' }, { Nombre: 'operacionBT', Tipo: 'Int', Comentarios: 'Operación Bantotal.' }, { Nombre: 'subOperacionBT', Tipo: 'Int', Comentarios: 'Sub Operación Bantotal.' }, { Nombre: 'tipoOperacionBT', Tipo: 'Short', Comentarios: 'Tipo de operación Bantotal.' }];
  outputData = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió empresaId.' }, { Codigo: '30002', Descripcion: 'No se recibió módulo.' }, { Codigo: '30003', Descripcion: 'No se recibió sucursal.' }, { Codigo: '30004', Descripcion: 'Moneda no existe.' }, { Codigo: '30005', Descripcion: 'Papel no existe.' }, { Codigo: '30006', Descripcion: 'No se recibió cuenta de cliente.' }, { Codigo: '30007', Descripcion: 'No se recibió operación.' }, { Codigo: '30008', Descripcion: 'No se recibió sub operación.' }, { Codigo: '30009', Descripcion: 'No se recibió tipo de operación.' }, { Codigo: '30010', Descripcion: 'Operación no existe.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.ObtenerIdentificadorUnicoOperacion>
         <bts:Btinreq>
            <bts:Device>bms</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:empresaId>1</bts:empresaId>
         <bts:moduloId>20</bts:moduloId>
         <bts:sucursalId>100</bts:sucursalId>
         <bts:monedaId>80</bts:monedaId>
         <bts:papelId>0</bts:papelId>
         <bts:cuentaBT>43</bts:cuentaBT>
         <bts:operacionBT>0</bts:operacionBT>
         <bts:subOperacionBT>8</bts:subOperacionBT>
         <bts:tipoOperacionBT>48</bts:tipoOperacionBT>
      </bts:BTContabilidad.ObtenerIdentificadorUnicoOperacion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
    \'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerIdentificadorUnicoOperacion\' \
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
    "moduloId": "20",
    "sucursalId": "100",
    "monedaId": "80",
    "papelId": "0",
    "cuentaBT": "43",
    "operacionBT": "0",
    "subOperacionBT": "8",
    "tipoOperacionBT": "48"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.ObtenerIdentificadorUnicoOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>bms</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f99a68ce154A8B5C60A82434</Token>
         </Btinreq>
         <operacionUId>1</operacionUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1102</Numero>
            <Servicio>BTContabilidad.ObtenerIdentificadorUnicoOperacion</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-10-30</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>20:27:14</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTContabilidad.ObtenerIdentificadorUnicoOperacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{ 
    "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "faa36bd33f4A8B5C60A82434" 
    }, 
    "operacionUId": 1, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 1110, 
        "Servicio": "BTContabilidad.ObtenerIdentificadorUnicoOperacion", 
        "Estado": "OK", 
        "Fecha": "2020-11-03", 
        "Requerimiento": "0", 
        "Hora": "10:12:26", 
        "Canal": "BTDIGITAL" 
    } 
}` }
  };

  structuredTypes = [];
}
