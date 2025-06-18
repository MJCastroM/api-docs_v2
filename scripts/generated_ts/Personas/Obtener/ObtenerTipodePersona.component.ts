import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTipodePersona',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTipodePersonaComponent1750268697629 {
  pageTitle        = 'Obtener Tipo de Persona';
  description      = `Método para obtener el tipo de una persona (Física o Jurídica).`;
  pubName    = 'BTPersonas.ObtenerTipoDePersona';
  programa   = 'RBTPG268';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  outputData = [{ Nombre: 'tipoPersona', Tipo: 'String', Comentarios: 'Tipo de Persona. (F/J)' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de persona.' }, { Codigo: '30013', Descripcion: 'No existe registro para el identificador único.' }, { Codigo: '40001', Descripcion: 'La persona no existe.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerTipoDePersona>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>861c3148934A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>61</bts:personaUId>
      </bts:BTPersonas.ObtenerTipoDePersona>
   </soapenv:Body>
</soapenv:Envelope>`, json: `` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerTipoDePersonaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>861c3148934A8B5C60A82434</Token>
         </Btinreq>
		 <tipoPersona>F</tipoPersona>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>7881</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerTipoDePersona</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-01-10</Fecha>
            <Hora>10:11:44</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerTipoDePersonaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `` }
  };

  structuredTypes = [];
}
