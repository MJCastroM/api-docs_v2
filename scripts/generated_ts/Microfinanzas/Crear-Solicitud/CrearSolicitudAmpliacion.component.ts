import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-CrearSolicitudAmpliacion',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearSolicitudAmpliacionComponent1751987197730 {
  pageTitle        = 'Crear Solicitud Ampliación';
  description      = `Método para crear una solicitud de ampliación de crédito.`;
  pubName    = 'BTMicrofinanzas.CrearSolicitudAmpliacion';
  programa   = 'RBTPG410';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'procesoId', Tipo: 'Short', Comentarios: '[Hidden: Identificador de proceso Workflow].' }, { Nombre: 'tareaId', Tipo: 'Short', Comentarios: '[Hidden: Identificador de tarea Workflow].' }, { Nombre: 'tipoSolicitud', Tipo: 'Byte', Comentarios: '[Hidden: Identificador de tipo de solicitud \'Ampliación\'].' }, { Nombre: 'usuarioIngreso', Tipo: 'String', Comentarios: 'Usuario que ingresa la solicitud. En caso de no especificarse, se asigna el usuario conectado.' }, { Nombre: 'fechaIngreso', Tipo: 'Date', Comentarios: 'Fecha en la que se ingresa la solicitud. En caso de no especificarse, se asigna fecha apertura.' }, { Nombre: 'usuarioAsignacion', Tipo: 'String', Comentarios: 'Usuario al que queda asignada la tarea de solicitud. En caso de no especificarse, se asigna al Asesor de créditos.' }, { Nombre: 'datosSolicitud', Tipo: '[sBTSolicitudIndividual](#sbtsolicitudindividual)', Comentarios: 'Datos de la solicitud.' }];
  outputData = [{ Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador de instancia Workflow.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de proceso.' }, { Código: '30002', Descripción: 'No se recibió el identificador de tarea.' }, { Código: '30003', Descripción: 'No se recibió el identificador del cliente.' }, { Código: '30004', Descripción: 'No se recuperó la cuenta para el Identificador de cliente.' }, { Código: '30011', Descripción: 'No existe FSD008 para la cuenta [Número de cuenta].' }, { Código: '30012', Descripción: 'No se obtuvo el titular representativo de la cuenta [Número de cuenta].' }, { Código: '30013', Descripción: 'No se pudo determinar la sucursal de la solicitud.' }, { Código: '30014', Descripción: 'No se pudo determinar el asesor de la solicitud.' }, { Código: '30015', Descripción: 'El código de campaña no existe.' }, { Código: '30016', Descripción: 'El código de origen de captación no existe.' }, { Código: '30020 en adelante', Descripción: 'Controles de regla de negocio.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.CrearSolicitudAmpliacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>419385365CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:usuarioIngreso>INSTALADOR</bts:usuarioIngreso>
         <bts:fechaIngreso></bts:fechaIngreso>
         <bts:usuarioAsignacion>INSTALADOR</bts:usuarioAsignacion>
         <bts:datosSolicitud>
            <bts:clienteUId>4</bts:clienteUId>
            <bts:asesorId>1</bts:asesorId>
            <bts:sucursalId>1</bts:sucursalId>
            <bts:origenCaptacion>5</bts:origenCaptacion>
            <bts:asunto>SIN ASUNTO</bts:asunto>
            <bts:comentario>SOLICITUD DESDE API</bts:comentario>
         </bts:datosSolicitud>
      </bts:BTMicrofinanzas.CrearSolicitudAmpliacion>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?CrearSolicitudAmpliacion \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "usuarioIngreso": "INSTALADOR",
    "usuarioAsignacion": "INSTALADOR",
    "datosSolicitud": {
        "clienteUId": "4",
        "asesorId": "1",
        "sucursalId": "1",
        "origenCaptacion": "5",
        "asunto": "SIN ASUNTO",
        "comentario": "SOLICITUD DESDE API",
    }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.CrearSolicitudAmpliacionResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>419385365CD285A89A23FBEE</Token>
            <Device>GP</Device>
         </Btinreq>
         <solicitudUId>10847</solicitudUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.CrearSolicitudAmpliacion</Servicio>
            <Fecha>2019-09-10</Fecha>
            <Hora>14:31:41</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>121</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.CrearSolicitudAmpliacionResponse>
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
      "solicitudUId": "10847",
      "Btoutreq": {
         "Canal": "BTDIGITAL",
         "Servicio": "BTMicrofinanzas.CrearSolicitudAmpliacion",
         "Fecha": "2019-09-10",
         "Hora": "14:31:41",
         "Requerimiento": "95",
         "Numero": "121",
         "Estado": "OK"
      }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTSolicitudIndividual', fields: [{ Nombre: 'asesorId', Tipo: 'Int', Comentarios: 'Identificador del Asesor de la solicitud. En caso de no especificarse, se asigna el Asesor del cliente.' }, { Nombre: 'asunto', Tipo: 'String', Comentarios: 'Asunto de la solicitud.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente que solicita el préstamo.' }, { Nombre: 'comentario', Tipo: 'String', Comentarios: 'Comentario de la solicitud.' }, { Nombre: 'origenCaptacion', Tipo: 'Int', Comentarios: 'Identificador de origen captación.' }, { Nombre: 'sucursalId', Tipo: 'Int', Comentarios: 'Sucursal de la solicitud. En caso de no especificarse, se asigna la sucursal del cliente.' }] }];
}
