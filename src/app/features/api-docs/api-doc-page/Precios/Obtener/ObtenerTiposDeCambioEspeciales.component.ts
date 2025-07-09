import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTiposDeCambioEspeciales',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTiposDeCambioEspecialesComponent1751987199162 {
  pageTitle        = 'Obtener Tipos de Cambio Especiales';
  description      = `Método para obtener un listado de los tipos de cambio especiales.`;
  pubName    = 'BTPrecios.ObtenerTiposDeCambioEspeciales ';
  programa   = 'RBTPG568';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtTiposDeCambioEspecial', Tipo: '[sBTTipoDeCambioEspecial](#sbttipodecambioespecial)', Comentarios: 'Listado de pizarras especiales parametrizadas.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
    <soapenv:Header/>
    <soapenv:Body>
        <bts:BTPrecios.ObtenerTiposDeCambioEspeciales>
            <bts:Btinreq>
                <bts:Device>AV</bts:Device>
                <bts:Usuario>MINSTALADOR</bts:Usuario>
                <bts:Requerimiento></bts:Requerimiento>
                <bts:Canal>BTDIGITAL</bts:Canal>
                <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
            </bts:Btinreq>
        </bts:BTPrecios.ObtenerTiposDeCambioEspeciales>
    </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerTiposDeCambioEspeciales \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
    "Btinreq": {
        "Requerimiento": "1",
        "Device": "GP",
        "Token": "b4ae55b35c4A8B5C60A82434",
        "Usuario": "MINSTALADOR",
        "Canal": "BTDIGITAL"
    }
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAPENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAPENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <SOAP-ENV:Body>
        <BTPrecios.ObtenerTiposDeCambioEspecialesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
            <Btinreq>
                <Device>AV</Device>
                <Usuario>MINSTALADOR</Usuario>
                <Requerimiento/>
                <Canal>BTDIGITAL</Canal>
                <Token>268b6d23eb4A8B5C60A82434</Token>
            </Btinreq>
            <sdtTiposDeCambioEspecial>
				<sBTTipoDeCambioEspecial>
					<identificador>1</identificador>
					<descripcion>Pizarra Especial</descripcion> 
					<esInteractivo>N</esInteractivo>
				</sBTTipoDeCambioEspecial>
				<sBTTipoDeCambioEspecial>
					<identificador>500</identificador>
					<descripcion>Mercado Libre</descripcion> 
					<esInteractivo>N</esInteractivo>
				</sBTTipoDeCambioEspecial>
				<sBTTipoDeCambioEspecial>
					<identificador>501</identificador>
					<descripcion>Pizarra de Comisiones</descripcion> 
					<esInteractivo>N</esInteractivo>
				</sBTTipoDeCambioEspecial>
            </sdtTiposDeCambioEspecial>
            <Erroresnegocio></Erroresnegocio>
            <Btoutreq>
                <Numero>864</Numero>
                <Estado>OK</Estado>
                <Servicio>BTPrecios.ObtenerTiposDeCambioEspeciales</Servicio>
                <Requerimiento/>
                <Fecha>2017-12-18</Fecha>
                <Hora>17:07:19</Hora>
                <Canal>BTDIGITAL</Canal>
            </Btoutreq>
        </BTPrecios.ObtenerTiposDeCambioEspecialesResponse>
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
	"sdtTiposDeCambioEspecial": {
	   "sBTTipoDeCambioEspecial": [
		  {
			"identificador": 1,
			"descripcion": "Pizarra Especial",
			"esInteractivo": "N"
		  },
		  {
			"identificador": 500,
			"descripcion": "Mercado Libre",
			"esInteractivo": "N"
		  },
		  {
			"identificador": 501,
			"descripcion": "Pizarra de Comisiones",
			"esInteractivo": "N"
		  }
	   ]
	},
    "Btoutreq": {
        "Numero": "103",
        "Estado": "OK",
        "Servicio": "BTPrecios.ObtenerTiposDeCambioEspeciales",
        "Requerimiento": "1",
        "Fecha": "2019-07-22",
        "Canal": "BTDIGITAL",
        "Hora": "16:00:37"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTTipoDeCambioEspecial', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'esInteractivo', Tipo: 'Double', Comentarios: '¿Es interactiva? (S o N).' }, { Nombre: 'identificador', Tipo: 'Short', Comentarios: 'Identificador de la pizarra.' }] }];
}
