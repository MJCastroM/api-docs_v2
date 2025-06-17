import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalleSucursal',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalledeSucursalComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Detalle de Sucursal';
  description = `Metodo para obtener el detalle de una sucursal.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerDetalleSucursal';
  programa   = 'RBTPG558';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['sucursalId'];
  inputData  = [{ Nombre: 'sucursalId', Tipo: 'Int', Comentarios: 'Identificador de la sucursal.' }];
  outputCols = ['sdtDetalleSucursal'];
  outputData = [{ Nombre: 'sdtDetalleSucursal', Tipo: '[sBTDetalleSucursal](#sbtdetallesucursal)', Comentarios: 'Detalle de la sucursal.' }];
  errorCols  = ['30001', '41001'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador de sucursal.' }, { Codigo: '41001', Descripcion: 'La Sucursal no existe.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerDetalleSucursal>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>9060352790A5422FE377DB47</bts:Token>
         </bts:Btinreq>
         <bts:sucursalId>1</bts:sucursalId>
      </bts:BTConfiguracionBantotal.ObtenerDetalleSucursal>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerDetalleSucursal=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
      "Btinreq": {
            "Requerimiento": "1",
            "Device": "GZ",
            "Canal": "BTDIGITAL",
            "Usuario": "MINSTALADOR",
            "Token": "6fc29caa9d4A8B5C60A82434"
      },
      "sucursalId": 1,
  }'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerDetalleSucursalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>GZ</Device>
            <Requerimiento>0</Requerimiento>
            <Token>9060352790A5422FE377DB47</Token>
         </Btinreq>
         <sdtDetalleSucursal>
            <oficinaPrincipal>Sucursal Ciudad de la Costa</oficinaPrincipal>
            <nombre>Casa Matriz</nombre>
            <oficinaPrincipalId>1000</oficinaPrincipalId>
            <departamento/>
            <barrio/>
            <codigo>1</codigo>
            <categoria/>
            <calendarioId>1</calendarioId>
            <ciudad/>
            <nroPuerta>2141</nroPuerta>
            <estadoId>1</estadoId>
            <telefono>15554454</telefono>
            <email/>
            <codigoPostal>55000</codigoPostal>
            <ciudadId>1022</ciudadId>
            <barrioId>0</barrioId>
            <categoriaId>0</categoriaId>
            <calle>Pedro Cosio</calle>
            <estado/>
            <departamentoId>1</departamentoId>
         </sdtDetalleSucursal>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-10-11</Fecha>
            <Hora>15:16:27</Hora>
            <Numero>24977</Numero>
            <Servicio>BTConfiguracionBantotal.ObtenerDetalleSucursal</Servicio>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerDetalleSucursalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "sdtDetalleSucursal": {
         "oficinaPrincipal": "Sucursal Ciudad de la Costa",
         "nombre": "Casa Matriz",
         "oficinaPrincipalId": 1000,
         "departamento": "",
         "barrio": "",
         "codigo": 1,
         "categoria": "",
         "calendarioId": 1,
         "ciudad": "",
         "nroPuerta": 2141,
         "estadoId": 1,
         "telefono": 15554454,
         "email": "",
         "codigoPostal": 55000,
         "ciudadId": 1022,
         "barrioId": 0,
         "categoriaId": 0,
         "calle": "Pedro Cosio",
         "estado": "",
         "departamentoId": 1
      },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerDetalleSucursal",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'barrio', Tipo: 'String', Comentarios: 'Barrio.' }, { Nombre: 'barrioId', Tipo: 'Int', Comentarios: 'Identificador del barrio.' }, { Nombre: 'calendarioId', Tipo: 'Short', Comentarios: 'Identificador de calendario.' }, { Nombre: 'calle', Tipo: 'String', Comentarios: 'Calle.' }, { Nombre: 'categoria', Tipo: 'String', Comentarios: 'Categoria.' }, { Nombre: 'categoriaId', Tipo: 'Int', Comentarios: 'Identificador de la categoria.' }, { Nombre: 'ciudad', Tipo: 'String', Comentarios: 'Ciudad.' }, { Nombre: 'ciudadId', Tipo: 'Int', Comentarios: 'Identificador de la ciudad.' }, { Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Codigo.' }, { Nombre: 'codigoPostal', Tipo: 'String', Comentarios: 'Codigo postal.' }, { Nombre: 'departamento', Tipo: 'String', Comentarios: 'Departamento.' }, { Nombre: 'departamentoId', Tipo: 'Int', Comentarios: 'Identificador del departamento.' }, { Nombre: 'email', Tipo: 'String', Comentarios: 'Email.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado.' }, { Nombre: 'estadoId', Tipo: 'Short', Comentarios: 'Identificador del estado.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'nroPuerta', Tipo: 'Int', Comentarios: 'Numero de puerta.' }, { Nombre: 'oficinaPrincipal', Tipo: 'String', Comentarios: 'Oficina principal.' }, { Nombre: 'oficinaPrincipalId', Tipo: 'Int', Comentarios: 'Identificador de la oficina principal.' }, { Nombre: 'telefono', Tipo: 'String', Comentarios: 'Telefono de la sucursal.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
