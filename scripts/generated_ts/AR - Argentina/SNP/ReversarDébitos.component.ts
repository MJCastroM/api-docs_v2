import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ReversarDbitos',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ReversarDebitosComponent {
  // Cabecera e info-card
  pageTitle = 'Reversar Debitos';
  description = `Metodo para solicitar el reverso de un debito indicado.`;
  pubName    = 'BTSNP.ReversarDebitos';
  programa   = 'RBTPG336';
  scope      = 'Argentina';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['prestacion', 'empresaOriginante', 'clienteUId', 'idCliente', 'tipoDeDebito', 'fechaVencimiento', 'referencia'];
  inputData  = [{ Nombre: 'prestacion', Tipo: 'String', Comentarios: 'Identificador de prestacion.' }, { Nombre: 'empresaOriginante', Tipo: 'String', Comentarios: 'Identificador de la empresa originante.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico del cliente.' }, { Nombre: 'idCliente', Tipo: 'String', Comentarios: 'Identificador del Cliente SNP.' }, { Nombre: 'tipoDeDebito', Tipo: 'Byte', Comentarios: 'Tipo de debito (1=Abierto/2=Cerrado).' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia del debito.' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '30002', '30003', '30004', '30005', '30006', '30007', '30008', '40001', '40002', '40003', '40004', '40011'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de la empresa originante.' }, { Codigo: '30003', Descripcion: 'No se recibio el tipo de debito.' }, { Codigo: '30004', Descripcion: 'No se recibio la prestacion.' }, { Codigo: '30005', Descripcion: 'No se recibio el ID del cliente SNP.' }, { Codigo: '30006', Descripcion: 'No se recibio la fecha de vencimiento.' }, { Codigo: '30007', Descripcion: 'El tipo de debito no es correcto.' }, { Codigo: '30008', Descripcion: 'No se encontro un cliente para el identificador: [Numero de identificador].' }, { Codigo: '40001', Descripcion: 'No se puede realizar el reverso debido al tiempo de transcurrido desde la fecha de vencimiento.' }, { Codigo: '40002', Descripcion: 'No se puede reversar el debito el mismo dia de contabilizado.' }, { Codigo: '40003', Descripcion: 'Debito no contabilizado.' }, { Codigo: '40004', Descripcion: 'No existe el debito recibido.' }, { Codigo: '40011', Descripcion: 'Ya existe un reverso en curso' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSNP.ReversarDebito>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>e8c844e3a0F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>2</bts:clienteUId>
         <bts:empresaOriginante>3050001626</bts:empresaOriginante>
         <bts:tipoDeDebito>1</bts:tipoDeDebito>
         <bts:prestacion>DEB RIO</bts:prestacion>
         <bts:idCliente>2750101598490000002000</bts:idCliente>
         <bts:fechaVencimiento>2019-11-20</bts:fechaVencimiento>
         <bts:referencia>015984900000216</bts:referencia>
      </bts:BTSNP.ReversarDebito>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?ObtenerEmpresasOriginantes' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{   
		"Btinreq": {
			"Device": "AC",
			"Usuario": "BANTOTAL",
			"Requerimiento": "",
			"Canal": "BTDIGITAL",
			"Token": "e8c844e3a0F955E77534D3E0"
		},
		"clienteUId": 2,
		"empresaOriginante": "3050001626",
		"tipoDeDebito": 1,
		"prestacion": "DEB RIO",
		"idCliente": "2750101598490000002000",
		"fechaVencimiento": "2019-11-20",
		"referencia": "015984900000216"
	}` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSNP.ReversarDebitoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>e8c844e3a0F955E77534D3E0</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1632</Numero>
            <Servicio>BTSNP.ReversarDebito</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:16:42</Hora>
         </Btoutreq>
      </BTSNP.ReversarDebitoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `` } };

  // Datos estructurados
  structuredTypes = [];
}
