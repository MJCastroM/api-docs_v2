import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ValidarDatosRegladeNegocio',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ValidarDatosRegladeNegocioComponent {
  // Cabecera e info-card
  pageTitle = 'Validar Datos Regla de Negocio';
  description = `Metodo para validar los datos de una determinada regla de negocio.`;
  pubName    = 'BTReglasNegocio.ValidarDatosReglaNegocio';
  programa   = 'RBTPGR56';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['reglaId', 'sdtVariables'];
  inputData  = [{ Nombre: 'reglaId', Tipo: 'Long', Comentarios: 'Codigo de regla de negocio.' }, { Nombre: 'sdtVariables', Tipo: '[sBTVariable](#sbtvariable)', Comentarios: 'Listado de variables.' }];
  outputCols = ['resultado', 'sdtRetornos', 'cantidadResultados'];
  outputData = [{ Nombre: 'resultado', Tipo: 'String', Comentarios: 'Resultado de la evaluacion.' }, { Nombre: 'sdtRetornos', Tipo: '[sBTRetorno](#sbtretorno)', Comentarios: 'Listado de retornos.' }, { Nombre: 'cantidadResultados', Tipo: 'Long', Comentarios: 'Cantidad de resultados.' }];
  errorCols  = ['1011050', '40001'];
  errors     = [{ Codigo: '1011050', Descripcion: 'No se recibio ID de Regla.' }, { Codigo: '40001', Descripcion: 'Error de Parametrizacion' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTReglasNegocio.ValidarDatosReglaNegocio>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>86b12d9cbaCD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:reglaId>4</bts:reglaId>
         <bts:sdtVariables>
            <bts:SdtsBTVariable>
               <bts:valor>S</bts:valor>
               <bts:nombre>CHECKAUX2</bts:nombre>
            </bts:SdtsBTVariable>
         </bts:sdtVariables>
      </bts:BTReglasNegocio.ValidarDatosReglaNegocio>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTReglasNegocio?ValidarDatosReglaNegocio' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "bc8b678bc44A8B5C60A82434"
    },
    "reglaId": "4",
    "sdtVariables": {
        "SdtsBTVariable": {
            "valor": "S",
            "nombre": "CHECKAUX2"
        },
    },
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTReglasNegocio.ValidarDatosReglaNegocioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>86b12d9cbaCD285A89A23FBE</Token>
         </Btinreq>
         <cantidadResultados>1</cantidadResultados>
         <sdtRetornos>
            <SdtsBTRetorno>
               <retorno>3</retorno>
            </SdtsBTRetorno>
         </sdtRetornos>
         <resultado>VERDADERO</resultado>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>45114</Numero>
            <Estado>OK</Estado>
            <Servicio>BTReglasNegocio.ValidarDatosReglaNegocio</Servicio>
            <Fecha>2022-06-02</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:28:57</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTReglasNegocio.ValidarDatosReglaNegocioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "c2cfd09eff4A8B5C60A82434" 
    }, 
    "cantidadResultados": "1", 
    "sdtRetornos": { 
        "SdtsBTRetorno": { 
            "retorno": "3" 
        } 
    }, 
    "resultado": "VERDADERO", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "45114", 
        "Estado": "OK", 
        "Servicio": "BTReglasNegocio.ValidarDatosReglaNegocio", 
        "Fecha": "2022-06-02", 
        "Requerimiento": "1", 
        "Hora": "12:28:57", 
        "Canal": "BTDIGITAL" 
    } 
}` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de variable.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de variable.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTRetorno', Tipo: '', Comentarios: '' }, { Nombre: '### sBTRetorno', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTRetorno son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'retorno', Tipo: 'String', Comentarios: 'Retorno de la evaluacion.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
