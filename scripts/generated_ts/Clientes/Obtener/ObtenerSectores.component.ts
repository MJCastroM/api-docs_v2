import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerSectores',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerSectoresComponent1750258524823 {
  pageTitle        = 'Obtener Sectores';
  description      = `Método para obtener un listado de los sectores ingresados en Bantotal.`;
  pubName          = 'Obtener Sectores';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtSectores', Tipo: '[sBTSector](#sbtsector)', Comentarios: 'Listado de sectores.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerSectores>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTClientes.ObtenerSectores>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerSectores=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6d04ae50-6df0-d940-bc8e-b7a9954868d4\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	}
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerSectoresResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSectores>
            <sBTSector>
               <identificador>1</identificador>
               <descripcion>Privado no Financiero</descripcion>
            </sBTSector>
            <sBTSector>
               <identificador>2</identificador>
               <descripcion>Privado Financiero</descripcion>
            </sBTSector>
            <sBTSector>
               <identificador>3</identificador>
               <descripcion>Público Nacional</descripcion>
            </sBTSector>
            <sBTSector>
               <identificador>4</identificador>
               <descripcion>Público Extranjero</descripcion>
            </sBTSector>
            <sBTSector>
               <identificador>99</identificador>
               <descripcion>No Corresponde</descripcion>
            </sBTSector>
         </sdtSectores>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>845</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerSectores</Servicio>
            <Fecha>2017-12-18</Fecha>
            <Requerimiento/>
            <Hora>02:27:17</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerSectoresResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtSectores": {
        "sBTSector": [
            {
                "descripcion": "Privado no Financiero",
                "identificador": "1"
            },
            {
                "descripcion": "Privado Financiero",
                "identificador": "2"
            },
            {
                "descripcion": "Público Nacional",
                "identificador": "3"
            },
            {
                "descripcion": "Público Extranjero",
                "identificador": "4"
            },
            {
                "descripcion": "No Corresponde",
                "identificador": "99"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "846",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerSectores",
        "Fecha": "2017-12-18",
        "Requerimiento": "",
        "Hora": "02:27:57",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTSector', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de sector.' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador de sector.' }] }];
}
