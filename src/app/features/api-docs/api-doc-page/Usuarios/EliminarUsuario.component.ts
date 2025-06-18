import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-EliminarUsuario',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class EliminarUsuarioComponent1750268698932 {
  pageTitle        = 'Eliminar Usuario';
  description      = `Método para eliminar un usuario.`;
  pubName    = 'BTUsuarios.EliminarUsuario';
  programa   = 'RBTPG390';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'usuario', Tipo: 'String', Comentarios: 'Identificador del usuario.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar usuario.' }, { Codigo: '30002', Descripcion: 'No existe el usuario ingresado.' }, { Codigo: '30003', Descripcion: 'No es posible eliminar el usuario. Existen datos relacionados de Perfil/Usuario.' }, { Codigo: '30004', Descripcion: 'El Usuario no existe. (Tabla FST746)' }, { Codigo: '30005', Descripcion: 'La Empresa para el Usuario no existe.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTUsuarios.EliminarUsuario>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>20130357454A8B5C60A82434</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:usuario>GPONTES</bts:usuario>
      </bts:BTUsuarios.EliminarUsuario>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
    \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?EliminarUsuario\' \
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
   "usuario": "GPONTES",
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTUsuarios.EliminarUsuarioResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>20130357454A8B5C60A82434</Token>
            <Device>GP</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTUsuarios.EliminarUsuario</Servicio>
            <Fecha>2022-05-17</Fecha>
            <Hora>15:29:02</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8843</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTUsuarios.EliminarUsuarioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{ 
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "20130357454A8B5C60A82434"
    },
    "Erroresnegocio": {
    },
    "Btoutreq": {
        "Numero": "839",
        "Estado": "OK",
        "Servicio": "BTUsuarios.EliminarUsuario",
        "Requerimiento": "1",
        "Fecha": "2022-05-12",
        "Hora": "15:35:54",
        "Canal": "BTDIGITAL"
    }
}` }
  };

  structuredTypes = [];
}
