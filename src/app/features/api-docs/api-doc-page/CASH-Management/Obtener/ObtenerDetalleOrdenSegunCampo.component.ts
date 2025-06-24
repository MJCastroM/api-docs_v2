import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDetalleOrdenSegunCampo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDetalleOrdenSegunCampoComponent1750713393212 {
  pageTitle        = 'Obtener Detalle de Orden Según Campo';
  description      = `Método para obtener la información de las líneas del detalle de pago para la orden que coincida con el campo/valor recibido.`;
  pubName    = 'BTCASHManagement.ObtenerDetalleOrdenSegunCampo';
  programa   = 'RBTPGC26';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'contratoId', Tipo: 'Int', Comentarios: 'Identificador del Contrato CASH del Cliente.' }, { Nombre: 'servicioId', Tipo: 'Short', Comentarios: 'Servicio CASH.' }, { Nombre: 'sdtValorCampoBusqueda', Tipo: '[sBTValorCampoCASH](#sbtvalorcampocash)', Comentarios: 'Valor del campo CASH a buscar.' }];
  outputData = [{ Nombre: 'ordenId', Tipo: 'Long', Comentarios: 'Identificador de orden CASH.' }, { Nombre: 'numeroLineaOrden', Tipo: 'Int', Comentarios: 'Número de línea de orden CASH.' }, { Nombre: 'cuentaDebito', Tipo: 'Long', Comentarios: 'Operación de débito.' }, { Nombre: 'cantidadLineas', Tipo: 'Int', Comentarios: 'Cantidad de lineas.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Moneda.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe total.' }, { Nombre: 'referencia', Tipo: 'String', Comentarios: 'Referencia del pago o cobro.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha del pago.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado.' }, { Nombre: 'erroresPago', Tipo: 'String', Comentarios: 'Lista de mensajes de error del cabezal de pago.' }, { Nombre: 'detallePagos', Tipo: '[sBTDetallePago](#sbtdetallepago)', Comentarios: 'Listado del detalle de pago.' }];
  errors     = [{ Codigo: '1030754', Descripcion: 'El campo de búsqueda no existe en el servicio recibido.' }, { Codigo: '1030755', Descripcion: 'No se encontró la orden para el campo/valor recibido.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
	<soapenv:Header/>
	<soapenv:Body>
		<bts:BTCASHManagement.ObtenerDetalleOrdenSegunCampo>
			<bts:Btinreq>
				<bts:Device>1</bts:Device>
				<bts:Usuario>INSTALADOR</bts:Usuario>
				<bts:Requerimiento>1</bts:Requerimiento>
				<bts:Canal>BTDIGITAL</bts:Canal>
				<bts:Token>E0193ABA3B6E2D5976E40FA3</bts:Token>
			</bts:Btinreq>
			<bts:contratoId>2</bts:contratoId>
			<bts:servicioId>200</bts:servicioId>
			<bts:sdtValorCampoBusqueda>
				<bts:tag>CTABENEF</bts:tag>
				<bts:valor>00000002800001</bts:valor>
			</bts:sdtValorCampoBusqueda>
		</bts:BTCASHManagement.ObtenerDetalleOrdenSegunCampo>
	</soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement?ObtenerDetalleOrdenSegunCampo=\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961\' \
  -d \'{
    "Btinreq": {
          "Requerimiento": "1",
          "Device": "AC",
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "contratoId": 2,
    "servicioId": 200,
    "sdtValorCampoBusqueda": {
         "tag": "CTABENEF",
         "valor": 2800001
      }
  }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCASHManagement.ObtenerValoresOrdenSegunCampoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Usuario>INSTALADOR</Usuario>
            <Device>1</Device>
            <Requerimiento>1</Requerimiento>
            <Token>F971DE0C3D4C96A5ABC22DAD</Token>
         </Btinreq>
         <ordenId>354</ordenId>
         <numeroLineaOrden>1</numeroLineaOrden>
         <valoresCampoCASH>
            <sBTValorCampoCASH>
               <tag/>
               <valor/>
            </sBTValorCampoCASH>
         </valoresCampoCASH>
         <Erroresnegocio/>
         <Btoutreq>
            <Estado>OK</Estado>
            <Fecha>2024-11-19</Fecha>
            <Hora>09:01:15</Hora>
            <Numero>26093</Numero>
            <Servicio>BTCASHManagement.ObtenerValoresOrdenSegunCampo</Servicio>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTCASHManagement.ObtenerValoresOrdenSegunCampoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>


<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<SOAP-ENV:Body>
		<BTCASHManagement.ObtenerDetalleOrdenSegunCampoResponse
			xmlns=http://uy.com.dlya.bantotal/BTSOA/>
			<Btinreq>
				<Device>1</Device>
				<Usuario>INSTALADOR</Usuario>
				<Requerimiento>1</Requerimiento>
				<Canal>BTDIGITAL</Canal>
				<Token>E0193ABA3B6E2D5976E40FA3</Token>
			</Btinreq>
			<ordenId>452</ordenId>
			<numeroLineaOrden>1</numeroLineaOrden>
			<cuentaDebito>194</cuentaDebito>
			<cantidadLineas>1</cantidadLineas>
			<moneda>0</moneda>
			<importe>1231.0</importe>
			<referencia/>
			<fechaPago>2025-05-27</fechaPago>
			<estado>Z</estado>
			<erroresPago>
				<item>Atención. No se obtuvo transacción para devolución.</item>
			</erroresPago>
			<detallePagos>
				<sBTDetallePago>
					<moneda>0</moneda>
					<beneficiarioCuenta>28001</beneficiarioCuenta>
					<estado>X</estado>
					<beneficiarioBanco>Pionero Bantotal</beneficiarioBanco>
					<importe>1231.0</importe>
					<beneficiarioId/>
					<mensajesError>
						<item>Error en ejecución de Proceso. Cancelación.</item>
					</mensajesError>
					<fechaPago>2025-05-27</fechaPago>
					<nombre>SOSA ANA</nombre>
				</sBTDetallePago>
			</detallePagos>
			<Erroresnegocio></Erroresnegocio>
			<Btoutreq>
				<Numero>35123</Numero>
				<Estado>OK</Estado>
				<Servicio>BTCASHManagement.ObtenerDetalleOrdenSegunCampo</Servicio>
				<Requerimiento>1</Requerimiento>
				<Fecha>2025-05-07</Fecha>
				<Canal>BTDIGITAL</Canal>
				<Hora>17:27:58</Hora>
			</Btoutreq>
		</BTCASHManagement.ObtenerDetalleOrdenSegunCampoResponse>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
    "Btinreq": {
      "Device": "AC",
      "Usuario": "MINSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "6fc29caa9d4A8B5C60A82434"
    },
    "ordenId": 452,
      "numeroLineaOrden": 1,
      "cuentaDebito": 194,
      "cantidadLineas": 1,
      "moneda": 0,
      "importe": 1231,
      "referencia": "",
      "fechaPago": "2025-05-27",
      "estado": "Z",
      "erroresPago": {
        "item": "Atención. No se obtuvo transacción para devolución."
      },
      "detallePagos": {
        "sBTDetallePago": {
          "moneda": 0,
          "beneficiarioCuenta": 28001,
          "estado": "X",
          "beneficiarioBanco": "Pionero Bantotal",
          "importe": 1231,
          "beneficiarioId": "",
          "mensajesError": {
            "item": "Error en ejecución de Proceso. Cancelación."
          },
          "fechaPago": "2025-05-27",
          "nombre": "SOSA ANA"
        }
      },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
      "Numero": "10403",
      "Estado": "OK",
      "Servicio": "BTCASHManagement.ObtenerDetalleOrdenSegunCampo",
      "Fecha": "2021-01-29",
      "Requerimiento": "1",
      "Hora": "13:10:17",
      "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTValorCampoCASH', fields: [{ Nombre: 'tag', Tipo: 'String', Comentarios: 'Tag del campo CASH.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor del campo CASH.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTDetallePago', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTDetallePago', fields: [{ Nombre: 'beneficiarioBanco', Tipo: 'String', Comentarios: 'Banco del Beneficiario.' }, { Nombre: 'beneficiarioCuenta', Tipo: 'String', Comentarios: 'Cuenta del Beneficiario.' }, { Nombre: 'beneficiarioId', Tipo: 'String', Comentarios: 'Identificador de Beneficiario.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Estado de la línea.' }, { Nombre: 'fechaPago', Tipo: 'Date', Comentarios: 'Fecha de Pago o Cobro.' }, { Nombre: 'importe', Tipo: 'Double', Comentarios: 'Importe.' }, { Nombre: 'mensajesError', Tipo: 'String', Comentarios: 'Lista de mensajes de la línea.' }, { Nombre: 'moneda', Tipo: 'Short', Comentarios: 'Moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del Beneficiario de Pago.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
