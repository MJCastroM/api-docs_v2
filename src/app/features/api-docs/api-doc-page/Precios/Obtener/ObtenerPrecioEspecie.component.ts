import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPrecioEspecie',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPrecioEspecieComponent1750945334718 {
  pageTitle        = 'Obtener Precio Especie';
  description      = `Método para obtener la cotización de una especie en moneda nacional.`;
  pubName    = 'BTPrecios.ObtenerPrecioEspecie';
  programa   = 'RBTPG227';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'especie', Tipo: 'Long', Comentarios: 'Identificador de la especie.' }];
  outputData = [{ Nombre: 'precio', Tipo: 'Double', Comentarios: 'Cotización.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió una especie.' }, { Codigo: '40001', Descripcion: 'La especie no es un índice.' }, { Codigo: '40002', Descripcion: 'La especie no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrecios.ObtenerPrecioEspecie>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1589809070F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:especie>50</bts:especie>
      </bts:BTPrecios.ObtenerPrecioEspecie>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrecios.ObtenerPrecioEspecieResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1589809070F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <precio>3.0591</precio>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrecios.ObtenerPrecioEspecie</Servicio>
            <Fecha>2019-07-26</Fecha>
            <Hora>11:21:33</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6570</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrecios.ObtenerPrecioEspecieResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
` }
  };

  structuredTypes = [];
}
