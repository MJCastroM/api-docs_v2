import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ModificarLimite',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ModificarLimiteComponent1750713395079 {
  pageTitle        = 'Modificar Límite';
  description      = `Método para modificar el límite de una tarjeta de débito.`;
  pubName    = 'BTTarjetasDeDebito.ModificarLimite';
  programa   = 'RBTPG148';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador de la tarjeta de débito.' }, { Nombre: 'codigoDeLimiteId', Tipo: 'Short', Comentarios: 'Código de límite.' }];
  outputData = [];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de tarjeta.' }, { Codigo: '30002', Descripcion: 'No se recibió código de límite' }, { Codigo: '40001', Descripcion: 'No existe el tipo de límite' }, { Codigo: '40002', Descripcion: 'No existe la tarjeta' }, { Codigo: '40014', Descripcion: 'No se pudo confirmar la funcionalidad.' }, { Codigo: '40001', Descripcion: 'No existe la tarjeta.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.ModificarLimite>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1820366692F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:tarjetaUId>2000002050</bts:tarjetaUId>
         <bts:codigoDeLimiteId>1</bts:codigoDeLimiteId>
      </bts:BTTarjetasDeDebito.ModificarLimite>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ModificarLimite\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"bts:Btinreq": {
	  "bts:Canal": "BTDIGITAL",
	  "bts:Requerimiento": "1",
	  "bts:Usuario": "BANTOTAL",
	  "bts:Token": "1820366692F955E77534D3E0",
	  "bts:Device": "AC"
	},
	"bts:tarjetaUId": "2000002050",
	"bts:codigoDeLimiteId": "1"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.ModificarLimiteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1820366692F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTTarjetasDeDebito.ModificarLimite</Servicio>
            <Fecha>2020-11-13</Fecha>
            <Hora>16:37:24</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7917</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTTarjetasDeDebito.ModificarLimiteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1820366692F955E77534D3E0",
	  "Device": "AC"
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTTarjetasDeDebito.ModificarLimite",
	  "Fecha": "2020-11-13",
	  "Hora": "16:37:24",
	  "Requerimiento": "1",
	  "Numero": "7917",
	  "Estado": "OK"
	}
}\'` }
  };

  structuredTypes = [];
}
