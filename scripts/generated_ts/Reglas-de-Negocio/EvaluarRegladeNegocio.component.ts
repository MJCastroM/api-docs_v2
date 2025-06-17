import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-EvaluarRegladeNegocio',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class EvaluarRegladeNegocioComponent {
  // Cabecera e info-card
  pageTitle = 'Evaluar Regla de Negocio';
  description = `Metodo para evaluar una determinada regla de negocio.`;
  pubName    = 'BTReglasNegocio.EvaluarReglaNegocio';
  programa   = 'RBTPGR55';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['reglaId', 'sdtVariables'];
  inputData  = [{ Nombre: 'reglaId', Tipo: 'Long', Comentarios: 'Codigo de regla de negocio.' }, { Nombre: 'sdtVariables', Tipo: '[sBTVariable](#sbtvariable)', Comentarios: 'Listado de variables.' }];
  outputCols = ['resultado', 'retorno'];
  outputData = [{ Nombre: 'resultado', Tipo: 'String', Comentarios: 'Resultado de la evaluacion.' }, { Nombre: 'retorno', Tipo: 'String', Comentarios: 'Retorno de la evaluacion.' }];
  errorCols  = ['1011050', '40001'];
  errors     = [{ Codigo: '1011050', Descripcion: 'No se recibio ID de Regla.' }, { Codigo: '40001', Descripcion: 'Error de Parametrizacion' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTReglasNegocio.EvaluarReglaNegocio>
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
      </bts:BTReglasNegocio.EvaluarReglaNegocio>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTReglasNegocio?EvaluarReglaNegocio' \
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
      <BTReglasNegocio.EvaluarReglaNegocioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>86b12d9cbaCD285A89A23FBE</Token>
         </Btinreq>
         <resultado>VERDADERO</resultado>
         <retorno>3</retorno>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>44659</Numero>
            <Estado>OK</Estado>
            <Servicio>BTReglasNegocio.EvaluarReglaNegocio</Servicio>
            <Fecha>2022-06-02</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>10:27:36</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTReglasNegocio.EvaluarReglaNegocioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "c2cfd09eff4A8B5C60A82434"
    },
    "resultado": "VERDADERO",
    "retorno": "3",
    "Erroresnegocio": {
    },
    "Btoutreq": {
        "Numero": "44659",
        "Estado": "OK",
        "Servicio": "BTReglasNegocio.EvaluarReglaNegocio",
        "Fecha": "2022-06-02",
        "Requerimiento": "1",
        "Hora": "10:27:36",
        "Canal": "BTDIGITAL"
    }
}` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de variable.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de variable.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
