import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-Crear',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class CrearComponent1750446218037 {
  pageTitle        = 'Crear';
  description      = `Método para contratar un ahorro programado.`;
  pubName    = 'BTAhorroProgramado.Crear';
  programa   = 'RBTPG118';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'sdtAhorroProgramado', Tipo: '[sBTAhorroProgramadoAlta](#sbtahorroprogramadoalta)', Comentarios: 'Datos de la solicitud de ahorro programado.' }];
  outputData = [{ Nombre: 'ahorroUId', Tipo: 'Long', Comentarios: 'Identificador único de operación del ahorro programado.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de la persona.' }, { Codigo: '30002', Descripcion: 'No se recibió el identificador del cliente.' }, { Codigo: '30003', Descripcion: 'No se recibió el identificador del producto.' }, { Codigo: '30004', Descripcion: 'No se recibió el identificador de la cuenta de origen del ahorro.' }, { Codigo: '30005', Descripcion: 'No se recibió el identificador de la cuenta de destino del ahorro.' }, { Codigo: '30006', Descripcion: 'No se recibió el abono para el ahorro.' }, { Codigo: '30007', Descripcion: 'No se recibió el día de abono para el ahorro.' }, { Codigo: '30008', Descripcion: 'No se recuperó la persona para el identificador: [Número de identificador].' }, { Codigo: '30009', Descripcion: 'No se recuperó la cuenta para el identificador de cliente: [Número de identificador].' }, { Codigo: '30010', Descripcion: 'No se recuperó la cuenta origen del ahorro para el identificador: [Número de identificador].' }, { Codigo: '30011', Descripcion: 'No se recuperó la cuenta destino del ahorro para el identificador: [Número de identificador].' }, { Codigo: '30012', Descripcion: 'No se recuperó el producto de ahorro para el identificador: [Número de identificador].' }, { Codigo: '40001', Descripcion: 'La Sucursal indicada es incorrecta.' }, { Codigo: '40004', Descripcion: 'El plazo indicado es menor al mínimo permitido.' }, { Codigo: '40005', Descripcion: 'El plazo indicado es mayor al máximo permitido.' }, { Codigo: '40006', Descripcion: 'La cuota indicada es menor al mínimo permitido.' }, { Codigo: '40007', Descripcion: 'La cuota indicada es mayor al máximo permitido.' }, { Codigo: '40008', Descripcion: 'La cantidad de periodos de gracia indicado es menor al mínimo permitido.' }, { Codigo: '40009', Descripcion: 'La cantidad de periodos de gracia indicado es mayor al máximo permitido.' }, { Codigo: '40010', Descripcion: 'La cantidad máxima de renovaciones indicado es menor al mínimo permitido.' }, { Codigo: '40011', Descripcion: 'La cantidad máxima de renovaciones indicado es mayor al máximo permitido.' }, { Codigo: '40012', Descripcion: 'La periodicidad de incremento de ahorro ingresado es menor al mínimo permitido.' }, { Codigo: '40013', Descripcion: 'La periodicidad de incremento de ahorro ingresado es mayor al máximo permitido.' }, { Codigo: '40014', Descripcion: 'El intento de incremento ingresado es menor al mínimo permitido.' }, { Codigo: '40015', Descripcion: 'El intento de incremento ingresado es mayor al máximo permitido.' }, { Codigo: '40016', Descripcion: 'La tasa ingresada no puede ser nula.' }, { Codigo: '40018', Descripcion: 'Se debe modificar la periodicidad o el plazo.' }, { Codigo: '40023', Descripcion: 'El abono no puede ser menor al abono vigente.' }, { Codigo: '40040', Descripcion: 'La Tasa indicada está fuera de tolerancia.' }, { Codigo: '40050', Descripcion: 'El abono no debe superar el máximo permitido.' }, { Codigo: '40051', Descripcion: 'El abono no debe ser inferior al mínimo permitido.' }, { Codigo: '40707', Descripcion: 'La fecha de inicio debe corresponder a un día hábil.' }, { Codigo: '40708', Descripcion: 'La fecha de inicio no puede ser menor a la del día.' }, { Codigo: '40709', Descripcion: 'El día de incremento debe ser un día hábil según el calendario.' }, { Codigo: '40710', Descripcion: 'Debe indicar un plazo válido.' }, { Codigo: '40711', Descripcion: 'No se ha ingresado el depósito inicial.' }, { Codigo: '40712', Descripcion: 'La periodicidad de incremento no es válida para el plazo indicado.' }, { Codigo: '40721', Descripcion: 'La fecha de la meta de ahorro no puede ser menor a la del día.' }, { Codigo: '40800', Descripcion: 'Error de configuración: Solicitud de tasa interactiva.' }, { Codigo: '40950', Descripcion: 'El depósito inicial es inferior al mínimo permitido (?)' }, { Codigo: '40951', Descripcion: 'La fecha del primer incremento debe ser antes del [Fecha]' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTAhorroProgramado.Crear>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtAhorroProgramado>
            <bts:abono>1000</bts:abono>
            <bts:productoUId>41</bts:productoUId>
            <bts:fechaMetaAhorro></bts:fechaMetaAhorro>
            <bts:clienteUId>81</bts:clienteUId>
            <bts:personaUId>2</bts:personaUId>
            <bts:diaIncremento>9</bts:diaIncremento>
            <bts:depositoInicial></bts:depositoInicial>
            <bts:montoMetaAhorro></bts:montoMetaAhorro>
            <bts:cuentaOrigenUId>21</bts:cuentaOrigenUId>
            <bts:cuentaDestinoUId>21</bts:cuentaDestinoUId>
            <bts:motivoAhorro></bts:motivoAhorro>
            <bts:fechaInicioAhorro></bts:fechaInicioAhorro>
            <bts:plazo>360</bts:plazo>
            <bts:periodicidadIncremento>1</bts:periodicidadIncremento>
         </bts:sdtAhorroProgramado>
      </bts:BTAhorroProgramado.Crear>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?Crear\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"sdtAhorroProgramado": {
		"personaUId": 2,
		"clienteUId": 81,
		"productoUId": 41,
		"cuentaOrigenUId":  21,
		"cuentaDestinoUId": 21,
		"motivoAhorro": "",
		"montoMetaAhorro": 0,
		"fechaMetaAhorro": "0001-01-01",
		"fechaInicioAhorro": "0001-01-01",
		"diaIncremento": 9,
		"abono": 1000,
		"depositoInicial": 0,
		"periodicidadIncremento": 1,
		"plazo": 360
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<SOAP-ENV:Body>
      <BTAhorroProgramado.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>f2f7be2ebc4A8B5C60A82434</Token>
         </Btinreq>
         <ahorroUId>61</ahorroUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>378</Numero>
            <Estado>OK</Estado>
            <Servicio>BTAhorroProgramado.Crear</Servicio>
            <Fecha>2018-04-30</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>12:25:08</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTAhorroProgramado.CrearResponse>
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
    "ahorroUId": "102",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "397",
        "Estado": "OK",
        "Servicio": "BTAhorroProgramado.Crear",
        "Fecha": "2018-05-02",
        "Requerimiento": "1",
        "Hora": "18:40:30",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTAhorroProgramadoAlta', fields: [{ Nombre: 'abono', Tipo: 'Decimal', Comentarios: 'Monto de abono periódico.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }, { Nombre: 'cuentaDestinoUId', Tipo: 'Long', Comentarios: 'Identificador único de operación de la cuenta destino del ahorro.' }, { Nombre: 'cuentaOrigenUId', Tipo: 'Long', Comentarios: 'Identificador único de operación de la cuenta origen del ahorro.' }, { Nombre: 'depositoInicial', Tipo: 'Decimal', Comentarios: 'Depósito inicial del ahorro.' }, { Nombre: 'diaIncremento', Tipo: 'Int', Comentarios: 'Día del mes en el cual se realizara el incremento [1-31].' }, { Nombre: 'fechaInicioAhorro', Tipo: 'Date', Comentarios: 'Fecha de inicio del ahorro.' }, { Nombre: 'fechaMetaAhorro', Tipo: 'Date', Comentarios: 'Fecha máxima para el cumplimiento del ahorro.' }, { Nombre: 'montoMetaAhorro', Tipo: 'Decimal', Comentarios: 'Monto de la meta de ahorro.' }, { Nombre: 'motivoAhorro', Tipo: 'String', Comentarios: 'Motivo por el cual se desea ahorrar.' }, { Nombre: 'periodicidadIncremento', Tipo: 'Int', Comentarios: 'Periodicidad del incremento en meses.' }, { Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo para la acreditación de interés del ahorro en días.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }] }];
}
