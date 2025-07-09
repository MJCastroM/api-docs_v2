import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerEmpresa',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerEmpresaComponent1751987196567 {
  pageTitle        = 'Obtener Empresa';
  description      = `Método para obtener información de la empresa.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerEmpresa';
  programa   = 'RBTPG320';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtEmpresa', Tipo: '[sBTEmpresa](#sbtempresa)', Comentarios: 'Datos de la empresa.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerEmpresa>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>558273287F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerEmpresa>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerEmpresa\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"bts:Btinreq": {
	  "bts:Canal": "BTDIGITAL",
	  "bts:Requerimiento": "1",
	  "bts:Usuario": "BANTOTAL",
	  "bts:Token": "558273287F955E77534D3E02",
	  "bts:Device": "AC"
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerEmpresaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>558273287F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtEmpresa>
            <identificador>1</identificador>
            <nombre/>
            <casaCentral>
               <identificador>1</identificador>
               <descripcion>Sucursal Beta</descripcion>
               <direccion>1022, Pedro Cosio 2141</direccion>
               <telefono>15554454</telefono>
               <latitud>0.00000000000000</latitud>
               <longitud>0.00000000000000</longitud>
            </casaCentral>
            <monedaNacional>
               <identificador>0</identificador>
               <descripcion>PESOS</descripcion>
               <simbolo>$</simbolo>
            </monedaNacional>
            <monedaDolar>
               <identificador>2222</identificador>
               <descripcion>DÓLAR ESTADOUNIDENSE</descripcion>
               <simbolo>USD</simbolo>
            </monedaDolar>
            <fechaApertura>2020-03-05</fechaApertura>
            <fechaCierre>2018-06-13</fechaCierre>
            <fechaBalance>2014-06-30</fechaBalance>
         </sdtEmpresa>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTConfiguracionBantotal.ObtenerEmpresa</Servicio>
            <Fecha>2021-03-16</Fecha>
            <Hora>12:05:55</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8027</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerEmpresaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
	"Btinreq": {
	  "Device": "AC",
	  "Usuario": "BANTOTAL",
	  "Requerimiento": "1",
	  "Canal": "BTDIGITAL",
	  "Token": "558273287F955E77534D3E02"
	},
	"sdtEmpresa": {
		"identificador": "1",
		"nombre": {
		"-self-closing": "true"
		},
		"casaCentral": {
		"identificador": "1",
		"descripcion": "Sucursal Beta",
		"direccion": "1022, Pedro Cosio 2141",
		"telefono": "15554454",
		"latitud": "0.00000000000000",
		"longitud": "0.00000000000000"
		},
		"monedaNacional": {
		"identificador": "0",
		"descripcion": "PESOS",
		"simbolo": "$"
		},
		"monedaDolar": {
		"identificador": "2222",
		"descripcion": "DÓLAR ESTADOUNIDENSE",
		"simbolo": "USD"
		},
		"fechaApertura": "2020-03-05",
		"fechaCierre": "2018-06-13",
		"fechaBalance": "2014-06-30"
	},
	"Erroresnegocio": {},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTConfiguracionBantotal.ObtenerEmpresa",
	  "Fecha": "2021-03-15",
	  "Hora": "14:29:49",
	  "Requerimiento": "1",
	  "Numero": "8025",
	  "Estado": "OK"
	}
}` }
  };

  structuredTypes = [{ typeName: 'sBTEmpresa', fields: [{ Nombre: 'casaCentral', Tipo: '[sBTSucursal](#sbtsucursal)', Comentarios: 'Datos sobre la sucursal indicada como casa central.' }, { Nombre: 'fechaApertura', Tipo: 'Date', Comentarios: 'Fecha de apertura.' }, { Nombre: 'fechaBalance', Tipo: 'Date', Comentarios: 'Fecha de balance.' }, { Nombre: 'fechaCierre', Tipo: 'Date', Comentarios: 'Fecha de cierre.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador de la empresa.' }, { Nombre: 'monedaDolar', Tipo: '[sBTMoneda](#sbtmoneda)', Comentarios: 'Código moneda dolar.' }, { Nombre: 'monedaNacional', Tipo: '[sBTMoneda](#sbtmoneda)', Comentarios: 'Código moneda nacional.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de la empresa.' }] }, { typeName: 'sBTSucursal', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de sucursal.' }, { Nombre: 'direccion', Tipo: 'String', Comentarios: 'Dirección de sucursal.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador de sucursal.' }, { Nombre: 'latitud', Tipo: 'Long', Comentarios: 'Latitud de sucursal.' }, { Nombre: 'longitud', Tipo: 'Long', Comentarios: 'Longitud de sucursal.' }, { Nombre: 'telefono', Tipo: 'String', Comentarios: 'Teléfono de sucursal.' }] }, { typeName: 'sBTMoneda', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de moneda.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'simbolo', Tipo: 'String', Comentarios: 'Símbolo de moneda.' }] }];
}
