import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerComisiones',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerComisionesComponent {
  pageTitle = 'Obtener Comisiones';
  description = `Metodo para obtener las comisiones parametrizadas de un producto de prestamos.`;
  pubName    = 'BTModeladorPrestamos.ObtenerComisiones';
  programa   = 'RBTPG521';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }];
  outputData = [{ Nombre: 'sdtComisiones', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamo)', Comentarios: 'Listado de comisiones.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTModeladorPrestamos.ObtenerComisiones>
         <bts:Btinreq>
            <bts:Token>e85b0edaecCD285A89A23FBE</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>GP</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:productoUId>48</bts:productoUId>
      </bts:BTModeladorPrestamos.ObtenerComisiones>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTModeladorPrestamos?ObtenerComisiones' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cFC33CD93505A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"productoUId": "48"
}'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTModeladorPrestamos.ObtenerComisionesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>e85b0edaecCD285A89A23FBE</Token>
         </Btinreq>
         <sdtComisiones>
            <sBTComisionPrestamo>
               <porcentaje>0.0000</porcentaje>
               <descripcion>Comision por venta seguro</descripcion>
               <importe>0.00</importe>
               <codigo>137</codigo>
            </sBTComisionPrestamo>
            <sBTComisionPrestamo>
               <porcentaje>0.0000</porcentaje>
               <descripcion>MiAuto - Otorgamiento</descripcion>
               <importe>0.00</importe>
               <codigo>300</codigo>
            </sBTComisionPrestamo>
         </sdtComisiones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>13113</Numero>
            <Servicio>BTModeladorPrestamos.ObtenerComisiones</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-23</Fecha>
            <Hora>09:21:39</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTModeladorPrestamos.ObtenerComisionesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
    "Btinreq": {
        "Device": "1",
        "Usuario": "MINSTALADOR",
        "Token": "16c1cFC33CD93505A5382434",
        "Canal": "BTDIGITAL",
        "Requerimiento": "1"
    },
    "sdtComisiones": {
        "sBTComisionPrestamo": [
        {
            "porcentaje": "0.0000",
            "descripcion": "Comision por venta seguro",
            "importe": "0.00",
            "codigo": "137"
        },
        {
            "porcentaje": "0.0000",
            "descripcion": "MiAuto - Otorgamiento",
            "importe": "0.00",
            "codigo": "300"
        }
        ]
    },
    "Btoutreq": {
        "Numero": "111399",
        "Estado": "OK",
        "Servicio": "BTModeladorPrestamos.ObtenerComisiones",
        "Requerimiento": "1",
        "Fecha": "2023-05-10",
        "Canal": "BTDIGITAL",
        "Hora": "15:10:52"
    }
}'` }
  };

  structuredTypes = [{ typeName: 'sBTComisionPrestamo', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Codigo de comision.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion de la comision.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la comision.' }, { Nombre: 'porcentaje', Tipo: 'Double', Comentarios: 'Porcentaje de comision.' }] }];
}
