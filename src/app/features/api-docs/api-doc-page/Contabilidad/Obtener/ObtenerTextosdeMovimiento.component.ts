import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerTextosdeMovimiento',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerTextosdeMovimientoComponent1750268695457 {
  pageTitle        = 'Obtener Textos de Movimiento';
  description      = `Método para obtener un listado de los textos asociados a un movimiento.`;
  pubName    = 'BTContabilidad.ObtenerTextosMovimiento';
  programa   = 'RBTPG097';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'movimientoUId', Tipo: 'Long', Comentarios: 'Identificador único de movimiento.' }];
  outputData = [{ Nombre: 'sdtTextosMovimiento', Tipo: '[sBTTextoMovimiento](#sbttextomovimiento)', Comentarios: 'Listado de textos del movimiento.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de movimiento.' }, { Codigo: '40003', Descripcion: 'No existe registro para el identificador único.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTContabilidad.ObtenerTextosMovimiento>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BA</bts:Usuario>
            <bts:Token>0211202010280000399672</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:movimientoUId>1</bts:movimientoUId>
      </bts:BTContabilidad.ObtenerTextosMovimiento>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  \'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerTextosMovimiento\' \
  -H \'cache-control: no-cache\' \
  -H \'content-type: application/json\' \
  -H \'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d\' \
  -d \'{
	 "Btinreq": {
		"Canal": "BTDIGITAL",
		"Requerimiento": "1",
		"Usuario": "BA",
		"Token": "0211202010280000399672",
		"Device": "MC"
	 },
	 "movimientoUId": "1"
  }\'` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTContabilidad.ObtenerTextosMovimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BA</Usuario>
            <Token>0211202010280000399672</Token>
            <Device>MC</Device>
         </Btinreq>
         <sdtTextosMovimiento>
            <sBTTextoMovimiento>
               <codigo>2</codigo>
               <descripcion>MOTIVOS DEL EMBARGO</descripcion>
               <renglon>1</renglon>
               <texto>MOTIVOS DEL EMBARGO</texto>
            </sBTTextoMovimiento>
         </sdtTextosMovimiento>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTContabilidad.ObtenerTextosMovimiento</Servicio>
            <Fecha>2020-11-02</Fecha>
            <Hora>12:27:51</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>10143</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTContabilidad.ObtenerTextosMovimientoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
   "Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "1",
      "Usuario": "BA",
      "Token": "0211202010280000399672",
      "Device": "MC"
   },
   "sdtTextosMovimiento": {
      "sBTTextoMovimiento": {
         "codigo": "2",
         "descripcion": "MOTIVOS DEL EMBARGO",
         "renglon": "1",
         "texto": "MOTIVOS DEL EMBARGO"
      }
   },
   "Erroresnegocio": null,
   "Btoutreq": {
      "Canal": "BTDIGITAL",
      "Servicio": "BTContabilidad.ObtenerTextosMovimiento",
      "Fecha": "2020-11-02",
      "Hora": "12:27:51",
      "Requerimiento": "1",
      "Numero": "10143",
      "Estado": "OK"
   }
}` }
  };

  structuredTypes = [{ typeName: 'sBTTextoMovimiento', fields: [{ Nombre: 'codigo', Tipo: 'Short', Comentarios: 'Código del texto.' }, { Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del tipo de texto.' }, { Nombre: 'renglon', Tipo: 'Short', Comentarios: 'Renglón.' }, { Nombre: 'texto', Tipo: 'String', Comentarios: 'Texto asociado.' }] }];
}
