import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CrearSolicitudGrupal',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearSolicitudGrupalComponent1751987197760 {
  pageTitle        = 'Crear Solicitud Grupal';
  description      = `Método para crear una solicitud de crédito grupal.`;
  pubName    = 'BTMicrofinanzas.CrearSolicitudGrupal';
  programa   = 'RBTPG438';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'procesoId', Tipo: 'Short', Comentarios: '[Hidden: Identificador de proceso Workflow].' }, { Nombre: 'tareaId', Tipo: 'Short', Comentarios: '[Hidden: Identificador de tarea Workflow].' }, { Nombre: 'usuarioIngreso', Tipo: 'String', Comentarios: 'Usuario que ingresa la solicitud. En caso de no especificarse, se asigna el usuario conectado.' }, { Nombre: 'fechaIngreso', Tipo: 'Date', Comentarios: 'Fecha en la que se ingresa la solicitud. En caso de no especificarse, se asigna fecha apertura.' }, { Nombre: 'usuarioAsignacion', Tipo: 'String', Comentarios: 'Usuario al que queda asignada la tarea de solicitud. En caso de no especificarse, se asigna al Asesor de créditos.' }, { Nombre: 'sdtDatosSolicitud', Tipo: '[sBTSolicitudGrupal](#sbtsolicitudgrupal)', Comentarios: 'Datos de entrada de la solicitud.' }];
  outputData = [{ Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador de instancia Workflow.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de proceso.' }, { Código: '30002', Descripción: 'No se recibió el identificador de tarea.' }, { Código: '30003', Descripción: 'No se recibió el identificador de grupo.' }, { Código: '30011', Descripción: 'El Grupo seleccionado no está vigente.' }, { Código: '30012', Descripción: 'El Tipo de Grupo no existe.' }, { Código: '30013', Descripción: 'No se pudo determinar el coordinador del grupo.' }, { Código: '30014', Descripción: 'No se encontró registro en la FSD008 para la cuenta [Número de cuenta].' }, { Código: '30015', Descripción: 'No se obtuvo el titular representativo de la cuenta [Número de cuenta].' }, { Código: '30016', Descripción: 'No se pudo determinar la sucursal de la solicitud.' }, { Código: '30017', Descripción: 'No se pudo determinar el asesor de la solicitud.' }, { Código: '30018', Descripción: 'El código de campaña no existe.' }, { Código: '30019', Descripción: 'El código de origen de captación no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.CrearSolicitudGrupal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>669747179CD285A89A23FBEE</bts:Token>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:usuarioIngreso>INSTALADOR</bts:usuarioIngreso>
         <bts:fechaIngreso/>
         <bts:usuarioAsignacion>INSTALADOR</bts:usuarioAsignacion>
         <bts:sdtDatosSolicitud>
            <bts:grupoId>34</bts:grupoId>
            <bts:asesorId>92</bts:asesorId>
            <bts:sucursalId/>
            <bts:origenCaptacion>6</bts:origenCaptacion>
         </bts:sdtDatosSolicitud>
      </bts:BTMicrofinanzas.CrearSolicitudGrupal>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?CrearSolicitudGrupal \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "669747179CD285A89A23FBEE"
	},
    "usuarioIngreso": "INSTALADOR",
    "usuarioAsignacion": "INSTALADOR",
    "datosSolicitud": {
        "grupoId": "34",
        "asesorId": "92",
        "sucursalId": "1",
        "origenCaptacion": "6"
    }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.CrearSolicitudGrupalResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>669747179CD285A89A23FBEE</Token>
            <Device>1</Device>
         </Btinreq>
         <solicitudUId>10847</solicitudUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.CrearSolicitudGrupal</Servicio>
            <Fecha>2020-09-10</Fecha>
            <Hora>14:31:41</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>121</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.CrearSolicitudGrupalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "669747179CD285A89A23FBEE"
	},
    "solicitudUId": "10847",
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTMicrofinanzas.CrearSolicitudGrupal",
        "Fecha": "2020-09-10",
        "Hora": "14:31:41",
        "Requerimiento": "1",
        "Numero": "121",
        "Estado": "OK"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTSolicitudGrupal', fields: [{ Nombre: 'asesorId', Tipo: 'Int', Comentarios: 'Identificador del Asesor de la solicitud. En caso de no especificarse, se asigna el Asesor del cliente.' }, { Nombre: 'grupoId', Tipo: 'Int', Comentarios: 'Identificador de grupo que solicita el préstamo.' }, { Nombre: 'origenCaptacion', Tipo: 'Int', Comentarios: 'Identificador de origen captación.' }, { Nombre: 'sucursalId', Tipo: 'Short', Comentarios: 'Sucursal de la solicitud. En caso de no especificarse, se asigna la sucursal del cliente.' }] }];
}
