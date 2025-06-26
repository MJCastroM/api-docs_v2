import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ModificarInstruccion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ModificarInstruccionComponent1750945333114 {
  pageTitle        = 'Modificar Instrucción';
  description      = `Método para modificar la instrucción al vencimiento de un depósito a plazo.`;
  pubName    = 'BTDepositosAPlazo.ModificarInstruccion';
  programa   = 'RBTPG106';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Se debe parametrizar en la guía de procesos 70101 de la siguiente manera: 

Campo | Valor 
:--------- | :----------- 
Correlativo | Valor incremental. 
Valor específico | Código de instrucción habilitada. 
Importe específico | 3. 
:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'depositoUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación del depósito.' }, { Nombre: 'cuentaUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación de la cuenta.' }, { Nombre: 'accion', Tipo: 'Short', Comentarios: 'Especifica la nueva acción que tomará el depósito al vencimiento.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de la operación del depósito.' }, { Codigo: '30003', Descripcion: 'No se recibió la instrucción al vencimiento.' }, { Codigo: '30004', Descripcion: 'No se recuperó la cuenta para el identificador de cliente: [Número de identificador].' }, { Codigo: '30005', Descripcion: 'No se recuperó la operación del depósito para el identificador: [Número de identificador].' }, { Codigo: '30006', Descripcion: 'La operación asociada al identificador: [Número de identificador] no pertenece a un depósito a plazo.' }, { Codigo: '30007', Descripcion: 'La cuenta del depósito no pertenece al identificador del cliente: [Número de identificador].' }, { Codigo: '30011', Descripcion: 'No se recibió el identificador de la operación de la cuenta.' }, { Codigo: '30012', Descripcion: 'No se recuperó la operación de la cuenta para el identificador: [Número de identificador].' }, { Codigo: '30013', Descripcion: 'La operación asociada al identificador: [Número de identificador] no pertenece a un producto cuenta.' }, { Codigo: '40001', Descripcion: 'Se debe indicar el código de instrucción al vencimiento aplicar.' }, { Codigo: '40002', Descripcion: 'El código de instrucción al vencimiento ingresado es incorrecto.' }, { Codigo: '40003', Descripcion: 'No se encontró instrucción al vencimiento para el depósito ingresado.' }, { Codigo: '40004', Descripcion: 'La instrucción al vencimiento a aplicar es igual a la que tiene el depósito.' }, { Codigo: '40005', Descripcion: 'La operación donde se abonarían los intereses no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.ModificarInstruccion>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6c275823524A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
         <bts:depositoUId>1</bts:depositoUId>
         <bts:cuentaUId>2</bts:cuentaUId>
         <bts:accion>2</bts:accion>
      </bts:BTDepositosAPlazo.ModificarInstruccion>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ModificarInstruccion=\' \
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
	"depositoUId": 1,
	"cuentaUId": 2,
	"accion": "2"	 
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ModificarInstruccionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>6c275823524A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>142</Numero>
            <Estado>OK</Estado>
            <Servicio>BTDepositosAPlazo.ModificarInstruccion</Servicio>
            <Fecha>2018-03-01</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>10:43:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ModificarInstruccionResponse>
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
        "Numero": "142",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ModificarInstruccion",
        "Fecha": "2018-03-01",
        "Requerimiento": "1",
        "Hora": "10:43:01",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
