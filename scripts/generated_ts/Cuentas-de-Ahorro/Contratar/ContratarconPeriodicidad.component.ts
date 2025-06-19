import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ContratarconPeriodicidad',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarconPeriodicidadComponent1750272791145 {
  pageTitle        = 'Contratar con Periodicidad';
  description      = `Método para contratar un producto de cuenta de ahorro ingresando un período de acreditación.`;
  pubName    = 'BTCuentasDeAhorro.ContratarConPeriodicidad';
  programa   = 'RBTPG358';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador de Cliente.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador de Producto.' }, { Nombre: 'nombreSubcuenta', Tipo: 'String', Comentarios: 'Nombre de la Subcuenta.' }, { Nombre: 'periodoAcreditacion', Tipo: 'Long', Comentarios: 'Período de Acreditación de Intereses.' }, { Nombre: 'producto', Tipo: 'String', Comentarios: '[Hidden: Valor \'CA\' por defecto].' }];
  outputData = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador de la subcuenta contratada.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de cliente.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador único de producto.' }, { Codigo: '30003', Descripcion: 'El período de acreditación ingresado es inválido.' }, { Codigo: '31003', Descripcion: 'No existe registro para el identificador único.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
    <soapenv:Body>
      <bts:BTCuentasCorrientes.ContratarConPeriodicidad>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1335244350CD285A89A23FBE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10021</bts:clienteUId>
         <bts:productoUId>94</bts:productoUId>
         <bts:nombreSubcuenta>Caja de Ahorro</bts:nombreSubcuenta>
         <bts:periodoAcreditacion>1</bts:periodoAcreditacion>
      </bts:BTCuentasCorrientes.ContratarConPeriodicidad>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasDeAhorro.ContratarConPeriodicidadResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>1335244350CD285A89A23FBE</Token>
            <Device/>
         </Btinreq>
         <operacionUId>10210</operacionUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasCorrientes.ContratarConPeriodicidad</Servicio>
            <Fecha>2021-10-29</Fecha>
            <Hora>12:27:21</Hora>
            <Requerimiento/>
            <Numero>8442</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasDeAhorro.ContratarConPeriodicidadResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
` }
  };

  structuredTypes = [];
}
