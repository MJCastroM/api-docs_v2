import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerOpcinGeneralPorModulo',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerOpcionGeneralPorModuloComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Opcion General Por Modulo';
  description = `Metodo para obtener los datos de una opcion general de un determinado modulo.`;
  pubName    = 'BTParametrosBase.ObtenerOpcionGeneralPorModulo';
  programa   = 'RBTPG443';
  scope      = 'Institucional';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['empresaId', 'modulo', 'codigo'];
  inputData  = [{ Nombre: 'empresaId', Tipo: 'Short', Comentarios: 'Codigo de empresa [Hidden].' }, { Nombre: 'modulo', Tipo: 'Int', Comentarios: 'Identificador de modulo Bantotal.' }, { Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Codigo de la opcion general de procesos.' }];
  outputCols = ['sdtOpcionGeneralModulo'];
  outputData = [{ Nombre: 'sdtOpcionGeneralModulo', Tipo: '[sBTOpcionGeneral](#sbtopciongeneral)', Comentarios: 'Datos de la opcion general de procesos.' }];
  errorCols  = ['30002', '30003', '40001', '40002'];
  errors     = [{ Codigo: '30002', Descripcion: 'No se recibio el modulo.' }, { Codigo: '30003', Descripcion: 'No se recibio identificador de opcion general.' }, { Codigo: '40001', Descripcion: 'El modulo ingresado no es correcto.' }, { Codigo: '40002', Descripcion: 'No se encontro registro para la opcion general ingresada.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTParametrosBase.ObtenerOpcionGeneralPorModulo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>47D750A861C4243EDE981344</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:modulo>21</bts:modulo>
         <bts:codigo>9</bts:codigo>
      </bts:BTParametrosBase.ObtenerOpcionGeneralPorModulo>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerOpcionGeneralPorModulo \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
    "Btinreq": {
      "Canal": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Device": "GP",
      "Requerimiento": "1",
      "Token": "200f0b8b654A8B5C60A82434"
    },
   "modulo": 21,
   "codigo": "2850"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTParametrosBase.ObtenerOpcionGeneralPorModuloResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>47D750A861C4243EDE981344</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtOpcionGeneralModulo>
            <identificador>9</identificador>
            <descripcion>Ajustar fecha fin de mes PCC3</descripcion>
            <valor>S</valor>
         </sdtOpcionGeneralModulo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTParametrosBase.ObtenerOpcionGeneralPorModulo</Servicio>
            <Fecha>2022-11-17</Fecha>
            <Hora>11:24:03</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>458</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTParametrosBase.ObtenerOpcionGeneralPorModuloResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `' 
{ 
    "Btinreq": { 
	  "Device": "GP", 
	  "Usuario": "INSTALADOR", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "47D750A861C4243EDE981344" 
	}, 
	"sdtOpcionGeneralModulo": { 
	  "descripcion": "Ajustar fecha fin de mes PCC3", 
	  "identificador": "9", 
	  "valor": "S" 
	}, 
	"Btoutreq": { 
	  "Numero": "109140", 
	  "Estado": "OK", 
	  "Servicio": "BTParametrosBase.ObtenerOpcionGeneralPorModulo", 
	  "Requerimiento": "1", 
	  "Fecha": "2020-11-24", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "13:29:43" 
	} 
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion de la opcion general de procesos.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Codigo de la opcion general de procesos.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de la opcion general de procesos (S/N).' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
