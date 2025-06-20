import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerResumenporProductoaCierreAno',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerResumenporProductoaCierreAnoComponent1750272790949 {
  pageTitle        = 'Obtener Resumen por Producto a Cierre Año';
  description      = `Método para obtener un resumen con el detalle de las operaciones de un cliente al cierre del año.`;
  pubName    = 'BTClientes.ObtenerResumenPorProductoACierreAnio';
  programa   = 'RBTPG271';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'anioConsulta', Tipo: 'Short', Comentarios: 'Año de consulta.' }];
  outputData = [{ Nombre: 'sdtOperaciones', Tipo: '[sBTDetalleOperacion](#sbtdetalleoperacion)', Comentarios: 'Listado de detalle de operaciones.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de operación.' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para la operación.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerResumenPorProductoACierreAnio>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>244353514CD285A89A23FBEE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10010</bts:clienteUId>
         <bts:anioConsulta>2018</bts:anioConsulta>
      </bts:BTClientes.ObtenerResumenPorProductoACierreAnio>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerResumenPorProductoACierreAnio \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"Btinreq": {
		"Device": "MC",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
        "clienteUId": "1000",
        "anioConsulta":"2018"
   }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerResumenPorProductoACierreAnioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>244353514CD285A89A23FBEE</Token>
            <Device>MC</Device>
         </Btinreq>
         <sdtOperaciones>
            <sBTDetalleOperacion>
               <operacionUId>2</operacionUId>
               <producto>
                  <productoUId>93</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                  <moneda>$</moneda>
                  <papel>$</papel>
               </producto>
               <saldo>0.00</saldo>
            </sBTDetalleOperacion>
            <sBTDetalleOperacion>
               <operacionUId>7</operacionUId>
               <producto>
                  <productoUId>132</productoUId>
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre>
                  <moneda>$</moneda>
                  <papel>$</papel>
               </producto>
               <saldo>15000.00</saldo>
            </sBTDetalleOperacion>
            <sBTDetalleOperacion>
               <operacionUId>11</operacionUId>
               <producto>
                  <productoUId>105</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
                  <moneda>$</moneda>
                  <papel>$</papel>
               </producto>
               <saldo>-415000.00</saldo>
            </sBTDetalleOperacion>
         </sdtOperaciones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTClientes.ObtenerResumenPorProductoACierreAnio</Servicio>
            <Fecha>2020-04-20</Fecha>
            <Hora>14:06:20</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7331</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTClientes.ObtenerResumenPorProductoACierreAnioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
    "Btinreq": {
			"Canal": "BTDIGITAL",
			"Requerimiento": "1",
			"Usuario": "INSTALADOR",
			"Token": "244353514CD285A89A23FBEE",
			"Device": "MC"
		},
		"sdtOperaciones": {
			"sBTDetalleOperacion": [
				{
					"operacionUId": "2",
					"producto": {
						"productoUId": "93",
						"nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física",
						"moneda": "$",
						"papel": "$"
					},
					"saldo": "0.00"
				},
				{
					"operacionUId": "7",
					"producto": {
						"productoUId": "132",
						"nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible",
						"moneda": "$",
						"papel": "$"
					},
					"saldo": "15000.00"
				},
				{
					"operacionUId": "11",
					"producto": {
						"productoUId": "105",
						"nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF",
						"moneda": "$",
						"papel": "$"
					},
					"saldo": "-415000.00"
				}
			]
		},
		"Erroresnegocio": "",
		"Btoutreq": {
			"Canal": "BTDIGITAL",
			"Servicio": "BTClientes.ObtenerResumenPorProductoACierreAnio",
			"Fecha": "2020-04-20",
			"Hora": "14:06:20",
			"Requerimiento": "1",
			"Numero": "7331",
			"Estado": "OK"
		}
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDetalleOperacion', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
