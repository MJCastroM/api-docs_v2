import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerSegmentos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerSegmentosComponent1750945332034 {
  pageTitle        = 'Obtener Segmentos';
  description      = `Método para obtener un listado de los segmentos ingresados en Bantotal.`;
  pubName    = 'BTClientes.ObtenerSegmentos';
  programa   = 'RBTPG314';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtSegmentos', Tipo: '[sBTSegmento](#sbtsegmento)', Comentarios: 'Listado de segmentos.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerSegmentos>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>b5890560A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTClientes.ObtenerSegmentos>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerSegmentos\' \
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
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerSegmentosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.118</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b58905d3ad4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSegmentos>
            <sBTSegmento>
               <descripcion>Independiente</descripcion>
               <identificador>1</identificador>
            </sBTSegmento>
            <sBTSegmento>
               <descripcion>Dependiente</descripcion>
               <identificador>2</identificador>
            </sBTSegmento>
            <sBTSegmento>
               <descripcion>Otros</descripcion>
               <identificador>3</identificador>
            </sBTSegmento>
            <sBTSegmento>
               <descripcion>Corporativo</descripcion>
               <identificador>4</identificador>
            </sBTSegmento>
         </sdtSegmentos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8469</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerSegmentos</Servicio>
            <Fecha>2019-05-07</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>19:31:26</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerSegmentosResponse>
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
	"sdtSegmentos": {
		"sBTSegmento": [
			{
				"descripcion": "Independiente",
				"identificador": "1"
			},
			{
				"descripcion": "Dependiente",
				"identificador": "2"
			},
			{
				"descripcion": "Otros",
				"identificador": "3"
			},
			{
				"descripcion": "Corporativo",
				"identificador": "4"
			}
		]
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerSegmentos",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTSegmento', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del segmento.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador del segmento.' }] }];
}
