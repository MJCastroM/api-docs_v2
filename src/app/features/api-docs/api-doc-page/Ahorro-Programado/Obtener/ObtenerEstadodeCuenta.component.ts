import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerEstadodeCuenta',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerEstadodeCuentaComponent1750258524605 {
  pageTitle        = 'Obtener Estado de Cuenta';
  description      = `Método para obtener el estado de cuenta del ahorro.`;
  pubName          = 'Obtener Estado de Cuenta';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'ahorroUId', Tipo: 'Long', Comentarios: 'Identificador único del ahorro.' }, { Nombre: 'fechaDesde', Tipo: 'Date', Comentarios: 'Fecha desde la cual se emite el estado de cuenta' }, { Nombre: 'fechaHasta', Tipo: 'Date', Comentarios: 'Fecha hasta la cual se emite el estado de cuenta' }];
  outputData = [{ Nombre: 'sdtEstadoCuentaAhorro', Tipo: '[sBTEstadoCuentaAhorro](#sbtestadocuentaahorro)', Comentarios: 'Estado de cuenta del ahorro.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de la operación.' }, { Codigo: '30011', Descripcion: 'No se recupero la operación para el identificador recibido.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTAhorroProgramado.ObtenerEstadoDeCuenta>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>AC</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>01d52592724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:ahorroUId>205</bts:ahorroUId>
         <bts:fechaDesde>2017-03-06</bts:fechaDesde>
         <bts:fechaHasta>2017-11-30</bts:fechaHasta>
      </bts:BTAhorroProgramado.ObtenerEstadoDeCuenta>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerEstadoDeCuenta=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4\' \
  -d \'{
	"Btinreq": {
        "Device": "AV",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "75e20bd1614A8B5C60A82434"
    },
    "ahorroUId": 205,
	"fechaDesde": "2017-03-06",
   "fechaHasta": "2017-11-30"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTAhorroProgramado.ObtenerEstadoDeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>2a721032f94A8B5C60A82434</Token>
         </Btinreq>
         <sdtEstadoCuentaAhorro>
            <ahorroUId>205</ahorroUId>
            <abonoActual>5000.00</abonoActual>
            <periodicidad>1</periodicidad>
            <periodosGraciaUtilizados>0</periodosGraciaUtilizados>
            <totalInteresesGenerados>0.00</totalInteresesGenerados>
            <clienteUId>61</clienteUId>
            <fechaProximoVencimiento>2017-07-07</fechaProximoVencimiento>
            <productoUId>82</productoUId>
            <observacion>Se cumplió con la cantidad máxima de periodos de renovación.</observacion>
            <intentosIncremento>0</intentosIncremento>
            <diaIncremento>9</diaIncremento>
            <movimientos>
               <sBTMovimientoAhorro>
                  <saldoAhorro>1000.00</saldoAhorro>
                  <fecha>2017-03-06</fecha>
                  <interes>0.00</interes>
                  <capital>1000.00</capital>
                  <concepto>Depósito inicial</concepto>
               </sBTMovimientoAhorro>
               <sBTMovimientoAhorro>
                  <saldoAhorro>6000.00</saldoAhorro>
                  <fecha>2017-04-10</fecha>
                  <interes>0.00</interes>
                  <capital>5000.00</capital>
                  <concepto>Incremento de ahorro</concepto>
               </sBTMovimientoAhorro>
               <sBTMovimientoAhorro>
                  <saldoAhorro>6016.77</saldoAhorro>
                  <fecha>2017-05-08</fecha>
                  <interes>16.77</interes>
                  <capital>6000.00</capital>
                  <concepto>Renovación del ahorro</concepto>
               </sBTMovimientoAhorro>
               <sBTMovimientoAhorro>
                  <saldoAhorro>11016.77</saldoAhorro>
                  <fecha>2017-05-09</fecha>
                  <interes>0.00</interes>
                  <capital>5000.00</capital>
                  <concepto>Incremento de ahorro</concepto>
               </sBTMovimientoAhorro>
               <sBTMovimientoAhorro>
                  <saldoAhorro>11200.75</saldoAhorro>
                  <fecha>2017-11-30</fecha>
                  <interes>183.98</interes>
                  <capital>11055.89</capital>
                  <concepto>Acreditación del ahorro</concepto>
               </sBTMovimientoAhorro>
            </movimientos>
            <totalDepositado>11000.00</totalDepositado>
            <totalInteresesAcreditados>200.75</totalInteresesAcreditados>
            <renueva>No</renueva>
            <operacionUIdOrigen>2</operacionUIdOrigen>
            <operacionUIdDestino>2</operacionUIdDestino>
            <estado>Cancelado</estado>
         </sdtEstadoCuentaAhorro>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>9354</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ObtenerEstadoDeCuenta</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>11:22:36</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ObtenerEstadoDeCuentaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{ 
    "Btinreq": { 
        "Device": "AV", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "2a721032f94A8B5C60A82434" 
    }, 
    "sdtEstadoCuentaAhorro": { 
        "ahorroUId": 205, 
        "abonoActual": 5000, 
        "periodicidad": 1, 
        "periodosGraciaUtilizados": 0, 
        "totalInteresesGenerados": 0, 
        "clienteUId": 61, 
        "fechaProximoVencimiento": "2017-07-07", 
        "productoUId": 82, 
        "observacion": "Se cumplió con la cantidad máxima de periodos de renovación.", 
        "intentosIncremento": 0, 
        "diaIncremento": 9, 
        "movimientos": { 
            "sBTMovimientoAhorro": [ 
                { 
                    "saldoAhorro": 1000, 
                    "fecha": "2017-03-06", 
                    "interes": 0, 
                    "capital": 1000, 
                    "concepto": "Depósito inicial" 
                }, 
                { 
                    "saldoAhorro": 6000, 
                    "fecha": "2017-04-10", 
                    "interes": 0, 
                    "capital": 5000, 
                    "concepto": "Incremento de ahorro" 
                }, 
                { 
                    "saldoAhorro": 6016.77, 
                    "fecha": "2017-05-08", 
                    "interes": 16.77, 
                    "capital": 6000, 
                    "concepto": "Renovación del ahorro" 
                }, 
                { 
                    "saldoAhorro": 11016.77, 
                    "fecha": "2017-05-09", 
                    "interes": 0, 
                    "capital": 5000, 
                    "concepto": "Incremento de ahorro" 
                }, 
                { 
                    "saldoAhorro": 11200.75, 
                    "fecha": "2017-11-30", 
                    "interes": 183.98, 
                    "capital": 11055.89, 
                    "concepto": "Acreditación del ahorro" 
                } 
            ] 
        }, 
        "totalDepositado": 11000, 
        "totalInteresesAcreditados": 200.75, 
        "renueva": "No", 
        "operacionUIdOrigen": 2, 
        "operacionUIdDestino": 2, 
        "estado": "Cancelado" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 9355, 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.ObtenerEstadoDeCuenta", 
        "Fecha": "2019-11-19", 
        "Requerimiento": "", 
        "Hora": "11:26:34", 
        "Canal": "BTDIGITAL" 
    } 
}` }
  };

  structuredTypes = [{ typeName: 'sBTEstadoCuentaAhorro', fields: [{ Nombre: 'abonoActual', Tipo: 'Double', Comentarios: 'Abono actual.' }, { Nombre: 'ahorroUId', Tipo: 'Long', Comentarios: 'Identificador único del ahorro.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'díaIncremento', Tipo: 'Short', Comentarios: 'Día en que se da el incremento.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado del ahorro.' }, { Nombre: 'fechaProximoVencimiento', Tipo: 'Date', Comentarios: 'Fecha del próximo vencimiento del ahorro.' }, { Nombre: 'intentosIncremento', Tipo: 'Short', Comentarios: 'Intentos de incremento permitidos.' }, { Nombre: 'movimientos', Tipo: '[sBTMovimientoAhorro](#sbtmovimientoahorro)', Comentarios: 'Listado de movimientos del ahorro.' }, { Nombre: 'observacion', Tipo: 'String', Comentarios: 'Observación.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador único de la operación de destino.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador único de la operación de origen.' }, { Nombre: 'periodicidad', Tipo: 'Short', Comentarios: 'Periodicidad del ahorro en días.' }, { Nombre: 'periodosGraciaUtilizados', Tipo: 'Short', Comentarios: 'Períodos de gracia utilizados.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'renueva', Tipo: 'String', Comentarios: '¿Renueva? (S/N).' }, { Nombre: 'totalDepositado', Tipo: 'Double', Comentarios: 'Saldo total depositado.' }, { Nombre: 'totalInteresesAcreditados', Tipo: 'Double', Comentarios: 'Total de intereses acreditados.' }, { Nombre: 'totalInteresesGenerados', Tipo: 'Double', Comentarios: 'Total de intereses generados.' }, { Nombre: '### sBTMovimientoAhorro', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTMovimientoAhorro', fields: [{ Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital de movimiento.' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto de movimiento.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de movimiento.' }, { Nombre: 'intereses', Tipo: 'Double', Comentarios: 'Intereses del movimiento.' }, { Nombre: 'saldoAhorro', Tipo: 'Double', Comentarios: 'Saldo del ahorro.' }] }];
}
