import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-CrearSolicitudGrupal',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearSolicitudGrupalComponent {
  // Cabecera e info-card
  pageTitle = 'Crear Solicitud Grupal';
  description = `Metodo para crear una solicitud de credito grupal.`;
  pubName    = 'BTMicrofinanzas.CrearSolicitudGrupal';
  programa   = 'RBTPG438';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['procesoId', 'tareaId', 'usuarioIngreso', 'fechaIngreso', 'usuarioAsignacion', 'sdtDatosSolicitud'];
  inputData  = [{ Nombre: 'procesoId', Tipo: 'Short', Comentarios: '[Hidden: Identificador de proceso Workflow].' }, { Nombre: 'tareaId', Tipo: 'Short', Comentarios: '[Hidden: Identificador de tarea Workflow].' }, { Nombre: 'usuarioIngreso', Tipo: 'String', Comentarios: 'Usuario que ingresa la solicitud. En caso de no especificarse, se asigna el usuario conectado.' }, { Nombre: 'fechaIngreso', Tipo: 'Date', Comentarios: 'Fecha en la que se ingresa la solicitud. En caso de no especificarse, se asigna fecha apertura.' }, { Nombre: 'usuarioAsignacion', Tipo: 'String', Comentarios: 'Usuario al que queda asignada la tarea de solicitud. En caso de no especificarse, se asigna al Asesor de creditos.' }, { Nombre: 'sdtDatosSolicitud', Tipo: '[sBTSolicitudGrupal](#sbtsolicitudgrupal)', Comentarios: 'Datos de entrada de la solicitud.' }];
  outputCols = ['solicitudUId'];
  outputData = [{ Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador de instancia Workflow.' }];
  errorCols  = ['30001', '30002', '30003', '30011', '30012', '30013', '30014', '30015', '30016', '30017', '30018', '30019'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de proceso.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de tarea.' }, { Codigo: '30003', Descripcion: 'No se recibio el identificador de grupo.' }, { Codigo: '30011', Descripcion: 'El Grupo seleccionado no esta vigente.' }, { Codigo: '30012', Descripcion: 'El Tipo de Grupo no existe.' }, { Codigo: '30013', Descripcion: 'No se pudo determinar el coordinador del grupo.' }, { Codigo: '30014', Descripcion: 'No se encontro registro en la FSD008 para la cuenta [Numero de cuenta].' }, { Codigo: '30015', Descripcion: 'No se obtuvo el titular representativo de la cuenta [Numero de cuenta].' }, { Codigo: '30016', Descripcion: 'No se pudo determinar la sucursal de la solicitud.' }, { Codigo: '30017', Descripcion: 'No se pudo determinar el asesor de la solicitud.' }, { Codigo: '30018', Descripcion: 'El codigo de campana no existe.' }, { Codigo: '30019', Descripcion: 'El codigo de origen de captacion no existe.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?CrearSolicitudGrupal \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
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
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
</SOAP-ENV:Envelope>`, json: `'{
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
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'asesorId', Tipo: 'Int', Comentarios: 'Identificador del Asesor de la solicitud. En caso de no especificarse, se asigna el Asesor del cliente.' }, { Nombre: 'grupoId', Tipo: 'Int', Comentarios: 'Identificador de grupo que solicita el prestamo.' }, { Nombre: 'origenCaptacion', Tipo: 'Int', Comentarios: 'Identificador de origen captacion.' }, { Nombre: 'sucursalId', Tipo: 'Short', Comentarios: 'Sucursal de la solicitud. En caso de no especificarse, se asigna la sucursal del cliente.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
