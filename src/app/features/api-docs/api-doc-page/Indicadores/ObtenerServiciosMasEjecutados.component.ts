import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerServiciosMasEjecutados',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerServiciosMasEjecutadosComponent1750446218603 {
  pageTitle        = 'Obtener Servicios Más Ejecutados';
  description      = `Método para obtener un listado de los servicios más ejecutados y sus estadísticas.`;
  pubName    = 'BTIndicadores.ObtenerServiciosMasEjecutados';
  programa   = 'RBTPG712';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'servicio', Tipo: 'String', Comentarios: '[Hidden: Valor fijo vacío para este método].' }, { Nombre: 'cantidadDeRegistros', Tipo: 'Int', Comentarios: '[Hidden: Valor por defecto \'10\' para este método].' }];
  outputData = [{ Nombre: 'sdtEstadisticasServicios', Tipo: '[sBTEstadisticasServicioMetodo](#sbtestadisticasserviciometodo)', Comentarios: 'Colección de datos de servicios y sus estadísticas.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTIndicadores.ObtenerServiciosMasEjecutados>
         <bts:Btinreq>
            <bts:Device>MC</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>3</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>3483F7F3C05B0DDF791C90A3</bts:Token>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerServiciosMasEjecutados>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerServiciosMasEjecutados\' \
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
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTIndicadores.ObtenerServiciosMasEjecutadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>MC</Device>
            <Requerimiento>3</Requerimiento>
            <Token>3483F7F3C05B0DDF791C90A3</Token>
         </Btinreq>
         <sdtEstadisticasServicios>
            <sBTEstadisticasServicio>
               <tiempoMaximo>69748</tiempoMaximo>
               <tiempoMinimo>19</tiempoMinimo>
               <metodo/>
               <servicio>BTIndicadores</servicio>
               <tiempoPromedio>781</tiempoPromedio>
               <cantidadEjecuciones>10317</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>90108</tiempoMaximo>
               <tiempoMinimo>19</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>BTPersonas</servicio>
               <tiempoPromedio>427</tiempoPromedio>
               <cantidadEjecuciones>3210</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>131448</tiempoMaximo>
               <tiempoMinimo>0</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>Authenticate</servicio>
               <tiempoPromedio>1169</tiempoPromedio>
               <cantidadEjecuciones>2510</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>386266</tiempoMaximo>
               <tiempoMinimo>15</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>BTClientes</servicio>
               <tiempoPromedio>887</tiempoPromedio>
               <cantidadEjecuciones>2059</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>59187</tiempoMaximo>
               <tiempoMinimo>0</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>BTPrestamos</servicio>
               <tiempoPromedio>2784</tiempoPromedio>
               <cantidadEjecuciones>1784</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>70079</tiempoMaximo>
               <tiempoMinimo>0</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>BTCuentasVista</servicio>
               <tiempoPromedio>1180</tiempoPromedio>
               <cantidadEjecuciones>1386</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>36946</tiempoMaximo>
               <tiempoMinimo>9</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>BPServicios</servicio>
               <tiempoPromedio>193</tiempoPromedio>
               <cantidadEjecuciones>1333</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>110646</tiempoMaximo>
               <tiempoMinimo>0</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>BTConfiguracionBantotal</servicio>
               <tiempoPromedio>666</tiempoPromedio>
               <cantidadEjecuciones>429</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>5797</tiempoMaximo>
               <tiempoMinimo>31</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>BTCuentasCorrientes</servicio>
               <tiempoPromedio>390</tiempoPromedio>
               <cantidadEjecuciones>300</cantidadEjecuciones>
            </sBTEstadisticasServicio>
            <sBTEstadisticasServicio>
               <tiempoMaximo>4329</tiempoMaximo>
               <tiempoMinimo>78</tiempoMinimo>
               <metodo>No aplica</metodo>
               <servicio>Prueba</servicio>
               <tiempoPromedio>471</tiempoPromedio>
               <cantidadEjecuciones>290</cantidadEjecuciones>
            </sBTEstadisticasServicio>
         </sdtEstadisticasServicios>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-05-31</Fecha>
            <Hora>17:15:43</Hora>
            <Numero>25898</Numero>
            <Servicio>BTIndicadores.ObtenerServiciosMasEjecutados</Servicio>
            <Requerimiento>3</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTIndicadores.ObtenerServiciosMasEjecutadosResponse>
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
	"sdtEstadisticasServicios": {
		"sBTEstadisticasServicioMetodo": [
			{
				"tiempoMaximo": "69748",
				"tiempoMinimo": "19",
				"metodo": "",
				"servicio": "BTIndicadores",
				"tiempoPromedio": "781",
				"cantidadEjecuciones": "10317"
			},
			{
				"tiempoMaximo": "90108",
				"tiempoMinimo": "19",
				"metodo": "No aplica",
				"servicio": "BTPersonas",
				"tiempoPromedio": "427",
				"cantidadEjecuciones": "3210"
			},
			{
				"tiempoMaximo": "131448",
				"tiempoMinimo": "0",
				"metodo": "No aplica",
				"servicio": "Authenticate",
				"tiempoPromedio": "1169",
				"cantidadEjecuciones": "2510"
			},
			{
				"tiempoMaximo": "386266",
				"tiempoMinimo": "15",
				"metodo": "No aplica",
				"servicio": "BTClientes",
				"tiempoPromedio": "887",
				"cantidadEjecuciones": "2059"
			},
			{
				"tiempoMaximo": "59187",
				"tiempoMinimo": "0",
				"metodo": "No aplica",
				"servicio": "BTPrestamos",
				"tiempoPromedio": "2784",
				"cantidadEjecuciones": "1784"
			},
			{
				"tiempoMaximo": "70079",
				"tiempoMinimo": "0",
				"metodo": "No aplica",
				"servicio": "BTCuentasVista",
				"tiempoPromedio": "1180",
				"cantidadEjecuciones": "1386"
			},
			{
				"tiempoMaximo": "36946",
				"tiempoMinimo": "9",
				"metodo": "No aplica",
				"servicio": "BPServicios",
				"tiempoPromedio": "193",
				"cantidadEjecuciones": "1333"
			},
			{
				"tiempoMaximo": "110646",
				"tiempoMinimo": "0",
				"metodo": "No aplica",
				"servicio": "BTConfiguracionBantotal",
				"tiempoPromedio": "666",
				"cantidadEjecuciones": "429"
			},
			{
				"tiempoMaximo": "5797",
				"tiempoMinimo": "31",
				"metodo": "No aplica",
				"servicio": "BTCuentasCorrientes",
				"tiempoPromedio": "390",
				"cantidadEjecuciones": "300"
			},
			{
				"tiempoMaximo": "4329",
				"tiempoMinimo": "78",
				"metodo": "No aplica",
				"servicio": "Prueba",
				"tiempoPromedio": "471",
				"cantidadEjecuciones": "290"
			}
		]
	},
    "Btoutreq": {
        "Numero": "397",
        "Estado": "OK",
        "Servicio": "BTIndicadores.ObtenerServiciosMasEjecutados",
        "Fecha": "2018-05-02",
        "Requerimiento": "1",
        "Hora": "18:40:30",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTEstadisticasServicioMetodo', fields: [{ Nombre: 'cantidadEjecuciones', Tipo: 'Long', Comentarios: 'Cantidad de ejecuciones.' }, { Nombre: 'metodo', Tipo: 'String', Comentarios: 'Método del servicio.' }, { Nombre: 'servicio', Tipo: 'String', Comentarios: 'Identificador del servicio' }, { Nombre: 'tiempoMaximo', Tipo: 'Int', Comentarios: 'Tiempo máximo registrado para los métodos del servicio.' }, { Nombre: 'tiempoMinimo', Tipo: 'Int', Comentarios: 'Tiempo mínimo registrado para los métodos del servicio.' }, { Nombre: 'tiempoPromedio', Tipo: 'Int', Comentarios: 'Tiempo promedio de las ejecuciones a los métodos del servicio.' }] }];
}
