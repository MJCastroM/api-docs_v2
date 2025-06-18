import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerPeriodosHabilitados',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPeriodosHabilitadosComponent1750258525099 {
  pageTitle        = 'Obtener Períodos Habilitados';
  description      = `Método para obtener los períodos habilitados de un deposito a plazo.`;
  pubName          = 'Obtener Períodos Habilitados';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único del producto.' }];
  outputData = [{ Nombre: 'sdtDatosExtendidos', Tipo: '[sBTDatoExtendido](#sbtdatoextendido)', Comentarios: 'Listado de datos complementarios.' }, { Nombre: 'sdtPeriodos', Tipo: '[sBTPeriodoHabilitado](#sbtperiodohabilitado)', Comentarios: 'Listado de períodos habilitados.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador del Producto.' }, { Codigo: '30006', Descripcion: 'No existe registro para el identificador único.' }, { Codigo: '40001', Descripcion: 'El producto no corresponde a un producto de depósito a plazo.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.ObtenerPeriodosHabilitados>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>45A5647518BC5FBB73003EA9</bts:Token>
         </bts:Btinreq>
         <bts:productoUId>184</bts:productoUId>
      </bts:BTDepositosAPlazo.ObtenerPeriodosHabilitados>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerPeriodosHabilitados=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
		"Device": "GZ",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "productoUId": 184
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ObtenerPeriodosHabilitadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>45A5647518BC5FBB73003EA9</Token>
         </Btinreq>
         <sdtDatosExtendidos></sdtDatosExtendidos>
         <sdtPeriodos>
            <sBTPeriodoHabilitado>
               <descripcion>Semanal</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>7</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Quincenal</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>14</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Mensual</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>30</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Bimestral</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>60</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Trimestral</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>90</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Cuatrimestral</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>120</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Quintumestral</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>150</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Semestral</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>180</periodo>
            </sBTPeriodoHabilitado>
            <sBTPeriodoHabilitado>
               <descripcion>Anual</descripcion>
               <datosExtendidos></datosExtendidos>
               <periodo>360</periodo>
            </sBTPeriodoHabilitado>
         </sdtPeriodos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16830</Numero>
            <Servicio>BTDepositosAPlazo.ObtenerPeriodosHabilitados</Servicio>
            <Estado>OK</Estado>
            <Fecha>2023-10-25</Fecha>
            <Requerimiento>0</Requerimiento>
            <Hora>18:12:09</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerPeriodosHabilitadosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "GZ",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtDatosExtendidos": "",
    "sdtPeriodos": {
        "sBTPeriodoHabilitado": [
        {
            "descripcion": "Semanal",
            "datosExtendidos": "",
            "periodo": 7
        },
        {
            "descripcion": "Quincenal",
            "datosExtendidos": "",
            "periodo": 14
        },
        {
            "descripcion": "Mensual",
            "datosExtendidos": "",
            "periodo": 30
        },
        {
            "descripcion": "Bimestral",
            "datosExtendidos": "",
            "periodo": 60
        },
        {
            "descripcion": "Trimestral",
            "datosExtendidos": "",
            "periodo": 90
        },
        {
            "descripcion": "Cuatrimestral",
            "datosExtendidos": "",
            "periodo": 120
        },
        {
            "descripcion": "Quintumestral",
            "datosExtendidos": "",
            "periodo": 150
        },
        {
            "descripcion": "Semestral",
            "datosExtendidos": "",
            "periodo": 180
        },
        {
            "descripcion": "Anual",
            "datosExtendidos": "",
            "periodo": 360
        }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "145",
        "Estado": "OK",
        "Servicio": "BTDepositosAPlazo.ObtenerPeriodosHabilitados",
        "Fecha": "2023-03-01",
        "Requerimiento": "1",
        "Hora": "12:04:07",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatoExtendido', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Clave del dato extendido.' }, { Nombre: 'lista', Tipo: '[sBTDatosLista](#sbtdatolista)', Comentarios: 'Lista de datos.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de dato extendido.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de dato extendido.' }, { Nombre: '### sBTDatoLista', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTDatoLista', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de información adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de información adicional.' }] }, { typeName: 'sBTPeriodoHabilitado', fields: [{ Nombre: 'datosExtendidos', Tipo: '[sBTDatoExtendido](#sbtdatoextendidosalida)', Comentarios: 'Listado de datos complementarios.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'periodo', Tipo: 'Int', Comentarios: 'Período.' }, { Nombre: '### sBTDatoExtendidoSalida', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTDatoExtendidoSalida', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Clave del dato extendido.' }, { Nombre: 'lista', Tipo: '[sBTDatosLista](#sbtdatolistasalida)', Comentarios: 'Lista de datos.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de dato extendido.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de dato extendido.' }, { Nombre: '### sBTDatoListaSalida', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTDatoListaSalida', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de información adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de información adicional.' }] }];
}
