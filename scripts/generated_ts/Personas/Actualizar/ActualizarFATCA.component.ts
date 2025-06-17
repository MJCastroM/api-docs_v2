import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ActualizarFATCA',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarFATCAComponent {
  // Cabecera e info-card
  pageTitle = 'Actualizar FATCA';
  description = `Metodo para modificar la informacion FATCA de una persona.`;
  pubName    = 'BTPersonas.ActualizarFATCA';
  programa   = 'RBTPCO11';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['personaUId', 'sdtInformacionFATCA'];
  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'sdtInformacionFATCA', Tipo: '[sBTPCOInformacionFATCA](#sbtpcoinformacionfatca)', Comentarios: 'Datos FATCA de la persona.' }];
  outputCols = ['resultado'];
  outputData = [{ Nombre: 'resultado', Tipo: 'String', Comentarios: 'Resultado FATCA.' }];
  errorCols  = ['30001', '30002', '40001', '40002', '40004', '40005', '40006', '40007', '40007', '40007'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio identificador de persona.' }, { Codigo: '30002', Descripcion: 'Error - Datos duplicados.' }, { Codigo: '40001', Descripcion: 'Debe ingresar al menos una Residencia Fiscal.' }, { Codigo: '40002', Descripcion: 'El pais [Numero de identificador] ingresado no es valido.' }, { Codigo: '40004', Descripcion: 'No se puede ingresar residencias fiscales.' }, { Codigo: '40005', Descripcion: 'No existe el registro.' }, { Codigo: '40006', Descripcion: 'No existe el pais indicado.' }, { Codigo: '40007', Descripcion: 'No existe el tipo de documento indicado.' }, { Codigo: '40007', Descripcion: 'No debe ingresar correlativo para residencia.' }, { Codigo: '40007', Descripcion: 'Se ingreso la misma residencia dos veces.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`, json: `curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarFATCA \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
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
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
</SOAP-ENV:Envelope>`, json: `'{
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
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'codigoTIN', Tipo: 'String', Comentarios: 'Codigo TIN.' }, { Nombre: 'ingresoBrutoEEUU', Tipo: 'String', Comentarios: 'Recibe cualquier ingreso bruto procedente de una fuente en los EEUU (S/N).' }, { Nombre: 'pagoFuenteEEUU', Tipo: 'String', Comentarios: 'Recibe cualquier pago proveniente de fuentes dentro de los EEUU (S/N).' }, { Nombre: 'permanencia183Dias', Tipo: 'String', Comentarios: 'Permanencia de mas de 183 dias en el ultimo ano (S/N).' }, { Nombre: 'residenciaMasPaises', Tipo: 'String', Comentarios: 'Residencia en mas paises.' }, { Nombre: 'residenciasFiscales', Tipo: '[sBTPCOResidenciasFiscales](#sbtpcoresidenciasfiscales)', Comentarios: 'Listado de residencias.' }, { Nombre: 'tieneGreenCard', Tipo: 'String', Comentarios: 'Poseedor de la tarjeta verde o "Green Card" de los EEUU (S/N).' }, { Nombre: '### sBTPCOResidenciasFiscales', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTPCOInformacionFATCA son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'codigoTIN', Tipo: 'String', Comentarios: 'Codigo TIN.' }, { Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Numero de correlativo.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del pais.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador de pais.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
