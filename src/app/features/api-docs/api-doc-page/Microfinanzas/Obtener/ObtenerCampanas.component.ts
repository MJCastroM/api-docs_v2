import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerCampanas',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCampanasComponent1750446218629 {
  pageTitle        = 'Obtener Campañas';
  description      = `Método para obtener las campañas de crédito.`;
  pubName    = 'BTMicrofinanzas.ObtenerCampanias';
  programa   = 'RBTPG425';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente fiador.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de inicio de campaña.' }];
  outputData = [{ Nombre: 'sdtCampanias', Tipo: '[sBTCampania](#sbtcampania)', Comentarios: 'Listado de campañas.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para el Identificador de cliente.' }, { Codigo: '30011', Descripcion: 'No se obtuvo el titular representativo de la cuenta.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.ObtenerCampanias>
         <bts:Btinreq>
            <bts:Canal>BTINTERNO</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>419385365CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>3</bts:clienteUId>
         <bts:fecha>2019-01-01</bts:fecha>
      </bts:BTMicrofinanzas.ObtenerCampanias>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerCampanias \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "clienteUId": "3",
   "fecha": "2019-01-01"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.ObtenerCampaniasResponse>
         <Btinreq>
            <Canal>BTINTERNO</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>419385365CD285A89A23FBEE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtCampanias>
            <sBTCampania>
               <codigo>1</codigo>
               <descripcion>Campaña Uno</descripcion>
            </sBTCampania>
         </sdtCampanias>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ObtenerCampanias</Servicio>
            <Fecha>2019-09-25</Fecha>
            <Hora>10:06:27</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>246</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerCampaniasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
        "sdtCampanias": {
          "sBTCampania": {
            "codigo": "1",
            "descripcion": "Campaña Uno"
          }
        },
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTMicrofinanzas.ObtenerCampanias",
          "Fecha": "2019-09-25",
          "Hora": "10:06:27",
          "Requerimiento": "95",
          "Numero": "246",
          "Estado": "OK"
        }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTCampania', fields: [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Identificador de campaña.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de campaña.' }] }];
}
