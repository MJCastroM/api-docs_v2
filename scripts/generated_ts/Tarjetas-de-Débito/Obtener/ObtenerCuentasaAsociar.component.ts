import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerCuentasaAsociar',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerCuentasaAsociarComponent1751987200130 {
  pageTitle        = 'Obtener Cuentas a Asociar';
  description      = `Método para obtener un listado de las posibles cuentas a asociar para una tarjeta de débito.`;
  pubName    = 'BTTarjetasDeDebito.ObtenerCuentasAAsociar';
  programa   = 'RBTPG376';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tarjetaUId', Tipo: 'Long', Comentarios: 'Identificador único de tarjeta de débito.' }];
  outputData = [{ Nombre: 'sdtCuentasAAsociar', Tipo: '[sBTCuentaAAsociarTD](#sbtcuentaaasociartd)', Comentarios: 'Lista de cuentas a asociar.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de tarjeta de débito.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTTarjetasDeDebito.ObtenerCuentasAAsociar>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>120109606CD285A89A23FBEE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:tarjetaUId>1</bts:tarjetaUId>
      </bts:BTTarjetasDeDebito.ObtenerCuentasAAsociar>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerCuentasAAsociar\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "GP",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cc9b534A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"tarjetaUId": "1",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTTarjetasDeDebito.ObtenerCuentasAAsociarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>120109606CD285A89A23FBEE</Token>
            <Device>MC</Device>
         </Btinreq>
         <sdtCuentasAAsociar>
            <SdtsBTCuentaAAsociarTD>
               <operacionUId>10212</operacionUId>
               <producto>
                  <productoUId>133</productoUId>
                  <nombre>CUENTA CORRIENTE, GENÉRICA</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta/>
            </SdtsBTCuentaAAsociarTD>
            <SdtsBTCuentaAAsociarTD>
               <operacionUId>10213</operacionUId>
               <producto>
                  <productoUId>93</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta>PESOS</subCuenta>
            </SdtsBTCuentaAAsociarTD>
            <SdtsBTCuentaAAsociarTD>
               <operacionUId>10214</operacionUId>
               <producto>
                  <productoUId>93</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta>PESOS</subCuenta>
            </SdtsBTCuentaAAsociarTD>
         </sdtCuentasAAsociar>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTTarjetasDeDebito.ObtenerCuentasAAsociar</Servicio>
            <Fecha>2021-11-30</Fecha>
            <Hora>11:04:47</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8767</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTTarjetasDeDebito.ObtenerCuentasAAsociarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{ 
    "Btinreq": { 
	    "Device": "GP", 
	    "Usuario": "MINSTALADOR", 
	    "Token": "16c1cc9b534A8B5C60A82434", 
	    "Canal": "BTDIGITAL", 
	    "Requerimiento": "1" 
    }, 
	"sdtCuentasAAsociar": { 
		"SdtsBTCuentaAAsociarTD": [ 
		  { 
			"operacionUId": "10212", 
			"producto": { 
			  "productoUId": "133", 
			  "nombre": "CUENTA CORRIENTE, GENÉRICA", 
			  "moneda": "$", 
			  "papel": "" 
			}, 
			"sucursal": "Casa Matriz", 
			"subCuenta": "" 
		  }, 
		  { 
			"operacionUId": "10213", 
			"producto": { 
			  "productoUId": "93", 
			  "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física", 
			  "moneda": "$", 
			  "papel": "" 
			}, 
			"sucursal": "Casa Matriz", 
			"subCuenta": "PESOS" 
		  }, 
		  { 
			"operacionUId": "10214", 
			"producto": { 
			  "productoUId": "93", 
			  "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física", 
			  "moneda": "$", 
			  "papel": "" 
			}, 
			"sucursal": "Casa Matriz", 
			"subCuenta": "PESOS" 
		  } 
		] 
	}, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTTarjetasDeDebito.ObtenerCuentasAAsociarResponse", 
        "Fecha": "2021-10-28", 
        "Hora": "15:39:53", 
        "Requerimiento": "1", 
        "Numero": "11003", 
        "Estado": "OK" 
    } 
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTCuentaAAsociarTD', fields: [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'subcuenta', Tipo: 'String', Comentarios: 'Nombre de la cuenta.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Sucursal de la cuenta.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
