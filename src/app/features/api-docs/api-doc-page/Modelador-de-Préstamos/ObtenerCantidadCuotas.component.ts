import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerCantidadCuotas',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCantidadCuotasComponent1751987197905 {
  pageTitle        = 'Obtener Cantidad Cuotas';
  description      = `Método para obtener la cantidad de cuotas parametrizadas de un producto de préstamo.`;
  pubName    = 'BTModeladorPrestamos.ObtenerCantidadCuotas';
  programa   = 'RBTPG350';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador de producto.' }, { Nombre: 'parametro', Tipo: 'Short', Comentarios: '[Hidden: Valor \'409\' definido por defecto].' }];
  outputData = [{ Nombre: 'minimo', Tipo: 'Long', Comentarios: 'Valor mínimo de cantidad de cuotas.' }, { Nombre: 'maximo', Tipo: 'Long', Comentarios: 'Valor máximo de cantidad de cuotas.' }, { Nombre: 'valorPorDefecto', Tipo: 'Long', Comentarios: 'Valor por defecto de cantidad de cuotas.' }, { Nombre: 'tipo', Tipo: 'Long', Comentarios: 'Tipo de cuotas.' }, { Nombre: 'sdtListaValores', Tipo: '[sBTValor](#sbtvalor)', Comentarios: 'Listado de valores.' }];
  errors     = [{ Código: '30002', Descripción: 'Existe registro con la cuenta indicada.' }, { Código: '30003', Descripción: 'No existe registro para el identificador único.' }, { Código: '30004', Descripción: 'No existe registro para el producto indicado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTModeladorPrestamos.ObtenerCantidadCuotas>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>194002532CD285A89A23FBEE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:productoUId>105</bts:productoUId>
      </bts:BTModeladorPrestamos.ObtenerCantidadCuotas>
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
      <BTModeladorPrestamos.ObtenerCantidadCuotasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
               <valor>6</valor>
            </SdtsBTValor>
            <SdtsBTValor>
               <valor>10</valor>
            </SdtsBTValor>
            <SdtsBTValor>
               <valor>12</valor>
            </SdtsBTValor>
            <SdtsBTValor>
               <valor>15</valor>
            </SdtsBTValor>
            <SdtsBTValor>
               <valor>18</valor>
            </SdtsBTValor>
            <SdtsBTValor>
               <valor>20</valor>
            </SdtsBTValor>
            <SdtsBTValor>
               <valor>24</valor>
            </SdtsBTValor>
            <SdtsBTValor>
               <valor>36</valor>
            </SdtsBTValor>
            <SdtsBTValor>
               <valor>60</valor>
            </SdtsBTValor>
            <SdtsBTValor>
               <valor>90</valor>
            </SdtsBTValor>
            <SdtsBTValor>
               <valor>120</valor>
            </SdtsBTValor>
            <SdtsBTValor>
               <valor>180</valor>
            </SdtsBTValor>
            <SdtsBTValor>
               <valor>240</valor>
            </SdtsBTValor>
         </sdtListaValores>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTModeladorPrestamos.ObtenerCantidadCuotas</Servicio>
            <Fecha>2021-11-03</Fecha>
            <Hora>18:08:24</Hora>
            <Requerimiento/>
            <Numero>8631</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTModeladorPrestamos.ObtenerCantidadCuotasResponse>
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
                "valor": 6
            },
            {
                "valor": 10
            },
            {
                "valor": 12
            },
            {
                "valor": 15
            },
            {
                "valor": 18
            },
            {
                "valor": 20
            },
            {
                "valor": 24
            },
            {
                "valor": 36
            },
            {
                "valor": 60
            },
            {
                "valor": 90
            },
            {
                "valor": 120
            },
            {
                "valor": 180
            },
            {
                "valor": 240
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTModeladorPrestamos.ObtenerCantidadCuotas",
        "Fecha": "2021-11-03",
        "Hora": "17:30:49",
        "Requerimiento": "",
        "Numero": 8556,
        "Estado": "OK"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTValor', fields: [{ Nombre: 'valor', Tipo: 'Long', Comentarios: 'Valor de cantidad de cuotas.' }] }];
}
