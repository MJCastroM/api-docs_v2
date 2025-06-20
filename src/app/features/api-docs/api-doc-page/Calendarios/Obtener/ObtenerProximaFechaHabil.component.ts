import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerProximaFechaHabil',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProximaFechaHabilComponent1750446218131 {
  pageTitle        = 'Obtener Próxima Fecha Hábil';
  description      = `Método para obtener la próxima fecha hábil a la fecha ingresada.`;
  pubName    = 'BTCalendario.ObtenerProximaFechaHabil';
  programa   = 'RBTPG331';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'calendarioId', Tipo: 'Short', Comentarios: 'Identificador de calendario.' }, { Nombre: 'fecha', Tipo: 'Date', Comentarios: 'Fecha de consulta.' }, { Nombre: 'sentido', Tipo: 'String', Comentarios: '[Hidden: Valor fijo \'A\' para este método].' }];
  outputData = [{ Nombre: 'fechaHabil', Tipo: 'Date', Comentarios: 'Próxima fecha hábil.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'Debe ingresar fecha a consultar.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCalendarios.ObtenerProximaFechaHabil>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>172681201999865B3A2E76CF</bts:Token>
            <bts:Device>1</bts:Device>
         </bts:Btinreq>
         <bts:fecha>2021-03-26</bts:fecha>
      </bts:BTCalendarios.ObtenerProximaFechaHabil>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCalendarios_v1?ObtenerProximaFechaHabil\' \
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
    "fecha": "2021-03-26"
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCalendarios.ObtenerProximaFechaHabilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>Instalador</Usuario>
            <Token>172681201999865B3A2E76CF</Token>
            <Device>1</Device>
         </Btinreq>
         <fechaHabil>2021-03-29</fechaHabil>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTCalendarios.ObtenerProximaFechaHabil</Servicio>
            <Fecha>2021-03-24</Fecha>
            <Hora>10:24:19</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8101</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCalendarios.ObtenerProximaFechaHabilResponse>
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
    "fechaHabil": "2021-03-29",
    "Erroresnegocio": {
    },
    "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTCalendarios.ObtenerProximaFechaHabil",
      "Fecha": "2021-03-24",
      "Hora": "10:24:19",
      "Requerimiento": "1",
      "Numero": "8101",
      "Estado": "OK"
    }
  },` }
  };

  structuredTypes = [];
}
