import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerLmites',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerLimitesComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Limites';
  description = `Metodo para obtener los limites de una tarjeta de debito.`;
  pubName    = 'BTTarjetasDeDebito.ObtenerLimites';
  programa   = 'RBTPG144';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['tarjetaUId'];
  inputData  = [{ Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador unico de la tarjeta de debito.' }];
  outputCols = ['sdtLimites'];
  outputData = [{ Nombre: 'sdtLimites', Tipo: '[sBTLimiteTarjeta](#sbtlimitetarjeta)', Comentarios: 'Datos de los limites de la tarjeta.' }];
  errorCols  = ['30001', '40001'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio identificador de tarjeta.' }, { Codigo: '40001', Descripcion: 'No existe la tarjeta.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.ObtenerLimites>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1820366692F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:tarjetaUId>2000002050</bts:tarjetaUId>
      </bts:BTTarjetasDeDebito.ObtenerLimites>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerLimites' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1820366692F955E77534D3E0",
	  "Device": "AC"
	},
	"tarjetaUId": "2000002050"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.ObtenerLimitesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1820366692F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtLimites>
            <SdtsBTLimiteTarjeta>
               <identificador>1</identificador>
               <moneda>0</moneda>
               <limiteEMV>30000.00</limiteEMV>
               <limiteBandaMagnetica>15000.00</limiteBandaMagnetica>
               <limiteNoPresencial>10000.00</limiteNoPresencial>
            </SdtsBTLimiteTarjeta>
         </sdtLimites>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTTarjetasDeDebito.ObtenerLimites</Servicio>
            <Fecha>2020-11-13</Fecha>
            <Hora>15:48:52</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7910</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerLimitesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1820366692F955E77534D3E0",
	  "Device": "AC"
	},
	"sdtLimites": {
	  "SdtsBTLimiteTarjeta": {
		"identificador": "1",
		"moneda": "0",
		"limiteEMV": "30000.00",
		"limiteBandaMagnetica": "15000.00",
		"limiteNoPresencial": "10000.00"
	  }
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTTarjetasDeDebito.ObtenerLimites",
	  "Fecha": "2020-11-13",
	  "Hora": "15:48:52",
	  "Requerimiento": "1",
	  "Numero": "7910",
	  "Estado": "OK"
	}
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Codigo de limite.' }, { Nombre: 'limiteBandaMagnetica', Tipo: 'Double', Comentarios: 'Monto limite en banda magnetica.' }, { Nombre: 'limiteEMV', Tipo: 'Double', Comentarios: 'Monto limite EMV.' }, { Nombre: 'limiteNoPresencial', Tipo: 'Double', Comentarios: 'Monto limite no presencial.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Codigo de moneda.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
