import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarTextoAsiento',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarTextoAsientoComponent1751987196676 {
  pageTitle        = 'Agregar Texto Asiento';
  description      = `Método para agregar un texto a un asiento.`;
  pubName    = 'BTContabilidad.AgregarTextoAsiento';
  programa   = 'RBTPG389';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único del asiento.' }, { Nombre: 'textoMovimiento', Tipo: '[sBTTextoMovimiento](#sbttextomovimiento)', Comentarios: 'Datos del texto del movimiento.' }];
  outputData = [];
  errors     = [{ Código: '30001', Descripción: 'No se recibió identificador de movimiento.' }, { Código: '50001', Descripción: 'El código de texto ingresado no existe.' }, { Código: '50002', Descripción: 'Ya existe el texto ingresado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.AgregarTextoAsiento>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>12106639094A8B5C60A82434</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:movimientoUId>36</bts:movimientoUId>
         <bts:textoMovimiento>
            <bts:codigo>20</bts:codigo>
            <bts:descripcion>Prueba</bts:descripcion>
            <bts:renglon>1</bts:renglon>
            <bts:texto>Prueba</bts:texto>
         </bts:textoMovimiento>
      </bts:BTContabilidad.AgregarTextoAsiento>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
    \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?AgregarTextoAsiento\' \
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
    "movimientoUId": "36",
    "textoMovimiento": {
        "codigo": "20",
        "descripcion": "Prueba",
        "renglon": "1",
        "texto": "Prueba",
    }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.AgregarTextoAsientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>MINSTALADOR</Usuario>
            <Token>12106639094A8B5C60A82434</Token>
            <Device>GP</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTContabilidad.AgregarTextoAsiento</Servicio>
            <Fecha>2022-06-01</Fecha>
            <Hora>11:19:14</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8866</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTContabilidad.AgregarTextoAsientoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "bc8b678bc44A8B5C60A82434"
    },
    "Erroresnegocio": {
    },
    "Btoutreq": {
        "Numero": "839",
        "Estado": "OK",
        "Servicio": "BTContabilidad.AgregarTextoAsiento",
        "Requerimiento": "1",
        "Fecha": "2022-05-12",
        "Hora": "15:35:54",
        "Canal": "BTDIGITAL"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTTextoMovimiento', fields: [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Código del texto.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del tipo de texto.' }, { Nombre: 'renglon', Tipo: 'Short', Comentarios: 'Renglón.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto asociado.' }] }];
}
