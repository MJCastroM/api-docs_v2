import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDatos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDatosComponent1750713393758 {
  pageTitle        = 'Obtener Datos';
  description      = `Método para obtener los datos de un producto de cuenta corriente.`;
  pubName    = 'BTCuentasCorrientes.ObtenerDatos';
  programa   = 'RBTPG009';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }];
  outputData = [{ Nombre: 'sdtCuentaCorriente', Tipo: '[sBTCuentaCorriente](#sbtcuentacorriente)', Comentarios: 'Datos del producto.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de operación.' }, { Codigo: '30002', Descripcion: 'No se recuperó la operación para el identificador: [Número de identificador].' }, { Codigo: '30003', Descripcion: 'La operación ingresada no corresponde a una cuenta Corriente.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasCorrientes.ObtenerDatos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>9</bts:operacionUId>
      </bts:BTCuentasCorrientes.ObtenerDatos>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerDatos=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 78cd760f-5ec8-ae9c-5780-0564a89b999d\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 142
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasCorrientes.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtCuentaCorriente>
            <cobraIntereses>S</cobraIntereses>
            <producto>
               <papel/>
               <moneda>$</moneda>
               <productoUId>0</productoUId>
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
            </producto>
            <idOperacionBT>0010100000020000000000000000002700001000000000001</idOperacionBT>
            <saldoPorConfirmar>0.00</saldoPorConfirmar>
            <sobregiroAutorizado>N</sobregiroAutorizado>
            <descPaquete/>
            <idOperacionFmt>000000027_001</idOperacionFmt>
            <ejecutivo>Instalador</ejecutivo>
            <saldoCobertura>15786.45</saldoCobertura>
            <pagaInteresSobregiro>N</pagaInteresSobregiro>
            <saldoDisponible>26601092.87</saldoDisponible>
            <pagaComisCantMovimientos>S</pagaComisCantMovimientos>
            <saldoBloqueado>0.00</saldoBloqueado>
            <pagaComisBajoPromedio>S</pagaComisBajoPromedio>
            <frecuenciaEmisionEC>Mensual</frecuenciaEmisionEC>
            <operacionUId>9</operacionUId>
            <chequeras/>
            <diasSobregiro>0</diasSobregiro>
            <saldoContable>26585306.42</saldoContable>
            <estado>Normal</estado>
            <fechaApertura>2013-12-01</fechaApertura>
            <sucursal>Casa Matriz</sucursal>
            <pagaComisEstadoCuenta/>
            <paquete>N</paquete>
         </sdtCuentaCorriente>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>925</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasCorrientes.ObtenerDatos</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:30:40</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasCorrientes.ObtenerDatosResponse>
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
    "sdtCuentaCorriente": {
        "cobraIntereses": "",
        "producto": {
            "papel": "",
            "moneda": "$",
            "productoUId": "0",
            "nombre": "LEASING, Amort. - Capital F./Empr.- T/F"
        },
        "idOperacionBT": "0010000100115000000000000000002700000000000326001",
        "saldoPorConfirmar": "0.00",
        "sobregiroAutorizado": "",
        "descPaquete": "",
        "idOperacionFmt": "000000027_000",
        "ejecutivo": "Instalador",
        "saldoCobertura": "0.00",
        "pagaInteresSobregiro": "",
        "saldoDisponible": "-174180.15",
        "pagaComisCantMovimientos": "",
        "saldoBloqueado": "0.00",
        "pagaComisBajoPromedio": "",
        "frecuenciaEmisionEC": "",
        "operacionUId": "142",
        "chequeras": "",
        "diasSobregiro": "1",
        "saldoContable": "-174180.15",
        "estado": "Normal",
        "fechaApertura": "2018-05-18",
        "sucursal": "Sucursal Beta",
        "pagaComisEstadoCuenta": "",
        "paquete": "N"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "926",
        "Estado": "OK",
        "Servicio": "BTCuentasCorrientes.ObtenerDatos",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "17:31:29",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTCuentaCorriente', fields: [{ Nombre: 'chequeras', Tipo: 'String', Comentarios: 'Datos de la chequera.' }, { Nombre: 'cobraIntereses', Tipo: 'String', Comentarios: '¿Cobra intereses? (S/N).' }, { Nombre: 'descPaquete', Tipo: 'String', Comentarios: 'Descripción de paquete.' }, { Nombre: 'diasSobregiro', Tipo: 'Short', Comentarios: 'Días de Sobregiro.' }, { Nombre: 'ejecutivo', Tipo: 'String', Comentarios: 'Nombre de ejecutivo de alta.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Descrición de estado de la operación.' }, { Nombre: 'fechaApertura', Tipo: 'Date', Comentarios: 'Fecha de alta.' }, { Nombre: 'frecuenciaEmisionEC', Tipo: 'String', Comentarios: 'Frecuencia de emisión de estado de cuenta.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }, { Nombre: 'pagaComisBajoPromedio', Tipo: 'String', Comentarios: '¿Paga comisión por bajo promedio? (S/N).' }, { Nombre: 'pagaComisCantMovimientos', Tipo: 'String', Comentarios: '¿Paga comisión por cantidad de movimientos? (S/N).' }, { Nombre: 'pagaComisEstadoCuenta', Tipo: 'String', Comentarios: '¿Paga Comisión por estado de cuenta? (S/N).' }, { Nombre: 'paquete', Tipo: 'String', Comentarios: '¿Tiene paquete? (S/N).' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del producto.' }, { Nombre: 'saldoBloqueado', Tipo: 'Double', Comentarios: 'Saldo bloqueado.' }, { Nombre: 'saldoCobertura', Tipo: 'Double', Comentarios: 'Saldo de cobertura.' }, { Nombre: 'saldoContable', Tipo: 'Double', Comentarios: 'Saldo total.' }, { Nombre: 'saldoDisponible', Tipo: 'Double', Comentarios: 'Saldo disponible.' }, { Nombre: 'saldoPorConfirmar', Tipo: 'Double', Comentarios: 'Saldo pendiente de confirmación.' }, { Nombre: 'sobregiroAutorizado', Tipo: 'String', Comentarios: '¿Sobregiro autorizado? (S/N).' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal de alta.' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
