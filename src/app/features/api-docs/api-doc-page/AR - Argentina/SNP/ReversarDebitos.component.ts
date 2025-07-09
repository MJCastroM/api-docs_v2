import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ReversarDebitos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ReversarDebitosComponent1751987195506 {
  pageTitle        = 'Reversar Débitos';
  description      = `Método para solicitar el reverso de un débito indicado.`;
  pubName    = 'BTSNP.ReversarDebitos';
  programa   = 'RBTPG336';
  scope      = 'Argentina';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'prestacion', Tipo: 'String', Comentarios: 'Identificador de prestación.' }, { Nombre: 'empresaOriginante', Tipo: 'String', Comentarios: 'Identificador de la empresa originante.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'idCliente', Tipo: 'String', Comentarios: 'Identificador del Cliente SNP.' }, { Nombre: 'tipoDeDebito', Tipo: 'Byte', Comentarios: 'Tipo de débito (1=Abierto/2=Cerrado).' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia del débito.' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió identificador del cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador de la empresa originante.' }, { Código: '30003', Descripción: 'No se recibió el tipo de débito.' }, { Código: '30004', Descripción: 'No se recibió la prestación.' }, { Código: '30005', Descripción: 'No se recibió el ID del cliente SNP.' }, { Código: '30006', Descripción: 'No se recibió la fecha de vencimiento.' }, { Código: '30007', Descripción: 'El tipo de débito no es correcto.' }, { Código: '30008', Descripción: 'No se encontró un cliente para el identificador: [Número de identificador].' }, { Código: '40001', Descripción: 'No se puede realizar el reverso debido al tiempo de transcurrido desde la fecha de vencimiento.' }, { Código: '40002', Descripción: 'No se puede reversar el débito el mismo dia de contabilizado.' }, { Código: '40003', Descripción: 'Débito no contabilizado.' }, { Código: '40004', Descripción: 'No existe el débito recibido.' }, { Código: '40011', Descripción: 'Ya existe un reverso en curso' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?ObtenerEmpresasOriginantes\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{   
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
	}` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
</SOAP-ENV:Envelope>`,
    json: `
` }
  };

  structuredTypes = [];
}
