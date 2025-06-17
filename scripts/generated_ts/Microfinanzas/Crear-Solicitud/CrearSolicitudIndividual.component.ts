import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-CrearSolicitudIndividual',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearSolicitudIndividualComponent {
  // Cabecera e info-card
  pageTitle = 'Crear Solicitud Individual';
  description = `Metodo para crear una solicitud de credito individual.`;
  pubName    = 'BTMicrofinanzas.CrearSolicitudIndividual';
  programa   = 'RBTPG410';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['procesoId', 'tareaId', 'tipoSolicitud', 'usuarioIngreso', 'fechaIngreso', 'usuarioAsignacion', 'datosSolicitud'];
  inputData  = [{ Nombre: 'procesoId', Tipo: 'Short', Comentarios: '[Hidden: Identificador de proceso Workflow].' }, { Nombre: 'tareaId', Tipo: 'Short', Comentarios: '[Hidden: Identificador de tarea Workflow].' }, { Nombre: 'tipoSolicitud', Tipo: 'Byte', Comentarios: '[Hidden: Identificador de tipo de solicitud 'Nueva'].' }, { Nombre: 'usuarioIngreso', Tipo: 'String', Comentarios: 'Usuario que ingresa la solicitud. En caso de no especificarse, se asigna el usuario conectado.' }, { Nombre: 'fechaIngreso', Tipo: 'Date', Comentarios: 'Fecha en la que se ingresa la solicitud. En caso de no especificarse, se asigna fecha apertura.' }, { Nombre: 'usuarioAsignacion', Tipo: 'String', Comentarios: 'Usuario al que queda asignada la tarea de solicitud. En caso de no especificarse, se asigna al Asesor de creditos.' }, { Nombre: 'datosSolicitud', Tipo: '[sBTSolicitudIndividual](#sbtsolicitudindividual)', Comentarios: 'Datos de la solicitud.' }];
  outputCols = ['solicitudUId'];
  outputData = [{ Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador de instancia Workflow.' }];
  errorCols  = ['30001', '30002', '30003', '30004', '30011', '30012', '30013', '30014', '30015', '30016', '30020 en adelante'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de proceso.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de tarea.' }, { Codigo: '30003', Descripcion: 'No se recibio el identificador del cliente.' }, { Codigo: '30004', Descripcion: 'No se recupero la cuenta para el Identificador de cliente.' }, { Codigo: '30011', Descripcion: 'No existe FSD008 para la cuenta [Numero de cuenta].' }, { Codigo: '30012', Descripcion: 'No se obtuvo el titular representativo de la cuenta [Numero de cuenta].' }, { Codigo: '30013', Descripcion: 'No se pudo determinar la sucursal de la solicitud.' }, { Codigo: '30014', Descripcion: 'No se pudo determinar el asesor de la solicitud.' }, { Codigo: '30015', Descripcion: 'El codigo de campana no existe.' }, { Codigo: '30016', Descripcion: 'El codigo de origen de captacion no existe.' }, { Codigo: '30020 en adelante', Descripcion: 'Controles de regla de negocio.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.CrearSolicitudIndividual>
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
      </bts:BTMicrofinanzas.CrearSolicitudIndividual>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?CrearSolicitudIndividual \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
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
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.CrearSolicitudIndividualResponse>
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
            <Servicio>BTMicrofinanzas.CrearSolicitudIndividual</Servicio>
            <Fecha>2019-09-10</Fecha>
            <Hora>14:31:41</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>121</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.CrearSolicitudIndividualResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
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
         "Servicio": "BTMicrofinanzas.CrearSolicitudIndividual",
         "Fecha": "2019-09-10",
         "Hora": "14:31:41",
         "Requerimiento": "95",
         "Numero": "121",
         "Estado": "OK"
      }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'asesorId', Tipo: 'Int', Comentarios: 'Identificador del Asesor de la solicitud. En caso de no especificarse, se asigna el Asesor del cliente.' }, { Nombre: 'asunto', Tipo: 'String', Comentarios: 'Asunto de la solicitud.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente que solicita el prestamo.' }, { Nombre: 'comentario', Tipo: 'String', Comentarios: 'Comentario de la solicitud.' }, { Nombre: 'origenCaptacion', Tipo: 'Int', Comentarios: 'Identificador de origen captacion.' }, { Nombre: 'sucursalId', Tipo: 'Int', Comentarios: 'Sucursal de la solicitud. En caso de no especificarse, se asigna la sucursal del cliente.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
