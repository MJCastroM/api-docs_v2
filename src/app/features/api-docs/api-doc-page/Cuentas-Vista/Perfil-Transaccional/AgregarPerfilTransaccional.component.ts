import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-AgregarPerfilTransaccional',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class AgregarPerfilTransaccionalComponent1750945332943 {
  pageTitle        = 'Agregar Perfil Transaccional';
  description      = `Método para agregar un perfil transaccional a una cuenta vista.`;
  pubName    = 'BTCuentasVista.AgregarPerfilTransaccional';
  programa   = 'RBTPG624';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'sdtPerfilTransaccional', Tipo: '[sBTDatosPerfilTransaccional](#sbtdatosperfiltransaccional)', Comentarios: 'Datos del perfil transaccional.' }, { Nombre: 'modo', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'INS\' para este método].' }];
  outputData = [{ Nombre: 'totalCantidadDepositos', Tipo: 'Int', Comentarios: 'Total de movimientos de depósitos.' }, { Nombre: 'totalCantidadRetiros', Tipo: 'Int', Comentarios: 'Total de movimientos de retiros.' }, { Nombre: 'totalMontoDepositos', Tipo: 'Double', Comentarios: 'Total de importes de depósitos.' }, { Nombre: 'totalMontoRetiros', Tipo: 'Double', Comentarios: 'Total de importes de retiros.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de operación.' }, { Codigo: '30002', Descripcion: 'No se recibió la cantidad de depósitos en efectivo.' }, { Codigo: '30003', Descripcion: 'No se recibió el monto de depósitos en efectivo.' }, { Codigo: '30004', Descripcion: 'No se recibió la cantidad de retiros en efectivo.' }, { Codigo: '30005', Descripcion: 'No se recibió el monto de retiros en efectivo.' }, { Codigo: '30006', Descripcion: 'No se recibió el origen de los Fondos.' }, { Codigo: '30007', Descripcion: 'La operación ingresada no corresponde a una cuenta vista.' }, { Codigo: '30021', Descripcion: 'No se recuperó la operación para el Identificador: [Número de identificador].' }, { Codigo: '40001', Descripcion: 'Producto a consultar no existe.' }, { Codigo: '40002', Descripcion: 'El identificador de país [Número de identificador] no existe.' }, { Codigo: '40003', Descripcion: 'El identificador de orígenes de fondo [Número de identificador] no existe.' }, { Codigo: '40004', Descripcion: 'El perfil transaccional ya existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasVista.AgregarPerfilTransaccional>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GP</Device>
            <Requerimiento>1</Requerimiento>
            <Token>1EA88623CBDC6645284505C9</Token>
         </Btinreq>
         <bts:operacionUId>1</bts:operacionUId>
         <bts:sdtPerfilTransaccional>
            <bts:origenDeFondosId>1</bts:origenDeFondosId>
            <bts:origenDeFondos></bts:origenDeFondos>
            <bts:movimientosMensuales>
               <bts:conCheque>
                  <bts:montoRetiros>400</bts:montoRetiros>
                  <bts:montoDepositos>300</bts:montoDepositos>
                  <bts:cantidadDepositos>3</bts:cantidadDepositos>
                  <bts:cantidadRetiros>4</bts:cantidadRetiros>
               </bts:conCheque>
               <bts:transferenciaLocal>
                  <bts:montoRetiros>500</bts:montoRetiros>
                  <bts:montoDepositos>500</bts:montoDepositos>
                  <bts:cantidadDepositos>5</bts:cantidadDepositos>
                  <bts:cantidadRetiros>6</bts:cantidadRetiros>
               </bts:transferenciaLocal>
               <bts:transferenciaInternacional>
                  <bts:montoRetiros>800</bts:montoRetiros>
                  <bts:paisOrigen></bts:paisOrigen>
                  <bts:paisDestinoId>248</bts:paisDestinoId>
                  <bts:montoDepositos>700</bts:montoDepositos>
                  <bts:cantidadDepositos>7</bts:cantidadDepositos>
                  <bts:paisDestino></bts:paisDestino>
                  <bts:cantidadRetiros>8</bts:cantidadRetiros>
                  <bts:paisOrigenId>591</bts:paisOrigenId>
               </bts:transferenciaInternacional>
               <bts:enEfectivo>
                  <bts:montoRetiros>200.00</bts:montoRetiros>
                  <bts:montoDepositos>100.00</bts:montoDepositos>
                  <bts:cantidadDepositos>1</bts:cantidadDepositos>
                  <bts:cantidadRetiros>2</bts:cantidadRetiros>
               </bts:enEfectivo>
            </bts:movimientosMensuales>
         </bts:sdtPerfilTransaccional>
      </bts:BTCuentasVista.AgregarPerfilTransaccional>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?AgregarPerfilTransaccional=\' \
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
    "operacionUId": 1,
    "sdtPerfilTransaccional": {
        "origenDeFondosId": 1,
        "origenDeFondos": "",
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
                "paisOrigen": "",
                "paisDestinoId": 248,
                "montoDepositos": 700,
                "cantidadDepositos": 7,
                "paisDestino": "",
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
    }
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.AgregarPerfilTransaccionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GP</Device>
            <Requerimiento>1</Requerimiento>
            <Token>1EA88623CBDC6645284505C9</Token>
         </Btinreq>
         <totalCantidadDepositos>16</totalCantidadDepositos>
         <totalCantidadRetiros>20</totalCantidadRetiros>
         <totalMontoDepositos>1600.0</totalMontoDepositos>
         <totalMontoRetiros>1900.0</totalMontoRetiros>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-09-18</Fecha>
            <Hora>09:53:04</Hora>
            <Numero>6203</Numero>
            <Servicio>BTCuentasVista.AgregarPerfilTransaccional</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasVista.AgregarPerfilTransaccionalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
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
      "Servicio": "BTCuentasVista.AgregarPerfilTransaccional",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatosPerfilTransaccional', fields: [{ Nombre: 'origenDeFondosId', Tipo: 'Short', Comentarios: 'Identificador del origen de los fondos.' }, { Nombre: 'origenDeFondos', Tipo: 'String', Comentarios: 'Origen de los fondos.' }, { Nombre: 'movimientosMensuales', Tipo: '[sBTPerfilTrnMovimientosMensuales](#sbtperfiltrnmovimientosmensuales)', Comentarios: 'Datos de los movimientos mensuales.' }] }, { typeName: 'sBTPerfilTrnMovimientosMensuales', fields: [{ Nombre: 'enEfectivo', Tipo: '[sBTPerfilTrnDatosMovimientos](#sbtperfiltrndatosmovimientos)', Comentarios: 'Datos de los movimientos mensuales en efectivo.' }, { Nombre: 'conCheque', Tipo: '[sBTPerfilTrnDatosMovimientos](#sbtperfiltrndatosmovimientos)', Comentarios: 'Datos de los movimientos mensuales con cheques.' }, { Nombre: 'transferenciaLocal', Tipo: '[sBTPerfilTrnDatosMovimientos](#sbtperfiltrndatosmovimientos)', Comentarios: 'Datos de los movimientos mensuales de transferencias locales.' }, { Nombre: 'transferenciaInternacional', Tipo: '[sBTPerfilTrnDatosMovInternacionales](#sbtperfiltrndatosmovinternacionales)', Comentarios: 'Datos de los movimientos mensuales de transferencias internacionales.' }] }, { typeName: 'sBTPerfilTrnDatosMovimientos', fields: [{ Nombre: 'montoRetiros', Tipo: 'Double', Comentarios: 'Total de importes de retiros.' }, { Nombre: 'montoDepositos', Tipo: 'Double', Comentarios: 'Total de importes de depósitos.' }, { Nombre: 'cantidadDepositos', Tipo: 'int', Comentarios: 'Cantidad de movimientos de depósitos.' }, { Nombre: 'cantidadRetiros', Tipo: 'int', Comentarios: 'Cantidad de movimientos de retiros.' }] }, { typeName: 'sBTPerfilTrnDatosMovInternacionales', fields: [{ Nombre: 'montoRetiros', Tipo: 'Double', Comentarios: 'Total de importes de retiros.' }, { Nombre: 'montoDepositos', Tipo: 'Double', Comentarios: 'Total de importes de depósitos.' }, { Nombre: 'cantidadDepositos', Tipo: 'int', Comentarios: 'Cantidad de movimientos de depósitos.' }, { Nombre: 'cantidadRetiros', Tipo: 'int', Comentarios: 'Cantidad de movimientos de retiros.' }, { Nombre: 'paisOrigenId', Tipo: 'int', Comentarios: 'Identificador del país.' }, { Nombre: 'paisOrigen', Tipo: 'String', Comentarios: 'Nombre del país.' }, { Nombre: 'paisDestinoId', Tipo: 'int', Comentarios: 'Identificador del país.' }, { Nombre: 'paisDestino', Tipo: 'String', Comentarios: 'Nombre del país.' }] }];
}
