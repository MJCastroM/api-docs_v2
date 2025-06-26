import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerNivelesEducativos',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerNivelesEducativosComponent1750945334441 {
  pageTitle        = 'Obtener Niveles Educativos';
  description      = `Método para obtener un listado de los niveles educativos.`;
  pubName    = 'BTPersonas.ObtenerNivelesEducativos';
  programa   = 'RBTPG382';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [];
  outputData = [{ Nombre: 'sdtNivelesEducativos', Tipo: '[sBTNivelEducativo](#sbtniveleducativo)', Comentarios: 'Listado de niveles educativos.' }];
  errors     = [];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerNivelesEducativos>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>c2cfd09eff4A8B5C60A82434</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
      </bts:BTPersonas.ObtenerNivelesEducativos>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerNivelesEducativosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Token>c2cfd09eff4A8B5C60A82434</Token>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
         </Btinreq>
         <sdtNivelesEducativos>
            <SdtsBTNivelEducativo>
               <descripcion>Primario</descripcion>
               <codigo>1</codigo>
            </SdtsBTNivelEducativo>
            <SdtsBTNivelEducativo>
               <descripcion>Secundario</descripcion>
               <codigo>2</codigo>
            </SdtsBTNivelEducativo>
            <SdtsBTNivelEducativo>
               <descripcion>Terciario</descripcion>
               <codigo>3</codigo>
            </SdtsBTNivelEducativo>
            <SdtsBTNivelEducativo>
               <descripcion>Universitario</descripcion>
               <codigo>4</codigo>
            </SdtsBTNivelEducativo>
            <SdtsBTNivelEducativo>
               <descripcion>Post Grado</descripcion>
               <codigo>5</codigo>
            </SdtsBTNivelEducativo>
            <SdtsBTNivelEducativo>
               <descripcion>Analfabeto</descripcion>
               <codigo>6</codigo>
            </SdtsBTNivelEducativo>
            <SdtsBTNivelEducativo>
               <descripcion>No corresponde</descripcion>
               <codigo>999</codigo>
            </SdtsBTNivelEducativo>
         </sdtNivelesEducativos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>16576</Numero>
            <Hora>12:36:58</Hora>
            <Fecha>2022-05-26</Fecha>
            <Servicio>BTPersonas.ObtenerNivelesEducativos</Servicio>
            <Estado>OK</Estado>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
         </Btoutreq>
      </BTPersonas.ObtenerNivelesEducativosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
    "Btinreq": {
        "Device": "GP",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "c2cfd09eff4A8B5C60A82434"
    },
    "sdtNivelesEducativos": {
        "SdtsBTNivelEducativo": [
        {
            "descripcion": "Primario",
            "codigo": "1"
        },
        {
            "descripcion": "Secundario",
            "codigo": "2"
        },
        {
            "descripcion": "Terciario",
            "codigo": "3"
        },
        {
            "descripcion": "Universitario",
            "codigo": "4"
        },
        {
            "descripcion": "Post Grado",
            "codigo": "5"
        },
        {
            "descripcion": "Analfabeto",
            "codigo": "6"
        },
        {
            "descripcion": "No corresponde",
            "codigo": "999"
        }
        ]
    },
    "Erroresnegocio": {
    },
    "Btoutreq": {
        "Numero": "839",
        "Estado": "OK",
        "Servicio": "BTPersonas.ObtenerNivelesEducativos",
        "Requerimiento": "1",
        "Fecha": "2022-05-12",
        "Hora": "15:35:54",
        "Canal": "BTDIGITAL"
    }
}` }
  };

  structuredTypes = [{ typeName: 'sBTNivelEducativo', fields: [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Código de nivel educativo.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de nivel educativo.' }] }];
}
