import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ValidarDatosRegladeNegocio',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ValidarDatosRegladeNegocioComponent1750446218966 {
  pageTitle        = 'Validar Datos Regla de Negocio';
  description      = `Método para validar los datos de una determinada regla de negocio.`;
  pubName    = 'BTReglasNegocio.ValidarDatosReglaNegocio';
  programa   = 'RBTPGR56';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'reglaId', Tipo: 'Long', Comentarios: 'Código de regla de negocio.' }, { Nombre: 'sdtVariables', Tipo: '[sBTVariable](#sbtvariable)', Comentarios: 'Listado de variables.' }];
  outputData = [{ Nombre: 'resultado', Tipo: 'String', Comentarios: 'Resultado de la evaluación.' }, { Nombre: 'sdtRetornos', Tipo: '[sBTRetorno](#sbtretorno)', Comentarios: 'Listado de retornos.' }, { Nombre: 'cantidadResultados', Tipo: 'Long', Comentarios: 'Cantidad de resultados.' }];
  errors     = [{ Codigo: '1011050', Descripcion: 'No se recibió ID de Regla.' }, { Codigo: '40001', Descripcion: 'Error de Parametrización' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`, 
    json: `
curl -X POST \
    \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTReglasNegocio?ValidarDatosReglaNegocio\' \
    -H \'cache-control: no-cache\' \
    -H \'content-type: application/json\' \
    -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
    -d \'{
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
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
</SOAP-ENV:Envelope>`,  
    json: `
{ 
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
}` }
  };

  structuredTypes = [{ typeName: 'sBTVariable', fields: [{ Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de variable.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de variable.' }] }, { typeName: 'sBTRetorno', fields: [{ Nombre: 'retorno', Tipo: 'String', Comentarios: 'Retorno de la evaluación.' }] }];
}
