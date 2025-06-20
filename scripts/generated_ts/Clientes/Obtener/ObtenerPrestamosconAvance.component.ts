import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPrestamosconAvance',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPrestamosconAvanceComponent1750446218290 {
  pageTitle        = 'Obtener Préstamos con Avance';
  description      = `Método para obtener los productos de préstamo que tiene contratado un cliente, con su correspondiente avance.`;
  pubName    = 'BTClientes.ObtenerPrestamosConAvance';
  programa   = 'RBTPG259';
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
  outputData = [{ Nombre: 'sdtPrestamos', Tipo: '[sBTProgresoPrestamo](#sbtprogresoprestamo)', Comentarios: 'Listado de préstamos.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para el Identificador: [Número de identificador].' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerPrestamosConAvance>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>324915377F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
      </bts:BTClientes.ObtenerPrestamosConAvance>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPrestamosConAvance=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "324915377F955E77534D3E02"
	},
    "clienteUId": "1",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerPrestamosConAvanceResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>324915377F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPrestamos>
            <sBTProgresoPrestamo>
               <operacionUId>10</operacionUId>
               <idOperacionFmt>0000000170-000</idOperacionFmt>
               <idOperacionBT>0010000100101000000000000000002700000000000170003</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amort. Libre UI_Empresa</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Sucursal Beta</sucursal>
               <estado>Cobro Judicial</estado>
               <cantidadCuotas>12</cantidadCuotas>
               <cantidadCuotasPagas>2</cantidadCuotasPagas>
               <capitalDesembolsado>100000.00</capitalDesembolsado>
               <capitalCancelado>16666.67</capitalCancelado>
            </sBTProgresoPrestamo>
            <sBTProgresoPrestamo>
               <operacionUId>11</operacionUId>
               <idOperacionFmt>0000000048-000</idOperacionFmt>
               <idOperacionBT>0010100000101000000000000000002700000000000048001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <estado>Normal</estado>
               <cantidadCuotas>12</cantidadCuotas>
               <cantidadCuotasPagas>0</cantidadCuotasPagas>
               <capitalDesembolsado>515000.00</capitalDesembolsado>
               <capitalCancelado>16666.67</capitalCancelado>
            </sBTProgresoPrestamo>
            <sBTProgresoPrestamo>
               <operacionUId>12</operacionUId>
               <idOperacionFmt>0000000080-000</idOperacionFmt>
               <idOperacionBT>0010100000101000000000000000002700000000000080001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <estado>Normal</estado>
               <cantidadCuotas>12</cantidadCuotas>
               <cantidadCuotasPagas>6</cantidadCuotasPagas>
               <capitalDesembolsado>765000.00</capitalDesembolsado>
               <capitalCancelado>142470.83</capitalCancelado>
            </sBTProgresoPrestamo>
         </sdtPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTClientes.ObtenerPrestamosConAvance</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Hora>12:58:57</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6923</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTClientes.ObtenerPrestamosConAvanceResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "BANTOTAL", 
        "Token": "324915377F955E77534D3E02", 
        "Device": "AC" 
    }, 
    "sdtPrestamos": { 
        "sBTProgresoPrestamo": [ 
            { 
                "operacionUId": 10, 
                "idOperacionFmt": "0000000170-000", 
                "idOperacionBT": "0010000100101000000000000000002700000000000170003", 
                "producto": { 
                    "productoUId": 0, 
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amort. Libre UI_Empresa", 
                    "moneda": "$", 
                    "papel": "" 
                }, 
                "sucursal": "Sucursal Beta", 
                "estado": "Cobro Judicial", 
                "cantidadCuotas": 12, 
                "cantidadCuotasPagas": 2, 
                "capitalDesembolsado": 100000.00, 
                "capitalCancelado": 16666.67 
            }, 
            { 
                "operacionUId": 11, 
                "idOperacionFmt": "0000000048-000", 
                "idOperacionBT": "0010100000101000000000000000002700000000000048001", 
                "producto": { 
                    "productoUId": 0, 
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF", 
                    "moneda": "$", 
                    "papel": "" 
                }, 
                "sucursal": "Casa Matriz", 
                "estado": "Normal", 
                "cantidadCuotas": 12, 
                "cantidadCuotasPagas": 0, 
                "capitalDesembolsado": 515000.00, 
                "capitalCancelado": 16666.67 
            }, 
            { 
                "operacionUId": 12, 
                "idOperacionFmt": "0000000080-000", 
                "idOperacionBT": "0010100000101000000000000000002700000000000080001", 
                "producto": { 
                    "productoUId": 0, 
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF", 
                    "moneda": "$", 
                    "papel": "" 
                }, 
                "sucursal": "Casa Matriz", 
                "estado": "Normal", 
                "cantidadCuotas": 12, 
                "cantidadCuotasPagas": 6, 
                "capitalDesembolsado": 765000.00, 
                "capitalCancelado": 142470.83 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTClientes.ObtenerPrestamosConAvance", 
        "Fecha": "2019-11-19", 
        "Hora": "13:05:22", 
        "Requerimiento": "", 
        "Numero": 6924, 
        "Estado": "OK" 
    } 
}` }
  };

  structuredTypes = [{ typeName: 'sBTProgresoPrestamo', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Short', Comentarios: 'Cantidad de cuotas del préstamo.' }, { Nombre: 'cantidadCuotasPagas', Tipo: 'Short', Comentarios: 'Cantidad de cuotas pagas del préstamo.' }, { Nombre: 'capitalCancelado', Tipo: 'Double', Comentarios: 'Capital cancelado del préstamo.' }, { Nombre: 'capitalDesembolsado', Tipo: 'Double', Comentarios: 'Capital desembolsado del préstamo.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Descrición de estado de la operación.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).' }, { Nombre: 'idOperacionFMT', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sBTProducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal de alta.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
