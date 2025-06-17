import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerAgrupadoresDomicilio',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerAgrupadoresdeDomicilioComponent {
  pageTitle = 'Obtener Agrupadores de Domicilio';
  description = `Metodo para obtener los diferentes niveles de agrupadores de domicilios.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerAgrupadoresDomicilio';
  programa   = 'RBTPG221';
  scope      = 'Global';

  

  hasBackendConfig  = false;
  backendText       = ``;
  backendConfig     = [];

  inputData  = [{ Nombre: 'agrupadorId1', Tipo: 'Short', Comentarios: 'Identificador del nivel de agrupador 1.' }, { Nombre: 'agrupadorId2', Tipo: 'Short', Comentarios: 'Identificador del nivel de agrupador 2.' }, { Nombre: 'agrupadorId3', Tipo: 'Short', Comentarios: 'Identificador del nivel de agrupador 3.' }, { Nombre: 'agrupadorId4', Tipo: 'Short', Comentarios: 'Identificador del nivel de agrupador 4.' }, { Nombre: 'agrupadorId5', Tipo: 'Short', Comentarios: 'Identificador del nivel de agrupador 5.' }, { Nombre: 'agrupadorId6', Tipo: 'Short', Comentarios: 'Identificador del nivel de agrupador 6.' }];
  outputData = [{ Nombre: 'sdtAgrupadores', Tipo: '[sBTAgrupadores](#sbtagrupadores)', Comentarios: 'Listado de agrupadores.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se encontraron agrupadores.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerAgrupadoresDomicilio>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Device>GP</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>C5DFB132EC9DE80A8063A90E</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
         </bts:Btinreq>
         <bts:agrupadorId1>1</bts:agrupadorId1>
         <bts:agrupadorId2>1</bts:agrupadorId2>
         <bts:agrupadorId3></bts:agrupadorId3>
         <bts:agrupadorId4></bts:agrupadorId4>
         <bts:agrupadorId5></bts:agrupadorId5>
         <bts:agrupadorId6></bts:agrupadorId6>
      </bts:BTConfiguracionBantotal.ObtenerAgrupadoresDomicilio>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerAgrupadoresDomicilio' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{   
    "Btinreq": {
      "Usuario": "INSTALADOR",
      "Device": "GP",
      "Requerimiento": "1",
      "Token": "C5DFB132EC9DE80A8063A90E",
      "Canal": "BTDIGITAL"
    },
    "agrupadorId1": 1,
    "agrupadorId2": 1,
    "agrupadorId3": "",
    "agrupadorId4": "",
    "agrupadorId5": "",
    "agrupadorId6": ""
  }'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerAgrupadoresDomicilioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>C5DFB132EC9DE80A8063A90E</Token>
         </Btinreq>
         <sdtAgrupadores>
            <niveles>
               <SdtsBTAgrupadorNiv1_it>
                  <codigo>1</codigo>
                  <descripcion>Avenida</descripcion>
                  <subNivel2>
                     <SdtsBTAgrupadorNiv2_it>
                        <codigo>1</codigo>
                        <descripcion>No. Puerta</descripcion>
                        <subNivel3>
                           <SdtsBTAgrupadorNiv3_it>
                              <codigo>1</codigo>
                              <descripcion>Piso</descripcion>
                              <subNivel4>
                                 <SdtsBTAgrupadorNiv4_it>
                                    <codigo>1</codigo>
                                    <descripcion>Esquina</descripcion>
                                    <subNivel5>
                                       <SdtsBTAgrupadorNiv5_it>
                                          <codigo>1</codigo>
                                          <descripcion>Niv5</descripcion>
                                          <subNivel6></subNivel6>
                                       </SdtsBTAgrupadorNiv5_it>
                                    </subNivel5>
                                 </SdtsBTAgrupadorNiv4_it>
                              </subNivel4>
                           </SdtsBTAgrupadorNiv3_it>
                        </subNivel3>
                     </SdtsBTAgrupadorNiv2_it>
                  </subNivel2>
               </SdtsBTAgrupadorNiv1_it>
            </niveles>
         </sdtAgrupadores>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>35054</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerAgrupadoresDomicilio</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2025-04-30</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>16:39:16</Hora>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerAgrupadoresDomicilioResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
  "Btinreq": {
    "Device": "GP",
    "Usuario": "INSTALADOR",
    "Requerimiento": "1",
    "Canal": "BTDIGITAL",
    "Token": "C5DFB132EC9DE80A8063A90E"
  },
  "sdtAgrupadores": {
    "niveles": [
      {
        "codigo": 1,
        "descripcion": "Avenida",
        "subNivel2": [
          {
            "codigo": 1,
            "descripcion": "No. Puerta",
            "subNivel3": [
              {
                "codigo": 1,
                "descripcion": "Piso",
                "subNivel4": [
                  {
                    "codigo": 1,
                    "descripcion": "Esquina",
                    "subNivel5": [
                      {
                        "codigo": 1,
                        "descripcion": "Niv5",
                        "subNivel6": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "Erroresnegocio": "",
  "Btoutreq": {
    "Numero": 35054,
    "Estado": "OK",
    "Servicio": "BTConfiguracionBantotal.ObtenerAgrupadoresDomicilio",
    "Requerimiento": "1",
    "Fecha": "2025-04-30",
    "Canal": "BTDIGITAL",
    "Hora": "16:39:16"
  }
}` }
  };

  structuredTypes = [{ typeName: 'sBTAgrupadores', fields: [{ Nombre: 'niveles', Tipo: '[sBTAgrupadorNiv1](#sbtagrupadorniv1)', Comentarios: 'Coleccion del primer subnivel de agrupacion.' }, { Nombre: '### sBTAgrupadorNiv1', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTAgrupadorNiv1', fields: [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Codigo de agrupador.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Nombre de agrupador.' }, { Nombre: 'subNivel2', Tipo: '[sBTAgrupadorNiv2](#sbtagrupadorniv2)', Comentarios: 'Coleccion del segundo subnivel de agrupacion.' }, { Nombre: '### sBTAgrupadorNiv2', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTAgrupadorNiv2', fields: [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Codigo de agrupador.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Nombre de agrupador.' }, { Nombre: 'subNivel3', Tipo: '[sBTAgrupadorNiv3](#sbtagrupadorniv3)', Comentarios: 'Coleccion del tercer subnivel de agrupacion.' }, { Nombre: '### sBTAgrupadorNiv3', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTAgrupadorNiv3', fields: [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Codigo de agrupador.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Nombre de agrupador.' }, { Nombre: 'subNivel4', Tipo: '[sBTAgrupadorNiv4](#sbtagrupadorniv4)', Comentarios: 'Coleccion del cuarto subnivel de agrupacion.' }, { Nombre: '### sBTAgrupadorNiv4', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTAgrupadorNiv4', fields: [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Codigo de agrupador.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Nombre de agrupador.' }, { Nombre: 'subNivel', Tipo: '[sBTAgrupadorNiv5](#sbtagrupadorniv5)', Comentarios: 'Coleccion del quinto subnivel de agrupacion.' }, { Nombre: '### sBTAgrupadorNiv5', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTAgrupadorNiv5', fields: [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Codigo de agrupador.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Nombre de agrupador.' }, { Nombre: 'subNivel6', Tipo: '[sBTAgrupadorNiv6](#sbtagrupadorniv6)', Comentarios: 'Coleccion del quinto subnivel de agrupacion.' }, { Nombre: '### sBTAgrupadorNiv6', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTAgrupadorNiv6', fields: [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Codigo de agrupador.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Nombre de agrupador.' }] }];
}
