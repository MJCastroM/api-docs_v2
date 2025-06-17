import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerTiposAval',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTiposAvalComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Tipos Aval';
  description = `Metodo para obtener una lista de los tipos de aval.`;
  pubName    = 'BTMicrofinanzas.ObtenerTiposAval';
  programa   = 'RBTPG426';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = [];
  inputData  = [];
  outputCols = ['sdtTiposAval'];
  outputData = [{ Nombre: 'sdtTiposAval', Tipo: '[sBTTipoAval](#sbttipoaval)', Comentarios: 'Listado de tipos de aval.' }];
  errorCols  = [];
  errors     = [];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.ObtenerTiposAval>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>419385365CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
      </bts:BTMicrofinanzas.ObtenerTiposAval>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerTiposAval \
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
	}
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.ObtenerTiposAvalResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>419385365CD285A89A23FBEE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtTiposAval>
            <TipoAval>
               <codigo>1</codigo>
               <descripcion>Fiduciaria</descripcion>
            </TipoAval>
         </sdtTiposAval>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ObtenerTiposAval</Servicio>
            <Fecha>2019-09-17</Fecha>
            <Hora>12:20:32</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>135</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerTiposAvalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
        "sdtTiposAval": {
          "TipoAval": {
            "codigo": "1",
            "descripcion": "Fiduciaria"
          }
        },
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTMicrofinanzas.ObtenerTiposAval",
          "Fecha": "2019-09-17",
          "Hora": "12:20:32",
          "Requerimiento": "95",
          "Numero": "135",
          "Estado": "OK"
        }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Identificador de tipo de aval.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion de tipo de aval.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
