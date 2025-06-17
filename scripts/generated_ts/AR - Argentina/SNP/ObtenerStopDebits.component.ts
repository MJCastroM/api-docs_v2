import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerStopDebits',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerStopDebitsComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Stop Debits';
  description = `Metodo para obtener los stop debits asociados a un cliente.`;
  pubName    = 'BTSNP.ObtenerStopDebits';
  programa   = 'RBTPG343';
  scope      = 'Argentina';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico del cliente.' }];
  outputCols = ['sdtConsultaStopDebit'];
  outputData = [{ Nombre: 'sdtConsultaStopDebit', Tipo: '[sBTConsultaStopDebit](#sbtconsultastopdebit)', Comentarios: 'Datos del alta de Stop Debits.' }];
  errorCols  = ['30001', '30002'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se encontro un cliente para el identificador: [Numero de identificador].' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSNP.ObtenerStopDebits>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>fbd47e2319F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTSNP.ObtenerStopDebits>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?ObtenerStopDebits' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{   
		"Btinreq": {
			"Device": "AC",
			"Usuario": "BANTOTAL",
			"Requerimiento": "",
			"Canal": "BTDIGITAL",
			"Token": "fbd47e2319F955E77534D3E0"
		},
		"clienteUId": 2
	}` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSNP.ObtenerStopDebitsResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>bc479c1c0eF955E77534D3E0</Token>
         </Btinreq>
         <sdtConsultaStopDebit>
            <sBTConsultaStopDebit>
               <montoMaximoDebito>M</montoMaximoDebito>
               <fechaBaja>0001-01-01</fechaBaja>
               <moneda>80</moneda>
               <importe>1000.00</importe>
               <fechaAlta>2021-06-14</fechaAlta>
               <stopDebit>
                  <prestacion>DEB RIO</prestacion>
                  <referencia/>
                  <empresaOriginante>3050001626</empresaOriginante>
                  <clienteUId>4</clienteUId>
                  <idCliente>5550101516490000005000</idCliente>
                  <fechaDesde>0001-01-01</fechaDesde>
                  <fechaVencimiento>0001-01-01</fechaVencimiento>
                  <fechaHasta>0001-01-01</fechaHasta>
                  <tipoDeDebito>1</tipoDeDebito>
               </stopDebit>
               <correlativo>1</correlativo>
               <estado>AC</estado>
            </sBTConsultaStopDebit>
            <sBTConsultaStopDebit>
               <montoMaximoDebito>F</montoMaximoDebito>
               <fechaBaja>0001-01-01</fechaBaja>
               <moneda>80</moneda>
               <importe>1000.00</importe>
               <fechaAlta>2021-06-14</fechaAlta>
               <stopDebit>
                  <prestacion>MERIDIO PE</prestacion>
                  <referencia/>
                  <empresaOriginante>3050005116</empresaOriginante>
                  <clienteUId>4</clienteUId>
                  <idCliente>1255162160500000000000</idCliente>
                  <fechaDesde>0001-01-01</fechaDesde>
                  <fechaVencimiento>0001-01-01</fechaVencimiento>
                  <fechaHasta>0001-01-01</fechaHasta>
                  <tipoDeDebito>1</tipoDeDebito>
               </stopDebit>
               <correlativo>2</correlativo>
               <estado>AC</estado>
            </sBTConsultaStopDebit>
         </sdtConsultaStopDebit>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1639</Numero>
            <Estado>OK</Estado>
            <Servicio>BTSNP.ObtenerStopDebits</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2021-06-18</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>16:39:45</Hora>
         </Btoutreq>
      </BTSNP.ObtenerStopDebitsResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
    "Btinreq": {
        "Device": "AC",
        "Usuario": "BANTOTAL",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "fbd47e2319F955E77534D3E0"
    },
    "sdtConsultaStopDebit": {
        "sBTConsultaStopDebit": [
            {
                "montoMaximoDebito": "M",
                "importe": 1000,
                "moneda": 2,
                "stopDebit": {
                    "prestacion": "DEB RIO",
                    "referencia": "",
                    "empresaOriginante": "3050001626",
                    "clienteUId": 2,
                    "idCliente": "2750101459380000006000",
                    "fechaDesde": "0001-01-01",
                    "fechaVencimiento": "0001-01-01",
                    "fechaHasta": "0001-01-01",
                    "tipoDeDebito": 1
                },
                "correlativo": 1,
                "estado": "AC"
            },
            {
                "montoMaximoDebito": "F",
                "importe": 2000,
                "moneda": 80,
                "stopDebit": {
                    "prestacion": "DEB RIO",
                    "referencia": "",
                    "empresaOriginante": "3050001626",
                    "clienteUId": 2,
                    "idCliente": "2750101516490000004000",
                    "fechaDesde": "0001-01-01",
                    "fechaVencimiento": "0001-01-01",
                    "fechaHasta": "0001-01-01",
                    "tipoDeDebito": 1
                },
                "correlativo": 2,
                "estado": "AC"
            },
            ...
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1638,
        "Servicio": "BTSNP.ObtenerStopDebits",
        "Estado": "OK",
        "Fecha": "2021-06-18",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Hora": "16:05:58"
    }
}` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'correlativo', Tipo: 'Short', Comentarios: 'Correlativo del stop debit.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del Stop Debit.' }, { Nombre: 'fechaAlta', Tipo: 'Date', Comentarios: 'Fecha de alta.' }, { Nombre: 'fechaBaja', Tipo: 'Date', Comentarios: 'Fecha de baja.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe del Stop Debit.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'montoMaximoDebito', Tipo: 'String', Comentarios: 'Monto maximo de debito (m=mensual/f=factura).' }, { Nombre: 'stopDebit', Tipo: '[sBTStopDebit](#sbtstopdebit)', Comentarios: 'Datos del Stop Debit.' }, { Nombre: '### sBTStopDebit', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTStopDebit son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico del cliente.' }, { Nombre: 'empresaOriginante', Tipo: 'String', Comentarios: 'Identificador de la empresa originante.' }, { Nombre: 'fechaDesde', Tipo: 'Date', Comentarios: 'Fecha desde para aplicar el Stop Debit.' }, { Nombre: 'fechaHasta', Tipo: 'Date', Comentarios: 'Fecha hasta para aplicar el Stop Debit.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento' }, { Nombre: 'idCliente', Tipo: 'String', Comentarios: 'Identificador del Cliente SNP.' }, { Nombre: 'prestacion', Tipo: 'String', Comentarios: 'Identificador de prestacion.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia del debito.' }, { Nombre: 'tipoDeDebito', Tipo: 'Byte', Comentarios: 'Tipo de debito (1=Abierto/2=Cerrado).' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
