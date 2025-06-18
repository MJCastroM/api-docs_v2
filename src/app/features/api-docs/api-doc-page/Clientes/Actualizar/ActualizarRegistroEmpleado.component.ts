import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ActualizarRegistroEmpleado',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarRegistroEmpleadoComponent1750268694579 {
  pageTitle        = 'Actualizar Registro Empleado';
  description      = `Método para actualizar si un cliente es empleado de la institución, junto con su fecha de ingreso si es requerido.`;
  pubName    = 'BTClientes.ActualizarRegistroEmpleado';
  programa   = 'RBTPG538';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'empleado', Tipo: 'String', Comentarios: '¿Es empleado de la institución? (S/N).' }, { Nombre: 'fechaAlta', Tipo: 'Date', Comentarios: 'Fecha de ingreso.' }, { Nombre: 'fechaBaja', Tipo: 'Date', Comentarios: 'Fecha de baja.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió si el cliente es un empleado de la institución o no.' }, { Codigo: '30005', Descripcion: 'El valor de empleado no es correcto.' }, { Codigo: '30013', Descripcion: 'No existe registro con la cuenta indicada.' }, { Codigo: '40001', Descripcion: 'La cuenta no existe.' }, { Codigo: '40002', Descripcion: 'La integración de la cuenta ingresada no es válida.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ActualizarRegistroEmpleado>
          <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9436BF7CB5B5BB404CC6E5A7</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>227</bts:clienteUId>
         <bts:empleado>S</bts:empleado>
         <bts:fechaAlta>2024-01-01</bts:fechaAlta>
         <bts:fechaBaja></bts:fechaBaja>
      </bts:BTClientes.ActualizarRegistroEmpleado>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ActualizarRegistroEmpleado\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "clienteUId": 227,
    "empleado": "S",
    "fechaAlta": "2024-01-01",
    "fechaBaja": ""
    }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ActualizarRegistroEmpleadoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9436BF7CB5B5BB404CC6E5A7</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20208</Numero>
            <Servicio>BTClientes.ActualizarRegistroEmpleado</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>0</Requerimiento>
            <Fecha>2024-05-02</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>17:33:37</Hora>
         </Btoutreq>
      </BTClientes.ActualizarRegistroEmpleadoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "Erroresnegocio": "",
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTClientes.ActualizarRegistroEmpleado",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
