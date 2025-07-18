import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ActualizarFATCA',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarFATCAComponent1751987198300 {
  pageTitle        = 'Actualizar FATCA';
  description      = `Método para modificar la información FATCA de una persona.`;
  pubName    = 'BTPersonas.ActualizarFATCA';
  programa   = 'RBTPCO11';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'sdtInformacionFATCA', Tipo: '[sBTPCOInformacionFATCA](#sbtpcoinformacionfatca)', Comentarios: 'Datos FATCA de la persona.' }];
  outputData = [{ Nombre: 'resultado', Tipo: 'String', Comentarios: 'Resultado FATCA.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió identificador de persona.' }, { Código: '30002', Descripción: 'Error - Datos duplicados.' }, { Código: '40001', Descripción: 'Debe ingresar al menos una Residencia Fiscal.' }, { Código: '40002', Descripción: 'El país [Número de identificador] ingresado no es válido.' }, { Código: '40004', Descripción: 'No se puede ingresar residencias fiscales.' }, { Código: '40005', Descripción: 'No existe el registro.' }, { Código: '40006', Descripción: 'No existe el país indicado.' }, { Código: '40007', Descripción: 'No existe el tipo de documento indicado.' }, { Código: '40007', Descripción: 'No debe ingresar correlativo para residencia.' }, { Código: '40007', Descripción: 'Se ingresó la misma residencia dos veces.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ActualizarFATCA>
         <bts:Btinreq>
            <bts:Token>042638a184CD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>42</bts:personaUId>
         <bts:sdtInformacionFATCA>
            <bts:ingresoBrutoEEUU>N</bts:ingresoBrutoEEUU>
            <bts:residenciasFiscales>
               <bts:sBTPCOResidenciaFiscal>
                  <bts:paisId></bts:paisId>
                  <bts:pais></bts:pais>
                  <bts:codigoTIN></bts:codigoTIN>
                  <bts:correlativo></bts:correlativo>
               </bts:sBTPCOResidenciaFiscal>
            </bts:residenciasFiscales>
            <bts:permanencia183Dias>N</bts:permanencia183Dias>
            <bts:tieneGreenCard>N</bts:tieneGreenCard>
            <bts:residenciaMasPaises>N</bts:residenciaMasPaises>
            <bts:codigoTIN>ABCDEF</bts:codigoTIN>
            <bts:pagoFuenteEEUU>N</bts:pagoFuenteEEUU>
         </bts:sdtInformacionFATCA>
      </bts:BTPersonas.ActualizarFATCA>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarFATCA \
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
	"personaUId": "42",
	"sdtInformacionFATCA": {
	  "ingresoBrutoEEUU": "N",
	  "permanencia183Dias": "N",
	  "tieneGreenCard": "N",
	  "residenciaMasPaises": "N",
	  "codigoTIN": "ABCDEF",
	  "pagoFuenteEEUU": "N",
	  "residenciasFiscales": {
		"sBTPCOResidenciaFiscal": {
		}
	  },
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ActualizarFATCAResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>042638a184CD285A89A23FBE</Token>
         </Btinreq>
         <resultado>NON US Person</resultado>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2064</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ActualizarFATCA</Servicio>
            <Fecha>2020-03-10</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>07:31:11</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ActualizarFATCAResponse>
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
   "resultado": "NON US Person",
   "Btoutreq": {
      "Numero": "2064",
      "Estado": "OK",
      "Servicio": "BTPersonas.ActualizarFATCA",
      "Requerimiento": "1",
      "Fecha": "2020-03-10",
      "Canal": "BTDIGITAL",
      "Hora": "07:31:11"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPCOInformacionFATCA', fields: [{ Nombre: 'codigoTIN', Tipo: 'String', Comentarios: 'Código TIN.' }, { Nombre: 'ingresoBrutoEEUU', Tipo: 'String', Comentarios: 'Recibe cualquier ingreso bruto procedente de una fuente en los EEUU (S/N).' }, { Nombre: 'pagoFuenteEEUU', Tipo: 'String', Comentarios: 'Recibe cualquier pago proveniente de fuentes dentro de los EEUU (S/N).' }, { Nombre: 'permanencia183Dias', Tipo: 'String', Comentarios: 'Permanencia de más de 183 días en el último año (S/N).' }, { Nombre: 'residenciaMasPaises', Tipo: 'String', Comentarios: 'Residencia en más países.' }, { Nombre: 'residenciasFiscales', Tipo: '[sBTPCOResidenciasFiscales](#sbtpcoresidenciasfiscales)', Comentarios: 'Listado de residencias.' }, { Nombre: 'tieneGreenCard', Tipo: 'String', Comentarios: 'Poseedor de la tarjeta verde o "Green Card" de los EEUU (S/N).' }] }, { typeName: 'sBTPCOResidenciasFiscales', fields: [{ Nombre: 'codigoTIN', Tipo: 'String', Comentarios: 'Código TIN.' }, { Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Número de correlativo.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador de país.' }] }];
}
