import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerIdentificadorUnico',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerIdentificadorUnicoComponent1750713394531 {
  pageTitle        = 'Obtener Identificador Único';
  description      = `Método para obtener el identificador único de una persona.`;
  pubName    = 'BTPersonas.ObtenerIdentificadorUnico';
  programa   = 'RBTPG220';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'paisDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del país de origen del documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }, { Nombre: 'numeroDocumento', Tipo: 'String', Comentarios: 'Número de documento de la persona.' }];
  outputData = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador del país de documento.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador del tipo de documento.' }, { Codigo: '30003', Descripcion: 'No se recibió el número de documento.' }, { Codigo: '30004', Descripcion: 'No existe registro de la Persona.' }, { Codigo: '30005', Descripcion: 'No se pudo obtener identificador único de la persona.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerIdentificadorUnico>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>861c3148934A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:paisDocumentoId>845</bts:paisDocumentoId>
         <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
         <bts:numeroDocumento>49670628</bts:numeroDocumento>
      </bts:BTPersonas.ObtenerIdentificadorUnico>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerIdentificadorUnico\' \
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
   "paisDocumentoId": 845,
   "tipoDocumentoId": 1,
   "numeroDocumento": "49670628"
	}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerIdentificadorUnicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>861c3148934A8B5C60A82434</Token>
         </Btinreq>
         <personaUId>61</personaUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>7881</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerIdentificadorUnico</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-01-10</Fecha>
            <Hora>10:11:44</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerIdentificadorUnicoResponse>
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
    "personaUId": "61",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "7882",
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerIdentificadorUnico",
        "Requerimiento": "1",
        "Fecha": "2019-01-10",
        "Hora": "10:18:48",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
