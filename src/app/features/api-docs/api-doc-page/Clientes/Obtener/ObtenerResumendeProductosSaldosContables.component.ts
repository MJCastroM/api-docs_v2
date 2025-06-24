import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerResumendeProductosSaldosContables',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerResumendeProductosSaldosContablesComponent1750713393475 {
  pageTitle        = 'Obtener Resumen de Productos (Saldos Contables)';
  description      = `Método para obtener un resumen de los productos de un cliente y su saldo contable correspondiente.`;
  pubName    = 'BTClientes.ObtenerResumenProductos';
  programa   = 'RBTPG003';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente' }];
  outputData = [{ Nombre: 'sdtResumenProductos', Tipo: '[sCTInfoProductos](#sctinfoproductos)', Comentarios: 'Listado de productos' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para el Identificador' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerResumenProductos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTClientes.ObtenerResumenProductos>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerResumenProductos=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 429ec47f-4843-8dca-c8f7-32c004addb68\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": "4"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerResumenProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtResumenProductos>
            <cuentasCorrientes>
               <descripcion>Cuentas Corrientes</descripcion>
               <cantidad>3</cantidad>
               <saldoUSD>0.00</saldoUSD>
               <saldoMN>26799806.42</saldoMN>
            </cuentasCorrientes>
            <cajasAhorros>
               <descripcion>Cajas de Ahorro</descripcion>
               <cantidad>4</cantidad>
               <saldoUSD>0.00</saldoUSD>
               <saldoMN>0.00</saldoMN>
            </cajasAhorros>
            <cofresSeguridad>
               <descripcion>Cofres de Seguridad</descripcion>
               <cantidad>0</cantidad>
               <saldoUSD>0.00</saldoUSD>
               <saldoMN>0.00</saldoMN>
            </cofresSeguridad>
            <otros></otros>
            <tarjetasCredito>
               <descripcion/>
               <cantidad>0</cantidad>
               <saldoUSD>0.00</saldoUSD>
               <saldoMN>0.00</saldoMN>
            </tarjetasCredito>
            <tarjetasDebito>
               <descripcion>Tarjetas de Débito</descripcion>
               <cantidad>0</cantidad>
               <saldoUSD>0.00</saldoUSD>
               <saldoMN>0.00</saldoMN>
            </tarjetasDebito>
            <plazosFijos>
               <descripcion>Plazos Fijos</descripcion>
               <cantidad>4</cantidad>
               <saldoUSD>0.00</saldoUSD>
               <saldoMN>413217.36</saldoMN>
            </plazosFijos>
            <prestamos>
               <descripcion>Préstamos</descripcion>
               <cantidad>16</cantidad>
               <saldoUSD>0.00</saldoUSD>
               <saldoMN>2709617.59</saldoMN>
            </prestamos>
            <clienteUId>4</clienteUId>
         </sdtResumenProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>841</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerResumenProductos</Servicio>
            <Fecha>2017-12-18</Fecha>
            <Requerimiento/>
            <Hora>02:19:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerResumenProductosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtResumenProductos": {
        "cuentasCorrientes": {
            "descripcion": "Cuentas Corrientes",
            "cantidad": "3",
            "saldoUSD": "0.00",
            "saldoMN": "26799806.42"
        },
        "cajasAhorros": {
            "descripcion": "Cajas de Ahorro",
            "cantidad": "4",
            "saldoUSD": "0.00",
            "saldoMN": "0.00"
        },
        "cofresSeguridad": {
            "descripcion": "Cofres de Seguridad",
            "cantidad": "0",
            "saldoUSD": "0.00",
            "saldoMN": "0.00"
        },
        "otros": {
            "sCTResumenProducto": []
        },
        "tarjetasCredito": {
            "descripcion": "",
            "cantidad": "0",
            "saldoUSD": "0.00",
            "saldoMN": "0.00"
        },
        "tarjetasDebito": {
            "descripcion": "Tarjetas de Débito",
            "cantidad": "0",
            "saldoUSD": "0.00",
            "saldoMN": "0.00"
        },
        "plazosFijos": {
            "descripcion": "Plazos Fijos",
            "cantidad": "4",
            "saldoUSD": "0.00",
            "saldoMN": "413217.36"
        },
        "prestamos": {
            "descripcion": "Préstamos",
            "cantidad": "16",
            "saldoUSD": "0.00",
            "saldoMN": "2709617.59"
        },
        "clienteUId": "4"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "842",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerResumenProductos",
        "Fecha": "2017-12-18",
        "Requerimiento": "",
        "Hora": "02:19:57",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sCTInfoProductos', fields: [{ Nombre: 'cajasAhorros', Tipo: '[sCTResumenProducto](#sctresumenproducto)', Comentarios: 'Cajas de ahorro.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'cofresSeguridad', Tipo: '[sCTResumenProducto](#sctresumenproducto)', Comentarios: 'Cofres de seguridad.' }, { Nombre: 'cuentasCorrientes', Tipo: '[sCTResumenProducto](#sctresumenproducto)', Comentarios: 'Cuentas corrientes.' }, { Nombre: 'plazosFijos', Tipo: '[sCTResumenProducto](#sctresumenproducto)', Comentarios: 'Plazos fijos.' }, { Nombre: 'prestamos', Tipo: '[sCTResumenProducto](#sctresumenproducto)', Comentarios: 'Préstamos.' }, { Nombre: 'tarjetasDebito', Tipo: '[sCTResumenProducto](#sctresumenproducto)', Comentarios: 'Tarjetas de débito.' }] }, { typeName: 'sCTResumenProducto', fields: [{ Nombre: 'cantidad', Tipo: 'Int', Comentarios: 'Cantidad de operaciones.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'saldoMN', Tipo: 'Double', Comentarios: 'Saldo disponible en moneda nacional.' }, { Nombre: 'saldoUSD', Tipo: 'Double', Comentarios: 'Saldo disponible en dólares.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
