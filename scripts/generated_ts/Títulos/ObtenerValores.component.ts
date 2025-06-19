import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerValores',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerValoresComponent1750272791904 {
  pageTitle        = 'Obtener Valores';
  description      = `Método para obtener los títulos disponibles para un grupo y sus respectivos valores.`;
  pubName    = 'BTTitulos.ObtenerValores';
  programa   = 'RBTPG494';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'grupoId', Tipo: 'Byte', Comentarios: 'Identificador del grupo.' }];
  outputData = [{ Nombre: 'sdtTitulos', Tipo: '[sBTTitulo](#sbttitulo)', Comentarios: 'Listado de títulos del cliente.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador del grupo.' }, { Codigo: '30002', Descripcion: 'No se pudieron obtener los títulos con el identificador ingresado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTitulos.ObtenerValores>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>6F467D9554D22BE00B36E963</bts:Token>
         </bts:Btinreq>
         <bts:grupoId>1</bts:grupoId>
      </bts:BTTitulos.ObtenerValores>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTitulos?ObtenerValores\' \
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
    "grupoId": 1,
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTitulos.ObtenerValoresResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>be9fc8708b4A8B5C60A82434</Token>
         </Btinreq>
         <sdtTitulo>
            <sBTTitulo>
					<moneda>2222</moneda>
					<simbolo>USD</simbolo>
					<pais>UNITED STATES OF AMERICA (USA)</pais>
					<grupoId>1</grupoId>
					<grupo>Acción Ordinaria</grupo>
					<codigo>703</codigo>
					<nombre>APPLIED MICRO CIRCUITS CORP.</nombre>
					<precioActual>0.00</precioActual>
					<otrosConceptos>
						<SdtsBTConcepto>
							<texto>Fecha de vencimiento.</texto>
							<valor>0.00</valor>
							<concepto>31/12/99</concepto>
						</SdtsBTConcepto>
					</otrosConceptos>
				</sBTTitulo>
				<sBTTitulo>
					<moneda>2222</moneda>
					<simbolo>USD</simbolo>
					<pais>UNITED STATES OF AMERICA (USA)</pais>
					<grupoId>1</grupoId>
					<grupo>Acción Ordinaria</grupo>
					<codigo>704</codigo>
					<nombre>APPLE COMPUTER INC.COM</nombre>
					<precioActual>0.00</precioActual>
					<otrosConceptos>
						<SdtsBTConcepto>
							<texto>Fecha de vencimiento.</texto>
							<valor>0.00</valor>
							<concepto>31/12/99</concepto>
						</SdtsBTConcepto>
					</otrosConceptos>
				</sBTTitulo>
         </sdtTitulo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>967</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTitulos.ObtenerValores</Servicio>
            <Fecha>2017-12-22</Fecha>
            <Requerimiento/>
            <Hora>12:26:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTitulos.ObtenerValoresResponse>
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
   "sdtTitulo": {
      "sBTTitulo": [
      {
         "moneda": 2222,
         "simbolo": "USD",
         "pais": "UNITED STATES OF AMERICA (USA)",
         "grupoId": 1,
         "grupo": "Acción Ordinaria",
         "codigo": 703,
         "nombre": "APPLIED MICRO CIRCUITS CORP.",
         "precioActual": 0,
         "otrosConceptos": {
            "SdtsBTConcepto": {
            "texto": "Fecha de vencimiento.",
            "valor": 0,
            "concepto": "31/12/99"
            }
         }
      },
      {
         "moneda": 2222,
         "simbolo": "USD",
         "pais": "UNITED STATES OF AMERICA (USA)",
         "grupoId": 1,
         "grupo": "Acción Ordinaria",
         "codigo": 704,
         "nombre": "APPLE COMPUTER INC.COM",
         "precioActual": 0,
         "otrosConceptos": {
            "SdtsBTConcepto": {
            "texto": "Fecha de vencimiento.",
            "valor": 0,
            "concepto": "31/12/99"
            }
         }
      }
      ]
   },
    "Erroresnegocio": {
      "BTErrorNegocio": []
    },
   "Btoutreq": {
      "Numero": "786",
      "Estado": "OK",
      "Servicio": "BTTitulos.ObtenerValores",
      "Fecha": "2017-12-15",
      "Requerimiento": "",
      "Hora": "16:35:22",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTTitulo', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código del título.' }, { Nombre: 'grupo', Tipo: 'String', Comentarios: 'Nombre del grupo.' }, { Nombre: 'grupoId', Tipo: 'Byte', Comentarios: 'Identificador del grupo.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del título.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Listado de otros conceptos.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'precioActual', Tipo: 'Double', Comentarios: 'Precio actual.' }, { Nombre: 'simbolo', Tipo: 'String', Comentarios: 'Símbolo de moneda.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
