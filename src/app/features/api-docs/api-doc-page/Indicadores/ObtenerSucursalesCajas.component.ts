import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerSucursalesCajas',
  templateUrl: '../DocTemplate.component.html',
  styleUrls: ['../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerSucursalesCajasComponent1750268696343 {
  pageTitle        = 'Obtener Sucursales Cajas';
  description      = `Método para obtener porcentajes y listados de sucursales y cajas del sistema.`;
  pubName    = 'BTIndicadores.ObtenerSucursalesCajas';
  programa   = 'RBTPG705';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'totalSucursales', Tipo: 'Int', Comentarios: 'Número total de sucursales.' }, { Nombre: 'sucursalesCerradas', Tipo: 'Int', Comentarios: 'Número de sucursales cerradas.' }, { Nombre: 'sucursalesAbiertas', Tipo: 'Int', Comentarios: 'Número de sucursales abiertas.' }, { Nombre: 'porcentajeSucursalesC', Tipo: 'Int', Comentarios: 'Porcentaje de sucursales cerradas.' }, { Nombre: 'porcentajeSucursalesA', Tipo: 'Int', Comentarios: 'Porcentaje de sucursales abiertas.' }, { Nombre: 'listadoSucursalesC', Tipo: '[sBTSucursal](#sbtsucursal)', Comentarios: 'Listado de sucursales cerradas.' }, { Nombre: 'listadoSucursalesA', Tipo: '[sBTSucursal](#sbtsucursal)', Comentarios: 'Listado de sucursales abiertas.' }, { Nombre: 'totalCajas', Tipo: 'Int', Comentarios: 'Número total de cajas.' }, { Nombre: 'cajasCerradas', Tipo: 'Int', Comentarios: 'Número de cajas cerradas.' }, { Nombre: 'cajasAbiertas', Tipo: 'Int', Comentarios: 'Número de cajas abiertas.' }, { Nombre: 'porcentajeCajasC', Tipo: 'Int', Comentarios: 'Porcentaje de cajas cerradas.' }, { Nombre: 'porcentajeCajasA', Tipo: 'Int', Comentarios: 'Porcentaje de cajas abiertas.' }, { Nombre: 'listadoCajasC', Tipo: '[sBTCaja](#sbtcaja)', Comentarios: 'Listado de cajas cerradas.' }, { Nombre: 'listadoCajasA', Tipo: '[sBTCaja](#sbtcaja)', Comentarios: 'Listado de cajas abiertas.' }];
  errors     = [];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTIndicadores.ObtenerSucursalesCajas>
         <bts:Btinreq>
           <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>?</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTIndicadores.ObtenerSucursalesCajas>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerSucursalesCajas\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
   "Btinreq": {
      "Device": 1,
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7",
      "Usuario": "INSTALADOR",
      "Requerimiento": "?"
   }
}\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTIndicadores.ObtenerSucursalesCajasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>?</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>959C2E0AEF210ABC0D8AA8F7</Token>
         </Btinreq>
         <sdtSucursalesCajas>
            <cajasCerradas>0</cajasCerradas>
            <porcentajeCajasA>100.00</porcentajeCajasA>
            <listadoCajasA>
               <sBTCaja>
                  <usuario>ASESOR</usuario>
                  <nombre>ASESOR</nombre>
                  <indicador>400</indicador>
                  <sucursalId>1</sucursalId>
               </sBTCaja>
               ...
            </listadoCajasA>
            ...
         </sdtSucursalesCajas>
         ...
      </BTIndicadores.ObtenerSucursalesCajasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
   "Btinreq": {
      "Device": 1,
      "Usuario": "INSTALADOR",
      "Requerimiento": "?",
      "Canal": "BTDIGITAL",
      "Token": "959C2E0AEF210ABC0D8AA8F7"
   },
   "sdtSucursalesCajas": {
      "cajasCerradas": 0,
      "porcentajeCajasA": 100,
      "listadoCajasA": {
      "sBTCaja": [
         {
            "usuario": "ASESOR",
            "nombre": "ASESOR",
            "indicador": 400,
            "sucursalId": 1
         },
         ...
      ]
      },
      ...
   },
   ...
}` }
  };

  structuredTypes = [{ typeName: 'sBTSucursal', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de la sucursal.' }, { Nombre: 'direccion', Tipo: 'String', Comentarios: 'Dirección de la sucursal.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador de sucursal.' }, { Nombre: 'latitud', Tipo: 'Int', Comentarios: 'Latitud de la sucursal.' }, { Nombre: 'longitud', Tipo: 'Int', Comentarios: 'Longitud de la sucursal.' }, { Nombre: 'telefono', Tipo: 'String', Comentarios: 'Teléfono de la sucursal.' }] }, { typeName: 'sBTCaja', fields: [{ Nombre: 'indicador', Tipo: 'Int', Comentarios: 'Indicador de la caja.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre de la caja.' }, { Nombre: 'sucursalId', Tipo: 'Int', Comentarios: 'Identificador de la sucursal.' }, { Nombre: 'usuario', Tipo: 'String', Comentarios: 'Usuario de la caja.' }] }];
}
