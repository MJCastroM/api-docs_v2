import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-Modificar',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ModificarComponent1751987200469 {
  pageTitle        = 'Modificar';
  description      = `Método para modificar un usuario.`;
  pubName    = 'BTUsuarios.Modificar';
  programa   = 'RBTPG120';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtUsuario', Tipo: '[sBTUsuarioBT](#sbtusuariobt)', Comentarios: 'Datos de usuario Bantotal.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'UPD\' para este método].' }];
  outputData = [];
  errors     = [{ Código: '30000', Descripción: 'Parámetro modo incorrecto.' }, { Código: '30001', Descripción: 'Debe ingresar Usuario.' }, { Código: '30003', Descripción: 'No existe Usuario.' }, { Código: '30004', Descripción: 'Debe ingresar Nombre.' }, { Código: '30005', Descripción: 'Debe ingresar Email.' }, { Código: '30006', Descripción: 'Debe ingresar Nro de Caja.' }, { Código: '30007', Descripción: 'Valor incorrecto para cantidad de sesiones abiertas.' }, { Código: '30008', Descripción: 'Valor incorrecto para Nivel.' }, { Código: '30009', Descripción: 'Debe ingresar Programa Inicial.' }, { Código: '30010', Descripción: 'El Programa Inicial no existe.' }, { Código: '30011', Descripción: 'Debe ingresar Sucursal.' }, { Código: '30012', Descripción: 'La Sucursal no existe.' }, { Código: '40011', Descripción: 'La Empresa para el Usuario no existe.' }, { Código: '40012', Descripción: 'Número de Cajero ya asignado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTUsuarios.Modificar>
		<bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtUsuario>
            <bts:Nombre>Natalia Parrilla</bts:nombre>
            <bts:Usuario>PARRILLAN</bts:usuario>
            <bts:Email>nparrilla@prueba.com</bts:email>
            <bts:Telefono>26012777</bts:Telefono>
            <bts:CantidadSesionesAbiertas>0</bts:cantidadSesionesAbiertas>
            <bts:EspaciosTrabajo>0</bts:espaciosTrabajo>
            <bts:ProgramaInicial>HPRUEBA</bts:programaInicial>
            <bts:Nivel>9</bts:nivel>
            <bts:Sucursal>1</bts:sucursal>
            <bts:Cajero>N</bts:cajero>
            <bts:NumeroCaja>0</bts:numeroCaja>
         </bts:sdtUsuario>
      </bts:BTUsuarios.Modificar>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?Modificar\' \
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
   "sdtUsuario": {
		"Nombre": "Carlos Dutra",
		"Usuario": "DUTRAC",
		"Email": "cdutra@prueba.com",
      "Telefono": "26012777",
		"CantidadSesionesAbiertas": 0,
		"EspaciosTrabajo": 0,
		"ProgramaInicial": "HPRUEBA",
		"Nivel": 9,
		"Sucursal": 1,
		"Cajero": "N",
		"NumeroCaja": 0
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTUsuarios.ModificarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d2dc7b1654A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>98</Numero>
            <Estado>OK</Estado>
            <Servicio>BTUsuarios.Modificar</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-04</Fecha>
            <Hora>16:50:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTUsuarios.ModificarResponse>
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
        "Numero": "99",
        "Estado": "OK",
        "Servicio": "BTUsuarios.Modificar",
        "Requerimiento": "1",
        "Fecha": "2018-05-04",
        "Hora": "16:51:22",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
