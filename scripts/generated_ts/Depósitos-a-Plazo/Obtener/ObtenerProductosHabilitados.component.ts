import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerProductosHabilitados',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProductosHabilitadosComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Productos Habilitados';
  description = `Metodo para obtener un listado de los productos de deposito a plazo habilitados.`;
  pubName    = 'BTDepositoAPlazo.ObtenerProductosHabilitados';
  programa   = 'RBTPG447';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['tipoDeProducto'];
  inputData  = [{ Nombre: 'tipoDeProducto', Tipo: 'String', Comentarios: 'Tipo de producto (VTO: Vencimiento, PP: Pago periodico).' }];
  outputCols = ['sdtProductosDepositoAPlazo'];
  outputData = [{ Nombre: 'sdtProductosDepositoAPlazo', Tipo: '[sBTProductosDepositoAPlazo](#sbtproductosdepositoaplazo)', Comentarios: 'Listado de productos habilitados.' }];
  errorCols  = [];
  errors     = [];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTDepositosAPlazo.ObtenerProductosHabilitados>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>30F74741A02C318CEFD55684</bts:Token>
            <bts:Device>GL</bts:Device>
         </bts:Btinreq>
         <bts:tipoDeProducto></bts:tipoDeProducto>
      </bts:BTDepositosAPlazo.ObtenerProductosHabilitados>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
   "Btinreq": {
            "Canal": "BTDIGITAL",
            "Requerimiento": 1,
            "Usuario": "INSTALADOR",
            "Token": "30F74741A02C318CEFD55684",
            "Device": "GL"
         },
         "tipoDeProducto": ""
      }'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTDepositosAPlazo.ObtenerProductosHabilitados xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>30F74741A02C318CEFD55684</Token>
            <Device>GL</Device>
         </Btinreq>
         <sBTProductosDepositoAPlazo>
            <Producto>
               <Producto>
                  <productoUId>132</productoUId>
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.</nombre>
                  <moneda>S/.</moneda>
                  <papel>$</papel>
               </Producto>
               <tipoDeDeposito>PP</tipoDeDeposito>
               <DatosExtendidos></DatosExtendidos>
            </Producto>
         </sBTProductosDepositoAPlazo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTDepositosAPlazo.ObtenerProductosHabilitados</Servicio>
            <Fecha>2022-11-29</Fecha>
            <Hora>10:40:47</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>496</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTDepositosAPlazo.ObtenerProductosHabilitados>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
          "Canal": "BTDIGITAL",
          "Requerimiento": 1,
          "Usuario": "INSTALADOR",
          "Token": "30F74741A02C318CEFD55684",
          "Device": "GL"
        },
        "sBTProductosDepositoAPlazo": {
          "Producto": {
            "Producto": {
              "productoUId": 132,
              "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.",
              "moneda": "S/.",
              "papel": "$"
            },
            "tipoDeDeposito": "PP",
            "DatosExtendidos": ""
          }
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTDepositosAPlazo.ObtenerProductosHabilitados",
          "Fecha": "2022-11-29",
          "Hora": "10:40:47",
          "Requerimiento": 1,
          "Numero": 496,
          "Estado": "OK"
        }
      }'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'datosExtendidos', Tipo: '[sBTDatoExtendido](#sbtdatoextendido)', Comentarios: 'Listado de datos complementarios.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Simbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Simbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador unico de producto.' }, { Nombre: 'tipoDeDeposito', Tipo: 'String', Comentarios: 'Tipo de deposito. (VTO: Vencimiento, PP: Pago periodico).' }, { Nombre: '### sBTDatoExtendido', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'clave', Tipo: 'String', Comentarios: 'Clave del dato extendido.' }, { Nombre: 'lista', Tipo: '[sBTDatoLista](#sbtdatolista)', Comentarios: 'Lista de datos' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de dato extendido.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de dato extendido.' }, { Nombre: '### sBTDatoLista', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTDatoLista son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de informacion adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de informacion adicional.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
