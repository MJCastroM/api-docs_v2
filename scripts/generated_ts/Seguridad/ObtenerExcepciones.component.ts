import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerExcepciones',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerExcepcionesComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Excepciones';
  description = `Metodo para obtener un listado de las excepciones por usuario.`;
  pubName    = 'BTSeguridad.ObtenerExcepciones';
  programa   = 'RBTPG086';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['usuario'];
  inputData  = [{ Nombre: 'usuario', Tipo: 'String', Comentarios: 'Usuario.' }];
  outputCols = ['excepciones'];
  outputData = [{ Nombre: 'excepciones', Tipo: '[sBTExcepcion](#sbtexcepcion)', Comentarios: 'Listado de excepciones.' }];
  errorCols  = ['30001'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el usuario.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSeguridad.ObtenerExcepciones>
         <bts:Btinreq>
            <bts:Device>ES</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>dac8c7fdec4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:usuario>BANTOTAL</bts:usuario>
      </bts:BTSeguridad.ObtenerExcepciones>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSeguridad?ObtenerExcepciones=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: e024d37c-0177-05ca-8f99-25dbfae4abbb' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "usuario": "BANTOTAL"
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <SOAP-ENV:Body>
      <BTSeguridad.ObtenerExcepcionesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>ES</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>dac8c7fdec4A8B5C60A82434</Token>
         </Btinreq>
         <excepciones>
            <sBTExcepcion>
               <identificador>1853</identificador>
               <descripcion>Autorización T.Cbio./Arbitraje</descripcion>
               <usuario>INSTALADOR</usuario>
               <nombreUsuario>INSTALADOR</nombreUsuario>
               <movimientoUId>0</movimientoUId>
               <descripcionMovimiento>Compra USD Caja</descripcionMovimiento>
               <nombreSucursal>Casa Matriz</nombreSucursal>
               <ligada>N</ligada>
            </sBTExcepcion>
         </excepciones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>891</Numero>
            <Estado>OK</Estado>
            <Servicio>BTSeguridad.ObtenerExcepciones</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2017-12-20</Fecha>
            <Hora>16:40:06</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTSeguridad.ObtenerExcepcionesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "excepciones": {
      "sBTExcepcion": [
         {
         "nombreUsuario": "INSTALADOR",
         "descripcion": "Autorización T.Cbio./Arbitraje",
         "identificador": "1854",
         "usuario": "INSTALADOR",
         "ligada": "N",
         "movimientoUId": "0",
         "nombreSucursal": "Casa Matriz",
         "descripcionMovimiento": "Compra USD Caja"
         }
      ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "956",
        "Estado": "OK",
        "Servicio": "BTSeguridad.ObtenerExcepciones",
        "Fecha": "2017-12-22",
        "Requerimiento": "",
        "Hora": "10:54:51",
        "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
