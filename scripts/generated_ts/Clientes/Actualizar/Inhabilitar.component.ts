import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-Inhabilitar',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class InhabilitarComponent {
  // Cabecera e info-card
  pageTitle = 'Inhabilitar';
  description = `Metodo para inhabilitar una cuenta cliente que se encuentra habilitada.`;
  pubName    = 'BTClientes.Inhabilitar';
  programa   = 'RBTPG498';
  scope      = 'Institucional';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId', 'motivo', 'justificacion'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }, { Nombre: 'motivo', Tipo: 'Short', Comentarios: 'Codigo de motivo de inhabilitacion.' }, { Nombre: 'justificacion', Tipo: 'String', Comentarios: 'Justificacion de la inhabilitacion' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '30002', '30003', '40001', '40002', '40003', '40004', '40005', '40006'];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar identificador de cliente.' }, { Codigo: '30002', Descripcion: 'Debe ingresar motivo de inhabilitacion.' }, { Codigo: '30003', Descripcion: 'Debe ingresar justificacion.' }, { Codigo: '40001', Descripcion: 'No se puede inhabilitar la cuenta porque esta cerrada.' }, { Codigo: '40002', Descripcion: 'La cuenta ya se encuentra inhabilitada.' }, { Codigo: '40003', Descripcion: 'La cuenta ingresada no existe.' }, { Codigo: '40004', Descripcion: 'No se puede cambiar estado porque la cuenta tiene saldos.' }, { Codigo: '40005', Descripcion: 'El motivo ya se encuentra ingresado.' }, { Codigo: '40006', Descripcion: 'El motivo ingresado no existe.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.Inhabilitar>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>47D750A861C4243EDE981344</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10009</bts:clienteUId>
         <bts:motivo>3</bts:motivo>
         <bts:justificacion>Prueba</bts:justificacion>
      </bts:BTClientes.Inhabilitar>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?Inhabilitar \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
    "Btinreq": {
      "Canal": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Device": "GP",
      "Requerimiento": "1",
      "Token": "200f0b8b654A8B5C60A82434"
    },
   "clienteUId": 10009,
   "motivo": 3,
   "justificacion": "Prueba"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.InhabilitarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>47D750A861C4243EDE981344</Token>
            <Device>GP</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTClientes.Inhabilitar</Servicio>
            <Fecha>2022-11-17</Fecha>
            <Hora>11:46:15</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>463</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTClientes.InhabilitarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
    "Btinreq": {
	  "Device": "GP",
	  "Usuario": "INSTALADOR",
	  "Requerimiento": "1",
	  "Canal": "BTDIGITAL",
	  "Token": "47D750A861C4243EDE981344"
	},
	"Erroresnegocio": {
        "BTErrorNegocio": []
	},
	"Btoutreq": {
	  "Numero": "109140",
	  "Estado": "OK",
	  "Servicio": "BTClientes.Inhabilitar",
	  "Requerimiento": "1",
	  "Fecha": "2022-11-17",
	  "Canal": "BTDIGITAL",
	  "Hora": "11:46:15"
	}
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
