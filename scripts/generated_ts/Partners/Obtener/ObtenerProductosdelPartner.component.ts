import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerProductosdelPartner',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProductosdelPartnerComponent1750945333792 {
  pageTitle        = 'Obtener Productos del Partner';
  description      = `Método para obtener los productos habilitados del Partner.`;
  pubName    = 'BTPartners.ObtenerProductosPartner';
  programa   = 'RBTPN009';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtPartner', Tipo: '[sBTPartnerInReq](#sbtpartnerinreq)', Comentarios: 'Datos del usuario.' }];
  outputData = [{ Nombre: 'sdtProductos', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Listado de los productos.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió Partner ni canal.' }, { Codigo: '30002', Descripcion: 'El Partner no se encuentra habilitado.' }, { Codigo: '30003', Descripcion: 'No existe Partner con ese identificador.' }, { Codigo: '30012', Descripcion: 'No se recibió punto de venta.' }, { Codigo: '30013', Descripcion: 'No se recibió vendedor.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPartners.ObtenerProductosPartner>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>1222A10B1A106FB813BD7AE9</bts:Token>
         </bts:Btinreq>
         <bts:sdtPartner>
            <bts:puntoVentaUId>3</bts:puntoVentaUId>
            <bts:vendedorUId>56</bts:vendedorUId>
            <bts:partnerUId>23</bts:partnerUId>
         </bts:sdtPartner>
      </bts:BTPartners.ObtenerProductosPartner>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPartners?ObtenerProductosPartner\' \
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
      "puntoVentaUId": 3,
      "vendedorUId": 56,
      "partnerUId": 23
   },
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPartners.ObtenerProductosPartnerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <Numero>770</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPartners.ObtenerProductosPartner</Servicio>
            <Fecha>2017-12-14</Fecha>
            <Requerimiento/>
            <Hora>18:17:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPartners.ObtenerProductosPartnerResponse>
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
      "Servicio": "BTPartners.ObtenerProductosPartner",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "17:08:56"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPartnerInReq', fields: [{ Nombre: 'partnerUId', Tipo: 'Int', Comentarios: 'Identificador del Partner.' }, { Nombre: 'puntoVentaUId', Tipo: 'Int', Comentarios: 'Identificador del punto de venta.' }, { Nombre: 'vendedorUId', Tipo: 'Int', Comentarios: 'Identificador del vendedor.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Listado de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo de papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
