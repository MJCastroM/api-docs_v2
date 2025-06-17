import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerSesionesPorUsuario',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerSesionesPorUsuarioComponent {
  pageTitle = 'Obtener Sesiones Por Usuario';
  description = `Metodo para obtener la cantidad de sesiones abiertas por usuario.`;
  pubName    = 'BTIndicadores.ObtenerSesionesPorUsuario';
  programa   = 'RBTPG711';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtSesionesPorUsuario', Tipo: '[sBTSesionesPorUsuario](#sbtsesionesporusuario)', Comentarios: 'Coleccion de datos de sesiones por usuario.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTIndicadores.ObtenerSesionesPorUsuario>
         <bts:Btinreq>
            <bts:Device>MC</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>3</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>3483F7F3C05B0DDF791C90A3</bts:Token>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerSesionesPorUsuario>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerSesionesPorUsuario' \
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
	}
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTIndicadores.ObtenerSesionesPorUsuarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>MC</Device>
            <Requerimiento>3</Requerimiento>
            <Token>3483F7F3C05B0DDF791C90A3</Token>
         </Btinreq>
         <sdtSesionesPorUsuario>
            <sBTSesionesPorUsuario>
               <cantidadSesiones>438</cantidadSesiones>
               <usuario>INSTALADOR</usuario>
            </sBTSesionesPorUsuario>
            <sBTSesionesPorUsuario>
               <cantidadSesiones>5</cantidadSesiones>
               <usuario>BANTOTAL</usuario>
            </sBTSesionesPorUsuario>
            <sBTSesionesPorUsuario>
               <cantidadSesiones>1</cantidadSesiones>
               <usuario>ASESOR</usuario>
            </sBTSesionesPorUsuario>
         </sdtSesionesPorUsuario>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-05-31</Fecha>
            <Hora>17:15:49</Hora>
            <Numero>25899</Numero>
            <Servicio>BTIndicadores.ObtenerSesionesPorUsuario</Servicio>
            <Requerimiento>3</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTIndicadores.ObtenerSesionesPorUsuarioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},    
	"sdtSesionesPorUsuario": {
		"sBTSesionesPorUsuario": [
			{
				"cantidadSesiones": "438",
				"usuario": "INSTALADOR"
			},
			{
				"cantidadSesiones": "5",
				"usuario": "BANTOTAL"
			},
			{
				"cantidadSesiones": "1",
				"usuario": "ASESOR"
			}
		]
	},
    "Btoutreq": {
        "Numero": "397",
        "Estado": "OK",
        "Servicio": "BTIndicadores.ObtenerSesionesPorUsuario",
        "Fecha": "2018-05-02",
        "Requerimiento": "1",
        "Hora": "18:40:30",
        "Canal": "BTDIGITAL"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTSesionesPorUsuario', fields: [{ Nombre: 'cantidadsesiones', Tipo: 'Int', Comentarios: 'Cantidad de sesiones abiertas.' }, { Nombre: 'usuario', Tipo: 'String', Comentarios: 'Identificador de usuario.' }] }];
}
