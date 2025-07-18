import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerCotizacionCierre',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCotizacionCierreComponent1751987199089 {
  pageTitle        = 'Obtener Cotización Cierre';
  description      = `Método para obtener la cotización del cierre.`;
  pubName    = 'BTPrecios.ObtenerCotizacionCierre';
  programa   = 'RBTPG841';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de moneda. Si es vacío devuelve las cotizaciones de todas las monedas.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de cotización. Si es vacía devuelve cotización al día de hoy.' }];
  outputData = [{ Nombre: 'sdtCotizaciones', Tipo: '[sBTCotizacion](#sbtcotizacion)', Comentarios: 'Listado de cotizaciones.' }];
  errors     = [{ Código: '30001', Descripción: 'El identificador de moneda se corresponde con la moneda nacional.' }, { Código: '30002', Descripción: 'No se recuperó moneda para el identificador ingresado.' }, { Código: '30003', Descripción: 'No se recuperaron monedas.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrecios.ObtenerCotizacionCierre>
         <bts:Btinreq>
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>bms</bts:Device>
         </bts:Btinreq>
         <bts:monedaId>2</bts:monedaId>
         <bts:fecha></bts:fecha>
      </bts:BTPrecios.ObtenerCotizacionCierre>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerCotizacionCierre\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -d \'{
    "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "f99a68ce154A8B5C60A82434"
    },
    "monedaId": "2",
    "fecha": ""
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrecios.ObtenerCotizacionCierreResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>bms</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f99a68ce154A8B5C60A82434</Token>
         </Btinreq>
         <sdtCotizaciones>
            <sBTCotizacion>
               <venta>3.80</venta>
               <monedaISO>U$S</monedaISO>
               <compra>3.80</compra>
               <identificador>2</identificador>
            </sBTCotizacion>
         </sdtCotizaciones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1118</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrecios.ObtenerCotizacionCierre</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2020-11-06</Fecha>
            <Hora>12:04:22</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrecios.ObtenerCotizacionCierreResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
    "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "f99a68ce154A8B5C60A82434"
    },
    "sdtCotizaciones": {
        "sBTCotizacion": [
            {
                "venta": 3.8,
                "monedaISO": "U$S",
                "compra": 3.8,
                "identificador": 2
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1120,
        "Estado": "OK",
        "Servicio": "BTPrecios.ObtenerCotizacionCierre",
        "Requerimiento": "0",
        "Fecha": "2020-11-06",
        "Hora": "12:14:00",
        "Canal": "BTDIGITAL"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTCotizacion', fields: [{ Nombre: 'compra', Tipo: 'Double', Comentarios: 'Cotización Compra.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'monedaISO', Tipo: 'String', Comentarios: 'Código ISO de la moneda.' }, { Nombre: 'venta', Tipo: 'Double', Comentarios: 'Cotización Venta.' }] }];
}
