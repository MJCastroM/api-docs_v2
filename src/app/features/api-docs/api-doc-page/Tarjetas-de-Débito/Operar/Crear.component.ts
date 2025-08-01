import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Crear',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearComponent1751987200305 {
  pageTitle        = 'Crear';
  description      = `Método para dar de alta una tarjeta de débito para un cliente.`;
  pubName    = 'BTTarjetasDeDebito.Crear';
  programa   = 'RBTPG066';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'tipoTarjeta', Tipo: 'String', Comentarios: 'Tipo de tarjeta.' }, { Nombre: 'nombreTarjeta', Tipo: 'String', Comentarios: 'Nombre de tarjeta.' }];
  outputData = [{ Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta.' }, { Nombre: 'numeroTarjeta', Tipo: 'String', Comentarios: 'Número de tarjeta.' }, { Nombre: 'fechaExpiracion', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'estadoTarjeta', Tipo: 'String', Comentarios: 'Estado de la tarjeta.' }, { Nombre: 'estadoPlastico', Tipo: 'String', Comentarios: 'Estado del plástico.' }];
  errors     = [{ Código: '30001', Descripción: 'Debe ingresar el identificador de cuenta.' }, { Código: '40001', Descripción: 'Tipo de tarjeta inexistente TDD015.' }, { Código: '40002', Descripción: 'El titular excede la cantidad máxima de tarjetas activas.' }, { Código: '40003', Descripción: 'El titular no existe en FSD001.' }, { Código: '40004', Descripción: 'Cuenta de costo no pertenece al titular.' }, { Código: '40005', Descripción: 'Cuenta de costo no existe en FSD011.' }, { Código: '40006', Descripción: 'Código de domicilio invalido para el titular.' }, { Código: '40007', Descripción: 'Cuenta a asociar a tarjeta no pertenece al titular.' }, { Código: '40010', Descripción: 'Número de tarjeta no es válido.' }, { Código: '40011', Descripción: 'TD nominada, no se debe informar TDD003TAR.' }, { Código: '40020', Descripción: 'Funcionalidad inexistente en TDD025.' }, { Código: '40021', Descripción: 'Funcionalidad inhabilitada en TDD025.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.Crear>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>161</bts:clienteUId>
         <bts:tipoTarjeta>MNO</bts:tipoTarjeta>
         <bts:nombreTarjeta>AV</bts:nombreTarjeta>
      </bts:BTTarjetasDeDebito.Crear>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?Crear=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 9e695134-73f4-1576-72fd-f05ff93d9fba\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "clienteUId": 4,
   "tipoTarjeta": "MNO",
   "nombreTarjeta": "Mi tarjeta"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <Servicio>BTTarjetasDeDebito.Crear</Servicio>
            <Fecha>2017-12-22</Fecha>
            <Requerimiento/>
            <Hora>12:26:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.CrearResponse>
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
      "Numero": "968",
      "Estado": "OK",
      "Servicio": "BTTarjetasDeDebito.Crear",
      "Fecha": "2017-12-22",
      "Requerimiento": "",
      "Hora": "12:34:25",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [];
}
