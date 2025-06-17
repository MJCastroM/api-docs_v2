import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerTransaccionesporEstados',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTransaccionesporEstadosComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Transacciones por Estados';
  description = `Metodo para obtener las transacciones por estado ingresadas en el sistema.`;
  pubName    = 'BTIndicadores.ObtenerTransaccionesEstados';
  programa   = 'RBTPG706';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = [];
  inputData  = [];
  outputCols = ['sdtTransaccionesEstados'];
  outputData = [{ Nombre: 'sdtTransaccionesEstados', Tipo: '[sBTTransaccionesEstados](#sbttransaccionesestados)', Comentarios: 'Listado de trasacciones.' }];
  errorCols  = [];
  errors     = [];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTIndicadores.ObtenerTransaccionesEstados>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>?</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerTransaccionesEstados>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerTransaccionesEstados' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
   "Btinreq": {
      "Device": 1,
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7",
      "Usuario": "INSTALADOR",
      "Requerimiento": "?"
   }
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTIndicadores.ObtenerTransaccionesEstadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>?</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>959C2E0AEF210ABC0D8AA8F7</Token>
         </Btinreq>
         <sdtTransaccionesEstados>
            <transaccionM>0</transaccionM>
            <transaccionL>3</transaccionL>
            <transaccionH>0</transaccionH>
            <otros>54</otros>
            <transaccionE>31</transaccionE>
            <transaccionB>42</transaccionB>
            <transaccionX>0</transaccionX>
            <transaccionA>0</transaccionA>
            <exito>17</exito>
            <error>31</error>
            <transaccionS>17</transaccionS>
            <transaccionR>0</transaccionR>
            <transaccionSP>0</transaccionSP>
            <sucursalParametros>0</sucursalParametros>
            <transaccionP>9</transaccionP>
            <transaccionN>0</transaccionN>
         </sdtTransaccionesEstados>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11993</Numero>
            <Estado>OK</Estado>
            <Servicio>BTIndicadores.ObtenerTransaccionesEstados</Servicio>
            <Requerimiento>?</Requerimiento>
            <Fecha>2023-05-22</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>15:37:04</Hora>
         </Btoutreq>
      </BTIndicadores.ObtenerTransaccionesEstadosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{
   "Btinreq": {
      "Device": 1,
      "Usuario": "INSTALADOR",
      "Requerimiento": "?",
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7"
   },
   "sdtTransaccionesEstados": {
      "transaccionM": 0,
      "transaccionL": 3,
      "transaccionH": 0,
      "otros": 54,
      "transaccionE": 31,
      "transaccionB": 42,
      "transaccionX": 0,
      "transaccionA": 0,
      "exito": 17,
      "error": 31,
      "transaccionS": 17,
      "transaccionR": 0,
      "transaccionSP": 0,
      "sucursalParametros": 0,
      "transaccionP": 9,
      "transaccionN": 0
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": 11993,
      "Estado": "OK",
      "Servicio": "BTIndicadores.ObtenerTransaccionesEstados",
      "Requerimiento": "?",
      "Fecha": "2023-05-22",
      "Canal": "BTDIGITAL",
      "Hora": "15:37:04"
   }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'error', Tipo: 'Int', Comentarios: 'Transacciones contabilizadas con error.' }, { Nombre: 'exito', Tipo: 'Int', Comentarios: 'Transacciones contabilizadas con exito.' }, { Nombre: 'otros', Tipo: 'Int', Comentarios: 'Otros tipos de contabilizacion.' }, { Nombre: 'sucursalParametros', Tipo: 'Int', Comentarios: 'Parametros de sucursal.' }, { Nombre: 'transaccionA', Tipo: 'Int', Comentarios: 'Movimiento autorizado sin contabilizar.' }, { Nombre: 'transaccionB', Tipo: 'Int', Comentarios: 'Movimiento de ingreso batch no contabilizado.' }, { Nombre: 'transaccionE', Tipo: 'Int', Comentarios: 'Movimiento con errores.' }, { Nombre: 'transaccionH', Tipo: 'Int', Comentarios: 'Movimiento contabilizado y pasado al historico.' }, { Nombre: 'transaccionL', Tipo: 'Int', Comentarios: 'Movimiento de ingreso libre no contabilizado.' }, { Nombre: 'transaccionM', Tipo: 'Int', Comentarios: 'Movimiento con autorizaciones pendientes.' }, { Nombre: 'transaccionN', Tipo: 'Int', Comentarios: 'Movimiento ingresado por el transaccional no contabilizado.' }, { Nombre: 'transaccionP', Tipo: 'Int', Comentarios: 'Movimiento contabilizado, pasado al historico, con archivos de saldos historicos actualizados.' }, { Nombre: 'transaccionR', Tipo: 'Int', Comentarios: 'Movimiento con autorizaciones denegadas.' }, { Nombre: 'transaccionS', Tipo: 'Int', Comentarios: 'Movimiento contabilizado sin pasar al historico.' }, { Nombre: 'transaccionSP', Tipo: 'Int', Comentarios: 'Movimiento sin especificar.' }, { Nombre: 'transaccionX', Tipo: 'Int', Comentarios: 'Movimiento con autorizacion por tipo cambio ingresado, para ser retomado.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
