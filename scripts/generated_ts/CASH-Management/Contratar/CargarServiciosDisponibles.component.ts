import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-CargarServiciosDisponibles',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CargarServiciosDisponiblesComponent {
  // Cabecera e info-card
  pageTitle = 'Cargar Servicios Disponibles';
  description = `Metodo para obtener los servicios disponibles para el cliente.`;
  pubName    = 'BTCASHManagement.CargarServiciosDisponibles';
  programa   = 'RBTPGC07';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico de cliente.' }];
  outputCols = ['sdtServicios'];
  outputData = [{ Nombre: 'sdtServicios', Tipo: '[sBTConvServicioCASH](#sbtconvserviciocash)', Comentarios: 'Lista de servicios del contrato.' }];
  errorCols  = ['1030705', '1030709'];
  errors     = [{ Codigo: '1030705', Descripcion: 'Cuenta cliente sin contrato vinculado.' }, { Codigo: '1030709', Descripcion: 'Se requiere identificacion de cuenta cliente.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCASHManagement.CargarServiciosDisponibles>
        <bts:Btinreq>
            <bts:Device>001</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
      </bts:BTCASHManagement.CargarServiciosDisponibles>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \

  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?CargarServiciosDisponibles=' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: bf6451e8-330a-48c4-a537-af3b936653dd,c3f7702b-a97d-46c4-972f-b9b37d2a8027' \

  -d '{
       "Btinreq": {
			"Device": "001",
			"Usuario": "MINSTALADOR",
			"Requerimiento": "1",
			"Canal": "BTDIGITAL",
            "Token": "1e39d33c824A8B5C60A82434"
        },
        "clienteUId": "1"
    }'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.CargarServiciosDisponiblesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>001</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1e39d33c824A8B5C60A82434</Token>
         </Btinreq>
         <sdtServicios>
            <sBTConvServicioCASH>
               <descServicio>Pagos por Planilla</descServicio>
               <tipoServicio>P</tipoServicio>
               <servicio>1</servicio>
               <idContrato>1</idContrato>
            </sBTConvServicioCASH>
         </sdtServicios>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>7161</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCASHManagement.CargarServiciosDisponibles</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2019-04-23</Fecha>
            <Hora>18:32:37</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.CargarServiciosDisponiblesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"sdtServicios": {                   
        "sBTConvServicioCASH": [ 
			{ 
				"descServicio": "Pagos por Planilla",  
				"tipoServicio": "P",  
				"servicio": 1,  
				"idContrato": 1 
			} 
		] 
	},
	"Erroresnegocio": { 
		"BTErrorNegocio": []    
    },

	"Btoutreq": {

	  "Numero": 7168,
	  "Estado": "OK",
	  "Servicio": "BTCASHManagement.CargarServiciosDisponibles",
	  "Requerimiento": "1",
	  "Fecha": "2019-04-24",
	  "Hora": "12:43:25",
	  "Canal": "BTDIGITAL"
	 }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'contratoId', Tipo: 'Long', Comentarios: 'Identificador del contrato CASH.' }, { Nombre: 'descripcionServicio', Tipo: 'String', Comentarios: 'Descripcion de servicios.' }, { Nombre: 'servicio', Tipo: 'Short', Comentarios: 'Servicio CASH.' }, { Nombre: 'tipoServicio', Tipo: 'String', Comentarios: 'Tipo de servicio.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
