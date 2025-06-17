import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ActualizarInformacinFinanciera',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ActualizarInformacionFinancieraComponent {
  // Cabecera e info-card
  pageTitle = 'Actualizar Informacion Financiera';
  description = `Metodo para modificar la informacion financiera de una persona.`;
  pubName    = 'BTPersonas.ActualizarInformacionFinanciera';
  programa   = 'RBTPCO02';
  scope      = 'Colombia';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['personaUId', 'sdtInformacionFinanciera'];
  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador unico de persona' }, { Nombre: 'sdtInformacionFinanciera', Tipo: '[sBTPCOInformacionFinanciera](#sbtpcoinformacionfinanciera)', Comentarios: 'Datos de informacion financiera de la persona' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '40001', '40002', '40003', '40004', '40005', '40006', '40007', '40008', '40009', '40010', '40011', '40012', '40013', '40014', '40015', '40016', '40017', '40018', '40019', '40020', '40021', '40022', '40023', '40024', '40025', '40026', '40027', '40028', '40029', '40030', '40031'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio identificador de persona' }, { Codigo: '40001', Descripcion: 'Debe ingresar ingresos mensuales' }, { Codigo: '40002', Descripcion: 'Los ingresos mensuales deben ser mayor a [Importe parametrizado]' }, { Codigo: '40003', Descripcion: 'El campo ¿Cuales? debe ser [alfabetico / numerico]' }, { Codigo: '40004', Descripcion: 'Debe ingresar valor en campo ¿Cuales?' }, { Codigo: '40005', Descripcion: 'Debe ingresar total de egresos' }, { Codigo: '40006', Descripcion: 'El total de egresos debe ser mayor a [Importe parametrizado]' }, { Codigo: '40007', Descripcion: 'Debe ingresar total de activos' }, { Codigo: '40008', Descripcion: 'El total de activos debe ser mayor a [Importe parametrizado]' }, { Codigo: '40009', Descripcion: 'Debe ingresar valor en origen de recursos' }, { Codigo: '40010', Descripcion: 'Debe ingresar cual es el pais de origen de recursos' }, { Codigo: '40011', Descripcion: 'El pais de origen de recursos ingresado no es valido' }, { Codigo: '40012', Descripcion: 'El valor ingresado en el campo Origen Recursos no es valido' }, { Codigo: '40013', Descripcion: 'Debe ingresar si opera o no en moneda extranjera' }, { Codigo: '40014', Descripcion: 'Debe ingresar tipo de operacion' }, { Codigo: '40015', Descripcion: 'El campo tipo de operacion debe ser [alfabetico / numerico]' }, { Codigo: '40016', Descripcion: 'Debe ingresar tipo de producto' }, { Codigo: '40017', Descripcion: 'El campo tipo de producto debe ser [alfabetico / numerico]' }, { Codigo: '40018', Descripcion: 'El tipo de producto ingresado no es valido' }, { Codigo: '40019', Descripcion: 'Debe ingresar numero de producto' }, { Codigo: '40020', Descripcion: 'El campo numero de producto debe ser [alfabetico / numerico]' }, { Codigo: '40021', Descripcion: 'Debe ingresar nombre de entidad' }, { Codigo: '40022', Descripcion: 'El campo nombre de entidad debe ser [alfabetico / numerico]' }, { Codigo: '40023', Descripcion: 'Debe ingresar moneda' }, { Codigo: '40024', Descripcion: 'La moneda ingresada no es valida' }, { Codigo: '40025', Descripcion: 'Debe ingresar monto' }, { Codigo: '40026', Descripcion: 'El monto no puede ser menor a 0' }, { Codigo: '40027', Descripcion: 'Debe ingresar pais de operaciones internacionales' }, { Codigo: '40028', Descripcion: 'El pais de operaciones internacionales ingresado no es valido' }, { Codigo: '40029', Descripcion: 'Debe ingresar ciudad de operaciones internacionales' }, { Codigo: '40030', Descripcion: 'La ciudad ingresada no es valida' }, { Codigo: '40031', Descripcion: 'El valor ingresado en Opera en Moneda Extranjera no es valido' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ActualizarInformacionFinanciera>
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
      </bts:BTPersonas.ActualizarInformacionFinanciera>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarInformacionFinanciera \
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \
-d '{
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
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ActualizarInformacionFinancieraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <Servicio>BTPersonas.ActualizarInformacionFinanciera</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-03-10</Fecha>
            <Hora>08:54:28</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ActualizarInformacionFinancieraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "1",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
        "Btoutreq": {
          "Numero": "2098",
          "Servicio": "BTPersonas.ActualizarInformacionFinanciera",
          "Estado": "OK",
          "Requerimiento": "1",
          "Fecha": "2020-03-10",
          "Hora": "08:54:28",
          "Canal": "BTDIGITAL"
        }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'egresosMensuales', Tipo: 'Double', Comentarios: 'Importe de egresos mensuales.' }, { Nombre: 'ingresosMensuales', Tipo: 'Double', Comentarios: 'Importe de ingresos mensuales.' }, { Nombre: 'operacionesInternacionales', Tipo: '[sBTPCOOperacionesInternacionales](#sbtpcooperacionesinternacionales)', Comentarios: 'Datos de operaciones internacionales.' }, { Nombre: 'origenRecursos', Tipo: 'String', Comentarios: '(C = Colombia / O = Otro).' }, { Nombre: 'otrosIngresosMensuales', Tipo: 'Double', Comentarios: 'Importe de otros ingresos mensuales.' }, { Nombre: 'otrosIngresosMensualesDesc', Tipo: 'String', Comentarios: 'Descripcion de otros ingresos mensuales (Se ingresa si se ingreso valor en el campo otrosIngresosMensuales).' }, { Nombre: 'paisOrigenRecursos', Tipo: 'String', Comentarios: 'Pais (Se pide si el pais de origen de recursos es O = Otro).' }, { Nombre: 'paisOrigenRecursosId', Tipo: 'Short', Comentarios: 'Identificador de pais (Se pide si el pais de origen de recursos es O = Otro).' }, { Nombre: 'totalActivos', Tipo: 'Double', Comentarios: 'Importe del total de activos.' }, { Nombre: 'totalIngresosMensuales', Tipo: 'Double', Comentarios: 'Importe del total de ingresos mensuales.' }, { Nombre: 'totalPasivos', Tipo: 'Double', Comentarios: 'Importe del total de pasivos.' }, { Nombre: '### sBTPCOOperacionesInternacionales', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTPCOOperacionesInternacionales son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'ciudad', Tipo: 'String', Comentarios: 'Nombre de ciudad.' }, { Nombre: 'ciudadId', Tipo: 'Int', Comentarios: 'Identificador de ciudad.' }, { Nombre: 'departamentoId', Tipo: 'Int', Comentarios: 'Identificador de departamento.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Nombre de moneda.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Monto.' }, { Nombre: 'nombreEntidad', Tipo: 'String', Comentarios: 'Nombre de la entidad.' }, { Nombre: 'numeroProducto', Tipo: 'String', Comentarios: 'Numero del producto.' }, { Nombre: 'operaMonedaExtranjera', Tipo: 'String', Comentarios: '(S = Si / N = No) (El resto de los datos solo se piden si se indica S = Si).' }, { Nombre: 'pais', Tipo: 'String', Comentarios: 'Nombre de pais.' }, { Nombre: 'paisId', Tipo: 'Short', Comentarios: 'Identificador de pais.' }, { Nombre: 'tipoOperacion', Tipo: 'String', Comentarios: '(Importacion / Exportacion / Inversiones / Prestamos / Si el tipo de operacion es "Otro", se debe ingresar aqui).' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: '(Cuenta de ahorros / Cuenta Corriente / CDT).' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
