import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTarjetasdeDebito',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTarjetasdeDebitoComponent1750272790959 {
  pageTitle        = 'Obtener Tarjetas de Débito';
  description      = `Método para obtener los productos de tarjeta de débito que tiene contratado un cliente.`;
  pubName    = 'BTClientes.ObtenerTarjetasDebito';
  programa   = 'RBTPG015';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Si la opción general de procesos 20665 se encuentra activada o no se encuentra parametrizada, el servicio devuelve solo las tarjetas preferenciales. De lo contrario, si está parametrizada pero desactivada devolverá tanto las preferenciales como las adicionales. 

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [{ Nombre: 'sdtProductosTarjeta', Tipo: '[sBDProductoTarjeta](#sbdproductotarjeta)', Comentarios: 'Listado de tarjetas.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para el Identificador.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerTarjetasDebito>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>81</bts:clienteUId>
      </bts:BTClientes.ObtenerTarjetasDebito>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerTarjetasDebito=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: d89acb55-7235-c1e6-3866-0e89f6f76091\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": "81"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerTarjetasDebitoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosTarjeta>
            <sBDProductoTarjeta>
               <tarjetaUId>1</tarjetaUId>
               <numeroTarjeta>5010730101000000089</numeroTarjeta>
               <tipoTarjeta/>
               <sucursal>Casa Matriz</sucursal>
            </sBDProductoTarjeta>
            <sBDProductoTarjeta>
               <tarjetaUId>2</tarjetaUId>
               <numeroTarjeta>5010730101000000132</numeroTarjeta>
               <tipoTarjeta/>
               <sucursal>Casa Matriz</sucursal>
            </sBDProductoTarjeta>
            <sBDProductoTarjeta>
               <tarjetaUId>3</tarjetaUId>
               <numeroTarjeta>5010730101000000098</numeroTarjeta>
               <tipoTarjeta/>
               <sucursal>Casa Matriz</sucursal>
            </sBDProductoTarjeta>
            <sBDProductoTarjeta>
               <tarjetaUId>4</tarjetaUId>
               <numeroTarjeta>5010730101000000105</numeroTarjeta>
               <tipoTarjeta/>
               <sucursal>Casa Matriz</sucursal>
            </sBDProductoTarjeta>
            <sBDProductoTarjeta>
               <tarjetaUId>5</tarjetaUId>
               <numeroTarjeta>5010730101000000141</numeroTarjeta>
               <tipoTarjeta/>
               <sucursal>Casa Matriz</sucursal>
            </sBDProductoTarjeta>
            <sBDProductoTarjeta>
               <tarjetaUId>6</tarjetaUId>
               <numeroTarjeta>5010730101000000123</numeroTarjeta>
               <tipoTarjeta/>
               <sucursal>Casa Matriz</sucursal>
            </sBDProductoTarjeta>
         </sdtProductosTarjeta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>839</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerTarjetasDebito</Servicio>
            <Fecha>2017-12-18</Fecha>
            <Requerimiento/>
            <Hora>02:12:35</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerTarjetasDebitoResponse>
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
    "sdtProductosTarjeta": {
        "sBDProductoTarjeta": [
            {
                "sucursal": "Casa Matriz",
                "numeroTarjeta": "5010730101000000089",
                "tipoTarjeta": "",
                "tarjetaUId": "1"
            },
            {
                "sucursal": "Casa Matriz",
                "numeroTarjeta": "5010730101000000132",
                "tipoTarjeta": "",
                "tarjetaUId": "2"
            },
            {
                "sucursal": "Casa Matriz",
                "numeroTarjeta": "5010730101000000098",
                "tipoTarjeta": "",
                "tarjetaUId": "3"
            },
            {
                "sucursal": "Casa Matriz",
                "numeroTarjeta": "5010730101000000105",
                "tipoTarjeta": "",
                "tarjetaUId": "4"
            },
            {
                "sucursal": "Casa Matriz",
                "numeroTarjeta": "5010730101000000141",
                "tipoTarjeta": "",
                "tarjetaUId": "5"
            },
            {
                "sucursal": "Casa Matriz",
                "numeroTarjeta": "5010730101000000123",
                "tipoTarjeta": "",
                "tarjetaUId": "6"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "840",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerTarjetasDebito",
        "Fecha": "2017-12-18",
        "Requerimiento": "",
        "Hora": "02:16:29",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBDProductoTarjeta', fields: [{ Nombre: 'numeroTarjeta', Tipo: 'String', Comentarios: 'Numero de tarjeta.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Sucursal de la tarjeta.' }, { Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta de débito.' }, { Nombre: 'tipoTarjeta', Tipo: 'String', Comentarios: 'Tipo de tarjeta.' }] }];
}
