import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerRubrosBolsa',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerRubrosBolsaComponent1750272791308 {
  pageTitle        = 'Obtener Rubros Bolsa';
  description      = `Método para obtener posibles rubros de bolsa ingresados en el sistema.`;
  pubName    = 'BTIndicadores.ObtenerRubrosBolsa';
  programa   = 'RBTPG708';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtRubrosBolsa', Tipo: '[sBTRubroBolsa](#sbtrubrobolsa)', Comentarios: 'Listado de rubros de bolsa.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTIndicadores.ObtenerRubrosBolsa>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>?</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerRubrosBolsa>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerRubrosBolsa\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
   "Btinreq": {
      "Device": 1,
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7",
      "Usuario": "INSTALADOR",
      "Requerimiento": "?"
   }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTIndicadores.ObtenerRubrosBolsaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>?</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>959C2E0AEF210ABC0D8AA8F7</Token>
         </Btinreq>
         <sdtRubrosBolsa>
            <sBTRubroBolsa>
               <moneda>0</moneda>
               <cuentaCliente>0</cuentaCliente>
               <signoMoneda>$</signoMoneda>
               <ocurrencias>9</ocurrencias>
               <descripcion>Mon.Y Bill.En Empresa-Ventanilla</descripcion>
               <subOperacion>400</subOperacion>
               <rubro>101002001</rubro>
               <papel>0</papel>
               <nombreSucursal>Casa Matriz</nombreSucursal>
               <nombrePapel>Billete</nombrePapel>
               <empresa>1</empresa>
               <tipoOperacion>0</tipoOperacion>
               <operacion>0</operacion>
               <sucursal>1</sucursal>
               <nombreEmpresa>Finaxis</nombreEmpresa>
            </sBTRubroBolsa>
            <sBTRubroBolsa>
               ...
            </sBTRubroBolsa>
            ...
         </sdtRubrosBolsa>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11987</Numero>
            <Estado>OK</Estado>
            <Servicio>BTIndicadores.ObtenerRubrosBolsa</Servicio>
            <Requerimiento>?</Requerimiento>
            <Fecha>2023-05-22</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>13:55:55</Hora>
         </Btoutreq>
      </BTIndicadores.ObtenerRubrosBolsaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
  "Btinreq": {
      "Device": 1,
      "Usuario": "INSTALADOR",
      "Requerimiento": "?",
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7"
   },
   "sdtRubrosBolsa": {
      "sBTRubroBolsa": [
      {
         "moneda": 0,
         "cuentaCliente": 0,
         "signoMoneda": "$",
         "ocurrencias": 9,
         "descripcion": "Mon.Y Bill.En Empresa-Ventanilla",
         "subOperacion": 400,
         "rubro": 101002001,
         "papel": 0,
         "nombreSucursal": "Casa Matriz",
         "nombrePapel": "Billete",
         "empresa": 1,
         "tipoOperacion": 0,
         "operacion": 0,
         "sucursal": 1,
         "nombreEmpresa": "Finaxis"
      },
      {
         ...
      },
      ...
      ]
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": 11987,
      "Estado": "OK",
      "Servicio": "BTIndicadores.ObtenerRubrosBolsa",
      "Requerimiento": "?",
      "Fecha": "2023-05-22",
      "Canal": "BTDIGITAL",
      "Hora": "13:55:55"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTRubroBolsa', fields: [{ Nombre: 'cuentaCliente', Tipo: 'Int', Comentarios: 'Cuenta cliente.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Nombre del rubro.' }, { Nombre: 'empresa', Tipo: 'Int', Comentarios: 'Identificador de empresa.' }, { Nombre: 'moneda', Tipo: 'Int', Comentarios: 'Identificador de moneda.' }, { Nombre: 'nombreEmpresa', Tipo: 'String', Comentarios: 'Nombre de la empresa.' }, { Nombre: 'nombrePapel', Tipo: 'String', Comentarios: 'Nombre del papel.' }, { Nombre: 'nombreSucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'ocurrencias', Tipo: 'Int', Comentarios: 'Ocurrencias.' }, { Nombre: 'operacion', Tipo: 'Int', Comentarios: 'Identificador de operación.' }, { Nombre: 'papel', Tipo: 'Int', Comentarios: 'Identificador de papel.' }, { Nombre: 'rubro', Tipo: 'Int', Comentarios: 'Número de rubro.' }, { Nombre: 'signoMoneda', Tipo: 'String', Comentarios: 'Signo de la moneda.' }, { Nombre: 'subOperacion', Tipo: 'Int', Comentarios: 'Identificador de sub operación.' }, { Nombre: 'sucursal', Tipo: 'Int', Comentarios: 'Identificador de sucursal.' }, { Nombre: 'tipoOperacion', Tipo: 'Int', Comentarios: 'Identificador de tipo de operación.' }] }];
}
