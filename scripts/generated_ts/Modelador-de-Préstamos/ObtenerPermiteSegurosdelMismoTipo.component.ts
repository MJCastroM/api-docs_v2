import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerPermiteSegurosdelMismoTipo',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPermiteSegurosdelMismoTipoComponent1751987197927 {
  pageTitle        = 'Obtener Permite Seguros del Mismo Tipo';
  description      = `Método para obtener si un producto de préstamo permite seguros del mismo tipo.`;
  pubName    = 'BTModeladorPrestamos.ObtenerPermiteSegurosDelMismoTipo';
  programa   = 'RBTPG353';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador de producto.' }, { Nombre: 'parametro', Tipo: 'Short', Comentarios: '[Hidden: Valor \'362\' definido por defecto].' }];
  outputData = [{ Nombre: 'valor', Tipo: 'String', Comentarios: 'Permite o no seguros del mismo tipo.' }];
  errors     = [{ Código: '30002', Descripción: 'Existe registro con la cuenta indicada.' }, { Código: '30003', Descripción: 'No existe registro para el identificador único.' }, { Código: '30004', Descripción: 'No existe registro para el producto indicado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTModeladorPrestamos.ObtenerPermiteSegurosDelMismoTipo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>194002532CD285A89A23FBEE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:productoUId>105</bts:productoUId>
      </bts:BTModeladorPrestamos.ObtenerPermiteSegurosDelMismoTipo>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTModeladorPrestamos.ObtenerPermiteSegurosDelMismoTipoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>194002532CD285A89A23FBEE</Token>
            <Device/>
         </Btinreq>
         <valor>N</valor>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTModeladorPrestamos.ObtenerPermiteSegurosDelMismoTipo</Servicio>
            <Fecha>2021-11-03</Fecha>
            <Hora>18:15:28</Hora>
            <Requerimiento/>
            <Numero>8635</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTModeladorPrestamos.ObtenerPermiteSegurosDelMismoTipoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
` }
  };

  structuredTypes = [];
}
