import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../../route-animations';

@Component({
  selector: 'app-ObtenerIdBantotalProducto',
  templateUrl: '../../../DocTemplate.component.html',
  styleUrls: ['../../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerIdBantotalProductoComponent1750446218416 {
  pageTitle        = 'Obtener Identificador Bantotal de Producto';
  description      = `Método para obtener la clave de identificación Bantotal de un producto.`;
  pubName    = 'BTContabilidad.ObtenerIdBantotalProducto';
  programa   = 'RBTPG450';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }];
  outputData = [{ Nombre: 'empresaId', Tipo: 'Short', Comentarios: 'Identificador de empresa.' }, { Nombre: 'moduloId', Tipo: 'Int', Comentarios: 'Módulo Bantotal.' }, { Nombre: 'tipoOperacionBT', Tipo: 'Short', Comentarios: 'Tipo de operación Bantotal.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'papelId', Tipo: 'Int', Comentarios: 'Identificador de papel.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió productoUId.' }, { Codigo: '40001', Descripcion: 'No existe una empresa con los datos ingresados.' }, { Codigo: '40002', Descripcion: 'No se pudo resolver la empresa del usuario.' }, { Codigo: '40003', Descripcion: 'No existe registro para el identificador único.' }, { Codigo: '40004', Descripcion: 'No existe registro para el producto indicado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.ObtenerIdBantotalProducto>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>papa</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>A917FB55555C334FB65C4E0C</bts:Token>
         </bts:Btinreq>
         <bts:productoUId>187</bts:productoUId>
      </bts:BTContabilidad.ObtenerIdBantotalProducto>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?ObtenerIdBantotalProducto\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
          "Requerimiento": 0,
          "Canal": "BTDIGITAL",
          "Device": "papa",
          "Usuario": "INSTALADOR",
          "Token": "A917FB55555C334FB65C4E0C"
        },
        "productoUId": 187
      }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.ObtenerIdBantotalProductoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Requerimiento>0</Requerimiento>
            <Device>papa</Device>
            <Usuario>INSTALADOR</Usuario>
            <Token>A917FB55555C334FB65C4E0C</Token>
            <Canal>BTDIGITAL</Canal>
         </Btinreq>
         <empresa>1</empresa>
         <modulo>101</modulo>
         <tipoOperacion>3</tipoOperacion>
         <moneda>0</moneda>
         <papel>50</papel>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Requerimiento>0</Requerimiento>
            <Estado>OK</Estado>
            <Fecha>2022-10-27</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTContabilidad.ObtenerIdBantotalProducto</Servicio>
            <Hora>14:46:26</Hora>
            <Numero>225416</Numero>
         </Btoutreq>
      </BTContabilidad.ObtenerIdBantotalProductoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
        "Btinreq": {
          "Requerimiento": 0,
          "Device": "papa",
          "Usuario": "INSTALADOR",
          "Token": "A917FB55555C334FB65C4E0C",
          "Canal": "BTDIGITAL"
        },
        "empresa": 1,
        "modulo": 101,
        "tipoOperacion": 3,
        "moneda": 0,
        "papel": 50,
        "Erroresnegocio": "",
        "Btoutreq": {
          "Requerimiento": 0,
          "Estado": "OK",
          "Fecha": "2022-10-27",
          "Canal": "BTDIGITAL",
          "Servicio": "BTContabilidad.ObtenerIdBantotalProducto",
          "Hora": "14:46:26",
          "Numero": 225416
        }
      }\'` }
  };

  structuredTypes = [];
}
