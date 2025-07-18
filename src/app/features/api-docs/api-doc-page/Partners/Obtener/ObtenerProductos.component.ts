import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerProductos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProductosComponent1751987198092 {
  pageTitle        = 'Obtener Productos';
  description      = `Método para retornar los productos de la concesionaria.`;
  pubName    = 'BTPartners.ObtenerProductos';
  programa   = 'RBTPNV06';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPartner', Tipo: '[sBTPartnerInReq](#sbtpartnerinreq)', Comentarios: 'Datos del usuario.' }, { Nombre: 'sdtVehiculo', Tipo: '[sBTVehiculo](#sbtvehiculo)', Comentarios: 'Datos del vehículo.' }, { Nombre: 'stringAux', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'S\' para este método].' }];
  outputData = [{ Nombre: 'sdtProductos', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Listado de los productos.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió Partner ni canal.' }, { Código: '30002', Descripción: 'El Partner no se encuentra habilitado.' }, { Código: '30003', Descripción: 'No existe Partner con ese identificador.' }, { Código: '30012', Descripción: 'No se recibió punto de venta.' }, { Código: '30013', Descripción: 'No se recibió vendedor.' }, { Código: '30020', Descripción: 'No se recibió identificador de la versión.' }, { Código: '30021', Descripción: 'No se recibió estado del vehículo.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPartners.ObtenerProductos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>DF1F942C6EC60E8B95BBEA69</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>2</bts:puntoVentaUId>
            <bts:vendedorUId>3</bts:vendedorUId>
            <bts:partnerUId>1</bts:partnerUId>
         </bts:sdtPartner>
         <bts:sdtVehiculo>
            <bts:monedaPrecio></bts:monedaPrecio>
            <bts:estadoId>1</bts:estadoId>
            <bts:datosAdicionales>
               <bts:SdtsBTConcepto>
                  <bts:texto></bts:texto>
                  <bts:valor></bts:valor>
                  <bts:concepto></bts:concepto>
               </bts:SdtsBTConcepto>
            </bts:datosAdicionales>
            <bts:versionUId>1</bts:versionUId>
            <bts:precio></bts:precio>
         </bts:sdtVehiculo>
      </bts:BTPartners.ObtenerProductos>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ObtenerProductos\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "3JPL6DC33CD84655A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
    "sdtPartner": {
          "puntoVentaUId": 2,
          "vendedorUId": 3,
          "partnerUId": 1
        },
        "sdtVehiculo": {
          "monedaPrecio": "",
          "estadoId": 1,
          "datosAdicionales": {
            "SdtsBTConcepto": {
              "texto": "",
              "valor": "",
              "concepto": ""
            }
          },
          "versionUId": 1,
          "precio": ""
    }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPartners.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>DF1F942C6EC60E8B95BBEA69</Token>
         </Btinreq>
         <sdtProductos>
            <sBTProducto>
               <moneda>CRC</moneda>
               <papel>$</papel>
               <otrosConceptos>
                  <SdtsBTConcepto>
                     <texto>N</texto>
                     <valor>0.00</valor>
                     <concepto>SOLICITA_BALLOON</concepto>
                  </SdtsBTConcepto>
               </otrosConceptos>
               <productoUId>200</productoUId>
               <nombre>Vehiculares</nombre>
            </sBTProducto>
            <sBTProducto>
               <moneda>CRC</moneda>
               <papel>$</papel>
               <otrosConceptos>
                  <SdtsBTConcepto>
                     <texto>N</texto>
                     <valor>0.00</valor>
                     <concepto>SOLICITA_BALLOON</concepto>
                  </SdtsBTConcepto>
               </otrosConceptos>
               <productoUId>198</productoUId>
               <nombre>Amortización Automática TF</nombre>
            </sBTProducto>
         </sdtProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16867</Numero>
            <Servicio>BTPartners.ObtenerProductos</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-27</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>13:47:58</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ObtenerProductosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtProductos": {
        "sBTProducto": [
        {
            "moneda": "CRC",
            "papel": "$",
            "otrosConceptos": {
            "SdtsBTConcepto": {
                "texto": "N",
                "valor": 0,
                "concepto": "SOLICITA_BALLOON"
            }
            },
            "productoUId": 200,
            "nombre": "Vehiculares"
        },
        {
            "moneda": "CRC",
            "papel": "$",
            "otrosConceptos": {
            "SdtsBTConcepto": {
                "texto": "N",
                "valor": 0,
                "concepto": "SOLICITA_BALLOON"
            }
            },
            "productoUId": 198,
            "nombre": "Amortización Automática TF"
        }
        ]
    },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPartners.ObtenerProductos",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "17:08:56"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPartnerInReq', fields: [{ Nombre: 'partnerUId', Tipo: 'Int', Comentarios: 'Identificador del Partner.' }, { Nombre: 'puntoVentaUId', Tipo: 'Int', Comentarios: 'Identificador del punto de venta.' }, { Nombre: 'vendedorUId', Tipo: 'Int', Comentarios: 'Identificador del vendedor.' }] }, { typeName: 'sBTVehiculo', fields: [{ Nombre: 'datosAdicionales', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Listado de datos adicionales.' }, { Nombre: 'estadoId', Tipo: 'Short', Comentarios: 'Identificador del estado.' }, { Nombre: 'monedaPrecio', Tipo: 'Short', Comentarios: 'Precio de la moneda.' }, { Nombre: 'precio', Tipo: 'Double', Comentarios: 'Precio.' }, { Nombre: 'versionUId', Tipo: 'Long', Comentarios: 'Identificador de la versión.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconceptosalida)', Comentarios: 'Listado de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador del producto.' }] }, { typeName: 'sBTConceptoSalida', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
