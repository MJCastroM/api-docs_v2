import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ActualizarGrupo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarGrupoComponent1751987197745 {
  pageTitle        = 'Actualizar Grupo';
  description      = `Método para actualizar la información de un grupo de crédito.`;
  pubName    = 'BTMicrofinanzas.ActualizarGrupo';
  programa   = 'RBTPG430';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'grupoId', Tipo: 'Int', Comentarios: 'Identificador de grupo.' }, { Nombre: 'sdtDetalleGrupo', Tipo: '[sBTDetalleGrupo](#sbtdetallegrupo)', Comentarios: 'Datos del grupo.' }];
  outputData = [];
  errors     = [{ Código: '40002', Descripción: 'El tipo de grupo no existe.' }, { Código: '40003', Descripción: 'Debe ingresar nombre de grupo.' }, { Código: '40013', Descripción: 'El grupo ingresado no existe.' }, { Código: '40005', Descripción: 'Fecha de Vigencia Desde debe ser mayor o igual a Fecha de Creación.' }, { Código: '40006', Descripción: 'Debe ingresar Fecha de Vigencia Hasta.' }, { Código: '40007', Descripción: 'Fecha de Vigencia Hasta debe ser mayor a Fecha Vigencia Desde.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.ActualizarGrupo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1821984229CD285A89A23FBE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <grupoId>36</grupoId>
         <bts:sdtDetalleGrupo>
            <tipoId>1</tipoId>
            <tipo></tipo>
            <nombre>Solidarios</nombre>
            <nombreExtendido>Solidarios S.A.</nombreExtendido>
            <asesorId>1</asesorId>
            <asesor></asesor>
            <fechaAlta></fechaAlta>
            <fechaDesde>2025-05-02</fechaDesde>
            <fechaHasta>2030-04-20</fechaHasta>
            <usuarioAlta></usuarioAlta>
            <vigente></vigente>
            <bloqueado></bloqueado>
            <nroSecuencia>0</nroSecuencia>
            <agenciaId></agenciaId>
            <agencia></agencia>
         </bts:sdtDetalleGrupo>
      </bts:BTMicrofinanzas.ActualizarGrupo>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ActualizarGrupo=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7\' \
  -d \'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "grupoId": "36",
    "sdtDetalleGrupo": {
		"tipoId": "1",
		"tipo": "",
		"nombre": "Solidario",
		"nombreExtendido": "Solidarios S.A.",
		"asesorId": "1",
		"asesor": "",
		"fechaAlta": "",
		"fechaDesde": "2025-05-02",
		"fechaHasta": "2030-04-20",
		"usuarioAlta": "",
		"vigente": "",
		"bloqueado": "",
		"nroSecuencia": "0",
		"agenciaId": "",
		"agencia": ""
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.ActualizarGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1821984229CD285A89A23FBE</Token>
            <Device>AC</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ActualizarGrupo</Servicio>
            <Fecha>2020-04-21</Fecha>
            <Hora>11:18:56</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>5039</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ActualizarGrupoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "786",
        "Estado": "OK",
        "Servicio": "BTMicrofinanzas.ActualizarGrupo",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "16:35:22",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDetalleGrupo', fields: [{ Nombre: 'agencia', Tipo: 'String', Comentarios: 'Agencia.' }, { Nombre: 'agenciaId', Tipo: 'Int', Comentarios: 'Identificador de agencia.' }, { Nombre: 'asesor', Tipo: 'String', Comentarios: 'Asesor del grupo.' }, { Nombre: 'asesorId', Tipo: 'Int', Comentarios: 'Identificador del asesor del grupo.' }, { Nombre: 'bloqueado', Tipo: 'String', Comentarios: '¿Está bloqueado? (S/N).' }, { Nombre: 'fechaAlta', Tipo: 'Date', Comentarios: 'Fecha de alta del grupo.' }, { Nombre: 'fechaDesde', Tipo: 'Date', Comentarios: 'Fecha comienzo vigencia.' }, { Nombre: 'fechaHasta', Tipo: 'Date', Comentarios: 'Fecha fin vigencia.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del grupo.' }, { Nombre: 'nombreExtendido', Tipo: 'String', Comentarios: 'Nombre extendido del grupo.' }, { Nombre: 'nroSecuencia', Tipo: 'Int', Comentarios: 'Número de secuencia.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de grupo.' }, { Nombre: 'tipoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de grupo.' }, { Nombre: 'usuarioAlta', Tipo: 'String', Comentarios: 'Usuario de alta del grupo.' }, { Nombre: 'vigente', Tipo: 'String', Comentarios: '¿Es vigente? (S/N).' }] }];
}
