import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerLimites',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerLimitesComponent1750258524798 {
  pageTitle        = 'Obtener Límites';
  description      = `Método para obtener los límites de una cuenta cliente.`;
  pubName          = 'Obtener Límites';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [{ Nombre: 'sdtLimites', Tipo: '[sBTLimiteCliente](#sbtlimitecliente)', Comentarios: 'Listado de límites.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se encontró un cliente para el identificador recibido.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerLimites>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>d77f406def4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>61</bts:clienteUId>
      </bts:BTClientes.ObtenerLimites>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerLimites\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"Btinreq": {
		"Canal": "BTDIGITAL",
		"Requerimiento": "1",
		"Usuario": "MINSTALADOR",
		"Token": "d77f406def4A8B5C60A82434",
		"Device": "AC"
	 },
	 "clienteUId": "61"
}` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerLimitesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>d77f406def4A8B5C60A82434</Token>
         </Btinreq>
         <sdtLimites>
            <sBTLimiteCliente>
               <descripcion>Línea_Créditos Hipotecarios / $</descripcion>
               <limiteDisponible>2116165.69</limiteDisponible>
               <limiteOtorgado>2500000.00</limiteOtorgado>
               <limteUtilizado>383834.30999999994</limteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <descripcion>Línea_Créditos Comercial PF / $</descripcion>
               <limiteDisponible>2500000.00</limiteDisponible>
               <limiteOtorgado>2500000.00</limiteOtorgado>
               <limteUtilizado>0.00</limteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <descripcion>Línea_Créditos Comercial LP / $</descripcion>
               <limiteDisponible>2500000.00</limiteDisponible>
               <limiteOtorgado>2500000.00</limiteOtorgado>
               <limteUtilizado>0.00</limteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <descripcion>Línea_Firmantes no calificados / $</descripcion>
               <limiteDisponible>500000.00</limiteDisponible>
               <limiteOtorgado>500000.00</limiteOtorgado>
               <limteUtilizado>0.00</limteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <descripcion>Línea_Firmantes AAA / $</descripcion>
               <limiteDisponible>500000.00</limiteDisponible>
               <limiteOtorgado>500000.00</limiteOtorgado>
               <limteUtilizado>0.00</limteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <descripcion>Línea_Firmantes Estado / $</descripcion>
               <limiteDisponible>500000.00</limiteDisponible>
               <limiteOtorgado>500000.00</limiteOtorgado>
               <limteUtilizado>0.00</limteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <descripcion>Total / MN</descripcion>
               <limiteDisponible>3000000.00</limiteDisponible>
               <limiteOtorgado>3000000.00</limiteOtorgado>
               <limteUtilizado>0.00</limteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <descripcion>Total / ME</descripcion>
               <limiteDisponible>0.00</limiteDisponible>
               <limiteOtorgado>0.00</limiteOtorgado>
               <limteUtilizado>0.00</limteUtilizado>
            </sBTLimiteCliente>
         </sdtLimites>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10329</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerLimites</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-11-09</Fecha>
            <Hora>18:15:06</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerLimitesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
	"Btinreq": {
		"Canal": "BTDIGITAL",
		"Requerimiento": "1",
		"Usuario": "MINSTALADOR",
		"Token": "d77f406def4A8B5C60A82434",
		"Device": "AC"
	 },
	"sdtLimites": {
	  "sBTLimiteCliente": [
		{
		  "descripcion": "Línea_Créditos Hipotecarios / $",
		  "limiteDisponible": "2116165.69",
		  "limiteOtorgado": "2500000.00",
		  "limteUtilizado": "383834.30999999994"
		},
		{
		  "descripcion": "Línea_Créditos Comercial PF / $",
		  "limiteDisponible": "2500000.00",
		  "limiteOtorgado": "2500000.00",
		  "limteUtilizado": "0.00"
		},
		{
		  "descripcion": "Línea_Créditos Comercial LP / $",
		  "limiteDisponible": "2500000.00",
		  "limiteOtorgado": "2500000.00",
		  "limteUtilizado": "0.00"
		},
		{
		  "descripcion": "Línea_Firmantes no calificados / $",
		  "limiteDisponible": "500000.00",
		  "limiteOtorgado": "500000.00",
		  "limteUtilizado": "0.00"
		},
		{
		  "descripcion": "Línea_Firmantes AAA / $",
		  "limiteDisponible": "500000.00",
		  "limiteOtorgado": "500000.00",
		  "limteUtilizado": "0.00"
		},
		{
		  "descripcion": "Línea_Firmantes Estado / $",
		  "limiteDisponible": "500000.00",
		  "limiteOtorgado": "500000.00",
		  "limteUtilizado": "0.00"
		},
		{
		  "descripcion": "Total / MN",
		  "limiteDisponible": "3000000.00",
		  "limiteOtorgado": "3000000.00",
		  "limteUtilizado": "0.00"
		},
		{
		  "descripcion": "Total / ME",
		  "limiteDisponible": "0.00",
		  "limiteOtorgado": "0.00",
		  "limteUtilizado": "0.00"
		}
	  ]
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
	"Btoutreq": {
	  "Numero": "10329",
	  "Estado": "OK",
	  "Servicio": "BTClientes.ObtenerLimites",
	  "Requerimiento": "1",
	  "Fecha": "2020-11-09",
	  "Hora": "18:15:06",
	  "Canal": "BTDIGITAL"
	}
 }` }
  };

  structuredTypes = [{ typeName: 'sBTLimiteCliente', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'limiteDisponible', Tipo: 'Double', Comentarios: 'Límite disponible para el cliente.' }, { Nombre: 'limiteOtorgado', Tipo: 'Double', Comentarios: 'Límite otorgado al cliente.' }, { Nombre: 'limteUtilizado', Tipo: 'Double', Comentarios: 'Límite utilizado por el cliente.' }] }];
}
