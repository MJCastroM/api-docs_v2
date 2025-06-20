import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerPeriodoEntreCuotas',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPeriodoEntreCuotasComponent1750446218660 {
  pageTitle        = 'Obtener Período Entre Cuotas';
  description      = `Método para obtener los períodos entre cuotas parametrizados de un producto de préstamo.`;
  pubName    = 'BTModeladorPrestamos.ObtenerPeriodoEntreCuotas';
  programa   = 'RBTPG350';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador de producto.' }, { Nombre: 'parametro', Tipo: 'Short', Comentarios: '[Hidden: Valor \'401\' definido por defecto].' }];
  outputData = [{ Nombre: 'minimo', Tipo: 'Long', Comentarios: 'Valor mínimo de período de cuotas.' }, { Nombre: 'maximo', Tipo: 'Long', Comentarios: 'Valor máximo de período de cuotas.' }, { Nombre: 'valorPorDefecto', Tipo: 'Long', Comentarios: 'Valor por defecto de período de cuotas.' }, { Nombre: 'tipo', Tipo: 'Long', Comentarios: 'Tipo de cuotas.' }, { Nombre: 'sdtListaValores', Tipo: '[sBTValor](#sbtvalor)', Comentarios: 'Listado de valores posibles.' }];
  errors     = [{ Codigo: '30002', Descripcion: 'Existe registro con la cuenta indicada.' }, { Codigo: '30003', Descripcion: 'No existe registro para el identificador único.' }, { Codigo: '30004', Descripcion: 'No existe registro para el producto indicado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTModeladorPrestamos.ObtenerPeriodoEntreCuotas>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>194002532CD285A89A23FBEE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:productoUId>105</bts:productoUId>
      </bts:BTModeladorPrestamos.ObtenerPeriodoEntreCuotas>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "1511184612CD285A89A23FBE",
        "Device": ""
    },
    "productoUId": "105"
}` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTModeladorPrestamos.ObtenerPeriodoEntreCuotasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>194002532CD285A89A23FBEE</Token>
            <Device/>
         </Btinreq>
         <minimo>0</minimo>
         <maximo>0</maximo>
         <valorPorDefecto>0</valorPorDefecto>
         <tipo>Lista</tipo>
         <sdtListaValores>
            <SdtsBTValor>
               <valor>30</valor>
            </SdtsBTValor>
            <SdtsBTValor>
               <valor>60</valor>
            </SdtsBTValor>
         </sdtListaValores>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTModeladorPrestamos.ObtenerPeriodoEntreCuotas</Servicio>
            <Fecha>2021-11-03</Fecha>
            <Hora>18:10:12</Hora>
            <Requerimiento/>
            <Numero>8632</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTModeladorPrestamos.ObtenerPeriodoEntreCuotasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "1511184612CD285A89A23FBE",
        "Device": ""
    },
    "minimo": 0,
    "maximo": 0,
    "valorPorDefecto": 0,
    "tipo": "Lista",
    "sdtListaValores": {
        "SdtsBTValor": [
            {
                "valor": 30
            },
            {
                "valor": 60
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTModeladorPrestamos.ObtenerPeriodoEntreCuotas",
        "Fecha": "2021-11-03",
        "Hora": "17:14:29",
        "Requerimiento": "",
        "Numero": 8487,
        "Estado": "OK"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTValor', fields: [{ Nombre: 'valor', Tipo: 'Long', Comentarios: 'Valor de período de cuotas.' }] }];
}
