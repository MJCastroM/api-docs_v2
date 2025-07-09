import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPrestamosCancelados',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPrestamosCanceladosComponent1751987196348 {
  pageTitle        = 'Obtener Préstamos Cancelados';
  description      = `Método para obtener los préstamos cancelados de un cliente.`;
  pubName    = 'BTClientes.ObtenerPrestamosCancelados';
  programa   = 'RBTPG486';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'cancelado', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'C\' para este método].' }];
  outputData = [{ Nombre: 'sdtPrestamos', Tipo: '[sBTPrestamoItem](#sbtprestamoitem)', Comentarios: 'Listado de prestamos del cliente.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador único de cuenta.' }, { Código: '30002', Descripción: 'No se recuperó la cuenta para el Identificador: [Número de identificador].' }, { Código: '40001', Descripción: 'El cliente no tiene operaciones.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerPrestamosCancelados>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>54878527AF5867CA94C680B0</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
      </bts:BTClientes.ObtenerPrestamosCancelados>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerPrestamosCancelados=\' \
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
    "clienteUId": 61,
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerPrestamosCanceladosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>54878527AF5867CA94C680B0</Token>
         </Btinreq>
         <sdtPrestamos>
            <sBTPrestamoItem>
               <plazo>634</plazo>
               <periodicidad>0</periodicidad>
               <fechaVencimiento/>
               <producto>
                  <papel>$</papel>
                  <moneda>$</moneda>
                  <productoUId>72</productoUId>
                  <nombre>PRÉSTAMOS, Amortización Automática TF</nombre>
               </producto>
               <tasaVigente>0.0</tasaVigente>
               <idOperacionBT>0010100000103000000000000000002900000000000426001</idOperacionBT>
               <valorCuota>1760.66</valorCuota>
               <saldoCapital>1760.66</saldoCapital>
               <fechaPrimerIncumplimiento/>
               <otrosConceptos/>
               <idOperacionFmt>0000000426-000</idOperacionFmt>
               <capitalOriginal>1760.66</capitalOriginal>
               <cantidadCuotasPagas>2</cantidadCuotasPagas>
               <operacionUId>834</operacionUId>
               <fechaUltimoPago/>
               <tipoAmortizacion/>
               <estado>Operación Cancelada</estado>
               <sucursal>Sucursal Ciudad de la Costa</sucursal>
               <tipoProducto>AM</tipoProducto>
               <fechaValor>2018-11-10</fechaValor>
               <cantidadCuotas>44</cantidadCuotas>
            </sBTPrestamoItem>
         </sdtPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-22</Fecha>
            <Hora>11:58:57</Hora>
            <Numero>26937</Numero>
            <Servicio>BTClientes.ObtenerPrestamosCancelados</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerPrestamosCanceladosResponse>
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
    "sdtPrestamos": {
         "sBTPrestamoItem": {
         "plazo": 634,
         "periodicidad": 0,
         "fechaVencimiento": "",
         "producto": {
            "papel": "$",
            "moneda": "$",
            "productoUId": 72,
            "nombre": "PRÉSTAMOS, Amortización Automática TF"
         },
         "tasaVigente": 0,
         "idOperacionBT": 1.0100000103e+46,
         "valorCuota": 1760.66,
         "saldoCapital": 1760.66,
         "fechaPrimerIncumplimiento": "",
         "otrosConceptos": "",
         "idOperacionFmt": "0000000426-000",
         "capitalOriginal": 1760.66,
         "cantidadCuotasPagas": 2,
         "operacionUId": 834,
         "fechaUltimoPago": "",
         "tipoAmortizacion": "",
         "estado": "Operación Cancelada",
         "sucursal": "Sucursal Ciudad de la Costa",
         "tipoProducto": "AM",
         "fechaValor": "2018-11-10",
         "cantidadCuotas": 44
         }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTClientes.ObtenerPrestamosCancelados",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sbtprestamoitem', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }, { Nombre: 'cantidadCuotasPagas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas del préstamo.' }, { Nombre: 'capitalOriginal', Tipo: 'Double', Comentarios: 'Capital original del préstamo.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del préstamo.' }, { Nombre: 'fechaPrimerIncumplimiento', Tipo: 'Date', Comentarios: 'Fecha de primer incumplimiento.' }, { Nombre: 'fechaUltimoPago', Tipo: 'Date', Comentarios: 'Fecha de último pago de la cuota.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del préstamo.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador texto de operación.' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Importe otros conceptos.' }, { Nombre: 'periodicidad', Tipo: 'Int', Comentarios: 'Período entre cuotas.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'saldoCapital', Tipo: 'Double', Comentarios: 'Saldo de capital.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'tasaVigente', Tipo: 'Double', Comentarios: 'Tasa vigente.' }, { Nombre: 'tipoAmortizacion', Tipo: 'String', Comentarios: 'Tipo de amortización.' }, { Nombre: 'tipoProducto', Tipo: 'String', Comentarios: 'Tipo de producto pasivo (Cuenta Corriente: \'CC\', Caja de Ahorro: \'CA\').' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor de la cuota.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
