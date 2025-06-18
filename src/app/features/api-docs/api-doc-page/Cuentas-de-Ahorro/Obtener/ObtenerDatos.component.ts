import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDatos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDatosComponent1750258525013 {
  pageTitle        = 'Obtener Datos';
  description      = `Método para obtener los datos de un producto de cuenta de ahorro.`;
  pubName          = 'Obtener Datos';
  programa         = '';
  scope            = '';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }];
  outputData = [{ Nombre: 'sdtCajaAhorro', Tipo: '[sBTCajaAhorro](#sbtcajaahorro)', Comentarios: 'Datos de caja de ahorro.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de operación.' }, { Codigo: '30002', Descripcion: 'No se recuperó operación para el identificador: [Número de identificador].' }, { Codigo: '30003', Descripcion: 'La operación ingresada no corresponde a una cuenta de ahorro.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCuentasDeAhorro.ObtenerDatos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>281</bts:operacionUId>
      </bts:BTCuentasDeAhorro.ObtenerDatos>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ObtenerDatos=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: c27aec65-f66f-b138-f9d3-15a243b6d5e4\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 281
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasDeAhorro.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtCajaAhorro>
            <cobraIntereses>S</cobraIntereses>
            <producto>
               <papel/>
               <moneda>$</moneda>
               <productoUId>0</productoUId>
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre>
            </producto>
            <idOperacionBT>0010100000021000000000000000001100001000000000001</idOperacionBT>
            <saldoPorConfirmar>0.00</saldoPorConfirmar>
            <descPaquete/>
            <idOperacionFmt>000000011_001</idOperacionFmt>
            <ejecutivo/>
            <saldoCobertura>0.00</saldoCobertura>
            <pagaInteresSobregiro>N</pagaInteresSobregiro>
            <saldoDisponible>7433400.28</saldoDisponible>
            <pagaComisCantMovimientos>S</pagaComisCantMovimientos>
            <saldoBloqueado>0.00</saldoBloqueado>
            <pagaComisBajoPromedio>S</pagaComisBajoPromedio>
            <operacionUId>281</operacionUId>
            <frecuenciaEmisionEC>Cuatrimestral</frecuenciaEmisionEC>
            <diasSobregiro>0</diasSobregiro>
            <saldoContable>7433400.28</saldoContable>
            <estado>Normal</estado>
            <fechaApertura>2015-12-23</fechaApertura>
            <sucursal>Casa Matriz</sucursal>
            <pagaComisEstadoCuenta/>
            <paquete>N</paquete>
         </sdtCajaAhorro>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>856</Numero>
            <Estado>OK</Estado>
            <Servicio>BTCuentasDeAhorro.ObtenerDatos</Servicio>
            <Fecha>2017-12-18</Fecha>
            <Requerimiento/>
            <Hora>10:42:59</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCuentasDeAhorro.ObtenerDatosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `\'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtCajaAhorro": {
        "cobraIntereses": "S",
        "producto": {
            "papel": "",
            "moneda": "$",
            "productoUId": "0",
            "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física"
        },
        "idOperacionBT": "0010100000021000000000000000001100001000000000001",
        "saldoPorConfirmar": "0.00",
        "descPaquete": "",
        "idOperacionFmt": "000000011_001",
        "ejecutivo": "",
        "saldoCobertura": "0.00",
        "pagaInteresSobregiro": "N",
        "saldoDisponible": "7433400.28",
        "pagaComisCantMovimientos": "S",
        "saldoBloqueado": "0.00",
        "pagaComisBajoPromedio": "S",
        "operacionUId": "281",
        "frecuenciaEmisionEC": "Cuatrimestral",
        "diasSobregiro": "0",
        "saldoContable": "7433400.28",
        "estado": "Normal",
        "fechaApertura": "2015-12-23",
        "sucursal": "Casa Matriz",
        "pagaComisEstadoCuenta": "",
        "paquete": "N"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "857",
        "Estado": "OK",
        "Servicio": "BTCuentasDeAhorro.ObtenerDatos",
        "Fecha": "2017-12-18",
        "Requerimiento": "",
        "Hora": "10:43:47",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTCajaAhorro', fields: [{ Nombre: 'cobraIntereses', Tipo: 'String', Comentarios: 'Cobra intereses (S/N).' }, { Nombre: 'descPaquete', Tipo: 'String', Comentarios: 'Descripción de paquete.' }, { Nombre: 'diasSobregiro', Tipo: 'Short', Comentarios: 'Días de Sobregiro.' }, { Nombre: 'ejecutivo', Tipo: 'String', Comentarios: 'Nombre de ejecutivo de alta.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Descripción de estado de la operación.' }, { Nombre: 'fechaApertura', Tipo: 'Date', Comentarios: 'Fecha de alta.' }, { Nombre: 'frecuenciaEmisionEC', Tipo: 'String', Comentarios: 'Frecuencia de emisión de estado de cuenta.' }, { Nombre: 'idOperacionBT', Tipo: 'String', Comentarios: 'Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).' }, { Nombre: 'idOperacionFmt', Tipo: 'String', Comentarios: 'Identificador String (concatenación de algunos conceptos claves de la operación).' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación' }, { Nombre: 'pagaComisBajoPromedio', Tipo: 'String', Comentarios: 'Paga comisión por bajo promedio (S/N).' }, { Nombre: 'pagaComisCantMovimientos', Tipo: 'String', Comentarios: 'Paga comisión por cantidad de movimientos (S/N).' }, { Nombre: 'pagaComisEstadoCuenta', Tipo: 'String', Comentarios: 'Paga Comisión por estado de cuenta (S/N).' }, { Nombre: 'pagaInteresSobregiro', Tipo: 'String', Comentarios: 'Paga interes por sobregiro (S/N).' }, { Nombre: 'paquete', Tipo: 'String', Comentarios: 'Tiene paquete (S/N).' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos del Producto.' }, { Nombre: 'saldoBloqueado', Tipo: 'Double', Comentarios: 'Saldo bloqueado.' }, { Nombre: 'saldoCobertura', Tipo: 'Double', Comentarios: 'Saldo de cobertura.' }, { Nombre: 'saldoContable', Tipo: 'Double', Comentarios: 'Saldo total.' }, { Nombre: 'saldoDisponible', Tipo: 'Double', Comentarios: 'Saldo disponible.' }, { Nombre: 'saldoPorConfirmar', Tipo: 'Double', Comentarios: 'Saldo pendiente de confirmación.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal de alta.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
