import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarInformacionFinanciera',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarInformacionFinancieraComponent1751987198478 {
  pageTitle        = 'Agregar Información Financiera';
  description      = `Método para agregar la información financiera de una persona.`;
  pubName    = 'BTPersonas.AgregarInformacionFinanciera';
  programa   = 'RBTPCO01';
  scope      = 'Colombia';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'sdtInformacionFinanciera', Tipo: '[sBTPCOInformacionFinanciera](#sbtpcoinformacionfinanciera)', Comentarios: 'Datos de información financiera de la persona.' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió identificador de persona.' }, { Código: '40001', Descripción: 'Debe ingresar ingresos mensuales.' }, { Código: '40002', Descripción: 'Los ingresos mensuales deben ser mayor a [Importe parametrizado].' }, { Código: '40003', Descripción: 'El campo ¿Cuales? debe ser [alfabético / numérico].' }, { Código: '40004', Descripción: 'Debe ingresar valor en campo ¿Cuales?.' }, { Código: '40005', Descripción: 'Debe ingresar total de egresos.' }, { Código: '40006', Descripción: 'El total de egresos debe ser mayor a [Importe parametrizado].' }, { Código: '40007', Descripción: 'Debe ingresar total de activos.' }, { Código: '40008', Descripción: 'El total de activos debe ser mayor a [Importe parametrizado].' }, { Código: '40009', Descripción: 'Debe ingresar valor en origen de recursos.' }, { Código: '40010', Descripción: 'Debe ingresar cual es el país de origen de recursos.' }, { Código: '40011', Descripción: 'El país de origen de recursos ingresado no es válido.' }, { Código: '40012', Descripción: 'El valor ingresado en el campo Origen Recursos no es válido.' }, { Código: '40013', Descripción: 'Debe ingresar si opera o no en moneda extranjera.' }, { Código: '40014', Descripción: 'Debe ingresar tipo de operación.' }, { Código: '40015', Descripción: 'El campo tipo de operación debe ser [alfabético / numérico].' }, { Código: '40016', Descripción: 'Debe ingresar tipo de producto.' }, { Código: '40017', Descripción: 'El campo tipo de producto debe ser [alfabético / numérico].' }, { Código: '40018', Descripción: 'El tipo de producto ingresado no es válido.' }, { Código: '40019', Descripción: 'Debe ingresar número de producto.' }, { Código: '40020', Descripción: 'El campo número de producto debe ser [alfabético / numérico].' }, { Código: '40021', Descripción: 'Debe ingresar nombre de entidad.' }, { Código: '40022', Descripción: 'El campo nombre de entidad debe ser [alfabético / numérico].' }, { Código: '40023', Descripción: 'Debe ingresar moneda.' }, { Código: '40024', Descripción: 'La moneda ingresada no es válida.' }, { Código: '40025', Descripción: 'Debe ingresar monto.' }, { Código: '40026', Descripción: 'El monto no puede ser menor a 0.' }, { Código: '40027', Descripción: 'Debe ingresar país de operaciones internacionales.' }, { Código: '40028', Descripción: 'El país de operaciones internacionales ingresado no es válido.' }, { Código: '40029', Descripción: 'Debe ingresar ciudad de operaciones internacionales.' }, { Código: '40030', Descripción: 'La ciudad ingresada no es válida.' }, { Código: '40031', Descripción: 'El valor ingresado en Opera en Moneda Extranjera no es válido.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.AgregarInformacionFinanciera>
         <bts:Btinreq>
            <bts:Token>042638a184CD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>42</bts:personaUId>
         <bts:sdtInformacionFinanciera>
            <bts:paisOrigenRecursos></bts:paisOrigenRecursos>
            <bts:otrosIngresosMensualesDesc>Alquileres</bts:otrosIngresosMensualesDesc>
            <bts:operacionesInternacionales>
               <bts:tipoProducto>CDT</bts:tipoProducto>
               <bts:moneda></bts:moneda>
               <bts:ciudadId>1465</bts:ciudadId>
               <bts:nombreEntidad>Nombre Entidad Prueba</bts:nombreEntidad>
               <bts:monto>884561.00</bts:monto>
               <bts:pais></bts:pais>
               <bts:ciudad></bts:ciudad>
               <bts:operaMonedaExtranjera>S</bts:operaMonedaExtranjera>
               <bts:numeroProducto>AAALLL</bts:numeroProducto>
               <bts:tipoOperacion>Inversiones</bts:tipoOperacion>
               <bts:monedaId>801</bts:monedaId>
               <bts:paisId>845</bts:paisId>
            </bts:operacionesInternacionales>
            <bts:totalPasivos>450000.00</bts:totalPasivos>
            <bts:origenRecursos>C</bts:origenRecursos>
            <bts:totalIngresosMensuales>550015.00</bts:totalIngresosMensuales>
            <bts:egresosMensuales>380000.00</bts:egresosMensuales>
            <bts:otrosIngresosMensuales>450015.00</bts:otrosIngresosMensuales>
            <bts:ingresosMensuales>100000.00</bts:ingresosMensuales>
            <bts:totalActivos>950000.00</bts:totalActivos>
            <bts:paisOrigenRecursosId></bts:paisOrigenRecursosId>
         </bts:sdtInformacionFinanciera>
      </bts:BTPersonas.AgregarInformacionFinanciera>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarInformacionFinanciera \
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
	"personaUId": "42",
	"totalPasivos": "450000.00",
	"origenRecursos": "C",
	"totalIngresosMensuales": "550015.00",
	"egresosMensuales": "380000.00",
	"otrosIngresosMensuales": "450015.00",
	"ingresosMensuales": "100000.00",
	"totalActivos": "950000.00",
	"sdtInformacionFinanciera": {
	  "otrosIngresosMensualesDesc": "Alquileres",
	  "operacionesInternacionales": {
		"tipoProducto": "CDT",
		"ciudadId": "1465",
		"nombreEntidad": "Nombre Entidad Prueba",
		"monto": "884561.00",
		"operaMonedaExtranjera": "S",
		"numeroProducto": "AAALLL",
		"tipoOperacion": "Inversiones",
		"monedaId": "801",
		"paisId": "845"
	  },   
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.AgregarInformacionFinancieraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>042638a184CD285A89A23FBE</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2098</Numero>
            <Servicio>BTPersonas.AgregarInformacionFinanciera</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-03-10</Fecha>
            <Hora>08:54:28</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.AgregarInformacionFinancieraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"Btoutreq": {
	  "Numero": "2098",
	  "Servicio": "BTPersonas.AgregarInformacionFinanciera",
	  "Estado": "OK",
	  "Requerimiento": "1",
	  "Fecha": "2020-03-10",
	  "Hora": "08:54:28",
	  "Canal": "BTDIGITAL"
	}
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPCOInformacionFinanciera', fields: [{ Nombre: 'egresosMensuales', Tipo: 'Double', Comentarios: 'Importe de egresos mensuales.' }, { Nombre: 'ingresosMensuales', Tipo: 'Double', Comentarios: 'Importe de ingresos mensuales.' }, { Nombre: 'operacionesInternacionales', Tipo: '[sBTPCOOperacionesInternacionales](#sbtpcooperacionesinternacionales)', Comentarios: 'Datos de operaciones internacionales.' }, { Nombre: 'origenRecursos', Tipo: 'String', Comentarios: '(C = Colombia / O = Otro).' }, { Nombre: 'otrosIngresosMensuales', Tipo: 'Double', Comentarios: 'Importe de otros ingresos mensuales.' }, { Nombre: 'otrosIngresosMensualesDesc', Tipo: 'String', Comentarios: 'Descripción de otros ingresos mensuales (Se ingresa si se ingresó valor en el campo otrosIngresosMensuales).' }, { Nombre: 'paisOrigenRecursos', Tipo: 'String', Comentarios: 'País (Se pide si el país de origen de recursos es O = Otro).' }, { Nombre: 'paisOrigenRecursosId', Tipo: 'Short', Comentarios: 'Identificador de país (Se pide si el país de origen de recursos es O = Otro).' }, { Nombre: 'totalActivos', Tipo: 'Double', Comentarios: 'Importe del total de activos.' }, { Nombre: 'totalIngresosMensuales', Tipo: 'Double', Comentarios: 'Importe del total de ingresos mensuales.' }, { Nombre: 'totalPasivos', Tipo: 'Double', Comentarios: 'Importe del total de pasivos.' }] }, { typeName: 'sBTPCOOperacionesInternacionales', fields: [{ Nombre: 'ciudad', Tipo: 'String', Comentarios: 'Nombre de ciudad.' }, { Nombre: 'ciudadId', Tipo: 'Short', Comentarios: 'Identificador de ciudad.' }, { Nombre: 'departamentoId', Tipo: 'Int', Comentarios: 'Identificador de departamento.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Nombre de moneda.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Monto.' }, { Nombre: 'nombreEntidad', Tipo: 'String', Comentarios: 'Nombre de la entidad.' }, { Nombre: 'numeroProducto', Tipo: 'String', Comentarios: 'Número del producto.' }, { Nombre: 'operaMonedaExtranjera', Tipo: 'String', Comentarios: '(S = Si / N = No) (El resto de los datos solo se piden si se indica S = Si).' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre de país.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador de país.' }, { Nombre: 'tipoOperacion', Tipo: 'String', Comentarios: 'Tipo de operación (Se puede ingresar uno que no se encuentre en la guía de proceso).' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: 'Tipo de producto.' }] }];
}
