import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-ObtenerPizarras',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerPizarrasComponent {
  // Cabecera e info-card
  pageTitle = 'Obtener Pizarras';
  description = `Metodo para obtener un listado de los tipos de pizarras ingresados en Bantotal.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerPizarras';
  programa   = 'RBTPG079';
  scope      = 'Global';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = [];
  inputData  = [];
  outputCols = ['sdtPizarras'];
  outputData = [{ Nombre: 'sdtPizarras', Tipo: '[sBTPizarra](#sbtpizarra)', Comentarios: 'Listado de pizarras.' }];
  errorCols  = [];
  errors     = [];

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerPizarras>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTConfiguracionBantotal.ObtenerPizarras>
   </soapenv:Body>
</soapenv:Envelope>`, json: `curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerPizarras=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 8fcb6b93-b3ef-c606-42c7-c43adaa8de75' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	}
}'` }, response: { xml: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerPizarrasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtPizarras>
            <sBTPizarra>
               <codigo>0</codigo>
               <descripcion>GENERICA</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>1</codigo>
               <descripcion>Residentes</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>2</codigo>
               <descripcion>No Residentes</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>3</codigo>
               <descripcion>Empleados</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>4</codigo>
               <descripcion>Bonos- Otros</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>15</codigo>
               <descripcion>Operac. Leasing</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>20</codigo>
               <descripcion>Sobregiro Vista</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>30</codigo>
               <descripcion>Corporativa</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>31</codigo>
               <descripcion>Descuentos</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>32</codigo>
               <descripcion>Personales</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>33</codigo>
               <descripcion>Prendarios</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>34</codigo>
               <descripcion>Hipotecarios</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>35</codigo>
               <descripcion>Empleados</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>36</codigo>
               <descripcion>Venta de Bienes</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>38</codigo>
               <descripcion>Reajustables</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>39</codigo>
               <descripcion>Comercial</descripcion>
            </sBTPizarra>
            <sBTPizarra>
               <codigo>40</codigo>
               <descripcion>Consumo</descripcion>
            </sBTPizarra>
         </sdtPizarras>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>810</Numero>
            <Estado>OK</Estado>
            <Servicio>BTConfiguracionBantotal.ObtenerPizarras</Servicio>
            <Fecha>2017-12-17</Fecha>
            <Requerimiento/>
            <Hora>18:13:58</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerPizarrasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`, json: `'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
   "sdtPizarras": {
      "sBTPizarra": [
         {
         "descripcion": "GENERICA",
         "codigo": "0"
         },
         {
         "descripcion": "Residentes",
         "codigo": "1"
         },
         {
         "descripcion": "No Residentes",
         "codigo": "2"
         },
         {
         "descripcion": "Empleados",
         "codigo": "3"
         },
         {
         "descripcion": "Bonos- Otros",
         "codigo": "4"
         },
         {
         "descripcion": "Operac. Leasing",
         "codigo": "15"
         },
         {
         "descripcion": "Sobregiro Vista",
         "codigo": "20"
         },
         {
         "descripcion": "Corporativa",
         "codigo": "30"
         },
         {
         "descripcion": "Descuentos",
         "codigo": "31"
         },
         {
         "descripcion": "Personales",
         "codigo": "32"
         },
         {
         "descripcion": "Prendarios",
         "codigo": "33"
         },
         {
         "descripcion": "Hipotecarios",
         "codigo": "34"
         },
         {
         "descripcion": "Empleados",
         "codigo": "35"
         },
         {
         "descripcion": "Venta de Bienes",
         "codigo": "36"
         },
         {
         "descripcion": "Reajustables",
         "codigo": "38"
         },
         {
         "descripcion": "Comercial",
         "codigo": "39"
         },
         {
         "descripcion": "Consumo",
         "codigo": "40"
         }
      ]
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "811",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerPizarras",
      "Fecha": "2017-12-17",
      "Requerimiento": "",
      "Hora": "18:15:07",
      "Canal": "BTDIGITAL"
   }
}'` } };

  // Datos estructurados
  structuredTypes = [];
}
