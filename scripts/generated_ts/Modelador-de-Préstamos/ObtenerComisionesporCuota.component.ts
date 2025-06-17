import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerComisionesporCuota',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerComisionesporCuotaComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Comisiones por Cuota';
  description = `Metodo para obtener las comisiones parametrizadas por cuota para un producto de prestamos.`;
  pubName    = 'BTModeladorPrestamos.ObtenerComisionesCuota';
  programa   = 'RBTPG522';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['productoUId'];
  inputData  = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto' }];
  outputCols = ['sdtComisionesCuota'];
  outputData = [{ Nombre: 'sdtComisionesCuota', Tipo: '[sBTComisionPrestamo](#sbtcomisionprestamo)', Comentarios: 'Listado de comisiones' }];
  errorCols  = [];
  errors     = [];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTModeladorPrestamos.ObtenerComisionesCuota>
         <bts:Btinreq>
            <bts:Token>e85b0edaecCD285A89A23FBE</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>GP</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:productoUId>51</bts:productoUId>
      </bts:BTModeladorPrestamos.ObtenerComisionesCuota>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTModeladorPrestamos?ObtenerComisionesCuota' \
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
	"productoUId": "51"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTModeladorPrestamos.ObtenerComisionesCuotaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>e85b0edaecCD285A89A23FBE</Token>
         </Btinreq>
         <sdtComisionesCuota>
            <sBTComisionPrestamo>
               <porcentaje>0.0000</porcentaje>
               <descripcion>Portes</descripcion>
               <importe>0.00</importe>
               <codigo>251</codigo>
            </sBTComisionPrestamo>
         </sdtComisionesCuota>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>13117</Numero>
            <Servicio>BTModeladorPrestamos.ObtenerComisionesCuota</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-23</Fecha>
            <Hora>10:15:42</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTModeladorPrestamos.ObtenerComisionesCuotaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `{ 
    "Btinreq": { 
        "Device": "1", 
        "Usuario": "MINSTALADOR", 
        "Token": "16c1cFC33CD93505A5382434", 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "1" 
    }, 
    "sdtComisionesCuota": { 
        "sBTComisionPrestamo": { 
        "porcentaje": "0.0000", 
        "descripcion": "Portes", 
        "importe": "0.00", 
        "codigo": "251" 
        } 
    }, 
    "Btoutreq": { 
        "Numero": "111399", 
        "Estado": "OK", 
        "Servicio": "BTModeladorPrestamos.ObtenerComisionesCuota", 
        "Requerimiento": "1", 
        "Fecha": "2023-05-10", 
        "Canal": "BTDIGITAL", 
        "Hora": "15:10:52" 
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Codigo de comision.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion de la comision.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe de la comision.' }, { Nombre: 'porcentaje', Tipo: 'Double', Comentarios: 'Porcentaje de comision.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
