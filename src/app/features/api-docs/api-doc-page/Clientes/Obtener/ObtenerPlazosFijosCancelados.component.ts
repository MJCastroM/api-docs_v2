import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPlazosFijosCancelados',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPlazosFijosCanceladosComponent1750268694878 {
  pageTitle        = 'Obtener Plazos Fijos Cancelados';
  description      = `Método para obtener los productos de depósito a plazo fijo cancelados de un cliente.`;
  pubName    = 'BTClientes.ObtenerPlazosFijosCancelados';
  programa   = 'RBTPG275';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :-----------  
Correlativo 1 | 3
Correlativo 2 | 1 
Valor específico 1 | Identificador del módulo a incluir. 

Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
:--------- | :-----------  
Correlativo 1 | 3
Correlativo 2 | 2 
Valor específico 1 | Módulo del tipo de operación a excluir. 
Valor específico 2 | Tipo de operación a excluir.	 

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [{ Nombre: 'sdtProductosPlazoFijoCancelados', Tipo: '[sBTProductoPlazoFijoCancelado](#sbtproductoplazofijocancelado)', Comentarios: 'Listado de plazos fijos cancelados.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para el Identificador.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerPlazosFijosCancelados>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTClientes.ObtenerPlazosFijosCancelados>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPlazosFijosCancelados=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 315347e0-dc1b-de4d-6160-6f4f39d19acb\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 4
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerPlazosFijosCanceladosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>845cec4b724A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosPlazoFijoCancelados>
            <SdtsBTProductoPlazoFijoCancelado>
               <operacionUId>73</operacionUId>
               <idOperacionFmt>0000000108_00000</idOperacionFmt>
               <idOperacionBT>00100102200000000000000029000000000108001</idOperacionBT>
               <producto>
                  <productoUId>5</productoUId>
                  <nombre>DPF Intransferible Mda. Nac.</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <fechaAlta>2016-10-26</fechaAlta>
               <fechaVencimiento>2016-10-26</fechaVencimiento>
               <capital>10000.00</capital>
               <intereses>0.00</intereses>
               <impuestos>0.00</impuestos>
               <instruccion>Cancelar y Acreditar al vto.</instruccion>
               <instruccionCod>2</instruccionCod>
               <tasaOriginal>2.750000</tasaOriginal>
               <tasaFinal>2.750000</tasaFinal>
               <tipoTasa/>
               <plazo>0</plazo>
            </SdtsBTProductoPlazoFijoCancelado>
         </sdtProductosPlazoFijoCancelados>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>783</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerPlazosFijosCancelados</Servicio>
            <Fecha>2017-12-15</Fecha>
            <Requerimiento/>
            <Hora>13:49:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerPlazosFijosCanceladosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtProductosPlazoFijoCancelados": {
		"SdtsBTProductoPlazoFijoCancelado": {
		  "operacionUId": "73",
		  "idOperacionFmt": "0000000108_00000",
		  "idOperacionBT": "00100102200000000000000029000000000108001",
		  "producto": {
			"productoUId": "5",
			"nombre": "DPF Intransferible Mda. Nac.",
			"moneda": "$",
			"papel": ""
		  },
		  "sucursal": "Casa Matriz",
		  "fechaAlta": "2016-10-26",
		  "fechaVencimiento": "2016-10-26",
		  "capital": "10000.00",
		  "intereses": "0.00",
		  "impuestos": "0.00",
		  "instruccion": "Cancelar y Acreditar al vto.",
		  "instruccionCod": "2",
		  "tasaOriginal": "2.750000",
		  "tasaFinal": "2.750000",
		  "tipoTasa": "",
		  "plazo": "0"
		}
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "784",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerPlazosFijosCancelados",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "13:50:44",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTProductoPlazoFijoCancelado', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del depósito.' }, { Nombre: 'fechaAlta', Tipo: 'Date', Comentarios: 'Fecha de alta del depósito.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del depósito.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Impuestos del deposito.' }, { Nombre: 'instruccion', Tipo: 'String', Comentarios: 'Descripción de la instrucción del depósito.' }, { Nombre: 'instruccionCod', Tipo: 'Short', Comentarios: 'Código de instrucción.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses del depósito.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo del depósito.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'tasaFinal', Tipo: 'Double', Comentarios: 'Tasa final del depósito.' }, { Nombre: 'tasaOriginal', Tipo: 'Double', Comentarios: 'Tasa original del depósito.' }, { Nombre: 'tipoTasa', Tipo: 'String', Comentarios: 'Descripción del tipo de tasa.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
