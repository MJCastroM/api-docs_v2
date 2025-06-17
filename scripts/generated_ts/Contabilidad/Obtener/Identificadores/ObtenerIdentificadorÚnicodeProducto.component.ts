import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerIdentificadornicodeProducto',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerIdentificadorUnicodeProductoComponent {
  pageTitle = 'Obtener Identificador Unico de Producto';
  description = `Metodo para obtener el identificador unico de un producto.`;
  pubName    = 'BTContabilidad.ObtenerIdentificadorUnicoProducto';
  programa   = 'RBTPG837';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'empresaId', Tipo: 'Short', Comentarios: 'Identificador de empresa.' }, { Nombre: 'moduloId', Tipo: 'Int', Comentarios: 'Modulo Bantotal.' }, { Nombre: 'tipoOperacionBT', Tipo: 'Short', Comentarios: 'Tipo de operacion Bantotal.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'papelId', Tipo: 'Int', Comentarios: 'Identificador de papel.' }];
  outputData = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio modulo.' }, { Codigo: '30002', Descripcion: 'No se recibio tipo de operacion.' }, { Codigo: '30003', Descripcion: 'Moneda no existe.' }, { Codigo: '30004', Descripcion: 'Papel no existe.' }, { Codigo: '30005', Descripcion: 'No se recibio empresa.' }, { Codigo: '30006', Descripcion: 'Producto no existe.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.ObtenerIdentificadorUnicoProducto>
         <bts:Btinreq>
            <bts:Device>bms</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:empresaId>1</bts:empresaId>
         <bts:moduloId>20</bts:moduloId>
         <bts:tipoOperacionBT>36</bts:tipoOperacionBT>  
         <bts:monedaId>80</bts:monedaId>
         <bts:papelId>0</bts:papelId>
      </bts:BTContabilidad.ObtenerIdentificadorUnicoProducto>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerIdentificadorUnicoProducto' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
    "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "faa36bd33f4A8B5C60A82434"
    },
    "empresa": "1",
    "moduloId": "20",
    "tipoOperacionBT": "36",
    "monedaId": "80",
    "papelId": "0"
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.ObtenerIdentificadorUnicoProductoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>bms</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f99a68ce154A8B5C60A82434</Token>
         </Btinreq>
         <productoUId>1</productoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1103</Numero>
            <Servicio>BTContabilidad.ObtenerIdentificadorUnicoProducto</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-10-30</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>20:28:19</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTContabilidad.ObtenerIdentificadorUnicoProductoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{ 
    "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "faa36bd33f4A8B5C60A82434" 
    }, 
    "productoUId": 1, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 1109, 
        "Servicio": "BTContabilidad.ObtenerIdentificadorUnicoProducto", 
        "Estado": "OK", 
        "Fecha": "2020-11-02", 
        "Requerimiento": "0", 
        "Hora": "18:27:46", 
        "Canal": "BTDIGITAL" 
    } 
}` }
  };

  structuredTypes = [];
}
