import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-HabilitarIntegrantedeunGrupo',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class HabilitarIntegrantedeGrupoComponent {
  // Cabecera e info-card
  pageTitle = 'Habilitar Integrante de Grupo';
  description = `Metodo para habilitar un integrante de un grupo de credito.`;
  pubName    = 'BTMicrofinanzas.HabilitarIntegranteGrupo';
  programa   = 'RBTPG437';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['grupoId', 'clienteUId'];
  inputData  = [{ Nombre: 'grupoId', Tipo: 'Int', Comentarios: 'Identificador de grupo.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico del cliente.' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '30002', '30014', '40001'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio codigo de grupo.' }, { Codigo: '30002', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30014', Descripcion: 'No existe registro con el identificador indicado.' }, { Codigo: '40001', Descripcion: 'No se puede habilitar el integrante.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.HabilitarIntegranteGrupo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1204799820CD285A89A23FBE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:grupoId>1</bts:grupoId>
         <bts:clienteUId>156</bts:clienteUId>
      </bts:BTMicrofinanzas.HabilitarIntegranteGrupo>
   </soapenv:Body>
</soapenv:Envelope>`, json: `` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.HabilitarIntegranteGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1414147105CD285A89A23FBE</Token>
            <Device>AC</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.HabilitarIntegranteGrupo</Servicio>
            <Fecha>2020-04-20</Fecha>
            <Hora>16:59:02</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>5004</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.HabilitarIntegranteGrupoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `` } };

  // Datos estructurados
  structuredTypes = [];
}
