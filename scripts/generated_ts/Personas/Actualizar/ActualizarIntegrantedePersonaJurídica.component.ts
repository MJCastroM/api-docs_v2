import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ActualizarIntegrantedePersonaJurdica',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarIntegrantedePersonaJuridicaComponent {
  // Cabecera e info-card
  pageTitle = 'Actualizar Integrante de Persona Juridica';
  description = `Metodo para actualizar un integrante de una persona juridica.`;
  pubName    = 'BTPersonas.ActualizarIntegrantePersonaJuridica';
  programa   = 'RBTPG280';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['personaJuridicaUId', 'sdtIntegranteAlta', 'modo'];
  inputData  = [{ Nombre: 'personaJuridicaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona juridica.' }, { Nombre: 'sdtIntegranteAlta', Tipo: '[sBTIntegranteJuridicoAlta](#sbtintegrantejuridicoalta)', Comentarios: 'Datos de la persona fisica integrante de la persona juridica indicada.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo 'UP1' para este metodo].' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '30002', '30003', '40001', '40003', '40004', '40005', '40006', '40007', '40008', '40009', '40010'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio identificador unico de persona juridica.' }, { Codigo: '30002', Descripcion: 'No se recibio identificador unico de integrante de persona juridica.' }, { Codigo: '30003', Descripcion: 'No se recibio identificador de vinculo del integrante de persona juridica.' }, { Codigo: '40001', Descripcion: 'La sumatoria de porcentajes asociados a los integrantes de la persona juridica es mayor a 100%.' }, { Codigo: '40003', Descripcion: 'Debe ingresar el % de participacion del accionista.' }, { Codigo: '40004', Descripcion: 'El % de Participacion no puede ser mayor al 100%.' }, { Codigo: '40005', Descripcion: 'Si la persona no es Accionista tiene que haber sido ingresado con Alta Normal para poder integrar a la persona.' }, { Codigo: '40006', Descripcion: 'Debe ingresar al menos un Representante Legal.' }, { Codigo: '40007', Descripcion: 'No se puede cambiar el vinculo, ya que es el unico Representante Legal.' }, { Codigo: '40008', Descripcion: 'La persona a vincular no puede ser la misma.' }, { Codigo: '40009', Descripcion: 'No puede asociar una persona juridica como representante legal.' }, { Codigo: '40010', Descripcion: 'No existe el identificador de vinculo ingresado.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ActualizarIntegrantePersonaJuridica>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>IN</bts:Usuario>
            <bts:Token>14298073CD285A89A23FBE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:personaJuridicaUId>2</bts:personaJuridicaUId>
         <bts:sdtIntegranteAlta>
             <bts:personaUId>1</bts:personaIntegranteUId>
             <bts:vinculoId>1</bts:vinculoId>
             <bts:participacion>50</bts:participacion>
         </bts:sdtIntegranteAlta>
      </bts:BTPersonas.ActualizarIntegrantePersonaJuridica>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarIntegrantePersonaJuridica' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	 "Btinreq": {
		"Canal": "BTDIGITAL",
		"Requerimiento": "1",
		"Usuario": "IN",
		"Token": "14298073CD285A89A23FBE",
		"Device": "MC"
	 },
	 "personaJuridicaUId": "2",
	 "sdtIntegranteAlta": {
		 "personaUId": "1",
		 "vinculoId": "1",
		 "participacion": "50",
	 }
   }'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ActualizarIntegrantePersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1429807CD285A89A23FBE</Token>
            <Device>MC</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPersonas.ActualizarIntegrantePersonaJuridica</Servicio>
            <Fecha>2020-11-02</Fecha>
            <Hora>12:06:37</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10140</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.ActualizarIntegrantePersonaJuridicaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
	"Btinreq": {
		"Canal": "BTDIGITAL",
		"Requerimiento": "1",
		"Usuario": "IN",
		"Token": "14298073CD285A89A23FBE",
		"Device": "MC"
	},
	"Erroresnegocio": null,
	"Btoutreq": {
		"Canal": "BTDIGITAL",
		"Servicio": "BTPersonas.ActualizarIntegrantePersonaJuridica",
		"Fecha": "2020-11-02",
		"Hora": "12:06:37",
		"Requerimiento": "1",
		"Numero": "10140",
		"Estado": "OK"
	}
}` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'participacion', Tipo: 'Double', Comentarios: 'Porcentaje de participacion del integrante.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'vinculoId', Tipo: 'Short', Comentarios: 'Identificador de vinculo.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
