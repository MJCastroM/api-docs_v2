import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerInformacionFinanciera',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerInformacionFinancieraComponent1750268697506 {
  pageTitle        = 'Obtener Información Financiera';
  description      = `Método para obtener la información financiera de una persona.`;
  pubName    = 'BTPersonas.ObtenerInformacionFinanciera';
  programa   = 'RBTPCO03';
  scope      = 'Colombia';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  outputData = [{ Nombre: 'sdtInformacionFinanciera', Tipo: '[sBTPCOInformacionFinanciera](#sbtpcoinformacionfinanciera)', Comentarios: 'Datos de información financiera de la persona.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de persona.' }, { Codigo: '30002', Descripcion: 'No existe el Registro.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerInformacionFinanciera>
         <bts:Btinreq>
            <bts:Token>098705dd29CD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>21</bts:personaUId>
      </bts:BTPersonas.ObtenerInformacionFinanciera>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerInformacionFinanciera \
-H \'cache-control: no-cache\' \
-H \'content-type: application/json\' \
-d \'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"personaUId": "21"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerInformacionFinancieraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>098705dd29CD285A89A23FBE</Token>
         </Btinreq>
         <sdtInformacionFinanciera>
            <paisOrigenRecursos>URUGUAY</paisOrigenRecursos>
            <otrosIngresosMensualesDesc>Alquileres</otrosIngresosMensualesDesc>
            <operacionesInternacionales>
               <tipoProducto>Producto</tipoProducto>
               <moneda>FRANCO FRANCES EFECTIVO</moneda>
               <ciudadId>1465</ciudadId>
               <nombreEntidad>Nombre Entidad</nombreEntidad>
               <monto>884561.00</monto>
               <pais>URUGUAY</pais>
               <ciudad>Colonia Nicolich</ciudad>
               <operaMonedaExtranjera>S</operaMonedaExtranjera>
               <numeroProducto>AAALLL</numeroProducto>
               <tipoOperacion>Compra</tipoOperacion>
               <monedaId>801</monedaId>
               <paisId>845</paisId>
            </operacionesInternacionales>
            <totalPasivos>450000.00</totalPasivos>
            <origenRecursos>C</origenRecursos>
            <totalIngresosMensuales>450030.00</totalIngresosMensuales>
            <egresosMensuales>380000.00</egresosMensuales>
            <otrosIngresosMensuales>450015.00</otrosIngresosMensuales>
            <ingresosMensuales>15.00</ingresosMensuales>
            <totalActivos>950000.00</totalActivos>
            <paisOrigenRecursosId>845</paisOrigenRecursosId>
         </sdtInformacionFinanciera>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1803</Numero>
            <Servicio>BTPersonas.ObtenerInformacionFinanciera</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-03-06</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>08:36:34</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerInformacionFinancieraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"sdtInformacionFinanciera": {
		"paisOrigenRecursos": "URUGUAY",
		"otrosIngresosMensualesDesc": "Alquileres",
		"totalPasivos": "450000.00",
		"origenRecursos": "C",
		"totalIngresosMensuales": "450030.00",
		"egresosMensuales": "380000.00",
		"otrosIngresosMensuales": "450015.00",
		"ingresosMensuales": "15.00",
		"totalActivos": "950000.00",
		"paisOrigenRecursosId": "845",
		"operacionesInternacionales": {
			  "tipoProducto": "Producto",
			  "moneda": "FRANCO FRANCES EFECTIVO",
			  "ciudadId": "1465",
			  "nombreEntidad": "Nombre Entidad",
			  "monto": "884561.00",
			  "pais": "URUGUAY",
			  "ciudad": "Colonia Nicolich",
			  "operaMonedaExtranjera": "S",
			  "numeroProducto": "AAALLL",
			  "tipoOperacion": "Compra",
			  "monedaId": "801",
			  "paisId": "845"
		},
	},
	"Btoutreq": {
	  "Numero": "1729",
	  "Estado": "OK",
	  "Servicio": "BTPersonas.ObtenerInformacionFinanciera",
	  "Requerimiento": "1",
	  "Fecha": "2020-03-05",
	  "Canal": "BTDIGITAL",
	  "Hora": "13:10:51"
	}
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPCOInformacionFinanciera', fields: [{ Nombre: 'egresosMensuales', Tipo: 'Double', Comentarios: 'Importe de egresos mensuales.' }, { Nombre: 'ingresosMensuales', Tipo: 'Double', Comentarios: 'Importe de ingresos mensuales.' }, { Nombre: 'operacionesInternacionales', Tipo: '[sBTPCOOperacionesInternacionales](#sbtpcooperacionesinternacionales)', Comentarios: 'Datos de operaciones internacionales.' }, { Nombre: 'origenRecursos', Tipo: 'String', Comentarios: '(C = Colombia / O = Otro).' }, { Nombre: 'otrosIngresosMensuales', Tipo: 'Double', Comentarios: 'Importe de otros ingresos mensuales.' }, { Nombre: 'otrosIngresosMensualesDesc', Tipo: 'String', Comentarios: 'Descripción de otros ingresos mensuales.' }, { Nombre: 'paisOrigenRecursos', Tipo: 'String', Comentarios: 'Nombre de país.' }, { Nombre: 'paisOrigenRecursosId', Tipo: 'Short', Comentarios: 'Identificador de país.' }, { Nombre: 'totalActivos', Tipo: 'Double', Comentarios: 'Importe del total de activos.' }, { Nombre: 'totalIngresosMensuales', Tipo: 'Double', Comentarios: 'Importe del total de ingresos mensuales.' }, { Nombre: 'totalPasivos', Tipo: 'Double', Comentarios: 'Importe del total de pasivos.' }, { Nombre: '### sBTPCOOperacionesInternacionales', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTPCOOperacionesInternacionales', fields: [{ Nombre: 'ciudad', Tipo: 'String', Comentarios: 'Nombre de ciudad.' }, { Nombre: 'ciudadId', Tipo: 'Short', Comentarios: 'Identificador de ciudad.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Nombre de moneda' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Monto.' }, { Nombre: 'nombreEntidad', Tipo: 'String', Comentarios: 'Nombre de la entidad.' }, { Nombre: 'numeroProducto', Tipo: 'String', Comentarios: 'Número del producto.' }, { Nombre: 'operaMonedaExtranjera', Tipo: 'String', Comentarios: '(S = Si / N = No).' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre de país.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador de país.' }, { Nombre: 'tipoOperacion', Tipo: 'String', Comentarios: '(Importación / Exportación / Inversiones / Préstamos / Otro).' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: '(Cuenta de ahorros / Cuenta Corriente / CDT).' }] }];
}
