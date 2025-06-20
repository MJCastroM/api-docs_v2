import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarDomicilio',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarDomicilioComponent1750446218208 {
  pageTitle        = 'Agregar Domicilio';
  description      = `Método para agregar un domicilio a un cliente.`;
  pubName    = 'BTClientes.AgregarDomicilio';
  programa   = 'RBTPG239';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'domicilio', Tipo: '[sBTDomicilioCompleto](#sbtdomiciliocompleto)', Comentarios: 'Datos del domicilio.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la cuenta.' }, { Codigo: '30006', Descripcion: 'No existe registro con el identificador indicado.' }, { Codigo: '40001', Descripcion: 'Código de domicilio no válido.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.AgregarDomicilio>
		<bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>da17de64124A834</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
		</bts:Btinreq>
		<bts:clienteUId>21</bts:clienteUId>
		<bts:domicilio>
			<bts:agrupador1Id>1</bts:agrupador1Id>
			<bts:coloniaId>3</bts:coloniaId>
			<bts:departamento></bts:departamento>
			<bts:agrupador5></bts:agrupador5>
			<bts:agrupador4></bts:agrupador4>
			<bts:agrupador3Id>1</bts:agrupador3Id>
			<bts:agrupador3></bts:agrupador3>
			<bts:barrio></bts:barrio>
			<bts:detalleUbicacion></bts:detalleUbicacion>
			<bts:agrupador2></bts:agrupador2>
			<bts:agrupador1></bts:agrupador1>
			<bts:agrupador5Id>3</bts:agrupador5Id>
			<bts:ubicacionDesde></bts:ubicacionDesde>
			<bts:tipoDomicilio></bts:tipoDomicilio>
			<bts:direccion></bts:direccion>
			<bts:colonia></bts:colonia>
			<bts:paisId>845</bts:paisId>
			<bts:tipoVivienda></bts:tipoVivienda>
			<bts:pais></bts:pais>
			<bts:agrupador2Id>2</bts:agrupador2Id>
			<bts:codigoPostal>7852</bts:codigoPostal>
			<bts:tipoViviendaId>1</bts:tipoViviendaId>
			<bts:agrupador4Id>1</bts:agrupador4Id>
			<bts:barrioId>2</bts:barrioId>
			<bts:localidad></bts:localidad>
			<bts:localidadId>2</bts:localidadId>
			<bts:tipoDomicilioId>1</bts:tipoDomicilioId>
			<bts:departamentoId>1</bts:departamentoId>
		</bts:domicilio>
      </bts:BTClientes.AgregarDomicilio>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?AgregarDomicilio\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"clienteUId":"21",
	"domicilio": {
      "agrupador1Id": 1,
      "coloniaId": 3,
      "departamento": "",
      "agrupador5": "",
      "agrupador4": "",
      "agrupador3Id": 1,
      "agrupador3": "",
      "barrio": "",
      "detalleUbicacion": "",
      "agrupador2": "",
      "agrupador1": "",
      "agrupador5Id": 3,
      "ubicacionDesde": "",
      "tipoDomicilio": "",
      "direccion": "",
      "colonia": "",
      "paisId": 845,
      "tipoVivienda": "",
      "pais": "",
      "agrupador2Id": 2,
      "codigoPostal": 7852,
      "tipoViviendaId": 1,
      "agrupador4Id": 1,
      "barrioId": 2,
      "localidad": "",
      "localidadId": 2,
      "tipoDomicilioId": 1,
      "departamentoId": 1
   },	 
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.AgregarDomicilioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>da17de64124A834</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8439</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.AgregarDomicilio</Servicio>
            <Fecha>2019-05-07</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>18:31:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.AgregarDomicilioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTClientes.AgregarDomicilio",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDomicilioCompleto', fields: [{ Nombre: 'agrupador1', Tipo: 'String', Comentarios: 'Nombre agrupador 1.' }, { Nombre: 'agrupador1Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 1.' }, { Nombre: 'agrupador2', Tipo: 'String', Comentarios: 'Nombre agrupador 2.' }, { Nombre: 'agrupador2Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 1.' }, { Nombre: 'agrupador3', Tipo: 'String', Comentarios: 'Nombre agrupador 3.' }, { Nombre: 'agrupador3Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 3.' }, { Nombre: 'agrupador4', Tipo: 'String', Comentarios: 'Nombre agrupador 4.' }, { Nombre: 'agrupador4Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 4.' }, { Nombre: 'agrupador5', Tipo: 'String', Comentarios: 'Nombre agrupador 5.' }, { Nombre: 'agrupador5Id', Tipo: 'Short', Comentarios: 'Identificador agrupador 1.' }, { Nombre: 'barrio', Tipo: 'String', Comentarios: 'Nombre del barrio.' }, { Nombre: 'barrioId', Tipo: 'int', Comentarios: 'Identificador del barrio.' }, { Nombre: 'codigoPostal', Tipo: 'String', Comentarios: 'Código postal.' }, { Nombre: 'colonia', Tipo: 'String', Comentarios: 'Colonia.' }, { Nombre: 'coloniaId', Tipo: 'int', Comentarios: 'Identificador de la colonia.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Nombre del departamento.' }, { Nombre: 'departamentoId', Tipo: 'int', Comentarios: 'Identificador del departamento.' }, { Nombre: 'detalleUbicacion', Tipo: 'String', Comentarios: 'Detalle de la ubicación.' }, { Nombre: 'direccion', Tipo: 'String', Comentarios: 'Dirección.' }, { Nombre: 'localidad', Tipo: 'String', Comentarios: 'Nombre de la localidad.' }, { Nombre: 'localidadId', Tipo: 'int', Comentarios: 'Identificador de la localidad.' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador del país.' }, { Nombre: 'tipoDomicilio', Tipo: 'String', Comentarios: 'Descripción del tipo de domicilio.' }, { Nombre: 'tipoDomicilioId', Tipo: 'Byte', Comentarios: 'Identificador del tipo de domicilio.' }, { Nombre: 'tipoVivienda', Tipo: 'String', Comentarios: 'Descripción del tipo de vivienda.' }, { Nombre: 'tipoViviendaId', Tipo: 'String', Comentarios: 'Identificador del tipo de vivienda.' }, { Nombre: 'ubicacionDesde', Tipo: 'Date', Comentarios: 'Fecha desde que reside en ese domicilio.' }] }];
}
