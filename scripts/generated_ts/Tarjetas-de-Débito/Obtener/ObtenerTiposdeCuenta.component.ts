import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerTiposdeCuenta',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTiposdeCuentaComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Tipos de Cuenta';
  description = `Metodo para obtener los tipos de cuenta de tarjetas de debito ingresados en el sistema.`;
  pubName    = 'BTTarjetasDeDebito.ObtenerTiposDeCuenta';
  programa   = 'RBTPG379';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = [];
  inputData  = [];
  outputCols = ['sdtTiposDeCuenta'];
  outputData = [{ Nombre: 'sdtTiposDeCuenta', Tipo: '[sBTTipoDeCuenta](#sbttipodecuenta)', Comentarios: 'Listado de tipos de cuenta.' }];
  errorCols  = [];
  errors     = [];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.ObtenerTiposDeCuenta>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1080548031CD285A89A23FBE</bts:Token>
            <bts:Device></bts:Device>
         </bts:Btinreq>
      </bts:BTTarjetasDeDebito.ObtenerTiposDeCuenta>
   </soapenv:Body>
</soapenv:Envelope>`, json: `{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "1518870407CD285A89A23FBE",
        "Device": ""
    }
}` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.ObtenerTiposDeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento/>
            <Usuario>INSTALADOR</Usuario>
            <Token>1080548031CD285A89A23FBE</Token>
            <Device/>
         </Btinreq>
         <sdtTiposDeCuenta>
            <SdtsBTTipoDeCuenta>
               <descripcion>Preferencial</descripcion>
               <codigo>1</codigo>
            </SdtsBTTipoDeCuenta>
            <SdtsBTTipoDeCuenta>
               <descripcion>Normal</descripcion>
               <codigo>5</codigo>
            </SdtsBTTipoDeCuenta>
         </sdtTiposDeCuenta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTTarjetasDeDebito.ObtenerTiposDeCuenta</Servicio>
            <Fecha>2021-10-29</Fecha>
            <Hora>14:27:12</Hora>
            <Requerimiento/>
            <Numero>8451</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerTiposDeCuentaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "INSTALADOR",
        "Token": "1518870407CD285A89A23FBE",
        "Device": ""
    },
    "sdtTiposDeCuenta": {
        "SdtsBTTipoDeCuenta": [
            {
                "descripcion": "Preferencial",
                "codigo": 1
            },
            {
                "descripcion": "Normal",
                "codigo": 5
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTTarjetasDeDebito.ObtenerTiposDeCuenta",
        "Fecha": "2021-10-29",
        "Hora": "13:37:58",
        "Requerimiento": "",
        "Numero": 8449,
        "Estado": "OK"
    }
}` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Codigo del tipo de cuenta.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion del tipo de cuenta.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
