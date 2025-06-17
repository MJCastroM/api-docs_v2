import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-VerificarEmpleado',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class VerificarEmpleadoComponent {
  pageTitle = 'Verificar Empleado';
  description = `Metodo para obtener si el cliente ingresado es o no empleado de la institucion.`;
  pubName    = 'BTClientes.VerificarEmpleado';
  programa   = 'RBTPG194';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }];
  outputData = [{ Nombre: 'esEmpleado', Tipo: 'String', Comentarios: '¿Es empleado de la institucion? (S/N)' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30014', Descripcion: 'No existe registro con el identificador indicado.' }, { Codigo: '30021', Descripcion: 'La cuenta no existe.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.VerificarEmpleado>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BA</bts:Usuario>
            <bts:Token>0211202010280000399672</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
      </bts:BTClientes.VerificarEmpleado>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?VerificarEmpleado' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	 "Btinreq": {
		"Canal": "BTDIGITAL",
		"Requerimiento": "1",
		"Usuario": "BA",
		"Token": "0211202010280000399672",
		"Device": "MC"
	 },
	 "clienteUId": "1"
  }` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.VerificarEmpleadoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BA</Usuario>
            <Token>0211202010280000399672</Token>
            <Device>MC</Device>
         </Btinreq>
         <esEmpleado>N</esEmpleado>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTClientes.VerificarEmpleado</Servicio>
            <Fecha>2020-11-02</Fecha>
            <Hora>12:06:37</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10140</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTClientes.VerificarEmpleadoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
   "Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "1",
      "Usuario": "BA",
      "Token": "0211202010280000399672",
      "Device": "MC"
   },
   "esEmpleado": "N",
   "Erroresnegocio": null,
   "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTClientes.VerificarEmpleado",
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
