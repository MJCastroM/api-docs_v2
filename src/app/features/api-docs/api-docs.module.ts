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
import { ContratarSimulacionComponent1751987195230 } from './api-doc-page/Ahorro-Programado/Contratar/ContratarSimulacion.component';
import { CrearComponent1751987195248 } from './api-doc-page/Ahorro-Programado/Contratar/Crear.component';
import { SimularComponent1751987195259 } from './api-doc-page/Ahorro-Programado/Contratar/Simular.component';
import { ActualizarDocumentoDigitalComponent1751987195269 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1751987195278 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1751987195286 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1751987195290 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1751987195293 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ModificarCuentaDestinoComponent1751987195297 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarCuentaDestino.component';
import { ModificarCuentaOrigenComponent1751987195308 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarCuentaOrigen.component';
import { ModificarFechadeAbonoComponent1751987195317 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarFechadeAbono.component';
import { ModificarMetadeAhorroComponent1751987195326 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarMetadeAhorro.component';
import { ModificarMontodeAbonoComponent1751987195335 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarMontodeAbono.component';
import { ObtenerComponent1751987195345 } from './api-doc-page/Ahorro-Programado/Obtener/Obtener.component';
import { ObtenerCronogramaAbonosComponent1751987195350 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCronogramaAbonos.component';
import { ObtenerCuentasDestinoHabilitadasComponent1751987195360 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCuentasDestinoHabilitadas.component';
import { ObtenerCuentasOrigenHabilitadasComponent1751987195371 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCuentasOrigenHabilitadas.component';
import { ObtenerEstadodeCuentaComponent1751987195381 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerPeriodosHabilitadosComponent1751987195390 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerPeriodosHabilitados.component';
import { ObtenerPlazosHabilitadosComponent1751987195399 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerPlazosHabilitados.component';
import { ObtenerProductosComponent1751987195405 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerProductos.component';
import { AnularChequeElectronicoComponent1751987195408 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/AnularChequeElectronico.component';
import { AsignarIdaChequeElectronicoComponent1751987195413 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/AsignarIdaChequeElectronico.component';
import { CrearChequeraElectronicaComponent1751987195416 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/CrearChequeraElectronica.component';
import { DepositarChequeElectronicodeBancoPropioComponent1751987195426 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicodeBancoPropio.component';
import { DepositarChequeElectronicodeOtroBancoComponent1751987195437 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicodeOtroBanco.component';
import { DepositarChequeElectronicoenCustodiaComponent1751987195440 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicoenCustodia.component';
import { EmitirChequeElectronicoComponent1751987195450 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/EmitirChequeElectronico.component';
import { EmitirChequeElectronicodeChequeraComponent1751987195453 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/EmitirChequeElectronicodeChequera.component';
import { HabilitarChequeElectronicoComponent1751987195456 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/HabilitarChequeElectronico.component';
import { CrearAdhesionComponent1751987195460 } from './api-doc-page/AR - Argentina/SNP/CrearAdhesion.component';
import { CrearStopDebitComponent1751987195465 } from './api-doc-page/AR - Argentina/SNP/CrearStopDebit.component';
import { CrearStopDebitparaAdhesionconImporteComponent1751987195468 } from './api-doc-page/AR - Argentina/SNP/CrearStopDebitparaAdhesionconImporte.component';
import { EliminarStopDebitComponent1751987195471 } from './api-doc-page/AR - Argentina/SNP/EliminarStopDebit.component';
import { ObtenerAdhesionesComponent1751987195473 } from './api-doc-page/AR - Argentina/SNP/ObtenerAdhesiones.component';
import { ObtenerDebitosComponent1751987195485 } from './api-doc-page/AR - Argentina/SNP/ObtenerDebitos.component';
import { ObtenerEmpresasOriginantesComponent1751987195488 } from './api-doc-page/AR - Argentina/SNP/ObtenerEmpresasOriginantes.component';
import { ObtenerStopDebitsComponent1751987195497 } from './api-doc-page/AR - Argentina/SNP/ObtenerStopDebits.component';
import { ReversarDebitosComponent1751987195506 } from './api-doc-page/AR - Argentina/SNP/ReversarDebitos.component';
import { SolicitarBajadeAdhesionComponent1751987195515 } from './api-doc-page/AR - Argentina/SNP/SolicitarBajadeAdhesion.component';
import { AutenticacionComponent1751987195523 } from './api-doc-page/Autenticación/Autenticacion.component';
import { ObtenerDetalledeEjecucionComponent1751987195527 } from './api-doc-page/Cadena-de-Cierre/ObtenerDetalledeEjecucion.component';
import { ObtenerDetalledeProcesoComponent1751987195537 } from './api-doc-page/Cadena-de-Cierre/ObtenerDetalledeProceso.component';
import { ObtenerProcesosconErrorComponent1751987195540 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosconError.component';
import { ObtenerProcesosCriticosComponent1751987195551 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosCriticos.component';
import { ObtenerProcesosDiariosComponent1751987195555 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosDiarios.component';
import { ObtenerProcesosMensualesComponent1751987195566 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosMensuales.component';
import { ObtenerProcesosReprocesablesComponent1751987195577 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosReprocesables.component';
import { VerificarEstadoServidorComponent1751987195581 } from './api-doc-page/Cadena-de-Cierre/VerificarEstadoServidor.component';
import { CalcularFechadeVencimientoComponent1751987195587 } from './api-doc-page/Calendarios/Calcular/CalcularFechadeVencimiento.component';
import { CalcularFechadeVencimientoenDiasHabilesComponent1751987195590 } from './api-doc-page/Calendarios/Calcular/CalcularFechadeVencimientoenDiasHabiles.component';
import { CalcularPlazoComponent1751987195598 } from './api-doc-page/Calendarios/Calcular/CalcularPlazo.component';
import { CalcularPlazoenDiasHabilesComponent1751987195606 } from './api-doc-page/Calendarios/Calcular/CalcularPlazoenDiasHabiles.component';
import { ObtenerFechaHabilComponent1751987195616 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabil.component';
import { ObtenerFechaHabilAnteriorComponent1751987195625 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabilAnterior.component';
import { ObtenerFechaHabilAnteriordeSucursalComponent1751987195634 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabilAnteriordeSucursal.component';
import { ObtenerFechaHabildeSucursalComponent1751987195637 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabildeSucursal.component';
import { ObtenerInicioyFindeMesComponent1751987195646 } from './api-doc-page/Calendarios/Obtener/ObtenerInicioyFindeMes.component';
import { ObtenerInicioyFindeMesdeSucursalComponent1751987195649 } from './api-doc-page/Calendarios/Obtener/ObtenerInicioyFindeMesdeSucursal.component';
import { ObtenerProximaFechaHabilComponent1751987195652 } from './api-doc-page/Calendarios/Obtener/ObtenerProximaFechaHabil.component';
import { ObtenerProximaFechaHabildeSucursalComponent1751987195660 } from './api-doc-page/Calendarios/Obtener/ObtenerProximaFechaHabildeSucursal.component';
import { AutorizarArchivoComponent1751987195671 } from './api-doc-page/CASH-Management/Archivo/AutorizarArchivo.component';
import { CargarArchivoComponent1751987195679 } from './api-doc-page/CASH-Management/Archivo/CargarArchivo.component';
import { CargarArchivoRecibidoComoDatoComponent1751987195686 } from './api-doc-page/CASH-Management/Archivo/CargarArchivoRecibidoComoDato.component';
import { DetenerArchivoComponent1751987195695 } from './api-doc-page/CASH-Management/Archivo/DetenerArchivo.component';
import { RechazarArchivoComponent1751987195698 } from './api-doc-page/CASH-Management/Archivo/RechazarArchivo.component';
import { CargarBeneficiariosComponent1751987195701 } from './api-doc-page/CASH-Management/Beneficiarios/CargarBeneficiarios.component';
import { IngresarBeneficiarioComponent1751987195704 } from './api-doc-page/CASH-Management/Beneficiarios/IngresarBeneficiario.component';
import { ObtenerBeneficiarioSegunFiltroComponent1751987195711 } from './api-doc-page/CASH-Management/Beneficiarios/ObtenerBeneficiarioSegunFiltro.component';
import { AltaAutomaticaContratoComponent1751987195715 } from './api-doc-page/CASH-Management/Contratar/AltaAutomaticaContrato.component';
import { CargarServiciosDisponiblesComponent1751987195721 } from './api-doc-page/CASH-Management/Contratar/CargarServiciosDisponibles.component';
import { ContratarDebitoAutomaticoComponent1751987195731 } from './api-doc-page/CASH-Management/Contratar/ContratarDebitoAutomatico.component';
import { ObtenerDetalledeOrdendeCuentaComponent1751987195738 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalledeOrdendeCuenta.component';
import { ObtenerDetalledePagoComponent1751987195747 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalledePago.component';
import { ObtenerDetalleOrdenSegunCampoComponent1751987195754 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalleOrdenSegunCampo.component';
import { ObtenerDetallePagoOrdenComponent1751987195765 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetallePagoOrden.component';
import { ObtenerDeudaComponent1751987195771 } from './api-doc-page/CASH-Management/Obtener/ObtenerDeuda.component';
import { ObtenerResumenOrdenComponent1751987195779 } from './api-doc-page/CASH-Management/Obtener/ObtenerResumenOrden.component';
import { ObtenerServiciosComponent1751987195786 } from './api-doc-page/CASH-Management/Obtener/ObtenerServicios.component';
import { ObtenerValoresOrdenComponent1751987195795 } from './api-doc-page/CASH-Management/Obtener/ObtenerValoresOrden.component';
import { ObtenerValoresOrdenSegunCampoComponent1751987195804 } from './api-doc-page/CASH-Management/Obtener/ObtenerValoresOrdenSegunCampo.component';
import { AutorizarOrdenComponent1751987195814 } from './api-doc-page/CASH-Management/Orden/AutorizarOrden.component';
import { DetenerOrdenComponent1751987195823 } from './api-doc-page/CASH-Management/Orden/DetenerOrden.component';
import { IngresarOrdenPagoComponent1751987195832 } from './api-doc-page/CASH-Management/Orden/IngresarOrdenPago.component';
import { ProcesarOrdenComponent1751987195840 } from './api-doc-page/CASH-Management/Orden/ProcesarOrden.component';
import { RechazarOrdenComponent1751987195850 } from './api-doc-page/CASH-Management/Orden/RechazarOrden.component';
import { AnularPagoDeudaComponent1751987195863 } from './api-doc-page/CASH-Management/Pagos/AnularPagoDeuda.component';
import { PagarDeudaDesdeCuentaComponent1751987195872 } from './api-doc-page/CASH-Management/Pagos/PagarDeudaDesdeCuenta.component';
import { RegistrarPagoDeudaComponent1751987195881 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoDeuda.component';
import { RegistrarPagoEnLineaComponent1751987195889 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoEnLinea.component';
import { RegistrarPagoEnLineaDesdeCuentaComponent1751987195898 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoEnLineaDesdeCuenta.component';
import { VisualizarListaResumenCabezalComponent1751987195909 } from './api-doc-page/CASH-Management/Visualizar/VisualizarListaResumenCabezal.component';
import { VisualizarListaResumenCabezalOrdenComponent1751987195920 } from './api-doc-page/CASH-Management/Visualizar/VisualizarListaResumenCabezalOrden.component';
import { VisualizarOrdendeArchivoParaCuentaComponent1751987195928 } from './api-doc-page/CASH-Management/Visualizar/VisualizarOrdendeArchivoParaCuenta.component';
import { VisualizarResultadoProcesamientoComponent1751987195937 } from './api-doc-page/CASH-Management/Visualizar/VisualizarResultadoProcesamiento.component';
import { VisualizarResumenCabezalComponent1751987195945 } from './api-doc-page/CASH-Management/Visualizar/VisualizarResumenCabezal.component';
import { VisualizarSituacionArchivosComponent1751987195954 } from './api-doc-page/CASH-Management/Visualizar/VisualizarSituacionArchivos.component';
import { VisualizarSituacionLineasComponent1751987195966 } from './api-doc-page/CASH-Management/Visualizar/VisualizarSituacionLineas.component';
import { CHATComponent1751987195976 } from './api-doc-page/CHAT/CHAT.component';
import { ActualizarComponent1751987195986 } from './api-doc-page/Clientes/Actualizar/Actualizar.component';
import { ActualizarDocumentoDigitalComponent1751987195990 } from './api-doc-page/Clientes/Actualizar/ActualizarDocumentoDigital.component';
import { ActualizarDomicilioComponent1751987195993 } from './api-doc-page/Clientes/Actualizar/ActualizarDomicilio.component';
import { ActualizarInformacionAdicionalComponent1751987196002 } from './api-doc-page/Clientes/Actualizar/ActualizarInformacionAdicional.component';
import { ActualizarRegistroEmpleadoComponent1751987196009 } from './api-doc-page/Clientes/Actualizar/ActualizarRegistroEmpleado.component';
import { ActualizarTelefonoComponent1751987196018 } from './api-doc-page/Clientes/Actualizar/ActualizarTelefono.component';
import { AgregarDomicilioComponent1751987196029 } from './api-doc-page/Clientes/Actualizar/AgregarDomicilio.component';
import { AgregarInformacionAdicionalComponent1751987196037 } from './api-doc-page/Clientes/Actualizar/AgregarInformacionAdicional.component';
import { AgregarIntegranteComponent1751987196042 } from './api-doc-page/Clientes/Actualizar/AgregarIntegrante.component';
import { AgregarTelefonoComponent1751987196047 } from './api-doc-page/Clientes/Actualizar/AgregarTelefono.component';
import { AsociarDocumentoDigitalComponent1751987196055 } from './api-doc-page/Clientes/Actualizar/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1751987196065 } from './api-doc-page/Clientes/Actualizar/EliminarDocumentoDigital.component';
import { EliminarDomicilioComponent1751987196073 } from './api-doc-page/Clientes/Actualizar/EliminarDomicilio.component';
import { EliminarInformacionAdicionalComponent1751987196082 } from './api-doc-page/Clientes/Actualizar/EliminarInformacionAdicional.component';
import { EliminarIntegranteComponent1751987196094 } from './api-doc-page/Clientes/Actualizar/EliminarIntegrante.component';
import { HabilitarComponent1751987196099 } from './api-doc-page/Clientes/Actualizar/Habilitar.component';
import { InhabilitarComponent1751987196107 } from './api-doc-page/Clientes/Actualizar/Inhabilitar.component';
import { ModificarEjecutivoComponent1751987196111 } from './api-doc-page/Clientes/Actualizar/ModificarEjecutivo.component';
import { CrearComponent1751987196122 } from './api-doc-page/Clientes/Crear/Crear.component';
import { CrearconPersonaExistenteComponent1751987196132 } from './api-doc-page/Clientes/Crear/CrearconPersonaExistente.component';
import { CrearParaPersonaJuridicaComponent1751987196138 } from './api-doc-page/Clientes/Crear/CrearParaPersonaJuridica.component';
import { ObtenerComponent1751987196147 } from './api-doc-page/Clientes/Obtener/Obtener.component';
import { ObtenerAhorrosProgramadosComponent1751987196150 } from './api-doc-page/Clientes/Obtener/ObtenerAhorrosProgramados.component';
import { ObtenerBolsillosComponent1751987196159 } from './api-doc-page/Clientes/Obtener/ObtenerBolsillos.component';
import { ObtenerClasificacionesInternasComponent1751987196168 } from './api-doc-page/Clientes/Obtener/ObtenerClasificacionesInternas.component';
import { ObtenerCuentaClienteComponent1751987196177 } from './api-doc-page/Clientes/Obtener/ObtenerCuentaCliente.component';
import { ObtenerCuentasCorrientesSaldoContableComponent1751987196182 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasCorrientesSaldoContable.component';
import { ObtenerCuentasCorrientesSaldoDisponibleComponent1751987196191 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasCorrientesSaldoDisponible.component';
import { ObtenerCuentasdeAhorroSaldoContableComponent1751987196202 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasdeAhorroSaldoContable.component';
import { ObtenerCuentasdeAhorroSaldoDisponibleComponent1751987196213 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasdeAhorroSaldoDisponible.component';
import { ObtenerDatosComponent1751987196221 } from './api-doc-page/Clientes/Obtener/ObtenerDatos.component';
import { ObtenerDetallePosicionComponent1751987196231 } from './api-doc-page/Clientes/Obtener/ObtenerDetallePosicion.component';
import { ObtenerDocumentoDigitalComponent1751987196237 } from './api-doc-page/Clientes/Obtener/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1751987196246 } from './api-doc-page/Clientes/Obtener/ObtenerDocumentosDigitales.component';
import { ObtenerDomiciliosComponent1751987196254 } from './api-doc-page/Clientes/Obtener/ObtenerDomicilios.component';
import { ObtenerFacultadesComponent1751987196261 } from './api-doc-page/Clientes/Obtener/ObtenerFacultades.component';
import { ObtenerIdentificadorUnicoComponent1751987196269 } from './api-doc-page/Clientes/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerInformacionAdicionalComponent1751987196277 } from './api-doc-page/Clientes/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerIntegrantesComponent1751987196286 } from './api-doc-page/Clientes/Obtener/ObtenerIntegrantes.component';
import { ObtenerLimitesComponent1751987196295 } from './api-doc-page/Clientes/Obtener/ObtenerLimites.component';
import { ObtenerMotivosInhabilitacionComponent1751987196304 } from './api-doc-page/Clientes/Obtener/ObtenerMotivosInhabilitacion.component';
import { ObtenerPerfilComponent1751987196313 } from './api-doc-page/Clientes/Obtener/ObtenerPerfil.component';
import { ObtenerPlazosFijosComponent1751987196317 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijos.component';
import { ObtenerPlazosFijosCanceladosComponent1751987196323 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijosCancelados.component';
import { ObtenerPlazosFijosconAvanceComponent1751987196333 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijosconAvance.component';
import { ObtenerPosicionComponent1751987196336 } from './api-doc-page/Clientes/Obtener/ObtenerPosicion.component';
import { ObtenerPrestamosComponent1751987196339 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamos.component';
import { ObtenerPrestamosCanceladosComponent1751987196348 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosCancelados.component';
import { ObtenerPrestamosCastigadosComponent1751987196351 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosCastigados.component';
import { ObtenerPrestamosconAvanceComponent1751987196355 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosconAvance.component';
import { ObtenerResumendeProductosCierredeanoComponent1751987196359 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosCierredeano.component';
import { ObtenerResumendeProductosSaldosContablesComponent1751987196368 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosSaldosContables.component';
import { ObtenerResumendeProductosSaldosDisponiblesComponent1751987196371 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosSaldosDisponibles.component';
import { ObtenerResumenporProductoaCierreAnoComponent1751987196374 } from './api-doc-page/Clientes/Obtener/ObtenerResumenporProductoaCierreAno.component';
import { ObtenerRiesgodeCreditoComponent1751987196386 } from './api-doc-page/Clientes/Obtener/ObtenerRiesgodeCredito.component';
import { ObtenerSaldosdeOtrosProductosComponent1751987196393 } from './api-doc-page/Clientes/Obtener/ObtenerSaldosdeOtrosProductos.component';
import { ObtenerSectoresComponent1751987196406 } from './api-doc-page/Clientes/Obtener/ObtenerSectores.component';
import { ObtenerSegmentosComponent1751987196417 } from './api-doc-page/Clientes/Obtener/ObtenerSegmentos.component';
import { ObtenerTarjetasdeDebitoComponent1751987196420 } from './api-doc-page/Clientes/Obtener/ObtenerTarjetasdeDebito.component';
import { ObtenerTelefonosComponent1751987196423 } from './api-doc-page/Clientes/Obtener/ObtenerTelefonos.component';
import { ObtenerTiposdeIntegracionComponent1751987196434 } from './api-doc-page/Clientes/Obtener/ObtenerTiposdeIntegracion.component';
import { ObtenerTitularRepresentativoComponent1751987196439 } from './api-doc-page/Clientes/Obtener/ObtenerTitularRepresentativo.component';
import { ObtenerTitulosComponent1751987196447 } from './api-doc-page/Clientes/Obtener/ObtenerTitulos.component';
import { ValidarExistenciaComponent1751987196453 } from './api-doc-page/Clientes/Validar/ValidarExistencia.component';
import { VerificarEmpleadoComponent1751987196455 } from './api-doc-page/Clientes/Validar/VerificarEmpleado.component';
import { ObtenerAgenciasBancoComponent1751987196457 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerAgenciasBanco.component';
import { ObtenerBancosComponent1751987196460 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerBancos.component';
import { ObtenerDetalleSucursalComponent1751987196464 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerDetalleSucursal.component';
import { ObtenerSucursalesPrincipalesComponent1751987196466 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerSucursalesPrincipales.component';
import { ObtenerActividadesComponent1751987196468 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerActividades.component';
import { ObtenerActividadesporTipoComponent1751987196471 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerActividadesporTipo.component';
import { ObtenerEjecutivosComponent1751987196473 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerEjecutivos.component';
import { ObtenerTiposdeActividadComponent1751987196476 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerTiposdeActividad.component';
import { ObtenerTiposdeTarjetaComponent1751987196480 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerTiposdeTarjeta.component';
import { ObtenerImpuestosComponent1751987196486 } from './api-doc-page/Configuración-Bantotal/ObtenerImpuestos.component';
import { ObtenerTiposdeDocumentoDigitalComponent1751987196489 } from './api-doc-page/Configuración-Bantotal/ObtenerTiposdeDocumentoDigital.component';
import { ObtenerEstadosComponent1751987196497 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerEstados.component';
import { ObtenerInstruccionesComponent1751987196503 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerInstrucciones.component';
import { ObtenerPaquetesComponent1751987196509 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerPaquetes.component';
import { ObtenerTiposdeTextoComponent1751987196516 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerTiposdeTexto.component';
import { ObtenerCalendariodeSucursalComponent1751987196525 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerCalendariodeSucursal.component';
import { ObtenerCalendariosComponent1751987196532 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerCalendarios.component';
import { ObtenerDetalledeCalendarioComponent1751987196539 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDetalledeCalendario.component';
import { ObtenerDetalledeCalendariodeSucursalComponent1751987196548 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDetalledeCalendariodeSucursal.component';
import { ObtenerDolarUSAComponent1751987196556 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDolarUSA.component';
import { ObtenerEmpresaComponent1751987196567 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerEmpresa.component';
import { ObtenerFechadeSistemaComponent1751987196569 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerFechadeSistema.component';
import { ObtenerMonedaNacionalComponent1751987196572 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerMonedaNacional.component';
import { ObtenerMonedasComponent1751987196576 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerMonedas.component';
import { ObtenerSucursalesComponent1751987196586 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerSucursales.component';
import { ObtenerAgrupadoresDomicilioComponent1751987196596 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerAgrupadoresDomicilio.component';
import { ObtenerBarriosyColoniasComponent1751987196605 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerBarriosyColonias.component';
import { ObtenerCiudadesyLocalidadesComponent1751987196614 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerCiudadesyLocalidades.component';
import { ObtenerCodigosdeDomicilioComponent1751987196623 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerCodigosdeDomicilio.component';
import { ObtenerEstadosProvinciasyDepartamentosComponent1751987196627 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerEstadosProvinciasyDepartamentos.component';
import { ObtenerPaisesComponent1751987196631 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerPaises.component';
import { ObtenerTiposdeListasNegrasComponent1751987196635 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeListasNegras.component';
import { ObtenerTiposdeTelefonoComponent1751987196637 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeTelefono.component';
import { ObtenerTiposdeViviendaComponent1751987196641 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeVivienda.component';
import { ObtenerPizarraporModuloComponent1751987196645 } from './api-doc-page/Configuración-Bantotal/Precios/ObtenerPizarraporModulo.component';
import { ObtenerPizarrasComponent1751987196649 } from './api-doc-page/Configuración-Bantotal/Precios/ObtenerPizarras.component';
import { ObtenerMenusComponent1751987196657 } from './api-doc-page/Configuración-Bantotal/Seguridad/ObtenerMenus.component';
import { ObtenerPerfilesComponent1751987196667 } from './api-doc-page/Configuración-Bantotal/Seguridad/ObtenerPerfiles.component';
import { AgregarTextoAsientoComponent1751987196676 } from './api-doc-page/Contabilidad/Agregar-Texto/AgregarTextoAsiento.component';
import { AgregarTextoOrdinalComponent1751987196685 } from './api-doc-page/Contabilidad/Agregar-Texto/AgregarTextoOrdinal.component';
import { AnularMovimientoComponent1751987196691 } from './api-doc-page/Contabilidad/AnularMovimiento.component';
import { ActualizarCondicionImpositivaComponent1751987196700 } from './api-doc-page/Contabilidad/Condición-Impositiva/ActualizarCondicionImpositiva.component';
import { CrearCondicionImpositivaComponent1751987196707 } from './api-doc-page/Contabilidad/Condición-Impositiva/CrearCondicionImpositiva.component';
import { ObtenerIdBantotalMovimientoComponent1751987196716 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalMovimiento.component';
import { ObtenerIdBantotalOperacionComponent1751987196723 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalOperacion.component';
import { ObtenerIdBantotalProductoComponent1751987196731 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalProducto.component';
import { ObtenerIdentificadorUnicodeMovimientoComponent1751987196737 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeMovimiento.component';
import { ObtenerIdentificadorUnicodeOperacionComponent1751987196743 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeOperacion.component';
import { ObtenerIdentificadorUnicodeProductoComponent1751987196750 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeProducto.component';
import { ObtenerClientedeunaOperacionComponent1751987196757 } from './api-doc-page/Contabilidad/Obtener/ObtenerClientedeunaOperacion.component';
import { ObtenerCondicionImpositivaComponent1751987196766 } from './api-doc-page/Contabilidad/Obtener/ObtenerCondicionImpositiva.component';
import { ObtenerDetalledeMovimientoComponent1751987196774 } from './api-doc-page/Contabilidad/Obtener/ObtenerDetalledeMovimiento.component';
import { ObtenerDetalledeOrdinalComponent1751987196785 } from './api-doc-page/Contabilidad/Obtener/ObtenerDetalledeOrdinal.component';
import { ObtenerIntegrantesdeOperacionComponent1751987196791 } from './api-doc-page/Contabilidad/Obtener/ObtenerIntegrantesdeOperacion.component';
import { ObtenerTextosdeMovimientoComponent1751987196800 } from './api-doc-page/Contabilidad/Obtener/ObtenerTextosdeMovimiento.component';
import { RegistrarAsientoComponent1751987196808 } from './api-doc-page/Contabilidad/Registrar-Asiento/RegistrarAsiento.component';
import { RegistrarAsientoFechaValorComponent1751987196815 } from './api-doc-page/Contabilidad/Registrar-Asiento/RegistrarAsientoFechaValor.component';
import { CancelarComponent1751987196824 } from './api-doc-page/Cuentas-Bolsillo/Cancelar.component';
import { CashInComponent1751987196834 } from './api-doc-page/Cuentas-Bolsillo/CashIn.component';
import { CashOutComponent1751987196838 } from './api-doc-page/Cuentas-Bolsillo/CashOut.component';
import { ContratarComponent1751987196847 } from './api-doc-page/Cuentas-Bolsillo/Contratar.component';
import { ObtenerDatosComponent1751987196855 } from './api-doc-page/Cuentas-Bolsillo/ObtenerDatos.component';
import { ObtenerMovimientosComponent1751987196867 } from './api-doc-page/Cuentas-Bolsillo/ObtenerMovimientos.component';
import { ObtenerProductosComponent1751987196876 } from './api-doc-page/Cuentas-Bolsillo/ObtenerProductos.component';
import { ObtenerProductosCVComponent1751987196888 } from './api-doc-page/Cuentas-Bolsillo/ObtenerProductosCV.component';
import { ObtenerChequeraComponent1751987196892 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequera.component';
import { ObtenerChequerasComponent1751987196897 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequeras.component';
import { ObtenerChequesdeChequeraComponent1751987196901 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequesdeChequera.component';
import { ObtenerComisionChequeraComponent1751987196914 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerComisionChequera.component';
import { ObtenerEstadodeChequeraComponent1751987196917 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerEstadodeChequera.component';
import { ObtenerSolicitudesdeChequerasComponent1751987196920 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerSolicitudesdeChequeras.component';
import { ObtenerTiposdeChequeraComponent1751987196930 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerTiposdeChequera.component';
import { ObtenerTiposdeChequeraporProductoComponent1751987196938 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerTiposdeChequeraporProducto.component';
import { EliminarChequeraComponent1751987196948 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/EliminarChequera.component';
import { RegistrarOrdendeNoPagodeChequeraComponent1751987196955 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/RegistrarOrdendeNoPagodeChequera.component';
import { RegistrarOrdendeNoPagodeChequesComponent1751987196964 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/RegistrarOrdendeNoPagodeCheques.component';
import { SolicitarChequeraComponent1751987196970 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/SolicitarChequera.component';
import { ContratarconPeriodicidadComponent1751987196979 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarconPeriodicidad.component';
import { ContratarProductoComponent1751987196987 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarProducto.component';
import { ContratarProductoconAltadeFacultadesComponent1751987196989 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarProductoconAltadeFacultades.component';
import { ObtenerAcuerdosComponent1751987196992 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerAcuerdos.component';
import { ObtenerDatosComponent1751987196996 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerDatos.component';
import { ObtenerEstadodeCuentaComponent1751987197002 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerEvoluciondeSaldosComponent1751987197010 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerEvoluciondeSaldos.component';
import { ObtenerProductosComponent1751987197017 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerProductos.component';
import { ContratarconPeriodicidadComponent1751987197024 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarconPeriodicidad.component';
import { ContratarProductoComponent1751987197030 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarProducto.component';
import { ContratarProductoconAltadeFacultadesComponent1751987197038 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarProductoconAltadeFacultades.component';
import { ObtenerDatosComponent1751987197041 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerDatos.component';
import { ObtenerEstadodeCuentaComponent1751987197046 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerEvoluciondeSaldosComponent1751987197049 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerEvoluciondeSaldos.component';
import { ObtenerProductosComponent1751987197052 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerProductos.component';
import { ActualizarBeneficiariosComponent1751987197059 } from './api-doc-page/Cuentas-Vista/Beneficiarios/ActualizarBeneficiarios.component';
import { ObtenerBeneficiariosComponent1751987197067 } from './api-doc-page/Cuentas-Vista/Beneficiarios/ObtenerBeneficiarios.component';
import { ActualizarDocumentoDigitalComponent1751987197074 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1751987197083 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1751987197089 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1751987197098 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1751987197105 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ObtenerBolsillosComponent1751987197114 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerBolsillos.component';
import { ObtenerCBUdeCuentaVistaComponent1751987197120 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerCBUdeCuentaVista.component';
import { ObtenerCuentaVistadeCBUComponent1751987197128 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerCuentaVistadeCBU.component';
import { ObtenerDetalleBloqueoComponent1751987197137 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerDetalleBloqueo.component';
import { ObtenerEstadodeCuentaporPeriodoComponent1751987197148 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerEstadodeCuentaporPeriodo.component';
import { ObtenerEstadoDeOperacionComponent1751987197156 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerEstadoDeOperacion.component';
import { ObtenerFacultadesComponent1751987197165 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerFacultades.component';
import { ObtenerPaqueteComponent1751987197175 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPaquete.component';
import { ObtenerPeriododeAcreditacionComponent1751987197193 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPeriododeAcreditacion.component';
import { ObtenerPeriodosdeAcreditacionComponent1751987197184 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPeriodosdeAcreditacion.component';
import { ObtenerSaldoBloqueadoComponent1751987197203 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldoBloqueado.component';
import { ObtenerSaldoDisponibleComponent1751987197215 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldoDisponible.component';
import { ObtenerSaldosBloqueadosComponent1751987197224 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldosBloqueados.component';
import { AcreditarEnCuentaComponent1751987197237 } from './api-doc-page/Cuentas-Vista/Operar/AcreditarEnCuenta.component';
import { ActivarComponent1751987197247 } from './api-doc-page/Cuentas-Vista/Operar/Activar.component';
import { ActualizarPeriododeAcreditacionComponent1751987197254 } from './api-doc-page/Cuentas-Vista/Operar/ActualizarPeriododeAcreditacion.component';
import { BloquearSaldoComponent1751987197262 } from './api-doc-page/Cuentas-Vista/Operar/BloquearSaldo.component';
import { CancelarComponent1751987197265 } from './api-doc-page/Cuentas-Vista/Operar/Cancelar.component';
import { DebitarEnCuentaComponent1751987197270 } from './api-doc-page/Cuentas-Vista/Operar/DebitarEnCuenta.component';
import { DesbloquearSaldoComponent1751987197277 } from './api-doc-page/Cuentas-Vista/Operar/DesbloquearSaldo.component';
import { ActualizarPerfilTransaccionalComponent1751987197288 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/ActualizarPerfilTransaccional.component';
import { AgregarPerfilTransaccionalComponent1751987197295 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/AgregarPerfilTransaccional.component';
import { ObtenerPerfilTransaccionalComponent1751987197302 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/ObtenerPerfilTransaccional.component';
import { TraspasarConTipoDeCambioEspecialComponent1751987197309 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarConTipoDeCambioEspecial.component';
import { TraspasarEntreCuentasdelaMismaPersonaComponent1751987197318 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasdelaMismaPersona.component';
import { TraspasarEntreCuentasMismoTitularcontipodecambioComponent1751987197327 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasMismoTitularcontipodecambio.component';
import { TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1751987197332 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasMismoTitulardiferentesmonedas.component';
import { TraspasarEntreCuentasPropiasComponent1751987197341 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropias.component';
import { TraspasarEntreCuentasPropiascontipodecambioComponent1751987197335 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropiascontipodecambio.component';
import { TraspasarEntreCuentasPropiasdiferentesmonedasComponent1751987197338 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropiasdiferentesmonedas.component';
import { TraspasarEntreCuentasTercerosComponent1751987197351 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTerceros.component';
import { TraspasarEntreCuentasTerceroscontipodecambioComponent1751987197345 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTerceroscontipodecambio.component';
import { TraspasarEntreCuentasTercerosdiferentesmonedasComponent1751987197348 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTercerosdiferentesmonedas.component';
import { ActualizarBeneficiariosComponent1751987197358 } from './api-doc-page/Depósitos-a-Plazo/Beneficiarios/ActualizarBeneficiarios.component';
import { ObtenerBeneficiariosComponent1751987197367 } from './api-doc-page/Depósitos-a-Plazo/Beneficiarios/ObtenerBeneficiarios.component';
import { ContratarComponent1751987197373 } from './api-doc-page/Depósitos-a-Plazo/Contratar/Contratar.component';
import { ContratarConFacultadesComponent1751987197383 } from './api-doc-page/Depósitos-a-Plazo/Contratar/ContratarConFacultades.component';
import { ContratarSimulacionComponent1751987197393 } from './api-doc-page/Depósitos-a-Plazo/Contratar/ContratarSimulacion.component';
import { ActualizarDocumentoDigitalComponent1751987197403 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1751987197412 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1751987197420 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1751987197429 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ModificarCuentaDestinoalVencimientoComponent1751987197436 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarCuentaDestinoalVencimiento.component';
import { ModificarCuentaDestinodeAcreditacionPeriodicaComponent1751987197446 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarCuentaDestinodeAcreditacionPeriodica.component';
import { ModificarInstruccionComponent1751987197456 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarInstruccion.component';
import { ObtenerAvanceComponent1751987197464 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerAvance.component';
import { ObtenerDatosComponent1751987197474 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDatos.component';
import { ObtenerDatosPrecancelacionComponent1751987197484 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDatosPrecancelacion.component';
import { ObtenerDocumentosDigitalesComponent1751987197493 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDocumentosDigitales.component';
import { ObtenerInstruccionComponent1751987197514 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerInstruccion.component';
import { ObtenerInstruccionesHabilitadosComponent1751987197504 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerInstruccionesHabilitados.component';
import { ObtenerMovimientosComponent1751987197523 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerMovimientos.component';
import { ObtenerPeriodosHabilitadosComponent1751987197533 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerPeriodosHabilitados.component';
import { ObtenerProductosComponent1751987197543 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerProductos.component';
import { ObtenerProductosHabilitadosComponent1751987197555 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerProductosHabilitados.component';
import { ObtenerTasadePrecancelacionComponent1751987197567 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerTasadePrecancelacion.component';
import { PrecancelarComponent1751987197575 } from './api-doc-page/Depósitos-a-Plazo/Precancelar.component';
import { SimularComponent1751987197585 } from './api-doc-page/Depósitos-a-Plazo/Simular/Simular.component';
import { SimularConCronogramaComponent1751987197596 } from './api-doc-page/Depósitos-a-Plazo/Simular/SimularConCronograma.component';
import { ConfirmarListaComponent1751987197604 } from './api-doc-page/Descuento-de-Documentos/ConfirmarLista.component';
import { CrearListaComponent1751987197613 } from './api-doc-page/Descuento-de-Documentos/CrearLista.component';
import { CrearListaChequesComponent1751987197622 } from './api-doc-page/Descuento-de-Documentos/CrearListaCheques.component';
import { ObtenerProductosComponent1751987197631 } from './api-doc-page/Descuento-de-Documentos/ObtenerProductos.component';
import { ObtenerTiposDeDesembolsoComponent1751987197639 } from './api-doc-page/Descuento-de-Documentos/ObtenerTiposDeDesembolso.component';
import { SeleccionarOpcionDesembolsoComponent1751987197647 } from './api-doc-page/Descuento-de-Documentos/SeleccionarOpcionDesembolso.component';
import { ObtenerAgrupadoresComponent1751987197656 } from './api-doc-page/Indicadores/ObtenerAgrupadores.component';
import { ObtenerCierredeSaldosporMonedaComponent1751987197664 } from './api-doc-page/Indicadores/ObtenerCierredeSaldosporMoneda.component';
import { ObtenerCondicionesGeneralesComponent1751987197672 } from './api-doc-page/Indicadores/ObtenerCondicionesGenerales.component';
import { ObtenerIndicadoresComponent1751987197681 } from './api-doc-page/Indicadores/ObtenerIndicadores.component';
import { ObtenerMetodosMasEjecutadosComponent1751987197689 } from './api-doc-page/Indicadores/ObtenerMetodosMasEjecutados.component';
import { ObtenerMonedasIndicesComponent1751987197698 } from './api-doc-page/Indicadores/ObtenerMonedasIndices.component';
import { ObtenerRubrosBolsaComponent1751987197707 } from './api-doc-page/Indicadores/ObtenerRubrosBolsa.component';
import { ObtenerServiciosMasEjecutadosComponent1751987197710 } from './api-doc-page/Indicadores/ObtenerServiciosMasEjecutados.component';
import { ObtenerSesionesPorUsuarioComponent1751987197714 } from './api-doc-page/Indicadores/ObtenerSesionesPorUsuario.component';
import { ObtenerSucursalesCajasComponent1751987197717 } from './api-doc-page/Indicadores/ObtenerSucursalesCajas.component';
import { ObtenerTransaccionesporEstadosComponent1751987197720 } from './api-doc-page/Indicadores/ObtenerTransaccionesporEstados.component';
import { BuscarClienteComponent1751987197723 } from './api-doc-page/Microfinanzas/BuscarCliente.component';
import { CompletarTareaComponent1751987197726 } from './api-doc-page/Microfinanzas/CompletarTarea.component';
import { CrearSolicitudAmpliacionComponent1751987197730 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudAmpliacion.component';
import { CrearSolicitudIndividualComponent1751987197733 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudIndividual.component';
import { CrearSolicitudRenovacionComponent1751987197736 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudRenovacion.component';
import { AgregarFiadorComponent1751987197739 } from './api-doc-page/Microfinanzas/Fiadores/AgregarFiador.component';
import { EliminarFiadorComponent1751987197741 } from './api-doc-page/Microfinanzas/Fiadores/EliminarFiador.component';
import { ActualizarGrupoComponent1751987197745 } from './api-doc-page/Microfinanzas/Grupales/ActualizarGrupo.component';
import { ActualizarIntegrantedeGrupoComponent1751987197748 } from './api-doc-page/Microfinanzas/Grupales/ActualizarIntegrantedeGrupo.component';
import { AgregarGrupoComponent1751987197751 } from './api-doc-page/Microfinanzas/Grupales/AgregarGrupo.component';
import { AgregarIntegranteaGrupoComponent1751987197754 } from './api-doc-page/Microfinanzas/Grupales/AgregarIntegranteaGrupo.component';
import { CrearSolicitudGrupalComponent1751987197760 } from './api-doc-page/Microfinanzas/Grupales/CrearSolicitudGrupal.component';
import { HabilitarIntegrantedeunGrupoComponent1751987197766 } from './api-doc-page/Microfinanzas/Grupales/HabilitarIntegrantedeunGrupo.component';
import { InhabilitarIntegrantedeunGrupoComponent1751987197769 } from './api-doc-page/Microfinanzas/Grupales/InhabilitarIntegrantedeunGrupo.component';
import { ObtenerDetalleGrupoComponent1751987197772 } from './api-doc-page/Microfinanzas/Grupales/ObtenerDetalleGrupo.component';
import { ObtenerGruposComponent1751987197775 } from './api-doc-page/Microfinanzas/Grupales/ObtenerGrupos.component';
import { ObtenerIntegrantesdeGrupoComponent1751987197780 } from './api-doc-page/Microfinanzas/Grupales/ObtenerIntegrantesdeGrupo.component';
import { ObtenerTiposdeGrupoComponent1751987197783 } from './api-doc-page/Microfinanzas/Grupales/ObtenerTiposdeGrupo.component';
import { ObtenerTiposdeIntegranteComponent1751987197786 } from './api-doc-page/Microfinanzas/Grupales/ObtenerTiposdeIntegrante.component';
import { SimularPrestamoAmortizableGrupalComponent1751987197789 } from './api-doc-page/Microfinanzas/Grupales/SimularPrestamoAmortizableGrupal.component';
import { ObtenerAsesoresComponent1751987197792 } from './api-doc-page/Microfinanzas/Obtener/ObtenerAsesores.component';
import { ObtenerCampanasComponent1751987197802 } from './api-doc-page/Microfinanzas/Obtener/ObtenerCampanas.component';
import { ObtenerDestinosCreditoComponent1751987197811 } from './api-doc-page/Microfinanzas/Obtener/ObtenerDestinosCredito.component';
import { ObtenerOperacionesClienteComponent1751987197820 } from './api-doc-page/Microfinanzas/Obtener/ObtenerOperacionesCliente.component';
import { ObtenerOrigenesdeCaptacionComponent1751987197828 } from './api-doc-page/Microfinanzas/Obtener/ObtenerOrigenesdeCaptacion.component';
import { ObtenerProductosComponent1751987197838 } from './api-doc-page/Microfinanzas/Obtener/ObtenerProductos.component';
import { ObtenerSolicitudesClienteComponent1751987197848 } from './api-doc-page/Microfinanzas/Obtener/ObtenerSolicitudesCliente.component';
import { ObtenerTiposAvalComponent1751987197866 } from './api-doc-page/Microfinanzas/Obtener/ObtenerTiposAval.component';
import { AgregarOperacionesaCancelarComponent1751987197873 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/AgregarOperacionesaCancelar.component';
import { ObtenerOperacionesaCancelarComponent1751987197884 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/ObtenerOperacionesaCancelar.component';
import { QuitarOperacionesaCancelarComponent1751987197889 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/QuitarOperacionesaCancelar.component';
import { SimularLibreAmortizacionComponent1751987197892 } from './api-doc-page/Microfinanzas/Simular/SimularLibreAmortizacion.component';
import { SimularPrestamoAmortizableComponent1751987197897 } from './api-doc-page/Microfinanzas/Simular/SimularPrestamoAmortizable.component';
import { SimularPrestamoPlazoFijoComponent1751987197900 } from './api-doc-page/Microfinanzas/Simular/SimularPrestamoPlazoFijo.component';
import { ValidarPoliticasComponent1751987197903 } from './api-doc-page/Microfinanzas/ValidarPoliticas.component';
import { ObtenerCantidadCuotasComponent1751987197905 } from './api-doc-page/Modelador-de-Préstamos/ObtenerCantidadCuotas.component';
import { ObtenerCapitalComponent1751987197907 } from './api-doc-page/Modelador-de-Préstamos/ObtenerCapital.component';
import { ObtenerComisionesComponent1751987197909 } from './api-doc-page/Modelador-de-Préstamos/ObtenerComisiones.component';
import { ObtenerComisionesporCuotaComponent1751987197912 } from './api-doc-page/Modelador-de-Préstamos/ObtenerComisionesporCuota.component';
import { ObtenerDiasPrimerPeriodoComponent1751987197920 } from './api-doc-page/Modelador-de-Préstamos/ObtenerDiasPrimerPeriodo.component';
import { ObtenerPeriodoEntreCuotasComponent1751987197936 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPeriodoEntreCuotas.component';
import { ObtenerPermiteSegurosdelMismoTipoComponent1751987197927 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPermiteSegurosdelMismoTipo.component';
import { ObtenerPlazoComponent1751987197944 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPlazo.component';
import { ObtenerRequiereSegurodeVidaObligatorioComponent1751987197953 } from './api-doc-page/Modelador-de-Préstamos/ObtenerRequiereSegurodeVidaObligatorio.component';
import { ObtenerSegurosComponent1751987197963 } from './api-doc-page/Modelador-de-Préstamos/ObtenerSeguros.component';
import { ObtenerItemsModeloComponent1751987197971 } from './api-doc-page/PAE/ObtenerItemsModelo.component';
import { ObtenerModelosPAEComponent1751987197979 } from './api-doc-page/PAE/ObtenerModelosPAE.component';
import { ObtenerScoresComponent1751987197988 } from './api-doc-page/PAE/ObtenerScores.component';
import { ObtenerTiposDeModelosComponent1751987197996 } from './api-doc-page/PAE/ObtenerTiposDeModelos.component';
import { ContratarPrestamoComponent1751987198004 } from './api-doc-page/Partners/Contratar/ContratarPrestamo.component';
import { ContratarVehicularComponent1751987198013 } from './api-doc-page/Partners/Contratar/ContratarVehicular.component';
import { CrearClienteComponent1751987198021 } from './api-doc-page/Partners/Crear/CrearCliente.component';
import { CrearPersonaClienteComponent1751987198029 } from './api-doc-page/Partners/Crear/CrearPersonaCliente.component';
import { ObtenerDatosdeUsuarioComponent1751987198037 } from './api-doc-page/Partners/Obtener/ObtenerDatosdeUsuario.component';
import { ObtenerDetalledeOfertaAmortizableComponent1751987198046 } from './api-doc-page/Partners/Obtener/ObtenerDetalledeOfertaAmortizable.component';
import { ObtenerDetalleOfertaVehicularComponent1751987198056 } from './api-doc-page/Partners/Obtener/ObtenerDetalleOfertaVehicular.component';
import { ObtenerMarcasComponent1751987198065 } from './api-doc-page/Partners/Obtener/ObtenerMarcas.component';
import { ObtenerModelosComponent1751987198073 } from './api-doc-page/Partners/Obtener/ObtenerModelos.component';
import { ObtenerPartnersComponent1751987198082 } from './api-doc-page/Partners/Obtener/ObtenerPartners.component';
import { ObtenerPrestamosdeClienteComponent1751987198112 } from './api-doc-page/Partners/Obtener/ObtenerPrestamosdeCliente.component';
import { ObtenerProductosComponent1751987198092 } from './api-doc-page/Partners/Obtener/ObtenerProductos.component';
import { ObtenerProductosdelPartnerComponent1751987198103 } from './api-doc-page/Partners/Obtener/ObtenerProductosdelPartner.component';
import { ObtenerPuntosdeVentaComponent1751987198122 } from './api-doc-page/Partners/Obtener/ObtenerPuntosdeVenta.component';
import { ObtenerVendedoresComponent1751987198131 } from './api-doc-page/Partners/Obtener/ObtenerVendedores.component';
import { ObtenerVersionesComponent1751987198140 } from './api-doc-page/Partners/Obtener/ObtenerVersiones.component';
import { SimularOfertasComponent1751987198150 } from './api-doc-page/Partners/Simular/SimularOfertas.component';
import { SimularOfertasVehicularComponent1751987198160 } from './api-doc-page/Partners/Simular/SimularOfertasVehicular.component';
import { SimularPrestamoComponent1751987198171 } from './api-doc-page/Partners/Simular/SimularPrestamo.component';
import { SimularVehicularComponent1751987198181 } from './api-doc-page/Partners/Simular/SimularVehicular.component';
import { ObtenerCorrelativoGuiaComponent1751987198189 } from './api-doc-page/Parámetros-Base/ObtenerCorrelativoGuia.component';
import { ObtenerCorrelativoGuiaEspecialComponent1751987198198 } from './api-doc-page/Parámetros-Base/ObtenerCorrelativoGuiaEspecial.component';
import { ObtenerGuiadeProcesoComponent1751987198207 } from './api-doc-page/Parámetros-Base/ObtenerGuiadeProceso.component';
import { ObtenerGuiaEspecialdeProcesoComponent1751987198217 } from './api-doc-page/Parámetros-Base/ObtenerGuiaEspecialdeProceso.component';
import { ObtenerOpcionGeneraldeProcesoComponent1751987198225 } from './api-doc-page/Parámetros-Base/ObtenerOpcionGeneraldeProceso.component';
import { ObtenerOpcionGeneralPorModuloComponent1751987198236 } from './api-doc-page/Parámetros-Base/ObtenerOpcionGeneralPorModulo.component';
import { ObtenerProgramaParticularComponent1751987198246 } from './api-doc-page/Parámetros-Base/ObtenerProgramaParticular.component';
import { ActualizarComponent1751987198250 } from './api-doc-page/Personas/Actualizar/Actualizar.component';
import { ActualizarCelularComponent1751987198254 } from './api-doc-page/Personas/Actualizar/ActualizarCelular.component';
import { ActualizarContactoComponent1751987198259 } from './api-doc-page/Personas/Actualizar/ActualizarContacto.component';
import { ActualizarConyugeComponent1751987198281 } from './api-doc-page/Personas/Actualizar/ActualizarConyuge.component';
import { ActualizarCorreoElectronicoComponent1751987198272 } from './api-doc-page/Personas/Actualizar/ActualizarCorreoElectronico.component';
import { ActualizarDomicilioComponent1751987198290 } from './api-doc-page/Personas/Actualizar/ActualizarDomicilio.component';
import { ActualizarFATCAComponent1751987198300 } from './api-doc-page/Personas/Actualizar/ActualizarFATCA.component';
import { ActualizarInformacionAdicionalComponent1751987198309 } from './api-doc-page/Personas/Actualizar/ActualizarInformacionAdicional.component';
import { ActualizarInformacionFinancieraComponent1751987198319 } from './api-doc-page/Personas/Actualizar/ActualizarInformacionFinanciera.component';
import { ActualizarIntegrantedePersonaJuridicaComponent1751987198328 } from './api-doc-page/Personas/Actualizar/ActualizarIntegrantedePersonaJuridica.component';
import { ActualizarPersonaJuridicaComponent1751987198337 } from './api-doc-page/Personas/Actualizar/ActualizarPersonaJuridica.component';
import { ActualizarProfesionComponent1751987198345 } from './api-doc-page/Personas/Actualizar/ActualizarProfesion.component';
import { ActualizarReferenciaComponent1751987198353 } from './api-doc-page/Personas/Actualizar/ActualizarReferencia.component';
import { ActualizarRegistroEmpleadoComponent1751987198361 } from './api-doc-page/Personas/Actualizar/ActualizarRegistroEmpleado.component';
import { ActualizarTelefonoComponent1751987198370 } from './api-doc-page/Personas/Actualizar/ActualizarTelefono.component';
import { ActualizarVictimaHechoViolentoComponent1751987198379 } from './api-doc-page/Personas/Actualizar/ActualizarVictimaHechoViolento.component';
import { ModificarDocumentoAdicionalComponent1751987198388 } from './api-doc-page/Personas/Actualizar/ModificarDocumentoAdicional.component';
import { AgregaraListaNegraComponent1751987198397 } from './api-doc-page/Personas/Agregar/AgregaraListaNegra.component';
import { AgregarContactoComponent1751987198406 } from './api-doc-page/Personas/Agregar/AgregarContacto.component';
import { AgregarCorreoElectronicoComponent1751987198415 } from './api-doc-page/Personas/Agregar/AgregarCorreoElectronico.component';
import { AgregarDatosPEPComponent1751987198424 } from './api-doc-page/Personas/Agregar/AgregarDatosPEP.component';
import { AgregarDocumentoAdicionalComponent1751987198433 } from './api-doc-page/Personas/Agregar/AgregarDocumentoAdicional.component';
import { AgregarDomicilioComponent1751987198442 } from './api-doc-page/Personas/Agregar/AgregarDomicilio.component';
import { AgregarEstadoFinancieroComponent1751987198452 } from './api-doc-page/Personas/Agregar/AgregarEstadoFinanciero.component';
import { AgregarFATCAComponent1751987198460 } from './api-doc-page/Personas/Agregar/AgregarFATCA.component';
import { AgregarInformacionAdicionalComponent1751987198470 } from './api-doc-page/Personas/Agregar/AgregarInformacionAdicional.component';
import { AgregarInformacionFinancieraComponent1751987198478 } from './api-doc-page/Personas/Agregar/AgregarInformacionFinanciera.component';
import { AgregarIntegranteaPersonaJuridicaComponent1751987198487 } from './api-doc-page/Personas/Agregar/AgregarIntegranteaPersonaJuridica.component';
import { AgregarPersonaVinculadaComponent1751987198494 } from './api-doc-page/Personas/Agregar/AgregarPersonaVinculada.component';
import { AgregarReferenciaComponent1751987198504 } from './api-doc-page/Personas/Agregar/AgregarReferencia.component';
import { AgregarTelefonoComponent1751987198513 } from './api-doc-page/Personas/Agregar/AgregarTelefono.component';
import { AgregarVictimaHechoViolentoComponent1751987198521 } from './api-doc-page/Personas/Agregar/AgregarVictimaHechoViolento.component';
import { CrearComponent1751987198530 } from './api-doc-page/Personas/Crear/Crear.component';
import { CrearConyugeComponent1751987198540 } from './api-doc-page/Personas/Crear/CrearConyuge.component';
import { CrearPersonaJuridicaComponent1751987198543 } from './api-doc-page/Personas/Crear/CrearPersonaJuridica.component';
import { CrearReducidoComponent1751987198548 } from './api-doc-page/Personas/Crear/CrearReducido.component';
import { ActualizarDocumentoDigitalComponent1751987198557 } from './api-doc-page/Personas/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1751987198568 } from './api-doc-page/Personas/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1751987198575 } from './api-doc-page/Personas/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1751987198584 } from './api-doc-page/Personas/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1751987198587 } from './api-doc-page/Personas/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { EliminarConyugeComponent1751987198589 } from './api-doc-page/Personas/Eliminar/EliminarConyuge.component';
import { EliminarDocumentoAdicionalComponent1751987198597 } from './api-doc-page/Personas/Eliminar/EliminarDocumentoAdicional.component';
import { EliminarDomicilioComponent1751987198605 } from './api-doc-page/Personas/Eliminar/EliminarDomicilio.component';
import { EliminarInformacionAdicionalComponent1751987198608 } from './api-doc-page/Personas/Eliminar/EliminarInformacionAdicional.component';
import { EliminarIntegrantedePersonaJuridicaComponent1751987198612 } from './api-doc-page/Personas/Eliminar/EliminarIntegrantedePersonaJuridica.component';
import { EliminarPersonaVinculadaComponent1751987198620 } from './api-doc-page/Personas/Eliminar/EliminarPersonaVinculada.component';
import { EliminarProfesionComponent1751987198628 } from './api-doc-page/Personas/Eliminar/EliminarProfesion.component';
import { ObtenerComponent1751987198637 } from './api-doc-page/Personas/Obtener/Obtener.component';
import { ObtenerConceptoComponent1751987198645 } from './api-doc-page/Personas/Obtener/ObtenerConcepto.component';
import { ObtenerContactosComponent1751987198654 } from './api-doc-page/Personas/Obtener/ObtenerContactos.component';
import { ObtenerConyugeComponent1751987198680 } from './api-doc-page/Personas/Obtener/ObtenerConyuge.component';
import { ObtenerCorreosElectronicosComponent1751987198663 } from './api-doc-page/Personas/Obtener/ObtenerCorreosElectronicos.component';
import { ObtenerCuentasClienteComponent1751987198671 } from './api-doc-page/Personas/Obtener/ObtenerCuentasCliente.component';
import { ObtenerDatosPEPComponent1751987198688 } from './api-doc-page/Personas/Obtener/ObtenerDatosPEP.component';
import { ObtenerDocumentosAdicionalesComponent1751987198692 } from './api-doc-page/Personas/Obtener/ObtenerDocumentosAdicionales.component';
import { ObtenerDomiciliosComponent1751987198702 } from './api-doc-page/Personas/Obtener/ObtenerDomicilios.component';
import { ObtenerEstadosCivilesComponent1751987198710 } from './api-doc-page/Personas/Obtener/ObtenerEstadosCiviles.component';
import { ObtenerFacultadesComponent1751987198720 } from './api-doc-page/Personas/Obtener/ObtenerFacultades.component';
import { ObtenerFATCAComponent1751987198729 } from './api-doc-page/Personas/Obtener/ObtenerFATCA.component';
import { ObtenerHobbiesComponent1751987198739 } from './api-doc-page/Personas/Obtener/ObtenerHobbies.component';
import { ObtenerHobbyComponent1751987198747 } from './api-doc-page/Personas/Obtener/ObtenerHobby.component';
import { ObtenerIdBantotalComponent1751987198758 } from './api-doc-page/Personas/Obtener/ObtenerIdBantotal.component';
import { ObtenerIdentidadesdeGeneroComponent1751987198762 } from './api-doc-page/Personas/Obtener/ObtenerIdentidadesdeGenero.component';
import { ObtenerIdentificadorUnicoComponent1751987198765 } from './api-doc-page/Personas/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerInformacionAdicionalComponent1751987198773 } from './api-doc-page/Personas/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerInformacionFinancieraComponent1751987198777 } from './api-doc-page/Personas/Obtener/ObtenerInformacionFinanciera.component';
import { ObtenerIntegrantesPersonaJuridicaComponent1751987198780 } from './api-doc-page/Personas/Obtener/ObtenerIntegrantesPersonaJuridica.component';
import { ObtenerLimitesComponent1751987198783 } from './api-doc-page/Personas/Obtener/ObtenerLimites.component';
import { ObtenerNaturalezasJuridicasComponent1751987198787 } from './api-doc-page/Personas/Obtener/ObtenerNaturalezasJuridicas.component';
import { ObtenerNivelesEducativosComponent1751987198795 } from './api-doc-page/Personas/Obtener/ObtenerNivelesEducativos.component';
import { ObtenerOcupacionesComponent1751987198804 } from './api-doc-page/Personas/Obtener/ObtenerOcupaciones.component';
import { ObtenerPersonaJuridicaComponent1751987198812 } from './api-doc-page/Personas/Obtener/ObtenerPersonaJuridica.component';
import { ObtenerPersonasComponent1751987198822 } from './api-doc-page/Personas/Obtener/ObtenerPersonas.component';
import { ObtenerPersonasJuridicasComponent1751987198830 } from './api-doc-page/Personas/Obtener/ObtenerPersonasJuridicas.component';
import { ObtenerPersonasVinculadasComponent1751987198839 } from './api-doc-page/Personas/Obtener/ObtenerPersonasVinculadas.component';
import { ObtenerProfesionComponent1751987198856 } from './api-doc-page/Personas/Obtener/ObtenerProfesion.component';
import { ObtenerProfesionesComponent1751987198849 } from './api-doc-page/Personas/Obtener/ObtenerProfesiones.component';
import { ObtenerReferenciasComponent1751987198865 } from './api-doc-page/Personas/Obtener/ObtenerReferencias.component';
import { ObtenerTarjetasdeDebitoComponent1751987198874 } from './api-doc-page/Personas/Obtener/ObtenerTarjetasdeDebito.component';
import { ObtenerTelefonosComponent1751987198883 } from './api-doc-page/Personas/Obtener/ObtenerTelefonos.component';
import { ObtenerTipodePersonaComponent1751987198892 } from './api-doc-page/Personas/Obtener/ObtenerTipodePersona.component';
import { ObtenerTiposdeDocumentoComponent1751987198902 } from './api-doc-page/Personas/Obtener/ObtenerTiposdeDocumento.component';
import { ObtenerTiposDeFuncionarioPublicoComponent1751987198911 } from './api-doc-page/Personas/Obtener/ObtenerTiposDeFuncionarioPublico.component';
import { ObtenerTiposDePEPComponent1751987198921 } from './api-doc-page/Personas/Obtener/ObtenerTiposDePEP.component';
import { ObtenerTitularesDelTelefonoComponent1751987198929 } from './api-doc-page/Personas/Obtener/ObtenerTitularesDelTelefono.component';
import { ObtenerVictimaHechoViolentoComponent1751987198938 } from './api-doc-page/Personas/Obtener/ObtenerVictimaHechoViolento.component';
import { ObtenerVinculosComponent1751987198942 } from './api-doc-page/Personas/Obtener/ObtenerVinculos.component';
import { ObtenerVinculosdeAfinidadComponent1751987198953 } from './api-doc-page/Personas/Obtener/ObtenerVinculosdeAfinidad.component';
import { ObtenerVinculosdeConsanguinidadComponent1751987198962 } from './api-doc-page/Personas/Obtener/ObtenerVinculosdeConsanguinidad.component';
import { ObtenerVinculosJuridicosComponent1751987198965 } from './api-doc-page/Personas/Obtener/ObtenerVinculosJuridicos.component';
import { EvaluarPAEComponent1751987198974 } from './api-doc-page/Personas/Validar/EvaluarPAE.component';
import { ValidarCorreoElectronicoComponent1751987198983 } from './api-doc-page/Personas/Validar/ValidarCorreoElectronico.component';
import { ValidarDocumentoComponent1751987198992 } from './api-doc-page/Personas/Validar/ValidarDocumento.component';
import { ValidarenListasNegrasComponent1751987199002 } from './api-doc-page/Personas/Validar/ValidarenListasNegras.component';
import { ValidarExistenciaComponent1751987199010 } from './api-doc-page/Personas/Validar/ValidarExistencia.component';
import { ValidarListasInhabilitadosComponent1751987199014 } from './api-doc-page/Personas/Validar/ValidarListasInhabilitados.component';
import { VerificarEmpleadoComponent1751987199023 } from './api-doc-page/Personas/Validar/VerificarEmpleado.component';
import { ConvertirTasaAnualEfectivaaLinealComponent1751987199031 } from './api-doc-page/Precios/Convertir/ConvertirTasaAnualEfectivaaLineal.component';
import { ConvertirTasaAnualLinealaEfectivaComponent1751987199040 } from './api-doc-page/Precios/Convertir/ConvertirTasaAnualLinealaEfectiva.component';
import { ConvertirTasaMensualEfectivaaLinealComponent1751987199047 } from './api-doc-page/Precios/Convertir/ConvertirTasaMensualEfectivaaLineal.component';
import { ConvertirTasaMensualLinealaEfectivaComponent1751987199056 } from './api-doc-page/Precios/Convertir/ConvertirTasaMensualLinealaEfectiva.component';
import { ObtenerCotizacionComponent1751987199067 } from './api-doc-page/Precios/Obtener/ObtenerCotizacion.component';
import { ObtenerCotizacionaFechaComponent1751987199076 } from './api-doc-page/Precios/Obtener/ObtenerCotizacionaFecha.component';
import { ObtenerCotizacionCierreComponent1751987199089 } from './api-doc-page/Precios/Obtener/ObtenerCotizacionCierre.component';
import { ObtenerPizarraEspecialporTransaccionComponent1751987199098 } from './api-doc-page/Precios/Obtener/ObtenerPizarraEspecialporTransaccion.component';
import { ObtenerPrecioaFechaComponent1751987199108 } from './api-doc-page/Precios/Obtener/ObtenerPrecioaFecha.component';
import { ObtenerPrecioEspecieComponent1751987199118 } from './api-doc-page/Precios/Obtener/ObtenerPrecioEspecie.component';
import { ObtenerTasadeOperacionComponent1751987199124 } from './api-doc-page/Precios/Obtener/ObtenerTasadeOperacion.component';
import { ObtenerTasaParaClienteComponent1751987199135 } from './api-doc-page/Precios/Obtener/ObtenerTasaParaCliente.component';
import { ObtenerTasaParaProductoComponent1751987199142 } from './api-doc-page/Precios/Obtener/ObtenerTasaParaProducto.component';
import { ObtenerTipodeCambioComponent1751987199154 } from './api-doc-page/Precios/Obtener/ObtenerTipodeCambio.component';
import { ObtenerTiposDeCambioEspecialesComponent1751987199162 } from './api-doc-page/Precios/Obtener/ObtenerTiposDeCambioEspeciales.component';
import { CancelarComponent1751987199172 } from './api-doc-page/Préstamos/Cancelar/Cancelar.component';
import { CancelaraFechaComponent1751987199182 } from './api-doc-page/Préstamos/Cancelar/CancelaraFecha.component';
import { CancelaraFechaTercerosComponent1751987199191 } from './api-doc-page/Préstamos/Cancelar/CancelaraFechaTerceros.component';
import { CancelarTercerosComponent1751987199200 } from './api-doc-page/Préstamos/Cancelar/CancelarTerceros.component';
import { ContratarComponent1751987199209 } from './api-doc-page/Préstamos/Contratar/Contratar.component';
import { ContratarAmpliacionComponent1751987199220 } from './api-doc-page/Préstamos/Contratar/ContratarAmpliacion.component';
import { ContratarRefinanciacionComponent1751987199230 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacion.component';
import { ContratarRefinanciacionporDeudaTotalComponent1751987199236 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacionporDeudaTotal.component';
import { ContratarRefinanciacionporSaldoCapitalComponent1751987199244 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacionporSaldoCapital.component';
import { ActualizarDocumentoDigitalComponent1751987199254 } from './api-doc-page/Préstamos/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1751987199265 } from './api-doc-page/Préstamos/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1751987199272 } from './api-doc-page/Préstamos/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1751987199281 } from './api-doc-page/Préstamos/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1751987199288 } from './api-doc-page/Préstamos/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ObtenerCronogramaComponent1751987199296 } from './api-doc-page/Préstamos/Obtener/ObtenerCronograma.component';
import { ObtenerCronogramaaFechaComponent1751987199305 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaaFecha.component';
import { ObtenerCronogramaconPagosaFechaComponent1751987199314 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaconPagosaFecha.component';
import { ObtenerCronogramaenEspecieComponent1751987199324 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaenEspecie.component';
import { ObtenerCronogramaOriginalComponent1751987199334 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaOriginal.component';
import { ObtenerCuentadeCobroComponent1751987199341 } from './api-doc-page/Préstamos/Obtener/ObtenerCuentadeCobro.component';
import { ObtenerDatosdelProximoVencimientoComponent1751987199349 } from './api-doc-page/Préstamos/Obtener/ObtenerDatosdelProximoVencimiento.component';
import { ObtenerDetalleComponent1751987199356 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalle.component';
import { ObtenerDetalleaFechaComponent1751987199365 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleaFecha.component';
import { ObtenerDetalledeCancelacionTotalComponent1751987199373 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeCancelacionTotal.component';
import { ObtenerDetalledeOfertaComponent1751987199384 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOferta.component';
import { ObtenerDetalledeOfertaAmortizableComponent1751987199395 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOfertaAmortizable.component';
import { ObtenerDetalledeOperacionesaRefinanciarComponent1751987199403 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOperacionesaRefinanciar.component';
import { ObtenerDetalledePrestamoCanceladoComponent1751987199424 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledePrestamoCancelado.component';
import { ObtenerDetallePagoPrestamoComponent1751987199456 } from './api-doc-page/Préstamos/Obtener/ObtenerDetallePagoPrestamo.component';
import { ObtenerDetalleReducidoComponent1751987199470 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleReducido.component';
import { ObtenerDetalleSimulacionComponent1751987199482 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleSimulacion.component';
import { ObtenerDeudaComponent1751987199489 } from './api-doc-page/Préstamos/Obtener/ObtenerDeuda.component';
import { ObtenerDeudaPrestamoCastigadoComponent1751987199498 } from './api-doc-page/Préstamos/Obtener/ObtenerDeudaPrestamoCastigado.component';
import { ObtenerDeudaVencidaComponent1751987199506 } from './api-doc-page/Préstamos/Obtener/ObtenerDeudaVencida.component';
import { ObtenerFechadeIncumplimientoComponent1751987199514 } from './api-doc-page/Préstamos/Obtener/ObtenerFechadeIncumplimiento.component';
import { ObtenerFechadeUltimoPagoComponent1751987199521 } from './api-doc-page/Préstamos/Obtener/ObtenerFechadeUltimoPago.component';
import { ObtenerFechasdePagoComponent1751987199531 } from './api-doc-page/Préstamos/Obtener/ObtenerFechasdePago.component';
import { ObtenerInformacionAdicionalComponent1751987199539 } from './api-doc-page/Préstamos/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerMontodeCancelacionComponent1751987199548 } from './api-doc-page/Préstamos/Obtener/ObtenerMontodeCancelacion.component';
import { ObtenerMotivosPrecancelacionComponent1751987199558 } from './api-doc-page/Préstamos/Obtener/ObtenerMotivosPrecancelacion.component';
import { ObtenerPagosdeCuotaComponent1751987199567 } from './api-doc-page/Préstamos/Obtener/ObtenerPagosdeCuota.component';
import { ObtenerPagosdeunPrestamoComponent1751987199575 } from './api-doc-page/Préstamos/Obtener/ObtenerPagosdeunPrestamo.component';
import { ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1751987199584 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1.component';
import { ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1751987199593 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1.component';
import { ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1751987199604 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1.component';
import { ObtenerProductosComponent1751987199612 } from './api-doc-page/Préstamos/Obtener/ObtenerProductos.component';
import { ObtenerProductosRefinanciacionComponent1751987199621 } from './api-doc-page/Préstamos/Obtener/ObtenerProductosRefinanciacion.component';
import { ObtenerRefinanciacionSimuladaComponent1751987199629 } from './api-doc-page/Préstamos/Obtener/ObtenerRefinanciacionSimulada.component';
import { AbonaraCuentaComponent1751987199638 } from './api-doc-page/Préstamos/Operar/AbonaraCuenta.component';
import { ActualizarInformacionAdicionalComponent1751987199646 } from './api-doc-page/Préstamos/Operar/ActualizarInformacionAdicional.component';
import { ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1751987199653 } from './api-doc-page/Préstamos/Operar/ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1.component';
import { AgregarCuentadeCobroComponent1751987199660 } from './api-doc-page/Préstamos/Operar/AgregarCuentadeCobro.component';
import { AgregarInformacionAdicionalComponent1751987199668 } from './api-doc-page/Préstamos/Operar/AgregarInformacionAdicional.component';
import { EliminarCuentadeCobroComponent1751987199675 } from './api-doc-page/Préstamos/Operar/EliminarCuentadeCobro.component';
import { EliminarInformacionAdicionalComponent1751987199685 } from './api-doc-page/Préstamos/Operar/EliminarInformacionAdicional.component';
import { SolicitarPrecancelacionComponent1751987199696 } from './api-doc-page/Préstamos/Operar/SolicitarPrecancelacion.component';
import { AdelantarCapitalConReduccionDeCuotaComponent1751987199704 } from './api-doc-page/Préstamos/Pagar/AdelantarCapitalConReduccionDeCuota.component';
import { AdelantarCapitalConReduccionDePlazoComponent1751987199713 } from './api-doc-page/Préstamos/Pagar/AdelantarCapitalConReduccionDePlazo.component';
import { PagarCuotaComponent1751987199720 } from './api-doc-page/Préstamos/Pagar/PagarCuota.component';
import { PagarCuotaaFechaComponent1751987199729 } from './api-doc-page/Préstamos/Pagar/PagarCuotaaFecha.component';
import { PagarCuotaaFechaTercerosComponent1751987199736 } from './api-doc-page/Préstamos/Pagar/PagarCuotaaFechaTerceros.component';
import { PagarCuotaTercerosComponent1751987199745 } from './api-doc-page/Préstamos/Pagar/PagarCuotaTerceros.component';
import { ResimularAmortizableComponent1751987199753 } from './api-doc-page/Préstamos/Simular/ResimularAmortizable.component';
import { ResimularAmpliacionComponent1751987199762 } from './api-doc-page/Préstamos/Simular/ResimularAmpliacion.component';
import { ResimularRefinanciacionComponent1751987199769 } from './api-doc-page/Préstamos/Simular/ResimularRefinanciacion.component';
import { SimularComponent1751987199777 } from './api-doc-page/Préstamos/Simular/Simular.component';
import { SimularAmortizableComponent1751987199786 } from './api-doc-page/Préstamos/Simular/SimularAmortizable.component';
import { SimularAmortizableSinClienteComponent1751987199795 } from './api-doc-page/Préstamos/Simular/SimularAmortizableSinCliente.component';
import { SimularAmpliacionComponent1751987199803 } from './api-doc-page/Préstamos/Simular/SimularAmpliacion.component';
import { SimularAmpliacionIngresandoSegurosComponent1751987199812 } from './api-doc-page/Préstamos/Simular/SimularAmpliacionIngresandoSeguros.component';
import { SimularDespejandoCapitalyCantidaddeCuotasComponent1751987199820 } from './api-doc-page/Préstamos/Simular/SimularDespejandoCapitalyCantidaddeCuotas.component';
import { SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1751987199829 } from './api-doc-page/Préstamos/Simular/SimularDespejandoCapitalyCantidaddeCuotasSinCliente.component';
import { SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1751987199836 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyCantidaddeCuotas.component';
import { SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1751987199843 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinCliente.component';
import { SimularDespejandoFechadeVencimientoyTasaComponent1751987199852 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyTasa.component';
import { SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1751987199860 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyTasaSinCliente.component';
import { SimularIngresandoBalloonComponent1751987199868 } from './api-doc-page/Préstamos/Simular/SimularIngresandoBalloon.component';
import { SimularIngresandoBalloonSinClienteComponent1751987199877 } from './api-doc-page/Préstamos/Simular/SimularIngresandoBalloonSinCliente.component';
import { SimularIngresandoSegurosComponent1751987199887 } from './api-doc-page/Préstamos/Simular/SimularIngresandoSeguros.component';
import { SimularIngresandoSegurosSinClienteComponent1751987199897 } from './api-doc-page/Préstamos/Simular/SimularIngresandoSegurosSinCliente.component';
import { SimularLibreAmortizacionComponent1751987199908 } from './api-doc-page/Préstamos/Simular/SimularLibreAmortizacion.component';
import { SimularLibreAmortizacionSinClienteComponent1751987199919 } from './api-doc-page/Préstamos/Simular/SimularLibreAmortizacionSinCliente.component';
import { SimularOfertasComponent1751987199928 } from './api-doc-page/Préstamos/Simular/SimularOfertas.component';
import { SimularPlazoFijoComponent1751987199937 } from './api-doc-page/Préstamos/Simular/SimularPlazoFijo.component';
import { SimularRefinanciacionComponent1751987199946 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacion.component';
import { SimularRefinanciacionporDeudaTotalComponent1751987199954 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacionporDeudaTotal.component';
import { SimularRefinanciacionporSaldoCapitalComponent1751987199963 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacionporSaldoCapital.component';
import { ActualizarTextosComponent1751987199969 } from './api-doc-page/Préstamos/Textos/ActualizarTextos.component';
import { AgregarTextosComponent1751987199976 } from './api-doc-page/Préstamos/Textos/AgregarTextos.component';
import { EliminarTextosComponent1751987199985 } from './api-doc-page/Préstamos/Textos/EliminarTextos.component';
import { ObtenerTextosComponent1751987199994 } from './api-doc-page/Préstamos/Textos/ObtenerTextos.component';
import { EvaluarRegladeNegocioComponent1751987200008 } from './api-doc-page/Reglas-de-Negocio/EvaluarRegladeNegocio.component';
import { ObtenerReglasdeNegocioComponent1751987200018 } from './api-doc-page/Reglas-de-Negocio/ObtenerReglasdeNegocio.component';
import { ObtenerVariablesReglaComponent1751987200026 } from './api-doc-page/Reglas-de-Negocio/ObtenerVariablesRegla.component';
import { ValidarDatosRegladeNegocioComponent1751987200036 } from './api-doc-page/Reglas-de-Negocio/ValidarDatosRegladeNegocio.component';
import { AutorizarExcepcionComponent1751987200044 } from './api-doc-page/Seguridad/AutorizarExcepcion.component';
import { ObtenerDetalledeExcepcionComponent1751987200052 } from './api-doc-page/Seguridad/ObtenerDetalledeExcepcion.component';
import { ObtenerExcepcionesComponent1751987200060 } from './api-doc-page/Seguridad/ObtenerExcepciones.component';
import { RechazarExcepcionComponent1751987200067 } from './api-doc-page/Seguridad/RechazarExcepcion.component';
import { RegistrarDispositivoComponent1751987200074 } from './api-doc-page/Seguridad/RegistrarDispositivo.component';
import { ContratarSeguroComponent1751987200083 } from './api-doc-page/Seguros-Voluntarios/ContratarSeguro.component';
import { ObtenerMontosDeUnSeguroComponent1751987200090 } from './api-doc-page/Seguros-Voluntarios/ObtenerMontosDeUnSeguro.component';
import { ObtenerSegurosComponent1751987200098 } from './api-doc-page/Seguros-Voluntarios/ObtenerSeguros.component';
import { ObtenerSegurosAPagarComponent1751987200106 } from './api-doc-page/Seguros-Voluntarios/ObtenerSegurosAPagar.component';
import { PagarSeguroComponent1751987200114 } from './api-doc-page/Seguros-Voluntarios/PagarSeguro.component';
import { ObtenerCodigosdeLimitesComponent1751987200158 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCodigosdeLimites.component';
import { ObtenerCuentaPreferencialComponent1751987200122 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentaPreferencial.component';
import { ObtenerCuentasaAsociarComponent1751987200130 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasaAsociar.component';
import { ObtenerCuentasAsociadasComponent1751987200140 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasAsociadas.component';
import { ObtenerCuentasAsociadasPorTipoComponent1751987200149 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasAsociadasPorTipo.component';
import { ObtenerDatosComponent1751987200167 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerDatos.component';
import { ObtenerDatosContactoComponent1751987200175 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerDatosContacto.component';
import { ObtenerIdentificadorUnicoComponent1751987200184 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerLimitesComponent1751987200192 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerLimites.component';
import { ObtenerMovimientosComponent1751987200202 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerMovimientos.component';
import { ObtenerTarjetaComponent1751987200210 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjeta.component';
import { ObtenerTarjetaHabienteComponent1751987200220 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjetaHabiente.component';
import { ObtenerTarjetasAdicionalesComponent1751987200229 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjetasAdicionales.component';
import { ObtenerTiposdeCuentaComponent1751987200238 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTiposdeCuenta.component';
import { ActivarComponent1751987200247 } from './api-doc-page/Tarjetas-de-Débito/Operar/Activar.component';
import { ActualizarCuentaPreferencialComponent1751987200256 } from './api-doc-page/Tarjetas-de-Débito/Operar/ActualizarCuentaPreferencial.component';
import { ActualizarDatosContactoComponent1751987200266 } from './api-doc-page/Tarjetas-de-Débito/Operar/ActualizarDatosContacto.component';
import { AsociarCuentaComponent1751987200272 } from './api-doc-page/Tarjetas-de-Débito/Operar/AsociarCuenta.component';
import { BlanquearPinComponent1751987200281 } from './api-doc-page/Tarjetas-de-Débito/Operar/BlanquearPin.component';
import { BloquearComponent1751987200288 } from './api-doc-page/Tarjetas-de-Débito/Operar/Bloquear.component';
import { BloquearDesdeREDComponent1751987200296 } from './api-doc-page/Tarjetas-de-Débito/Operar/BloquearDesdeRED.component';
import { CrearComponent1751987200305 } from './api-doc-page/Tarjetas-de-Débito/Operar/Crear.component';
import { CrearConCuentasAsociadasComponent1751987200317 } from './api-doc-page/Tarjetas-de-Débito/Operar/CrearConCuentasAsociadas.component';
import { DenunciarComponent1751987200325 } from './api-doc-page/Tarjetas-de-Débito/Operar/Denunciar.component';
import { DenunciarDesdeREDComponent1751987200336 } from './api-doc-page/Tarjetas-de-Débito/Operar/DenunciarDesdeRED.component';
import { DesbloquearComponent1751987200345 } from './api-doc-page/Tarjetas-de-Débito/Operar/Desbloquear.component';
import { DesbloquearDesdeREDComponent1751987200353 } from './api-doc-page/Tarjetas-de-Débito/Operar/DesbloquearDesdeRED.component';
import { EliminarCuentaAsociadaComponent1751987200362 } from './api-doc-page/Tarjetas-de-Débito/Operar/EliminarCuentaAsociada.component';
import { ModificarLimiteComponent1751987200369 } from './api-doc-page/Tarjetas-de-Débito/Operar/ModificarLimite.component';
import { ComprarComponent1751987200378 } from './api-doc-page/Títulos/Comprar.component';
import { ObtenerEstadoCompraComponent1751987200386 } from './api-doc-page/Títulos/ObtenerEstadoCompra.component';
import { ObtenerGruposComponent1751987200394 } from './api-doc-page/Títulos/ObtenerGrupos.component';
import { ObtenerValoresComponent1751987200403 } from './api-doc-page/Títulos/ObtenerValores.component';
import { AgregarPerfilComponent1751987200413 } from './api-doc-page/Usuarios/AgregarPerfil.component';
import { CrearComponent1751987200421 } from './api-doc-page/Usuarios/Crear.component';
import { EliminarPerfilComponent1751987200430 } from './api-doc-page/Usuarios/EliminarPerfil.component';
import { EliminarUsuarioComponent1751987200437 } from './api-doc-page/Usuarios/EliminarUsuario.component';
import { HabilitarEnCanalComponent1751987200446 } from './api-doc-page/Usuarios/HabilitarEnCanal.component';
import { HabilitarUsuarioComponent1751987200452 } from './api-doc-page/Usuarios/HabilitarUsuario.component';
import { InhabilitarUsuarioComponent1751987200461 } from './api-doc-page/Usuarios/InhabilitarUsuario.component';
import { ModificarComponent1751987200469 } from './api-doc-page/Usuarios/Modificar.component';
import { ObtenerComponent1751987200478 } from './api-doc-page/Usuarios/Obtener.component';
import { ObtenerPerfilesComponent1751987200486 } from './api-doc-page/Usuarios/ObtenerPerfiles.component';
import { ObtenerUsuariosComponent1751987200495 } from './api-doc-page/Usuarios/ObtenerUsuarios.component';
import { ObtenerUsuariosParaPerfilComponent1751987200503 } from './api-doc-page/Usuarios/ObtenerUsuariosParaPerfil.component';
import { ObtenerMetadataDeTareaComponent1751987200512 } from './api-doc-page/Workflow/ObtenerMetadataDeTarea.component';
import { ObtenerProcesosHabilitadosComponent1751987200522 } from './api-doc-page/Workflow/ObtenerProcesosHabilitados.component';
import { ObtenerRolesComponent1751987200532 } from './api-doc-page/Workflow/ObtenerRoles.component';
import { ObtenerRolesdeTareaComponent1751987200540 } from './api-doc-page/Workflow/ObtenerRolesdeTarea.component';
import { ObtenerTareasdeProcesoComponent1751987200550 } from './api-doc-page/Workflow/ObtenerTareasdeProceso.component';
//import End page components

@NgModule({
  declarations: [
    ChatPopupComponent,
    //declarations Page components
    ContratarSimulacionComponent1751987195230,
    CrearComponent1751987195248,
    SimularComponent1751987195259,
    ActualizarDocumentoDigitalComponent1751987195269,
    AsociarDocumentoDigitalComponent1751987195278,
    EliminarDocumentoDigitalComponent1751987195286,
    ObtenerDocumentoDigitalComponent1751987195290,
    ObtenerDocumentosDigitalesComponent1751987195293,
    ModificarCuentaDestinoComponent1751987195297,
    ModificarCuentaOrigenComponent1751987195308,
    ModificarFechadeAbonoComponent1751987195317,
    ModificarMetadeAhorroComponent1751987195326,
    ModificarMontodeAbonoComponent1751987195335,
    ObtenerComponent1751987195345,
    ObtenerCronogramaAbonosComponent1751987195350,
    ObtenerCuentasDestinoHabilitadasComponent1751987195360,
    ObtenerCuentasOrigenHabilitadasComponent1751987195371,
    ObtenerEstadodeCuentaComponent1751987195381,
    ObtenerPeriodosHabilitadosComponent1751987195390,
    ObtenerPlazosHabilitadosComponent1751987195399,
    ObtenerProductosComponent1751987195405,
    AnularChequeElectronicoComponent1751987195408,
    AsignarIdaChequeElectronicoComponent1751987195413,
    CrearChequeraElectronicaComponent1751987195416,
    DepositarChequeElectronicodeBancoPropioComponent1751987195426,
    DepositarChequeElectronicodeOtroBancoComponent1751987195437,
    DepositarChequeElectronicoenCustodiaComponent1751987195440,
    EmitirChequeElectronicoComponent1751987195450,
    EmitirChequeElectronicodeChequeraComponent1751987195453,
    HabilitarChequeElectronicoComponent1751987195456,
    CrearAdhesionComponent1751987195460,
    CrearStopDebitComponent1751987195465,
    CrearStopDebitparaAdhesionconImporteComponent1751987195468,
    EliminarStopDebitComponent1751987195471,
    ObtenerAdhesionesComponent1751987195473,
    ObtenerDebitosComponent1751987195485,
    ObtenerEmpresasOriginantesComponent1751987195488,
    ObtenerStopDebitsComponent1751987195497,
    ReversarDebitosComponent1751987195506,
    SolicitarBajadeAdhesionComponent1751987195515,
    AutenticacionComponent1751987195523,
    ObtenerDetalledeEjecucionComponent1751987195527,
    ObtenerDetalledeProcesoComponent1751987195537,
    ObtenerProcesosconErrorComponent1751987195540,
    ObtenerProcesosCriticosComponent1751987195551,
    ObtenerProcesosDiariosComponent1751987195555,
    ObtenerProcesosMensualesComponent1751987195566,
    ObtenerProcesosReprocesablesComponent1751987195577,
    VerificarEstadoServidorComponent1751987195581,
    CalcularFechadeVencimientoComponent1751987195587,
    CalcularFechadeVencimientoenDiasHabilesComponent1751987195590,
    CalcularPlazoComponent1751987195598,
    CalcularPlazoenDiasHabilesComponent1751987195606,
    ObtenerFechaHabilComponent1751987195616,
    ObtenerFechaHabilAnteriorComponent1751987195625,
    ObtenerFechaHabilAnteriordeSucursalComponent1751987195634,
    ObtenerFechaHabildeSucursalComponent1751987195637,
    ObtenerInicioyFindeMesComponent1751987195646,
    ObtenerInicioyFindeMesdeSucursalComponent1751987195649,
    ObtenerProximaFechaHabilComponent1751987195652,
    ObtenerProximaFechaHabildeSucursalComponent1751987195660,
    AutorizarArchivoComponent1751987195671,
    CargarArchivoComponent1751987195679,
    CargarArchivoRecibidoComoDatoComponent1751987195686,
    DetenerArchivoComponent1751987195695,
    RechazarArchivoComponent1751987195698,
    CargarBeneficiariosComponent1751987195701,
    IngresarBeneficiarioComponent1751987195704,
    ObtenerBeneficiarioSegunFiltroComponent1751987195711,
    AltaAutomaticaContratoComponent1751987195715,
    CargarServiciosDisponiblesComponent1751987195721,
    ContratarDebitoAutomaticoComponent1751987195731,
    ObtenerDetalledeOrdendeCuentaComponent1751987195738,
    ObtenerDetalledePagoComponent1751987195747,
    ObtenerDetalleOrdenSegunCampoComponent1751987195754,
    ObtenerDetallePagoOrdenComponent1751987195765,
    ObtenerDeudaComponent1751987195771,
    ObtenerResumenOrdenComponent1751987195779,
    ObtenerServiciosComponent1751987195786,
    ObtenerValoresOrdenComponent1751987195795,
    ObtenerValoresOrdenSegunCampoComponent1751987195804,
    AutorizarOrdenComponent1751987195814,
    DetenerOrdenComponent1751987195823,
    IngresarOrdenPagoComponent1751987195832,
    ProcesarOrdenComponent1751987195840,
    RechazarOrdenComponent1751987195850,
    AnularPagoDeudaComponent1751987195863,
    PagarDeudaDesdeCuentaComponent1751987195872,
    RegistrarPagoDeudaComponent1751987195881,
    RegistrarPagoEnLineaComponent1751987195889,
    RegistrarPagoEnLineaDesdeCuentaComponent1751987195898,
    VisualizarListaResumenCabezalComponent1751987195909,
    VisualizarListaResumenCabezalOrdenComponent1751987195920,
    VisualizarOrdendeArchivoParaCuentaComponent1751987195928,
    VisualizarResultadoProcesamientoComponent1751987195937,
    VisualizarResumenCabezalComponent1751987195945,
    VisualizarSituacionArchivosComponent1751987195954,
    VisualizarSituacionLineasComponent1751987195966,
    CHATComponent1751987195976,
    ActualizarComponent1751987195986,
    ActualizarDocumentoDigitalComponent1751987195990,
    ActualizarDomicilioComponent1751987195993,
    ActualizarInformacionAdicionalComponent1751987196002,
    ActualizarRegistroEmpleadoComponent1751987196009,
    ActualizarTelefonoComponent1751987196018,
    AgregarDomicilioComponent1751987196029,
    AgregarInformacionAdicionalComponent1751987196037,
    AgregarIntegranteComponent1751987196042,
    AgregarTelefonoComponent1751987196047,
    AsociarDocumentoDigitalComponent1751987196055,
    EliminarDocumentoDigitalComponent1751987196065,
    EliminarDomicilioComponent1751987196073,
    EliminarInformacionAdicionalComponent1751987196082,
    EliminarIntegranteComponent1751987196094,
    HabilitarComponent1751987196099,
    InhabilitarComponent1751987196107,
    ModificarEjecutivoComponent1751987196111,
    CrearComponent1751987196122,
    CrearconPersonaExistenteComponent1751987196132,
    CrearParaPersonaJuridicaComponent1751987196138,
    ObtenerComponent1751987196147,
    ObtenerAhorrosProgramadosComponent1751987196150,
    ObtenerBolsillosComponent1751987196159,
    ObtenerClasificacionesInternasComponent1751987196168,
    ObtenerCuentaClienteComponent1751987196177,
    ObtenerCuentasCorrientesSaldoContableComponent1751987196182,
    ObtenerCuentasCorrientesSaldoDisponibleComponent1751987196191,
    ObtenerCuentasdeAhorroSaldoContableComponent1751987196202,
    ObtenerCuentasdeAhorroSaldoDisponibleComponent1751987196213,
    ObtenerDatosComponent1751987196221,
    ObtenerDetallePosicionComponent1751987196231,
    ObtenerDocumentoDigitalComponent1751987196237,
    ObtenerDocumentosDigitalesComponent1751987196246,
    ObtenerDomiciliosComponent1751987196254,
    ObtenerFacultadesComponent1751987196261,
    ObtenerIdentificadorUnicoComponent1751987196269,
    ObtenerInformacionAdicionalComponent1751987196277,
    ObtenerIntegrantesComponent1751987196286,
    ObtenerLimitesComponent1751987196295,
    ObtenerMotivosInhabilitacionComponent1751987196304,
    ObtenerPerfilComponent1751987196313,
    ObtenerPlazosFijosComponent1751987196317,
    ObtenerPlazosFijosCanceladosComponent1751987196323,
    ObtenerPlazosFijosconAvanceComponent1751987196333,
    ObtenerPosicionComponent1751987196336,
    ObtenerPrestamosComponent1751987196339,
    ObtenerPrestamosCanceladosComponent1751987196348,
    ObtenerPrestamosCastigadosComponent1751987196351,
    ObtenerPrestamosconAvanceComponent1751987196355,
    ObtenerResumendeProductosCierredeanoComponent1751987196359,
    ObtenerResumendeProductosSaldosContablesComponent1751987196368,
    ObtenerResumendeProductosSaldosDisponiblesComponent1751987196371,
    ObtenerResumenporProductoaCierreAnoComponent1751987196374,
    ObtenerRiesgodeCreditoComponent1751987196386,
    ObtenerSaldosdeOtrosProductosComponent1751987196393,
    ObtenerSectoresComponent1751987196406,
    ObtenerSegmentosComponent1751987196417,
    ObtenerTarjetasdeDebitoComponent1751987196420,
    ObtenerTelefonosComponent1751987196423,
    ObtenerTiposdeIntegracionComponent1751987196434,
    ObtenerTitularRepresentativoComponent1751987196439,
    ObtenerTitulosComponent1751987196447,
    ValidarExistenciaComponent1751987196453,
    VerificarEmpleadoComponent1751987196455,
    ObtenerAgenciasBancoComponent1751987196457,
    ObtenerBancosComponent1751987196460,
    ObtenerDetalleSucursalComponent1751987196464,
    ObtenerSucursalesPrincipalesComponent1751987196466,
    ObtenerActividadesComponent1751987196468,
    ObtenerActividadesporTipoComponent1751987196471,
    ObtenerEjecutivosComponent1751987196473,
    ObtenerTiposdeActividadComponent1751987196476,
    ObtenerTiposdeTarjetaComponent1751987196480,
    ObtenerImpuestosComponent1751987196486,
    ObtenerTiposdeDocumentoDigitalComponent1751987196489,
    ObtenerEstadosComponent1751987196497,
    ObtenerInstruccionesComponent1751987196503,
    ObtenerPaquetesComponent1751987196509,
    ObtenerTiposdeTextoComponent1751987196516,
    ObtenerCalendariodeSucursalComponent1751987196525,
    ObtenerCalendariosComponent1751987196532,
    ObtenerDetalledeCalendarioComponent1751987196539,
    ObtenerDetalledeCalendariodeSucursalComponent1751987196548,
    ObtenerDolarUSAComponent1751987196556,
    ObtenerEmpresaComponent1751987196567,
    ObtenerFechadeSistemaComponent1751987196569,
    ObtenerMonedaNacionalComponent1751987196572,
    ObtenerMonedasComponent1751987196576,
    ObtenerSucursalesComponent1751987196586,
    ObtenerAgrupadoresDomicilioComponent1751987196596,
    ObtenerBarriosyColoniasComponent1751987196605,
    ObtenerCiudadesyLocalidadesComponent1751987196614,
    ObtenerCodigosdeDomicilioComponent1751987196623,
    ObtenerEstadosProvinciasyDepartamentosComponent1751987196627,
    ObtenerPaisesComponent1751987196631,
    ObtenerTiposdeListasNegrasComponent1751987196635,
    ObtenerTiposdeTelefonoComponent1751987196637,
    ObtenerTiposdeViviendaComponent1751987196641,
    ObtenerPizarraporModuloComponent1751987196645,
    ObtenerPizarrasComponent1751987196649,
    ObtenerMenusComponent1751987196657,
    ObtenerPerfilesComponent1751987196667,
    AgregarTextoAsientoComponent1751987196676,
    AgregarTextoOrdinalComponent1751987196685,
    AnularMovimientoComponent1751987196691,
    ActualizarCondicionImpositivaComponent1751987196700,
    CrearCondicionImpositivaComponent1751987196707,
    ObtenerIdBantotalMovimientoComponent1751987196716,
    ObtenerIdBantotalOperacionComponent1751987196723,
    ObtenerIdBantotalProductoComponent1751987196731,
    ObtenerIdentificadorUnicodeMovimientoComponent1751987196737,
    ObtenerIdentificadorUnicodeOperacionComponent1751987196743,
    ObtenerIdentificadorUnicodeProductoComponent1751987196750,
    ObtenerClientedeunaOperacionComponent1751987196757,
    ObtenerCondicionImpositivaComponent1751987196766,
    ObtenerDetalledeMovimientoComponent1751987196774,
    ObtenerDetalledeOrdinalComponent1751987196785,
    ObtenerIntegrantesdeOperacionComponent1751987196791,
    ObtenerTextosdeMovimientoComponent1751987196800,
    RegistrarAsientoComponent1751987196808,
    RegistrarAsientoFechaValorComponent1751987196815,
    CancelarComponent1751987196824,
    CashInComponent1751987196834,
    CashOutComponent1751987196838,
    ContratarComponent1751987196847,
    ObtenerDatosComponent1751987196855,
    ObtenerMovimientosComponent1751987196867,
    ObtenerProductosComponent1751987196876,
    ObtenerProductosCVComponent1751987196888,
    ObtenerChequeraComponent1751987196892,
    ObtenerChequerasComponent1751987196897,
    ObtenerChequesdeChequeraComponent1751987196901,
    ObtenerComisionChequeraComponent1751987196914,
    ObtenerEstadodeChequeraComponent1751987196917,
    ObtenerSolicitudesdeChequerasComponent1751987196920,
    ObtenerTiposdeChequeraComponent1751987196930,
    ObtenerTiposdeChequeraporProductoComponent1751987196938,
    EliminarChequeraComponent1751987196948,
    RegistrarOrdendeNoPagodeChequeraComponent1751987196955,
    RegistrarOrdendeNoPagodeChequesComponent1751987196964,
    SolicitarChequeraComponent1751987196970,
    ContratarconPeriodicidadComponent1751987196979,
    ContratarProductoComponent1751987196987,
    ContratarProductoconAltadeFacultadesComponent1751987196989,
    ObtenerAcuerdosComponent1751987196992,
    ObtenerDatosComponent1751987196996,
    ObtenerEstadodeCuentaComponent1751987197002,
    ObtenerEvoluciondeSaldosComponent1751987197010,
    ObtenerProductosComponent1751987197017,
    ContratarconPeriodicidadComponent1751987197024,
    ContratarProductoComponent1751987197030,
    ContratarProductoconAltadeFacultadesComponent1751987197038,
    ObtenerDatosComponent1751987197041,
    ObtenerEstadodeCuentaComponent1751987197046,
    ObtenerEvoluciondeSaldosComponent1751987197049,
    ObtenerProductosComponent1751987197052,
    ActualizarBeneficiariosComponent1751987197059,
    ObtenerBeneficiariosComponent1751987197067,
    ActualizarDocumentoDigitalComponent1751987197074,
    AsociarDocumentoDigitalComponent1751987197083,
    EliminarDocumentoDigitalComponent1751987197089,
    ObtenerDocumentoDigitalComponent1751987197098,
    ObtenerDocumentosDigitalesComponent1751987197105,
    ObtenerBolsillosComponent1751987197114,
    ObtenerCBUdeCuentaVistaComponent1751987197120,
    ObtenerCuentaVistadeCBUComponent1751987197128,
    ObtenerDetalleBloqueoComponent1751987197137,
    ObtenerEstadodeCuentaporPeriodoComponent1751987197148,
    ObtenerEstadoDeOperacionComponent1751987197156,
    ObtenerFacultadesComponent1751987197165,
    ObtenerPaqueteComponent1751987197175,
    ObtenerPeriododeAcreditacionComponent1751987197193,
    ObtenerPeriodosdeAcreditacionComponent1751987197184,
    ObtenerSaldoBloqueadoComponent1751987197203,
    ObtenerSaldoDisponibleComponent1751987197215,
    ObtenerSaldosBloqueadosComponent1751987197224,
    AcreditarEnCuentaComponent1751987197237,
    ActivarComponent1751987197247,
    ActualizarPeriododeAcreditacionComponent1751987197254,
    BloquearSaldoComponent1751987197262,
    CancelarComponent1751987197265,
    DebitarEnCuentaComponent1751987197270,
    DesbloquearSaldoComponent1751987197277,
    ActualizarPerfilTransaccionalComponent1751987197288,
    AgregarPerfilTransaccionalComponent1751987197295,
    ObtenerPerfilTransaccionalComponent1751987197302,
    TraspasarConTipoDeCambioEspecialComponent1751987197309,
    TraspasarEntreCuentasdelaMismaPersonaComponent1751987197318,
    TraspasarEntreCuentasMismoTitularcontipodecambioComponent1751987197327,
    TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1751987197332,
    TraspasarEntreCuentasPropiasComponent1751987197341,
    TraspasarEntreCuentasPropiascontipodecambioComponent1751987197335,
    TraspasarEntreCuentasPropiasdiferentesmonedasComponent1751987197338,
    TraspasarEntreCuentasTercerosComponent1751987197351,
    TraspasarEntreCuentasTerceroscontipodecambioComponent1751987197345,
    TraspasarEntreCuentasTercerosdiferentesmonedasComponent1751987197348,
    ActualizarBeneficiariosComponent1751987197358,
    ObtenerBeneficiariosComponent1751987197367,
    ContratarComponent1751987197373,
    ContratarConFacultadesComponent1751987197383,
    ContratarSimulacionComponent1751987197393,
    ActualizarDocumentoDigitalComponent1751987197403,
    AsociarDocumentoDigitalComponent1751987197412,
    EliminarDocumentoDigitalComponent1751987197420,
    ObtenerDocumentoDigitalComponent1751987197429,
    ModificarCuentaDestinoalVencimientoComponent1751987197436,
    ModificarCuentaDestinodeAcreditacionPeriodicaComponent1751987197446,
    ModificarInstruccionComponent1751987197456,
    ObtenerAvanceComponent1751987197464,
    ObtenerDatosComponent1751987197474,
    ObtenerDatosPrecancelacionComponent1751987197484,
    ObtenerDocumentosDigitalesComponent1751987197493,
    ObtenerInstruccionComponent1751987197514,
    ObtenerInstruccionesHabilitadosComponent1751987197504,
    ObtenerMovimientosComponent1751987197523,
    ObtenerPeriodosHabilitadosComponent1751987197533,
    ObtenerProductosComponent1751987197543,
    ObtenerProductosHabilitadosComponent1751987197555,
    ObtenerTasadePrecancelacionComponent1751987197567,
    PrecancelarComponent1751987197575,
    SimularComponent1751987197585,
    SimularConCronogramaComponent1751987197596,
    ConfirmarListaComponent1751987197604,
    CrearListaComponent1751987197613,
    CrearListaChequesComponent1751987197622,
    ObtenerProductosComponent1751987197631,
    ObtenerTiposDeDesembolsoComponent1751987197639,
    SeleccionarOpcionDesembolsoComponent1751987197647,
    ObtenerAgrupadoresComponent1751987197656,
    ObtenerCierredeSaldosporMonedaComponent1751987197664,
    ObtenerCondicionesGeneralesComponent1751987197672,
    ObtenerIndicadoresComponent1751987197681,
    ObtenerMetodosMasEjecutadosComponent1751987197689,
    ObtenerMonedasIndicesComponent1751987197698,
    ObtenerRubrosBolsaComponent1751987197707,
    ObtenerServiciosMasEjecutadosComponent1751987197710,
    ObtenerSesionesPorUsuarioComponent1751987197714,
    ObtenerSucursalesCajasComponent1751987197717,
    ObtenerTransaccionesporEstadosComponent1751987197720,
    BuscarClienteComponent1751987197723,
    CompletarTareaComponent1751987197726,
    CrearSolicitudAmpliacionComponent1751987197730,
    CrearSolicitudIndividualComponent1751987197733,
    CrearSolicitudRenovacionComponent1751987197736,
    AgregarFiadorComponent1751987197739,
    EliminarFiadorComponent1751987197741,
    ActualizarGrupoComponent1751987197745,
    ActualizarIntegrantedeGrupoComponent1751987197748,
    AgregarGrupoComponent1751987197751,
    AgregarIntegranteaGrupoComponent1751987197754,
    CrearSolicitudGrupalComponent1751987197760,
    HabilitarIntegrantedeunGrupoComponent1751987197766,
    InhabilitarIntegrantedeunGrupoComponent1751987197769,
    ObtenerDetalleGrupoComponent1751987197772,
    ObtenerGruposComponent1751987197775,
    ObtenerIntegrantesdeGrupoComponent1751987197780,
    ObtenerTiposdeGrupoComponent1751987197783,
    ObtenerTiposdeIntegranteComponent1751987197786,
    SimularPrestamoAmortizableGrupalComponent1751987197789,
    ObtenerAsesoresComponent1751987197792,
    ObtenerCampanasComponent1751987197802,
    ObtenerDestinosCreditoComponent1751987197811,
    ObtenerOperacionesClienteComponent1751987197820,
    ObtenerOrigenesdeCaptacionComponent1751987197828,
    ObtenerProductosComponent1751987197838,
    ObtenerSolicitudesClienteComponent1751987197848,
    ObtenerTiposAvalComponent1751987197866,
    AgregarOperacionesaCancelarComponent1751987197873,
    ObtenerOperacionesaCancelarComponent1751987197884,
    QuitarOperacionesaCancelarComponent1751987197889,
    SimularLibreAmortizacionComponent1751987197892,
    SimularPrestamoAmortizableComponent1751987197897,
    SimularPrestamoPlazoFijoComponent1751987197900,
    ValidarPoliticasComponent1751987197903,
    ObtenerCantidadCuotasComponent1751987197905,
    ObtenerCapitalComponent1751987197907,
    ObtenerComisionesComponent1751987197909,
    ObtenerComisionesporCuotaComponent1751987197912,
    ObtenerDiasPrimerPeriodoComponent1751987197920,
    ObtenerPeriodoEntreCuotasComponent1751987197936,
    ObtenerPermiteSegurosdelMismoTipoComponent1751987197927,
    ObtenerPlazoComponent1751987197944,
    ObtenerRequiereSegurodeVidaObligatorioComponent1751987197953,
    ObtenerSegurosComponent1751987197963,
    ObtenerItemsModeloComponent1751987197971,
    ObtenerModelosPAEComponent1751987197979,
    ObtenerScoresComponent1751987197988,
    ObtenerTiposDeModelosComponent1751987197996,
    ContratarPrestamoComponent1751987198004,
    ContratarVehicularComponent1751987198013,
    CrearClienteComponent1751987198021,
    CrearPersonaClienteComponent1751987198029,
    ObtenerDatosdeUsuarioComponent1751987198037,
    ObtenerDetalledeOfertaAmortizableComponent1751987198046,
    ObtenerDetalleOfertaVehicularComponent1751987198056,
    ObtenerMarcasComponent1751987198065,
    ObtenerModelosComponent1751987198073,
    ObtenerPartnersComponent1751987198082,
    ObtenerPrestamosdeClienteComponent1751987198112,
    ObtenerProductosComponent1751987198092,
    ObtenerProductosdelPartnerComponent1751987198103,
    ObtenerPuntosdeVentaComponent1751987198122,
    ObtenerVendedoresComponent1751987198131,
    ObtenerVersionesComponent1751987198140,
    SimularOfertasComponent1751987198150,
    SimularOfertasVehicularComponent1751987198160,
    SimularPrestamoComponent1751987198171,
    SimularVehicularComponent1751987198181,
    ObtenerCorrelativoGuiaComponent1751987198189,
    ObtenerCorrelativoGuiaEspecialComponent1751987198198,
    ObtenerGuiadeProcesoComponent1751987198207,
    ObtenerGuiaEspecialdeProcesoComponent1751987198217,
    ObtenerOpcionGeneraldeProcesoComponent1751987198225,
    ObtenerOpcionGeneralPorModuloComponent1751987198236,
    ObtenerProgramaParticularComponent1751987198246,
    ActualizarComponent1751987198250,
    ActualizarCelularComponent1751987198254,
    ActualizarContactoComponent1751987198259,
    ActualizarConyugeComponent1751987198281,
    ActualizarCorreoElectronicoComponent1751987198272,
    ActualizarDomicilioComponent1751987198290,
    ActualizarFATCAComponent1751987198300,
    ActualizarInformacionAdicionalComponent1751987198309,
    ActualizarInformacionFinancieraComponent1751987198319,
    ActualizarIntegrantedePersonaJuridicaComponent1751987198328,
    ActualizarPersonaJuridicaComponent1751987198337,
    ActualizarProfesionComponent1751987198345,
    ActualizarReferenciaComponent1751987198353,
    ActualizarRegistroEmpleadoComponent1751987198361,
    ActualizarTelefonoComponent1751987198370,
    ActualizarVictimaHechoViolentoComponent1751987198379,
    ModificarDocumentoAdicionalComponent1751987198388,
    AgregaraListaNegraComponent1751987198397,
    AgregarContactoComponent1751987198406,
    AgregarCorreoElectronicoComponent1751987198415,
    AgregarDatosPEPComponent1751987198424,
    AgregarDocumentoAdicionalComponent1751987198433,
    AgregarDomicilioComponent1751987198442,
    AgregarEstadoFinancieroComponent1751987198452,
    AgregarFATCAComponent1751987198460,
    AgregarInformacionAdicionalComponent1751987198470,
    AgregarInformacionFinancieraComponent1751987198478,
    AgregarIntegranteaPersonaJuridicaComponent1751987198487,
    AgregarPersonaVinculadaComponent1751987198494,
    AgregarReferenciaComponent1751987198504,
    AgregarTelefonoComponent1751987198513,
    AgregarVictimaHechoViolentoComponent1751987198521,
    CrearComponent1751987198530,
    CrearConyugeComponent1751987198540,
    CrearPersonaJuridicaComponent1751987198543,
    CrearReducidoComponent1751987198548,
    ActualizarDocumentoDigitalComponent1751987198557,
    AsociarDocumentoDigitalComponent1751987198568,
    EliminarDocumentoDigitalComponent1751987198575,
    ObtenerDocumentoDigitalComponent1751987198584,
    ObtenerDocumentosDigitalesComponent1751987198587,
    EliminarConyugeComponent1751987198589,
    EliminarDocumentoAdicionalComponent1751987198597,
    EliminarDomicilioComponent1751987198605,
    EliminarInformacionAdicionalComponent1751987198608,
    EliminarIntegrantedePersonaJuridicaComponent1751987198612,
    EliminarPersonaVinculadaComponent1751987198620,
    EliminarProfesionComponent1751987198628,
    ObtenerComponent1751987198637,
    ObtenerConceptoComponent1751987198645,
    ObtenerContactosComponent1751987198654,
    ObtenerConyugeComponent1751987198680,
    ObtenerCorreosElectronicosComponent1751987198663,
    ObtenerCuentasClienteComponent1751987198671,
    ObtenerDatosPEPComponent1751987198688,
    ObtenerDocumentosAdicionalesComponent1751987198692,
    ObtenerDomiciliosComponent1751987198702,
    ObtenerEstadosCivilesComponent1751987198710,
    ObtenerFacultadesComponent1751987198720,
    ObtenerFATCAComponent1751987198729,
    ObtenerHobbiesComponent1751987198739,
    ObtenerHobbyComponent1751987198747,
    ObtenerIdBantotalComponent1751987198758,
    ObtenerIdentidadesdeGeneroComponent1751987198762,
    ObtenerIdentificadorUnicoComponent1751987198765,
    ObtenerInformacionAdicionalComponent1751987198773,
    ObtenerInformacionFinancieraComponent1751987198777,
    ObtenerIntegrantesPersonaJuridicaComponent1751987198780,
    ObtenerLimitesComponent1751987198783,
    ObtenerNaturalezasJuridicasComponent1751987198787,
    ObtenerNivelesEducativosComponent1751987198795,
    ObtenerOcupacionesComponent1751987198804,
    ObtenerPersonaJuridicaComponent1751987198812,
    ObtenerPersonasComponent1751987198822,
    ObtenerPersonasJuridicasComponent1751987198830,
    ObtenerPersonasVinculadasComponent1751987198839,
    ObtenerProfesionComponent1751987198856,
    ObtenerProfesionesComponent1751987198849,
    ObtenerReferenciasComponent1751987198865,
    ObtenerTarjetasdeDebitoComponent1751987198874,
    ObtenerTelefonosComponent1751987198883,
    ObtenerTipodePersonaComponent1751987198892,
    ObtenerTiposdeDocumentoComponent1751987198902,
    ObtenerTiposDeFuncionarioPublicoComponent1751987198911,
    ObtenerTiposDePEPComponent1751987198921,
    ObtenerTitularesDelTelefonoComponent1751987198929,
    ObtenerVictimaHechoViolentoComponent1751987198938,
    ObtenerVinculosComponent1751987198942,
    ObtenerVinculosdeAfinidadComponent1751987198953,
    ObtenerVinculosdeConsanguinidadComponent1751987198962,
    ObtenerVinculosJuridicosComponent1751987198965,
    EvaluarPAEComponent1751987198974,
    ValidarCorreoElectronicoComponent1751987198983,
    ValidarDocumentoComponent1751987198992,
    ValidarenListasNegrasComponent1751987199002,
    ValidarExistenciaComponent1751987199010,
    ValidarListasInhabilitadosComponent1751987199014,
    VerificarEmpleadoComponent1751987199023,
    ConvertirTasaAnualEfectivaaLinealComponent1751987199031,
    ConvertirTasaAnualLinealaEfectivaComponent1751987199040,
    ConvertirTasaMensualEfectivaaLinealComponent1751987199047,
    ConvertirTasaMensualLinealaEfectivaComponent1751987199056,
    ObtenerCotizacionComponent1751987199067,
    ObtenerCotizacionaFechaComponent1751987199076,
    ObtenerCotizacionCierreComponent1751987199089,
    ObtenerPizarraEspecialporTransaccionComponent1751987199098,
    ObtenerPrecioaFechaComponent1751987199108,
    ObtenerPrecioEspecieComponent1751987199118,
    ObtenerTasadeOperacionComponent1751987199124,
    ObtenerTasaParaClienteComponent1751987199135,
    ObtenerTasaParaProductoComponent1751987199142,
    ObtenerTipodeCambioComponent1751987199154,
    ObtenerTiposDeCambioEspecialesComponent1751987199162,
    CancelarComponent1751987199172,
    CancelaraFechaComponent1751987199182,
    CancelaraFechaTercerosComponent1751987199191,
    CancelarTercerosComponent1751987199200,
    ContratarComponent1751987199209,
    ContratarAmpliacionComponent1751987199220,
    ContratarRefinanciacionComponent1751987199230,
    ContratarRefinanciacionporDeudaTotalComponent1751987199236,
    ContratarRefinanciacionporSaldoCapitalComponent1751987199244,
    ActualizarDocumentoDigitalComponent1751987199254,
    AsociarDocumentoDigitalComponent1751987199265,
    EliminarDocumentoDigitalComponent1751987199272,
    ObtenerDocumentoDigitalComponent1751987199281,
    ObtenerDocumentosDigitalesComponent1751987199288,
    ObtenerCronogramaComponent1751987199296,
    ObtenerCronogramaaFechaComponent1751987199305,
    ObtenerCronogramaconPagosaFechaComponent1751987199314,
    ObtenerCronogramaenEspecieComponent1751987199324,
    ObtenerCronogramaOriginalComponent1751987199334,
    ObtenerCuentadeCobroComponent1751987199341,
    ObtenerDatosdelProximoVencimientoComponent1751987199349,
    ObtenerDetalleComponent1751987199356,
    ObtenerDetalleaFechaComponent1751987199365,
    ObtenerDetalledeCancelacionTotalComponent1751987199373,
    ObtenerDetalledeOfertaComponent1751987199384,
    ObtenerDetalledeOfertaAmortizableComponent1751987199395,
    ObtenerDetalledeOperacionesaRefinanciarComponent1751987199403,
    ObtenerDetalledePrestamoCanceladoComponent1751987199424,
    ObtenerDetallePagoPrestamoComponent1751987199456,
    ObtenerDetalleReducidoComponent1751987199470,
    ObtenerDetalleSimulacionComponent1751987199482,
    ObtenerDeudaComponent1751987199489,
    ObtenerDeudaPrestamoCastigadoComponent1751987199498,
    ObtenerDeudaVencidaComponent1751987199506,
    ObtenerFechadeIncumplimientoComponent1751987199514,
    ObtenerFechadeUltimoPagoComponent1751987199521,
    ObtenerFechasdePagoComponent1751987199531,
    ObtenerInformacionAdicionalComponent1751987199539,
    ObtenerMontodeCancelacionComponent1751987199548,
    ObtenerMotivosPrecancelacionComponent1751987199558,
    ObtenerPagosdeCuotaComponent1751987199567,
    ObtenerPagosdeunPrestamoComponent1751987199575,
    ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1751987199584,
    ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1751987199593,
    ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1751987199604,
    ObtenerProductosComponent1751987199612,
    ObtenerProductosRefinanciacionComponent1751987199621,
    ObtenerRefinanciacionSimuladaComponent1751987199629,
    AbonaraCuentaComponent1751987199638,
    ActualizarInformacionAdicionalComponent1751987199646,
    ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1751987199653,
    AgregarCuentadeCobroComponent1751987199660,
    AgregarInformacionAdicionalComponent1751987199668,
    EliminarCuentadeCobroComponent1751987199675,
    EliminarInformacionAdicionalComponent1751987199685,
    SolicitarPrecancelacionComponent1751987199696,
    AdelantarCapitalConReduccionDeCuotaComponent1751987199704,
    AdelantarCapitalConReduccionDePlazoComponent1751987199713,
    PagarCuotaComponent1751987199720,
    PagarCuotaaFechaComponent1751987199729,
    PagarCuotaaFechaTercerosComponent1751987199736,
    PagarCuotaTercerosComponent1751987199745,
    ResimularAmortizableComponent1751987199753,
    ResimularAmpliacionComponent1751987199762,
    ResimularRefinanciacionComponent1751987199769,
    SimularComponent1751987199777,
    SimularAmortizableComponent1751987199786,
    SimularAmortizableSinClienteComponent1751987199795,
    SimularAmpliacionComponent1751987199803,
    SimularAmpliacionIngresandoSegurosComponent1751987199812,
    SimularDespejandoCapitalyCantidaddeCuotasComponent1751987199820,
    SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1751987199829,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1751987199836,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1751987199843,
    SimularDespejandoFechadeVencimientoyTasaComponent1751987199852,
    SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1751987199860,
    SimularIngresandoBalloonComponent1751987199868,
    SimularIngresandoBalloonSinClienteComponent1751987199877,
    SimularIngresandoSegurosComponent1751987199887,
    SimularIngresandoSegurosSinClienteComponent1751987199897,
    SimularLibreAmortizacionComponent1751987199908,
    SimularLibreAmortizacionSinClienteComponent1751987199919,
    SimularOfertasComponent1751987199928,
    SimularPlazoFijoComponent1751987199937,
    SimularRefinanciacionComponent1751987199946,
    SimularRefinanciacionporDeudaTotalComponent1751987199954,
    SimularRefinanciacionporSaldoCapitalComponent1751987199963,
    ActualizarTextosComponent1751987199969,
    AgregarTextosComponent1751987199976,
    EliminarTextosComponent1751987199985,
    ObtenerTextosComponent1751987199994,
    EvaluarRegladeNegocioComponent1751987200008,
    ObtenerReglasdeNegocioComponent1751987200018,
    ObtenerVariablesReglaComponent1751987200026,
    ValidarDatosRegladeNegocioComponent1751987200036,
    AutorizarExcepcionComponent1751987200044,
    ObtenerDetalledeExcepcionComponent1751987200052,
    ObtenerExcepcionesComponent1751987200060,
    RechazarExcepcionComponent1751987200067,
    RegistrarDispositivoComponent1751987200074,
    ContratarSeguroComponent1751987200083,
    ObtenerMontosDeUnSeguroComponent1751987200090,
    ObtenerSegurosComponent1751987200098,
    ObtenerSegurosAPagarComponent1751987200106,
    PagarSeguroComponent1751987200114,
    ObtenerCodigosdeLimitesComponent1751987200158,
    ObtenerCuentaPreferencialComponent1751987200122,
    ObtenerCuentasaAsociarComponent1751987200130,
    ObtenerCuentasAsociadasComponent1751987200140,
    ObtenerCuentasAsociadasPorTipoComponent1751987200149,
    ObtenerDatosComponent1751987200167,
    ObtenerDatosContactoComponent1751987200175,
    ObtenerIdentificadorUnicoComponent1751987200184,
    ObtenerLimitesComponent1751987200192,
    ObtenerMovimientosComponent1751987200202,
    ObtenerTarjetaComponent1751987200210,
    ObtenerTarjetaHabienteComponent1751987200220,
    ObtenerTarjetasAdicionalesComponent1751987200229,
    ObtenerTiposdeCuentaComponent1751987200238,
    ActivarComponent1751987200247,
    ActualizarCuentaPreferencialComponent1751987200256,
    ActualizarDatosContactoComponent1751987200266,
    AsociarCuentaComponent1751987200272,
    BlanquearPinComponent1751987200281,
    BloquearComponent1751987200288,
    BloquearDesdeREDComponent1751987200296,
    CrearComponent1751987200305,
    CrearConCuentasAsociadasComponent1751987200317,
    DenunciarComponent1751987200325,
    DenunciarDesdeREDComponent1751987200336,
    DesbloquearComponent1751987200345,
    DesbloquearDesdeREDComponent1751987200353,
    EliminarCuentaAsociadaComponent1751987200362,
    ModificarLimiteComponent1751987200369,
    ComprarComponent1751987200378,
    ObtenerEstadoCompraComponent1751987200386,
    ObtenerGruposComponent1751987200394,
    ObtenerValoresComponent1751987200403,
    AgregarPerfilComponent1751987200413,
    CrearComponent1751987200421,
    EliminarPerfilComponent1751987200430,
    EliminarUsuarioComponent1751987200437,
    HabilitarEnCanalComponent1751987200446,
    HabilitarUsuarioComponent1751987200452,
    InhabilitarUsuarioComponent1751987200461,
    ModificarComponent1751987200469,
    ObtenerComponent1751987200478,
    ObtenerPerfilesComponent1751987200486,
    ObtenerUsuariosComponent1751987200495,
    ObtenerUsuariosParaPerfilComponent1751987200503,
    ObtenerMetadataDeTareaComponent1751987200512,
    ObtenerProcesosHabilitadosComponent1751987200522,
    ObtenerRolesComponent1751987200532,
    ObtenerRolesdeTareaComponent1751987200540,
    ObtenerTareasdeProcesoComponent1751987200550,
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
    ContratarSimulacionComponent1751987195230,
    CrearComponent1751987195248,
    SimularComponent1751987195259,
    ActualizarDocumentoDigitalComponent1751987195269,
    AsociarDocumentoDigitalComponent1751987195278,
    EliminarDocumentoDigitalComponent1751987195286,
    ObtenerDocumentoDigitalComponent1751987195290,
    ObtenerDocumentosDigitalesComponent1751987195293,
    ModificarCuentaDestinoComponent1751987195297,
    ModificarCuentaOrigenComponent1751987195308,
    ModificarFechadeAbonoComponent1751987195317,
    ModificarMetadeAhorroComponent1751987195326,
    ModificarMontodeAbonoComponent1751987195335,
    ObtenerComponent1751987195345,
    ObtenerCronogramaAbonosComponent1751987195350,
    ObtenerCuentasDestinoHabilitadasComponent1751987195360,
    ObtenerCuentasOrigenHabilitadasComponent1751987195371,
    ObtenerEstadodeCuentaComponent1751987195381,
    ObtenerPeriodosHabilitadosComponent1751987195390,
    ObtenerPlazosHabilitadosComponent1751987195399,
    ObtenerProductosComponent1751987195405,
    AnularChequeElectronicoComponent1751987195408,
    AsignarIdaChequeElectronicoComponent1751987195413,
    CrearChequeraElectronicaComponent1751987195416,
    DepositarChequeElectronicodeBancoPropioComponent1751987195426,
    DepositarChequeElectronicodeOtroBancoComponent1751987195437,
    DepositarChequeElectronicoenCustodiaComponent1751987195440,
    EmitirChequeElectronicoComponent1751987195450,
    EmitirChequeElectronicodeChequeraComponent1751987195453,
    HabilitarChequeElectronicoComponent1751987195456,
    CrearAdhesionComponent1751987195460,
    CrearStopDebitComponent1751987195465,
    CrearStopDebitparaAdhesionconImporteComponent1751987195468,
    EliminarStopDebitComponent1751987195471,
    ObtenerAdhesionesComponent1751987195473,
    ObtenerDebitosComponent1751987195485,
    ObtenerEmpresasOriginantesComponent1751987195488,
    ObtenerStopDebitsComponent1751987195497,
    ReversarDebitosComponent1751987195506,
    SolicitarBajadeAdhesionComponent1751987195515,
    AutenticacionComponent1751987195523,
    ObtenerDetalledeEjecucionComponent1751987195527,
    ObtenerDetalledeProcesoComponent1751987195537,
    ObtenerProcesosconErrorComponent1751987195540,
    ObtenerProcesosCriticosComponent1751987195551,
    ObtenerProcesosDiariosComponent1751987195555,
    ObtenerProcesosMensualesComponent1751987195566,
    ObtenerProcesosReprocesablesComponent1751987195577,
    VerificarEstadoServidorComponent1751987195581,
    CalcularFechadeVencimientoComponent1751987195587,
    CalcularFechadeVencimientoenDiasHabilesComponent1751987195590,
    CalcularPlazoComponent1751987195598,
    CalcularPlazoenDiasHabilesComponent1751987195606,
    ObtenerFechaHabilComponent1751987195616,
    ObtenerFechaHabilAnteriorComponent1751987195625,
    ObtenerFechaHabilAnteriordeSucursalComponent1751987195634,
    ObtenerFechaHabildeSucursalComponent1751987195637,
    ObtenerInicioyFindeMesComponent1751987195646,
    ObtenerInicioyFindeMesdeSucursalComponent1751987195649,
    ObtenerProximaFechaHabilComponent1751987195652,
    ObtenerProximaFechaHabildeSucursalComponent1751987195660,
    AutorizarArchivoComponent1751987195671,
    CargarArchivoComponent1751987195679,
    CargarArchivoRecibidoComoDatoComponent1751987195686,
    DetenerArchivoComponent1751987195695,
    RechazarArchivoComponent1751987195698,
    CargarBeneficiariosComponent1751987195701,
    IngresarBeneficiarioComponent1751987195704,
    ObtenerBeneficiarioSegunFiltroComponent1751987195711,
    AltaAutomaticaContratoComponent1751987195715,
    CargarServiciosDisponiblesComponent1751987195721,
    ContratarDebitoAutomaticoComponent1751987195731,
    ObtenerDetalledeOrdendeCuentaComponent1751987195738,
    ObtenerDetalledePagoComponent1751987195747,
    ObtenerDetalleOrdenSegunCampoComponent1751987195754,
    ObtenerDetallePagoOrdenComponent1751987195765,
    ObtenerDeudaComponent1751987195771,
    ObtenerResumenOrdenComponent1751987195779,
    ObtenerServiciosComponent1751987195786,
    ObtenerValoresOrdenComponent1751987195795,
    ObtenerValoresOrdenSegunCampoComponent1751987195804,
    AutorizarOrdenComponent1751987195814,
    DetenerOrdenComponent1751987195823,
    IngresarOrdenPagoComponent1751987195832,
    ProcesarOrdenComponent1751987195840,
    RechazarOrdenComponent1751987195850,
    AnularPagoDeudaComponent1751987195863,
    PagarDeudaDesdeCuentaComponent1751987195872,
    RegistrarPagoDeudaComponent1751987195881,
    RegistrarPagoEnLineaComponent1751987195889,
    RegistrarPagoEnLineaDesdeCuentaComponent1751987195898,
    VisualizarListaResumenCabezalComponent1751987195909,
    VisualizarListaResumenCabezalOrdenComponent1751987195920,
    VisualizarOrdendeArchivoParaCuentaComponent1751987195928,
    VisualizarResultadoProcesamientoComponent1751987195937,
    VisualizarResumenCabezalComponent1751987195945,
    VisualizarSituacionArchivosComponent1751987195954,
    VisualizarSituacionLineasComponent1751987195966,
    CHATComponent1751987195976,
    ActualizarComponent1751987195986,
    ActualizarDocumentoDigitalComponent1751987195990,
    ActualizarDomicilioComponent1751987195993,
    ActualizarInformacionAdicionalComponent1751987196002,
    ActualizarRegistroEmpleadoComponent1751987196009,
    ActualizarTelefonoComponent1751987196018,
    AgregarDomicilioComponent1751987196029,
    AgregarInformacionAdicionalComponent1751987196037,
    AgregarIntegranteComponent1751987196042,
    AgregarTelefonoComponent1751987196047,
    AsociarDocumentoDigitalComponent1751987196055,
    EliminarDocumentoDigitalComponent1751987196065,
    EliminarDomicilioComponent1751987196073,
    EliminarInformacionAdicionalComponent1751987196082,
    EliminarIntegranteComponent1751987196094,
    HabilitarComponent1751987196099,
    InhabilitarComponent1751987196107,
    ModificarEjecutivoComponent1751987196111,
    CrearComponent1751987196122,
    CrearconPersonaExistenteComponent1751987196132,
    CrearParaPersonaJuridicaComponent1751987196138,
    ObtenerComponent1751987196147,
    ObtenerAhorrosProgramadosComponent1751987196150,
    ObtenerBolsillosComponent1751987196159,
    ObtenerClasificacionesInternasComponent1751987196168,
    ObtenerCuentaClienteComponent1751987196177,
    ObtenerCuentasCorrientesSaldoContableComponent1751987196182,
    ObtenerCuentasCorrientesSaldoDisponibleComponent1751987196191,
    ObtenerCuentasdeAhorroSaldoContableComponent1751987196202,
    ObtenerCuentasdeAhorroSaldoDisponibleComponent1751987196213,
    ObtenerDatosComponent1751987196221,
    ObtenerDetallePosicionComponent1751987196231,
    ObtenerDocumentoDigitalComponent1751987196237,
    ObtenerDocumentosDigitalesComponent1751987196246,
    ObtenerDomiciliosComponent1751987196254,
    ObtenerFacultadesComponent1751987196261,
    ObtenerIdentificadorUnicoComponent1751987196269,
    ObtenerInformacionAdicionalComponent1751987196277,
    ObtenerIntegrantesComponent1751987196286,
    ObtenerLimitesComponent1751987196295,
    ObtenerMotivosInhabilitacionComponent1751987196304,
    ObtenerPerfilComponent1751987196313,
    ObtenerPlazosFijosComponent1751987196317,
    ObtenerPlazosFijosCanceladosComponent1751987196323,
    ObtenerPlazosFijosconAvanceComponent1751987196333,
    ObtenerPosicionComponent1751987196336,
    ObtenerPrestamosComponent1751987196339,
    ObtenerPrestamosCanceladosComponent1751987196348,
    ObtenerPrestamosCastigadosComponent1751987196351,
    ObtenerPrestamosconAvanceComponent1751987196355,
    ObtenerResumendeProductosCierredeanoComponent1751987196359,
    ObtenerResumendeProductosSaldosContablesComponent1751987196368,
    ObtenerResumendeProductosSaldosDisponiblesComponent1751987196371,
    ObtenerResumenporProductoaCierreAnoComponent1751987196374,
    ObtenerRiesgodeCreditoComponent1751987196386,
    ObtenerSaldosdeOtrosProductosComponent1751987196393,
    ObtenerSectoresComponent1751987196406,
    ObtenerSegmentosComponent1751987196417,
    ObtenerTarjetasdeDebitoComponent1751987196420,
    ObtenerTelefonosComponent1751987196423,
    ObtenerTiposdeIntegracionComponent1751987196434,
    ObtenerTitularRepresentativoComponent1751987196439,
    ObtenerTitulosComponent1751987196447,
    ValidarExistenciaComponent1751987196453,
    VerificarEmpleadoComponent1751987196455,
    ObtenerAgenciasBancoComponent1751987196457,
    ObtenerBancosComponent1751987196460,
    ObtenerDetalleSucursalComponent1751987196464,
    ObtenerSucursalesPrincipalesComponent1751987196466,
    ObtenerActividadesComponent1751987196468,
    ObtenerActividadesporTipoComponent1751987196471,
    ObtenerEjecutivosComponent1751987196473,
    ObtenerTiposdeActividadComponent1751987196476,
    ObtenerTiposdeTarjetaComponent1751987196480,
    ObtenerImpuestosComponent1751987196486,
    ObtenerTiposdeDocumentoDigitalComponent1751987196489,
    ObtenerEstadosComponent1751987196497,
    ObtenerInstruccionesComponent1751987196503,
    ObtenerPaquetesComponent1751987196509,
    ObtenerTiposdeTextoComponent1751987196516,
    ObtenerCalendariodeSucursalComponent1751987196525,
    ObtenerCalendariosComponent1751987196532,
    ObtenerDetalledeCalendarioComponent1751987196539,
    ObtenerDetalledeCalendariodeSucursalComponent1751987196548,
    ObtenerDolarUSAComponent1751987196556,
    ObtenerEmpresaComponent1751987196567,
    ObtenerFechadeSistemaComponent1751987196569,
    ObtenerMonedaNacionalComponent1751987196572,
    ObtenerMonedasComponent1751987196576,
    ObtenerSucursalesComponent1751987196586,
    ObtenerAgrupadoresDomicilioComponent1751987196596,
    ObtenerBarriosyColoniasComponent1751987196605,
    ObtenerCiudadesyLocalidadesComponent1751987196614,
    ObtenerCodigosdeDomicilioComponent1751987196623,
    ObtenerEstadosProvinciasyDepartamentosComponent1751987196627,
    ObtenerPaisesComponent1751987196631,
    ObtenerTiposdeListasNegrasComponent1751987196635,
    ObtenerTiposdeTelefonoComponent1751987196637,
    ObtenerTiposdeViviendaComponent1751987196641,
    ObtenerPizarraporModuloComponent1751987196645,
    ObtenerPizarrasComponent1751987196649,
    ObtenerMenusComponent1751987196657,
    ObtenerPerfilesComponent1751987196667,
    AgregarTextoAsientoComponent1751987196676,
    AgregarTextoOrdinalComponent1751987196685,
    AnularMovimientoComponent1751987196691,
    ActualizarCondicionImpositivaComponent1751987196700,
    CrearCondicionImpositivaComponent1751987196707,
    ObtenerIdBantotalMovimientoComponent1751987196716,
    ObtenerIdBantotalOperacionComponent1751987196723,
    ObtenerIdBantotalProductoComponent1751987196731,
    ObtenerIdentificadorUnicodeMovimientoComponent1751987196737,
    ObtenerIdentificadorUnicodeOperacionComponent1751987196743,
    ObtenerIdentificadorUnicodeProductoComponent1751987196750,
    ObtenerClientedeunaOperacionComponent1751987196757,
    ObtenerCondicionImpositivaComponent1751987196766,
    ObtenerDetalledeMovimientoComponent1751987196774,
    ObtenerDetalledeOrdinalComponent1751987196785,
    ObtenerIntegrantesdeOperacionComponent1751987196791,
    ObtenerTextosdeMovimientoComponent1751987196800,
    RegistrarAsientoComponent1751987196808,
    RegistrarAsientoFechaValorComponent1751987196815,
    CancelarComponent1751987196824,
    CashInComponent1751987196834,
    CashOutComponent1751987196838,
    ContratarComponent1751987196847,
    ObtenerDatosComponent1751987196855,
    ObtenerMovimientosComponent1751987196867,
    ObtenerProductosComponent1751987196876,
    ObtenerProductosCVComponent1751987196888,
    ObtenerChequeraComponent1751987196892,
    ObtenerChequerasComponent1751987196897,
    ObtenerChequesdeChequeraComponent1751987196901,
    ObtenerComisionChequeraComponent1751987196914,
    ObtenerEstadodeChequeraComponent1751987196917,
    ObtenerSolicitudesdeChequerasComponent1751987196920,
    ObtenerTiposdeChequeraComponent1751987196930,
    ObtenerTiposdeChequeraporProductoComponent1751987196938,
    EliminarChequeraComponent1751987196948,
    RegistrarOrdendeNoPagodeChequeraComponent1751987196955,
    RegistrarOrdendeNoPagodeChequesComponent1751987196964,
    SolicitarChequeraComponent1751987196970,
    ContratarconPeriodicidadComponent1751987196979,
    ContratarProductoComponent1751987196987,
    ContratarProductoconAltadeFacultadesComponent1751987196989,
    ObtenerAcuerdosComponent1751987196992,
    ObtenerDatosComponent1751987196996,
    ObtenerEstadodeCuentaComponent1751987197002,
    ObtenerEvoluciondeSaldosComponent1751987197010,
    ObtenerProductosComponent1751987197017,
    ContratarconPeriodicidadComponent1751987197024,
    ContratarProductoComponent1751987197030,
    ContratarProductoconAltadeFacultadesComponent1751987197038,
    ObtenerDatosComponent1751987197041,
    ObtenerEstadodeCuentaComponent1751987197046,
    ObtenerEvoluciondeSaldosComponent1751987197049,
    ObtenerProductosComponent1751987197052,
    ActualizarBeneficiariosComponent1751987197059,
    ObtenerBeneficiariosComponent1751987197067,
    ActualizarDocumentoDigitalComponent1751987197074,
    AsociarDocumentoDigitalComponent1751987197083,
    EliminarDocumentoDigitalComponent1751987197089,
    ObtenerDocumentoDigitalComponent1751987197098,
    ObtenerDocumentosDigitalesComponent1751987197105,
    ObtenerBolsillosComponent1751987197114,
    ObtenerCBUdeCuentaVistaComponent1751987197120,
    ObtenerCuentaVistadeCBUComponent1751987197128,
    ObtenerDetalleBloqueoComponent1751987197137,
    ObtenerEstadodeCuentaporPeriodoComponent1751987197148,
    ObtenerEstadoDeOperacionComponent1751987197156,
    ObtenerFacultadesComponent1751987197165,
    ObtenerPaqueteComponent1751987197175,
    ObtenerPeriododeAcreditacionComponent1751987197193,
    ObtenerPeriodosdeAcreditacionComponent1751987197184,
    ObtenerSaldoBloqueadoComponent1751987197203,
    ObtenerSaldoDisponibleComponent1751987197215,
    ObtenerSaldosBloqueadosComponent1751987197224,
    AcreditarEnCuentaComponent1751987197237,
    ActivarComponent1751987197247,
    ActualizarPeriododeAcreditacionComponent1751987197254,
    BloquearSaldoComponent1751987197262,
    CancelarComponent1751987197265,
    DebitarEnCuentaComponent1751987197270,
    DesbloquearSaldoComponent1751987197277,
    ActualizarPerfilTransaccionalComponent1751987197288,
    AgregarPerfilTransaccionalComponent1751987197295,
    ObtenerPerfilTransaccionalComponent1751987197302,
    TraspasarConTipoDeCambioEspecialComponent1751987197309,
    TraspasarEntreCuentasdelaMismaPersonaComponent1751987197318,
    TraspasarEntreCuentasMismoTitularcontipodecambioComponent1751987197327,
    TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1751987197332,
    TraspasarEntreCuentasPropiasComponent1751987197341,
    TraspasarEntreCuentasPropiascontipodecambioComponent1751987197335,
    TraspasarEntreCuentasPropiasdiferentesmonedasComponent1751987197338,
    TraspasarEntreCuentasTercerosComponent1751987197351,
    TraspasarEntreCuentasTerceroscontipodecambioComponent1751987197345,
    TraspasarEntreCuentasTercerosdiferentesmonedasComponent1751987197348,
    ActualizarBeneficiariosComponent1751987197358,
    ObtenerBeneficiariosComponent1751987197367,
    ContratarComponent1751987197373,
    ContratarConFacultadesComponent1751987197383,
    ContratarSimulacionComponent1751987197393,
    ActualizarDocumentoDigitalComponent1751987197403,
    AsociarDocumentoDigitalComponent1751987197412,
    EliminarDocumentoDigitalComponent1751987197420,
    ObtenerDocumentoDigitalComponent1751987197429,
    ModificarCuentaDestinoalVencimientoComponent1751987197436,
    ModificarCuentaDestinodeAcreditacionPeriodicaComponent1751987197446,
    ModificarInstruccionComponent1751987197456,
    ObtenerAvanceComponent1751987197464,
    ObtenerDatosComponent1751987197474,
    ObtenerDatosPrecancelacionComponent1751987197484,
    ObtenerDocumentosDigitalesComponent1751987197493,
    ObtenerInstruccionComponent1751987197514,
    ObtenerInstruccionesHabilitadosComponent1751987197504,
    ObtenerMovimientosComponent1751987197523,
    ObtenerPeriodosHabilitadosComponent1751987197533,
    ObtenerProductosComponent1751987197543,
    ObtenerProductosHabilitadosComponent1751987197555,
    ObtenerTasadePrecancelacionComponent1751987197567,
    PrecancelarComponent1751987197575,
    SimularComponent1751987197585,
    SimularConCronogramaComponent1751987197596,
    ConfirmarListaComponent1751987197604,
    CrearListaComponent1751987197613,
    CrearListaChequesComponent1751987197622,
    ObtenerProductosComponent1751987197631,
    ObtenerTiposDeDesembolsoComponent1751987197639,
    SeleccionarOpcionDesembolsoComponent1751987197647,
    ObtenerAgrupadoresComponent1751987197656,
    ObtenerCierredeSaldosporMonedaComponent1751987197664,
    ObtenerCondicionesGeneralesComponent1751987197672,
    ObtenerIndicadoresComponent1751987197681,
    ObtenerMetodosMasEjecutadosComponent1751987197689,
    ObtenerMonedasIndicesComponent1751987197698,
    ObtenerRubrosBolsaComponent1751987197707,
    ObtenerServiciosMasEjecutadosComponent1751987197710,
    ObtenerSesionesPorUsuarioComponent1751987197714,
    ObtenerSucursalesCajasComponent1751987197717,
    ObtenerTransaccionesporEstadosComponent1751987197720,
    BuscarClienteComponent1751987197723,
    CompletarTareaComponent1751987197726,
    CrearSolicitudAmpliacionComponent1751987197730,
    CrearSolicitudIndividualComponent1751987197733,
    CrearSolicitudRenovacionComponent1751987197736,
    AgregarFiadorComponent1751987197739,
    EliminarFiadorComponent1751987197741,
    ActualizarGrupoComponent1751987197745,
    ActualizarIntegrantedeGrupoComponent1751987197748,
    AgregarGrupoComponent1751987197751,
    AgregarIntegranteaGrupoComponent1751987197754,
    CrearSolicitudGrupalComponent1751987197760,
    HabilitarIntegrantedeunGrupoComponent1751987197766,
    InhabilitarIntegrantedeunGrupoComponent1751987197769,
    ObtenerDetalleGrupoComponent1751987197772,
    ObtenerGruposComponent1751987197775,
    ObtenerIntegrantesdeGrupoComponent1751987197780,
    ObtenerTiposdeGrupoComponent1751987197783,
    ObtenerTiposdeIntegranteComponent1751987197786,
    SimularPrestamoAmortizableGrupalComponent1751987197789,
    ObtenerAsesoresComponent1751987197792,
    ObtenerCampanasComponent1751987197802,
    ObtenerDestinosCreditoComponent1751987197811,
    ObtenerOperacionesClienteComponent1751987197820,
    ObtenerOrigenesdeCaptacionComponent1751987197828,
    ObtenerProductosComponent1751987197838,
    ObtenerSolicitudesClienteComponent1751987197848,
    ObtenerTiposAvalComponent1751987197866,
    AgregarOperacionesaCancelarComponent1751987197873,
    ObtenerOperacionesaCancelarComponent1751987197884,
    QuitarOperacionesaCancelarComponent1751987197889,
    SimularLibreAmortizacionComponent1751987197892,
    SimularPrestamoAmortizableComponent1751987197897,
    SimularPrestamoPlazoFijoComponent1751987197900,
    ValidarPoliticasComponent1751987197903,
    ObtenerCantidadCuotasComponent1751987197905,
    ObtenerCapitalComponent1751987197907,
    ObtenerComisionesComponent1751987197909,
    ObtenerComisionesporCuotaComponent1751987197912,
    ObtenerDiasPrimerPeriodoComponent1751987197920,
    ObtenerPeriodoEntreCuotasComponent1751987197936,
    ObtenerPermiteSegurosdelMismoTipoComponent1751987197927,
    ObtenerPlazoComponent1751987197944,
    ObtenerRequiereSegurodeVidaObligatorioComponent1751987197953,
    ObtenerSegurosComponent1751987197963,
    ObtenerItemsModeloComponent1751987197971,
    ObtenerModelosPAEComponent1751987197979,
    ObtenerScoresComponent1751987197988,
    ObtenerTiposDeModelosComponent1751987197996,
    ContratarPrestamoComponent1751987198004,
    ContratarVehicularComponent1751987198013,
    CrearClienteComponent1751987198021,
    CrearPersonaClienteComponent1751987198029,
    ObtenerDatosdeUsuarioComponent1751987198037,
    ObtenerDetalledeOfertaAmortizableComponent1751987198046,
    ObtenerDetalleOfertaVehicularComponent1751987198056,
    ObtenerMarcasComponent1751987198065,
    ObtenerModelosComponent1751987198073,
    ObtenerPartnersComponent1751987198082,
    ObtenerPrestamosdeClienteComponent1751987198112,
    ObtenerProductosComponent1751987198092,
    ObtenerProductosdelPartnerComponent1751987198103,
    ObtenerPuntosdeVentaComponent1751987198122,
    ObtenerVendedoresComponent1751987198131,
    ObtenerVersionesComponent1751987198140,
    SimularOfertasComponent1751987198150,
    SimularOfertasVehicularComponent1751987198160,
    SimularPrestamoComponent1751987198171,
    SimularVehicularComponent1751987198181,
    ObtenerCorrelativoGuiaComponent1751987198189,
    ObtenerCorrelativoGuiaEspecialComponent1751987198198,
    ObtenerGuiadeProcesoComponent1751987198207,
    ObtenerGuiaEspecialdeProcesoComponent1751987198217,
    ObtenerOpcionGeneraldeProcesoComponent1751987198225,
    ObtenerOpcionGeneralPorModuloComponent1751987198236,
    ObtenerProgramaParticularComponent1751987198246,
    ActualizarComponent1751987198250,
    ActualizarCelularComponent1751987198254,
    ActualizarContactoComponent1751987198259,
    ActualizarConyugeComponent1751987198281,
    ActualizarCorreoElectronicoComponent1751987198272,
    ActualizarDomicilioComponent1751987198290,
    ActualizarFATCAComponent1751987198300,
    ActualizarInformacionAdicionalComponent1751987198309,
    ActualizarInformacionFinancieraComponent1751987198319,
    ActualizarIntegrantedePersonaJuridicaComponent1751987198328,
    ActualizarPersonaJuridicaComponent1751987198337,
    ActualizarProfesionComponent1751987198345,
    ActualizarReferenciaComponent1751987198353,
    ActualizarRegistroEmpleadoComponent1751987198361,
    ActualizarTelefonoComponent1751987198370,
    ActualizarVictimaHechoViolentoComponent1751987198379,
    ModificarDocumentoAdicionalComponent1751987198388,
    AgregaraListaNegraComponent1751987198397,
    AgregarContactoComponent1751987198406,
    AgregarCorreoElectronicoComponent1751987198415,
    AgregarDatosPEPComponent1751987198424,
    AgregarDocumentoAdicionalComponent1751987198433,
    AgregarDomicilioComponent1751987198442,
    AgregarEstadoFinancieroComponent1751987198452,
    AgregarFATCAComponent1751987198460,
    AgregarInformacionAdicionalComponent1751987198470,
    AgregarInformacionFinancieraComponent1751987198478,
    AgregarIntegranteaPersonaJuridicaComponent1751987198487,
    AgregarPersonaVinculadaComponent1751987198494,
    AgregarReferenciaComponent1751987198504,
    AgregarTelefonoComponent1751987198513,
    AgregarVictimaHechoViolentoComponent1751987198521,
    CrearComponent1751987198530,
    CrearConyugeComponent1751987198540,
    CrearPersonaJuridicaComponent1751987198543,
    CrearReducidoComponent1751987198548,
    ActualizarDocumentoDigitalComponent1751987198557,
    AsociarDocumentoDigitalComponent1751987198568,
    EliminarDocumentoDigitalComponent1751987198575,
    ObtenerDocumentoDigitalComponent1751987198584,
    ObtenerDocumentosDigitalesComponent1751987198587,
    EliminarConyugeComponent1751987198589,
    EliminarDocumentoAdicionalComponent1751987198597,
    EliminarDomicilioComponent1751987198605,
    EliminarInformacionAdicionalComponent1751987198608,
    EliminarIntegrantedePersonaJuridicaComponent1751987198612,
    EliminarPersonaVinculadaComponent1751987198620,
    EliminarProfesionComponent1751987198628,
    ObtenerComponent1751987198637,
    ObtenerConceptoComponent1751987198645,
    ObtenerContactosComponent1751987198654,
    ObtenerConyugeComponent1751987198680,
    ObtenerCorreosElectronicosComponent1751987198663,
    ObtenerCuentasClienteComponent1751987198671,
    ObtenerDatosPEPComponent1751987198688,
    ObtenerDocumentosAdicionalesComponent1751987198692,
    ObtenerDomiciliosComponent1751987198702,
    ObtenerEstadosCivilesComponent1751987198710,
    ObtenerFacultadesComponent1751987198720,
    ObtenerFATCAComponent1751987198729,
    ObtenerHobbiesComponent1751987198739,
    ObtenerHobbyComponent1751987198747,
    ObtenerIdBantotalComponent1751987198758,
    ObtenerIdentidadesdeGeneroComponent1751987198762,
    ObtenerIdentificadorUnicoComponent1751987198765,
    ObtenerInformacionAdicionalComponent1751987198773,
    ObtenerInformacionFinancieraComponent1751987198777,
    ObtenerIntegrantesPersonaJuridicaComponent1751987198780,
    ObtenerLimitesComponent1751987198783,
    ObtenerNaturalezasJuridicasComponent1751987198787,
    ObtenerNivelesEducativosComponent1751987198795,
    ObtenerOcupacionesComponent1751987198804,
    ObtenerPersonaJuridicaComponent1751987198812,
    ObtenerPersonasComponent1751987198822,
    ObtenerPersonasJuridicasComponent1751987198830,
    ObtenerPersonasVinculadasComponent1751987198839,
    ObtenerProfesionComponent1751987198856,
    ObtenerProfesionesComponent1751987198849,
    ObtenerReferenciasComponent1751987198865,
    ObtenerTarjetasdeDebitoComponent1751987198874,
    ObtenerTelefonosComponent1751987198883,
    ObtenerTipodePersonaComponent1751987198892,
    ObtenerTiposdeDocumentoComponent1751987198902,
    ObtenerTiposDeFuncionarioPublicoComponent1751987198911,
    ObtenerTiposDePEPComponent1751987198921,
    ObtenerTitularesDelTelefonoComponent1751987198929,
    ObtenerVictimaHechoViolentoComponent1751987198938,
    ObtenerVinculosComponent1751987198942,
    ObtenerVinculosdeAfinidadComponent1751987198953,
    ObtenerVinculosdeConsanguinidadComponent1751987198962,
    ObtenerVinculosJuridicosComponent1751987198965,
    EvaluarPAEComponent1751987198974,
    ValidarCorreoElectronicoComponent1751987198983,
    ValidarDocumentoComponent1751987198992,
    ValidarenListasNegrasComponent1751987199002,
    ValidarExistenciaComponent1751987199010,
    ValidarListasInhabilitadosComponent1751987199014,
    VerificarEmpleadoComponent1751987199023,
    ConvertirTasaAnualEfectivaaLinealComponent1751987199031,
    ConvertirTasaAnualLinealaEfectivaComponent1751987199040,
    ConvertirTasaMensualEfectivaaLinealComponent1751987199047,
    ConvertirTasaMensualLinealaEfectivaComponent1751987199056,
    ObtenerCotizacionComponent1751987199067,
    ObtenerCotizacionaFechaComponent1751987199076,
    ObtenerCotizacionCierreComponent1751987199089,
    ObtenerPizarraEspecialporTransaccionComponent1751987199098,
    ObtenerPrecioaFechaComponent1751987199108,
    ObtenerPrecioEspecieComponent1751987199118,
    ObtenerTasadeOperacionComponent1751987199124,
    ObtenerTasaParaClienteComponent1751987199135,
    ObtenerTasaParaProductoComponent1751987199142,
    ObtenerTipodeCambioComponent1751987199154,
    ObtenerTiposDeCambioEspecialesComponent1751987199162,
    CancelarComponent1751987199172,
    CancelaraFechaComponent1751987199182,
    CancelaraFechaTercerosComponent1751987199191,
    CancelarTercerosComponent1751987199200,
    ContratarComponent1751987199209,
    ContratarAmpliacionComponent1751987199220,
    ContratarRefinanciacionComponent1751987199230,
    ContratarRefinanciacionporDeudaTotalComponent1751987199236,
    ContratarRefinanciacionporSaldoCapitalComponent1751987199244,
    ActualizarDocumentoDigitalComponent1751987199254,
    AsociarDocumentoDigitalComponent1751987199265,
    EliminarDocumentoDigitalComponent1751987199272,
    ObtenerDocumentoDigitalComponent1751987199281,
    ObtenerDocumentosDigitalesComponent1751987199288,
    ObtenerCronogramaComponent1751987199296,
    ObtenerCronogramaaFechaComponent1751987199305,
    ObtenerCronogramaconPagosaFechaComponent1751987199314,
    ObtenerCronogramaenEspecieComponent1751987199324,
    ObtenerCronogramaOriginalComponent1751987199334,
    ObtenerCuentadeCobroComponent1751987199341,
    ObtenerDatosdelProximoVencimientoComponent1751987199349,
    ObtenerDetalleComponent1751987199356,
    ObtenerDetalleaFechaComponent1751987199365,
    ObtenerDetalledeCancelacionTotalComponent1751987199373,
    ObtenerDetalledeOfertaComponent1751987199384,
    ObtenerDetalledeOfertaAmortizableComponent1751987199395,
    ObtenerDetalledeOperacionesaRefinanciarComponent1751987199403,
    ObtenerDetalledePrestamoCanceladoComponent1751987199424,
    ObtenerDetallePagoPrestamoComponent1751987199456,
    ObtenerDetalleReducidoComponent1751987199470,
    ObtenerDetalleSimulacionComponent1751987199482,
    ObtenerDeudaComponent1751987199489,
    ObtenerDeudaPrestamoCastigadoComponent1751987199498,
    ObtenerDeudaVencidaComponent1751987199506,
    ObtenerFechadeIncumplimientoComponent1751987199514,
    ObtenerFechadeUltimoPagoComponent1751987199521,
    ObtenerFechasdePagoComponent1751987199531,
    ObtenerInformacionAdicionalComponent1751987199539,
    ObtenerMontodeCancelacionComponent1751987199548,
    ObtenerMotivosPrecancelacionComponent1751987199558,
    ObtenerPagosdeCuotaComponent1751987199567,
    ObtenerPagosdeunPrestamoComponent1751987199575,
    ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1751987199584,
    ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1751987199593,
    ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1751987199604,
    ObtenerProductosComponent1751987199612,
    ObtenerProductosRefinanciacionComponent1751987199621,
    ObtenerRefinanciacionSimuladaComponent1751987199629,
    AbonaraCuentaComponent1751987199638,
    ActualizarInformacionAdicionalComponent1751987199646,
    ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1751987199653,
    AgregarCuentadeCobroComponent1751987199660,
    AgregarInformacionAdicionalComponent1751987199668,
    EliminarCuentadeCobroComponent1751987199675,
    EliminarInformacionAdicionalComponent1751987199685,
    SolicitarPrecancelacionComponent1751987199696,
    AdelantarCapitalConReduccionDeCuotaComponent1751987199704,
    AdelantarCapitalConReduccionDePlazoComponent1751987199713,
    PagarCuotaComponent1751987199720,
    PagarCuotaaFechaComponent1751987199729,
    PagarCuotaaFechaTercerosComponent1751987199736,
    PagarCuotaTercerosComponent1751987199745,
    ResimularAmortizableComponent1751987199753,
    ResimularAmpliacionComponent1751987199762,
    ResimularRefinanciacionComponent1751987199769,
    SimularComponent1751987199777,
    SimularAmortizableComponent1751987199786,
    SimularAmortizableSinClienteComponent1751987199795,
    SimularAmpliacionComponent1751987199803,
    SimularAmpliacionIngresandoSegurosComponent1751987199812,
    SimularDespejandoCapitalyCantidaddeCuotasComponent1751987199820,
    SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1751987199829,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1751987199836,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1751987199843,
    SimularDespejandoFechadeVencimientoyTasaComponent1751987199852,
    SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1751987199860,
    SimularIngresandoBalloonComponent1751987199868,
    SimularIngresandoBalloonSinClienteComponent1751987199877,
    SimularIngresandoSegurosComponent1751987199887,
    SimularIngresandoSegurosSinClienteComponent1751987199897,
    SimularLibreAmortizacionComponent1751987199908,
    SimularLibreAmortizacionSinClienteComponent1751987199919,
    SimularOfertasComponent1751987199928,
    SimularPlazoFijoComponent1751987199937,
    SimularRefinanciacionComponent1751987199946,
    SimularRefinanciacionporDeudaTotalComponent1751987199954,
    SimularRefinanciacionporSaldoCapitalComponent1751987199963,
    ActualizarTextosComponent1751987199969,
    AgregarTextosComponent1751987199976,
    EliminarTextosComponent1751987199985,
    ObtenerTextosComponent1751987199994,
    EvaluarRegladeNegocioComponent1751987200008,
    ObtenerReglasdeNegocioComponent1751987200018,
    ObtenerVariablesReglaComponent1751987200026,
    ValidarDatosRegladeNegocioComponent1751987200036,
    AutorizarExcepcionComponent1751987200044,
    ObtenerDetalledeExcepcionComponent1751987200052,
    ObtenerExcepcionesComponent1751987200060,
    RechazarExcepcionComponent1751987200067,
    RegistrarDispositivoComponent1751987200074,
    ContratarSeguroComponent1751987200083,
    ObtenerMontosDeUnSeguroComponent1751987200090,
    ObtenerSegurosComponent1751987200098,
    ObtenerSegurosAPagarComponent1751987200106,
    PagarSeguroComponent1751987200114,
    ObtenerCodigosdeLimitesComponent1751987200158,
    ObtenerCuentaPreferencialComponent1751987200122,
    ObtenerCuentasaAsociarComponent1751987200130,
    ObtenerCuentasAsociadasComponent1751987200140,
    ObtenerCuentasAsociadasPorTipoComponent1751987200149,
    ObtenerDatosComponent1751987200167,
    ObtenerDatosContactoComponent1751987200175,
    ObtenerIdentificadorUnicoComponent1751987200184,
    ObtenerLimitesComponent1751987200192,
    ObtenerMovimientosComponent1751987200202,
    ObtenerTarjetaComponent1751987200210,
    ObtenerTarjetaHabienteComponent1751987200220,
    ObtenerTarjetasAdicionalesComponent1751987200229,
    ObtenerTiposdeCuentaComponent1751987200238,
    ActivarComponent1751987200247,
    ActualizarCuentaPreferencialComponent1751987200256,
    ActualizarDatosContactoComponent1751987200266,
    AsociarCuentaComponent1751987200272,
    BlanquearPinComponent1751987200281,
    BloquearComponent1751987200288,
    BloquearDesdeREDComponent1751987200296,
    CrearComponent1751987200305,
    CrearConCuentasAsociadasComponent1751987200317,
    DenunciarComponent1751987200325,
    DenunciarDesdeREDComponent1751987200336,
    DesbloquearComponent1751987200345,
    DesbloquearDesdeREDComponent1751987200353,
    EliminarCuentaAsociadaComponent1751987200362,
    ModificarLimiteComponent1751987200369,
    ComprarComponent1751987200378,
    ObtenerEstadoCompraComponent1751987200386,
    ObtenerGruposComponent1751987200394,
    ObtenerValoresComponent1751987200403,
    AgregarPerfilComponent1751987200413,
    CrearComponent1751987200421,
    EliminarPerfilComponent1751987200430,
    EliminarUsuarioComponent1751987200437,
    HabilitarEnCanalComponent1751987200446,
    HabilitarUsuarioComponent1751987200452,
    InhabilitarUsuarioComponent1751987200461,
    ModificarComponent1751987200469,
    ObtenerComponent1751987200478,
    ObtenerPerfilesComponent1751987200486,
    ObtenerUsuariosComponent1751987200495,
    ObtenerUsuariosParaPerfilComponent1751987200503,
    ObtenerMetadataDeTareaComponent1751987200512,
    ObtenerProcesosHabilitadosComponent1751987200522,
    ObtenerRolesComponent1751987200532,
    ObtenerRolesdeTareaComponent1751987200540,
    ObtenerTareasdeProcesoComponent1751987200550,
    //exports End page components
  ],

  providers: [SearchService],
})
export class ApiDocsModule {}
