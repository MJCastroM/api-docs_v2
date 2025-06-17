import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerFacultades',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerFacultadesComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Facultades';
  description = `Metodo para obtener un listado de las facultades de una cuenta cliente.`;
  pubName    = 'BTClientes.ObtenerFacultades';
  programa   = 'RBTPG452';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ['clienteUId'];
  inputData  = [{ Nombre: 'clienteUId', Tipo: 'Long', Comentarios: 'Identificador unico del cliente.' }];
  outputCols = ['sdtFacultades', 'sdtFirmantes'];
  outputData = [{ Nombre: 'sdtFacultades', Tipo: '[sBTFacultad](#sbtfacultad)', Comentarios: 'Listado de datos de facultades.' }, { Nombre: 'sdtFirmantes', Tipo: '[sBTFacultadFirmante](#sbtfacultadfirmante)', Comentarios: 'Listado de datos de firmantes.' }];
  errorCols  = ['30001', '30006', '40003', '40004', '40005'];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibio el identificador unico de cliente.' }, { Codigo: '30006', Descripcion: 'No se recupero la cuenta para el Identificador: [Numero de identificador].' }, { Codigo: '40003', Descripcion: 'No existe registro con la cuenta indicada.' }, { Codigo: '40004', Descripcion: 'No existe registro con el identificador indicado.' }, { Codigo: '40005', Descripcion: 'No se recibio identificador de cuenta a consultar.' }];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerFacultades>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>papa</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>BC79E967434CDFE2512C069E</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>342</bts:clienteUId>
      </bts:BTClientes.ObtenerFacultades>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
          "Requerimiento": 0,
          "Canal": "BTDIGITAL",
          "Device": "papa",
          "Usuario": "INSTALADOR",
          "Token": "BC79E967434CDFE2512C069E"
        },
        "clienteUId": 342
	}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.ObtenerFacultadesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>30F74741A02C318CEFD55684</Token>
            <Device>GL</Device>
         </Btinreq>
         <sdtFacultades>
            <SdtsBTFacultad>
                <grupos></grupos>
                <firmantes></firmantes>
                <descripcion>Firma de Cheques</descripcion>
                <tipo>Categoría</tipo>
                <codigo>1</codigo>
            </SdtsBTFacultad>
            <SdtsBTFacultad>
                <grupos>
                    <SdtsBTFacultadGrupo>
                        <moneda>$</moneda>
                        <codigoMoneda>0</codigoMoneda>
                        <vigenciaHasta>2022-10-04</vigenciaHasta>
                        <monto>99999990.00</monto>
                        <habilitado>S</habilitado>
                        <firmantes>
                            <SdtsBTFacultadFirmante>
                                <potestad>Titular</potestad>
                                <personaUId>161</personaUId>
                                <nombre>AZQUEZ SZENTANDRASI LEJANDRO</nombre>
                                <categoria/>
                            </SdtsBTFacultadFirmante>
                        </firmantes>
                        <codigoPapel>0</codigoPapel>
                        <papel>$</papel>
                        <numero>1</numero>
                        <vigenciaDesde>2020-01-02</vigenciaDesde>
                    </SdtsBTFacultadGrupo>
                </grupos>
                <firmantes></firmantes>
                <descripcion>Retiro de cuentas vista</descripcion>
                <tipo>Persona</tipo>
                <codigo>2</codigo>
            </SdtsBTFacultad>
        </sdtFacultades>
        <sdtFirmantes>
            <SdtsBTFacultadFirmante>
                <potestad>Titular</potestad>
                <personaUId>161</personaUId>
                <nombre>AZQUEZ SZENTANDRASI LEJANDRO</nombre>
                <categoria/>
            </SdtsBTFacultadFirmante>
        </sdtFirmantes>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTClientes.ObtenerFacultades</Servicio>
            <Fecha>2022-11-29</Fecha>
            <Hora>10:23:37</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>486</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTClientes.ObtenerFacultadesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
          "Canal": "BTDIGITAL",
          "Requerimiento": 1,
          "Usuario": "INSTALADOR",
          "Token": "30F74741A02C318CEFD55684",
          "Device": "GL"
        },
        "sdtFacultades": {
          "SdtsBTFacultad": [
            {
              "grupos": "",
              "firmantes": "",
              "descripcion": "Firma de Cheques",
              "tipo": "Categoría",
              "codigo": 1
            },
            {
              "grupos": {
                "SdtsBTFacultadGrupo": {
                  "moneda": "$",
                  "codigoMoneda": 0,
                  "vigenciaHasta": "2022-10-04",
                  "monto": 99999990,
                  "habilitado": "S",
                  "firmantes": {
                    "SdtsBTFacultadFirmante": {
                      "potestad": "Titular",
                      "personaUId": 161,
                      "nombre": "AZQUEZ SZENTANDRASI LEJANDRO",
                      "categoria": ""
                    }
                  },
                  "codigoPapel": 0,
                  "papel": "$",
                  "numero": 1,
                  "vigenciaDesde": "2020-01-02"
                }
              },
              "firmantes": "",
              "descripcion": "Retiro de cuentas vista",
              "tipo": "Persona",
              "codigo": 2
            }
          ]
        },
        "sdtFirmantes": {
          "SdtsBTFacultadFirmante": {
            "potestad": "Titular",
            "personaUId": 161,
            "nombre": "AZQUEZ SZENTANDRASI LEJANDRO",
            "categoria": ""
          }
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Canal": "BTDIGITAL",
          "Servicio": "BTClientes.ObtenerFacultades",
          "Fecha": "2022-11-29",
          "Hora": "10:23:37",
          "Requerimiento": 1,
          "Numero": 486,
          "Estado": "OK"
        }
}'` } };

  // Datos estructurados
  structuredTypes = [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Codigo.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripcion.' }, { Nombre: 'firmantes', Tipo: '[sBTFacultadFirmante](#sbtfacultadfirmante)', Comentarios: 'Listado de firmantes de la facultad.' }, { Nombre: 'grupos', Tipo: '[sBTFacultadGrupo](#sbtfacultadgrupo)', Comentarios: 'Listado de grupos de la facultad.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo.' }, { Nombre: '### sBTFacultadGrupo', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTFacultadGrupo son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'codigoMoneda', Tipo: 'Int', Comentarios: 'Codigo de moneda.' }, { Nombre: 'codigoPapel', Tipo: 'Long', Comentarios: 'Codigo de papel.' }, { Nombre: 'firmantes', Tipo: '[sBTFacultadFirmante](#sbtfacultadfirmante)', Comentarios: 'Listado de firmantes.' }, { Nombre: 'habilitado', Tipo: 'String', Comentarios: '¿Habilitado? (S/N).' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Moneda.' }, { Nombre: 'monto', Tipo: 'Long', Comentarios: 'Monto.' }, { Nombre: 'numero', Tipo: 'Short', Comentarios: 'Numero de grupo.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Papel.' }, { Nombre: 'vigenciaDesde', Tipo: 'Date', Comentarios: 'Fecha de vigencia desde.' }, { Nombre: 'vigenciaHasta', Tipo: 'Date', Comentarios: 'Fecha de vigencia hasta.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }, { Nombre: '::: details sBTFacultadFirmante', Tipo: '', Comentarios: '' }, { Nombre: '### sBTFacultadFirmante', Tipo: '', Comentarios: '' }, { Nombre: '::: center', Tipo: '', Comentarios: '' }, { Nombre: 'Los campos del tipo de dato estructurado sBTFacultadFirmante son los siguientes:', Tipo: '', Comentarios: '' }, { Nombre: 'Nombre', Tipo: 'Tipo', Comentarios: 'Comentarios' }, { Nombre: ':---------', Tipo: ':-----------', Comentarios: ':-----------' }, { Nombre: 'categoria', Tipo: 'String', Comentarios: 'Categoria.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre.' }, { Nombre: 'personaUId', Tipo: 'long', Comentarios: 'Identificador unico de persona.' }, { Nombre: 'potestad', Tipo: 'String', Comentarios: 'Potestad.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }];
}
