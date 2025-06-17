import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-AgregarPerfil',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarPerfilComponent {
  pageTitle = 'Agregar Perfil';
  description = `Metodo para agregar un perfil a un usuario.`;
  pubName    = 'BTUsuarios.AgregarPerfil';
  programa   = 'RBTPG122';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'usuario', Tipo: 'String', Comentarios: 'Identificador del usuario.' }, { Nombre: 'sdtPerfil', Tipo: '[sBTPerfilBT](#sbtperfilbt)', Comentarios: 'Datos del perfil.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar Usuario.' }, { Codigo: '30002', Descripcion: 'No existe Usuario.' }, { Codigo: '30003', Descripcion: 'Debe ingresar Perfil.' }, { Codigo: '30004', Descripcion: 'No existe Perfil.' }, { Codigo: '30005', Descripcion: 'Debe ingresar Fecha de Alta.' }, { Codigo: '30006', Descripcion: 'Fecha de Alta debe ser posterior a Fecha de Apertura.' }, { Codigo: '30007', Descripcion: 'Debe ingresar Fecha de Vencimiento.' }, { Codigo: '30008', Descripcion: 'Fecha de Vencimiento debe ser posterior a Fecha de Apertura.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTUsuarios.AgregarPerfil>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:usuario>INSTALADOR</bts:usuario>
         <bts:sdtPerfil>
            <bts:Perfil>COMEX</bts:perfil>
            <bts:FechaAlta>2018-12-01</bts:fechaAlta>
            <bts:FechaVencimiento>2020-01-01</bts:fechaVencimiento>
         </bts:sdtPerfil>
      </bts:BTUsuarios.AgregarPerfil>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?AgregarPerfil' \
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
   "Usuario": "INSTALADOR",
   "sdtPerfil": {
      "Perfil": "COMEX",
      "FechaAlta": "2018-12-01",
      "FechaVencimiento": "2020-01-01"
   }
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTUsuarios.AgregarPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d2dc7b1654A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>76</Numero>
            <Estado>OK</Estado>
            <Servicio>BTUsuarios.AgregarPerfil</Servicio>
            <Fecha>2018-05-04</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>15:44:24</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTUsuarios.AgregarPerfilResponse>
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
        "Numero": "80",
        "Estado": "OK",
        "Servicio": "BTUsuarios.AgregarPerfil",
        "Fecha": "2018-05-04",
        "Requerimiento": "1",
        "Hora": "15:54:29",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [];
}
