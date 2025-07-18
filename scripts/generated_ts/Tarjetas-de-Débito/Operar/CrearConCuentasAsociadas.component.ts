import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CrearConCuentasAsociadas',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearConCuentasAsociadasComponent1751987200317 {
  pageTitle        = 'Crear Con Cuentas Asociadas';
  description      = `Método para dar de alta una tarjeta con cuentas asociadas.`;
  pubName    = 'BTTarjetasDeDebito.CrearConCuentasAsociadas';
  programa   = 'RBTPG556';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'tipoTarjeta', Tipo: 'String', Comentarios: 'Tipo de tarjeta.' }, { Nombre: 'nombreTarjeta', Tipo: 'String', Comentarios: 'Nombre de tarjeta.' }, { Nombre: 'sdtIdOperaciones', Tipo: '[sBTIdOperacion](#sbtidoperacion)', Comentarios: 'Listado de identificadores únicos de operaciones de las cuentas a asociar.' }];
  outputData = [{ Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta.' }, { Nombre: 'numeroTarjeta', Tipo: 'String', Comentarios: 'Número de tarjeta.' }, { Nombre: 'fechaExpiracion', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'estadoTarjeta', Tipo: 'String', Comentarios: 'Estado de la tarjeta.' }, { Nombre: 'estadoPlastico', Tipo: 'String', Comentarios: 'Estado del plástico.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30002', Descripción: 'No se recuperó la cuenta para el identificador de cliente: [Número de Identificador].' }, { Código: '30003', Descripción: 'No se recibieron los Identificadores de las operaciones a asociar.' }, { Código: '30005', Descripción: 'La cuenta a asociar de la operacionUId [Número de Identificador] es incorrecta.' }, { Código: '30011', Descripción: 'No se recuperó la operación para el identificador de operación: [Número de Identificador].' }, { Código: '40001', Descripción: 'Tipo de tarjeta inexistente TDD015.' }, { Código: '40002', Descripción: 'El titular excede la cantidad máxima de tarjetas activas.' }, { Código: '40003', Descripción: 'El titular no existe en FSD001.' }, { Código: '40004', Descripción: 'Cuenta de costo no pertenece al titular.' }, { Código: '40005', Descripción: 'Cuenta de costo no existe en FSD011.' }, { Código: '40006', Descripción: 'Código de domicilio inválido para el titular.' }, { Código: '40007', Descripción: 'Cuenta a asociar a tarjeta no pertenece al titular.' }, { Código: '40010', Descripción: 'Número de tarjeta no es válido.' }, { Código: '40011', Descripción: 'TD nominada, no se debe informar TDD003TAR.' }, { Código: '40020', Descripción: 'Funcionalidad inexistente en TDD025.' }, { Código: '40021', Descripción: 'Funcionalidad inhabilitada en TDD025.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.CrearConCuentasAsociadas>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>CC6345192D8633F531F01D1D</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>165</bts:clienteUId>
         <bts:tipoTarjeta>MNO</bts:tipoTarjeta>
         <bts:nombreTarjeta>Test</bts:nombreTarjeta>
         <bts:sdtIdOperaciones>
            <bts:sBTIdOperacion>
               <bts:idOperacion>2411</bts:idOperacion>
            </bts:sBTIdOperacion>
            <bts:sBTIdOperacion>
               <bts:idOperacion>3251</bts:idOperacion>
            </bts:sBTIdOperacion>
         </bts:sdtIdOperaciones>
      </bts:BTTarjetasDeDebito.CrearConCuentasAsociadas>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?CrearConCuentasAsociadas\' \
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
    "clienteUId": 165,
    "tipoTarjeta": "MNO",
    "nombreTarjeta": "Test",
    "sdtIdOperaciones": {
        "sBTIdOperacion": [
        {
            "idOperacion": 2411
        },
        {
            "idOperacion": 3251
        }
        ]
    }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.CrearConCuentasAsociadasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>be9fc8708b4A8B5C60A82434</Token>
         </Btinreq>
         <tarjetaUId>2000002072</tarjetaUId>
         <numeroTarjeta>5010730101000001203</numeroTarjeta>
         <fechaExpiracion>2028-10-31</fechaExpiracion>
         <estadoTarjeta>INACTIVA</estadoTarjeta>
         <estadoPlastico>A EMITIR</estadoPlastico>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>967</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTarjetasDeDebito.CrearConCuentasAsociadas</Servicio>
            <Fecha>2017-12-22</Fecha>
            <Requerimiento/>
            <Hora>12:26:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.CrearConCuentasAsociadasResponse>
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
    "tarjetaUId": "2000002073",
    "numeroTarjeta": "5010730101000001211",
    "fechaExpiracion": "2028-10-31",
    "estadoTarjeta": "INACTIVA",
    "estadoPlastico": "A EMITIR       ",
    "Erroresnegocio": {
      "BTErrorNegocio": []
    },
   "Btoutreq": {
      "Numero": "987",
      "Estado": "NEG_ERROR",
      "Servicio": "BTTarjetasDeDebito.CrearConCuentasAsociadas",
      "Requerimiento": "",
      "Fecha": "2017-12-22",
      "Hora": "16:15:27",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTIdOperacion', fields: [{ Nombre: 'idOperacion', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }] }];
}
