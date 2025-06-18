import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPerfilTransaccional',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPerfilTransaccionalComponent1750268695927 {
  pageTitle        = 'Obtener Perfil Transaccional';
  description      = `Método para obtener el perfil transaccional de una cuenta vista.`;
  pubName    = 'BTCuentasVista.ObtenerPerfilTransaccional';
  programa   = 'RBTPG625';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }];
  outputData = [{ Nombre: 'sdtPerfilTransaccional', Tipo: '[sBTDatosPerfilTransaccional](#sbtdatosperfiltransaccional)', Comentarios: 'Datos del perfil transaccional.' }, { Nombre: 'totalCantidadDepositos', Tipo: 'Int', Comentarios: 'Total de movimientos de depósitos.' }, { Nombre: 'totalCantidadRetiros', Tipo: 'Int', Comentarios: 'Total de movimientos de retiros.' }, { Nombre: 'totalMontoDepositos', Tipo: 'Double', Comentarios: 'Total de importes de depósitos.' }, { Nombre: 'totalMontoRetiros', Tipo: 'Double', Comentarios: 'Total de importes de retiros.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de operación.' }, { Codigo: '30021', Descripcion: 'No se recuperó la operación para el Identificador: [Número de identificador].' }, { Codigo: '40001', Descripcion: 'Producto a consultar no existe.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.ObtenerPerfilTransaccional>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GP</Device>
            <Requerimiento>1</Requerimiento>
            <Token>1EA88623CBDC6645284505C9</Token>
         </Btinreq>
         <bts:operaionUId>2</bts:operaionUId>
      </bts:BTCuentasVista.ObtenerPerfilTransaccional>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerPerfilTransaccional=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "operacionUId": 1
  }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ObtenerPerfilTransaccionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GP</Device>
            <Requerimiento>1</Requerimiento>
            <Token>1EA88623CBDC6645284505C9</Token>
         </Btinreq>
         <sdtPerfilTransaccional>
            <origenDeFondosId>1</origenDeFondosId>
            <origenDeFondos>Asalariado</origenDeFondos>
            <movimientosMensuales>
               <conCheque>
                  <montoRetiros>400.0</montoRetiros>
                  <montoDepositos>300.0</montoDepositos>
                  <cantidadDepositos>3</cantidadDepositos>
                  <cantidadRetiros>4</cantidadRetiros>
               </conCheque>
               <transferenciaLocal>
                  <montoRetiros>500.0</montoRetiros>
                  <montoDepositos>500.0</montoDepositos>
                  <cantidadDepositos>5</cantidadDepositos>
                  <cantidadRetiros>6</cantidadRetiros>
               </transferenciaLocal>
               <transferenciaInternacional>
                  <montoRetiros>800.0</montoRetiros>
                  <paisOrigen>PANAMA</paisOrigen>
                  <paisDestinoId>248</paisDestinoId>
                  <montoDepositos>700.0</montoDepositos>
                  <cantidadDepositos>7</cantidadDepositos>
                  <paisDestino>ALAND</paisDestino>
                  <cantidadRetiros>8</cantidadRetiros>
                  <paisOrigenId>591</paisOrigenId>
               </transferenciaInternacional>
               <enEfectivo>
                  <montoRetiros>200.0</montoRetiros>
                  <montoDepositos>100.0</montoDepositos>
                  <cantidadDepositos>1</cantidadDepositos>
                  <cantidadRetiros>2</cantidadRetiros>
               </enEfectivo>
            </movimientosMensuales>
         </sdtPerfilTransaccional>
         <totalCantidadDepositos>16</totalCantidadDepositos>
         <totalCantidadRetiros>20</totalCantidadRetiros>
         <totalMontoDepositos>1600.0</totalMontoDepositos>
         <totalMontoRetiros>1900.0</totalMontoRetiros>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-09-18</Fecha>
            <Hora>09:51:04</Hora>
            <Numero>6201</Numero>
            <Servicio>BTCuentasVista.ObtenerPerfilTransaccional</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.ObtenerPerfilTransaccionalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "sdtPerfilTransaccional": {
        "origenDeFondosId": 1,
        "origenDeFondos": "Asalariado",
        "movimientosMensuales": {
        "conCheque": {
            "montoRetiros": 400,
            "montoDepositos": 300,
            "cantidadDepositos": 3,
            "cantidadRetiros": 4
        },
        "transferenciaLocal": {
            "montoRetiros": 500,
            "montoDepositos": 500,
            "cantidadDepositos": 5,
            "cantidadRetiros": 6
        },
        "transferenciaInternacional": {
            "montoRetiros": 800,
            "paisOrigen": "PANAMA",
            "paisDestinoId": 248,
            "montoDepositos": 700,
            "cantidadDepositos": 7,
            "paisDestino": "ALAND",
            "cantidadRetiros": 8,
            "paisOrigenId": 591
        },
        "enEfectivo": {
            "montoRetiros": 200,
            "montoDepositos": 100,
            "cantidadDepositos": 1,
            "cantidadRetiros": 2
        }
        }
    },
    "totalCantidadDepositos": 16,
    "totalCantidadRetiros": 20,
    "totalMontoDepositos": 1600,
    "totalMontoRetiros": 1900,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCuentasVista.ObtenerPerfilTransaccional",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatosPerfilTransaccional', fields: [{ Nombre: 'origenDeFondosId', Tipo: 'Short', Comentarios: 'Identificador del origen de los fondos.' }, { Nombre: 'origenDeFondos', Tipo: 'String', Comentarios: 'Origen de los fondos.' }, { Nombre: 'movimientosMensuales', Tipo: '[sBTPerfilTrnMovimientosMensuales](#sbtperfiltrnmovimientosmensuales)', Comentarios: 'Datos de los movimientos mensuales.' }, { Nombre: '### sBTPerfilTrnMovimientosMensuales', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTPerfilTrnMovimientosMensuales son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'enEfectivo', Tipo: '[sBTPerfilTrnDatosMovimientos](#sbtperfiltrndatosmovimientos)', Comentarios: 'Datos de los movimientos mensuales en efectivo.' }, { Nombre: 'conCheque', Tipo: '[sBTPerfilTrnDatosMovimientos](#sbtperfiltrndatosmovimientos)', Comentarios: 'Datos de los movimientos mensuales con cheques.' }, { Nombre: 'transferenciaLocal', Tipo: '[sBTPerfilTrnDatosMovimientos](#sbtperfiltrndatosmovimientos)', Comentarios: 'Datos de los movimientos mensuales de transferencias locales.' }, { Nombre: 'transferenciaInternacional', Tipo: '[sBTPerfilTrnDatosMovInternacionales](#sbtperfiltrndatosmovinternacionales)', Comentarios: 'Datos de los movimientos mensuales de transferencias internacionales.' }, { Nombre: '### sBTPerfilTrnDatosMovimientos', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTPerfilTrnDatosMovimientos son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'montoRetiros', Tipo: 'Double', Comentarios: 'Total de importes de retiros.' }, { Nombre: 'montoDepositos', Tipo: 'Double', Comentarios: 'Total de importes de depósitos.' }, { Nombre: 'cantidadDepositos', Tipo: 'int', Comentarios: 'Cantidad de movimientos de depósitos.' }, { Nombre: 'cantidadRetiros', Tipo: 'int', Comentarios: 'Cantidad de movimientos de retiros.' }, { Nombre: '### sBTPerfilTrnDatosMovInternacionales', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTPerfilTrnDatosMovInternacionales son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'montoRetiros', Tipo: 'Double', Comentarios: 'Total de importes de retiros.' }, { Nombre: 'montoDepositos', Tipo: 'Double', Comentarios: 'Total de importes de depósitos.' }, { Nombre: 'cantidadDepositos', Tipo: 'int', Comentarios: 'Cantidad de movimientos de depósitos.' }, { Nombre: 'cantidadRetiros', Tipo: 'int', Comentarios: 'Cantidad de movimientos de retiros.' }, { Nombre: 'paisOrigenId', Tipo: 'int', Comentarios: 'Identificador del país.' }, { Nombre: 'paisOrigen', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisDestinoId', Tipo: 'int', Comentarios: 'Identificador del país.' }, { Nombre: 'paisDestino', Tipo: 'String', Comentarios: 'Nombre del país.' }] }];
}
