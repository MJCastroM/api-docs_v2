import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerPersonaJurdica',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPersonaJuridicaComponent {
  pageTitle = 'Obtener Persona Juridica';
  description = `Metodo para obtener la informacion de una persona juridica.`;
  pubName    = 'BTPersonas.ObtenerPersonaJuridica';
  programa   = 'RBTPG384';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }];
  outputData = [{ Nombre: 'personaJuridica', Tipo: '[sBTPersonaJuridica1](#sbtpersonajuridica1)', Comentarios: 'Datos de persona juridica.' }, { Nombre: 'sdtIntegrantesJuridicos', Tipo: '[sBTIntegranteJuridico](#sbtintegrantejuridico)', Comentarios: 'Listado de integrantes juridicos.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerPersonaJuridica>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>3578f1ef27CD285A89A23FBE</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>303</bts:personaUId>
      </bts:BTPersonas.ObtenerPersonaJuridica>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerPersonaJuridica' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
		"Device": "GP",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "1839023315CD285A89A23FBE"
	},
   "personaUId": "303"
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerPersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GP</Device>
            <Token>3578f1ef27CD285A89A23FBE</Token>
            <Requerimiento>1</Requerimiento>
         </Btinreq>
         <personaJuridica>
            <nroDocumento>214567892142</nroDocumento>
            <numeroPuerta>0</numeroPuerta>
            <nombreReducido>BANCO MODELO</nombreReducido>
            <paisDomicilio>URUGUAY</paisDomicilio>
            <razonSocial>BANCO MODELO</razonSocial>
            <departamento>Montevideo</departamento>
            <nroRegistro>78940</nroRegistro>
            <naturalezaJuridica>Sociedad Anónima</naturalezaJuridica>
            <barrio>Centro</barrio>
            <apartamento></apartamento>
            <tipoDocumentoId>2</tipoDocumentoId>
            <tipoActividadId>1</tipoActividadId>
            <piso></piso>
            <paisId>845</paisId>
            <fechaConstitucion>2007-08-22</fechaConstitucion>
            <actividad></actividad>
            <paisDomicilioId>845</paisDomicilioId>
            <pais>URUGUAY</pais>
            <codigoPostal></codigoPostal>
            <tipoActividad>Actividad Principal</tipoActividad>
            <barrioId>330</barrioId>
            <localidadId>10</localidadId>
            <localidad>Montevideo</localidad>
            <correoElectronico>1</correoElectronico>
            <actividadId>0</actividadId>
            <calle></calle>
            <naturalezaJuridicaId>1</naturalezaJuridicaId>
            <tipoDocumento>RUT</tipoDocumento>
            <departamentoId>10</departamentoId>
            <bts:telefonoFijo>3213342222</bts:telefonoFijo>
            <bts:piso>123</bts:piso>
         </personaJuridica>
         <sdtIntegrantesJuridicos>
            <SdtsBTIntegranteJuridico>
               <nroDocumento>27928980</nroDocumento>
               <vinculoId>1</vinculoId>
               <pais>URUGUAY</pais>
               <tipoDocumentoId>1</tipoDocumentoId>
               <participacion>100.00</participacion>
               <tipoDocumento>Cédula Identidad</tipoDocumento>
               <personaUId>141</personaUId>
               <paisId>845</paisId>
               <nombre>PRANKA VISENTIN ERIKA VERONICA</nombre>
               <vinculo>Presidente</vinculo>
            </SdtsBTIntegranteJuridico>
         </sdtIntegrantesJuridicos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Servicio>BTPersonas.ObtenerPersonaJuridica</Servicio>
            <Hora>14:57:38</Hora>
            <Numero>16624</Numero>
            <Fecha>2022-06-23</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Estado>BTS_PLAT_ERROR</Estado>
            <Requerimiento>1</Requerimiento>
         </Btoutreq>
      </BTPersonas.ObtenerPersonaJuridicaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "personaJuridica": {
        "nroDocumento": "214567892142",
        "numeroPuerta": "0",
        "nombreReducido": "BANCO MODELO",
        "paisDomicilio": "URUGUAY",
        "razonSocial": "BANCO MODELO",
        "departamento": "Montevideo",
        "nroRegistro": "78940",
        "naturalezaJuridica": "Sociedad Anónima",
        "barrio": "Centro",
        "apartamento": ,
        "tipoDocumentoId": "2",
        "tipoActividadId": "1",
        "piso": ,
        "paisId": "845",
        "fechaConstitucion": "2007-08-22",
        "actividad": ,
        "paisDomicilioId": "845",
        "pais": "URUGUAY",
        "codigoPostal": ,
        "tipoActividad": "Actividad Principal",
        "barrioId": "330",
        "localidadId": "10",
        "localidad": "Montevideo",
        "correoElectronico": "1",
        "actividadId": "0",
        "calle": ,
        "naturalezaJuridicaId": "1",
        "tipoDocumento": "RUT",
        "departamentoId": "10",
        "telefonoFijo": "3213342222",
        "piso": "123"
    },
    "sdtIntegrantesJuridicos": {
        "SdtsBTIntegranteJuridico": {
            "nroDocumento": "27928980",
            "vinculoId": "1",
            "pais": "URUGUAY",
            "tipoDocumentoId": "1",
            "participacion": "100.00",
            "tipoDocumento": "Cédula Identidad",
            "personaUId": "141",
            "paisId": "845",
            "nombre": "PRANKA VISENTIN ERIKA VERONICA",
            "vinculo": "Presidente"
        }
    },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "80",
      "Estado": "OK",
      "Servicio": "BTPersonas.ObtenerPersonasJuridicas",
      "Fecha": "2018-05-04",
      "Requerimiento": "1",
      "Hora": "15:54:29",
      "Canal": "BTDIGITAL"
   }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTPersonaJuridica1', fields: [{ Nombre: 'actividad', Tipo: 'String', Comentarios: 'Nombre de actividad.' }, { Nombre: 'actividadId', Tipo: 'Long', Comentarios: 'Identificador de actividad.' }, { Nombre: 'apartamento', Tipo: 'String', Comentarios: 'Apartamento.' }, { Nombre: 'barrio', Tipo: 'String', Comentarios: 'Nombre de barrio.' }, { Nombre: 'barrioId', Tipo: 'Int', Comentarios: 'Identificador de barrio.' }, { Nombre: 'calle', Tipo: 'String', Comentarios: 'Calle.' }, { Nombre: 'codigoPostal', Tipo: 'String', Comentarios: 'Codigo postal.' }, { Nombre: 'correoElectronico', Tipo: 'String', Comentarios: 'Correo electronico.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre de departamento.' }, { Nombre: 'departamentoId', Tipo: 'Int', Comentarios: 'Identificador de departamento.' }, { Nombre: 'fechaConstitucion', Tipo: 'Date', Comentarios: 'Fecha de constitucion.' }, { Nombre: 'localidad', Tipo: 'String', Comentarios: 'Nombre de localidad.' }, { Nombre: 'localidadId', Tipo: 'Int', Comentarios: 'Identificador de localidad.' }, { Nombre: 'naturalezaJuridica', Tipo: 'String', Comentarios: 'Nombre de naturaleza juridica.' }, { Nombre: 'naturalezaJuridicaId', Tipo: 'Short', Comentarios: 'Identificador de naturaleza juridica.' }, { Nombre: 'nombreReducido', Tipo: 'String', Comentarios: 'Nombre reducido.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Numero de documento.' }, { Nombre: 'nroRegistro', Tipo: 'Long', Comentarios: 'Numero de registro.' }, { Nombre: 'numeroPuerta', Tipo: 'String', Comentarios: 'Numero de puerta.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del pais.' }, { Nombre: 'paisDomicilio', Tipo: 'String', Comentarios: 'Nombre del pais de domicilio.' }, { Nombre: 'paisDomicilioId', Tipo: 'Short', Comentarios: 'Identificador del pais de domicilio.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del pais.' }, { Nombre: 'piso', Tipo: 'String', Comentarios: 'Piso.' }, { Nombre: 'razonSocial', Tipo: 'String', Comentarios: 'Razon social.' }, { Nombre: 'telefonoFijo', Tipo: 'String', Comentarios: 'Numero de telefono fijo.' }, { Nombre: 'tipoActividad', Tipo: 'String', Comentarios: 'Nombre de tipo de actividad.' }, { Nombre: 'tipoActividadId', Tipo: 'Long', Comentarios: 'Identificador de tipo de actividad.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }] }, { typeName: 'sBTIntegranteJuridico', fields: [{ Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de la persona.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Numero de documento.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del pais.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del pais.' }, { Nombre: 'participacion', Tipo: 'Double', Comentarios: 'Porcentaje de participacion del integrante.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }, { Nombre: 'vinculo', Tipo: 'String', Comentarios: 'Descripcion del vinculo.' }, { Nombre: 'vinculoId', Tipo: 'Short', Comentarios: 'Identificador de vinculo.' }] }];
}
