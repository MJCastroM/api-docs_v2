import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-Comprar',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ComprarComponent1750272791899 {
  pageTitle        = 'Comprar';
  description      = `Método para comprar un título.`;
  pubName    = 'BTTitulos.Comprar';
  programa   = 'RBTPG496';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtCompra', Tipo: '[sBTCompraTitulo](#sbtcompratitulo)', Comentarios: 'Datos del título a comprar.' }];
  outputData = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único del movimiento.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador del mercado.' }, { Codigo: '30002', Descripcion: 'El valor del campo compra tiene que ser C o V.' }, { Codigo: '30003', Descripcion: 'El valor del campo ingresa tiene que ser I o V.' }, { Codigo: '30004', Descripcion: 'No se recibió el identificador de la especie.' }, { Codigo: '30005', Descripcion: 'No se recibió el identificador del cliente.' }, { Codigo: '30006', Descripcion: 'El valor del campo precio tiene que ser L o C.' }, { Codigo: '30007', Descripcion: 'Se tiene que ingresar plazo o vigencia hasta.' }, { Codigo: '30008', Descripcion: 'Se tiene que ingresar tasa o comisión.' }, { Codigo: '30009', Descripcion: 'No se recibió el identificador de la operación.' }, { Codigo: '30010', Descripcion: 'La forma de pago tiene que ser CC o CA.' }, { Codigo: '30011', Descripcion: 'No se recuperó la operación para el identificador recibido.' }, { Codigo: '30012', Descripcion: 'No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].' }, { Codigo: '30013', Descripcion: 'La operación ingresada no corresponde a una cuenta corriente.' }, { Codigo: '30014', Descripcion: 'La operación ingresada no corresponde a una cuenta de ahorro.' }, { Codigo: '30015', Descripcion: 'La operación no pertenece al cliente.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTitulos.ComprarTitulo>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>D019598AFAA2ECCC4BA9BF31</bts:Token>
         </bts:Btinreq>
         <bts:sdtComprarTitulo>
            <bts:plazo>3</bts:plazo>
            <bts:tasa>60</bts:tasa>
            <bts:fecha>2020-08-11</bts:fecha>
            <bts:moneda>0</bts:moneda>
            <bts:especie>5787</bts:especie>
            <bts:tipo>C</bts:tipo>
            <bts:texto></bts:texto>
            <bts:mercado>51</bts:mercado>
            <bts:precio>1000</bts:precio>
            <bts:cuentaUId>221</bts:cuentaUId>
            <bts:otrosConceptos>
               <bts:SdtsBTConcepto>
                  <bts:texto></bts:texto>
                  <bts:valor></bts:valor>
                  <bts:concepto></bts:concepto>
               </bts:SdtsBTConcepto>
            </bts:otrosConceptos>
            <bts:valorNominal>0</bts:valorNominal>
            <bts:solicita>P</bts:solicita>
            <bts:comision></bts:comision>
            <bts:formaPago>CC</bts:formaPago>
            <bts:operacionUId>7</bts:operacionUId>
            <bts:ingresa>I</bts:ingresa>
            <bts:vigenciaHasta></bts:vigenciaHasta>
            <bts:tipoPrecio>L</bts:tipoPrecio>
         </bts:sdtComprarTitulo>
      </bts:BTTitulos.ComprarTitulo>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTitulos?ComprarTitulo\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtComprarTitulo": {
      "plazo": 3,
      "tasa": 60,
      "fecha": "2020-08-11",
      "moneda": 0,
      "especie": 5787,
      "tipo": "C",
      "texto": "",
      "mercado": 51,
      "precio": 1000,
      "cuentaUId": 221,
      "otrosConceptos": {
      "SdtsBTConcepto": {
         "texto": "",
         "valor": "",
         "concepto": ""
      }
      },
      "valorNominal": 0,
      "solicita": "P",
      "comision": "",
      "formaPago": "CC",
      "operacionUId": 7,
      "ingresa": "I",
      "vigenciaHasta": "",
      "tipoPrecio": "L"
   }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTitulos.ComprarTituloResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>be9fc8708b4A8B5C60A82434</Token>
         </Btinreq>
         <operacionUId>142</operacionUId>
         <movimientoUId>543</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>967</Numero>
            <Estado>OK</Estado>
            <Servicio>BTTitulos.ComprarTitulo</Servicio>
            <Fecha>2017-12-22</Fecha>
            <Requerimiento/>
            <Hora>12:26:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTTitulos.ComprarTituloResponse>
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
    "operacionUId": "142",
    "movimientoUId": "543",
    "Erroresnegocio": {
      "BTErrorNegocio": []
    },
   "Btoutreq": {
      "Numero": "786",
      "Estado": "OK",
      "Servicio": "BTTitulos.ComprarTitulo",
      "Fecha": "2017-12-15",
      "Requerimiento": "",
      "Hora": "16:35:22",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTCompraTitulo', fields: [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'comision', Tipo: 'Short', Comentarios: 'Comisión.' }, { Nombre: 'especie', Tipo: 'Int', Comentarios: 'Identificador de especie.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha compra.' }, { Nombre: 'formaPago', Tipo: 'String', Comentarios: 'Forma de pago.' }, { Nombre: 'ingresa', Tipo: 'String', Comentarios: 'Ingresa valor nominal o importe.' }, { Nombre: 'mercado', Tipo: 'Short', Comentarios: 'Identificador del mercado.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Identificador de moneda.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo.' }, { Nombre: 'precio', Tipo: 'Double', Comentarios: 'Precio.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto adicional.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de compra.' }, { Nombre: 'tipoPrecio', Tipo: 'String', Comentarios: 'Tipo de precio limite o cerrado.' }, { Nombre: 'valorNominal', Tipo: 'Double', Comentarios: 'Valor nominal.' }, { Nombre: 'vigenciaHasta', Tipo: 'Date', Comentarios: 'Fecha de vigencia hasta.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
