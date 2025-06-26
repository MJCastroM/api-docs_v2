import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPaquete',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPaqueteComponent1750945332841 {
  pageTitle        = 'Obtener Paquete';
  description      = `Método para obtener los datos de un paquete.`;
  pubName    = 'BTCuentasVista.ObtenerPaquete';
  programa   = 'RBTPG321';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'paqueteId', Tipo: 'Int', Comentarios: 'Identificador de paquete.' }];
  outputData = [{ Nombre: 'sdtPaquete', Tipo: '[sBTPaquete](#sbtpaquete)', Comentarios: 'Datos del paquete.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se encontraron paquetes para el identificador ingresado.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/> 	 
   <soapenv:Body>
      <bts:BTCuentasVista.ObtenerPaquete>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1752711512CD285A89A23FBE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:paqueteId>1</bts:paqueteId>
      </bts:BTCuentasVista.ObtenerPaquete>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?ObtenerPaquete=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: a0776b33-6711-6c56-044c-42d681d3742f\' \
  -d \'{
	"Btinreq": {
		"Device": "GP",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "1752711512CD285A89A23FBE"
	},
   "paqueteId": "1"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ObtenerPaqueteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>1752711512CD285A89A23FBE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtPaquete>
            <codigo>1</codigo>
            <descripcion>Cuenta Persona</descripcion>
            <vigente>S</vigente>
            <productos>
               <sBTProductoPaquete>
                  <productoUId>154</productoUId>
                  <nombre/>
                  <moneda>PESOS</moneda>
                  <papel>Billete</papel>
                  <cantidad>0</cantidad>
               </sBTProductoPaquete>
               <sBTProductoPaquete>
                  <productoUId>93</productoUId>
                  <nombre>Cuenta corriente P.Física</nombre>
                  <moneda>PESOS</moneda>
                  <papel>Billete</papel>
                  <cantidad>1</cantidad>
               </sBTProductoPaquete>
               <sBTProductoPaquete>
                  <productoUId>134</productoUId>
                  <nombre>Caja de Ahorro P.Física</nombre>
                  <moneda>DÓLAR ESTADOUNIDENSE</moneda>
                  <papel>Billete</papel>
                  <cantidad>1</cantidad>
               </sBTProductoPaquete>
            </productos>
         </sdtPaquete>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCuentasVista.ObtenerPaquete</Servicio>
            <Fecha>2021-03-02</Fecha>
            <Hora>15:53:26</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8020</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasVista.ObtenerPaqueteResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
		"Device": "GP",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "1752711512CD285A89A23FBE"
	},
   "sdtPaquete": {
      "codigo": "1",
      "descripcion": "Cuenta Persona",
      "vigente": "S",
      "productos": {
         "SdtsBTProductoPaquete": [
            {
            "productoUId": "154",
            "moneda": "PESOS",
            "papel": "Billete",
            "cantidad": "0"
            },
            {
            "productoUId": "93",
            "nombre": "Cuenta corriente P.Física",
            "moneda": "PESOS",
            "papel": "Billete",
            "cantidad": "1"
            },
            {
            "productoUId": "134",
            "nombre": "Caja de Ahorro P.Física",
            "moneda": "DÓLAR ESTADOUNIDENSE",
            "papel": "Billete",
            "cantidad": "1"
            },
         ]
      }
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "790",
      "Estado": "OK",
      "Servicio": "BTCuentasVista.ObtenerPaquete",
      "Fecha": "2021-03-02",
      "Requerimiento": "1",
      "Hora": "15:53:26",
      "Canal": "BTDIGITAL"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPaquete', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código de paquete.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de paquete.' }, { Nombre: 'productos', Tipo: '[sBTProductoPaquete](#sbtproductopaquete)', Comentarios: 'Listado de productos incluidos en el paquete.' }, { Nombre: 'vigente', Tipo: 'String', Comentarios: 'Indica si está vigente el paquete (S/N).' }] }, { typeName: 'sBTProductoPaquete', fields: [{ Nombre: 'cantidad', Tipo: 'Short', Comentarios: 'Cantidad de productos de este tipo incluidos en el paquete.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de producto.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo de papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }];
}
