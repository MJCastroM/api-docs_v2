import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerVnculosdeConsanguinidad',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerVinculosdeConsanguinidadComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Vinculos de Consanguinidad';
  description = `Metodo para obtener un listado de los vinculos de consanguinidad registrados.`;
  pubName    = 'BTPersonas.ObtenerVinculosConsanguinidad';
  programa   = 'RBTPG395';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['tipo'];
  inputData  = [{ Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de vinculo [Hidden: Valor fijo 'C' para este metodo].' }];
  outputCols = ['sdtVinculos'];
  outputData = [{ Nombre: 'sdtVinculos', Tipo: '[sBTVinculo](#sbtvinculo)', Comentarios: 'Listado de vinculos.' }];
  errorCols  = ['40001'];
  errors     = [{ Codigo: '40001', Descripcion: 'No existen Vinculos ingresados en el sistema.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerVinculosConsanguinidad>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTPersonas.ObtenerVinculosConsanguinidad>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerVinculosConsanguinidad=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 0ccca369-0793-d62f-ebc0-3033cc750dad' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	}
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerVinculosConsanguinidadResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtVinculos>
            <sBTVinculo>
               <identificador>1</identificador>
               <descripcion>Madre</descripcion>
               <tipo>C</tipo>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>2</identificador>
               <descripcion>Padre</descripcion>
               <tipo>C</tipo>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>3</identificador>
               <descripcion>Hijo</descripcion>
               <tipo>C</tipo>
            </sBTVinculo>
            <sBTVinculo>
               <identificador>4</identificador>
               <descripcion>Abuelo</descripcion>
               <tipo>C</tipo>
            </sBTVinculo>
         </sdtVinculos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>828</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerVinculosConsanguinidad</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>18:47:35</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerVinculosConsanguinidadResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtVinculos": {
      "sBTVinculo": [
        {
          "identificador": "1",
          "descripcion": "Madre",
          "tipo": "C"
        },
        {
          "identificador": "2",
          "descripcion": "Padre",
          "tipo": "C"
        },
        {
          "identificador": "3",
          "descripcion": "Hijo",
          "tipo": "C"
        },
        {
          "identificador": "4",
          "descripcion": "Abuelo",
          "tipo": "C"
        }
      ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "827",
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerVinculosConsanguinidad",
        "Fecha": "2017-12-17",
        "Requerimiento": "",
        "Hora": "18:47:21",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion de vinculo.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador de vinculo.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de vinculo.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
