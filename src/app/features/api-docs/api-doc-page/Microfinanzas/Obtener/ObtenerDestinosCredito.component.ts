import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDestinosCredito',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDestinosCreditoComponent1751987197811 {
  pageTitle        = 'Obtener Destinos Crédito';
  description      = `Método para obtener los destinos posibles para un crédito.`;
  pubName    = 'BTMicrofinanzas.ObtenerDestinosCredito';
  programa   = 'RBTPG415';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'solicitudUId', Tipo: 'Long', Comentarios: 'Identificador único de solicitud.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }];
  outputData = [{ Nombre: 'sdtDestinosCredito', Tipo: '[sBTDestinoCredito](#sbtdestinocredito)', Comentarios: 'Listado de destinos de crédito.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTMicrofinanzas.ObtenerDestinosCredito>
         <bts:Btinreq>
            <bts:Canal>BTINTERNO</bts:Canal>
            <bts:Requerimiento>95</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>419385365CD285A89A23FBEE</bts:Token>
            <bts:Device>GP</bts:Device>
         </bts:Btinreq>
         <bts:solicitudUId>10896</bts:solicitudUId>
		 <bts:productoUId>23</bts:productoUId>
      </bts:BTMicrofinanzas.ObtenerDestinosCredito>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerDestinosCredito \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "solicitudUId": "10896",
    "productoUId": "23"
 }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTMicrofinanzas.ObtenerDestinosCreditoResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>95</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>987391075CD285A89A23FBEE</Token>
            <Device>GP</Device>
         </Btinreq>
         <sdtDestinosCredito>
            <sBTDestinoCredito>
               <identificador>28</identificador>
               <descripcion>LEGALIZACIÓN DE LA TENENCIA DE LA TIERRA</descripcion>
            </sBTDestinoCredito>
            <sBTDestinoCredito>
               <identificador>29</identificador>
               <descripcion>INTRODUCCIÓN DE SERVICIOS BÁSICOS</descripcion>
            </sBTDestinoCredito>
            <sBTDestinoCredito>
               <identificador>30</identificador>
               <descripcion>OBRAS DE PROTECCIÓN</descripcion>
            </sBTDestinoCredito>
            <sBTDestinoCredito>
               <identificador>31</identificador>
               <descripcion>REPARACIÓN O MEJORA DE VIVIENDA</descripcion>
            </sBTDestinoCredito>
            <sBTDestinoCredito>
               <identificador>32</identificador>
               <descripcion>AMPLIACIÓN DE VIVIENDA</descripcion>
            </sBTDestinoCredito>
            <sBTDestinoCredito>
               <identificador>33</identificador>
               <descripcion>CONSTRUCCIÓN DE VIVIENDA</descripcion>
            </sBTDestinoCredito>
            <sBTDestinoCredito>
               <identificador>34</identificador>
               <descripcion>COMPRA DE TERRENO PARA VIVIENDA</descripcion>
            </sBTDestinoCredito>
            <sBTDestinoCredito>
               <identificador>35</identificador>
               <descripcion>COMPRA DE VIVIENDA</descripcion>
            </sBTDestinoCredito>
         </sdtDestinosCredito>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTMicrofinanzas.ObtenerDestinosCredito</Servicio>
            <Fecha>2019-09-27</Fecha>
            <Hora>15:21:28</Hora>
            <Requerimiento>95</Requerimiento>
            <Numero>330</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTMicrofinanzas.ObtenerDestinosCreditoResponse>
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
    "sdtDestinosCredito": {
        "sBTDestinoCredito": [
        {
            "identificador": "28",
            "descripcion": "LEGALIZACIÓN DE LA TENENCIA DE LA TIERRA"
        },
        {
            "identificador": "29",
            "descripcion": "INTRODUCCIÓN DE SERVICIOS BÁSICOS"
        },
        {
            "identificador": "30",
            "descripcion": "OBRAS DE PROTECCIÓN"
        },
        {
            "identificador": "31",
            "descripcion": "REPARACIÓN O MEJORA DE VIVIENDA"
        },
        {
            "identificador": "32",
            "descripcion": "AMPLIACIÓN DE VIVIENDA"
        },
        {
            "identificador": "33",
            "descripcion": "CONSTRUCCIÓN DE VIVIENDA"
        },
        {
            "identificador": "34",
            "descripcion": "COMPRA DE TERRENO PARA VIVIENDA"
        },
        {
            "identificador": "35",
            "descripcion": "COMPRA DE VIVIENDA"
        }
        ]
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTMicrofinanzas.ObtenerDestinosCredito",
        "Fecha": "2019-09-27",
        "Hora": "15:21:28",
        "Requerimiento": "95",
        "Numero": "330",
        "Estado": "OK"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDestinoCredito', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de destino de crédito.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador de destino de crédito.' }] }];
}
