import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule }   from '@angular/material/sidenav';
import { MatListModule }      from '@angular/material/list';
import { MatCardModule }      from '@angular/material/card';
import { MatIconModule }      from '@angular/material/icon';
import { MatTabsModule }      from '@angular/material/tabs';
import { MatTableModule }     from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule }    from '@angular/material/button';

import { PrismHighlightDirective }     from './prism-highlight.directive';
import { ApiDocsRoutingModule } from './api-doc-page/api-docs-routing.module';

import { PageHeaderComponent }     from './components/page-header/page-header.component';
import { InfoCardComponent }       from './components/info-card/info-card.component';
import { BackendConfigComponent }  from './components/backend-config/backend-config.component';
import { ApiTabsComponent }        from './components/api-tabs/api-tabs.component';
import { ApiTableComponent }       from './components/api-table/api-table.component';
import { CodeExampleComponent }    from './components/code-example/code-example.component';
import { StructuredDataComponent } from './components/structured-data/structured-data.component';
import { FooterSpaceComponent } from './components/footer-space/footer-space.component';
import { FormsModule }    from '@angular/forms';            // ← importa FormsModule
import { ChatPopupComponent } from './components/chat-popup/chat-popup.component';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from '../../core/services/search.service';
import { HttpClientModule } from '@angular/common/http';  // ← aquí

import { SharedModule } from '../../shared/shared.module';

//import Page components
import { ContratarSimulacionComponent1750446218029 } from './api-doc-page/Ahorro-Programado/Contratar/ContratarSimulacion.component';
import { CrearComponent1750446218037 } from './api-doc-page/Ahorro-Programado/Contratar/Crear.component';
import { SimularComponent1750446218041 } from './api-doc-page/Ahorro-Programado/Contratar/Simular.component';
import { ActualizarDocumentoDigitalComponent1750446218043 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750446218045 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750446218046 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750446218047 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750446218048 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ModificarCuentaDestinoComponent1750446218050 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarCuentaDestino.component';
import { ModificarCuentaOrigenComponent1750446218052 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarCuentaOrigen.component';
import { ModificarFechadeAbonoComponent1750446218054 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarFechadeAbono.component';
import { ModificarMetadeAhorroComponent1750446218056 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarMetadeAhorro.component';
import { ModificarMontodeAbonoComponent1750446218059 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarMontodeAbono.component';
import { ObtenerComponent1750446218060 } from './api-doc-page/Ahorro-Programado/Obtener/Obtener.component';
import { ObtenerCronogramaAbonosComponent1750446218062 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCronogramaAbonos.component';
import { ObtenerCuentasDestinoHabilitadasComponent1750446218063 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCuentasDestinoHabilitadas.component';
import { ObtenerCuentasOrigenHabilitadasComponent1750446218064 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCuentasOrigenHabilitadas.component';
import { ObtenerEstadodeCuentaComponent1750446218066 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerPeriodosHabilitadosComponent1750446218067 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerPeriodosHabilitados.component';
import { ObtenerPlazosHabilitadosComponent1750446218069 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerPlazosHabilitados.component';
import { ObtenerProductosComponent1750446218072 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerProductos.component';
import { AnularChequeElectronicoComponent1750446218074 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/AnularChequeElectronico.component';
import { AsignarIdaChequeElectronicoComponent1750446218076 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/AsignarIdaChequeElectronico.component';
import { CrearChequeraElectronicaComponent1750446218078 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/CrearChequeraElectronica.component';
import { DepositarChequeElectronicodeBancoPropioComponent1750446218080 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicodeBancoPropio.component';
import { DepositarChequeElectronicodeOtroBancoComponent1750446218081 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicodeOtroBanco.component';
import { DepositarChequeElectronicoenCustodiaComponent1750446218082 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicoenCustodia.component';
import { EmitirChequeElectronicoComponent1750446218083 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/EmitirChequeElectronico.component';
import { EmitirChequeElectronicodeChequeraComponent1750446218085 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/EmitirChequeElectronicodeChequera.component';
import { HabilitarChequeElectronicoComponent1750446218087 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/HabilitarChequeElectronico.component';
import { CrearAdhesionComponent1750446218089 } from './api-doc-page/AR - Argentina/SNP/CrearAdhesion.component';
import { CrearStopDebitComponent1750446218091 } from './api-doc-page/AR - Argentina/SNP/CrearStopDebit.component';
import { CrearStopDebitparaAdhesionconImporteComponent1750446218093 } from './api-doc-page/AR - Argentina/SNP/CrearStopDebitparaAdhesionconImporte.component';
import { EliminarStopDebitComponent1750446218095 } from './api-doc-page/AR - Argentina/SNP/EliminarStopDebit.component';
import { ObtenerAdhesionesComponent1750446218096 } from './api-doc-page/AR - Argentina/SNP/ObtenerAdhesiones.component';
import { ObtenerDebitosComponent1750446218097 } from './api-doc-page/AR - Argentina/SNP/ObtenerDebitos.component';
import { ObtenerEmpresasOriginantesComponent1750446218098 } from './api-doc-page/AR - Argentina/SNP/ObtenerEmpresasOriginantes.component';
import { ObtenerStopDebitsComponent1750446218100 } from './api-doc-page/AR - Argentina/SNP/ObtenerStopDebits.component';
import { ReversarDebitosComponent1750446218101 } from './api-doc-page/AR - Argentina/SNP/ReversarDebitos.component';
import { SolicitarBajadeAdhesionComponent1750446218103 } from './api-doc-page/AR - Argentina/SNP/SolicitarBajadeAdhesion.component';
import { AutenticacionComponent1750446218105 } from './api-doc-page/Autenticación/Autenticacion.component';
import { ObtenerDetalledeEjecucionComponent1750446218107 } from './api-doc-page/Cadena-de-Cierre/ObtenerDetalledeEjecucion.component';
import { ObtenerDetalledeProcesoComponent1750446218109 } from './api-doc-page/Cadena-de-Cierre/ObtenerDetalledeProceso.component';
import { ObtenerProcesosconErrorComponent1750446218110 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosconError.component';
import { ObtenerProcesosCriticosComponent1750446218111 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosCriticos.component';
import { ObtenerProcesosDiariosComponent1750446218112 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosDiarios.component';
import { ObtenerProcesosMensualesComponent1750446218113 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosMensuales.component';
import { ObtenerProcesosReprocesablesComponent1750446218114 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosReprocesables.component';
import { VerificarEstadoServidorComponent1750446218115 } from './api-doc-page/Cadena-de-Cierre/VerificarEstadoServidor.component';
import { CalcularFechadeVencimientoComponent1750446218117 } from './api-doc-page/Calendarios/Calcular/CalcularFechadeVencimiento.component';
import { CalcularFechadeVencimientoenDiasHabilesComponent1750446218118 } from './api-doc-page/Calendarios/Calcular/CalcularFechadeVencimientoenDiasHabiles.component';
import { CalcularPlazoComponent1750446218120 } from './api-doc-page/Calendarios/Calcular/CalcularPlazo.component';
import { CalcularPlazoenDiasHabilesComponent1750446218122 } from './api-doc-page/Calendarios/Calcular/CalcularPlazoenDiasHabiles.component';
import { ObtenerFechaHabilComponent1750446218123 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabil.component';
import { ObtenerFechaHabilAnteriorComponent1750446218126 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabilAnterior.component';
import { ObtenerFechaHabilAnteriordeSucursalComponent1750446218127 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabilAnteriordeSucursal.component';
import { ObtenerFechaHabildeSucursalComponent1750446218128 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabildeSucursal.component';
import { ObtenerInicioyFindeMesComponent1750446218129 } from './api-doc-page/Calendarios/Obtener/ObtenerInicioyFindeMes.component';
import { ObtenerInicioyFindeMesdeSucursalComponent1750446218130 } from './api-doc-page/Calendarios/Obtener/ObtenerInicioyFindeMesdeSucursal.component';
import { ObtenerProximaFechaHabilComponent1750446218131 } from './api-doc-page/Calendarios/Obtener/ObtenerProximaFechaHabil.component';
import { ObtenerProximaFechaHabildeSucursalComponent1750446218132 } from './api-doc-page/Calendarios/Obtener/ObtenerProximaFechaHabildeSucursal.component';
import { AutorizarArchivoComponent1750446218133 } from './api-doc-page/CASH-Management/Archivo/AutorizarArchivo.component';
import { CargarArchivoComponent1750446218135 } from './api-doc-page/CASH-Management/Archivo/CargarArchivo.component';
import { CargarArchivoRecibidoComoDatoComponent1750446218137 } from './api-doc-page/CASH-Management/Archivo/CargarArchivoRecibidoComoDato.component';
import { DetenerArchivoComponent1750446218138 } from './api-doc-page/CASH-Management/Archivo/DetenerArchivo.component';
import { RechazarArchivoComponent1750446218139 } from './api-doc-page/CASH-Management/Archivo/RechazarArchivo.component';
import { CargarBeneficiariosComponent1750446218141 } from './api-doc-page/CASH-Management/Beneficiarios/CargarBeneficiarios.component';
import { IngresarBeneficiarioComponent1750446218142 } from './api-doc-page/CASH-Management/Beneficiarios/IngresarBeneficiario.component';
import { ObtenerBeneficiarioSegunFiltroComponent1750446218143 } from './api-doc-page/CASH-Management/Beneficiarios/ObtenerBeneficiarioSegunFiltro.component';
import { AltaAutomaticaContratoComponent1750446218144 } from './api-doc-page/CASH-Management/Contratar/AltaAutomaticaContrato.component';
import { CargarServiciosDisponiblesComponent1750446218146 } from './api-doc-page/CASH-Management/Contratar/CargarServiciosDisponibles.component';
import { ContratarDebitoAutomaticoComponent1750446218147 } from './api-doc-page/CASH-Management/Contratar/ContratarDebitoAutomatico.component';
import { ObtenerDetalledeOrdendeCuentaComponent1750446218148 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalledeOrdendeCuenta.component';
import { ObtenerDetalledePagoComponent1750446218150 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalledePago.component';
import { ObtenerDetalleOrdenSegunCampoComponent1750446218152 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalleOrdenSegunCampo.component';
import { ObtenerDetallePagoOrdenComponent1750446218154 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetallePagoOrden.component';
import { ObtenerDeudaComponent1750446218156 } from './api-doc-page/CASH-Management/Obtener/ObtenerDeuda.component';
import { ObtenerResumenOrdenComponent1750446218157 } from './api-doc-page/CASH-Management/Obtener/ObtenerResumenOrden.component';
import { ObtenerServiciosComponent1750446218159 } from './api-doc-page/CASH-Management/Obtener/ObtenerServicios.component';
import { ObtenerValoresOrdenComponent1750446218160 } from './api-doc-page/CASH-Management/Obtener/ObtenerValoresOrden.component';
import { ObtenerValoresOrdenSegunCampoComponent1750446218161 } from './api-doc-page/CASH-Management/Obtener/ObtenerValoresOrdenSegunCampo.component';
import { AutorizarOrdenComponent1750446218162 } from './api-doc-page/CASH-Management/Orden/AutorizarOrden.component';
import { DetenerOrdenComponent1750446218163 } from './api-doc-page/CASH-Management/Orden/DetenerOrden.component';
import { IngresarOrdenPagoComponent1750446218164 } from './api-doc-page/CASH-Management/Orden/IngresarOrdenPago.component';
import { ProcesarOrdenComponent1750446218165 } from './api-doc-page/CASH-Management/Orden/ProcesarOrden.component';
import { RechazarOrdenComponent1750446218166 } from './api-doc-page/CASH-Management/Orden/RechazarOrden.component';
import { AnularPagoDeudaComponent1750446218167 } from './api-doc-page/CASH-Management/Pagos/AnularPagoDeuda.component';
import { PagarDeudaDesdeCuentaComponent1750446218169 } from './api-doc-page/CASH-Management/Pagos/PagarDeudaDesdeCuenta.component';
import { RegistrarPagoDeudaComponent1750446218171 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoDeuda.component';
import { RegistrarPagoEnLineaComponent1750446218173 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoEnLinea.component';
import { RegistrarPagoEnLineaDesdeCuentaComponent1750446218175 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoEnLineaDesdeCuenta.component';
import { VisualizarListaResumenCabezalComponent1750446218178 } from './api-doc-page/CASH-Management/Visualizar/VisualizarListaResumenCabezal.component';
import { VisualizarListaResumenCabezalOrdenComponent1750446218180 } from './api-doc-page/CASH-Management/Visualizar/VisualizarListaResumenCabezalOrden.component';
import { VisualizarOrdendeArchivoParaCuentaComponent1750446218181 } from './api-doc-page/CASH-Management/Visualizar/VisualizarOrdendeArchivoParaCuenta.component';
import { VisualizarResultadoProcesamientoComponent1750446218183 } from './api-doc-page/CASH-Management/Visualizar/VisualizarResultadoProcesamiento.component';
import { VisualizarResumenCabezalComponent1750446218185 } from './api-doc-page/CASH-Management/Visualizar/VisualizarResumenCabezal.component';
import { VisualizarSituacionArchivosComponent1750446218188 } from './api-doc-page/CASH-Management/Visualizar/VisualizarSituacionArchivos.component';
import { VisualizarSituacionLineasComponent1750446218191 } from './api-doc-page/CASH-Management/Visualizar/VisualizarSituacionLineas.component';
import { CHATComponent1750446218194 } from './api-doc-page/CHAT/CHAT.component';
import { ActualizarComponent1750446218196 } from './api-doc-page/Clientes/Actualizar/Actualizar.component';
import { ActualizarDocumentoDigitalComponent1750446218198 } from './api-doc-page/Clientes/Actualizar/ActualizarDocumentoDigital.component';
import { ActualizarDomicilioComponent1750446218199 } from './api-doc-page/Clientes/Actualizar/ActualizarDomicilio.component';
import { ActualizarInformacionAdicionalComponent1750446218202 } from './api-doc-page/Clientes/Actualizar/ActualizarInformacionAdicional.component';
import { ActualizarRegistroEmpleadoComponent1750446218204 } from './api-doc-page/Clientes/Actualizar/ActualizarRegistroEmpleado.component';
import { ActualizarTelefonoComponent1750446218207 } from './api-doc-page/Clientes/Actualizar/ActualizarTelefono.component';
import { AgregarDomicilioComponent1750446218208 } from './api-doc-page/Clientes/Actualizar/AgregarDomicilio.component';
import { AgregarInformacionAdicionalComponent1750446218209 } from './api-doc-page/Clientes/Actualizar/AgregarInformacionAdicional.component';
import { AgregarIntegranteComponent1750446218210 } from './api-doc-page/Clientes/Actualizar/AgregarIntegrante.component';
import { AgregarTelefonoComponent1750446218212 } from './api-doc-page/Clientes/Actualizar/AgregarTelefono.component';
import { AsociarDocumentoDigitalComponent1750446218213 } from './api-doc-page/Clientes/Actualizar/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750446218214 } from './api-doc-page/Clientes/Actualizar/EliminarDocumentoDigital.component';
import { EliminarDomicilioComponent1750446218215 } from './api-doc-page/Clientes/Actualizar/EliminarDomicilio.component';
import { EliminarInformacionAdicionalComponent1750446218216 } from './api-doc-page/Clientes/Actualizar/EliminarInformacionAdicional.component';
import { EliminarIntegranteComponent1750446218218 } from './api-doc-page/Clientes/Actualizar/EliminarIntegrante.component';
import { HabilitarComponent1750446218221 } from './api-doc-page/Clientes/Actualizar/Habilitar.component';
import { InhabilitarComponent1750446218223 } from './api-doc-page/Clientes/Actualizar/Inhabilitar.component';
import { ModificarEjecutivoComponent1750446218224 } from './api-doc-page/Clientes/Actualizar/ModificarEjecutivo.component';
import { CrearComponent1750446218226 } from './api-doc-page/Clientes/Crear/Crear.component';
import { CrearconPersonaExistenteComponent1750446218228 } from './api-doc-page/Clientes/Crear/CrearconPersonaExistente.component';
import { CrearParaPersonaJuridicaComponent1750446218230 } from './api-doc-page/Clientes/Crear/CrearParaPersonaJuridica.component';
import { ObtenerComponent1750446218232 } from './api-doc-page/Clientes/Obtener/Obtener.component';
import { ObtenerAhorrosProgramadosComponent1750446218233 } from './api-doc-page/Clientes/Obtener/ObtenerAhorrosProgramados.component';
import { ObtenerBolsillosComponent1750446218239 } from './api-doc-page/Clientes/Obtener/ObtenerBolsillos.component';
import { ObtenerClasificacionesInternasComponent1750446218242 } from './api-doc-page/Clientes/Obtener/ObtenerClasificacionesInternas.component';
import { ObtenerCuentaClienteComponent1750446218244 } from './api-doc-page/Clientes/Obtener/ObtenerCuentaCliente.component';
import { ObtenerCuentasCorrientesSaldoContableComponent1750446218246 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasCorrientesSaldoContable.component';
import { ObtenerCuentasCorrientesSaldoDisponibleComponent1750446218248 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasCorrientesSaldoDisponible.component';
import { ObtenerCuentasdeAhorroSaldoContableComponent1750446218250 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasdeAhorroSaldoContable.component';
import { ObtenerCuentasdeAhorroSaldoDisponibleComponent1750446218254 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasdeAhorroSaldoDisponible.component';
import { ObtenerDatosComponent1750446218258 } from './api-doc-page/Clientes/Obtener/ObtenerDatos.component';
import { ObtenerDetallePosicionComponent1750446218259 } from './api-doc-page/Clientes/Obtener/ObtenerDetallePosicion.component';
import { ObtenerDocumentoDigitalComponent1750446218261 } from './api-doc-page/Clientes/Obtener/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750446218262 } from './api-doc-page/Clientes/Obtener/ObtenerDocumentosDigitales.component';
import { ObtenerDomiciliosComponent1750446218263 } from './api-doc-page/Clientes/Obtener/ObtenerDomicilios.component';
import { ObtenerFacultadesComponent1750446218264 } from './api-doc-page/Clientes/Obtener/ObtenerFacultades.component';
import { ObtenerIdentificadorUnicoComponent1750446218266 } from './api-doc-page/Clientes/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerInformacionAdicionalComponent1750446218267 } from './api-doc-page/Clientes/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerIntegrantesComponent1750446218269 } from './api-doc-page/Clientes/Obtener/ObtenerIntegrantes.component';
import { ObtenerLimitesComponent1750446218271 } from './api-doc-page/Clientes/Obtener/ObtenerLimites.component';
import { ObtenerMotivosInhabilitacionComponent1750446218272 } from './api-doc-page/Clientes/Obtener/ObtenerMotivosInhabilitacion.component';
import { ObtenerPerfilComponent1750446218274 } from './api-doc-page/Clientes/Obtener/ObtenerPerfil.component';
import { ObtenerPlazosFijosComponent1750446218277 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijos.component';
import { ObtenerPlazosFijosCanceladosComponent1750446218278 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijosCancelados.component';
import { ObtenerPlazosFijosconAvanceComponent1750446218280 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijosconAvance.component';
import { ObtenerPosicionComponent1750446218282 } from './api-doc-page/Clientes/Obtener/ObtenerPosicion.component';
import { ObtenerPrestamosComponent1750446218283 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamos.component';
import { ObtenerPrestamosCanceladosComponent1750446218285 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosCancelados.component';
import { ObtenerPrestamosCastigadosComponent1750446218288 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosCastigados.component';
import { ObtenerPrestamosconAvanceComponent1750446218290 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosconAvance.component';
import { ObtenerResumendeProductosCierredeanoComponent1750446218292 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosCierredeano.component';
import { ObtenerResumendeProductosSaldosContablesComponent1750446218294 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosSaldosContables.component';
import { ObtenerResumendeProductosSaldosDisponiblesComponent1750446218295 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosSaldosDisponibles.component';
import { ObtenerResumenporProductoaCierreAnoComponent1750446218297 } from './api-doc-page/Clientes/Obtener/ObtenerResumenporProductoaCierreAno.component';
import { ObtenerRiesgodeCreditoComponent1750446218298 } from './api-doc-page/Clientes/Obtener/ObtenerRiesgodeCredito.component';
import { ObtenerSaldosdeOtrosProductosComponent1750446218300 } from './api-doc-page/Clientes/Obtener/ObtenerSaldosdeOtrosProductos.component';
import { ObtenerSectoresComponent1750446218302 } from './api-doc-page/Clientes/Obtener/ObtenerSectores.component';
import { ObtenerSegmentosComponent1750446218304 } from './api-doc-page/Clientes/Obtener/ObtenerSegmentos.component';
import { ObtenerTarjetasdeDebitoComponent1750446218306 } from './api-doc-page/Clientes/Obtener/ObtenerTarjetasdeDebito.component';
import { ObtenerTelefonosComponent1750446218308 } from './api-doc-page/Clientes/Obtener/ObtenerTelefonos.component';
import { ObtenerTiposdeIntegracionComponent1750446218311 } from './api-doc-page/Clientes/Obtener/ObtenerTiposdeIntegracion.component';
import { ObtenerTitularRepresentativoComponent1750446218323 } from './api-doc-page/Clientes/Obtener/ObtenerTitularRepresentativo.component';
import { ObtenerTitulosComponent1750446218326 } from './api-doc-page/Clientes/Obtener/ObtenerTitulos.component';
import { ValidarExistenciaComponent1750446218328 } from './api-doc-page/Clientes/Validar/ValidarExistencia.component';
import { VerificarEmpleadoComponent1750446218330 } from './api-doc-page/Clientes/Validar/VerificarEmpleado.component';
import { ObtenerAgenciasBancoComponent1750446218332 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerAgenciasBanco.component';
import { ObtenerBancosComponent1750446218333 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerBancos.component';
import { ObtenerDetalleSucursalComponent1750446218336 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerDetalleSucursal.component';
import { ObtenerSucursalesPrincipalesComponent1750446218338 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerSucursalesPrincipales.component';
import { ObtenerActividadesComponent1750446218340 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerActividades.component';
import { ObtenerActividadesporTipoComponent1750446218342 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerActividadesporTipo.component';
import { ObtenerEjecutivosComponent1750446218344 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerEjecutivos.component';
import { ObtenerTiposdeActividadComponent1750446218345 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerTiposdeActividad.component';
import { ObtenerTiposdeTarjetaComponent1750446218347 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerTiposdeTarjeta.component';
import { ObtenerImpuestosComponent1750446218348 } from './api-doc-page/Configuración-Bantotal/ObtenerImpuestos.component';
import { ObtenerTiposdeDocumentoDigitalComponent1750446218350 } from './api-doc-page/Configuración-Bantotal/ObtenerTiposdeDocumentoDigital.component';
import { ObtenerEstadosComponent1750446218354 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerEstados.component';
import { ObtenerInstruccionesComponent1750446218357 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerInstrucciones.component';
import { ObtenerPaquetesComponent1750446218359 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerPaquetes.component';
import { ObtenerTiposdeTextoComponent1750446218360 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerTiposdeTexto.component';
import { ObtenerCalendariodeSucursalComponent1750446218362 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerCalendariodeSucursal.component';
import { ObtenerCalendariosComponent1750446218364 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerCalendarios.component';
import { ObtenerDetalledeCalendarioComponent1750446218366 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDetalledeCalendario.component';
import { ObtenerDetalledeCalendariodeSucursalComponent1750446218368 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDetalledeCalendariodeSucursal.component';
import { ObtenerDolarUSAComponent1750446218371 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDolarUSA.component';
import { ObtenerEmpresaComponent1750446218373 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerEmpresa.component';
import { ObtenerFechadeSistemaComponent1750446218374 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerFechadeSistema.component';
import { ObtenerMonedaNacionalComponent1750446218376 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerMonedaNacional.component';
import { ObtenerMonedasComponent1750446218378 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerMonedas.component';
import { ObtenerSucursalesComponent1750446218380 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerSucursales.component';
import { ObtenerAgrupadoresDomicilioComponent1750446218381 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerAgrupadoresDomicilio.component';
import { ObtenerBarriosyColoniasComponent1750446218383 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerBarriosyColonias.component';
import { ObtenerCiudadesyLocalidadesComponent1750446218384 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerCiudadesyLocalidades.component';
import { ObtenerCodigosdeDomicilioComponent1750446218388 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerCodigosdeDomicilio.component';
import { ObtenerEstadosProvinciasyDepartamentosComponent1750446218390 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerEstadosProvinciasyDepartamentos.component';
import { ObtenerPaisesComponent1750446218392 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerPaises.component';
import { ObtenerTiposdeListasNegrasComponent1750446218394 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeListasNegras.component';
import { ObtenerTiposdeTelefonoComponent1750446218396 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeTelefono.component';
import { ObtenerTiposdeViviendaComponent1750446218397 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeVivienda.component';
import { ObtenerPizarraporModuloComponent1750446218399 } from './api-doc-page/Configuración-Bantotal/Precios/ObtenerPizarraporModulo.component';
import { ObtenerPizarrasComponent1750446218400 } from './api-doc-page/Configuración-Bantotal/Precios/ObtenerPizarras.component';
import { ObtenerMenusComponent1750446218402 } from './api-doc-page/Configuración-Bantotal/Seguridad/ObtenerMenus.component';
import { ObtenerPerfilesComponent1750446218404 } from './api-doc-page/Configuración-Bantotal/Seguridad/ObtenerPerfiles.component';
import { AgregarTextoAsientoComponent1750446218405 } from './api-doc-page/Contabilidad/Agregar-Texto/AgregarTextoAsiento.component';
import { AgregarTextoOrdinalComponent1750446218407 } from './api-doc-page/Contabilidad/Agregar-Texto/AgregarTextoOrdinal.component';
import { AnularMovimientoComponent1750446218409 } from './api-doc-page/Contabilidad/AnularMovimiento.component';
import { ActualizarCondicionImpositivaComponent1750446218411 } from './api-doc-page/Contabilidad/Condición-Impositiva/ActualizarCondicionImpositiva.component';
import { CrearCondicionImpositivaComponent1750446218412 } from './api-doc-page/Contabilidad/Condición-Impositiva/CrearCondicionImpositiva.component';
import { ObtenerIdBantotalMovimientoComponent1750446218413 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalMovimiento.component';
import { ObtenerIdBantotalOperacionComponent1750446218415 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalOperacion.component';
import { ObtenerIdBantotalProductoComponent1750446218416 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalProducto.component';
import { ObtenerIdentificadorUnicodeMovimientoComponent1750446218418 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeMovimiento.component';
import { ObtenerIdentificadorUnicodeOperacionComponent1750446218419 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeOperacion.component';
import { ObtenerIdentificadorUnicodeProductoComponent1750446218421 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeProducto.component';
import { ObtenerClientedeunaOperacionComponent1750446218422 } from './api-doc-page/Contabilidad/Obtener/ObtenerClientedeunaOperacion.component';
import { ObtenerCondicionImpositivaComponent1750446218424 } from './api-doc-page/Contabilidad/Obtener/ObtenerCondicionImpositiva.component';
import { ObtenerDetalledeMovimientoComponent1750446218426 } from './api-doc-page/Contabilidad/Obtener/ObtenerDetalledeMovimiento.component';
import { ObtenerDetalledeOrdinalComponent1750446218426 } from './api-doc-page/Contabilidad/Obtener/ObtenerDetalledeOrdinal.component';
import { ObtenerIntegrantesdeOperacionComponent1750446218427 } from './api-doc-page/Contabilidad/Obtener/ObtenerIntegrantesdeOperacion.component';
import { ObtenerTextosdeMovimientoComponent1750446218428 } from './api-doc-page/Contabilidad/Obtener/ObtenerTextosdeMovimiento.component';
import { RegistrarAsientoComponent1750446218429 } from './api-doc-page/Contabilidad/Registrar-Asiento/RegistrarAsiento.component';
import { RegistrarAsientoFechaValorComponent1750446218430 } from './api-doc-page/Contabilidad/Registrar-Asiento/RegistrarAsientoFechaValor.component';
import { CancelarComponent1750446218431 } from './api-doc-page/Cuentas-Bolsillo/Cancelar.component';
import { CashInComponent1750446218432 } from './api-doc-page/Cuentas-Bolsillo/CashIn.component';
import { CashOutComponent1750446218432 } from './api-doc-page/Cuentas-Bolsillo/CashOut.component';
import { ContratarComponent1750446218433 } from './api-doc-page/Cuentas-Bolsillo/Contratar.component';
import { ObtenerDatosComponent1750446218436 } from './api-doc-page/Cuentas-Bolsillo/ObtenerDatos.component';
import { ObtenerMovimientosComponent1750446218438 } from './api-doc-page/Cuentas-Bolsillo/ObtenerMovimientos.component';
import { ObtenerProductosComponent1750446218440 } from './api-doc-page/Cuentas-Bolsillo/ObtenerProductos.component';
import { ObtenerProductosCVComponent1750446218441 } from './api-doc-page/Cuentas-Bolsillo/ObtenerProductosCV.component';
import { ObtenerChequeraComponent1750446218442 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequera.component';
import { ObtenerChequerasComponent1750446218443 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequeras.component';
import { ObtenerChequesdeChequeraComponent1750446218444 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequesdeChequera.component';
import { ObtenerComisionChequeraComponent1750446218445 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerComisionChequera.component';
import { ObtenerEstadodeChequeraComponent1750446218445 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerEstadodeChequera.component';
import { ObtenerSolicitudesdeChequerasComponent1750446218446 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerSolicitudesdeChequeras.component';
import { ObtenerTiposdeChequeraComponent1750446218447 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerTiposdeChequera.component';
import { ObtenerTiposdeChequeraporProductoComponent1750446218448 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerTiposdeChequeraporProducto.component';
import { EliminarChequeraComponent1750446218449 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/EliminarChequera.component';
import { RegistrarOrdendeNoPagodeChequeraComponent1750446218450 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/RegistrarOrdendeNoPagodeChequera.component';
import { RegistrarOrdendeNoPagodeChequesComponent1750446218452 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/RegistrarOrdendeNoPagodeCheques.component';
import { SolicitarChequeraComponent1750446218453 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/SolicitarChequera.component';
import { ContratarconPeriodicidadComponent1750446218454 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarconPeriodicidad.component';
import { ContratarProductoComponent1750446218495 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarProducto.component';
import { ContratarProductoconAltadeFacultadesComponent1750446218496 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarProductoconAltadeFacultades.component';
import { ObtenerAcuerdosComponent1750446218498 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerAcuerdos.component';
import { ObtenerDatosComponent1750446218499 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerDatos.component';
import { ObtenerEstadodeCuentaComponent1750446218500 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerEvoluciondeSaldosComponent1750446218509 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerEvoluciondeSaldos.component';
import { ObtenerProductosComponent1750446218511 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerProductos.component';
import { ContratarconPeriodicidadComponent1750446218512 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarconPeriodicidad.component';
import { ContratarProductoComponent1750446218513 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarProducto.component';
import { ContratarProductoconAltadeFacultadesComponent1750446218514 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarProductoconAltadeFacultades.component';
import { ObtenerDatosComponent1750446218515 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerDatos.component';
import { ObtenerEstadodeCuentaComponent1750446218516 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerEvoluciondeSaldosComponent1750446218517 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerEvoluciondeSaldos.component';
import { ObtenerProductosComponent1750446218520 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerProductos.component';
import { ActualizarBeneficiariosComponent1750446218521 } from './api-doc-page/Cuentas-Vista/Beneficiarios/ActualizarBeneficiarios.component';
import { ObtenerBeneficiariosComponent1750446218523 } from './api-doc-page/Cuentas-Vista/Beneficiarios/ObtenerBeneficiarios.component';
import { ActualizarDocumentoDigitalComponent1750446218524 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750446218524 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750446218525 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750446218526 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750446218527 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ObtenerBolsillosComponent1750446218528 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerBolsillos.component';
import { ObtenerCBUdeCuentaVistaComponent1750446218529 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerCBUdeCuentaVista.component';
import { ObtenerCuentaVistadeCBUComponent1750446218530 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerCuentaVistadeCBU.component';
import { ObtenerDetalleBloqueoComponent1750446218531 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerDetalleBloqueo.component';
import { ObtenerEstadodeCuentaporPeriodoComponent1750446218532 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerEstadodeCuentaporPeriodo.component';
import { ObtenerEstadoDeOperacionComponent1750446218533 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerEstadoDeOperacion.component';
import { ObtenerFacultadesComponent1750446218535 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerFacultades.component';
import { ObtenerPaqueteComponent1750446218537 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPaquete.component';
import { ObtenerPeriododeAcreditacionComponent1750446218539 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPeriododeAcreditacion.component';
import { ObtenerPeriodosdeAcreditacionComponent1750446218538 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPeriodosdeAcreditacion.component';
import { ObtenerSaldoBloqueadoComponent1750446218539 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldoBloqueado.component';
import { ObtenerSaldoDisponibleComponent1750446218540 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldoDisponible.component';
import { ObtenerSaldosBloqueadosComponent1750446218541 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldosBloqueados.component';
import { AcreditarEnCuentaComponent1750446218541 } from './api-doc-page/Cuentas-Vista/Operar/AcreditarEnCuenta.component';
import { ActivarComponent1750446218542 } from './api-doc-page/Cuentas-Vista/Operar/Activar.component';
import { ActualizarPeriododeAcreditacionComponent1750446218543 } from './api-doc-page/Cuentas-Vista/Operar/ActualizarPeriododeAcreditacion.component';
import { BloquearSaldoComponent1750446218544 } from './api-doc-page/Cuentas-Vista/Operar/BloquearSaldo.component';
import { CancelarComponent1750446218544 } from './api-doc-page/Cuentas-Vista/Operar/Cancelar.component';
import { DebitarEnCuentaComponent1750446218545 } from './api-doc-page/Cuentas-Vista/Operar/DebitarEnCuenta.component';
import { DesbloquearSaldoComponent1750446218546 } from './api-doc-page/Cuentas-Vista/Operar/DesbloquearSaldo.component';
import { ActualizarPerfilTransaccionalComponent1750446218547 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/ActualizarPerfilTransaccional.component';
import { AgregarPerfilTransaccionalComponent1750446218547 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/AgregarPerfilTransaccional.component';
import { ObtenerPerfilTransaccionalComponent1750446218548 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/ObtenerPerfilTransaccional.component';
import { TraspasarConTipoDeCambioEspecialComponent1750446218549 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarConTipoDeCambioEspecial.component';
import { TraspasarEntreCuentasdelaMismaPersonaComponent1750446218550 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasdelaMismaPersona.component';
import { TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750446218551 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasMismoTitularcontipodecambio.component';
import { TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750446218554 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasMismoTitulardiferentesmonedas.component';
import { TraspasarEntreCuentasPropiasComponent1750446218557 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropias.component';
import { TraspasarEntreCuentasPropiascontipodecambioComponent1750446218555 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropiascontipodecambio.component';
import { TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750446218556 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropiasdiferentesmonedas.component';
import { TraspasarEntreCuentasTercerosComponent1750446218559 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTerceros.component';
import { TraspasarEntreCuentasTerceroscontipodecambioComponent1750446218558 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTerceroscontipodecambio.component';
import { TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750446218559 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTercerosdiferentesmonedas.component';
import { ActualizarBeneficiariosComponent1750446218560 } from './api-doc-page/Depósitos-a-Plazo/Beneficiarios/ActualizarBeneficiarios.component';
import { ObtenerBeneficiariosComponent1750446218561 } from './api-doc-page/Depósitos-a-Plazo/Beneficiarios/ObtenerBeneficiarios.component';
import { ContratarComponent1750446218562 } from './api-doc-page/Depósitos-a-Plazo/Contratar/Contratar.component';
import { ContratarConFacultadesComponent1750446218563 } from './api-doc-page/Depósitos-a-Plazo/Contratar/ContratarConFacultades.component';
import { ContratarSimulacionComponent1750446218564 } from './api-doc-page/Depósitos-a-Plazo/Contratar/ContratarSimulacion.component';
import { ActualizarDocumentoDigitalComponent1750446218564 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750446218565 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750446218566 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750446218567 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ModificarCuentaDestinoalVencimientoComponent1750446218569 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarCuentaDestinoalVencimiento.component';
import { ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750446218570 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarCuentaDestinodeAcreditacionPeriodica.component';
import { ModificarInstruccionComponent1750446218572 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarInstruccion.component';
import { ObtenerAvanceComponent1750446218573 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerAvance.component';
import { ObtenerDatosComponent1750446218575 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDatos.component';
import { ObtenerDatosPrecancelacionComponent1750446218576 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDatosPrecancelacion.component';
import { ObtenerDocumentosDigitalesComponent1750446218576 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDocumentosDigitales.component';
import { ObtenerInstruccionComponent1750446218579 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerInstruccion.component';
import { ObtenerInstruccionesHabilitadosComponent1750446218578 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerInstruccionesHabilitados.component';
import { ObtenerMovimientosComponent1750446218580 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerMovimientos.component';
import { ObtenerPeriodosHabilitadosComponent1750446218581 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerPeriodosHabilitados.component';
import { ObtenerProductosComponent1750446218582 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerProductos.component';
import { ObtenerProductosHabilitadosComponent1750446218583 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerProductosHabilitados.component';
import { ObtenerTasadePrecancelacionComponent1750446218584 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerTasadePrecancelacion.component';
import { PrecancelarComponent1750446218586 } from './api-doc-page/Depósitos-a-Plazo/Precancelar.component';
import { SimularComponent1750446218587 } from './api-doc-page/Depósitos-a-Plazo/Simular/Simular.component';
import { SimularConCronogramaComponent1750446218589 } from './api-doc-page/Depósitos-a-Plazo/Simular/SimularConCronograma.component';
import { ConfirmarListaComponent1750446218590 } from './api-doc-page/Descuento-de-Documentos/ConfirmarLista.component';
import { CrearListaComponent1750446218591 } from './api-doc-page/Descuento-de-Documentos/CrearLista.component';
import { CrearListaChequesComponent1750446218592 } from './api-doc-page/Descuento-de-Documentos/CrearListaCheques.component';
import { ObtenerProductosComponent1750446218593 } from './api-doc-page/Descuento-de-Documentos/ObtenerProductos.component';
import { ObtenerTiposDeDesembolsoComponent1750446218593 } from './api-doc-page/Descuento-de-Documentos/ObtenerTiposDeDesembolso.component';
import { SeleccionarOpcionDesembolsoComponent1750446218594 } from './api-doc-page/Descuento-de-Documentos/SeleccionarOpcionDesembolso.component';
import { ObtenerAgrupadoresComponent1750446218595 } from './api-doc-page/Indicadores/ObtenerAgrupadores.component';
import { ObtenerCierredeSaldosporMonedaComponent1750446218596 } from './api-doc-page/Indicadores/ObtenerCierredeSaldosporMoneda.component';
import { ObtenerCondicionesGeneralesComponent1750446218597 } from './api-doc-page/Indicadores/ObtenerCondicionesGenerales.component';
import { ObtenerIndicadoresComponent1750446218598 } from './api-doc-page/Indicadores/ObtenerIndicadores.component';
import { ObtenerMetodosMasEjecutadosComponent1750446218599 } from './api-doc-page/Indicadores/ObtenerMetodosMasEjecutados.component';
import { ObtenerMonedasIndicesComponent1750446218600 } from './api-doc-page/Indicadores/ObtenerMonedasIndices.component';
import { ObtenerRubrosBolsaComponent1750446218601 } from './api-doc-page/Indicadores/ObtenerRubrosBolsa.component';
import { ObtenerServiciosMasEjecutadosComponent1750446218603 } from './api-doc-page/Indicadores/ObtenerServiciosMasEjecutados.component';
import { ObtenerSesionesPorUsuarioComponent1750446218604 } from './api-doc-page/Indicadores/ObtenerSesionesPorUsuario.component';
import { ObtenerSucursalesCajasComponent1750446218604 } from './api-doc-page/Indicadores/ObtenerSucursalesCajas.component';
import { ObtenerTransaccionesporEstadosComponent1750446218605 } from './api-doc-page/Indicadores/ObtenerTransaccionesporEstados.component';
import { BuscarClienteComponent1750446218606 } from './api-doc-page/Microfinanzas/BuscarCliente.component';
import { CompletarTareaComponent1750446218607 } from './api-doc-page/Microfinanzas/CompletarTarea.component';
import { CrearSolicitudAmpliacionComponent1750446218608 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudAmpliacion.component';
import { CrearSolicitudIndividualComponent1750446218609 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudIndividual.component';
import { CrearSolicitudRenovacionComponent1750446218609 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudRenovacion.component';
import { AgregarFiadorComponent1750446218610 } from './api-doc-page/Microfinanzas/Fiadores/AgregarFiador.component';
import { EliminarFiadorComponent1750446218611 } from './api-doc-page/Microfinanzas/Fiadores/EliminarFiador.component';
import { ActualizarGrupoComponent1750446218612 } from './api-doc-page/Microfinanzas/Grupales/ActualizarGrupo.component';
import { ActualizarIntegrantedeGrupoComponent1750446218613 } from './api-doc-page/Microfinanzas/Grupales/ActualizarIntegrantedeGrupo.component';
import { AgregarGrupoComponent1750446218613 } from './api-doc-page/Microfinanzas/Grupales/AgregarGrupo.component';
import { AgregarIntegranteaGrupoComponent1750446218614 } from './api-doc-page/Microfinanzas/Grupales/AgregarIntegranteaGrupo.component';
import { CrearSolicitudGrupalComponent1750446218615 } from './api-doc-page/Microfinanzas/Grupales/CrearSolicitudGrupal.component';
import { HabilitarIntegrantedeunGrupoComponent1750446218616 } from './api-doc-page/Microfinanzas/Grupales/HabilitarIntegrantedeunGrupo.component';
import { InhabilitarIntegrantedeunGrupoComponent1750446218616 } from './api-doc-page/Microfinanzas/Grupales/InhabilitarIntegrantedeunGrupo.component';
import { ObtenerDetalleGrupoComponent1750446218618 } from './api-doc-page/Microfinanzas/Grupales/ObtenerDetalleGrupo.component';
import { ObtenerGruposComponent1750446218621 } from './api-doc-page/Microfinanzas/Grupales/ObtenerGrupos.component';
import { ObtenerIntegrantesdeGrupoComponent1750446218622 } from './api-doc-page/Microfinanzas/Grupales/ObtenerIntegrantesdeGrupo.component';
import { ObtenerTiposdeGrupoComponent1750446218623 } from './api-doc-page/Microfinanzas/Grupales/ObtenerTiposdeGrupo.component';
import { ObtenerTiposdeIntegranteComponent1750446218625 } from './api-doc-page/Microfinanzas/Grupales/ObtenerTiposdeIntegrante.component';
import { SimularPrestamoAmortizableGrupalComponent1750446218626 } from './api-doc-page/Microfinanzas/Grupales/SimularPrestamoAmortizableGrupal.component';
import { ObtenerAsesoresComponent1750446218628 } from './api-doc-page/Microfinanzas/Obtener/ObtenerAsesores.component';
import { ObtenerCampanasComponent1750446218629 } from './api-doc-page/Microfinanzas/Obtener/ObtenerCampanas.component';
import { ObtenerDestinosCreditoComponent1750446218630 } from './api-doc-page/Microfinanzas/Obtener/ObtenerDestinosCredito.component';
import { ObtenerOperacionesClienteComponent1750446218631 } from './api-doc-page/Microfinanzas/Obtener/ObtenerOperacionesCliente.component';
import { ObtenerOrigenesdeCaptacionComponent1750446218633 } from './api-doc-page/Microfinanzas/Obtener/ObtenerOrigenesdeCaptacion.component';
import { ObtenerProductosComponent1750446218636 } from './api-doc-page/Microfinanzas/Obtener/ObtenerProductos.component';
import { ObtenerSolicitudesClienteComponent1750446218638 } from './api-doc-page/Microfinanzas/Obtener/ObtenerSolicitudesCliente.component';
import { ObtenerTiposAvalComponent1750446218639 } from './api-doc-page/Microfinanzas/Obtener/ObtenerTiposAval.component';
import { AgregarOperacionesaCancelarComponent1750446218640 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/AgregarOperacionesaCancelar.component';
import { ObtenerOperacionesaCancelarComponent1750446218642 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/ObtenerOperacionesaCancelar.component';
import { QuitarOperacionesaCancelarComponent1750446218643 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/QuitarOperacionesaCancelar.component';
import { SimularLibreAmortizacionComponent1750446218645 } from './api-doc-page/Microfinanzas/Simular/SimularLibreAmortizacion.component';
import { SimularPrestamoAmortizableComponent1750446218646 } from './api-doc-page/Microfinanzas/Simular/SimularPrestamoAmortizable.component';
import { SimularPrestamoPlazoFijoComponent1750446218648 } from './api-doc-page/Microfinanzas/Simular/SimularPrestamoPlazoFijo.component';
import { ValidarPoliticasComponent1750446218649 } from './api-doc-page/Microfinanzas/ValidarPoliticas.component';
import { ObtenerCantidadCuotasComponent1750446218650 } from './api-doc-page/Modelador-de-Préstamos/ObtenerCantidadCuotas.component';
import { ObtenerCapitalComponent1750446218653 } from './api-doc-page/Modelador-de-Préstamos/ObtenerCapital.component';
import { ObtenerComisionesComponent1750446218655 } from './api-doc-page/Modelador-de-Préstamos/ObtenerComisiones.component';
import { ObtenerComisionesporCuotaComponent1750446218656 } from './api-doc-page/Modelador-de-Préstamos/ObtenerComisionesporCuota.component';
import { ObtenerDiasPrimerPeriodoComponent1750446218658 } from './api-doc-page/Modelador-de-Préstamos/ObtenerDiasPrimerPeriodo.component';
import { ObtenerPeriodoEntreCuotasComponent1750446218660 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPeriodoEntreCuotas.component';
import { ObtenerPermiteSegurosdelMismoTipoComponent1750446218659 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPermiteSegurosdelMismoTipo.component';
import { ObtenerPlazoComponent1750446218661 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPlazo.component';
import { ObtenerRequiereSegurodeVidaObligatorioComponent1750446218662 } from './api-doc-page/Modelador-de-Préstamos/ObtenerRequiereSegurodeVidaObligatorio.component';
import { ObtenerSegurosComponent1750446218662 } from './api-doc-page/Modelador-de-Préstamos/ObtenerSeguros.component';
import { ObtenerItemsModeloComponent1750446218663 } from './api-doc-page/PAE/ObtenerItemsModelo.component';
import { ObtenerModelosPAEComponent1750446218664 } from './api-doc-page/PAE/ObtenerModelosPAE.component';
import { ObtenerScoresComponent1750446218665 } from './api-doc-page/PAE/ObtenerScores.component';
import { ObtenerTiposDeModelosComponent1750446218666 } from './api-doc-page/PAE/ObtenerTiposDeModelos.component';
import { ContratarPrestamoComponent1750446218667 } from './api-doc-page/Partners/Contratar/ContratarPrestamo.component';
import { ContratarVehicularComponent1750446218670 } from './api-doc-page/Partners/Contratar/ContratarVehicular.component';
import { CrearClienteComponent1750446218671 } from './api-doc-page/Partners/Crear/CrearCliente.component';
import { CrearPersonaClienteComponent1750446218673 } from './api-doc-page/Partners/Crear/CrearPersonaCliente.component';
import { ObtenerDatosdeUsuarioComponent1750446218674 } from './api-doc-page/Partners/Obtener/ObtenerDatosdeUsuario.component';
import { ObtenerDetalledeOfertaAmortizableComponent1750446218676 } from './api-doc-page/Partners/Obtener/ObtenerDetalledeOfertaAmortizable.component';
import { ObtenerDetalleOfertaVehicularComponent1750446218677 } from './api-doc-page/Partners/Obtener/ObtenerDetalleOfertaVehicular.component';
import { ObtenerMarcasComponent1750446218678 } from './api-doc-page/Partners/Obtener/ObtenerMarcas.component';
import { ObtenerModelosComponent1750446218678 } from './api-doc-page/Partners/Obtener/ObtenerModelos.component';
import { ObtenerPartnersComponent1750446218679 } from './api-doc-page/Partners/Obtener/ObtenerPartners.component';
import { ObtenerPrestamosdeClienteComponent1750446218682 } from './api-doc-page/Partners/Obtener/ObtenerPrestamosdeCliente.component';
import { ObtenerProductosComponent1750446218680 } from './api-doc-page/Partners/Obtener/ObtenerProductos.component';
import { ObtenerProductosdelPartnerComponent1750446218681 } from './api-doc-page/Partners/Obtener/ObtenerProductosdelPartner.component';
import { ObtenerPuntosdeVentaComponent1750446218683 } from './api-doc-page/Partners/Obtener/ObtenerPuntosdeVenta.component';
import { ObtenerVendedoresComponent1750446218683 } from './api-doc-page/Partners/Obtener/ObtenerVendedores.component';
import { ObtenerVersionesComponent1750446218686 } from './api-doc-page/Partners/Obtener/ObtenerVersiones.component';
import { SimularOfertasComponent1750446218687 } from './api-doc-page/Partners/Simular/SimularOfertas.component';
import { SimularOfertasVehicularComponent1750446218688 } from './api-doc-page/Partners/Simular/SimularOfertasVehicular.component';
import { SimularPrestamoComponent1750446218689 } from './api-doc-page/Partners/Simular/SimularPrestamo.component';
import { SimularVehicularComponent1750446218690 } from './api-doc-page/Partners/Simular/SimularVehicular.component';
import { ObtenerCorrelativoGuiaComponent1750446218692 } from './api-doc-page/Parámetros-Base/ObtenerCorrelativoGuia.component';
import { ObtenerCorrelativoGuiaEspecialComponent1750446218692 } from './api-doc-page/Parámetros-Base/ObtenerCorrelativoGuiaEspecial.component';
import { ObtenerGuiadeProcesoComponent1750446218693 } from './api-doc-page/Parámetros-Base/ObtenerGuiadeProceso.component';
import { ObtenerGuiaEspecialdeProcesoComponent1750446218694 } from './api-doc-page/Parámetros-Base/ObtenerGuiaEspecialdeProceso.component';
import { ObtenerOpcionGeneraldeProcesoComponent1750446218695 } from './api-doc-page/Parámetros-Base/ObtenerOpcionGeneraldeProceso.component';
import { ObtenerOpcionGeneralPorModuloComponent1750446218696 } from './api-doc-page/Parámetros-Base/ObtenerOpcionGeneralPorModulo.component';
import { ObtenerProgramaParticularComponent1750446218696 } from './api-doc-page/Parámetros-Base/ObtenerProgramaParticular.component';
import { ActualizarComponent1750446218697 } from './api-doc-page/Personas/Actualizar/Actualizar.component';
import { ActualizarCelularComponent1750446218698 } from './api-doc-page/Personas/Actualizar/ActualizarCelular.component';
import { ActualizarContactoComponent1750446218699 } from './api-doc-page/Personas/Actualizar/ActualizarContacto.component';
import { ActualizarConyugeComponent1750446218701 } from './api-doc-page/Personas/Actualizar/ActualizarConyuge.component';
import { ActualizarCorreoElectronicoComponent1750446218700 } from './api-doc-page/Personas/Actualizar/ActualizarCorreoElectronico.component';
import { ActualizarDomicilioComponent1750446218703 } from './api-doc-page/Personas/Actualizar/ActualizarDomicilio.component';
import { ActualizarFATCAComponent1750446218704 } from './api-doc-page/Personas/Actualizar/ActualizarFATCA.component';
import { ActualizarInformacionAdicionalComponent1750446218705 } from './api-doc-page/Personas/Actualizar/ActualizarInformacionAdicional.component';
import { ActualizarInformacionFinancieraComponent1750446218707 } from './api-doc-page/Personas/Actualizar/ActualizarInformacionFinanciera.component';
import { ActualizarIntegrantedePersonaJuridicaComponent1750446218708 } from './api-doc-page/Personas/Actualizar/ActualizarIntegrantedePersonaJuridica.component';
import { ActualizarPersonaJuridicaComponent1750446218709 } from './api-doc-page/Personas/Actualizar/ActualizarPersonaJuridica.component';
import { ActualizarProfesionComponent1750446218710 } from './api-doc-page/Personas/Actualizar/ActualizarProfesion.component';
import { ActualizarReferenciaComponent1750446218712 } from './api-doc-page/Personas/Actualizar/ActualizarReferencia.component';
import { ActualizarRegistroEmpleadoComponent1750446218712 } from './api-doc-page/Personas/Actualizar/ActualizarRegistroEmpleado.component';
import { ActualizarTelefonoComponent1750446218713 } from './api-doc-page/Personas/Actualizar/ActualizarTelefono.component';
import { ActualizarVictimaHechoViolentoComponent1750446218714 } from './api-doc-page/Personas/Actualizar/ActualizarVictimaHechoViolento.component';
import { ModificarDocumentoAdicionalComponent1750446218715 } from './api-doc-page/Personas/Actualizar/ModificarDocumentoAdicional.component';
import { AgregaraListaNegraComponent1750446218716 } from './api-doc-page/Personas/Agregar/AgregaraListaNegra.component';
import { AgregarContactoComponent1750446218717 } from './api-doc-page/Personas/Agregar/AgregarContacto.component';
import { AgregarCorreoElectronicoComponent1750446218719 } from './api-doc-page/Personas/Agregar/AgregarCorreoElectronico.component';
import { AgregarDatosPEPComponent1750446218720 } from './api-doc-page/Personas/Agregar/AgregarDatosPEP.component';
import { AgregarDocumentoAdicionalComponent1750446218721 } from './api-doc-page/Personas/Agregar/AgregarDocumentoAdicional.component';
import { AgregarDomicilioComponent1750446218723 } from './api-doc-page/Personas/Agregar/AgregarDomicilio.component';
import { AgregarEstadoFinancieroComponent1750446218724 } from './api-doc-page/Personas/Agregar/AgregarEstadoFinanciero.component';
import { AgregarFATCAComponent1750446218725 } from './api-doc-page/Personas/Agregar/AgregarFATCA.component';
import { AgregarInformacionAdicionalComponent1750446218726 } from './api-doc-page/Personas/Agregar/AgregarInformacionAdicional.component';
import { AgregarInformacionFinancieraComponent1750446218727 } from './api-doc-page/Personas/Agregar/AgregarInformacionFinanciera.component';
import { AgregarIntegranteaPersonaJuridicaComponent1750446218728 } from './api-doc-page/Personas/Agregar/AgregarIntegranteaPersonaJuridica.component';
import { AgregarPersonaVinculadaComponent1750446218729 } from './api-doc-page/Personas/Agregar/AgregarPersonaVinculada.component';
import { AgregarReferenciaComponent1750446218730 } from './api-doc-page/Personas/Agregar/AgregarReferencia.component';
import { AgregarTelefonoComponent1750446218730 } from './api-doc-page/Personas/Agregar/AgregarTelefono.component';
import { AgregarVictimaHechoViolentoComponent1750446218731 } from './api-doc-page/Personas/Agregar/AgregarVictimaHechoViolento.component';
import { CrearComponent1750446218733 } from './api-doc-page/Personas/Crear/Crear.component';
import { CrearConyugeComponent1750446218736 } from './api-doc-page/Personas/Crear/CrearConyuge.component';
import { CrearPersonaJuridicaComponent1750446218740 } from './api-doc-page/Personas/Crear/CrearPersonaJuridica.component';
import { CrearReducidoComponent1750446218742 } from './api-doc-page/Personas/Crear/CrearReducido.component';
import { ActualizarDocumentoDigitalComponent1750446218743 } from './api-doc-page/Personas/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750446218744 } from './api-doc-page/Personas/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750446218745 } from './api-doc-page/Personas/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750446218745 } from './api-doc-page/Personas/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750446218746 } from './api-doc-page/Personas/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { EliminarConyugeComponent1750446218747 } from './api-doc-page/Personas/Eliminar/EliminarConyuge.component';
import { EliminarDocumentoAdicionalComponent1750446218748 } from './api-doc-page/Personas/Eliminar/EliminarDocumentoAdicional.component';
import { EliminarDomicilioComponent1750446218748 } from './api-doc-page/Personas/Eliminar/EliminarDomicilio.component';
import { EliminarInformacionAdicionalComponent1750446218749 } from './api-doc-page/Personas/Eliminar/EliminarInformacionAdicional.component';
import { EliminarIntegrantedePersonaJuridicaComponent1750446218750 } from './api-doc-page/Personas/Eliminar/EliminarIntegrantedePersonaJuridica.component';
import { EliminarPersonaVinculadaComponent1750446218751 } from './api-doc-page/Personas/Eliminar/EliminarPersonaVinculada.component';
import { EliminarProfesionComponent1750446218753 } from './api-doc-page/Personas/Eliminar/EliminarProfesion.component';
import { ObtenerComponent1750446218755 } from './api-doc-page/Personas/Obtener/Obtener.component';
import { ObtenerConceptoComponent1750446218756 } from './api-doc-page/Personas/Obtener/ObtenerConcepto.component';
import { ObtenerContactosComponent1750446218757 } from './api-doc-page/Personas/Obtener/ObtenerContactos.component';
import { ObtenerConyugeComponent1750446218760 } from './api-doc-page/Personas/Obtener/ObtenerConyuge.component';
import { ObtenerCorreosElectronicosComponent1750446218758 } from './api-doc-page/Personas/Obtener/ObtenerCorreosElectronicos.component';
import { ObtenerCuentasClienteComponent1750446218759 } from './api-doc-page/Personas/Obtener/ObtenerCuentasCliente.component';
import { ObtenerDatosPEPComponent1750446218761 } from './api-doc-page/Personas/Obtener/ObtenerDatosPEP.component';
import { ObtenerDocumentosAdicionalesComponent1750446218762 } from './api-doc-page/Personas/Obtener/ObtenerDocumentosAdicionales.component';
import { ObtenerDomiciliosComponent1750446218762 } from './api-doc-page/Personas/Obtener/ObtenerDomicilios.component';
import { ObtenerEstadosCivilesComponent1750446218763 } from './api-doc-page/Personas/Obtener/ObtenerEstadosCiviles.component';
import { ObtenerFacultadesComponent1750446218764 } from './api-doc-page/Personas/Obtener/ObtenerFacultades.component';
import { ObtenerFATCAComponent1750446218765 } from './api-doc-page/Personas/Obtener/ObtenerFATCA.component';
import { ObtenerHobbiesComponent1750446218765 } from './api-doc-page/Personas/Obtener/ObtenerHobbies.component';
import { ObtenerHobbyComponent1750446218766 } from './api-doc-page/Personas/Obtener/ObtenerHobby.component';
import { ObtenerIdBantotalComponent1750446218767 } from './api-doc-page/Personas/Obtener/ObtenerIdBantotal.component';
import { ObtenerIdentidadesdeGeneroComponent1750446218771 } from './api-doc-page/Personas/Obtener/ObtenerIdentidadesdeGenero.component';
import { ObtenerIdentificadorUnicoComponent1750446218772 } from './api-doc-page/Personas/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerInformacionAdicionalComponent1750446218773 } from './api-doc-page/Personas/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerInformacionFinancieraComponent1750446218775 } from './api-doc-page/Personas/Obtener/ObtenerInformacionFinanciera.component';
import { ObtenerIntegrantesPersonaJuridicaComponent1750446218777 } from './api-doc-page/Personas/Obtener/ObtenerIntegrantesPersonaJuridica.component';
import { ObtenerLimitesComponent1750446218778 } from './api-doc-page/Personas/Obtener/ObtenerLimites.component';
import { ObtenerNaturalezasJuridicasComponent1750446218779 } from './api-doc-page/Personas/Obtener/ObtenerNaturalezasJuridicas.component';
import { ObtenerNivelesEducativosComponent1750446218780 } from './api-doc-page/Personas/Obtener/ObtenerNivelesEducativos.component';
import { ObtenerOcupacionesComponent1750446218781 } from './api-doc-page/Personas/Obtener/ObtenerOcupaciones.component';
import { ObtenerPersonaJuridicaComponent1750446218782 } from './api-doc-page/Personas/Obtener/ObtenerPersonaJuridica.component';
import { ObtenerPersonasComponent1750446218783 } from './api-doc-page/Personas/Obtener/ObtenerPersonas.component';
import { ObtenerPersonasJuridicasComponent1750446218783 } from './api-doc-page/Personas/Obtener/ObtenerPersonasJuridicas.component';
import { ObtenerPersonasVinculadasComponent1750446218786 } from './api-doc-page/Personas/Obtener/ObtenerPersonasVinculadas.component';
import { ObtenerProfesionComponent1750446218789 } from './api-doc-page/Personas/Obtener/ObtenerProfesion.component';
import { ObtenerProfesionesComponent1750446218788 } from './api-doc-page/Personas/Obtener/ObtenerProfesiones.component';
import { ObtenerReferenciasComponent1750446218790 } from './api-doc-page/Personas/Obtener/ObtenerReferencias.component';
import { ObtenerTarjetasdeDebitoComponent1750446218792 } from './api-doc-page/Personas/Obtener/ObtenerTarjetasdeDebito.component';
import { ObtenerTelefonosComponent1750446218793 } from './api-doc-page/Personas/Obtener/ObtenerTelefonos.component';
import { ObtenerTipodePersonaComponent1750446218793 } from './api-doc-page/Personas/Obtener/ObtenerTipodePersona.component';
import { ObtenerTiposdeDocumentoComponent1750446218794 } from './api-doc-page/Personas/Obtener/ObtenerTiposdeDocumento.component';
import { ObtenerTiposDeFuncionarioPublicoComponent1750446218795 } from './api-doc-page/Personas/Obtener/ObtenerTiposDeFuncionarioPublico.component';
import { ObtenerTiposDePEPComponent1750446218796 } from './api-doc-page/Personas/Obtener/ObtenerTiposDePEP.component';
import { ObtenerTitularesDelTelefonoComponent1750446218797 } from './api-doc-page/Personas/Obtener/ObtenerTitularesDelTelefono.component';
import { ObtenerVictimaHechoViolentoComponent1750446218798 } from './api-doc-page/Personas/Obtener/ObtenerVictimaHechoViolento.component';
import { ObtenerVinculosComponent1750446218799 } from './api-doc-page/Personas/Obtener/ObtenerVinculos.component';
import { ObtenerVinculosdeAfinidadComponent1750446218800 } from './api-doc-page/Personas/Obtener/ObtenerVinculosdeAfinidad.component';
import { ObtenerVinculosdeConsanguinidadComponent1750446218803 } from './api-doc-page/Personas/Obtener/ObtenerVinculosdeConsanguinidad.component';
import { ObtenerVinculosJuridicosComponent1750446218804 } from './api-doc-page/Personas/Obtener/ObtenerVinculosJuridicos.component';
import { EvaluarPAEComponent1750446218806 } from './api-doc-page/Personas/Validar/EvaluarPAE.component';
import { ValidarCorreoElectronicoComponent1750446218806 } from './api-doc-page/Personas/Validar/ValidarCorreoElectronico.component';
import { ValidarDocumentoComponent1750446218807 } from './api-doc-page/Personas/Validar/ValidarDocumento.component';
import { ValidarenListasNegrasComponent1750446218808 } from './api-doc-page/Personas/Validar/ValidarenListasNegras.component';
import { ValidarExistenciaComponent1750446218809 } from './api-doc-page/Personas/Validar/ValidarExistencia.component';
import { ValidarListasInhabilitadosComponent1750446218811 } from './api-doc-page/Personas/Validar/ValidarListasInhabilitados.component';
import { VerificarEmpleadoComponent1750446218811 } from './api-doc-page/Personas/Validar/VerificarEmpleado.component';
import { ConvertirTasaAnualEfectivaaLinealComponent1750446218813 } from './api-doc-page/Precios/Convertir/ConvertirTasaAnualEfectivaaLineal.component';
import { ConvertirTasaAnualLinealaEfectivaComponent1750446218814 } from './api-doc-page/Precios/Convertir/ConvertirTasaAnualLinealaEfectiva.component';
import { ConvertirTasaMensualEfectivaaLinealComponent1750446218815 } from './api-doc-page/Precios/Convertir/ConvertirTasaMensualEfectivaaLineal.component';
import { ConvertirTasaMensualLinealaEfectivaComponent1750446218816 } from './api-doc-page/Precios/Convertir/ConvertirTasaMensualLinealaEfectiva.component';
import { ObtenerCotizacionComponent1750446218818 } from './api-doc-page/Precios/Obtener/ObtenerCotizacion.component';
import { ObtenerCotizacionaFechaComponent1750446218820 } from './api-doc-page/Precios/Obtener/ObtenerCotizacionaFecha.component';
import { ObtenerCotizacionCierreComponent1750446218821 } from './api-doc-page/Precios/Obtener/ObtenerCotizacionCierre.component';
import { ObtenerPizarraEspecialporTransaccionComponent1750446218822 } from './api-doc-page/Precios/Obtener/ObtenerPizarraEspecialporTransaccion.component';
import { ObtenerPrecioaFechaComponent1750446218823 } from './api-doc-page/Precios/Obtener/ObtenerPrecioaFecha.component';
import { ObtenerPrecioEspecieComponent1750446218824 } from './api-doc-page/Precios/Obtener/ObtenerPrecioEspecie.component';
import { ObtenerTasadeOperacionComponent1750446218825 } from './api-doc-page/Precios/Obtener/ObtenerTasadeOperacion.component';
import { ObtenerTasaParaClienteComponent1750446218826 } from './api-doc-page/Precios/Obtener/ObtenerTasaParaCliente.component';
import { ObtenerTasaParaProductoComponent1750446218827 } from './api-doc-page/Precios/Obtener/ObtenerTasaParaProducto.component';
import { ObtenerTipodeCambioComponent1750446218828 } from './api-doc-page/Precios/Obtener/ObtenerTipodeCambio.component';
import { ObtenerTiposDeCambioEspecialesComponent1750446218829 } from './api-doc-page/Precios/Obtener/ObtenerTiposDeCambioEspeciales.component';
import { CancelarComponent1750446218830 } from './api-doc-page/Préstamos/Cancelar/Cancelar.component';
import { CancelaraFechaComponent1750446218831 } from './api-doc-page/Préstamos/Cancelar/CancelaraFecha.component';
import { CancelaraFechaTercerosComponent1750446218833 } from './api-doc-page/Préstamos/Cancelar/CancelaraFechaTerceros.component';
import { CancelarTercerosComponent1750446218836 } from './api-doc-page/Préstamos/Cancelar/CancelarTerceros.component';
import { ContratarComponent1750446218838 } from './api-doc-page/Préstamos/Contratar/Contratar.component';
import { ContratarAmpliacionComponent1750446218839 } from './api-doc-page/Préstamos/Contratar/ContratarAmpliacion.component';
import { ContratarRefinanciacionComponent1750446218841 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacion.component';
import { ContratarRefinanciacionporDeudaTotalComponent1750446218842 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacionporDeudaTotal.component';
import { ContratarRefinanciacionporSaldoCapitalComponent1750446218844 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacionporSaldoCapital.component';
import { ActualizarDocumentoDigitalComponent1750446218846 } from './api-doc-page/Préstamos/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750446218847 } from './api-doc-page/Préstamos/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750446218848 } from './api-doc-page/Préstamos/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750446218850 } from './api-doc-page/Préstamos/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750446218852 } from './api-doc-page/Préstamos/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ObtenerCronogramaComponent1750446218854 } from './api-doc-page/Préstamos/Obtener/ObtenerCronograma.component';
import { ObtenerCronogramaaFechaComponent1750446218856 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaaFecha.component';
import { ObtenerCronogramaconPagosaFechaComponent1750446218858 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaconPagosaFecha.component';
import { ObtenerCronogramaenEspecieComponent1750446218859 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaenEspecie.component';
import { ObtenerCronogramaOriginalComponent1750446218861 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaOriginal.component';
import { ObtenerCuentadeCobroComponent1750446218862 } from './api-doc-page/Préstamos/Obtener/ObtenerCuentadeCobro.component';
import { ObtenerDatosdelProximoVencimientoComponent1750446218863 } from './api-doc-page/Préstamos/Obtener/ObtenerDatosdelProximoVencimiento.component';
import { ObtenerDetalleComponent1750446218864 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalle.component';
import { ObtenerDetalleaFechaComponent1750446218865 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleaFecha.component';
import { ObtenerDetalledeCancelacionTotalComponent1750446218866 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeCancelacionTotal.component';
import { ObtenerDetalledeOfertaComponent1750446218869 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOferta.component';
import { ObtenerDetalledeOfertaAmortizableComponent1750446218871 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOfertaAmortizable.component';
import { ObtenerDetalledeOperacionesaRefinanciarComponent1750446218874 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOperacionesaRefinanciar.component';
import { ObtenerDetalledePrestamoCanceladoComponent1750446218875 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledePrestamoCancelado.component';
import { ObtenerDetallePagoPrestamoComponent1750446218877 } from './api-doc-page/Préstamos/Obtener/ObtenerDetallePagoPrestamo.component';
import { ObtenerDetalleReducidoComponent1750446218878 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleReducido.component';
import { ObtenerDetalleSimulacionComponent1750446218880 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleSimulacion.component';
import { ObtenerDeudaComponent1750446218881 } from './api-doc-page/Préstamos/Obtener/ObtenerDeuda.component';
import { ObtenerDeudaPrestamoCastigadoComponent1750446218882 } from './api-doc-page/Préstamos/Obtener/ObtenerDeudaPrestamoCastigado.component';
import { ObtenerDeudaVencidaComponent1750446218883 } from './api-doc-page/Préstamos/Obtener/ObtenerDeudaVencida.component';
import { ObtenerFechadeIncumplimientoComponent1750446218888 } from './api-doc-page/Préstamos/Obtener/ObtenerFechadeIncumplimiento.component';
import { ObtenerFechadeUltimoPagoComponent1750446218890 } from './api-doc-page/Préstamos/Obtener/ObtenerFechadeUltimoPago.component';
import { ObtenerFechasdePagoComponent1750446218891 } from './api-doc-page/Préstamos/Obtener/ObtenerFechasdePago.component';
import { ObtenerInformacionAdicionalComponent1750446218893 } from './api-doc-page/Préstamos/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerMontodeCancelacionComponent1750446218894 } from './api-doc-page/Préstamos/Obtener/ObtenerMontodeCancelacion.component';
import { ObtenerMotivosPrecancelacionComponent1750446218895 } from './api-doc-page/Préstamos/Obtener/ObtenerMotivosPrecancelacion.component';
import { ObtenerPagosdeCuotaComponent1750446218896 } from './api-doc-page/Préstamos/Obtener/ObtenerPagosdeCuota.component';
import { ObtenerPagosdeunPrestamoComponent1750446218897 } from './api-doc-page/Préstamos/Obtener/ObtenerPagosdeunPrestamo.component';
import { ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750446218898 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1.component';
import { ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750446218899 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1.component';
import { ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750446218900 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1.component';
import { ObtenerProductosComponent1750446218903 } from './api-doc-page/Préstamos/Obtener/ObtenerProductos.component';
import { ObtenerProductosRefinanciacionComponent1750446218905 } from './api-doc-page/Préstamos/Obtener/ObtenerProductosRefinanciacion.component';
import { ObtenerRefinanciacionSimuladaComponent1750446218907 } from './api-doc-page/Préstamos/Obtener/ObtenerRefinanciacionSimulada.component';
import { AbonaraCuentaComponent1750446218909 } from './api-doc-page/Préstamos/Operar/AbonaraCuenta.component';
import { ActualizarInformacionAdicionalComponent1750446218910 } from './api-doc-page/Préstamos/Operar/ActualizarInformacionAdicional.component';
import { ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750446218912 } from './api-doc-page/Préstamos/Operar/ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1.component';
import { AgregarCuentadeCobroComponent1750446218913 } from './api-doc-page/Préstamos/Operar/AgregarCuentadeCobro.component';
import { AgregarInformacionAdicionalComponent1750446218914 } from './api-doc-page/Préstamos/Operar/AgregarInformacionAdicional.component';
import { EliminarCuentadeCobroComponent1750446218915 } from './api-doc-page/Préstamos/Operar/EliminarCuentadeCobro.component';
import { EliminarInformacionAdicionalComponent1750446218916 } from './api-doc-page/Préstamos/Operar/EliminarInformacionAdicional.component';
import { SolicitarPrecancelacionComponent1750446218918 } from './api-doc-page/Préstamos/Operar/SolicitarPrecancelacion.component';
import { AdelantarCapitalConReduccionDeCuotaComponent1750446218921 } from './api-doc-page/Préstamos/Pagar/AdelantarCapitalConReduccionDeCuota.component';
import { AdelantarCapitalConReduccionDePlazoComponent1750446218922 } from './api-doc-page/Préstamos/Pagar/AdelantarCapitalConReduccionDePlazo.component';
import { PagarCuotaComponent1750446218924 } from './api-doc-page/Préstamos/Pagar/PagarCuota.component';
import { PagarCuotaaFechaComponent1750446218925 } from './api-doc-page/Préstamos/Pagar/PagarCuotaaFecha.component';
import { PagarCuotaaFechaTercerosComponent1750446218926 } from './api-doc-page/Préstamos/Pagar/PagarCuotaaFechaTerceros.component';
import { PagarCuotaTercerosComponent1750446218928 } from './api-doc-page/Préstamos/Pagar/PagarCuotaTerceros.component';
import { ResimularAmortizableComponent1750446218930 } from './api-doc-page/Préstamos/Simular/ResimularAmortizable.component';
import { ResimularAmpliacionComponent1750446218932 } from './api-doc-page/Préstamos/Simular/ResimularAmpliacion.component';
import { ResimularRefinanciacionComponent1750446218933 } from './api-doc-page/Préstamos/Simular/ResimularRefinanciacion.component';
import { SimularComponent1750446218936 } from './api-doc-page/Préstamos/Simular/Simular.component';
import { SimularAmortizableComponent1750446218937 } from './api-doc-page/Préstamos/Simular/SimularAmortizable.component';
import { SimularAmortizableSinClienteComponent1750446218939 } from './api-doc-page/Préstamos/Simular/SimularAmortizableSinCliente.component';
import { SimularAmpliacionComponent1750446218940 } from './api-doc-page/Préstamos/Simular/SimularAmpliacion.component';
import { SimularAmpliacionIngresandoSegurosComponent1750446218941 } from './api-doc-page/Préstamos/Simular/SimularAmpliacionIngresandoSeguros.component';
import { SimularDespejandoCapitalyCantidaddeCuotasComponent1750446218941 } from './api-doc-page/Préstamos/Simular/SimularDespejandoCapitalyCantidaddeCuotas.component';
import { SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750446218942 } from './api-doc-page/Préstamos/Simular/SimularDespejandoCapitalyCantidaddeCuotasSinCliente.component';
import { SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750446218944 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyCantidaddeCuotas.component';
import { SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750446218945 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinCliente.component';
import { SimularDespejandoFechadeVencimientoyTasaComponent1750446218946 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyTasa.component';
import { SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750446218947 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyTasaSinCliente.component';
import { SimularIngresandoBalloonComponent1750446218948 } from './api-doc-page/Préstamos/Simular/SimularIngresandoBalloon.component';
import { SimularIngresandoBalloonSinClienteComponent1750446218949 } from './api-doc-page/Préstamos/Simular/SimularIngresandoBalloonSinCliente.component';
import { SimularIngresandoSegurosComponent1750446218950 } from './api-doc-page/Préstamos/Simular/SimularIngresandoSeguros.component';
import { SimularIngresandoSegurosSinClienteComponent1750446218952 } from './api-doc-page/Préstamos/Simular/SimularIngresandoSegurosSinCliente.component';
import { SimularLibreAmortizacionComponent1750446218953 } from './api-doc-page/Préstamos/Simular/SimularLibreAmortizacion.component';
import { SimularLibreAmortizacionSinClienteComponent1750446218954 } from './api-doc-page/Préstamos/Simular/SimularLibreAmortizacionSinCliente.component';
import { SimularOfertasComponent1750446218955 } from './api-doc-page/Préstamos/Simular/SimularOfertas.component';
import { SimularPlazoFijoComponent1750446218956 } from './api-doc-page/Préstamos/Simular/SimularPlazoFijo.component';
import { SimularRefinanciacionComponent1750446218957 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacion.component';
import { SimularRefinanciacionporDeudaTotalComponent1750446218958 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacionporDeudaTotal.component';
import { SimularRefinanciacionporSaldoCapitalComponent1750446218959 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacionporSaldoCapital.component';
import { ActualizarTextosComponent1750446218960 } from './api-doc-page/Préstamos/Textos/ActualizarTextos.component';
import { AgregarTextosComponent1750446218960 } from './api-doc-page/Préstamos/Textos/AgregarTextos.component';
import { EliminarTextosComponent1750446218961 } from './api-doc-page/Préstamos/Textos/EliminarTextos.component';
import { ObtenerTextosComponent1750446218962 } from './api-doc-page/Préstamos/Textos/ObtenerTextos.component';
import { EvaluarRegladeNegocioComponent1750446218964 } from './api-doc-page/Reglas-de-Negocio/EvaluarRegladeNegocio.component';
import { ObtenerReglasdeNegocioComponent1750446218965 } from './api-doc-page/Reglas-de-Negocio/ObtenerReglasdeNegocio.component';
import { ObtenerVariablesReglaComponent1750446218966 } from './api-doc-page/Reglas-de-Negocio/ObtenerVariablesRegla.component';
import { ValidarDatosRegladeNegocioComponent1750446218966 } from './api-doc-page/Reglas-de-Negocio/ValidarDatosRegladeNegocio.component';
import { AutorizarExcepcionComponent1750446218968 } from './api-doc-page/Seguridad/AutorizarExcepcion.component';
import { ObtenerDetalledeExcepcionComponent1750446218969 } from './api-doc-page/Seguridad/ObtenerDetalledeExcepcion.component';
import { ObtenerExcepcionesComponent1750446218970 } from './api-doc-page/Seguridad/ObtenerExcepciones.component';
import { RechazarExcepcionComponent1750446218971 } from './api-doc-page/Seguridad/RechazarExcepcion.component';
import { RegistrarDispositivoComponent1750446218973 } from './api-doc-page/Seguridad/RegistrarDispositivo.component';
import { ContratarSeguroComponent1750446218974 } from './api-doc-page/Seguros-Voluntarios/ContratarSeguro.component';
import { ObtenerMontosDeUnSeguroComponent1750446218975 } from './api-doc-page/Seguros-Voluntarios/ObtenerMontosDeUnSeguro.component';
import { ObtenerSegurosComponent1750446218976 } from './api-doc-page/Seguros-Voluntarios/ObtenerSeguros.component';
import { ObtenerSegurosAPagarComponent1750446218977 } from './api-doc-page/Seguros-Voluntarios/ObtenerSegurosAPagar.component';
import { PagarSeguroComponent1750446218978 } from './api-doc-page/Seguros-Voluntarios/PagarSeguro.component';
import { ObtenerCodigosdeLimitesComponent1750446218983 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCodigosdeLimites.component';
import { ObtenerCuentaPreferencialComponent1750446218979 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentaPreferencial.component';
import { ObtenerCuentasaAsociarComponent1750446218980 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasaAsociar.component';
import { ObtenerCuentasAsociadasComponent1750446218981 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasAsociadas.component';
import { ObtenerCuentasAsociadasPorTipoComponent1750446218982 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasAsociadasPorTipo.component';
import { ObtenerDatosComponent1750446218987 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerDatos.component';
import { ObtenerDatosContactoComponent1750446218989 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerDatosContacto.component';
import { ObtenerIdentificadorUnicoComponent1750446218990 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerLimitesComponent1750446218991 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerLimites.component';
import { ObtenerMovimientosComponent1750446218992 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerMovimientos.component';
import { ObtenerTarjetaComponent1750446218993 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjeta.component';
import { ObtenerTarjetaHabienteComponent1750446218994 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjetaHabiente.component';
import { ObtenerTarjetasAdicionalesComponent1750446218995 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjetasAdicionales.component';
import { ObtenerTiposdeCuentaComponent1750446218996 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTiposdeCuenta.component';
import { ActivarComponent1750446218997 } from './api-doc-page/Tarjetas-de-Débito/Operar/Activar.component';
import { ActualizarCuentaPreferencialComponent1750446218998 } from './api-doc-page/Tarjetas-de-Débito/Operar/ActualizarCuentaPreferencial.component';
import { ActualizarDatosContactoComponent1750446218999 } from './api-doc-page/Tarjetas-de-Débito/Operar/ActualizarDatosContacto.component';
import { AsociarCuentaComponent1750446219000 } from './api-doc-page/Tarjetas-de-Débito/Operar/AsociarCuenta.component';
import { BlanquearPinComponent1750446219001 } from './api-doc-page/Tarjetas-de-Débito/Operar/BlanquearPin.component';
import { BloquearComponent1750446219004 } from './api-doc-page/Tarjetas-de-Débito/Operar/Bloquear.component';
import { BloquearDesdeREDComponent1750446219005 } from './api-doc-page/Tarjetas-de-Débito/Operar/BloquearDesdeRED.component';
import { CrearComponent1750446219006 } from './api-doc-page/Tarjetas-de-Débito/Operar/Crear.component';
import { CrearConCuentasAsociadasComponent1750446219008 } from './api-doc-page/Tarjetas-de-Débito/Operar/CrearConCuentasAsociadas.component';
import { DenunciarComponent1750446219010 } from './api-doc-page/Tarjetas-de-Débito/Operar/Denunciar.component';
import { DenunciarDesdeREDComponent1750446219011 } from './api-doc-page/Tarjetas-de-Débito/Operar/DenunciarDesdeRED.component';
import { DesbloquearComponent1750446219012 } from './api-doc-page/Tarjetas-de-Débito/Operar/Desbloquear.component';
import { DesbloquearDesdeREDComponent1750446219013 } from './api-doc-page/Tarjetas-de-Débito/Operar/DesbloquearDesdeRED.component';
import { EliminarCuentaAsociadaComponent1750446219014 } from './api-doc-page/Tarjetas-de-Débito/Operar/EliminarCuentaAsociada.component';
import { ModificarLimiteComponent1750446219015 } from './api-doc-page/Tarjetas-de-Débito/Operar/ModificarLimite.component';
import { ComprarComponent1750446219016 } from './api-doc-page/Títulos/Comprar.component';
import { ObtenerEstadoCompraComponent1750446219017 } from './api-doc-page/Títulos/ObtenerEstadoCompra.component';
import { ObtenerGruposComponent1750446219020 } from './api-doc-page/Títulos/ObtenerGrupos.component';
import { ObtenerValoresComponent1750446219022 } from './api-doc-page/Títulos/ObtenerValores.component';
import { AgregarPerfilComponent1750446219023 } from './api-doc-page/Usuarios/AgregarPerfil.component';
import { CrearComponent1750446219024 } from './api-doc-page/Usuarios/Crear.component';
import { EliminarPerfilComponent1750446219025 } from './api-doc-page/Usuarios/EliminarPerfil.component';
import { EliminarUsuarioComponent1750446219026 } from './api-doc-page/Usuarios/EliminarUsuario.component';
import { HabilitarEnCanalComponent1750446219027 } from './api-doc-page/Usuarios/HabilitarEnCanal.component';
import { HabilitarUsuarioComponent1750446219028 } from './api-doc-page/Usuarios/HabilitarUsuario.component';
import { InhabilitarUsuarioComponent1750446219029 } from './api-doc-page/Usuarios/InhabilitarUsuario.component';
import { ModificarComponent1750446219030 } from './api-doc-page/Usuarios/Modificar.component';
import { ObtenerComponent1750446219030 } from './api-doc-page/Usuarios/Obtener.component';
import { ObtenerPerfilesComponent1750446219031 } from './api-doc-page/Usuarios/ObtenerPerfiles.component';
import { ObtenerUsuariosComponent1750446219032 } from './api-doc-page/Usuarios/ObtenerUsuarios.component';
import { ObtenerUsuariosParaPerfilComponent1750446219033 } from './api-doc-page/Usuarios/ObtenerUsuariosParaPerfil.component';
import { ObtenerMetadataDeTareaComponent1750446219036 } from './api-doc-page/Workflow/ObtenerMetadataDeTarea.component';
import { ObtenerProcesosHabilitadosComponent1750446219038 } from './api-doc-page/Workflow/ObtenerProcesosHabilitados.component';
import { ObtenerRolesComponent1750446219040 } from './api-doc-page/Workflow/ObtenerRoles.component';
import { ObtenerRolesdeTareaComponent1750446219041 } from './api-doc-page/Workflow/ObtenerRolesdeTarea.component';
import { ObtenerTareasdeProcesoComponent1750446219042 } from './api-doc-page/Workflow/ObtenerTareasdeProceso.component';
//import End page components

@NgModule({
  declarations: [
    ChatPopupComponent,
    //declarations Page components
    ContratarSimulacionComponent1750446218029,
    CrearComponent1750446218037,
    SimularComponent1750446218041,
    ActualizarDocumentoDigitalComponent1750446218043,
    AsociarDocumentoDigitalComponent1750446218045,
    EliminarDocumentoDigitalComponent1750446218046,
    ObtenerDocumentoDigitalComponent1750446218047,
    ObtenerDocumentosDigitalesComponent1750446218048,
    ModificarCuentaDestinoComponent1750446218050,
    ModificarCuentaOrigenComponent1750446218052,
    ModificarFechadeAbonoComponent1750446218054,
    ModificarMetadeAhorroComponent1750446218056,
    ModificarMontodeAbonoComponent1750446218059,
    ObtenerComponent1750446218060,
    ObtenerCronogramaAbonosComponent1750446218062,
    ObtenerCuentasDestinoHabilitadasComponent1750446218063,
    ObtenerCuentasOrigenHabilitadasComponent1750446218064,
    ObtenerEstadodeCuentaComponent1750446218066,
    ObtenerPeriodosHabilitadosComponent1750446218067,
    ObtenerPlazosHabilitadosComponent1750446218069,
    ObtenerProductosComponent1750446218072,
    AnularChequeElectronicoComponent1750446218074,
    AsignarIdaChequeElectronicoComponent1750446218076,
    CrearChequeraElectronicaComponent1750446218078,
    DepositarChequeElectronicodeBancoPropioComponent1750446218080,
    DepositarChequeElectronicodeOtroBancoComponent1750446218081,
    DepositarChequeElectronicoenCustodiaComponent1750446218082,
    EmitirChequeElectronicoComponent1750446218083,
    EmitirChequeElectronicodeChequeraComponent1750446218085,
    HabilitarChequeElectronicoComponent1750446218087,
    CrearAdhesionComponent1750446218089,
    CrearStopDebitComponent1750446218091,
    CrearStopDebitparaAdhesionconImporteComponent1750446218093,
    EliminarStopDebitComponent1750446218095,
    ObtenerAdhesionesComponent1750446218096,
    ObtenerDebitosComponent1750446218097,
    ObtenerEmpresasOriginantesComponent1750446218098,
    ObtenerStopDebitsComponent1750446218100,
    ReversarDebitosComponent1750446218101,
    SolicitarBajadeAdhesionComponent1750446218103,
    AutenticacionComponent1750446218105,
    ObtenerDetalledeEjecucionComponent1750446218107,
    ObtenerDetalledeProcesoComponent1750446218109,
    ObtenerProcesosconErrorComponent1750446218110,
    ObtenerProcesosCriticosComponent1750446218111,
    ObtenerProcesosDiariosComponent1750446218112,
    ObtenerProcesosMensualesComponent1750446218113,
    ObtenerProcesosReprocesablesComponent1750446218114,
    VerificarEstadoServidorComponent1750446218115,
    CalcularFechadeVencimientoComponent1750446218117,
    CalcularFechadeVencimientoenDiasHabilesComponent1750446218118,
    CalcularPlazoComponent1750446218120,
    CalcularPlazoenDiasHabilesComponent1750446218122,
    ObtenerFechaHabilComponent1750446218123,
    ObtenerFechaHabilAnteriorComponent1750446218126,
    ObtenerFechaHabilAnteriordeSucursalComponent1750446218127,
    ObtenerFechaHabildeSucursalComponent1750446218128,
    ObtenerInicioyFindeMesComponent1750446218129,
    ObtenerInicioyFindeMesdeSucursalComponent1750446218130,
    ObtenerProximaFechaHabilComponent1750446218131,
    ObtenerProximaFechaHabildeSucursalComponent1750446218132,
    AutorizarArchivoComponent1750446218133,
    CargarArchivoComponent1750446218135,
    CargarArchivoRecibidoComoDatoComponent1750446218137,
    DetenerArchivoComponent1750446218138,
    RechazarArchivoComponent1750446218139,
    CargarBeneficiariosComponent1750446218141,
    IngresarBeneficiarioComponent1750446218142,
    ObtenerBeneficiarioSegunFiltroComponent1750446218143,
    AltaAutomaticaContratoComponent1750446218144,
    CargarServiciosDisponiblesComponent1750446218146,
    ContratarDebitoAutomaticoComponent1750446218147,
    ObtenerDetalledeOrdendeCuentaComponent1750446218148,
    ObtenerDetalledePagoComponent1750446218150,
    ObtenerDetalleOrdenSegunCampoComponent1750446218152,
    ObtenerDetallePagoOrdenComponent1750446218154,
    ObtenerDeudaComponent1750446218156,
    ObtenerResumenOrdenComponent1750446218157,
    ObtenerServiciosComponent1750446218159,
    ObtenerValoresOrdenComponent1750446218160,
    ObtenerValoresOrdenSegunCampoComponent1750446218161,
    AutorizarOrdenComponent1750446218162,
    DetenerOrdenComponent1750446218163,
    IngresarOrdenPagoComponent1750446218164,
    ProcesarOrdenComponent1750446218165,
    RechazarOrdenComponent1750446218166,
    AnularPagoDeudaComponent1750446218167,
    PagarDeudaDesdeCuentaComponent1750446218169,
    RegistrarPagoDeudaComponent1750446218171,
    RegistrarPagoEnLineaComponent1750446218173,
    RegistrarPagoEnLineaDesdeCuentaComponent1750446218175,
    VisualizarListaResumenCabezalComponent1750446218178,
    VisualizarListaResumenCabezalOrdenComponent1750446218180,
    VisualizarOrdendeArchivoParaCuentaComponent1750446218181,
    VisualizarResultadoProcesamientoComponent1750446218183,
    VisualizarResumenCabezalComponent1750446218185,
    VisualizarSituacionArchivosComponent1750446218188,
    VisualizarSituacionLineasComponent1750446218191,
    CHATComponent1750446218194,
    ActualizarComponent1750446218196,
    ActualizarDocumentoDigitalComponent1750446218198,
    ActualizarDomicilioComponent1750446218199,
    ActualizarInformacionAdicionalComponent1750446218202,
    ActualizarRegistroEmpleadoComponent1750446218204,
    ActualizarTelefonoComponent1750446218207,
    AgregarDomicilioComponent1750446218208,
    AgregarInformacionAdicionalComponent1750446218209,
    AgregarIntegranteComponent1750446218210,
    AgregarTelefonoComponent1750446218212,
    AsociarDocumentoDigitalComponent1750446218213,
    EliminarDocumentoDigitalComponent1750446218214,
    EliminarDomicilioComponent1750446218215,
    EliminarInformacionAdicionalComponent1750446218216,
    EliminarIntegranteComponent1750446218218,
    HabilitarComponent1750446218221,
    InhabilitarComponent1750446218223,
    ModificarEjecutivoComponent1750446218224,
    CrearComponent1750446218226,
    CrearconPersonaExistenteComponent1750446218228,
    CrearParaPersonaJuridicaComponent1750446218230,
    ObtenerComponent1750446218232,
    ObtenerAhorrosProgramadosComponent1750446218233,
    ObtenerBolsillosComponent1750446218239,
    ObtenerClasificacionesInternasComponent1750446218242,
    ObtenerCuentaClienteComponent1750446218244,
    ObtenerCuentasCorrientesSaldoContableComponent1750446218246,
    ObtenerCuentasCorrientesSaldoDisponibleComponent1750446218248,
    ObtenerCuentasdeAhorroSaldoContableComponent1750446218250,
    ObtenerCuentasdeAhorroSaldoDisponibleComponent1750446218254,
    ObtenerDatosComponent1750446218258,
    ObtenerDetallePosicionComponent1750446218259,
    ObtenerDocumentoDigitalComponent1750446218261,
    ObtenerDocumentosDigitalesComponent1750446218262,
    ObtenerDomiciliosComponent1750446218263,
    ObtenerFacultadesComponent1750446218264,
    ObtenerIdentificadorUnicoComponent1750446218266,
    ObtenerInformacionAdicionalComponent1750446218267,
    ObtenerIntegrantesComponent1750446218269,
    ObtenerLimitesComponent1750446218271,
    ObtenerMotivosInhabilitacionComponent1750446218272,
    ObtenerPerfilComponent1750446218274,
    ObtenerPlazosFijosComponent1750446218277,
    ObtenerPlazosFijosCanceladosComponent1750446218278,
    ObtenerPlazosFijosconAvanceComponent1750446218280,
    ObtenerPosicionComponent1750446218282,
    ObtenerPrestamosComponent1750446218283,
    ObtenerPrestamosCanceladosComponent1750446218285,
    ObtenerPrestamosCastigadosComponent1750446218288,
    ObtenerPrestamosconAvanceComponent1750446218290,
    ObtenerResumendeProductosCierredeanoComponent1750446218292,
    ObtenerResumendeProductosSaldosContablesComponent1750446218294,
    ObtenerResumendeProductosSaldosDisponiblesComponent1750446218295,
    ObtenerResumenporProductoaCierreAnoComponent1750446218297,
    ObtenerRiesgodeCreditoComponent1750446218298,
    ObtenerSaldosdeOtrosProductosComponent1750446218300,
    ObtenerSectoresComponent1750446218302,
    ObtenerSegmentosComponent1750446218304,
    ObtenerTarjetasdeDebitoComponent1750446218306,
    ObtenerTelefonosComponent1750446218308,
    ObtenerTiposdeIntegracionComponent1750446218311,
    ObtenerTitularRepresentativoComponent1750446218323,
    ObtenerTitulosComponent1750446218326,
    ValidarExistenciaComponent1750446218328,
    VerificarEmpleadoComponent1750446218330,
    ObtenerAgenciasBancoComponent1750446218332,
    ObtenerBancosComponent1750446218333,
    ObtenerDetalleSucursalComponent1750446218336,
    ObtenerSucursalesPrincipalesComponent1750446218338,
    ObtenerActividadesComponent1750446218340,
    ObtenerActividadesporTipoComponent1750446218342,
    ObtenerEjecutivosComponent1750446218344,
    ObtenerTiposdeActividadComponent1750446218345,
    ObtenerTiposdeTarjetaComponent1750446218347,
    ObtenerImpuestosComponent1750446218348,
    ObtenerTiposdeDocumentoDigitalComponent1750446218350,
    ObtenerEstadosComponent1750446218354,
    ObtenerInstruccionesComponent1750446218357,
    ObtenerPaquetesComponent1750446218359,
    ObtenerTiposdeTextoComponent1750446218360,
    ObtenerCalendariodeSucursalComponent1750446218362,
    ObtenerCalendariosComponent1750446218364,
    ObtenerDetalledeCalendarioComponent1750446218366,
    ObtenerDetalledeCalendariodeSucursalComponent1750446218368,
    ObtenerDolarUSAComponent1750446218371,
    ObtenerEmpresaComponent1750446218373,
    ObtenerFechadeSistemaComponent1750446218374,
    ObtenerMonedaNacionalComponent1750446218376,
    ObtenerMonedasComponent1750446218378,
    ObtenerSucursalesComponent1750446218380,
    ObtenerAgrupadoresDomicilioComponent1750446218381,
    ObtenerBarriosyColoniasComponent1750446218383,
    ObtenerCiudadesyLocalidadesComponent1750446218384,
    ObtenerCodigosdeDomicilioComponent1750446218388,
    ObtenerEstadosProvinciasyDepartamentosComponent1750446218390,
    ObtenerPaisesComponent1750446218392,
    ObtenerTiposdeListasNegrasComponent1750446218394,
    ObtenerTiposdeTelefonoComponent1750446218396,
    ObtenerTiposdeViviendaComponent1750446218397,
    ObtenerPizarraporModuloComponent1750446218399,
    ObtenerPizarrasComponent1750446218400,
    ObtenerMenusComponent1750446218402,
    ObtenerPerfilesComponent1750446218404,
    AgregarTextoAsientoComponent1750446218405,
    AgregarTextoOrdinalComponent1750446218407,
    AnularMovimientoComponent1750446218409,
    ActualizarCondicionImpositivaComponent1750446218411,
    CrearCondicionImpositivaComponent1750446218412,
    ObtenerIdBantotalMovimientoComponent1750446218413,
    ObtenerIdBantotalOperacionComponent1750446218415,
    ObtenerIdBantotalProductoComponent1750446218416,
    ObtenerIdentificadorUnicodeMovimientoComponent1750446218418,
    ObtenerIdentificadorUnicodeOperacionComponent1750446218419,
    ObtenerIdentificadorUnicodeProductoComponent1750446218421,
    ObtenerClientedeunaOperacionComponent1750446218422,
    ObtenerCondicionImpositivaComponent1750446218424,
    ObtenerDetalledeMovimientoComponent1750446218426,
    ObtenerDetalledeOrdinalComponent1750446218426,
    ObtenerIntegrantesdeOperacionComponent1750446218427,
    ObtenerTextosdeMovimientoComponent1750446218428,
    RegistrarAsientoComponent1750446218429,
    RegistrarAsientoFechaValorComponent1750446218430,
    CancelarComponent1750446218431,
    CashInComponent1750446218432,
    CashOutComponent1750446218432,
    ContratarComponent1750446218433,
    ObtenerDatosComponent1750446218436,
    ObtenerMovimientosComponent1750446218438,
    ObtenerProductosComponent1750446218440,
    ObtenerProductosCVComponent1750446218441,
    ObtenerChequeraComponent1750446218442,
    ObtenerChequerasComponent1750446218443,
    ObtenerChequesdeChequeraComponent1750446218444,
    ObtenerComisionChequeraComponent1750446218445,
    ObtenerEstadodeChequeraComponent1750446218445,
    ObtenerSolicitudesdeChequerasComponent1750446218446,
    ObtenerTiposdeChequeraComponent1750446218447,
    ObtenerTiposdeChequeraporProductoComponent1750446218448,
    EliminarChequeraComponent1750446218449,
    RegistrarOrdendeNoPagodeChequeraComponent1750446218450,
    RegistrarOrdendeNoPagodeChequesComponent1750446218452,
    SolicitarChequeraComponent1750446218453,
    ContratarconPeriodicidadComponent1750446218454,
    ContratarProductoComponent1750446218495,
    ContratarProductoconAltadeFacultadesComponent1750446218496,
    ObtenerAcuerdosComponent1750446218498,
    ObtenerDatosComponent1750446218499,
    ObtenerEstadodeCuentaComponent1750446218500,
    ObtenerEvoluciondeSaldosComponent1750446218509,
    ObtenerProductosComponent1750446218511,
    ContratarconPeriodicidadComponent1750446218512,
    ContratarProductoComponent1750446218513,
    ContratarProductoconAltadeFacultadesComponent1750446218514,
    ObtenerDatosComponent1750446218515,
    ObtenerEstadodeCuentaComponent1750446218516,
    ObtenerEvoluciondeSaldosComponent1750446218517,
    ObtenerProductosComponent1750446218520,
    ActualizarBeneficiariosComponent1750446218521,
    ObtenerBeneficiariosComponent1750446218523,
    ActualizarDocumentoDigitalComponent1750446218524,
    AsociarDocumentoDigitalComponent1750446218524,
    EliminarDocumentoDigitalComponent1750446218525,
    ObtenerDocumentoDigitalComponent1750446218526,
    ObtenerDocumentosDigitalesComponent1750446218527,
    ObtenerBolsillosComponent1750446218528,
    ObtenerCBUdeCuentaVistaComponent1750446218529,
    ObtenerCuentaVistadeCBUComponent1750446218530,
    ObtenerDetalleBloqueoComponent1750446218531,
    ObtenerEstadodeCuentaporPeriodoComponent1750446218532,
    ObtenerEstadoDeOperacionComponent1750446218533,
    ObtenerFacultadesComponent1750446218535,
    ObtenerPaqueteComponent1750446218537,
    ObtenerPeriododeAcreditacionComponent1750446218539,
    ObtenerPeriodosdeAcreditacionComponent1750446218538,
    ObtenerSaldoBloqueadoComponent1750446218539,
    ObtenerSaldoDisponibleComponent1750446218540,
    ObtenerSaldosBloqueadosComponent1750446218541,
    AcreditarEnCuentaComponent1750446218541,
    ActivarComponent1750446218542,
    ActualizarPeriododeAcreditacionComponent1750446218543,
    BloquearSaldoComponent1750446218544,
    CancelarComponent1750446218544,
    DebitarEnCuentaComponent1750446218545,
    DesbloquearSaldoComponent1750446218546,
    ActualizarPerfilTransaccionalComponent1750446218547,
    AgregarPerfilTransaccionalComponent1750446218547,
    ObtenerPerfilTransaccionalComponent1750446218548,
    TraspasarConTipoDeCambioEspecialComponent1750446218549,
    TraspasarEntreCuentasdelaMismaPersonaComponent1750446218550,
    TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750446218551,
    TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750446218554,
    TraspasarEntreCuentasPropiasComponent1750446218557,
    TraspasarEntreCuentasPropiascontipodecambioComponent1750446218555,
    TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750446218556,
    TraspasarEntreCuentasTercerosComponent1750446218559,
    TraspasarEntreCuentasTerceroscontipodecambioComponent1750446218558,
    TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750446218559,
    ActualizarBeneficiariosComponent1750446218560,
    ObtenerBeneficiariosComponent1750446218561,
    ContratarComponent1750446218562,
    ContratarConFacultadesComponent1750446218563,
    ContratarSimulacionComponent1750446218564,
    ActualizarDocumentoDigitalComponent1750446218564,
    AsociarDocumentoDigitalComponent1750446218565,
    EliminarDocumentoDigitalComponent1750446218566,
    ObtenerDocumentoDigitalComponent1750446218567,
    ModificarCuentaDestinoalVencimientoComponent1750446218569,
    ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750446218570,
    ModificarInstruccionComponent1750446218572,
    ObtenerAvanceComponent1750446218573,
    ObtenerDatosComponent1750446218575,
    ObtenerDatosPrecancelacionComponent1750446218576,
    ObtenerDocumentosDigitalesComponent1750446218576,
    ObtenerInstruccionComponent1750446218579,
    ObtenerInstruccionesHabilitadosComponent1750446218578,
    ObtenerMovimientosComponent1750446218580,
    ObtenerPeriodosHabilitadosComponent1750446218581,
    ObtenerProductosComponent1750446218582,
    ObtenerProductosHabilitadosComponent1750446218583,
    ObtenerTasadePrecancelacionComponent1750446218584,
    PrecancelarComponent1750446218586,
    SimularComponent1750446218587,
    SimularConCronogramaComponent1750446218589,
    ConfirmarListaComponent1750446218590,
    CrearListaComponent1750446218591,
    CrearListaChequesComponent1750446218592,
    ObtenerProductosComponent1750446218593,
    ObtenerTiposDeDesembolsoComponent1750446218593,
    SeleccionarOpcionDesembolsoComponent1750446218594,
    ObtenerAgrupadoresComponent1750446218595,
    ObtenerCierredeSaldosporMonedaComponent1750446218596,
    ObtenerCondicionesGeneralesComponent1750446218597,
    ObtenerIndicadoresComponent1750446218598,
    ObtenerMetodosMasEjecutadosComponent1750446218599,
    ObtenerMonedasIndicesComponent1750446218600,
    ObtenerRubrosBolsaComponent1750446218601,
    ObtenerServiciosMasEjecutadosComponent1750446218603,
    ObtenerSesionesPorUsuarioComponent1750446218604,
    ObtenerSucursalesCajasComponent1750446218604,
    ObtenerTransaccionesporEstadosComponent1750446218605,
    BuscarClienteComponent1750446218606,
    CompletarTareaComponent1750446218607,
    CrearSolicitudAmpliacionComponent1750446218608,
    CrearSolicitudIndividualComponent1750446218609,
    CrearSolicitudRenovacionComponent1750446218609,
    AgregarFiadorComponent1750446218610,
    EliminarFiadorComponent1750446218611,
    ActualizarGrupoComponent1750446218612,
    ActualizarIntegrantedeGrupoComponent1750446218613,
    AgregarGrupoComponent1750446218613,
    AgregarIntegranteaGrupoComponent1750446218614,
    CrearSolicitudGrupalComponent1750446218615,
    HabilitarIntegrantedeunGrupoComponent1750446218616,
    InhabilitarIntegrantedeunGrupoComponent1750446218616,
    ObtenerDetalleGrupoComponent1750446218618,
    ObtenerGruposComponent1750446218621,
    ObtenerIntegrantesdeGrupoComponent1750446218622,
    ObtenerTiposdeGrupoComponent1750446218623,
    ObtenerTiposdeIntegranteComponent1750446218625,
    SimularPrestamoAmortizableGrupalComponent1750446218626,
    ObtenerAsesoresComponent1750446218628,
    ObtenerCampanasComponent1750446218629,
    ObtenerDestinosCreditoComponent1750446218630,
    ObtenerOperacionesClienteComponent1750446218631,
    ObtenerOrigenesdeCaptacionComponent1750446218633,
    ObtenerProductosComponent1750446218636,
    ObtenerSolicitudesClienteComponent1750446218638,
    ObtenerTiposAvalComponent1750446218639,
    AgregarOperacionesaCancelarComponent1750446218640,
    ObtenerOperacionesaCancelarComponent1750446218642,
    QuitarOperacionesaCancelarComponent1750446218643,
    SimularLibreAmortizacionComponent1750446218645,
    SimularPrestamoAmortizableComponent1750446218646,
    SimularPrestamoPlazoFijoComponent1750446218648,
    ValidarPoliticasComponent1750446218649,
    ObtenerCantidadCuotasComponent1750446218650,
    ObtenerCapitalComponent1750446218653,
    ObtenerComisionesComponent1750446218655,
    ObtenerComisionesporCuotaComponent1750446218656,
    ObtenerDiasPrimerPeriodoComponent1750446218658,
    ObtenerPeriodoEntreCuotasComponent1750446218660,
    ObtenerPermiteSegurosdelMismoTipoComponent1750446218659,
    ObtenerPlazoComponent1750446218661,
    ObtenerRequiereSegurodeVidaObligatorioComponent1750446218662,
    ObtenerSegurosComponent1750446218662,
    ObtenerItemsModeloComponent1750446218663,
    ObtenerModelosPAEComponent1750446218664,
    ObtenerScoresComponent1750446218665,
    ObtenerTiposDeModelosComponent1750446218666,
    ContratarPrestamoComponent1750446218667,
    ContratarVehicularComponent1750446218670,
    CrearClienteComponent1750446218671,
    CrearPersonaClienteComponent1750446218673,
    ObtenerDatosdeUsuarioComponent1750446218674,
    ObtenerDetalledeOfertaAmortizableComponent1750446218676,
    ObtenerDetalleOfertaVehicularComponent1750446218677,
    ObtenerMarcasComponent1750446218678,
    ObtenerModelosComponent1750446218678,
    ObtenerPartnersComponent1750446218679,
    ObtenerPrestamosdeClienteComponent1750446218682,
    ObtenerProductosComponent1750446218680,
    ObtenerProductosdelPartnerComponent1750446218681,
    ObtenerPuntosdeVentaComponent1750446218683,
    ObtenerVendedoresComponent1750446218683,
    ObtenerVersionesComponent1750446218686,
    SimularOfertasComponent1750446218687,
    SimularOfertasVehicularComponent1750446218688,
    SimularPrestamoComponent1750446218689,
    SimularVehicularComponent1750446218690,
    ObtenerCorrelativoGuiaComponent1750446218692,
    ObtenerCorrelativoGuiaEspecialComponent1750446218692,
    ObtenerGuiadeProcesoComponent1750446218693,
    ObtenerGuiaEspecialdeProcesoComponent1750446218694,
    ObtenerOpcionGeneraldeProcesoComponent1750446218695,
    ObtenerOpcionGeneralPorModuloComponent1750446218696,
    ObtenerProgramaParticularComponent1750446218696,
    ActualizarComponent1750446218697,
    ActualizarCelularComponent1750446218698,
    ActualizarContactoComponent1750446218699,
    ActualizarConyugeComponent1750446218701,
    ActualizarCorreoElectronicoComponent1750446218700,
    ActualizarDomicilioComponent1750446218703,
    ActualizarFATCAComponent1750446218704,
    ActualizarInformacionAdicionalComponent1750446218705,
    ActualizarInformacionFinancieraComponent1750446218707,
    ActualizarIntegrantedePersonaJuridicaComponent1750446218708,
    ActualizarPersonaJuridicaComponent1750446218709,
    ActualizarProfesionComponent1750446218710,
    ActualizarReferenciaComponent1750446218712,
    ActualizarRegistroEmpleadoComponent1750446218712,
    ActualizarTelefonoComponent1750446218713,
    ActualizarVictimaHechoViolentoComponent1750446218714,
    ModificarDocumentoAdicionalComponent1750446218715,
    AgregaraListaNegraComponent1750446218716,
    AgregarContactoComponent1750446218717,
    AgregarCorreoElectronicoComponent1750446218719,
    AgregarDatosPEPComponent1750446218720,
    AgregarDocumentoAdicionalComponent1750446218721,
    AgregarDomicilioComponent1750446218723,
    AgregarEstadoFinancieroComponent1750446218724,
    AgregarFATCAComponent1750446218725,
    AgregarInformacionAdicionalComponent1750446218726,
    AgregarInformacionFinancieraComponent1750446218727,
    AgregarIntegranteaPersonaJuridicaComponent1750446218728,
    AgregarPersonaVinculadaComponent1750446218729,
    AgregarReferenciaComponent1750446218730,
    AgregarTelefonoComponent1750446218730,
    AgregarVictimaHechoViolentoComponent1750446218731,
    CrearComponent1750446218733,
    CrearConyugeComponent1750446218736,
    CrearPersonaJuridicaComponent1750446218740,
    CrearReducidoComponent1750446218742,
    ActualizarDocumentoDigitalComponent1750446218743,
    AsociarDocumentoDigitalComponent1750446218744,
    EliminarDocumentoDigitalComponent1750446218745,
    ObtenerDocumentoDigitalComponent1750446218745,
    ObtenerDocumentosDigitalesComponent1750446218746,
    EliminarConyugeComponent1750446218747,
    EliminarDocumentoAdicionalComponent1750446218748,
    EliminarDomicilioComponent1750446218748,
    EliminarInformacionAdicionalComponent1750446218749,
    EliminarIntegrantedePersonaJuridicaComponent1750446218750,
    EliminarPersonaVinculadaComponent1750446218751,
    EliminarProfesionComponent1750446218753,
    ObtenerComponent1750446218755,
    ObtenerConceptoComponent1750446218756,
    ObtenerContactosComponent1750446218757,
    ObtenerConyugeComponent1750446218760,
    ObtenerCorreosElectronicosComponent1750446218758,
    ObtenerCuentasClienteComponent1750446218759,
    ObtenerDatosPEPComponent1750446218761,
    ObtenerDocumentosAdicionalesComponent1750446218762,
    ObtenerDomiciliosComponent1750446218762,
    ObtenerEstadosCivilesComponent1750446218763,
    ObtenerFacultadesComponent1750446218764,
    ObtenerFATCAComponent1750446218765,
    ObtenerHobbiesComponent1750446218765,
    ObtenerHobbyComponent1750446218766,
    ObtenerIdBantotalComponent1750446218767,
    ObtenerIdentidadesdeGeneroComponent1750446218771,
    ObtenerIdentificadorUnicoComponent1750446218772,
    ObtenerInformacionAdicionalComponent1750446218773,
    ObtenerInformacionFinancieraComponent1750446218775,
    ObtenerIntegrantesPersonaJuridicaComponent1750446218777,
    ObtenerLimitesComponent1750446218778,
    ObtenerNaturalezasJuridicasComponent1750446218779,
    ObtenerNivelesEducativosComponent1750446218780,
    ObtenerOcupacionesComponent1750446218781,
    ObtenerPersonaJuridicaComponent1750446218782,
    ObtenerPersonasComponent1750446218783,
    ObtenerPersonasJuridicasComponent1750446218783,
    ObtenerPersonasVinculadasComponent1750446218786,
    ObtenerProfesionComponent1750446218789,
    ObtenerProfesionesComponent1750446218788,
    ObtenerReferenciasComponent1750446218790,
    ObtenerTarjetasdeDebitoComponent1750446218792,
    ObtenerTelefonosComponent1750446218793,
    ObtenerTipodePersonaComponent1750446218793,
    ObtenerTiposdeDocumentoComponent1750446218794,
    ObtenerTiposDeFuncionarioPublicoComponent1750446218795,
    ObtenerTiposDePEPComponent1750446218796,
    ObtenerTitularesDelTelefonoComponent1750446218797,
    ObtenerVictimaHechoViolentoComponent1750446218798,
    ObtenerVinculosComponent1750446218799,
    ObtenerVinculosdeAfinidadComponent1750446218800,
    ObtenerVinculosdeConsanguinidadComponent1750446218803,
    ObtenerVinculosJuridicosComponent1750446218804,
    EvaluarPAEComponent1750446218806,
    ValidarCorreoElectronicoComponent1750446218806,
    ValidarDocumentoComponent1750446218807,
    ValidarenListasNegrasComponent1750446218808,
    ValidarExistenciaComponent1750446218809,
    ValidarListasInhabilitadosComponent1750446218811,
    VerificarEmpleadoComponent1750446218811,
    ConvertirTasaAnualEfectivaaLinealComponent1750446218813,
    ConvertirTasaAnualLinealaEfectivaComponent1750446218814,
    ConvertirTasaMensualEfectivaaLinealComponent1750446218815,
    ConvertirTasaMensualLinealaEfectivaComponent1750446218816,
    ObtenerCotizacionComponent1750446218818,
    ObtenerCotizacionaFechaComponent1750446218820,
    ObtenerCotizacionCierreComponent1750446218821,
    ObtenerPizarraEspecialporTransaccionComponent1750446218822,
    ObtenerPrecioaFechaComponent1750446218823,
    ObtenerPrecioEspecieComponent1750446218824,
    ObtenerTasadeOperacionComponent1750446218825,
    ObtenerTasaParaClienteComponent1750446218826,
    ObtenerTasaParaProductoComponent1750446218827,
    ObtenerTipodeCambioComponent1750446218828,
    ObtenerTiposDeCambioEspecialesComponent1750446218829,
    CancelarComponent1750446218830,
    CancelaraFechaComponent1750446218831,
    CancelaraFechaTercerosComponent1750446218833,
    CancelarTercerosComponent1750446218836,
    ContratarComponent1750446218838,
    ContratarAmpliacionComponent1750446218839,
    ContratarRefinanciacionComponent1750446218841,
    ContratarRefinanciacionporDeudaTotalComponent1750446218842,
    ContratarRefinanciacionporSaldoCapitalComponent1750446218844,
    ActualizarDocumentoDigitalComponent1750446218846,
    AsociarDocumentoDigitalComponent1750446218847,
    EliminarDocumentoDigitalComponent1750446218848,
    ObtenerDocumentoDigitalComponent1750446218850,
    ObtenerDocumentosDigitalesComponent1750446218852,
    ObtenerCronogramaComponent1750446218854,
    ObtenerCronogramaaFechaComponent1750446218856,
    ObtenerCronogramaconPagosaFechaComponent1750446218858,
    ObtenerCronogramaenEspecieComponent1750446218859,
    ObtenerCronogramaOriginalComponent1750446218861,
    ObtenerCuentadeCobroComponent1750446218862,
    ObtenerDatosdelProximoVencimientoComponent1750446218863,
    ObtenerDetalleComponent1750446218864,
    ObtenerDetalleaFechaComponent1750446218865,
    ObtenerDetalledeCancelacionTotalComponent1750446218866,
    ObtenerDetalledeOfertaComponent1750446218869,
    ObtenerDetalledeOfertaAmortizableComponent1750446218871,
    ObtenerDetalledeOperacionesaRefinanciarComponent1750446218874,
    ObtenerDetalledePrestamoCanceladoComponent1750446218875,
    ObtenerDetallePagoPrestamoComponent1750446218877,
    ObtenerDetalleReducidoComponent1750446218878,
    ObtenerDetalleSimulacionComponent1750446218880,
    ObtenerDeudaComponent1750446218881,
    ObtenerDeudaPrestamoCastigadoComponent1750446218882,
    ObtenerDeudaVencidaComponent1750446218883,
    ObtenerFechadeIncumplimientoComponent1750446218888,
    ObtenerFechadeUltimoPagoComponent1750446218890,
    ObtenerFechasdePagoComponent1750446218891,
    ObtenerInformacionAdicionalComponent1750446218893,
    ObtenerMontodeCancelacionComponent1750446218894,
    ObtenerMotivosPrecancelacionComponent1750446218895,
    ObtenerPagosdeCuotaComponent1750446218896,
    ObtenerPagosdeunPrestamoComponent1750446218897,
    ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750446218898,
    ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750446218899,
    ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750446218900,
    ObtenerProductosComponent1750446218903,
    ObtenerProductosRefinanciacionComponent1750446218905,
    ObtenerRefinanciacionSimuladaComponent1750446218907,
    AbonaraCuentaComponent1750446218909,
    ActualizarInformacionAdicionalComponent1750446218910,
    ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750446218912,
    AgregarCuentadeCobroComponent1750446218913,
    AgregarInformacionAdicionalComponent1750446218914,
    EliminarCuentadeCobroComponent1750446218915,
    EliminarInformacionAdicionalComponent1750446218916,
    SolicitarPrecancelacionComponent1750446218918,
    AdelantarCapitalConReduccionDeCuotaComponent1750446218921,
    AdelantarCapitalConReduccionDePlazoComponent1750446218922,
    PagarCuotaComponent1750446218924,
    PagarCuotaaFechaComponent1750446218925,
    PagarCuotaaFechaTercerosComponent1750446218926,
    PagarCuotaTercerosComponent1750446218928,
    ResimularAmortizableComponent1750446218930,
    ResimularAmpliacionComponent1750446218932,
    ResimularRefinanciacionComponent1750446218933,
    SimularComponent1750446218936,
    SimularAmortizableComponent1750446218937,
    SimularAmortizableSinClienteComponent1750446218939,
    SimularAmpliacionComponent1750446218940,
    SimularAmpliacionIngresandoSegurosComponent1750446218941,
    SimularDespejandoCapitalyCantidaddeCuotasComponent1750446218941,
    SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750446218942,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750446218944,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750446218945,
    SimularDespejandoFechadeVencimientoyTasaComponent1750446218946,
    SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750446218947,
    SimularIngresandoBalloonComponent1750446218948,
    SimularIngresandoBalloonSinClienteComponent1750446218949,
    SimularIngresandoSegurosComponent1750446218950,
    SimularIngresandoSegurosSinClienteComponent1750446218952,
    SimularLibreAmortizacionComponent1750446218953,
    SimularLibreAmortizacionSinClienteComponent1750446218954,
    SimularOfertasComponent1750446218955,
    SimularPlazoFijoComponent1750446218956,
    SimularRefinanciacionComponent1750446218957,
    SimularRefinanciacionporDeudaTotalComponent1750446218958,
    SimularRefinanciacionporSaldoCapitalComponent1750446218959,
    ActualizarTextosComponent1750446218960,
    AgregarTextosComponent1750446218960,
    EliminarTextosComponent1750446218961,
    ObtenerTextosComponent1750446218962,
    EvaluarRegladeNegocioComponent1750446218964,
    ObtenerReglasdeNegocioComponent1750446218965,
    ObtenerVariablesReglaComponent1750446218966,
    ValidarDatosRegladeNegocioComponent1750446218966,
    AutorizarExcepcionComponent1750446218968,
    ObtenerDetalledeExcepcionComponent1750446218969,
    ObtenerExcepcionesComponent1750446218970,
    RechazarExcepcionComponent1750446218971,
    RegistrarDispositivoComponent1750446218973,
    ContratarSeguroComponent1750446218974,
    ObtenerMontosDeUnSeguroComponent1750446218975,
    ObtenerSegurosComponent1750446218976,
    ObtenerSegurosAPagarComponent1750446218977,
    PagarSeguroComponent1750446218978,
    ObtenerCodigosdeLimitesComponent1750446218983,
    ObtenerCuentaPreferencialComponent1750446218979,
    ObtenerCuentasaAsociarComponent1750446218980,
    ObtenerCuentasAsociadasComponent1750446218981,
    ObtenerCuentasAsociadasPorTipoComponent1750446218982,
    ObtenerDatosComponent1750446218987,
    ObtenerDatosContactoComponent1750446218989,
    ObtenerIdentificadorUnicoComponent1750446218990,
    ObtenerLimitesComponent1750446218991,
    ObtenerMovimientosComponent1750446218992,
    ObtenerTarjetaComponent1750446218993,
    ObtenerTarjetaHabienteComponent1750446218994,
    ObtenerTarjetasAdicionalesComponent1750446218995,
    ObtenerTiposdeCuentaComponent1750446218996,
    ActivarComponent1750446218997,
    ActualizarCuentaPreferencialComponent1750446218998,
    ActualizarDatosContactoComponent1750446218999,
    AsociarCuentaComponent1750446219000,
    BlanquearPinComponent1750446219001,
    BloquearComponent1750446219004,
    BloquearDesdeREDComponent1750446219005,
    CrearComponent1750446219006,
    CrearConCuentasAsociadasComponent1750446219008,
    DenunciarComponent1750446219010,
    DenunciarDesdeREDComponent1750446219011,
    DesbloquearComponent1750446219012,
    DesbloquearDesdeREDComponent1750446219013,
    EliminarCuentaAsociadaComponent1750446219014,
    ModificarLimiteComponent1750446219015,
    ComprarComponent1750446219016,
    ObtenerEstadoCompraComponent1750446219017,
    ObtenerGruposComponent1750446219020,
    ObtenerValoresComponent1750446219022,
    AgregarPerfilComponent1750446219023,
    CrearComponent1750446219024,
    EliminarPerfilComponent1750446219025,
    EliminarUsuarioComponent1750446219026,
    HabilitarEnCanalComponent1750446219027,
    HabilitarUsuarioComponent1750446219028,
    InhabilitarUsuarioComponent1750446219029,
    ModificarComponent1750446219030,
    ObtenerComponent1750446219030,
    ObtenerPerfilesComponent1750446219031,
    ObtenerUsuariosComponent1750446219032,
    ObtenerUsuariosParaPerfilComponent1750446219033,
    ObtenerMetadataDeTareaComponent1750446219036,
    ObtenerProcesosHabilitadosComponent1750446219038,
    ObtenerRolesComponent1750446219040,
    ObtenerRolesdeTareaComponent1750446219041,
    ObtenerTareasdeProcesoComponent1750446219042,
    //declarations End page components
    ChatPopupComponent,
    FooterSpaceComponent,
    CodeExampleComponent,
    PageHeaderComponent,
    InfoCardComponent,
    BackendConfigComponent,
    ApiTabsComponent,
    ApiTableComponent,
    PrismHighlightDirective,
    StructuredDataComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    SharedModule,
    CommonModule,
    ApiDocsRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatButtonModule
  ],
  exports: [
    ChatPopupComponent,
    //exports Page components
    ContratarSimulacionComponent1750446218029,
    CrearComponent1750446218037,
    SimularComponent1750446218041,
    ActualizarDocumentoDigitalComponent1750446218043,
    AsociarDocumentoDigitalComponent1750446218045,
    EliminarDocumentoDigitalComponent1750446218046,
    ObtenerDocumentoDigitalComponent1750446218047,
    ObtenerDocumentosDigitalesComponent1750446218048,
    ModificarCuentaDestinoComponent1750446218050,
    ModificarCuentaOrigenComponent1750446218052,
    ModificarFechadeAbonoComponent1750446218054,
    ModificarMetadeAhorroComponent1750446218056,
    ModificarMontodeAbonoComponent1750446218059,
    ObtenerComponent1750446218060,
    ObtenerCronogramaAbonosComponent1750446218062,
    ObtenerCuentasDestinoHabilitadasComponent1750446218063,
    ObtenerCuentasOrigenHabilitadasComponent1750446218064,
    ObtenerEstadodeCuentaComponent1750446218066,
    ObtenerPeriodosHabilitadosComponent1750446218067,
    ObtenerPlazosHabilitadosComponent1750446218069,
    ObtenerProductosComponent1750446218072,
    AnularChequeElectronicoComponent1750446218074,
    AsignarIdaChequeElectronicoComponent1750446218076,
    CrearChequeraElectronicaComponent1750446218078,
    DepositarChequeElectronicodeBancoPropioComponent1750446218080,
    DepositarChequeElectronicodeOtroBancoComponent1750446218081,
    DepositarChequeElectronicoenCustodiaComponent1750446218082,
    EmitirChequeElectronicoComponent1750446218083,
    EmitirChequeElectronicodeChequeraComponent1750446218085,
    HabilitarChequeElectronicoComponent1750446218087,
    CrearAdhesionComponent1750446218089,
    CrearStopDebitComponent1750446218091,
    CrearStopDebitparaAdhesionconImporteComponent1750446218093,
    EliminarStopDebitComponent1750446218095,
    ObtenerAdhesionesComponent1750446218096,
    ObtenerDebitosComponent1750446218097,
    ObtenerEmpresasOriginantesComponent1750446218098,
    ObtenerStopDebitsComponent1750446218100,
    ReversarDebitosComponent1750446218101,
    SolicitarBajadeAdhesionComponent1750446218103,
    AutenticacionComponent1750446218105,
    ObtenerDetalledeEjecucionComponent1750446218107,
    ObtenerDetalledeProcesoComponent1750446218109,
    ObtenerProcesosconErrorComponent1750446218110,
    ObtenerProcesosCriticosComponent1750446218111,
    ObtenerProcesosDiariosComponent1750446218112,
    ObtenerProcesosMensualesComponent1750446218113,
    ObtenerProcesosReprocesablesComponent1750446218114,
    VerificarEstadoServidorComponent1750446218115,
    CalcularFechadeVencimientoComponent1750446218117,
    CalcularFechadeVencimientoenDiasHabilesComponent1750446218118,
    CalcularPlazoComponent1750446218120,
    CalcularPlazoenDiasHabilesComponent1750446218122,
    ObtenerFechaHabilComponent1750446218123,
    ObtenerFechaHabilAnteriorComponent1750446218126,
    ObtenerFechaHabilAnteriordeSucursalComponent1750446218127,
    ObtenerFechaHabildeSucursalComponent1750446218128,
    ObtenerInicioyFindeMesComponent1750446218129,
    ObtenerInicioyFindeMesdeSucursalComponent1750446218130,
    ObtenerProximaFechaHabilComponent1750446218131,
    ObtenerProximaFechaHabildeSucursalComponent1750446218132,
    AutorizarArchivoComponent1750446218133,
    CargarArchivoComponent1750446218135,
    CargarArchivoRecibidoComoDatoComponent1750446218137,
    DetenerArchivoComponent1750446218138,
    RechazarArchivoComponent1750446218139,
    CargarBeneficiariosComponent1750446218141,
    IngresarBeneficiarioComponent1750446218142,
    ObtenerBeneficiarioSegunFiltroComponent1750446218143,
    AltaAutomaticaContratoComponent1750446218144,
    CargarServiciosDisponiblesComponent1750446218146,
    ContratarDebitoAutomaticoComponent1750446218147,
    ObtenerDetalledeOrdendeCuentaComponent1750446218148,
    ObtenerDetalledePagoComponent1750446218150,
    ObtenerDetalleOrdenSegunCampoComponent1750446218152,
    ObtenerDetallePagoOrdenComponent1750446218154,
    ObtenerDeudaComponent1750446218156,
    ObtenerResumenOrdenComponent1750446218157,
    ObtenerServiciosComponent1750446218159,
    ObtenerValoresOrdenComponent1750446218160,
    ObtenerValoresOrdenSegunCampoComponent1750446218161,
    AutorizarOrdenComponent1750446218162,
    DetenerOrdenComponent1750446218163,
    IngresarOrdenPagoComponent1750446218164,
    ProcesarOrdenComponent1750446218165,
    RechazarOrdenComponent1750446218166,
    AnularPagoDeudaComponent1750446218167,
    PagarDeudaDesdeCuentaComponent1750446218169,
    RegistrarPagoDeudaComponent1750446218171,
    RegistrarPagoEnLineaComponent1750446218173,
    RegistrarPagoEnLineaDesdeCuentaComponent1750446218175,
    VisualizarListaResumenCabezalComponent1750446218178,
    VisualizarListaResumenCabezalOrdenComponent1750446218180,
    VisualizarOrdendeArchivoParaCuentaComponent1750446218181,
    VisualizarResultadoProcesamientoComponent1750446218183,
    VisualizarResumenCabezalComponent1750446218185,
    VisualizarSituacionArchivosComponent1750446218188,
    VisualizarSituacionLineasComponent1750446218191,
    CHATComponent1750446218194,
    ActualizarComponent1750446218196,
    ActualizarDocumentoDigitalComponent1750446218198,
    ActualizarDomicilioComponent1750446218199,
    ActualizarInformacionAdicionalComponent1750446218202,
    ActualizarRegistroEmpleadoComponent1750446218204,
    ActualizarTelefonoComponent1750446218207,
    AgregarDomicilioComponent1750446218208,
    AgregarInformacionAdicionalComponent1750446218209,
    AgregarIntegranteComponent1750446218210,
    AgregarTelefonoComponent1750446218212,
    AsociarDocumentoDigitalComponent1750446218213,
    EliminarDocumentoDigitalComponent1750446218214,
    EliminarDomicilioComponent1750446218215,
    EliminarInformacionAdicionalComponent1750446218216,
    EliminarIntegranteComponent1750446218218,
    HabilitarComponent1750446218221,
    InhabilitarComponent1750446218223,
    ModificarEjecutivoComponent1750446218224,
    CrearComponent1750446218226,
    CrearconPersonaExistenteComponent1750446218228,
    CrearParaPersonaJuridicaComponent1750446218230,
    ObtenerComponent1750446218232,
    ObtenerAhorrosProgramadosComponent1750446218233,
    ObtenerBolsillosComponent1750446218239,
    ObtenerClasificacionesInternasComponent1750446218242,
    ObtenerCuentaClienteComponent1750446218244,
    ObtenerCuentasCorrientesSaldoContableComponent1750446218246,
    ObtenerCuentasCorrientesSaldoDisponibleComponent1750446218248,
    ObtenerCuentasdeAhorroSaldoContableComponent1750446218250,
    ObtenerCuentasdeAhorroSaldoDisponibleComponent1750446218254,
    ObtenerDatosComponent1750446218258,
    ObtenerDetallePosicionComponent1750446218259,
    ObtenerDocumentoDigitalComponent1750446218261,
    ObtenerDocumentosDigitalesComponent1750446218262,
    ObtenerDomiciliosComponent1750446218263,
    ObtenerFacultadesComponent1750446218264,
    ObtenerIdentificadorUnicoComponent1750446218266,
    ObtenerInformacionAdicionalComponent1750446218267,
    ObtenerIntegrantesComponent1750446218269,
    ObtenerLimitesComponent1750446218271,
    ObtenerMotivosInhabilitacionComponent1750446218272,
    ObtenerPerfilComponent1750446218274,
    ObtenerPlazosFijosComponent1750446218277,
    ObtenerPlazosFijosCanceladosComponent1750446218278,
    ObtenerPlazosFijosconAvanceComponent1750446218280,
    ObtenerPosicionComponent1750446218282,
    ObtenerPrestamosComponent1750446218283,
    ObtenerPrestamosCanceladosComponent1750446218285,
    ObtenerPrestamosCastigadosComponent1750446218288,
    ObtenerPrestamosconAvanceComponent1750446218290,
    ObtenerResumendeProductosCierredeanoComponent1750446218292,
    ObtenerResumendeProductosSaldosContablesComponent1750446218294,
    ObtenerResumendeProductosSaldosDisponiblesComponent1750446218295,
    ObtenerResumenporProductoaCierreAnoComponent1750446218297,
    ObtenerRiesgodeCreditoComponent1750446218298,
    ObtenerSaldosdeOtrosProductosComponent1750446218300,
    ObtenerSectoresComponent1750446218302,
    ObtenerSegmentosComponent1750446218304,
    ObtenerTarjetasdeDebitoComponent1750446218306,
    ObtenerTelefonosComponent1750446218308,
    ObtenerTiposdeIntegracionComponent1750446218311,
    ObtenerTitularRepresentativoComponent1750446218323,
    ObtenerTitulosComponent1750446218326,
    ValidarExistenciaComponent1750446218328,
    VerificarEmpleadoComponent1750446218330,
    ObtenerAgenciasBancoComponent1750446218332,
    ObtenerBancosComponent1750446218333,
    ObtenerDetalleSucursalComponent1750446218336,
    ObtenerSucursalesPrincipalesComponent1750446218338,
    ObtenerActividadesComponent1750446218340,
    ObtenerActividadesporTipoComponent1750446218342,
    ObtenerEjecutivosComponent1750446218344,
    ObtenerTiposdeActividadComponent1750446218345,
    ObtenerTiposdeTarjetaComponent1750446218347,
    ObtenerImpuestosComponent1750446218348,
    ObtenerTiposdeDocumentoDigitalComponent1750446218350,
    ObtenerEstadosComponent1750446218354,
    ObtenerInstruccionesComponent1750446218357,
    ObtenerPaquetesComponent1750446218359,
    ObtenerTiposdeTextoComponent1750446218360,
    ObtenerCalendariodeSucursalComponent1750446218362,
    ObtenerCalendariosComponent1750446218364,
    ObtenerDetalledeCalendarioComponent1750446218366,
    ObtenerDetalledeCalendariodeSucursalComponent1750446218368,
    ObtenerDolarUSAComponent1750446218371,
    ObtenerEmpresaComponent1750446218373,
    ObtenerFechadeSistemaComponent1750446218374,
    ObtenerMonedaNacionalComponent1750446218376,
    ObtenerMonedasComponent1750446218378,
    ObtenerSucursalesComponent1750446218380,
    ObtenerAgrupadoresDomicilioComponent1750446218381,
    ObtenerBarriosyColoniasComponent1750446218383,
    ObtenerCiudadesyLocalidadesComponent1750446218384,
    ObtenerCodigosdeDomicilioComponent1750446218388,
    ObtenerEstadosProvinciasyDepartamentosComponent1750446218390,
    ObtenerPaisesComponent1750446218392,
    ObtenerTiposdeListasNegrasComponent1750446218394,
    ObtenerTiposdeTelefonoComponent1750446218396,
    ObtenerTiposdeViviendaComponent1750446218397,
    ObtenerPizarraporModuloComponent1750446218399,
    ObtenerPizarrasComponent1750446218400,
    ObtenerMenusComponent1750446218402,
    ObtenerPerfilesComponent1750446218404,
    AgregarTextoAsientoComponent1750446218405,
    AgregarTextoOrdinalComponent1750446218407,
    AnularMovimientoComponent1750446218409,
    ActualizarCondicionImpositivaComponent1750446218411,
    CrearCondicionImpositivaComponent1750446218412,
    ObtenerIdBantotalMovimientoComponent1750446218413,
    ObtenerIdBantotalOperacionComponent1750446218415,
    ObtenerIdBantotalProductoComponent1750446218416,
    ObtenerIdentificadorUnicodeMovimientoComponent1750446218418,
    ObtenerIdentificadorUnicodeOperacionComponent1750446218419,
    ObtenerIdentificadorUnicodeProductoComponent1750446218421,
    ObtenerClientedeunaOperacionComponent1750446218422,
    ObtenerCondicionImpositivaComponent1750446218424,
    ObtenerDetalledeMovimientoComponent1750446218426,
    ObtenerDetalledeOrdinalComponent1750446218426,
    ObtenerIntegrantesdeOperacionComponent1750446218427,
    ObtenerTextosdeMovimientoComponent1750446218428,
    RegistrarAsientoComponent1750446218429,
    RegistrarAsientoFechaValorComponent1750446218430,
    CancelarComponent1750446218431,
    CashInComponent1750446218432,
    CashOutComponent1750446218432,
    ContratarComponent1750446218433,
    ObtenerDatosComponent1750446218436,
    ObtenerMovimientosComponent1750446218438,
    ObtenerProductosComponent1750446218440,
    ObtenerProductosCVComponent1750446218441,
    ObtenerChequeraComponent1750446218442,
    ObtenerChequerasComponent1750446218443,
    ObtenerChequesdeChequeraComponent1750446218444,
    ObtenerComisionChequeraComponent1750446218445,
    ObtenerEstadodeChequeraComponent1750446218445,
    ObtenerSolicitudesdeChequerasComponent1750446218446,
    ObtenerTiposdeChequeraComponent1750446218447,
    ObtenerTiposdeChequeraporProductoComponent1750446218448,
    EliminarChequeraComponent1750446218449,
    RegistrarOrdendeNoPagodeChequeraComponent1750446218450,
    RegistrarOrdendeNoPagodeChequesComponent1750446218452,
    SolicitarChequeraComponent1750446218453,
    ContratarconPeriodicidadComponent1750446218454,
    ContratarProductoComponent1750446218495,
    ContratarProductoconAltadeFacultadesComponent1750446218496,
    ObtenerAcuerdosComponent1750446218498,
    ObtenerDatosComponent1750446218499,
    ObtenerEstadodeCuentaComponent1750446218500,
    ObtenerEvoluciondeSaldosComponent1750446218509,
    ObtenerProductosComponent1750446218511,
    ContratarconPeriodicidadComponent1750446218512,
    ContratarProductoComponent1750446218513,
    ContratarProductoconAltadeFacultadesComponent1750446218514,
    ObtenerDatosComponent1750446218515,
    ObtenerEstadodeCuentaComponent1750446218516,
    ObtenerEvoluciondeSaldosComponent1750446218517,
    ObtenerProductosComponent1750446218520,
    ActualizarBeneficiariosComponent1750446218521,
    ObtenerBeneficiariosComponent1750446218523,
    ActualizarDocumentoDigitalComponent1750446218524,
    AsociarDocumentoDigitalComponent1750446218524,
    EliminarDocumentoDigitalComponent1750446218525,
    ObtenerDocumentoDigitalComponent1750446218526,
    ObtenerDocumentosDigitalesComponent1750446218527,
    ObtenerBolsillosComponent1750446218528,
    ObtenerCBUdeCuentaVistaComponent1750446218529,
    ObtenerCuentaVistadeCBUComponent1750446218530,
    ObtenerDetalleBloqueoComponent1750446218531,
    ObtenerEstadodeCuentaporPeriodoComponent1750446218532,
    ObtenerEstadoDeOperacionComponent1750446218533,
    ObtenerFacultadesComponent1750446218535,
    ObtenerPaqueteComponent1750446218537,
    ObtenerPeriododeAcreditacionComponent1750446218539,
    ObtenerPeriodosdeAcreditacionComponent1750446218538,
    ObtenerSaldoBloqueadoComponent1750446218539,
    ObtenerSaldoDisponibleComponent1750446218540,
    ObtenerSaldosBloqueadosComponent1750446218541,
    AcreditarEnCuentaComponent1750446218541,
    ActivarComponent1750446218542,
    ActualizarPeriododeAcreditacionComponent1750446218543,
    BloquearSaldoComponent1750446218544,
    CancelarComponent1750446218544,
    DebitarEnCuentaComponent1750446218545,
    DesbloquearSaldoComponent1750446218546,
    ActualizarPerfilTransaccionalComponent1750446218547,
    AgregarPerfilTransaccionalComponent1750446218547,
    ObtenerPerfilTransaccionalComponent1750446218548,
    TraspasarConTipoDeCambioEspecialComponent1750446218549,
    TraspasarEntreCuentasdelaMismaPersonaComponent1750446218550,
    TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750446218551,
    TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750446218554,
    TraspasarEntreCuentasPropiasComponent1750446218557,
    TraspasarEntreCuentasPropiascontipodecambioComponent1750446218555,
    TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750446218556,
    TraspasarEntreCuentasTercerosComponent1750446218559,
    TraspasarEntreCuentasTerceroscontipodecambioComponent1750446218558,
    TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750446218559,
    ActualizarBeneficiariosComponent1750446218560,
    ObtenerBeneficiariosComponent1750446218561,
    ContratarComponent1750446218562,
    ContratarConFacultadesComponent1750446218563,
    ContratarSimulacionComponent1750446218564,
    ActualizarDocumentoDigitalComponent1750446218564,
    AsociarDocumentoDigitalComponent1750446218565,
    EliminarDocumentoDigitalComponent1750446218566,
    ObtenerDocumentoDigitalComponent1750446218567,
    ModificarCuentaDestinoalVencimientoComponent1750446218569,
    ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750446218570,
    ModificarInstruccionComponent1750446218572,
    ObtenerAvanceComponent1750446218573,
    ObtenerDatosComponent1750446218575,
    ObtenerDatosPrecancelacionComponent1750446218576,
    ObtenerDocumentosDigitalesComponent1750446218576,
    ObtenerInstruccionComponent1750446218579,
    ObtenerInstruccionesHabilitadosComponent1750446218578,
    ObtenerMovimientosComponent1750446218580,
    ObtenerPeriodosHabilitadosComponent1750446218581,
    ObtenerProductosComponent1750446218582,
    ObtenerProductosHabilitadosComponent1750446218583,
    ObtenerTasadePrecancelacionComponent1750446218584,
    PrecancelarComponent1750446218586,
    SimularComponent1750446218587,
    SimularConCronogramaComponent1750446218589,
    ConfirmarListaComponent1750446218590,
    CrearListaComponent1750446218591,
    CrearListaChequesComponent1750446218592,
    ObtenerProductosComponent1750446218593,
    ObtenerTiposDeDesembolsoComponent1750446218593,
    SeleccionarOpcionDesembolsoComponent1750446218594,
    ObtenerAgrupadoresComponent1750446218595,
    ObtenerCierredeSaldosporMonedaComponent1750446218596,
    ObtenerCondicionesGeneralesComponent1750446218597,
    ObtenerIndicadoresComponent1750446218598,
    ObtenerMetodosMasEjecutadosComponent1750446218599,
    ObtenerMonedasIndicesComponent1750446218600,
    ObtenerRubrosBolsaComponent1750446218601,
    ObtenerServiciosMasEjecutadosComponent1750446218603,
    ObtenerSesionesPorUsuarioComponent1750446218604,
    ObtenerSucursalesCajasComponent1750446218604,
    ObtenerTransaccionesporEstadosComponent1750446218605,
    BuscarClienteComponent1750446218606,
    CompletarTareaComponent1750446218607,
    CrearSolicitudAmpliacionComponent1750446218608,
    CrearSolicitudIndividualComponent1750446218609,
    CrearSolicitudRenovacionComponent1750446218609,
    AgregarFiadorComponent1750446218610,
    EliminarFiadorComponent1750446218611,
    ActualizarGrupoComponent1750446218612,
    ActualizarIntegrantedeGrupoComponent1750446218613,
    AgregarGrupoComponent1750446218613,
    AgregarIntegranteaGrupoComponent1750446218614,
    CrearSolicitudGrupalComponent1750446218615,
    HabilitarIntegrantedeunGrupoComponent1750446218616,
    InhabilitarIntegrantedeunGrupoComponent1750446218616,
    ObtenerDetalleGrupoComponent1750446218618,
    ObtenerGruposComponent1750446218621,
    ObtenerIntegrantesdeGrupoComponent1750446218622,
    ObtenerTiposdeGrupoComponent1750446218623,
    ObtenerTiposdeIntegranteComponent1750446218625,
    SimularPrestamoAmortizableGrupalComponent1750446218626,
    ObtenerAsesoresComponent1750446218628,
    ObtenerCampanasComponent1750446218629,
    ObtenerDestinosCreditoComponent1750446218630,
    ObtenerOperacionesClienteComponent1750446218631,
    ObtenerOrigenesdeCaptacionComponent1750446218633,
    ObtenerProductosComponent1750446218636,
    ObtenerSolicitudesClienteComponent1750446218638,
    ObtenerTiposAvalComponent1750446218639,
    AgregarOperacionesaCancelarComponent1750446218640,
    ObtenerOperacionesaCancelarComponent1750446218642,
    QuitarOperacionesaCancelarComponent1750446218643,
    SimularLibreAmortizacionComponent1750446218645,
    SimularPrestamoAmortizableComponent1750446218646,
    SimularPrestamoPlazoFijoComponent1750446218648,
    ValidarPoliticasComponent1750446218649,
    ObtenerCantidadCuotasComponent1750446218650,
    ObtenerCapitalComponent1750446218653,
    ObtenerComisionesComponent1750446218655,
    ObtenerComisionesporCuotaComponent1750446218656,
    ObtenerDiasPrimerPeriodoComponent1750446218658,
    ObtenerPeriodoEntreCuotasComponent1750446218660,
    ObtenerPermiteSegurosdelMismoTipoComponent1750446218659,
    ObtenerPlazoComponent1750446218661,
    ObtenerRequiereSegurodeVidaObligatorioComponent1750446218662,
    ObtenerSegurosComponent1750446218662,
    ObtenerItemsModeloComponent1750446218663,
    ObtenerModelosPAEComponent1750446218664,
    ObtenerScoresComponent1750446218665,
    ObtenerTiposDeModelosComponent1750446218666,
    ContratarPrestamoComponent1750446218667,
    ContratarVehicularComponent1750446218670,
    CrearClienteComponent1750446218671,
    CrearPersonaClienteComponent1750446218673,
    ObtenerDatosdeUsuarioComponent1750446218674,
    ObtenerDetalledeOfertaAmortizableComponent1750446218676,
    ObtenerDetalleOfertaVehicularComponent1750446218677,
    ObtenerMarcasComponent1750446218678,
    ObtenerModelosComponent1750446218678,
    ObtenerPartnersComponent1750446218679,
    ObtenerPrestamosdeClienteComponent1750446218682,
    ObtenerProductosComponent1750446218680,
    ObtenerProductosdelPartnerComponent1750446218681,
    ObtenerPuntosdeVentaComponent1750446218683,
    ObtenerVendedoresComponent1750446218683,
    ObtenerVersionesComponent1750446218686,
    SimularOfertasComponent1750446218687,
    SimularOfertasVehicularComponent1750446218688,
    SimularPrestamoComponent1750446218689,
    SimularVehicularComponent1750446218690,
    ObtenerCorrelativoGuiaComponent1750446218692,
    ObtenerCorrelativoGuiaEspecialComponent1750446218692,
    ObtenerGuiadeProcesoComponent1750446218693,
    ObtenerGuiaEspecialdeProcesoComponent1750446218694,
    ObtenerOpcionGeneraldeProcesoComponent1750446218695,
    ObtenerOpcionGeneralPorModuloComponent1750446218696,
    ObtenerProgramaParticularComponent1750446218696,
    ActualizarComponent1750446218697,
    ActualizarCelularComponent1750446218698,
    ActualizarContactoComponent1750446218699,
    ActualizarConyugeComponent1750446218701,
    ActualizarCorreoElectronicoComponent1750446218700,
    ActualizarDomicilioComponent1750446218703,
    ActualizarFATCAComponent1750446218704,
    ActualizarInformacionAdicionalComponent1750446218705,
    ActualizarInformacionFinancieraComponent1750446218707,
    ActualizarIntegrantedePersonaJuridicaComponent1750446218708,
    ActualizarPersonaJuridicaComponent1750446218709,
    ActualizarProfesionComponent1750446218710,
    ActualizarReferenciaComponent1750446218712,
    ActualizarRegistroEmpleadoComponent1750446218712,
    ActualizarTelefonoComponent1750446218713,
    ActualizarVictimaHechoViolentoComponent1750446218714,
    ModificarDocumentoAdicionalComponent1750446218715,
    AgregaraListaNegraComponent1750446218716,
    AgregarContactoComponent1750446218717,
    AgregarCorreoElectronicoComponent1750446218719,
    AgregarDatosPEPComponent1750446218720,
    AgregarDocumentoAdicionalComponent1750446218721,
    AgregarDomicilioComponent1750446218723,
    AgregarEstadoFinancieroComponent1750446218724,
    AgregarFATCAComponent1750446218725,
    AgregarInformacionAdicionalComponent1750446218726,
    AgregarInformacionFinancieraComponent1750446218727,
    AgregarIntegranteaPersonaJuridicaComponent1750446218728,
    AgregarPersonaVinculadaComponent1750446218729,
    AgregarReferenciaComponent1750446218730,
    AgregarTelefonoComponent1750446218730,
    AgregarVictimaHechoViolentoComponent1750446218731,
    CrearComponent1750446218733,
    CrearConyugeComponent1750446218736,
    CrearPersonaJuridicaComponent1750446218740,
    CrearReducidoComponent1750446218742,
    ActualizarDocumentoDigitalComponent1750446218743,
    AsociarDocumentoDigitalComponent1750446218744,
    EliminarDocumentoDigitalComponent1750446218745,
    ObtenerDocumentoDigitalComponent1750446218745,
    ObtenerDocumentosDigitalesComponent1750446218746,
    EliminarConyugeComponent1750446218747,
    EliminarDocumentoAdicionalComponent1750446218748,
    EliminarDomicilioComponent1750446218748,
    EliminarInformacionAdicionalComponent1750446218749,
    EliminarIntegrantedePersonaJuridicaComponent1750446218750,
    EliminarPersonaVinculadaComponent1750446218751,
    EliminarProfesionComponent1750446218753,
    ObtenerComponent1750446218755,
    ObtenerConceptoComponent1750446218756,
    ObtenerContactosComponent1750446218757,
    ObtenerConyugeComponent1750446218760,
    ObtenerCorreosElectronicosComponent1750446218758,
    ObtenerCuentasClienteComponent1750446218759,
    ObtenerDatosPEPComponent1750446218761,
    ObtenerDocumentosAdicionalesComponent1750446218762,
    ObtenerDomiciliosComponent1750446218762,
    ObtenerEstadosCivilesComponent1750446218763,
    ObtenerFacultadesComponent1750446218764,
    ObtenerFATCAComponent1750446218765,
    ObtenerHobbiesComponent1750446218765,
    ObtenerHobbyComponent1750446218766,
    ObtenerIdBantotalComponent1750446218767,
    ObtenerIdentidadesdeGeneroComponent1750446218771,
    ObtenerIdentificadorUnicoComponent1750446218772,
    ObtenerInformacionAdicionalComponent1750446218773,
    ObtenerInformacionFinancieraComponent1750446218775,
    ObtenerIntegrantesPersonaJuridicaComponent1750446218777,
    ObtenerLimitesComponent1750446218778,
    ObtenerNaturalezasJuridicasComponent1750446218779,
    ObtenerNivelesEducativosComponent1750446218780,
    ObtenerOcupacionesComponent1750446218781,
    ObtenerPersonaJuridicaComponent1750446218782,
    ObtenerPersonasComponent1750446218783,
    ObtenerPersonasJuridicasComponent1750446218783,
    ObtenerPersonasVinculadasComponent1750446218786,
    ObtenerProfesionComponent1750446218789,
    ObtenerProfesionesComponent1750446218788,
    ObtenerReferenciasComponent1750446218790,
    ObtenerTarjetasdeDebitoComponent1750446218792,
    ObtenerTelefonosComponent1750446218793,
    ObtenerTipodePersonaComponent1750446218793,
    ObtenerTiposdeDocumentoComponent1750446218794,
    ObtenerTiposDeFuncionarioPublicoComponent1750446218795,
    ObtenerTiposDePEPComponent1750446218796,
    ObtenerTitularesDelTelefonoComponent1750446218797,
    ObtenerVictimaHechoViolentoComponent1750446218798,
    ObtenerVinculosComponent1750446218799,
    ObtenerVinculosdeAfinidadComponent1750446218800,
    ObtenerVinculosdeConsanguinidadComponent1750446218803,
    ObtenerVinculosJuridicosComponent1750446218804,
    EvaluarPAEComponent1750446218806,
    ValidarCorreoElectronicoComponent1750446218806,
    ValidarDocumentoComponent1750446218807,
    ValidarenListasNegrasComponent1750446218808,
    ValidarExistenciaComponent1750446218809,
    ValidarListasInhabilitadosComponent1750446218811,
    VerificarEmpleadoComponent1750446218811,
    ConvertirTasaAnualEfectivaaLinealComponent1750446218813,
    ConvertirTasaAnualLinealaEfectivaComponent1750446218814,
    ConvertirTasaMensualEfectivaaLinealComponent1750446218815,
    ConvertirTasaMensualLinealaEfectivaComponent1750446218816,
    ObtenerCotizacionComponent1750446218818,
    ObtenerCotizacionaFechaComponent1750446218820,
    ObtenerCotizacionCierreComponent1750446218821,
    ObtenerPizarraEspecialporTransaccionComponent1750446218822,
    ObtenerPrecioaFechaComponent1750446218823,
    ObtenerPrecioEspecieComponent1750446218824,
    ObtenerTasadeOperacionComponent1750446218825,
    ObtenerTasaParaClienteComponent1750446218826,
    ObtenerTasaParaProductoComponent1750446218827,
    ObtenerTipodeCambioComponent1750446218828,
    ObtenerTiposDeCambioEspecialesComponent1750446218829,
    CancelarComponent1750446218830,
    CancelaraFechaComponent1750446218831,
    CancelaraFechaTercerosComponent1750446218833,
    CancelarTercerosComponent1750446218836,
    ContratarComponent1750446218838,
    ContratarAmpliacionComponent1750446218839,
    ContratarRefinanciacionComponent1750446218841,
    ContratarRefinanciacionporDeudaTotalComponent1750446218842,
    ContratarRefinanciacionporSaldoCapitalComponent1750446218844,
    ActualizarDocumentoDigitalComponent1750446218846,
    AsociarDocumentoDigitalComponent1750446218847,
    EliminarDocumentoDigitalComponent1750446218848,
    ObtenerDocumentoDigitalComponent1750446218850,
    ObtenerDocumentosDigitalesComponent1750446218852,
    ObtenerCronogramaComponent1750446218854,
    ObtenerCronogramaaFechaComponent1750446218856,
    ObtenerCronogramaconPagosaFechaComponent1750446218858,
    ObtenerCronogramaenEspecieComponent1750446218859,
    ObtenerCronogramaOriginalComponent1750446218861,
    ObtenerCuentadeCobroComponent1750446218862,
    ObtenerDatosdelProximoVencimientoComponent1750446218863,
    ObtenerDetalleComponent1750446218864,
    ObtenerDetalleaFechaComponent1750446218865,
    ObtenerDetalledeCancelacionTotalComponent1750446218866,
    ObtenerDetalledeOfertaComponent1750446218869,
    ObtenerDetalledeOfertaAmortizableComponent1750446218871,
    ObtenerDetalledeOperacionesaRefinanciarComponent1750446218874,
    ObtenerDetalledePrestamoCanceladoComponent1750446218875,
    ObtenerDetallePagoPrestamoComponent1750446218877,
    ObtenerDetalleReducidoComponent1750446218878,
    ObtenerDetalleSimulacionComponent1750446218880,
    ObtenerDeudaComponent1750446218881,
    ObtenerDeudaPrestamoCastigadoComponent1750446218882,
    ObtenerDeudaVencidaComponent1750446218883,
    ObtenerFechadeIncumplimientoComponent1750446218888,
    ObtenerFechadeUltimoPagoComponent1750446218890,
    ObtenerFechasdePagoComponent1750446218891,
    ObtenerInformacionAdicionalComponent1750446218893,
    ObtenerMontodeCancelacionComponent1750446218894,
    ObtenerMotivosPrecancelacionComponent1750446218895,
    ObtenerPagosdeCuotaComponent1750446218896,
    ObtenerPagosdeunPrestamoComponent1750446218897,
    ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750446218898,
    ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750446218899,
    ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750446218900,
    ObtenerProductosComponent1750446218903,
    ObtenerProductosRefinanciacionComponent1750446218905,
    ObtenerRefinanciacionSimuladaComponent1750446218907,
    AbonaraCuentaComponent1750446218909,
    ActualizarInformacionAdicionalComponent1750446218910,
    ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750446218912,
    AgregarCuentadeCobroComponent1750446218913,
    AgregarInformacionAdicionalComponent1750446218914,
    EliminarCuentadeCobroComponent1750446218915,
    EliminarInformacionAdicionalComponent1750446218916,
    SolicitarPrecancelacionComponent1750446218918,
    AdelantarCapitalConReduccionDeCuotaComponent1750446218921,
    AdelantarCapitalConReduccionDePlazoComponent1750446218922,
    PagarCuotaComponent1750446218924,
    PagarCuotaaFechaComponent1750446218925,
    PagarCuotaaFechaTercerosComponent1750446218926,
    PagarCuotaTercerosComponent1750446218928,
    ResimularAmortizableComponent1750446218930,
    ResimularAmpliacionComponent1750446218932,
    ResimularRefinanciacionComponent1750446218933,
    SimularComponent1750446218936,
    SimularAmortizableComponent1750446218937,
    SimularAmortizableSinClienteComponent1750446218939,
    SimularAmpliacionComponent1750446218940,
    SimularAmpliacionIngresandoSegurosComponent1750446218941,
    SimularDespejandoCapitalyCantidaddeCuotasComponent1750446218941,
    SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750446218942,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750446218944,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750446218945,
    SimularDespejandoFechadeVencimientoyTasaComponent1750446218946,
    SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750446218947,
    SimularIngresandoBalloonComponent1750446218948,
    SimularIngresandoBalloonSinClienteComponent1750446218949,
    SimularIngresandoSegurosComponent1750446218950,
    SimularIngresandoSegurosSinClienteComponent1750446218952,
    SimularLibreAmortizacionComponent1750446218953,
    SimularLibreAmortizacionSinClienteComponent1750446218954,
    SimularOfertasComponent1750446218955,
    SimularPlazoFijoComponent1750446218956,
    SimularRefinanciacionComponent1750446218957,
    SimularRefinanciacionporDeudaTotalComponent1750446218958,
    SimularRefinanciacionporSaldoCapitalComponent1750446218959,
    ActualizarTextosComponent1750446218960,
    AgregarTextosComponent1750446218960,
    EliminarTextosComponent1750446218961,
    ObtenerTextosComponent1750446218962,
    EvaluarRegladeNegocioComponent1750446218964,
    ObtenerReglasdeNegocioComponent1750446218965,
    ObtenerVariablesReglaComponent1750446218966,
    ValidarDatosRegladeNegocioComponent1750446218966,
    AutorizarExcepcionComponent1750446218968,
    ObtenerDetalledeExcepcionComponent1750446218969,
    ObtenerExcepcionesComponent1750446218970,
    RechazarExcepcionComponent1750446218971,
    RegistrarDispositivoComponent1750446218973,
    ContratarSeguroComponent1750446218974,
    ObtenerMontosDeUnSeguroComponent1750446218975,
    ObtenerSegurosComponent1750446218976,
    ObtenerSegurosAPagarComponent1750446218977,
    PagarSeguroComponent1750446218978,
    ObtenerCodigosdeLimitesComponent1750446218983,
    ObtenerCuentaPreferencialComponent1750446218979,
    ObtenerCuentasaAsociarComponent1750446218980,
    ObtenerCuentasAsociadasComponent1750446218981,
    ObtenerCuentasAsociadasPorTipoComponent1750446218982,
    ObtenerDatosComponent1750446218987,
    ObtenerDatosContactoComponent1750446218989,
    ObtenerIdentificadorUnicoComponent1750446218990,
    ObtenerLimitesComponent1750446218991,
    ObtenerMovimientosComponent1750446218992,
    ObtenerTarjetaComponent1750446218993,
    ObtenerTarjetaHabienteComponent1750446218994,
    ObtenerTarjetasAdicionalesComponent1750446218995,
    ObtenerTiposdeCuentaComponent1750446218996,
    ActivarComponent1750446218997,
    ActualizarCuentaPreferencialComponent1750446218998,
    ActualizarDatosContactoComponent1750446218999,
    AsociarCuentaComponent1750446219000,
    BlanquearPinComponent1750446219001,
    BloquearComponent1750446219004,
    BloquearDesdeREDComponent1750446219005,
    CrearComponent1750446219006,
    CrearConCuentasAsociadasComponent1750446219008,
    DenunciarComponent1750446219010,
    DenunciarDesdeREDComponent1750446219011,
    DesbloquearComponent1750446219012,
    DesbloquearDesdeREDComponent1750446219013,
    EliminarCuentaAsociadaComponent1750446219014,
    ModificarLimiteComponent1750446219015,
    ComprarComponent1750446219016,
    ObtenerEstadoCompraComponent1750446219017,
    ObtenerGruposComponent1750446219020,
    ObtenerValoresComponent1750446219022,
    AgregarPerfilComponent1750446219023,
    CrearComponent1750446219024,
    EliminarPerfilComponent1750446219025,
    EliminarUsuarioComponent1750446219026,
    HabilitarEnCanalComponent1750446219027,
    HabilitarUsuarioComponent1750446219028,
    InhabilitarUsuarioComponent1750446219029,
    ModificarComponent1750446219030,
    ObtenerComponent1750446219030,
    ObtenerPerfilesComponent1750446219031,
    ObtenerUsuariosComponent1750446219032,
    ObtenerUsuariosParaPerfilComponent1750446219033,
    ObtenerMetadataDeTareaComponent1750446219036,
    ObtenerProcesosHabilitadosComponent1750446219038,
    ObtenerRolesComponent1750446219040,
    ObtenerRolesdeTareaComponent1750446219041,
    ObtenerTareasdeProcesoComponent1750446219042,
    //exports End page components
  ],

  providers: [SearchService],
})
export class ApiDocsModule {}
