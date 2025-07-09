import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerFacultades',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerFacultadesComponent1751987197165 {
  pageTitle        = 'Obtener Facultades';
  description      = `Método para obtener un listado de las facultades de una cuenta vista.`;
  pubName    = 'BTCuentasVista.ObtenerFacultades';
  programa   = 'RBTPG451';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'operacionUId', Tipo: 'Long', Comentarios: 'Identificador único de operación.' }];
  outputData = [{ Nombre: 'sdtFacultades', Tipo: '[sBTFacultad](#sbtfacultad)', Comentarios: 'Listado de datos de facultades.' }, { Nombre: 'sdtFirmantes', Tipo: '[sBTFacultadFirmantes](#sbtfacultadfirmantes)', Comentarios: 'Listado de datos de firmantes.' }];
  errors     = [{ Código: '30001', Descripción: 'No se recibió el identificador único de operación.' }, { Código: '30002', Descripción: 'No se recuperó la operación para el Identificador: [Número de identificador].' }, { Código: '30003', Descripción: 'La operación ingresada no corresponde a una cuenta corriente / cuenta de ahorro.' }];

  examples = {
    invocation: { xml: `
`,
    json: `
` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTCuentasVista.ObtenerFacultadesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
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
            <Servicio>BTCuentasVista.ObtenerFacultades</Servicio>
            <Fecha>2022-11-29</Fecha>
            <Hora>10:23:37</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>486</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTCuentasVista.ObtenerFacultadesResponse>
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
          "Servicio": "BTCuentasVista.ObtenerFacultades",
          "Fecha": "2022-11-29",
          "Hora": "10:23:37",
          "Requerimiento": 1,
          "Numero": 486,
          "Estado": "OK"
        }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTFacultad', fields: [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Código.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción.' }, { Nombre: 'firmantes', Tipo: '[sBTFacultadFirmante](#sbtfacultadfirmante)', Comentarios: 'Listado de firmantes de la facultad.' }, { Nombre: 'grupos', Tipo: '[sBTFacultadGrupo](#sbtfacultadgrupo)', Comentarios: 'Listado de grupos de la facultad.' }, { Nombre: 'tipo', Tipo: 'String', Comentarios: 'Tipo.' }] }, { typeName: 'sBTFacultadGrupo', fields: [{ Nombre: 'codigoMoneda', Tipo: 'Int', Comentarios: 'Código de moneda.' }, { Nombre: 'codigoPapel', Tipo: 'Long', Comentarios: 'Código de papel.' }, { Nombre: 'firmantes', Tipo: '[sBTFacultadFirmante](#sbtfacultadfirmante)', Comentarios: 'Listado de firmantes.' }, { Nombre: 'habilitado', Tipo: 'String', Comentarios: '¿Habilitado? (S/N).' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Moneda.' }, { Nombre: 'monto', Tipo: 'Long', Comentarios: 'Monto.' }, { Nombre: 'numero', Tipo: 'Short', Comentarios: 'Número de grupo.' }, { Nombre: 'papel', Tipo: 'String', Comentarios: 'Papel.' }, { Nombre: 'vigenciaDesde', Tipo: 'Date', Comentarios: 'Fecha de vigencia desde.' }, { Nombre: 'vigenciaHasta', Tipo: 'Date', Comentarios: 'Fecha de vigencia hasta.' }] }, { typeName: 'sBTFacultadFirmante', fields: [{ Nombre: 'categoria', Tipo: 'String', Comentarios: 'Categoría.' }, { Nombre: 'nombre', Tipo: 'String', Comentarios: 'Nombre.' }, { Nombre: 'personaUId', Tipo: 'long', Comentarios: 'Identificador único de persona.' }, { Nombre: 'potestad', Tipo: 'String', Comentarios: 'Potestad.' }] }];
}
