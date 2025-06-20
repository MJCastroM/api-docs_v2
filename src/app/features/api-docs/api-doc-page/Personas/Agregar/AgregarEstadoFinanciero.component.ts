import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarEstadoFinanciero',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarEstadoFinancieroComponent1750446218724 {
  pageTitle        = 'Agregar Estado Financiero';
  description      = `Método para agregar los estados financieros a una persona.`;
  pubName    = 'BTPersonas.AgregarEstadoFinanciero';
  programa   = 'RBTPG580';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de la persona.' }, { Nombre: 'sdtEstadoFinanciero', Tipo: '[sBTEstadoFinanciero ](#sbtestadofinanciero)', Comentarios: 'Datos del estado financiero.' }, { Nombre: 'sdtCondicionTributaria', Tipo: '[sBTCondicionTributaria ](#sbtcondiciontributaria)', Comentarios: 'Datos de la condición tributaria.' }, { Nombre: 'sdtConceptosEstadoFinanciero', Tipo: '[sBTDetallesEstadosFinancieros ](#sbtdetallesestadosfinancieros)', Comentarios: 'Listado de los conceptos financieros.' }];
  outputData = [{ Nombre: 'sdtEstadoFinanciero', Tipo: '[sBTEstadoFinanciero ](#sbtestadofinanciero)', Comentarios: 'Datos del estado financiero.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de persona.' }, { Codigo: '30002', Descripcion: 'No se recibió la fecha de elaboración.' }, { Codigo: '30003', Descripcion: 'No se recibió el código de la moneda.' }, { Codigo: '30005', Descripcion: 'Ya existe un Estado Financiero con esa fecha de elaboración.' }, { Codigo: '30006', Descripcion: 'El código de moneda no coincide.' }, { Codigo: '30007', Descripcion: 'El valor de activo no corresponde.' }, { Codigo: '30008', Descripcion: 'La fecha de Elaborado en EEFF no puede ser mayor a la fecha de Hoy.' }, { Codigo: '30009', Descripcion: 'El concepto [Nombre del concepto] tiene valor [valor del concepto] el cual no está parametrizado.' }, { Codigo: '30010', Descripcion: 'El concepto [Identificador del concepto] no está parametrizado.' }, { Codigo: '30011', Descripcion: 'Los "Activos Totales" son diferente al "Total Pasivo + Patrimonio".' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.AgregarEstadoFinanciero>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>90A4D82C0D53C36114131B14</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>234</bts:personaUId>
         <bts:sdtEstadoFinanciero>
            <bts:Id></bts:Id>
            <bts:Auditado>S</bts:Auditado>
            <bts:Moneda>0</bts:Moneda>
            <bts:FechadeElaborado>2024-09-7</bts:FechadeElaborado>
            <bts:UsuariodeIngreso>INSTALADOR</bts:UsuariodeIngreso>
            <bts:FechaRegistro>2024-09-18</bts:FechaRegistro>
         </bts:sdtEstadoFinanciero>
         <bts:sdtCondicionTributaria>
            <bts:VentasAnuales>1</bts:VentasAnuales>
            <bts:RUC>1</bts:RUC>
            <bts:Activo>S</bts:Activo>
            <bts:RegimenTributario>12</bts:RegimenTributario>
         </bts:sdtCondicionTributaria>
         <bts:sdtConceptosEstadoFinanciero>
            <bts:sBTConceptoEstadoFinanciero>
               <bts:idConcepto>1</bts:idConcepto>
               <bts:valorConcepto></bts:valorConcepto>
            </bts:sBTConceptoEstadoFinanciero>
         </bts:sdtConceptosEstadoFinanciero>
      </bts:BTPersonas.AgregarEstadoFinanciero>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?AgregarEstadoFinanciero\' \
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
		"personaUId": 234,
        "sdtEstadoFinanciero": {
          "Id": "",
          "Auditado": "S",
          "Moneda": 0,
          "FechadeElaborado": "2024-09-7",
          "UsuariodeIngreso": "INSTALADOR",
          "FechaRegistro": "2024-09-18"
        },
        "sdtCondicionTributaria": {
          "VentasAnuales": 1,
          "RUC": 1,
          "Activo": "S",
          "RegimenTributario": 12
        },
        "sdtConceptosEstadoFinanciero": {
          "sBTConceptoEstadoFinanciero": {
            "idConcepto": 1,
            "valorConcepto": ""
          }
        }
	}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.AgregarEstadoFinancieroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>90A4D82C0D53C36114131B14</Token>
         </Btinreq>
         <sdtEstadoFinanciero>
            <Id>31</Id>
            <Auditado>S</Auditado>
            <Moneda>0</Moneda>
            <FechadeElaborado>2024-09-07</FechadeElaborado>
            <UsuariodeIngreso>INSTALADOR</UsuariodeIngreso>
            <FechaRegistro>2024-09-18</FechaRegistro>
         </sdtEstadoFinanciero>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35226</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.AgregarEstadoFinanciero</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2025-05-14</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>14:53:41</Hora>
         </Btoutreq>
      </BTPersonas.AgregarEstadoFinancieroResponse>
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
    "sdtEstadoFinanciero": {
          "Id": 31,
          "Auditado": "S",
          "Moneda": 0,
          "FechadeElaborado": "2024-09-07",
          "UsuariodeIngreso": "INSTALADOR",
          "FechaRegistro": "2024-09-18"
        },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "401",
        "Estado": "OK",
        "Servicio": "BTPersonas.AgregarEstadoFinanciero",
        "Fecha": "2018-05-03",
        "Requerimiento": "1",
        "Hora": "11:10:49",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTEstadoFinanciero', fields: [{ Nombre: 'auditado', Tipo: 'String', Comentarios: '¿Es auditado? (S/N).' }, { Nombre: 'fechaDeElaborado', Tipo: 'Date', Comentarios: 'Fecha de elaborado.' }, { Nombre: 'fechaRegistro', Tipo: 'Date', Comentarios: 'Fecha de registro.' }, { Nombre: 'id', Tipo: 'int', Comentarios: 'Identificador de estado financiero.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'usuarioDeIngreso', Tipo: 'String', Comentarios: 'Usuario de ingreso.' }] }, { typeName: 'sBTCondicionTributaria', fields: [{ Nombre: 'activo', Tipo: 'String', Comentarios: '¿Está activo? (S/N).' }, { Nombre: 'regimenTributario', Tipo: 'String', Comentarios: 'Régimen tributario.' }, { Nombre: 'RUC', Tipo: 'String', Comentarios: 'RUC.' }, { Nombre: 'ventasAnuales', Tipo: 'Double', Comentarios: 'Total de ventas anuales.' }] }, { typeName: 'sBTDetallesEstadosFinancieros', fields: [{ Nombre: 'idConcepto', Tipo: 'int', Comentarios: 'Identificador del concepto del estado financiero.' }, { Nombre: 'valorConcepto', Tipo: 'Double', Comentarios: 'Valor del concepto del estado financiero.' }] }];
}
