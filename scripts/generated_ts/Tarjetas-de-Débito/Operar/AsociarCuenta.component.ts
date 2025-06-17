import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-AsociarCuenta',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AsociarCuentaComponent {
  // Cabecera e info-card
  pageTitle = 'Asociar Cuenta';
  description = `Metodo para asociar una cuenta vista a una tarjeta de debito dada.`;
  pubName    = 'BTTarjetasDeDebito.AsociarCuenta';
  programa   = 'RBTPG377';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['operacionUId', 'tipoDeCuenta', 'tarjetaUId'];
  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador unico de operacion.' }, { Nombre: 'tipoDeCuenta', Tipo: 'Short', Comentarios: 'Tipo de la cuenta a asociar.' }, { Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador unico de tarjeta de debito.' }];
  outputCols = [];
  outputData = [];
  errorCols  = ['30001', '30002', '30003'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el Identificador de tarjeta de debito.' }, { Codigo: '30002', Descripcion: 'No se recibio el Identificador de operacion a asociar.' }, { Codigo: '30003', Descripcion: 'No se recibio el tipo de cuenta a asociar.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.AsociarCuenta>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1080548031CD285A89A23FBE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10</bts:operacionUId>
         <bts:tipoDeCuenta>1</bts:tipoDeCuenta>
         <bts:tarjetaUId>1</bts:tarjetaUId>
      </bts:BTTarjetasDeDebito.AsociarCuenta>
   </soapenv:Body>
</soapenv:Envelope>`, json: `{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "1518870407CD285A89A23FBE",
        "Device": ""
    },

    "operacionUId":"10",
    "tipoDeCuenta":"1",
    "tarjetaUId"  :"1"
}` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.AsociarCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>1080548031CD285A89A23FBE</Token>
            <Device/>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTTarjetasDeDebito.AsociarCuenta</Servicio>
            <Fecha>2021-10-29</Fecha>
            <Hora>14:27:12</Hora>
            <Requerimiento/>
            <Numero>8451</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTTarjetasDeDebito.AsociarCuentaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "1518870407CD285A89A23FBE",
        "Device": ""
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTTarjetasDeDebito.AsociarCuenta",
        "Fecha": "2021-10-29",
        "Hora": "13:37:58",
        "Requerimiento": "",
        "Numero": 8449,
        "Estado": "OK"
    }
}` } };

  // Datos estructurados
  structuredTypes = [];
}
