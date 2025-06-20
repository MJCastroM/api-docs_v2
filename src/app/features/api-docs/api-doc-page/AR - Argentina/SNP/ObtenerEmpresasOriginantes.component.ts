import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerEmpresasOriginantes',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerEmpresasOriginantesComponent1750446218098 {
  pageTitle        = 'Obtener Empresas Originantes';
  description      = `Método para obtener las empresas originantes para las cuales tiene adhesiones activas un cliente.`;
  pubName    = 'BTSNP.ObtenerEmpresasOriginantes';
  programa   = 'RBTPG325';
  scope      = 'Argentina';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [{ Nombre: 'sdtEmpresas', Tipo: '[sBTEmpresaOriginante](#sbtempresaoriginante)', Comentarios: 'Listado de empresas originantes.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador del cliente.' }, { Codigo: '30002', Descripcion: 'No se encontró un cliente para el identificador: [Número de identificador].' }, { Codigo: '40001', Descripcion: 'No se encontraron empresas originantes para este cliente.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTSNP.ObtenerEmpresasOriginantes>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>fbd47e2319F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTSNP.ObtenerEmpresasOriginantes>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSNP_v1?ObtenerEmpresasOriginantes\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{   
		"Btinreq": {
			"Device": "AC",
			"Usuario": "BANTOTAL",
			"Requerimiento": "",
			"Canal": "BTDIGITAL",
			"Token": "fbd47e2319F955E77534D3E0"
		},
		"clienteUId": 4
	}` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTSNP.ObtenerEmpresasOriginantesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>fbd47e2319F955E77534D3E0</Token>
         </Btinreq>
         <sdtEmpresas>
            <sBTEmpresaOriginante>
               <identificador>3050001626</identificador>
               <prestaciones>
                  <sBTPrestacion>
                     <descripcion>ACE SEGUROS S.A.</descripcion>
                     <codigo>DEB RIO</codigo>
                  </sBTPrestacion>
               </prestaciones>
            </sBTEmpresaOriginante>
            <sBTEmpresaOriginante>
               <identificador>3050005116</identificador>
               <prestaciones>
                  <sBTPrestacion>
                     <descripcion>LA MERIDIONAL</descripcion>
                     <codigo>MERIDIO PE</codigo>
                  </sBTPrestacion>
               </prestaciones>
            </sBTEmpresaOriginante>
         </sdtEmpresas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1628</Numero>
            <Servicio>BTSNP.ObtenerEmpresasOriginantes</Servicio>
            <Estado>OK</Estado>
            <Fecha>2021-06-18</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:10:46</Hora>
         </Btoutreq>
      </BTSNP.ObtenerEmpresasOriginantesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
    "Btinreq": {
        "Device": "AC",
        "Usuario": "BANTOTAL",
        "Requerimiento": "",
        "Canal": "BTDIGITAL",
        "Token": "fbd47e2319F955E77534D3E0"
    },
    "sdtEmpresas": {
        "sBTEmpresaOriginante": [
            {
                "identificador": "3050001626",
                "prestaciones": {
                    "sBTPrestacion": [
                        {
                            "descripcion": "ACE SEGUROS S.A.",
                            "codigo": "DEB RIO"
                        }
                    ]
                }
            },
            {
                "identificador": "3050005116",
                "prestaciones": {
                    "sBTPrestacion": [
                        {
                            "descripcion": "LA MERIDIONAL",
                            "codigo": "MERIDIO PE"
                        }
                    ]
                }
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1608,
        "Estado": "OK",
        "Servicio": "BTSNP.ObtenerEmpresasOriginantes",
        "Requerimiento": "",
        "Fecha": "2021-06-16",
        "Hora": "16:19:38",
        "Canal": "BTDIGITAL"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTEmpresaOriginante', fields: [{ Nombre: 'identificador', Tipo: 'String', Comentarios: 'Identificador de la empresa originante.' }, { Nombre: 'prestaciones', Tipo: '[sBTPrestacion](#sbtprestacion)', Comentarios: 'Listado de prestaciones.' }] }, { typeName: 'sBTPrestacion', fields: [{ Nombre: 'codigo', Tipo: 'String', Comentarios: 'Código identificador de la prestación.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de la prestación.' }] }];
}
