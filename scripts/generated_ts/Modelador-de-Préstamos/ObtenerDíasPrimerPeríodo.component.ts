import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerDasPrimerPerodo',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDiasPrimerPeriodoComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Dias Primer Periodo';
  description = `Metodo para obtener cantidad minima y maxima de dias para el primer periodo de un producto de prestamo.`;
  pubName    = 'BTModeladorPrestamos.ObtenerDiasPrimerPeriodo';
  programa   = 'RBTPG354';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['productoUId'];
  inputData  = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador de producto.' }];
  outputCols = ['minimo', 'maximo'];
  outputData = [{ Nombre: 'minimo', Tipo: 'Long', Comentarios: 'Minimo de dias posibles para el primer periodo.' }, { Nombre: 'maximo', Tipo: 'Long', Comentarios: 'Maximo de dias posibles para el primer periodo.' }];
  errorCols  = ['30002', '30003', '30004'];
  errors     = [{ Codigo: '30002', Descripcion: 'Existe registro con la cuenta indicada.' }, { Codigo: '30003', Descripcion: 'No existe registro para el identificador unico.' }, { Codigo: '30004', Descripcion: 'No existe registro para el producto indicado.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTModeladorPrestamos.ObtenerDiasPrimerPeriodo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>194002532CD285A89A23FBEE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:productoUId>105</bts:productoUId>
      </bts:BTModeladorPrestamos.ObtenerDiasPrimerPeriodo>
   </soapenv:Body>
</soapenv:Envelope>`, json: `` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTModeladorPrestamos.ObtenerDiasPrimerPeriodoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>194002532CD285A89A23FBEE</Token>
            <Device/>
         </Btinreq>
         <minimo>1</minimo>
         <maximo>999</maximo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTModeladorPrestamos.ObtenerDiasPrimerPeriodo</Servicio>
            <Fecha>2021-11-03</Fecha>
            <Hora>18:18:16</Hora>
            <Requerimiento/>
            <Numero>8637</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTModeladorPrestamos.ObtenerDiasPrimerPeriodoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `` } };

  // Datos estructurados
  structuredTypes = [];
}
