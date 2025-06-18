import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Cancelar',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CancelarComponent1750258525045 {
  pageTitle        = 'Cancelar';
  description      = `Método para realizar la liquidación de una cuenta vista.`;
  pubName          = 'Cancelar';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cuenta cliente.' }, { Nombre: 'cuentaLiquidacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la cuenta vista a cancelar.' }, { Nombre: 'cuentaAcreditacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la cuenta vista de acreditación/cobro de la liquidación.' }];
  outputData = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único del movimiento realizado.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador del cliente.' }, { Codigo: '30002', Descripcion: 'La cuenta indicada no existe.' }, { Codigo: '30003', Descripcion: 'No se recibió el identificador de la cuenta.' }, { Codigo: '30004', Descripcion: 'La cuenta indicada no existe.' }, { Codigo: '30005', Descripcion: 'La cuenta a liquidar y la cuenta de acreditación no pueden ser la misma.' }, { Codigo: '30007', Descripcion: 'La cuenta indicada no pertenece al cliente.' }, { Codigo: '30006', Descripcion: 'La cuenta de cobro indicada no existe.' }, { Codigo: '30008', Descripcion: 'Las monedas de la cuenta a liquidar y la cuenta de acreditación deben ser la misma.' }, { Codigo: '30009', Descripcion: 'No se pudo obtener el identificador para el movimiento realizado.' }, { Codigo: '30100', Descripcion: 'Error en la contabilización.' }, { Codigo: '40001', Descripcion: 'Operativa fuera de horario' }, { Codigo: '40003', Descripcion: 'Producto cancelado.' }, { Codigo: '40004', Descripcion: 'No se definió transacción a ejecutar.' }, { Codigo: '40006', Descripcion: 'La Operación tiene Bloqueos; no puede ser liquidada.' }, { Codigo: '40007', Descripcion: 'El producto se encuentra sobregirado, no es posible realizar la liquidación.' }, { Codigo: '40008', Descripcion: 'La cuenta tiene Tarjeta de débito asociada; no puede ser liquidada.' }, { Codigo: '40009', Descripcion: 'El producto paga la comisión del paquete, debe modificarse la instrucción.' }, { Codigo: '40010', Descripcion: 'NO SE DEFINIÓ LA CARPETA EN LA QUE SE GUARDARÁ EL ARCHIVO.' }, { Codigo: '40013', Descripcion: 'Usuario no autorizado a consultar esta Cuenta.' }, { Codigo: '40014', Descripcion: 'Usuario no autorizado a consultar esta Cuenta.' }, { Codigo: '40015', Descripcion: 'No es posible realizar la liquidación.' }, { Codigo: '40016', Descripcion: 'El titular de la cuenta no es una persona física.' }, { Codigo: '40017', Descripcion: 'No es posible operar con una cuenta conjunta.' }, { Codigo: '40018', Descripcion: 'La operación no permite operar.' }, { Codigo: '40019', Descripcion: 'La operación de acreditación no permite operar.' }, { Codigo: '40020', Descripcion: 'No se indicó cuenta de cobro/acreditación.' }, { Codigo: '40021', Descripcion: 'La operación a liquidar no puede ser CTS.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.Cancelar>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GP</bts:Device>
            <bts:Token>65386256C895CD01D7DC796E</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:clienteUId>201</bts:clienteUId>
         <bts:cuentaLiquidacionUId>310</bts:cuentaLiquidacionUId>
         <bts:cuentaAcreditacionUId>311</bts:cuentaAcreditacionUId>
      </bts:BTCuentasVista.Cancelar>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \   
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?Cancelar\' \ 
  -H \'cache-control: no-cache\' \ 
  -H \'content-type: application/json\' \ 
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \ 
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"clienteUId": "201",
	"cuentaLiquidacionUId": "310",
	"cuentaAcreditacionUId": "311",
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.CancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>65386256C895CD01D7DC796E</Token>
         </Btinreq>
         <movimientoUId>1032</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>12044</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasVista.Cancelar</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-23</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>15:19:22</Hora>
         </Btoutreq>
      </BTCuentasVista.CancelarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "movimientoUId": 1032,
    "Btoutreq": {
        "Numero": 823,
        "Estado": "OK",
        "Servicio": "BTCuentasVista.Cancelar",
        "Requerimiento": "1",
        "Fecha": "2018-11-12",
        "Hora": "17:47:27",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
