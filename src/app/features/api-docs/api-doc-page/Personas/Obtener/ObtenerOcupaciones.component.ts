import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerOcupaciones',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerOcupacionesComponent1750713394552 {
  pageTitle        = 'Obtener Ocupaciones';
  description      = `Método para obtener un listado de las ocupaciones registradas.`;
  pubName    = 'BTPersonas.ObtenerOcupaciones';
  programa   = 'RBTPG037';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtOcupaciones', Tipo: '[sBTOcupacion](#sbtocupacion)', Comentarios: 'Listado de ocupaciones.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerOcupaciones>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTPersonas.ObtenerOcupaciones>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerOcupaciones=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 92bdbb62-f954-c1ae-9ca8-5a6289bace3b\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerOcupacionesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtOcupaciones>
            <sBTOcupacion>
               <identificador>1</identificador>
               <descripcion>Empleado</descripcion>
            </sBTOcupacion>
            <sBTOcupacion>
               <identificador>2</identificador>
               <descripcion>Obrero</descripcion>
            </sBTOcupacion>
            <sBTOcupacion>
               <identificador>3</identificador>
               <descripcion>Empresario</descripcion>
            </sBTOcupacion>
            <sBTOcupacion>
               <identificador>4</identificador>
               <descripcion>Jubilado/ Pensionista</descripcion>
            </sBTOcupacion>
            <sBTOcupacion>
               <identificador>5</identificador>
               <descripcion>Ama de casa</descripcion>
            </sBTOcupacion>
            <sBTOcupacion>
               <identificador>6</identificador>
               <descripcion>Militar</descripcion>
            </sBTOcupacion>
            <sBTOcupacion>
               <identificador>7</identificador>
               <descripcion>Policía</descripcion>
            </sBTOcupacion>
            <sBTOcupacion>
               <identificador>8</identificador>
               <descripcion>Agropecuario</descripcion>
            </sBTOcupacion>
            <sBTOcupacion>
               <identificador>9</identificador>
               <descripcion>Estudiante</descripcion>
            </sBTOcupacion>
            <sBTOcupacion>
               <identificador>10</identificador>
               <descripcion>Profesional Independiente</descripcion>
            </sBTOcupacion>
         </sdtOcupaciones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>821</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerOcupaciones</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>18:41:53</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPersonas.ObtenerOcupacionesResponse>
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
    "sdtOcupaciones": {
        "sBTOcupacion": [
            {
                "descripcion": "Empleado",
                "identificador": "1"
            },
            {
                "descripcion": "Obrero",
                "identificador": "2"
            },
            {
                "descripcion": "Empresario",
                "identificador": "3"
            },
            {
                "descripcion": "Jubilado/ Pensionista",
                "identificador": "4"
            },
            {
                "descripcion": "Ama de casa",
                "identificador": "5"
            },
            {
                "descripcion": "Militar",
                "identificador": "6"
            },
            {
                "descripcion": "Policía",
                "identificador": "7"
            },
            {
                "descripcion": "Agropecuario",
                "identificador": "8"
            },
            {
                "descripcion": "Estudiante",
                "identificador": "9"
            },
            {
                "descripcion": "Profesional Independiente",
                "identificador": "10"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "822",
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerOcupaciones",
        "Fecha": "2017-12-17",
        "Requerimiento": "",
        "Hora": "18:42:22",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTOcupacion', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de ocupación.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador de ocupación.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
