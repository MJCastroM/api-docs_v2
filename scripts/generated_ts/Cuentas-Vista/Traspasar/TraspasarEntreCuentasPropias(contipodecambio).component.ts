import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-TraspasarEntreCuentasPropiascontipodecambio',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class TraspasarEntreCuentasPropiascontipodecambioComponent {
  // Cabecera e info-card
  pageTitle = 'Traspasar Entre Cuentas Propias (con tipo de cambio)';
  description = `Metodo para realizar un traspaso con cotizacion entre cuentas propias.`;
  pubName    = 'BTCuentasVista.TraspasarCuentasPropiasConCotizacion';
  programa   = 'RBTPG263';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId', 'sdtTraspaso', 'tipoDeCambio'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador de cliente.' }, { Nombre: 'sdtTraspaso', Tipo: '[sBTTraspaso](#sbttraspaso)', Comentarios: 'Datos del Traspaso.' }, { Nombre: 'tipoDeCambio', Tipo: 'Double', Comentarios: 'Cotizacion' }];
  outputCols = ['sdtResultadoTraspaso'];
  outputData = [{ Nombre: 'sdtResultadoTraspaso', Tipo: '[sBTResultadoTraspasoDatos](#sbtresultadotraspasodatos)', Comentarios: 'Resultado del traspaso.' }];
  errorCols  = ['30001', '30002', '30003', '30004', '30005', '30006', '30007', '30008', '30009', '30010', '30011', '30100', '51005', '51008'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recupero la cuenta para el Identificador.' }, { Codigo: '30003', Descripcion: 'No se recibio el identificador unico de operacion de origen.' }, { Codigo: '30004', Descripcion: 'No se recibio el identificador unico de operacion de destino.' }, { Codigo: '30005', Descripcion: 'Debe ingresar importe.' }, { Codigo: '30006', Descripcion: 'Debe ingresar tipo de cambio a aplicar.' }, { Codigo: '30007', Descripcion: 'No se recupero la operacion origen para el Identificador: [Numero de identificador].' }, { Codigo: '30008', Descripcion: 'La operacion origen no pertenece al cliente.' }, { Codigo: '30009', Descripcion: 'No se recupero la operacion destino para el Identificador: [Numero de identificador].' }, { Codigo: '30010', Descripcion: 'La cuenta destino debe coincidir con la cuenta origen.' }, { Codigo: '30011', Descripcion: 'La operacion origen y operacion destino no pueden ser iguales.' }, { Codigo: '30100', Descripcion: 'Error en la contabilizacion.' }, { Codigo: '51005', Descripcion: 'La moneda del traspaso debe coincidir con la moneda de la operacion origen' }, { Codigo: '51008', Descripcion: 'Error de configuracion: No se definio transaccion a ejecutar.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
    <soapenv:Header/>    
    <soapenv:Body>        
        <bts:BTCuentasVista.TraspasarCuentasPropiasConCotizacion>  
            <bts:Btinreq>        
                <bts:Device>AV</bts:Device> 
                <bts:Usuario>MINSTALADOR</bts:Usuario> 
                <bts:Requerimiento></bts:Requerimiento> 
                <bts:Canal>BTDIGITAL</bts:Canal> 
                <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
            </bts:Btinreq> 
            <bts:clienteUId>21</bts:clienteUId> 
            <bts:sdtTraspaso> 
                <bts:operacionUIdOrigen>281</bts:operacionUIdOrigen> 
                <bts:importe>500</bts:importe> 
                <bts:operacionUIdDestino>282</bts:operacionUIdDestino> 
                <bts:monedaId></bts:monedaId>    
                <bts:concepto>Traspaso</bts:concepto>     
            </bts:sdtTraspaso>   
            <bts:tipoDeCambio>31.5</bts:tipoDeCambio>  
        </bts:BTCuentasVista.TraspasarCuentasPropiasConCotizacion>  
    </soapenv:Body> 
</soapenv:Envelope>`, json: `curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?TraspasarCuentasPropiasConCotizacion \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
    "Btinreq": { 
        "Requerimiento": "1", 
        "Device": "GP", 
        "Token": "b4ae55b35c4A8B5C60A82434", 
        "Usuario": "MINSTALADOR", 
        "Canal": "BTDIGITAL" 
    }, 
    "clienteUId": "21", 
    "sdtTraspaso":  
      { 
        "operacionUIdOrigen": "281", 
        "importe": "500", 
        "operacionUIdDestino": "282", 
        "monedaId": "", 
        "concepto": "Traspaso", 
      }, 
    "tipoDeCambio": "31.5" 
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAPENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAPENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">   
    <SOAP-ENV:Body>       
        <BTCuentasVista.TraspasarCuentasPropiasConCotizacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">  
            <Btinreq>      
                <Device>AV</Device>     
                <Usuario>MINSTALADOR</Usuario>      
                <Requerimiento/>        
                <Canal>BTDIGITAL</Canal>        
                <Token>268b6d23eb4A8B5C60A82434</Token>    
            </Btinreq>      
            <sdtResultadoTraspaso> 
                <operacionUIdOrigen>281</operacionUIdOrigen>            
                <idMovimiento>0010000100050007003720180706</idMovimiento>  
                <operacionUIdDestino>282</operacionUIdDestino>       
                <saldoOperacionOrigen>7432900.28</saldoOperacionOrigen>     
                <movimientoUId>141</movimientoUId>   
            </sdtResultadoTraspaso>       
            <Erroresnegocio></Erroresnegocio>  
            <Btoutreq>           
                <Numero>864</Numero>   
                <Estado>OK</Estado>      
                <Servicio>BTCuentasVista.TraspasarCuentasPropiasConCotizacion</Servicio> 
                <Requerimiento/>       
                <Fecha>2017-12-18</Fecha> 
                <Hora>17:07:19</Hora>       
                <Canal>BTDIGITAL</Canal>        
            </Btoutreq>       
        </BTCuentasVista.TraspasarCuentasPropiasConCotizacionResponse> 
    </SOAP-ENV:Body>  
</SOAP-ENV:Envelope>`, json: `'{ 
    "Btinreq": { 
        "Device": "AV", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "fa2c02c95a4A8B5C60A82434" 
    },         
    "sdtResultadoTraspaso":  
      { 
        "operacionUIdOrigen": "281", 
        "idMovimiento": "0010000100050007003720180706", 
        "operacionUIdDestino": "282", 
        "saldoOperacionOrigen": "7432900.28", 
        "movimientoUId": "141", 
      }, 
    "Btoutreq": { 
        "Numero": "103", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.TraspasarCuentasPropiasCot", 
        "Requerimiento": "1", 
        "Fecha": "2019-07-22", 
        "Canal": "BTDIGITAL", 
        "Hora": "16:00:37" 
    } 
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto del Traspaso.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe del Movimiento.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de Moneda.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador de operacion de destino del traspaso.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador de operacion de origen del traspaso.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTResultadoTraspasoDatos', Tipo: '', Comentarios: '' }, { Nombre: '### sBTResultadoTraspasoDatos', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTResultadoTraspasoDatos son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'idMovimiento', Tipo: 'String', Comentarios: 'Identificador de Movimiento String.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador de Movimiento.' }, { Nombre: 'operacionUIdDestino', Tipo: 'Long', Comentarios: 'Identificador de operacion de destino del traspaso.' }, { Nombre: 'operacionUIdOrigen', Tipo: 'Long', Comentarios: 'Identificador de operacion de origen del traspaso.' }, { Nombre: 'saldoOperacionOrigen', Tipo: 'Double', Comentarios: 'Saldo Actual de operacion de origen.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
