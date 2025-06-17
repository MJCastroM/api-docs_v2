import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-InhabilitarUsuario',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class InhabilitarUsuarioComponent {
  // Cabecera e info-card
  pageTitle = 'Inhabilitar Usuario';
  description = `Metodo para inhabilitar un usuario.`;
  pubName    = 'BTUsuarios.InhabilitarUsuario';
  programa   = 'RBTPG393';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['usuario', 'fechaDesde', 'fechaHasta'];
  inputData  = [{ Nombre: 'usuario', Tipo: 'String', Comentarios: 'Identificador del usuario.' }, { Nombre: 'fechaDesde', Tipo: 'Date', Comentarios: 'Fecha desde la que se quiere inhabilitar.' }, { Nombre: 'fechaHasta', Tipo: 'Date', Comentarios: 'Fecha hasta la que se quiere inhabilitar.' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '30002', '30003', '40002'];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar usuario a inhabilitar.' }, { Codigo: '30002', Descripcion: 'Debe ingresar fecha desde.' }, { Codigo: '30003', Descripcion: 'Debe ingresar fecha hasta.' }, { Codigo: '40002', Descripcion: 'Registro ya existe.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTUsuarios.InhabilitarUsuario>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>bc8b678bc44A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:usuario>GPONTES</bts:usuario>
         <bts:fechaDesde>2022-01-01</bts:fechaDesde>
         <bts:fechaHasta>2022-06-01</bts:fechaHasta>
      </bts:BTUsuarios.InhabilitarUsuario>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?InhabilitarUsuario' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "bc8b678bc44A8B5C60A82434"
    },
   "Usuario": "GPONTES",
   "fechaDesde": "2022-01-01",
   "fechaHasta": "2022-06-01"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTUsuarios.InhabilitarUsuarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>bc8b678bc44A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>838</Numero>
            <Estado>OK</Estado>
            <Servicio>BTUsuarios.InhabilitarUsuario</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2022-05-12</Fecha>
            <Hora>15:35:43</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTUsuarios.InhabilitarUsuarioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.InhabilitarUsuario", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
}` } };

  // Datos estructurados
  structuredTypes = [];
}
