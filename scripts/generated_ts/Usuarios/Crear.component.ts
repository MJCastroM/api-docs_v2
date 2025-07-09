import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-Crear',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearComponent1751987200421 {
  pageTitle        = 'Crear';
  description      = `Método para crear un usuario.`;
  pubName    = 'BTUsuarios.Crear';
  programa   = 'RBTPG120';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtUsuario', Tipo: '[sBTUsuarioBT](#sbtusuariobt)', Comentarios: 'Datos de usuario Bantotal.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'INS\' para este método].' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'Debe ingresar Usuario.' }, { Código: '30002', Descripción: 'El Usuario ya existe.' }, { Código: '30004', Descripción: 'Debe ingresar Nombre.' }, { Código: '30005', Descripción: 'Debe ingresar Email.' }, { Código: '30006', Descripción: 'Debe ingresar Nro de Caja.' }, { Código: '30007', Descripción: 'Valor incorrecto para cantidad de sesiones abiertas.' }, { Código: '30008', Descripción: 'Valor incorrecto para Nivel.' }, { Código: '30009', Descripción: 'Debe ingresar Programa Inicial.' }, { Código: '30010', Descripción: 'El Programa Inicial no existe.' }, { Código: '30011', Descripción: 'Debe ingresar Sucursal.' }, { Código: '30012', Descripción: 'La Sucursal no existe.' }, { Código: '40012', Descripción: 'Número de Cajero ya asignado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTUsuarios.Crear>
		<bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtUsuario>
            <bts:cajero>S</bts:cajero>
            <bts:cantidadSesionesAbiertas>1</bts:cantidadSesionesAbiertas>
            <bts:email>prueba@bantotal.com</bts:email>
            <bts:espaciosTrabajo>1</bts:espaciosTrabajo>
            <bts:nivel>9</bts:nivel>
            <bts:nombre>USUARIO PRUEBA</bts:nombre>
            <bts:numeroCaja>1</bts:numeroCaja>
            <bts:programaInicial>HEJECUTA</bts:programaInicial>
            <bts:roles>
               <bts:SdtsBTRolWF>
               	<bts:codigo>6</bts:codigo>
            		<bts:descripcion>Asesor de Créditos</bts:descripcion>
               </bts:SdtsBTRolWF>
            </bts:roles>
            <bts:sucursal>1</bts:sucursal>
            <bts:telefono>26012777</bts:telefono>
            <bts:usuario>PRUEBA</bts:usuario>
            <bts:usuarioWorkflow>S</bts:usuarioWorkflow>
         </bts:sdtUsuario>

      </bts:BTUsuarios.Crear>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?Crear\' \
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
      "cajero": "S",
      "cantidadSesionesAbiertas": "1",
      "email": "prueba@bantotal.com",
      "espaciosTrabajo": "1",
      "nivel": "9",
      "nombre": "USUARIO PRUEBA",
      "numeroCaja": "1",
      "programaInicial": "HEJECUTA",
      "roles": {
         "SdtsBTRolWF": {
               "codigo": "6",
               "descripcion": "Asesor de Créditos"
         }
      },
      "sucursal": "1",
      "telefono": "26012777",
      "usuario": "PRUEBA",
      "usuarioWorkflow": "S"
   }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTUsuarios.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d2dc7b1654A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>89</Numero>
            <Estado>OK</Estado>
            <Servicio>BTUsuarios.Crear</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-04</Fecha>
            <Hora>16:13:28</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTUsuarios.CrearResponse>
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
        "Numero": "96",
        "Estado": "OK",
        "Servicio": "BTUsuarios.Crear",
        "Requerimiento": "1",
        "Fecha": "2018-05-04",
        "Hora": "16:18:56",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTRolWF', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código del rol.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del rol.' }] }];
}
