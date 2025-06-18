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

import { SidebarComponent }        from './components/sidebar/sidebar.component';
import { PageHeaderComponent }     from './components/page-header/page-header.component';
import { InfoCardComponent }       from './components/info-card/info-card.component';
import { BackendConfigComponent }  from './components/backend-config/backend-config.component';
import { ApiTabsComponent }        from './components/api-tabs/api-tabs.component';
import { ApiTableComponent }       from './components/api-table/api-table.component';
import { CodeExampleComponent }    from './components/code-example/code-example.component';
import { StructuredDataComponent } from './components/structured-data/structured-data.component';
//import Page components
import { ContratarSimulacionComponent1750268693784 } from './api-doc-page/Ahorro-Programado/Contratar/ContratarSimulacion.component';
import { CrearComponent1750268693795 } from './api-doc-page/Ahorro-Programado/Contratar/Crear.component';
import { SimularComponent1750268693807 } from './api-doc-page/Ahorro-Programado/Contratar/Simular.component';
import { ActualizarDocumentoDigitalComponent1750268693813 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750268693894 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750268693908 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750268693914 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750268693920 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ModificarCuentaDestinoComponent1750268693925 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarCuentaDestino.component';
import { ModificarCuentaOrigenComponent1750268693933 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarCuentaOrigen.component';
import { ModificarFechadeAbonoComponent1750268693940 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarFechadeAbono.component';
import { ModificarMetadeAhorroComponent1750268693949 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarMetadeAhorro.component';
import { ModificarMontodeAbonoComponent1750268693956 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarMontodeAbono.component';
import { ObtenerComponent1750268693962 } from './api-doc-page/Ahorro-Programado/Obtener/Obtener.component';
import { ObtenerCronogramaAbonosComponent1750268693969 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCronogramaAbonos.component';
import { ObtenerCuentasDestinoHabilitadasComponent1750268693976 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCuentasDestinoHabilitadas.component';
import { ObtenerCuentasOrigenHabilitadasComponent1750268693982 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCuentasOrigenHabilitadas.component';
import { ObtenerEstadodeCuentaComponent1750268693988 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerPeriodosHabilitadosComponent1750268693995 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerPeriodosHabilitados.component';
import { ObtenerPlazosHabilitadosComponent1750268694001 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerPlazosHabilitados.component';
import { ObtenerProductosComponent1750268694006 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerProductos.component';
import { AnularChequeElectronicoComponent1750268694012 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/AnularChequeElectronico.component';
import { AsignarIdaChequeElectronicoComponent1750268694018 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/AsignarIdaChequeElectronico.component';
import { CrearChequeraElectronicaComponent1750268694023 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/CrearChequeraElectronica.component';
import { DepositarChequeElectronicodeBancoPropioComponent1750268694030 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicodeBancoPropio.component';
import { DepositarChequeElectronicodeOtroBancoComponent1750268694036 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicodeOtroBanco.component';
import { DepositarChequeElectronicoenCustodiaComponent1750268694041 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicoenCustodia.component';
import { EmitirChequeElectronicoComponent1750268694049 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/EmitirChequeElectronico.component';
import { EmitirChequeElectronicodeChequeraComponent1750268694054 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/EmitirChequeElectronicodeChequera.component';
import { HabilitarChequeElectronicoComponent1750268694061 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/HabilitarChequeElectronico.component';
import { CrearAdhesionComponent1750268694067 } from './api-doc-page/AR - Argentina/SNP/CrearAdhesion.component';
import { CrearStopDebitComponent1750268694072 } from './api-doc-page/AR - Argentina/SNP/CrearStopDebit.component';
import { CrearStopDebitparaAdhesionconImporteComponent1750268694081 } from './api-doc-page/AR - Argentina/SNP/CrearStopDebitparaAdhesionconImporte.component';
import { EliminarStopDebitComponent1750268694086 } from './api-doc-page/AR - Argentina/SNP/EliminarStopDebit.component';
import { ObtenerAdhesionesComponent1750268694091 } from './api-doc-page/AR - Argentina/SNP/ObtenerAdhesiones.component';
import { ObtenerDebitosComponent1750268694101 } from './api-doc-page/AR - Argentina/SNP/ObtenerDebitos.component';
import { ObtenerEmpresasOriginantesComponent1750268694108 } from './api-doc-page/AR - Argentina/SNP/ObtenerEmpresasOriginantes.component';
import { ObtenerStopDebitsComponent1750268694116 } from './api-doc-page/AR - Argentina/SNP/ObtenerStopDebits.component';
import { ReversarDebitosComponent1750268694122 } from './api-doc-page/AR - Argentina/SNP/ReversarDebitos.component';
import { SolicitarBajadeAdhesionComponent1750268694129 } from './api-doc-page/AR - Argentina/SNP/SolicitarBajadeAdhesion.component';
import { AutenticacionComponent1750268694136 } from './api-doc-page/Autenticación/Autenticacion.component';
import { ObtenerDetalledeEjecucionComponent1750268694143 } from './api-doc-page/Cadena-de-Cierre/ObtenerDetalledeEjecucion.component';
import { ObtenerDetalledeProcesoComponent1750268694152 } from './api-doc-page/Cadena-de-Cierre/ObtenerDetalledeProceso.component';
import { ObtenerProcesosconErrorComponent1750268694160 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosconError.component';
import { ObtenerProcesosCriticosComponent1750268694169 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosCriticos.component';
import { ObtenerProcesosDiariosComponent1750268694177 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosDiarios.component';
import { ObtenerProcesosMensualesComponent1750268694185 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosMensuales.component';
import { ObtenerProcesosReprocesablesComponent1750268694193 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosReprocesables.component';
import { VerificarEstadoServidorComponent1750268694201 } from './api-doc-page/Cadena-de-Cierre/VerificarEstadoServidor.component';
import { CalcularFechadeVencimientoComponent1750268694208 } from './api-doc-page/Calendarios/Calcular/CalcularFechadeVencimiento.component';
import { CalcularFechadeVencimientoenDiasHabilesComponent1750268694216 } from './api-doc-page/Calendarios/Calcular/CalcularFechadeVencimientoenDiasHabiles.component';
import { CalcularPlazoComponent1750268694222 } from './api-doc-page/Calendarios/Calcular/CalcularPlazo.component';
import { CalcularPlazoenDiasHabilesComponent1750268694230 } from './api-doc-page/Calendarios/Calcular/CalcularPlazoenDiasHabiles.component';
import { ObtenerFechaHabilComponent1750268694238 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabil.component';
import { ObtenerFechaHabilAnteriorComponent1750268694244 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabilAnterior.component';
import { ObtenerFechaHabilAnteriordeSucursalComponent1750268694251 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabilAnteriordeSucursal.component';
import { ObtenerFechaHabildeSucursalComponent1750268694257 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabildeSucursal.component';
import { ObtenerInicioyFindeMesComponent1750268694265 } from './api-doc-page/Calendarios/Obtener/ObtenerInicioyFindeMes.component';
import { ObtenerInicioyFindeMesdeSucursalComponent1750268694271 } from './api-doc-page/Calendarios/Obtener/ObtenerInicioyFindeMesdeSucursal.component';
import { ObtenerProximaFechaHabilComponent1750268694279 } from './api-doc-page/Calendarios/Obtener/ObtenerProximaFechaHabil.component';
import { ObtenerProximaFechaHabildeSucursalComponent1750268694285 } from './api-doc-page/Calendarios/Obtener/ObtenerProximaFechaHabildeSucursal.component';
import { AutorizarArchivoComponent1750268694291 } from './api-doc-page/CASH-Management/Archivo/AutorizarArchivo.component';
import { CargarArchivoComponent1750268694299 } from './api-doc-page/CASH-Management/Archivo/CargarArchivo.component';
import { CargarArchivoRecibidoComoDatoComponent1750268694305 } from './api-doc-page/CASH-Management/Archivo/CargarArchivoRecibidoComoDato.component';
import { DetenerArchivoComponent1750268694313 } from './api-doc-page/CASH-Management/Archivo/DetenerArchivo.component';
import { RechazarArchivoComponent1750268694319 } from './api-doc-page/CASH-Management/Archivo/RechazarArchivo.component';
import { CargarBeneficiariosComponent1750268694325 } from './api-doc-page/CASH-Management/Beneficiarios/CargarBeneficiarios.component';
import { IngresarBeneficiarioComponent1750268694334 } from './api-doc-page/CASH-Management/Beneficiarios/IngresarBeneficiario.component';
import { ObtenerBeneficiarioSegunFiltroComponent1750268694340 } from './api-doc-page/CASH-Management/Beneficiarios/ObtenerBeneficiarioSegunFiltro.component';
import { AltaAutomaticaContratoComponent1750268694347 } from './api-doc-page/CASH-Management/Contratar/AltaAutomaticaContrato.component';
import { CargarServiciosDisponiblesComponent1750268694355 } from './api-doc-page/CASH-Management/Contratar/CargarServiciosDisponibles.component';
import { ContratarDebitoAutomaticoComponent1750268694363 } from './api-doc-page/CASH-Management/Contratar/ContratarDebitoAutomatico.component';
import { ObtenerDetalledeOrdendeCuentaComponent1750268694369 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalledeOrdendeCuenta.component';
import { ObtenerDetalledePagoComponent1750268694375 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalledePago.component';
import { ObtenerDetalleOrdenSegunCampoComponent1750268694382 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalleOrdenSegunCampo.component';
import { ObtenerDetallePagoOrdenComponent1750268694389 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetallePagoOrden.component';
import { ObtenerDeudaComponent1750268694396 } from './api-doc-page/CASH-Management/Obtener/ObtenerDeuda.component';
import { ObtenerResumenOrdenComponent1750268694404 } from './api-doc-page/CASH-Management/Obtener/ObtenerResumenOrden.component';
import { ObtenerServiciosComponent1750268694411 } from './api-doc-page/CASH-Management/Obtener/ObtenerServicios.component';
import { ObtenerValoresOrdenComponent1750268694420 } from './api-doc-page/CASH-Management/Obtener/ObtenerValoresOrden.component';
import { ObtenerValoresOrdenSegunCampoComponent1750268694427 } from './api-doc-page/CASH-Management/Obtener/ObtenerValoresOrdenSegunCampo.component';
import { AutorizarOrdenComponent1750268694433 } from './api-doc-page/CASH-Management/Orden/AutorizarOrden.component';
import { DetenerOrdenComponent1750268694439 } from './api-doc-page/CASH-Management/Orden/DetenerOrden.component';
import { IngresarOrdenPagoComponent1750268694448 } from './api-doc-page/CASH-Management/Orden/IngresarOrdenPago.component';
import { ProcesarOrdenComponent1750268694453 } from './api-doc-page/CASH-Management/Orden/ProcesarOrden.component';
import { RechazarOrdenComponent1750268694459 } from './api-doc-page/CASH-Management/Orden/RechazarOrden.component';
import { AnularPagoDeudaComponent1750268694467 } from './api-doc-page/CASH-Management/Pagos/AnularPagoDeuda.component';
import { PagarDeudaDesdeCuentaComponent1750268694473 } from './api-doc-page/CASH-Management/Pagos/PagarDeudaDesdeCuenta.component';
import { RegistrarPagoDeudaComponent1750268694479 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoDeuda.component';
import { RegistrarPagoEnLineaComponent1750268694485 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoEnLinea.component';
import { RegistrarPagoEnLineaDesdeCuentaComponent1750268694491 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoEnLineaDesdeCuenta.component';
import { VisualizarListaResumenCabezalComponent1750268694498 } from './api-doc-page/CASH-Management/Visualizar/VisualizarListaResumenCabezal.component';
import { VisualizarListaResumenCabezalOrdenComponent1750268694503 } from './api-doc-page/CASH-Management/Visualizar/VisualizarListaResumenCabezalOrden.component';
import { VisualizarOrdendeArchivoParaCuentaComponent1750268694510 } from './api-doc-page/CASH-Management/Visualizar/VisualizarOrdendeArchivoParaCuenta.component';
import { VisualizarResultadoProcesamientoComponent1750268694517 } from './api-doc-page/CASH-Management/Visualizar/VisualizarResultadoProcesamiento.component';
import { VisualizarResumenCabezalComponent1750268694522 } from './api-doc-page/CASH-Management/Visualizar/VisualizarResumenCabezal.component';
import { VisualizarSituacionArchivosComponent1750268694529 } from './api-doc-page/CASH-Management/Visualizar/VisualizarSituacionArchivos.component';
import { VisualizarSituacionLineasComponent1750268694536 } from './api-doc-page/CASH-Management/Visualizar/VisualizarSituacionLineas.component';
import { CHATComponent1750268694546 } from './api-doc-page/CHAT/CHAT.component';
import { ActualizarComponent1750268694552 } from './api-doc-page/Clientes/Actualizar/Actualizar.component';
import { ActualizarDocumentoDigitalComponent1750268694559 } from './api-doc-page/Clientes/Actualizar/ActualizarDocumentoDigital.component';
import { ActualizarDomicilioComponent1750268694566 } from './api-doc-page/Clientes/Actualizar/ActualizarDomicilio.component';
import { ActualizarInformacionAdicionalComponent1750268694573 } from './api-doc-page/Clientes/Actualizar/ActualizarInformacionAdicional.component';
import { ActualizarRegistroEmpleadoComponent1750268694579 } from './api-doc-page/Clientes/Actualizar/ActualizarRegistroEmpleado.component';
import { ActualizarTelefonoComponent1750268694585 } from './api-doc-page/Clientes/Actualizar/ActualizarTelefono.component';
import { AgregarDomicilioComponent1750268694594 } from './api-doc-page/Clientes/Actualizar/AgregarDomicilio.component';
import { AgregarInformacionAdicionalComponent1750268694600 } from './api-doc-page/Clientes/Actualizar/AgregarInformacionAdicional.component';
import { AgregarIntegranteComponent1750268694608 } from './api-doc-page/Clientes/Actualizar/AgregarIntegrante.component';
import { AgregarTelefonoComponent1750268694615 } from './api-doc-page/Clientes/Actualizar/AgregarTelefono.component';
import { AsociarDocumentoDigitalComponent1750268694623 } from './api-doc-page/Clientes/Actualizar/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750268694631 } from './api-doc-page/Clientes/Actualizar/EliminarDocumentoDigital.component';
import { EliminarDomicilioComponent1750268694638 } from './api-doc-page/Clientes/Actualizar/EliminarDomicilio.component';
import { EliminarInformacionAdicionalComponent1750268694645 } from './api-doc-page/Clientes/Actualizar/EliminarInformacionAdicional.component';
import { EliminarIntegranteComponent1750268694653 } from './api-doc-page/Clientes/Actualizar/EliminarIntegrante.component';
import { HabilitarComponent1750268694661 } from './api-doc-page/Clientes/Actualizar/Habilitar.component';
import { InhabilitarComponent1750268694669 } from './api-doc-page/Clientes/Actualizar/Inhabilitar.component';
import { ModificarEjecutivoComponent1750268694676 } from './api-doc-page/Clientes/Actualizar/ModificarEjecutivo.component';
import { CrearComponent1750268694685 } from './api-doc-page/Clientes/Crear/Crear.component';
import { CrearconPersonaExistenteComponent1750268694693 } from './api-doc-page/Clientes/Crear/CrearconPersonaExistente.component';
import { CrearParaPersonaJuridicaComponent1750268694700 } from './api-doc-page/Clientes/Crear/CrearParaPersonaJuridica.component';
import { ObtenerComponent1750268694708 } from './api-doc-page/Clientes/Obtener/Obtener.component';
import { ObtenerAhorrosProgramadosComponent1750268694716 } from './api-doc-page/Clientes/Obtener/ObtenerAhorrosProgramados.component';
import { ObtenerBolsillosComponent1750268694722 } from './api-doc-page/Clientes/Obtener/ObtenerBolsillos.component';
import { ObtenerClasificacionesInternasComponent1750268694732 } from './api-doc-page/Clientes/Obtener/ObtenerClasificacionesInternas.component';
import { ObtenerCuentaClienteComponent1750268694741 } from './api-doc-page/Clientes/Obtener/ObtenerCuentaCliente.component';
import { ObtenerCuentasCorrientesSaldoContableComponent1750268694749 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasCorrientesSaldoContable.component';
import { ObtenerCuentasCorrientesSaldoDisponibleComponent1750268694755 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasCorrientesSaldoDisponible.component';
import { ObtenerCuentasdeAhorroSaldoContableComponent1750268694763 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasdeAhorroSaldoContable.component';
import { ObtenerCuentasdeAhorroSaldoDisponibleComponent1750268694769 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasdeAhorroSaldoDisponible.component';
import { ObtenerDatosComponent1750268694776 } from './api-doc-page/Clientes/Obtener/ObtenerDatos.component';
import { ObtenerDetallePosicionComponent1750268694782 } from './api-doc-page/Clientes/Obtener/ObtenerDetallePosicion.component';
import { ObtenerDocumentoDigitalComponent1750268694791 } from './api-doc-page/Clientes/Obtener/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750268694799 } from './api-doc-page/Clientes/Obtener/ObtenerDocumentosDigitales.component';
import { ObtenerDomiciliosComponent1750268694807 } from './api-doc-page/Clientes/Obtener/ObtenerDomicilios.component';
import { ObtenerFacultadesComponent1750268694815 } from './api-doc-page/Clientes/Obtener/ObtenerFacultades.component';
import { ObtenerIdentificadorUnicoComponent1750268694823 } from './api-doc-page/Clientes/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerInformacionAdicionalComponent1750268694831 } from './api-doc-page/Clientes/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerIntegrantesComponent1750268694838 } from './api-doc-page/Clientes/Obtener/ObtenerIntegrantes.component';
import { ObtenerLimitesComponent1750268694847 } from './api-doc-page/Clientes/Obtener/ObtenerLimites.component';
import { ObtenerMotivosInhabilitacionComponent1750268694854 } from './api-doc-page/Clientes/Obtener/ObtenerMotivosInhabilitacion.component';
import { ObtenerPerfilComponent1750268694862 } from './api-doc-page/Clientes/Obtener/ObtenerPerfil.component';
import { ObtenerPlazosFijosComponent1750268694870 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijos.component';
import { ObtenerPlazosFijosCanceladosComponent1750268694878 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijosCancelados.component';
import { ObtenerPlazosFijosconAvanceComponent1750268694888 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijosconAvance.component';
import { ObtenerPosicionComponent1750268694895 } from './api-doc-page/Clientes/Obtener/ObtenerPosicion.component';
import { ObtenerPrestamosComponent1750268694904 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamos.component';
import { ObtenerPrestamosCanceladosComponent1750268694912 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosCancelados.component';
import { ObtenerPrestamosCastigadosComponent1750268694920 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosCastigados.component';
import { ObtenerPrestamosconAvanceComponent1750268694931 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosconAvance.component';
import { ObtenerResumendeProductosCierredeanoComponent1750268694939 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosCierredeano.component';
import { ObtenerResumendeProductosSaldosContablesComponent1750268694946 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosSaldosContables.component';
import { ObtenerResumendeProductosSaldosDisponiblesComponent1750268694953 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosSaldosDisponibles.component';
import { ObtenerResumenporProductoaCierreAnoComponent1750268694959 } from './api-doc-page/Clientes/Obtener/ObtenerResumenporProductoaCierreAno.component';
import { ObtenerRiesgodeCreditoComponent1750268694967 } from './api-doc-page/Clientes/Obtener/ObtenerRiesgodeCredito.component';
import { ObtenerSaldosdeOtrosProductosComponent1750268694973 } from './api-doc-page/Clientes/Obtener/ObtenerSaldosdeOtrosProductos.component';
import { ObtenerSectoresComponent1750268694981 } from './api-doc-page/Clientes/Obtener/ObtenerSectores.component';
import { ObtenerSegmentosComponent1750268694988 } from './api-doc-page/Clientes/Obtener/ObtenerSegmentos.component';
import { ObtenerTarjetasdeDebitoComponent1750268694995 } from './api-doc-page/Clientes/Obtener/ObtenerTarjetasdeDebito.component';
import { ObtenerTelefonosComponent1750268695003 } from './api-doc-page/Clientes/Obtener/ObtenerTelefonos.component';
import { ObtenerTiposdeIntegracionComponent1750268695011 } from './api-doc-page/Clientes/Obtener/ObtenerTiposdeIntegracion.component';
import { ObtenerTitularRepresentativoComponent1750268695021 } from './api-doc-page/Clientes/Obtener/ObtenerTitularRepresentativo.component';
import { ObtenerTitulosComponent1750268695029 } from './api-doc-page/Clientes/Obtener/ObtenerTitulos.component';
import { ValidarExistenciaComponent1750268695037 } from './api-doc-page/Clientes/Validar/ValidarExistencia.component';
import { VerificarEmpleadoComponent1750268695043 } from './api-doc-page/Clientes/Validar/VerificarEmpleado.component';
import { ObtenerAgenciasBancoComponent1750268695053 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerAgenciasBanco.component';
import { ObtenerBancosComponent1750268695061 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerBancos.component';
import { ObtenerDetalleSucursalComponent1750268695070 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerDetalleSucursal.component';
import { ObtenerSucursalesPrincipalesComponent1750268695078 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerSucursalesPrincipales.component';
import { ObtenerActividadesComponent1750268695086 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerActividades.component';
import { ObtenerActividadesporTipoComponent1750268695093 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerActividadesporTipo.component';
import { ObtenerEjecutivosComponent1750268695101 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerEjecutivos.component';
import { ObtenerTiposdeActividadComponent1750268695106 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerTiposdeActividad.component';
import { ObtenerTiposdeTarjetaComponent1750268695114 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerTiposdeTarjeta.component';
import { ObtenerImpuestosComponent1750268695122 } from './api-doc-page/Configuración-Bantotal/ObtenerImpuestos.component';
import { ObtenerTiposdeDocumentoDigitalComponent1750268695129 } from './api-doc-page/Configuración-Bantotal/ObtenerTiposdeDocumentoDigital.component';
import { ObtenerEstadosComponent1750268695135 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerEstados.component';
import { ObtenerInstruccionesComponent1750268695140 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerInstrucciones.component';
import { ObtenerPaquetesComponent1750268695146 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerPaquetes.component';
import { ObtenerTiposdeTextoComponent1750268695155 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerTiposdeTexto.component';
import { ObtenerCalendariodeSucursalComponent1750268695162 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerCalendariodeSucursal.component';
import { ObtenerCalendariosComponent1750268695168 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerCalendarios.component';
import { ObtenerDetalledeCalendarioComponent1750268695175 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDetalledeCalendario.component';
import { ObtenerDetalledeCalendariodeSucursalComponent1750268695182 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDetalledeCalendariodeSucursal.component';
import { ObtenerDolarUSAComponent1750268695188 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDolarUSA.component';
import { ObtenerEmpresaComponent1750268695196 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerEmpresa.component';
import { ObtenerFechadeSistemaComponent1750268695201 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerFechadeSistema.component';
import { ObtenerMonedaNacionalComponent1750268695208 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerMonedaNacional.component';
import { ObtenerMonedasComponent1750268695215 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerMonedas.component';
import { ObtenerSucursalesComponent1750268695221 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerSucursales.component';
import { ObtenerAgrupadoresDomicilioComponent1750268695227 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerAgrupadoresDomicilio.component';
import { ObtenerBarriosyColoniasComponent1750268695236 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerBarriosyColonias.component';
import { ObtenerCiudadesyLocalidadesComponent1750268695243 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerCiudadesyLocalidades.component';
import { ObtenerCodigosdeDomicilioComponent1750268695251 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerCodigosdeDomicilio.component';
import { ObtenerEstadosProvinciasyDepartamentosComponent1750268695258 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerEstadosProvinciasyDepartamentos.component';
import { ObtenerPaisesComponent1750268695266 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerPaises.component';
import { ObtenerTiposdeListasNegrasComponent1750268695273 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeListasNegras.component';
import { ObtenerTiposdeTelefonoComponent1750268695281 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeTelefono.component';
import { ObtenerTiposdeViviendaComponent1750268695288 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeVivienda.component';
import { ObtenerPizarraporModuloComponent1750268695295 } from './api-doc-page/Configuración-Bantotal/Precios/ObtenerPizarraporModulo.component';
import { ObtenerPizarrasComponent1750268695305 } from './api-doc-page/Configuración-Bantotal/Precios/ObtenerPizarras.component';
import { ObtenerMenusComponent1750268695312 } from './api-doc-page/Configuración-Bantotal/Seguridad/ObtenerMenus.component';
import { ObtenerPerfilesComponent1750268695321 } from './api-doc-page/Configuración-Bantotal/Seguridad/ObtenerPerfiles.component';
import { AgregarTextoAsientoComponent1750268695328 } from './api-doc-page/Contabilidad/Agregar-Texto/AgregarTextoAsiento.component';
import { AgregarTextoOrdinalComponent1750268695337 } from './api-doc-page/Contabilidad/Agregar-Texto/AgregarTextoOrdinal.component';
import { AnularMovimientoComponent1750268695342 } from './api-doc-page/Contabilidad/AnularMovimiento.component';
import { ActualizarCondicionImpositivaComponent1750268695353 } from './api-doc-page/Contabilidad/Condición-Impositiva/ActualizarCondicionImpositiva.component';
import { CrearCondicionImpositivaComponent1750268695361 } from './api-doc-page/Contabilidad/Condición-Impositiva/CrearCondicionImpositiva.component';
import { ObtenerIdBantotalMovimientoComponent1750268695368 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalMovimiento.component';
import { ObtenerIdBantotalOperacionComponent1750268695378 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalOperacion.component';
import { ObtenerIdBantotalProductoComponent1750268695385 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalProducto.component';
import { ObtenerIdentificadorUnicodeMovimientoComponent1750268695395 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeMovimiento.component';
import { ObtenerIdentificadorUnicodeOperacionComponent1750268695402 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeOperacion.component';
import { ObtenerIdentificadorUnicodeProductoComponent1750268695408 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeProducto.component';
import { ObtenerClientedeunaOperacionComponent1750268695417 } from './api-doc-page/Contabilidad/Obtener/ObtenerClientedeunaOperacion.component';
import { ObtenerCondicionImpositivaComponent1750268695424 } from './api-doc-page/Contabilidad/Obtener/ObtenerCondicionImpositiva.component';
import { ObtenerDetalledeMovimientoComponent1750268695434 } from './api-doc-page/Contabilidad/Obtener/ObtenerDetalledeMovimiento.component';
import { ObtenerDetalledeOrdinalComponent1750268695442 } from './api-doc-page/Contabilidad/Obtener/ObtenerDetalledeOrdinal.component';
import { ObtenerIntegrantesdeOperacionComponent1750268695451 } from './api-doc-page/Contabilidad/Obtener/ObtenerIntegrantesdeOperacion.component';
import { ObtenerTextosdeMovimientoComponent1750268695457 } from './api-doc-page/Contabilidad/Obtener/ObtenerTextosdeMovimiento.component';
import { RegistrarAsientoComponent1750268695466 } from './api-doc-page/Contabilidad/Registrar-Asiento/RegistrarAsiento.component';
import { RegistrarAsientoFechaValorComponent1750268695473 } from './api-doc-page/Contabilidad/Registrar-Asiento/RegistrarAsientoFechaValor.component';
import { CancelarComponent1750268695482 } from './api-doc-page/Cuentas-Bolsillo/Cancelar.component';
import { CashInComponent1750268695489 } from './api-doc-page/Cuentas-Bolsillo/CashIn.component';
import { CashOutComponent1750268695497 } from './api-doc-page/Cuentas-Bolsillo/CashOut.component';
import { ContratarComponent1750268695503 } from './api-doc-page/Cuentas-Bolsillo/Contratar.component';
import { ObtenerDatosComponent1750268695511 } from './api-doc-page/Cuentas-Bolsillo/ObtenerDatos.component';
import { ObtenerMovimientosComponent1750268695518 } from './api-doc-page/Cuentas-Bolsillo/ObtenerMovimientos.component';
import { ObtenerProductosComponent1750268695526 } from './api-doc-page/Cuentas-Bolsillo/ObtenerProductos.component';
import { ObtenerProductosCVComponent1750268695535 } from './api-doc-page/Cuentas-Bolsillo/ObtenerProductosCV.component';
import { ObtenerChequeraComponent1750268695541 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequera.component';
import { ObtenerChequerasComponent1750268695551 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequeras.component';
import { ObtenerChequesdeChequeraComponent1750268695557 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequesdeChequera.component';
import { ObtenerComisionChequeraComponent1750268695568 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerComisionChequera.component';
import { ObtenerEstadodeChequeraComponent1750268695574 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerEstadodeChequera.component';
import { ObtenerSolicitudesdeChequerasComponent1750268695582 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerSolicitudesdeChequeras.component';
import { ObtenerTiposdeChequeraComponent1750268695587 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerTiposdeChequera.component';
import { ObtenerTiposdeChequeraporProductoComponent1750268695591 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerTiposdeChequeraporProducto.component';
import { EliminarChequeraComponent1750268695597 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/EliminarChequera.component';
import { RegistrarOrdendeNoPagodeChequeraComponent1750268695602 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/RegistrarOrdendeNoPagodeChequera.component';
import { RegistrarOrdendeNoPagodeChequesComponent1750268695608 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/RegistrarOrdendeNoPagodeCheques.component';
import { SolicitarChequeraComponent1750268695615 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/SolicitarChequera.component';
import { ContratarconPeriodicidadComponent1750268695620 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarconPeriodicidad.component';
import { ContratarProductoComponent1750268695627 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarProducto.component';
import { ContratarProductoconAltadeFacultadesComponent1750268695636 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarProductoconAltadeFacultades.component';
import { ObtenerAcuerdosComponent1750268695643 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerAcuerdos.component';
import { ObtenerDatosComponent1750268695654 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerDatos.component';
import { ObtenerEstadodeCuentaComponent1750268695661 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerEvoluciondeSaldosComponent1750268695668 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerEvoluciondeSaldos.component';
import { ObtenerProductosComponent1750268695677 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerProductos.component';
import { ContratarconPeriodicidadComponent1750268695686 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarconPeriodicidad.component';
import { ContratarProductoComponent1750268695694 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarProducto.component';
import { ContratarProductoconAltadeFacultadesComponent1750268695702 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarProductoconAltadeFacultades.component';
import { ObtenerDatosComponent1750268695710 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerDatos.component';
import { ObtenerEstadodeCuentaComponent1750268695718 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerEvoluciondeSaldosComponent1750268695729 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerEvoluciondeSaldos.component';
import { ObtenerProductosComponent1750268695737 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerProductos.component';
import { ActualizarBeneficiariosComponent1750268695745 } from './api-doc-page/Cuentas-Vista/Beneficiarios/ActualizarBeneficiarios.component';
import { ObtenerBeneficiariosComponent1750268695752 } from './api-doc-page/Cuentas-Vista/Beneficiarios/ObtenerBeneficiarios.component';
import { ActualizarDocumentoDigitalComponent1750268695759 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750268695767 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750268695772 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750268695781 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750268695785 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ObtenerBolsillosComponent1750268695791 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerBolsillos.component';
import { ObtenerCBUdeCuentaVistaComponent1750268695797 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerCBUdeCuentaVista.component';
import { ObtenerCuentaVistadeCBUComponent1750268695802 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerCuentaVistadeCBU.component';
import { ObtenerDetalleBloqueoComponent1750268695807 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerDetalleBloqueo.component';
import { ObtenerEstadodeCuentaporPeriodoComponent1750268695814 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerEstadodeCuentaporPeriodo.component';
import { ObtenerEstadoDeOperacionComponent1750268695820 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerEstadoDeOperacion.component';
import { ObtenerFacultadesComponent1750268695825 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerFacultades.component';
import { ObtenerPaqueteComponent1750268695831 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPaquete.component';
import { ObtenerPeriododeAcreditacionComponent1750268695844 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPeriododeAcreditacion.component';
import { ObtenerPeriodosdeAcreditacionComponent1750268695838 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPeriodosdeAcreditacion.component';
import { ObtenerSaldoBloqueadoComponent1750268695849 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldoBloqueado.component';
import { ObtenerSaldoDisponibleComponent1750268695854 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldoDisponible.component';
import { ObtenerSaldosBloqueadosComponent1750268695859 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldosBloqueados.component';
import { AcreditarEnCuentaComponent1750268695866 } from './api-doc-page/Cuentas-Vista/Operar/AcreditarEnCuenta.component';
import { ActivarComponent1750268695871 } from './api-doc-page/Cuentas-Vista/Operar/Activar.component';
import { ActualizarPeriododeAcreditacionComponent1750268695877 } from './api-doc-page/Cuentas-Vista/Operar/ActualizarPeriododeAcreditacion.component';
import { BloquearSaldoComponent1750268695883 } from './api-doc-page/Cuentas-Vista/Operar/BloquearSaldo.component';
import { CancelarComponent1750268695890 } from './api-doc-page/Cuentas-Vista/Operar/Cancelar.component';
import { DebitarEnCuentaComponent1750268695896 } from './api-doc-page/Cuentas-Vista/Operar/DebitarEnCuenta.component';
import { DesbloquearSaldoComponent1750268695903 } from './api-doc-page/Cuentas-Vista/Operar/DesbloquearSaldo.component';
import { ActualizarPerfilTransaccionalComponent1750268695913 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/ActualizarPerfilTransaccional.component';
import { AgregarPerfilTransaccionalComponent1750268695920 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/AgregarPerfilTransaccional.component';
import { ObtenerPerfilTransaccionalComponent1750268695927 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/ObtenerPerfilTransaccional.component';
import { TraspasarConTipoDeCambioEspecialComponent1750268695936 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarConTipoDeCambioEspecial.component';
import { TraspasarEntreCuentasdelaMismaPersonaComponent1750268695945 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasdelaMismaPersona.component';
import { TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750268695953 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasMismoTitularcontipodecambio.component';
import { TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750268695961 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasMismoTitulardiferentesmonedas.component';
import { TraspasarEntreCuentasPropiasComponent1750268695986 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropias.component';
import { TraspasarEntreCuentasPropiascontipodecambioComponent1750268695970 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropiascontipodecambio.component';
import { TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750268695979 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropiasdiferentesmonedas.component';
import { TraspasarEntreCuentasTercerosComponent1750268696010 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTerceros.component';
import { TraspasarEntreCuentasTerceroscontipodecambioComponent1750268695995 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTerceroscontipodecambio.component';
import { TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750268696002 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTercerosdiferentesmonedas.component';
import { ActualizarBeneficiariosComponent1750268696018 } from './api-doc-page/Depósitos-a-Plazo/Beneficiarios/ActualizarBeneficiarios.component';
import { ObtenerBeneficiariosComponent1750268696026 } from './api-doc-page/Depósitos-a-Plazo/Beneficiarios/ObtenerBeneficiarios.component';
import { ContratarComponent1750268696035 } from './api-doc-page/Depósitos-a-Plazo/Contratar/Contratar.component';
import { ContratarConFacultadesComponent1750268696044 } from './api-doc-page/Depósitos-a-Plazo/Contratar/ContratarConFacultades.component';
import { ContratarSimulacionComponent1750268696054 } from './api-doc-page/Depósitos-a-Plazo/Contratar/ContratarSimulacion.component';
import { ActualizarDocumentoDigitalComponent1750268696061 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750268696068 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750268696076 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750268696086 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ModificarCuentaDestinoalVencimientoComponent1750268696093 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarCuentaDestinoalVencimiento.component';
import { ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750268696101 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarCuentaDestinodeAcreditacionPeriodica.component';
import { ModificarInstruccionComponent1750268696108 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarInstruccion.component';
import { ObtenerAvanceComponent1750268696118 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerAvance.component';
import { ObtenerDatosComponent1750268696126 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDatos.component';
import { ObtenerDatosPrecancelacionComponent1750268696133 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDatosPrecancelacion.component';
import { ObtenerDocumentosDigitalesComponent1750268696139 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDocumentosDigitales.component';
import { ObtenerInstruccionComponent1750268696156 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerInstruccion.component';
import { ObtenerInstruccionesHabilitadosComponent1750268696147 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerInstruccionesHabilitados.component';
import { ObtenerMovimientosComponent1750268696164 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerMovimientos.component';
import { ObtenerPeriodosHabilitadosComponent1750268696172 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerPeriodosHabilitados.component';
import { ObtenerProductosComponent1750268696180 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerProductos.component';
import { ObtenerProductosHabilitadosComponent1750268696186 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerProductosHabilitados.component';
import { ObtenerTasadePrecancelacionComponent1750268696194 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerTasadePrecancelacion.component';
import { PrecancelarComponent1750268696202 } from './api-doc-page/Depósitos-a-Plazo/Precancelar.component';
import { SimularComponent1750268696209 } from './api-doc-page/Depósitos-a-Plazo/Simular/Simular.component';
import { SimularConCronogramaComponent1750268696217 } from './api-doc-page/Depósitos-a-Plazo/Simular/SimularConCronograma.component';
import { ConfirmarListaComponent1750268696223 } from './api-doc-page/Descuento-de-Documentos/ConfirmarLista.component';
import { CrearListaComponent1750268696230 } from './api-doc-page/Descuento-de-Documentos/CrearLista.component';
import { CrearListaChequesComponent1750268696238 } from './api-doc-page/Descuento-de-Documentos/CrearListaCheques.component';
import { ObtenerProductosComponent1750268696247 } from './api-doc-page/Descuento-de-Documentos/ObtenerProductos.component';
import { ObtenerTiposDeDesembolsoComponent1750268696255 } from './api-doc-page/Descuento-de-Documentos/ObtenerTiposDeDesembolso.component';
import { SeleccionarOpcionDesembolsoComponent1750268696264 } from './api-doc-page/Descuento-de-Documentos/SeleccionarOpcionDesembolso.component';
import { ObtenerAgrupadoresComponent1750268696270 } from './api-doc-page/Indicadores/ObtenerAgrupadores.component';
import { ObtenerCierredeSaldosporMonedaComponent1750268696278 } from './api-doc-page/Indicadores/ObtenerCierredeSaldosporMoneda.component';
import { ObtenerCondicionesGeneralesComponent1750268696284 } from './api-doc-page/Indicadores/ObtenerCondicionesGenerales.component';
import { ObtenerIndicadoresComponent1750268696291 } from './api-doc-page/Indicadores/ObtenerIndicadores.component';
import { ObtenerMetodosMasEjecutadosComponent1750268696299 } from './api-doc-page/Indicadores/ObtenerMetodosMasEjecutados.component';
import { ObtenerMonedasIndicesComponent1750268696305 } from './api-doc-page/Indicadores/ObtenerMonedasIndices.component';
import { ObtenerRubrosBolsaComponent1750268696313 } from './api-doc-page/Indicadores/ObtenerRubrosBolsa.component';
import { ObtenerServiciosMasEjecutadosComponent1750268696325 } from './api-doc-page/Indicadores/ObtenerServiciosMasEjecutados.component';
import { ObtenerSesionesPorUsuarioComponent1750268696334 } from './api-doc-page/Indicadores/ObtenerSesionesPorUsuario.component';
import { ObtenerSucursalesCajasComponent1750268696343 } from './api-doc-page/Indicadores/ObtenerSucursalesCajas.component';
import { ObtenerTransaccionesporEstadosComponent1750268696353 } from './api-doc-page/Indicadores/ObtenerTransaccionesporEstados.component';
import { BuscarClienteComponent1750268696359 } from './api-doc-page/Microfinanzas/BuscarCliente.component';
import { CompletarTareaComponent1750268696368 } from './api-doc-page/Microfinanzas/CompletarTarea.component';
import { CrearSolicitudAmpliacionComponent1750268696376 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudAmpliacion.component';
import { CrearSolicitudIndividualComponent1750268696382 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudIndividual.component';
import { CrearSolicitudRenovacionComponent1750268696390 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudRenovacion.component';
import { AgregarFiadorComponent1750268696397 } from './api-doc-page/Microfinanzas/Fiadores/AgregarFiador.component';
import { EliminarFiadorComponent1750268696404 } from './api-doc-page/Microfinanzas/Fiadores/EliminarFiador.component';
import { ActualizarGrupoComponent1750268696411 } from './api-doc-page/Microfinanzas/Grupales/ActualizarGrupo.component';
import { ActualizarIntegrantedeGrupoComponent1750268696418 } from './api-doc-page/Microfinanzas/Grupales/ActualizarIntegrantedeGrupo.component';
import { AgregarGrupoComponent1750268696424 } from './api-doc-page/Microfinanzas/Grupales/AgregarGrupo.component';
import { AgregarIntegranteaGrupoComponent1750268696432 } from './api-doc-page/Microfinanzas/Grupales/AgregarIntegranteaGrupo.component';
import { CrearSolicitudGrupalComponent1750268696440 } from './api-doc-page/Microfinanzas/Grupales/CrearSolicitudGrupal.component';
import { HabilitarIntegrantedeunGrupoComponent1750268696447 } from './api-doc-page/Microfinanzas/Grupales/HabilitarIntegrantedeunGrupo.component';
import { InhabilitarIntegrantedeunGrupoComponent1750268696456 } from './api-doc-page/Microfinanzas/Grupales/InhabilitarIntegrantedeunGrupo.component';
import { ObtenerDetalleGrupoComponent1750268696463 } from './api-doc-page/Microfinanzas/Grupales/ObtenerDetalleGrupo.component';
import { ObtenerGruposComponent1750268696471 } from './api-doc-page/Microfinanzas/Grupales/ObtenerGrupos.component';
import { ObtenerIntegrantesdeGrupoComponent1750268696478 } from './api-doc-page/Microfinanzas/Grupales/ObtenerIntegrantesdeGrupo.component';
import { ObtenerTiposdeGrupoComponent1750268696486 } from './api-doc-page/Microfinanzas/Grupales/ObtenerTiposdeGrupo.component';
import { ObtenerTiposdeIntegranteComponent1750268696493 } from './api-doc-page/Microfinanzas/Grupales/ObtenerTiposdeIntegrante.component';
import { SimularPrestamoAmortizableGrupalComponent1750268696502 } from './api-doc-page/Microfinanzas/Grupales/SimularPrestamoAmortizableGrupal.component';
import { ObtenerAsesoresComponent1750268696511 } from './api-doc-page/Microfinanzas/Obtener/ObtenerAsesores.component';
import { ObtenerCampanasComponent1750268696518 } from './api-doc-page/Microfinanzas/Obtener/ObtenerCampanas.component';
import { ObtenerDestinosCreditoComponent1750268696527 } from './api-doc-page/Microfinanzas/Obtener/ObtenerDestinosCredito.component';
import { ObtenerOperacionesClienteComponent1750268696538 } from './api-doc-page/Microfinanzas/Obtener/ObtenerOperacionesCliente.component';
import { ObtenerOrigenesdeCaptacionComponent1750268696547 } from './api-doc-page/Microfinanzas/Obtener/ObtenerOrigenesdeCaptacion.component';
import { ObtenerProductosComponent1750268696554 } from './api-doc-page/Microfinanzas/Obtener/ObtenerProductos.component';
import { ObtenerSolicitudesClienteComponent1750268696560 } from './api-doc-page/Microfinanzas/Obtener/ObtenerSolicitudesCliente.component';
import { ObtenerTiposAvalComponent1750268696567 } from './api-doc-page/Microfinanzas/Obtener/ObtenerTiposAval.component';
import { AgregarOperacionesaCancelarComponent1750268696572 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/AgregarOperacionesaCancelar.component';
import { ObtenerOperacionesaCancelarComponent1750268696581 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/ObtenerOperacionesaCancelar.component';
import { QuitarOperacionesaCancelarComponent1750268696587 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/QuitarOperacionesaCancelar.component';
import { SimularLibreAmortizacionComponent1750268696595 } from './api-doc-page/Microfinanzas/Simular/SimularLibreAmortizacion.component';
import { SimularPrestamoAmortizableComponent1750268696601 } from './api-doc-page/Microfinanzas/Simular/SimularPrestamoAmortizable.component';
import { SimularPrestamoPlazoFijoComponent1750268696607 } from './api-doc-page/Microfinanzas/Simular/SimularPrestamoPlazoFijo.component';
import { ValidarPoliticasComponent1750268696616 } from './api-doc-page/Microfinanzas/ValidarPoliticas.component';
import { ObtenerCantidadCuotasComponent1750268696623 } from './api-doc-page/Modelador-de-Préstamos/ObtenerCantidadCuotas.component';
import { ObtenerCapitalComponent1750268696632 } from './api-doc-page/Modelador-de-Préstamos/ObtenerCapital.component';
import { ObtenerComisionesComponent1750268696640 } from './api-doc-page/Modelador-de-Préstamos/ObtenerComisiones.component';
import { ObtenerComisionesporCuotaComponent1750268696648 } from './api-doc-page/Modelador-de-Préstamos/ObtenerComisionesporCuota.component';
import { ObtenerDiasPrimerPeriodoComponent1750268696655 } from './api-doc-page/Modelador-de-Préstamos/ObtenerDiasPrimerPeriodo.component';
import { ObtenerPeriodoEntreCuotasComponent1750268696671 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPeriodoEntreCuotas.component';
import { ObtenerPermiteSegurosdelMismoTipoComponent1750268696663 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPermiteSegurosdelMismoTipo.component';
import { ObtenerPlazoComponent1750268696679 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPlazo.component';
import { ObtenerRequiereSegurodeVidaObligatorioComponent1750268696685 } from './api-doc-page/Modelador-de-Préstamos/ObtenerRequiereSegurodeVidaObligatorio.component';
import { ObtenerSegurosComponent1750268696692 } from './api-doc-page/Modelador-de-Préstamos/ObtenerSeguros.component';
import { ObtenerItemsModeloComponent1750268696699 } from './api-doc-page/PAE/ObtenerItemsModelo.component';
import { ObtenerModelosPAEComponent1750268696705 } from './api-doc-page/PAE/ObtenerModelosPAE.component';
import { ObtenerScoresComponent1750268696713 } from './api-doc-page/PAE/ObtenerScores.component';
import { ObtenerTiposDeModelosComponent1750268696720 } from './api-doc-page/PAE/ObtenerTiposDeModelos.component';
import { ContratarPrestamoComponent1750268696729 } from './api-doc-page/Partners/Contratar/ContratarPrestamo.component';
import { ContratarVehicularComponent1750268696737 } from './api-doc-page/Partners/Contratar/ContratarVehicular.component';
import { CrearClienteComponent1750268696745 } from './api-doc-page/Partners/Crear/CrearCliente.component';
import { CrearPersonaClienteComponent1750268696755 } from './api-doc-page/Partners/Crear/CrearPersonaCliente.component';
import { ObtenerDatosdeUsuarioComponent1750268696763 } from './api-doc-page/Partners/Obtener/ObtenerDatosdeUsuario.component';
import { ObtenerDetalledeOfertaAmortizableComponent1750268696770 } from './api-doc-page/Partners/Obtener/ObtenerDetalledeOfertaAmortizable.component';
import { ObtenerDetalleOfertaVehicularComponent1750268696777 } from './api-doc-page/Partners/Obtener/ObtenerDetalleOfertaVehicular.component';
import { ObtenerMarcasComponent1750268696785 } from './api-doc-page/Partners/Obtener/ObtenerMarcas.component';
import { ObtenerModelosComponent1750268696793 } from './api-doc-page/Partners/Obtener/ObtenerModelos.component';
import { ObtenerPartnersComponent1750268696800 } from './api-doc-page/Partners/Obtener/ObtenerPartners.component';
import { ObtenerPrestamosdeClienteComponent1750268696825 } from './api-doc-page/Partners/Obtener/ObtenerPrestamosdeCliente.component';
import { ObtenerProductosComponent1750268696808 } from './api-doc-page/Partners/Obtener/ObtenerProductos.component';
import { ObtenerProductosdelPartnerComponent1750268696816 } from './api-doc-page/Partners/Obtener/ObtenerProductosdelPartner.component';
import { ObtenerPuntosdeVentaComponent1750268696832 } from './api-doc-page/Partners/Obtener/ObtenerPuntosdeVenta.component';
import { ObtenerVendedoresComponent1750268696838 } from './api-doc-page/Partners/Obtener/ObtenerVendedores.component';
import { ObtenerVersionesComponent1750268696846 } from './api-doc-page/Partners/Obtener/ObtenerVersiones.component';
import { SimularOfertasComponent1750268696855 } from './api-doc-page/Partners/Simular/SimularOfertas.component';
import { SimularOfertasVehicularComponent1750268696865 } from './api-doc-page/Partners/Simular/SimularOfertasVehicular.component';
import { SimularPrestamoComponent1750268696872 } from './api-doc-page/Partners/Simular/SimularPrestamo.component';
import { SimularVehicularComponent1750268696879 } from './api-doc-page/Partners/Simular/SimularVehicular.component';
import { ObtenerCorrelativoGuiaComponent1750268696886 } from './api-doc-page/Parámetros-Base/ObtenerCorrelativoGuia.component';
import { ObtenerCorrelativoGuiaEspecialComponent1750268696894 } from './api-doc-page/Parámetros-Base/ObtenerCorrelativoGuiaEspecial.component';
import { ObtenerGuiadeProcesoComponent1750268696900 } from './api-doc-page/Parámetros-Base/ObtenerGuiadeProceso.component';
import { ObtenerGuiaEspecialdeProcesoComponent1750268696905 } from './api-doc-page/Parámetros-Base/ObtenerGuiaEspecialdeProceso.component';
import { ObtenerOpcionGeneraldeProcesoComponent1750268696912 } from './api-doc-page/Parámetros-Base/ObtenerOpcionGeneraldeProceso.component';
import { ObtenerOpcionGeneralPorModuloComponent1750268696919 } from './api-doc-page/Parámetros-Base/ObtenerOpcionGeneralPorModulo.component';
import { ObtenerProgramaParticularComponent1750268696924 } from './api-doc-page/Parámetros-Base/ObtenerProgramaParticular.component';
import { ActualizarComponent1750268696932 } from './api-doc-page/Personas/Actualizar/Actualizar.component';
import { ActualizarCelularComponent1750268696938 } from './api-doc-page/Personas/Actualizar/ActualizarCelular.component';
import { ActualizarContactoComponent1750268696945 } from './api-doc-page/Personas/Actualizar/ActualizarContacto.component';
import { ActualizarConyugeComponent1750268696962 } from './api-doc-page/Personas/Actualizar/ActualizarConyuge.component';
import { ActualizarCorreoElectronicoComponent1750268696955 } from './api-doc-page/Personas/Actualizar/ActualizarCorreoElectronico.component';
import { ActualizarDomicilioComponent1750268696969 } from './api-doc-page/Personas/Actualizar/ActualizarDomicilio.component';
import { ActualizarFATCAComponent1750268696974 } from './api-doc-page/Personas/Actualizar/ActualizarFATCA.component';
import { ActualizarInformacionAdicionalComponent1750268696984 } from './api-doc-page/Personas/Actualizar/ActualizarInformacionAdicional.component';
import { ActualizarInformacionFinancieraComponent1750268696991 } from './api-doc-page/Personas/Actualizar/ActualizarInformacionFinanciera.component';
import { ActualizarIntegrantedePersonaJuridicaComponent1750268696999 } from './api-doc-page/Personas/Actualizar/ActualizarIntegrantedePersonaJuridica.component';
import { ActualizarPersonaJuridicaComponent1750268697005 } from './api-doc-page/Personas/Actualizar/ActualizarPersonaJuridica.component';
import { ActualizarProfesionComponent1750268697012 } from './api-doc-page/Personas/Actualizar/ActualizarProfesion.component';
import { ActualizarReferenciaComponent1750268697019 } from './api-doc-page/Personas/Actualizar/ActualizarReferencia.component';
import { ActualizarRegistroEmpleadoComponent1750268697027 } from './api-doc-page/Personas/Actualizar/ActualizarRegistroEmpleado.component';
import { ActualizarTelefonoComponent1750268697035 } from './api-doc-page/Personas/Actualizar/ActualizarTelefono.component';
import { ActualizarVictimaHechoViolentoComponent1750268697044 } from './api-doc-page/Personas/Actualizar/ActualizarVictimaHechoViolento.component';
import { ModificarDocumentoAdicionalComponent1750268697056 } from './api-doc-page/Personas/Actualizar/ModificarDocumentoAdicional.component';
import { AgregaraListaNegraComponent1750268697066 } from './api-doc-page/Personas/Agregar/AgregaraListaNegra.component';
import { AgregarContactoComponent1750268697073 } from './api-doc-page/Personas/Agregar/AgregarContacto.component';
import { AgregarCorreoElectronicoComponent1750268697085 } from './api-doc-page/Personas/Agregar/AgregarCorreoElectronico.component';
import { AgregarDatosPEPComponent1750268697095 } from './api-doc-page/Personas/Agregar/AgregarDatosPEP.component';
import { AgregarDocumentoAdicionalComponent1750268697103 } from './api-doc-page/Personas/Agregar/AgregarDocumentoAdicional.component';
import { AgregarDomicilioComponent1750268697112 } from './api-doc-page/Personas/Agregar/AgregarDomicilio.component';
import { AgregarEstadoFinancieroComponent1750268697120 } from './api-doc-page/Personas/Agregar/AgregarEstadoFinanciero.component';
import { AgregarFATCAComponent1750268697140 } from './api-doc-page/Personas/Agregar/AgregarFATCA.component';
import { AgregarInformacionAdicionalComponent1750268697148 } from './api-doc-page/Personas/Agregar/AgregarInformacionAdicional.component';
import { AgregarInformacionFinancieraComponent1750268697157 } from './api-doc-page/Personas/Agregar/AgregarInformacionFinanciera.component';
import { AgregarIntegranteaPersonaJuridicaComponent1750268697167 } from './api-doc-page/Personas/Agregar/AgregarIntegranteaPersonaJuridica.component';
import { AgregarPersonaVinculadaComponent1750268697176 } from './api-doc-page/Personas/Agregar/AgregarPersonaVinculada.component';
import { AgregarReferenciaComponent1750268697185 } from './api-doc-page/Personas/Agregar/AgregarReferencia.component';
import { AgregarTelefonoComponent1750268697193 } from './api-doc-page/Personas/Agregar/AgregarTelefono.component';
import { AgregarVictimaHechoViolentoComponent1750268697203 } from './api-doc-page/Personas/Agregar/AgregarVictimaHechoViolento.component';
import { CrearComponent1750268697214 } from './api-doc-page/Personas/Crear/Crear.component';
import { CrearConyugeComponent1750268697223 } from './api-doc-page/Personas/Crear/CrearConyuge.component';
import { CrearPersonaJuridicaComponent1750268697235 } from './api-doc-page/Personas/Crear/CrearPersonaJuridica.component';
import { CrearReducidoComponent1750268697245 } from './api-doc-page/Personas/Crear/CrearReducido.component';
import { ActualizarDocumentoDigitalComponent1750268697253 } from './api-doc-page/Personas/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750268697262 } from './api-doc-page/Personas/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750268697270 } from './api-doc-page/Personas/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750268697278 } from './api-doc-page/Personas/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750268697285 } from './api-doc-page/Personas/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { EliminarConyugeComponent1750268697294 } from './api-doc-page/Personas/Eliminar/EliminarConyuge.component';
import { EliminarDocumentoAdicionalComponent1750268697301 } from './api-doc-page/Personas/Eliminar/EliminarDocumentoAdicional.component';
import { EliminarDomicilioComponent1750268697309 } from './api-doc-page/Personas/Eliminar/EliminarDomicilio.component';
import { EliminarInformacionAdicionalComponent1750268697318 } from './api-doc-page/Personas/Eliminar/EliminarInformacionAdicional.component';
import { EliminarIntegrantedePersonaJuridicaComponent1750268697329 } from './api-doc-page/Personas/Eliminar/EliminarIntegrantedePersonaJuridica.component';
import { EliminarPersonaVinculadaComponent1750268697339 } from './api-doc-page/Personas/Eliminar/EliminarPersonaVinculada.component';
import { EliminarProfesionComponent1750268697349 } from './api-doc-page/Personas/Eliminar/EliminarProfesion.component';
import { ObtenerComponent1750268697361 } from './api-doc-page/Personas/Obtener/Obtener.component';
import { ObtenerConceptoComponent1750268697369 } from './api-doc-page/Personas/Obtener/ObtenerConcepto.component';
import { ObtenerContactosComponent1750268697379 } from './api-doc-page/Personas/Obtener/ObtenerContactos.component';
import { ObtenerConyugeComponent1750268697405 } from './api-doc-page/Personas/Obtener/ObtenerConyuge.component';
import { ObtenerCorreosElectronicosComponent1750268697387 } from './api-doc-page/Personas/Obtener/ObtenerCorreosElectronicos.component';
import { ObtenerCuentasClienteComponent1750268697396 } from './api-doc-page/Personas/Obtener/ObtenerCuentasCliente.component';
import { ObtenerDatosPEPComponent1750268697413 } from './api-doc-page/Personas/Obtener/ObtenerDatosPEP.component';
import { ObtenerDocumentosAdicionalesComponent1750268697424 } from './api-doc-page/Personas/Obtener/ObtenerDocumentosAdicionales.component';
import { ObtenerDomiciliosComponent1750268697433 } from './api-doc-page/Personas/Obtener/ObtenerDomicilios.component';
import { ObtenerEstadosCivilesComponent1750268697441 } from './api-doc-page/Personas/Obtener/ObtenerEstadosCiviles.component';
import { ObtenerFacultadesComponent1750268697446 } from './api-doc-page/Personas/Obtener/ObtenerFacultades.component';
import { ObtenerFATCAComponent1750268697453 } from './api-doc-page/Personas/Obtener/ObtenerFATCA.component';
import { ObtenerHobbiesComponent1750268697462 } from './api-doc-page/Personas/Obtener/ObtenerHobbies.component';
import { ObtenerHobbyComponent1750268697470 } from './api-doc-page/Personas/Obtener/ObtenerHobby.component';
import { ObtenerIdBantotalComponent1750268697477 } from './api-doc-page/Personas/Obtener/ObtenerIdBantotal.component';
import { ObtenerIdentidadesdeGeneroComponent1750268697484 } from './api-doc-page/Personas/Obtener/ObtenerIdentidadesdeGenero.component';
import { ObtenerIdentificadorUnicoComponent1750268697490 } from './api-doc-page/Personas/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerInformacionAdicionalComponent1750268697497 } from './api-doc-page/Personas/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerInformacionFinancieraComponent1750268697506 } from './api-doc-page/Personas/Obtener/ObtenerInformacionFinanciera.component';
import { ObtenerIntegrantesPersonaJuridicaComponent1750268697513 } from './api-doc-page/Personas/Obtener/ObtenerIntegrantesPersonaJuridica.component';
import { ObtenerLimitesComponent1750268697521 } from './api-doc-page/Personas/Obtener/ObtenerLimites.component';
import { ObtenerNaturalezasJuridicasComponent1750268697528 } from './api-doc-page/Personas/Obtener/ObtenerNaturalezasJuridicas.component';
import { ObtenerNivelesEducativosComponent1750268697536 } from './api-doc-page/Personas/Obtener/ObtenerNivelesEducativos.component';
import { ObtenerOcupacionesComponent1750268697544 } from './api-doc-page/Personas/Obtener/ObtenerOcupaciones.component';
import { ObtenerPersonaJuridicaComponent1750268697554 } from './api-doc-page/Personas/Obtener/ObtenerPersonaJuridica.component';
import { ObtenerPersonasComponent1750268697563 } from './api-doc-page/Personas/Obtener/ObtenerPersonas.component';
import { ObtenerPersonasJuridicasComponent1750268697573 } from './api-doc-page/Personas/Obtener/ObtenerPersonasJuridicas.component';
import { ObtenerPersonasVinculadasComponent1750268697580 } from './api-doc-page/Personas/Obtener/ObtenerPersonasVinculadas.component';
import { ObtenerProfesionComponent1750268697599 } from './api-doc-page/Personas/Obtener/ObtenerProfesion.component';
import { ObtenerProfesionesComponent1750268697591 } from './api-doc-page/Personas/Obtener/ObtenerProfesiones.component';
import { ObtenerReferenciasComponent1750268697606 } from './api-doc-page/Personas/Obtener/ObtenerReferencias.component';
import { ObtenerTarjetasdeDebitoComponent1750268697615 } from './api-doc-page/Personas/Obtener/ObtenerTarjetasdeDebito.component';
import { ObtenerTelefonosComponent1750268697621 } from './api-doc-page/Personas/Obtener/ObtenerTelefonos.component';
import { ObtenerTipodePersonaComponent1750268697629 } from './api-doc-page/Personas/Obtener/ObtenerTipodePersona.component';
import { ObtenerTiposdeDocumentoComponent1750268697637 } from './api-doc-page/Personas/Obtener/ObtenerTiposdeDocumento.component';
import { ObtenerTiposDeFuncionarioPublicoComponent1750268697645 } from './api-doc-page/Personas/Obtener/ObtenerTiposDeFuncionarioPublico.component';
import { ObtenerTiposDePEPComponent1750268697651 } from './api-doc-page/Personas/Obtener/ObtenerTiposDePEP.component';
import { ObtenerTitularesDelTelefonoComponent1750268697658 } from './api-doc-page/Personas/Obtener/ObtenerTitularesDelTelefono.component';
import { ObtenerVictimaHechoViolentoComponent1750268697665 } from './api-doc-page/Personas/Obtener/ObtenerVictimaHechoViolento.component';
import { ObtenerVinculosComponent1750268697671 } from './api-doc-page/Personas/Obtener/ObtenerVinculos.component';
import { ObtenerVinculosdeAfinidadComponent1750268697678 } from './api-doc-page/Personas/Obtener/ObtenerVinculosdeAfinidad.component';
import { ObtenerVinculosdeConsanguinidadComponent1750268697684 } from './api-doc-page/Personas/Obtener/ObtenerVinculosdeConsanguinidad.component';
import { ObtenerVinculosJuridicosComponent1750268697692 } from './api-doc-page/Personas/Obtener/ObtenerVinculosJuridicos.component';
import { EvaluarPAEComponent1750268697699 } from './api-doc-page/Personas/Validar/EvaluarPAE.component';
import { ValidarCorreoElectronicoComponent1750268697705 } from './api-doc-page/Personas/Validar/ValidarCorreoElectronico.component';
import { ValidarDocumentoComponent1750268697712 } from './api-doc-page/Personas/Validar/ValidarDocumento.component';
import { ValidarenListasNegrasComponent1750268697722 } from './api-doc-page/Personas/Validar/ValidarenListasNegras.component';
import { ValidarExistenciaComponent1750268697730 } from './api-doc-page/Personas/Validar/ValidarExistencia.component';
import { ValidarListasInhabilitadosComponent1750268697736 } from './api-doc-page/Personas/Validar/ValidarListasInhabilitados.component';
import { VerificarEmpleadoComponent1750268697741 } from './api-doc-page/Personas/Validar/VerificarEmpleado.component';
import { ConvertirTasaAnualEfectivaaLinealComponent1750268697750 } from './api-doc-page/Precios/Convertir/ConvertirTasaAnualEfectivaaLineal.component';
import { ConvertirTasaAnualLinealaEfectivaComponent1750268697758 } from './api-doc-page/Precios/Convertir/ConvertirTasaAnualLinealaEfectiva.component';
import { ConvertirTasaMensualEfectivaaLinealComponent1750268697764 } from './api-doc-page/Precios/Convertir/ConvertirTasaMensualEfectivaaLineal.component';
import { ConvertirTasaMensualLinealaEfectivaComponent1750268697770 } from './api-doc-page/Precios/Convertir/ConvertirTasaMensualLinealaEfectiva.component';
import { ObtenerCotizacionComponent1750268697776 } from './api-doc-page/Precios/Obtener/ObtenerCotizacion.component';
import { ObtenerCotizacionaFechaComponent1750268697785 } from './api-doc-page/Precios/Obtener/ObtenerCotizacionaFecha.component';
import { ObtenerCotizacionCierreComponent1750268697793 } from './api-doc-page/Precios/Obtener/ObtenerCotizacionCierre.component';
import { ObtenerPizarraEspecialporTransaccionComponent1750268697799 } from './api-doc-page/Precios/Obtener/ObtenerPizarraEspecialporTransaccion.component';
import { ObtenerPrecioaFechaComponent1750268697805 } from './api-doc-page/Precios/Obtener/ObtenerPrecioaFecha.component';
import { ObtenerPrecioEspecieComponent1750268697812 } from './api-doc-page/Precios/Obtener/ObtenerPrecioEspecie.component';
import { ObtenerTasadeOperacionComponent1750268697818 } from './api-doc-page/Precios/Obtener/ObtenerTasadeOperacion.component';
import { ObtenerTasaParaClienteComponent1750268697824 } from './api-doc-page/Precios/Obtener/ObtenerTasaParaCliente.component';
import { ObtenerTasaParaProductoComponent1750268697833 } from './api-doc-page/Precios/Obtener/ObtenerTasaParaProducto.component';
import { ObtenerTipodeCambioComponent1750268697843 } from './api-doc-page/Precios/Obtener/ObtenerTipodeCambio.component';
import { ObtenerTiposDeCambioEspecialesComponent1750268697850 } from './api-doc-page/Precios/Obtener/ObtenerTiposDeCambioEspeciales.component';
import { CancelarComponent1750268697856 } from './api-doc-page/Préstamos/Cancelar/Cancelar.component';
import { CancelaraFechaComponent1750268697864 } from './api-doc-page/Préstamos/Cancelar/CancelaraFecha.component';
import { CancelaraFechaTercerosComponent1750268697871 } from './api-doc-page/Préstamos/Cancelar/CancelaraFechaTerceros.component';
import { CancelarTercerosComponent1750268697879 } from './api-doc-page/Préstamos/Cancelar/CancelarTerceros.component';
import { ContratarComponent1750268697886 } from './api-doc-page/Préstamos/Contratar/Contratar.component';
import { ContratarAmpliacionComponent1750268697892 } from './api-doc-page/Préstamos/Contratar/ContratarAmpliacion.component';
import { ContratarRefinanciacionComponent1750268697898 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacion.component';
import { ContratarRefinanciacionporDeudaTotalComponent1750268697904 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacionporDeudaTotal.component';
import { ContratarRefinanciacionporSaldoCapitalComponent1750268697912 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacionporSaldoCapital.component';
import { ActualizarDocumentoDigitalComponent1750268697918 } from './api-doc-page/Préstamos/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750268697924 } from './api-doc-page/Préstamos/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750268697932 } from './api-doc-page/Préstamos/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750268697938 } from './api-doc-page/Préstamos/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750268697947 } from './api-doc-page/Préstamos/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ObtenerCronogramaComponent1750268697955 } from './api-doc-page/Préstamos/Obtener/ObtenerCronograma.component';
import { ObtenerCronogramaaFechaComponent1750268697963 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaaFecha.component';
import { ObtenerCronogramaconPagosaFechaComponent1750268697972 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaconPagosaFecha.component';
import { ObtenerCronogramaenEspecieComponent1750268697982 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaenEspecie.component';
import { ObtenerCronogramaOriginalComponent1750268697991 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaOriginal.component';
import { ObtenerCuentadeCobroComponent1750268698000 } from './api-doc-page/Préstamos/Obtener/ObtenerCuentadeCobro.component';
import { ObtenerDatosdelProximoVencimientoComponent1750268698009 } from './api-doc-page/Préstamos/Obtener/ObtenerDatosdelProximoVencimiento.component';
import { ObtenerDetalleComponent1750268698017 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalle.component';
import { ObtenerDetalleaFechaComponent1750268698025 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleaFecha.component';
import { ObtenerDetalledeCancelacionTotalComponent1750268698032 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeCancelacionTotal.component';
import { ObtenerDetalledeOfertaComponent1750268698038 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOferta.component';
import { ObtenerDetalledeOfertaAmortizableComponent1750268698047 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOfertaAmortizable.component';
import { ObtenerDetalledeOperacionesaRefinanciarComponent1750268698054 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOperacionesaRefinanciar.component';
import { ObtenerDetalledePrestamoCanceladoComponent1750268698060 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledePrestamoCancelado.component';
import { ObtenerDetallePagoPrestamoComponent1750268698069 } from './api-doc-page/Préstamos/Obtener/ObtenerDetallePagoPrestamo.component';
import { ObtenerDetalleReducidoComponent1750268698075 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleReducido.component';
import { ObtenerDetalleSimulacionComponent1750268698085 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleSimulacion.component';
import { ObtenerDeudaComponent1750268698092 } from './api-doc-page/Préstamos/Obtener/ObtenerDeuda.component';
import { ObtenerDeudaPrestamoCastigadoComponent1750268698098 } from './api-doc-page/Préstamos/Obtener/ObtenerDeudaPrestamoCastigado.component';
import { ObtenerDeudaVencidaComponent1750268698104 } from './api-doc-page/Préstamos/Obtener/ObtenerDeudaVencida.component';
import { ObtenerFechadeIncumplimientoComponent1750268698113 } from './api-doc-page/Préstamos/Obtener/ObtenerFechadeIncumplimiento.component';
import { ObtenerFechadeUltimoPagoComponent1750268698118 } from './api-doc-page/Préstamos/Obtener/ObtenerFechadeUltimoPago.component';
import { ObtenerFechasdePagoComponent1750268698124 } from './api-doc-page/Préstamos/Obtener/ObtenerFechasdePago.component';
import { ObtenerInformacionAdicionalComponent1750268698134 } from './api-doc-page/Préstamos/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerMontodeCancelacionComponent1750268698143 } from './api-doc-page/Préstamos/Obtener/ObtenerMontodeCancelacion.component';
import { ObtenerMotivosPrecancelacionComponent1750268698152 } from './api-doc-page/Préstamos/Obtener/ObtenerMotivosPrecancelacion.component';
import { ObtenerPagosdeCuotaComponent1750268698160 } from './api-doc-page/Préstamos/Obtener/ObtenerPagosdeCuota.component';
import { ObtenerPagosdeunPrestamoComponent1750268698168 } from './api-doc-page/Préstamos/Obtener/ObtenerPagosdeunPrestamo.component';
import { ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750268698177 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1.component';
import { ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750268698185 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1.component';
import { ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750268698195 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1.component';
import { ObtenerProductosComponent1750268698202 } from './api-doc-page/Préstamos/Obtener/ObtenerProductos.component';
import { ObtenerProductosRefinanciacionComponent1750268698209 } from './api-doc-page/Préstamos/Obtener/ObtenerProductosRefinanciacion.component';
import { ObtenerRefinanciacionSimuladaComponent1750268698218 } from './api-doc-page/Préstamos/Obtener/ObtenerRefinanciacionSimulada.component';
import { AbonaraCuentaComponent1750268698225 } from './api-doc-page/Préstamos/Operar/AbonaraCuenta.component';
import { ActualizarInformacionAdicionalComponent1750268698232 } from './api-doc-page/Préstamos/Operar/ActualizarInformacionAdicional.component';
import { ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750268698239 } from './api-doc-page/Préstamos/Operar/ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1.component';
import { AgregarCuentadeCobroComponent1750268698246 } from './api-doc-page/Préstamos/Operar/AgregarCuentadeCobro.component';
import { AgregarInformacionAdicionalComponent1750268698254 } from './api-doc-page/Préstamos/Operar/AgregarInformacionAdicional.component';
import { EliminarCuentadeCobroComponent1750268698262 } from './api-doc-page/Préstamos/Operar/EliminarCuentadeCobro.component';
import { EliminarInformacionAdicionalComponent1750268698267 } from './api-doc-page/Préstamos/Operar/EliminarInformacionAdicional.component';
import { SolicitarPrecancelacionComponent1750268698273 } from './api-doc-page/Préstamos/Operar/SolicitarPrecancelacion.component';
import { AdelantarCapitalConReduccionDeCuotaComponent1750268698281 } from './api-doc-page/Préstamos/Pagar/AdelantarCapitalConReduccionDeCuota.component';
import { AdelantarCapitalConReduccionDePlazoComponent1750268698286 } from './api-doc-page/Préstamos/Pagar/AdelantarCapitalConReduccionDePlazo.component';
import { PagarCuotaComponent1750268698291 } from './api-doc-page/Préstamos/Pagar/PagarCuota.component';
import { PagarCuotaaFechaComponent1750268698298 } from './api-doc-page/Préstamos/Pagar/PagarCuotaaFecha.component';
import { PagarCuotaaFechaTercerosComponent1750268698303 } from './api-doc-page/Préstamos/Pagar/PagarCuotaaFechaTerceros.component';
import { PagarCuotaTercerosComponent1750268698308 } from './api-doc-page/Préstamos/Pagar/PagarCuotaTerceros.component';
import { ResimularAmortizableComponent1750268698317 } from './api-doc-page/Préstamos/Simular/ResimularAmortizable.component';
import { ResimularAmpliacionComponent1750268698325 } from './api-doc-page/Préstamos/Simular/ResimularAmpliacion.component';
import { ResimularRefinanciacionComponent1750268698333 } from './api-doc-page/Préstamos/Simular/ResimularRefinanciacion.component';
import { SimularComponent1750268698339 } from './api-doc-page/Préstamos/Simular/Simular.component';
import { SimularAmortizableComponent1750268698346 } from './api-doc-page/Préstamos/Simular/SimularAmortizable.component';
import { SimularAmortizableSinClienteComponent1750268698353 } from './api-doc-page/Préstamos/Simular/SimularAmortizableSinCliente.component';
import { SimularAmpliacionComponent1750268698359 } from './api-doc-page/Préstamos/Simular/SimularAmpliacion.component';
import { SimularAmpliacionIngresandoSegurosComponent1750268698367 } from './api-doc-page/Préstamos/Simular/SimularAmpliacionIngresandoSeguros.component';
import { SimularDespejandoCapitalyCantidaddeCuotasComponent1750268698372 } from './api-doc-page/Préstamos/Simular/SimularDespejandoCapitalyCantidaddeCuotas.component';
import { SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750268698380 } from './api-doc-page/Préstamos/Simular/SimularDespejandoCapitalyCantidaddeCuotasSinCliente.component';
import { SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750268698386 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyCantidaddeCuotas.component';
import { SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750268698394 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinCliente.component';
import { SimularDespejandoFechadeVencimientoyTasaComponent1750268698401 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyTasa.component';
import { SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750268698412 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyTasaSinCliente.component';
import { SimularIngresandoBalloonComponent1750268698420 } from './api-doc-page/Préstamos/Simular/SimularIngresandoBalloon.component';
import { SimularIngresandoBalloonSinClienteComponent1750268698426 } from './api-doc-page/Préstamos/Simular/SimularIngresandoBalloonSinCliente.component';
import { SimularIngresandoSegurosComponent1750268698433 } from './api-doc-page/Préstamos/Simular/SimularIngresandoSeguros.component';
import { SimularIngresandoSegurosSinClienteComponent1750268698440 } from './api-doc-page/Préstamos/Simular/SimularIngresandoSegurosSinCliente.component';
import { SimularLibreAmortizacionComponent1750268698449 } from './api-doc-page/Préstamos/Simular/SimularLibreAmortizacion.component';
import { SimularLibreAmortizacionSinClienteComponent1750268698462 } from './api-doc-page/Préstamos/Simular/SimularLibreAmortizacionSinCliente.component';
import { SimularOfertasComponent1750268698470 } from './api-doc-page/Préstamos/Simular/SimularOfertas.component';
import { SimularPlazoFijoComponent1750268698477 } from './api-doc-page/Préstamos/Simular/SimularPlazoFijo.component';
import { SimularRefinanciacionComponent1750268698485 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacion.component';
import { SimularRefinanciacionporDeudaTotalComponent1750268698493 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacionporDeudaTotal.component';
import { SimularRefinanciacionporSaldoCapitalComponent1750268698501 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacionporSaldoCapital.component';
import { ActualizarTextosComponent1750268698507 } from './api-doc-page/Préstamos/Textos/ActualizarTextos.component';
import { AgregarTextosComponent1750268698514 } from './api-doc-page/Préstamos/Textos/AgregarTextos.component';
import { EliminarTextosComponent1750268698520 } from './api-doc-page/Préstamos/Textos/EliminarTextos.component';
import { ObtenerTextosComponent1750268698527 } from './api-doc-page/Préstamos/Textos/ObtenerTextos.component';
import { EvaluarRegladeNegocioComponent1750268698540 } from './api-doc-page/Reglas-de-Negocio/EvaluarRegladeNegocio.component';
import { ObtenerReglasdeNegocioComponent1750268698547 } from './api-doc-page/Reglas-de-Negocio/ObtenerReglasdeNegocio.component';
import { ObtenerVariablesReglaComponent1750268698554 } from './api-doc-page/Reglas-de-Negocio/ObtenerVariablesRegla.component';
import { ValidarDatosRegladeNegocioComponent1750268698562 } from './api-doc-page/Reglas-de-Negocio/ValidarDatosRegladeNegocio.component';
import { AutorizarExcepcionComponent1750268698569 } from './api-doc-page/Seguridad/AutorizarExcepcion.component';
import { ObtenerDetalledeExcepcionComponent1750268698579 } from './api-doc-page/Seguridad/ObtenerDetalledeExcepcion.component';
import { ObtenerExcepcionesComponent1750268698586 } from './api-doc-page/Seguridad/ObtenerExcepciones.component';
import { RechazarExcepcionComponent1750268698592 } from './api-doc-page/Seguridad/RechazarExcepcion.component';
import { RegistrarDispositivoComponent1750268698600 } from './api-doc-page/Seguridad/RegistrarDispositivo.component';
import { ContratarSeguroComponent1750268698608 } from './api-doc-page/Seguros-Voluntarios/ContratarSeguro.component';
import { ObtenerMontosDeUnSeguroComponent1750268698617 } from './api-doc-page/Seguros-Voluntarios/ObtenerMontosDeUnSeguro.component';
import { ObtenerSegurosComponent1750268698628 } from './api-doc-page/Seguros-Voluntarios/ObtenerSeguros.component';
import { ObtenerSegurosAPagarComponent1750268698637 } from './api-doc-page/Seguros-Voluntarios/ObtenerSegurosAPagar.component';
import { PagarSeguroComponent1750268698647 } from './api-doc-page/Seguros-Voluntarios/PagarSeguro.component';
import { ObtenerCodigosdeLimitesComponent1750268698690 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCodigosdeLimites.component';
import { ObtenerCuentaPreferencialComponent1750268698659 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentaPreferencial.component';
import { ObtenerCuentasaAsociarComponent1750268698669 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasaAsociar.component';
import { ObtenerCuentasAsociadasComponent1750268698676 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasAsociadas.component';
import { ObtenerCuentasAsociadasPorTipoComponent1750268698683 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasAsociadasPorTipo.component';
import { ObtenerDatosComponent1750268698698 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerDatos.component';
import { ObtenerDatosContactoComponent1750268698705 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerDatosContacto.component';
import { ObtenerIdentificadorUnicoComponent1750268698715 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerLimitesComponent1750268698726 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerLimites.component';
import { ObtenerMovimientosComponent1750268698736 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerMovimientos.component';
import { ObtenerTarjetaComponent1750268698746 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjeta.component';
import { ObtenerTarjetaHabienteComponent1750268698755 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjetaHabiente.component';
import { ObtenerTarjetasAdicionalesComponent1750268698763 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjetasAdicionales.component';
import { ObtenerTiposdeCuentaComponent1750268698769 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTiposdeCuenta.component';
import { ActivarComponent1750268698774 } from './api-doc-page/Tarjetas-de-Débito/Operar/Activar.component';
import { ActualizarCuentaPreferencialComponent1750268698781 } from './api-doc-page/Tarjetas-de-Débito/Operar/ActualizarCuentaPreferencial.component';
import { ActualizarDatosContactoComponent1750268698788 } from './api-doc-page/Tarjetas-de-Débito/Operar/ActualizarDatosContacto.component';
import { AsociarCuentaComponent1750268698794 } from './api-doc-page/Tarjetas-de-Débito/Operar/AsociarCuenta.component';
import { BlanquearPinComponent1750268698806 } from './api-doc-page/Tarjetas-de-Débito/Operar/BlanquearPin.component';
import { BloquearComponent1750268698814 } from './api-doc-page/Tarjetas-de-Débito/Operar/Bloquear.component';
import { BloquearDesdeREDComponent1750268698821 } from './api-doc-page/Tarjetas-de-Débito/Operar/BloquearDesdeRED.component';
import { CrearComponent1750268698828 } from './api-doc-page/Tarjetas-de-Débito/Operar/Crear.component';
import { CrearConCuentasAsociadasComponent1750268698836 } from './api-doc-page/Tarjetas-de-Débito/Operar/CrearConCuentasAsociadas.component';
import { DenunciarComponent1750268698844 } from './api-doc-page/Tarjetas-de-Débito/Operar/Denunciar.component';
import { DenunciarDesdeREDComponent1750268698852 } from './api-doc-page/Tarjetas-de-Débito/Operar/DenunciarDesdeRED.component';
import { DesbloquearComponent1750268698859 } from './api-doc-page/Tarjetas-de-Débito/Operar/Desbloquear.component';
import { DesbloquearDesdeREDComponent1750268698867 } from './api-doc-page/Tarjetas-de-Débito/Operar/DesbloquearDesdeRED.component';
import { EliminarCuentaAsociadaComponent1750268698873 } from './api-doc-page/Tarjetas-de-Débito/Operar/EliminarCuentaAsociada.component';
import { ModificarLimiteComponent1750268698881 } from './api-doc-page/Tarjetas-de-Débito/Operar/ModificarLimite.component';
import { ComprarComponent1750268698887 } from './api-doc-page/Títulos/Comprar.component';
import { ObtenerEstadoCompraComponent1750268698894 } from './api-doc-page/Títulos/ObtenerEstadoCompra.component';
import { ObtenerGruposComponent1750268698900 } from './api-doc-page/Títulos/ObtenerGrupos.component';
import { ObtenerValoresComponent1750268698907 } from './api-doc-page/Títulos/ObtenerValores.component';
import { AgregarPerfilComponent1750268698914 } from './api-doc-page/Usuarios/AgregarPerfil.component';
import { CrearComponent1750268698920 } from './api-doc-page/Usuarios/Crear.component';
import { EliminarPerfilComponent1750268698926 } from './api-doc-page/Usuarios/EliminarPerfil.component';
import { EliminarUsuarioComponent1750268698932 } from './api-doc-page/Usuarios/EliminarUsuario.component';
import { HabilitarEnCanalComponent1750268698937 } from './api-doc-page/Usuarios/HabilitarEnCanal.component';
import { HabilitarUsuarioComponent1750268698943 } from './api-doc-page/Usuarios/HabilitarUsuario.component';
import { InhabilitarUsuarioComponent1750268698950 } from './api-doc-page/Usuarios/InhabilitarUsuario.component';
import { ModificarComponent1750268698955 } from './api-doc-page/Usuarios/Modificar.component';
import { ObtenerComponent1750268698962 } from './api-doc-page/Usuarios/Obtener.component';
import { ObtenerPerfilesComponent1750268698967 } from './api-doc-page/Usuarios/ObtenerPerfiles.component';
import { ObtenerUsuariosComponent1750268698973 } from './api-doc-page/Usuarios/ObtenerUsuarios.component';
import { ObtenerUsuariosParaPerfilComponent1750268698979 } from './api-doc-page/Usuarios/ObtenerUsuariosParaPerfil.component';
import { ObtenerMetadataDeTareaComponent1750268698985 } from './api-doc-page/Workflow/ObtenerMetadataDeTarea.component';
import { ObtenerProcesosHabilitadosComponent1750268698994 } from './api-doc-page/Workflow/ObtenerProcesosHabilitados.component';
import { ObtenerRolesComponent1750268699003 } from './api-doc-page/Workflow/ObtenerRoles.component';
import { ObtenerRolesdeTareaComponent1750268699012 } from './api-doc-page/Workflow/ObtenerRolesdeTarea.component';
import { ObtenerTareasdeProcesoComponent1750268699020 } from './api-doc-page/Workflow/ObtenerTareasdeProceso.component';
//import End page components

@NgModule({
  declarations: [
    //declarations Page components
    ContratarSimulacionComponent1750268693784,
    CrearComponent1750268693795,
    SimularComponent1750268693807,
    ActualizarDocumentoDigitalComponent1750268693813,
    AsociarDocumentoDigitalComponent1750268693894,
    EliminarDocumentoDigitalComponent1750268693908,
    ObtenerDocumentoDigitalComponent1750268693914,
    ObtenerDocumentosDigitalesComponent1750268693920,
    ModificarCuentaDestinoComponent1750268693925,
    ModificarCuentaOrigenComponent1750268693933,
    ModificarFechadeAbonoComponent1750268693940,
    ModificarMetadeAhorroComponent1750268693949,
    ModificarMontodeAbonoComponent1750268693956,
    ObtenerComponent1750268693962,
    ObtenerCronogramaAbonosComponent1750268693969,
    ObtenerCuentasDestinoHabilitadasComponent1750268693976,
    ObtenerCuentasOrigenHabilitadasComponent1750268693982,
    ObtenerEstadodeCuentaComponent1750268693988,
    ObtenerPeriodosHabilitadosComponent1750268693995,
    ObtenerPlazosHabilitadosComponent1750268694001,
    ObtenerProductosComponent1750268694006,
    AnularChequeElectronicoComponent1750268694012,
    AsignarIdaChequeElectronicoComponent1750268694018,
    CrearChequeraElectronicaComponent1750268694023,
    DepositarChequeElectronicodeBancoPropioComponent1750268694030,
    DepositarChequeElectronicodeOtroBancoComponent1750268694036,
    DepositarChequeElectronicoenCustodiaComponent1750268694041,
    EmitirChequeElectronicoComponent1750268694049,
    EmitirChequeElectronicodeChequeraComponent1750268694054,
    HabilitarChequeElectronicoComponent1750268694061,
    CrearAdhesionComponent1750268694067,
    CrearStopDebitComponent1750268694072,
    CrearStopDebitparaAdhesionconImporteComponent1750268694081,
    EliminarStopDebitComponent1750268694086,
    ObtenerAdhesionesComponent1750268694091,
    ObtenerDebitosComponent1750268694101,
    ObtenerEmpresasOriginantesComponent1750268694108,
    ObtenerStopDebitsComponent1750268694116,
    ReversarDebitosComponent1750268694122,
    SolicitarBajadeAdhesionComponent1750268694129,
    AutenticacionComponent1750268694136,
    ObtenerDetalledeEjecucionComponent1750268694143,
    ObtenerDetalledeProcesoComponent1750268694152,
    ObtenerProcesosconErrorComponent1750268694160,
    ObtenerProcesosCriticosComponent1750268694169,
    ObtenerProcesosDiariosComponent1750268694177,
    ObtenerProcesosMensualesComponent1750268694185,
    ObtenerProcesosReprocesablesComponent1750268694193,
    VerificarEstadoServidorComponent1750268694201,
    CalcularFechadeVencimientoComponent1750268694208,
    CalcularFechadeVencimientoenDiasHabilesComponent1750268694216,
    CalcularPlazoComponent1750268694222,
    CalcularPlazoenDiasHabilesComponent1750268694230,
    ObtenerFechaHabilComponent1750268694238,
    ObtenerFechaHabilAnteriorComponent1750268694244,
    ObtenerFechaHabilAnteriordeSucursalComponent1750268694251,
    ObtenerFechaHabildeSucursalComponent1750268694257,
    ObtenerInicioyFindeMesComponent1750268694265,
    ObtenerInicioyFindeMesdeSucursalComponent1750268694271,
    ObtenerProximaFechaHabilComponent1750268694279,
    ObtenerProximaFechaHabildeSucursalComponent1750268694285,
    AutorizarArchivoComponent1750268694291,
    CargarArchivoComponent1750268694299,
    CargarArchivoRecibidoComoDatoComponent1750268694305,
    DetenerArchivoComponent1750268694313,
    RechazarArchivoComponent1750268694319,
    CargarBeneficiariosComponent1750268694325,
    IngresarBeneficiarioComponent1750268694334,
    ObtenerBeneficiarioSegunFiltroComponent1750268694340,
    AltaAutomaticaContratoComponent1750268694347,
    CargarServiciosDisponiblesComponent1750268694355,
    ContratarDebitoAutomaticoComponent1750268694363,
    ObtenerDetalledeOrdendeCuentaComponent1750268694369,
    ObtenerDetalledePagoComponent1750268694375,
    ObtenerDetalleOrdenSegunCampoComponent1750268694382,
    ObtenerDetallePagoOrdenComponent1750268694389,
    ObtenerDeudaComponent1750268694396,
    ObtenerResumenOrdenComponent1750268694404,
    ObtenerServiciosComponent1750268694411,
    ObtenerValoresOrdenComponent1750268694420,
    ObtenerValoresOrdenSegunCampoComponent1750268694427,
    AutorizarOrdenComponent1750268694433,
    DetenerOrdenComponent1750268694439,
    IngresarOrdenPagoComponent1750268694448,
    ProcesarOrdenComponent1750268694453,
    RechazarOrdenComponent1750268694459,
    AnularPagoDeudaComponent1750268694467,
    PagarDeudaDesdeCuentaComponent1750268694473,
    RegistrarPagoDeudaComponent1750268694479,
    RegistrarPagoEnLineaComponent1750268694485,
    RegistrarPagoEnLineaDesdeCuentaComponent1750268694491,
    VisualizarListaResumenCabezalComponent1750268694498,
    VisualizarListaResumenCabezalOrdenComponent1750268694503,
    VisualizarOrdendeArchivoParaCuentaComponent1750268694510,
    VisualizarResultadoProcesamientoComponent1750268694517,
    VisualizarResumenCabezalComponent1750268694522,
    VisualizarSituacionArchivosComponent1750268694529,
    VisualizarSituacionLineasComponent1750268694536,
    CHATComponent1750268694546,
    ActualizarComponent1750268694552,
    ActualizarDocumentoDigitalComponent1750268694559,
    ActualizarDomicilioComponent1750268694566,
    ActualizarInformacionAdicionalComponent1750268694573,
    ActualizarRegistroEmpleadoComponent1750268694579,
    ActualizarTelefonoComponent1750268694585,
    AgregarDomicilioComponent1750268694594,
    AgregarInformacionAdicionalComponent1750268694600,
    AgregarIntegranteComponent1750268694608,
    AgregarTelefonoComponent1750268694615,
    AsociarDocumentoDigitalComponent1750268694623,
    EliminarDocumentoDigitalComponent1750268694631,
    EliminarDomicilioComponent1750268694638,
    EliminarInformacionAdicionalComponent1750268694645,
    EliminarIntegranteComponent1750268694653,
    HabilitarComponent1750268694661,
    InhabilitarComponent1750268694669,
    ModificarEjecutivoComponent1750268694676,
    CrearComponent1750268694685,
    CrearconPersonaExistenteComponent1750268694693,
    CrearParaPersonaJuridicaComponent1750268694700,
    ObtenerComponent1750268694708,
    ObtenerAhorrosProgramadosComponent1750268694716,
    ObtenerBolsillosComponent1750268694722,
    ObtenerClasificacionesInternasComponent1750268694732,
    ObtenerCuentaClienteComponent1750268694741,
    ObtenerCuentasCorrientesSaldoContableComponent1750268694749,
    ObtenerCuentasCorrientesSaldoDisponibleComponent1750268694755,
    ObtenerCuentasdeAhorroSaldoContableComponent1750268694763,
    ObtenerCuentasdeAhorroSaldoDisponibleComponent1750268694769,
    ObtenerDatosComponent1750268694776,
    ObtenerDetallePosicionComponent1750268694782,
    ObtenerDocumentoDigitalComponent1750268694791,
    ObtenerDocumentosDigitalesComponent1750268694799,
    ObtenerDomiciliosComponent1750268694807,
    ObtenerFacultadesComponent1750268694815,
    ObtenerIdentificadorUnicoComponent1750268694823,
    ObtenerInformacionAdicionalComponent1750268694831,
    ObtenerIntegrantesComponent1750268694838,
    ObtenerLimitesComponent1750268694847,
    ObtenerMotivosInhabilitacionComponent1750268694854,
    ObtenerPerfilComponent1750268694862,
    ObtenerPlazosFijosComponent1750268694870,
    ObtenerPlazosFijosCanceladosComponent1750268694878,
    ObtenerPlazosFijosconAvanceComponent1750268694888,
    ObtenerPosicionComponent1750268694895,
    ObtenerPrestamosComponent1750268694904,
    ObtenerPrestamosCanceladosComponent1750268694912,
    ObtenerPrestamosCastigadosComponent1750268694920,
    ObtenerPrestamosconAvanceComponent1750268694931,
    ObtenerResumendeProductosCierredeanoComponent1750268694939,
    ObtenerResumendeProductosSaldosContablesComponent1750268694946,
    ObtenerResumendeProductosSaldosDisponiblesComponent1750268694953,
    ObtenerResumenporProductoaCierreAnoComponent1750268694959,
    ObtenerRiesgodeCreditoComponent1750268694967,
    ObtenerSaldosdeOtrosProductosComponent1750268694973,
    ObtenerSectoresComponent1750268694981,
    ObtenerSegmentosComponent1750268694988,
    ObtenerTarjetasdeDebitoComponent1750268694995,
    ObtenerTelefonosComponent1750268695003,
    ObtenerTiposdeIntegracionComponent1750268695011,
    ObtenerTitularRepresentativoComponent1750268695021,
    ObtenerTitulosComponent1750268695029,
    ValidarExistenciaComponent1750268695037,
    VerificarEmpleadoComponent1750268695043,
    ObtenerAgenciasBancoComponent1750268695053,
    ObtenerBancosComponent1750268695061,
    ObtenerDetalleSucursalComponent1750268695070,
    ObtenerSucursalesPrincipalesComponent1750268695078,
    ObtenerActividadesComponent1750268695086,
    ObtenerActividadesporTipoComponent1750268695093,
    ObtenerEjecutivosComponent1750268695101,
    ObtenerTiposdeActividadComponent1750268695106,
    ObtenerTiposdeTarjetaComponent1750268695114,
    ObtenerImpuestosComponent1750268695122,
    ObtenerTiposdeDocumentoDigitalComponent1750268695129,
    ObtenerEstadosComponent1750268695135,
    ObtenerInstruccionesComponent1750268695140,
    ObtenerPaquetesComponent1750268695146,
    ObtenerTiposdeTextoComponent1750268695155,
    ObtenerCalendariodeSucursalComponent1750268695162,
    ObtenerCalendariosComponent1750268695168,
    ObtenerDetalledeCalendarioComponent1750268695175,
    ObtenerDetalledeCalendariodeSucursalComponent1750268695182,
    ObtenerDolarUSAComponent1750268695188,
    ObtenerEmpresaComponent1750268695196,
    ObtenerFechadeSistemaComponent1750268695201,
    ObtenerMonedaNacionalComponent1750268695208,
    ObtenerMonedasComponent1750268695215,
    ObtenerSucursalesComponent1750268695221,
    ObtenerAgrupadoresDomicilioComponent1750268695227,
    ObtenerBarriosyColoniasComponent1750268695236,
    ObtenerCiudadesyLocalidadesComponent1750268695243,
    ObtenerCodigosdeDomicilioComponent1750268695251,
    ObtenerEstadosProvinciasyDepartamentosComponent1750268695258,
    ObtenerPaisesComponent1750268695266,
    ObtenerTiposdeListasNegrasComponent1750268695273,
    ObtenerTiposdeTelefonoComponent1750268695281,
    ObtenerTiposdeViviendaComponent1750268695288,
    ObtenerPizarraporModuloComponent1750268695295,
    ObtenerPizarrasComponent1750268695305,
    ObtenerMenusComponent1750268695312,
    ObtenerPerfilesComponent1750268695321,
    AgregarTextoAsientoComponent1750268695328,
    AgregarTextoOrdinalComponent1750268695337,
    AnularMovimientoComponent1750268695342,
    ActualizarCondicionImpositivaComponent1750268695353,
    CrearCondicionImpositivaComponent1750268695361,
    ObtenerIdBantotalMovimientoComponent1750268695368,
    ObtenerIdBantotalOperacionComponent1750268695378,
    ObtenerIdBantotalProductoComponent1750268695385,
    ObtenerIdentificadorUnicodeMovimientoComponent1750268695395,
    ObtenerIdentificadorUnicodeOperacionComponent1750268695402,
    ObtenerIdentificadorUnicodeProductoComponent1750268695408,
    ObtenerClientedeunaOperacionComponent1750268695417,
    ObtenerCondicionImpositivaComponent1750268695424,
    ObtenerDetalledeMovimientoComponent1750268695434,
    ObtenerDetalledeOrdinalComponent1750268695442,
    ObtenerIntegrantesdeOperacionComponent1750268695451,
    ObtenerTextosdeMovimientoComponent1750268695457,
    RegistrarAsientoComponent1750268695466,
    RegistrarAsientoFechaValorComponent1750268695473,
    CancelarComponent1750268695482,
    CashInComponent1750268695489,
    CashOutComponent1750268695497,
    ContratarComponent1750268695503,
    ObtenerDatosComponent1750268695511,
    ObtenerMovimientosComponent1750268695518,
    ObtenerProductosComponent1750268695526,
    ObtenerProductosCVComponent1750268695535,
    ObtenerChequeraComponent1750268695541,
    ObtenerChequerasComponent1750268695551,
    ObtenerChequesdeChequeraComponent1750268695557,
    ObtenerComisionChequeraComponent1750268695568,
    ObtenerEstadodeChequeraComponent1750268695574,
    ObtenerSolicitudesdeChequerasComponent1750268695582,
    ObtenerTiposdeChequeraComponent1750268695587,
    ObtenerTiposdeChequeraporProductoComponent1750268695591,
    EliminarChequeraComponent1750268695597,
    RegistrarOrdendeNoPagodeChequeraComponent1750268695602,
    RegistrarOrdendeNoPagodeChequesComponent1750268695608,
    SolicitarChequeraComponent1750268695615,
    ContratarconPeriodicidadComponent1750268695620,
    ContratarProductoComponent1750268695627,
    ContratarProductoconAltadeFacultadesComponent1750268695636,
    ObtenerAcuerdosComponent1750268695643,
    ObtenerDatosComponent1750268695654,
    ObtenerEstadodeCuentaComponent1750268695661,
    ObtenerEvoluciondeSaldosComponent1750268695668,
    ObtenerProductosComponent1750268695677,
    ContratarconPeriodicidadComponent1750268695686,
    ContratarProductoComponent1750268695694,
    ContratarProductoconAltadeFacultadesComponent1750268695702,
    ObtenerDatosComponent1750268695710,
    ObtenerEstadodeCuentaComponent1750268695718,
    ObtenerEvoluciondeSaldosComponent1750268695729,
    ObtenerProductosComponent1750268695737,
    ActualizarBeneficiariosComponent1750268695745,
    ObtenerBeneficiariosComponent1750268695752,
    ActualizarDocumentoDigitalComponent1750268695759,
    AsociarDocumentoDigitalComponent1750268695767,
    EliminarDocumentoDigitalComponent1750268695772,
    ObtenerDocumentoDigitalComponent1750268695781,
    ObtenerDocumentosDigitalesComponent1750268695785,
    ObtenerBolsillosComponent1750268695791,
    ObtenerCBUdeCuentaVistaComponent1750268695797,
    ObtenerCuentaVistadeCBUComponent1750268695802,
    ObtenerDetalleBloqueoComponent1750268695807,
    ObtenerEstadodeCuentaporPeriodoComponent1750268695814,
    ObtenerEstadoDeOperacionComponent1750268695820,
    ObtenerFacultadesComponent1750268695825,
    ObtenerPaqueteComponent1750268695831,
    ObtenerPeriododeAcreditacionComponent1750268695844,
    ObtenerPeriodosdeAcreditacionComponent1750268695838,
    ObtenerSaldoBloqueadoComponent1750268695849,
    ObtenerSaldoDisponibleComponent1750268695854,
    ObtenerSaldosBloqueadosComponent1750268695859,
    AcreditarEnCuentaComponent1750268695866,
    ActivarComponent1750268695871,
    ActualizarPeriododeAcreditacionComponent1750268695877,
    BloquearSaldoComponent1750268695883,
    CancelarComponent1750268695890,
    DebitarEnCuentaComponent1750268695896,
    DesbloquearSaldoComponent1750268695903,
    ActualizarPerfilTransaccionalComponent1750268695913,
    AgregarPerfilTransaccionalComponent1750268695920,
    ObtenerPerfilTransaccionalComponent1750268695927,
    TraspasarConTipoDeCambioEspecialComponent1750268695936,
    TraspasarEntreCuentasdelaMismaPersonaComponent1750268695945,
    TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750268695953,
    TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750268695961,
    TraspasarEntreCuentasPropiasComponent1750268695986,
    TraspasarEntreCuentasPropiascontipodecambioComponent1750268695970,
    TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750268695979,
    TraspasarEntreCuentasTercerosComponent1750268696010,
    TraspasarEntreCuentasTerceroscontipodecambioComponent1750268695995,
    TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750268696002,
    ActualizarBeneficiariosComponent1750268696018,
    ObtenerBeneficiariosComponent1750268696026,
    ContratarComponent1750268696035,
    ContratarConFacultadesComponent1750268696044,
    ContratarSimulacionComponent1750268696054,
    ActualizarDocumentoDigitalComponent1750268696061,
    AsociarDocumentoDigitalComponent1750268696068,
    EliminarDocumentoDigitalComponent1750268696076,
    ObtenerDocumentoDigitalComponent1750268696086,
    ModificarCuentaDestinoalVencimientoComponent1750268696093,
    ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750268696101,
    ModificarInstruccionComponent1750268696108,
    ObtenerAvanceComponent1750268696118,
    ObtenerDatosComponent1750268696126,
    ObtenerDatosPrecancelacionComponent1750268696133,
    ObtenerDocumentosDigitalesComponent1750268696139,
    ObtenerInstruccionComponent1750268696156,
    ObtenerInstruccionesHabilitadosComponent1750268696147,
    ObtenerMovimientosComponent1750268696164,
    ObtenerPeriodosHabilitadosComponent1750268696172,
    ObtenerProductosComponent1750268696180,
    ObtenerProductosHabilitadosComponent1750268696186,
    ObtenerTasadePrecancelacionComponent1750268696194,
    PrecancelarComponent1750268696202,
    SimularComponent1750268696209,
    SimularConCronogramaComponent1750268696217,
    ConfirmarListaComponent1750268696223,
    CrearListaComponent1750268696230,
    CrearListaChequesComponent1750268696238,
    ObtenerProductosComponent1750268696247,
    ObtenerTiposDeDesembolsoComponent1750268696255,
    SeleccionarOpcionDesembolsoComponent1750268696264,
    ObtenerAgrupadoresComponent1750268696270,
    ObtenerCierredeSaldosporMonedaComponent1750268696278,
    ObtenerCondicionesGeneralesComponent1750268696284,
    ObtenerIndicadoresComponent1750268696291,
    ObtenerMetodosMasEjecutadosComponent1750268696299,
    ObtenerMonedasIndicesComponent1750268696305,
    ObtenerRubrosBolsaComponent1750268696313,
    ObtenerServiciosMasEjecutadosComponent1750268696325,
    ObtenerSesionesPorUsuarioComponent1750268696334,
    ObtenerSucursalesCajasComponent1750268696343,
    ObtenerTransaccionesporEstadosComponent1750268696353,
    BuscarClienteComponent1750268696359,
    CompletarTareaComponent1750268696368,
    CrearSolicitudAmpliacionComponent1750268696376,
    CrearSolicitudIndividualComponent1750268696382,
    CrearSolicitudRenovacionComponent1750268696390,
    AgregarFiadorComponent1750268696397,
    EliminarFiadorComponent1750268696404,
    ActualizarGrupoComponent1750268696411,
    ActualizarIntegrantedeGrupoComponent1750268696418,
    AgregarGrupoComponent1750268696424,
    AgregarIntegranteaGrupoComponent1750268696432,
    CrearSolicitudGrupalComponent1750268696440,
    HabilitarIntegrantedeunGrupoComponent1750268696447,
    InhabilitarIntegrantedeunGrupoComponent1750268696456,
    ObtenerDetalleGrupoComponent1750268696463,
    ObtenerGruposComponent1750268696471,
    ObtenerIntegrantesdeGrupoComponent1750268696478,
    ObtenerTiposdeGrupoComponent1750268696486,
    ObtenerTiposdeIntegranteComponent1750268696493,
    SimularPrestamoAmortizableGrupalComponent1750268696502,
    ObtenerAsesoresComponent1750268696511,
    ObtenerCampanasComponent1750268696518,
    ObtenerDestinosCreditoComponent1750268696527,
    ObtenerOperacionesClienteComponent1750268696538,
    ObtenerOrigenesdeCaptacionComponent1750268696547,
    ObtenerProductosComponent1750268696554,
    ObtenerSolicitudesClienteComponent1750268696560,
    ObtenerTiposAvalComponent1750268696567,
    AgregarOperacionesaCancelarComponent1750268696572,
    ObtenerOperacionesaCancelarComponent1750268696581,
    QuitarOperacionesaCancelarComponent1750268696587,
    SimularLibreAmortizacionComponent1750268696595,
    SimularPrestamoAmortizableComponent1750268696601,
    SimularPrestamoPlazoFijoComponent1750268696607,
    ValidarPoliticasComponent1750268696616,
    ObtenerCantidadCuotasComponent1750268696623,
    ObtenerCapitalComponent1750268696632,
    ObtenerComisionesComponent1750268696640,
    ObtenerComisionesporCuotaComponent1750268696648,
    ObtenerDiasPrimerPeriodoComponent1750268696655,
    ObtenerPeriodoEntreCuotasComponent1750268696671,
    ObtenerPermiteSegurosdelMismoTipoComponent1750268696663,
    ObtenerPlazoComponent1750268696679,
    ObtenerRequiereSegurodeVidaObligatorioComponent1750268696685,
    ObtenerSegurosComponent1750268696692,
    ObtenerItemsModeloComponent1750268696699,
    ObtenerModelosPAEComponent1750268696705,
    ObtenerScoresComponent1750268696713,
    ObtenerTiposDeModelosComponent1750268696720,
    ContratarPrestamoComponent1750268696729,
    ContratarVehicularComponent1750268696737,
    CrearClienteComponent1750268696745,
    CrearPersonaClienteComponent1750268696755,
    ObtenerDatosdeUsuarioComponent1750268696763,
    ObtenerDetalledeOfertaAmortizableComponent1750268696770,
    ObtenerDetalleOfertaVehicularComponent1750268696777,
    ObtenerMarcasComponent1750268696785,
    ObtenerModelosComponent1750268696793,
    ObtenerPartnersComponent1750268696800,
    ObtenerPrestamosdeClienteComponent1750268696825,
    ObtenerProductosComponent1750268696808,
    ObtenerProductosdelPartnerComponent1750268696816,
    ObtenerPuntosdeVentaComponent1750268696832,
    ObtenerVendedoresComponent1750268696838,
    ObtenerVersionesComponent1750268696846,
    SimularOfertasComponent1750268696855,
    SimularOfertasVehicularComponent1750268696865,
    SimularPrestamoComponent1750268696872,
    SimularVehicularComponent1750268696879,
    ObtenerCorrelativoGuiaComponent1750268696886,
    ObtenerCorrelativoGuiaEspecialComponent1750268696894,
    ObtenerGuiadeProcesoComponent1750268696900,
    ObtenerGuiaEspecialdeProcesoComponent1750268696905,
    ObtenerOpcionGeneraldeProcesoComponent1750268696912,
    ObtenerOpcionGeneralPorModuloComponent1750268696919,
    ObtenerProgramaParticularComponent1750268696924,
    ActualizarComponent1750268696932,
    ActualizarCelularComponent1750268696938,
    ActualizarContactoComponent1750268696945,
    ActualizarConyugeComponent1750268696962,
    ActualizarCorreoElectronicoComponent1750268696955,
    ActualizarDomicilioComponent1750268696969,
    ActualizarFATCAComponent1750268696974,
    ActualizarInformacionAdicionalComponent1750268696984,
    ActualizarInformacionFinancieraComponent1750268696991,
    ActualizarIntegrantedePersonaJuridicaComponent1750268696999,
    ActualizarPersonaJuridicaComponent1750268697005,
    ActualizarProfesionComponent1750268697012,
    ActualizarReferenciaComponent1750268697019,
    ActualizarRegistroEmpleadoComponent1750268697027,
    ActualizarTelefonoComponent1750268697035,
    ActualizarVictimaHechoViolentoComponent1750268697044,
    ModificarDocumentoAdicionalComponent1750268697056,
    AgregaraListaNegraComponent1750268697066,
    AgregarContactoComponent1750268697073,
    AgregarCorreoElectronicoComponent1750268697085,
    AgregarDatosPEPComponent1750268697095,
    AgregarDocumentoAdicionalComponent1750268697103,
    AgregarDomicilioComponent1750268697112,
    AgregarEstadoFinancieroComponent1750268697120,
    AgregarFATCAComponent1750268697140,
    AgregarInformacionAdicionalComponent1750268697148,
    AgregarInformacionFinancieraComponent1750268697157,
    AgregarIntegranteaPersonaJuridicaComponent1750268697167,
    AgregarPersonaVinculadaComponent1750268697176,
    AgregarReferenciaComponent1750268697185,
    AgregarTelefonoComponent1750268697193,
    AgregarVictimaHechoViolentoComponent1750268697203,
    CrearComponent1750268697214,
    CrearConyugeComponent1750268697223,
    CrearPersonaJuridicaComponent1750268697235,
    CrearReducidoComponent1750268697245,
    ActualizarDocumentoDigitalComponent1750268697253,
    AsociarDocumentoDigitalComponent1750268697262,
    EliminarDocumentoDigitalComponent1750268697270,
    ObtenerDocumentoDigitalComponent1750268697278,
    ObtenerDocumentosDigitalesComponent1750268697285,
    EliminarConyugeComponent1750268697294,
    EliminarDocumentoAdicionalComponent1750268697301,
    EliminarDomicilioComponent1750268697309,
    EliminarInformacionAdicionalComponent1750268697318,
    EliminarIntegrantedePersonaJuridicaComponent1750268697329,
    EliminarPersonaVinculadaComponent1750268697339,
    EliminarProfesionComponent1750268697349,
    ObtenerComponent1750268697361,
    ObtenerConceptoComponent1750268697369,
    ObtenerContactosComponent1750268697379,
    ObtenerConyugeComponent1750268697405,
    ObtenerCorreosElectronicosComponent1750268697387,
    ObtenerCuentasClienteComponent1750268697396,
    ObtenerDatosPEPComponent1750268697413,
    ObtenerDocumentosAdicionalesComponent1750268697424,
    ObtenerDomiciliosComponent1750268697433,
    ObtenerEstadosCivilesComponent1750268697441,
    ObtenerFacultadesComponent1750268697446,
    ObtenerFATCAComponent1750268697453,
    ObtenerHobbiesComponent1750268697462,
    ObtenerHobbyComponent1750268697470,
    ObtenerIdBantotalComponent1750268697477,
    ObtenerIdentidadesdeGeneroComponent1750268697484,
    ObtenerIdentificadorUnicoComponent1750268697490,
    ObtenerInformacionAdicionalComponent1750268697497,
    ObtenerInformacionFinancieraComponent1750268697506,
    ObtenerIntegrantesPersonaJuridicaComponent1750268697513,
    ObtenerLimitesComponent1750268697521,
    ObtenerNaturalezasJuridicasComponent1750268697528,
    ObtenerNivelesEducativosComponent1750268697536,
    ObtenerOcupacionesComponent1750268697544,
    ObtenerPersonaJuridicaComponent1750268697554,
    ObtenerPersonasComponent1750268697563,
    ObtenerPersonasJuridicasComponent1750268697573,
    ObtenerPersonasVinculadasComponent1750268697580,
    ObtenerProfesionComponent1750268697599,
    ObtenerProfesionesComponent1750268697591,
    ObtenerReferenciasComponent1750268697606,
    ObtenerTarjetasdeDebitoComponent1750268697615,
    ObtenerTelefonosComponent1750268697621,
    ObtenerTipodePersonaComponent1750268697629,
    ObtenerTiposdeDocumentoComponent1750268697637,
    ObtenerTiposDeFuncionarioPublicoComponent1750268697645,
    ObtenerTiposDePEPComponent1750268697651,
    ObtenerTitularesDelTelefonoComponent1750268697658,
    ObtenerVictimaHechoViolentoComponent1750268697665,
    ObtenerVinculosComponent1750268697671,
    ObtenerVinculosdeAfinidadComponent1750268697678,
    ObtenerVinculosdeConsanguinidadComponent1750268697684,
    ObtenerVinculosJuridicosComponent1750268697692,
    EvaluarPAEComponent1750268697699,
    ValidarCorreoElectronicoComponent1750268697705,
    ValidarDocumentoComponent1750268697712,
    ValidarenListasNegrasComponent1750268697722,
    ValidarExistenciaComponent1750268697730,
    ValidarListasInhabilitadosComponent1750268697736,
    VerificarEmpleadoComponent1750268697741,
    ConvertirTasaAnualEfectivaaLinealComponent1750268697750,
    ConvertirTasaAnualLinealaEfectivaComponent1750268697758,
    ConvertirTasaMensualEfectivaaLinealComponent1750268697764,
    ConvertirTasaMensualLinealaEfectivaComponent1750268697770,
    ObtenerCotizacionComponent1750268697776,
    ObtenerCotizacionaFechaComponent1750268697785,
    ObtenerCotizacionCierreComponent1750268697793,
    ObtenerPizarraEspecialporTransaccionComponent1750268697799,
    ObtenerPrecioaFechaComponent1750268697805,
    ObtenerPrecioEspecieComponent1750268697812,
    ObtenerTasadeOperacionComponent1750268697818,
    ObtenerTasaParaClienteComponent1750268697824,
    ObtenerTasaParaProductoComponent1750268697833,
    ObtenerTipodeCambioComponent1750268697843,
    ObtenerTiposDeCambioEspecialesComponent1750268697850,
    CancelarComponent1750268697856,
    CancelaraFechaComponent1750268697864,
    CancelaraFechaTercerosComponent1750268697871,
    CancelarTercerosComponent1750268697879,
    ContratarComponent1750268697886,
    ContratarAmpliacionComponent1750268697892,
    ContratarRefinanciacionComponent1750268697898,
    ContratarRefinanciacionporDeudaTotalComponent1750268697904,
    ContratarRefinanciacionporSaldoCapitalComponent1750268697912,
    ActualizarDocumentoDigitalComponent1750268697918,
    AsociarDocumentoDigitalComponent1750268697924,
    EliminarDocumentoDigitalComponent1750268697932,
    ObtenerDocumentoDigitalComponent1750268697938,
    ObtenerDocumentosDigitalesComponent1750268697947,
    ObtenerCronogramaComponent1750268697955,
    ObtenerCronogramaaFechaComponent1750268697963,
    ObtenerCronogramaconPagosaFechaComponent1750268697972,
    ObtenerCronogramaenEspecieComponent1750268697982,
    ObtenerCronogramaOriginalComponent1750268697991,
    ObtenerCuentadeCobroComponent1750268698000,
    ObtenerDatosdelProximoVencimientoComponent1750268698009,
    ObtenerDetalleComponent1750268698017,
    ObtenerDetalleaFechaComponent1750268698025,
    ObtenerDetalledeCancelacionTotalComponent1750268698032,
    ObtenerDetalledeOfertaComponent1750268698038,
    ObtenerDetalledeOfertaAmortizableComponent1750268698047,
    ObtenerDetalledeOperacionesaRefinanciarComponent1750268698054,
    ObtenerDetalledePrestamoCanceladoComponent1750268698060,
    ObtenerDetallePagoPrestamoComponent1750268698069,
    ObtenerDetalleReducidoComponent1750268698075,
    ObtenerDetalleSimulacionComponent1750268698085,
    ObtenerDeudaComponent1750268698092,
    ObtenerDeudaPrestamoCastigadoComponent1750268698098,
    ObtenerDeudaVencidaComponent1750268698104,
    ObtenerFechadeIncumplimientoComponent1750268698113,
    ObtenerFechadeUltimoPagoComponent1750268698118,
    ObtenerFechasdePagoComponent1750268698124,
    ObtenerInformacionAdicionalComponent1750268698134,
    ObtenerMontodeCancelacionComponent1750268698143,
    ObtenerMotivosPrecancelacionComponent1750268698152,
    ObtenerPagosdeCuotaComponent1750268698160,
    ObtenerPagosdeunPrestamoComponent1750268698168,
    ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750268698177,
    ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750268698185,
    ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750268698195,
    ObtenerProductosComponent1750268698202,
    ObtenerProductosRefinanciacionComponent1750268698209,
    ObtenerRefinanciacionSimuladaComponent1750268698218,
    AbonaraCuentaComponent1750268698225,
    ActualizarInformacionAdicionalComponent1750268698232,
    ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750268698239,
    AgregarCuentadeCobroComponent1750268698246,
    AgregarInformacionAdicionalComponent1750268698254,
    EliminarCuentadeCobroComponent1750268698262,
    EliminarInformacionAdicionalComponent1750268698267,
    SolicitarPrecancelacionComponent1750268698273,
    AdelantarCapitalConReduccionDeCuotaComponent1750268698281,
    AdelantarCapitalConReduccionDePlazoComponent1750268698286,
    PagarCuotaComponent1750268698291,
    PagarCuotaaFechaComponent1750268698298,
    PagarCuotaaFechaTercerosComponent1750268698303,
    PagarCuotaTercerosComponent1750268698308,
    ResimularAmortizableComponent1750268698317,
    ResimularAmpliacionComponent1750268698325,
    ResimularRefinanciacionComponent1750268698333,
    SimularComponent1750268698339,
    SimularAmortizableComponent1750268698346,
    SimularAmortizableSinClienteComponent1750268698353,
    SimularAmpliacionComponent1750268698359,
    SimularAmpliacionIngresandoSegurosComponent1750268698367,
    SimularDespejandoCapitalyCantidaddeCuotasComponent1750268698372,
    SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750268698380,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750268698386,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750268698394,
    SimularDespejandoFechadeVencimientoyTasaComponent1750268698401,
    SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750268698412,
    SimularIngresandoBalloonComponent1750268698420,
    SimularIngresandoBalloonSinClienteComponent1750268698426,
    SimularIngresandoSegurosComponent1750268698433,
    SimularIngresandoSegurosSinClienteComponent1750268698440,
    SimularLibreAmortizacionComponent1750268698449,
    SimularLibreAmortizacionSinClienteComponent1750268698462,
    SimularOfertasComponent1750268698470,
    SimularPlazoFijoComponent1750268698477,
    SimularRefinanciacionComponent1750268698485,
    SimularRefinanciacionporDeudaTotalComponent1750268698493,
    SimularRefinanciacionporSaldoCapitalComponent1750268698501,
    ActualizarTextosComponent1750268698507,
    AgregarTextosComponent1750268698514,
    EliminarTextosComponent1750268698520,
    ObtenerTextosComponent1750268698527,
    EvaluarRegladeNegocioComponent1750268698540,
    ObtenerReglasdeNegocioComponent1750268698547,
    ObtenerVariablesReglaComponent1750268698554,
    ValidarDatosRegladeNegocioComponent1750268698562,
    AutorizarExcepcionComponent1750268698569,
    ObtenerDetalledeExcepcionComponent1750268698579,
    ObtenerExcepcionesComponent1750268698586,
    RechazarExcepcionComponent1750268698592,
    RegistrarDispositivoComponent1750268698600,
    ContratarSeguroComponent1750268698608,
    ObtenerMontosDeUnSeguroComponent1750268698617,
    ObtenerSegurosComponent1750268698628,
    ObtenerSegurosAPagarComponent1750268698637,
    PagarSeguroComponent1750268698647,
    ObtenerCodigosdeLimitesComponent1750268698690,
    ObtenerCuentaPreferencialComponent1750268698659,
    ObtenerCuentasaAsociarComponent1750268698669,
    ObtenerCuentasAsociadasComponent1750268698676,
    ObtenerCuentasAsociadasPorTipoComponent1750268698683,
    ObtenerDatosComponent1750268698698,
    ObtenerDatosContactoComponent1750268698705,
    ObtenerIdentificadorUnicoComponent1750268698715,
    ObtenerLimitesComponent1750268698726,
    ObtenerMovimientosComponent1750268698736,
    ObtenerTarjetaComponent1750268698746,
    ObtenerTarjetaHabienteComponent1750268698755,
    ObtenerTarjetasAdicionalesComponent1750268698763,
    ObtenerTiposdeCuentaComponent1750268698769,
    ActivarComponent1750268698774,
    ActualizarCuentaPreferencialComponent1750268698781,
    ActualizarDatosContactoComponent1750268698788,
    AsociarCuentaComponent1750268698794,
    BlanquearPinComponent1750268698806,
    BloquearComponent1750268698814,
    BloquearDesdeREDComponent1750268698821,
    CrearComponent1750268698828,
    CrearConCuentasAsociadasComponent1750268698836,
    DenunciarComponent1750268698844,
    DenunciarDesdeREDComponent1750268698852,
    DesbloquearComponent1750268698859,
    DesbloquearDesdeREDComponent1750268698867,
    EliminarCuentaAsociadaComponent1750268698873,
    ModificarLimiteComponent1750268698881,
    ComprarComponent1750268698887,
    ObtenerEstadoCompraComponent1750268698894,
    ObtenerGruposComponent1750268698900,
    ObtenerValoresComponent1750268698907,
    AgregarPerfilComponent1750268698914,
    CrearComponent1750268698920,
    EliminarPerfilComponent1750268698926,
    EliminarUsuarioComponent1750268698932,
    HabilitarEnCanalComponent1750268698937,
    HabilitarUsuarioComponent1750268698943,
    InhabilitarUsuarioComponent1750268698950,
    ModificarComponent1750268698955,
    ObtenerComponent1750268698962,
    ObtenerPerfilesComponent1750268698967,
    ObtenerUsuariosComponent1750268698973,
    ObtenerUsuariosParaPerfilComponent1750268698979,
    ObtenerMetadataDeTareaComponent1750268698985,
    ObtenerProcesosHabilitadosComponent1750268698994,
    ObtenerRolesComponent1750268699003,
    ObtenerRolesdeTareaComponent1750268699012,
    ObtenerTareasdeProcesoComponent1750268699020,
    //declarations End page components
    CodeExampleComponent,
    SidebarComponent,
    PageHeaderComponent,
    InfoCardComponent,
    BackendConfigComponent,
    ApiTabsComponent,
    ApiTableComponent,
    CodeExampleComponent,
    PrismHighlightDirective,
    StructuredDataComponent    
  ],
  imports: [
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
    //exports Page components
    ContratarSimulacionComponent1750268693784,
    CrearComponent1750268693795,
    SimularComponent1750268693807,
    ActualizarDocumentoDigitalComponent1750268693813,
    AsociarDocumentoDigitalComponent1750268693894,
    EliminarDocumentoDigitalComponent1750268693908,
    ObtenerDocumentoDigitalComponent1750268693914,
    ObtenerDocumentosDigitalesComponent1750268693920,
    ModificarCuentaDestinoComponent1750268693925,
    ModificarCuentaOrigenComponent1750268693933,
    ModificarFechadeAbonoComponent1750268693940,
    ModificarMetadeAhorroComponent1750268693949,
    ModificarMontodeAbonoComponent1750268693956,
    ObtenerComponent1750268693962,
    ObtenerCronogramaAbonosComponent1750268693969,
    ObtenerCuentasDestinoHabilitadasComponent1750268693976,
    ObtenerCuentasOrigenHabilitadasComponent1750268693982,
    ObtenerEstadodeCuentaComponent1750268693988,
    ObtenerPeriodosHabilitadosComponent1750268693995,
    ObtenerPlazosHabilitadosComponent1750268694001,
    ObtenerProductosComponent1750268694006,
    AnularChequeElectronicoComponent1750268694012,
    AsignarIdaChequeElectronicoComponent1750268694018,
    CrearChequeraElectronicaComponent1750268694023,
    DepositarChequeElectronicodeBancoPropioComponent1750268694030,
    DepositarChequeElectronicodeOtroBancoComponent1750268694036,
    DepositarChequeElectronicoenCustodiaComponent1750268694041,
    EmitirChequeElectronicoComponent1750268694049,
    EmitirChequeElectronicodeChequeraComponent1750268694054,
    HabilitarChequeElectronicoComponent1750268694061,
    CrearAdhesionComponent1750268694067,
    CrearStopDebitComponent1750268694072,
    CrearStopDebitparaAdhesionconImporteComponent1750268694081,
    EliminarStopDebitComponent1750268694086,
    ObtenerAdhesionesComponent1750268694091,
    ObtenerDebitosComponent1750268694101,
    ObtenerEmpresasOriginantesComponent1750268694108,
    ObtenerStopDebitsComponent1750268694116,
    ReversarDebitosComponent1750268694122,
    SolicitarBajadeAdhesionComponent1750268694129,
    AutenticacionComponent1750268694136,
    ObtenerDetalledeEjecucionComponent1750268694143,
    ObtenerDetalledeProcesoComponent1750268694152,
    ObtenerProcesosconErrorComponent1750268694160,
    ObtenerProcesosCriticosComponent1750268694169,
    ObtenerProcesosDiariosComponent1750268694177,
    ObtenerProcesosMensualesComponent1750268694185,
    ObtenerProcesosReprocesablesComponent1750268694193,
    VerificarEstadoServidorComponent1750268694201,
    CalcularFechadeVencimientoComponent1750268694208,
    CalcularFechadeVencimientoenDiasHabilesComponent1750268694216,
    CalcularPlazoComponent1750268694222,
    CalcularPlazoenDiasHabilesComponent1750268694230,
    ObtenerFechaHabilComponent1750268694238,
    ObtenerFechaHabilAnteriorComponent1750268694244,
    ObtenerFechaHabilAnteriordeSucursalComponent1750268694251,
    ObtenerFechaHabildeSucursalComponent1750268694257,
    ObtenerInicioyFindeMesComponent1750268694265,
    ObtenerInicioyFindeMesdeSucursalComponent1750268694271,
    ObtenerProximaFechaHabilComponent1750268694279,
    ObtenerProximaFechaHabildeSucursalComponent1750268694285,
    AutorizarArchivoComponent1750268694291,
    CargarArchivoComponent1750268694299,
    CargarArchivoRecibidoComoDatoComponent1750268694305,
    DetenerArchivoComponent1750268694313,
    RechazarArchivoComponent1750268694319,
    CargarBeneficiariosComponent1750268694325,
    IngresarBeneficiarioComponent1750268694334,
    ObtenerBeneficiarioSegunFiltroComponent1750268694340,
    AltaAutomaticaContratoComponent1750268694347,
    CargarServiciosDisponiblesComponent1750268694355,
    ContratarDebitoAutomaticoComponent1750268694363,
    ObtenerDetalledeOrdendeCuentaComponent1750268694369,
    ObtenerDetalledePagoComponent1750268694375,
    ObtenerDetalleOrdenSegunCampoComponent1750268694382,
    ObtenerDetallePagoOrdenComponent1750268694389,
    ObtenerDeudaComponent1750268694396,
    ObtenerResumenOrdenComponent1750268694404,
    ObtenerServiciosComponent1750268694411,
    ObtenerValoresOrdenComponent1750268694420,
    ObtenerValoresOrdenSegunCampoComponent1750268694427,
    AutorizarOrdenComponent1750268694433,
    DetenerOrdenComponent1750268694439,
    IngresarOrdenPagoComponent1750268694448,
    ProcesarOrdenComponent1750268694453,
    RechazarOrdenComponent1750268694459,
    AnularPagoDeudaComponent1750268694467,
    PagarDeudaDesdeCuentaComponent1750268694473,
    RegistrarPagoDeudaComponent1750268694479,
    RegistrarPagoEnLineaComponent1750268694485,
    RegistrarPagoEnLineaDesdeCuentaComponent1750268694491,
    VisualizarListaResumenCabezalComponent1750268694498,
    VisualizarListaResumenCabezalOrdenComponent1750268694503,
    VisualizarOrdendeArchivoParaCuentaComponent1750268694510,
    VisualizarResultadoProcesamientoComponent1750268694517,
    VisualizarResumenCabezalComponent1750268694522,
    VisualizarSituacionArchivosComponent1750268694529,
    VisualizarSituacionLineasComponent1750268694536,
    CHATComponent1750268694546,
    ActualizarComponent1750268694552,
    ActualizarDocumentoDigitalComponent1750268694559,
    ActualizarDomicilioComponent1750268694566,
    ActualizarInformacionAdicionalComponent1750268694573,
    ActualizarRegistroEmpleadoComponent1750268694579,
    ActualizarTelefonoComponent1750268694585,
    AgregarDomicilioComponent1750268694594,
    AgregarInformacionAdicionalComponent1750268694600,
    AgregarIntegranteComponent1750268694608,
    AgregarTelefonoComponent1750268694615,
    AsociarDocumentoDigitalComponent1750268694623,
    EliminarDocumentoDigitalComponent1750268694631,
    EliminarDomicilioComponent1750268694638,
    EliminarInformacionAdicionalComponent1750268694645,
    EliminarIntegranteComponent1750268694653,
    HabilitarComponent1750268694661,
    InhabilitarComponent1750268694669,
    ModificarEjecutivoComponent1750268694676,
    CrearComponent1750268694685,
    CrearconPersonaExistenteComponent1750268694693,
    CrearParaPersonaJuridicaComponent1750268694700,
    ObtenerComponent1750268694708,
    ObtenerAhorrosProgramadosComponent1750268694716,
    ObtenerBolsillosComponent1750268694722,
    ObtenerClasificacionesInternasComponent1750268694732,
    ObtenerCuentaClienteComponent1750268694741,
    ObtenerCuentasCorrientesSaldoContableComponent1750268694749,
    ObtenerCuentasCorrientesSaldoDisponibleComponent1750268694755,
    ObtenerCuentasdeAhorroSaldoContableComponent1750268694763,
    ObtenerCuentasdeAhorroSaldoDisponibleComponent1750268694769,
    ObtenerDatosComponent1750268694776,
    ObtenerDetallePosicionComponent1750268694782,
    ObtenerDocumentoDigitalComponent1750268694791,
    ObtenerDocumentosDigitalesComponent1750268694799,
    ObtenerDomiciliosComponent1750268694807,
    ObtenerFacultadesComponent1750268694815,
    ObtenerIdentificadorUnicoComponent1750268694823,
    ObtenerInformacionAdicionalComponent1750268694831,
    ObtenerIntegrantesComponent1750268694838,
    ObtenerLimitesComponent1750268694847,
    ObtenerMotivosInhabilitacionComponent1750268694854,
    ObtenerPerfilComponent1750268694862,
    ObtenerPlazosFijosComponent1750268694870,
    ObtenerPlazosFijosCanceladosComponent1750268694878,
    ObtenerPlazosFijosconAvanceComponent1750268694888,
    ObtenerPosicionComponent1750268694895,
    ObtenerPrestamosComponent1750268694904,
    ObtenerPrestamosCanceladosComponent1750268694912,
    ObtenerPrestamosCastigadosComponent1750268694920,
    ObtenerPrestamosconAvanceComponent1750268694931,
    ObtenerResumendeProductosCierredeanoComponent1750268694939,
    ObtenerResumendeProductosSaldosContablesComponent1750268694946,
    ObtenerResumendeProductosSaldosDisponiblesComponent1750268694953,
    ObtenerResumenporProductoaCierreAnoComponent1750268694959,
    ObtenerRiesgodeCreditoComponent1750268694967,
    ObtenerSaldosdeOtrosProductosComponent1750268694973,
    ObtenerSectoresComponent1750268694981,
    ObtenerSegmentosComponent1750268694988,
    ObtenerTarjetasdeDebitoComponent1750268694995,
    ObtenerTelefonosComponent1750268695003,
    ObtenerTiposdeIntegracionComponent1750268695011,
    ObtenerTitularRepresentativoComponent1750268695021,
    ObtenerTitulosComponent1750268695029,
    ValidarExistenciaComponent1750268695037,
    VerificarEmpleadoComponent1750268695043,
    ObtenerAgenciasBancoComponent1750268695053,
    ObtenerBancosComponent1750268695061,
    ObtenerDetalleSucursalComponent1750268695070,
    ObtenerSucursalesPrincipalesComponent1750268695078,
    ObtenerActividadesComponent1750268695086,
    ObtenerActividadesporTipoComponent1750268695093,
    ObtenerEjecutivosComponent1750268695101,
    ObtenerTiposdeActividadComponent1750268695106,
    ObtenerTiposdeTarjetaComponent1750268695114,
    ObtenerImpuestosComponent1750268695122,
    ObtenerTiposdeDocumentoDigitalComponent1750268695129,
    ObtenerEstadosComponent1750268695135,
    ObtenerInstruccionesComponent1750268695140,
    ObtenerPaquetesComponent1750268695146,
    ObtenerTiposdeTextoComponent1750268695155,
    ObtenerCalendariodeSucursalComponent1750268695162,
    ObtenerCalendariosComponent1750268695168,
    ObtenerDetalledeCalendarioComponent1750268695175,
    ObtenerDetalledeCalendariodeSucursalComponent1750268695182,
    ObtenerDolarUSAComponent1750268695188,
    ObtenerEmpresaComponent1750268695196,
    ObtenerFechadeSistemaComponent1750268695201,
    ObtenerMonedaNacionalComponent1750268695208,
    ObtenerMonedasComponent1750268695215,
    ObtenerSucursalesComponent1750268695221,
    ObtenerAgrupadoresDomicilioComponent1750268695227,
    ObtenerBarriosyColoniasComponent1750268695236,
    ObtenerCiudadesyLocalidadesComponent1750268695243,
    ObtenerCodigosdeDomicilioComponent1750268695251,
    ObtenerEstadosProvinciasyDepartamentosComponent1750268695258,
    ObtenerPaisesComponent1750268695266,
    ObtenerTiposdeListasNegrasComponent1750268695273,
    ObtenerTiposdeTelefonoComponent1750268695281,
    ObtenerTiposdeViviendaComponent1750268695288,
    ObtenerPizarraporModuloComponent1750268695295,
    ObtenerPizarrasComponent1750268695305,
    ObtenerMenusComponent1750268695312,
    ObtenerPerfilesComponent1750268695321,
    AgregarTextoAsientoComponent1750268695328,
    AgregarTextoOrdinalComponent1750268695337,
    AnularMovimientoComponent1750268695342,
    ActualizarCondicionImpositivaComponent1750268695353,
    CrearCondicionImpositivaComponent1750268695361,
    ObtenerIdBantotalMovimientoComponent1750268695368,
    ObtenerIdBantotalOperacionComponent1750268695378,
    ObtenerIdBantotalProductoComponent1750268695385,
    ObtenerIdentificadorUnicodeMovimientoComponent1750268695395,
    ObtenerIdentificadorUnicodeOperacionComponent1750268695402,
    ObtenerIdentificadorUnicodeProductoComponent1750268695408,
    ObtenerClientedeunaOperacionComponent1750268695417,
    ObtenerCondicionImpositivaComponent1750268695424,
    ObtenerDetalledeMovimientoComponent1750268695434,
    ObtenerDetalledeOrdinalComponent1750268695442,
    ObtenerIntegrantesdeOperacionComponent1750268695451,
    ObtenerTextosdeMovimientoComponent1750268695457,
    RegistrarAsientoComponent1750268695466,
    RegistrarAsientoFechaValorComponent1750268695473,
    CancelarComponent1750268695482,
    CashInComponent1750268695489,
    CashOutComponent1750268695497,
    ContratarComponent1750268695503,
    ObtenerDatosComponent1750268695511,
    ObtenerMovimientosComponent1750268695518,
    ObtenerProductosComponent1750268695526,
    ObtenerProductosCVComponent1750268695535,
    ObtenerChequeraComponent1750268695541,
    ObtenerChequerasComponent1750268695551,
    ObtenerChequesdeChequeraComponent1750268695557,
    ObtenerComisionChequeraComponent1750268695568,
    ObtenerEstadodeChequeraComponent1750268695574,
    ObtenerSolicitudesdeChequerasComponent1750268695582,
    ObtenerTiposdeChequeraComponent1750268695587,
    ObtenerTiposdeChequeraporProductoComponent1750268695591,
    EliminarChequeraComponent1750268695597,
    RegistrarOrdendeNoPagodeChequeraComponent1750268695602,
    RegistrarOrdendeNoPagodeChequesComponent1750268695608,
    SolicitarChequeraComponent1750268695615,
    ContratarconPeriodicidadComponent1750268695620,
    ContratarProductoComponent1750268695627,
    ContratarProductoconAltadeFacultadesComponent1750268695636,
    ObtenerAcuerdosComponent1750268695643,
    ObtenerDatosComponent1750268695654,
    ObtenerEstadodeCuentaComponent1750268695661,
    ObtenerEvoluciondeSaldosComponent1750268695668,
    ObtenerProductosComponent1750268695677,
    ContratarconPeriodicidadComponent1750268695686,
    ContratarProductoComponent1750268695694,
    ContratarProductoconAltadeFacultadesComponent1750268695702,
    ObtenerDatosComponent1750268695710,
    ObtenerEstadodeCuentaComponent1750268695718,
    ObtenerEvoluciondeSaldosComponent1750268695729,
    ObtenerProductosComponent1750268695737,
    ActualizarBeneficiariosComponent1750268695745,
    ObtenerBeneficiariosComponent1750268695752,
    ActualizarDocumentoDigitalComponent1750268695759,
    AsociarDocumentoDigitalComponent1750268695767,
    EliminarDocumentoDigitalComponent1750268695772,
    ObtenerDocumentoDigitalComponent1750268695781,
    ObtenerDocumentosDigitalesComponent1750268695785,
    ObtenerBolsillosComponent1750268695791,
    ObtenerCBUdeCuentaVistaComponent1750268695797,
    ObtenerCuentaVistadeCBUComponent1750268695802,
    ObtenerDetalleBloqueoComponent1750268695807,
    ObtenerEstadodeCuentaporPeriodoComponent1750268695814,
    ObtenerEstadoDeOperacionComponent1750268695820,
    ObtenerFacultadesComponent1750268695825,
    ObtenerPaqueteComponent1750268695831,
    ObtenerPeriododeAcreditacionComponent1750268695844,
    ObtenerPeriodosdeAcreditacionComponent1750268695838,
    ObtenerSaldoBloqueadoComponent1750268695849,
    ObtenerSaldoDisponibleComponent1750268695854,
    ObtenerSaldosBloqueadosComponent1750268695859,
    AcreditarEnCuentaComponent1750268695866,
    ActivarComponent1750268695871,
    ActualizarPeriododeAcreditacionComponent1750268695877,
    BloquearSaldoComponent1750268695883,
    CancelarComponent1750268695890,
    DebitarEnCuentaComponent1750268695896,
    DesbloquearSaldoComponent1750268695903,
    ActualizarPerfilTransaccionalComponent1750268695913,
    AgregarPerfilTransaccionalComponent1750268695920,
    ObtenerPerfilTransaccionalComponent1750268695927,
    TraspasarConTipoDeCambioEspecialComponent1750268695936,
    TraspasarEntreCuentasdelaMismaPersonaComponent1750268695945,
    TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750268695953,
    TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750268695961,
    TraspasarEntreCuentasPropiasComponent1750268695986,
    TraspasarEntreCuentasPropiascontipodecambioComponent1750268695970,
    TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750268695979,
    TraspasarEntreCuentasTercerosComponent1750268696010,
    TraspasarEntreCuentasTerceroscontipodecambioComponent1750268695995,
    TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750268696002,
    ActualizarBeneficiariosComponent1750268696018,
    ObtenerBeneficiariosComponent1750268696026,
    ContratarComponent1750268696035,
    ContratarConFacultadesComponent1750268696044,
    ContratarSimulacionComponent1750268696054,
    ActualizarDocumentoDigitalComponent1750268696061,
    AsociarDocumentoDigitalComponent1750268696068,
    EliminarDocumentoDigitalComponent1750268696076,
    ObtenerDocumentoDigitalComponent1750268696086,
    ModificarCuentaDestinoalVencimientoComponent1750268696093,
    ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750268696101,
    ModificarInstruccionComponent1750268696108,
    ObtenerAvanceComponent1750268696118,
    ObtenerDatosComponent1750268696126,
    ObtenerDatosPrecancelacionComponent1750268696133,
    ObtenerDocumentosDigitalesComponent1750268696139,
    ObtenerInstruccionComponent1750268696156,
    ObtenerInstruccionesHabilitadosComponent1750268696147,
    ObtenerMovimientosComponent1750268696164,
    ObtenerPeriodosHabilitadosComponent1750268696172,
    ObtenerProductosComponent1750268696180,
    ObtenerProductosHabilitadosComponent1750268696186,
    ObtenerTasadePrecancelacionComponent1750268696194,
    PrecancelarComponent1750268696202,
    SimularComponent1750268696209,
    SimularConCronogramaComponent1750268696217,
    ConfirmarListaComponent1750268696223,
    CrearListaComponent1750268696230,
    CrearListaChequesComponent1750268696238,
    ObtenerProductosComponent1750268696247,
    ObtenerTiposDeDesembolsoComponent1750268696255,
    SeleccionarOpcionDesembolsoComponent1750268696264,
    ObtenerAgrupadoresComponent1750268696270,
    ObtenerCierredeSaldosporMonedaComponent1750268696278,
    ObtenerCondicionesGeneralesComponent1750268696284,
    ObtenerIndicadoresComponent1750268696291,
    ObtenerMetodosMasEjecutadosComponent1750268696299,
    ObtenerMonedasIndicesComponent1750268696305,
    ObtenerRubrosBolsaComponent1750268696313,
    ObtenerServiciosMasEjecutadosComponent1750268696325,
    ObtenerSesionesPorUsuarioComponent1750268696334,
    ObtenerSucursalesCajasComponent1750268696343,
    ObtenerTransaccionesporEstadosComponent1750268696353,
    BuscarClienteComponent1750268696359,
    CompletarTareaComponent1750268696368,
    CrearSolicitudAmpliacionComponent1750268696376,
    CrearSolicitudIndividualComponent1750268696382,
    CrearSolicitudRenovacionComponent1750268696390,
    AgregarFiadorComponent1750268696397,
    EliminarFiadorComponent1750268696404,
    ActualizarGrupoComponent1750268696411,
    ActualizarIntegrantedeGrupoComponent1750268696418,
    AgregarGrupoComponent1750268696424,
    AgregarIntegranteaGrupoComponent1750268696432,
    CrearSolicitudGrupalComponent1750268696440,
    HabilitarIntegrantedeunGrupoComponent1750268696447,
    InhabilitarIntegrantedeunGrupoComponent1750268696456,
    ObtenerDetalleGrupoComponent1750268696463,
    ObtenerGruposComponent1750268696471,
    ObtenerIntegrantesdeGrupoComponent1750268696478,
    ObtenerTiposdeGrupoComponent1750268696486,
    ObtenerTiposdeIntegranteComponent1750268696493,
    SimularPrestamoAmortizableGrupalComponent1750268696502,
    ObtenerAsesoresComponent1750268696511,
    ObtenerCampanasComponent1750268696518,
    ObtenerDestinosCreditoComponent1750268696527,
    ObtenerOperacionesClienteComponent1750268696538,
    ObtenerOrigenesdeCaptacionComponent1750268696547,
    ObtenerProductosComponent1750268696554,
    ObtenerSolicitudesClienteComponent1750268696560,
    ObtenerTiposAvalComponent1750268696567,
    AgregarOperacionesaCancelarComponent1750268696572,
    ObtenerOperacionesaCancelarComponent1750268696581,
    QuitarOperacionesaCancelarComponent1750268696587,
    SimularLibreAmortizacionComponent1750268696595,
    SimularPrestamoAmortizableComponent1750268696601,
    SimularPrestamoPlazoFijoComponent1750268696607,
    ValidarPoliticasComponent1750268696616,
    ObtenerCantidadCuotasComponent1750268696623,
    ObtenerCapitalComponent1750268696632,
    ObtenerComisionesComponent1750268696640,
    ObtenerComisionesporCuotaComponent1750268696648,
    ObtenerDiasPrimerPeriodoComponent1750268696655,
    ObtenerPeriodoEntreCuotasComponent1750268696671,
    ObtenerPermiteSegurosdelMismoTipoComponent1750268696663,
    ObtenerPlazoComponent1750268696679,
    ObtenerRequiereSegurodeVidaObligatorioComponent1750268696685,
    ObtenerSegurosComponent1750268696692,
    ObtenerItemsModeloComponent1750268696699,
    ObtenerModelosPAEComponent1750268696705,
    ObtenerScoresComponent1750268696713,
    ObtenerTiposDeModelosComponent1750268696720,
    ContratarPrestamoComponent1750268696729,
    ContratarVehicularComponent1750268696737,
    CrearClienteComponent1750268696745,
    CrearPersonaClienteComponent1750268696755,
    ObtenerDatosdeUsuarioComponent1750268696763,
    ObtenerDetalledeOfertaAmortizableComponent1750268696770,
    ObtenerDetalleOfertaVehicularComponent1750268696777,
    ObtenerMarcasComponent1750268696785,
    ObtenerModelosComponent1750268696793,
    ObtenerPartnersComponent1750268696800,
    ObtenerPrestamosdeClienteComponent1750268696825,
    ObtenerProductosComponent1750268696808,
    ObtenerProductosdelPartnerComponent1750268696816,
    ObtenerPuntosdeVentaComponent1750268696832,
    ObtenerVendedoresComponent1750268696838,
    ObtenerVersionesComponent1750268696846,
    SimularOfertasComponent1750268696855,
    SimularOfertasVehicularComponent1750268696865,
    SimularPrestamoComponent1750268696872,
    SimularVehicularComponent1750268696879,
    ObtenerCorrelativoGuiaComponent1750268696886,
    ObtenerCorrelativoGuiaEspecialComponent1750268696894,
    ObtenerGuiadeProcesoComponent1750268696900,
    ObtenerGuiaEspecialdeProcesoComponent1750268696905,
    ObtenerOpcionGeneraldeProcesoComponent1750268696912,
    ObtenerOpcionGeneralPorModuloComponent1750268696919,
    ObtenerProgramaParticularComponent1750268696924,
    ActualizarComponent1750268696932,
    ActualizarCelularComponent1750268696938,
    ActualizarContactoComponent1750268696945,
    ActualizarConyugeComponent1750268696962,
    ActualizarCorreoElectronicoComponent1750268696955,
    ActualizarDomicilioComponent1750268696969,
    ActualizarFATCAComponent1750268696974,
    ActualizarInformacionAdicionalComponent1750268696984,
    ActualizarInformacionFinancieraComponent1750268696991,
    ActualizarIntegrantedePersonaJuridicaComponent1750268696999,
    ActualizarPersonaJuridicaComponent1750268697005,
    ActualizarProfesionComponent1750268697012,
    ActualizarReferenciaComponent1750268697019,
    ActualizarRegistroEmpleadoComponent1750268697027,
    ActualizarTelefonoComponent1750268697035,
    ActualizarVictimaHechoViolentoComponent1750268697044,
    ModificarDocumentoAdicionalComponent1750268697056,
    AgregaraListaNegraComponent1750268697066,
    AgregarContactoComponent1750268697073,
    AgregarCorreoElectronicoComponent1750268697085,
    AgregarDatosPEPComponent1750268697095,
    AgregarDocumentoAdicionalComponent1750268697103,
    AgregarDomicilioComponent1750268697112,
    AgregarEstadoFinancieroComponent1750268697120,
    AgregarFATCAComponent1750268697140,
    AgregarInformacionAdicionalComponent1750268697148,
    AgregarInformacionFinancieraComponent1750268697157,
    AgregarIntegranteaPersonaJuridicaComponent1750268697167,
    AgregarPersonaVinculadaComponent1750268697176,
    AgregarReferenciaComponent1750268697185,
    AgregarTelefonoComponent1750268697193,
    AgregarVictimaHechoViolentoComponent1750268697203,
    CrearComponent1750268697214,
    CrearConyugeComponent1750268697223,
    CrearPersonaJuridicaComponent1750268697235,
    CrearReducidoComponent1750268697245,
    ActualizarDocumentoDigitalComponent1750268697253,
    AsociarDocumentoDigitalComponent1750268697262,
    EliminarDocumentoDigitalComponent1750268697270,
    ObtenerDocumentoDigitalComponent1750268697278,
    ObtenerDocumentosDigitalesComponent1750268697285,
    EliminarConyugeComponent1750268697294,
    EliminarDocumentoAdicionalComponent1750268697301,
    EliminarDomicilioComponent1750268697309,
    EliminarInformacionAdicionalComponent1750268697318,
    EliminarIntegrantedePersonaJuridicaComponent1750268697329,
    EliminarPersonaVinculadaComponent1750268697339,
    EliminarProfesionComponent1750268697349,
    ObtenerComponent1750268697361,
    ObtenerConceptoComponent1750268697369,
    ObtenerContactosComponent1750268697379,
    ObtenerConyugeComponent1750268697405,
    ObtenerCorreosElectronicosComponent1750268697387,
    ObtenerCuentasClienteComponent1750268697396,
    ObtenerDatosPEPComponent1750268697413,
    ObtenerDocumentosAdicionalesComponent1750268697424,
    ObtenerDomiciliosComponent1750268697433,
    ObtenerEstadosCivilesComponent1750268697441,
    ObtenerFacultadesComponent1750268697446,
    ObtenerFATCAComponent1750268697453,
    ObtenerHobbiesComponent1750268697462,
    ObtenerHobbyComponent1750268697470,
    ObtenerIdBantotalComponent1750268697477,
    ObtenerIdentidadesdeGeneroComponent1750268697484,
    ObtenerIdentificadorUnicoComponent1750268697490,
    ObtenerInformacionAdicionalComponent1750268697497,
    ObtenerInformacionFinancieraComponent1750268697506,
    ObtenerIntegrantesPersonaJuridicaComponent1750268697513,
    ObtenerLimitesComponent1750268697521,
    ObtenerNaturalezasJuridicasComponent1750268697528,
    ObtenerNivelesEducativosComponent1750268697536,
    ObtenerOcupacionesComponent1750268697544,
    ObtenerPersonaJuridicaComponent1750268697554,
    ObtenerPersonasComponent1750268697563,
    ObtenerPersonasJuridicasComponent1750268697573,
    ObtenerPersonasVinculadasComponent1750268697580,
    ObtenerProfesionComponent1750268697599,
    ObtenerProfesionesComponent1750268697591,
    ObtenerReferenciasComponent1750268697606,
    ObtenerTarjetasdeDebitoComponent1750268697615,
    ObtenerTelefonosComponent1750268697621,
    ObtenerTipodePersonaComponent1750268697629,
    ObtenerTiposdeDocumentoComponent1750268697637,
    ObtenerTiposDeFuncionarioPublicoComponent1750268697645,
    ObtenerTiposDePEPComponent1750268697651,
    ObtenerTitularesDelTelefonoComponent1750268697658,
    ObtenerVictimaHechoViolentoComponent1750268697665,
    ObtenerVinculosComponent1750268697671,
    ObtenerVinculosdeAfinidadComponent1750268697678,
    ObtenerVinculosdeConsanguinidadComponent1750268697684,
    ObtenerVinculosJuridicosComponent1750268697692,
    EvaluarPAEComponent1750268697699,
    ValidarCorreoElectronicoComponent1750268697705,
    ValidarDocumentoComponent1750268697712,
    ValidarenListasNegrasComponent1750268697722,
    ValidarExistenciaComponent1750268697730,
    ValidarListasInhabilitadosComponent1750268697736,
    VerificarEmpleadoComponent1750268697741,
    ConvertirTasaAnualEfectivaaLinealComponent1750268697750,
    ConvertirTasaAnualLinealaEfectivaComponent1750268697758,
    ConvertirTasaMensualEfectivaaLinealComponent1750268697764,
    ConvertirTasaMensualLinealaEfectivaComponent1750268697770,
    ObtenerCotizacionComponent1750268697776,
    ObtenerCotizacionaFechaComponent1750268697785,
    ObtenerCotizacionCierreComponent1750268697793,
    ObtenerPizarraEspecialporTransaccionComponent1750268697799,
    ObtenerPrecioaFechaComponent1750268697805,
    ObtenerPrecioEspecieComponent1750268697812,
    ObtenerTasadeOperacionComponent1750268697818,
    ObtenerTasaParaClienteComponent1750268697824,
    ObtenerTasaParaProductoComponent1750268697833,
    ObtenerTipodeCambioComponent1750268697843,
    ObtenerTiposDeCambioEspecialesComponent1750268697850,
    CancelarComponent1750268697856,
    CancelaraFechaComponent1750268697864,
    CancelaraFechaTercerosComponent1750268697871,
    CancelarTercerosComponent1750268697879,
    ContratarComponent1750268697886,
    ContratarAmpliacionComponent1750268697892,
    ContratarRefinanciacionComponent1750268697898,
    ContratarRefinanciacionporDeudaTotalComponent1750268697904,
    ContratarRefinanciacionporSaldoCapitalComponent1750268697912,
    ActualizarDocumentoDigitalComponent1750268697918,
    AsociarDocumentoDigitalComponent1750268697924,
    EliminarDocumentoDigitalComponent1750268697932,
    ObtenerDocumentoDigitalComponent1750268697938,
    ObtenerDocumentosDigitalesComponent1750268697947,
    ObtenerCronogramaComponent1750268697955,
    ObtenerCronogramaaFechaComponent1750268697963,
    ObtenerCronogramaconPagosaFechaComponent1750268697972,
    ObtenerCronogramaenEspecieComponent1750268697982,
    ObtenerCronogramaOriginalComponent1750268697991,
    ObtenerCuentadeCobroComponent1750268698000,
    ObtenerDatosdelProximoVencimientoComponent1750268698009,
    ObtenerDetalleComponent1750268698017,
    ObtenerDetalleaFechaComponent1750268698025,
    ObtenerDetalledeCancelacionTotalComponent1750268698032,
    ObtenerDetalledeOfertaComponent1750268698038,
    ObtenerDetalledeOfertaAmortizableComponent1750268698047,
    ObtenerDetalledeOperacionesaRefinanciarComponent1750268698054,
    ObtenerDetalledePrestamoCanceladoComponent1750268698060,
    ObtenerDetallePagoPrestamoComponent1750268698069,
    ObtenerDetalleReducidoComponent1750268698075,
    ObtenerDetalleSimulacionComponent1750268698085,
    ObtenerDeudaComponent1750268698092,
    ObtenerDeudaPrestamoCastigadoComponent1750268698098,
    ObtenerDeudaVencidaComponent1750268698104,
    ObtenerFechadeIncumplimientoComponent1750268698113,
    ObtenerFechadeUltimoPagoComponent1750268698118,
    ObtenerFechasdePagoComponent1750268698124,
    ObtenerInformacionAdicionalComponent1750268698134,
    ObtenerMontodeCancelacionComponent1750268698143,
    ObtenerMotivosPrecancelacionComponent1750268698152,
    ObtenerPagosdeCuotaComponent1750268698160,
    ObtenerPagosdeunPrestamoComponent1750268698168,
    ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750268698177,
    ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750268698185,
    ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750268698195,
    ObtenerProductosComponent1750268698202,
    ObtenerProductosRefinanciacionComponent1750268698209,
    ObtenerRefinanciacionSimuladaComponent1750268698218,
    AbonaraCuentaComponent1750268698225,
    ActualizarInformacionAdicionalComponent1750268698232,
    ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750268698239,
    AgregarCuentadeCobroComponent1750268698246,
    AgregarInformacionAdicionalComponent1750268698254,
    EliminarCuentadeCobroComponent1750268698262,
    EliminarInformacionAdicionalComponent1750268698267,
    SolicitarPrecancelacionComponent1750268698273,
    AdelantarCapitalConReduccionDeCuotaComponent1750268698281,
    AdelantarCapitalConReduccionDePlazoComponent1750268698286,
    PagarCuotaComponent1750268698291,
    PagarCuotaaFechaComponent1750268698298,
    PagarCuotaaFechaTercerosComponent1750268698303,
    PagarCuotaTercerosComponent1750268698308,
    ResimularAmortizableComponent1750268698317,
    ResimularAmpliacionComponent1750268698325,
    ResimularRefinanciacionComponent1750268698333,
    SimularComponent1750268698339,
    SimularAmortizableComponent1750268698346,
    SimularAmortizableSinClienteComponent1750268698353,
    SimularAmpliacionComponent1750268698359,
    SimularAmpliacionIngresandoSegurosComponent1750268698367,
    SimularDespejandoCapitalyCantidaddeCuotasComponent1750268698372,
    SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750268698380,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750268698386,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750268698394,
    SimularDespejandoFechadeVencimientoyTasaComponent1750268698401,
    SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750268698412,
    SimularIngresandoBalloonComponent1750268698420,
    SimularIngresandoBalloonSinClienteComponent1750268698426,
    SimularIngresandoSegurosComponent1750268698433,
    SimularIngresandoSegurosSinClienteComponent1750268698440,
    SimularLibreAmortizacionComponent1750268698449,
    SimularLibreAmortizacionSinClienteComponent1750268698462,
    SimularOfertasComponent1750268698470,
    SimularPlazoFijoComponent1750268698477,
    SimularRefinanciacionComponent1750268698485,
    SimularRefinanciacionporDeudaTotalComponent1750268698493,
    SimularRefinanciacionporSaldoCapitalComponent1750268698501,
    ActualizarTextosComponent1750268698507,
    AgregarTextosComponent1750268698514,
    EliminarTextosComponent1750268698520,
    ObtenerTextosComponent1750268698527,
    EvaluarRegladeNegocioComponent1750268698540,
    ObtenerReglasdeNegocioComponent1750268698547,
    ObtenerVariablesReglaComponent1750268698554,
    ValidarDatosRegladeNegocioComponent1750268698562,
    AutorizarExcepcionComponent1750268698569,
    ObtenerDetalledeExcepcionComponent1750268698579,
    ObtenerExcepcionesComponent1750268698586,
    RechazarExcepcionComponent1750268698592,
    RegistrarDispositivoComponent1750268698600,
    ContratarSeguroComponent1750268698608,
    ObtenerMontosDeUnSeguroComponent1750268698617,
    ObtenerSegurosComponent1750268698628,
    ObtenerSegurosAPagarComponent1750268698637,
    PagarSeguroComponent1750268698647,
    ObtenerCodigosdeLimitesComponent1750268698690,
    ObtenerCuentaPreferencialComponent1750268698659,
    ObtenerCuentasaAsociarComponent1750268698669,
    ObtenerCuentasAsociadasComponent1750268698676,
    ObtenerCuentasAsociadasPorTipoComponent1750268698683,
    ObtenerDatosComponent1750268698698,
    ObtenerDatosContactoComponent1750268698705,
    ObtenerIdentificadorUnicoComponent1750268698715,
    ObtenerLimitesComponent1750268698726,
    ObtenerMovimientosComponent1750268698736,
    ObtenerTarjetaComponent1750268698746,
    ObtenerTarjetaHabienteComponent1750268698755,
    ObtenerTarjetasAdicionalesComponent1750268698763,
    ObtenerTiposdeCuentaComponent1750268698769,
    ActivarComponent1750268698774,
    ActualizarCuentaPreferencialComponent1750268698781,
    ActualizarDatosContactoComponent1750268698788,
    AsociarCuentaComponent1750268698794,
    BlanquearPinComponent1750268698806,
    BloquearComponent1750268698814,
    BloquearDesdeREDComponent1750268698821,
    CrearComponent1750268698828,
    CrearConCuentasAsociadasComponent1750268698836,
    DenunciarComponent1750268698844,
    DenunciarDesdeREDComponent1750268698852,
    DesbloquearComponent1750268698859,
    DesbloquearDesdeREDComponent1750268698867,
    EliminarCuentaAsociadaComponent1750268698873,
    ModificarLimiteComponent1750268698881,
    ComprarComponent1750268698887,
    ObtenerEstadoCompraComponent1750268698894,
    ObtenerGruposComponent1750268698900,
    ObtenerValoresComponent1750268698907,
    AgregarPerfilComponent1750268698914,
    CrearComponent1750268698920,
    EliminarPerfilComponent1750268698926,
    EliminarUsuarioComponent1750268698932,
    HabilitarEnCanalComponent1750268698937,
    HabilitarUsuarioComponent1750268698943,
    InhabilitarUsuarioComponent1750268698950,
    ModificarComponent1750268698955,
    ObtenerComponent1750268698962,
    ObtenerPerfilesComponent1750268698967,
    ObtenerUsuariosComponent1750268698973,
    ObtenerUsuariosParaPerfilComponent1750268698979,
    ObtenerMetadataDeTareaComponent1750268698985,
    ObtenerProcesosHabilitadosComponent1750268698994,
    ObtenerRolesComponent1750268699003,
    ObtenerRolesdeTareaComponent1750268699012,
    ObtenerTareasdeProcesoComponent1750268699020,
    //exports End page components
    SidebarComponent    // exporta sólo lo que necesites fuera del módulo
  ]
})
export class ApiDocsModule {}