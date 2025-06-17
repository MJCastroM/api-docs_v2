import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerIntegrantesPersonaJurdica',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerIntegrantesPersonaJuridicaComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Integrantes Persona Juridica';
  description = `Metodo para obtener un listado de los integrantes de una persona juridica.`;
  pubName    = 'BTPersonas.ObtenerIntegrantesPersonaJuridica';
  programa   = 'RBTPG385';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['personaUId'];
  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }];
  outputCols = ['sdtIntegrantesJuridicos'];
  outputData = [{ Nombre: 'sdtIntegrantesJuridicos', Tipo: '[sBTIntegranteJuridico](#sbtintegrantejuridico)', Comentarios: 'Listado de integrantes juridicos.' }];
  errorCols  = ['30001', '40001'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio identificador de persona.' }, { Codigo: '40001', Descripcion: 'La persona juridica no existe.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerIntegrantesPersonaJuridica>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>3214436424A8B5C60A82434C</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:personaUId>10017</bts:personaUId>
      </bts:BTPersonas.ObtenerIntegrantesPersonaJuridica>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerIntegrantesPersonaJuridica' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "bc8b678bc44A8B5C60A82434"
    },
    "personaUId": 10017,
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerIntegrantesPersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>3214436424A8B5C60A82434C</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtIntegrantesJuridicos>
            <SdtsBTIntegranteJuridico>
               <paisId>845</paisId>
               <pais>URUGUAY</pais>
               <tipoDocumentoId>1</tipoDocumentoId>
               <tipoDocumento>Cédula Identidad</tipoDocumento>
               <nroDocumento>27928980</nroDocumento>
               <nombre>PRANKA VISENTIN ERIKA</nombre>
               <vinculoId>1</vinculoId>
               <vinculo>Presidente</vinculo>
               <participacion>0.0000</participacion>
               <personaUId>1</personaUId>
            </SdtsBTIntegranteJuridico>
         </sdtIntegrantesJuridicos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ObtenerIntegrantesPersonaJuridica</Servicio>
            <Fecha>2022-05-31</Fecha>
            <Hora>16:29:14</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8862</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ObtenerIntegrantesPersonaJuridicaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "c2cfd09eff4A8B5C60A82434"
    },
    "sdtIntegrantesJuridicos": {
        "SdtsBTIntegranteJuridico": {
        "paisId": "845",
        "pais": "URUGUAY",
        "tipoDocumentoId": "1",
        "tipoDocumento": "Cédula Identidad",
        "nroDocumento": "27928980",
        "nombre": "PRANKA VISENTIN ERIKA",
        "vinculoId": "1",
        "vinculo": "Presidente",
        "participacion": "0.0000",
        "personaUId": "1"
        }
    },
    "Erroresnegocio": {
    },
    "Btoutreq": {
        "Numero": "839",
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerIntegrantesPersonaJuridica",
        "Requerimiento": "1",
        "Fecha": "2022-05-12",
        "Hora": "15:35:54",
        "Canal": "BTDIGITAL"
    }
}` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de la persona.' }, { Nombre: 'nroDocumento', Tipo: 'String', Comentarios: 'Numero de documento.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del pais.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del pais.' }, { Nombre: 'participacion', Tipo: 'Double', Comentarios: 'Porcentaje de participacion del integrante.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'tipoDocumento', Tipo: 'String', Comentarios: 'Nombre del tipo de documento.' }, { Nombre: 'tipoDocumentoId', Tipo: 'Short', Comentarios: 'Identificador del tipo de documento.' }, { Nombre: 'vinculo', Tipo: 'String', Comentarios: 'Descripcion del vinculo.' }, { Nombre: 'vinculoId', Tipo: 'Short', Comentarios: 'Identificador de vinculo.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
