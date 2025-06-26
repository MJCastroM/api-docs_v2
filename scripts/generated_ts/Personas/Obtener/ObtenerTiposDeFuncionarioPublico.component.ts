import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTiposDeFuncionarioPublico',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTiposDeFuncionarioPublicoComponent1750945334530 {
  pageTitle        = 'Obtener Tipos de Funcionario Público';
  description      = `Método para obtener los tipos de funcionario público.`;
  pubName    = 'BTPersonas.ObtenerTiposDeFuncionarioPublico';
  programa   = 'RBTPG554';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtTiposFuncionarios', Tipo: '[sBTTipoFuncionario](#sbttipofuncionario)', Comentarios: 'Listado de los tipos de funcionario público.' }];
  errors     = [{ Codigo: '40002', Descripcion: 'La guía 8260 no está parametrizada.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerTiposDeFuncionarioPublico>
          <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9436BF7CB5B5BB404CC6E5A7</bts:Token>
         </bts:Btinreq>
      </bts:BTPersonas.ObtenerTiposDeFuncionarioPublico>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerTiposDeFuncionarioPublico\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerTiposDeFuncionarioPublicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>9436BF7CB5B5BB404CC6E5A7</Token>
         </Btinreq>
         <sdtTiposFuncionarios>
            <sBTTipoFuncionario>
               <descripcion>PEP Nacional</descripcion>
               <identificador>1</identificador>
            </sBTTipoFuncionario>
            <sBTTipoFuncionario>
               <descripcion>PEP Extranjero</descripcion>
               <identificador>2</identificador>
            </sBTTipoFuncionario>
         </sdtTiposFuncionarios>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>20051</Numero>
            <Servicio>BTPersonas.ObtenerTiposDeFuncionarioPublico</Servicio>
            <Estado>OK</Estado>
            <Fecha>2024-04-23</Fecha>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>09:54:54</Hora>
         </Btoutreq>
      </BTPersonas.ObtenerTiposDeFuncionarioPublicoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
        "Requerimiento": 0,
        "Canal": "BTDIGITAL",
        "Device": "GZ",
        "Usuario": "Instalador",
        "Token": "8e3a8ef2dd99865B3A2E76CF"
    },
    "sdtTiposFuncionarios": {
        "sBTTipoFuncionario": [
        {
            "descripcion": "PEP Nacional",
            "identificador": 1
        },
        {
            "descripcion": "PEP Extranjero",
            "identificador": 2
        },
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 249703,
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerTiposDeFuncionarioPublico",
        "Requerimiento": 0,
        "Fecha": "2023-10-10",
        "Hora": "17:11:02",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTTipoFuncionario', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del tipo de funcionario público.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador del tipo de funcionario público.' }] }];
}
