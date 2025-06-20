import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerFechaHabilAnteriordeSucursal',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerFechaHabilAnteriordeSucursalComponent1750446218127 {
  pageTitle        = 'Obtener Fecha Hábil Anterior de Sucursal';
  description      = `Método para obtener la fecha hábil anterior a la fecha ingresada, para la sucursal recibida por parámetro.`;
  pubName    = 'BTCalendario.ObtenerFechaHabilAnteriorSucursal';
  programa   = 'RBTPG333';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de consulta.' }, { Nombre: 'sucursalId', Tipo: 'Int', Comentarios: 'Identificador de sucursal.' }, { Nombre: 'sentido', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'D\' para este método].' }];
  outputData = [{ Nombre: 'fechaHabil', Tipo: 'Date', Comentarios: 'Fecha hábil anterior.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar fecha a consultar.' }, { Codigo: '30002', Descripcion: 'Debe ingresar identificador de sucursal.' }, { Codigo: '40001', Descripcion: 'La Sucursal no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCalendarios.ObtenerFechaHabilAnteriorSucursal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>172681201999865B3A2E76CF</bts:Token>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:fecha>2021-03-26</bts:fecha>          
         <bts:sucursalId>1000</bts:sucursalId>
      </bts:BTCalendarios.ObtenerFechaHabilAnteriorSucursal>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCalendarios_v1?ObtenerFechaHabilAnteriorSucursal\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
    "Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "1",
      "Usuario": "Instalador",
      "Token": "172681201999865B3A2E76CF",
      "Device": "1"
    },
    "fecha": "2021-03-26",
    "sucursalId": "1000"
  },` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCalendarios.ObtenerFechaHabilAnteriorSucursalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>Instalador</Usuario>
            <Token>172681201999865B3A2E76CF</Token>
            <Device>1</Device>
         </Btinreq>
         <fechaHabil>2021-03-25</fechaHabil>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCalendarios.ObtenerFechaHabilAnteriorSucursal</Servicio>
            <Fecha>2021-03-24</Fecha>
            <Hora>10:23:46</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8099</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCalendarios.ObtenerFechaHabilAnteriorSucursalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
    "Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "1",
      "Usuario": "Instalador",
      "Token": "172681201999865B3A2E76CF",
      "Device": "1"
    },
    "fechaHabil": "2021-03-25",
    "Erroresnegocio": {
    },
    "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTCalendarios.ObtenerFechaHabilAnteriorSucursal",
      "Fecha": "2021-03-24",
      "Hora": "10:23:46",
      "Requerimiento": "1",
      "Numero": "8099",
      "Estado": "OK"
    }
  }` }
  };

  structuredTypes = [];
}
