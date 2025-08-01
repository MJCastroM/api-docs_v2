import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerCapital',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCapitalComponent1751987197907 {
  pageTitle        = 'Obtener Capital';
  description      = `Método para obtener capital mínimo, máximo y promedio de un producto de préstamo.`;
  pubName    = 'BTModeladorPrestamos.ObtenerCapital';
  programa   = 'RBTPG352';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador de producto.' }];
  outputData = [{ Nombre: 'minimo', Tipo: 'Double', Comentarios: 'Capital mínimo posible para el producto.' }, { Nombre: 'maximo', Tipo: 'Double', Comentarios: 'Capital máximo posible para el producto.' }, { Nombre: 'valorPorDefecto', Tipo: 'Double', Comentarios: 'Capital por defecto para el producto.' }];
  errors     = [{ Código: '30002', Descripción: 'Existe registro con la cuenta indicada.' }, { Código: '30003', Descripción: 'No existe registro para el identificador único.' }, { Código: '30004', Descripción: 'No existe registro para el producto indicado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTModeladorPrestamos.ObtenerCapital>
       <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>194002532CD285A89A23FBEE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:productoUId>105</bts:productoUId>
      </bts:BTModeladorPrestamos.ObtenerCapital>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTModeladorPrestamos.ObtenerCapitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>194002532CD285A89A23FBEE</Token>
            <Device/>
         </Btinreq>
         <minimo>1</minimo>
         <maximo>999999999999</maximo>
         <valorPorDefecto>1000</valorPorDefecto>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTModeladorPrestamos.ObtenerCapital</Servicio>
            <Fecha>2021-11-03</Fecha>
            <Hora>18:13:56</Hora>
            <Requerimiento/>
            <Numero>8634</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTModeladorPrestamos.ObtenerCapitalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
` }
  };

  structuredTypes = [];
}
