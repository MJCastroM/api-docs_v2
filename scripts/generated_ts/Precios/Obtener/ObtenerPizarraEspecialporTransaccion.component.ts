import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPizarraEspecialporTransaccion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPizarraEspecialporTransaccionComponent1750258525432 {
  pageTitle        = 'Obtener Pizarra Especial por Transacción';
  description      = `Método para obtener la pizarra especial para una transacción.`;
  pubName          = 'Obtener Pizarra Especial por Transacción';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'modulo', Tipo: 'Int', Comentarios: 'Código de módulo Bantotal.' }, { Nombre: 'transaccion', Tipo: 'Int', Comentarios: 'Código de transacción Bantotal.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }];
  outputData = [{ Nombre: 'arbitrajeCompra', Tipo: 'Double', Comentarios: 'Valor del arbitraje (Compra).' }, { Nombre: 'arbitrajeVenta', Tipo: 'Double', Comentarios: 'Valor del arbitraje (Venta).' }, { Nombre: 'tipoCambioCompra', Tipo: 'Double', Comentarios: 'Valor del tipo de cambio (Compra).' }, { Nombre: 'tipoCambioVenta', Tipo: 'Double', Comentarios: 'Valor del tipo de cambio (Venta).' }];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar transacción Bantotal.' }, { Codigo: '30002', Descripcion: 'Debe ingresar módulo Bantotal.' }, { Codigo: '30003', Descripcion: 'La moneda ingresada no existe.' }, { Codigo: '30004', Descripcion: 'El módulo ingresado no existe.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrecios.ObtenerPizarraEspecialPorTransaccion>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>361</bts:clienteUId>
         <bts:modulo>50</bts:modulo>
         <bts:transaccion>100</bts:transaccion>
         <bts:monedaId>2222</bts:monedaId>
      </bts:BTPrecios.ObtenerPizarraEspecialPorTransaccion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios?ObtenerPizarraEspecialPorTransaccion=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId":"361",
    "modulo":"50",
    "transaccion":"100",
    "monedaId":"2222"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrecios.ObtenerPizarraEspecialPorTransaccionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <arbitrajeCompra>1.00</arbitrajeCompra>
         <arbitrajeVenta>1.00</arbitrajeVenta>
         <tipoCambioCompra>19.10</tipoCambioCompra>
         <tipoCambioVenta>19.75</tipoCambioVenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>898</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrecios.ObtenerPizarraEspecialPorTransaccion</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>11:44:49</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrecios.ObtenerPizarraEspecialPorTransaccionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"arbitrajeCompra":"1.00",
	"arbitrajeVenta":"1.00",
	"tipoCambioCompra":"19.10",
	"tipoCambioVenta":"19.75",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "901",
        "Estado": "OK",
        "Servicio": "BTPrecios.ObtenerPizarraEspecialPorTransaccion",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "12:27:52",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
