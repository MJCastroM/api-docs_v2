import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalleGrupo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalleGrupoComponent1750268696463 {
  pageTitle        = 'Obtener Detalle Grupo';
  description      = `Método para obtener el detalle de un grupo de crédito.`;
  pubName    = 'BTMicrofinanzas.ObtenerDetalleGrupo';
  programa   = 'RBTPG431';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'grupoId', Tipo: 'Int', Comentarios: 'Identificador de grupo.' }];
  outputData = [{ Nombre: 'sdtDetalleGrupo', Tipo: '[sBTDetalleGrupo](#sbtdetallegrupo)', Comentarios: 'Datos del grupo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de grupo.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.ObtenerDetalleGrupo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1821984229CD285A89A23FBE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:grupoId>1</bts:grupoId>
      </bts:BTMicrofinanzas.ObtenerDetalleGrupo>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerDetalleGrupo=\' \
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
    "grupoId": 1
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.ObtenerDetalleGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1821984229CD285A89A23FBE</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtDetalleGrupo>
            <tipoId>1</tipoId>
            <tipo>Grupo Solidario</tipo>
            <nombre>Grupo 1</nombre>
            <nombreExtendido>Grupo 1</nombreExtendido>
            <asesorId>0</asesorId>
            <asesor/>
            <fechaAlta>2018-05-22</fechaAlta>
            <fechaDesde>2018-05-22</fechaDesde>
            <fechaHasta>2025-05-22</fechaHasta>
            <usuarioAlta>ASESOR</usuarioAlta>
            <vigente>S</vigente>
            <bloqueado>9</bloqueado>
            <nroSecuencia>0</nroSecuencia>
            <agenciaId>1</agenciaId>
            <agencia>OFICINAS CENTRALES</agencia>
         </sdtDetalleGrupo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ObtenerDetalleGrupo</Servicio>
            <Fecha>2020-04-21</Fecha>
            <Hora>09:41:28</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>5024</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerDetalleGrupoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"sdtDetalleGrupo": {
		"tipoId": "1",
		"tipo": "Grupo Solidario",
		"nombre": "Grupo 1",
		"nombreExtendido": "Grupo 1",
		"asesorId": "0",
		"asesor": "",
		"fechaAlta": "2018-05-22",
		"fechaDesde": "2018-05-22",
		"fechaHasta": "2025-05-22",
		"usuarioAlta": "ASESOR",
		"vigente": "S",
		"bloqueado": "9",
		"nroSecuencia": "0",
		"agenciaId": "1",
		"agencia": "OFICINAS CENTRALES"
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "786",
        "Estado": "OK",
        "Servicio": "BTMicrofinanzas.ObtenerDetalleGrupo",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "16:35:22",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDetalleGrupo', fields: [{ Nombre: 'agencia', Tipo: 'String', Comentarios: 'Agencia.' }, { Nombre: 'agenciaId', Tipo: 'Int', Comentarios: 'Identificador de agencia.' }, { Nombre: 'asesor', Tipo: 'String', Comentarios: 'Asesor del grupo.' }, { Nombre: 'asesorId', Tipo: 'Int', Comentarios: 'Identificador del asesor del grupo.' }, { Nombre: 'bloqueado', Tipo: 'String', Comentarios: '¿Está bloqueado? (S/N).' }, { Nombre: 'fechaAlta', Tipo: 'Date', Comentarios: 'Fecha de alta del grupo.' }, { Nombre: 'fechaDesde', Tipo: 'Date', Comentarios: 'Fecha comienzo vigencia.' }, { Nombre: 'fechaHasta', Tipo: 'Date', Comentarios: 'Fecha fin vigencia.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del grupo.' }, { Nombre: 'nombreExtendido', Tipo: 'String', Comentarios: 'Nombre extendido del grupo.' }, { Nombre: 'nroSecuencia', Tipo: 'Int', Comentarios: 'Número de secuencia.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de grupo.' }, { Nombre: 'tipoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de grupo.' }, { Nombre: 'usuarioAlta', Tipo: 'String', Comentarios: 'Usuario de alta del grupo.' }, { Nombre: 'vigente', Tipo: 'String', Comentarios: '¿Es vigente? (S/N).' }] }];
}
