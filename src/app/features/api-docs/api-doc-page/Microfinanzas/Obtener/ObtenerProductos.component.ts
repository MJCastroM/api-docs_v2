import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerProductos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProductosComponent1750268696554 {
  pageTitle        = 'Obtener Productos';
  description      = `Método para obtener una lista de los productos de préstamos.`;
  pubName    = 'BTMicrofinanzas.ObtenerProductos';
  programa   = 'RBTPG414';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador único de solicitud.' }];
  outputData = [{ Nombre: 'sdtProductos', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Listado de productos.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.ObtenerProductos>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>419385365CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:solicitudUId>10862</bts:solicitudUId>
      </bts:BTMicrofinanzas.ObtenerProductos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerProductos \
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
        "solicitudUId": "10862"
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.ObtenerProductosResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>419385365CD285A89A23FBEE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtProductos>
            <Producto>
               <productoUId>1</productoUId>
               <nombre>AGRICOLA PLAN DE PAGOS K + I</nombre>
               <moneda>Q</moneda>
               <papel/>
            </Producto>
            <Producto>
               <productoUId>2</productoUId>
               <nombre>AGRICOLA PLAN DE PAGOS LIBRE</nombre>
               <moneda>Q</moneda>
               <papel/>
            </Producto>
            <Producto>
               <productoUId>3</productoUId>
               <nombre>AGRICOLA PP LIBRE RECUPERADOS</nombre>
               <moneda>Q</moneda>
               <papel/>
            </Producto>
            <Producto>
               <productoUId>4</productoUId>
               <nombre>AGRICOLA CREDI - AGRO MENOR</nombre>
               <moneda>Q</moneda>
               <papel/>
            </Producto>
            <Producto>
               <productoUId>21</productoUId>
               <nombre>CADENA DE VALOR CAFE DIF.</nombre>
               <moneda>Q</moneda>
               <papel/>
            </Producto>
            <Producto>
               <productoUId>22</productoUId>
               <nombre>CADENA DE VALOR CREDI-BRÓCOLI</nombre>
               <moneda>Q</moneda>
               <papel/>
            </Producto>
            <Producto>
               <productoUId>23</productoUId>
               <nombre>VIVIENDA HIPOTECARIO</nombre>
               <moneda>Q</moneda>
               <papel/>
            </Producto>
            <Producto>
               <productoUId>24</productoUId>
               <nombre>VIVIENDA HIPOTECARIO LIBRE</nombre>
               <moneda>Q</moneda>
               <papel/>
            </Producto>
         </sdtProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ObtenerProductos</Servicio>
            <Fecha>2019-09-18</Fecha>
            <Hora>15:56:50</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>161</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerProductosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
        "sdtProductos": {
          "Producto": [
            {
              "productoUId": "1",
              "nombre": "AGRICOLA PLAN DE PAGOS K + I",
              "moneda": "Q"
            },
            {
              "productoUId": "2",
              "nombre": "AGRICOLA PLAN DE PAGOS LIBRE",
              "moneda": "Q"
            },
            {
              "productoUId": "3",
              "nombre": "AGRICOLA PP LIBRE RECUPERADOS",
              "moneda": "Q"
            },
            {
              "productoUId": "4",
              "nombre": "AGRICOLA CREDI - AGRO MENOR",
              "moneda": "Q"
            },
            {
              "productoUId": "21",
              "nombre": "CADENA DE VALOR CAFE DIF.",
              "moneda": "Q"
            },
            {
              "productoUId": "22",
              "nombre": "CADENA DE VALOR CREDI-BRÓCOLI",
              "moneda": "Q"
            },
            {
              "productoUId": "23",
              "nombre": "VIVIENDA HIPOTECARIO",
              "moneda": "Q"
            },
            {
              "productoUId": "24",
              "nombre": "VIVIENDA HIPOTECARIO LIBRE",
              "moneda": "Q"
            }
          ]
        },
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTMicrofinanzas.ObtenerProductos",
          "Fecha": "2019-09-18",
          "Hora": "15:56:50",
          "Requerimiento": "95",
          "Numero": "161",
          "Estado": "OK"
        }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
