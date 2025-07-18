import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ModificarCuentaDestinodeAcreditacionPeriodica',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ModificarCuentaDestinodeAcreditacionPeriodicaComponent1751987197446 {
  pageTitle        = 'Modificar Cuenta Destino de Acreditación Periódica';
  description      = `Método para modificar la cuenta de destino de la instrucción de acreditación de un depósito con pago periódico de intereses.`;
  pubName    = 'BTDepositosAPlazo.ModificarCuentaDestinoAcreditacion';
  programa   = 'RBTPG108';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'depositoUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación de depósito.' }, { Nombre: 'cuentaUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación de cuenta.' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador del cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador de la operación del depósito.' }, { Código: '30003', Descripción: 'No se recibió el identificador de la operación de la cuenta.' }, { Código: '30004', Descripción: 'No se recuperó la cuenta para el Identificador de cliente: [Número de identificador]' }, { Código: '30005', Descripción: 'No se recuperó la operación del depósito para el identificador: [Número de identificador]' }, { Código: '30006', Descripción: 'La operación asociada al identificador: [Número de identificador] no pertenece a un depósito a plazo.' }, { Código: '30007', Descripción: 'El producto de depósito ingresado no tiene instrucción de acreditación.' }, { Código: '30008', Descripción: 'La cuenta del depósito no pertenece al identificador del cliente: [Número de identificador]' }, { Código: '30009', Descripción: 'No se encontró instrucción de acreditación para el depósito ingresado.' }, { Código: '30010', Descripción: 'El depósito tiene instrucción de renovación automatica, para especificar una cuenta debe modificar la instrucción.' }, { Código: '30011', Descripción: 'No se recuperó la operación de la cuenta para el identificador: [Número de identificador]' }, { Código: '30012', Descripción: 'La operación asociada al identificador: [Número de identificador] no pertenece a un cuenta.' }, { Código: '30013', Descripción: 'La cuenta indicada es igual a la de la instrucción.' }, { Código: '40002', Descripción: 'No existe instrucción para operación.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.ModificarCuentaDestinoAcreditacion>
	    <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6c275823524A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:depositoUId>4</bts:depositoUId>
         <bts:cuentaUId>3</bts:cuentaUId>
      </bts:BTDepositosAPlazo.ModificarCuentaDestinoAcreditacion>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ModificarCuentaDestinoAcreditacion=\' \
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
   "clienteUId": 61,
	"depositoUId": 4,
	"cuentaUId": 3
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ModificarCuentaDestinoAcreditacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6c275823524A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>145</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ModificarCuentaDestinoAcreditacion</Servicio>
            <Fecha>2018-03-01</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:04:07</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ModificarCuentaDestinoAcreditacionResponse>
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
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "145",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ModificarCuentaDestinoAcreditacion",
        "Fecha": "2018-03-01",
        "Requerimiento": "1",
        "Hora": "12:04:07",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
