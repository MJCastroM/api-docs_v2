import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerDatos',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDatosComponent1750713393704 {
  pageTitle        = 'Obtener Datos';
  description      = `Método para obtener los datos de una cuenta bolsillo.`;
  pubName    = 'BTCuentasBolsillo.ObtenerDatos';
  programa   = 'RBTPG616';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'bolsilloUId', Tipo: 'Long', Comentarios: 'Identificador único del bolsillo.' }];
  outputData = [{ Nombre: 'sdtInformacionBolsillo', Tipo: '[sBTInfBolsillo](#sbtinfbolsillo)', Comentarios: 'Información del bolsillo.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de operación.' }, { Codigo: '30002', Descripcion: 'No se recuperó la operación para el identificador: [Número de identificador].' }, { Codigo: '30003', Descripcion: 'La operación ingresada no corresponde a una cuenta bolsillo.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasBolsillo.ObtenerDatos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>CC6345192D8633F531F01D1D</bts:Token>
         </bts:Btinreq>
         <bts:bolsilloUId>18843</bts:BolsilloUID>
      </bts:BTCuentasBolsillo.ObtenerDatos>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasBolsillo?ObtenerDatos\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cFC33CD93505A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
    "bolsilloUId": 183
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasBolsillo.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>CC6345192D8633F531F01D1D</Token>
         </Btinreq>
         <sdtInformacionBolsillo>
            <CuentaprincipalUID>19150</CuentaprincipalUID>
            <FechaBaja>0001-01-01</FechaBaja>
            <InstruccionUID>19150</InstruccionUID>
            <Estado>0</Estado>
            <FechaApert>2020-04-08</FechaApert>
            <Saldo>910000.00</Saldo>
            <OperacionBolsilloUID>18843</OperacionBolsilloUID>
            <NombreProducto>CUENTAS BOLSILLO, Bolsillo Ahorro</NombreProducto>
            <Parametros>
               <HeredaCondiciones>N</HeredaCondiciones>
               <MetaAhorro>990.00</MetaAhorro>
               <Tasa>0.00</Tasa>
               <PagaIntereses>S</PagaIntereses>
            </Parametros>
            <NombreSubcuenta>golozo</NombreSubcuenta>
            <ProductoBolsilloId>511</ProductoBolsilloId>
         </sdtInformacionBolsillo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>228462</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasBolsillo.ObtenerDatos</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-10-31</Fecha>
            <Hora>17:29:45</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasBolsillo.ObtenerDatosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
    "Btinreq": {
        "Device": "1",
        "Usuario": "MINSTALADOR",
        "Token": "16c1cFC33CD93505A5382434",
        "Canal": "BTDIGITAL",
        "Requerimiento": "1"
    },
    "sdtInformacionBolsillo": {
        "CuentaprincipalUID": 19150,
        "FechaBaja": "0001-01-01",
        "InstruccionUID": 19150,
        "Estado": 0,
        "FechaApert": "2020-04-08",
        "Saldo": 910000,
        "OperacionBolsilloUID": 18843,
        "NombreProducto": "CUENTAS BOLSILLO, Bolsillo Ahorro",
        "Parametros": {
            "HeredaCondiciones": "N",
            "MetaAhorro": 990,
            "Tasa": 0,
            "PagaIntereses": "S"
        },
        "NombreSubcuenta": "golozo",
        "ProductoBolsilloId": 511
    },
    "Btoutreq": {
        "Numero": "111399",
        "Estado": "OK",
        "Servicio": "BTCuentasBolsillo.ObtenerDatos",
        "Requerimiento": "1",
        "Fecha": "2023-05-10",
        "Canal": "BTDIGITAL",
        "Hora": "15:10:52"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTInfBolsillo', fields: [{ Nombre: 'cuentaPrincipalUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación principal.' }, { Nombre: 'estado', Tipo: 'Byte', Comentarios: 'Estado.' }, { Nombre: 'fechaApert', Tipo: 'Date', Comentarios: 'Fecha de apertura.' }, { Nombre: 'fechaBaja', Tipo: 'Date', Comentarios: 'Fecha de la baja.' }, { Nombre: 'instruccionUId', Tipo: 'Long', Comentarios: 'Identificador de la instrucción.' }, { Nombre: 'nombreProducto', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'nombreSubcuenta', Tipo: 'String', Comentarios: 'Nombre de la subcuenta.' }, { Nombre: 'operacionBolsilloUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación de bolsillo.' }, { Nombre: 'parametros', Tipo: '[sBTParamBolsillo](#sbtparambolsillo)', Comentarios: '' }, { Nombre: 'productoBolsilloId', Tipo: 'Short', Comentarios: 'Identificador único del producto del bolsillo.' }, { Nombre: 'saldo', Tipo: 'Double', Comentarios: 'Saldo.' }] }, { typeName: 'sBTParamBolsillo', fields: [{ Nombre: 'heredaCondiciones', Tipo: 'String', Comentarios: '¿Hereda condiciones? (S/N).' }, { Nombre: 'metaAhorro', Tipo: 'Double', Comentarios: 'Meta de ahorro de la cuenta.' }, { Nombre: 'pagaIntereses', Tipo: 'String', Comentarios: '¿Paga intereses? (S/N).' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
