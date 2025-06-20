import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerEstadoCompra',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerEstadoCompraComponent1750446219017 {
  pageTitle        = 'Obtener Estado de Compra';
  description      = `Método para obtener el estado de la compra de un título.`;
  pubName    = 'BTTitulos.ObtenerEstadoCompra';
  programa   = 'RBTPG497';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }];
  outputData = [{ Nombre: 'respuesta', Tipo: 'String', Comentarios: 'Estado de la compra.' }, { Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Código de la respuesta.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de la operación.' }, { Codigo: '30011', Descripcion: 'No se recupero el identificador para la operación recibida.' }, { Codigo: '40001', Descripcion: 'No existe registro para el identificador indicado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTitulos.ObtenerEstadoCompra>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>6F467D9554D22BE00B36E963</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>44</bts:operacionUId>
      </bts:BTTitulos.ObtenerEstadoCompra>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTitulos.ObtenerEstadoCompraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>BANTOTAL</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>BEAC462EA5486D1445DEC75E</Token>
         </Btinreq>
         <respuesta>La concertación aún no fue enviada.</respuesta>
         <codigo>3</codigo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-06-04</Fecha>
            <Hora>12:38:06</Hora>
            <Numero>301</Numero>
            <Servicio>BTTitulos.ObtenerEstadoCompra</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTitulos.ObtenerEstadoCompraResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
` }
  };

  structuredTypes = [];
}
