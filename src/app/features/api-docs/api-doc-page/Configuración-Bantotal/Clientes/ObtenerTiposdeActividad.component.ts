import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTiposdeActividad',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTiposdeActividadComponent1750713393540 {
  pageTitle        = 'Obtener Tipos de Actividad';
  description      = `Método para obtener un listado de los tipos de actividad ingresados en Bantotal.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerTiposDeActividad';
  programa   = 'RBTPG477';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtActividades', Tipo: '[sBTActividad](#sbtactividad)', Comentarios: 'Listado de actividades.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerTiposDeActividad>
         <bts:Btinreq>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>1EF0C356A692E3706CFA0201</bts:Token>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerTiposDeActividad>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerTiposDeActividad\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "fa2c02c95a4A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},

}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerTiposDeActividadResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1EF0C356A692E3706CFA0201</Token>
         </Btinreq>
         <sdtTipoActividad>
            <SdtsBTActividad>
               <descripcion>Actividad Principal</descripcion>
               <identificador>1</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>Prueba</descripcion>
               <identificador>2</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
         </sdtTipoActividad>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10261</Numero>
            <Servicio>BTConfiguracionBantotal.ObtenerTiposDeActividad</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-04</Fecha>
            <Hora>17:05:07</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerTiposDeActividadResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cc9b534A8B5C60A82434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtActividades": {
      "sBTActividad": [             
         { 
               "descripcion": "Actividad Principal",
               "identificador": "1",
               "identificadorEntidadReguladora": "0"
         },
         { 
               "descripcion": "Prueba",
               "identificador": "2",
               "identificadorEntidadReguladora": "0"
         },
      ] 
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "111598",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerActividadesPorTipo",
      "Requerimiento": "1",
      "Fecha": "2023-05-04",
      "Canal": "BTDIGITAL",
      "Hora": "16:20:35"
   }
}\'` }
  };

  structuredTypes = [];
}
