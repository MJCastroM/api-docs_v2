import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ContratarSimulacin',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarSimulacionComponent {
  // Cabecera e info-card
  pageTitle = 'Contratar Simulacion';
  description = `Metodo para contratar un deposito a plazo fijo a partir de una simulacion existente.`;
  pubName    = 'BTDepositoAPlazo.ContratarSimulacion';
  programa   = 'RBTPG457';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId', 'simulacionId', 'instruccionVTO', 'cuentaUIdDestinoVTO', 'InstruccionPP', 'cuentaUIdDestinoPP', 'cuentaUIdDebito', 'sdtDatosExtendidos'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'simulacionId', Tipo: 'Long', Comentarios: 'Identificador unico de la simulacion.' }, { Nombre: 'instruccionVTO', Tipo: 'Short', Comentarios: 'Identificador de la instruccion al vencimiento' }, { Nombre: 'cuentaUIdDestinoVTO', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion de la cuenta destino al vencimiento.' }, { Nombre: 'InstruccionPP', Tipo: 'Long', Comentarios: 'Identificador de la instruccion de pago periodico.' }, { Nombre: 'cuentaUIdDestinoPP', Tipo: 'Short', Comentarios: 'Identificador unico de la operacion de la cuenta destino del pago periodico.' }, { Nombre: 'cuentaUIdDebito', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion de la cuenta de debito.' }, { Nombre: 'sdtDatosExtendidos', Tipo: '[sBTDatoExtendido](#sbtdatoextendido)', Comentarios: 'Listado de datos complementarios. Se pueden enviar los siguientes [valores.](#valores)' }];
  outputCols = ['sdtDatosExtendidos', 'operacionUId', 'movimientoUId'];
  outputData = [{ Nombre: 'sdtDatosExtendidos', Tipo: '[sBTDatoExtendido](#sbtdatoextendido)', Comentarios: 'Listado de datos complementarios.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de la operacion.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador unico de movimiento.' }];
  errorCols  = ['30001', '30002', '30003', '30005', '30007', '30010', '30011', '30012', '30013', '30015', '30016', '30017', '30020', '30021', '30100'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de la simulacion.' }, { Codigo: '30003', Descripcion: 'No se recibio la instruccion de acreditacion al vencimiento.' }, { Codigo: '30005', Descripcion: 'No se recibio la instruccion de acreditacion periodica.' }, { Codigo: '30007', Descripcion: 'No se recibio el identificador de cuenta de debito.' }, { Codigo: '30010', Descripcion: 'No se recuperaron datos para el identificador de cliente: [Numero de identificador].' }, { Codigo: '30011', Descripcion: 'No se recuperaron datos para el identificador de cuenta de acreditacion al vencimiento: [Numero de identificador].' }, { Codigo: '30012', Descripcion: 'No se recuperaron datos para el identificador de cuenta de acreditacion periodica: [Numero de identificador].' }, { Codigo: '30013', Descripcion: 'No se recuperaron datos para el identificador de cuenta de debito: [Numero de identificador].' }, { Codigo: '30015', Descripcion: 'La simulacion no esta disponible para su contratacion.' }, { Codigo: '30016', Descripcion: 'La simulacion no se encuentra vigente para su contratacion.' }, { Codigo: '30017', Descripcion: 'La simulacion no corresponde al cliente.' }, { Codigo: '30020', Descripcion: 'Ocurrio un error al generar el Identificador de movimiento.' }, { Codigo: '30021', Descripcion: 'Ocurrio un error al generar el Identificador de operacion de deposito.' }, { Codigo: '30100', Descripcion: 'Error en la contabilizacion.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.ContratarSimulacion>
        <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>30F74741A02C318CEFD55684</bts:Token>
            <bts:Device>GL</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10009</bts:clienteUId>
         <bts:simulacionId>93</bts:simulacionId>
         <bts:InstruccionVTO>6</bts:InstruccionVTO>
         <bts:cuentaUIdDestinoVTO></bts:cuentaUIdDestinoVTO>
         <bts:InstruccionPP>7</bts:InstruccionPP>
         <bts:cuentaUIdDestinoPP>10120</bts:cuentaUIdDestinoPP>
         <bts:cuentaUIdDebito>10120</bts:cuentaUIdDebito>
         <bts:sBTDatosExtendidos/>
      </bts:BTDepositosAPlazo.ContratarSimulacion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
          "Canal": "BTDIGITAL",
          "Requerimiento": 1,
          "Usuario": "INSTALADOR",
          "Token": "30F74741A02C318CEFD55684",
          "Device": "GL"
        },
        "clienteUId": 10009,
        "simulacionId": 93,
        "InstruccionVTO": 6,
        "cuentaUIdDestinoVTO": "",
        "InstruccionPP": 7,
        "cuentaUIdDestinoPP": 10120,
        "cuentaUIdDebito": 10120,
        "sBTDatosExtendidos": ""
      }'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ContratarSimulacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>30F74741A02C318CEFD55684</Token>
            <Device>GL</Device>
         </Btinreq>
         <sBTDatosExtendidos></sBTDatosExtendidos>
         <operacionUId>15</operacionUId>
         <movimientoUId>15</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTDepositosAPlazo.ContratarSimulacion</Servicio>
            <Fecha>2022-11-29</Fecha>
            <Hora>11:35:46</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>507</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTDepositosAPlazo.ContratarSimulacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
          "Canal": "BTDIGITAL",
          "Requerimiento": 1,
          "Usuario": "INSTALADOR",
          "Token": "30F74741A02C318CEFD55684",
          "Device": "GL"
        },
        "sBTDatosExtendidos": "",
        "operacionUId": 15,
        "movimientoUId": 15,
        "Erroresnegocio": "",
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTDepositosAPlazo.ContratarSimulacion",
          "Fecha": "2022-11-29",
          "Hora": "11:35:46",
          "Requerimiento": 1,
          "Numero": 507,
          "Estado": "OK"
        }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Clave del dato extendido.' }, { Nombre: 'lista', Tipo: '[sBTDatoLista](#sbtdatolista)', Comentarios: 'Lista de datos.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de dato extendido.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de dato extendido.' }, { Nombre: '### sBTDatoLista', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTDatoLista son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de informacion adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de informacion adicional.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
