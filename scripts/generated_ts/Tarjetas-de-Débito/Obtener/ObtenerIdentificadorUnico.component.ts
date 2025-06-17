import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerIdentificadorUnico',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerIdentificadorUnicoComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Identificador Unico';
  description = `Metodo para obtener el identificador unico de una tarjeta de debito.`;
  pubName    = 'BTTarjetasDeDebito.ObtenerIdentificadorUnico';
  programa   = 'RBTPG800';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['nroTarjeta'];
  inputData  = [{ Nombre: 'nroTarjeta', Tipo: 'String', Comentarios: 'Numero de tarjeta.' }];
  outputCols = ['tarjetaUId'];
  outputData = [{ Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador unico de tarjeta.' }];
  errorCols  = ['30001', '30002'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio la tarjeta de debito.' }, { Codigo: '30002', Descripcion: 'No se recupero el identificador para la tarjeta de debito: [Numero de Tarjeta].' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.ObtenerIdentificadorUnico>
         <bts:Btinreq>
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>bms</bts:Device>
         </bts:Btinreq>
         <bts:nroTarjeta>4517720800000029</bts:nroTarjeta>
      </bts:BTTarjetasDeDebito.ObtenerIdentificadorUnico>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ObtenerIdentificadorUnico' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
    "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "f99a68ce154A8B5C60A82434"
    },
    "nroTarjeta": "4517720800000029"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.ObtenerIdentificadorUnicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>bms</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f99a68ce154A8B5C60A82434</Token>
         </Btinreq>
         <tarjetaUId>17</tarjetaUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1121</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTarjetasDeDebito.ObtenerIdentificadorUnico</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2020-11-06</Fecha>
            <Hora>12:19:59</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerIdentificadorUnicoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
    "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "f99a68ce154A8B5C60A82434"
    },
    "tarjetaUId": 17,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1122,
        "Estado": "OK",
        "Servicio": "BTTarjetasDeDebito.ObtenerIdentificadorUnico",
        "Requerimiento": "0",
        "Fecha": "2020-11-06",
        "Hora": "12:23:58",
        "Canal": "BTDIGITAL"
    }
}` } };

  // Datos estructurados
  structuredTypes = [];
}
