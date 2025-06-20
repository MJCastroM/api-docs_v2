import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ActualizarCuentaPreferencial',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarCuentaPreferencialComponent1750446218998 {
  pageTitle        = 'Actualizar Cuenta Preferencial';
  description      = `Método para actualizar la cuenta preferencial de tarjeta de débito.`;
  pubName    = 'BTTarjetasDeDebito.ActualizarCuentaPreferencial';
  programa   = 'RBTPG774';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'tarjetaId', Tipo: 'Long', Comentarios: 'Identificador de tarjeta.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación de cuenta preferencial del cliente.' }];
  outputData = [];
  errors     = [{ Codigo: '30000', Descripcion: 'No se recibió el identificador de la tarjeta.' }, { Codigo: '30001', Descripcion: 'No existe registro con el identificador indicado.' }, { Codigo: '30002', Descripcion: 'No se recuperó la operación para el identificador recibido.' }, { Codigo: '30003', Descripcion: 'La Cuenta Preferencial no pertenece al Cliente.' }, { Codigo: '30004', Descripcion: 'No se recibió ni Id ni Número de Tarjeta.' }, { Codigo: '30005', Descripcion: 'No se encontró una tarjeta con el Id recibido.' }, { Codigo: '30006', Descripcion: 'No se encontró una tarjeta con el Número recibido.' }, { Codigo: '40001', Descripcion: 'La Tarjeta no pertenece al Cliente.' }, { Codigo: '40102', Descripcion: 'Error, se ha indicado un Tipo de Cuenta inhabilitado/erróneo.' }, { Codigo: '40104', Descripcion: 'Tarjeta inexistente TDD003.' }, { Codigo: '40105', Descripcion: 'Error, se ha excedido el máximo de X cuentas permitidas.' }, { Codigo: '40105', Descripcion: 'Error, no se permiten mas de X Cajas de Ahorro.' }, { Codigo: '40105', Descripcion: 'Error, no se permiten mas de X Cuentas Corriente.' }, { Codigo: '40105', Descripcion: 'Error, solo se permite una Cuenta PREFERENCIAL por Moneda.' }, { Codigo: '40105', Descripcion: 'Error, solo se permiten X Cuentas PREFERENCIALES.' }, { Codigo: '40105', Descripcion: 'Error, no se han asociado Cuentas a la Tarjeta.' }, { Codigo: '40105', Descripcion: 'Error, se deberá indicar una Cuenta como PREFERENCIAL, por favor indicarla.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.ActualizarCuentaPreferencial>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BA</bts:Usuario>
            <bts:Token>0211202010280000399672</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
         <bts:tarjetaUId>109</bts:tarjetaId>
         <bts:operacionUId>10</bts:operacionUId>
      </bts:BTTarjetasDeDebito.ActualizarCuentaPreferencial>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ActualizarCuentaPreferencial\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
		"Canal": "BTDIGITAL",
		"Requerimiento": "1",
		"Usuario": "BA",
		"Token": "0211202010280000399672",
		"Device": "MC"
	 },
	 "clienteUId": "1",
	 "tarjetaUId": "109"
	 "operacionUId": "10"
  }` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.ActualizarCuentaPreferencialResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BA</Usuario>
            <Token>0211202010280000399672</Token>
            <Device>MC</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTTarjetasDeDebito.ActualizarCuentaPreferencial</Servicio>
            <Fecha>2020-11-02</Fecha>
            <Hora>12:06:37</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10140</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTTarjetasDeDebito.ActualizarCuentaPreferencialResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{ 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "BA", 
      "Token": "0211202010280000399672", 
      "Device": "MC" 
   }, 
   "Erroresnegocio": null, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTTarjetasDeDebito.ActualizarCuentaPreferencial", 
      "Fecha": "2020-11-02", 
      "Hora": "12:06:37", 
      "Requerimiento": "1", 
      "Numero": "10140", 
      "Estado": "OK" 
   } 
}` }
  };

  structuredTypes = [];
}
