import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerUsuariosParaPerfil',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerUsuariosParaPerfilComponent1750258525676 {
  pageTitle        = 'Obtener Usuarios Para Perfil';
  description      = `Método para obtener un listado de los usuarios que tiene asociados un determinado perfil.`;
  pubName          = 'Obtener Usuarios Para Perfil';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'perfil', Tipo: 'String', Comentarios: 'Perfil de usuario.' }];
  outputData = [{ Nombre: 'sdtUsuarios', Tipo: '[sBTDetalleUsuario](#sbtdetalleusuario)', Comentarios: 'Listado de usuarios.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar perfil.' }, { Codigo: '40001', Descripcion: 'No existe el perfil ingresado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTUsuarios.ObtenerUsuariosParaPerfil>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>20130357454A8B5C60A82434</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:usuario>CAJERO</bts:usuario>
      </bts:BTUsuarios.ObtenerUsuariosParaPerfil>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
    \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?ObtenerUsuariosParaPerfil\' \
    -H \'cache-control: no-cache\' \
    -H \'content-type: application/json\' \
    -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
    -d \'{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "20130357454A8B5C60A82434"
    },
    "perfil": "CAJERO",
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerUsuariosParaPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Token>c2cfd09eff4A8B5C60A82434</Token>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
         </Btinreq>
         <sdtUsuarios>
            <SdtsBTDetalleUsuario>
               <empresa>1</empresa>
               <usuario>GERENTE</usuario>
               <nombre>GERENTE</nombre>
               <ultimoAvisoActividad>2018-03-21, 12:51:10</ultimoAvisoActividad>
            </SdtsBTDetalleUsuario>
            <SdtsBTDetalleUsuario>
               <empresa>1 - BTV2R3 Uruguay</empresa>
               <usuario>BANTOTAL</usuario>
               <nombre>BANTOTAL</nombre>
               <ultimoAvisoActividad>2022-05-26, 13:46:09</ultimoAvisoActividad>
            </SdtsBTDetalleUsuario>
            <SdtsBTDetalleUsuario>
               <empresa>1</empresa>
               <usuario>COLOCACION</usuario>
               <nombre>COLOCACION</nombre>
               <ultimoAvisoActividad>2018-02-26, 17:03:16</ultimoAvisoActividad>
            </SdtsBTDetalleUsuario>
            <SdtsBTDetalleUsuario>
               <empresa>1</empresa>
               <usuario>CAJERO</usuario>
               <nombre>CAJERO</nombre>
               <ultimoAvisoActividad>2022-05-26, 13:40:24</ultimoAvisoActividad>
            </SdtsBTDetalleUsuario>
            <SdtsBTDetalleUsuario>
               <empresa>1</empresa>
               <usuario>OPERADOR</usuario>
               <nombre>OPERADOR</nombre>
               <ultimoAvisoActividad>2001-01-01, 15:29:13</ultimoAvisoActividad>
            </SdtsBTDetalleUsuario>
         </sdtUsuarios>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16576</Numero>
            <Hora>12:36:58</Hora>
            <Fecha>2022-05-26</Fecha>
            <Servicio>BTPersonas.ObtenerUsuariosParaPerfil</Servicio>
            <Estado>OK</Estado>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
         </Btoutreq>
      </BTPersonas.ObtenerUsuariosParaPerfilResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "c2cfd09eff4A8B5C60A82434" 
    }, 
    "sdtUsuarios": { 
        "SdtsBTDetalleUsuario": [ 
        { 
            "empresa": "1", 
            "usuario": "GERENTE", 
            "nombre": "GERENTE", 
            "ultimoAvisoActividad": "2018-03-21, 12:51:10" 
        }, 
        { 
            "empresa": "1 - BTV2R3 Uruguay", 
            "usuario": "BANTOTAL", 
            "nombre": "BANTOTAL", 
            "ultimoAvisoActividad": "2022-05-26, 13:46:09" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "COLOCACION", 
            "nombre": "COLOCACION", 
            "ultimoAvisoActividad": "2018-02-26, 17:03:16" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "CAJERO", 
            "nombre": "CAJERO", 
            "ultimoAvisoActividad": "2022-05-26, 13:40:24" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "OPERADOR", 
            "nombre": "OPERADOR", 
            "ultimoAvisoActividad": "2001-01-01, 15:29:13" 
        } 
        ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerUsuariosParaPerfil", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
}` }
  };

  structuredTypes = [];
}
