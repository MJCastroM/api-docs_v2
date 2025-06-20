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
import { FooterSpaceComponent } from './components/footer-space/footer-space.component';

import { SharedModule } from '../../shared/shared.module';

//import Page components
import { ContratarSimulacionComponent1750272790640 } from './api-doc-page/Ahorro-Programado/Contratar/ContratarSimulacion.component';
import { CrearComponent1750272790647 } from './api-doc-page/Ahorro-Programado/Contratar/Crear.component';
import { SimularComponent1750272790650 } from './api-doc-page/Ahorro-Programado/Contratar/Simular.component';
import { ActualizarDocumentoDigitalComponent1750272790653 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750272790656 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750272790659 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750272790661 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750272790664 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ModificarCuentaDestinoComponent1750272790666 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarCuentaDestino.component';
import { ModificarCuentaOrigenComponent1750272790668 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarCuentaOrigen.component';
import { ModificarFechadeAbonoComponent1750272790670 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarFechadeAbono.component';
import { ModificarMetadeAhorroComponent1750272790672 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarMetadeAhorro.component';
import { ModificarMontodeAbonoComponent1750272790675 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarMontodeAbono.component';
import { ObtenerComponent1750272790677 } from './api-doc-page/Ahorro-Programado/Obtener/Obtener.component';
import { ObtenerCronogramaAbonosComponent1750272790680 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCronogramaAbonos.component';
import { ObtenerCuentasDestinoHabilitadasComponent1750272790682 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCuentasDestinoHabilitadas.component';
import { ObtenerCuentasOrigenHabilitadasComponent1750272790683 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCuentasOrigenHabilitadas.component';
import { ObtenerEstadodeCuentaComponent1750272790685 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerPeriodosHabilitadosComponent1750272790687 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerPeriodosHabilitados.component';
import { ObtenerPlazosHabilitadosComponent1750272790689 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerPlazosHabilitados.component';
import { ObtenerProductosComponent1750272790691 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerProductos.component';
import { AnularChequeElectronicoComponent1750272790694 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/AnularChequeElectronico.component';
import { AsignarIdaChequeElectronicoComponent1750272790697 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/AsignarIdaChequeElectronico.component';
import { CrearChequeraElectronicaComponent1750272790699 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/CrearChequeraElectronica.component';
import { DepositarChequeElectronicodeBancoPropioComponent1750272790700 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicodeBancoPropio.component';
import { DepositarChequeElectronicodeOtroBancoComponent1750272790702 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicodeOtroBanco.component';
import { DepositarChequeElectronicoenCustodiaComponent1750272790704 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicoenCustodia.component';
import { EmitirChequeElectronicoComponent1750272790706 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/EmitirChequeElectronico.component';
import { EmitirChequeElectronicodeChequeraComponent1750272790709 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/EmitirChequeElectronicodeChequera.component';
import { HabilitarChequeElectronicoComponent1750272790711 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/HabilitarChequeElectronico.component';
import { CrearAdhesionComponent1750272790713 } from './api-doc-page/AR - Argentina/SNP/CrearAdhesion.component';
import { CrearStopDebitComponent1750272790715 } from './api-doc-page/AR - Argentina/SNP/CrearStopDebit.component';
import { CrearStopDebitparaAdhesionconImporteComponent1750272790717 } from './api-doc-page/AR - Argentina/SNP/CrearStopDebitparaAdhesionconImporte.component';
import { EliminarStopDebitComponent1750272790719 } from './api-doc-page/AR - Argentina/SNP/EliminarStopDebit.component';
import { ObtenerAdhesionesComponent1750272790720 } from './api-doc-page/AR - Argentina/SNP/ObtenerAdhesiones.component';
import { ObtenerDebitosComponent1750272790722 } from './api-doc-page/AR - Argentina/SNP/ObtenerDebitos.component';
import { ObtenerEmpresasOriginantesComponent1750272790726 } from './api-doc-page/AR - Argentina/SNP/ObtenerEmpresasOriginantes.component';
import { ObtenerStopDebitsComponent1750272790728 } from './api-doc-page/AR - Argentina/SNP/ObtenerStopDebits.component';
import { ReversarDebitosComponent1750272790730 } from './api-doc-page/AR - Argentina/SNP/ReversarDebitos.component';
import { SolicitarBajadeAdhesionComponent1750272790732 } from './api-doc-page/AR - Argentina/SNP/SolicitarBajadeAdhesion.component';
import { AutenticacionComponent1750272790733 } from './api-doc-page/Autenticación/Autenticacion.component';
import { ObtenerDetalledeEjecucionComponent1750272790735 } from './api-doc-page/Cadena-de-Cierre/ObtenerDetalledeEjecucion.component';
import { ObtenerDetalledeProcesoComponent1750272790737 } from './api-doc-page/Cadena-de-Cierre/ObtenerDetalledeProceso.component';
import { ObtenerProcesosconErrorComponent1750272790739 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosconError.component';
import { ObtenerProcesosCriticosComponent1750272790741 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosCriticos.component';
import { ObtenerProcesosDiariosComponent1750272790743 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosDiarios.component';
import { ObtenerProcesosMensualesComponent1750272790745 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosMensuales.component';
import { ObtenerProcesosReprocesablesComponent1750272790747 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosReprocesables.component';
import { VerificarEstadoServidorComponent1750272790748 } from './api-doc-page/Cadena-de-Cierre/VerificarEstadoServidor.component';
import { CalcularFechadeVencimientoComponent1750272790750 } from './api-doc-page/Calendarios/Calcular/CalcularFechadeVencimiento.component';
import { CalcularFechadeVencimientoenDiasHabilesComponent1750272790752 } from './api-doc-page/Calendarios/Calcular/CalcularFechadeVencimientoenDiasHabiles.component';
import { CalcularPlazoComponent1750272790754 } from './api-doc-page/Calendarios/Calcular/CalcularPlazo.component';
import { CalcularPlazoenDiasHabilesComponent1750272790756 } from './api-doc-page/Calendarios/Calcular/CalcularPlazoenDiasHabiles.component';
import { ObtenerFechaHabilComponent1750272790758 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabil.component';
import { ObtenerFechaHabilAnteriorComponent1750272790761 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabilAnterior.component';
import { ObtenerFechaHabilAnteriordeSucursalComponent1750272790762 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabilAnteriordeSucursal.component';
import { ObtenerFechaHabildeSucursalComponent1750272790764 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabildeSucursal.component';
import { ObtenerInicioyFindeMesComponent1750272790766 } from './api-doc-page/Calendarios/Obtener/ObtenerInicioyFindeMes.component';
import { ObtenerInicioyFindeMesdeSucursalComponent1750272790767 } from './api-doc-page/Calendarios/Obtener/ObtenerInicioyFindeMesdeSucursal.component';
import { ObtenerProximaFechaHabilComponent1750272790769 } from './api-doc-page/Calendarios/Obtener/ObtenerProximaFechaHabil.component';
import { ObtenerProximaFechaHabildeSucursalComponent1750272790771 } from './api-doc-page/Calendarios/Obtener/ObtenerProximaFechaHabildeSucursal.component';
import { AutorizarArchivoComponent1750272790773 } from './api-doc-page/CASH-Management/Archivo/AutorizarArchivo.component';
import { CargarArchivoComponent1750272790775 } from './api-doc-page/CASH-Management/Archivo/CargarArchivo.component';
import { CargarArchivoRecibidoComoDatoComponent1750272790777 } from './api-doc-page/CASH-Management/Archivo/CargarArchivoRecibidoComoDato.component';
import { DetenerArchivoComponent1750272790779 } from './api-doc-page/CASH-Management/Archivo/DetenerArchivo.component';
import { RechazarArchivoComponent1750272790781 } from './api-doc-page/CASH-Management/Archivo/RechazarArchivo.component';
import { CargarBeneficiariosComponent1750272790783 } from './api-doc-page/CASH-Management/Beneficiarios/CargarBeneficiarios.component';
import { IngresarBeneficiarioComponent1750272790785 } from './api-doc-page/CASH-Management/Beneficiarios/IngresarBeneficiario.component';
import { ObtenerBeneficiarioSegunFiltroComponent1750272790786 } from './api-doc-page/CASH-Management/Beneficiarios/ObtenerBeneficiarioSegunFiltro.component';
import { AltaAutomaticaContratoComponent1750272790788 } from './api-doc-page/CASH-Management/Contratar/AltaAutomaticaContrato.component';
import { CargarServiciosDisponiblesComponent1750272790791 } from './api-doc-page/CASH-Management/Contratar/CargarServiciosDisponibles.component';
import { ContratarDebitoAutomaticoComponent1750272790793 } from './api-doc-page/CASH-Management/Contratar/ContratarDebitoAutomatico.component';
import { ObtenerDetalledeOrdendeCuentaComponent1750272790795 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalledeOrdendeCuenta.component';
import { ObtenerDetalledePagoComponent1750272790796 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalledePago.component';
import { ObtenerDetalleOrdenSegunCampoComponent1750272790798 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalleOrdenSegunCampo.component';
import { ObtenerDetallePagoOrdenComponent1750272790799 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetallePagoOrden.component';
import { ObtenerDeudaComponent1750272790801 } from './api-doc-page/CASH-Management/Obtener/ObtenerDeuda.component';
import { ObtenerResumenOrdenComponent1750272790803 } from './api-doc-page/CASH-Management/Obtener/ObtenerResumenOrden.component';
import { ObtenerServiciosComponent1750272790805 } from './api-doc-page/CASH-Management/Obtener/ObtenerServicios.component';
import { ObtenerValoresOrdenComponent1750272790807 } from './api-doc-page/CASH-Management/Obtener/ObtenerValoresOrden.component';
import { ObtenerValoresOrdenSegunCampoComponent1750272790809 } from './api-doc-page/CASH-Management/Obtener/ObtenerValoresOrdenSegunCampo.component';
import { AutorizarOrdenComponent1750272790811 } from './api-doc-page/CASH-Management/Orden/AutorizarOrden.component';
import { DetenerOrdenComponent1750272790813 } from './api-doc-page/CASH-Management/Orden/DetenerOrden.component';
import { IngresarOrdenPagoComponent1750272790814 } from './api-doc-page/CASH-Management/Orden/IngresarOrdenPago.component';
import { ProcesarOrdenComponent1750272790816 } from './api-doc-page/CASH-Management/Orden/ProcesarOrden.component';
import { RechazarOrdenComponent1750272790817 } from './api-doc-page/CASH-Management/Orden/RechazarOrden.component';
import { AnularPagoDeudaComponent1750272790819 } from './api-doc-page/CASH-Management/Pagos/AnularPagoDeuda.component';
import { PagarDeudaDesdeCuentaComponent1750272790820 } from './api-doc-page/CASH-Management/Pagos/PagarDeudaDesdeCuenta.component';
import { RegistrarPagoDeudaComponent1750272790822 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoDeuda.component';
import { RegistrarPagoEnLineaComponent1750272790825 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoEnLinea.component';
import { RegistrarPagoEnLineaDesdeCuentaComponent1750272790827 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoEnLineaDesdeCuenta.component';
import { VisualizarListaResumenCabezalComponent1750272790829 } from './api-doc-page/CASH-Management/Visualizar/VisualizarListaResumenCabezal.component';
import { VisualizarListaResumenCabezalOrdenComponent1750272790831 } from './api-doc-page/CASH-Management/Visualizar/VisualizarListaResumenCabezalOrden.component';
import { VisualizarOrdendeArchivoParaCuentaComponent1750272790832 } from './api-doc-page/CASH-Management/Visualizar/VisualizarOrdendeArchivoParaCuenta.component';
import { VisualizarResultadoProcesamientoComponent1750272790834 } from './api-doc-page/CASH-Management/Visualizar/VisualizarResultadoProcesamiento.component';
import { VisualizarResumenCabezalComponent1750272790836 } from './api-doc-page/CASH-Management/Visualizar/VisualizarResumenCabezal.component';
import { VisualizarSituacionArchivosComponent1750272790838 } from './api-doc-page/CASH-Management/Visualizar/VisualizarSituacionArchivos.component';
import { VisualizarSituacionLineasComponent1750272790841 } from './api-doc-page/CASH-Management/Visualizar/VisualizarSituacionLineas.component';
import { CHATComponent1750272790843 } from './api-doc-page/CHAT/CHAT.component';
import { ActualizarComponent1750272790845 } from './api-doc-page/Clientes/Actualizar/Actualizar.component';
import { ActualizarDocumentoDigitalComponent1750272790846 } from './api-doc-page/Clientes/Actualizar/ActualizarDocumentoDigital.component';
import { ActualizarDomicilioComponent1750272790848 } from './api-doc-page/Clientes/Actualizar/ActualizarDomicilio.component';
import { ActualizarInformacionAdicionalComponent1750272790850 } from './api-doc-page/Clientes/Actualizar/ActualizarInformacionAdicional.component';
import { ActualizarRegistroEmpleadoComponent1750272790851 } from './api-doc-page/Clientes/Actualizar/ActualizarRegistroEmpleado.component';
import { ActualizarTelefonoComponent1750272790853 } from './api-doc-page/Clientes/Actualizar/ActualizarTelefono.component';
import { AgregarDomicilioComponent1750272790854 } from './api-doc-page/Clientes/Actualizar/AgregarDomicilio.component';
import { AgregarInformacionAdicionalComponent1750272790857 } from './api-doc-page/Clientes/Actualizar/AgregarInformacionAdicional.component';
import { AgregarIntegranteComponent1750272790859 } from './api-doc-page/Clientes/Actualizar/AgregarIntegrante.component';
import { AgregarTelefonoComponent1750272790861 } from './api-doc-page/Clientes/Actualizar/AgregarTelefono.component';
import { AsociarDocumentoDigitalComponent1750272790863 } from './api-doc-page/Clientes/Actualizar/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750272790864 } from './api-doc-page/Clientes/Actualizar/EliminarDocumentoDigital.component';
import { EliminarDomicilioComponent1750272790866 } from './api-doc-page/Clientes/Actualizar/EliminarDomicilio.component';
import { EliminarInformacionAdicionalComponent1750272790867 } from './api-doc-page/Clientes/Actualizar/EliminarInformacionAdicional.component';
import { EliminarIntegranteComponent1750272790869 } from './api-doc-page/Clientes/Actualizar/EliminarIntegrante.component';
import { HabilitarComponent1750272790871 } from './api-doc-page/Clientes/Actualizar/Habilitar.component';
import { InhabilitarComponent1750272790872 } from './api-doc-page/Clientes/Actualizar/Inhabilitar.component';
import { ModificarEjecutivoComponent1750272790875 } from './api-doc-page/Clientes/Actualizar/ModificarEjecutivo.component';
import { CrearComponent1750272790877 } from './api-doc-page/Clientes/Crear/Crear.component';
import { CrearconPersonaExistenteComponent1750272790879 } from './api-doc-page/Clientes/Crear/CrearconPersonaExistente.component';
import { CrearParaPersonaJuridicaComponent1750272790881 } from './api-doc-page/Clientes/Crear/CrearParaPersonaJuridica.component';
import { ObtenerComponent1750272790883 } from './api-doc-page/Clientes/Obtener/Obtener.component';
import { ObtenerAhorrosProgramadosComponent1750272790884 } from './api-doc-page/Clientes/Obtener/ObtenerAhorrosProgramados.component';
import { ObtenerBolsillosComponent1750272790886 } from './api-doc-page/Clientes/Obtener/ObtenerBolsillos.component';
import { ObtenerClasificacionesInternasComponent1750272790889 } from './api-doc-page/Clientes/Obtener/ObtenerClasificacionesInternas.component';
import { ObtenerCuentaClienteComponent1750272790891 } from './api-doc-page/Clientes/Obtener/ObtenerCuentaCliente.component';
import { ObtenerCuentasCorrientesSaldoContableComponent1750272790893 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasCorrientesSaldoContable.component';
import { ObtenerCuentasCorrientesSaldoDisponibleComponent1750272790895 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasCorrientesSaldoDisponible.component';
import { ObtenerCuentasdeAhorroSaldoContableComponent1750272790897 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasdeAhorroSaldoContable.component';
import { ObtenerCuentasdeAhorroSaldoDisponibleComponent1750272790898 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasdeAhorroSaldoDisponible.component';
import { ObtenerDatosComponent1750272790900 } from './api-doc-page/Clientes/Obtener/ObtenerDatos.component';
import { ObtenerDetallePosicionComponent1750272790902 } from './api-doc-page/Clientes/Obtener/ObtenerDetallePosicion.component';
import { ObtenerDocumentoDigitalComponent1750272790905 } from './api-doc-page/Clientes/Obtener/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750272790908 } from './api-doc-page/Clientes/Obtener/ObtenerDocumentosDigitales.component';
import { ObtenerDomiciliosComponent1750272790910 } from './api-doc-page/Clientes/Obtener/ObtenerDomicilios.component';
import { ObtenerFacultadesComponent1750272790912 } from './api-doc-page/Clientes/Obtener/ObtenerFacultades.component';
import { ObtenerIdentificadorUnicoComponent1750272790914 } from './api-doc-page/Clientes/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerInformacionAdicionalComponent1750272790916 } from './api-doc-page/Clientes/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerIntegrantesComponent1750272790917 } from './api-doc-page/Clientes/Obtener/ObtenerIntegrantes.component';
import { ObtenerLimitesComponent1750272790919 } from './api-doc-page/Clientes/Obtener/ObtenerLimites.component';
import { ObtenerMotivosInhabilitacionComponent1750272790922 } from './api-doc-page/Clientes/Obtener/ObtenerMotivosInhabilitacion.component';
import { ObtenerPerfilComponent1750272790924 } from './api-doc-page/Clientes/Obtener/ObtenerPerfil.component';
import { ObtenerPlazosFijosComponent1750272790926 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijos.component';
import { ObtenerPlazosFijosCanceladosComponent1750272790928 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijosCancelados.component';
import { ObtenerPlazosFijosconAvanceComponent1750272790930 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijosconAvance.component';
import { ObtenerPosicionComponent1750272790932 } from './api-doc-page/Clientes/Obtener/ObtenerPosicion.component';
import { ObtenerPrestamosComponent1750272790934 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamos.component';
import { ObtenerPrestamosCanceladosComponent1750272790935 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosCancelados.component';
import { ObtenerPrestamosCastigadosComponent1750272790937 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosCastigados.component';
import { ObtenerPrestamosconAvanceComponent1750272790940 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosconAvance.component';
import { ObtenerResumendeProductosCierredeanoComponent1750272790943 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosCierredeano.component';
import { ObtenerResumendeProductosSaldosContablesComponent1750272790945 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosSaldosContables.component';
import { ObtenerResumendeProductosSaldosDisponiblesComponent1750272790947 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosSaldosDisponibles.component';
import { ObtenerResumenporProductoaCierreAnoComponent1750272790949 } from './api-doc-page/Clientes/Obtener/ObtenerResumenporProductoaCierreAno.component';
import { ObtenerRiesgodeCreditoComponent1750272790950 } from './api-doc-page/Clientes/Obtener/ObtenerRiesgodeCredito.component';
import { ObtenerSaldosdeOtrosProductosComponent1750272790952 } from './api-doc-page/Clientes/Obtener/ObtenerSaldosdeOtrosProductos.component';
import { ObtenerSectoresComponent1750272790954 } from './api-doc-page/Clientes/Obtener/ObtenerSectores.component';
import { ObtenerSegmentosComponent1750272790956 } from './api-doc-page/Clientes/Obtener/ObtenerSegmentos.component';
import { ObtenerTarjetasdeDebitoComponent1750272790959 } from './api-doc-page/Clientes/Obtener/ObtenerTarjetasdeDebito.component';
import { ObtenerTelefonosComponent1750272790961 } from './api-doc-page/Clientes/Obtener/ObtenerTelefonos.component';
import { ObtenerTiposdeIntegracionComponent1750272790963 } from './api-doc-page/Clientes/Obtener/ObtenerTiposdeIntegracion.component';
import { ObtenerTitularRepresentativoComponent1750272790965 } from './api-doc-page/Clientes/Obtener/ObtenerTitularRepresentativo.component';
import { ObtenerTitulosComponent1750272790967 } from './api-doc-page/Clientes/Obtener/ObtenerTitulos.component';
import { ValidarExistenciaComponent1750272790968 } from './api-doc-page/Clientes/Validar/ValidarExistencia.component';
import { VerificarEmpleadoComponent1750272790970 } from './api-doc-page/Clientes/Validar/VerificarEmpleado.component';
import { ObtenerAgenciasBancoComponent1750272790972 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerAgenciasBanco.component';
import { ObtenerBancosComponent1750272790975 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerBancos.component';
import { ObtenerDetalleSucursalComponent1750272790977 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerDetalleSucursal.component';
import { ObtenerSucursalesPrincipalesComponent1750272790979 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerSucursalesPrincipales.component';
import { ObtenerActividadesComponent1750272790981 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerActividades.component';
import { ObtenerActividadesporTipoComponent1750272790983 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerActividadesporTipo.component';
import { ObtenerEjecutivosComponent1750272790985 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerEjecutivos.component';
import { ObtenerTiposdeActividadComponent1750272790986 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerTiposdeActividad.component';
import { ObtenerTiposdeTarjetaComponent1750272790988 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerTiposdeTarjeta.component';
import { ObtenerImpuestosComponent1750272790991 } from './api-doc-page/Configuración-Bantotal/ObtenerImpuestos.component';
import { ObtenerTiposdeDocumentoDigitalComponent1750272790994 } from './api-doc-page/Configuración-Bantotal/ObtenerTiposdeDocumentoDigital.component';
import { ObtenerEstadosComponent1750272790996 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerEstados.component';
import { ObtenerInstruccionesComponent1750272790998 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerInstrucciones.component';
import { ObtenerPaquetesComponent1750272791001 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerPaquetes.component';
import { ObtenerTiposdeTextoComponent1750272791003 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerTiposdeTexto.component';
import { ObtenerCalendariodeSucursalComponent1750272791005 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerCalendariodeSucursal.component';
import { ObtenerCalendariosComponent1750272791007 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerCalendarios.component';
import { ObtenerDetalledeCalendarioComponent1750272791010 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDetalledeCalendario.component';
import { ObtenerDetalledeCalendariodeSucursalComponent1750272791012 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDetalledeCalendariodeSucursal.component';
import { ObtenerDolarUSAComponent1750272791014 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDolarUSA.component';
import { ObtenerEmpresaComponent1750272791016 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerEmpresa.component';
import { ObtenerFechadeSistemaComponent1750272791017 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerFechadeSistema.component';
import { ObtenerMonedaNacionalComponent1750272791019 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerMonedaNacional.component';
import { ObtenerMonedasComponent1750272791021 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerMonedas.component';
import { ObtenerSucursalesComponent1750272791024 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerSucursales.component';
import { ObtenerAgrupadoresDomicilioComponent1750272791026 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerAgrupadoresDomicilio.component';
import { ObtenerBarriosyColoniasComponent1750272791029 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerBarriosyColonias.component';
import { ObtenerCiudadesyLocalidadesComponent1750272791031 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerCiudadesyLocalidades.component';
import { ObtenerCodigosdeDomicilioComponent1750272791033 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerCodigosdeDomicilio.component';
import { ObtenerEstadosProvinciasyDepartamentosComponent1750272791035 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerEstadosProvinciasyDepartamentos.component';
import { ObtenerPaisesComponent1750272791037 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerPaises.component';
import { ObtenerTiposdeListasNegrasComponent1750272791039 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeListasNegras.component';
import { ObtenerTiposdeTelefonoComponent1750272791041 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeTelefono.component';
import { ObtenerTiposdeViviendaComponent1750272791043 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeVivienda.component';
import { ObtenerPizarraporModuloComponent1750272791045 } from './api-doc-page/Configuración-Bantotal/Precios/ObtenerPizarraporModulo.component';
import { ObtenerPizarrasComponent1750272791047 } from './api-doc-page/Configuración-Bantotal/Precios/ObtenerPizarras.component';
import { ObtenerMenusComponent1750272791049 } from './api-doc-page/Configuración-Bantotal/Seguridad/ObtenerMenus.component';
import { ObtenerPerfilesComponent1750272791050 } from './api-doc-page/Configuración-Bantotal/Seguridad/ObtenerPerfiles.component';
import { AgregarTextoAsientoComponent1750272791053 } from './api-doc-page/Contabilidad/Agregar-Texto/AgregarTextoAsiento.component';
import { AgregarTextoOrdinalComponent1750272791054 } from './api-doc-page/Contabilidad/Agregar-Texto/AgregarTextoOrdinal.component';
import { AnularMovimientoComponent1750272791057 } from './api-doc-page/Contabilidad/AnularMovimiento.component';
import { ActualizarCondicionImpositivaComponent1750272791059 } from './api-doc-page/Contabilidad/Condición-Impositiva/ActualizarCondicionImpositiva.component';
import { CrearCondicionImpositivaComponent1750272791061 } from './api-doc-page/Contabilidad/Condición-Impositiva/CrearCondicionImpositiva.component';
import { ObtenerIdBantotalMovimientoComponent1750272791063 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalMovimiento.component';
import { ObtenerIdBantotalOperacionComponent1750272791065 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalOperacion.component';
import { ObtenerIdBantotalProductoComponent1750272791066 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalProducto.component';
import { ObtenerIdentificadorUnicodeMovimientoComponent1750272791068 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeMovimiento.component';
import { ObtenerIdentificadorUnicodeOperacionComponent1750272791070 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeOperacion.component';
import { ObtenerIdentificadorUnicodeProductoComponent1750272791072 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeProducto.component';
import { ObtenerClientedeunaOperacionComponent1750272791074 } from './api-doc-page/Contabilidad/Obtener/ObtenerClientedeunaOperacion.component';
import { ObtenerCondicionImpositivaComponent1750272791077 } from './api-doc-page/Contabilidad/Obtener/ObtenerCondicionImpositiva.component';
import { ObtenerDetalledeMovimientoComponent1750272791079 } from './api-doc-page/Contabilidad/Obtener/ObtenerDetalledeMovimiento.component';
import { ObtenerDetalledeOrdinalComponent1750272791081 } from './api-doc-page/Contabilidad/Obtener/ObtenerDetalledeOrdinal.component';
import { ObtenerIntegrantesdeOperacionComponent1750272791083 } from './api-doc-page/Contabilidad/Obtener/ObtenerIntegrantesdeOperacion.component';
import { ObtenerTextosdeMovimientoComponent1750272791084 } from './api-doc-page/Contabilidad/Obtener/ObtenerTextosdeMovimiento.component';
import { RegistrarAsientoComponent1750272791086 } from './api-doc-page/Contabilidad/Registrar-Asiento/RegistrarAsiento.component';
import { RegistrarAsientoFechaValorComponent1750272791088 } from './api-doc-page/Contabilidad/Registrar-Asiento/RegistrarAsientoFechaValor.component';
import { CancelarComponent1750272791091 } from './api-doc-page/Cuentas-Bolsillo/Cancelar.component';
import { CashInComponent1750272791093 } from './api-doc-page/Cuentas-Bolsillo/CashIn.component';
import { CashOutComponent1750272791095 } from './api-doc-page/Cuentas-Bolsillo/CashOut.component';
import { ContratarComponent1750272791097 } from './api-doc-page/Cuentas-Bolsillo/Contratar.component';
import { ObtenerDatosComponent1750272791098 } from './api-doc-page/Cuentas-Bolsillo/ObtenerDatos.component';
import { ObtenerMovimientosComponent1750272791100 } from './api-doc-page/Cuentas-Bolsillo/ObtenerMovimientos.component';
import { ObtenerProductosComponent1750272791101 } from './api-doc-page/Cuentas-Bolsillo/ObtenerProductos.component';
import { ObtenerProductosCVComponent1750272791103 } from './api-doc-page/Cuentas-Bolsillo/ObtenerProductosCV.component';
import { ObtenerChequeraComponent1750272791105 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequera.component';
import { ObtenerChequerasComponent1750272791107 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequeras.component';
import { ObtenerChequesdeChequeraComponent1750272791109 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequesdeChequera.component';
import { ObtenerComisionChequeraComponent1750272791111 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerComisionChequera.component';
import { ObtenerEstadodeChequeraComponent1750272791112 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerEstadodeChequera.component';
import { ObtenerSolicitudesdeChequerasComponent1750272791114 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerSolicitudesdeChequeras.component';
import { ObtenerTiposdeChequeraComponent1750272791116 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerTiposdeChequera.component';
import { ObtenerTiposdeChequeraporProductoComponent1750272791117 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerTiposdeChequeraporProducto.component';
import { EliminarChequeraComponent1750272791119 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/EliminarChequera.component';
import { RegistrarOrdendeNoPagodeChequeraComponent1750272791121 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/RegistrarOrdendeNoPagodeChequera.component';
import { RegistrarOrdendeNoPagodeChequesComponent1750272791123 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/RegistrarOrdendeNoPagodeCheques.component';
import { SolicitarChequeraComponent1750272791126 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/SolicitarChequera.component';
import { ContratarconPeriodicidadComponent1750272791128 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarconPeriodicidad.component';
import { ContratarProductoComponent1750272791130 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarProducto.component';
import { ContratarProductoconAltadeFacultadesComponent1750272791132 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarProductoconAltadeFacultades.component';
import { ObtenerAcuerdosComponent1750272791133 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerAcuerdos.component';
import { ObtenerDatosComponent1750272791136 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerDatos.component';
import { ObtenerEstadodeCuentaComponent1750272791138 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerEvoluciondeSaldosComponent1750272791140 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerEvoluciondeSaldos.component';
import { ObtenerProductosComponent1750272791143 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerProductos.component';
import { ContratarconPeriodicidadComponent1750272791145 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarconPeriodicidad.component';
import { ContratarProductoComponent1750272791147 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarProducto.component';
import { ContratarProductoconAltadeFacultadesComponent1750272791149 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarProductoconAltadeFacultades.component';
import { ObtenerDatosComponent1750272791151 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerDatos.component';
import { ObtenerEstadodeCuentaComponent1750272791153 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerEvoluciondeSaldosComponent1750272791155 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerEvoluciondeSaldos.component';
import { ObtenerProductosComponent1750272791158 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerProductos.component';
import { ActualizarBeneficiariosComponent1750272791160 } from './api-doc-page/Cuentas-Vista/Beneficiarios/ActualizarBeneficiarios.component';
import { ObtenerBeneficiariosComponent1750272791162 } from './api-doc-page/Cuentas-Vista/Beneficiarios/ObtenerBeneficiarios.component';
import { ActualizarDocumentoDigitalComponent1750272791164 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750272791166 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750272791168 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750272791169 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750272791171 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ObtenerBolsillosComponent1750272791174 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerBolsillos.component';
import { ObtenerCBUdeCuentaVistaComponent1750272791176 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerCBUdeCuentaVista.component';
import { ObtenerCuentaVistadeCBUComponent1750272791178 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerCuentaVistadeCBU.component';
import { ObtenerDetalleBloqueoComponent1750272791180 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerDetalleBloqueo.component';
import { ObtenerEstadodeCuentaporPeriodoComponent1750272791182 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerEstadodeCuentaporPeriodo.component';
import { ObtenerEstadoDeOperacionComponent1750272791183 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerEstadoDeOperacion.component';
import { ObtenerFacultadesComponent1750272791185 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerFacultades.component';
import { ObtenerPaqueteComponent1750272791187 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPaquete.component';
import { ObtenerPeriododeAcreditacionComponent1750272791191 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPeriododeAcreditacion.component';
import { ObtenerPeriodosdeAcreditacionComponent1750272791189 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPeriodosdeAcreditacion.component';
import { ObtenerSaldoBloqueadoComponent1750272791194 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldoBloqueado.component';
import { ObtenerSaldoDisponibleComponent1750272791196 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldoDisponible.component';
import { ObtenerSaldosBloqueadosComponent1750272791198 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldosBloqueados.component';
import { AcreditarEnCuentaComponent1750272791199 } from './api-doc-page/Cuentas-Vista/Operar/AcreditarEnCuenta.component';
import { ActivarComponent1750272791202 } from './api-doc-page/Cuentas-Vista/Operar/Activar.component';
import { ActualizarPeriododeAcreditacionComponent1750272791204 } from './api-doc-page/Cuentas-Vista/Operar/ActualizarPeriododeAcreditacion.component';
import { BloquearSaldoComponent1750272791206 } from './api-doc-page/Cuentas-Vista/Operar/BloquearSaldo.component';
import { CancelarComponent1750272791208 } from './api-doc-page/Cuentas-Vista/Operar/Cancelar.component';
import { DebitarEnCuentaComponent1750272791210 } from './api-doc-page/Cuentas-Vista/Operar/DebitarEnCuenta.component';
import { DesbloquearSaldoComponent1750272791212 } from './api-doc-page/Cuentas-Vista/Operar/DesbloquearSaldo.component';
import { ActualizarPerfilTransaccionalComponent1750272791214 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/ActualizarPerfilTransaccional.component';
import { AgregarPerfilTransaccionalComponent1750272791216 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/AgregarPerfilTransaccional.component';
import { ObtenerPerfilTransaccionalComponent1750272791218 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/ObtenerPerfilTransaccional.component';
import { TraspasarConTipoDeCambioEspecialComponent1750272791220 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarConTipoDeCambioEspecial.component';
import { TraspasarEntreCuentasdelaMismaPersonaComponent1750272791222 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasdelaMismaPersona.component';
import { TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750272791225 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasMismoTitularcontipodecambio.component';
import { TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750272791227 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasMismoTitulardiferentesmonedas.component';
import { TraspasarEntreCuentasPropiasComponent1750272791233 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropias.component';
import { TraspasarEntreCuentasPropiascontipodecambioComponent1750272791229 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropiascontipodecambio.component';
import { TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750272791230 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropiasdiferentesmonedas.component';
import { TraspasarEntreCuentasTercerosComponent1750272791239 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTerceros.component';
import { TraspasarEntreCuentasTerceroscontipodecambioComponent1750272791235 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTerceroscontipodecambio.component';
import { TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750272791237 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTercerosdiferentesmonedas.component';
import { ActualizarBeneficiariosComponent1750272791242 } from './api-doc-page/Depósitos-a-Plazo/Beneficiarios/ActualizarBeneficiarios.component';
import { ObtenerBeneficiariosComponent1750272791244 } from './api-doc-page/Depósitos-a-Plazo/Beneficiarios/ObtenerBeneficiarios.component';
import { ContratarComponent1750272791245 } from './api-doc-page/Depósitos-a-Plazo/Contratar/Contratar.component';
import { ContratarConFacultadesComponent1750272791247 } from './api-doc-page/Depósitos-a-Plazo/Contratar/ContratarConFacultades.component';
import { ContratarSimulacionComponent1750272791249 } from './api-doc-page/Depósitos-a-Plazo/Contratar/ContratarSimulacion.component';
import { ActualizarDocumentoDigitalComponent1750272791250 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750272791252 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750272791254 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750272791255 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ModificarCuentaDestinoalVencimientoComponent1750272791258 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarCuentaDestinoalVencimiento.component';
import { ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750272791260 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarCuentaDestinodeAcreditacionPeriodica.component';
import { ModificarInstruccionComponent1750272791261 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarInstruccion.component';
import { ObtenerAvanceComponent1750272791263 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerAvance.component';
import { ObtenerDatosComponent1750272791264 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDatos.component';
import { ObtenerDatosPrecancelacionComponent1750272791266 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDatosPrecancelacion.component';
import { ObtenerDocumentosDigitalesComponent1750272791268 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDocumentosDigitales.component';
import { ObtenerInstruccionComponent1750272791271 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerInstruccion.component';
import { ObtenerInstruccionesHabilitadosComponent1750272791270 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerInstruccionesHabilitados.component';
import { ObtenerMovimientosComponent1750272791275 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerMovimientos.component';
import { ObtenerPeriodosHabilitadosComponent1750272791276 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerPeriodosHabilitados.component';
import { ObtenerProductosComponent1750272791278 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerProductos.component';
import { ObtenerProductosHabilitadosComponent1750272791280 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerProductosHabilitados.component';
import { ObtenerTasadePrecancelacionComponent1750272791281 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerTasadePrecancelacion.component';
import { PrecancelarComponent1750272791282 } from './api-doc-page/Depósitos-a-Plazo/Precancelar.component';
import { SimularComponent1750272791284 } from './api-doc-page/Depósitos-a-Plazo/Simular/Simular.component';
import { SimularConCronogramaComponent1750272791286 } from './api-doc-page/Depósitos-a-Plazo/Simular/SimularConCronograma.component';
import { ConfirmarListaComponent1750272791287 } from './api-doc-page/Descuento-de-Documentos/ConfirmarLista.component';
import { CrearListaComponent1750272791290 } from './api-doc-page/Descuento-de-Documentos/CrearLista.component';
import { CrearListaChequesComponent1750272791292 } from './api-doc-page/Descuento-de-Documentos/CrearListaCheques.component';
import { ObtenerProductosComponent1750272791294 } from './api-doc-page/Descuento-de-Documentos/ObtenerProductos.component';
import { ObtenerTiposDeDesembolsoComponent1750272791295 } from './api-doc-page/Descuento-de-Documentos/ObtenerTiposDeDesembolso.component';
import { SeleccionarOpcionDesembolsoComponent1750272791296 } from './api-doc-page/Descuento-de-Documentos/SeleccionarOpcionDesembolso.component';
import { ObtenerAgrupadoresComponent1750272791298 } from './api-doc-page/Indicadores/ObtenerAgrupadores.component';
import { ObtenerCierredeSaldosporMonedaComponent1750272791299 } from './api-doc-page/Indicadores/ObtenerCierredeSaldosporMoneda.component';
import { ObtenerCondicionesGeneralesComponent1750272791300 } from './api-doc-page/Indicadores/ObtenerCondicionesGenerales.component';
import { ObtenerIndicadoresComponent1750272791302 } from './api-doc-page/Indicadores/ObtenerIndicadores.component';
import { ObtenerMetodosMasEjecutadosComponent1750272791304 } from './api-doc-page/Indicadores/ObtenerMetodosMasEjecutados.component';
import { ObtenerMonedasIndicesComponent1750272791305 } from './api-doc-page/Indicadores/ObtenerMonedasIndices.component';
import { ObtenerRubrosBolsaComponent1750272791308 } from './api-doc-page/Indicadores/ObtenerRubrosBolsa.component';
import { ObtenerServiciosMasEjecutadosComponent1750272791311 } from './api-doc-page/Indicadores/ObtenerServiciosMasEjecutados.component';
import { ObtenerSesionesPorUsuarioComponent1750272791312 } from './api-doc-page/Indicadores/ObtenerSesionesPorUsuario.component';
import { ObtenerSucursalesCajasComponent1750272791314 } from './api-doc-page/Indicadores/ObtenerSucursalesCajas.component';
import { ObtenerTransaccionesporEstadosComponent1750272791315 } from './api-doc-page/Indicadores/ObtenerTransaccionesporEstados.component';
import { BuscarClienteComponent1750272791317 } from './api-doc-page/Microfinanzas/BuscarCliente.component';
import { CompletarTareaComponent1750272791318 } from './api-doc-page/Microfinanzas/CompletarTarea.component';
import { CrearSolicitudAmpliacionComponent1750272791320 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudAmpliacion.component';
import { CrearSolicitudIndividualComponent1750272791321 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudIndividual.component';
import { CrearSolicitudRenovacionComponent1750272791324 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudRenovacion.component';
import { AgregarFiadorComponent1750272791325 } from './api-doc-page/Microfinanzas/Fiadores/AgregarFiador.component';
import { EliminarFiadorComponent1750272791327 } from './api-doc-page/Microfinanzas/Fiadores/EliminarFiador.component';
import { ActualizarGrupoComponent1750272791329 } from './api-doc-page/Microfinanzas/Grupales/ActualizarGrupo.component';
import { ActualizarIntegrantedeGrupoComponent1750272791331 } from './api-doc-page/Microfinanzas/Grupales/ActualizarIntegrantedeGrupo.component';
import { AgregarGrupoComponent1750272791332 } from './api-doc-page/Microfinanzas/Grupales/AgregarGrupo.component';
import { AgregarIntegranteaGrupoComponent1750272791334 } from './api-doc-page/Microfinanzas/Grupales/AgregarIntegranteaGrupo.component';
import { CrearSolicitudGrupalComponent1750272791335 } from './api-doc-page/Microfinanzas/Grupales/CrearSolicitudGrupal.component';
import { HabilitarIntegrantedeunGrupoComponent1750272791337 } from './api-doc-page/Microfinanzas/Grupales/HabilitarIntegrantedeunGrupo.component';
import { InhabilitarIntegrantedeunGrupoComponent1750272791339 } from './api-doc-page/Microfinanzas/Grupales/InhabilitarIntegrantedeunGrupo.component';
import { ObtenerDetalleGrupoComponent1750272791341 } from './api-doc-page/Microfinanzas/Grupales/ObtenerDetalleGrupo.component';
import { ObtenerGruposComponent1750272791343 } from './api-doc-page/Microfinanzas/Grupales/ObtenerGrupos.component';
import { ObtenerIntegrantesdeGrupoComponent1750272791345 } from './api-doc-page/Microfinanzas/Grupales/ObtenerIntegrantesdeGrupo.component';
import { ObtenerTiposdeGrupoComponent1750272791346 } from './api-doc-page/Microfinanzas/Grupales/ObtenerTiposdeGrupo.component';
import { ObtenerTiposdeIntegranteComponent1750272791348 } from './api-doc-page/Microfinanzas/Grupales/ObtenerTiposdeIntegrante.component';
import { SimularPrestamoAmortizableGrupalComponent1750272791350 } from './api-doc-page/Microfinanzas/Grupales/SimularPrestamoAmortizableGrupal.component';
import { ObtenerAsesoresComponent1750272791352 } from './api-doc-page/Microfinanzas/Obtener/ObtenerAsesores.component';
import { ObtenerCampanasComponent1750272791355 } from './api-doc-page/Microfinanzas/Obtener/ObtenerCampanas.component';
import { ObtenerDestinosCreditoComponent1750272791357 } from './api-doc-page/Microfinanzas/Obtener/ObtenerDestinosCredito.component';
import { ObtenerOperacionesClienteComponent1750272791359 } from './api-doc-page/Microfinanzas/Obtener/ObtenerOperacionesCliente.component';
import { ObtenerOrigenesdeCaptacionComponent1750272791361 } from './api-doc-page/Microfinanzas/Obtener/ObtenerOrigenesdeCaptacion.component';
import { ObtenerProductosComponent1750272791363 } from './api-doc-page/Microfinanzas/Obtener/ObtenerProductos.component';
import { ObtenerSolicitudesClienteComponent1750272791365 } from './api-doc-page/Microfinanzas/Obtener/ObtenerSolicitudesCliente.component';
import { ObtenerTiposAvalComponent1750272791366 } from './api-doc-page/Microfinanzas/Obtener/ObtenerTiposAval.component';
import { AgregarOperacionesaCancelarComponent1750272791368 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/AgregarOperacionesaCancelar.component';
import { ObtenerOperacionesaCancelarComponent1750272791370 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/ObtenerOperacionesaCancelar.component';
import { QuitarOperacionesaCancelarComponent1750272791372 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/QuitarOperacionesaCancelar.component';
import { SimularLibreAmortizacionComponent1750272791375 } from './api-doc-page/Microfinanzas/Simular/SimularLibreAmortizacion.component';
import { SimularPrestamoAmortizableComponent1750272791377 } from './api-doc-page/Microfinanzas/Simular/SimularPrestamoAmortizable.component';
import { SimularPrestamoPlazoFijoComponent1750272791379 } from './api-doc-page/Microfinanzas/Simular/SimularPrestamoPlazoFijo.component';
import { ValidarPoliticasComponent1750272791381 } from './api-doc-page/Microfinanzas/ValidarPoliticas.component';
import { ObtenerCantidadCuotasComponent1750272791383 } from './api-doc-page/Modelador-de-Préstamos/ObtenerCantidadCuotas.component';
import { ObtenerCapitalComponent1750272791384 } from './api-doc-page/Modelador-de-Préstamos/ObtenerCapital.component';
import { ObtenerComisionesComponent1750272791386 } from './api-doc-page/Modelador-de-Préstamos/ObtenerComisiones.component';
import { ObtenerComisionesporCuotaComponent1750272791388 } from './api-doc-page/Modelador-de-Préstamos/ObtenerComisionesporCuota.component';
import { ObtenerDiasPrimerPeriodoComponent1750272791391 } from './api-doc-page/Modelador-de-Préstamos/ObtenerDiasPrimerPeriodo.component';
import { ObtenerPeriodoEntreCuotasComponent1750272791396 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPeriodoEntreCuotas.component';
import { ObtenerPermiteSegurosdelMismoTipoComponent1750272791394 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPermiteSegurosdelMismoTipo.component';
import { ObtenerPlazoComponent1750272791397 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPlazo.component';
import { ObtenerRequiereSegurodeVidaObligatorioComponent1750272791399 } from './api-doc-page/Modelador-de-Préstamos/ObtenerRequiereSegurodeVidaObligatorio.component';
import { ObtenerSegurosComponent1750272791401 } from './api-doc-page/Modelador-de-Préstamos/ObtenerSeguros.component';
import { ObtenerItemsModeloComponent1750272791403 } from './api-doc-page/PAE/ObtenerItemsModelo.component';
import { ObtenerModelosPAEComponent1750272791405 } from './api-doc-page/PAE/ObtenerModelosPAE.component';
import { ObtenerScoresComponent1750272791407 } from './api-doc-page/PAE/ObtenerScores.component';
import { ObtenerTiposDeModelosComponent1750272791410 } from './api-doc-page/PAE/ObtenerTiposDeModelos.component';
import { ContratarPrestamoComponent1750272791412 } from './api-doc-page/Partners/Contratar/ContratarPrestamo.component';
import { ContratarVehicularComponent1750272791414 } from './api-doc-page/Partners/Contratar/ContratarVehicular.component';
import { CrearClienteComponent1750272791416 } from './api-doc-page/Partners/Crear/CrearCliente.component';
import { CrearPersonaClienteComponent1750272791417 } from './api-doc-page/Partners/Crear/CrearPersonaCliente.component';
import { ObtenerDatosdeUsuarioComponent1750272791420 } from './api-doc-page/Partners/Obtener/ObtenerDatosdeUsuario.component';
import { ObtenerDetalledeOfertaAmortizableComponent1750272791422 } from './api-doc-page/Partners/Obtener/ObtenerDetalledeOfertaAmortizable.component';
import { ObtenerDetalleOfertaVehicularComponent1750272791425 } from './api-doc-page/Partners/Obtener/ObtenerDetalleOfertaVehicular.component';
import { ObtenerMarcasComponent1750272791428 } from './api-doc-page/Partners/Obtener/ObtenerMarcas.component';
import { ObtenerModelosComponent1750272791429 } from './api-doc-page/Partners/Obtener/ObtenerModelos.component';
import { ObtenerPartnersComponent1750272791431 } from './api-doc-page/Partners/Obtener/ObtenerPartners.component';
import { ObtenerPrestamosdeClienteComponent1750272791437 } from './api-doc-page/Partners/Obtener/ObtenerPrestamosdeCliente.component';
import { ObtenerProductosComponent1750272791434 } from './api-doc-page/Partners/Obtener/ObtenerProductos.component';
import { ObtenerProductosdelPartnerComponent1750272791435 } from './api-doc-page/Partners/Obtener/ObtenerProductosdelPartner.component';
import { ObtenerPuntosdeVentaComponent1750272791440 } from './api-doc-page/Partners/Obtener/ObtenerPuntosdeVenta.component';
import { ObtenerVendedoresComponent1750272791443 } from './api-doc-page/Partners/Obtener/ObtenerVendedores.component';
import { ObtenerVersionesComponent1750272791445 } from './api-doc-page/Partners/Obtener/ObtenerVersiones.component';
import { SimularOfertasComponent1750272791447 } from './api-doc-page/Partners/Simular/SimularOfertas.component';
import { SimularOfertasVehicularComponent1750272791449 } from './api-doc-page/Partners/Simular/SimularOfertasVehicular.component';
import { SimularPrestamoComponent1750272791451 } from './api-doc-page/Partners/Simular/SimularPrestamo.component';
import { SimularVehicularComponent1750272791454 } from './api-doc-page/Partners/Simular/SimularVehicular.component';
import { ObtenerCorrelativoGuiaComponent1750272791456 } from './api-doc-page/Parámetros-Base/ObtenerCorrelativoGuia.component';
import { ObtenerCorrelativoGuiaEspecialComponent1750272791459 } from './api-doc-page/Parámetros-Base/ObtenerCorrelativoGuiaEspecial.component';
import { ObtenerGuiadeProcesoComponent1750272791462 } from './api-doc-page/Parámetros-Base/ObtenerGuiadeProceso.component';
import { ObtenerGuiaEspecialdeProcesoComponent1750272791464 } from './api-doc-page/Parámetros-Base/ObtenerGuiaEspecialdeProceso.component';
import { ObtenerOpcionGeneraldeProcesoComponent1750272791467 } from './api-doc-page/Parámetros-Base/ObtenerOpcionGeneraldeProceso.component';
import { ObtenerOpcionGeneralPorModuloComponent1750272791468 } from './api-doc-page/Parámetros-Base/ObtenerOpcionGeneralPorModulo.component';
import { ObtenerProgramaParticularComponent1750272791470 } from './api-doc-page/Parámetros-Base/ObtenerProgramaParticular.component';
import { ActualizarComponent1750272791473 } from './api-doc-page/Personas/Actualizar/Actualizar.component';
import { ActualizarCelularComponent1750272791475 } from './api-doc-page/Personas/Actualizar/ActualizarCelular.component';
import { ActualizarContactoComponent1750272791478 } from './api-doc-page/Personas/Actualizar/ActualizarContacto.component';
import { ActualizarConyugeComponent1750272791481 } from './api-doc-page/Personas/Actualizar/ActualizarConyuge.component';
import { ActualizarCorreoElectronicoComponent1750272791479 } from './api-doc-page/Personas/Actualizar/ActualizarCorreoElectronico.component';
import { ActualizarDomicilioComponent1750272791483 } from './api-doc-page/Personas/Actualizar/ActualizarDomicilio.component';
import { ActualizarFATCAComponent1750272791485 } from './api-doc-page/Personas/Actualizar/ActualizarFATCA.component';
import { ActualizarInformacionAdicionalComponent1750272791487 } from './api-doc-page/Personas/Actualizar/ActualizarInformacionAdicional.component';
import { ActualizarInformacionFinancieraComponent1750272791489 } from './api-doc-page/Personas/Actualizar/ActualizarInformacionFinanciera.component';
import { ActualizarIntegrantedePersonaJuridicaComponent1750272791491 } from './api-doc-page/Personas/Actualizar/ActualizarIntegrantedePersonaJuridica.component';
import { ActualizarPersonaJuridicaComponent1750272791494 } from './api-doc-page/Personas/Actualizar/ActualizarPersonaJuridica.component';
import { ActualizarProfesionComponent1750272791495 } from './api-doc-page/Personas/Actualizar/ActualizarProfesion.component';
import { ActualizarReferenciaComponent1750272791497 } from './api-doc-page/Personas/Actualizar/ActualizarReferencia.component';
import { ActualizarRegistroEmpleadoComponent1750272791498 } from './api-doc-page/Personas/Actualizar/ActualizarRegistroEmpleado.component';
import { ActualizarTelefonoComponent1750272791500 } from './api-doc-page/Personas/Actualizar/ActualizarTelefono.component';
import { ActualizarVictimaHechoViolentoComponent1750272791502 } from './api-doc-page/Personas/Actualizar/ActualizarVictimaHechoViolento.component';
import { ModificarDocumentoAdicionalComponent1750272791504 } from './api-doc-page/Personas/Actualizar/ModificarDocumentoAdicional.component';
import { AgregaraListaNegraComponent1750272791505 } from './api-doc-page/Personas/Agregar/AgregaraListaNegra.component';
import { AgregarContactoComponent1750272791508 } from './api-doc-page/Personas/Agregar/AgregarContacto.component';
import { AgregarCorreoElectronicoComponent1750272791511 } from './api-doc-page/Personas/Agregar/AgregarCorreoElectronico.component';
import { AgregarDatosPEPComponent1750272791514 } from './api-doc-page/Personas/Agregar/AgregarDatosPEP.component';
import { AgregarDocumentoAdicionalComponent1750272791516 } from './api-doc-page/Personas/Agregar/AgregarDocumentoAdicional.component';
import { AgregarDomicilioComponent1750272791520 } from './api-doc-page/Personas/Agregar/AgregarDomicilio.component';
import { AgregarEstadoFinancieroComponent1750272791524 } from './api-doc-page/Personas/Agregar/AgregarEstadoFinanciero.component';
import { AgregarFATCAComponent1750272791526 } from './api-doc-page/Personas/Agregar/AgregarFATCA.component';
import { AgregarInformacionAdicionalComponent1750272791529 } from './api-doc-page/Personas/Agregar/AgregarInformacionAdicional.component';
import { AgregarInformacionFinancieraComponent1750272791531 } from './api-doc-page/Personas/Agregar/AgregarInformacionFinanciera.component';
import { AgregarIntegranteaPersonaJuridicaComponent1750272791533 } from './api-doc-page/Personas/Agregar/AgregarIntegranteaPersonaJuridica.component';
import { AgregarPersonaVinculadaComponent1750272791535 } from './api-doc-page/Personas/Agregar/AgregarPersonaVinculada.component';
import { AgregarReferenciaComponent1750272791536 } from './api-doc-page/Personas/Agregar/AgregarReferencia.component';
import { AgregarTelefonoComponent1750272791538 } from './api-doc-page/Personas/Agregar/AgregarTelefono.component';
import { AgregarVictimaHechoViolentoComponent1750272791541 } from './api-doc-page/Personas/Agregar/AgregarVictimaHechoViolento.component';
import { CrearComponent1750272791543 } from './api-doc-page/Personas/Crear/Crear.component';
import { CrearConyugeComponent1750272791545 } from './api-doc-page/Personas/Crear/CrearConyuge.component';
import { CrearPersonaJuridicaComponent1750272791547 } from './api-doc-page/Personas/Crear/CrearPersonaJuridica.component';
import { CrearReducidoComponent1750272791548 } from './api-doc-page/Personas/Crear/CrearReducido.component';
import { ActualizarDocumentoDigitalComponent1750272791550 } from './api-doc-page/Personas/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750272791551 } from './api-doc-page/Personas/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750272791552 } from './api-doc-page/Personas/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750272791553 } from './api-doc-page/Personas/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750272791554 } from './api-doc-page/Personas/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { EliminarConyugeComponent1750272791556 } from './api-doc-page/Personas/Eliminar/EliminarConyuge.component';
import { EliminarDocumentoAdicionalComponent1750272791558 } from './api-doc-page/Personas/Eliminar/EliminarDocumentoAdicional.component';
import { EliminarDomicilioComponent1750272791559 } from './api-doc-page/Personas/Eliminar/EliminarDomicilio.component';
import { EliminarInformacionAdicionalComponent1750272791560 } from './api-doc-page/Personas/Eliminar/EliminarInformacionAdicional.component';
import { EliminarIntegrantedePersonaJuridicaComponent1750272791561 } from './api-doc-page/Personas/Eliminar/EliminarIntegrantedePersonaJuridica.component';
import { EliminarPersonaVinculadaComponent1750272791562 } from './api-doc-page/Personas/Eliminar/EliminarPersonaVinculada.component';
import { EliminarProfesionComponent1750272791563 } from './api-doc-page/Personas/Eliminar/EliminarProfesion.component';
import { ObtenerComponent1750272791564 } from './api-doc-page/Personas/Obtener/Obtener.component';
import { ObtenerConceptoComponent1750272791565 } from './api-doc-page/Personas/Obtener/ObtenerConcepto.component';
import { ObtenerContactosComponent1750272791566 } from './api-doc-page/Personas/Obtener/ObtenerContactos.component';
import { ObtenerConyugeComponent1750272791570 } from './api-doc-page/Personas/Obtener/ObtenerConyuge.component';
import { ObtenerCorreosElectronicosComponent1750272791567 } from './api-doc-page/Personas/Obtener/ObtenerCorreosElectronicos.component';
import { ObtenerCuentasClienteComponent1750272791569 } from './api-doc-page/Personas/Obtener/ObtenerCuentasCliente.component';
import { ObtenerDatosPEPComponent1750272791571 } from './api-doc-page/Personas/Obtener/ObtenerDatosPEP.component';
import { ObtenerDocumentosAdicionalesComponent1750272791572 } from './api-doc-page/Personas/Obtener/ObtenerDocumentosAdicionales.component';
import { ObtenerDomiciliosComponent1750272791574 } from './api-doc-page/Personas/Obtener/ObtenerDomicilios.component';
import { ObtenerEstadosCivilesComponent1750272791575 } from './api-doc-page/Personas/Obtener/ObtenerEstadosCiviles.component';
import { ObtenerFacultadesComponent1750272791577 } from './api-doc-page/Personas/Obtener/ObtenerFacultades.component';
import { ObtenerFATCAComponent1750272791578 } from './api-doc-page/Personas/Obtener/ObtenerFATCA.component';
import { ObtenerHobbiesComponent1750272791579 } from './api-doc-page/Personas/Obtener/ObtenerHobbies.component';
import { ObtenerHobbyComponent1750272791580 } from './api-doc-page/Personas/Obtener/ObtenerHobby.component';
import { ObtenerIdBantotalComponent1750272791581 } from './api-doc-page/Personas/Obtener/ObtenerIdBantotal.component';
import { ObtenerIdentidadesdeGeneroComponent1750272791582 } from './api-doc-page/Personas/Obtener/ObtenerIdentidadesdeGenero.component';
import { ObtenerIdentificadorUnicoComponent1750272791583 } from './api-doc-page/Personas/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerInformacionAdicionalComponent1750272791584 } from './api-doc-page/Personas/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerInformacionFinancieraComponent1750272791585 } from './api-doc-page/Personas/Obtener/ObtenerInformacionFinanciera.component';
import { ObtenerIntegrantesPersonaJuridicaComponent1750272791586 } from './api-doc-page/Personas/Obtener/ObtenerIntegrantesPersonaJuridica.component';
import { ObtenerLimitesComponent1750272791587 } from './api-doc-page/Personas/Obtener/ObtenerLimites.component';
import { ObtenerNaturalezasJuridicasComponent1750272791588 } from './api-doc-page/Personas/Obtener/ObtenerNaturalezasJuridicas.component';
import { ObtenerNivelesEducativosComponent1750272791590 } from './api-doc-page/Personas/Obtener/ObtenerNivelesEducativos.component';
import { ObtenerOcupacionesComponent1750272791592 } from './api-doc-page/Personas/Obtener/ObtenerOcupaciones.component';
import { ObtenerPersonaJuridicaComponent1750272791593 } from './api-doc-page/Personas/Obtener/ObtenerPersonaJuridica.component';
import { ObtenerPersonasComponent1750272791595 } from './api-doc-page/Personas/Obtener/ObtenerPersonas.component';
import { ObtenerPersonasJuridicasComponent1750272791596 } from './api-doc-page/Personas/Obtener/ObtenerPersonasJuridicas.component';
import { ObtenerPersonasVinculadasComponent1750272791597 } from './api-doc-page/Personas/Obtener/ObtenerPersonasVinculadas.component';
import { ObtenerProfesionComponent1750272791600 } from './api-doc-page/Personas/Obtener/ObtenerProfesion.component';
import { ObtenerProfesionesComponent1750272791598 } from './api-doc-page/Personas/Obtener/ObtenerProfesiones.component';
import { ObtenerReferenciasComponent1750272791601 } from './api-doc-page/Personas/Obtener/ObtenerReferencias.component';
import { ObtenerTarjetasdeDebitoComponent1750272791602 } from './api-doc-page/Personas/Obtener/ObtenerTarjetasdeDebito.component';
import { ObtenerTelefonosComponent1750272791604 } from './api-doc-page/Personas/Obtener/ObtenerTelefonos.component';
import { ObtenerTipodePersonaComponent1750272791605 } from './api-doc-page/Personas/Obtener/ObtenerTipodePersona.component';
import { ObtenerTiposdeDocumentoComponent1750272791608 } from './api-doc-page/Personas/Obtener/ObtenerTiposdeDocumento.component';
import { ObtenerTiposDeFuncionarioPublicoComponent1750272791610 } from './api-doc-page/Personas/Obtener/ObtenerTiposDeFuncionarioPublico.component';
import { ObtenerTiposDePEPComponent1750272791612 } from './api-doc-page/Personas/Obtener/ObtenerTiposDePEP.component';
import { ObtenerTitularesDelTelefonoComponent1750272791613 } from './api-doc-page/Personas/Obtener/ObtenerTitularesDelTelefono.component';
import { ObtenerVictimaHechoViolentoComponent1750272791615 } from './api-doc-page/Personas/Obtener/ObtenerVictimaHechoViolento.component';
import { ObtenerVinculosComponent1750272791616 } from './api-doc-page/Personas/Obtener/ObtenerVinculos.component';
import { ObtenerVinculosdeAfinidadComponent1750272791618 } from './api-doc-page/Personas/Obtener/ObtenerVinculosdeAfinidad.component';
import { ObtenerVinculosdeConsanguinidadComponent1750272791619 } from './api-doc-page/Personas/Obtener/ObtenerVinculosdeConsanguinidad.component';
import { ObtenerVinculosJuridicosComponent1750272791621 } from './api-doc-page/Personas/Obtener/ObtenerVinculosJuridicos.component';
import { EvaluarPAEComponent1750272791624 } from './api-doc-page/Personas/Validar/EvaluarPAE.component';
import { ValidarCorreoElectronicoComponent1750272791626 } from './api-doc-page/Personas/Validar/ValidarCorreoElectronico.component';
import { ValidarDocumentoComponent1750272791628 } from './api-doc-page/Personas/Validar/ValidarDocumento.component';
import { ValidarenListasNegrasComponent1750272791630 } from './api-doc-page/Personas/Validar/ValidarenListasNegras.component';
import { ValidarExistenciaComponent1750272791631 } from './api-doc-page/Personas/Validar/ValidarExistencia.component';
import { ValidarListasInhabilitadosComponent1750272791632 } from './api-doc-page/Personas/Validar/ValidarListasInhabilitados.component';
import { VerificarEmpleadoComponent1750272791634 } from './api-doc-page/Personas/Validar/VerificarEmpleado.component';
import { ConvertirTasaAnualEfectivaaLinealComponent1750272791635 } from './api-doc-page/Precios/Convertir/ConvertirTasaAnualEfectivaaLineal.component';
import { ConvertirTasaAnualLinealaEfectivaComponent1750272791637 } from './api-doc-page/Precios/Convertir/ConvertirTasaAnualLinealaEfectiva.component';
import { ConvertirTasaMensualEfectivaaLinealComponent1750272791639 } from './api-doc-page/Precios/Convertir/ConvertirTasaMensualEfectivaaLineal.component';
import { ConvertirTasaMensualLinealaEfectivaComponent1750272791641 } from './api-doc-page/Precios/Convertir/ConvertirTasaMensualLinealaEfectiva.component';
import { ObtenerCotizacionComponent1750272791643 } from './api-doc-page/Precios/Obtener/ObtenerCotizacion.component';
import { ObtenerCotizacionaFechaComponent1750272791646 } from './api-doc-page/Precios/Obtener/ObtenerCotizacionaFecha.component';
import { ObtenerCotizacionCierreComponent1750272791647 } from './api-doc-page/Precios/Obtener/ObtenerCotizacionCierre.component';
import { ObtenerPizarraEspecialporTransaccionComponent1750272791649 } from './api-doc-page/Precios/Obtener/ObtenerPizarraEspecialporTransaccion.component';
import { ObtenerPrecioaFechaComponent1750272791650 } from './api-doc-page/Precios/Obtener/ObtenerPrecioaFecha.component';
import { ObtenerPrecioEspecieComponent1750272791652 } from './api-doc-page/Precios/Obtener/ObtenerPrecioEspecie.component';
import { ObtenerTasadeOperacionComponent1750272791654 } from './api-doc-page/Precios/Obtener/ObtenerTasadeOperacion.component';
import { ObtenerTasaParaClienteComponent1750272791656 } from './api-doc-page/Precios/Obtener/ObtenerTasaParaCliente.component';
import { ObtenerTasaParaProductoComponent1750272791659 } from './api-doc-page/Precios/Obtener/ObtenerTasaParaProducto.component';
import { ObtenerTipodeCambioComponent1750272791660 } from './api-doc-page/Precios/Obtener/ObtenerTipodeCambio.component';
import { ObtenerTiposDeCambioEspecialesComponent1750272791662 } from './api-doc-page/Precios/Obtener/ObtenerTiposDeCambioEspeciales.component';
import { CancelarComponent1750272791664 } from './api-doc-page/Préstamos/Cancelar/Cancelar.component';
import { CancelaraFechaComponent1750272791665 } from './api-doc-page/Préstamos/Cancelar/CancelaraFecha.component';
import { CancelaraFechaTercerosComponent1750272791667 } from './api-doc-page/Préstamos/Cancelar/CancelaraFechaTerceros.component';
import { CancelarTercerosComponent1750272791669 } from './api-doc-page/Préstamos/Cancelar/CancelarTerceros.component';
import { ContratarComponent1750272791671 } from './api-doc-page/Préstamos/Contratar/Contratar.component';
import { ContratarAmpliacionComponent1750272791674 } from './api-doc-page/Préstamos/Contratar/ContratarAmpliacion.component';
import { ContratarRefinanciacionComponent1750272791676 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacion.component';
import { ContratarRefinanciacionporDeudaTotalComponent1750272791678 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacionporDeudaTotal.component';
import { ContratarRefinanciacionporSaldoCapitalComponent1750272791680 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacionporSaldoCapital.component';
import { ActualizarDocumentoDigitalComponent1750272791681 } from './api-doc-page/Préstamos/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750272791683 } from './api-doc-page/Préstamos/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750272791685 } from './api-doc-page/Préstamos/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750272791686 } from './api-doc-page/Préstamos/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750272791688 } from './api-doc-page/Préstamos/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ObtenerCronogramaComponent1750272791691 } from './api-doc-page/Préstamos/Obtener/ObtenerCronograma.component';
import { ObtenerCronogramaaFechaComponent1750272791694 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaaFecha.component';
import { ObtenerCronogramaconPagosaFechaComponent1750272791695 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaconPagosaFecha.component';
import { ObtenerCronogramaenEspecieComponent1750272791697 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaenEspecie.component';
import { ObtenerCronogramaOriginalComponent1750272791699 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaOriginal.component';
import { ObtenerCuentadeCobroComponent1750272791700 } from './api-doc-page/Préstamos/Obtener/ObtenerCuentadeCobro.component';
import { ObtenerDatosdelProximoVencimientoComponent1750272791702 } from './api-doc-page/Préstamos/Obtener/ObtenerDatosdelProximoVencimiento.component';
import { ObtenerDetalleComponent1750272791704 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalle.component';
import { ObtenerDetalleaFechaComponent1750272791707 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleaFecha.component';
import { ObtenerDetalledeCancelacionTotalComponent1750272791709 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeCancelacionTotal.component';
import { ObtenerDetalledeOfertaComponent1750272791711 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOferta.component';
import { ObtenerDetalledeOfertaAmortizableComponent1750272791713 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOfertaAmortizable.component';
import { ObtenerDetalledeOperacionesaRefinanciarComponent1750272791715 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOperacionesaRefinanciar.component';
import { ObtenerDetalledePrestamoCanceladoComponent1750272791716 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledePrestamoCancelado.component';
import { ObtenerDetallePagoPrestamoComponent1750272791718 } from './api-doc-page/Préstamos/Obtener/ObtenerDetallePagoPrestamo.component';
import { ObtenerDetalleReducidoComponent1750272791720 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleReducido.component';
import { ObtenerDetalleSimulacionComponent1750272791722 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleSimulacion.component';
import { ObtenerDeudaComponent1750272791725 } from './api-doc-page/Préstamos/Obtener/ObtenerDeuda.component';
import { ObtenerDeudaPrestamoCastigadoComponent1750272791727 } from './api-doc-page/Préstamos/Obtener/ObtenerDeudaPrestamoCastigado.component';
import { ObtenerDeudaVencidaComponent1750272791728 } from './api-doc-page/Préstamos/Obtener/ObtenerDeudaVencida.component';
import { ObtenerFechadeIncumplimientoComponent1750272791730 } from './api-doc-page/Préstamos/Obtener/ObtenerFechadeIncumplimiento.component';
import { ObtenerFechadeUltimoPagoComponent1750272791732 } from './api-doc-page/Préstamos/Obtener/ObtenerFechadeUltimoPago.component';
import { ObtenerFechasdePagoComponent1750272791734 } from './api-doc-page/Préstamos/Obtener/ObtenerFechasdePago.component';
import { ObtenerInformacionAdicionalComponent1750272791736 } from './api-doc-page/Préstamos/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerMontodeCancelacionComponent1750272791737 } from './api-doc-page/Préstamos/Obtener/ObtenerMontodeCancelacion.component';
import { ObtenerMotivosPrecancelacionComponent1750272791740 } from './api-doc-page/Préstamos/Obtener/ObtenerMotivosPrecancelacion.component';
import { ObtenerPagosdeCuotaComponent1750272791743 } from './api-doc-page/Préstamos/Obtener/ObtenerPagosdeCuota.component';
import { ObtenerPagosdeunPrestamoComponent1750272791744 } from './api-doc-page/Préstamos/Obtener/ObtenerPagosdeunPrestamo.component';
import { ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750272791746 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1.component';
import { ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750272791748 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1.component';
import { ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750272791751 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1.component';
import { ObtenerProductosComponent1750272791753 } from './api-doc-page/Préstamos/Obtener/ObtenerProductos.component';
import { ObtenerProductosRefinanciacionComponent1750272791756 } from './api-doc-page/Préstamos/Obtener/ObtenerProductosRefinanciacion.component';
import { ObtenerRefinanciacionSimuladaComponent1750272791759 } from './api-doc-page/Préstamos/Obtener/ObtenerRefinanciacionSimulada.component';
import { AbonaraCuentaComponent1750272791761 } from './api-doc-page/Préstamos/Operar/AbonaraCuenta.component';
import { ActualizarInformacionAdicionalComponent1750272791762 } from './api-doc-page/Préstamos/Operar/ActualizarInformacionAdicional.component';
import { ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750272791764 } from './api-doc-page/Préstamos/Operar/ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1.component';
import { AgregarCuentadeCobroComponent1750272791765 } from './api-doc-page/Préstamos/Operar/AgregarCuentadeCobro.component';
import { AgregarInformacionAdicionalComponent1750272791766 } from './api-doc-page/Préstamos/Operar/AgregarInformacionAdicional.component';
import { EliminarCuentadeCobroComponent1750272791768 } from './api-doc-page/Préstamos/Operar/EliminarCuentadeCobro.component';
import { EliminarInformacionAdicionalComponent1750272791769 } from './api-doc-page/Préstamos/Operar/EliminarInformacionAdicional.component';
import { SolicitarPrecancelacionComponent1750272791770 } from './api-doc-page/Préstamos/Operar/SolicitarPrecancelacion.component';
import { AdelantarCapitalConReduccionDeCuotaComponent1750272791772 } from './api-doc-page/Préstamos/Pagar/AdelantarCapitalConReduccionDeCuota.component';
import { AdelantarCapitalConReduccionDePlazoComponent1750272791774 } from './api-doc-page/Préstamos/Pagar/AdelantarCapitalConReduccionDePlazo.component';
import { PagarCuotaComponent1750272791775 } from './api-doc-page/Préstamos/Pagar/PagarCuota.component';
import { PagarCuotaaFechaComponent1750272791776 } from './api-doc-page/Préstamos/Pagar/PagarCuotaaFecha.component';
import { PagarCuotaaFechaTercerosComponent1750272791778 } from './api-doc-page/Préstamos/Pagar/PagarCuotaaFechaTerceros.component';
import { PagarCuotaTercerosComponent1750272791779 } from './api-doc-page/Préstamos/Pagar/PagarCuotaTerceros.component';
import { ResimularAmortizableComponent1750272791781 } from './api-doc-page/Préstamos/Simular/ResimularAmortizable.component';
import { ResimularAmpliacionComponent1750272791783 } from './api-doc-page/Préstamos/Simular/ResimularAmpliacion.component';
import { ResimularRefinanciacionComponent1750272791785 } from './api-doc-page/Préstamos/Simular/ResimularRefinanciacion.component';
import { SimularComponent1750272791787 } from './api-doc-page/Préstamos/Simular/Simular.component';
import { SimularAmortizableComponent1750272791788 } from './api-doc-page/Préstamos/Simular/SimularAmortizable.component';
import { SimularAmortizableSinClienteComponent1750272791792 } from './api-doc-page/Préstamos/Simular/SimularAmortizableSinCliente.component';
import { SimularAmpliacionComponent1750272791794 } from './api-doc-page/Préstamos/Simular/SimularAmpliacion.component';
import { SimularAmpliacionIngresandoSegurosComponent1750272791795 } from './api-doc-page/Préstamos/Simular/SimularAmpliacionIngresandoSeguros.component';
import { SimularDespejandoCapitalyCantidaddeCuotasComponent1750272791796 } from './api-doc-page/Préstamos/Simular/SimularDespejandoCapitalyCantidaddeCuotas.component';
import { SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750272791797 } from './api-doc-page/Préstamos/Simular/SimularDespejandoCapitalyCantidaddeCuotasSinCliente.component';
import { SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750272791799 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyCantidaddeCuotas.component';
import { SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750272791800 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinCliente.component';
import { SimularDespejandoFechadeVencimientoyTasaComponent1750272791802 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyTasa.component';
import { SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750272791803 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyTasaSinCliente.component';
import { SimularIngresandoBalloonComponent1750272791804 } from './api-doc-page/Préstamos/Simular/SimularIngresandoBalloon.component';
import { SimularIngresandoBalloonSinClienteComponent1750272791806 } from './api-doc-page/Préstamos/Simular/SimularIngresandoBalloonSinCliente.component';
import { SimularIngresandoSegurosComponent1750272791809 } from './api-doc-page/Préstamos/Simular/SimularIngresandoSeguros.component';
import { SimularIngresandoSegurosSinClienteComponent1750272791810 } from './api-doc-page/Préstamos/Simular/SimularIngresandoSegurosSinCliente.component';
import { SimularLibreAmortizacionComponent1750272791812 } from './api-doc-page/Préstamos/Simular/SimularLibreAmortizacion.component';
import { SimularLibreAmortizacionSinClienteComponent1750272791813 } from './api-doc-page/Préstamos/Simular/SimularLibreAmortizacionSinCliente.component';
import { SimularOfertasComponent1750272791815 } from './api-doc-page/Préstamos/Simular/SimularOfertas.component';
import { SimularPlazoFijoComponent1750272791816 } from './api-doc-page/Préstamos/Simular/SimularPlazoFijo.component';
import { SimularRefinanciacionComponent1750272791817 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacion.component';
import { SimularRefinanciacionporDeudaTotalComponent1750272791819 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacionporDeudaTotal.component';
import { SimularRefinanciacionporSaldoCapitalComponent1750272791820 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacionporSaldoCapital.component';
import { ActualizarTextosComponent1750272791823 } from './api-doc-page/Préstamos/Textos/ActualizarTextos.component';
import { AgregarTextosComponent1750272791825 } from './api-doc-page/Préstamos/Textos/AgregarTextos.component';
import { EliminarTextosComponent1750272791827 } from './api-doc-page/Préstamos/Textos/EliminarTextos.component';
import { ObtenerTextosComponent1750272791828 } from './api-doc-page/Préstamos/Textos/ObtenerTextos.component';
import { EvaluarRegladeNegocioComponent1750272791831 } from './api-doc-page/Reglas-de-Negocio/EvaluarRegladeNegocio.component';
import { ObtenerReglasdeNegocioComponent1750272791833 } from './api-doc-page/Reglas-de-Negocio/ObtenerReglasdeNegocio.component';
import { ObtenerVariablesReglaComponent1750272791834 } from './api-doc-page/Reglas-de-Negocio/ObtenerVariablesRegla.component';
import { ValidarDatosRegladeNegocioComponent1750272791835 } from './api-doc-page/Reglas-de-Negocio/ValidarDatosRegladeNegocio.component';
import { AutorizarExcepcionComponent1750272791837 } from './api-doc-page/Seguridad/AutorizarExcepcion.component';
import { ObtenerDetalledeExcepcionComponent1750272791838 } from './api-doc-page/Seguridad/ObtenerDetalledeExcepcion.component';
import { ObtenerExcepcionesComponent1750272791841 } from './api-doc-page/Seguridad/ObtenerExcepciones.component';
import { RechazarExcepcionComponent1750272791843 } from './api-doc-page/Seguridad/RechazarExcepcion.component';
import { RegistrarDispositivoComponent1750272791845 } from './api-doc-page/Seguridad/RegistrarDispositivo.component';
import { ContratarSeguroComponent1750272791846 } from './api-doc-page/Seguros-Voluntarios/ContratarSeguro.component';
import { ObtenerMontosDeUnSeguroComponent1750272791847 } from './api-doc-page/Seguros-Voluntarios/ObtenerMontosDeUnSeguro.component';
import { ObtenerSegurosComponent1750272791849 } from './api-doc-page/Seguros-Voluntarios/ObtenerSeguros.component';
import { ObtenerSegurosAPagarComponent1750272791850 } from './api-doc-page/Seguros-Voluntarios/ObtenerSegurosAPagar.component';
import { PagarSeguroComponent1750272791851 } from './api-doc-page/Seguros-Voluntarios/PagarSeguro.component';
import { ObtenerCodigosdeLimitesComponent1750272791860 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCodigosdeLimites.component';
import { ObtenerCuentaPreferencialComponent1750272791853 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentaPreferencial.component';
import { ObtenerCuentasaAsociarComponent1750272791854 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasaAsociar.component';
import { ObtenerCuentasAsociadasComponent1750272791856 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasAsociadas.component';
import { ObtenerCuentasAsociadasPorTipoComponent1750272791859 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasAsociadasPorTipo.component';
import { ObtenerDatosComponent1750272791862 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerDatos.component';
import { ObtenerDatosContactoComponent1750272791863 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerDatosContacto.component';
import { ObtenerIdentificadorUnicoComponent1750272791864 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerLimitesComponent1750272791865 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerLimites.component';
import { ObtenerMovimientosComponent1750272791867 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerMovimientos.component';
import { ObtenerTarjetaComponent1750272791868 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjeta.component';
import { ObtenerTarjetaHabienteComponent1750272791869 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjetaHabiente.component';
import { ObtenerTarjetasAdicionalesComponent1750272791870 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjetasAdicionales.component';
import { ObtenerTiposdeCuentaComponent1750272791872 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTiposdeCuenta.component';
import { ActivarComponent1750272791875 } from './api-doc-page/Tarjetas-de-Débito/Operar/Activar.component';
import { ActualizarCuentaPreferencialComponent1750272791877 } from './api-doc-page/Tarjetas-de-Débito/Operar/ActualizarCuentaPreferencial.component';
import { ActualizarDatosContactoComponent1750272791878 } from './api-doc-page/Tarjetas-de-Débito/Operar/ActualizarDatosContacto.component';
import { AsociarCuentaComponent1750272791879 } from './api-doc-page/Tarjetas-de-Débito/Operar/AsociarCuenta.component';
import { BlanquearPinComponent1750272791881 } from './api-doc-page/Tarjetas-de-Débito/Operar/BlanquearPin.component';
import { BloquearComponent1750272791883 } from './api-doc-page/Tarjetas-de-Débito/Operar/Bloquear.component';
import { BloquearDesdeREDComponent1750272791884 } from './api-doc-page/Tarjetas-de-Débito/Operar/BloquearDesdeRED.component';
import { CrearComponent1750272791885 } from './api-doc-page/Tarjetas-de-Débito/Operar/Crear.component';
import { CrearConCuentasAsociadasComponent1750272791886 } from './api-doc-page/Tarjetas-de-Débito/Operar/CrearConCuentasAsociadas.component';
import { DenunciarComponent1750272791888 } from './api-doc-page/Tarjetas-de-Débito/Operar/Denunciar.component';
import { DenunciarDesdeREDComponent1750272791892 } from './api-doc-page/Tarjetas-de-Débito/Operar/DenunciarDesdeRED.component';
import { DesbloquearComponent1750272791894 } from './api-doc-page/Tarjetas-de-Débito/Operar/Desbloquear.component';
import { DesbloquearDesdeREDComponent1750272791895 } from './api-doc-page/Tarjetas-de-Débito/Operar/DesbloquearDesdeRED.component';
import { EliminarCuentaAsociadaComponent1750272791897 } from './api-doc-page/Tarjetas-de-Débito/Operar/EliminarCuentaAsociada.component';
import { ModificarLimiteComponent1750272791898 } from './api-doc-page/Tarjetas-de-Débito/Operar/ModificarLimite.component';
import { ComprarComponent1750272791899 } from './api-doc-page/Títulos/Comprar.component';
import { ObtenerEstadoCompraComponent1750272791900 } from './api-doc-page/Títulos/ObtenerEstadoCompra.component';
import { ObtenerGruposComponent1750272791902 } from './api-doc-page/Títulos/ObtenerGrupos.component';
import { ObtenerValoresComponent1750272791904 } from './api-doc-page/Títulos/ObtenerValores.component';
import { AgregarPerfilComponent1750272791906 } from './api-doc-page/Usuarios/AgregarPerfil.component';
import { CrearComponent1750272791909 } from './api-doc-page/Usuarios/Crear.component';
import { EliminarPerfilComponent1750272791911 } from './api-doc-page/Usuarios/EliminarPerfil.component';
import { EliminarUsuarioComponent1750272791912 } from './api-doc-page/Usuarios/EliminarUsuario.component';
import { HabilitarEnCanalComponent1750272791914 } from './api-doc-page/Usuarios/HabilitarEnCanal.component';
import { HabilitarUsuarioComponent1750272791916 } from './api-doc-page/Usuarios/HabilitarUsuario.component';
import { InhabilitarUsuarioComponent1750272791917 } from './api-doc-page/Usuarios/InhabilitarUsuario.component';
import { ModificarComponent1750272791918 } from './api-doc-page/Usuarios/Modificar.component';
import { ObtenerComponent1750272791919 } from './api-doc-page/Usuarios/Obtener.component';
import { ObtenerPerfilesComponent1750272791921 } from './api-doc-page/Usuarios/ObtenerPerfiles.component';
import { ObtenerUsuariosComponent1750272791924 } from './api-doc-page/Usuarios/ObtenerUsuarios.component';
import { ObtenerUsuariosParaPerfilComponent1750272791926 } from './api-doc-page/Usuarios/ObtenerUsuariosParaPerfil.component';
import { ObtenerMetadataDeTareaComponent1750272791928 } from './api-doc-page/Workflow/ObtenerMetadataDeTarea.component';
import { ObtenerProcesosHabilitadosComponent1750272791929 } from './api-doc-page/Workflow/ObtenerProcesosHabilitados.component';
import { ObtenerRolesComponent1750272791931 } from './api-doc-page/Workflow/ObtenerRoles.component';
import { ObtenerRolesdeTareaComponent1750272791933 } from './api-doc-page/Workflow/ObtenerRolesdeTarea.component';
import { ObtenerTareasdeProcesoComponent1750272791935 } from './api-doc-page/Workflow/ObtenerTareasdeProceso.component';
//import End page components

@NgModule({
  declarations: [
    //declarations Page components
    ContratarSimulacionComponent1750272790640,
    CrearComponent1750272790647,
    SimularComponent1750272790650,
    ActualizarDocumentoDigitalComponent1750272790653,
    AsociarDocumentoDigitalComponent1750272790656,
    EliminarDocumentoDigitalComponent1750272790659,
    ObtenerDocumentoDigitalComponent1750272790661,
    ObtenerDocumentosDigitalesComponent1750272790664,
    ModificarCuentaDestinoComponent1750272790666,
    ModificarCuentaOrigenComponent1750272790668,
    ModificarFechadeAbonoComponent1750272790670,
    ModificarMetadeAhorroComponent1750272790672,
    ModificarMontodeAbonoComponent1750272790675,
    ObtenerComponent1750272790677,
    ObtenerCronogramaAbonosComponent1750272790680,
    ObtenerCuentasDestinoHabilitadasComponent1750272790682,
    ObtenerCuentasOrigenHabilitadasComponent1750272790683,
    ObtenerEstadodeCuentaComponent1750272790685,
    ObtenerPeriodosHabilitadosComponent1750272790687,
    ObtenerPlazosHabilitadosComponent1750272790689,
    ObtenerProductosComponent1750272790691,
    AnularChequeElectronicoComponent1750272790694,
    AsignarIdaChequeElectronicoComponent1750272790697,
    CrearChequeraElectronicaComponent1750272790699,
    DepositarChequeElectronicodeBancoPropioComponent1750272790700,
    DepositarChequeElectronicodeOtroBancoComponent1750272790702,
    DepositarChequeElectronicoenCustodiaComponent1750272790704,
    EmitirChequeElectronicoComponent1750272790706,
    EmitirChequeElectronicodeChequeraComponent1750272790709,
    HabilitarChequeElectronicoComponent1750272790711,
    CrearAdhesionComponent1750272790713,
    CrearStopDebitComponent1750272790715,
    CrearStopDebitparaAdhesionconImporteComponent1750272790717,
    EliminarStopDebitComponent1750272790719,
    ObtenerAdhesionesComponent1750272790720,
    ObtenerDebitosComponent1750272790722,
    ObtenerEmpresasOriginantesComponent1750272790726,
    ObtenerStopDebitsComponent1750272790728,
    ReversarDebitosComponent1750272790730,
    SolicitarBajadeAdhesionComponent1750272790732,
    AutenticacionComponent1750272790733,
    ObtenerDetalledeEjecucionComponent1750272790735,
    ObtenerDetalledeProcesoComponent1750272790737,
    ObtenerProcesosconErrorComponent1750272790739,
    ObtenerProcesosCriticosComponent1750272790741,
    ObtenerProcesosDiariosComponent1750272790743,
    ObtenerProcesosMensualesComponent1750272790745,
    ObtenerProcesosReprocesablesComponent1750272790747,
    VerificarEstadoServidorComponent1750272790748,
    CalcularFechadeVencimientoComponent1750272790750,
    CalcularFechadeVencimientoenDiasHabilesComponent1750272790752,
    CalcularPlazoComponent1750272790754,
    CalcularPlazoenDiasHabilesComponent1750272790756,
    ObtenerFechaHabilComponent1750272790758,
    ObtenerFechaHabilAnteriorComponent1750272790761,
    ObtenerFechaHabilAnteriordeSucursalComponent1750272790762,
    ObtenerFechaHabildeSucursalComponent1750272790764,
    ObtenerInicioyFindeMesComponent1750272790766,
    ObtenerInicioyFindeMesdeSucursalComponent1750272790767,
    ObtenerProximaFechaHabilComponent1750272790769,
    ObtenerProximaFechaHabildeSucursalComponent1750272790771,
    AutorizarArchivoComponent1750272790773,
    CargarArchivoComponent1750272790775,
    CargarArchivoRecibidoComoDatoComponent1750272790777,
    DetenerArchivoComponent1750272790779,
    RechazarArchivoComponent1750272790781,
    CargarBeneficiariosComponent1750272790783,
    IngresarBeneficiarioComponent1750272790785,
    ObtenerBeneficiarioSegunFiltroComponent1750272790786,
    AltaAutomaticaContratoComponent1750272790788,
    CargarServiciosDisponiblesComponent1750272790791,
    ContratarDebitoAutomaticoComponent1750272790793,
    ObtenerDetalledeOrdendeCuentaComponent1750272790795,
    ObtenerDetalledePagoComponent1750272790796,
    ObtenerDetalleOrdenSegunCampoComponent1750272790798,
    ObtenerDetallePagoOrdenComponent1750272790799,
    ObtenerDeudaComponent1750272790801,
    ObtenerResumenOrdenComponent1750272790803,
    ObtenerServiciosComponent1750272790805,
    ObtenerValoresOrdenComponent1750272790807,
    ObtenerValoresOrdenSegunCampoComponent1750272790809,
    AutorizarOrdenComponent1750272790811,
    DetenerOrdenComponent1750272790813,
    IngresarOrdenPagoComponent1750272790814,
    ProcesarOrdenComponent1750272790816,
    RechazarOrdenComponent1750272790817,
    AnularPagoDeudaComponent1750272790819,
    PagarDeudaDesdeCuentaComponent1750272790820,
    RegistrarPagoDeudaComponent1750272790822,
    RegistrarPagoEnLineaComponent1750272790825,
    RegistrarPagoEnLineaDesdeCuentaComponent1750272790827,
    VisualizarListaResumenCabezalComponent1750272790829,
    VisualizarListaResumenCabezalOrdenComponent1750272790831,
    VisualizarOrdendeArchivoParaCuentaComponent1750272790832,
    VisualizarResultadoProcesamientoComponent1750272790834,
    VisualizarResumenCabezalComponent1750272790836,
    VisualizarSituacionArchivosComponent1750272790838,
    VisualizarSituacionLineasComponent1750272790841,
    CHATComponent1750272790843,
    ActualizarComponent1750272790845,
    ActualizarDocumentoDigitalComponent1750272790846,
    ActualizarDomicilioComponent1750272790848,
    ActualizarInformacionAdicionalComponent1750272790850,
    ActualizarRegistroEmpleadoComponent1750272790851,
    ActualizarTelefonoComponent1750272790853,
    AgregarDomicilioComponent1750272790854,
    AgregarInformacionAdicionalComponent1750272790857,
    AgregarIntegranteComponent1750272790859,
    AgregarTelefonoComponent1750272790861,
    AsociarDocumentoDigitalComponent1750272790863,
    EliminarDocumentoDigitalComponent1750272790864,
    EliminarDomicilioComponent1750272790866,
    EliminarInformacionAdicionalComponent1750272790867,
    EliminarIntegranteComponent1750272790869,
    HabilitarComponent1750272790871,
    InhabilitarComponent1750272790872,
    ModificarEjecutivoComponent1750272790875,
    CrearComponent1750272790877,
    CrearconPersonaExistenteComponent1750272790879,
    CrearParaPersonaJuridicaComponent1750272790881,
    ObtenerComponent1750272790883,
    ObtenerAhorrosProgramadosComponent1750272790884,
    ObtenerBolsillosComponent1750272790886,
    ObtenerClasificacionesInternasComponent1750272790889,
    ObtenerCuentaClienteComponent1750272790891,
    ObtenerCuentasCorrientesSaldoContableComponent1750272790893,
    ObtenerCuentasCorrientesSaldoDisponibleComponent1750272790895,
    ObtenerCuentasdeAhorroSaldoContableComponent1750272790897,
    ObtenerCuentasdeAhorroSaldoDisponibleComponent1750272790898,
    ObtenerDatosComponent1750272790900,
    ObtenerDetallePosicionComponent1750272790902,
    ObtenerDocumentoDigitalComponent1750272790905,
    ObtenerDocumentosDigitalesComponent1750272790908,
    ObtenerDomiciliosComponent1750272790910,
    ObtenerFacultadesComponent1750272790912,
    ObtenerIdentificadorUnicoComponent1750272790914,
    ObtenerInformacionAdicionalComponent1750272790916,
    ObtenerIntegrantesComponent1750272790917,
    ObtenerLimitesComponent1750272790919,
    ObtenerMotivosInhabilitacionComponent1750272790922,
    ObtenerPerfilComponent1750272790924,
    ObtenerPlazosFijosComponent1750272790926,
    ObtenerPlazosFijosCanceladosComponent1750272790928,
    ObtenerPlazosFijosconAvanceComponent1750272790930,
    ObtenerPosicionComponent1750272790932,
    ObtenerPrestamosComponent1750272790934,
    ObtenerPrestamosCanceladosComponent1750272790935,
    ObtenerPrestamosCastigadosComponent1750272790937,
    ObtenerPrestamosconAvanceComponent1750272790940,
    ObtenerResumendeProductosCierredeanoComponent1750272790943,
    ObtenerResumendeProductosSaldosContablesComponent1750272790945,
    ObtenerResumendeProductosSaldosDisponiblesComponent1750272790947,
    ObtenerResumenporProductoaCierreAnoComponent1750272790949,
    ObtenerRiesgodeCreditoComponent1750272790950,
    ObtenerSaldosdeOtrosProductosComponent1750272790952,
    ObtenerSectoresComponent1750272790954,
    ObtenerSegmentosComponent1750272790956,
    ObtenerTarjetasdeDebitoComponent1750272790959,
    ObtenerTelefonosComponent1750272790961,
    ObtenerTiposdeIntegracionComponent1750272790963,
    ObtenerTitularRepresentativoComponent1750272790965,
    ObtenerTitulosComponent1750272790967,
    ValidarExistenciaComponent1750272790968,
    VerificarEmpleadoComponent1750272790970,
    ObtenerAgenciasBancoComponent1750272790972,
    ObtenerBancosComponent1750272790975,
    ObtenerDetalleSucursalComponent1750272790977,
    ObtenerSucursalesPrincipalesComponent1750272790979,
    ObtenerActividadesComponent1750272790981,
    ObtenerActividadesporTipoComponent1750272790983,
    ObtenerEjecutivosComponent1750272790985,
    ObtenerTiposdeActividadComponent1750272790986,
    ObtenerTiposdeTarjetaComponent1750272790988,
    ObtenerImpuestosComponent1750272790991,
    ObtenerTiposdeDocumentoDigitalComponent1750272790994,
    ObtenerEstadosComponent1750272790996,
    ObtenerInstruccionesComponent1750272790998,
    ObtenerPaquetesComponent1750272791001,
    ObtenerTiposdeTextoComponent1750272791003,
    ObtenerCalendariodeSucursalComponent1750272791005,
    ObtenerCalendariosComponent1750272791007,
    ObtenerDetalledeCalendarioComponent1750272791010,
    ObtenerDetalledeCalendariodeSucursalComponent1750272791012,
    ObtenerDolarUSAComponent1750272791014,
    ObtenerEmpresaComponent1750272791016,
    ObtenerFechadeSistemaComponent1750272791017,
    ObtenerMonedaNacionalComponent1750272791019,
    ObtenerMonedasComponent1750272791021,
    ObtenerSucursalesComponent1750272791024,
    ObtenerAgrupadoresDomicilioComponent1750272791026,
    ObtenerBarriosyColoniasComponent1750272791029,
    ObtenerCiudadesyLocalidadesComponent1750272791031,
    ObtenerCodigosdeDomicilioComponent1750272791033,
    ObtenerEstadosProvinciasyDepartamentosComponent1750272791035,
    ObtenerPaisesComponent1750272791037,
    ObtenerTiposdeListasNegrasComponent1750272791039,
    ObtenerTiposdeTelefonoComponent1750272791041,
    ObtenerTiposdeViviendaComponent1750272791043,
    ObtenerPizarraporModuloComponent1750272791045,
    ObtenerPizarrasComponent1750272791047,
    ObtenerMenusComponent1750272791049,
    ObtenerPerfilesComponent1750272791050,
    AgregarTextoAsientoComponent1750272791053,
    AgregarTextoOrdinalComponent1750272791054,
    AnularMovimientoComponent1750272791057,
    ActualizarCondicionImpositivaComponent1750272791059,
    CrearCondicionImpositivaComponent1750272791061,
    ObtenerIdBantotalMovimientoComponent1750272791063,
    ObtenerIdBantotalOperacionComponent1750272791065,
    ObtenerIdBantotalProductoComponent1750272791066,
    ObtenerIdentificadorUnicodeMovimientoComponent1750272791068,
    ObtenerIdentificadorUnicodeOperacionComponent1750272791070,
    ObtenerIdentificadorUnicodeProductoComponent1750272791072,
    ObtenerClientedeunaOperacionComponent1750272791074,
    ObtenerCondicionImpositivaComponent1750272791077,
    ObtenerDetalledeMovimientoComponent1750272791079,
    ObtenerDetalledeOrdinalComponent1750272791081,
    ObtenerIntegrantesdeOperacionComponent1750272791083,
    ObtenerTextosdeMovimientoComponent1750272791084,
    RegistrarAsientoComponent1750272791086,
    RegistrarAsientoFechaValorComponent1750272791088,
    CancelarComponent1750272791091,
    CashInComponent1750272791093,
    CashOutComponent1750272791095,
    ContratarComponent1750272791097,
    ObtenerDatosComponent1750272791098,
    ObtenerMovimientosComponent1750272791100,
    ObtenerProductosComponent1750272791101,
    ObtenerProductosCVComponent1750272791103,
    ObtenerChequeraComponent1750272791105,
    ObtenerChequerasComponent1750272791107,
    ObtenerChequesdeChequeraComponent1750272791109,
    ObtenerComisionChequeraComponent1750272791111,
    ObtenerEstadodeChequeraComponent1750272791112,
    ObtenerSolicitudesdeChequerasComponent1750272791114,
    ObtenerTiposdeChequeraComponent1750272791116,
    ObtenerTiposdeChequeraporProductoComponent1750272791117,
    EliminarChequeraComponent1750272791119,
    RegistrarOrdendeNoPagodeChequeraComponent1750272791121,
    RegistrarOrdendeNoPagodeChequesComponent1750272791123,
    SolicitarChequeraComponent1750272791126,
    ContratarconPeriodicidadComponent1750272791128,
    ContratarProductoComponent1750272791130,
    ContratarProductoconAltadeFacultadesComponent1750272791132,
    ObtenerAcuerdosComponent1750272791133,
    ObtenerDatosComponent1750272791136,
    ObtenerEstadodeCuentaComponent1750272791138,
    ObtenerEvoluciondeSaldosComponent1750272791140,
    ObtenerProductosComponent1750272791143,
    ContratarconPeriodicidadComponent1750272791145,
    ContratarProductoComponent1750272791147,
    ContratarProductoconAltadeFacultadesComponent1750272791149,
    ObtenerDatosComponent1750272791151,
    ObtenerEstadodeCuentaComponent1750272791153,
    ObtenerEvoluciondeSaldosComponent1750272791155,
    ObtenerProductosComponent1750272791158,
    ActualizarBeneficiariosComponent1750272791160,
    ObtenerBeneficiariosComponent1750272791162,
    ActualizarDocumentoDigitalComponent1750272791164,
    AsociarDocumentoDigitalComponent1750272791166,
    EliminarDocumentoDigitalComponent1750272791168,
    ObtenerDocumentoDigitalComponent1750272791169,
    ObtenerDocumentosDigitalesComponent1750272791171,
    ObtenerBolsillosComponent1750272791174,
    ObtenerCBUdeCuentaVistaComponent1750272791176,
    ObtenerCuentaVistadeCBUComponent1750272791178,
    ObtenerDetalleBloqueoComponent1750272791180,
    ObtenerEstadodeCuentaporPeriodoComponent1750272791182,
    ObtenerEstadoDeOperacionComponent1750272791183,
    ObtenerFacultadesComponent1750272791185,
    ObtenerPaqueteComponent1750272791187,
    ObtenerPeriododeAcreditacionComponent1750272791191,
    ObtenerPeriodosdeAcreditacionComponent1750272791189,
    ObtenerSaldoBloqueadoComponent1750272791194,
    ObtenerSaldoDisponibleComponent1750272791196,
    ObtenerSaldosBloqueadosComponent1750272791198,
    AcreditarEnCuentaComponent1750272791199,
    ActivarComponent1750272791202,
    ActualizarPeriododeAcreditacionComponent1750272791204,
    BloquearSaldoComponent1750272791206,
    CancelarComponent1750272791208,
    DebitarEnCuentaComponent1750272791210,
    DesbloquearSaldoComponent1750272791212,
    ActualizarPerfilTransaccionalComponent1750272791214,
    AgregarPerfilTransaccionalComponent1750272791216,
    ObtenerPerfilTransaccionalComponent1750272791218,
    TraspasarConTipoDeCambioEspecialComponent1750272791220,
    TraspasarEntreCuentasdelaMismaPersonaComponent1750272791222,
    TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750272791225,
    TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750272791227,
    TraspasarEntreCuentasPropiasComponent1750272791233,
    TraspasarEntreCuentasPropiascontipodecambioComponent1750272791229,
    TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750272791230,
    TraspasarEntreCuentasTercerosComponent1750272791239,
    TraspasarEntreCuentasTerceroscontipodecambioComponent1750272791235,
    TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750272791237,
    ActualizarBeneficiariosComponent1750272791242,
    ObtenerBeneficiariosComponent1750272791244,
    ContratarComponent1750272791245,
    ContratarConFacultadesComponent1750272791247,
    ContratarSimulacionComponent1750272791249,
    ActualizarDocumentoDigitalComponent1750272791250,
    AsociarDocumentoDigitalComponent1750272791252,
    EliminarDocumentoDigitalComponent1750272791254,
    ObtenerDocumentoDigitalComponent1750272791255,
    ModificarCuentaDestinoalVencimientoComponent1750272791258,
    ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750272791260,
    ModificarInstruccionComponent1750272791261,
    ObtenerAvanceComponent1750272791263,
    ObtenerDatosComponent1750272791264,
    ObtenerDatosPrecancelacionComponent1750272791266,
    ObtenerDocumentosDigitalesComponent1750272791268,
    ObtenerInstruccionComponent1750272791271,
    ObtenerInstruccionesHabilitadosComponent1750272791270,
    ObtenerMovimientosComponent1750272791275,
    ObtenerPeriodosHabilitadosComponent1750272791276,
    ObtenerProductosComponent1750272791278,
    ObtenerProductosHabilitadosComponent1750272791280,
    ObtenerTasadePrecancelacionComponent1750272791281,
    PrecancelarComponent1750272791282,
    SimularComponent1750272791284,
    SimularConCronogramaComponent1750272791286,
    ConfirmarListaComponent1750272791287,
    CrearListaComponent1750272791290,
    CrearListaChequesComponent1750272791292,
    ObtenerProductosComponent1750272791294,
    ObtenerTiposDeDesembolsoComponent1750272791295,
    SeleccionarOpcionDesembolsoComponent1750272791296,
    ObtenerAgrupadoresComponent1750272791298,
    ObtenerCierredeSaldosporMonedaComponent1750272791299,
    ObtenerCondicionesGeneralesComponent1750272791300,
    ObtenerIndicadoresComponent1750272791302,
    ObtenerMetodosMasEjecutadosComponent1750272791304,
    ObtenerMonedasIndicesComponent1750272791305,
    ObtenerRubrosBolsaComponent1750272791308,
    ObtenerServiciosMasEjecutadosComponent1750272791311,
    ObtenerSesionesPorUsuarioComponent1750272791312,
    ObtenerSucursalesCajasComponent1750272791314,
    ObtenerTransaccionesporEstadosComponent1750272791315,
    BuscarClienteComponent1750272791317,
    CompletarTareaComponent1750272791318,
    CrearSolicitudAmpliacionComponent1750272791320,
    CrearSolicitudIndividualComponent1750272791321,
    CrearSolicitudRenovacionComponent1750272791324,
    AgregarFiadorComponent1750272791325,
    EliminarFiadorComponent1750272791327,
    ActualizarGrupoComponent1750272791329,
    ActualizarIntegrantedeGrupoComponent1750272791331,
    AgregarGrupoComponent1750272791332,
    AgregarIntegranteaGrupoComponent1750272791334,
    CrearSolicitudGrupalComponent1750272791335,
    HabilitarIntegrantedeunGrupoComponent1750272791337,
    InhabilitarIntegrantedeunGrupoComponent1750272791339,
    ObtenerDetalleGrupoComponent1750272791341,
    ObtenerGruposComponent1750272791343,
    ObtenerIntegrantesdeGrupoComponent1750272791345,
    ObtenerTiposdeGrupoComponent1750272791346,
    ObtenerTiposdeIntegranteComponent1750272791348,
    SimularPrestamoAmortizableGrupalComponent1750272791350,
    ObtenerAsesoresComponent1750272791352,
    ObtenerCampanasComponent1750272791355,
    ObtenerDestinosCreditoComponent1750272791357,
    ObtenerOperacionesClienteComponent1750272791359,
    ObtenerOrigenesdeCaptacionComponent1750272791361,
    ObtenerProductosComponent1750272791363,
    ObtenerSolicitudesClienteComponent1750272791365,
    ObtenerTiposAvalComponent1750272791366,
    AgregarOperacionesaCancelarComponent1750272791368,
    ObtenerOperacionesaCancelarComponent1750272791370,
    QuitarOperacionesaCancelarComponent1750272791372,
    SimularLibreAmortizacionComponent1750272791375,
    SimularPrestamoAmortizableComponent1750272791377,
    SimularPrestamoPlazoFijoComponent1750272791379,
    ValidarPoliticasComponent1750272791381,
    ObtenerCantidadCuotasComponent1750272791383,
    ObtenerCapitalComponent1750272791384,
    ObtenerComisionesComponent1750272791386,
    ObtenerComisionesporCuotaComponent1750272791388,
    ObtenerDiasPrimerPeriodoComponent1750272791391,
    ObtenerPeriodoEntreCuotasComponent1750272791396,
    ObtenerPermiteSegurosdelMismoTipoComponent1750272791394,
    ObtenerPlazoComponent1750272791397,
    ObtenerRequiereSegurodeVidaObligatorioComponent1750272791399,
    ObtenerSegurosComponent1750272791401,
    ObtenerItemsModeloComponent1750272791403,
    ObtenerModelosPAEComponent1750272791405,
    ObtenerScoresComponent1750272791407,
    ObtenerTiposDeModelosComponent1750272791410,
    ContratarPrestamoComponent1750272791412,
    ContratarVehicularComponent1750272791414,
    CrearClienteComponent1750272791416,
    CrearPersonaClienteComponent1750272791417,
    ObtenerDatosdeUsuarioComponent1750272791420,
    ObtenerDetalledeOfertaAmortizableComponent1750272791422,
    ObtenerDetalleOfertaVehicularComponent1750272791425,
    ObtenerMarcasComponent1750272791428,
    ObtenerModelosComponent1750272791429,
    ObtenerPartnersComponent1750272791431,
    ObtenerPrestamosdeClienteComponent1750272791437,
    ObtenerProductosComponent1750272791434,
    ObtenerProductosdelPartnerComponent1750272791435,
    ObtenerPuntosdeVentaComponent1750272791440,
    ObtenerVendedoresComponent1750272791443,
    ObtenerVersionesComponent1750272791445,
    SimularOfertasComponent1750272791447,
    SimularOfertasVehicularComponent1750272791449,
    SimularPrestamoComponent1750272791451,
    SimularVehicularComponent1750272791454,
    ObtenerCorrelativoGuiaComponent1750272791456,
    ObtenerCorrelativoGuiaEspecialComponent1750272791459,
    ObtenerGuiadeProcesoComponent1750272791462,
    ObtenerGuiaEspecialdeProcesoComponent1750272791464,
    ObtenerOpcionGeneraldeProcesoComponent1750272791467,
    ObtenerOpcionGeneralPorModuloComponent1750272791468,
    ObtenerProgramaParticularComponent1750272791470,
    ActualizarComponent1750272791473,
    ActualizarCelularComponent1750272791475,
    ActualizarContactoComponent1750272791478,
    ActualizarConyugeComponent1750272791481,
    ActualizarCorreoElectronicoComponent1750272791479,
    ActualizarDomicilioComponent1750272791483,
    ActualizarFATCAComponent1750272791485,
    ActualizarInformacionAdicionalComponent1750272791487,
    ActualizarInformacionFinancieraComponent1750272791489,
    ActualizarIntegrantedePersonaJuridicaComponent1750272791491,
    ActualizarPersonaJuridicaComponent1750272791494,
    ActualizarProfesionComponent1750272791495,
    ActualizarReferenciaComponent1750272791497,
    ActualizarRegistroEmpleadoComponent1750272791498,
    ActualizarTelefonoComponent1750272791500,
    ActualizarVictimaHechoViolentoComponent1750272791502,
    ModificarDocumentoAdicionalComponent1750272791504,
    AgregaraListaNegraComponent1750272791505,
    AgregarContactoComponent1750272791508,
    AgregarCorreoElectronicoComponent1750272791511,
    AgregarDatosPEPComponent1750272791514,
    AgregarDocumentoAdicionalComponent1750272791516,
    AgregarDomicilioComponent1750272791520,
    AgregarEstadoFinancieroComponent1750272791524,
    AgregarFATCAComponent1750272791526,
    AgregarInformacionAdicionalComponent1750272791529,
    AgregarInformacionFinancieraComponent1750272791531,
    AgregarIntegranteaPersonaJuridicaComponent1750272791533,
    AgregarPersonaVinculadaComponent1750272791535,
    AgregarReferenciaComponent1750272791536,
    AgregarTelefonoComponent1750272791538,
    AgregarVictimaHechoViolentoComponent1750272791541,
    CrearComponent1750272791543,
    CrearConyugeComponent1750272791545,
    CrearPersonaJuridicaComponent1750272791547,
    CrearReducidoComponent1750272791548,
    ActualizarDocumentoDigitalComponent1750272791550,
    AsociarDocumentoDigitalComponent1750272791551,
    EliminarDocumentoDigitalComponent1750272791552,
    ObtenerDocumentoDigitalComponent1750272791553,
    ObtenerDocumentosDigitalesComponent1750272791554,
    EliminarConyugeComponent1750272791556,
    EliminarDocumentoAdicionalComponent1750272791558,
    EliminarDomicilioComponent1750272791559,
    EliminarInformacionAdicionalComponent1750272791560,
    EliminarIntegrantedePersonaJuridicaComponent1750272791561,
    EliminarPersonaVinculadaComponent1750272791562,
    EliminarProfesionComponent1750272791563,
    ObtenerComponent1750272791564,
    ObtenerConceptoComponent1750272791565,
    ObtenerContactosComponent1750272791566,
    ObtenerConyugeComponent1750272791570,
    ObtenerCorreosElectronicosComponent1750272791567,
    ObtenerCuentasClienteComponent1750272791569,
    ObtenerDatosPEPComponent1750272791571,
    ObtenerDocumentosAdicionalesComponent1750272791572,
    ObtenerDomiciliosComponent1750272791574,
    ObtenerEstadosCivilesComponent1750272791575,
    ObtenerFacultadesComponent1750272791577,
    ObtenerFATCAComponent1750272791578,
    ObtenerHobbiesComponent1750272791579,
    ObtenerHobbyComponent1750272791580,
    ObtenerIdBantotalComponent1750272791581,
    ObtenerIdentidadesdeGeneroComponent1750272791582,
    ObtenerIdentificadorUnicoComponent1750272791583,
    ObtenerInformacionAdicionalComponent1750272791584,
    ObtenerInformacionFinancieraComponent1750272791585,
    ObtenerIntegrantesPersonaJuridicaComponent1750272791586,
    ObtenerLimitesComponent1750272791587,
    ObtenerNaturalezasJuridicasComponent1750272791588,
    ObtenerNivelesEducativosComponent1750272791590,
    ObtenerOcupacionesComponent1750272791592,
    ObtenerPersonaJuridicaComponent1750272791593,
    ObtenerPersonasComponent1750272791595,
    ObtenerPersonasJuridicasComponent1750272791596,
    ObtenerPersonasVinculadasComponent1750272791597,
    ObtenerProfesionComponent1750272791600,
    ObtenerProfesionesComponent1750272791598,
    ObtenerReferenciasComponent1750272791601,
    ObtenerTarjetasdeDebitoComponent1750272791602,
    ObtenerTelefonosComponent1750272791604,
    ObtenerTipodePersonaComponent1750272791605,
    ObtenerTiposdeDocumentoComponent1750272791608,
    ObtenerTiposDeFuncionarioPublicoComponent1750272791610,
    ObtenerTiposDePEPComponent1750272791612,
    ObtenerTitularesDelTelefonoComponent1750272791613,
    ObtenerVictimaHechoViolentoComponent1750272791615,
    ObtenerVinculosComponent1750272791616,
    ObtenerVinculosdeAfinidadComponent1750272791618,
    ObtenerVinculosdeConsanguinidadComponent1750272791619,
    ObtenerVinculosJuridicosComponent1750272791621,
    EvaluarPAEComponent1750272791624,
    ValidarCorreoElectronicoComponent1750272791626,
    ValidarDocumentoComponent1750272791628,
    ValidarenListasNegrasComponent1750272791630,
    ValidarExistenciaComponent1750272791631,
    ValidarListasInhabilitadosComponent1750272791632,
    VerificarEmpleadoComponent1750272791634,
    ConvertirTasaAnualEfectivaaLinealComponent1750272791635,
    ConvertirTasaAnualLinealaEfectivaComponent1750272791637,
    ConvertirTasaMensualEfectivaaLinealComponent1750272791639,
    ConvertirTasaMensualLinealaEfectivaComponent1750272791641,
    ObtenerCotizacionComponent1750272791643,
    ObtenerCotizacionaFechaComponent1750272791646,
    ObtenerCotizacionCierreComponent1750272791647,
    ObtenerPizarraEspecialporTransaccionComponent1750272791649,
    ObtenerPrecioaFechaComponent1750272791650,
    ObtenerPrecioEspecieComponent1750272791652,
    ObtenerTasadeOperacionComponent1750272791654,
    ObtenerTasaParaClienteComponent1750272791656,
    ObtenerTasaParaProductoComponent1750272791659,
    ObtenerTipodeCambioComponent1750272791660,
    ObtenerTiposDeCambioEspecialesComponent1750272791662,
    CancelarComponent1750272791664,
    CancelaraFechaComponent1750272791665,
    CancelaraFechaTercerosComponent1750272791667,
    CancelarTercerosComponent1750272791669,
    ContratarComponent1750272791671,
    ContratarAmpliacionComponent1750272791674,
    ContratarRefinanciacionComponent1750272791676,
    ContratarRefinanciacionporDeudaTotalComponent1750272791678,
    ContratarRefinanciacionporSaldoCapitalComponent1750272791680,
    ActualizarDocumentoDigitalComponent1750272791681,
    AsociarDocumentoDigitalComponent1750272791683,
    EliminarDocumentoDigitalComponent1750272791685,
    ObtenerDocumentoDigitalComponent1750272791686,
    ObtenerDocumentosDigitalesComponent1750272791688,
    ObtenerCronogramaComponent1750272791691,
    ObtenerCronogramaaFechaComponent1750272791694,
    ObtenerCronogramaconPagosaFechaComponent1750272791695,
    ObtenerCronogramaenEspecieComponent1750272791697,
    ObtenerCronogramaOriginalComponent1750272791699,
    ObtenerCuentadeCobroComponent1750272791700,
    ObtenerDatosdelProximoVencimientoComponent1750272791702,
    ObtenerDetalleComponent1750272791704,
    ObtenerDetalleaFechaComponent1750272791707,
    ObtenerDetalledeCancelacionTotalComponent1750272791709,
    ObtenerDetalledeOfertaComponent1750272791711,
    ObtenerDetalledeOfertaAmortizableComponent1750272791713,
    ObtenerDetalledeOperacionesaRefinanciarComponent1750272791715,
    ObtenerDetalledePrestamoCanceladoComponent1750272791716,
    ObtenerDetallePagoPrestamoComponent1750272791718,
    ObtenerDetalleReducidoComponent1750272791720,
    ObtenerDetalleSimulacionComponent1750272791722,
    ObtenerDeudaComponent1750272791725,
    ObtenerDeudaPrestamoCastigadoComponent1750272791727,
    ObtenerDeudaVencidaComponent1750272791728,
    ObtenerFechadeIncumplimientoComponent1750272791730,
    ObtenerFechadeUltimoPagoComponent1750272791732,
    ObtenerFechasdePagoComponent1750272791734,
    ObtenerInformacionAdicionalComponent1750272791736,
    ObtenerMontodeCancelacionComponent1750272791737,
    ObtenerMotivosPrecancelacionComponent1750272791740,
    ObtenerPagosdeCuotaComponent1750272791743,
    ObtenerPagosdeunPrestamoComponent1750272791744,
    ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750272791746,
    ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750272791748,
    ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750272791751,
    ObtenerProductosComponent1750272791753,
    ObtenerProductosRefinanciacionComponent1750272791756,
    ObtenerRefinanciacionSimuladaComponent1750272791759,
    AbonaraCuentaComponent1750272791761,
    ActualizarInformacionAdicionalComponent1750272791762,
    ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750272791764,
    AgregarCuentadeCobroComponent1750272791765,
    AgregarInformacionAdicionalComponent1750272791766,
    EliminarCuentadeCobroComponent1750272791768,
    EliminarInformacionAdicionalComponent1750272791769,
    SolicitarPrecancelacionComponent1750272791770,
    AdelantarCapitalConReduccionDeCuotaComponent1750272791772,
    AdelantarCapitalConReduccionDePlazoComponent1750272791774,
    PagarCuotaComponent1750272791775,
    PagarCuotaaFechaComponent1750272791776,
    PagarCuotaaFechaTercerosComponent1750272791778,
    PagarCuotaTercerosComponent1750272791779,
    ResimularAmortizableComponent1750272791781,
    ResimularAmpliacionComponent1750272791783,
    ResimularRefinanciacionComponent1750272791785,
    SimularComponent1750272791787,
    SimularAmortizableComponent1750272791788,
    SimularAmortizableSinClienteComponent1750272791792,
    SimularAmpliacionComponent1750272791794,
    SimularAmpliacionIngresandoSegurosComponent1750272791795,
    SimularDespejandoCapitalyCantidaddeCuotasComponent1750272791796,
    SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750272791797,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750272791799,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750272791800,
    SimularDespejandoFechadeVencimientoyTasaComponent1750272791802,
    SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750272791803,
    SimularIngresandoBalloonComponent1750272791804,
    SimularIngresandoBalloonSinClienteComponent1750272791806,
    SimularIngresandoSegurosComponent1750272791809,
    SimularIngresandoSegurosSinClienteComponent1750272791810,
    SimularLibreAmortizacionComponent1750272791812,
    SimularLibreAmortizacionSinClienteComponent1750272791813,
    SimularOfertasComponent1750272791815,
    SimularPlazoFijoComponent1750272791816,
    SimularRefinanciacionComponent1750272791817,
    SimularRefinanciacionporDeudaTotalComponent1750272791819,
    SimularRefinanciacionporSaldoCapitalComponent1750272791820,
    ActualizarTextosComponent1750272791823,
    AgregarTextosComponent1750272791825,
    EliminarTextosComponent1750272791827,
    ObtenerTextosComponent1750272791828,
    EvaluarRegladeNegocioComponent1750272791831,
    ObtenerReglasdeNegocioComponent1750272791833,
    ObtenerVariablesReglaComponent1750272791834,
    ValidarDatosRegladeNegocioComponent1750272791835,
    AutorizarExcepcionComponent1750272791837,
    ObtenerDetalledeExcepcionComponent1750272791838,
    ObtenerExcepcionesComponent1750272791841,
    RechazarExcepcionComponent1750272791843,
    RegistrarDispositivoComponent1750272791845,
    ContratarSeguroComponent1750272791846,
    ObtenerMontosDeUnSeguroComponent1750272791847,
    ObtenerSegurosComponent1750272791849,
    ObtenerSegurosAPagarComponent1750272791850,
    PagarSeguroComponent1750272791851,
    ObtenerCodigosdeLimitesComponent1750272791860,
    ObtenerCuentaPreferencialComponent1750272791853,
    ObtenerCuentasaAsociarComponent1750272791854,
    ObtenerCuentasAsociadasComponent1750272791856,
    ObtenerCuentasAsociadasPorTipoComponent1750272791859,
    ObtenerDatosComponent1750272791862,
    ObtenerDatosContactoComponent1750272791863,
    ObtenerIdentificadorUnicoComponent1750272791864,
    ObtenerLimitesComponent1750272791865,
    ObtenerMovimientosComponent1750272791867,
    ObtenerTarjetaComponent1750272791868,
    ObtenerTarjetaHabienteComponent1750272791869,
    ObtenerTarjetasAdicionalesComponent1750272791870,
    ObtenerTiposdeCuentaComponent1750272791872,
    ActivarComponent1750272791875,
    ActualizarCuentaPreferencialComponent1750272791877,
    ActualizarDatosContactoComponent1750272791878,
    AsociarCuentaComponent1750272791879,
    BlanquearPinComponent1750272791881,
    BloquearComponent1750272791883,
    BloquearDesdeREDComponent1750272791884,
    CrearComponent1750272791885,
    CrearConCuentasAsociadasComponent1750272791886,
    DenunciarComponent1750272791888,
    DenunciarDesdeREDComponent1750272791892,
    DesbloquearComponent1750272791894,
    DesbloquearDesdeREDComponent1750272791895,
    EliminarCuentaAsociadaComponent1750272791897,
    ModificarLimiteComponent1750272791898,
    ComprarComponent1750272791899,
    ObtenerEstadoCompraComponent1750272791900,
    ObtenerGruposComponent1750272791902,
    ObtenerValoresComponent1750272791904,
    AgregarPerfilComponent1750272791906,
    CrearComponent1750272791909,
    EliminarPerfilComponent1750272791911,
    EliminarUsuarioComponent1750272791912,
    HabilitarEnCanalComponent1750272791914,
    HabilitarUsuarioComponent1750272791916,
    InhabilitarUsuarioComponent1750272791917,
    ModificarComponent1750272791918,
    ObtenerComponent1750272791919,
    ObtenerPerfilesComponent1750272791921,
    ObtenerUsuariosComponent1750272791924,
    ObtenerUsuariosParaPerfilComponent1750272791926,
    ObtenerMetadataDeTareaComponent1750272791928,
    ObtenerProcesosHabilitadosComponent1750272791929,
    ObtenerRolesComponent1750272791931,
    ObtenerRolesdeTareaComponent1750272791933,
    ObtenerTareasdeProcesoComponent1750272791935,
    //declarations End page components
    FooterSpaceComponent,
    CodeExampleComponent,
    SidebarComponent,
    PageHeaderComponent,
    InfoCardComponent,
    BackendConfigComponent,
    ApiTabsComponent,
    ApiTableComponent,
    PrismHighlightDirective,
    StructuredDataComponent    
  ],
  imports: [
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
    //exports Page components
    ContratarSimulacionComponent1750272790640,
    CrearComponent1750272790647,
    SimularComponent1750272790650,
    ActualizarDocumentoDigitalComponent1750272790653,
    AsociarDocumentoDigitalComponent1750272790656,
    EliminarDocumentoDigitalComponent1750272790659,
    ObtenerDocumentoDigitalComponent1750272790661,
    ObtenerDocumentosDigitalesComponent1750272790664,
    ModificarCuentaDestinoComponent1750272790666,
    ModificarCuentaOrigenComponent1750272790668,
    ModificarFechadeAbonoComponent1750272790670,
    ModificarMetadeAhorroComponent1750272790672,
    ModificarMontodeAbonoComponent1750272790675,
    ObtenerComponent1750272790677,
    ObtenerCronogramaAbonosComponent1750272790680,
    ObtenerCuentasDestinoHabilitadasComponent1750272790682,
    ObtenerCuentasOrigenHabilitadasComponent1750272790683,
    ObtenerEstadodeCuentaComponent1750272790685,
    ObtenerPeriodosHabilitadosComponent1750272790687,
    ObtenerPlazosHabilitadosComponent1750272790689,
    ObtenerProductosComponent1750272790691,
    AnularChequeElectronicoComponent1750272790694,
    AsignarIdaChequeElectronicoComponent1750272790697,
    CrearChequeraElectronicaComponent1750272790699,
    DepositarChequeElectronicodeBancoPropioComponent1750272790700,
    DepositarChequeElectronicodeOtroBancoComponent1750272790702,
    DepositarChequeElectronicoenCustodiaComponent1750272790704,
    EmitirChequeElectronicoComponent1750272790706,
    EmitirChequeElectronicodeChequeraComponent1750272790709,
    HabilitarChequeElectronicoComponent1750272790711,
    CrearAdhesionComponent1750272790713,
    CrearStopDebitComponent1750272790715,
    CrearStopDebitparaAdhesionconImporteComponent1750272790717,
    EliminarStopDebitComponent1750272790719,
    ObtenerAdhesionesComponent1750272790720,
    ObtenerDebitosComponent1750272790722,
    ObtenerEmpresasOriginantesComponent1750272790726,
    ObtenerStopDebitsComponent1750272790728,
    ReversarDebitosComponent1750272790730,
    SolicitarBajadeAdhesionComponent1750272790732,
    AutenticacionComponent1750272790733,
    ObtenerDetalledeEjecucionComponent1750272790735,
    ObtenerDetalledeProcesoComponent1750272790737,
    ObtenerProcesosconErrorComponent1750272790739,
    ObtenerProcesosCriticosComponent1750272790741,
    ObtenerProcesosDiariosComponent1750272790743,
    ObtenerProcesosMensualesComponent1750272790745,
    ObtenerProcesosReprocesablesComponent1750272790747,
    VerificarEstadoServidorComponent1750272790748,
    CalcularFechadeVencimientoComponent1750272790750,
    CalcularFechadeVencimientoenDiasHabilesComponent1750272790752,
    CalcularPlazoComponent1750272790754,
    CalcularPlazoenDiasHabilesComponent1750272790756,
    ObtenerFechaHabilComponent1750272790758,
    ObtenerFechaHabilAnteriorComponent1750272790761,
    ObtenerFechaHabilAnteriordeSucursalComponent1750272790762,
    ObtenerFechaHabildeSucursalComponent1750272790764,
    ObtenerInicioyFindeMesComponent1750272790766,
    ObtenerInicioyFindeMesdeSucursalComponent1750272790767,
    ObtenerProximaFechaHabilComponent1750272790769,
    ObtenerProximaFechaHabildeSucursalComponent1750272790771,
    AutorizarArchivoComponent1750272790773,
    CargarArchivoComponent1750272790775,
    CargarArchivoRecibidoComoDatoComponent1750272790777,
    DetenerArchivoComponent1750272790779,
    RechazarArchivoComponent1750272790781,
    CargarBeneficiariosComponent1750272790783,
    IngresarBeneficiarioComponent1750272790785,
    ObtenerBeneficiarioSegunFiltroComponent1750272790786,
    AltaAutomaticaContratoComponent1750272790788,
    CargarServiciosDisponiblesComponent1750272790791,
    ContratarDebitoAutomaticoComponent1750272790793,
    ObtenerDetalledeOrdendeCuentaComponent1750272790795,
    ObtenerDetalledePagoComponent1750272790796,
    ObtenerDetalleOrdenSegunCampoComponent1750272790798,
    ObtenerDetallePagoOrdenComponent1750272790799,
    ObtenerDeudaComponent1750272790801,
    ObtenerResumenOrdenComponent1750272790803,
    ObtenerServiciosComponent1750272790805,
    ObtenerValoresOrdenComponent1750272790807,
    ObtenerValoresOrdenSegunCampoComponent1750272790809,
    AutorizarOrdenComponent1750272790811,
    DetenerOrdenComponent1750272790813,
    IngresarOrdenPagoComponent1750272790814,
    ProcesarOrdenComponent1750272790816,
    RechazarOrdenComponent1750272790817,
    AnularPagoDeudaComponent1750272790819,
    PagarDeudaDesdeCuentaComponent1750272790820,
    RegistrarPagoDeudaComponent1750272790822,
    RegistrarPagoEnLineaComponent1750272790825,
    RegistrarPagoEnLineaDesdeCuentaComponent1750272790827,
    VisualizarListaResumenCabezalComponent1750272790829,
    VisualizarListaResumenCabezalOrdenComponent1750272790831,
    VisualizarOrdendeArchivoParaCuentaComponent1750272790832,
    VisualizarResultadoProcesamientoComponent1750272790834,
    VisualizarResumenCabezalComponent1750272790836,
    VisualizarSituacionArchivosComponent1750272790838,
    VisualizarSituacionLineasComponent1750272790841,
    CHATComponent1750272790843,
    ActualizarComponent1750272790845,
    ActualizarDocumentoDigitalComponent1750272790846,
    ActualizarDomicilioComponent1750272790848,
    ActualizarInformacionAdicionalComponent1750272790850,
    ActualizarRegistroEmpleadoComponent1750272790851,
    ActualizarTelefonoComponent1750272790853,
    AgregarDomicilioComponent1750272790854,
    AgregarInformacionAdicionalComponent1750272790857,
    AgregarIntegranteComponent1750272790859,
    AgregarTelefonoComponent1750272790861,
    AsociarDocumentoDigitalComponent1750272790863,
    EliminarDocumentoDigitalComponent1750272790864,
    EliminarDomicilioComponent1750272790866,
    EliminarInformacionAdicionalComponent1750272790867,
    EliminarIntegranteComponent1750272790869,
    HabilitarComponent1750272790871,
    InhabilitarComponent1750272790872,
    ModificarEjecutivoComponent1750272790875,
    CrearComponent1750272790877,
    CrearconPersonaExistenteComponent1750272790879,
    CrearParaPersonaJuridicaComponent1750272790881,
    ObtenerComponent1750272790883,
    ObtenerAhorrosProgramadosComponent1750272790884,
    ObtenerBolsillosComponent1750272790886,
    ObtenerClasificacionesInternasComponent1750272790889,
    ObtenerCuentaClienteComponent1750272790891,
    ObtenerCuentasCorrientesSaldoContableComponent1750272790893,
    ObtenerCuentasCorrientesSaldoDisponibleComponent1750272790895,
    ObtenerCuentasdeAhorroSaldoContableComponent1750272790897,
    ObtenerCuentasdeAhorroSaldoDisponibleComponent1750272790898,
    ObtenerDatosComponent1750272790900,
    ObtenerDetallePosicionComponent1750272790902,
    ObtenerDocumentoDigitalComponent1750272790905,
    ObtenerDocumentosDigitalesComponent1750272790908,
    ObtenerDomiciliosComponent1750272790910,
    ObtenerFacultadesComponent1750272790912,
    ObtenerIdentificadorUnicoComponent1750272790914,
    ObtenerInformacionAdicionalComponent1750272790916,
    ObtenerIntegrantesComponent1750272790917,
    ObtenerLimitesComponent1750272790919,
    ObtenerMotivosInhabilitacionComponent1750272790922,
    ObtenerPerfilComponent1750272790924,
    ObtenerPlazosFijosComponent1750272790926,
    ObtenerPlazosFijosCanceladosComponent1750272790928,
    ObtenerPlazosFijosconAvanceComponent1750272790930,
    ObtenerPosicionComponent1750272790932,
    ObtenerPrestamosComponent1750272790934,
    ObtenerPrestamosCanceladosComponent1750272790935,
    ObtenerPrestamosCastigadosComponent1750272790937,
    ObtenerPrestamosconAvanceComponent1750272790940,
    ObtenerResumendeProductosCierredeanoComponent1750272790943,
    ObtenerResumendeProductosSaldosContablesComponent1750272790945,
    ObtenerResumendeProductosSaldosDisponiblesComponent1750272790947,
    ObtenerResumenporProductoaCierreAnoComponent1750272790949,
    ObtenerRiesgodeCreditoComponent1750272790950,
    ObtenerSaldosdeOtrosProductosComponent1750272790952,
    ObtenerSectoresComponent1750272790954,
    ObtenerSegmentosComponent1750272790956,
    ObtenerTarjetasdeDebitoComponent1750272790959,
    ObtenerTelefonosComponent1750272790961,
    ObtenerTiposdeIntegracionComponent1750272790963,
    ObtenerTitularRepresentativoComponent1750272790965,
    ObtenerTitulosComponent1750272790967,
    ValidarExistenciaComponent1750272790968,
    VerificarEmpleadoComponent1750272790970,
    ObtenerAgenciasBancoComponent1750272790972,
    ObtenerBancosComponent1750272790975,
    ObtenerDetalleSucursalComponent1750272790977,
    ObtenerSucursalesPrincipalesComponent1750272790979,
    ObtenerActividadesComponent1750272790981,
    ObtenerActividadesporTipoComponent1750272790983,
    ObtenerEjecutivosComponent1750272790985,
    ObtenerTiposdeActividadComponent1750272790986,
    ObtenerTiposdeTarjetaComponent1750272790988,
    ObtenerImpuestosComponent1750272790991,
    ObtenerTiposdeDocumentoDigitalComponent1750272790994,
    ObtenerEstadosComponent1750272790996,
    ObtenerInstruccionesComponent1750272790998,
    ObtenerPaquetesComponent1750272791001,
    ObtenerTiposdeTextoComponent1750272791003,
    ObtenerCalendariodeSucursalComponent1750272791005,
    ObtenerCalendariosComponent1750272791007,
    ObtenerDetalledeCalendarioComponent1750272791010,
    ObtenerDetalledeCalendariodeSucursalComponent1750272791012,
    ObtenerDolarUSAComponent1750272791014,
    ObtenerEmpresaComponent1750272791016,
    ObtenerFechadeSistemaComponent1750272791017,
    ObtenerMonedaNacionalComponent1750272791019,
    ObtenerMonedasComponent1750272791021,
    ObtenerSucursalesComponent1750272791024,
    ObtenerAgrupadoresDomicilioComponent1750272791026,
    ObtenerBarriosyColoniasComponent1750272791029,
    ObtenerCiudadesyLocalidadesComponent1750272791031,
    ObtenerCodigosdeDomicilioComponent1750272791033,
    ObtenerEstadosProvinciasyDepartamentosComponent1750272791035,
    ObtenerPaisesComponent1750272791037,
    ObtenerTiposdeListasNegrasComponent1750272791039,
    ObtenerTiposdeTelefonoComponent1750272791041,
    ObtenerTiposdeViviendaComponent1750272791043,
    ObtenerPizarraporModuloComponent1750272791045,
    ObtenerPizarrasComponent1750272791047,
    ObtenerMenusComponent1750272791049,
    ObtenerPerfilesComponent1750272791050,
    AgregarTextoAsientoComponent1750272791053,
    AgregarTextoOrdinalComponent1750272791054,
    AnularMovimientoComponent1750272791057,
    ActualizarCondicionImpositivaComponent1750272791059,
    CrearCondicionImpositivaComponent1750272791061,
    ObtenerIdBantotalMovimientoComponent1750272791063,
    ObtenerIdBantotalOperacionComponent1750272791065,
    ObtenerIdBantotalProductoComponent1750272791066,
    ObtenerIdentificadorUnicodeMovimientoComponent1750272791068,
    ObtenerIdentificadorUnicodeOperacionComponent1750272791070,
    ObtenerIdentificadorUnicodeProductoComponent1750272791072,
    ObtenerClientedeunaOperacionComponent1750272791074,
    ObtenerCondicionImpositivaComponent1750272791077,
    ObtenerDetalledeMovimientoComponent1750272791079,
    ObtenerDetalledeOrdinalComponent1750272791081,
    ObtenerIntegrantesdeOperacionComponent1750272791083,
    ObtenerTextosdeMovimientoComponent1750272791084,
    RegistrarAsientoComponent1750272791086,
    RegistrarAsientoFechaValorComponent1750272791088,
    CancelarComponent1750272791091,
    CashInComponent1750272791093,
    CashOutComponent1750272791095,
    ContratarComponent1750272791097,
    ObtenerDatosComponent1750272791098,
    ObtenerMovimientosComponent1750272791100,
    ObtenerProductosComponent1750272791101,
    ObtenerProductosCVComponent1750272791103,
    ObtenerChequeraComponent1750272791105,
    ObtenerChequerasComponent1750272791107,
    ObtenerChequesdeChequeraComponent1750272791109,
    ObtenerComisionChequeraComponent1750272791111,
    ObtenerEstadodeChequeraComponent1750272791112,
    ObtenerSolicitudesdeChequerasComponent1750272791114,
    ObtenerTiposdeChequeraComponent1750272791116,
    ObtenerTiposdeChequeraporProductoComponent1750272791117,
    EliminarChequeraComponent1750272791119,
    RegistrarOrdendeNoPagodeChequeraComponent1750272791121,
    RegistrarOrdendeNoPagodeChequesComponent1750272791123,
    SolicitarChequeraComponent1750272791126,
    ContratarconPeriodicidadComponent1750272791128,
    ContratarProductoComponent1750272791130,
    ContratarProductoconAltadeFacultadesComponent1750272791132,
    ObtenerAcuerdosComponent1750272791133,
    ObtenerDatosComponent1750272791136,
    ObtenerEstadodeCuentaComponent1750272791138,
    ObtenerEvoluciondeSaldosComponent1750272791140,
    ObtenerProductosComponent1750272791143,
    ContratarconPeriodicidadComponent1750272791145,
    ContratarProductoComponent1750272791147,
    ContratarProductoconAltadeFacultadesComponent1750272791149,
    ObtenerDatosComponent1750272791151,
    ObtenerEstadodeCuentaComponent1750272791153,
    ObtenerEvoluciondeSaldosComponent1750272791155,
    ObtenerProductosComponent1750272791158,
    ActualizarBeneficiariosComponent1750272791160,
    ObtenerBeneficiariosComponent1750272791162,
    ActualizarDocumentoDigitalComponent1750272791164,
    AsociarDocumentoDigitalComponent1750272791166,
    EliminarDocumentoDigitalComponent1750272791168,
    ObtenerDocumentoDigitalComponent1750272791169,
    ObtenerDocumentosDigitalesComponent1750272791171,
    ObtenerBolsillosComponent1750272791174,
    ObtenerCBUdeCuentaVistaComponent1750272791176,
    ObtenerCuentaVistadeCBUComponent1750272791178,
    ObtenerDetalleBloqueoComponent1750272791180,
    ObtenerEstadodeCuentaporPeriodoComponent1750272791182,
    ObtenerEstadoDeOperacionComponent1750272791183,
    ObtenerFacultadesComponent1750272791185,
    ObtenerPaqueteComponent1750272791187,
    ObtenerPeriododeAcreditacionComponent1750272791191,
    ObtenerPeriodosdeAcreditacionComponent1750272791189,
    ObtenerSaldoBloqueadoComponent1750272791194,
    ObtenerSaldoDisponibleComponent1750272791196,
    ObtenerSaldosBloqueadosComponent1750272791198,
    AcreditarEnCuentaComponent1750272791199,
    ActivarComponent1750272791202,
    ActualizarPeriododeAcreditacionComponent1750272791204,
    BloquearSaldoComponent1750272791206,
    CancelarComponent1750272791208,
    DebitarEnCuentaComponent1750272791210,
    DesbloquearSaldoComponent1750272791212,
    ActualizarPerfilTransaccionalComponent1750272791214,
    AgregarPerfilTransaccionalComponent1750272791216,
    ObtenerPerfilTransaccionalComponent1750272791218,
    TraspasarConTipoDeCambioEspecialComponent1750272791220,
    TraspasarEntreCuentasdelaMismaPersonaComponent1750272791222,
    TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750272791225,
    TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750272791227,
    TraspasarEntreCuentasPropiasComponent1750272791233,
    TraspasarEntreCuentasPropiascontipodecambioComponent1750272791229,
    TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750272791230,
    TraspasarEntreCuentasTercerosComponent1750272791239,
    TraspasarEntreCuentasTerceroscontipodecambioComponent1750272791235,
    TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750272791237,
    ActualizarBeneficiariosComponent1750272791242,
    ObtenerBeneficiariosComponent1750272791244,
    ContratarComponent1750272791245,
    ContratarConFacultadesComponent1750272791247,
    ContratarSimulacionComponent1750272791249,
    ActualizarDocumentoDigitalComponent1750272791250,
    AsociarDocumentoDigitalComponent1750272791252,
    EliminarDocumentoDigitalComponent1750272791254,
    ObtenerDocumentoDigitalComponent1750272791255,
    ModificarCuentaDestinoalVencimientoComponent1750272791258,
    ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750272791260,
    ModificarInstruccionComponent1750272791261,
    ObtenerAvanceComponent1750272791263,
    ObtenerDatosComponent1750272791264,
    ObtenerDatosPrecancelacionComponent1750272791266,
    ObtenerDocumentosDigitalesComponent1750272791268,
    ObtenerInstruccionComponent1750272791271,
    ObtenerInstruccionesHabilitadosComponent1750272791270,
    ObtenerMovimientosComponent1750272791275,
    ObtenerPeriodosHabilitadosComponent1750272791276,
    ObtenerProductosComponent1750272791278,
    ObtenerProductosHabilitadosComponent1750272791280,
    ObtenerTasadePrecancelacionComponent1750272791281,
    PrecancelarComponent1750272791282,
    SimularComponent1750272791284,
    SimularConCronogramaComponent1750272791286,
    ConfirmarListaComponent1750272791287,
    CrearListaComponent1750272791290,
    CrearListaChequesComponent1750272791292,
    ObtenerProductosComponent1750272791294,
    ObtenerTiposDeDesembolsoComponent1750272791295,
    SeleccionarOpcionDesembolsoComponent1750272791296,
    ObtenerAgrupadoresComponent1750272791298,
    ObtenerCierredeSaldosporMonedaComponent1750272791299,
    ObtenerCondicionesGeneralesComponent1750272791300,
    ObtenerIndicadoresComponent1750272791302,
    ObtenerMetodosMasEjecutadosComponent1750272791304,
    ObtenerMonedasIndicesComponent1750272791305,
    ObtenerRubrosBolsaComponent1750272791308,
    ObtenerServiciosMasEjecutadosComponent1750272791311,
    ObtenerSesionesPorUsuarioComponent1750272791312,
    ObtenerSucursalesCajasComponent1750272791314,
    ObtenerTransaccionesporEstadosComponent1750272791315,
    BuscarClienteComponent1750272791317,
    CompletarTareaComponent1750272791318,
    CrearSolicitudAmpliacionComponent1750272791320,
    CrearSolicitudIndividualComponent1750272791321,
    CrearSolicitudRenovacionComponent1750272791324,
    AgregarFiadorComponent1750272791325,
    EliminarFiadorComponent1750272791327,
    ActualizarGrupoComponent1750272791329,
    ActualizarIntegrantedeGrupoComponent1750272791331,
    AgregarGrupoComponent1750272791332,
    AgregarIntegranteaGrupoComponent1750272791334,
    CrearSolicitudGrupalComponent1750272791335,
    HabilitarIntegrantedeunGrupoComponent1750272791337,
    InhabilitarIntegrantedeunGrupoComponent1750272791339,
    ObtenerDetalleGrupoComponent1750272791341,
    ObtenerGruposComponent1750272791343,
    ObtenerIntegrantesdeGrupoComponent1750272791345,
    ObtenerTiposdeGrupoComponent1750272791346,
    ObtenerTiposdeIntegranteComponent1750272791348,
    SimularPrestamoAmortizableGrupalComponent1750272791350,
    ObtenerAsesoresComponent1750272791352,
    ObtenerCampanasComponent1750272791355,
    ObtenerDestinosCreditoComponent1750272791357,
    ObtenerOperacionesClienteComponent1750272791359,
    ObtenerOrigenesdeCaptacionComponent1750272791361,
    ObtenerProductosComponent1750272791363,
    ObtenerSolicitudesClienteComponent1750272791365,
    ObtenerTiposAvalComponent1750272791366,
    AgregarOperacionesaCancelarComponent1750272791368,
    ObtenerOperacionesaCancelarComponent1750272791370,
    QuitarOperacionesaCancelarComponent1750272791372,
    SimularLibreAmortizacionComponent1750272791375,
    SimularPrestamoAmortizableComponent1750272791377,
    SimularPrestamoPlazoFijoComponent1750272791379,
    ValidarPoliticasComponent1750272791381,
    ObtenerCantidadCuotasComponent1750272791383,
    ObtenerCapitalComponent1750272791384,
    ObtenerComisionesComponent1750272791386,
    ObtenerComisionesporCuotaComponent1750272791388,
    ObtenerDiasPrimerPeriodoComponent1750272791391,
    ObtenerPeriodoEntreCuotasComponent1750272791396,
    ObtenerPermiteSegurosdelMismoTipoComponent1750272791394,
    ObtenerPlazoComponent1750272791397,
    ObtenerRequiereSegurodeVidaObligatorioComponent1750272791399,
    ObtenerSegurosComponent1750272791401,
    ObtenerItemsModeloComponent1750272791403,
    ObtenerModelosPAEComponent1750272791405,
    ObtenerScoresComponent1750272791407,
    ObtenerTiposDeModelosComponent1750272791410,
    ContratarPrestamoComponent1750272791412,
    ContratarVehicularComponent1750272791414,
    CrearClienteComponent1750272791416,
    CrearPersonaClienteComponent1750272791417,
    ObtenerDatosdeUsuarioComponent1750272791420,
    ObtenerDetalledeOfertaAmortizableComponent1750272791422,
    ObtenerDetalleOfertaVehicularComponent1750272791425,
    ObtenerMarcasComponent1750272791428,
    ObtenerModelosComponent1750272791429,
    ObtenerPartnersComponent1750272791431,
    ObtenerPrestamosdeClienteComponent1750272791437,
    ObtenerProductosComponent1750272791434,
    ObtenerProductosdelPartnerComponent1750272791435,
    ObtenerPuntosdeVentaComponent1750272791440,
    ObtenerVendedoresComponent1750272791443,
    ObtenerVersionesComponent1750272791445,
    SimularOfertasComponent1750272791447,
    SimularOfertasVehicularComponent1750272791449,
    SimularPrestamoComponent1750272791451,
    SimularVehicularComponent1750272791454,
    ObtenerCorrelativoGuiaComponent1750272791456,
    ObtenerCorrelativoGuiaEspecialComponent1750272791459,
    ObtenerGuiadeProcesoComponent1750272791462,
    ObtenerGuiaEspecialdeProcesoComponent1750272791464,
    ObtenerOpcionGeneraldeProcesoComponent1750272791467,
    ObtenerOpcionGeneralPorModuloComponent1750272791468,
    ObtenerProgramaParticularComponent1750272791470,
    ActualizarComponent1750272791473,
    ActualizarCelularComponent1750272791475,
    ActualizarContactoComponent1750272791478,
    ActualizarConyugeComponent1750272791481,
    ActualizarCorreoElectronicoComponent1750272791479,
    ActualizarDomicilioComponent1750272791483,
    ActualizarFATCAComponent1750272791485,
    ActualizarInformacionAdicionalComponent1750272791487,
    ActualizarInformacionFinancieraComponent1750272791489,
    ActualizarIntegrantedePersonaJuridicaComponent1750272791491,
    ActualizarPersonaJuridicaComponent1750272791494,
    ActualizarProfesionComponent1750272791495,
    ActualizarReferenciaComponent1750272791497,
    ActualizarRegistroEmpleadoComponent1750272791498,
    ActualizarTelefonoComponent1750272791500,
    ActualizarVictimaHechoViolentoComponent1750272791502,
    ModificarDocumentoAdicionalComponent1750272791504,
    AgregaraListaNegraComponent1750272791505,
    AgregarContactoComponent1750272791508,
    AgregarCorreoElectronicoComponent1750272791511,
    AgregarDatosPEPComponent1750272791514,
    AgregarDocumentoAdicionalComponent1750272791516,
    AgregarDomicilioComponent1750272791520,
    AgregarEstadoFinancieroComponent1750272791524,
    AgregarFATCAComponent1750272791526,
    AgregarInformacionAdicionalComponent1750272791529,
    AgregarInformacionFinancieraComponent1750272791531,
    AgregarIntegranteaPersonaJuridicaComponent1750272791533,
    AgregarPersonaVinculadaComponent1750272791535,
    AgregarReferenciaComponent1750272791536,
    AgregarTelefonoComponent1750272791538,
    AgregarVictimaHechoViolentoComponent1750272791541,
    CrearComponent1750272791543,
    CrearConyugeComponent1750272791545,
    CrearPersonaJuridicaComponent1750272791547,
    CrearReducidoComponent1750272791548,
    ActualizarDocumentoDigitalComponent1750272791550,
    AsociarDocumentoDigitalComponent1750272791551,
    EliminarDocumentoDigitalComponent1750272791552,
    ObtenerDocumentoDigitalComponent1750272791553,
    ObtenerDocumentosDigitalesComponent1750272791554,
    EliminarConyugeComponent1750272791556,
    EliminarDocumentoAdicionalComponent1750272791558,
    EliminarDomicilioComponent1750272791559,
    EliminarInformacionAdicionalComponent1750272791560,
    EliminarIntegrantedePersonaJuridicaComponent1750272791561,
    EliminarPersonaVinculadaComponent1750272791562,
    EliminarProfesionComponent1750272791563,
    ObtenerComponent1750272791564,
    ObtenerConceptoComponent1750272791565,
    ObtenerContactosComponent1750272791566,
    ObtenerConyugeComponent1750272791570,
    ObtenerCorreosElectronicosComponent1750272791567,
    ObtenerCuentasClienteComponent1750272791569,
    ObtenerDatosPEPComponent1750272791571,
    ObtenerDocumentosAdicionalesComponent1750272791572,
    ObtenerDomiciliosComponent1750272791574,
    ObtenerEstadosCivilesComponent1750272791575,
    ObtenerFacultadesComponent1750272791577,
    ObtenerFATCAComponent1750272791578,
    ObtenerHobbiesComponent1750272791579,
    ObtenerHobbyComponent1750272791580,
    ObtenerIdBantotalComponent1750272791581,
    ObtenerIdentidadesdeGeneroComponent1750272791582,
    ObtenerIdentificadorUnicoComponent1750272791583,
    ObtenerInformacionAdicionalComponent1750272791584,
    ObtenerInformacionFinancieraComponent1750272791585,
    ObtenerIntegrantesPersonaJuridicaComponent1750272791586,
    ObtenerLimitesComponent1750272791587,
    ObtenerNaturalezasJuridicasComponent1750272791588,
    ObtenerNivelesEducativosComponent1750272791590,
    ObtenerOcupacionesComponent1750272791592,
    ObtenerPersonaJuridicaComponent1750272791593,
    ObtenerPersonasComponent1750272791595,
    ObtenerPersonasJuridicasComponent1750272791596,
    ObtenerPersonasVinculadasComponent1750272791597,
    ObtenerProfesionComponent1750272791600,
    ObtenerProfesionesComponent1750272791598,
    ObtenerReferenciasComponent1750272791601,
    ObtenerTarjetasdeDebitoComponent1750272791602,
    ObtenerTelefonosComponent1750272791604,
    ObtenerTipodePersonaComponent1750272791605,
    ObtenerTiposdeDocumentoComponent1750272791608,
    ObtenerTiposDeFuncionarioPublicoComponent1750272791610,
    ObtenerTiposDePEPComponent1750272791612,
    ObtenerTitularesDelTelefonoComponent1750272791613,
    ObtenerVictimaHechoViolentoComponent1750272791615,
    ObtenerVinculosComponent1750272791616,
    ObtenerVinculosdeAfinidadComponent1750272791618,
    ObtenerVinculosdeConsanguinidadComponent1750272791619,
    ObtenerVinculosJuridicosComponent1750272791621,
    EvaluarPAEComponent1750272791624,
    ValidarCorreoElectronicoComponent1750272791626,
    ValidarDocumentoComponent1750272791628,
    ValidarenListasNegrasComponent1750272791630,
    ValidarExistenciaComponent1750272791631,
    ValidarListasInhabilitadosComponent1750272791632,
    VerificarEmpleadoComponent1750272791634,
    ConvertirTasaAnualEfectivaaLinealComponent1750272791635,
    ConvertirTasaAnualLinealaEfectivaComponent1750272791637,
    ConvertirTasaMensualEfectivaaLinealComponent1750272791639,
    ConvertirTasaMensualLinealaEfectivaComponent1750272791641,
    ObtenerCotizacionComponent1750272791643,
    ObtenerCotizacionaFechaComponent1750272791646,
    ObtenerCotizacionCierreComponent1750272791647,
    ObtenerPizarraEspecialporTransaccionComponent1750272791649,
    ObtenerPrecioaFechaComponent1750272791650,
    ObtenerPrecioEspecieComponent1750272791652,
    ObtenerTasadeOperacionComponent1750272791654,
    ObtenerTasaParaClienteComponent1750272791656,
    ObtenerTasaParaProductoComponent1750272791659,
    ObtenerTipodeCambioComponent1750272791660,
    ObtenerTiposDeCambioEspecialesComponent1750272791662,
    CancelarComponent1750272791664,
    CancelaraFechaComponent1750272791665,
    CancelaraFechaTercerosComponent1750272791667,
    CancelarTercerosComponent1750272791669,
    ContratarComponent1750272791671,
    ContratarAmpliacionComponent1750272791674,
    ContratarRefinanciacionComponent1750272791676,
    ContratarRefinanciacionporDeudaTotalComponent1750272791678,
    ContratarRefinanciacionporSaldoCapitalComponent1750272791680,
    ActualizarDocumentoDigitalComponent1750272791681,
    AsociarDocumentoDigitalComponent1750272791683,
    EliminarDocumentoDigitalComponent1750272791685,
    ObtenerDocumentoDigitalComponent1750272791686,
    ObtenerDocumentosDigitalesComponent1750272791688,
    ObtenerCronogramaComponent1750272791691,
    ObtenerCronogramaaFechaComponent1750272791694,
    ObtenerCronogramaconPagosaFechaComponent1750272791695,
    ObtenerCronogramaenEspecieComponent1750272791697,
    ObtenerCronogramaOriginalComponent1750272791699,
    ObtenerCuentadeCobroComponent1750272791700,
    ObtenerDatosdelProximoVencimientoComponent1750272791702,
    ObtenerDetalleComponent1750272791704,
    ObtenerDetalleaFechaComponent1750272791707,
    ObtenerDetalledeCancelacionTotalComponent1750272791709,
    ObtenerDetalledeOfertaComponent1750272791711,
    ObtenerDetalledeOfertaAmortizableComponent1750272791713,
    ObtenerDetalledeOperacionesaRefinanciarComponent1750272791715,
    ObtenerDetalledePrestamoCanceladoComponent1750272791716,
    ObtenerDetallePagoPrestamoComponent1750272791718,
    ObtenerDetalleReducidoComponent1750272791720,
    ObtenerDetalleSimulacionComponent1750272791722,
    ObtenerDeudaComponent1750272791725,
    ObtenerDeudaPrestamoCastigadoComponent1750272791727,
    ObtenerDeudaVencidaComponent1750272791728,
    ObtenerFechadeIncumplimientoComponent1750272791730,
    ObtenerFechadeUltimoPagoComponent1750272791732,
    ObtenerFechasdePagoComponent1750272791734,
    ObtenerInformacionAdicionalComponent1750272791736,
    ObtenerMontodeCancelacionComponent1750272791737,
    ObtenerMotivosPrecancelacionComponent1750272791740,
    ObtenerPagosdeCuotaComponent1750272791743,
    ObtenerPagosdeunPrestamoComponent1750272791744,
    ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750272791746,
    ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750272791748,
    ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750272791751,
    ObtenerProductosComponent1750272791753,
    ObtenerProductosRefinanciacionComponent1750272791756,
    ObtenerRefinanciacionSimuladaComponent1750272791759,
    AbonaraCuentaComponent1750272791761,
    ActualizarInformacionAdicionalComponent1750272791762,
    ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750272791764,
    AgregarCuentadeCobroComponent1750272791765,
    AgregarInformacionAdicionalComponent1750272791766,
    EliminarCuentadeCobroComponent1750272791768,
    EliminarInformacionAdicionalComponent1750272791769,
    SolicitarPrecancelacionComponent1750272791770,
    AdelantarCapitalConReduccionDeCuotaComponent1750272791772,
    AdelantarCapitalConReduccionDePlazoComponent1750272791774,
    PagarCuotaComponent1750272791775,
    PagarCuotaaFechaComponent1750272791776,
    PagarCuotaaFechaTercerosComponent1750272791778,
    PagarCuotaTercerosComponent1750272791779,
    ResimularAmortizableComponent1750272791781,
    ResimularAmpliacionComponent1750272791783,
    ResimularRefinanciacionComponent1750272791785,
    SimularComponent1750272791787,
    SimularAmortizableComponent1750272791788,
    SimularAmortizableSinClienteComponent1750272791792,
    SimularAmpliacionComponent1750272791794,
    SimularAmpliacionIngresandoSegurosComponent1750272791795,
    SimularDespejandoCapitalyCantidaddeCuotasComponent1750272791796,
    SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750272791797,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750272791799,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750272791800,
    SimularDespejandoFechadeVencimientoyTasaComponent1750272791802,
    SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750272791803,
    SimularIngresandoBalloonComponent1750272791804,
    SimularIngresandoBalloonSinClienteComponent1750272791806,
    SimularIngresandoSegurosComponent1750272791809,
    SimularIngresandoSegurosSinClienteComponent1750272791810,
    SimularLibreAmortizacionComponent1750272791812,
    SimularLibreAmortizacionSinClienteComponent1750272791813,
    SimularOfertasComponent1750272791815,
    SimularPlazoFijoComponent1750272791816,
    SimularRefinanciacionComponent1750272791817,
    SimularRefinanciacionporDeudaTotalComponent1750272791819,
    SimularRefinanciacionporSaldoCapitalComponent1750272791820,
    ActualizarTextosComponent1750272791823,
    AgregarTextosComponent1750272791825,
    EliminarTextosComponent1750272791827,
    ObtenerTextosComponent1750272791828,
    EvaluarRegladeNegocioComponent1750272791831,
    ObtenerReglasdeNegocioComponent1750272791833,
    ObtenerVariablesReglaComponent1750272791834,
    ValidarDatosRegladeNegocioComponent1750272791835,
    AutorizarExcepcionComponent1750272791837,
    ObtenerDetalledeExcepcionComponent1750272791838,
    ObtenerExcepcionesComponent1750272791841,
    RechazarExcepcionComponent1750272791843,
    RegistrarDispositivoComponent1750272791845,
    ContratarSeguroComponent1750272791846,
    ObtenerMontosDeUnSeguroComponent1750272791847,
    ObtenerSegurosComponent1750272791849,
    ObtenerSegurosAPagarComponent1750272791850,
    PagarSeguroComponent1750272791851,
    ObtenerCodigosdeLimitesComponent1750272791860,
    ObtenerCuentaPreferencialComponent1750272791853,
    ObtenerCuentasaAsociarComponent1750272791854,
    ObtenerCuentasAsociadasComponent1750272791856,
    ObtenerCuentasAsociadasPorTipoComponent1750272791859,
    ObtenerDatosComponent1750272791862,
    ObtenerDatosContactoComponent1750272791863,
    ObtenerIdentificadorUnicoComponent1750272791864,
    ObtenerLimitesComponent1750272791865,
    ObtenerMovimientosComponent1750272791867,
    ObtenerTarjetaComponent1750272791868,
    ObtenerTarjetaHabienteComponent1750272791869,
    ObtenerTarjetasAdicionalesComponent1750272791870,
    ObtenerTiposdeCuentaComponent1750272791872,
    ActivarComponent1750272791875,
    ActualizarCuentaPreferencialComponent1750272791877,
    ActualizarDatosContactoComponent1750272791878,
    AsociarCuentaComponent1750272791879,
    BlanquearPinComponent1750272791881,
    BloquearComponent1750272791883,
    BloquearDesdeREDComponent1750272791884,
    CrearComponent1750272791885,
    CrearConCuentasAsociadasComponent1750272791886,
    DenunciarComponent1750272791888,
    DenunciarDesdeREDComponent1750272791892,
    DesbloquearComponent1750272791894,
    DesbloquearDesdeREDComponent1750272791895,
    EliminarCuentaAsociadaComponent1750272791897,
    ModificarLimiteComponent1750272791898,
    ComprarComponent1750272791899,
    ObtenerEstadoCompraComponent1750272791900,
    ObtenerGruposComponent1750272791902,
    ObtenerValoresComponent1750272791904,
    AgregarPerfilComponent1750272791906,
    CrearComponent1750272791909,
    EliminarPerfilComponent1750272791911,
    EliminarUsuarioComponent1750272791912,
    HabilitarEnCanalComponent1750272791914,
    HabilitarUsuarioComponent1750272791916,
    InhabilitarUsuarioComponent1750272791917,
    ModificarComponent1750272791918,
    ObtenerComponent1750272791919,
    ObtenerPerfilesComponent1750272791921,
    ObtenerUsuariosComponent1750272791924,
    ObtenerUsuariosParaPerfilComponent1750272791926,
    ObtenerMetadataDeTareaComponent1750272791928,
    ObtenerProcesosHabilitadosComponent1750272791929,
    ObtenerRolesComponent1750272791931,
    ObtenerRolesdeTareaComponent1750272791933,
    ObtenerTareasdeProcesoComponent1750272791935,
    //exports End page components
    SidebarComponent    // exporta sólo lo que necesites fuera del módulo
  ]
})
export class ApiDocsModule {}