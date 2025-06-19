import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDatos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDatosComponent1750272791862 {
  pageTitle        = 'Obtener Datos';
  description      = `Método para obtener los datos de un producto de tarjeta de débito.`;
  pubName    = 'BTTarjetasDeDebito.ObtenerDatos';
  programa   = 'RBTPG016';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta.' }];
  outputData = [{ Nombre: 'sdtEntidadTarjetaDebito', Tipo: '[sBDTarjetaDebito](#sbdtarjetadebito)', Comentarios: 'Datos de tarjeta de débito.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de tarjeta.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.ObtenerDatos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:tarjetaUId>3</bts:tarjetaUId>
      </bts:BTTarjetasDeDebito.ObtenerDatos>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerDatos=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 8ab15c2a-49b2-bedc-bcdf-df8d950d94a9\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "tarjetaUId": 3
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtEntidadTarjetaDebito>
            <limites></limites>
            <paquete>N</paquete>
            <diasHastaVencimiento>2730</diasHastaVencimiento>
            <tarjetaUId>3</tarjetaUId>
            <estadoPlastico>ENTREGADO</estadoPlastico>
            <descPaquete/>
            <tipoTarjeta>MAESTRO NOMINADA</tipoTarjeta>
            <estadoTarjeta>Activa</estadoTarjeta>
            <numeroTarjeta>5010730101000000098</numeroTarjeta>
            <fechaVencimiento>2026-03-31</fechaVencimiento>
            <sucursal>Sucursal Beta</sucursal>
            <nombreTarjeta>PEREZ SOSA JUAN</nombreTarjeta>
         </sdtEntidadTarjetaDebito>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>936</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTarjetasDeDebito.ObtenerDatos</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:40:29</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerDatosResponse>
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
   "sdtEntidadTarjetaDebito": {
      "limites": {
         "sBDLimitesTarjeta.it": []
      },
      "paquete": "N",
      "diasHastaVencimiento": "2730",
      "tarjetaUId": "3",
      "estadoPlastico": "ENTREGADO",
      "descPaquete": "",
      "tipoTarjeta": "MAESTRO NOMINADA",
      "estadoTarjeta": "Activa",
      "numeroTarjeta": "5010730101000000098",
      "fechaVencimiento": "2026-03-31",
      "sucursal": "Sucursal Beta",
      "nombreTarjeta": "PEREZ SOSA JUAN"
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "937",
      "Estado": "OK",
      "Servicio": "BTTarjetasDeDebito.ObtenerDatos",
      "Fecha": "2017-12-21",
      "Requerimiento": "",
      "Hora": "17:41:23",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBDTarjetaDebito', fields: [{ Nombre: 'descPaquete', Tipo: 'String', Comentarios: 'Descripción de paquete.' }, { Nombre: 'diasHastaVencimiento', Tipo: 'Int', Comentarios: 'Días restantes para el vencimiento.' }, { Nombre: 'estadoPlastico', Tipo: 'String', Comentarios: 'Descripción de estado del plástico.' }, { Nombre: 'estadoTarjeta', Tipo: 'String', Comentarios: 'Descripción de estado de la tarjeta.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'limites', Tipo: '[sBDLimitesTarjeta](#sbdlimitestarjeta)', Comentarios: 'Listado de límites de la tarjeta.' }, { Nombre: 'nombreTarjeta', Tipo: 'String', Comentarios: 'Nombre de la tarjeta.' }, { Nombre: 'numeroTarjeta', Tipo: 'String', Comentarios: 'Número de tarjeta.' }, { Nombre: 'paquete', Tipo: 'String', Comentarios: '¿Tiene paquete? (S/N).' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta.' }, { Nombre: 'tipoTarjeta', Tipo: 'String', Comentarios: 'Tipo de tarjeta.' }, { Nombre: '### sBDLimitesTarjeta', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBDLimitesTarjeta son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Campo', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del límite.' }, { Nombre: 'limiteBandaMagnetica', Tipo: 'Double', Comentarios: 'Monto del límite por banda magnética.' }, { Nombre: 'limiteChip', Tipo: 'Double', Comentarios: 'Monto del límite por chip.' }, { Nombre: 'limiteNoPresencial', Tipo: 'Double', Comentarios: 'Monto del límite no presencial.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }] }];
}
