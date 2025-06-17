import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerInicioyFindeMes',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerInicioyFindeMesComponent {
  pageTitle = 'Obtener Inicio y Fin de Mes';
  description = `Metodo para obtener la primer y ultima fecha habil para el mes indicado.`;
  pubName    = 'BTCalendario.ObtenerInicioYFinMes';
  programa   = 'RBTPG332';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'calendarioId', Tipo: 'Short', Comentarios: 'Identificador de calendario (Si no se recibe, devuelve para el calendario de la sucursal central).' }, { Nombre: 'mesConsulta', Tipo: 'Short', Comentarios: 'Mes de consulta.' }, { Nombre: 'anioConsulta', Tipo: 'Int', Comentarios: 'Ano de consulta.' }];
  outputData = [{ Nombre: 'fechaHabilInicio', Tipo: 'Date', Comentarios: 'Primera fecha habil del mes.' }, { Nombre: 'fechaHabilFin', Tipo: 'Date', Comentarios: 'Ultima fecha habil del mes.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar mes a consultar.' }, { Codigo: '30002', Descripcion: 'Debe ingresar ano a consultar.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCalendarios.ObtenerInicioYFinMes>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>172681201999865B3A2E76CF</bts:Token>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:calendarioId>1</bts:calendarioId>
         <bts:mesConsulta>11</bts:mesConsulta>
         <bts:anioConsulta>2020</bts:anioConsulta>
      </bts:BTCalendarios.ObtenerInicioYFinMes>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCalendarios_v1?ObtenerInicioYFinMes' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
    "Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "1",
      "Usuario": "Instalador",
      "Token": "172681201999865B3A2E76CF",
      "Device": "1"
    },
	"calendarioId": "1",
    "mesConsulta": "11",
    "anioConsulta": "2020"
  },` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCalendarios.ObtenerInicioYFinMesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>Instalador</Usuario>
            <Token>172681201999865B3A2E76CF</Token>
            <Device>1</Device>
         </Btinreq>
         <fechaHabilInicio>2020-11-02</fechaHabilInicio>
         <fechaHabilFin>2020-11-30</fechaHabilFin>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCalendarios.ObtenerInicioYFinMes</Servicio>
            <Fecha>2021-03-23</Fecha>
            <Hora>17:35:57</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8086</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCalendarios.ObtenerInicioYFinMesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
    "Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "1",
      "Usuario": "Instalador",
      "Token": "172681201999865B3A2E76CF",
      "Device": "1"
    },
    "fechaHabilInicio": "2020-11-02",
    "fechaHabilFin": "2020-11-30",
    "Erroresnegocio": {
    },
    "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTCalendarios.ObtenerInicioYFinMes",
      "Fecha": "2021-03-23",
      "Hora": "17:35:57",
      "Requerimiento": "1",
      "Numero": "8086",
      "Estado": "OK"
    }
  }` }
  };

  structuredTypes = [];
}
