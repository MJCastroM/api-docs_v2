import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ContratarProducto',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ContratarProductoComponent1750713393772 {
  pageTitle        = 'Contratar Producto';
  description      = `Método para contratar un producto de cuenta de ahorro.`;
  pubName    = 'BTCuentasDeAhorro.ContratarProducto';
  programa   = 'RBTPG030';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Si no se ingresa valor en el parámetro \'sucursalId\', su valor se asume de la cuenta cliente. Si la opción general 3282 está activada se tomará la sucursal del usuario que ejecuta el servicio.

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'nombreSubCuenta', Tipo: 'String', Comentarios: 'Nombre de la cuenta de ahorro.' }, { Nombre: 'sucursalId', Tipo: 'Int', Comentarios: 'Identificador de sucursal.' }];
  outputData = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de cliente.' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para el Identificador: [Número de identificador].' }, { Codigo: '30003', Descripcion: 'No se recibió el identificador único de producto.' }, { Codigo: '30004', Descripcion: 'No existe registro para el identificador único de producto.' }, { Codigo: '30005', Descripcion: 'La operación ingresada no corresponde a una cuenta de ahorro.' }, { Codigo: '30006', Descripcion: 'Cuenta cliente no puede ser vacío.' }, { Codigo: '30007', Descripcion: 'No se encuentra definida la moneda.' }, { Codigo: '30008', Descripcion: 'No existe el producto seleccionado.' }, { Codigo: '30009', Descripcion: 'No se pudo crear la cuenta vista.' }, { Codigo: '30010', Descripcion: 'El cliente no existe.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasDeAhorro.ContratarProducto>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
         <bts:productoUId>1</bts:productoUId>
         <bts:nombreSubCuenta>C.A. Ahorro</bts:nombreSubCuenta>
         <bts:sucursalId>0</bts:sucursalId>
      </bts:BTCuentasDeAhorro.ContratarProducto>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ContratarProducto=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: b80d8c23-883d-589a-228b-4009ae6eba1c\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 4,
    "productoUId": 1,
    "nombreSubCuenta": "C.A. Pesos",
    "sucursalId": 0
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasDeAhorro.ContratarProductoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <operacionUId>401</operacionUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>853</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasDeAhorro.ContratarProducto</Servicio>
            <Fecha>2017-12-18</Fecha>
            <Requerimiento/>
            <Hora>10:33:16</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasDeAhorro.ContratarProductoResponse>
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
    "operacionUId": "402",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "855",
        "Estado": "OK",
        "Servicio": "BTCuentasDeAhorro.ContratarProducto",
        "Fecha": "2017-12-18",
        "Requerimiento": "",
        "Hora": "10:35:49",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [];
}
