import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-AgregarTextoOrdinal',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarTextoOrdinalComponent {
  // Cabecera e info-card
  pageTitle = 'Agregar Texto Ordinal';
  description = `Metodo para agregar un texto a un determinado ordinal de un asiento.`;
  pubName    = 'BTContabilidad.AgregarTextoOrdinal';
  programa   = 'RBTPG388';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['movimientoUId', 'ordinal', 'textoMovimiento'];
  inputData  = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador unico del asiento.' }, { Nombre: 'ordinal', Tipo: 'Short', Comentarios: 'Ordinal.' }, { Nombre: 'textoMovimiento', Tipo: '[sBTTextoMovimiento](#sbttextomovimiento)', Comentarios: 'Datos del texto del movimiento.' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '50001', '50002', '50003'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio identificador de movimiento.' }, { Codigo: '50001', Descripcion: 'El codigo de texto ingresado no existe.' }, { Codigo: '50002', Descripcion: 'El ordinal ingresado no existe.' }, { Codigo: '50003', Descripcion: 'Ya existe el texto ingresado.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.AgregarTextoOrdinal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>12106639094A8B5C60A82434</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:movimientoUId>36</bts:movimientoUId>
         <bts:ordinal>10</bts:ordinal>
         <bts:textoMovimiento>
            <bts:codigo>20</bts:codigo>
            <bts:descripcion>Prueba</bts:descripcion>
            <bts:renglon>1</bts:renglon>
            <bts:texto>Prueba</bts:texto>
         </bts:textoMovimiento>
      </bts:BTContabilidad.AgregarTextoOrdinal>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?AgregarTextoOrdinal' \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
    -d '{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "bc8b678bc44A8B5C60A82434"
    },
    "movimientoUId": "36",
    "ordinal": "10",
    "textoMovimiento": {
        "codigo": "20",
        "descripcion": "Prueba",
        "renglon": "1",
        "texto": "Prueba",
    }
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.AgregarTextoOrdinalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <Servicio>BTContabilidad.AgregarTextoOrdinal</Servicio>
            <Fecha>2022-06-01</Fecha>
            <Hora>13:12:48</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8867</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTContabilidad.AgregarTextoOrdinalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
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
        "Servicio": "BTContabilidad.AgregarTextoOrdinal",
        "Requerimiento": "1",
        "Fecha": "2022-05-12",
        "Hora": "15:35:54",
        "Canal": "BTDIGITAL"
    }
}` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Codigo del texto.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion del tipo de texto.' }, { Nombre: 'renglon', Tipo: 'Short', Comentarios: 'Renglon.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto asociado.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
