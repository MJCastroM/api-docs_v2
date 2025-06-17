import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerPosicion',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPosicionComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Posicion';
  description = `Metodo para obtener las posiciones de los titulos de un cliente.`;
  pubName    = 'BTClientes.ObtenerPosicion';
  programa   = 'RBTPG557';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId', 'monedaId', 'fecha'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico del cliente.' }, { Nombre: 'monedaId', Tipo: 'Short', Comentarios: 'Identificador de la moneda.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha.' }];
  outputCols = ['totalGeneral', 'totalDisponible', 'numeradorConsulta', 'sdtClasesActivos'];
  outputData = [{ Nombre: 'totalGeneral', Tipo: 'Double', Comentarios: 'Total general.' }, { Nombre: 'totalDisponible', Tipo: 'Double', Comentarios: 'Total disponible.' }, { Nombre: 'numeradorConsulta', Tipo: 'Int', Comentarios: 'Numerador de la consulta.' }, { Nombre: 'sdtClasesActivos', Tipo: '[sBTClaseActivo](#sbtclaseactivo)', Comentarios: 'Datos de las clases de activos.' }];
  errorCols  = ['30001', '30002', '30013', '40001', '40002', '40003', '40004', '40005'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'Debe ingresar la fecha.' }, { Codigo: '30013', Descripcion: 'No existe registro con la cuenta indicada.' }, { Codigo: '40001', Descripcion: 'El Portafolio A no esta definido.' }, { Codigo: '40002', Descripcion: 'El Portafolio A no esta habilitado.' }, { Codigo: '40003', Descripcion: 'Error: Cuenta inexistente.' }, { Codigo: '40004', Descripcion: 'En la generacion de la informacion se han encontrado inconsistencias subsanadas automaticamente. Favor de contactar a soporte indicando cuenta y numeros de sesion.' }, { Codigo: '40005', Descripcion: 'Error: No tiene autorizacion para consultar la cuenta ingresada.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerPosicion>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>D567A28912FF8C29016DD5EC</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>341</bts:clienteUId>
         <bts:monedaId>2222</bts:monedaId>
         <bts:fecha>2020-08-06</bts:fecha>
      </bts:BTClientes.ObtenerPosicion>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerPosicion=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "clienteUId": 341,
    "monedaId": 2222,
    "fecha": "2020-08-06"
  }'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerPosicionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>BANTOTAL</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>E362E52FED059AA3BF86A6E3</Token>
         </Btinreq>
         <totalGeneral>950333.58</totalGeneral>
         <totalDisponible>950333.58</totalDisponible>
         <numeradorConsulta>12928</numeradorConsulta>
         <sdtClasesActivos>
            <sBTClaseActivo>
               <porcentajeComposicion>55.50</porcentajeComposicion>
               <identificador>10</identificador>
               <total>527406.43</total>
               <nombre>Depósitos y Mandatos</nombre>
            </sBTClaseActivo>
            <sBTClaseActivo>
               <porcentajeComposicion>23.24</porcentajeComposicion>
               <identificador>11</identificador>
               <total>220867.00</total>
               <nombre>Monetario y Renta Fija</nombre>
            </sBTClaseActivo>
            <sBTClaseActivo>
               <porcentajeComposicion>21.26</porcentajeComposicion>
               <identificador>12</identificador>
               <total>202060.15</total>
               <nombre>Renta Variable</nombre>
            </sBTClaseActivo>
         </sdtClasesActivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-08</Fecha>
            <Hora>12:27:14</Hora>
            <Numero>742</Numero>
            <Servicio>BTClientes.ObtenerPosicion</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerPosicionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "totalGeneral": 950333.58,
    "totalDisponible": 950333.58,
    "numeradorConsulta": 12928,
    "sdtClasesActivos": {
         "sBTClaseActivo": [
         {
            "porcentajeComposicion": 55.5,
            "identificador": 10,
            "total": 527406.43,
            "nombre": "Depósitos y Mandatos"
         },
         {
            "porcentajeComposicion": 23.24,
            "identificador": 11,
            "total": 220867,
            "nombre": "Monetario y Renta Fija"
         },
         {
            "porcentajeComposicion": 21.26,
            "identificador": 12,
            "total": 202060.15,
            "nombre": "Renta Variable"
         }
         ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTClientes.ObtenerPosicion",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'identificador', Tipo: 'Long', Comentarios: 'Identificador de la clase de activo.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de la clase de activo.' }, { Nombre: 'porcentajeComposicion', Tipo: 'Double', Comentarios: 'Porcentaje de composicion de la clase de activo.' }, { Nombre: 'total', Tipo: 'Double', Comentarios: 'Total de la clase de activo.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
