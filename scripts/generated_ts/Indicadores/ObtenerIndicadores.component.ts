import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerIndicadores',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerIndicadoresComponent {
  pageTitle = 'Obtener Indicadores';
  description = `Metodo para obtener los indicadores por agrupador.`;
  pubName    = 'BTIndicadores.ObtenerIndicadores';
  programa   = 'RBTPG702';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'agrupadorId', Tipo: 'Int', Comentarios: 'Identificador de agrupador.' }];
  outputData = [{ Nombre: 'sdtIndicadores', Tipo: '[sBTIndicador](#sbtindicador)', Comentarios: 'Listado de indicadores.' }];
  errors     = [{ Codigo: '40001', Descripcion: 'No existen Indicadores.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTIndicadores.ObtenerIndicadores>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>?</bts:Requerimiento>
         </bts:Btinreq>
         <bts:agrupadorId>100</bts:agrupadorId>
      </bts:BTIndicadores.ObtenerIndicadores>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerIndicadores' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
   "Btinreq": {
      "Device": 1,
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7",
      "Usuario": "INSTALADOR",
      "Requerimiento": "?"
   },
   "agrupadorId": 100
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTIndicadores.ObtenerIndicadoresResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>?</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>959C2E0AEF210ABC0D8AA8F7</Token>
         </Btinreq>
         <sdtIndicadores>
            <sBTIndicador>
               <descripcion>Condiciones generales</descripcion>
               <codigo>105</codigo>
            </sBTIndicador>
            <sBTIndicador>
               <descripcion>Información de Cotizaciones</descripcion>
               <codigo>106</codigo>
            </sBTIndicador>
         </sdtIndicadores>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11989</Numero>
            <Estado>OK</Estado>
            <Servicio>BTIndicadores.ObtenerIndicadores</Servicio>
            <Requerimiento>?</Requerimiento>
            <Fecha>2023-05-22</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>14:45:13</Hora>
         </Btoutreq>
      </BTIndicadores.ObtenerIndicadoresResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
   "Btinreq": {
      "Device": 1,
      "Usuario": "INSTALADOR",
      "Requerimiento": "?",
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7"
   },
   "sdtIndicadores": {
      "sBTIndicador": [
      {
         "descripcion": "Condiciones generales",
         "codigo": 105
      },
      {
         "descripcion": "Información de Cotizaciones",
         "codigo": 106
      }
      ]
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": 11989,
      "Estado": "OK",
      "Servicio": "BTIndicadores.ObtenerIndicadores",
      "Requerimiento": "?",
      "Fecha": "2023-05-22",
      "Canal": "BTDIGITAL",
      "Hora": "14:45:13"
   }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTIndicador', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Identificador de indicador.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion del indicador.' }] }];
}
