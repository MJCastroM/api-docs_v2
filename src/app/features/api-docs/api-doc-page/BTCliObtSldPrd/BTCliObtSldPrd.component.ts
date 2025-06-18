import { Component } from '@angular/core';
import { fadeInOut }  from '../../../../route-animations';

@Component({
  selector: 'app-BTCliObtSldPrd',
  templateUrl: './BTCliObtSldPrd.component.html',
  styleUrls: ['./BTCliObtSldPrd.component.scss'],
  animations: [ fadeInOut ],
  // Esto enlaza el trigger al host, para que el enter/leave funcione
  host: { '[@fadeInOut]': '' }
})
export class BTCliObtSldPrdComp {
  // Cabecera e info‐card
  pageTitle = 'Obtener Saldos de Otros Productos';
  description = 'Método para obtener los saldos de los productos de un cliente.';
  pubName     = 'BTClientes.ObtenerSaldosProducto';
  programa    = 'RBTPG260';
  scope       = 'Global';

  // Backend config
  hasBackendConfig = true;
  backendText = 'Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores:'
  backendCols = ['Campo', 'Valor'];
  backendData = [
    { Campo: 'Correlativo 1',    Valor: '1000' },
    { Campo: 'Correlativo 2',    Valor: 'Valor del segundo parámetro' },
    { Campo: 'Id de Módulo',     Valor: 'Identificador del módulo a incluir' }
  ];

  // Pestañas de Input/Output/Errors
  // si no aplica, mandar colecciones vacias
  inputCols  = ['Nombre', 'Tipo', 'Comentarios'];
  inputData  = [
    { Nombre: 'cuentaUId', Tipo: 'Long', Comentarios: 'ID único de cliente' },
    { Nombre: 'correlativo', Tipo: 'Long', Comentarios: 'Correlativo guía' }
  ];

  outputCols = ['Nombre', 'Tipo', 'Comentarios'];
  outputData = [
    { Nombre: 'sdtSaldosProducto', Tipo: 'sBTSaldoProducto', Comentarios: 'Listado de productos' }
  ];

  errorCols  = ['Código', 'Descripción'];
  errors     = [
    { Código: '30001', Descripción: 'No se recibió el identificador de cliente' },
    { Código: '30002', Descripción: 'No se recuperó la cuenta' }
  ];

  // Ejemplos de invocación / respuesta
  examples = {
    invocation: {
      xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"?>
  <soapenv:Body>
    <BTClientes.ObtenerSaldosProducto>
      <cuentaUId>12345</cuentaUId>
      <correlativo>6789</correlativo>
    </BTClientes.ObtenerSaldosProducto>
  </soapenv:Body>
</soapenv:Envelope>`,
      json: `
curl -X POST \\
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?Crear' \\
    -H 'cache-control: no-cache' \\
    -H 'content-type: application/json' \\
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \\
    -d '{
    "Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "AC",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
   "sdtPersona": {
      "paisDocumentoId": 845,
      "tipoDocumentoId": 1,
      "nroDocumento": "41875255",
      "ingresos": "1500.00",
      "nacionalidad": "URUGUAY",
      "sexo": "M",
      "segundoNombre": "",
      "telefonoCelular": "",
      "departamentoId": 10,
      "ocupacionId": "1",
      "actividadLaboralId": 1112,
      "nacionalidadId": 845,
      "localidadId": "10",
      "paisDomicilioId": 845,
      "telefonoFijo": "26004288",
      "codigoPostal": "",
      "primerNombre": "aALEJANDRO",
      "fechaNacimiento": "1976-02-26",
      "primerApellido": "vVAZQUEZ",
      "estadoCivilId": "1",
      "segundoApellido": "SZENTANDRASI",
      "paisDocumento": "URUGUAY",
      "fechaInicioActividad": "1980-01-01",
      "ocupacion": "Empleado",
      "paisDomicilio": "URUGUAY",
      "fechaVencimiento": "2025-01-01",
      "correoElectronico": "AV@GMAIL.COM",
      "numeroPuerta": "7216",
      "calle": "BAZZURRO",
      "apartamento": "13B",
      "barrioId": 0,
   }
}'
`
    }
  };

  // Datos estructurados
  structuredTypes = [
    { Nombre: 'estado',     Tipo: 'String', Comentarios: 'Descripción de estado' },
    { Nombre: 'fechaValor', Tipo: 'Date',   Comentarios: 'Fecha de alta del saldo' },
    { Nombre: 'saldo',      Tipo: 'Decimal',Comentarios: 'Valor numérico del saldo' }
  ];
}
