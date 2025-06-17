import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerCdigosdeDomicilio',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCodigosdeDomicilioComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Codigos de Domicilio';
  description = `Metodo para obtener un listado de los codigos de domicilio ingresados en Bantotal.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerCodigosDeDomicilio';
  programa   = 'RBTPG212';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = [];
  inputData  = [];
  outputCols = ['sdtCodigos'];
  outputData = [{ Nombre: 'sdtCodigos', Tipo: '[sBTCodigoDomicilio](#sbtcodigodomicilio)', Comentarios: 'Listado de codigos de domicilio.' }];
  errorCols  = ['30011'];
  errors     = [{ Codigo: '30011', Descripcion: 'No existen Codigos de domicilio ingresados en el sistema.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerCodigosDeDomicilio>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>ccbe8f2e2434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerCodigosDeDomicilio>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerCodigosDeDomicilio' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
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
      <BTConfiguracionBantotal.ObtenerCodigosDeDomicilioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ccbe8f2e2434</Token>
         </Btinreq>
         <sdtCodigos>
            <codigoDomicilio>
               <descripcion>Legal</descripcion>
               <identificador>1</identificador>
            </codigoDomicilio>
            <codigoDomicilio>
               <descripcion>Particular</descripcion>
               <identificador>2</identificador>
            </codigoDomicilio>
            <codigoDomicilio>
               <descripcion>Laboral</descripcion>
               <identificador>3</identificador>
            </codigoDomicilio>
            <codigoDomicilio>
               <descripcion>Correspondencia 1</descripcion>
               <identificador>4</identificador>
            </codigoDomicilio>
            <codigoDomicilio>
               <descripcion>Correspondencia 2</descripcion>
               <identificador>5</identificador>
            </codigoDomicilio>
            <codigoDomicilio>
               <descripcion>Leasing Corresponden</descripcion>
               <identificador>6</identificador>
            </codigoDomicilio>
            <codigoDomicilio>
               <descripcion>Migración</descripcion>
               <identificador>50</identificador>
            </codigoDomicilio>
            <codigoDomicilio>
               <descripcion>Factoring (Ver BGL)</descripcion>
               <identificador>97</identificador>
            </codigoDomicilio>
            <codigoDomicilio>
               <descripcion>Migración-Particular</descripcion>
               <identificador>98</identificador>
            </codigoDomicilio>
            <codigoDomicilio>
               <descripcion>Migración-Call Cente</descripcion>
               <identificador>99</identificador>
            </codigoDomicilio>
         </sdtCodigos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8514</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerCodigosDeDomicilio</Servicio>
            <Fecha>2019-05-09</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:43:07</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerCodigosDeDomicilioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"sdtCodigos": {
		"codigoDomicilio": [
			{
				"descripcion": "Legal",
				"identificador": "1"
			},
			{
				"descripcion": "Particular",
				"identificador": "2"
			},
			{
				"descripcion": "Laboral",
				"identificador": "3"
			},
			{
				"descripcion": "Correspondencia 1",
				"identificador": "4"
			},
			{
				"descripcion": "Correspondencia 2",
				"identificador": "5"
			},
			{
				"descripcion": "Leasing Corresponden",
				"identificador": "6"
			},
			{
				"descripcion": "Migración",
				"identificador": "50"
			},
			{
				"descripcion": "Factoring (Ver BGL)",
				"identificador": "97"
			},
			{
				"descripcion": "Migración-Particular",
				"identificador": "98"
			},
			{
				"descripcion": "Migración-Call Cente",
				"identificador": "99"
			}
		]
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTConfiguracionBantotal.ObtenerCodigosDeDomicilio",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion de codigo de domicilio.' }, { Nombre: 'identificador', Tipo: 'Long', Comentarios: 'Identificador de codigo de domicilio.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
