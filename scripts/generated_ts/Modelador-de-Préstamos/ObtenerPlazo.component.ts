import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerPlazo',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPlazoComponent1750268696679 {
  pageTitle        = 'Obtener Plazo';
  description      = `Método para obtener los plazos parametrizados de un producto de préstamo.`;
  pubName    = 'BTModeladorPrestamos.ObtenerPlazo';
  programa   = 'RBTPG350';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador de producto.' }, { Nombre: 'parametro', Tipo: 'Short', Comentarios: '[Hidden: Valor \'410\' definido por defecto].' }];
  outputData = [{ Nombre: 'minimo', Tipo: 'Long', Comentarios: 'Valor mínimo de plazo de cuotas.' }, { Nombre: 'maximo', Tipo: 'Long', Comentarios: 'Valor máximo de plazo de cuotas.' }, { Nombre: 'valorPorDefecto', Tipo: 'Long', Comentarios: 'Valor por defecto de plazo de cuotas.' }, { Nombre: 'tipo', Tipo: 'Long', Comentarios: 'Tipo de cuotas.' }, { Nombre: 'sdtListaValores', Tipo: '[sBTValor](#sbtvalor)', Comentarios: 'Listado de valores posibles.' }];
  errors     = [{ Codigo: '30002', Descripcion: 'Existe registro con la cuenta indicada.' }, { Codigo: '30003', Descripcion: 'No existe registro para el identificador único.' }, { Codigo: '30004', Descripcion: 'No existe registro para el producto indicado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTModeladorPrestamos.ObtenerPlazo>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1047454914CD285A89A23FBE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:productoUId>105</bts:productoUId>
      </bts:BTModeladorPrestamos.ObtenerPlazo>
   </soapenv:Body>
</soapenv:Envelope>`, json: `{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "1047454914CD285A89A23FBE",
        "Device": ""
    },
    "productoUId": "105"
}` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTModeladorPrestamos.ObtenerPlazoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>1047454914CD285A89A23FBE</Token>
            <Device/>
         </Btinreq>
         <minimo>1</minimo>
         <maximo>99999</maximo>
         <valorPorDefecto>30</valorPorDefecto>
         <tipo>Valor</tipo>
         <sdtListaValores></sdtListaValores>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTModeladorPrestamos.ObtenerPlazo</Servicio>
            <Fecha>2021-11-04</Fecha>
            <Hora>10:00:29</Hora>
            <Requerimiento/>
            <Numero>8652</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTModeladorPrestamos.ObtenerPlazoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "1047454914CD285A89A23FBE",
        "Device": ""
    },
    "minimo": 1,
    "maximo": 99999,
    "valorPorDefecto": 30,
    "tipo": "Valor",
    "sdtListaValores": {
        "SdtsBTValor": []
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTModeladorPrestamos.ObtenerPlazo",
        "Fecha": "2021-11-04",
        "Hora": "09:57:14",
        "Requerimiento": "",
        "Numero": 8650,
        "Estado": "OK"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTValor', fields: [{ Nombre: 'valor', Tipo: 'Long', Comentarios: 'Valor de plazo de cuotas.' }] }];
}
