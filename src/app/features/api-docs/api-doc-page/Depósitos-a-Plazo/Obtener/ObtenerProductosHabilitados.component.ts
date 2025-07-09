import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerProductosHabilitados',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerProductosHabilitadosComponent1751987197555 {
  pageTitle        = 'Obtener Productos Habilitados';
  description      = `Método para obtener un listado de los productos de depósito a plazo habilitados.`;
  pubName    = 'BTDepositoAPlazo.ObtenerProductosHabilitados';
  programa   = 'RBTPG447';
  scope      = 'Global';

  hasBackendConfig = true;
  backendText      = `Para configurar los productos habilitados, se debe agregar un registro en la guía especial 70100 para cada producto de la siguiente manera: 

Campo | Valor 
:--------- | :-----------  
Correlativo 1 | Valor incremental. 
Correlativo 2 | Módulo. 
Correlativo 3 | Tipo de operación. 
Valor específico 1 | Moneda. 
Valor específico 2 | Papel. 
Valor específico 3 | Tipo de producto (1- Depósito al vencimiento, 2- Pago periódico de intereses). 
Importe específico 1 | Tipo de día para el cálculo del plazo (1 - Comercial, 2 - Calendario). 
Importe específico 2 | Tipo de año para el cálculo de intereses (1 - Comercial, 2 - Calendario).
Importe específico 3 | Ajuste de día al vencimiento (0 - No ajusta, 1 - Ajuste día anterior, 2 - Ajuste día posterior).
:::`;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tipoDeProducto', Tipo: 'String', Comentarios: 'Tipo de producto (VTO: Vencimiento, PP: Pago periódico).' }];
  outputData = [{ Nombre: 'sdtProductosDepositoAPlazo', Tipo: '[sBTProductosDepositoAPlazo](#sbtproductosdepositoaplazo)', Comentarios: 'Listado de productos habilitados.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
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
</soapenv:Envelope>`,
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
   "Btinreq": {
            "Canal": "BTDIGITAL",
            "Requerimiento": 1,
            "Usuario": "INSTALADOR",
            "Token": "30F74741A02C318CEFD55684",
            "Device": "GL"
         },
         "tipoDeProducto": ""
      }\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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
</SOAP-ENV:Envelope>`,
    json: `
\'{
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
      }\'` }
  };

  structuredTypes = [{ typeName: 'sBTProductosDepositoAPlazo', fields: [{ Nombre: 'datosExtendidos', Tipo: '[sBTDatoExtendido](#sbtdatoextendido)', Comentarios: 'Listado de datos complementarios.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: 'tipoDeDeposito', Tipo: 'String', Comentarios: 'Tipo de depósito. (VTO: Vencimiento, PP: Pago periódico).' }] }, { typeName: 'sBTDatoExtendido', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Clave del dato extendido.' }, { Nombre: 'lista', Tipo: '[sBTDatoLista](#sbtdatolista)', Comentarios: 'Lista de datos' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo de dato extendido.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de dato extendido.' }] }, { typeName: 'sBTDatoLista', fields: [{ Nombre: 'clave', Tipo: 'String', Comentarios: 'Identificador de información adicional.' }, { Nombre: 'valor', Tipo: 'String', Comentarios: 'Valor de información adicional.' }] }];
}
