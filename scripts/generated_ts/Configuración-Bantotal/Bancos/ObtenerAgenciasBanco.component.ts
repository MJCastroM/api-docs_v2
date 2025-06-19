import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerAgenciasBanco',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerAgenciasBancoComponent1750272790972 {
  pageTitle        = 'Obtener Agencias Banco';
  description      = `Método para obtener un listado de las agencias de un banco.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerAgenciasBanco';
  programa   = 'RBTPG236';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'bancoId', Tipo: 'Long', Comentarios: 'Identificador de Banco.' }];
  outputData = [{ Nombre: 'sdtAgencias', Tipo: '[sBTAgenciaBanco](#sbtagenciabanco)', Comentarios: 'Listado de las agencias.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerAgenciasBanco>
         <bts:Btinreq>
            <bts:Device></bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>91fac9687a4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:bancoId>2</bts:bancoId>
      </bts:BTConfiguracionBantotal.ObtenerAgenciasBanco>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerAgenciasBanco=\' \
  -H \'Content-Type: application/json\' \
  -H \'Postman-Token: e985ea19-7527-41bc-bc60-fe431d9352b0,dbbd8038-2208-48fc-9395-1dfa11f1a0b1\' \
  -H \'User-Agent: PostmanRuntime/7.16.3\' \
  -H \'cache-control: no-cache\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "bancoId": 2
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerAgenciasBancoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device/>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>91fac9687a4A8B5C60A82434</Token>
         </Btinreq>
         <sdtAgencias>
            <sBTAgenciaBanco>
               <banco>2</banco>
               <sucursal>5</sucursal>
               <nombre>Sucursal Central</nombre>
               <codPostal>11400</codPostal>
            </sBTAgenciaBanco>
         </sdtAgencias>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>4428</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerAgenciasBanco</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Requerimiento/>
            <Hora>16:41:42</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerAgenciasBancoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtAgencias": {
      "sBTAgenciaBanco": [ {
         "Sucursal": "5",
         "CodPostal": "11400",
         "Banco": "2",
         "Nombre": "Sucursal Central"
   } ]
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "4438",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerAgenciasBanco",
      "Fecha": "2018-12-14",
      "Requerimiento": "",
      "Hora": "17:00:28",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTAgenciaBanco', fields: [{ Nombre: 'banco', Tipo: 'Int', Comentarios: 'Identificador de banco.' }, { Nombre: 'codPostal', Tipo: 'String', Comentarios: 'Código postal.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'sucursal', Tipo: 'Long', Comentarios: 'Identificador de sucursal.' }] }];
}
