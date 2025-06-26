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
import { ContratarSimulacionComponent1750945330910 } from './api-doc-page/Ahorro-Programado/Contratar/ContratarSimulacion.component';
import { CrearComponent1750945330924 } from './api-doc-page/Ahorro-Programado/Contratar/Crear.component';
import { SimularComponent1750945330931 } from './api-doc-page/Ahorro-Programado/Contratar/Simular.component';
import { ActualizarDocumentoDigitalComponent1750945330936 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750945330944 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750945330950 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750945330958 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750945330965 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ModificarCuentaDestinoComponent1750945330972 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarCuentaDestino.component';
import { ModificarCuentaOrigenComponent1750945330980 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarCuentaOrigen.component';
import { ModificarFechadeAbonoComponent1750945330986 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarFechadeAbono.component';
import { ModificarMetadeAhorroComponent1750945330994 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarMetadeAhorro.component';
import { ModificarMontodeAbonoComponent1750945331001 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarMontodeAbono.component';
import { ObtenerComponent1750945331010 } from './api-doc-page/Ahorro-Programado/Obtener/Obtener.component';
import { ObtenerCronogramaAbonosComponent1750945331019 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCronogramaAbonos.component';
import { ObtenerCuentasDestinoHabilitadasComponent1750945331028 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCuentasDestinoHabilitadas.component';
import { ObtenerCuentasOrigenHabilitadasComponent1750945331035 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCuentasOrigenHabilitadas.component';
import { ObtenerEstadodeCuentaComponent1750945331043 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerPeriodosHabilitadosComponent1750945331049 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerPeriodosHabilitados.component';
import { ObtenerPlazosHabilitadosComponent1750945331056 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerPlazosHabilitados.component';
import { ObtenerProductosComponent1750945331064 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerProductos.component';
import { AnularChequeElectronicoComponent1750945331072 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/AnularChequeElectronico.component';
import { AsignarIdaChequeElectronicoComponent1750945331079 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/AsignarIdaChequeElectronico.component';
import { CrearChequeraElectronicaComponent1750945331086 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/CrearChequeraElectronica.component';
import { DepositarChequeElectronicodeBancoPropioComponent1750945331094 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicodeBancoPropio.component';
import { DepositarChequeElectronicodeOtroBancoComponent1750945331103 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicodeOtroBanco.component';
import { DepositarChequeElectronicoenCustodiaComponent1750945331112 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicoenCustodia.component';
import { EmitirChequeElectronicoComponent1750945331121 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/EmitirChequeElectronico.component';
import { EmitirChequeElectronicodeChequeraComponent1750945331128 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/EmitirChequeElectronicodeChequera.component';
import { HabilitarChequeElectronicoComponent1750945331135 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/HabilitarChequeElectronico.component';
import { CrearAdhesionComponent1750945331142 } from './api-doc-page/AR - Argentina/SNP/CrearAdhesion.component';
import { CrearStopDebitComponent1750945331149 } from './api-doc-page/AR - Argentina/SNP/CrearStopDebit.component';
import { CrearStopDebitparaAdhesionconImporteComponent1750945331154 } from './api-doc-page/AR - Argentina/SNP/CrearStopDebitparaAdhesionconImporte.component';
import { EliminarStopDebitComponent1750945331160 } from './api-doc-page/AR - Argentina/SNP/EliminarStopDebit.component';
import { ObtenerAdhesionesComponent1750945331168 } from './api-doc-page/AR - Argentina/SNP/ObtenerAdhesiones.component';
import { ObtenerDebitosComponent1750945331177 } from './api-doc-page/AR - Argentina/SNP/ObtenerDebitos.component';
import { ObtenerEmpresasOriginantesComponent1750945331183 } from './api-doc-page/AR - Argentina/SNP/ObtenerEmpresasOriginantes.component';
import { ObtenerStopDebitsComponent1750945331192 } from './api-doc-page/AR - Argentina/SNP/ObtenerStopDebits.component';
import { ReversarDebitosComponent1750945331199 } from './api-doc-page/AR - Argentina/SNP/ReversarDebitos.component';
import { SolicitarBajadeAdhesionComponent1750945331204 } from './api-doc-page/AR - Argentina/SNP/SolicitarBajadeAdhesion.component';
import { AutenticacionComponent1750945331214 } from './api-doc-page/Autenticación/Autenticacion.component';
import { ObtenerDetalledeEjecucionComponent1750945331218 } from './api-doc-page/Cadena-de-Cierre/ObtenerDetalledeEjecucion.component';
import { ObtenerDetalledeProcesoComponent1750945331223 } from './api-doc-page/Cadena-de-Cierre/ObtenerDetalledeProceso.component';
import { ObtenerProcesosconErrorComponent1750945331230 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosconError.component';
import { ObtenerProcesosCriticosComponent1750945331238 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosCriticos.component';
import { ObtenerProcesosDiariosComponent1750945331244 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosDiarios.component';
import { ObtenerProcesosMensualesComponent1750945331251 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosMensuales.component';
import { ObtenerProcesosReprocesablesComponent1750945331262 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosReprocesables.component';
import { VerificarEstadoServidorComponent1750945331267 } from './api-doc-page/Cadena-de-Cierre/VerificarEstadoServidor.component';
import { CalcularFechadeVencimientoComponent1750945331275 } from './api-doc-page/Calendarios/Calcular/CalcularFechadeVencimiento.component';
import { CalcularFechadeVencimientoenDiasHabilesComponent1750945331281 } from './api-doc-page/Calendarios/Calcular/CalcularFechadeVencimientoenDiasHabiles.component';
import { CalcularPlazoComponent1750945331287 } from './api-doc-page/Calendarios/Calcular/CalcularPlazo.component';
import { CalcularPlazoenDiasHabilesComponent1750945331294 } from './api-doc-page/Calendarios/Calcular/CalcularPlazoenDiasHabiles.component';
import { ObtenerFechaHabilComponent1750945331300 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabil.component';
import { ObtenerFechaHabilAnteriorComponent1750945331308 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabilAnterior.component';
import { ObtenerFechaHabilAnteriordeSucursalComponent1750945331314 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabilAnteriordeSucursal.component';
import { ObtenerFechaHabildeSucursalComponent1750945331323 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabildeSucursal.component';
import { ObtenerInicioyFindeMesComponent1750945331331 } from './api-doc-page/Calendarios/Obtener/ObtenerInicioyFindeMes.component';
import { ObtenerInicioyFindeMesdeSucursalComponent1750945331337 } from './api-doc-page/Calendarios/Obtener/ObtenerInicioyFindeMesdeSucursal.component';
import { ObtenerProximaFechaHabilComponent1750945331345 } from './api-doc-page/Calendarios/Obtener/ObtenerProximaFechaHabil.component';
import { ObtenerProximaFechaHabildeSucursalComponent1750945331351 } from './api-doc-page/Calendarios/Obtener/ObtenerProximaFechaHabildeSucursal.component';
import { AutorizarArchivoComponent1750945331359 } from './api-doc-page/CASH-Management/Archivo/AutorizarArchivo.component';
import { CargarArchivoComponent1750945331366 } from './api-doc-page/CASH-Management/Archivo/CargarArchivo.component';
import { CargarArchivoRecibidoComoDatoComponent1750945331374 } from './api-doc-page/CASH-Management/Archivo/CargarArchivoRecibidoComoDato.component';
import { DetenerArchivoComponent1750945331380 } from './api-doc-page/CASH-Management/Archivo/DetenerArchivo.component';
import { RechazarArchivoComponent1750945331387 } from './api-doc-page/CASH-Management/Archivo/RechazarArchivo.component';
import { CargarBeneficiariosComponent1750945331396 } from './api-doc-page/CASH-Management/Beneficiarios/CargarBeneficiarios.component';
import { IngresarBeneficiarioComponent1750945331402 } from './api-doc-page/CASH-Management/Beneficiarios/IngresarBeneficiario.component';
import { ObtenerBeneficiarioSegunFiltroComponent1750945331409 } from './api-doc-page/CASH-Management/Beneficiarios/ObtenerBeneficiarioSegunFiltro.component';
import { AltaAutomaticaContratoComponent1750945331416 } from './api-doc-page/CASH-Management/Contratar/AltaAutomaticaContrato.component';
import { CargarServiciosDisponiblesComponent1750945331421 } from './api-doc-page/CASH-Management/Contratar/CargarServiciosDisponibles.component';
import { ContratarDebitoAutomaticoComponent1750945331429 } from './api-doc-page/CASH-Management/Contratar/ContratarDebitoAutomatico.component';
import { ObtenerDetalledeOrdendeCuentaComponent1750945331437 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalledeOrdendeCuenta.component';
import { ObtenerDetalledePagoComponent1750945331446 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalledePago.component';
import { ObtenerDetalleOrdenSegunCampoComponent1750945331453 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalleOrdenSegunCampo.component';
import { ObtenerDetallePagoOrdenComponent1750945331461 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetallePagoOrden.component';
import { ObtenerDeudaComponent1750945331467 } from './api-doc-page/CASH-Management/Obtener/ObtenerDeuda.component';
import { ObtenerResumenOrdenComponent1750945331474 } from './api-doc-page/CASH-Management/Obtener/ObtenerResumenOrden.component';
import { ObtenerServiciosComponent1750945331480 } from './api-doc-page/CASH-Management/Obtener/ObtenerServicios.component';
import { ObtenerValoresOrdenComponent1750945331486 } from './api-doc-page/CASH-Management/Obtener/ObtenerValoresOrden.component';
import { ObtenerValoresOrdenSegunCampoComponent1750945331493 } from './api-doc-page/CASH-Management/Obtener/ObtenerValoresOrdenSegunCampo.component';
import { AutorizarOrdenComponent1750945331500 } from './api-doc-page/CASH-Management/Orden/AutorizarOrden.component';
import { DetenerOrdenComponent1750945331506 } from './api-doc-page/CASH-Management/Orden/DetenerOrden.component';
import { IngresarOrdenPagoComponent1750945331515 } from './api-doc-page/CASH-Management/Orden/IngresarOrdenPago.component';
import { ProcesarOrdenComponent1750945331520 } from './api-doc-page/CASH-Management/Orden/ProcesarOrden.component';
import { RechazarOrdenComponent1750945331527 } from './api-doc-page/CASH-Management/Orden/RechazarOrden.component';
import { AnularPagoDeudaComponent1750945331533 } from './api-doc-page/CASH-Management/Pagos/AnularPagoDeuda.component';
import { PagarDeudaDesdeCuentaComponent1750945331538 } from './api-doc-page/CASH-Management/Pagos/PagarDeudaDesdeCuenta.component';
import { RegistrarPagoDeudaComponent1750945331544 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoDeuda.component';
import { RegistrarPagoEnLineaComponent1750945331550 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoEnLinea.component';
import { RegistrarPagoEnLineaDesdeCuentaComponent1750945331557 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoEnLineaDesdeCuenta.component';
import { VisualizarListaResumenCabezalComponent1750945331563 } from './api-doc-page/CASH-Management/Visualizar/VisualizarListaResumenCabezal.component';
import { VisualizarListaResumenCabezalOrdenComponent1750945331568 } from './api-doc-page/CASH-Management/Visualizar/VisualizarListaResumenCabezalOrden.component';
import { VisualizarOrdendeArchivoParaCuentaComponent1750945331576 } from './api-doc-page/CASH-Management/Visualizar/VisualizarOrdendeArchivoParaCuenta.component';
import { VisualizarResultadoProcesamientoComponent1750945331581 } from './api-doc-page/CASH-Management/Visualizar/VisualizarResultadoProcesamiento.component';
import { VisualizarResumenCabezalComponent1750945331586 } from './api-doc-page/CASH-Management/Visualizar/VisualizarResumenCabezal.component';
import { VisualizarSituacionArchivosComponent1750945331595 } from './api-doc-page/CASH-Management/Visualizar/VisualizarSituacionArchivos.component';
import { VisualizarSituacionLineasComponent1750945331600 } from './api-doc-page/CASH-Management/Visualizar/VisualizarSituacionLineas.component';
import { ActualizarComponent1750945331615 } from './api-doc-page/Clientes/Actualizar/Actualizar.component';
import { ActualizarDocumentoDigitalComponent1750945331623 } from './api-doc-page/Clientes/Actualizar/ActualizarDocumentoDigital.component';
import { ActualizarDomicilioComponent1750945331631 } from './api-doc-page/Clientes/Actualizar/ActualizarDomicilio.component';
import { ActualizarInformacionAdicionalComponent1750945331641 } from './api-doc-page/Clientes/Actualizar/ActualizarInformacionAdicional.component';
import { ActualizarRegistroEmpleadoComponent1750945331648 } from './api-doc-page/Clientes/Actualizar/ActualizarRegistroEmpleado.component';
import { ActualizarTelefonoComponent1750945331658 } from './api-doc-page/Clientes/Actualizar/ActualizarTelefono.component';
import { AgregarDomicilioComponent1750945331665 } from './api-doc-page/Clientes/Actualizar/AgregarDomicilio.component';
import { AgregarInformacionAdicionalComponent1750945331677 } from './api-doc-page/Clientes/Actualizar/AgregarInformacionAdicional.component';
import { AgregarIntegranteComponent1750945331683 } from './api-doc-page/Clientes/Actualizar/AgregarIntegrante.component';
import { AgregarTelefonoComponent1750945331690 } from './api-doc-page/Clientes/Actualizar/AgregarTelefono.component';
import { AsociarDocumentoDigitalComponent1750945331696 } from './api-doc-page/Clientes/Actualizar/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750945331702 } from './api-doc-page/Clientes/Actualizar/EliminarDocumentoDigital.component';
import { EliminarDomicilioComponent1750945331709 } from './api-doc-page/Clientes/Actualizar/EliminarDomicilio.component';
import { EliminarInformacionAdicionalComponent1750945331714 } from './api-doc-page/Clientes/Actualizar/EliminarInformacionAdicional.component';
import { EliminarIntegranteComponent1750945331720 } from './api-doc-page/Clientes/Actualizar/EliminarIntegrante.component';
import { HabilitarComponent1750945331728 } from './api-doc-page/Clientes/Actualizar/Habilitar.component';
import { InhabilitarComponent1750945331734 } from './api-doc-page/Clientes/Actualizar/Inhabilitar.component';
import { ModificarEjecutivoComponent1750945331742 } from './api-doc-page/Clientes/Actualizar/ModificarEjecutivo.component';
import { CrearComponent1750945331749 } from './api-doc-page/Clientes/Crear/Crear.component';
import { CrearconPersonaExistenteComponent1750945331758 } from './api-doc-page/Clientes/Crear/CrearconPersonaExistente.component';
import { CrearParaPersonaJuridicaComponent1750945331764 } from './api-doc-page/Clientes/Crear/CrearParaPersonaJuridica.component';
import { ObtenerComponent1750945331770 } from './api-doc-page/Clientes/Obtener/Obtener.component';
import { ObtenerAhorrosProgramadosComponent1750945331778 } from './api-doc-page/Clientes/Obtener/ObtenerAhorrosProgramados.component';
import { ObtenerBolsillosComponent1750945331787 } from './api-doc-page/Clientes/Obtener/ObtenerBolsillos.component';
import { ObtenerClasificacionesInternasComponent1750945331796 } from './api-doc-page/Clientes/Obtener/ObtenerClasificacionesInternas.component';
import { ObtenerCuentaClienteComponent1750945331802 } from './api-doc-page/Clientes/Obtener/ObtenerCuentaCliente.component';
import { ObtenerCuentasCorrientesSaldoContableComponent1750945331811 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasCorrientesSaldoContable.component';
import { ObtenerCuentasCorrientesSaldoDisponibleComponent1750945331818 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasCorrientesSaldoDisponible.component';
import { ObtenerCuentasdeAhorroSaldoContableComponent1750945331825 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasdeAhorroSaldoContable.component';
import { ObtenerCuentasdeAhorroSaldoDisponibleComponent1750945331835 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasdeAhorroSaldoDisponible.component';
import { ObtenerDatosComponent1750945331842 } from './api-doc-page/Clientes/Obtener/ObtenerDatos.component';
import { ObtenerDetallePosicionComponent1750945331848 } from './api-doc-page/Clientes/Obtener/ObtenerDetallePosicion.component';
import { ObtenerDocumentoDigitalComponent1750945331854 } from './api-doc-page/Clientes/Obtener/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750945331860 } from './api-doc-page/Clientes/Obtener/ObtenerDocumentosDigitales.component';
import { ObtenerDomiciliosComponent1750945331867 } from './api-doc-page/Clientes/Obtener/ObtenerDomicilios.component';
import { ObtenerFacultadesComponent1750945331873 } from './api-doc-page/Clientes/Obtener/ObtenerFacultades.component';
import { ObtenerIdentificadorUnicoComponent1750945331880 } from './api-doc-page/Clientes/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerInformacionAdicionalComponent1750945331886 } from './api-doc-page/Clientes/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerIntegrantesComponent1750945331893 } from './api-doc-page/Clientes/Obtener/ObtenerIntegrantes.component';
import { ObtenerLimitesComponent1750945331899 } from './api-doc-page/Clientes/Obtener/ObtenerLimites.component';
import { ObtenerMotivosInhabilitacionComponent1750945331907 } from './api-doc-page/Clientes/Obtener/ObtenerMotivosInhabilitacion.component';
import { ObtenerPerfilComponent1750945331916 } from './api-doc-page/Clientes/Obtener/ObtenerPerfil.component';
import { ObtenerPlazosFijosComponent1750945331924 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijos.component';
import { ObtenerPlazosFijosCanceladosComponent1750945331932 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijosCancelados.component';
import { ObtenerPlazosFijosconAvanceComponent1750945331939 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijosconAvance.component';
import { ObtenerPosicionComponent1750945331946 } from './api-doc-page/Clientes/Obtener/ObtenerPosicion.component';
import { ObtenerPrestamosComponent1750945331955 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamos.component';
import { ObtenerPrestamosCanceladosComponent1750945331962 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosCancelados.component';
import { ObtenerPrestamosCastigadosComponent1750945331970 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosCastigados.component';
import { ObtenerPrestamosconAvanceComponent1750945331979 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosconAvance.component';
import { ObtenerResumendeProductosCierredeanoComponent1750945331986 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosCierredeano.component';
import { ObtenerResumendeProductosSaldosContablesComponent1750945331994 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosSaldosContables.component';
import { ObtenerResumendeProductosSaldosDisponiblesComponent1750945332001 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosSaldosDisponibles.component';
import { ObtenerResumenporProductoaCierreAnoComponent1750945332008 } from './api-doc-page/Clientes/Obtener/ObtenerResumenporProductoaCierreAno.component';
import { ObtenerRiesgodeCreditoComponent1750945332015 } from './api-doc-page/Clientes/Obtener/ObtenerRiesgodeCredito.component';
import { ObtenerSaldosdeOtrosProductosComponent1750945332022 } from './api-doc-page/Clientes/Obtener/ObtenerSaldosdeOtrosProductos.component';
import { ObtenerSectoresComponent1750945332029 } from './api-doc-page/Clientes/Obtener/ObtenerSectores.component';
import { ObtenerSegmentosComponent1750945332034 } from './api-doc-page/Clientes/Obtener/ObtenerSegmentos.component';
import { ObtenerTarjetasdeDebitoComponent1750945332041 } from './api-doc-page/Clientes/Obtener/ObtenerTarjetasdeDebito.component';
import { ObtenerTelefonosComponent1750945332049 } from './api-doc-page/Clientes/Obtener/ObtenerTelefonos.component';
import { ObtenerTiposdeIntegracionComponent1750945332055 } from './api-doc-page/Clientes/Obtener/ObtenerTiposdeIntegracion.component';
import { ObtenerTitularRepresentativoComponent1750945332064 } from './api-doc-page/Clientes/Obtener/ObtenerTitularRepresentativo.component';
import { ObtenerTitulosComponent1750945332070 } from './api-doc-page/Clientes/Obtener/ObtenerTitulos.component';
import { ValidarExistenciaComponent1750945332076 } from './api-doc-page/Clientes/Validar/ValidarExistencia.component';
import { VerificarEmpleadoComponent1750945332083 } from './api-doc-page/Clientes/Validar/VerificarEmpleado.component';
import { ObtenerAgenciasBancoComponent1750945332091 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerAgenciasBanco.component';
import { ObtenerBancosComponent1750945332098 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerBancos.component';
import { ObtenerDetalleSucursalComponent1750945332106 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerDetalleSucursal.component';
import { ObtenerSucursalesPrincipalesComponent1750945332113 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerSucursalesPrincipales.component';
import { ObtenerActividadesComponent1750945332121 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerActividades.component';
import { ObtenerActividadesporTipoComponent1750945332128 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerActividadesporTipo.component';
import { ObtenerEjecutivosComponent1750945332134 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerEjecutivos.component';
import { ObtenerTiposdeActividadComponent1750945332142 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerTiposdeActividad.component';
import { ObtenerTiposdeTarjetaComponent1750945332147 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerTiposdeTarjeta.component';
import { ObtenerImpuestosComponent1750945332152 } from './api-doc-page/Configuración-Bantotal/ObtenerImpuestos.component';
import { ObtenerTiposdeDocumentoDigitalComponent1750945332160 } from './api-doc-page/Configuración-Bantotal/ObtenerTiposdeDocumentoDigital.component';
import { ObtenerEstadosComponent1750945332165 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerEstados.component';
import { ObtenerInstruccionesComponent1750945332170 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerInstrucciones.component';
import { ObtenerPaquetesComponent1750945332177 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerPaquetes.component';
import { ObtenerTiposdeTextoComponent1750945332183 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerTiposdeTexto.component';
import { ObtenerCalendariodeSucursalComponent1750945332190 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerCalendariodeSucursal.component';
import { ObtenerCalendariosComponent1750945332197 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerCalendarios.component';
import { ObtenerDetalledeCalendarioComponent1750945332202 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDetalledeCalendario.component';
import { ObtenerDetalledeCalendariodeSucursalComponent1750945332209 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDetalledeCalendariodeSucursal.component';
import { ObtenerDolarUSAComponent1750945332215 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDolarUSA.component';
import { ObtenerEmpresaComponent1750945332220 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerEmpresa.component';
import { ObtenerFechadeSistemaComponent1750945332227 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerFechadeSistema.component';
import { ObtenerMonedaNacionalComponent1750945332232 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerMonedaNacional.component';
import { ObtenerMonedasComponent1750945332239 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerMonedas.component';
import { ObtenerSucursalesComponent1750945332245 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerSucursales.component';
import { ObtenerAgrupadoresDomicilioComponent1750945332253 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerAgrupadoresDomicilio.component';
import { ObtenerBarriosyColoniasComponent1750945332261 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerBarriosyColonias.component';
import { ObtenerCiudadesyLocalidadesComponent1750945332268 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerCiudadesyLocalidades.component';
import { ObtenerCodigosdeDomicilioComponent1750945332276 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerCodigosdeDomicilio.component';
import { ObtenerEstadosProvinciasyDepartamentosComponent1750945332284 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerEstadosProvinciasyDepartamentos.component';
import { ObtenerPaisesComponent1750945332292 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerPaises.component';
import { ObtenerTiposdeListasNegrasComponent1750945332298 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeListasNegras.component';
import { ObtenerTiposdeTelefonoComponent1750945332305 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeTelefono.component';
import { ObtenerTiposdeViviendaComponent1750945332311 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeVivienda.component';
import { ObtenerPizarraporModuloComponent1750945332316 } from './api-doc-page/Configuración-Bantotal/Precios/ObtenerPizarraporModulo.component';
import { ObtenerPizarrasComponent1750945332323 } from './api-doc-page/Configuración-Bantotal/Precios/ObtenerPizarras.component';
import { ObtenerMenusComponent1750945332329 } from './api-doc-page/Configuración-Bantotal/Seguridad/ObtenerMenus.component';
import { ObtenerPerfilesComponent1750945332334 } from './api-doc-page/Configuración-Bantotal/Seguridad/ObtenerPerfiles.component';
import { AgregarTextoAsientoComponent1750945332342 } from './api-doc-page/Contabilidad/Agregar-Texto/AgregarTextoAsiento.component';
import { AgregarTextoOrdinalComponent1750945332347 } from './api-doc-page/Contabilidad/Agregar-Texto/AgregarTextoOrdinal.component';
import { AnularMovimientoComponent1750945332352 } from './api-doc-page/Contabilidad/AnularMovimiento.component';
import { ActualizarCondicionImpositivaComponent1750945332359 } from './api-doc-page/Contabilidad/Condición-Impositiva/ActualizarCondicionImpositiva.component';
import { CrearCondicionImpositivaComponent1750945332364 } from './api-doc-page/Contabilidad/Condición-Impositiva/CrearCondicionImpositiva.component';
import { ObtenerIdBantotalMovimientoComponent1750945332369 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalMovimiento.component';
import { ObtenerIdBantotalOperacionComponent1750945332379 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalOperacion.component';
import { ObtenerIdBantotalProductoComponent1750945332386 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalProducto.component';
import { ObtenerIdentificadorUnicodeMovimientoComponent1750945332393 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeMovimiento.component';
import { ObtenerIdentificadorUnicodeOperacionComponent1750945332400 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeOperacion.component';
import { ObtenerIdentificadorUnicodeProductoComponent1750945332406 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeProducto.component';
import { ObtenerClientedeunaOperacionComponent1750945332413 } from './api-doc-page/Contabilidad/Obtener/ObtenerClientedeunaOperacion.component';
import { ObtenerCondicionImpositivaComponent1750945332419 } from './api-doc-page/Contabilidad/Obtener/ObtenerCondicionImpositiva.component';
import { ObtenerDetalledeMovimientoComponent1750945332426 } from './api-doc-page/Contabilidad/Obtener/ObtenerDetalledeMovimiento.component';
import { ObtenerDetalledeOrdinalComponent1750945332433 } from './api-doc-page/Contabilidad/Obtener/ObtenerDetalledeOrdinal.component';
import { ObtenerIntegrantesdeOperacionComponent1750945332440 } from './api-doc-page/Contabilidad/Obtener/ObtenerIntegrantesdeOperacion.component';
import { ObtenerTextosdeMovimientoComponent1750945332447 } from './api-doc-page/Contabilidad/Obtener/ObtenerTextosdeMovimiento.component';
import { RegistrarAsientoComponent1750945332452 } from './api-doc-page/Contabilidad/Registrar-Asiento/RegistrarAsiento.component';
import { RegistrarAsientoFechaValorComponent1750945332460 } from './api-doc-page/Contabilidad/Registrar-Asiento/RegistrarAsientoFechaValor.component';
import { CancelarComponent1750945332466 } from './api-doc-page/Cuentas-Bolsillo/Cancelar.component';
import { CashInComponent1750945332473 } from './api-doc-page/Cuentas-Bolsillo/CashIn.component';
import { CashOutComponent1750945332479 } from './api-doc-page/Cuentas-Bolsillo/CashOut.component';
import { ContratarComponent1750945332484 } from './api-doc-page/Cuentas-Bolsillo/Contratar.component';
import { ObtenerDatosComponent1750945332491 } from './api-doc-page/Cuentas-Bolsillo/ObtenerDatos.component';
import { ObtenerMovimientosComponent1750945332500 } from './api-doc-page/Cuentas-Bolsillo/ObtenerMovimientos.component';
import { ObtenerProductosComponent1750945332508 } from './api-doc-page/Cuentas-Bolsillo/ObtenerProductos.component';
import { ObtenerProductosCVComponent1750945332521 } from './api-doc-page/Cuentas-Bolsillo/ObtenerProductosCV.component';
import { ObtenerChequeraComponent1750945332556 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequera.component';
import { ObtenerChequerasComponent1750945332563 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequeras.component';
import { ObtenerChequesdeChequeraComponent1750945332573 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequesdeChequera.component';
import { ObtenerComisionChequeraComponent1750945332579 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerComisionChequera.component';
import { ObtenerEstadodeChequeraComponent1750945332585 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerEstadodeChequera.component';
import { ObtenerSolicitudesdeChequerasComponent1750945332592 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerSolicitudesdeChequeras.component';
import { ObtenerTiposdeChequeraComponent1750945332598 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerTiposdeChequera.component';
import { ObtenerTiposdeChequeraporProductoComponent1750945332605 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerTiposdeChequeraporProducto.component';
import { EliminarChequeraComponent1750945332612 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/EliminarChequera.component';
import { RegistrarOrdendeNoPagodeChequeraComponent1750945332620 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/RegistrarOrdendeNoPagodeChequera.component';
import { RegistrarOrdendeNoPagodeChequesComponent1750945332628 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/RegistrarOrdendeNoPagodeCheques.component';
import { SolicitarChequeraComponent1750945332635 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/SolicitarChequera.component';
import { ContratarconPeriodicidadComponent1750945332640 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarconPeriodicidad.component';
import { ContratarProductoComponent1750945332649 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarProducto.component';
import { ContratarProductoconAltadeFacultadesComponent1750945332655 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarProductoconAltadeFacultades.component';
import { ObtenerAcuerdosComponent1750945332663 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerAcuerdos.component';
import { ObtenerDatosComponent1750945332672 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerDatos.component';
import { ObtenerEstadodeCuentaComponent1750945332681 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerEvoluciondeSaldosComponent1750945332689 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerEvoluciondeSaldos.component';
import { ObtenerProductosComponent1750945332696 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerProductos.component';
import { ContratarconPeriodicidadComponent1750945332703 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarconPeriodicidad.component';
import { ContratarProductoComponent1750945332710 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarProducto.component';
import { ContratarProductoconAltadeFacultadesComponent1750945332716 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarProductoconAltadeFacultades.component';
import { ObtenerDatosComponent1750945332723 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerDatos.component';
import { ObtenerEstadodeCuentaComponent1750945332731 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerEvoluciondeSaldosComponent1750945332735 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerEvoluciondeSaldos.component';
import { ObtenerProductosComponent1750945332742 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerProductos.component';
import { ActualizarBeneficiariosComponent1750945332747 } from './api-doc-page/Cuentas-Vista/Beneficiarios/ActualizarBeneficiarios.component';
import { ObtenerBeneficiariosComponent1750945332752 } from './api-doc-page/Cuentas-Vista/Beneficiarios/ObtenerBeneficiarios.component';
import { ActualizarDocumentoDigitalComponent1750945332760 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750945332766 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750945332774 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750945332782 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750945332789 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ObtenerBolsillosComponent1750945332796 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerBolsillos.component';
import { ObtenerCBUdeCuentaVistaComponent1750945332802 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerCBUdeCuentaVista.component';
import { ObtenerCuentaVistadeCBUComponent1750945332808 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerCuentaVistadeCBU.component';
import { ObtenerDetalleBloqueoComponent1750945332815 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerDetalleBloqueo.component';
import { ObtenerEstadodeCuentaporPeriodoComponent1750945332821 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerEstadodeCuentaporPeriodo.component';
import { ObtenerEstadoDeOperacionComponent1750945332828 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerEstadoDeOperacion.component';
import { ObtenerFacultadesComponent1750945332833 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerFacultades.component';
import { ObtenerPaqueteComponent1750945332841 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPaquete.component';
import { ObtenerPeriododeAcreditacionComponent1750945332856 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPeriododeAcreditacion.component';
import { ObtenerPeriodosdeAcreditacionComponent1750945332849 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPeriodosdeAcreditacion.component';
import { ObtenerSaldoBloqueadoComponent1750945332865 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldoBloqueado.component';
import { ObtenerSaldoDisponibleComponent1750945332872 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldoDisponible.component';
import { ObtenerSaldosBloqueadosComponent1750945332881 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldosBloqueados.component';
import { AcreditarEnCuentaComponent1750945332888 } from './api-doc-page/Cuentas-Vista/Operar/AcreditarEnCuenta.component';
import { ActivarComponent1750945332896 } from './api-doc-page/Cuentas-Vista/Operar/Activar.component';
import { ActualizarPeriododeAcreditacionComponent1750945332903 } from './api-doc-page/Cuentas-Vista/Operar/ActualizarPeriododeAcreditacion.component';
import { BloquearSaldoComponent1750945332910 } from './api-doc-page/Cuentas-Vista/Operar/BloquearSaldo.component';
import { CancelarComponent1750945332916 } from './api-doc-page/Cuentas-Vista/Operar/Cancelar.component';
import { DebitarEnCuentaComponent1750945332921 } from './api-doc-page/Cuentas-Vista/Operar/DebitarEnCuenta.component';
import { DesbloquearSaldoComponent1750945332928 } from './api-doc-page/Cuentas-Vista/Operar/DesbloquearSaldo.component';
import { ActualizarPerfilTransaccionalComponent1750945332936 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/ActualizarPerfilTransaccional.component';
import { AgregarPerfilTransaccionalComponent1750945332943 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/AgregarPerfilTransaccional.component';
import { ObtenerPerfilTransaccionalComponent1750945332949 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/ObtenerPerfilTransaccional.component';
import { TraspasarConTipoDeCambioEspecialComponent1750945332955 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarConTipoDeCambioEspecial.component';
import { TraspasarEntreCuentasdelaMismaPersonaComponent1750945332964 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasdelaMismaPersona.component';
import { TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750945332971 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasMismoTitularcontipodecambio.component';
import { TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750945332980 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasMismoTitulardiferentesmonedas.component';
import { TraspasarEntreCuentasPropiasComponent1750945333002 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropias.component';
import { TraspasarEntreCuentasPropiascontipodecambioComponent1750945332986 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropiascontipodecambio.component';
import { TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750945332996 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropiasdiferentesmonedas.component';
import { TraspasarEntreCuentasTercerosComponent1750945333025 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTerceros.component';
import { TraspasarEntreCuentasTerceroscontipodecambioComponent1750945333010 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTerceroscontipodecambio.component';
import { TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750945333018 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTercerosdiferentesmonedas.component';
import { ActualizarBeneficiariosComponent1750945333031 } from './api-doc-page/Depósitos-a-Plazo/Beneficiarios/ActualizarBeneficiarios.component';
import { ObtenerBeneficiariosComponent1750945333038 } from './api-doc-page/Depósitos-a-Plazo/Beneficiarios/ObtenerBeneficiarios.component';
import { ContratarComponent1750945333048 } from './api-doc-page/Depósitos-a-Plazo/Contratar/Contratar.component';
import { ContratarConFacultadesComponent1750945333056 } from './api-doc-page/Depósitos-a-Plazo/Contratar/ContratarConFacultades.component';
import { ContratarSimulacionComponent1750945333063 } from './api-doc-page/Depósitos-a-Plazo/Contratar/ContratarSimulacion.component';
import { ActualizarDocumentoDigitalComponent1750945333069 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750945333078 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750945333085 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750945333091 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ModificarCuentaDestinoalVencimientoComponent1750945333099 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarCuentaDestinoalVencimiento.component';
import { ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750945333107 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarCuentaDestinodeAcreditacionPeriodica.component';
import { ModificarInstruccionComponent1750945333114 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarInstruccion.component';
import { ObtenerAvanceComponent1750945333124 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerAvance.component';
import { ObtenerDatosComponent1750945333132 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDatos.component';
import { ObtenerDatosPrecancelacionComponent1750945333141 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDatosPrecancelacion.component';
import { ObtenerDocumentosDigitalesComponent1750945333148 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDocumentosDigitales.component';
import { ObtenerInstruccionComponent1750945333162 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerInstruccion.component';
import { ObtenerInstruccionesHabilitadosComponent1750945333155 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerInstruccionesHabilitados.component';
import { ObtenerMovimientosComponent1750945333167 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerMovimientos.component';
import { ObtenerPeriodosHabilitadosComponent1750945333173 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerPeriodosHabilitados.component';
import { ObtenerProductosComponent1750945333178 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerProductos.component';
import { ObtenerProductosHabilitadosComponent1750945333189 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerProductosHabilitados.component';
import { ObtenerTasadePrecancelacionComponent1750945333197 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerTasadePrecancelacion.component';
import { PrecancelarComponent1750945333207 } from './api-doc-page/Depósitos-a-Plazo/Precancelar.component';
import { SimularComponent1750945333214 } from './api-doc-page/Depósitos-a-Plazo/Simular/Simular.component';
import { SimularConCronogramaComponent1750945333227 } from './api-doc-page/Depósitos-a-Plazo/Simular/SimularConCronograma.component';
import { ConfirmarListaComponent1750945333233 } from './api-doc-page/Descuento-de-Documentos/ConfirmarLista.component';
import { CrearListaComponent1750945333238 } from './api-doc-page/Descuento-de-Documentos/CrearLista.component';
import { CrearListaChequesComponent1750945333244 } from './api-doc-page/Descuento-de-Documentos/CrearListaCheques.component';
import { ObtenerProductosComponent1750945333251 } from './api-doc-page/Descuento-de-Documentos/ObtenerProductos.component';
import { ObtenerTiposDeDesembolsoComponent1750945333258 } from './api-doc-page/Descuento-de-Documentos/ObtenerTiposDeDesembolso.component';
import { SeleccionarOpcionDesembolsoComponent1750945333264 } from './api-doc-page/Descuento-de-Documentos/SeleccionarOpcionDesembolso.component';
import { ObtenerAgrupadoresComponent1750945333269 } from './api-doc-page/Indicadores/ObtenerAgrupadores.component';
import { ObtenerCierredeSaldosporMonedaComponent1750945333278 } from './api-doc-page/Indicadores/ObtenerCierredeSaldosporMoneda.component';
import { ObtenerCondicionesGeneralesComponent1750945333284 } from './api-doc-page/Indicadores/ObtenerCondicionesGenerales.component';
import { ObtenerIndicadoresComponent1750945333290 } from './api-doc-page/Indicadores/ObtenerIndicadores.component';
import { ObtenerMetodosMasEjecutadosComponent1750945333296 } from './api-doc-page/Indicadores/ObtenerMetodosMasEjecutados.component';
import { ObtenerMonedasIndicesComponent1750945333306 } from './api-doc-page/Indicadores/ObtenerMonedasIndices.component';
import { ObtenerRubrosBolsaComponent1750945333312 } from './api-doc-page/Indicadores/ObtenerRubrosBolsa.component';
import { ObtenerServiciosMasEjecutadosComponent1750945333319 } from './api-doc-page/Indicadores/ObtenerServiciosMasEjecutados.component';
import { ObtenerSesionesPorUsuarioComponent1750945333326 } from './api-doc-page/Indicadores/ObtenerSesionesPorUsuario.component';
import { ObtenerSucursalesCajasComponent1750945333333 } from './api-doc-page/Indicadores/ObtenerSucursalesCajas.component';
import { ObtenerTransaccionesporEstadosComponent1750945333342 } from './api-doc-page/Indicadores/ObtenerTransaccionesporEstados.component';
import { BuscarClienteComponent1750945333349 } from './api-doc-page/Microfinanzas/BuscarCliente.component';
import { CompletarTareaComponent1750945333355 } from './api-doc-page/Microfinanzas/CompletarTarea.component';
import { CrearSolicitudAmpliacionComponent1750945333362 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudAmpliacion.component';
import { CrearSolicitudIndividualComponent1750945333367 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudIndividual.component';
import { CrearSolicitudRenovacionComponent1750945333374 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudRenovacion.component';
import { AgregarFiadorComponent1750945333382 } from './api-doc-page/Microfinanzas/Fiadores/AgregarFiador.component';
import { EliminarFiadorComponent1750945333390 } from './api-doc-page/Microfinanzas/Fiadores/EliminarFiador.component';
import { ActualizarGrupoComponent1750945333395 } from './api-doc-page/Microfinanzas/Grupales/ActualizarGrupo.component';
import { ActualizarIntegrantedeGrupoComponent1750945333402 } from './api-doc-page/Microfinanzas/Grupales/ActualizarIntegrantedeGrupo.component';
import { AgregarGrupoComponent1750945333408 } from './api-doc-page/Microfinanzas/Grupales/AgregarGrupo.component';
import { AgregarIntegranteaGrupoComponent1750945333414 } from './api-doc-page/Microfinanzas/Grupales/AgregarIntegranteaGrupo.component';
import { CrearSolicitudGrupalComponent1750945333419 } from './api-doc-page/Microfinanzas/Grupales/CrearSolicitudGrupal.component';
import { HabilitarIntegrantedeunGrupoComponent1750945333427 } from './api-doc-page/Microfinanzas/Grupales/HabilitarIntegrantedeunGrupo.component';
import { InhabilitarIntegrantedeunGrupoComponent1750945333432 } from './api-doc-page/Microfinanzas/Grupales/InhabilitarIntegrantedeunGrupo.component';
import { ObtenerDetalleGrupoComponent1750945333437 } from './api-doc-page/Microfinanzas/Grupales/ObtenerDetalleGrupo.component';
import { ObtenerGruposComponent1750945333444 } from './api-doc-page/Microfinanzas/Grupales/ObtenerGrupos.component';
import { ObtenerIntegrantesdeGrupoComponent1750945333452 } from './api-doc-page/Microfinanzas/Grupales/ObtenerIntegrantesdeGrupo.component';
import { ObtenerTiposdeGrupoComponent1750945333460 } from './api-doc-page/Microfinanzas/Grupales/ObtenerTiposdeGrupo.component';
import { ObtenerTiposdeIntegranteComponent1750945333467 } from './api-doc-page/Microfinanzas/Grupales/ObtenerTiposdeIntegrante.component';
import { SimularPrestamoAmortizableGrupalComponent1750945333474 } from './api-doc-page/Microfinanzas/Grupales/SimularPrestamoAmortizableGrupal.component';
import { ObtenerAsesoresComponent1750945333484 } from './api-doc-page/Microfinanzas/Obtener/ObtenerAsesores.component';
import { ObtenerCampanasComponent1750945333491 } from './api-doc-page/Microfinanzas/Obtener/ObtenerCampanas.component';
import { ObtenerDestinosCreditoComponent1750945333501 } from './api-doc-page/Microfinanzas/Obtener/ObtenerDestinosCredito.component';
import { ObtenerOperacionesClienteComponent1750945333510 } from './api-doc-page/Microfinanzas/Obtener/ObtenerOperacionesCliente.component';
import { ObtenerOrigenesdeCaptacionComponent1750945333518 } from './api-doc-page/Microfinanzas/Obtener/ObtenerOrigenesdeCaptacion.component';
import { ObtenerProductosComponent1750945333526 } from './api-doc-page/Microfinanzas/Obtener/ObtenerProductos.component';
import { ObtenerSolicitudesClienteComponent1750945333532 } from './api-doc-page/Microfinanzas/Obtener/ObtenerSolicitudesCliente.component';
import { ObtenerTiposAvalComponent1750945333540 } from './api-doc-page/Microfinanzas/Obtener/ObtenerTiposAval.component';
import { AgregarOperacionesaCancelarComponent1750945333548 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/AgregarOperacionesaCancelar.component';
import { ObtenerOperacionesaCancelarComponent1750945333555 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/ObtenerOperacionesaCancelar.component';
import { QuitarOperacionesaCancelarComponent1750945333564 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/QuitarOperacionesaCancelar.component';
import { SimularLibreAmortizacionComponent1750945333574 } from './api-doc-page/Microfinanzas/Simular/SimularLibreAmortizacion.component';
import { SimularPrestamoAmortizableComponent1750945333582 } from './api-doc-page/Microfinanzas/Simular/SimularPrestamoAmortizable.component';
import { SimularPrestamoPlazoFijoComponent1750945333592 } from './api-doc-page/Microfinanzas/Simular/SimularPrestamoPlazoFijo.component';
import { ValidarPoliticasComponent1750945333602 } from './api-doc-page/Microfinanzas/ValidarPoliticas.component';
import { ObtenerCantidadCuotasComponent1750945333610 } from './api-doc-page/Modelador-de-Préstamos/ObtenerCantidadCuotas.component';
import { ObtenerCapitalComponent1750945333617 } from './api-doc-page/Modelador-de-Préstamos/ObtenerCapital.component';
import { ObtenerComisionesComponent1750945333625 } from './api-doc-page/Modelador-de-Préstamos/ObtenerComisiones.component';
import { ObtenerComisionesporCuotaComponent1750945333630 } from './api-doc-page/Modelador-de-Préstamos/ObtenerComisionesporCuota.component';
import { ObtenerDiasPrimerPeriodoComponent1750945333636 } from './api-doc-page/Modelador-de-Préstamos/ObtenerDiasPrimerPeriodo.component';
import { ObtenerPeriodoEntreCuotasComponent1750945333655 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPeriodoEntreCuotas.component';
import { ObtenerPermiteSegurosdelMismoTipoComponent1750945333645 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPermiteSegurosdelMismoTipo.component';
import { ObtenerPlazoComponent1750945333664 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPlazo.component';
import { ObtenerRequiereSegurodeVidaObligatorioComponent1750945333673 } from './api-doc-page/Modelador-de-Préstamos/ObtenerRequiereSegurodeVidaObligatorio.component';
import { ObtenerSegurosComponent1750945333681 } from './api-doc-page/Modelador-de-Préstamos/ObtenerSeguros.component';
import { ObtenerItemsModeloComponent1750945333689 } from './api-doc-page/PAE/ObtenerItemsModelo.component';
import { ObtenerModelosPAEComponent1750945333697 } from './api-doc-page/PAE/ObtenerModelosPAE.component';
import { ObtenerScoresComponent1750945333704 } from './api-doc-page/PAE/ObtenerScores.component';
import { ObtenerTiposDeModelosComponent1750945333711 } from './api-doc-page/PAE/ObtenerTiposDeModelos.component';
import { ContratarPrestamoComponent1750945333716 } from './api-doc-page/Partners/Contratar/ContratarPrestamo.component';
import { ContratarVehicularComponent1750945333725 } from './api-doc-page/Partners/Contratar/ContratarVehicular.component';
import { CrearClienteComponent1750945333730 } from './api-doc-page/Partners/Crear/CrearCliente.component';
import { CrearPersonaClienteComponent1750945333739 } from './api-doc-page/Partners/Crear/CrearPersonaCliente.component';
import { ObtenerDatosdeUsuarioComponent1750945333744 } from './api-doc-page/Partners/Obtener/ObtenerDatosdeUsuario.component';
import { ObtenerDetalledeOfertaAmortizableComponent1750945333751 } from './api-doc-page/Partners/Obtener/ObtenerDetalledeOfertaAmortizable.component';
import { ObtenerDetalleOfertaVehicularComponent1750945333759 } from './api-doc-page/Partners/Obtener/ObtenerDetalleOfertaVehicular.component';
import { ObtenerMarcasComponent1750945333764 } from './api-doc-page/Partners/Obtener/ObtenerMarcas.component';
import { ObtenerModelosComponent1750945333769 } from './api-doc-page/Partners/Obtener/ObtenerModelos.component';
import { ObtenerPartnersComponent1750945333777 } from './api-doc-page/Partners/Obtener/ObtenerPartners.component';
import { ObtenerPrestamosdeClienteComponent1750945333801 } from './api-doc-page/Partners/Obtener/ObtenerPrestamosdeCliente.component';
import { ObtenerProductosComponent1750945333784 } from './api-doc-page/Partners/Obtener/ObtenerProductos.component';
import { ObtenerProductosdelPartnerComponent1750945333792 } from './api-doc-page/Partners/Obtener/ObtenerProductosdelPartner.component';
import { ObtenerPuntosdeVentaComponent1750945333808 } from './api-doc-page/Partners/Obtener/ObtenerPuntosdeVenta.component';
import { ObtenerVendedoresComponent1750945333815 } from './api-doc-page/Partners/Obtener/ObtenerVendedores.component';
import { ObtenerVersionesComponent1750945333822 } from './api-doc-page/Partners/Obtener/ObtenerVersiones.component';
import { SimularOfertasComponent1750945333831 } from './api-doc-page/Partners/Simular/SimularOfertas.component';
import { SimularOfertasVehicularComponent1750945333840 } from './api-doc-page/Partners/Simular/SimularOfertasVehicular.component';
import { SimularPrestamoComponent1750945333849 } from './api-doc-page/Partners/Simular/SimularPrestamo.component';
import { SimularVehicularComponent1750945333858 } from './api-doc-page/Partners/Simular/SimularVehicular.component';
import { ObtenerCorrelativoGuiaComponent1750945333866 } from './api-doc-page/Parámetros-Base/ObtenerCorrelativoGuia.component';
import { ObtenerCorrelativoGuiaEspecialComponent1750945333874 } from './api-doc-page/Parámetros-Base/ObtenerCorrelativoGuiaEspecial.component';
import { ObtenerGuiadeProcesoComponent1750945333880 } from './api-doc-page/Parámetros-Base/ObtenerGuiadeProceso.component';
import { ObtenerGuiaEspecialdeProcesoComponent1750945333887 } from './api-doc-page/Parámetros-Base/ObtenerGuiaEspecialdeProceso.component';
import { ObtenerOpcionGeneraldeProcesoComponent1750945333895 } from './api-doc-page/Parámetros-Base/ObtenerOpcionGeneraldeProceso.component';
import { ObtenerOpcionGeneralPorModuloComponent1750945333902 } from './api-doc-page/Parámetros-Base/ObtenerOpcionGeneralPorModulo.component';
import { ObtenerProgramaParticularComponent1750945333911 } from './api-doc-page/Parámetros-Base/ObtenerProgramaParticular.component';
import { ActualizarComponent1750945333919 } from './api-doc-page/Personas/Actualizar/Actualizar.component';
import { ActualizarCelularComponent1750945333925 } from './api-doc-page/Personas/Actualizar/ActualizarCelular.component';
import { ActualizarContactoComponent1750945333930 } from './api-doc-page/Personas/Actualizar/ActualizarContacto.component';
import { ActualizarConyugeComponent1750945333944 } from './api-doc-page/Personas/Actualizar/ActualizarConyuge.component';
import { ActualizarCorreoElectronicoComponent1750945333938 } from './api-doc-page/Personas/Actualizar/ActualizarCorreoElectronico.component';
import { ActualizarDomicilioComponent1750945333949 } from './api-doc-page/Personas/Actualizar/ActualizarDomicilio.component';
import { ActualizarFATCAComponent1750945333957 } from './api-doc-page/Personas/Actualizar/ActualizarFATCA.component';
import { ActualizarInformacionAdicionalComponent1750945333964 } from './api-doc-page/Personas/Actualizar/ActualizarInformacionAdicional.component';
import { ActualizarInformacionFinancieraComponent1750945333970 } from './api-doc-page/Personas/Actualizar/ActualizarInformacionFinanciera.component';
import { ActualizarIntegrantedePersonaJuridicaComponent1750945333977 } from './api-doc-page/Personas/Actualizar/ActualizarIntegrantedePersonaJuridica.component';
import { ActualizarPersonaJuridicaComponent1750945333986 } from './api-doc-page/Personas/Actualizar/ActualizarPersonaJuridica.component';
import { ActualizarProfesionComponent1750945333995 } from './api-doc-page/Personas/Actualizar/ActualizarProfesion.component';
import { ActualizarReferenciaComponent1750945334002 } from './api-doc-page/Personas/Actualizar/ActualizarReferencia.component';
import { ActualizarRegistroEmpleadoComponent1750945334010 } from './api-doc-page/Personas/Actualizar/ActualizarRegistroEmpleado.component';
import { ActualizarTelefonoComponent1750945334017 } from './api-doc-page/Personas/Actualizar/ActualizarTelefono.component';
import { ActualizarVictimaHechoViolentoComponent1750945334025 } from './api-doc-page/Personas/Actualizar/ActualizarVictimaHechoViolento.component';
import { ModificarDocumentoAdicionalComponent1750945334031 } from './api-doc-page/Personas/Actualizar/ModificarDocumentoAdicional.component';
import { AgregaraListaNegraComponent1750945334036 } from './api-doc-page/Personas/Agregar/AgregaraListaNegra.component';
import { AgregarContactoComponent1750945334042 } from './api-doc-page/Personas/Agregar/AgregarContacto.component';
import { AgregarCorreoElectronicoComponent1750945334048 } from './api-doc-page/Personas/Agregar/AgregarCorreoElectronico.component';
import { AgregarDatosPEPComponent1750945334055 } from './api-doc-page/Personas/Agregar/AgregarDatosPEP.component';
import { AgregarDocumentoAdicionalComponent1750945334062 } from './api-doc-page/Personas/Agregar/AgregarDocumentoAdicional.component';
import { AgregarDomicilioComponent1750945334069 } from './api-doc-page/Personas/Agregar/AgregarDomicilio.component';
import { AgregarEstadoFinancieroComponent1750945334077 } from './api-doc-page/Personas/Agregar/AgregarEstadoFinanciero.component';
import { AgregarFATCAComponent1750945334084 } from './api-doc-page/Personas/Agregar/AgregarFATCA.component';
import { AgregarInformacionAdicionalComponent1750945334093 } from './api-doc-page/Personas/Agregar/AgregarInformacionAdicional.component';
import { AgregarInformacionFinancieraComponent1750945334105 } from './api-doc-page/Personas/Agregar/AgregarInformacionFinanciera.component';
import { AgregarIntegranteaPersonaJuridicaComponent1750945334112 } from './api-doc-page/Personas/Agregar/AgregarIntegranteaPersonaJuridica.component';
import { AgregarPersonaVinculadaComponent1750945334118 } from './api-doc-page/Personas/Agregar/AgregarPersonaVinculada.component';
import { AgregarReferenciaComponent1750945334125 } from './api-doc-page/Personas/Agregar/AgregarReferencia.component';
import { AgregarTelefonoComponent1750945334131 } from './api-doc-page/Personas/Agregar/AgregarTelefono.component';
import { AgregarVictimaHechoViolentoComponent1750945334140 } from './api-doc-page/Personas/Agregar/AgregarVictimaHechoViolento.component';
import { CrearComponent1750945334148 } from './api-doc-page/Personas/Crear/Crear.component';
import { CrearConyugeComponent1750945334155 } from './api-doc-page/Personas/Crear/CrearConyuge.component';
import { CrearPersonaJuridicaComponent1750945334161 } from './api-doc-page/Personas/Crear/CrearPersonaJuridica.component';
import { CrearReducidoComponent1750945334167 } from './api-doc-page/Personas/Crear/CrearReducido.component';
import { ActualizarDocumentoDigitalComponent1750945334175 } from './api-doc-page/Personas/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750945334182 } from './api-doc-page/Personas/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750945334190 } from './api-doc-page/Personas/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750945334197 } from './api-doc-page/Personas/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750945334204 } from './api-doc-page/Personas/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { EliminarConyugeComponent1750945334211 } from './api-doc-page/Personas/Eliminar/EliminarConyuge.component';
import { EliminarDocumentoAdicionalComponent1750945334219 } from './api-doc-page/Personas/Eliminar/EliminarDocumentoAdicional.component';
import { EliminarDomicilioComponent1750945334226 } from './api-doc-page/Personas/Eliminar/EliminarDomicilio.component';
import { EliminarInformacionAdicionalComponent1750945334235 } from './api-doc-page/Personas/Eliminar/EliminarInformacionAdicional.component';
import { EliminarIntegrantedePersonaJuridicaComponent1750945334242 } from './api-doc-page/Personas/Eliminar/EliminarIntegrantedePersonaJuridica.component';
import { EliminarPersonaVinculadaComponent1750945334250 } from './api-doc-page/Personas/Eliminar/EliminarPersonaVinculada.component';
import { EliminarProfesionComponent1750945334257 } from './api-doc-page/Personas/Eliminar/EliminarProfesion.component';
import { ObtenerComponent1750945334267 } from './api-doc-page/Personas/Obtener/Obtener.component';
import { ObtenerConceptoComponent1750945334276 } from './api-doc-page/Personas/Obtener/ObtenerConcepto.component';
import { ObtenerContactosComponent1750945334284 } from './api-doc-page/Personas/Obtener/ObtenerContactos.component';
import { ObtenerConyugeComponent1750945334312 } from './api-doc-page/Personas/Obtener/ObtenerConyuge.component';
import { ObtenerCorreosElectronicosComponent1750945334292 } from './api-doc-page/Personas/Obtener/ObtenerCorreosElectronicos.component';
import { ObtenerCuentasClienteComponent1750945334303 } from './api-doc-page/Personas/Obtener/ObtenerCuentasCliente.component';
import { ObtenerDatosPEPComponent1750945334319 } from './api-doc-page/Personas/Obtener/ObtenerDatosPEP.component';
import { ObtenerDocumentosAdicionalesComponent1750945334330 } from './api-doc-page/Personas/Obtener/ObtenerDocumentosAdicionales.component';
import { ObtenerDomiciliosComponent1750945334339 } from './api-doc-page/Personas/Obtener/ObtenerDomicilios.component';
import { ObtenerEstadosCivilesComponent1750945334347 } from './api-doc-page/Personas/Obtener/ObtenerEstadosCiviles.component';
import { ObtenerFacultadesComponent1750945334356 } from './api-doc-page/Personas/Obtener/ObtenerFacultades.component';
import { ObtenerFATCAComponent1750945334365 } from './api-doc-page/Personas/Obtener/ObtenerFATCA.component';
import { ObtenerHobbiesComponent1750945334374 } from './api-doc-page/Personas/Obtener/ObtenerHobbies.component';
import { ObtenerHobbyComponent1750945334381 } from './api-doc-page/Personas/Obtener/ObtenerHobby.component';
import { ObtenerIdBantotalComponent1750945334388 } from './api-doc-page/Personas/Obtener/ObtenerIdBantotal.component';
import { ObtenerIdentidadesdeGeneroComponent1750945334396 } from './api-doc-page/Personas/Obtener/ObtenerIdentidadesdeGenero.component';
import { ObtenerIdentificadorUnicoComponent1750945334403 } from './api-doc-page/Personas/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerInformacionAdicionalComponent1750945334410 } from './api-doc-page/Personas/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerInformacionFinancieraComponent1750945334416 } from './api-doc-page/Personas/Obtener/ObtenerInformacionFinanciera.component';
import { ObtenerIntegrantesPersonaJuridicaComponent1750945334423 } from './api-doc-page/Personas/Obtener/ObtenerIntegrantesPersonaJuridica.component';
import { ObtenerLimitesComponent1750945334428 } from './api-doc-page/Personas/Obtener/ObtenerLimites.component';
import { ObtenerNaturalezasJuridicasComponent1750945334434 } from './api-doc-page/Personas/Obtener/ObtenerNaturalezasJuridicas.component';
import { ObtenerNivelesEducativosComponent1750945334441 } from './api-doc-page/Personas/Obtener/ObtenerNivelesEducativos.component';
import { ObtenerOcupacionesComponent1750945334445 } from './api-doc-page/Personas/Obtener/ObtenerOcupaciones.component';
import { ObtenerPersonaJuridicaComponent1750945334453 } from './api-doc-page/Personas/Obtener/ObtenerPersonaJuridica.component';
import { ObtenerPersonasComponent1750945334460 } from './api-doc-page/Personas/Obtener/ObtenerPersonas.component';
import { ObtenerPersonasJuridicasComponent1750945334465 } from './api-doc-page/Personas/Obtener/ObtenerPersonasJuridicas.component';
import { ObtenerPersonasVinculadasComponent1750945334470 } from './api-doc-page/Personas/Obtener/ObtenerPersonasVinculadas.component';
import { ObtenerProfesionComponent1750945334483 } from './api-doc-page/Personas/Obtener/ObtenerProfesion.component';
import { ObtenerProfesionesComponent1750945334477 } from './api-doc-page/Personas/Obtener/ObtenerProfesiones.component';
import { ObtenerReferenciasComponent1750945334489 } from './api-doc-page/Personas/Obtener/ObtenerReferencias.component';
import { ObtenerTarjetasdeDebitoComponent1750945334497 } from './api-doc-page/Personas/Obtener/ObtenerTarjetasdeDebito.component';
import { ObtenerTelefonosComponent1750945334502 } from './api-doc-page/Personas/Obtener/ObtenerTelefonos.component';
import { ObtenerTipodePersonaComponent1750945334511 } from './api-doc-page/Personas/Obtener/ObtenerTipodePersona.component';
import { ObtenerTiposdeDocumentoComponent1750945334522 } from './api-doc-page/Personas/Obtener/ObtenerTiposdeDocumento.component';
import { ObtenerTiposDeFuncionarioPublicoComponent1750945334530 } from './api-doc-page/Personas/Obtener/ObtenerTiposDeFuncionarioPublico.component';
import { ObtenerTiposDePEPComponent1750945334535 } from './api-doc-page/Personas/Obtener/ObtenerTiposDePEP.component';
import { ObtenerTitularesDelTelefonoComponent1750945334543 } from './api-doc-page/Personas/Obtener/ObtenerTitularesDelTelefono.component';
import { ObtenerVictimaHechoViolentoComponent1750945334550 } from './api-doc-page/Personas/Obtener/ObtenerVictimaHechoViolento.component';
import { ObtenerVinculosComponent1750945334557 } from './api-doc-page/Personas/Obtener/ObtenerVinculos.component';
import { ObtenerVinculosdeAfinidadComponent1750945334563 } from './api-doc-page/Personas/Obtener/ObtenerVinculosdeAfinidad.component';
import { ObtenerVinculosdeConsanguinidadComponent1750945334573 } from './api-doc-page/Personas/Obtener/ObtenerVinculosdeConsanguinidad.component';
import { ObtenerVinculosJuridicosComponent1750945334582 } from './api-doc-page/Personas/Obtener/ObtenerVinculosJuridicos.component';
import { EvaluarPAEComponent1750945334591 } from './api-doc-page/Personas/Validar/EvaluarPAE.component';
import { ValidarCorreoElectronicoComponent1750945334598 } from './api-doc-page/Personas/Validar/ValidarCorreoElectronico.component';
import { ValidarDocumentoComponent1750945334609 } from './api-doc-page/Personas/Validar/ValidarDocumento.component';
import { ValidarenListasNegrasComponent1750945334617 } from './api-doc-page/Personas/Validar/ValidarenListasNegras.component';
import { ValidarExistenciaComponent1750945334625 } from './api-doc-page/Personas/Validar/ValidarExistencia.component';
import { ValidarListasInhabilitadosComponent1750945334634 } from './api-doc-page/Personas/Validar/ValidarListasInhabilitados.component';
import { VerificarEmpleadoComponent1750945334641 } from './api-doc-page/Personas/Validar/VerificarEmpleado.component';
import { ConvertirTasaAnualEfectivaaLinealComponent1750945334650 } from './api-doc-page/Precios/Convertir/ConvertirTasaAnualEfectivaaLineal.component';
import { ConvertirTasaAnualLinealaEfectivaComponent1750945334657 } from './api-doc-page/Precios/Convertir/ConvertirTasaAnualLinealaEfectiva.component';
import { ConvertirTasaMensualEfectivaaLinealComponent1750945334666 } from './api-doc-page/Precios/Convertir/ConvertirTasaMensualEfectivaaLineal.component';
import { ConvertirTasaMensualLinealaEfectivaComponent1750945334675 } from './api-doc-page/Precios/Convertir/ConvertirTasaMensualLinealaEfectiva.component';
import { ObtenerCotizacionComponent1750945334683 } from './api-doc-page/Precios/Obtener/ObtenerCotizacion.component';
import { ObtenerCotizacionaFechaComponent1750945334691 } from './api-doc-page/Precios/Obtener/ObtenerCotizacionaFecha.component';
import { ObtenerCotizacionCierreComponent1750945334698 } from './api-doc-page/Precios/Obtener/ObtenerCotizacionCierre.component';
import { ObtenerPizarraEspecialporTransaccionComponent1750945334705 } from './api-doc-page/Precios/Obtener/ObtenerPizarraEspecialporTransaccion.component';
import { ObtenerPrecioaFechaComponent1750945334711 } from './api-doc-page/Precios/Obtener/ObtenerPrecioaFecha.component';
import { ObtenerPrecioEspecieComponent1750945334718 } from './api-doc-page/Precios/Obtener/ObtenerPrecioEspecie.component';
import { ObtenerTasadeOperacionComponent1750945334724 } from './api-doc-page/Precios/Obtener/ObtenerTasadeOperacion.component';
import { ObtenerTasaParaClienteComponent1750945334732 } from './api-doc-page/Precios/Obtener/ObtenerTasaParaCliente.component';
import { ObtenerTasaParaProductoComponent1750945334740 } from './api-doc-page/Precios/Obtener/ObtenerTasaParaProducto.component';
import { ObtenerTipodeCambioComponent1750945334747 } from './api-doc-page/Precios/Obtener/ObtenerTipodeCambio.component';
import { ObtenerTiposDeCambioEspecialesComponent1750945334755 } from './api-doc-page/Precios/Obtener/ObtenerTiposDeCambioEspeciales.component';
import { CancelarComponent1750945334763 } from './api-doc-page/Préstamos/Cancelar/Cancelar.component';
import { CancelaraFechaComponent1750945334772 } from './api-doc-page/Préstamos/Cancelar/CancelaraFecha.component';
import { CancelaraFechaTercerosComponent1750945334779 } from './api-doc-page/Préstamos/Cancelar/CancelaraFechaTerceros.component';
import { CancelarTercerosComponent1750945334785 } from './api-doc-page/Préstamos/Cancelar/CancelarTerceros.component';
import { ContratarComponent1750945334792 } from './api-doc-page/Préstamos/Contratar/Contratar.component';
import { ContratarAmpliacionComponent1750945334802 } from './api-doc-page/Préstamos/Contratar/ContratarAmpliacion.component';
import { ContratarRefinanciacionComponent1750945334811 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacion.component';
import { ContratarRefinanciacionporDeudaTotalComponent1750945334817 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacionporDeudaTotal.component';
import { ContratarRefinanciacionporSaldoCapitalComponent1750945334824 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacionporSaldoCapital.component';
import { ActualizarDocumentoDigitalComponent1750945334830 } from './api-doc-page/Préstamos/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750945334836 } from './api-doc-page/Préstamos/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750945334844 } from './api-doc-page/Préstamos/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750945334850 } from './api-doc-page/Préstamos/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750945334858 } from './api-doc-page/Préstamos/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ObtenerCronogramaComponent1750945334865 } from './api-doc-page/Préstamos/Obtener/ObtenerCronograma.component';
import { ObtenerCronogramaaFechaComponent1750945334874 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaaFecha.component';
import { ObtenerCronogramaconPagosaFechaComponent1750945334880 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaconPagosaFecha.component';
import { ObtenerCronogramaenEspecieComponent1750945334889 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaenEspecie.component';
import { ObtenerCronogramaOriginalComponent1750945334897 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaOriginal.component';
import { ObtenerCuentadeCobroComponent1750945334903 } from './api-doc-page/Préstamos/Obtener/ObtenerCuentadeCobro.component';
import { ObtenerDatosdelProximoVencimientoComponent1750945334910 } from './api-doc-page/Préstamos/Obtener/ObtenerDatosdelProximoVencimiento.component';
import { ObtenerDetalleComponent1750945334916 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalle.component';
import { ObtenerDetalleaFechaComponent1750945334924 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleaFecha.component';
import { ObtenerDetalledeCancelacionTotalComponent1750945334930 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeCancelacionTotal.component';
import { ObtenerDetalledeOfertaComponent1750945334938 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOferta.component';
import { ObtenerDetalledeOfertaAmortizableComponent1750945334946 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOfertaAmortizable.component';
import { ObtenerDetalledeOperacionesaRefinanciarComponent1750945334953 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOperacionesaRefinanciar.component';
import { ObtenerDetalledePrestamoCanceladoComponent1750945334963 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledePrestamoCancelado.component';
import { ObtenerDetallePagoPrestamoComponent1750945334971 } from './api-doc-page/Préstamos/Obtener/ObtenerDetallePagoPrestamo.component';
import { ObtenerDetalleReducidoComponent1750945334977 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleReducido.component';
import { ObtenerDetalleSimulacionComponent1750945334986 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleSimulacion.component';
import { ObtenerDeudaComponent1750945334994 } from './api-doc-page/Préstamos/Obtener/ObtenerDeuda.component';
import { ObtenerDeudaPrestamoCastigadoComponent1750945335002 } from './api-doc-page/Préstamos/Obtener/ObtenerDeudaPrestamoCastigado.component';
import { ObtenerDeudaVencidaComponent1750945335011 } from './api-doc-page/Préstamos/Obtener/ObtenerDeudaVencida.component';
import { ObtenerFechadeIncumplimientoComponent1750945335019 } from './api-doc-page/Préstamos/Obtener/ObtenerFechadeIncumplimiento.component';
import { ObtenerFechadeUltimoPagoComponent1750945335028 } from './api-doc-page/Préstamos/Obtener/ObtenerFechadeUltimoPago.component';
import { ObtenerFechasdePagoComponent1750945335037 } from './api-doc-page/Préstamos/Obtener/ObtenerFechasdePago.component';
import { ObtenerInformacionAdicionalComponent1750945335045 } from './api-doc-page/Préstamos/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerMontodeCancelacionComponent1750945335054 } from './api-doc-page/Préstamos/Obtener/ObtenerMontodeCancelacion.component';
import { ObtenerMotivosPrecancelacionComponent1750945335062 } from './api-doc-page/Préstamos/Obtener/ObtenerMotivosPrecancelacion.component';
import { ObtenerPagosdeCuotaComponent1750945335069 } from './api-doc-page/Préstamos/Obtener/ObtenerPagosdeCuota.component';
import { ObtenerPagosdeunPrestamoComponent1750945335078 } from './api-doc-page/Préstamos/Obtener/ObtenerPagosdeunPrestamo.component';
import { ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750945335087 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1.component';
import { ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750945335096 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1.component';
import { ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750945335106 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1.component';
import { ObtenerProductosComponent1750945335112 } from './api-doc-page/Préstamos/Obtener/ObtenerProductos.component';
import { ObtenerProductosRefinanciacionComponent1750945335118 } from './api-doc-page/Préstamos/Obtener/ObtenerProductosRefinanciacion.component';
import { ObtenerRefinanciacionSimuladaComponent1750945335126 } from './api-doc-page/Préstamos/Obtener/ObtenerRefinanciacionSimulada.component';
import { AbonaraCuentaComponent1750945335134 } from './api-doc-page/Préstamos/Operar/AbonaraCuenta.component';
import { ActualizarInformacionAdicionalComponent1750945335140 } from './api-doc-page/Préstamos/Operar/ActualizarInformacionAdicional.component';
import { ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750945335147 } from './api-doc-page/Préstamos/Operar/ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1.component';
import { AgregarCuentadeCobroComponent1750945335154 } from './api-doc-page/Préstamos/Operar/AgregarCuentadeCobro.component';
import { AgregarInformacionAdicionalComponent1750945335162 } from './api-doc-page/Préstamos/Operar/AgregarInformacionAdicional.component';
import { EliminarCuentadeCobroComponent1750945335167 } from './api-doc-page/Préstamos/Operar/EliminarCuentadeCobro.component';
import { EliminarInformacionAdicionalComponent1750945335173 } from './api-doc-page/Préstamos/Operar/EliminarInformacionAdicional.component';
import { SolicitarPrecancelacionComponent1750945335181 } from './api-doc-page/Préstamos/Operar/SolicitarPrecancelacion.component';
import { AdelantarCapitalConReduccionDeCuotaComponent1750945335188 } from './api-doc-page/Préstamos/Pagar/AdelantarCapitalConReduccionDeCuota.component';
import { AdelantarCapitalConReduccionDePlazoComponent1750945335195 } from './api-doc-page/Préstamos/Pagar/AdelantarCapitalConReduccionDePlazo.component';
import { PagarCuotaComponent1750945335201 } from './api-doc-page/Préstamos/Pagar/PagarCuota.component';
import { PagarCuotaaFechaComponent1750945335208 } from './api-doc-page/Préstamos/Pagar/PagarCuotaaFecha.component';
import { PagarCuotaaFechaTercerosComponent1750945335215 } from './api-doc-page/Préstamos/Pagar/PagarCuotaaFechaTerceros.component';
import { PagarCuotaTercerosComponent1750945335223 } from './api-doc-page/Préstamos/Pagar/PagarCuotaTerceros.component';
import { ResimularAmortizableComponent1750945335231 } from './api-doc-page/Préstamos/Simular/ResimularAmortizable.component';
import { ResimularAmpliacionComponent1750945335240 } from './api-doc-page/Préstamos/Simular/ResimularAmpliacion.component';
import { ResimularRefinanciacionComponent1750945335249 } from './api-doc-page/Préstamos/Simular/ResimularRefinanciacion.component';
import { SimularComponent1750945335257 } from './api-doc-page/Préstamos/Simular/Simular.component';
import { SimularAmortizableComponent1750945335267 } from './api-doc-page/Préstamos/Simular/SimularAmortizable.component';
import { SimularAmortizableSinClienteComponent1750945335276 } from './api-doc-page/Préstamos/Simular/SimularAmortizableSinCliente.component';
import { SimularAmpliacionComponent1750945335284 } from './api-doc-page/Préstamos/Simular/SimularAmpliacion.component';
import { SimularAmpliacionIngresandoSegurosComponent1750945335293 } from './api-doc-page/Préstamos/Simular/SimularAmpliacionIngresandoSeguros.component';
import { SimularDespejandoCapitalyCantidaddeCuotasComponent1750945335301 } from './api-doc-page/Préstamos/Simular/SimularDespejandoCapitalyCantidaddeCuotas.component';
import { SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750945335310 } from './api-doc-page/Préstamos/Simular/SimularDespejandoCapitalyCantidaddeCuotasSinCliente.component';
import { SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750945335315 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyCantidaddeCuotas.component';
import { SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750945335321 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinCliente.component';
import { SimularDespejandoFechadeVencimientoyTasaComponent1750945335328 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyTasa.component';
import { SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750945335334 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyTasaSinCliente.component';
import { SimularIngresandoBalloonComponent1750945335342 } from './api-doc-page/Préstamos/Simular/SimularIngresandoBalloon.component';
import { SimularIngresandoBalloonSinClienteComponent1750945335350 } from './api-doc-page/Préstamos/Simular/SimularIngresandoBalloonSinCliente.component';
import { SimularIngresandoSegurosComponent1750945335358 } from './api-doc-page/Préstamos/Simular/SimularIngresandoSeguros.component';
import { SimularIngresandoSegurosSinClienteComponent1750945335365 } from './api-doc-page/Préstamos/Simular/SimularIngresandoSegurosSinCliente.component';
import { SimularLibreAmortizacionComponent1750945335372 } from './api-doc-page/Préstamos/Simular/SimularLibreAmortizacion.component';
import { SimularLibreAmortizacionSinClienteComponent1750945335380 } from './api-doc-page/Préstamos/Simular/SimularLibreAmortizacionSinCliente.component';
import { SimularOfertasComponent1750945335386 } from './api-doc-page/Préstamos/Simular/SimularOfertas.component';
import { SimularPlazoFijoComponent1750945335393 } from './api-doc-page/Préstamos/Simular/SimularPlazoFijo.component';
import { SimularRefinanciacionComponent1750945335400 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacion.component';
import { SimularRefinanciacionporDeudaTotalComponent1750945335407 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacionporDeudaTotal.component';
import { SimularRefinanciacionporSaldoCapitalComponent1750945335413 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacionporSaldoCapital.component';
import { ActualizarTextosComponent1750945335419 } from './api-doc-page/Préstamos/Textos/ActualizarTextos.component';
import { AgregarTextosComponent1750945335426 } from './api-doc-page/Préstamos/Textos/AgregarTextos.component';
import { EliminarTextosComponent1750945335433 } from './api-doc-page/Préstamos/Textos/EliminarTextos.component';
import { ObtenerTextosComponent1750945335440 } from './api-doc-page/Préstamos/Textos/ObtenerTextos.component';
import { EvaluarRegladeNegocioComponent1750945335452 } from './api-doc-page/Reglas-de-Negocio/EvaluarRegladeNegocio.component';
import { ObtenerReglasdeNegocioComponent1750945335458 } from './api-doc-page/Reglas-de-Negocio/ObtenerReglasdeNegocio.component';
import { ObtenerVariablesReglaComponent1750945335464 } from './api-doc-page/Reglas-de-Negocio/ObtenerVariablesRegla.component';
import { ValidarDatosRegladeNegocioComponent1750945335469 } from './api-doc-page/Reglas-de-Negocio/ValidarDatosRegladeNegocio.component';
import { AutorizarExcepcionComponent1750945335477 } from './api-doc-page/Seguridad/AutorizarExcepcion.component';
import { ObtenerDetalledeExcepcionComponent1750945335482 } from './api-doc-page/Seguridad/ObtenerDetalledeExcepcion.component';
import { ObtenerExcepcionesComponent1750945335489 } from './api-doc-page/Seguridad/ObtenerExcepciones.component';
import { RechazarExcepcionComponent1750945335496 } from './api-doc-page/Seguridad/RechazarExcepcion.component';
import { RegistrarDispositivoComponent1750945335501 } from './api-doc-page/Seguridad/RegistrarDispositivo.component';
import { ContratarSeguroComponent1750945335508 } from './api-doc-page/Seguros-Voluntarios/ContratarSeguro.component';
import { ObtenerMontosDeUnSeguroComponent1750945335513 } from './api-doc-page/Seguros-Voluntarios/ObtenerMontosDeUnSeguro.component';
import { ObtenerSegurosComponent1750945335519 } from './api-doc-page/Seguros-Voluntarios/ObtenerSeguros.component';
import { ObtenerSegurosAPagarComponent1750945335527 } from './api-doc-page/Seguros-Voluntarios/ObtenerSegurosAPagar.component';
import { PagarSeguroComponent1750945335533 } from './api-doc-page/Seguros-Voluntarios/PagarSeguro.component';
import { ObtenerCodigosdeLimitesComponent1750945335567 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCodigosdeLimites.component';
import { ObtenerCuentaPreferencialComponent1750945335540 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentaPreferencial.component';
import { ObtenerCuentasaAsociarComponent1750945335547 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasaAsociar.component';
import { ObtenerCuentasAsociadasComponent1750945335553 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasAsociadas.component';
import { ObtenerCuentasAsociadasPorTipoComponent1750945335561 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasAsociadasPorTipo.component';
import { ObtenerDatosComponent1750945335575 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerDatos.component';
import { ObtenerDatosContactoComponent1750945335581 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerDatosContacto.component';
import { ObtenerIdentificadorUnicoComponent1750945335588 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerLimitesComponent1750945335596 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerLimites.component';
import { ObtenerMovimientosComponent1750945335604 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerMovimientos.component';
import { ObtenerTarjetaComponent1750945335611 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjeta.component';
import { ObtenerTarjetaHabienteComponent1750945335617 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjetaHabiente.component';
import { ObtenerTarjetasAdicionalesComponent1750945335625 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjetasAdicionales.component';
import { ObtenerTiposdeCuentaComponent1750945335630 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTiposdeCuenta.component';
import { ActivarComponent1750945335637 } from './api-doc-page/Tarjetas-de-Débito/Operar/Activar.component';
import { ActualizarCuentaPreferencialComponent1750945335643 } from './api-doc-page/Tarjetas-de-Débito/Operar/ActualizarCuentaPreferencial.component';
import { ActualizarDatosContactoComponent1750945335649 } from './api-doc-page/Tarjetas-de-Débito/Operar/ActualizarDatosContacto.component';
import { AsociarCuentaComponent1750945335657 } from './api-doc-page/Tarjetas-de-Débito/Operar/AsociarCuenta.component';
import { BlanquearPinComponent1750945335663 } from './api-doc-page/Tarjetas-de-Débito/Operar/BlanquearPin.component';
import { BloquearComponent1750945335669 } from './api-doc-page/Tarjetas-de-Débito/Operar/Bloquear.component';
import { BloquearDesdeREDComponent1750945335677 } from './api-doc-page/Tarjetas-de-Débito/Operar/BloquearDesdeRED.component';
import { CrearComponent1750945335685 } from './api-doc-page/Tarjetas-de-Débito/Operar/Crear.component';
import { CrearConCuentasAsociadasComponent1750945335693 } from './api-doc-page/Tarjetas-de-Débito/Operar/CrearConCuentasAsociadas.component';
import { DenunciarComponent1750945335701 } from './api-doc-page/Tarjetas-de-Débito/Operar/Denunciar.component';
import { DenunciarDesdeREDComponent1750945335708 } from './api-doc-page/Tarjetas-de-Débito/Operar/DenunciarDesdeRED.component';
import { DesbloquearComponent1750945335715 } from './api-doc-page/Tarjetas-de-Débito/Operar/Desbloquear.component';
import { DesbloquearDesdeREDComponent1750945335721 } from './api-doc-page/Tarjetas-de-Débito/Operar/DesbloquearDesdeRED.component';
import { EliminarCuentaAsociadaComponent1750945335728 } from './api-doc-page/Tarjetas-de-Débito/Operar/EliminarCuentaAsociada.component';
import { ModificarLimiteComponent1750945335736 } from './api-doc-page/Tarjetas-de-Débito/Operar/ModificarLimite.component';
import { ComprarComponent1750945335744 } from './api-doc-page/Títulos/Comprar.component';
import { ObtenerEstadoCompraComponent1750945335750 } from './api-doc-page/Títulos/ObtenerEstadoCompra.component';
import { ObtenerGruposComponent1750945335758 } from './api-doc-page/Títulos/ObtenerGrupos.component';
import { ObtenerValoresComponent1750945335765 } from './api-doc-page/Títulos/ObtenerValores.component';
import { AgregarPerfilComponent1750945335772 } from './api-doc-page/Usuarios/AgregarPerfil.component';
import { CrearComponent1750945335779 } from './api-doc-page/Usuarios/Crear.component';
import { EliminarPerfilComponent1750945335784 } from './api-doc-page/Usuarios/EliminarPerfil.component';
import { EliminarUsuarioComponent1750945335792 } from './api-doc-page/Usuarios/EliminarUsuario.component';
import { HabilitarEnCanalComponent1750945335799 } from './api-doc-page/Usuarios/HabilitarEnCanal.component';
import { HabilitarUsuarioComponent1750945335807 } from './api-doc-page/Usuarios/HabilitarUsuario.component';
import { InhabilitarUsuarioComponent1750945335813 } from './api-doc-page/Usuarios/InhabilitarUsuario.component';
import { ModificarComponent1750945335818 } from './api-doc-page/Usuarios/Modificar.component';
import { ObtenerComponent1750945335825 } from './api-doc-page/Usuarios/Obtener.component';
import { ObtenerPerfilesComponent1750945335831 } from './api-doc-page/Usuarios/ObtenerPerfiles.component';
import { ObtenerUsuariosComponent1750945335837 } from './api-doc-page/Usuarios/ObtenerUsuarios.component';
import { ObtenerUsuariosParaPerfilComponent1750945335844 } from './api-doc-page/Usuarios/ObtenerUsuariosParaPerfil.component';
import { ObtenerMetadataDeTareaComponent1750945335850 } from './api-doc-page/Workflow/ObtenerMetadataDeTarea.component';
import { ObtenerProcesosHabilitadosComponent1750945335857 } from './api-doc-page/Workflow/ObtenerProcesosHabilitados.component';
import { ObtenerRolesComponent1750945335863 } from './api-doc-page/Workflow/ObtenerRoles.component';
import { ObtenerRolesdeTareaComponent1750945335868 } from './api-doc-page/Workflow/ObtenerRolesdeTarea.component';
import { ObtenerTareasdeProcesoComponent1750945335876 } from './api-doc-page/Workflow/ObtenerTareasdeProceso.component';
//import End page components

@NgModule({
  declarations: [
    ChatPopupComponent,
    //declarations Page components
    ContratarSimulacionComponent1750945330910,
    CrearComponent1750945330924,
    SimularComponent1750945330931,
    ActualizarDocumentoDigitalComponent1750945330936,
    AsociarDocumentoDigitalComponent1750945330944,
    EliminarDocumentoDigitalComponent1750945330950,
    ObtenerDocumentoDigitalComponent1750945330958,
    ObtenerDocumentosDigitalesComponent1750945330965,
    ModificarCuentaDestinoComponent1750945330972,
    ModificarCuentaOrigenComponent1750945330980,
    ModificarFechadeAbonoComponent1750945330986,
    ModificarMetadeAhorroComponent1750945330994,
    ModificarMontodeAbonoComponent1750945331001,
    ObtenerComponent1750945331010,
    ObtenerCronogramaAbonosComponent1750945331019,
    ObtenerCuentasDestinoHabilitadasComponent1750945331028,
    ObtenerCuentasOrigenHabilitadasComponent1750945331035,
    ObtenerEstadodeCuentaComponent1750945331043,
    ObtenerPeriodosHabilitadosComponent1750945331049,
    ObtenerPlazosHabilitadosComponent1750945331056,
    ObtenerProductosComponent1750945331064,
    AnularChequeElectronicoComponent1750945331072,
    AsignarIdaChequeElectronicoComponent1750945331079,
    CrearChequeraElectronicaComponent1750945331086,
    DepositarChequeElectronicodeBancoPropioComponent1750945331094,
    DepositarChequeElectronicodeOtroBancoComponent1750945331103,
    DepositarChequeElectronicoenCustodiaComponent1750945331112,
    EmitirChequeElectronicoComponent1750945331121,
    EmitirChequeElectronicodeChequeraComponent1750945331128,
    HabilitarChequeElectronicoComponent1750945331135,
    CrearAdhesionComponent1750945331142,
    CrearStopDebitComponent1750945331149,
    CrearStopDebitparaAdhesionconImporteComponent1750945331154,
    EliminarStopDebitComponent1750945331160,
    ObtenerAdhesionesComponent1750945331168,
    ObtenerDebitosComponent1750945331177,
    ObtenerEmpresasOriginantesComponent1750945331183,
    ObtenerStopDebitsComponent1750945331192,
    ReversarDebitosComponent1750945331199,
    SolicitarBajadeAdhesionComponent1750945331204,
    AutenticacionComponent1750945331214,
    ObtenerDetalledeEjecucionComponent1750945331218,
    ObtenerDetalledeProcesoComponent1750945331223,
    ObtenerProcesosconErrorComponent1750945331230,
    ObtenerProcesosCriticosComponent1750945331238,
    ObtenerProcesosDiariosComponent1750945331244,
    ObtenerProcesosMensualesComponent1750945331251,
    ObtenerProcesosReprocesablesComponent1750945331262,
    VerificarEstadoServidorComponent1750945331267,
    CalcularFechadeVencimientoComponent1750945331275,
    CalcularFechadeVencimientoenDiasHabilesComponent1750945331281,
    CalcularPlazoComponent1750945331287,
    CalcularPlazoenDiasHabilesComponent1750945331294,
    ObtenerFechaHabilComponent1750945331300,
    ObtenerFechaHabilAnteriorComponent1750945331308,
    ObtenerFechaHabilAnteriordeSucursalComponent1750945331314,
    ObtenerFechaHabildeSucursalComponent1750945331323,
    ObtenerInicioyFindeMesComponent1750945331331,
    ObtenerInicioyFindeMesdeSucursalComponent1750945331337,
    ObtenerProximaFechaHabilComponent1750945331345,
    ObtenerProximaFechaHabildeSucursalComponent1750945331351,
    AutorizarArchivoComponent1750945331359,
    CargarArchivoComponent1750945331366,
    CargarArchivoRecibidoComoDatoComponent1750945331374,
    DetenerArchivoComponent1750945331380,
    RechazarArchivoComponent1750945331387,
    CargarBeneficiariosComponent1750945331396,
    IngresarBeneficiarioComponent1750945331402,
    ObtenerBeneficiarioSegunFiltroComponent1750945331409,
    AltaAutomaticaContratoComponent1750945331416,
    CargarServiciosDisponiblesComponent1750945331421,
    ContratarDebitoAutomaticoComponent1750945331429,
    ObtenerDetalledeOrdendeCuentaComponent1750945331437,
    ObtenerDetalledePagoComponent1750945331446,
    ObtenerDetalleOrdenSegunCampoComponent1750945331453,
    ObtenerDetallePagoOrdenComponent1750945331461,
    ObtenerDeudaComponent1750945331467,
    ObtenerResumenOrdenComponent1750945331474,
    ObtenerServiciosComponent1750945331480,
    ObtenerValoresOrdenComponent1750945331486,
    ObtenerValoresOrdenSegunCampoComponent1750945331493,
    AutorizarOrdenComponent1750945331500,
    DetenerOrdenComponent1750945331506,
    IngresarOrdenPagoComponent1750945331515,
    ProcesarOrdenComponent1750945331520,
    RechazarOrdenComponent1750945331527,
    AnularPagoDeudaComponent1750945331533,
    PagarDeudaDesdeCuentaComponent1750945331538,
    RegistrarPagoDeudaComponent1750945331544,
    RegistrarPagoEnLineaComponent1750945331550,
    RegistrarPagoEnLineaDesdeCuentaComponent1750945331557,
    VisualizarListaResumenCabezalComponent1750945331563,
    VisualizarListaResumenCabezalOrdenComponent1750945331568,
    VisualizarOrdendeArchivoParaCuentaComponent1750945331576,
    VisualizarResultadoProcesamientoComponent1750945331581,
    VisualizarResumenCabezalComponent1750945331586,
    VisualizarSituacionArchivosComponent1750945331595,
    VisualizarSituacionLineasComponent1750945331600,
    ActualizarComponent1750945331615,
    ActualizarDocumentoDigitalComponent1750945331623,
    ActualizarDomicilioComponent1750945331631,
    ActualizarInformacionAdicionalComponent1750945331641,
    ActualizarRegistroEmpleadoComponent1750945331648,
    ActualizarTelefonoComponent1750945331658,
    AgregarDomicilioComponent1750945331665,
    AgregarInformacionAdicionalComponent1750945331677,
    AgregarIntegranteComponent1750945331683,
    AgregarTelefonoComponent1750945331690,
    AsociarDocumentoDigitalComponent1750945331696,
    EliminarDocumentoDigitalComponent1750945331702,
    EliminarDomicilioComponent1750945331709,
    EliminarInformacionAdicionalComponent1750945331714,
    EliminarIntegranteComponent1750945331720,
    HabilitarComponent1750945331728,
    InhabilitarComponent1750945331734,
    ModificarEjecutivoComponent1750945331742,
    CrearComponent1750945331749,
    CrearconPersonaExistenteComponent1750945331758,
    CrearParaPersonaJuridicaComponent1750945331764,
    ObtenerComponent1750945331770,
    ObtenerAhorrosProgramadosComponent1750945331778,
    ObtenerBolsillosComponent1750945331787,
    ObtenerClasificacionesInternasComponent1750945331796,
    ObtenerCuentaClienteComponent1750945331802,
    ObtenerCuentasCorrientesSaldoContableComponent1750945331811,
    ObtenerCuentasCorrientesSaldoDisponibleComponent1750945331818,
    ObtenerCuentasdeAhorroSaldoContableComponent1750945331825,
    ObtenerCuentasdeAhorroSaldoDisponibleComponent1750945331835,
    ObtenerDatosComponent1750945331842,
    ObtenerDetallePosicionComponent1750945331848,
    ObtenerDocumentoDigitalComponent1750945331854,
    ObtenerDocumentosDigitalesComponent1750945331860,
    ObtenerDomiciliosComponent1750945331867,
    ObtenerFacultadesComponent1750945331873,
    ObtenerIdentificadorUnicoComponent1750945331880,
    ObtenerInformacionAdicionalComponent1750945331886,
    ObtenerIntegrantesComponent1750945331893,
    ObtenerLimitesComponent1750945331899,
    ObtenerMotivosInhabilitacionComponent1750945331907,
    ObtenerPerfilComponent1750945331916,
    ObtenerPlazosFijosComponent1750945331924,
    ObtenerPlazosFijosCanceladosComponent1750945331932,
    ObtenerPlazosFijosconAvanceComponent1750945331939,
    ObtenerPosicionComponent1750945331946,
    ObtenerPrestamosComponent1750945331955,
    ObtenerPrestamosCanceladosComponent1750945331962,
    ObtenerPrestamosCastigadosComponent1750945331970,
    ObtenerPrestamosconAvanceComponent1750945331979,
    ObtenerResumendeProductosCierredeanoComponent1750945331986,
    ObtenerResumendeProductosSaldosContablesComponent1750945331994,
    ObtenerResumendeProductosSaldosDisponiblesComponent1750945332001,
    ObtenerResumenporProductoaCierreAnoComponent1750945332008,
    ObtenerRiesgodeCreditoComponent1750945332015,
    ObtenerSaldosdeOtrosProductosComponent1750945332022,
    ObtenerSectoresComponent1750945332029,
    ObtenerSegmentosComponent1750945332034,
    ObtenerTarjetasdeDebitoComponent1750945332041,
    ObtenerTelefonosComponent1750945332049,
    ObtenerTiposdeIntegracionComponent1750945332055,
    ObtenerTitularRepresentativoComponent1750945332064,
    ObtenerTitulosComponent1750945332070,
    ValidarExistenciaComponent1750945332076,
    VerificarEmpleadoComponent1750945332083,
    ObtenerAgenciasBancoComponent1750945332091,
    ObtenerBancosComponent1750945332098,
    ObtenerDetalleSucursalComponent1750945332106,
    ObtenerSucursalesPrincipalesComponent1750945332113,
    ObtenerActividadesComponent1750945332121,
    ObtenerActividadesporTipoComponent1750945332128,
    ObtenerEjecutivosComponent1750945332134,
    ObtenerTiposdeActividadComponent1750945332142,
    ObtenerTiposdeTarjetaComponent1750945332147,
    ObtenerImpuestosComponent1750945332152,
    ObtenerTiposdeDocumentoDigitalComponent1750945332160,
    ObtenerEstadosComponent1750945332165,
    ObtenerInstruccionesComponent1750945332170,
    ObtenerPaquetesComponent1750945332177,
    ObtenerTiposdeTextoComponent1750945332183,
    ObtenerCalendariodeSucursalComponent1750945332190,
    ObtenerCalendariosComponent1750945332197,
    ObtenerDetalledeCalendarioComponent1750945332202,
    ObtenerDetalledeCalendariodeSucursalComponent1750945332209,
    ObtenerDolarUSAComponent1750945332215,
    ObtenerEmpresaComponent1750945332220,
    ObtenerFechadeSistemaComponent1750945332227,
    ObtenerMonedaNacionalComponent1750945332232,
    ObtenerMonedasComponent1750945332239,
    ObtenerSucursalesComponent1750945332245,
    ObtenerAgrupadoresDomicilioComponent1750945332253,
    ObtenerBarriosyColoniasComponent1750945332261,
    ObtenerCiudadesyLocalidadesComponent1750945332268,
    ObtenerCodigosdeDomicilioComponent1750945332276,
    ObtenerEstadosProvinciasyDepartamentosComponent1750945332284,
    ObtenerPaisesComponent1750945332292,
    ObtenerTiposdeListasNegrasComponent1750945332298,
    ObtenerTiposdeTelefonoComponent1750945332305,
    ObtenerTiposdeViviendaComponent1750945332311,
    ObtenerPizarraporModuloComponent1750945332316,
    ObtenerPizarrasComponent1750945332323,
    ObtenerMenusComponent1750945332329,
    ObtenerPerfilesComponent1750945332334,
    AgregarTextoAsientoComponent1750945332342,
    AgregarTextoOrdinalComponent1750945332347,
    AnularMovimientoComponent1750945332352,
    ActualizarCondicionImpositivaComponent1750945332359,
    CrearCondicionImpositivaComponent1750945332364,
    ObtenerIdBantotalMovimientoComponent1750945332369,
    ObtenerIdBantotalOperacionComponent1750945332379,
    ObtenerIdBantotalProductoComponent1750945332386,
    ObtenerIdentificadorUnicodeMovimientoComponent1750945332393,
    ObtenerIdentificadorUnicodeOperacionComponent1750945332400,
    ObtenerIdentificadorUnicodeProductoComponent1750945332406,
    ObtenerClientedeunaOperacionComponent1750945332413,
    ObtenerCondicionImpositivaComponent1750945332419,
    ObtenerDetalledeMovimientoComponent1750945332426,
    ObtenerDetalledeOrdinalComponent1750945332433,
    ObtenerIntegrantesdeOperacionComponent1750945332440,
    ObtenerTextosdeMovimientoComponent1750945332447,
    RegistrarAsientoComponent1750945332452,
    RegistrarAsientoFechaValorComponent1750945332460,
    CancelarComponent1750945332466,
    CashInComponent1750945332473,
    CashOutComponent1750945332479,
    ContratarComponent1750945332484,
    ObtenerDatosComponent1750945332491,
    ObtenerMovimientosComponent1750945332500,
    ObtenerProductosComponent1750945332508,
    ObtenerProductosCVComponent1750945332521,
    ObtenerChequeraComponent1750945332556,
    ObtenerChequerasComponent1750945332563,
    ObtenerChequesdeChequeraComponent1750945332573,
    ObtenerComisionChequeraComponent1750945332579,
    ObtenerEstadodeChequeraComponent1750945332585,
    ObtenerSolicitudesdeChequerasComponent1750945332592,
    ObtenerTiposdeChequeraComponent1750945332598,
    ObtenerTiposdeChequeraporProductoComponent1750945332605,
    EliminarChequeraComponent1750945332612,
    RegistrarOrdendeNoPagodeChequeraComponent1750945332620,
    RegistrarOrdendeNoPagodeChequesComponent1750945332628,
    SolicitarChequeraComponent1750945332635,
    ContratarconPeriodicidadComponent1750945332640,
    ContratarProductoComponent1750945332649,
    ContratarProductoconAltadeFacultadesComponent1750945332655,
    ObtenerAcuerdosComponent1750945332663,
    ObtenerDatosComponent1750945332672,
    ObtenerEstadodeCuentaComponent1750945332681,
    ObtenerEvoluciondeSaldosComponent1750945332689,
    ObtenerProductosComponent1750945332696,
    ContratarconPeriodicidadComponent1750945332703,
    ContratarProductoComponent1750945332710,
    ContratarProductoconAltadeFacultadesComponent1750945332716,
    ObtenerDatosComponent1750945332723,
    ObtenerEstadodeCuentaComponent1750945332731,
    ObtenerEvoluciondeSaldosComponent1750945332735,
    ObtenerProductosComponent1750945332742,
    ActualizarBeneficiariosComponent1750945332747,
    ObtenerBeneficiariosComponent1750945332752,
    ActualizarDocumentoDigitalComponent1750945332760,
    AsociarDocumentoDigitalComponent1750945332766,
    EliminarDocumentoDigitalComponent1750945332774,
    ObtenerDocumentoDigitalComponent1750945332782,
    ObtenerDocumentosDigitalesComponent1750945332789,
    ObtenerBolsillosComponent1750945332796,
    ObtenerCBUdeCuentaVistaComponent1750945332802,
    ObtenerCuentaVistadeCBUComponent1750945332808,
    ObtenerDetalleBloqueoComponent1750945332815,
    ObtenerEstadodeCuentaporPeriodoComponent1750945332821,
    ObtenerEstadoDeOperacionComponent1750945332828,
    ObtenerFacultadesComponent1750945332833,
    ObtenerPaqueteComponent1750945332841,
    ObtenerPeriododeAcreditacionComponent1750945332856,
    ObtenerPeriodosdeAcreditacionComponent1750945332849,
    ObtenerSaldoBloqueadoComponent1750945332865,
    ObtenerSaldoDisponibleComponent1750945332872,
    ObtenerSaldosBloqueadosComponent1750945332881,
    AcreditarEnCuentaComponent1750945332888,
    ActivarComponent1750945332896,
    ActualizarPeriododeAcreditacionComponent1750945332903,
    BloquearSaldoComponent1750945332910,
    CancelarComponent1750945332916,
    DebitarEnCuentaComponent1750945332921,
    DesbloquearSaldoComponent1750945332928,
    ActualizarPerfilTransaccionalComponent1750945332936,
    AgregarPerfilTransaccionalComponent1750945332943,
    ObtenerPerfilTransaccionalComponent1750945332949,
    TraspasarConTipoDeCambioEspecialComponent1750945332955,
    TraspasarEntreCuentasdelaMismaPersonaComponent1750945332964,
    TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750945332971,
    TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750945332980,
    TraspasarEntreCuentasPropiasComponent1750945333002,
    TraspasarEntreCuentasPropiascontipodecambioComponent1750945332986,
    TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750945332996,
    TraspasarEntreCuentasTercerosComponent1750945333025,
    TraspasarEntreCuentasTerceroscontipodecambioComponent1750945333010,
    TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750945333018,
    ActualizarBeneficiariosComponent1750945333031,
    ObtenerBeneficiariosComponent1750945333038,
    ContratarComponent1750945333048,
    ContratarConFacultadesComponent1750945333056,
    ContratarSimulacionComponent1750945333063,
    ActualizarDocumentoDigitalComponent1750945333069,
    AsociarDocumentoDigitalComponent1750945333078,
    EliminarDocumentoDigitalComponent1750945333085,
    ObtenerDocumentoDigitalComponent1750945333091,
    ModificarCuentaDestinoalVencimientoComponent1750945333099,
    ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750945333107,
    ModificarInstruccionComponent1750945333114,
    ObtenerAvanceComponent1750945333124,
    ObtenerDatosComponent1750945333132,
    ObtenerDatosPrecancelacionComponent1750945333141,
    ObtenerDocumentosDigitalesComponent1750945333148,
    ObtenerInstruccionComponent1750945333162,
    ObtenerInstruccionesHabilitadosComponent1750945333155,
    ObtenerMovimientosComponent1750945333167,
    ObtenerPeriodosHabilitadosComponent1750945333173,
    ObtenerProductosComponent1750945333178,
    ObtenerProductosHabilitadosComponent1750945333189,
    ObtenerTasadePrecancelacionComponent1750945333197,
    PrecancelarComponent1750945333207,
    SimularComponent1750945333214,
    SimularConCronogramaComponent1750945333227,
    ConfirmarListaComponent1750945333233,
    CrearListaComponent1750945333238,
    CrearListaChequesComponent1750945333244,
    ObtenerProductosComponent1750945333251,
    ObtenerTiposDeDesembolsoComponent1750945333258,
    SeleccionarOpcionDesembolsoComponent1750945333264,
    ObtenerAgrupadoresComponent1750945333269,
    ObtenerCierredeSaldosporMonedaComponent1750945333278,
    ObtenerCondicionesGeneralesComponent1750945333284,
    ObtenerIndicadoresComponent1750945333290,
    ObtenerMetodosMasEjecutadosComponent1750945333296,
    ObtenerMonedasIndicesComponent1750945333306,
    ObtenerRubrosBolsaComponent1750945333312,
    ObtenerServiciosMasEjecutadosComponent1750945333319,
    ObtenerSesionesPorUsuarioComponent1750945333326,
    ObtenerSucursalesCajasComponent1750945333333,
    ObtenerTransaccionesporEstadosComponent1750945333342,
    BuscarClienteComponent1750945333349,
    CompletarTareaComponent1750945333355,
    CrearSolicitudAmpliacionComponent1750945333362,
    CrearSolicitudIndividualComponent1750945333367,
    CrearSolicitudRenovacionComponent1750945333374,
    AgregarFiadorComponent1750945333382,
    EliminarFiadorComponent1750945333390,
    ActualizarGrupoComponent1750945333395,
    ActualizarIntegrantedeGrupoComponent1750945333402,
    AgregarGrupoComponent1750945333408,
    AgregarIntegranteaGrupoComponent1750945333414,
    CrearSolicitudGrupalComponent1750945333419,
    HabilitarIntegrantedeunGrupoComponent1750945333427,
    InhabilitarIntegrantedeunGrupoComponent1750945333432,
    ObtenerDetalleGrupoComponent1750945333437,
    ObtenerGruposComponent1750945333444,
    ObtenerIntegrantesdeGrupoComponent1750945333452,
    ObtenerTiposdeGrupoComponent1750945333460,
    ObtenerTiposdeIntegranteComponent1750945333467,
    SimularPrestamoAmortizableGrupalComponent1750945333474,
    ObtenerAsesoresComponent1750945333484,
    ObtenerCampanasComponent1750945333491,
    ObtenerDestinosCreditoComponent1750945333501,
    ObtenerOperacionesClienteComponent1750945333510,
    ObtenerOrigenesdeCaptacionComponent1750945333518,
    ObtenerProductosComponent1750945333526,
    ObtenerSolicitudesClienteComponent1750945333532,
    ObtenerTiposAvalComponent1750945333540,
    AgregarOperacionesaCancelarComponent1750945333548,
    ObtenerOperacionesaCancelarComponent1750945333555,
    QuitarOperacionesaCancelarComponent1750945333564,
    SimularLibreAmortizacionComponent1750945333574,
    SimularPrestamoAmortizableComponent1750945333582,
    SimularPrestamoPlazoFijoComponent1750945333592,
    ValidarPoliticasComponent1750945333602,
    ObtenerCantidadCuotasComponent1750945333610,
    ObtenerCapitalComponent1750945333617,
    ObtenerComisionesComponent1750945333625,
    ObtenerComisionesporCuotaComponent1750945333630,
    ObtenerDiasPrimerPeriodoComponent1750945333636,
    ObtenerPeriodoEntreCuotasComponent1750945333655,
    ObtenerPermiteSegurosdelMismoTipoComponent1750945333645,
    ObtenerPlazoComponent1750945333664,
    ObtenerRequiereSegurodeVidaObligatorioComponent1750945333673,
    ObtenerSegurosComponent1750945333681,
    ObtenerItemsModeloComponent1750945333689,
    ObtenerModelosPAEComponent1750945333697,
    ObtenerScoresComponent1750945333704,
    ObtenerTiposDeModelosComponent1750945333711,
    ContratarPrestamoComponent1750945333716,
    ContratarVehicularComponent1750945333725,
    CrearClienteComponent1750945333730,
    CrearPersonaClienteComponent1750945333739,
    ObtenerDatosdeUsuarioComponent1750945333744,
    ObtenerDetalledeOfertaAmortizableComponent1750945333751,
    ObtenerDetalleOfertaVehicularComponent1750945333759,
    ObtenerMarcasComponent1750945333764,
    ObtenerModelosComponent1750945333769,
    ObtenerPartnersComponent1750945333777,
    ObtenerPrestamosdeClienteComponent1750945333801,
    ObtenerProductosComponent1750945333784,
    ObtenerProductosdelPartnerComponent1750945333792,
    ObtenerPuntosdeVentaComponent1750945333808,
    ObtenerVendedoresComponent1750945333815,
    ObtenerVersionesComponent1750945333822,
    SimularOfertasComponent1750945333831,
    SimularOfertasVehicularComponent1750945333840,
    SimularPrestamoComponent1750945333849,
    SimularVehicularComponent1750945333858,
    ObtenerCorrelativoGuiaComponent1750945333866,
    ObtenerCorrelativoGuiaEspecialComponent1750945333874,
    ObtenerGuiadeProcesoComponent1750945333880,
    ObtenerGuiaEspecialdeProcesoComponent1750945333887,
    ObtenerOpcionGeneraldeProcesoComponent1750945333895,
    ObtenerOpcionGeneralPorModuloComponent1750945333902,
    ObtenerProgramaParticularComponent1750945333911,
    ActualizarComponent1750945333919,
    ActualizarCelularComponent1750945333925,
    ActualizarContactoComponent1750945333930,
    ActualizarConyugeComponent1750945333944,
    ActualizarCorreoElectronicoComponent1750945333938,
    ActualizarDomicilioComponent1750945333949,
    ActualizarFATCAComponent1750945333957,
    ActualizarInformacionAdicionalComponent1750945333964,
    ActualizarInformacionFinancieraComponent1750945333970,
    ActualizarIntegrantedePersonaJuridicaComponent1750945333977,
    ActualizarPersonaJuridicaComponent1750945333986,
    ActualizarProfesionComponent1750945333995,
    ActualizarReferenciaComponent1750945334002,
    ActualizarRegistroEmpleadoComponent1750945334010,
    ActualizarTelefonoComponent1750945334017,
    ActualizarVictimaHechoViolentoComponent1750945334025,
    ModificarDocumentoAdicionalComponent1750945334031,
    AgregaraListaNegraComponent1750945334036,
    AgregarContactoComponent1750945334042,
    AgregarCorreoElectronicoComponent1750945334048,
    AgregarDatosPEPComponent1750945334055,
    AgregarDocumentoAdicionalComponent1750945334062,
    AgregarDomicilioComponent1750945334069,
    AgregarEstadoFinancieroComponent1750945334077,
    AgregarFATCAComponent1750945334084,
    AgregarInformacionAdicionalComponent1750945334093,
    AgregarInformacionFinancieraComponent1750945334105,
    AgregarIntegranteaPersonaJuridicaComponent1750945334112,
    AgregarPersonaVinculadaComponent1750945334118,
    AgregarReferenciaComponent1750945334125,
    AgregarTelefonoComponent1750945334131,
    AgregarVictimaHechoViolentoComponent1750945334140,
    CrearComponent1750945334148,
    CrearConyugeComponent1750945334155,
    CrearPersonaJuridicaComponent1750945334161,
    CrearReducidoComponent1750945334167,
    ActualizarDocumentoDigitalComponent1750945334175,
    AsociarDocumentoDigitalComponent1750945334182,
    EliminarDocumentoDigitalComponent1750945334190,
    ObtenerDocumentoDigitalComponent1750945334197,
    ObtenerDocumentosDigitalesComponent1750945334204,
    EliminarConyugeComponent1750945334211,
    EliminarDocumentoAdicionalComponent1750945334219,
    EliminarDomicilioComponent1750945334226,
    EliminarInformacionAdicionalComponent1750945334235,
    EliminarIntegrantedePersonaJuridicaComponent1750945334242,
    EliminarPersonaVinculadaComponent1750945334250,
    EliminarProfesionComponent1750945334257,
    ObtenerComponent1750945334267,
    ObtenerConceptoComponent1750945334276,
    ObtenerContactosComponent1750945334284,
    ObtenerConyugeComponent1750945334312,
    ObtenerCorreosElectronicosComponent1750945334292,
    ObtenerCuentasClienteComponent1750945334303,
    ObtenerDatosPEPComponent1750945334319,
    ObtenerDocumentosAdicionalesComponent1750945334330,
    ObtenerDomiciliosComponent1750945334339,
    ObtenerEstadosCivilesComponent1750945334347,
    ObtenerFacultadesComponent1750945334356,
    ObtenerFATCAComponent1750945334365,
    ObtenerHobbiesComponent1750945334374,
    ObtenerHobbyComponent1750945334381,
    ObtenerIdBantotalComponent1750945334388,
    ObtenerIdentidadesdeGeneroComponent1750945334396,
    ObtenerIdentificadorUnicoComponent1750945334403,
    ObtenerInformacionAdicionalComponent1750945334410,
    ObtenerInformacionFinancieraComponent1750945334416,
    ObtenerIntegrantesPersonaJuridicaComponent1750945334423,
    ObtenerLimitesComponent1750945334428,
    ObtenerNaturalezasJuridicasComponent1750945334434,
    ObtenerNivelesEducativosComponent1750945334441,
    ObtenerOcupacionesComponent1750945334445,
    ObtenerPersonaJuridicaComponent1750945334453,
    ObtenerPersonasComponent1750945334460,
    ObtenerPersonasJuridicasComponent1750945334465,
    ObtenerPersonasVinculadasComponent1750945334470,
    ObtenerProfesionComponent1750945334483,
    ObtenerProfesionesComponent1750945334477,
    ObtenerReferenciasComponent1750945334489,
    ObtenerTarjetasdeDebitoComponent1750945334497,
    ObtenerTelefonosComponent1750945334502,
    ObtenerTipodePersonaComponent1750945334511,
    ObtenerTiposdeDocumentoComponent1750945334522,
    ObtenerTiposDeFuncionarioPublicoComponent1750945334530,
    ObtenerTiposDePEPComponent1750945334535,
    ObtenerTitularesDelTelefonoComponent1750945334543,
    ObtenerVictimaHechoViolentoComponent1750945334550,
    ObtenerVinculosComponent1750945334557,
    ObtenerVinculosdeAfinidadComponent1750945334563,
    ObtenerVinculosdeConsanguinidadComponent1750945334573,
    ObtenerVinculosJuridicosComponent1750945334582,
    EvaluarPAEComponent1750945334591,
    ValidarCorreoElectronicoComponent1750945334598,
    ValidarDocumentoComponent1750945334609,
    ValidarenListasNegrasComponent1750945334617,
    ValidarExistenciaComponent1750945334625,
    ValidarListasInhabilitadosComponent1750945334634,
    VerificarEmpleadoComponent1750945334641,
    ConvertirTasaAnualEfectivaaLinealComponent1750945334650,
    ConvertirTasaAnualLinealaEfectivaComponent1750945334657,
    ConvertirTasaMensualEfectivaaLinealComponent1750945334666,
    ConvertirTasaMensualLinealaEfectivaComponent1750945334675,
    ObtenerCotizacionComponent1750945334683,
    ObtenerCotizacionaFechaComponent1750945334691,
    ObtenerCotizacionCierreComponent1750945334698,
    ObtenerPizarraEspecialporTransaccionComponent1750945334705,
    ObtenerPrecioaFechaComponent1750945334711,
    ObtenerPrecioEspecieComponent1750945334718,
    ObtenerTasadeOperacionComponent1750945334724,
    ObtenerTasaParaClienteComponent1750945334732,
    ObtenerTasaParaProductoComponent1750945334740,
    ObtenerTipodeCambioComponent1750945334747,
    ObtenerTiposDeCambioEspecialesComponent1750945334755,
    CancelarComponent1750945334763,
    CancelaraFechaComponent1750945334772,
    CancelaraFechaTercerosComponent1750945334779,
    CancelarTercerosComponent1750945334785,
    ContratarComponent1750945334792,
    ContratarAmpliacionComponent1750945334802,
    ContratarRefinanciacionComponent1750945334811,
    ContratarRefinanciacionporDeudaTotalComponent1750945334817,
    ContratarRefinanciacionporSaldoCapitalComponent1750945334824,
    ActualizarDocumentoDigitalComponent1750945334830,
    AsociarDocumentoDigitalComponent1750945334836,
    EliminarDocumentoDigitalComponent1750945334844,
    ObtenerDocumentoDigitalComponent1750945334850,
    ObtenerDocumentosDigitalesComponent1750945334858,
    ObtenerCronogramaComponent1750945334865,
    ObtenerCronogramaaFechaComponent1750945334874,
    ObtenerCronogramaconPagosaFechaComponent1750945334880,
    ObtenerCronogramaenEspecieComponent1750945334889,
    ObtenerCronogramaOriginalComponent1750945334897,
    ObtenerCuentadeCobroComponent1750945334903,
    ObtenerDatosdelProximoVencimientoComponent1750945334910,
    ObtenerDetalleComponent1750945334916,
    ObtenerDetalleaFechaComponent1750945334924,
    ObtenerDetalledeCancelacionTotalComponent1750945334930,
    ObtenerDetalledeOfertaComponent1750945334938,
    ObtenerDetalledeOfertaAmortizableComponent1750945334946,
    ObtenerDetalledeOperacionesaRefinanciarComponent1750945334953,
    ObtenerDetalledePrestamoCanceladoComponent1750945334963,
    ObtenerDetallePagoPrestamoComponent1750945334971,
    ObtenerDetalleReducidoComponent1750945334977,
    ObtenerDetalleSimulacionComponent1750945334986,
    ObtenerDeudaComponent1750945334994,
    ObtenerDeudaPrestamoCastigadoComponent1750945335002,
    ObtenerDeudaVencidaComponent1750945335011,
    ObtenerFechadeIncumplimientoComponent1750945335019,
    ObtenerFechadeUltimoPagoComponent1750945335028,
    ObtenerFechasdePagoComponent1750945335037,
    ObtenerInformacionAdicionalComponent1750945335045,
    ObtenerMontodeCancelacionComponent1750945335054,
    ObtenerMotivosPrecancelacionComponent1750945335062,
    ObtenerPagosdeCuotaComponent1750945335069,
    ObtenerPagosdeunPrestamoComponent1750945335078,
    ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750945335087,
    ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750945335096,
    ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750945335106,
    ObtenerProductosComponent1750945335112,
    ObtenerProductosRefinanciacionComponent1750945335118,
    ObtenerRefinanciacionSimuladaComponent1750945335126,
    AbonaraCuentaComponent1750945335134,
    ActualizarInformacionAdicionalComponent1750945335140,
    ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750945335147,
    AgregarCuentadeCobroComponent1750945335154,
    AgregarInformacionAdicionalComponent1750945335162,
    EliminarCuentadeCobroComponent1750945335167,
    EliminarInformacionAdicionalComponent1750945335173,
    SolicitarPrecancelacionComponent1750945335181,
    AdelantarCapitalConReduccionDeCuotaComponent1750945335188,
    AdelantarCapitalConReduccionDePlazoComponent1750945335195,
    PagarCuotaComponent1750945335201,
    PagarCuotaaFechaComponent1750945335208,
    PagarCuotaaFechaTercerosComponent1750945335215,
    PagarCuotaTercerosComponent1750945335223,
    ResimularAmortizableComponent1750945335231,
    ResimularAmpliacionComponent1750945335240,
    ResimularRefinanciacionComponent1750945335249,
    SimularComponent1750945335257,
    SimularAmortizableComponent1750945335267,
    SimularAmortizableSinClienteComponent1750945335276,
    SimularAmpliacionComponent1750945335284,
    SimularAmpliacionIngresandoSegurosComponent1750945335293,
    SimularDespejandoCapitalyCantidaddeCuotasComponent1750945335301,
    SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750945335310,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750945335315,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750945335321,
    SimularDespejandoFechadeVencimientoyTasaComponent1750945335328,
    SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750945335334,
    SimularIngresandoBalloonComponent1750945335342,
    SimularIngresandoBalloonSinClienteComponent1750945335350,
    SimularIngresandoSegurosComponent1750945335358,
    SimularIngresandoSegurosSinClienteComponent1750945335365,
    SimularLibreAmortizacionComponent1750945335372,
    SimularLibreAmortizacionSinClienteComponent1750945335380,
    SimularOfertasComponent1750945335386,
    SimularPlazoFijoComponent1750945335393,
    SimularRefinanciacionComponent1750945335400,
    SimularRefinanciacionporDeudaTotalComponent1750945335407,
    SimularRefinanciacionporSaldoCapitalComponent1750945335413,
    ActualizarTextosComponent1750945335419,
    AgregarTextosComponent1750945335426,
    EliminarTextosComponent1750945335433,
    ObtenerTextosComponent1750945335440,
    EvaluarRegladeNegocioComponent1750945335452,
    ObtenerReglasdeNegocioComponent1750945335458,
    ObtenerVariablesReglaComponent1750945335464,
    ValidarDatosRegladeNegocioComponent1750945335469,
    AutorizarExcepcionComponent1750945335477,
    ObtenerDetalledeExcepcionComponent1750945335482,
    ObtenerExcepcionesComponent1750945335489,
    RechazarExcepcionComponent1750945335496,
    RegistrarDispositivoComponent1750945335501,
    ContratarSeguroComponent1750945335508,
    ObtenerMontosDeUnSeguroComponent1750945335513,
    ObtenerSegurosComponent1750945335519,
    ObtenerSegurosAPagarComponent1750945335527,
    PagarSeguroComponent1750945335533,
    ObtenerCodigosdeLimitesComponent1750945335567,
    ObtenerCuentaPreferencialComponent1750945335540,
    ObtenerCuentasaAsociarComponent1750945335547,
    ObtenerCuentasAsociadasComponent1750945335553,
    ObtenerCuentasAsociadasPorTipoComponent1750945335561,
    ObtenerDatosComponent1750945335575,
    ObtenerDatosContactoComponent1750945335581,
    ObtenerIdentificadorUnicoComponent1750945335588,
    ObtenerLimitesComponent1750945335596,
    ObtenerMovimientosComponent1750945335604,
    ObtenerTarjetaComponent1750945335611,
    ObtenerTarjetaHabienteComponent1750945335617,
    ObtenerTarjetasAdicionalesComponent1750945335625,
    ObtenerTiposdeCuentaComponent1750945335630,
    ActivarComponent1750945335637,
    ActualizarCuentaPreferencialComponent1750945335643,
    ActualizarDatosContactoComponent1750945335649,
    AsociarCuentaComponent1750945335657,
    BlanquearPinComponent1750945335663,
    BloquearComponent1750945335669,
    BloquearDesdeREDComponent1750945335677,
    CrearComponent1750945335685,
    CrearConCuentasAsociadasComponent1750945335693,
    DenunciarComponent1750945335701,
    DenunciarDesdeREDComponent1750945335708,
    DesbloquearComponent1750945335715,
    DesbloquearDesdeREDComponent1750945335721,
    EliminarCuentaAsociadaComponent1750945335728,
    ModificarLimiteComponent1750945335736,
    ComprarComponent1750945335744,
    ObtenerEstadoCompraComponent1750945335750,
    ObtenerGruposComponent1750945335758,
    ObtenerValoresComponent1750945335765,
    AgregarPerfilComponent1750945335772,
    CrearComponent1750945335779,
    EliminarPerfilComponent1750945335784,
    EliminarUsuarioComponent1750945335792,
    HabilitarEnCanalComponent1750945335799,
    HabilitarUsuarioComponent1750945335807,
    InhabilitarUsuarioComponent1750945335813,
    ModificarComponent1750945335818,
    ObtenerComponent1750945335825,
    ObtenerPerfilesComponent1750945335831,
    ObtenerUsuariosComponent1750945335837,
    ObtenerUsuariosParaPerfilComponent1750945335844,
    ObtenerMetadataDeTareaComponent1750945335850,
    ObtenerProcesosHabilitadosComponent1750945335857,
    ObtenerRolesComponent1750945335863,
    ObtenerRolesdeTareaComponent1750945335868,
    ObtenerTareasdeProcesoComponent1750945335876,
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
    ContratarSimulacionComponent1750945330910,
    CrearComponent1750945330924,
    SimularComponent1750945330931,
    ActualizarDocumentoDigitalComponent1750945330936,
    AsociarDocumentoDigitalComponent1750945330944,
    EliminarDocumentoDigitalComponent1750945330950,
    ObtenerDocumentoDigitalComponent1750945330958,
    ObtenerDocumentosDigitalesComponent1750945330965,
    ModificarCuentaDestinoComponent1750945330972,
    ModificarCuentaOrigenComponent1750945330980,
    ModificarFechadeAbonoComponent1750945330986,
    ModificarMetadeAhorroComponent1750945330994,
    ModificarMontodeAbonoComponent1750945331001,
    ObtenerComponent1750945331010,
    ObtenerCronogramaAbonosComponent1750945331019,
    ObtenerCuentasDestinoHabilitadasComponent1750945331028,
    ObtenerCuentasOrigenHabilitadasComponent1750945331035,
    ObtenerEstadodeCuentaComponent1750945331043,
    ObtenerPeriodosHabilitadosComponent1750945331049,
    ObtenerPlazosHabilitadosComponent1750945331056,
    ObtenerProductosComponent1750945331064,
    AnularChequeElectronicoComponent1750945331072,
    AsignarIdaChequeElectronicoComponent1750945331079,
    CrearChequeraElectronicaComponent1750945331086,
    DepositarChequeElectronicodeBancoPropioComponent1750945331094,
    DepositarChequeElectronicodeOtroBancoComponent1750945331103,
    DepositarChequeElectronicoenCustodiaComponent1750945331112,
    EmitirChequeElectronicoComponent1750945331121,
    EmitirChequeElectronicodeChequeraComponent1750945331128,
    HabilitarChequeElectronicoComponent1750945331135,
    CrearAdhesionComponent1750945331142,
    CrearStopDebitComponent1750945331149,
    CrearStopDebitparaAdhesionconImporteComponent1750945331154,
    EliminarStopDebitComponent1750945331160,
    ObtenerAdhesionesComponent1750945331168,
    ObtenerDebitosComponent1750945331177,
    ObtenerEmpresasOriginantesComponent1750945331183,
    ObtenerStopDebitsComponent1750945331192,
    ReversarDebitosComponent1750945331199,
    SolicitarBajadeAdhesionComponent1750945331204,
    AutenticacionComponent1750945331214,
    ObtenerDetalledeEjecucionComponent1750945331218,
    ObtenerDetalledeProcesoComponent1750945331223,
    ObtenerProcesosconErrorComponent1750945331230,
    ObtenerProcesosCriticosComponent1750945331238,
    ObtenerProcesosDiariosComponent1750945331244,
    ObtenerProcesosMensualesComponent1750945331251,
    ObtenerProcesosReprocesablesComponent1750945331262,
    VerificarEstadoServidorComponent1750945331267,
    CalcularFechadeVencimientoComponent1750945331275,
    CalcularFechadeVencimientoenDiasHabilesComponent1750945331281,
    CalcularPlazoComponent1750945331287,
    CalcularPlazoenDiasHabilesComponent1750945331294,
    ObtenerFechaHabilComponent1750945331300,
    ObtenerFechaHabilAnteriorComponent1750945331308,
    ObtenerFechaHabilAnteriordeSucursalComponent1750945331314,
    ObtenerFechaHabildeSucursalComponent1750945331323,
    ObtenerInicioyFindeMesComponent1750945331331,
    ObtenerInicioyFindeMesdeSucursalComponent1750945331337,
    ObtenerProximaFechaHabilComponent1750945331345,
    ObtenerProximaFechaHabildeSucursalComponent1750945331351,
    AutorizarArchivoComponent1750945331359,
    CargarArchivoComponent1750945331366,
    CargarArchivoRecibidoComoDatoComponent1750945331374,
    DetenerArchivoComponent1750945331380,
    RechazarArchivoComponent1750945331387,
    CargarBeneficiariosComponent1750945331396,
    IngresarBeneficiarioComponent1750945331402,
    ObtenerBeneficiarioSegunFiltroComponent1750945331409,
    AltaAutomaticaContratoComponent1750945331416,
    CargarServiciosDisponiblesComponent1750945331421,
    ContratarDebitoAutomaticoComponent1750945331429,
    ObtenerDetalledeOrdendeCuentaComponent1750945331437,
    ObtenerDetalledePagoComponent1750945331446,
    ObtenerDetalleOrdenSegunCampoComponent1750945331453,
    ObtenerDetallePagoOrdenComponent1750945331461,
    ObtenerDeudaComponent1750945331467,
    ObtenerResumenOrdenComponent1750945331474,
    ObtenerServiciosComponent1750945331480,
    ObtenerValoresOrdenComponent1750945331486,
    ObtenerValoresOrdenSegunCampoComponent1750945331493,
    AutorizarOrdenComponent1750945331500,
    DetenerOrdenComponent1750945331506,
    IngresarOrdenPagoComponent1750945331515,
    ProcesarOrdenComponent1750945331520,
    RechazarOrdenComponent1750945331527,
    AnularPagoDeudaComponent1750945331533,
    PagarDeudaDesdeCuentaComponent1750945331538,
    RegistrarPagoDeudaComponent1750945331544,
    RegistrarPagoEnLineaComponent1750945331550,
    RegistrarPagoEnLineaDesdeCuentaComponent1750945331557,
    VisualizarListaResumenCabezalComponent1750945331563,
    VisualizarListaResumenCabezalOrdenComponent1750945331568,
    VisualizarOrdendeArchivoParaCuentaComponent1750945331576,
    VisualizarResultadoProcesamientoComponent1750945331581,
    VisualizarResumenCabezalComponent1750945331586,
    VisualizarSituacionArchivosComponent1750945331595,
    VisualizarSituacionLineasComponent1750945331600,
    ActualizarComponent1750945331615,
    ActualizarDocumentoDigitalComponent1750945331623,
    ActualizarDomicilioComponent1750945331631,
    ActualizarInformacionAdicionalComponent1750945331641,
    ActualizarRegistroEmpleadoComponent1750945331648,
    ActualizarTelefonoComponent1750945331658,
    AgregarDomicilioComponent1750945331665,
    AgregarInformacionAdicionalComponent1750945331677,
    AgregarIntegranteComponent1750945331683,
    AgregarTelefonoComponent1750945331690,
    AsociarDocumentoDigitalComponent1750945331696,
    EliminarDocumentoDigitalComponent1750945331702,
    EliminarDomicilioComponent1750945331709,
    EliminarInformacionAdicionalComponent1750945331714,
    EliminarIntegranteComponent1750945331720,
    HabilitarComponent1750945331728,
    InhabilitarComponent1750945331734,
    ModificarEjecutivoComponent1750945331742,
    CrearComponent1750945331749,
    CrearconPersonaExistenteComponent1750945331758,
    CrearParaPersonaJuridicaComponent1750945331764,
    ObtenerComponent1750945331770,
    ObtenerAhorrosProgramadosComponent1750945331778,
    ObtenerBolsillosComponent1750945331787,
    ObtenerClasificacionesInternasComponent1750945331796,
    ObtenerCuentaClienteComponent1750945331802,
    ObtenerCuentasCorrientesSaldoContableComponent1750945331811,
    ObtenerCuentasCorrientesSaldoDisponibleComponent1750945331818,
    ObtenerCuentasdeAhorroSaldoContableComponent1750945331825,
    ObtenerCuentasdeAhorroSaldoDisponibleComponent1750945331835,
    ObtenerDatosComponent1750945331842,
    ObtenerDetallePosicionComponent1750945331848,
    ObtenerDocumentoDigitalComponent1750945331854,
    ObtenerDocumentosDigitalesComponent1750945331860,
    ObtenerDomiciliosComponent1750945331867,
    ObtenerFacultadesComponent1750945331873,
    ObtenerIdentificadorUnicoComponent1750945331880,
    ObtenerInformacionAdicionalComponent1750945331886,
    ObtenerIntegrantesComponent1750945331893,
    ObtenerLimitesComponent1750945331899,
    ObtenerMotivosInhabilitacionComponent1750945331907,
    ObtenerPerfilComponent1750945331916,
    ObtenerPlazosFijosComponent1750945331924,
    ObtenerPlazosFijosCanceladosComponent1750945331932,
    ObtenerPlazosFijosconAvanceComponent1750945331939,
    ObtenerPosicionComponent1750945331946,
    ObtenerPrestamosComponent1750945331955,
    ObtenerPrestamosCanceladosComponent1750945331962,
    ObtenerPrestamosCastigadosComponent1750945331970,
    ObtenerPrestamosconAvanceComponent1750945331979,
    ObtenerResumendeProductosCierredeanoComponent1750945331986,
    ObtenerResumendeProductosSaldosContablesComponent1750945331994,
    ObtenerResumendeProductosSaldosDisponiblesComponent1750945332001,
    ObtenerResumenporProductoaCierreAnoComponent1750945332008,
    ObtenerRiesgodeCreditoComponent1750945332015,
    ObtenerSaldosdeOtrosProductosComponent1750945332022,
    ObtenerSectoresComponent1750945332029,
    ObtenerSegmentosComponent1750945332034,
    ObtenerTarjetasdeDebitoComponent1750945332041,
    ObtenerTelefonosComponent1750945332049,
    ObtenerTiposdeIntegracionComponent1750945332055,
    ObtenerTitularRepresentativoComponent1750945332064,
    ObtenerTitulosComponent1750945332070,
    ValidarExistenciaComponent1750945332076,
    VerificarEmpleadoComponent1750945332083,
    ObtenerAgenciasBancoComponent1750945332091,
    ObtenerBancosComponent1750945332098,
    ObtenerDetalleSucursalComponent1750945332106,
    ObtenerSucursalesPrincipalesComponent1750945332113,
    ObtenerActividadesComponent1750945332121,
    ObtenerActividadesporTipoComponent1750945332128,
    ObtenerEjecutivosComponent1750945332134,
    ObtenerTiposdeActividadComponent1750945332142,
    ObtenerTiposdeTarjetaComponent1750945332147,
    ObtenerImpuestosComponent1750945332152,
    ObtenerTiposdeDocumentoDigitalComponent1750945332160,
    ObtenerEstadosComponent1750945332165,
    ObtenerInstruccionesComponent1750945332170,
    ObtenerPaquetesComponent1750945332177,
    ObtenerTiposdeTextoComponent1750945332183,
    ObtenerCalendariodeSucursalComponent1750945332190,
    ObtenerCalendariosComponent1750945332197,
    ObtenerDetalledeCalendarioComponent1750945332202,
    ObtenerDetalledeCalendariodeSucursalComponent1750945332209,
    ObtenerDolarUSAComponent1750945332215,
    ObtenerEmpresaComponent1750945332220,
    ObtenerFechadeSistemaComponent1750945332227,
    ObtenerMonedaNacionalComponent1750945332232,
    ObtenerMonedasComponent1750945332239,
    ObtenerSucursalesComponent1750945332245,
    ObtenerAgrupadoresDomicilioComponent1750945332253,
    ObtenerBarriosyColoniasComponent1750945332261,
    ObtenerCiudadesyLocalidadesComponent1750945332268,
    ObtenerCodigosdeDomicilioComponent1750945332276,
    ObtenerEstadosProvinciasyDepartamentosComponent1750945332284,
    ObtenerPaisesComponent1750945332292,
    ObtenerTiposdeListasNegrasComponent1750945332298,
    ObtenerTiposdeTelefonoComponent1750945332305,
    ObtenerTiposdeViviendaComponent1750945332311,
    ObtenerPizarraporModuloComponent1750945332316,
    ObtenerPizarrasComponent1750945332323,
    ObtenerMenusComponent1750945332329,
    ObtenerPerfilesComponent1750945332334,
    AgregarTextoAsientoComponent1750945332342,
    AgregarTextoOrdinalComponent1750945332347,
    AnularMovimientoComponent1750945332352,
    ActualizarCondicionImpositivaComponent1750945332359,
    CrearCondicionImpositivaComponent1750945332364,
    ObtenerIdBantotalMovimientoComponent1750945332369,
    ObtenerIdBantotalOperacionComponent1750945332379,
    ObtenerIdBantotalProductoComponent1750945332386,
    ObtenerIdentificadorUnicodeMovimientoComponent1750945332393,
    ObtenerIdentificadorUnicodeOperacionComponent1750945332400,
    ObtenerIdentificadorUnicodeProductoComponent1750945332406,
    ObtenerClientedeunaOperacionComponent1750945332413,
    ObtenerCondicionImpositivaComponent1750945332419,
    ObtenerDetalledeMovimientoComponent1750945332426,
    ObtenerDetalledeOrdinalComponent1750945332433,
    ObtenerIntegrantesdeOperacionComponent1750945332440,
    ObtenerTextosdeMovimientoComponent1750945332447,
    RegistrarAsientoComponent1750945332452,
    RegistrarAsientoFechaValorComponent1750945332460,
    CancelarComponent1750945332466,
    CashInComponent1750945332473,
    CashOutComponent1750945332479,
    ContratarComponent1750945332484,
    ObtenerDatosComponent1750945332491,
    ObtenerMovimientosComponent1750945332500,
    ObtenerProductosComponent1750945332508,
    ObtenerProductosCVComponent1750945332521,
    ObtenerChequeraComponent1750945332556,
    ObtenerChequerasComponent1750945332563,
    ObtenerChequesdeChequeraComponent1750945332573,
    ObtenerComisionChequeraComponent1750945332579,
    ObtenerEstadodeChequeraComponent1750945332585,
    ObtenerSolicitudesdeChequerasComponent1750945332592,
    ObtenerTiposdeChequeraComponent1750945332598,
    ObtenerTiposdeChequeraporProductoComponent1750945332605,
    EliminarChequeraComponent1750945332612,
    RegistrarOrdendeNoPagodeChequeraComponent1750945332620,
    RegistrarOrdendeNoPagodeChequesComponent1750945332628,
    SolicitarChequeraComponent1750945332635,
    ContratarconPeriodicidadComponent1750945332640,
    ContratarProductoComponent1750945332649,
    ContratarProductoconAltadeFacultadesComponent1750945332655,
    ObtenerAcuerdosComponent1750945332663,
    ObtenerDatosComponent1750945332672,
    ObtenerEstadodeCuentaComponent1750945332681,
    ObtenerEvoluciondeSaldosComponent1750945332689,
    ObtenerProductosComponent1750945332696,
    ContratarconPeriodicidadComponent1750945332703,
    ContratarProductoComponent1750945332710,
    ContratarProductoconAltadeFacultadesComponent1750945332716,
    ObtenerDatosComponent1750945332723,
    ObtenerEstadodeCuentaComponent1750945332731,
    ObtenerEvoluciondeSaldosComponent1750945332735,
    ObtenerProductosComponent1750945332742,
    ActualizarBeneficiariosComponent1750945332747,
    ObtenerBeneficiariosComponent1750945332752,
    ActualizarDocumentoDigitalComponent1750945332760,
    AsociarDocumentoDigitalComponent1750945332766,
    EliminarDocumentoDigitalComponent1750945332774,
    ObtenerDocumentoDigitalComponent1750945332782,
    ObtenerDocumentosDigitalesComponent1750945332789,
    ObtenerBolsillosComponent1750945332796,
    ObtenerCBUdeCuentaVistaComponent1750945332802,
    ObtenerCuentaVistadeCBUComponent1750945332808,
    ObtenerDetalleBloqueoComponent1750945332815,
    ObtenerEstadodeCuentaporPeriodoComponent1750945332821,
    ObtenerEstadoDeOperacionComponent1750945332828,
    ObtenerFacultadesComponent1750945332833,
    ObtenerPaqueteComponent1750945332841,
    ObtenerPeriododeAcreditacionComponent1750945332856,
    ObtenerPeriodosdeAcreditacionComponent1750945332849,
    ObtenerSaldoBloqueadoComponent1750945332865,
    ObtenerSaldoDisponibleComponent1750945332872,
    ObtenerSaldosBloqueadosComponent1750945332881,
    AcreditarEnCuentaComponent1750945332888,
    ActivarComponent1750945332896,
    ActualizarPeriododeAcreditacionComponent1750945332903,
    BloquearSaldoComponent1750945332910,
    CancelarComponent1750945332916,
    DebitarEnCuentaComponent1750945332921,
    DesbloquearSaldoComponent1750945332928,
    ActualizarPerfilTransaccionalComponent1750945332936,
    AgregarPerfilTransaccionalComponent1750945332943,
    ObtenerPerfilTransaccionalComponent1750945332949,
    TraspasarConTipoDeCambioEspecialComponent1750945332955,
    TraspasarEntreCuentasdelaMismaPersonaComponent1750945332964,
    TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750945332971,
    TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750945332980,
    TraspasarEntreCuentasPropiasComponent1750945333002,
    TraspasarEntreCuentasPropiascontipodecambioComponent1750945332986,
    TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750945332996,
    TraspasarEntreCuentasTercerosComponent1750945333025,
    TraspasarEntreCuentasTerceroscontipodecambioComponent1750945333010,
    TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750945333018,
    ActualizarBeneficiariosComponent1750945333031,
    ObtenerBeneficiariosComponent1750945333038,
    ContratarComponent1750945333048,
    ContratarConFacultadesComponent1750945333056,
    ContratarSimulacionComponent1750945333063,
    ActualizarDocumentoDigitalComponent1750945333069,
    AsociarDocumentoDigitalComponent1750945333078,
    EliminarDocumentoDigitalComponent1750945333085,
    ObtenerDocumentoDigitalComponent1750945333091,
    ModificarCuentaDestinoalVencimientoComponent1750945333099,
    ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750945333107,
    ModificarInstruccionComponent1750945333114,
    ObtenerAvanceComponent1750945333124,
    ObtenerDatosComponent1750945333132,
    ObtenerDatosPrecancelacionComponent1750945333141,
    ObtenerDocumentosDigitalesComponent1750945333148,
    ObtenerInstruccionComponent1750945333162,
    ObtenerInstruccionesHabilitadosComponent1750945333155,
    ObtenerMovimientosComponent1750945333167,
    ObtenerPeriodosHabilitadosComponent1750945333173,
    ObtenerProductosComponent1750945333178,
    ObtenerProductosHabilitadosComponent1750945333189,
    ObtenerTasadePrecancelacionComponent1750945333197,
    PrecancelarComponent1750945333207,
    SimularComponent1750945333214,
    SimularConCronogramaComponent1750945333227,
    ConfirmarListaComponent1750945333233,
    CrearListaComponent1750945333238,
    CrearListaChequesComponent1750945333244,
    ObtenerProductosComponent1750945333251,
    ObtenerTiposDeDesembolsoComponent1750945333258,
    SeleccionarOpcionDesembolsoComponent1750945333264,
    ObtenerAgrupadoresComponent1750945333269,
    ObtenerCierredeSaldosporMonedaComponent1750945333278,
    ObtenerCondicionesGeneralesComponent1750945333284,
    ObtenerIndicadoresComponent1750945333290,
    ObtenerMetodosMasEjecutadosComponent1750945333296,
    ObtenerMonedasIndicesComponent1750945333306,
    ObtenerRubrosBolsaComponent1750945333312,
    ObtenerServiciosMasEjecutadosComponent1750945333319,
    ObtenerSesionesPorUsuarioComponent1750945333326,
    ObtenerSucursalesCajasComponent1750945333333,
    ObtenerTransaccionesporEstadosComponent1750945333342,
    BuscarClienteComponent1750945333349,
    CompletarTareaComponent1750945333355,
    CrearSolicitudAmpliacionComponent1750945333362,
    CrearSolicitudIndividualComponent1750945333367,
    CrearSolicitudRenovacionComponent1750945333374,
    AgregarFiadorComponent1750945333382,
    EliminarFiadorComponent1750945333390,
    ActualizarGrupoComponent1750945333395,
    ActualizarIntegrantedeGrupoComponent1750945333402,
    AgregarGrupoComponent1750945333408,
    AgregarIntegranteaGrupoComponent1750945333414,
    CrearSolicitudGrupalComponent1750945333419,
    HabilitarIntegrantedeunGrupoComponent1750945333427,
    InhabilitarIntegrantedeunGrupoComponent1750945333432,
    ObtenerDetalleGrupoComponent1750945333437,
    ObtenerGruposComponent1750945333444,
    ObtenerIntegrantesdeGrupoComponent1750945333452,
    ObtenerTiposdeGrupoComponent1750945333460,
    ObtenerTiposdeIntegranteComponent1750945333467,
    SimularPrestamoAmortizableGrupalComponent1750945333474,
    ObtenerAsesoresComponent1750945333484,
    ObtenerCampanasComponent1750945333491,
    ObtenerDestinosCreditoComponent1750945333501,
    ObtenerOperacionesClienteComponent1750945333510,
    ObtenerOrigenesdeCaptacionComponent1750945333518,
    ObtenerProductosComponent1750945333526,
    ObtenerSolicitudesClienteComponent1750945333532,
    ObtenerTiposAvalComponent1750945333540,
    AgregarOperacionesaCancelarComponent1750945333548,
    ObtenerOperacionesaCancelarComponent1750945333555,
    QuitarOperacionesaCancelarComponent1750945333564,
    SimularLibreAmortizacionComponent1750945333574,
    SimularPrestamoAmortizableComponent1750945333582,
    SimularPrestamoPlazoFijoComponent1750945333592,
    ValidarPoliticasComponent1750945333602,
    ObtenerCantidadCuotasComponent1750945333610,
    ObtenerCapitalComponent1750945333617,
    ObtenerComisionesComponent1750945333625,
    ObtenerComisionesporCuotaComponent1750945333630,
    ObtenerDiasPrimerPeriodoComponent1750945333636,
    ObtenerPeriodoEntreCuotasComponent1750945333655,
    ObtenerPermiteSegurosdelMismoTipoComponent1750945333645,
    ObtenerPlazoComponent1750945333664,
    ObtenerRequiereSegurodeVidaObligatorioComponent1750945333673,
    ObtenerSegurosComponent1750945333681,
    ObtenerItemsModeloComponent1750945333689,
    ObtenerModelosPAEComponent1750945333697,
    ObtenerScoresComponent1750945333704,
    ObtenerTiposDeModelosComponent1750945333711,
    ContratarPrestamoComponent1750945333716,
    ContratarVehicularComponent1750945333725,
    CrearClienteComponent1750945333730,
    CrearPersonaClienteComponent1750945333739,
    ObtenerDatosdeUsuarioComponent1750945333744,
    ObtenerDetalledeOfertaAmortizableComponent1750945333751,
    ObtenerDetalleOfertaVehicularComponent1750945333759,
    ObtenerMarcasComponent1750945333764,
    ObtenerModelosComponent1750945333769,
    ObtenerPartnersComponent1750945333777,
    ObtenerPrestamosdeClienteComponent1750945333801,
    ObtenerProductosComponent1750945333784,
    ObtenerProductosdelPartnerComponent1750945333792,
    ObtenerPuntosdeVentaComponent1750945333808,
    ObtenerVendedoresComponent1750945333815,
    ObtenerVersionesComponent1750945333822,
    SimularOfertasComponent1750945333831,
    SimularOfertasVehicularComponent1750945333840,
    SimularPrestamoComponent1750945333849,
    SimularVehicularComponent1750945333858,
    ObtenerCorrelativoGuiaComponent1750945333866,
    ObtenerCorrelativoGuiaEspecialComponent1750945333874,
    ObtenerGuiadeProcesoComponent1750945333880,
    ObtenerGuiaEspecialdeProcesoComponent1750945333887,
    ObtenerOpcionGeneraldeProcesoComponent1750945333895,
    ObtenerOpcionGeneralPorModuloComponent1750945333902,
    ObtenerProgramaParticularComponent1750945333911,
    ActualizarComponent1750945333919,
    ActualizarCelularComponent1750945333925,
    ActualizarContactoComponent1750945333930,
    ActualizarConyugeComponent1750945333944,
    ActualizarCorreoElectronicoComponent1750945333938,
    ActualizarDomicilioComponent1750945333949,
    ActualizarFATCAComponent1750945333957,
    ActualizarInformacionAdicionalComponent1750945333964,
    ActualizarInformacionFinancieraComponent1750945333970,
    ActualizarIntegrantedePersonaJuridicaComponent1750945333977,
    ActualizarPersonaJuridicaComponent1750945333986,
    ActualizarProfesionComponent1750945333995,
    ActualizarReferenciaComponent1750945334002,
    ActualizarRegistroEmpleadoComponent1750945334010,
    ActualizarTelefonoComponent1750945334017,
    ActualizarVictimaHechoViolentoComponent1750945334025,
    ModificarDocumentoAdicionalComponent1750945334031,
    AgregaraListaNegraComponent1750945334036,
    AgregarContactoComponent1750945334042,
    AgregarCorreoElectronicoComponent1750945334048,
    AgregarDatosPEPComponent1750945334055,
    AgregarDocumentoAdicionalComponent1750945334062,
    AgregarDomicilioComponent1750945334069,
    AgregarEstadoFinancieroComponent1750945334077,
    AgregarFATCAComponent1750945334084,
    AgregarInformacionAdicionalComponent1750945334093,
    AgregarInformacionFinancieraComponent1750945334105,
    AgregarIntegranteaPersonaJuridicaComponent1750945334112,
    AgregarPersonaVinculadaComponent1750945334118,
    AgregarReferenciaComponent1750945334125,
    AgregarTelefonoComponent1750945334131,
    AgregarVictimaHechoViolentoComponent1750945334140,
    CrearComponent1750945334148,
    CrearConyugeComponent1750945334155,
    CrearPersonaJuridicaComponent1750945334161,
    CrearReducidoComponent1750945334167,
    ActualizarDocumentoDigitalComponent1750945334175,
    AsociarDocumentoDigitalComponent1750945334182,
    EliminarDocumentoDigitalComponent1750945334190,
    ObtenerDocumentoDigitalComponent1750945334197,
    ObtenerDocumentosDigitalesComponent1750945334204,
    EliminarConyugeComponent1750945334211,
    EliminarDocumentoAdicionalComponent1750945334219,
    EliminarDomicilioComponent1750945334226,
    EliminarInformacionAdicionalComponent1750945334235,
    EliminarIntegrantedePersonaJuridicaComponent1750945334242,
    EliminarPersonaVinculadaComponent1750945334250,
    EliminarProfesionComponent1750945334257,
    ObtenerComponent1750945334267,
    ObtenerConceptoComponent1750945334276,
    ObtenerContactosComponent1750945334284,
    ObtenerConyugeComponent1750945334312,
    ObtenerCorreosElectronicosComponent1750945334292,
    ObtenerCuentasClienteComponent1750945334303,
    ObtenerDatosPEPComponent1750945334319,
    ObtenerDocumentosAdicionalesComponent1750945334330,
    ObtenerDomiciliosComponent1750945334339,
    ObtenerEstadosCivilesComponent1750945334347,
    ObtenerFacultadesComponent1750945334356,
    ObtenerFATCAComponent1750945334365,
    ObtenerHobbiesComponent1750945334374,
    ObtenerHobbyComponent1750945334381,
    ObtenerIdBantotalComponent1750945334388,
    ObtenerIdentidadesdeGeneroComponent1750945334396,
    ObtenerIdentificadorUnicoComponent1750945334403,
    ObtenerInformacionAdicionalComponent1750945334410,
    ObtenerInformacionFinancieraComponent1750945334416,
    ObtenerIntegrantesPersonaJuridicaComponent1750945334423,
    ObtenerLimitesComponent1750945334428,
    ObtenerNaturalezasJuridicasComponent1750945334434,
    ObtenerNivelesEducativosComponent1750945334441,
    ObtenerOcupacionesComponent1750945334445,
    ObtenerPersonaJuridicaComponent1750945334453,
    ObtenerPersonasComponent1750945334460,
    ObtenerPersonasJuridicasComponent1750945334465,
    ObtenerPersonasVinculadasComponent1750945334470,
    ObtenerProfesionComponent1750945334483,
    ObtenerProfesionesComponent1750945334477,
    ObtenerReferenciasComponent1750945334489,
    ObtenerTarjetasdeDebitoComponent1750945334497,
    ObtenerTelefonosComponent1750945334502,
    ObtenerTipodePersonaComponent1750945334511,
    ObtenerTiposdeDocumentoComponent1750945334522,
    ObtenerTiposDeFuncionarioPublicoComponent1750945334530,
    ObtenerTiposDePEPComponent1750945334535,
    ObtenerTitularesDelTelefonoComponent1750945334543,
    ObtenerVictimaHechoViolentoComponent1750945334550,
    ObtenerVinculosComponent1750945334557,
    ObtenerVinculosdeAfinidadComponent1750945334563,
    ObtenerVinculosdeConsanguinidadComponent1750945334573,
    ObtenerVinculosJuridicosComponent1750945334582,
    EvaluarPAEComponent1750945334591,
    ValidarCorreoElectronicoComponent1750945334598,
    ValidarDocumentoComponent1750945334609,
    ValidarenListasNegrasComponent1750945334617,
    ValidarExistenciaComponent1750945334625,
    ValidarListasInhabilitadosComponent1750945334634,
    VerificarEmpleadoComponent1750945334641,
    ConvertirTasaAnualEfectivaaLinealComponent1750945334650,
    ConvertirTasaAnualLinealaEfectivaComponent1750945334657,
    ConvertirTasaMensualEfectivaaLinealComponent1750945334666,
    ConvertirTasaMensualLinealaEfectivaComponent1750945334675,
    ObtenerCotizacionComponent1750945334683,
    ObtenerCotizacionaFechaComponent1750945334691,
    ObtenerCotizacionCierreComponent1750945334698,
    ObtenerPizarraEspecialporTransaccionComponent1750945334705,
    ObtenerPrecioaFechaComponent1750945334711,
    ObtenerPrecioEspecieComponent1750945334718,
    ObtenerTasadeOperacionComponent1750945334724,
    ObtenerTasaParaClienteComponent1750945334732,
    ObtenerTasaParaProductoComponent1750945334740,
    ObtenerTipodeCambioComponent1750945334747,
    ObtenerTiposDeCambioEspecialesComponent1750945334755,
    CancelarComponent1750945334763,
    CancelaraFechaComponent1750945334772,
    CancelaraFechaTercerosComponent1750945334779,
    CancelarTercerosComponent1750945334785,
    ContratarComponent1750945334792,
    ContratarAmpliacionComponent1750945334802,
    ContratarRefinanciacionComponent1750945334811,
    ContratarRefinanciacionporDeudaTotalComponent1750945334817,
    ContratarRefinanciacionporSaldoCapitalComponent1750945334824,
    ActualizarDocumentoDigitalComponent1750945334830,
    AsociarDocumentoDigitalComponent1750945334836,
    EliminarDocumentoDigitalComponent1750945334844,
    ObtenerDocumentoDigitalComponent1750945334850,
    ObtenerDocumentosDigitalesComponent1750945334858,
    ObtenerCronogramaComponent1750945334865,
    ObtenerCronogramaaFechaComponent1750945334874,
    ObtenerCronogramaconPagosaFechaComponent1750945334880,
    ObtenerCronogramaenEspecieComponent1750945334889,
    ObtenerCronogramaOriginalComponent1750945334897,
    ObtenerCuentadeCobroComponent1750945334903,
    ObtenerDatosdelProximoVencimientoComponent1750945334910,
    ObtenerDetalleComponent1750945334916,
    ObtenerDetalleaFechaComponent1750945334924,
    ObtenerDetalledeCancelacionTotalComponent1750945334930,
    ObtenerDetalledeOfertaComponent1750945334938,
    ObtenerDetalledeOfertaAmortizableComponent1750945334946,
    ObtenerDetalledeOperacionesaRefinanciarComponent1750945334953,
    ObtenerDetalledePrestamoCanceladoComponent1750945334963,
    ObtenerDetallePagoPrestamoComponent1750945334971,
    ObtenerDetalleReducidoComponent1750945334977,
    ObtenerDetalleSimulacionComponent1750945334986,
    ObtenerDeudaComponent1750945334994,
    ObtenerDeudaPrestamoCastigadoComponent1750945335002,
    ObtenerDeudaVencidaComponent1750945335011,
    ObtenerFechadeIncumplimientoComponent1750945335019,
    ObtenerFechadeUltimoPagoComponent1750945335028,
    ObtenerFechasdePagoComponent1750945335037,
    ObtenerInformacionAdicionalComponent1750945335045,
    ObtenerMontodeCancelacionComponent1750945335054,
    ObtenerMotivosPrecancelacionComponent1750945335062,
    ObtenerPagosdeCuotaComponent1750945335069,
    ObtenerPagosdeunPrestamoComponent1750945335078,
    ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750945335087,
    ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750945335096,
    ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750945335106,
    ObtenerProductosComponent1750945335112,
    ObtenerProductosRefinanciacionComponent1750945335118,
    ObtenerRefinanciacionSimuladaComponent1750945335126,
    AbonaraCuentaComponent1750945335134,
    ActualizarInformacionAdicionalComponent1750945335140,
    ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750945335147,
    AgregarCuentadeCobroComponent1750945335154,
    AgregarInformacionAdicionalComponent1750945335162,
    EliminarCuentadeCobroComponent1750945335167,
    EliminarInformacionAdicionalComponent1750945335173,
    SolicitarPrecancelacionComponent1750945335181,
    AdelantarCapitalConReduccionDeCuotaComponent1750945335188,
    AdelantarCapitalConReduccionDePlazoComponent1750945335195,
    PagarCuotaComponent1750945335201,
    PagarCuotaaFechaComponent1750945335208,
    PagarCuotaaFechaTercerosComponent1750945335215,
    PagarCuotaTercerosComponent1750945335223,
    ResimularAmortizableComponent1750945335231,
    ResimularAmpliacionComponent1750945335240,
    ResimularRefinanciacionComponent1750945335249,
    SimularComponent1750945335257,
    SimularAmortizableComponent1750945335267,
    SimularAmortizableSinClienteComponent1750945335276,
    SimularAmpliacionComponent1750945335284,
    SimularAmpliacionIngresandoSegurosComponent1750945335293,
    SimularDespejandoCapitalyCantidaddeCuotasComponent1750945335301,
    SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750945335310,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750945335315,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750945335321,
    SimularDespejandoFechadeVencimientoyTasaComponent1750945335328,
    SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750945335334,
    SimularIngresandoBalloonComponent1750945335342,
    SimularIngresandoBalloonSinClienteComponent1750945335350,
    SimularIngresandoSegurosComponent1750945335358,
    SimularIngresandoSegurosSinClienteComponent1750945335365,
    SimularLibreAmortizacionComponent1750945335372,
    SimularLibreAmortizacionSinClienteComponent1750945335380,
    SimularOfertasComponent1750945335386,
    SimularPlazoFijoComponent1750945335393,
    SimularRefinanciacionComponent1750945335400,
    SimularRefinanciacionporDeudaTotalComponent1750945335407,
    SimularRefinanciacionporSaldoCapitalComponent1750945335413,
    ActualizarTextosComponent1750945335419,
    AgregarTextosComponent1750945335426,
    EliminarTextosComponent1750945335433,
    ObtenerTextosComponent1750945335440,
    EvaluarRegladeNegocioComponent1750945335452,
    ObtenerReglasdeNegocioComponent1750945335458,
    ObtenerVariablesReglaComponent1750945335464,
    ValidarDatosRegladeNegocioComponent1750945335469,
    AutorizarExcepcionComponent1750945335477,
    ObtenerDetalledeExcepcionComponent1750945335482,
    ObtenerExcepcionesComponent1750945335489,
    RechazarExcepcionComponent1750945335496,
    RegistrarDispositivoComponent1750945335501,
    ContratarSeguroComponent1750945335508,
    ObtenerMontosDeUnSeguroComponent1750945335513,
    ObtenerSegurosComponent1750945335519,
    ObtenerSegurosAPagarComponent1750945335527,
    PagarSeguroComponent1750945335533,
    ObtenerCodigosdeLimitesComponent1750945335567,
    ObtenerCuentaPreferencialComponent1750945335540,
    ObtenerCuentasaAsociarComponent1750945335547,
    ObtenerCuentasAsociadasComponent1750945335553,
    ObtenerCuentasAsociadasPorTipoComponent1750945335561,
    ObtenerDatosComponent1750945335575,
    ObtenerDatosContactoComponent1750945335581,
    ObtenerIdentificadorUnicoComponent1750945335588,
    ObtenerLimitesComponent1750945335596,
    ObtenerMovimientosComponent1750945335604,
    ObtenerTarjetaComponent1750945335611,
    ObtenerTarjetaHabienteComponent1750945335617,
    ObtenerTarjetasAdicionalesComponent1750945335625,
    ObtenerTiposdeCuentaComponent1750945335630,
    ActivarComponent1750945335637,
    ActualizarCuentaPreferencialComponent1750945335643,
    ActualizarDatosContactoComponent1750945335649,
    AsociarCuentaComponent1750945335657,
    BlanquearPinComponent1750945335663,
    BloquearComponent1750945335669,
    BloquearDesdeREDComponent1750945335677,
    CrearComponent1750945335685,
    CrearConCuentasAsociadasComponent1750945335693,
    DenunciarComponent1750945335701,
    DenunciarDesdeREDComponent1750945335708,
    DesbloquearComponent1750945335715,
    DesbloquearDesdeREDComponent1750945335721,
    EliminarCuentaAsociadaComponent1750945335728,
    ModificarLimiteComponent1750945335736,
    ComprarComponent1750945335744,
    ObtenerEstadoCompraComponent1750945335750,
    ObtenerGruposComponent1750945335758,
    ObtenerValoresComponent1750945335765,
    AgregarPerfilComponent1750945335772,
    CrearComponent1750945335779,
    EliminarPerfilComponent1750945335784,
    EliminarUsuarioComponent1750945335792,
    HabilitarEnCanalComponent1750945335799,
    HabilitarUsuarioComponent1750945335807,
    InhabilitarUsuarioComponent1750945335813,
    ModificarComponent1750945335818,
    ObtenerComponent1750945335825,
    ObtenerPerfilesComponent1750945335831,
    ObtenerUsuariosComponent1750945335837,
    ObtenerUsuariosParaPerfilComponent1750945335844,
    ObtenerMetadataDeTareaComponent1750945335850,
    ObtenerProcesosHabilitadosComponent1750945335857,
    ObtenerRolesComponent1750945335863,
    ObtenerRolesdeTareaComponent1750945335868,
    ObtenerTareasdeProcesoComponent1750945335876,
    //exports End page components
  ],

  providers: [SearchService],
})
export class ApiDocsModule {}
