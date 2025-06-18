import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ContratarSimulacion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarSimulacionComponent1750258525073 {
  pageTitle        = 'Contratar Simulación';
  description      = `Método para contratar un depósito a plazo fijo a partir de una simulación existente.`;
  pubName          = 'Contratar Simulación';
  programa         = '';
  scope            = '';

  hasBackendConfig = true;
  backendText      = `Para configurar los productos válidos, se debe agregar un registro en la guía especial 70101 para cada producto de la siguiente manera: 

Campo | Valor 
:--------- | :-----------  
Correlativo 1 | Módulo. 
Correlativo 2 | Tipo de operación (El valor 999 indica todos los tipos de operación). 
Correlativo 3 | Valor incremental. 
Valor específico 1 | Moneda (El valor 9999 indica todas las monedas). 
Valor específico 2 | Papel (El valor 999999 indica todos los papeles). 
Valor específico 3 | Código de instrucción a habilitar. 
Importe específico 1 | Tipo de depósito (1- Depósito al vencimiento, 2- Pago periódico de intereses). 

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'simulacionId', Tipo: 'Long', Comentarios: 'Identificador único de la simulación.' }, { Nombre: 'instruccionVTO', Tipo: 'Short', Comentarios: 'Identificador de la instrucción al vencimiento' }, { Nombre: 'cuentaUIdDestinoVTO', Tipo: 'Long', Comentarios: 'Identificador único de la operación de la cuenta destino al vencimiento.' }, { Nombre: 'InstruccionPP', Tipo: 'Long', Comentarios: 'Identificador de la instrucción de pago periódico.' }, { Nombre: 'cuentaUIdDestinoPP', Tipo: 'Short', Comentarios: 'Identificador único de la operación de la cuenta destino del pago periódico.' }, { Nombre: 'cuentaUIdDebito', Tipo: 'Long', Comentarios: 'Identificador único de la operación de la cuenta de débito.' }, { Nombre: 'sdtDatosExtendidos', Tipo: '[sBTDatoExtendido](#sbtdatoextendido)', Comentarios: 'Listado de datos complementarios. Se pueden enviar los siguientes [valores.](#valores)' }];
  outputData = [{ Nombre: 'sdtDatosExtendidos', Tipo: '[sBTDatoExtendido](#sbtdatoextendido)', Comentarios: 'Listado de datos complementarios.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador de la simulación.' }, { Codigo: '30003', Descripcion: 'No se recibió la instrucción de acreditación al vencimiento.' }, { Codigo: '30005', Descripcion: 'No se recibió la instrucción de acreditación periódica.' }, { Codigo: '30007', Descripcion: 'No se recibió el identificador de cuenta de débito.' }, { Codigo: '30010', Descripcion: 'No se recuperaron datos para el identificador de cliente: [Número de identificador].' }, { Codigo: '30011', Descripcion: 'No se recuperaron datos para el identificador de cuenta de acreditación al vencimiento: [Número de identificador].' }, { Codigo: '30012', Descripcion: 'No se recuperaron datos para el identificador de cuenta de acreditación periódica: [Número de identificador].' }, { Codigo: '30013', Descripcion: 'No se recuperaron datos para el identificador de cuenta de débito: [Número de identificador].' }, { Codigo: '30015', Descripcion: 'La simulación no está disponible para su contratación.' }, { Codigo: '30016', Descripcion: 'La simulación no se encuentra vigente para su contratación.' }, { Codigo: '30017', Descripcion: 'La simulación no corresponde al cliente.' }, { Codigo: '30020', Descripcion: 'Ocurrió un error al generar el Identificador de movimiento.' }, { Codigo: '30021', Descripcion: 'Ocurrió un error al generar el Identificador de operación de depósito.' }, { Codigo: '30100', Descripcion: 'Error en la contabilización.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
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
      }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
</SOAP-ENV:Envelope>`,  json: `\'{
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
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatoExtendido', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Clave del dato extendido.' }, { Nombre: 'lista', Tipo: '[sBTDatoLista](#sbtdatolista)', Comentarios: 'Lista de datos.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de dato extendido.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de dato extendido.' }, { Nombre: '### sBTDatoLista', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTDatoLista', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de información adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de información adicional.' }] }];
}
