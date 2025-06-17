import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ModificarCuentaDestinoalVencimiento',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ModificarCuentaDestinoalVencimientoComponent {
  pageTitle = 'Modificar Cuenta Destino al Vencimiento';
  description = `Metodo para modificar la cuenta de destino de la instruccion al vencimiento de un deposito.`;
  pubName    = 'BTDepositosAPlazo.ModificarCuentaDestinoVencimiento';
  programa   = 'RBTPG107';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'depositoUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion del deposito.' }, { Nombre: 'cuentaUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion de cuenta.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de la operacion del deposito.' }, { Codigo: '30003', Descripcion: 'No se recibio el identificador de la operacion de la cuenta.' }, { Codigo: '30004', Descripcion: 'No se recupero la cuenta para el Identificador de cliente: [Numero de identificador].' }, { Codigo: '30005', Descripcion: 'No se recupero la operacion del Deposito para el identificador: [Numero de identificador].' }, { Codigo: '30006', Descripcion: 'La operacion asociada al identificador: [Numero de identificador] no pertenece a un deposito a plazo.' }, { Codigo: '30007', Descripcion: 'La cuenta del deposito no pertenece al identificador del cliente: [Numero de identificador].' }, { Codigo: '30008', Descripcion: 'No se encontro instruccion al vencimiento para el deposito ingresado.' }, { Codigo: '30009', Descripcion: 'El deposito tiene instruccion de renovacion automatica, para especificar una Cuenta debe modificar la instruccion.' }, { Codigo: '30010', Descripcion: 'No se recupero la operacion de la cuenta para el identificador: [Numero de identificador]' }, { Codigo: '30011', Descripcion: 'La operacion asociada al identificador: [Numero de identificador] no pertenece a un producto cuenta.' }, { Codigo: '30012', Descripcion: 'La cuenta indicada es igual a la de la instruccion.' }, { Codigo: '40002', Descripcion: 'No existe instruccion para operacion.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.ModificarCuentaDestinoVencimiento>
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
      </bts:BTDepositosAPlazo.ModificarCuentaDestinoVencimiento>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ModificarCuentaDestinoVencimiento=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
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
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ModificarCuentaDestinoVencimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6c275823524A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>146</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ModificarCuentaDestinoVencimiento</Servicio>
            <Fecha>2018-03-01</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:15:08</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ModificarCuentaDestinoVencimientoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
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
        "Numero": "146",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ModificarCuentaDestinoAcreditacion",
        "Fecha": "2018-03-01",
        "Requerimiento": "1",
        "Hora": "12:15:08",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [];
}
