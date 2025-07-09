import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPeriodosHabilitados',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPeriodosHabilitadosComponent1751987195390 {
  pageTitle        = 'Obtener Períodos Habilitados';
  description      = `Método para obtener un listado de períodos habilitados para los casos que el alta de ahorro programado se realice mediante selección de período como lista de valores.`;
  pubName    = 'BTAhorroProgramado.ObtenerPeriodosHabilitados';
  programa   = 'RBTPG419';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }];
  outputData = [{ Nombre: 'sdtPeriodos', Tipo: '[sBTPlazo](#sbtplazo)', Comentarios: 'Listado de períodos habilitados.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador del producto.' }, { Código: '30002', Descripción: 'No se recuperó el producto de ahorro para el identificador: [Número de identificador].' }, { Código: '40001', Descripción: 'Error de configuración: No se definió listado de períodos.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTAhorroProgramado.ObtenerPeriodosHabilitados>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:productoUId>41</bts:productoUId>
      </bts:BTAhorroProgramado.ObtenerPeriodosHabilitados>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerPeriodosHabilitados\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
		"productoUId": 41
	}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTAhorroProgramado.ObtenerPeriodosHabilitadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f2f7be2ebc4A8B5C60A82434</Token>
         </Btinreq>
         <sdtPeriodos>
            <sdtPeriodo>
               <Tipo>M</Tipo>
               <Descripcion>1 - Meses</Descripcion>
               <Valor>1</Valor>
            </sdtPeriodo>
            <sdtPeriodo>
               <Tipo>M</Tipo>
               <Descripcion>2 - Meses</Descripcion>
               <Valor>2</Valor>
            </sdtPeriodo>
            <sdtPeriodo>
               <Tipo>M</Tipo>
               <Descripcion>3 - Meses</Descripcion>
               <Valor>3</Valor>
            </sdtPeriodo>
         </sdtPeriodos>
         <Erroresnegocio></Erroresnegocio>
		 <Btoutreq>
            <Numero>370</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.ObtenerPeriodosHabilitados</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-04-30</Fecha>
            <Hora>11:21:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.ObtenerPeriodosHabilitadosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtPeriodos": {
        "sBTPeriodo": [
            {
                "Tipo": "M",
                "Descripcion": "1 - Meses",
                "Valor": "1"
            },
            {
                "Tipo": "M",
                "Descripcion": "2 - Meses",
                "Valor": "2"
            },
            {
                "Tipo": "M",
                "Descripcion": "3 - Meses",
                "Valor": "3"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "401",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.ObtenerPeriodosHabilitados",
        "Fecha": "2018-05-03",
        "Requerimiento": "1",
        "Hora": "11:10:49",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTPlazo', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción extendida del período.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de período (Diario: \'D\', Mensual: \'M\', Anual: \'A\').' }, { Nombre: 'valor', Tipo: 'Int', Comentarios: 'Período.' }] }];
}
