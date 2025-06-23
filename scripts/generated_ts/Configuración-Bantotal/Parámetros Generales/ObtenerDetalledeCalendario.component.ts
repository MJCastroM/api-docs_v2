import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalledeCalendario',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalledeCalendarioComponent1750713393569 {
  pageTitle        = 'Obtener Detalle de Calendario';
  description      = `Método para obtener el detalle de los días de un determinado calendario.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerDetalleCalendario';
  programa   = 'RBTPG285';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'calendarioId', Tipo: 'Short', Comentarios: 'Identificador de calendario.' }, { Nombre: 'fechaInicio', Tipo: 'Date', Comentarios: 'Fecha de inicio de visualización de calendario.' }, { Nombre: 'fechaFin', Tipo: 'Date', Comentarios: 'Fecha de fin de visualización de calendario.' }];
  outputData = [{ Nombre: 'descripcionCalendario', Tipo: 'String', Comentarios: 'Descripción del calendario.' }, { Nombre: 'sdtDetalleCalendario', Tipo: '[sBTDiaCalendario](#sbtdiacalendario)', Comentarios: 'Detalle de la consulta del calendario.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de calendario.' }, { Codigo: '30002', Descripcion: 'No se recibió fecha de inicio.' }, { Codigo: '30003', Descripcion: 'No se recibió fecha de fin.' }, { Codigo: '40001', Descripcion: 'No existe calendario con el identificador ingresado.' }, { Codigo: '40002', Descripcion: 'No se pudo obtener detalle para los datos ingresados ingresados.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerDetalleCalendario>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>MC</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>200f0b8b654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:calendarioId>1</bts:calendarioId>
         <bts:fechaInicio>2020-10-01</bts:fechaInicio>
         <bts:fechaFin>2020-10-31</bts:fechaFin>
      </bts:BTConfiguracionBantotal.ObtenerDetalleCalendario>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X GET \
   \'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerEstados\' \
   -H \'cache-control: no-cache\' \
   -H \'content-type: application/json\' \
   -d \'{
   "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "faa36bd33f4A8B5C60A82434"
    },
	"calendarioId":1,
	"calendarioId":"2020-10-01",
	"calendarioId":"2020-10-31",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerDetalleCalendarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>MC</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>200f0b8b654A8B5C60A82434</Token>
         </Btinreq>
         <descripcionCalendario>Calendario 1</descripcionCalendario>
         <sdtDetalleCalendario>
            <sBTDiaCalendario>
               <fecha>2020-10-01</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            <sBTDiaCalendario>
               <fecha>2020-10-02</fecha>
               <habil>S</habil>
            </sBTDiaCalendario>
            ...
         </sdtDetalleCalendario>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>109132</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerDetalleCalendario</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-11-24</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:41:08</Hora>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerDetalleCalendarioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
    "Btinreq": {
		"Device": "MC",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "200f0b8b654A8B5C60A82434"
	},
	"descripcionCalendario": "Calendario 1",
	"sdtDetalleCalendario": {
	  "sBTDiaCalendario": [
		{
		  "fecha": "2020-10-01",
		  "habil": "S"
		},
		{
		  "fecha": "2020-10-02",
		  "habil": "S"
		},
		...
	  ]
	},
	"Btoutreq": {
	  "Numero": "109132",
	  "Estado": "OK",
	  "Servicio": "BTConfiguracionBantotal.ObtenerDetalleCalendario",
	  "Requerimiento": "1",
	  "Fecha": "2020-11-24",
	  "Canal": "BTDIGITAL",
	  "Hora": "10:41:08"
	}
}` }
  };

  structuredTypes = [{ typeName: 'sBTDiaCalendario', fields: [{ Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Día del calendario.' }, { Nombre: 'habil', Tipo: 'String', Comentarios: '¿Día hábil? (S/N)' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
