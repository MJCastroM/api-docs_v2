import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-EliminarPerfil',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class EliminarPerfilComponent1750945335784 {
  pageTitle        = 'Eliminar Perfil';
  description      = `Método para eliminar un perfil asociado a un usuario.`;
  pubName    = 'BTUsuarios.EliminarPerfil';
  programa   = 'RBTPG123';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'usuario', Tipo: 'String', Comentarios: 'Identificador de usuario.' }, { Nombre: 'perfil', Tipo: 'String', Comentarios: 'Identificador de perfil.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar Usuario.' }, { Codigo: '30002', Descripcion: 'No existe Usuario.' }, { Codigo: '30003', Descripcion: 'Debe ingresar Perfil.' }, { Codigo: '30004', Descripcion: 'No existe Perfil.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTUsuarios.EliminarPerfil>
		<bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:usuario>INSTALADOR</bts:usuario>
         <bts:perfil>COMEX</bts:perfil>
      </bts:BTUsuarios.EliminarPerfil>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSeguridad?EliminarPerfil\' \
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
   "usuario": "INSTALADOR",
   "perfil": "COMEX"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTUsuarios.EliminarPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d2dc7b1654A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>81</Numero>
            <Estado>OK</Estado>
            <Servicio>BTUsuarios.EliminarPerfil</Servicio>
            <Fecha>2018-05-04</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>15:55:50</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTUsuarios.EliminarPerfilResponse>
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
        "Numero": "82",
        "Estado": "OK",
        "Servicio": "BTUsuarios.EliminarPerfil",
        "Fecha": "2018-05-04",
        "Requerimiento": "1",
        "Hora": "15:57:30",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
