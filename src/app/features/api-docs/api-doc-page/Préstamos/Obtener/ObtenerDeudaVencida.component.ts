import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDeudaVencida',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDeudaVencidaComponent1750268698104 {
  pageTitle        = 'Obtener Deuda Vencida';
  description      = `Método para obtener la deuda vencida de un préstamo a una determinada fecha.`;
  pubName    = 'BTPrestamos.ObtenerDeudaVencida';
  programa   = 'RBTPG404';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación simulada.' }, { Nombre: 'fechaDeCalculo', Tipo: 'Date', Comentarios: 'Fecha a la que se calcula la deuda.' }];
  outputData = [{ Nombre: 'deuda', Tipo: 'Double', Comentarios: 'Deuda a la fecha.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de operación.' }, { Codigo: '30002', Descripcion: 'No se recuperó la operación para el identificador: [Número de identificador].' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDeudaVencida>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>2062732190F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>12</bts:operacionUId>
         <bts:fechaDeCalculo>2020-11-11</bts:fechaDeCalculo>
      </bts:BTPrestamos.ObtenerDeudaVencida>
   </soapenv:Body>
</soapenv:Envelope>`, json: `` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ObtenerDeudaVencidaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>2062732190F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <deuda>262752.52</deuda>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerDeudaVencida</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Hora>16:56:39</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6989</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerDeudaVencidaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `` }
  };

  structuredTypes = [];
}
