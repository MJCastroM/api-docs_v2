import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Simular',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularComponent1750272790650 {
  pageTitle        = 'Simular';
  description      = `Método para simular el alta de un ahorro programado.`;
  pubName    = 'BTAhorroProgramado.Simular';
  programa   = 'RBTPG446';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sBTSolicitudSimulacionAhorroProgramado', Tipo: '[sBTSolicitudSimulacionAhorro](#sbtsolicitudsimulacionahorro)', Comentarios: 'Datos de la simulación.' }];
  outputData = [{ Nombre: 'sBTSimulacionAhorroProgramado', Tipo: '[sBTSimulacionAhorroProgramado](#sbtsimulacionahorroprogramado)', Comentarios: 'Simulación de ahorro programado.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la persona.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador del cliente.' }, { Codigo: '30003', Descripcion: 'No se recibió el identificador del producto.' }, { Codigo: '30008', Descripcion: 'No se recuperó la persona para el identificador: [Número de Identificador].' }, { Codigo: '30009', Descripcion: 'No se recuperó la cuenta para el identificador de cliente: [Número de Identificador].' }, { Codigo: '30012', Descripcion: 'No se recuperó el producto de ahorro para el identificador: [Número de Identificador].' }, { Codigo: '40150', Descripcion: 'Ocurrio un error al actualizar la información del ahorro.' }, { Codigo: '40955', Descripcion: 'El deposito inicial es superior al total a ahorrar.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTAhorroProgramado.Simular>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>GL</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>01D45E9964612A4C8CCB1055</bts:Token>
         </bts:Btinreq>
         <bts:sdtDatos>
            <bts:abono>10000</bts:abono>
            <bts:productoUid>82</bts:productoUid>
            <bts:montoTotalAhorrar>0</bts:montoTotalAhorrar>
            <bts:clienteUid>61</bts:clienteUid>
            <bts:personaUid>22</bts:personaUid>
            <bts:diaIncremento>5</bts:diaIncremento>
            <bts:depositoInicial>1000</bts:depositoInicial>
            <bts:fechaInicioAhorro></bts:fechaInicioAhorro>
            <bts:plazo>360</bts:plazo>
            <bts:periodicidadIncremento>1</bts:periodicidadIncremento>
         </bts:sdtDatos>
      </bts:BTAhorroProgramado.Simular>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?Simular\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Device": "GL",
          "Requerimiento": 1,
          "Token": "01D45E9964612A4C8CCB1055"
        },
        "sdtDatos": {
          "abono": 10000,
          "productoUid": 82,
          "montoTotalAhorrar": 0,
          "clienteUid": 61,
          "personaUid": 22,
          "diaIncremento": 5,
          "depositoInicial": 1000,
          "fechaInicioAhorro": "",
          "plazo": 360,
          "periodicidadIncremento": 1
        }
    }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTAhorroProgramado.SimularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>MINSTALADOR</Usuario>
            <Device>GL</Device>
            <Requerimiento>1</Requerimiento>
            <Token>01D45E9964612A4C8CCB1055</Token>
         </Btinreq>
         <sdtSimulacion>
            <fechaInicio>2021-01-05</fechaInicio>
            <cronograma>
               <SdtsBTCuotaAhorro>
                  <tasa>10.00</tasa>
                  <impuestos>0.00</impuestos>
                  <interes>8.49</interes>
                  <otrosConceptos></otrosConceptos>
                  <plazo>31</plazo>
                  <fechaPago>2021-01-05</fechaPago>
                  <capital>1000.00</capital>
               </SdtsBTCuotaAhorro>
               <SdtsBTCuotaAhorro>
                  <tasa>10.00</tasa>
                  <impuestos>0.00</impuestos>
                  <interes>84.38</interes>
                  <otrosConceptos></otrosConceptos>
                  <plazo>59</plazo>
                  <fechaPago>2021-02-05</fechaPago>
                  <capital>10000.00</capital>
               </SdtsBTCuotaAhorro>
               ...
            </cronograma>
            <simulacionId>741</simulacionId>
            <depositoInicial>1000.00</depositoInicial>
            <tasaOriginal>10.00</tasaOriginal>
            <totalIntereses>5463.00</totalIntereses>
            <Abono>10000.00</Abono>
            <totalAhorro>111000.00</totalAhorro>
            <fechaVencimiento>2021-12-31</fechaVencimiento>
            <plazo>360</plazo>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>82</productoUId>
               <nombre>Ahorro en Sueldo Pesos</nombre>
            </producto>
            <periodicidadIncremento>1</periodicidadIncremento>
            <sucursal>Casa Matriz</sucursal>
            <totalImpuestos>0.00</totalImpuestos>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2022-11-29</Fecha>
            <Hora>17:21:52</Hora>
            <Numero>11095</Numero>
            <Servicio>BTAhorroProgramado.Simular</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.SimularResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Device": "GL",
          "Requerimiento": 1,
          "Token": "01D45E9964612A4C8CCB1055"
        },
        "sdtSimulacion": {
          "fechaInicio": "2021-01-05",
          "cronograma": {
            "SdtsBTCuotaAhorro": [
              {
                "tasa": 10,
                "impuestos": 0,
                "interes": 8.49,
                "otrosConceptos": "",
                "plazo": 31,
                "fechaPago": "2021-01-05",
                "capital": 1000
              },
              {
                "tasa": 10,
                "impuestos": 0,
                "interes": 84.38,
                "otrosConceptos": "",
                "plazo": 59,
                "fechaPago": "2021-02-05",
                "capital": 10000
              },
              ...
            ]
          },
          "simulacionId": 741,
          "depositoInicial": 1000,
          "tasaOriginal": 10,
          "totalIntereses": 5463,
          "Abono": 10000,
          "totalAhorro": 111000,
          "fechaVencimiento": "2021-12-31",
          "plazo": 360,
          "producto": {
            "moneda": "$",
            "papel": "$",
            "productoUId": 82,
            "nombre": "Ahorro en Sueldo Pesos"
          },
          "periodicidadIncremento": 1,
          "sucursal": "Casa Matriz",
          "totalImpuestos": 0
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Estado": "OK",
          "Fecha": "2022-11-29",
          "Hora": "17:21:52",
          "Numero": 11095,
          "Servicio": "BTAhorroProgramado.Simular",
          "Requerimiento": 1,
          "Canal": "BTDIGITAL"
        }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTSolicitudSimulacionAhorro', fields: [{ Nombre: 'abono', Tipo: 'Double', Comentarios: 'Abono.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'depositoInicial', Tipo: 'Double', Comentarios: 'Depósito inicial.' }, { Nombre: 'diaIncremento', Tipo: 'Int', Comentarios: 'Día de incremento.' }, { Nombre: 'fechaInicioAhorro', Tipo: 'Date', Comentarios: 'Fecha de inicio del ahorro.' }, { Nombre: 'montoTotalAhorrar', Tipo: 'Double', Comentarios: 'Monto total del ahorro.' }, { Nombre: 'periodicidadIncremento', Tipo: 'Int', Comentarios: 'Periodicidad de incremento.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTSimulacionAhorroProgramado', fields: [{ Nombre: 'abono', Tipo: 'Double', Comentarios: 'Abono.' }, { Nombre: 'cronograma', Tipo: '[sBTCronogramaAhorro](#sbtcronogramaahorro)', Comentarios: 'Detalle del cronograma de ahorro.' }, { Nombre: 'depositoInicial', Tipo: 'Double', Comentarios: 'Depósito inicial.' }, { Nombre: 'fechaInicio', Tipo: 'Date', Comentarios: 'Fecha de inicio.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'periodicidadIncremento', Tipo: 'Int', Comentarios: 'Periodicidad de incremento.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'simulacionId', Tipo: 'Long', Comentarios: 'Identificador de simulación.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'tasaOriginal', Tipo: 'Double', Comentarios: 'Tasa original.' }, { Nombre: 'totalAhorro', Tipo: 'Double', Comentarios: 'Total del ahorro.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Total de impuestos.' }, { Nombre: 'totalIntereses', Tipo: 'Double', Comentarios: 'Total de intereses.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTCronogramaAhorro', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTCronogramaAhorro', fields: [{ Nombre: 'sBTCronogramaAhorro', Tipo: '[sBTCuotaAhorro](#sbtcuotaahorro)', Comentarios: 'Datos de la cuota de ahorro.' }, { Nombre: '### sBTCuotaAhorro', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTCuotaAhorro', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de pago.' }, { Nombre: 'impuestos', Tipo: 'Double', Comentarios: 'Impuestos.' }, { Nombre: 'interes', Tipo: 'Double', Comentarios: 'Interés.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
