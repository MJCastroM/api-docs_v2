import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ConvertirTasaMensualLinealaEfectiva',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ConvertirTasaMensualLinealaEfectivaComponent1751987199056 {
  pageTitle        = 'Convertir Tasa Mensual Lineal a Efectiva';
  description      = `Método para convertir una tasa lineal mensual a tasa efectiva mensual.`;
  pubName    = 'BTPrecios.ConvertirTasaMensualLinealAEfectiva';
  programa   = 'RBTPG299';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tipoTasaOrigen', Tipo: 'Short', Comentarios: 'Tipo de tasa origen [Hidden: Valor fijo \'4\' para este método].' }, { Nombre: 'tasaOrigen', Tipo: 'Double', Comentarios: 'Tasa a convertir.' }, { Nombre: 'tipoAnio', Tipo: 'Short', Comentarios: 'Tipo de año [1 - Comercial / 2 - Calendario].' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'tipoTasaDestino', Tipo: 'Short', Comentarios: 'Tipo de tasa destino [Hidden: Valor fijo \'3\' para este método].' }];
  outputData = [{ Nombre: 'tasaDestino', Tipo: 'Double', Comentarios: 'Tasa convertida.' }];
  errors     = [{ Código: '30001', Descripción: 'Debe ingresar la tasa a convertir.' }, { Código: '30002', Descripción: 'Debe ingresar un tipo de año válido [1 - Comercial / 2 - Calendario].' }, { Código: '30003', Descripción: 'Debe ingresar un plazo.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrecios.ConvertirTasaMensualLinealAEfectiva>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>2081397563CD285A89A23FBE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:tasaOrigen>10</bts:tasaOrigen>
         <bts:tipoAnio>2</bts:tipoAnio>
         <bts:plazo>365</bts:plazo>
      </bts:BTPrecios.ConvertirTasaMensualLinealAEfectiva>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ConvertirTasaMensualLinealAEfectiva=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: a0776b33-6711-6c56-044c-42d681d3742f\' \
  -d \'{
  	"Btinreq": {
		"Device": "GP",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "2081397563CD285A89A23FBE"
	},
	"tasaOrigen": "10",
	"tipoAnio": "2",
	"plazo": "365"
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrecios.ConvertirTasaMensualLinealAEfectivaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>2081397563CD285A89A23FBE</Token>
            <Device>GP</Device>
         </Btinreq>
         <tasaDestino>6.79114</tasaDestino>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrecios.ConvertirTasaMensualLinealAEfectiva</Servicio>
            <Fecha>2021-02-03</Fecha>
            <Hora>16:56:59</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7970</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrecios.ConvertirTasaMensualLinealAEfectivaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "INSTALADOR",
	  "Token": "2081397563CD285A89A23FBE",
	  "Device": "GP"
	},
	"tasaDestino": "6.79114",
	"Erroresnegocio": {},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTPrecios.ConvertirTasaMensualLinealAEfectiva",
	  "Fecha": "2021-02-03",
	  "Hora": "11:57:30",
	  "Requerimiento": "1",
	  "Numero": "7967",
	  "Estado": "OK"
	}
}` }
  };

  structuredTypes = [];
}
