import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerProductos',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProductosComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Productos';
  description = `Metodo para obtener un listado de los productos de cuentas corrientes.`;
  pubName    = 'BTCuentasCorrientes.ObtenerProductos';
  programa   = 'RBTPG055';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = [];
  inputData  = [];
  outputCols = ['sdtProductos'];
  outputData = [{ Nombre: 'sdtProductos', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Listado de productos.' }];
  errorCols  = [];
  errors     = [];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.ObtenerProductos>
         <bts:Btinreq>             
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTCuentasCorrientes.ObtenerProductos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerProductos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: de821bcc-38ae-1793-b380-8ebc32eba879' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 9
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductos>
            <sBTProducto>
               <productoUId>41</productoUId>
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>42</productoUId>
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>43</productoUId>
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Jurídica</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>44</productoUId>
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Jurídica</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>45</productoUId>
               <nombre>CUENTAS VISTA, Depósitos Vista P. Físicas</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>46</productoUId>
               <nombre>CUENTAS VISTA, Depósitos Vista P. Físicas</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>47</productoUId>
               <nombre>CUENTAS VISTA, Depósitos Vista P. Jurídicas</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>48</productoUId>
               <nombre>CUENTAS VISTA, Depósitos Vista P. Jurídicas</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
         </sdtProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>932</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.ObtenerProductos</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:37:02</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerProductosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtProductos": {
        "sBTProducto": [
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "41",
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "42",
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "43",
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Jurídica"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "44",
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Jurídica"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "45",
                "nombre": "CUENTAS VISTA, Depósitos Vista P. Físicas"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "46",
                "nombre": "CUENTAS VISTA, Depósitos Vista P. Físicas"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "47",
                "nombre": "CUENTAS VISTA, Depósitos Vista P. Jurídicas"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "48",
                "nombre": "CUENTAS VISTA, Depósitos Vista P. Jurídicas"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "933",
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.ObtenerProductos",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "17:37:18",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTConcepto son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
