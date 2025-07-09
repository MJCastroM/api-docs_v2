import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerFATCA',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerFATCAComponent1751987198729 {
  pageTitle        = 'Obtener FATCA';
  description      = `Método para obtener la información FATCA de una persona.`;
  pubName    = 'BTPersonas.ObtenerFATCA';
  programa   = 'RBTPCO12';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  outputData = [{ Nombre: 'resultado', Tipo: 'String', Comentarios: 'Resultado FATCA.' }, { Nombre: 'sdtInformacionFATCA', Tipo: '[sBTPCOInformacionFATCA](#sbtpcoinformacionfatca)', Comentarios: 'Datos FATCA de la persona.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió identificador de persona.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerFATCA>
         <bts:Btinreq>
            <bts:Token>bbf6bf228fCD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>41</bts:personaUId>
      </bts:BTPersonas.ObtenerFATCA>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerFATCA \
-H \'cache-control: no-cache\' \
-H \'content-type: application/json\' \
-d \'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId": "41"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerFATCAResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>bbf6bf228fCD285A89A23FBE</Token>
         </Btinreq>
         <resultado>US Person</resultado>
         <sdtInformacionFATCA>
            <ingresoBrutoEEUU>N</ingresoBrutoEEUU>
            <residenciasFiscales>
               <sBTPCOResidenciaFiscal>
                  <paisId>53</paisId>
                  <pais>ARABIA SAUDITA</pais>
                  <codigoTIN>AAASSS</codigoTIN>
                  <correlativo>1</correlativo>
               </sBTPCOResidenciaFiscal>
               <sBTPCOResidenciaFiscal>
                  <paisId>845</paisId>
                  <pais>URUGUAY</pais>
                  <codigoTIN>UUUYYY</codigoTIN>
                  <correlativo>2</correlativo>
               </sBTPCOResidenciaFiscal>
            </residenciasFiscales>
            <permanencia183Dias>S</permanencia183Dias>
            <residenciaMasPaises>S</residenciaMasPaises>
            <tieneGreenCard>S</tieneGreenCard>
            <codigoTIN>ABCDEF</codigoTIN>
            <pagoFuenteEEUU>N</pagoFuenteEEUU>
         </sdtInformacionFATCA>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1729</Numero>
            <Servicio>BTPersonas.ObtenerFATCA</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-03-05</Fecha>
            <Hora>13:10:51</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerFATCAResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtInformacionFATCA": {
      "ingresoBrutoEEUU": "N",
      "permanencia183Dias": "S",
      "residenciaMasPaises": "S",
      "tieneGreenCard": "S",
      "codigoTIN": "ABCDEF",
      "pagoFuenteEEUU": "N",
      "residenciasFiscales": {
         "sBTPCOResidenciaFiscal": [
         {
            "paisId": "53",
            "pais": "ARABIA SAUDITA",
            "codigoTIN": "AAASSS",
            "correlativo": "1"
         },
         {
            "paisId": "845",
            "pais": "URUGUAY",
            "codigoTIN": "UUUYYY",
            "correlativo": "2"
         }
         ]
      },
   },
   "Btoutreq": {
      "Numero": "1729",
      "Estado": "OK",
      "Servicio": "BTPersonas.ObtenerFATCA",
      "Requerimiento": "1",
      "Fecha": "2020-03-05",
      "Canal": "BTDIGITAL",
      "Hora": "13:10:51"
   },
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPCOInformacionFATCA', fields: [{ Nombre: 'codigoTIN', Tipo: 'String', Comentarios: 'Código TIN.' }, { Nombre: 'ingresoBrutoEEUU', Tipo: 'String', Comentarios: 'Recibe cualquier ingreso bruto procedente de una fuente en los EEUU (S/N).' }, { Nombre: 'pagoFuenteEEUU', Tipo: 'String', Comentarios: 'Recibe cualquier pago proveniente de fuentes dentro de los EEUU (S/N).' }, { Nombre: 'permanencia183Dias', Tipo: 'String', Comentarios: 'Permanencia de más de 183 días en el último año (S/N).' }, { Nombre: 'residenciaMasPaises', Tipo: 'String', Comentarios: 'Residencia en más países.' }, { Nombre: 'residenciasFiscales', Tipo: '[sBTPCOResidenciasFiscales](#sbtpcoresidenciasfiscales)', Comentarios: 'Listado de residencias.' }, { Nombre: 'tieneGreenCard', Tipo: 'String', Comentarios: 'Poseedor de la tarjeta verde o "Green Card" de los EEUU (S/N).' }] }, { typeName: 'sBTPCOResidenciasFiscales', fields: [{ Nombre: 'codigoTIN', Tipo: 'String', Comentarios: 'Código TIN.' }, { Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Número de correlativo.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador de país.' }] }];
}
