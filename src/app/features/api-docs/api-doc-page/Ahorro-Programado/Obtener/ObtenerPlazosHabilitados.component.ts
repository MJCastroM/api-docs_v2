import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPlazosHabilitados',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPlazosHabilitadosComponent1751987195399 {
  pageTitle        = 'Obtener Plazos Habilitados';
  description      = `Método para obtener un listado de plazos habilitados para los casos que el alta de ahorro programado se realice mediante selección de plazo como lista de valores.`;
  pubName    = 'BTAhorroProgramado.ObtenerPlazosHabilitados';
  programa   = 'RBTPG119';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }];
  outputData = [{ Nombre: 'sdtPlazos', Tipo: '[sBTPlazo](#sbtplazo)', Comentarios: 'Listado de plazos habilitados.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador del producto.' }, { Código: '30002', Descripción: 'No se recuperó el producto de ahorro para el identificador: [Número de identificador].' }, { Código: '40001', Descripción: 'Error de configuración: No se definió listado de plazos.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTAhorroProgramado.ObtenerPlazosHabilitados>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:productoUId>41</bts:productoUId>
      </bts:BTAhorroProgramado.ObtenerPlazosHabilitados>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerPlazosHabilitados\' \
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
		"productoUId": 41
	}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTAhorroProgramado.ObtenerPlazosHabilitadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f2f7be2ebc4A8B5C60A82434</Token>
         </Btinreq>
         <sdtPlazos>
            <sBTPlazo>
               <Valor>15</Valor>
               <Tipo>D</Tipo>
               <Descripcion>15 - Dias</Descripcion>
            </sBTPlazo>
            <sBTPlazo>
               <Valor>30</Valor>
               <Tipo>D</Tipo>
               <Descripcion>30 - Dias</Descripcion>
            </sBTPlazo>
            <sBTPlazo>
               <Valor>60</Valor>
               <Tipo>D</Tipo>
               <Descripcion>60 - Dias</Descripcion>
            </sBTPlazo>
            <sBTPlazo>
               <Valor>90</Valor>
               <Tipo>D</Tipo>
               <Descripcion>90 - Dias</Descripcion>
            </sBTPlazo>
            <sBTPlazo>
               <Valor>180</Valor>
               <Tipo>D</Tipo>
               <Descripcion>180 - Dias</Descripcion>
            </sBTPlazo>
            <sBTPlazo>
               <Valor>360</Valor>
               <Tipo>D</Tipo>
               <Descripcion>360 - Dias</Descripcion>
            </sBTPlazo>
         </sdtPlazos>
         <Erroresnegocio></Erroresnegocio>
		 <Btoutreq>
            <Numero>370</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ObtenerPlazosHabilitados</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-04-30</Fecha>
            <Hora>11:21:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ObtenerPlazosHabilitadosResponse>
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
    "sdtPlazos": {
        "sBTPlazo": [
            {
                "Tipo": "D",
                "Descripcion": "15 - Dias",
                "Valor": "15"
            },
            {
                "Tipo": "D",
                "Descripcion": "30 - Dias",
                "Valor": "30"
            },
            {
                "Tipo": "D",
                "Descripcion": "60 - Dias",
                "Valor": "60"
            },
            {
                "Tipo": "D",
                "Descripcion": "90 - Dias",
                "Valor": "90"
            },
            {
                "Tipo": "D",
                "Descripcion": "180 - Dias",
                "Valor": "180"
            },
            {
                "Tipo": "D",
                "Descripcion": "360 - Dias",
                "Valor": "360"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "401",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ObtenerPlazosHabilitados",
        "Fecha": "2018-05-03",
        "Requerimiento": "1",
        "Hora": "11:10:49",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPlazo', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción extendida del plazo.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de plazo (Diario: \'D\', Mensual: \'M\', Anual: \'A\').' }, { Nombre: 'valor', Tipo: 'Int', Comentarios: 'Plazo.' }] }];
}
