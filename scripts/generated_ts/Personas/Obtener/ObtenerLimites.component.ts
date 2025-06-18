import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerLimites',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerLimitesComponent1750268697521 {
  pageTitle        = 'Obtener Límites';
  description      = `Método para obtener los límites de una persona.`;
  pubName    = 'BTPersonas.ObtenerLimites';
  programa   = 'RBTPG560';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'personaUId', Tipo: 'Long', Comentarios: 'Identificador único de persona.' }];
  outputData = [{ Nombre: 'sdtLimites', Tipo: '[sBTLimiteCliente](#sbtlimitecliente)', Comentarios: 'Listado de límites.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió identificador de persona.' }, { Codigo: '30002', Descripcion: 'No se recuperó la persona para el identificador ingresado.' }];

  examples = {
    invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPersonas.ObtenerLimites>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>67579685BC9ACF711F22AF23</bts:Token>
         </bts:Btinreq>
         <bts:personaUId>161</bts:personaUId>
      </bts:BTPersonas.ObtenerLimites>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerLimites\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	 "Btinreq": {
          "Canal": "BTDIGITAL",
          "Token": "fa2c02c95a4A8B5C60A76209",
          "Usuario": "INSTALADOR",
          "Requerimiento": 1,
          "Device": 1
        },
        "personaUId": 150
      }` },
    response:   { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPersonas.ObtenerLimitesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>67579685BC9ACF711F22AF23</Token>
         </Btinreq>
         <sdtLimites>
            <sBTLimiteCliente>
               <fechaVencimiento>2019-02-06</fechaVencimiento>
               <descripcion>Línea_Créditos Hipotecarios / $</descripcion>
               <limiteDisponible>22000.00</limiteDisponible>
               <moneda>$</moneda>
               <limiteOtorgado>22000.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <fechaVencimiento>2019-02-06</fechaVencimiento>
               <descripcion>Línea_Créditos Comercial PF / $</descripcion>
               <limiteDisponible>25000.00</limiteDisponible>
               <moneda>$</moneda>
               <limiteOtorgado>25000.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <fechaVencimiento>2019-02-06</fechaVencimiento>
               <descripcion>Línea_Créditos Comercial LP / $</descripcion>
               <limiteDisponible>27000.00</limiteDisponible>
               <moneda>$</moneda>
               <limiteOtorgado>27000.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <fechaVencimiento>2019-02-06</fechaVencimiento>
               <descripcion>Línea_Firmantes no calificados / $</descripcion>
               <limiteDisponible>38000.00</limiteDisponible>
               <moneda>$</moneda>
               <limiteOtorgado>38000.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <fechaVencimiento>2019-02-06</fechaVencimiento>
               <descripcion>Línea_Firmantes AAA / $</descripcion>
               <limiteDisponible>27000.00</limiteDisponible>
               <moneda>$</moneda>
               <limiteOtorgado>27000.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <fechaVencimiento>2019-02-06</fechaVencimiento>
               <descripcion>Línea_Firmantes Estado / $</descripcion>
               <limiteDisponible>20000.00</limiteDisponible>
               <moneda>$</moneda>
               <limiteOtorgado>20000.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <fechaVencimiento>0001-01-01</fechaVencimiento>
               <descripcion>Total / MN</descripcion>
               <limiteDisponible>1000000.00</limiteDisponible>
               <moneda/>
               <limiteOtorgado>1000000.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
            </sBTLimiteCliente>
            <sBTLimiteCliente>
               <fechaVencimiento>0001-01-01</fechaVencimiento>
               <descripcion>Total / ME</descripcion>
               <limiteDisponible>0.00</limiteDisponible>
               <moneda/>
               <limiteOtorgado>0.00</limiteOtorgado>
               <limiteUtilizado>0.00</limiteUtilizado>
            </sBTLimiteCliente>
         </sdtLimites>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>229016</Numero>
            <Servicio>BTPersonas.ObtenerLimites</Servicio>
            <Estado>OK</Estado>
            <Requerimiento/>
            <Fecha>2024-05-30</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:37:57</Hora>
         </Btoutreq>
      </BTPersonas.ObtenerLimitesResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  json: `{
   "Btinreq": {
        "Device": 1,
        "Usuario": "INSTALADOR",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Token": "fa2c02c95a4A8B5C60A76209"
      },
      "sdtLimites": {
      "sBTLimiteCliente": [
      {
          "fechaVencimiento": "2019-02-06",
          "moneda":"$",
          "descripcion": "Línea_Créditos Hipotecarios / $",
          "limiteDisponible": "22000.00",
          "limiteOtorgado": "22000.00",
          "limteUtilizado": "0.00"
        },
        {
          "fechaVencimiento": "2019-02-06",
          "moneda":"$", 
          "descripcion": "Línea_Créditos Comercial PF / $",
          "limiteDisponible": "25000.00",
          "limiteOtorgado": "25000.00",
          "limteUtilizado": "0.00"
        },
        {
          "fechaVencimiento": "2019-02-06",
          "moneda":"$",
          "descripcion": "Línea_Créditos Comercial LP / $",
          "limiteDisponible": "27000.00",
          "limiteOtorgado": "27000.00",
          "limteUtilizado": "0.00"
        },
        {
          "fechaVencimiento": "2019-02-06",
          "moneda":"$",
          "descripcion": "Línea_Firmantes no calificados / $",
          "limiteDisponible": "38000.00",
          "limiteOtorgado": "38000.00",
          "limteUtilizado": "0.00"
        },
        {
          "fechaVencimiento": "2019-02-06",
          "moneda":"$",
          "descripcion": "Línea_Firmantes AAA / $",
          "limiteDisponible": "27000.00",
          "limiteOtorgado": "27000.00",
          "limteUtilizado": "0.00"
        },
        {
          "fechaVencimiento": "2019-02-06",
          "moneda":"$",
          "descripcion": "Línea_Firmantes Estado / $",
          "limiteDisponible": "20000.00",
          "limiteOtorgado": "20000.00",
          "limteUtilizado": "0.00"
        },
        {
          "fechaVencimiento": "0001-01-01",
          "moneda":"",
          "descripcion": "Total / MN",
          "limiteDisponible": "1000000.00",
          "limiteOtorgado": "1000000.00",
          "limteUtilizado": "0.00"
        },
        {
          "fechaVencimiento": "0001-01-01",
          "moneda":"",
          "descripcion": "Total / ME",
          "limiteDisponible": "0.00",
          "limiteOtorgado": "0.00",
          "limteUtilizado": "0.00"
        }
        ]
      },
      "Erroresnegocio": {
        "BTErrorNegocio": []
      "Btoutreq": {
        "Numero": 20535,
        "Servicio": "BTPersonas.ObtenerLimites",
        "Estado": "OK",
        "Fecha": "2024-05-30",
        "Requerimiento": "1",
        "Canal": "BTDIGITAL",
        "Hora": "11:52:12"
      }
      }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTLimiteCliente', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción del estado.' }, { Nombre: 'fechaVencimiento', Tipo: 'Date', Comentarios: 'Fecha de vencimiento del límite.' }, { Nombre: 'limiteDisponible', Tipo: 'Double', Comentarios: 'Límite disponible para el cliente.' }, { Nombre: 'limiteOtorgado', Tipo: 'Double', Comentarios: 'Límite otorgado al cliente.' }, { Nombre: 'limteUtilizado', Tipo: 'Double', Comentarios: 'Límite utilizado por el cliente.' }, { Nombre: 'moneda', Tipo: 'String', Comentarios: 'Símbolo de moneda.' }] }];
}
