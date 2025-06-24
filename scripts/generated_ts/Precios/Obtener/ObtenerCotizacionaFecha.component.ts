import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerCotizacionaFecha',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCotizacionaFechaComponent1750713394645 {
  pageTitle        = 'Obtener Cotización a Fecha';
  description      = `Método para obtener un listado de las cotizaciones de las monedas ingresadas.`;
  pubName    = 'BTPrecios.ObtenerCotizacionAFecha';
  programa   = 'RBTPG251';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de moneda. [Si es vacío devuelve las cotizaciones de todas las monedas].' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de cotización. [Si es vacía devuelve cotización al día de hoy].' }];
  outputData = [{ Nombre: 'sdtCotizacion', Tipo: '[sBTCotizacion](#sbtcotizacion)', Comentarios: 'Listado de cotizaciones.' }];
  errors     = [{ Codigo: '40001', Descripcion: 'El identificador de moneda se corresponde con la moneda nacional.' }, { Codigo: '40002', Descripcion: 'No se recuperó moneda para el identificador ingresado.' }, { Codigo: '40003', Descripcion: 'No se recuperaron monedas.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"><soapenv:Header/>    
	<soapenv:Body>        
		<bts:BTPrecios.ObtenerCotizacionAFecha>  
			 <bts:Btinreq>        
				<bts:Device>AV</bts:Device> 
				<bts:Usuario>MI</bts:Usuario> 
				<bts:Requerimiento></bts:Requerimiento> 
				<bts:Canal>BTDIGITAL</bts:Canal> 
				<bts:Token>268b6d2434</bts:Token> 
         </bts:Btinreq> 
         <bts:monedaId></bts:monedaId> 
         <bts:fecha></bts:fecha>  
      </bts:BTPrecios.ObtenerCotizacionAFecha> 
   </soapenv:Body> 
</soapenv:Envelope>`, 
    json: `
curl -X POST \ 
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerCotizacionAFecha\' \ 
  -H \'cache-control: no-cache\' \ 
  -H \'content-type: application/json\' \ 
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \ 
  -d \'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "monedaId": "", 
	"fecha": "" 
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAPENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAPENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">   
	<SOAP-ENV:Body>       
		<BTPrecios.ObtenerCotizacionAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">  
			<Btinreq>      
				<Device>AV</Device>     
				<Usuario>MI</Usuario>      
				<Requerimiento/>        
				<Canal>BTDIGITAL</Canal>        
				<Token>268b6d2B5C60A82434</Token>    
			</Btinreq> 
			<sdtCotizaciones> 
				<sBTCotizacion> 
				   <identificador>105</identificador> 
				   <monedaISO>AUD</monedaISO> 
				   <compra>1.00000000</compra> 
				   <venta>1.00000000</venta> 
				</sBTCotizacion> 
				<sBTCotizacion> 
				   <identificador>500</identificador> 
				   <monedaISO>ARS</monedaISO> 
				   <compra>10.00000000</compra> 
				   <venta>11.00000000</venta> 
				</sBTCotizacion> 
				<sBTCotizacion> 
				   <identificador>501</identificador> 
				   <monedaISO>AR$</monedaISO> 
				   <compra>9.50000000</compra> 
				   <venta>10.00000000</venta> 
				</sBTCotizacion> 
				<sBTCotizacion> 
				   <identificador>1000</identificador> 
				   <monedaISO>BRL</monedaISO> 
				   <compra>14.00000000</compra> 
				   <venta>14.40000000</venta> 
				</sBTCotizacion> 
				<sBTCotizacion> 
				   <identificador>9000</identificador> 
				   <monedaISO>ORO</monedaISO> 
				   <compra>600.00000000</compra> 
				   <venta>700.00000000</venta> 
				</sBTCotizacion> 
			 </sdtCotizaciones> 
			 <Erroresnegocio></Erroresnegocio> 
			 <Btoutreq> 
				<Canal>BTDIGITAL</Canal> 
				<Servicio>BTPrecios.ObtenerCotizacionAFecha</Servicio> 
				<Fecha>2019-08-09</Fecha> 
				<Hora>12:12:51</Hora> 
				<Requerimiento>1</Requerimiento> 
				<Numero>6616</Numero> 
				<Estado>OK</Estado> 
			 </Btoutreq> 
        </BTPrecios.ObtenerCotizacionAFechaResponse> 
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
	"sdtCotizaciones": { 
		"sBTCotizacion": [ 
			{ 
				"identificador": "105", 
				"monedaISO": "AUD", 
				"compra": "1.00000000", 
				"venta": "1.00000000" 
			}, 
			{ 
				"identificador": "500", 
				"monedaISO": "ARS", 
				"compra": "10.00000000", 
				"venta": "11.00000000" 
			}, 
			{ 
				"identificador": "501", 
				"monedaISO": "AR$", 
				"compra": "9.50000000", 
				"venta": "10.00000000" 
			}, 
			{ 
				"identificador": "1000", 
				"monedaISO": "BRL", 
				"compra": "14.00000000", 
				"venta": "14.40000000" 
			}, 
			{ 
				"identificador": "9000", 
				"monedaISO": "ORO", 
				"compra": "600.00000000", 
				"venta": "700.00000000" 
			} 
		] 
	}, 
  "Btoutreq": { 
	  "Numero": "103", 
	  "Estado": "OK", 
	  "Servicio": "BTPrecios.ObtenerCotizacionAFechaResponse", 
	  "Requerimiento": "1", 
	  "Fecha": "2019-07-22", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "16:00:37" 
	} 
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTCotizacion', fields: [{ Nombre: 'compra', Tipo: 'Double', Comentarios: 'Cotización Compra.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'monedaISO', Tipo: 'String', Comentarios: 'Código ISO de la moneda.' }, { Nombre: 'venta', Tipo: 'Double', Comentarios: 'Cotización Venta.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
