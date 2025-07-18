import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-SimularOfertas',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class SimularOfertasComponent1751987199928 {
  pageTitle        = 'Simular Ofertas';
  description      = `Método para simular ofertas de préstamos.`;
  pubName    = 'BTPrestamos.SimularOfertas';
  programa   = 'RBTPG124';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Si la opción general de procesos 3281 se encuentra activada, el servicio considera la sucursal del usuario de conexión, caso contrario, simula con la sucursal de la cuenta cliente. 

:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'sdtSimulacion', Tipo: '[sBTDatosSimulacion](#sbtdatossimulacion)', Comentarios: 'Datos necesarios para la simulación.' }];
  outputData = [{ Nombre: 'simulacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la simulación.' }, { Nombre: 'sdtOfertasPrestamo', Tipo: '[sBTOfertaPrestamo](#sbtofertaprestamo)', Comentarios: 'Colección de ofertas de préstamo.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador de cliente.' }, { Código: '30002', Descripción: 'No se recibió el identificador de producto.' }, { Código: '30003', Descripción: 'No se recuperó la cuenta para el Identificador: [Número de Identificador].' }, { Código: '30004', Descripción: 'El Identificador único de Producto es incorrecto' }, { Código: '30005', Descripción: 'No se recibió Lista de cuotas a simular.' }, { Código: '30006', Descripción: 'No se recibió el Monto de Capital desde el origen.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularOfertas>
         <bts:Btinreq>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
         <bts:sdtSimulacion>
            <bts:fechaPrimerPago>2020-05-05</bts:fechaPrimerPago>
            <bts:monto>1000</bts:monto>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:productoUId>43</bts:productoUId>
            <bts:cuotas>
               <bts:sBTCuota>
                  <bts:cantidadCuotas>12</bts:cantidadCuotas>
               </bts:sBTCuota>
            </bts:cuotas>
         </bts:sdtSimulacion>
      </bts:BTPrestamos.SimularOfertas>
   </soapenv:Body>
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularOfertas=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4\' \
  -d \'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "324915377F955E77534D3E02"
	},
    "clienteUId": "1",
	"sdtSimulacion": {
		"fechaPrimerPago": "2020-05-05",
		"monto": "1000",
		"periodoCuotas": "30",
		"productoUId": "43",
		"cuotas": {
		  "sBTCuota": {  
			"cantidadCuotas": "12"  
			}
		}
	}
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularOfertasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>52005b89a6F955E77534D3E0</Token>
         </Btinreq>
         <simulacionUId>39</simulacionUId>
         <sdtOfertasPrestamo>
            <sBTOfertaPrestamo>
               <otrosConceptos>0.00</otrosConceptos>
               <fechaValor>2019-11-25</fechaValor>
               <capital>1000.00</capital>
               <totalComisiones>0.00</totalComisiones>
               <valorCuota>101.81</valorCuota>
               <cantidadCuotas>12</cantidadCuotas>
               <tasa>23.000000</tasa>
               <totalSeguros>0.00</totalSeguros>
               <fechaPrimerPago>2020-05-05</fechaPrimerPago>
               <totalIntereses>221.74</totalIntereses>
               <fechaVencimiento>2021-04-05</fechaVencimiento>
               <tea>25.590075</tea>
               <plazo>497</plazo>
               <totalAPagar>1221.74</totalAPagar>
               <totalImpuestos>0.00</totalImpuestos>
               <cft>25.030000</cft>
            </sBTOfertaPrestamo>
         </sdtOfertasPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>677</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularOfertas</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-04-23</Fecha>
            <Hora>16:17:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularOfertasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    json: `
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "BANTOTAL", 
        "Token": "324915377F955E77534D3E02", 
        "Device": "AC" 
    },
	"simulacionUId": 39, 
	"sdtOfertasPrestamo": { 
		"sBTOfertaPrestamo": { 
		  "otrosConceptos": "0.00", 
		  "fechaValor": "2019-11-25", 
		  "capital": "1000.00", 
		  "totalComisiones": "0.00", 
		  "valorCuota": "101.81", 
		  "cantidadCuotas": "12", 
		  "tasa": "23.000000", 
		  "totalSeguros": "0.00", 
		  "fechaPrimerPago": "2020-05-05", 
		  "totalIntereses": "221.74", 
		  "fechaVencimiento": "2021-04-05", 
		  "tea": "25.590075", 
		  "plazo": "497", 
		  "totalAPagar": "1221.74", 
		  "totalImpuestos": "0.00", 
		  "cft": "25.030000" 
		} 
	},
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPrestamos.SimularOfertas", 
        "Fecha": "2019-11-19", 
        "Hora": "13:05:22", 
        "Requerimiento": "", 
        "Numero": 6924, 
        "Estado": "OK" 
    } 
}` }
  };

  structuredTypes = [{ typeName: 'sBTDatosSimulacion', fields: [{ Nombre: 'cuotas', Tipo: '[sBTCuota](#sbtcuota)', Comentarios: 'Colección de cantidad de cuotas para simular.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'monto', Tipo: 'Double', Comentarios: 'Monto del préstamo.' }, { Nombre: 'periodoCuotas', Tipo: 'Int', Comentarios: 'Período entre cuotas.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único del producto.' }] }, { typeName: 'sBTCuota', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de cuotas.' }] }, { typeName: 'sBTOfertaPrestamo', fields: [{ Nombre: 'cantidadCuotas', Tipo: 'Int', Comentarios: 'Cantidad de las cuotas.' }, { Nombre: 'capital', Tipo: 'Double', Comentarios: 'Capital del préstamo.' }, { Nombre: 'cft', Tipo: 'Double', Comentarios: 'CFT del préstamo.' }, { Nombre: 'fechaPrimerPago', Tipo: 'Date', Comentarios: 'Fecha de primer pago.' }, { Nombre: 'fechaValor', Tipo: 'Date', Comentarios: 'Fecha valor.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento.' }, { Nombre: 'otrosConceptos', Tipo: 'Double', Comentarios: 'Monto para otros conceptos.' }, { Nombre: 'plazo', Tipo: 'Int', Comentarios: 'Plazo para el préstamo.' }, { Nombre: 'tasa', Tipo: 'Double', Comentarios: 'Tasa del préstamo.' }, { Nombre: 'tea', Tipo: 'Double', Comentarios: 'TEA del préstamo.' }, { Nombre: 'totalAPagar', Tipo: 'Double', Comentarios: 'Total a pagar.' }, { Nombre: 'totalComisiones', Tipo: 'Double', Comentarios: 'Monto total para comisiones.' }, { Nombre: 'totalImpuestos', Tipo: 'Double', Comentarios: 'Monto total para impuestos.' }, { Nombre: 'totalIntereses', Tipo: 'Double', Comentarios: 'Monto total para intereses.' }, { Nombre: 'totalSeguros', Tipo: 'Double', Comentarios: 'Monto total para seguros.' }, { Nombre: 'valorCuota', Tipo: 'Double', Comentarios: 'Valor cuota.' }] }];
}
