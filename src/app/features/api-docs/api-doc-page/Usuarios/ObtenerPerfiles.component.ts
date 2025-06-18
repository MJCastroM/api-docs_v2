import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerPerfiles',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPerfilesComponent1750268698967 {
  pageTitle        = 'Obtener Perfiles';
  description      = `Método para obtener los perfiles que tiene asignado un usuario.`;
  pubName    = 'BTUsuarios.ObtenerPerfiles';
  programa   = 'RBTPG407';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'usuario', Tipo: 'String', Comentarios: 'Usuario a consultar.' }];
  outputData = [{ Nombre: 'sdtPerfiles', Tipo: '[sBTPerfilBT](#sbtperfilbt)', Comentarios: 'Perfiles del usuario.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió Usuario.' }, { Codigo: '40001', Descripcion: 'No existe el usuario ingresado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTUsuarios.ObtenerPerfiles>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>2062732190F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:usuario>INSTALADOR</bts:usuario>
      </bts:BTUsuarios.ObtenerPerfiles>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?ObtenerPerfiles=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 20394f02-93fd-01a3-c079-81b84239bc48\' \
  -d \'{
	"Btinreq": {
		"Device": "AC",
		"Usuario": "BANTOTAL",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "2062732190F955E77534D3E0"
	},
	"usuario": "INSTALADOR"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTUsuarios.ObtenerPerfilesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>2062732190F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPerfiles>
            <sBTPerfilBT>
               <Perfil>COMERCIAL</perfil>
               <FechaAlta>2001-01-01</fechaAlta>
               <FechaVencimiento>2021-01-01</fechaVencimiento>
            </sBTPerfilBT>
            <sBTPerfilBT>
               <Perfil>INSTALADOR</perfil>
               <FechaAlta>2001-01-01</fechaAlta>
               <FechaVencimiento>2021-01-01</fechaVencimiento>
            </sBTPerfilBT>
            <sBTPerfilBT>
               <Perfil>MFINSTALL</perfil>
               <FechaAlta>2001-01-01</fechaAlta>
               <FechaVencimiento>2021-01-01</fechaVencimiento>
            </sBTPerfilBT>
            <sBTPerfilBT>
               <Perfil>PRECIOS</perfil>
               <FechaAlta>2001-02-22</fechaAlta>
               <FechaVencimiento>2035-03-03</fechaVencimiento>
            </sBTPerfilBT>
         </sdtPerfiles>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTUsuarios.ObtenerPerfiles</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Hora>17:29:11</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6995</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTUsuarios.ObtenerPerfilesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "BANTOTAL",
        "Token": "2062732190F955E77534D3E0",
        "Device": "AC"
    },
    "sdtPerfiles": {
        "sBTPerfilBT": [
            {
                "Perfil": "COMERCIAL",
                "FechaAlta": "2001-01-01",
                "FechaVencimiento": "2021-01-01"
            },
            {
                "Perfil": "INSTALADOR",
                "FechaAlta": "2001-01-01",
                "FechaVencimiento": "2021-01-01"
            },
            {
                "Perfil": "MFINSTALL",
                "FechaAlta": "2001-01-01",
                "FechaVencimiento": "2021-01-01"
            },
            {
                "Perfil": "PRECIOS",
                "FechaAlta": "2001-02-22",
                "FechaVencimiento": "2035-03-03"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTUsuarios.ObtenerPerfiles",
        "Fecha": "2019-11-19",
        "Hora": "17:31:08",
        "Requerimiento": "",
        "Numero": 6997,
        "Estado": "OK"
    }
}\'` }
  };

  structuredTypes = [];
}
