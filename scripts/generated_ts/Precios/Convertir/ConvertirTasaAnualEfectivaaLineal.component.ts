import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ConvertirTasaAnualEfectivaaLineal',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ConvertirTasaAnualEfectivaaLinealComponent {
  pageTitle = 'Convertir Tasa Anual Efectiva a Lineal';
  description = `Metodo para convertir una tasa efectiva anual a tasa lineal anual.`;
  pubName    = 'BTPrecios.ConvertirTasaAnualEfectivaALineal';
  programa   = 'RBTPG299';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'tipoTasaOrigen', Tipo: 'Short', Comentarios: 'Tipo de tasa origen [Hidden: Valor fijo '1' para este metodo].' }, { Nombre: 'tasaOrigen', Tipo: 'Double', Comentarios: 'Tasa a convertir.' }, { Nombre: 'tipoAnio', Tipo: 'Short', Comentarios: 'Tipo de ano [1 - Comercial / 2 - Calendario].' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'tipoTasaDestino', Tipo: 'Short', Comentarios: 'Tipo de tasa destino [Hidden: Valor fijo '2' para este metodo].' }];
  outputData = [{ Nombre: 'tasaDestino', Tipo: 'Double', Comentarios: 'Tasa convertida.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar la tasa a convertir.' }, { Codigo: '30002', Descripcion: 'Debe ingresar un tipo de ano valido [1 - Comercial / 2 - Calendario].' }, { Codigo: '30003', Descripcion: 'Debe ingresar un plazo.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrecios.ConvertirTasaAnualEfectivaALineal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>2081397563CD285A89A23FBE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:tasaOrigen>10</bts:tasaOrigen>
         <bts:tipoAnio>2</bts:tipoAnio>
         <bts:plazo>30</bts:plazo>
      </bts:BTPrecios.ConvertirTasaAnualEfectivaALineal>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ConvertirTasaAnualEfectivaALineal=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \
  -d '{
	"Btinreq": {
		"Device": "GP",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "2081397563CD285A89A23FBE"
	},
	"tasaOrigen": "10",
	"tipoAnio": "2",
	"plazo": "30"
  }'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrecios.ConvertirTasaAnualEfectivaALinealResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>2081397563CD285A89A23FBE</Token>
            <Device>GP</Device>
         </Btinreq>
         <tasaDestino>9.568447</tasaDestino>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrecios.ConvertirTasaAnualEfectivaALineal</Servicio>
            <Fecha>2021-02-03</Fecha>
            <Hora>11:57:30</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7967</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrecios.ConvertirTasaAnualEfectivaALinealResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "INSTALADOR",
	  "Token": "2081397563CD285A89A23FBE",
	  "Device": "GP"
	},
	"tasaDestino": "9.568447",
	"Erroresnegocio": {},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTPrecios.ConvertirTasaAnualEfectivaALineal",
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
