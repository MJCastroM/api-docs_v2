import { Component } from '@angular/core';
import { fadeInOut } from '../../../../../route-animations';

@Component({
  selector: 'app-ObtenerActividadesporTipo',
  templateUrl: '../../DocTemplate.component.html',
  styleUrls: ['../../DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ObtenerActividadesporTipoComponent1750713393535 {
  pageTitle        = 'Obtener Actividades por Tipo';
  description      = `Método para obtener un listado de las actividades por tipo ingresadas en Bantotal.`;
  pubName    = 'BTConfiguracionBantotal.ObtenerActividadesPorTipo';
  programa   = 'RBTPG478';
  scope      = 'Global';

  hasBackendConfig = false;
  backendText      = ``;
  backendConfig    = [];

  inputData  = [{ Nombre: 'tipoActividadId', Tipo: 'Long', Comentarios: 'Identificador de tipo de actividad.' }];
  outputData = [{ Nombre: 'sdtActividades', Tipo: '[sBTActividad](#sbtactividad)', Comentarios: 'Listado de actividades.' }];
  errors     = [{ Codigo: '30001', Descripcion: 'No se recibió código de actividad.' }, { Codigo: '40001', Descripcion: 'No existen actividades ingresadas en el sistema.' }];

  examples = {
    invocation: { xml: `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTConfiguracionBantotal.ObtenerActividadesPorTipo>
         <bts:Btinreq>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>1EF0C356A692E3706CFA0201</bts:Token>
            <bts:Device>1</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:tipoActividadId>1</bts:tipoActividadId>
      </bts:BTConfiguracionBantotal.ObtenerActividadesPorTipo>
   </soapenv:Body>
</soapenv:Envelope>`, 
    json: `
curl -X POST \
	\'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerActividadesPorTipo\' \
	-H \'cache-control: no-cache\' \
	-H \'content-type: application/json\' \
	-H \'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379\' \
	-d \'{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "fa2c02c95a4A8B5C60A82434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"tipoActividadId": "1",
}\'` },
    response:   { xml: `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTConfiguracionBantotal.ObtenerActividadesPorTipoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>1EF0C356A692E3706CFA0201</Token>
         </Btinreq>
         <sdtActividades>
            <SdtsBTActividad>
               <descripcion>Arroz</descripcion>
               <identificador>1111</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01112 Trigo</descripcion>
               <identificador>1112</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01113 Oleaginosos</descripcion>
               <identificador>1113</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01114 Cebada</descripcion>
               <identificador>1114</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01120 Cultivo de hortalizas y legumbres, especialidades hort</descripcion>
               <identificador>1120</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01131 Fruticultura (excepto viticultura), plantas cuyas hoja</descripcion>
               <identificador>1131</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01132 Viticultura</descripcion>
               <identificador>1132</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01133 Otros cultivos</descripcion>
               <identificador>1133</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01211 Explotación ganadera (excepto lechería)</descripcion>
               <identificador>1211</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01212 Explotacion lechera</descripcion>
               <identificador>1212</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01221 Avicultura</descripcion>
               <identificador>1221</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01222 Cria de otros animales</descripcion>
               <identificador>1222</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01300 Cultivo de productos agrícolas en combinación con la c</descripcion>
               <identificador>1300</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01401 Servicios agrícolas</descripcion>
               <identificador>1401</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01402 Servicios ganaderos (excepto actividades veterinarias)</descripcion>
               <identificador>1402</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>01500 Caza ordinaria y mediante trampas, y repoblación de an</descripcion>
               <identificador>1500</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>02000 Silvicultura, extracción de madera y actividades de se</descripcion>
               <identificador>2000</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>05000 Pesca, explotación de criaderos de peces y granjas pis</descripcion>
               <identificador>5000</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>10100 Extracción y aglomeración de carbón de piedra</descripcion>
               <identificador>10100</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>10200 Extracción y aglomeración de lignito</descripcion>
               <identificador>10200</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>10300 Extracción y aglomeración de turba</descripcion>
               <identificador>10300</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>11100 Extracción de petróleo crudo y gas natural</descripcion>
               <identificador>11100</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>11200 Actividades de servicios relacionadas con la extracció</descripcion>
               <identificador>11200</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>12000 Extracción de minerales de uranio y torio</descripcion>
               <identificador>12000</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>13100 Extracción de minerales de hierro</descripcion>
               <identificador>13100</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>13200 Extracción de minerales metalíferos no ferrosos, excep</descripcion>
               <identificador>13200</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>14100 Extracción de piedra, arena y arcilla</descripcion>
               <identificador>14100</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>14210 Extracción de minerales para la fabricación de abonos</descripcion>
               <identificador>14210</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>14220 Extracción de sal</descripcion>
               <identificador>14220</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>14290 Explotación de otras minas y canteras n.c.p.</descripcion>
               <identificador>14290</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>15110 Producción, procesamiento y conservación de carney pro</descripcion>
               <identificador>15110</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>15120 Elaboración y conservación de pescado y productos de p</descripcion>
               <identificador>15120</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
            <SdtsBTActividad>
               <descripcion>15130 Elaboración y conservación de frutas, legumbres y hort</descripcion>
               <identificador>15130</identificador>
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora>
            </SdtsBTActividad>
         </sdtActividades>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10243</Numero>
            <Servicio>BTConfiguracionBantotal.ObtenerActividadesPorTipo</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-04</Fecha>
            <Hora>16:18:23</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTConfiguracionBantotal.ObtenerActividadesPorTipoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,  
    json: `
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cc9b534A8B5C60A82434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtActividades": {
      "sBTActividad": [            
         {
               "descripcion": "85190 Otras actividades relacionadas con la salud humana",
               "identificador": "85190",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "85200 Actividades veterinarias",
               "identificador": "85200",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "85310 Servicios sociales con alojamiento",
               "identificador": "85310",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "85320 Servicios sociales sin alojamiento",
               "identificador": "85320",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "90000 Eliminación de desperdicios y aguas residuales, saneam",
               "identificador": "90000",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "91110 Actividades de organizaciones empresariales y de emple",
               "identificador": "91110",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "91120 Actividades de organizaciones profesionales",
               "identificador": "91120",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "91200 Actividades de sindicatos",
               "identificador": "91200",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "91910 Actividades de organizaciones religiosas",
               "identificador": "91910",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "91920 Actividades de organizaciones políticas",
               "identificador": "91920",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "91990 Actividades de otras asociaciones n.c.p.",
               "identificador": "91990",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92110 Producción y distribución de filmes y videocintas",
               "identificador": "92110",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92120 Exhibición de filmes y videocintas",
               "identificador": "92120",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92130 Actividades de radio y televisión",
               "identificador": "92130",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92140 Actividades teatrales y musicales y otras actividades",
               "identificador": "92140",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92190 Otras actividades de entretenimiento n.c.p.",
               "identificador": "92190",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92200 Actividades de agencias de noticias",
               "identificador": "92200",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92310 Actividades de bibliotecas y archivos",
               "identificador": "92310",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92320 Actividades de museos y preservación de lugares y edif",
               "identificador": "92320",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92330 Actividades de jardines botánicos y zoológicos y de pa",
               "identificador": "92330",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92410 Actividades deportivas",
               "identificador": "92410",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "92490 Otras actividades de esparcimiento",
               "identificador": "92490",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "93010 Lavado y limpieza de prendas de tela y de piel, inclus",
               "identificador": "93010",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "93020 Peluquería y otros tratamientos de belleza",
               "identificador": "93020",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "93030 Pompas fúnebres y actividades conexas",
               "identificador": "93030",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "93090 Otras actividades de servicios n.c.p.",
               "identificador": "93090",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "95000 Hogares privados con servicio doméstico",
               "identificador": "95000",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "97000 Familias",
               "identificador": "97000",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "97010 Créditos para adquisición de inmuebles",
               "identificador": "97010",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "97020 Créditos para adquisición de vehículos automotores",
               "identificador": "97020",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "97030 Otros (créditos al consumo)",
               "identificador": "97030",
               "identificadorEntidadReguladora": "0"
         },
         {
               "descripcion": "99000 Organizaciones y órganos extraterritoriales",
               "identificador": "99000",
               "identificadorEntidadReguladora": "0"
         }
      ]
   },
   "Erroresnegocio": {
      "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "111598",
      "Estado": "OK",
      "Servicio": "BTConfiguracionBantotal.ObtenerActividadesPorTipo",
      "Requerimiento": "1",
      "Fecha": "2023-05-04",
      "Canal": "BTDIGITAL",
      "Hora": "16:20:35"
   }
}\'` }
  };

  structuredTypes = [{ typeName: 'sBTActividad', fields: [{ Nombre: 'descripcion', Tipo: 'String', Comentarios: 'Descripción de actividad.' }, { Nombre: 'identificador', Tipo: 'Int', Comentarios: 'Identificador de actividad.' }, { Nombre: 'identificadorEntidadReguladora', Tipo: 'Long', Comentarios: 'Identificador de entidad reguladora.' }, { Nombre: ':::', Tipo: '', Comentarios: '' }] }];
}
