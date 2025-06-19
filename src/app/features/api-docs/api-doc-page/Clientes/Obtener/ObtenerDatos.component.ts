import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerDatos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerDatosComponent1750272790900 {
  pageTitle        = 'Obtener Datos';
  description      = `Método para obtener datos de un cliente.`;
  pubName    = 'BTClientes.ObtenerDatos';
  programa   = 'RBTPG441';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único de cliente.' }];
  outputData = [{ Nombre: 'sdtDatosCuentaCliente', Tipo: '[sBTDatosCuentaCliente](#sbtdatoscuentacliente)', Comentarios: 'Datos de la cuenta cliente.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador de cliente.' }, { Codigo: '30002', Descripcion: 'No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].' }, { Codigo: '40001', Descripcion: 'No existe titular representativo para la cuenta.' }, { Codigo: '40099', Descripcion: 'La cuenta fue dada de baja.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTCliente.ObtenerDatos>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>papa</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>8A7B3C4E6F4A275BC67245E5</bts:Token>
         </bts:Btinreq>
         <bts:clienteUID>10010</bts:clienteUID>
      </bts:BTCliente.ObtenerDatos>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos\' \
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
		"clienteUID": 10010
	}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrueba.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>0</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>50F9EC89DBFA778E70454A66</Token>
            <Device>papa</Device>
         </Btinreq>
         <sdtDatosCuentaCliente>
            <empresaId>1</empresaId>
            <cuentaBT>27</cuentaBT>
            <fechaAlta>2015-12-23</fechaAlta>
            <nombre>PRANKA ERIKA</nombre>
            <sucursalId>1000</sucursalId>
            <sucursal>Casa Matriz</sucursal>
            <asesorId>0</asesorId>
            <asesor/>
            <ejecutivoId>1</ejecutivoId>
            <ejecutivo>Instalador</ejecutivo>
            <clasificacionInternaId>43</clasificacionInternaId>
            <clasificacionInterna>Venta. Art. x menor Ferreteria</clasificacionInterna>
            <fechaVtoClasificacion>2018-12-14</fechaVtoClasificacion>
            <segmentoId>1</segmentoId>
            <segmento>Independiente</segmento>
            <actividadLaboralId>14100</actividadLaboralId>
            <actividadLaboral>14100 Extracción de piedra, arena y arcilla</actividadLaboral>
            <sectorId>1</sectorId>
            <sector>Privado no Financiero</sector>
            <residente>S</residente>
            <empleado>N</empleado>
            <proveedor>N</proveedor>
            <retenerCorrespondencia>N</retenerCorrespondencia>
            <correoElectronico>ZEPORAYTE@HOTMAIL.COM.UY</correoElectronico>
            <estado>Inhabilitada</estado>
            <estadoId>3</estadoId>
         </sdtDatosCuentaCliente>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrueba.ObtenerDatos</Servicio>
            <Fecha>2022-11-15</Fecha>
            <Hora>14:04:48</Hora>
            <Requerimiento>0</Requerimiento>
            <Numero>438</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrueba.ObtenerDatosResponse>
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
    "sdtDatosCuentaCliente": {
          "empresaId": 1,
          "cuentaBT": 27,
          "fechaAlta": "2015-12-23",
          "nombre": "PRANKA ERIKA",
          "sucursalId": 1000,
          "sucursal": "Casa Matriz",
          "asesorId": 0,
          "asesor": "",
          "ejecutivoId": 1,
          "ejecutivo": "Instalador",
          "clasificacionInternaId": 43,
          "clasificacionInterna": "Venta. Art. x menor Ferreteria",
          "fechaVtoClasificacion": "2018-12-14",
          "segmentoId": 1,
          "segmento": "Independiente",
          "actividadLaboralId": 14100,
          "actividadLaboral": "14100 Extracción de piedra, arena y arcilla",
          "sectorId": 1,
          "sector": "Privado no Financiero",
          "residente": "S",
          "empleado": "N",
          "proveedor": "N",
          "retenerCorrespondencia": "N",
          "correoElectronico": "ZEPORAYTE@HOTMAIL.COM.UY",
          "estado": "Inhabilitada",
          "estadoId": 3
        },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "401",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerDatos",
        "Fecha": "2018-05-03",
        "Requerimiento": "1",
        "Hora": "11:10:49",
        "Canal": "BTDIGITAL"
    }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTDatosCuentaCliente', fields: [{ Nombre: 'actividadLaboral', Tipo: 'String', Comentarios: 'Descripción de la actividad laboral.' }, { Nombre: 'actividadLaboralId', Tipo: 'Int', Comentarios: 'Identificador de la actividad laboral.' }, { Nombre: 'asesor', Tipo: 'String', Comentarios: 'Nombre del asesor.' }, { Nombre: 'asesorId', Tipo: 'Int', Comentarios: 'Identificador del asesor.' }, { Nombre: 'clasificacionInterna', Tipo: 'String', Comentarios: 'Descripción de clasificación interna.' }, { Nombre: 'clasificacionInternaId', Tipo: 'Int', Comentarios: 'Identificador de clasificación interna.' }, { Nombre: 'correoElectronico', Tipo: 'String', Comentarios: 'Correo electrónico.' }, { Nombre: 'cuentaBT', Tipo: 'Int', Comentarios: 'Cuenta Bantotal.' }, { Nombre: 'ejecutivo', Tipo: 'String', Comentarios: 'Nombre del ejecutivo.' }, { Nombre: 'ejecutivoId', Tipo: 'Int', Comentarios: 'Identificador del ejecutivo.' }, { Nombre: 'empleado', Tipo: 'String', Comentarios: '¿Es empleado de la institución? (S/N).' }, { Nombre: 'empresaId', Tipo: 'Int', Comentarios: 'Identificador de empresa.' }, { Nombre: 'estado', Tipo: 'String', Comentarios: 'Descripción de estado.' }, { Nombre: 'estadoId', Tipo: 'Int', Comentarios: 'Identificador de estado.' }, { Nombre: 'fechaAlta', Tipo: 'Date', Comentarios: 'Fecha del alta.' }, { Nombre: 'fechaVtoClasificacion', Tipo: 'Date', Comentarios: 'Fecha de vencimiento de clasificación.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del cliente.' }, { Nombre: 'proveedor', Tipo: 'String', Comentarios: '¿Es proveedor? (S/N).' }, { Nombre: 'residente', Tipo: 'String', Comentarios: '¿Es residente? (S/N).' }, { Nombre: 'retenerCorrespondencia', Tipo: 'String', Comentarios: '¿Retiene correspondencia? (S/N).' }, { Nombre: 'sector', Tipo: 'String', Comentarios: 'Descripción del sector.' }, { Nombre: 'sectorId', Tipo: 'Int', Comentarios: 'Identificador de sector.' }, { Nombre: 'segmento', Tipo: 'String', Comentarios: 'Descripción del segmento.' }, { Nombre: 'segmentoId', Tipo: 'Int', Comentarios: 'Identificador de segmento.' }, { Nombre: 'sucursal', Tipo: 'String', Comentarios: 'Nombre de la sucursal.' }, { Nombre: 'sucursalId', Tipo: 'Int', Comentarios: 'Identificador de la sucursal.' }] }];
}
