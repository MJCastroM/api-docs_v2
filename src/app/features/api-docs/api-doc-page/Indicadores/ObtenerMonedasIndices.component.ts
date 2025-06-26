import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerMonedasIndices',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerMonedasIndicesComponent1750945333306 {
  pageTitle        = 'Obtener Monedas Indices';
  description      = `Método para obtener las monedas e índices en funcionamiento.`;
  pubName    = 'BTIndicadores.ObtenerMonedasIndices';
  programa   = 'RBTPG704';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtMonedas', Tipo: '[sBTMonedaIndice](#sbtmonedaindice)', Comentarios: 'Listado de monedas en uso contable.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTIndicadores.ObtenerMonedasIndices>
         <bts:Btinreq>
           <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>?</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerMonedasIndices>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerMonedasIndices\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
   "Btinreq": {
      "Device": 1,
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7",
      "Usuario": "INSTALADOR",
      "Requerimiento": "?"
   }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTIndicadores.ObtenerMonedasIndicesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>?</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>959C2E0AEF210ABC0D8AA8F7</Token>
         </Btinreq>
         <sdtMonedas>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>0</codigo>
               <nombre>Pesos</nombre>
            </sBTMonedaIndice>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>105</codigo>
               <nombre>DOLAR AUSTRALIANO</nombre>
            </sBTMonedaIndice>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>500</codigo>
               <nombre>PESOS ARGENTINOS</nombre>
            </sBTMonedaIndice>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>1111</codigo>
               <nombre>EURO</nombre>
            </sBTMonedaIndice>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>2222</codigo>
               <nombre>DÓLAR ESTADOUNIDENSE</nombre>
            </sBTMonedaIndice>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>2225</codigo>
               <nombre>DÓLAR ESTADOUNIDENSE - BILLETE</nombre>
            </sBTMonedaIndice>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>3600</codigo>
               <nombre>YENS</nombre>
            </sBTMonedaIndice>
         </sdtMonedas>
         <sdtIndices>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>0</codigo>
               <nombre>Billete</nombre>
            </sBTMonedaIndice>
            <sBTMonedaIndice>
               <tipoCambio>N</tipoCambio>
               <codigo>50</codigo>
               <nombre>Unidad de Valor Adquisitivo</nombre>
            </sBTMonedaIndice>
         </sdtIndices>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11991</Numero>
            <Estado>OK</Estado>
            <Servicio>BTIndicadores.ObtenerMonedasIndices</Servicio>
            <Requerimiento>?</Requerimiento>
            <Fecha>2023-05-22</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>15:09:29</Hora>
         </Btoutreq>
      </BTIndicadores.ObtenerMonedasIndicesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
   "Btinreq": {
      "Device": 1,
      "Usuario": "INSTALADOR",
      "Requerimiento": "?",
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7"
   },
   "sdtMonedas": {
      "sBTMonedaIndice": [
      {
         "tipoCambio": "N",
         "codigo": 0,
         "nombre": "Pesos"
      },
      {
         "tipoCambio": "N",
         "codigo": 105,
         "nombre": "DOLAR AUSTRALIANO"
      },
      {
         "tipoCambio": "N",
         "codigo": 500,
         "nombre": "PESOS ARGENTINOS"
      },
      {
         "tipoCambio": "N",
         "codigo": 1111,
         "nombre": "EURO"
      },
      {
         "tipoCambio": "N",
         "codigo": 2222,
         "nombre": "DÓLAR ESTADOUNIDENSE"
      },
      {
         "tipoCambio": "N",
         "codigo": 2225,
         "nombre": "DÓLAR ESTADOUNIDENSE - BILLETE"
      },
      {
         "tipoCambio": "N",
         "codigo": 3600,
         "nombre": "YENS"
      }
      ]
   },
   "sdtIndices": {
      "sBTMonedaIndice": [
      {
         "tipoCambio": "N",
         "codigo": 0,
         "nombre": "Billete"
      },
      {
         "tipoCambio": "N",
         "codigo": 50,
         "nombre": "Unidad de Valor Adquisitivo"
      }
      ]
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": 11991,
      "Estado": "OK",
      "Servicio": "BTIndicadores.ObtenerMonedasIndices",
      "Requerimiento": "?",
      "Fecha": "2023-05-22",
      "Canal": "BTDIGITAL",
      "Hora": "15:09:29"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTMonedaIndice', fields: [{ Nombre: 'codigo', Tipo: 'Int', Comentarios: 'Código identificador de moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de moneda.' }, { Nombre: 'tipoCambio', Tipo: 'String', Comentarios: 'Tipo Cambio.' }] }];
}
