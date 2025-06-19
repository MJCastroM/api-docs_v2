import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerFacultades',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerFacultadesComponent1750272791577 {
  pageTitle        = 'Obtener Facultades';
  description      = `Método para obtener un listado de las facultades de una persona.`;
  pubName    = 'BTPersonas.ObtenerFacultades';
  programa   = 'RBTPG453';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personasUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  outputData = [{ Nombre: 'sdtFacultades', Tipo: '[sBTFacultadesPersona](#sbtfacultadespersona)', Comentarios: 'Listado de datos de facultades.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió el identificador único de persona.' }, { Codigo: '30006', Descripcion: 'No se recuperó la persona  para el Identificador: [Número de identificador].' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerFacultades>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>5f7c5e6a6f99865B3A2E76CF</bts:Token>
         </bts:Btinreq>
         <bts:personasUId>183</bts:personasUId>
      </bts:BTPersonas.ObtenerFacultades>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerDatos\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
  -d \'{
	"Btinreq": {
          "Requerimiento": 0,
          "Canal": "BTDIGITAL",
          "Device": "GZ",
          "Usuario": "INSTALADOR",
          "Token": "5f7c5e6a6f99865B3A2E76CF"
        },
        "personaUId": 183
	}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerFacultadesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>5f7c5e6a6f99865B3A2E76CF</Token>
         </Btinreq>
         <sdtFacultades>
            <facultadesOperacion>
               <SdtsBTFacultadPersonaOperacion>
                  <producto>
                     <papel>$</papel>
                     <moneda>$</moneda>
                     <productoUId>41</productoUId>
                     <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                  </producto>
                  <descripcion>Retiro de cuentas vista</descripcion>
                  <operacionUId>1011</operacionUId>
                  <tipo>Persona</tipo>
                  <potestad>Titular</potestad>
                  <grupo>
                     <numero>1</numero>
                     <monto>0.00</monto>
                     <moneda>$</moneda>
                     <papel>$</papel>
                     <vigenciaHasta/>
                     <codigoMoneda>0</codigoMoneda>
                     <vigenciaDesde>2018-11-05</vigenciaDesde>
                     <codigoPapel>0</codigoPapel>
                  </grupo>
                  <codigo>2</codigo>
                  <categoria>-</categoria>
               </SdtsBTFacultadPersonaOperacion>
            </facultadesOperacion>
            <facultadesCliente>
               <SdtsBTFacultadPersonaCliente>
                  <clienteUId>340</clienteUId>
                  <descripcion>Firma de Cheques</descripcion>
                  <potestad>Titular</potestad>
                  <tipo>Categoría</tipo>
                  <grupo>
                     <numero>1</numero>
                     <monto>2000000.00</monto>
                     <moneda>$</moneda>
                     <papel>$</papel>
                     <vigenciaHasta>2022-09-23</vigenciaHasta>
                     <codigoMoneda>0</codigoMoneda>
                     <vigenciaDesde>2018-12-10</vigenciaDesde>
                     <codigoPapel>0</codigoPapel>
                  </grupo>
                  <codigo>4</codigo>
                  <categoria>A</categoria>
               </SdtsBTFacultadPersonaCliente>
            </facultadesCliente>
         </sdtFacultades>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>2957</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPersonas.ObtenerFacultades</Servicio>
            <Fecha>2023-03-27</Fecha>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:40:36</Hora>
         </Btoutreq>
      </BTPersonas.ObtenerFacultadesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
\'{
	"Btinreq": {
          "Device": "GZ",
          "Usuario": "Instalador",
          "Requerimiento": "0",
          "Canal": "BTDIGITAL",
          "Token": "5f7c5e6a6f99865B3A2E76CF"
        },
        "sdtFacultades": {
          "facultadesOperacion": {
            "SdtsBTFacultadPersonaOperacion": {
              "producto": {
                "papel": "$",
                "moneda": "$",
                "productoUId": "41",
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
              },
              "descripcion": "Retiro de cuentas vista",
              "operacionUId": "1011",
              "tipo": "Persona",
              "potestad": "Titular",
              "grupo": {
                "numero": "1",
                "monto": "0.00",
                "moneda": "$",
                "papel": "$",
                "vigenciaHasta": {
                  "-self-closing": "true"
                },
                "codigoMoneda": "0",
                "vigenciaDesde": "2018-11-05",
                "codigoPapel": "0"
              },
              "codigo": "2",
              "categoria": "-"
            }
          },
          "facultadesCliente": {
            "SdtsBTFacultadPersonaCliente": {
              "clienteUId": "340",
              "descripcion": "Firma de Cheques",
              "potestad": "Titular",
              "tipo": "Categoría",
              "grupo": {
                "numero": "1",
                "monto": "2000000.00",
                "moneda": "$",
                "papel": "$",
                "vigenciaHasta": "2022-09-23",
                "codigoMoneda": "0",
                "vigenciaDesde": "2018-12-10",
                "codigoPapel": "0"
              },
              "codigo": "4",
              "categoria": "A"
            }
          }
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTPersonas.ObtenerFacultades",
          "Fecha": "2022-11-29",
          "Hora": "10:23:37",
          "Requerimiento": 1,
          "Numero": 486,
          "Estado": "OK"
        }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTFacultadesPersona', fields: [{ Nombre: 'sBTFacultadesCliente', Tipo: '[sBTFacultadPersonaCliente](#sbtfacultadpersonacliente)', Comentarios: 'Listado de datos de cliente.' }, { Nombre: 'sBTFacultadesOperacion', Tipo: '[sBTFacultadPersonaOperacion](#sbtfacultadpersonaoperacion)', Comentarios: 'Listado de datos de operación.' }, { Nombre: '### sBTFacultadPersonaCliente', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTFacultadPersonaCliente son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'categoria', Tipo: 'String', Comentarios: 'Categoría.' }, { Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador único del cliente.' }, { Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Código.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'grupo', Tipo: '[sBTFacultadGrupoPersona](#sbtfacultadgrupopersona)', Comentarios: 'Listado de grupos de la facultad.' }, { Nombre: 'potestad', Tipo: 'String', Comentarios: 'Potestad.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo.' }, { Nombre: '### sBTFacultadPersonaOperacion', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTFacultadPersonaOperacion son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'categoria', Tipo: 'String', Comentarios: 'Categoria.' }, { Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Código.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'grupo', Tipo: '[sBTFacultadGrupoPersona](#sbtfacultadgrupopersona)', Comentarios: 'Listado de grupos de la facultad.' }, { Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de la operación.' }, { Nombre: 'potestad', Tipo: 'String', Comentarios: 'Potestad.' }, { Nombre: 'producto', Tipo: '[sBTProducto](#sbtproducto)', Comentarios: 'Datos de producto.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo.' }, { Nombre: '### sBTFacultadGrupoPersona', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTFacultadGrupoPersona son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'codigoMoneda', Tipo: 'Int', Comentarios: 'Código de moneda.' }, { Nombre: 'codigoPapel', Tipo: 'Int', Comentarios: 'Código de papel.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Moneda.' }, { Nombre: 'monto', Tipo: 'Decimal', Comentarios: 'Monto.' }, { Nombre: 'numero', Tipo: 'Short', Comentarios: 'Número de grupo.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Papel.' }, { Nombre: 'vigenciaDesde', Tipo: 'Date', Comentarios: 'Fecha de vigencia desde.' }, { Nombre: 'vigenciaHasta', Tipo: 'Date', Comentarios: 'Fecha de vigencia hasta.' }, { Nombre: '### sBTProducto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTFacultadPersonaCliente', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTFacultadPersonaOperacion', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTFacultadGrupoPersona', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTProducto', fields: [{ Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de la moneda.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre del producto.' }, { Nombre: 'otrosConceptos', Tipo: '[sBTConcepto](#sbtconcepto)', Comentarios: 'Datos de otros conceptos.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Símbolo del papel.' }, { Nombre: 'productoUId', Tipo: 'Long', Comentarios: 'Identificador único de producto.' }, { Nombre: '### sBTConcepto', Tipo: '', Comentarios: '' }] }, { typeName: 'sBTConcepto', fields: [{ Nombre: 'concepto', Tipo: 'String', Comentarios: 'Concepto.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto.' }, { Nombre: 'valor', Tipo: 'Double', Comentarios: 'Importe.' }] }];
}
