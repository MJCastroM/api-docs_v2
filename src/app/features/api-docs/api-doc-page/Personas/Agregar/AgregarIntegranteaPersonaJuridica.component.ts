import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarIntegranteaPersonaJuridica',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarIntegranteaPersonaJuridicaComponent1750258525319 {
  pageTitle        = 'Agregar Integrante a Persona Jurídica';
  description      = `Método para agregar un integrante a una persona jurídica.`;
  pubName          = 'Agregar Integrante a Persona Jurídica';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaJuridicaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona jurídica.' }, { Nombre: 'sdtIntegranteAlta', Tipo: '[sBTIntegranteJuridicoAlta](#sbtintegrantejuridicoalta)', Comentarios: 'Datos de la persona física integrante de la persona jurídica indicada.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'INS\' para este método].' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador único de persona jurídica.' }, { Codigo: '30002', Descripcion: 'No se recibió identificador único de integrante de persona jurídica.' }, { Codigo: '30003', Descripcion: 'No se recibió identificador de vínculo del integrante de persona jurídica.' }, { Codigo: '40001', Descripcion: 'La sumatoria de porcentajes asociados a los integrantes de la persona jurídica es mayor al 100 %.' }, { Codigo: '40003', Descripcion: 'Debe ingresar el % de participación del accionista.' }, { Codigo: '40004', Descripcion: 'El % de participación no puede ser mayor al 100 %.' }, { Codigo: '40005', Descripcion: 'Si la persona no es Accionista, tiene que haber sido ingresada con Alta Normal para poder integrar a la persona.' }, { Codigo: '40006', Descripcion: 'Debe ingresar al menos un representante legal.' }, { Codigo: '40007', Descripcion: 'No se puede cambiar el vínculo, ya que es el único Representante Legal.' }, { Codigo: '40008', Descripcion: 'La persona a vincular no puede ser la misma.' }, { Codigo: '40009', Descripcion: 'No puede asociar una persona jurídica como representante legal.' }, { Codigo: '40010', Descripcion: 'No existe el identificador de vínculo ingresado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.AgregarIntegrantePersonaJuridica>
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
      </bts:BTPersonas.AgregarIntegrantePersonaJuridica>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarIntegrantePersonaJuridica\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
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
   }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.AgregarIntegrantePersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <Servicio>BTPersonas.AgregarIntegrantePersonaJuridica</Servicio>
            <Fecha>2020-11-02</Fecha>
            <Hora>12:06:37</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10140</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPersonas.AgregarIntegrantePersonaJuridicaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{ 
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
		"Servicio": "BTPersonas.AgregarIntegrantePersonaJuridica", 
		"Fecha": "2020-11-02", 
		"Hora": "12:06:37", 
		"Requerimiento": "1", 
		"Numero": "10140", 
		"Estado": "OK" 
	} 
}` }
  };

  structuredTypes = [{ typeName: 'sBTIntegranteJuridicoAlta', fields: [{ Nombre: 'participacion', Tipo: 'Double', Comentarios: 'Porcentaje de participación del integrante.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'vinculoId', Tipo: 'Short', Comentarios: 'Identificador de vínculo.' }] }];
}
