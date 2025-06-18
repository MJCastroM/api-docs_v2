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
import { ContratarSimulacionComponent1750258524551 } from './api-doc-page/Ahorro-Programado/Contratar/ContratarSimulacion.component';
import { CrearComponent1750258524560 } from './api-doc-page/Ahorro-Programado/Contratar/Crear.component';
import { SimularComponent1750258524563 } from './api-doc-page/Ahorro-Programado/Contratar/Simular.component';
import { ActualizarDocumentoDigitalComponent1750258524576 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750258524577 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750258524579 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750258524581 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750258524583 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ModificarCuentaDestinoComponent1750258524587 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarCuentaDestino.component';
import { ModificarCuentaOrigenComponent1750258524590 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarCuentaOrigen.component';
import { ModificarFechadeAbonoComponent1750258524591 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarFechadeAbono.component';
import { ModificarMetadeAhorroComponent1750258524593 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarMetadeAhorro.component';
import { ModificarMontodeAbonoComponent1750258524595 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarMontodeAbono.component';
import { ObtenerComponent1750258524597 } from './api-doc-page/Ahorro-Programado/Obtener/Obtener.component';
import { ObtenerCronogramaAbonosComponent1750258524599 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCronogramaAbonos.component';
import { ObtenerCuentasDestinoHabilitadasComponent1750258524601 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCuentasDestinoHabilitadas.component';
import { ObtenerCuentasOrigenHabilitadasComponent1750258524603 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCuentasOrigenHabilitadas.component';
import { ObtenerEstadodeCuentaComponent1750258524605 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerPeriodosHabilitadosComponent1750258524607 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerPeriodosHabilitados.component';
import { ObtenerPlazosHabilitadosComponent1750258524608 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerPlazosHabilitados.component';
import { ObtenerProductosComponent1750258524609 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerProductos.component';
import { AnularChequeElectronicoComponent1750258524611 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/AnularChequeElectronico.component';
import { AsignarIdaChequeElectronicoComponent1750258524613 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/AsignarIdaChequeElectronico.component';
import { CrearChequeraElectronicaComponent1750258524615 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/CrearChequeraElectronica.component';
import { DepositarChequeElectronicodeBancoPropioComponent1750258524619 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicodeBancoPropio.component';
import { DepositarChequeElectronicodeOtroBancoComponent1750258524621 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicodeOtroBanco.component';
import { DepositarChequeElectronicoenCustodiaComponent1750258524622 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicoenCustodia.component';
import { EmitirChequeElectronicoComponent1750258524624 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/EmitirChequeElectronico.component';
import { EmitirChequeElectronicodeChequeraComponent1750258524626 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/EmitirChequeElectronicodeChequera.component';
import { HabilitarChequeElectronicoComponent1750258524627 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/HabilitarChequeElectronico.component';
import { CrearAdhesionComponent1750258524629 } from './api-doc-page/AR - Argentina/SNP/CrearAdhesion.component';
import { CrearStopDebitComponent1750258524632 } from './api-doc-page/AR - Argentina/SNP/CrearStopDebit.component';
import { CrearStopDebitparaAdhesionconImporteComponent1750258524635 } from './api-doc-page/AR - Argentina/SNP/CrearStopDebitparaAdhesionconImporte.component';
import { EliminarStopDebitComponent1750258524636 } from './api-doc-page/AR - Argentina/SNP/EliminarStopDebit.component';
import { ObtenerAdhesionesComponent1750258524638 } from './api-doc-page/AR - Argentina/SNP/ObtenerAdhesiones.component';
import { ObtenerDebitosComponent1750258524640 } from './api-doc-page/AR - Argentina/SNP/ObtenerDebitos.component';
import { ObtenerEmpresasOriginantesComponent1750258524641 } from './api-doc-page/AR - Argentina/SNP/ObtenerEmpresasOriginantes.component';
import { ObtenerStopDebitsComponent1750258524643 } from './api-doc-page/AR - Argentina/SNP/ObtenerStopDebits.component';
import { ReversarDebitosComponent1750258524644 } from './api-doc-page/AR - Argentina/SNP/ReversarDebitos.component';
import { SolicitarBajadeAdhesionComponent1750258524645 } from './api-doc-page/AR - Argentina/SNP/SolicitarBajadeAdhesion.component';
import { AutenticacionComponent1750258524647 } from './api-doc-page/Autenticación/Autenticacion.component';
import { ObtenerDetalledeEjecucionComponent1750258524649 } from './api-doc-page/Cadena-de-Cierre/ObtenerDetalledeEjecucion.component';
import { ObtenerDetalledeProcesoComponent1750258524652 } from './api-doc-page/Cadena-de-Cierre/ObtenerDetalledeProceso.component';
import { ObtenerProcesosconErrorComponent1750258524653 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosconError.component';
import { ObtenerProcesosCriticosComponent1750258524655 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosCriticos.component';
import { ObtenerProcesosDiariosComponent1750258524656 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosDiarios.component';
import { ObtenerProcesosMensualesComponent1750258524658 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosMensuales.component';
import { ObtenerProcesosReprocesablesComponent1750258524659 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosReprocesables.component';
import { VerificarEstadoServidorComponent1750258524660 } from './api-doc-page/Cadena-de-Cierre/VerificarEstadoServidor.component';
import { CalcularFechadeVencimientoComponent1750258524661 } from './api-doc-page/Calendarios/Calcular/CalcularFechadeVencimiento.component';
import { CalcularFechadeVencimientoenDiasHabilesComponent1750258524663 } from './api-doc-page/Calendarios/Calcular/CalcularFechadeVencimientoenDiasHabiles.component';
import { CalcularPlazoComponent1750258524665 } from './api-doc-page/Calendarios/Calcular/CalcularPlazo.component';
import { CalcularPlazoenDiasHabilesComponent1750258524667 } from './api-doc-page/Calendarios/Calcular/CalcularPlazoenDiasHabiles.component';
import { ObtenerFechaHabilComponent1750258524669 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabil.component';
import { ObtenerFechaHabilAnteriorComponent1750258524670 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabilAnterior.component';
import { ObtenerFechaHabilAnteriordeSucursalComponent1750258524672 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabilAnteriordeSucursal.component';
import { ObtenerFechaHabildeSucursalComponent1750258524674 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabildeSucursal.component';
import { ObtenerInicioyFindeMesComponent1750258524675 } from './api-doc-page/Calendarios/Obtener/ObtenerInicioyFindeMes.component';
import { ObtenerInicioyFindeMesdeSucursalComponent1750258524676 } from './api-doc-page/Calendarios/Obtener/ObtenerInicioyFindeMesdeSucursal.component';
import { ObtenerProximaFechaHabilComponent1750258524677 } from './api-doc-page/Calendarios/Obtener/ObtenerProximaFechaHabil.component';
import { ObtenerProximaFechaHabildeSucursalComponent1750258524678 } from './api-doc-page/Calendarios/Obtener/ObtenerProximaFechaHabildeSucursal.component';
import { AutorizarArchivoComponent1750258524680 } from './api-doc-page/CASH-Management/Archivo/AutorizarArchivo.component';
import { CargarArchivoComponent1750258524682 } from './api-doc-page/CASH-Management/Archivo/CargarArchivo.component';
import { CargarArchivoRecibidoComoDatoComponent1750258524684 } from './api-doc-page/CASH-Management/Archivo/CargarArchivoRecibidoComoDato.component';
import { DetenerArchivoComponent1750258524686 } from './api-doc-page/CASH-Management/Archivo/DetenerArchivo.component';
import { RechazarArchivoComponent1750258524687 } from './api-doc-page/CASH-Management/Archivo/RechazarArchivo.component';
import { CargarBeneficiariosComponent1750258524688 } from './api-doc-page/CASH-Management/Beneficiarios/CargarBeneficiarios.component';
import { IngresarBeneficiarioComponent1750258524690 } from './api-doc-page/CASH-Management/Beneficiarios/IngresarBeneficiario.component';
import { ObtenerBeneficiarioSegunFiltroComponent1750258524691 } from './api-doc-page/CASH-Management/Beneficiarios/ObtenerBeneficiarioSegunFiltro.component';
import { AltaAutomaticaContratoComponent1750258524693 } from './api-doc-page/CASH-Management/Contratar/AltaAutomaticaContrato.component';
import { CargarServiciosDisponiblesComponent1750258524694 } from './api-doc-page/CASH-Management/Contratar/CargarServiciosDisponibles.component';
import { ContratarDebitoAutomaticoComponent1750258524695 } from './api-doc-page/CASH-Management/Contratar/ContratarDebitoAutomatico.component';
import { ObtenerDetalledeOrdendeCuentaComponent1750258524697 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalledeOrdendeCuenta.component';
import { ObtenerDetalledePagoComponent1750258524699 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalledePago.component';
import { ObtenerDetalleOrdenSegunCampoComponent1750258524701 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalleOrdenSegunCampo.component';
import { ObtenerDetallePagoOrdenComponent1750258524703 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetallePagoOrden.component';
import { ObtenerDeudaComponent1750258524704 } from './api-doc-page/CASH-Management/Obtener/ObtenerDeuda.component';
import { ObtenerResumenOrdenComponent1750258524705 } from './api-doc-page/CASH-Management/Obtener/ObtenerResumenOrden.component';
import { ObtenerServiciosComponent1750258524706 } from './api-doc-page/CASH-Management/Obtener/ObtenerServicios.component';
import { ObtenerValoresOrdenComponent1750258524707 } from './api-doc-page/CASH-Management/Obtener/ObtenerValoresOrden.component';
import { ObtenerValoresOrdenSegunCampoComponent1750258524709 } from './api-doc-page/CASH-Management/Obtener/ObtenerValoresOrdenSegunCampo.component';
import { AutorizarOrdenComponent1750258524710 } from './api-doc-page/CASH-Management/Orden/AutorizarOrden.component';
import { DetenerOrdenComponent1750258524711 } from './api-doc-page/CASH-Management/Orden/DetenerOrden.component';
import { IngresarOrdenPagoComponent1750258524712 } from './api-doc-page/CASH-Management/Orden/IngresarOrdenPago.component';
import { ProcesarOrdenComponent1750258524713 } from './api-doc-page/CASH-Management/Orden/ProcesarOrden.component';
import { RechazarOrdenComponent1750258524715 } from './api-doc-page/CASH-Management/Orden/RechazarOrden.component';
import { AnularPagoDeudaComponent1750258524717 } from './api-doc-page/CASH-Management/Pagos/AnularPagoDeuda.component';
import { PagarDeudaDesdeCuentaComponent1750258524718 } from './api-doc-page/CASH-Management/Pagos/PagarDeudaDesdeCuenta.component';
import { RegistrarPagoDeudaComponent1750258524719 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoDeuda.component';
import { RegistrarPagoEnLineaComponent1750258524723 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoEnLinea.component';
import { RegistrarPagoEnLineaDesdeCuentaComponent1750258524724 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoEnLineaDesdeCuenta.component';
import { VisualizarListaResumenCabezalComponent1750258524725 } from './api-doc-page/CASH-Management/Visualizar/VisualizarListaResumenCabezal.component';
import { VisualizarListaResumenCabezalOrdenComponent1750258524727 } from './api-doc-page/CASH-Management/Visualizar/VisualizarListaResumenCabezalOrden.component';
import { VisualizarOrdendeArchivoParaCuentaComponent1750258524728 } from './api-doc-page/CASH-Management/Visualizar/VisualizarOrdendeArchivoParaCuenta.component';
import { VisualizarResultadoProcesamientoComponent1750258524729 } from './api-doc-page/CASH-Management/Visualizar/VisualizarResultadoProcesamiento.component';
import { VisualizarResumenCabezalComponent1750258524731 } from './api-doc-page/CASH-Management/Visualizar/VisualizarResumenCabezal.component';
import { VisualizarSituacionArchivosComponent1750258524733 } from './api-doc-page/CASH-Management/Visualizar/VisualizarSituacionArchivos.component';
import { VisualizarSituacionLineasComponent1750258524735 } from './api-doc-page/CASH-Management/Visualizar/VisualizarSituacionLineas.component';
import { CHATComponent1750258524737 } from './api-doc-page/CHAT/CHAT.component';
import { ActualizarComponent1750258524739 } from './api-doc-page/Clientes/Actualizar/Actualizar.component';
import { ActualizarDocumentoDigitalComponent1750258524740 } from './api-doc-page/Clientes/Actualizar/ActualizarDocumentoDigital.component';
import { ActualizarDomicilioComponent1750258524741 } from './api-doc-page/Clientes/Actualizar/ActualizarDomicilio.component';
import { ActualizarInformacionAdicionalComponent1750258524742 } from './api-doc-page/Clientes/Actualizar/ActualizarInformacionAdicional.component';
import { ActualizarRegistroEmpleadoComponent1750258524743 } from './api-doc-page/Clientes/Actualizar/ActualizarRegistroEmpleado.component';
import { ActualizarTelefonoComponent1750258524744 } from './api-doc-page/Clientes/Actualizar/ActualizarTelefono.component';
import { AgregarDomicilioComponent1750258524745 } from './api-doc-page/Clientes/Actualizar/AgregarDomicilio.component';
import { AgregarInformacionAdicionalComponent1750258524748 } from './api-doc-page/Clientes/Actualizar/AgregarInformacionAdicional.component';
import { AgregarIntegranteComponent1750258524749 } from './api-doc-page/Clientes/Actualizar/AgregarIntegrante.component';
import { AgregarTelefonoComponent1750258524751 } from './api-doc-page/Clientes/Actualizar/AgregarTelefono.component';
import { AsociarDocumentoDigitalComponent1750258524752 } from './api-doc-page/Clientes/Actualizar/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750258524753 } from './api-doc-page/Clientes/Actualizar/EliminarDocumentoDigital.component';
import { EliminarDomicilioComponent1750258524755 } from './api-doc-page/Clientes/Actualizar/EliminarDomicilio.component';
import { EliminarInformacionAdicionalComponent1750258524756 } from './api-doc-page/Clientes/Actualizar/EliminarInformacionAdicional.component';
import { EliminarIntegranteComponent1750258524757 } from './api-doc-page/Clientes/Actualizar/EliminarIntegrante.component';
import { HabilitarComponent1750258524758 } from './api-doc-page/Clientes/Actualizar/Habilitar.component';
import { InhabilitarComponent1750258524760 } from './api-doc-page/Clientes/Actualizar/Inhabilitar.component';
import { ModificarEjecutivoComponent1750258524761 } from './api-doc-page/Clientes/Actualizar/ModificarEjecutivo.component';
import { CrearComponent1750258524763 } from './api-doc-page/Clientes/Crear/Crear.component';
import { CrearconPersonaExistenteComponent1750258524765 } from './api-doc-page/Clientes/Crear/CrearconPersonaExistente.component';
import { CrearParaPersonaJuridicaComponent1750258524766 } from './api-doc-page/Clientes/Crear/CrearParaPersonaJuridica.component';
import { ObtenerComponent1750258524768 } from './api-doc-page/Clientes/Obtener/Obtener.component';
import { ObtenerAhorrosProgramadosComponent1750258524771 } from './api-doc-page/Clientes/Obtener/ObtenerAhorrosProgramados.component';
import { ObtenerBolsillosComponent1750258524773 } from './api-doc-page/Clientes/Obtener/ObtenerBolsillos.component';
import { ObtenerClasificacionesInternasComponent1750258524774 } from './api-doc-page/Clientes/Obtener/ObtenerClasificacionesInternas.component';
import { ObtenerCuentaClienteComponent1750258524775 } from './api-doc-page/Clientes/Obtener/ObtenerCuentaCliente.component';
import { ObtenerCuentasCorrientesSaldoContableComponent1750258524777 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasCorrientesSaldoContable.component';
import { ObtenerCuentasCorrientesSaldoDisponibleComponent1750258524778 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasCorrientesSaldoDisponible.component';
import { ObtenerCuentasdeAhorroSaldoContableComponent1750258524779 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasdeAhorroSaldoContable.component';
import { ObtenerCuentasdeAhorroSaldoDisponibleComponent1750258524781 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasdeAhorroSaldoDisponible.component';
import { ObtenerDatosComponent1750258524784 } from './api-doc-page/Clientes/Obtener/ObtenerDatos.component';
import { ObtenerDetallePosicionComponent1750258524785 } from './api-doc-page/Clientes/Obtener/ObtenerDetallePosicion.component';
import { ObtenerDocumentoDigitalComponent1750258524787 } from './api-doc-page/Clientes/Obtener/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750258524789 } from './api-doc-page/Clientes/Obtener/ObtenerDocumentosDigitales.component';
import { ObtenerDomiciliosComponent1750258524790 } from './api-doc-page/Clientes/Obtener/ObtenerDomicilios.component';
import { ObtenerFacultadesComponent1750258524791 } from './api-doc-page/Clientes/Obtener/ObtenerFacultades.component';
import { ObtenerIdentificadorUnicoComponent1750258524793 } from './api-doc-page/Clientes/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerInformacionAdicionalComponent1750258524794 } from './api-doc-page/Clientes/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerIntegrantesComponent1750258524796 } from './api-doc-page/Clientes/Obtener/ObtenerIntegrantes.component';
import { ObtenerLimitesComponent1750258524798 } from './api-doc-page/Clientes/Obtener/ObtenerLimites.component';
import { ObtenerMotivosInhabilitacionComponent1750258524800 } from './api-doc-page/Clientes/Obtener/ObtenerMotivosInhabilitacion.component';
import { ObtenerPerfilComponent1750258524802 } from './api-doc-page/Clientes/Obtener/ObtenerPerfil.component';
import { ObtenerPlazosFijosComponent1750258524803 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijos.component';
import { ObtenerPlazosFijosCanceladosComponent1750258524805 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijosCancelados.component';
import { ObtenerPlazosFijosconAvanceComponent1750258524806 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijosconAvance.component';
import { ObtenerPosicionComponent1750258524807 } from './api-doc-page/Clientes/Obtener/ObtenerPosicion.component';
import { ObtenerPrestamosComponent1750258524808 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamos.component';
import { ObtenerPrestamosCanceladosComponent1750258524809 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosCancelados.component';
import { ObtenerPrestamosCastigadosComponent1750258524810 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosCastigados.component';
import { ObtenerPrestamosconAvanceComponent1750258524811 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosconAvance.component';
import { ObtenerResumendeProductosCierredeanoComponent1750258524814 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosCierredeano.component';
import { ObtenerResumendeProductosSaldosContablesComponent1750258524816 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosSaldosContables.component';
import { ObtenerResumendeProductosSaldosDisponiblesComponent1750258524818 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosSaldosDisponibles.component';
import { ObtenerResumenporProductoaCierreAnoComponent1750258524819 } from './api-doc-page/Clientes/Obtener/ObtenerResumenporProductoaCierreAno.component';
import { ObtenerRiesgodeCreditoComponent1750258524820 } from './api-doc-page/Clientes/Obtener/ObtenerRiesgodeCredito.component';
import { ObtenerSaldosdeOtrosProductosComponent1750258524821 } from './api-doc-page/Clientes/Obtener/ObtenerSaldosdeOtrosProductos.component';
import { ObtenerSectoresComponent1750258524823 } from './api-doc-page/Clientes/Obtener/ObtenerSectores.component';
import { ObtenerSegmentosComponent1750258524824 } from './api-doc-page/Clientes/Obtener/ObtenerSegmentos.component';
import { ObtenerTarjetasdeDebitoComponent1750258524825 } from './api-doc-page/Clientes/Obtener/ObtenerTarjetasdeDebito.component';
import { ObtenerTelefonosComponent1750258524827 } from './api-doc-page/Clientes/Obtener/ObtenerTelefonos.component';
import { ObtenerTiposdeIntegracionComponent1750258524828 } from './api-doc-page/Clientes/Obtener/ObtenerTiposdeIntegracion.component';
import { ObtenerTitularRepresentativoComponent1750258524829 } from './api-doc-page/Clientes/Obtener/ObtenerTitularRepresentativo.component';
import { ObtenerTitulosComponent1750258524830 } from './api-doc-page/Clientes/Obtener/ObtenerTitulos.component';
import { ValidarExistenciaComponent1750258524832 } from './api-doc-page/Clientes/Validar/ValidarExistencia.component';
import { VerificarEmpleadoComponent1750258524834 } from './api-doc-page/Clientes/Validar/VerificarEmpleado.component';
import { ObtenerAgenciasBancoComponent1750258524835 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerAgenciasBanco.component';
import { ObtenerBancosComponent1750258524836 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerBancos.component';
import { ObtenerDetalleSucursalComponent1750258524837 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerDetalleSucursal.component';
import { ObtenerSucursalesPrincipalesComponent1750258524838 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerSucursalesPrincipales.component';
import { ObtenerActividadesComponent1750258524840 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerActividades.component';
import { ObtenerActividadesporTipoComponent1750258524841 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerActividadesporTipo.component';
import { ObtenerEjecutivosComponent1750258524842 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerEjecutivos.component';
import { ObtenerTiposdeActividadComponent1750258524843 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerTiposdeActividad.component';
import { ObtenerTiposdeTarjetaComponent1750258524844 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerTiposdeTarjeta.component';
import { ObtenerImpuestosComponent1750258524845 } from './api-doc-page/Configuración-Bantotal/ObtenerImpuestos.component';
import { ObtenerTiposdeDocumentoDigitalComponent1750258524846 } from './api-doc-page/Configuración-Bantotal/ObtenerTiposdeDocumentoDigital.component';
import { ObtenerEstadosComponent1750258524848 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerEstados.component';
import { ObtenerInstruccionesComponent1750258524852 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerInstrucciones.component';
import { ObtenerPaquetesComponent1750258524853 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerPaquetes.component';
import { ObtenerTiposdeTextoComponent1750258524912 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerTiposdeTexto.component';
import { ObtenerCalendariodeSucursalComponent1750258524914 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerCalendariodeSucursal.component';
import { ObtenerCalendariosComponent1750258524916 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerCalendarios.component';
import { ObtenerDetalledeCalendarioComponent1750258524917 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDetalledeCalendario.component';
import { ObtenerDetalledeCalendariodeSucursalComponent1750258524936 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDetalledeCalendariodeSucursal.component';
import { ObtenerDolarUSAComponent1750258524940 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDolarUSA.component';
import { ObtenerEmpresaComponent1750258524942 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerEmpresa.component';
import { ObtenerFechadeSistemaComponent1750258524943 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerFechadeSistema.component';
import { ObtenerMonedaNacionalComponent1750258524944 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerMonedaNacional.component';
import { ObtenerMonedasComponent1750258524945 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerMonedas.component';
import { ObtenerSucursalesComponent1750258524946 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerSucursales.component';
import { ObtenerAgrupadoresDomicilioComponent1750258524948 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerAgrupadoresDomicilio.component';
import { ObtenerBarriosyColoniasComponent1750258524949 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerBarriosyColonias.component';
import { ObtenerCiudadesyLocalidadesComponent1750258524950 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerCiudadesyLocalidades.component';
import { ObtenerCodigosdeDomicilioComponent1750258524951 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerCodigosdeDomicilio.component';
import { ObtenerEstadosProvinciasyDepartamentosComponent1750258524952 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerEstadosProvinciasyDepartamentos.component';
import { ObtenerPaisesComponent1750258524953 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerPaises.component';
import { ObtenerTiposdeListasNegrasComponent1750258524954 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeListasNegras.component';
import { ObtenerTiposdeTelefonoComponent1750258524955 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeTelefono.component';
import { ObtenerTiposdeViviendaComponent1750258524955 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeVivienda.component';
import { ObtenerPizarraporModuloComponent1750258524956 } from './api-doc-page/Configuración-Bantotal/Precios/ObtenerPizarraporModulo.component';
import { ObtenerPizarrasComponent1750258524957 } from './api-doc-page/Configuración-Bantotal/Precios/ObtenerPizarras.component';
import { ObtenerMenusComponent1750258524958 } from './api-doc-page/Configuración-Bantotal/Seguridad/ObtenerMenus.component';
import { ObtenerPerfilesComponent1750258524959 } from './api-doc-page/Configuración-Bantotal/Seguridad/ObtenerPerfiles.component';
import { AgregarTextoAsientoComponent1750258524960 } from './api-doc-page/Contabilidad/Agregar-Texto/AgregarTextoAsiento.component';
import { AgregarTextoOrdinalComponent1750258524961 } from './api-doc-page/Contabilidad/Agregar-Texto/AgregarTextoOrdinal.component';
import { AnularMovimientoComponent1750258524962 } from './api-doc-page/Contabilidad/AnularMovimiento.component';
import { ActualizarCondicionImpositivaComponent1750258524964 } from './api-doc-page/Contabilidad/Condición-Impositiva/ActualizarCondicionImpositiva.component';
import { CrearCondicionImpositivaComponent1750258524966 } from './api-doc-page/Contabilidad/Condición-Impositiva/CrearCondicionImpositiva.component';
import { ObtenerIdBantotalMovimientoComponent1750258524967 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalMovimiento.component';
import { ObtenerIdBantotalOperacionComponent1750258524968 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalOperacion.component';
import { ObtenerIdBantotalProductoComponent1750258524969 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalProducto.component';
import { ObtenerIdentificadorUnicodeMovimientoComponent1750258524970 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeMovimiento.component';
import { ObtenerIdentificadorUnicodeOperacionComponent1750258524971 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeOperacion.component';
import { ObtenerIdentificadorUnicodeProductoComponent1750258524971 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeProducto.component';
import { ObtenerClientedeunaOperacionComponent1750258524972 } from './api-doc-page/Contabilidad/Obtener/ObtenerClientedeunaOperacion.component';
import { ObtenerCondicionImpositivaComponent1750258524973 } from './api-doc-page/Contabilidad/Obtener/ObtenerCondicionImpositiva.component';
import { ObtenerDetalledeMovimientoComponent1750258524974 } from './api-doc-page/Contabilidad/Obtener/ObtenerDetalledeMovimiento.component';
import { ObtenerDetalledeOrdinalComponent1750258524975 } from './api-doc-page/Contabilidad/Obtener/ObtenerDetalledeOrdinal.component';
import { ObtenerIntegrantesdeOperacionComponent1750258524976 } from './api-doc-page/Contabilidad/Obtener/ObtenerIntegrantesdeOperacion.component';
import { ObtenerTextosdeMovimientoComponent1750258524977 } from './api-doc-page/Contabilidad/Obtener/ObtenerTextosdeMovimiento.component';
import { RegistrarAsientoComponent1750258524978 } from './api-doc-page/Contabilidad/Registrar-Asiento/RegistrarAsiento.component';
import { RegistrarAsientoFechaValorComponent1750258524979 } from './api-doc-page/Contabilidad/Registrar-Asiento/RegistrarAsientoFechaValor.component';
import { CancelarComponent1750258524981 } from './api-doc-page/Cuentas-Bolsillo/Cancelar.component';
import { CashInComponent1750258524983 } from './api-doc-page/Cuentas-Bolsillo/CashIn.component';
import { CashOutComponent1750258524984 } from './api-doc-page/Cuentas-Bolsillo/CashOut.component';
import { ContratarComponent1750258524985 } from './api-doc-page/Cuentas-Bolsillo/Contratar.component';
import { ObtenerDatosComponent1750258524986 } from './api-doc-page/Cuentas-Bolsillo/ObtenerDatos.component';
import { ObtenerMovimientosComponent1750258524986 } from './api-doc-page/Cuentas-Bolsillo/ObtenerMovimientos.component';
import { ObtenerProductosComponent1750258524987 } from './api-doc-page/Cuentas-Bolsillo/ObtenerProductos.component';
import { ObtenerProductosCVComponent1750258524988 } from './api-doc-page/Cuentas-Bolsillo/ObtenerProductosCV.component';
import { ObtenerChequeraComponent1750258524989 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequera.component';
import { ObtenerChequerasComponent1750258524990 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequeras.component';
import { ObtenerChequesdeChequeraComponent1750258524991 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequesdeChequera.component';
import { ObtenerComisionChequeraComponent1750258524992 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerComisionChequera.component';
import { ObtenerEstadodeChequeraComponent1750258524992 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerEstadodeChequera.component';
import { ObtenerSolicitudesdeChequerasComponent1750258524993 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerSolicitudesdeChequeras.component';
import { ObtenerTiposdeChequeraComponent1750258524994 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerTiposdeChequera.component';
import { ObtenerTiposdeChequeraporProductoComponent1750258524994 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerTiposdeChequeraporProducto.component';
import { EliminarChequeraComponent1750258524996 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/EliminarChequera.component';
import { RegistrarOrdendeNoPagodeChequeraComponent1750258524997 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/RegistrarOrdendeNoPagodeChequera.component';
import { RegistrarOrdendeNoPagodeChequesComponent1750258524999 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/RegistrarOrdendeNoPagodeCheques.component';
import { SolicitarChequeraComponent1750258525001 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/SolicitarChequera.component';
import { ContratarconPeriodicidadComponent1750258525002 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarconPeriodicidad.component';
import { ContratarProductoComponent1750258525003 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarProducto.component';
import { ContratarProductoconAltadeFacultadesComponent1750258525003 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarProductoconAltadeFacultades.component';
import { ObtenerAcuerdosComponent1750258525004 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerAcuerdos.component';
import { ObtenerDatosComponent1750258525005 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerDatos.component';
import { ObtenerEstadodeCuentaComponent1750258525006 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerEvoluciondeSaldosComponent1750258525007 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerEvoluciondeSaldos.component';
import { ObtenerProductosComponent1750258525008 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerProductos.component';
import { ContratarconPeriodicidadComponent1750258525009 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarconPeriodicidad.component';
import { ContratarProductoComponent1750258525010 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarProducto.component';
import { ContratarProductoconAltadeFacultadesComponent1750258525011 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarProductoconAltadeFacultades.component';
import { ObtenerDatosComponent1750258525013 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerDatos.component';
import { ObtenerEstadodeCuentaComponent1750258525015 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerEvoluciondeSaldosComponent1750258525017 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerEvoluciondeSaldos.component';
import { ObtenerProductosComponent1750258525018 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerProductos.component';
import { ActualizarBeneficiariosComponent1750258525019 } from './api-doc-page/Cuentas-Vista/Beneficiarios/ActualizarBeneficiarios.component';
import { ObtenerBeneficiariosComponent1750258525020 } from './api-doc-page/Cuentas-Vista/Beneficiarios/ObtenerBeneficiarios.component';
import { ActualizarDocumentoDigitalComponent1750258525021 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750258525022 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750258525023 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750258525024 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750258525025 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ObtenerBolsillosComponent1750258525026 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerBolsillos.component';
import { ObtenerCBUdeCuentaVistaComponent1750258525027 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerCBUdeCuentaVista.component';
import { ObtenerCuentaVistadeCBUComponent1750258525028 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerCuentaVistadeCBU.component';
import { ObtenerDetalleBloqueoComponent1750258525029 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerDetalleBloqueo.component';
import { ObtenerEstadodeCuentaporPeriodoComponent1750258525031 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerEstadodeCuentaporPeriodo.component';
import { ObtenerEstadoDeOperacionComponent1750258525033 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerEstadoDeOperacion.component';
import { ObtenerFacultadesComponent1750258525035 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerFacultades.component';
import { ObtenerPaqueteComponent1750258525036 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPaquete.component';
import { ObtenerPeriododeAcreditacionComponent1750258525038 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPeriododeAcreditacion.component';
import { ObtenerPeriodosdeAcreditacionComponent1750258525037 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPeriodosdeAcreditacion.component';
import { ObtenerSaldoBloqueadoComponent1750258525039 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldoBloqueado.component';
import { ObtenerSaldoDisponibleComponent1750258525039 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldoDisponible.component';
import { ObtenerSaldosBloqueadosComponent1750258525040 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldosBloqueados.component';
import { AcreditarEnCuentaComponent1750258525042 } from './api-doc-page/Cuentas-Vista/Operar/AcreditarEnCuenta.component';
import { ActivarComponent1750258525042 } from './api-doc-page/Cuentas-Vista/Operar/Activar.component';
import { ActualizarPeriododeAcreditacionComponent1750258525043 } from './api-doc-page/Cuentas-Vista/Operar/ActualizarPeriododeAcreditacion.component';
import { BloquearSaldoComponent1750258525044 } from './api-doc-page/Cuentas-Vista/Operar/BloquearSaldo.component';
import { CancelarComponent1750258525045 } from './api-doc-page/Cuentas-Vista/Operar/Cancelar.component';
import { DebitarEnCuentaComponent1750258525047 } from './api-doc-page/Cuentas-Vista/Operar/DebitarEnCuenta.component';
import { DesbloquearSaldoComponent1750258525049 } from './api-doc-page/Cuentas-Vista/Operar/DesbloquearSaldo.component';
import { ActualizarPerfilTransaccionalComponent1750258525050 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/ActualizarPerfilTransaccional.component';
import { AgregarPerfilTransaccionalComponent1750258525051 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/AgregarPerfilTransaccional.component';
import { ObtenerPerfilTransaccionalComponent1750258525053 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/ObtenerPerfilTransaccional.component';
import { TraspasarConTipoDeCambioEspecialComponent1750258525054 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarConTipoDeCambioEspecial.component';
import { TraspasarEntreCuentasdelaMismaPersonaComponent1750258525056 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasdelaMismaPersona.component';
import { TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750258525057 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasMismoTitularcontipodecambio.component';
import { TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750258525059 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasMismoTitulardiferentesmonedas.component';
import { TraspasarEntreCuentasPropiasComponent1750258525061 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropias.component';
import { TraspasarEntreCuentasPropiascontipodecambioComponent1750258525060 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropiascontipodecambio.component';
import { TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750258525060 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropiasdiferentesmonedas.component';
import { TraspasarEntreCuentasTercerosComponent1750258525067 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTerceros.component';
import { TraspasarEntreCuentasTerceroscontipodecambioComponent1750258525064 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTerceroscontipodecambio.component';
import { TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750258525066 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTercerosdiferentesmonedas.component';
import { ActualizarBeneficiariosComponent1750258525068 } from './api-doc-page/Depósitos-a-Plazo/Beneficiarios/ActualizarBeneficiarios.component';
import { ObtenerBeneficiariosComponent1750258525070 } from './api-doc-page/Depósitos-a-Plazo/Beneficiarios/ObtenerBeneficiarios.component';
import { ContratarComponent1750258525071 } from './api-doc-page/Depósitos-a-Plazo/Contratar/Contratar.component';
import { ContratarConFacultadesComponent1750258525072 } from './api-doc-page/Depósitos-a-Plazo/Contratar/ContratarConFacultades.component';
import { ContratarSimulacionComponent1750258525073 } from './api-doc-page/Depósitos-a-Plazo/Contratar/ContratarSimulacion.component';
import { ActualizarDocumentoDigitalComponent1750258525075 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750258525076 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750258525077 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750258525080 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ModificarCuentaDestinoalVencimientoComponent1750258525082 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarCuentaDestinoalVencimiento.component';
import { ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750258525083 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarCuentaDestinodeAcreditacionPeriodica.component';
import { ModificarInstruccionComponent1750258525086 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarInstruccion.component';
import { ObtenerAvanceComponent1750258525087 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerAvance.component';
import { ObtenerDatosComponent1750258525088 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDatos.component';
import { ObtenerDatosPrecancelacionComponent1750258525089 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDatosPrecancelacion.component';
import { ObtenerDocumentosDigitalesComponent1750258525091 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDocumentosDigitales.component';
import { ObtenerInstruccionComponent1750258525093 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerInstruccion.component';
import { ObtenerInstruccionesHabilitadosComponent1750258525092 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerInstruccionesHabilitados.component';
import { ObtenerMovimientosComponent1750258525096 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerMovimientos.component';
import { ObtenerPeriodosHabilitadosComponent1750258525099 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerPeriodosHabilitados.component';
import { ObtenerProductosComponent1750258525100 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerProductos.component';
import { ObtenerProductosHabilitadosComponent1750258525101 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerProductosHabilitados.component';
import { ObtenerTasadePrecancelacionComponent1750258525102 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerTasadePrecancelacion.component';
import { PrecancelarComponent1750258525103 } from './api-doc-page/Depósitos-a-Plazo/Precancelar.component';
import { SimularComponent1750258525104 } from './api-doc-page/Depósitos-a-Plazo/Simular/Simular.component';
import { SimularConCronogramaComponent1750258525106 } from './api-doc-page/Depósitos-a-Plazo/Simular/SimularConCronograma.component';
import { ConfirmarListaComponent1750258525108 } from './api-doc-page/Descuento-de-Documentos/ConfirmarLista.component';
import { CrearListaComponent1750258525109 } from './api-doc-page/Descuento-de-Documentos/CrearLista.component';
import { CrearListaChequesComponent1750258525110 } from './api-doc-page/Descuento-de-Documentos/CrearListaCheques.component';
import { ObtenerProductosComponent1750258525112 } from './api-doc-page/Descuento-de-Documentos/ObtenerProductos.component';
import { ObtenerTiposDeDesembolsoComponent1750258525114 } from './api-doc-page/Descuento-de-Documentos/ObtenerTiposDeDesembolso.component';
import { SeleccionarOpcionDesembolsoComponent1750258525115 } from './api-doc-page/Descuento-de-Documentos/SeleccionarOpcionDesembolso.component';
import { ObtenerAgrupadoresComponent1750258525116 } from './api-doc-page/Indicadores/ObtenerAgrupadores.component';
import { ObtenerCierredeSaldosporMonedaComponent1750258525117 } from './api-doc-page/Indicadores/ObtenerCierredeSaldosporMoneda.component';
import { ObtenerCondicionesGeneralesComponent1750258525118 } from './api-doc-page/Indicadores/ObtenerCondicionesGenerales.component';
import { ObtenerIndicadoresComponent1750258525119 } from './api-doc-page/Indicadores/ObtenerIndicadores.component';
import { ObtenerMetodosMasEjecutadosComponent1750258525120 } from './api-doc-page/Indicadores/ObtenerMetodosMasEjecutados.component';
import { ObtenerMonedasIndicesComponent1750258525122 } from './api-doc-page/Indicadores/ObtenerMonedasIndices.component';
import { ObtenerRubrosBolsaComponent1750258525123 } from './api-doc-page/Indicadores/ObtenerRubrosBolsa.component';
import { ObtenerServiciosMasEjecutadosComponent1750258525125 } from './api-doc-page/Indicadores/ObtenerServiciosMasEjecutados.component';
import { ObtenerSesionesPorUsuarioComponent1750258525126 } from './api-doc-page/Indicadores/ObtenerSesionesPorUsuario.component';
import { ObtenerSucursalesCajasComponent1750258525127 } from './api-doc-page/Indicadores/ObtenerSucursalesCajas.component';
import { ObtenerTransaccionesporEstadosComponent1750258525128 } from './api-doc-page/Indicadores/ObtenerTransaccionesporEstados.component';
import { BuscarClienteComponent1750258525130 } from './api-doc-page/Microfinanzas/BuscarCliente.component';
import { CompletarTareaComponent1750258525131 } from './api-doc-page/Microfinanzas/CompletarTarea.component';
import { CrearSolicitudAmpliacionComponent1750258525133 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudAmpliacion.component';
import { CrearSolicitudIndividualComponent1750258525134 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudIndividual.component';
import { CrearSolicitudRenovacionComponent1750258525135 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudRenovacion.component';
import { AgregarFiadorComponent1750258525136 } from './api-doc-page/Microfinanzas/Fiadores/AgregarFiador.component';
import { EliminarFiadorComponent1750258525137 } from './api-doc-page/Microfinanzas/Fiadores/EliminarFiador.component';
import { ActualizarGrupoComponent1750258525138 } from './api-doc-page/Microfinanzas/Grupales/ActualizarGrupo.component';
import { ActualizarIntegrantedeGrupoComponent1750258525140 } from './api-doc-page/Microfinanzas/Grupales/ActualizarIntegrantedeGrupo.component';
import { AgregarGrupoComponent1750258525142 } from './api-doc-page/Microfinanzas/Grupales/AgregarGrupo.component';
import { AgregarIntegranteaGrupoComponent1750258525145 } from './api-doc-page/Microfinanzas/Grupales/AgregarIntegranteaGrupo.component';
import { CrearSolicitudGrupalComponent1750258525148 } from './api-doc-page/Microfinanzas/Grupales/CrearSolicitudGrupal.component';
import { HabilitarIntegrantedeunGrupoComponent1750258525150 } from './api-doc-page/Microfinanzas/Grupales/HabilitarIntegrantedeunGrupo.component';
import { InhabilitarIntegrantedeunGrupoComponent1750258525151 } from './api-doc-page/Microfinanzas/Grupales/InhabilitarIntegrantedeunGrupo.component';
import { ObtenerDetalleGrupoComponent1750258525152 } from './api-doc-page/Microfinanzas/Grupales/ObtenerDetalleGrupo.component';
import { ObtenerGruposComponent1750258525153 } from './api-doc-page/Microfinanzas/Grupales/ObtenerGrupos.component';
import { ObtenerIntegrantesdeGrupoComponent1750258525155 } from './api-doc-page/Microfinanzas/Grupales/ObtenerIntegrantesdeGrupo.component';
import { ObtenerTiposdeGrupoComponent1750258525157 } from './api-doc-page/Microfinanzas/Grupales/ObtenerTiposdeGrupo.component';
import { ObtenerTiposdeIntegranteComponent1750258525158 } from './api-doc-page/Microfinanzas/Grupales/ObtenerTiposdeIntegrante.component';
import { SimularPrestamoAmortizableGrupalComponent1750258525160 } from './api-doc-page/Microfinanzas/Grupales/SimularPrestamoAmortizableGrupal.component';
import { ObtenerAsesoresComponent1750258525161 } from './api-doc-page/Microfinanzas/Obtener/ObtenerAsesores.component';
import { ObtenerCampanasComponent1750258525166 } from './api-doc-page/Microfinanzas/Obtener/ObtenerCampanas.component';
import { ObtenerDestinosCreditoComponent1750258525168 } from './api-doc-page/Microfinanzas/Obtener/ObtenerDestinosCredito.component';
import { ObtenerOperacionesClienteComponent1750258525169 } from './api-doc-page/Microfinanzas/Obtener/ObtenerOperacionesCliente.component';
import { ObtenerOrigenesdeCaptacionComponent1750258525171 } from './api-doc-page/Microfinanzas/Obtener/ObtenerOrigenesdeCaptacion.component';
import { ObtenerProductosComponent1750258525173 } from './api-doc-page/Microfinanzas/Obtener/ObtenerProductos.component';
import { ObtenerSolicitudesClienteComponent1750258525174 } from './api-doc-page/Microfinanzas/Obtener/ObtenerSolicitudesCliente.component';
import { ObtenerTiposAvalComponent1750258525175 } from './api-doc-page/Microfinanzas/Obtener/ObtenerTiposAval.component';
import { AgregarOperacionesaCancelarComponent1750258525177 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/AgregarOperacionesaCancelar.component';
import { ObtenerOperacionesaCancelarComponent1750258525178 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/ObtenerOperacionesaCancelar.component';
import { QuitarOperacionesaCancelarComponent1750258525180 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/QuitarOperacionesaCancelar.component';
import { SimularLibreAmortizacionComponent1750258525182 } from './api-doc-page/Microfinanzas/Simular/SimularLibreAmortizacion.component';
import { SimularPrestamoAmortizableComponent1750258525185 } from './api-doc-page/Microfinanzas/Simular/SimularPrestamoAmortizable.component';
import { SimularPrestamoPlazoFijoComponent1750258525188 } from './api-doc-page/Microfinanzas/Simular/SimularPrestamoPlazoFijo.component';
import { ValidarPoliticasComponent1750258525191 } from './api-doc-page/Microfinanzas/ValidarPoliticas.component';
import { ObtenerCantidadCuotasComponent1750258525192 } from './api-doc-page/Modelador-de-Préstamos/ObtenerCantidadCuotas.component';
import { ObtenerCapitalComponent1750258525193 } from './api-doc-page/Modelador-de-Préstamos/ObtenerCapital.component';
import { ObtenerComisionesComponent1750258525195 } from './api-doc-page/Modelador-de-Préstamos/ObtenerComisiones.component';
import { ObtenerComisionesporCuotaComponent1750258525197 } from './api-doc-page/Modelador-de-Préstamos/ObtenerComisionesporCuota.component';
import { ObtenerDiasPrimerPeriodoComponent1750258525199 } from './api-doc-page/Modelador-de-Préstamos/ObtenerDiasPrimerPeriodo.component';
import { ObtenerPeriodoEntreCuotasComponent1750258525202 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPeriodoEntreCuotas.component';
import { ObtenerPermiteSegurosdelMismoTipoComponent1750258525201 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPermiteSegurosdelMismoTipo.component';
import { ObtenerPlazoComponent1750258525204 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPlazo.component';
import { ObtenerRequiereSegurodeVidaObligatorioComponent1750258525205 } from './api-doc-page/Modelador-de-Préstamos/ObtenerRequiereSegurodeVidaObligatorio.component';
import { ObtenerSegurosComponent1750258525206 } from './api-doc-page/Modelador-de-Préstamos/ObtenerSeguros.component';
import { ObtenerItemsModeloComponent1750258525218 } from './api-doc-page/PAE/ObtenerItemsModelo.component';
import { ObtenerModelosPAEComponent1750258525220 } from './api-doc-page/PAE/ObtenerModelosPAE.component';
import { ObtenerScoresComponent1750258525221 } from './api-doc-page/PAE/ObtenerScores.component';
import { ObtenerTiposDeModelosComponent1750258525223 } from './api-doc-page/PAE/ObtenerTiposDeModelos.component';
import { ContratarPrestamoComponent1750258525225 } from './api-doc-page/Partners/Contratar/ContratarPrestamo.component';
import { ContratarVehicularComponent1750258525226 } from './api-doc-page/Partners/Contratar/ContratarVehicular.component';
import { CrearClienteComponent1750258525227 } from './api-doc-page/Partners/Crear/CrearCliente.component';
import { CrearPersonaClienteComponent1750258525230 } from './api-doc-page/Partners/Crear/CrearPersonaCliente.component';
import { ObtenerDatosdeUsuarioComponent1750258525233 } from './api-doc-page/Partners/Obtener/ObtenerDatosdeUsuario.component';
import { ObtenerDetalledeOfertaAmortizableComponent1750258525237 } from './api-doc-page/Partners/Obtener/ObtenerDetalledeOfertaAmortizable.component';
import { ObtenerDetalleOfertaVehicularComponent1750258525239 } from './api-doc-page/Partners/Obtener/ObtenerDetalleOfertaVehicular.component';
import { ObtenerMarcasComponent1750258525241 } from './api-doc-page/Partners/Obtener/ObtenerMarcas.component';
import { ObtenerModelosComponent1750258525242 } from './api-doc-page/Partners/Obtener/ObtenerModelos.component';
import { ObtenerPartnersComponent1750258525243 } from './api-doc-page/Partners/Obtener/ObtenerPartners.component';
import { ObtenerPrestamosdeClienteComponent1750258525248 } from './api-doc-page/Partners/Obtener/ObtenerPrestamosdeCliente.component';
import { ObtenerProductosComponent1750258525244 } from './api-doc-page/Partners/Obtener/ObtenerProductos.component';
import { ObtenerProductosdelPartnerComponent1750258525246 } from './api-doc-page/Partners/Obtener/ObtenerProductosdelPartner.component';
import { ObtenerPuntosdeVentaComponent1750258525250 } from './api-doc-page/Partners/Obtener/ObtenerPuntosdeVenta.component';
import { ObtenerVendedoresComponent1750258525252 } from './api-doc-page/Partners/Obtener/ObtenerVendedores.component';
import { ObtenerVersionesComponent1750258525253 } from './api-doc-page/Partners/Obtener/ObtenerVersiones.component';
import { SimularOfertasComponent1750258525255 } from './api-doc-page/Partners/Simular/SimularOfertas.component';
import { SimularOfertasVehicularComponent1750258525257 } from './api-doc-page/Partners/Simular/SimularOfertasVehicular.component';
import { SimularPrestamoComponent1750258525259 } from './api-doc-page/Partners/Simular/SimularPrestamo.component';
import { SimularVehicularComponent1750258525261 } from './api-doc-page/Partners/Simular/SimularVehicular.component';
import { ObtenerCorrelativoGuiaComponent1750258525262 } from './api-doc-page/Parámetros-Base/ObtenerCorrelativoGuia.component';
import { ObtenerCorrelativoGuiaEspecialComponent1750258525265 } from './api-doc-page/Parámetros-Base/ObtenerCorrelativoGuiaEspecial.component';
import { ObtenerGuiadeProcesoComponent1750258525267 } from './api-doc-page/Parámetros-Base/ObtenerGuiadeProceso.component';
import { ObtenerGuiaEspecialdeProcesoComponent1750258525269 } from './api-doc-page/Parámetros-Base/ObtenerGuiaEspecialdeProceso.component';
import { ObtenerOpcionGeneraldeProcesoComponent1750258525270 } from './api-doc-page/Parámetros-Base/ObtenerOpcionGeneraldeProceso.component';
import { ObtenerOpcionGeneralPorModuloComponent1750258525271 } from './api-doc-page/Parámetros-Base/ObtenerOpcionGeneralPorModulo.component';
import { ObtenerProgramaParticularComponent1750258525272 } from './api-doc-page/Parámetros-Base/ObtenerProgramaParticular.component';
import { ActualizarComponent1750258525275 } from './api-doc-page/Personas/Actualizar/Actualizar.component';
import { ActualizarCelularComponent1750258525276 } from './api-doc-page/Personas/Actualizar/ActualizarCelular.component';
import { ActualizarContactoComponent1750258525278 } from './api-doc-page/Personas/Actualizar/ActualizarContacto.component';
import { ActualizarConyugeComponent1750258525284 } from './api-doc-page/Personas/Actualizar/ActualizarConyuge.component';
import { ActualizarCorreoElectronicoComponent1750258525279 } from './api-doc-page/Personas/Actualizar/ActualizarCorreoElectronico.component';
import { ActualizarDomicilioComponent1750258525285 } from './api-doc-page/Personas/Actualizar/ActualizarDomicilio.component';
import { ActualizarFATCAComponent1750258525286 } from './api-doc-page/Personas/Actualizar/ActualizarFATCA.component';
import { ActualizarInformacionAdicionalComponent1750258525287 } from './api-doc-page/Personas/Actualizar/ActualizarInformacionAdicional.component';
import { ActualizarInformacionFinancieraComponent1750258525289 } from './api-doc-page/Personas/Actualizar/ActualizarInformacionFinanciera.component';
import { ActualizarIntegrantedePersonaJuridicaComponent1750258525291 } from './api-doc-page/Personas/Actualizar/ActualizarIntegrantedePersonaJuridica.component';
import { ActualizarPersonaJuridicaComponent1750258525293 } from './api-doc-page/Personas/Actualizar/ActualizarPersonaJuridica.component';
import { ActualizarProfesionComponent1750258525294 } from './api-doc-page/Personas/Actualizar/ActualizarProfesion.component';
import { ActualizarReferenciaComponent1750258525297 } from './api-doc-page/Personas/Actualizar/ActualizarReferencia.component';
import { ActualizarRegistroEmpleadoComponent1750258525299 } from './api-doc-page/Personas/Actualizar/ActualizarRegistroEmpleado.component';
import { ActualizarTelefonoComponent1750258525301 } from './api-doc-page/Personas/Actualizar/ActualizarTelefono.component';
import { ActualizarVictimaHechoViolentoComponent1750258525302 } from './api-doc-page/Personas/Actualizar/ActualizarVictimaHechoViolento.component';
import { ModificarDocumentoAdicionalComponent1750258525304 } from './api-doc-page/Personas/Actualizar/ModificarDocumentoAdicional.component';
import { AgregaraListaNegraComponent1750258525305 } from './api-doc-page/Personas/Agregar/AgregaraListaNegra.component';
import { AgregarContactoComponent1750258525306 } from './api-doc-page/Personas/Agregar/AgregarContacto.component';
import { AgregarCorreoElectronicoComponent1750258525307 } from './api-doc-page/Personas/Agregar/AgregarCorreoElectronico.component';
import { AgregarDatosPEPComponent1750258525309 } from './api-doc-page/Personas/Agregar/AgregarDatosPEP.component';
import { AgregarDocumentoAdicionalComponent1750258525310 } from './api-doc-page/Personas/Agregar/AgregarDocumentoAdicional.component';
import { AgregarDomicilioComponent1750258525311 } from './api-doc-page/Personas/Agregar/AgregarDomicilio.component';
import { AgregarEstadoFinancieroComponent1750258525314 } from './api-doc-page/Personas/Agregar/AgregarEstadoFinanciero.component';
import { AgregarFATCAComponent1750258525316 } from './api-doc-page/Personas/Agregar/AgregarFATCA.component';
import { AgregarInformacionAdicionalComponent1750258525317 } from './api-doc-page/Personas/Agregar/AgregarInformacionAdicional.component';
import { AgregarInformacionFinancieraComponent1750258525318 } from './api-doc-page/Personas/Agregar/AgregarInformacionFinanciera.component';
import { AgregarIntegranteaPersonaJuridicaComponent1750258525319 } from './api-doc-page/Personas/Agregar/AgregarIntegranteaPersonaJuridica.component';
import { AgregarPersonaVinculadaComponent1750258525320 } from './api-doc-page/Personas/Agregar/AgregarPersonaVinculada.component';
import { AgregarReferenciaComponent1750258525321 } from './api-doc-page/Personas/Agregar/AgregarReferencia.component';
import { AgregarTelefonoComponent1750258525322 } from './api-doc-page/Personas/Agregar/AgregarTelefono.component';
import { AgregarVictimaHechoViolentoComponent1750258525323 } from './api-doc-page/Personas/Agregar/AgregarVictimaHechoViolento.component';
import { CrearComponent1750258525324 } from './api-doc-page/Personas/Crear/Crear.component';
import { CrearConyugeComponent1750258525325 } from './api-doc-page/Personas/Crear/CrearConyuge.component';
import { CrearPersonaJuridicaComponent1750258525326 } from './api-doc-page/Personas/Crear/CrearPersonaJuridica.component';
import { CrearReducidoComponent1750258525327 } from './api-doc-page/Personas/Crear/CrearReducido.component';
import { ActualizarDocumentoDigitalComponent1750258525329 } from './api-doc-page/Personas/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750258525331 } from './api-doc-page/Personas/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750258525333 } from './api-doc-page/Personas/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750258525334 } from './api-doc-page/Personas/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750258525336 } from './api-doc-page/Personas/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { EliminarConyugeComponent1750258525338 } from './api-doc-page/Personas/Eliminar/EliminarConyuge.component';
import { EliminarDocumentoAdicionalComponent1750258525339 } from './api-doc-page/Personas/Eliminar/EliminarDocumentoAdicional.component';
import { EliminarDomicilioComponent1750258525341 } from './api-doc-page/Personas/Eliminar/EliminarDomicilio.component';
import { EliminarInformacionAdicionalComponent1750258525343 } from './api-doc-page/Personas/Eliminar/EliminarInformacionAdicional.component';
import { EliminarIntegrantedePersonaJuridicaComponent1750258525347 } from './api-doc-page/Personas/Eliminar/EliminarIntegrantedePersonaJuridica.component';
import { EliminarPersonaVinculadaComponent1750258525349 } from './api-doc-page/Personas/Eliminar/EliminarPersonaVinculada.component';
import { EliminarProfesionComponent1750258525350 } from './api-doc-page/Personas/Eliminar/EliminarProfesion.component';
import { ObtenerComponent1750258525354 } from './api-doc-page/Personas/Obtener/Obtener.component';
import { ObtenerConceptoComponent1750258525355 } from './api-doc-page/Personas/Obtener/ObtenerConcepto.component';
import { ObtenerContactosComponent1750258525357 } from './api-doc-page/Personas/Obtener/ObtenerContactos.component';
import { ObtenerConyugeComponent1750258525360 } from './api-doc-page/Personas/Obtener/ObtenerConyuge.component';
import { ObtenerCorreosElectronicosComponent1750258525358 } from './api-doc-page/Personas/Obtener/ObtenerCorreosElectronicos.component';
import { ObtenerCuentasClienteComponent1750258525359 } from './api-doc-page/Personas/Obtener/ObtenerCuentasCliente.component';
import { ObtenerDatosPEPComponent1750258525361 } from './api-doc-page/Personas/Obtener/ObtenerDatosPEP.component';
import { ObtenerDocumentosAdicionalesComponent1750258525363 } from './api-doc-page/Personas/Obtener/ObtenerDocumentosAdicionales.component';
import { ObtenerDomiciliosComponent1750258525365 } from './api-doc-page/Personas/Obtener/ObtenerDomicilios.component';
import { ObtenerEstadosCivilesComponent1750258525367 } from './api-doc-page/Personas/Obtener/ObtenerEstadosCiviles.component';
import { ObtenerFacultadesComponent1750258525369 } from './api-doc-page/Personas/Obtener/ObtenerFacultades.component';
import { ObtenerFATCAComponent1750258525370 } from './api-doc-page/Personas/Obtener/ObtenerFATCA.component';
import { ObtenerHobbiesComponent1750258525371 } from './api-doc-page/Personas/Obtener/ObtenerHobbies.component';
import { ObtenerHobbyComponent1750258525372 } from './api-doc-page/Personas/Obtener/ObtenerHobby.component';
import { ObtenerIdBantotalComponent1750258525373 } from './api-doc-page/Personas/Obtener/ObtenerIdBantotal.component';
import { ObtenerIdentidadesdeGeneroComponent1750258525374 } from './api-doc-page/Personas/Obtener/ObtenerIdentidadesdeGenero.component';
import { ObtenerIdentificadorUnicoComponent1750258525375 } from './api-doc-page/Personas/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerInformacionAdicionalComponent1750258525376 } from './api-doc-page/Personas/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerInformacionFinancieraComponent1750258525377 } from './api-doc-page/Personas/Obtener/ObtenerInformacionFinanciera.component';
import { ObtenerIntegrantesPersonaJuridicaComponent1750258525378 } from './api-doc-page/Personas/Obtener/ObtenerIntegrantesPersonaJuridica.component';
import { ObtenerLimitesComponent1750258525382 } from './api-doc-page/Personas/Obtener/ObtenerLimites.component';
import { ObtenerNaturalezasJuridicasComponent1750258525384 } from './api-doc-page/Personas/Obtener/ObtenerNaturalezasJuridicas.component';
import { ObtenerNivelesEducativosComponent1750258525385 } from './api-doc-page/Personas/Obtener/ObtenerNivelesEducativos.component';
import { ObtenerOcupacionesComponent1750258525386 } from './api-doc-page/Personas/Obtener/ObtenerOcupaciones.component';
import { ObtenerPersonaJuridicaComponent1750258525387 } from './api-doc-page/Personas/Obtener/ObtenerPersonaJuridica.component';
import { ObtenerPersonasComponent1750258525388 } from './api-doc-page/Personas/Obtener/ObtenerPersonas.component';
import { ObtenerPersonasJuridicasComponent1750258525389 } from './api-doc-page/Personas/Obtener/ObtenerPersonasJuridicas.component';
import { ObtenerPersonasVinculadasComponent1750258525391 } from './api-doc-page/Personas/Obtener/ObtenerPersonasVinculadas.component';
import { ObtenerProfesionComponent1750258525393 } from './api-doc-page/Personas/Obtener/ObtenerProfesion.component';
import { ObtenerProfesionesComponent1750258525392 } from './api-doc-page/Personas/Obtener/ObtenerProfesiones.component';
import { ObtenerReferenciasComponent1750258525394 } from './api-doc-page/Personas/Obtener/ObtenerReferencias.component';
import { ObtenerTarjetasdeDebitoComponent1750258525397 } from './api-doc-page/Personas/Obtener/ObtenerTarjetasdeDebito.component';
import { ObtenerTelefonosComponent1750258525400 } from './api-doc-page/Personas/Obtener/ObtenerTelefonos.component';
import { ObtenerTipodePersonaComponent1750258525401 } from './api-doc-page/Personas/Obtener/ObtenerTipodePersona.component';
import { ObtenerTiposdeDocumentoComponent1750258525403 } from './api-doc-page/Personas/Obtener/ObtenerTiposdeDocumento.component';
import { ObtenerTiposDeFuncionarioPublicoComponent1750258525404 } from './api-doc-page/Personas/Obtener/ObtenerTiposDeFuncionarioPublico.component';
import { ObtenerTiposDePEPComponent1750258525406 } from './api-doc-page/Personas/Obtener/ObtenerTiposDePEP.component';
import { ObtenerTitularesDelTelefonoComponent1750258525407 } from './api-doc-page/Personas/Obtener/ObtenerTitularesDelTelefono.component';
import { ObtenerVictimaHechoViolentoComponent1750258525408 } from './api-doc-page/Personas/Obtener/ObtenerVictimaHechoViolento.component';
import { ObtenerVinculosComponent1750258525409 } from './api-doc-page/Personas/Obtener/ObtenerVinculos.component';
import { ObtenerVinculosdeAfinidadComponent1750258525410 } from './api-doc-page/Personas/Obtener/ObtenerVinculosdeAfinidad.component';
import { ObtenerVinculosdeConsanguinidadComponent1750258525410 } from './api-doc-page/Personas/Obtener/ObtenerVinculosdeConsanguinidad.component';
import { ObtenerVinculosJuridicosComponent1750258525411 } from './api-doc-page/Personas/Obtener/ObtenerVinculosJuridicos.component';
import { EvaluarPAEComponent1750258525413 } from './api-doc-page/Personas/Validar/EvaluarPAE.component';
import { ValidarCorreoElectronicoComponent1750258525415 } from './api-doc-page/Personas/Validar/ValidarCorreoElectronico.component';
import { ValidarDocumentoComponent1750258525417 } from './api-doc-page/Personas/Validar/ValidarDocumento.component';
import { ValidarenListasNegrasComponent1750258525418 } from './api-doc-page/Personas/Validar/ValidarenListasNegras.component';
import { ValidarExistenciaComponent1750258525419 } from './api-doc-page/Personas/Validar/ValidarExistencia.component';
import { ValidarListasInhabilitadosComponent1750258525421 } from './api-doc-page/Personas/Validar/ValidarListasInhabilitados.component';
import { VerificarEmpleadoComponent1750258525422 } from './api-doc-page/Personas/Validar/VerificarEmpleado.component';
import { ConvertirTasaAnualEfectivaaLinealComponent1750258525423 } from './api-doc-page/Precios/Convertir/ConvertirTasaAnualEfectivaaLineal.component';
import { ConvertirTasaAnualLinealaEfectivaComponent1750258525424 } from './api-doc-page/Precios/Convertir/ConvertirTasaAnualLinealaEfectiva.component';
import { ConvertirTasaMensualEfectivaaLinealComponent1750258525425 } from './api-doc-page/Precios/Convertir/ConvertirTasaMensualEfectivaaLineal.component';
import { ConvertirTasaMensualLinealaEfectivaComponent1750258525426 } from './api-doc-page/Precios/Convertir/ConvertirTasaMensualLinealaEfectiva.component';
import { ObtenerCotizacionComponent1750258525428 } from './api-doc-page/Precios/Obtener/ObtenerCotizacion.component';
import { ObtenerCotizacionaFechaComponent1750258525429 } from './api-doc-page/Precios/Obtener/ObtenerCotizacionaFecha.component';
import { ObtenerCotizacionCierreComponent1750258525431 } from './api-doc-page/Precios/Obtener/ObtenerCotizacionCierre.component';
import { ObtenerPizarraEspecialporTransaccionComponent1750258525432 } from './api-doc-page/Precios/Obtener/ObtenerPizarraEspecialporTransaccion.component';
import { ObtenerPrecioaFechaComponent1750258525433 } from './api-doc-page/Precios/Obtener/ObtenerPrecioaFecha.component';
import { ObtenerPrecioEspecieComponent1750258525434 } from './api-doc-page/Precios/Obtener/ObtenerPrecioEspecie.component';
import { ObtenerTasadeOperacionComponent1750258525435 } from './api-doc-page/Precios/Obtener/ObtenerTasadeOperacion.component';
import { ObtenerTasaParaClienteComponent1750258525436 } from './api-doc-page/Precios/Obtener/ObtenerTasaParaCliente.component';
import { ObtenerTasaParaProductoComponent1750258525437 } from './api-doc-page/Precios/Obtener/ObtenerTasaParaProducto.component';
import { ObtenerTipodeCambioComponent1750258525439 } from './api-doc-page/Precios/Obtener/ObtenerTipodeCambio.component';
import { ObtenerTiposDeCambioEspecialesComponent1750258525440 } from './api-doc-page/Precios/Obtener/ObtenerTiposDeCambioEspeciales.component';
import { CancelarComponent1750258525441 } from './api-doc-page/Préstamos/Cancelar/Cancelar.component';
import { CancelaraFechaComponent1750258525442 } from './api-doc-page/Préstamos/Cancelar/CancelaraFecha.component';
import { CancelaraFechaTercerosComponent1750258525443 } from './api-doc-page/Préstamos/Cancelar/CancelaraFechaTerceros.component';
import { CancelarTercerosComponent1750258525445 } from './api-doc-page/Préstamos/Cancelar/CancelarTerceros.component';
import { ContratarComponent1750258525449 } from './api-doc-page/Préstamos/Contratar/Contratar.component';
import { ContratarAmpliacionComponent1750258525491 } from './api-doc-page/Préstamos/Contratar/ContratarAmpliacion.component';
import { ContratarRefinanciacionComponent1750258525493 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacion.component';
import { ContratarRefinanciacionporDeudaTotalComponent1750258525494 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacionporDeudaTotal.component';
import { ContratarRefinanciacionporSaldoCapitalComponent1750258525495 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacionporSaldoCapital.component';
import { ActualizarDocumentoDigitalComponent1750258525498 } from './api-doc-page/Préstamos/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750258525499 } from './api-doc-page/Préstamos/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750258525500 } from './api-doc-page/Préstamos/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750258525501 } from './api-doc-page/Préstamos/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750258525503 } from './api-doc-page/Préstamos/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ObtenerCronogramaComponent1750258525504 } from './api-doc-page/Préstamos/Obtener/ObtenerCronograma.component';
import { ObtenerCronogramaaFechaComponent1750258525506 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaaFecha.component';
import { ObtenerCronogramaconPagosaFechaComponent1750258525507 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaconPagosaFecha.component';
import { ObtenerCronogramaenEspecieComponent1750258525508 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaenEspecie.component';
import { ObtenerCronogramaOriginalComponent1750258525509 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaOriginal.component';
import { ObtenerCuentadeCobroComponent1750258525510 } from './api-doc-page/Préstamos/Obtener/ObtenerCuentadeCobro.component';
import { ObtenerDatosdelProximoVencimientoComponent1750258525511 } from './api-doc-page/Préstamos/Obtener/ObtenerDatosdelProximoVencimiento.component';
import { ObtenerDetalleComponent1750258525512 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalle.component';
import { ObtenerDetalleaFechaComponent1750258525514 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleaFecha.component';
import { ObtenerDetalledeCancelacionTotalComponent1750258525515 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeCancelacionTotal.component';
import { ObtenerDetalledeOfertaComponent1750258525517 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOferta.component';
import { ObtenerDetalledeOfertaAmortizableComponent1750258525518 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOfertaAmortizable.component';
import { ObtenerDetalledeOperacionesaRefinanciarComponent1750258525519 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOperacionesaRefinanciar.component';
import { ObtenerDetalledePrestamoCanceladoComponent1750258525520 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledePrestamoCancelado.component';
import { ObtenerDetallePagoPrestamoComponent1750258525521 } from './api-doc-page/Préstamos/Obtener/ObtenerDetallePagoPrestamo.component';
import { ObtenerDetalleReducidoComponent1750258525522 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleReducido.component';
import { ObtenerDetalleSimulacionComponent1750258525523 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleSimulacion.component';
import { ObtenerDeudaComponent1750258525524 } from './api-doc-page/Préstamos/Obtener/ObtenerDeuda.component';
import { ObtenerDeudaPrestamoCastigadoComponent1750258525525 } from './api-doc-page/Préstamos/Obtener/ObtenerDeudaPrestamoCastigado.component';
import { ObtenerDeudaVencidaComponent1750258525527 } from './api-doc-page/Préstamos/Obtener/ObtenerDeudaVencida.component';
import { ObtenerFechadeIncumplimientoComponent1750258525531 } from './api-doc-page/Préstamos/Obtener/ObtenerFechadeIncumplimiento.component';
import { ObtenerFechadeUltimoPagoComponent1750258525534 } from './api-doc-page/Préstamos/Obtener/ObtenerFechadeUltimoPago.component';
import { ObtenerFechasdePagoComponent1750258525536 } from './api-doc-page/Préstamos/Obtener/ObtenerFechasdePago.component';
import { ObtenerInformacionAdicionalComponent1750258525537 } from './api-doc-page/Préstamos/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerMontodeCancelacionComponent1750258525538 } from './api-doc-page/Préstamos/Obtener/ObtenerMontodeCancelacion.component';
import { ObtenerMotivosPrecancelacionComponent1750258525539 } from './api-doc-page/Préstamos/Obtener/ObtenerMotivosPrecancelacion.component';
import { ObtenerPagosdeCuotaComponent1750258525540 } from './api-doc-page/Préstamos/Obtener/ObtenerPagosdeCuota.component';
import { ObtenerPagosdeunPrestamoComponent1750258525541 } from './api-doc-page/Préstamos/Obtener/ObtenerPagosdeunPrestamo.component';
import { ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750258525542 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1.component';
import { ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750258525543 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1.component';
import { ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750258525544 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1.component';
import { ObtenerProductosComponent1750258525545 } from './api-doc-page/Préstamos/Obtener/ObtenerProductos.component';
import { ObtenerProductosRefinanciacionComponent1750258525546 } from './api-doc-page/Préstamos/Obtener/ObtenerProductosRefinanciacion.component';
import { ObtenerRefinanciacionSimuladaComponent1750258525548 } from './api-doc-page/Préstamos/Obtener/ObtenerRefinanciacionSimulada.component';
import { AbonaraCuentaComponent1750258525549 } from './api-doc-page/Préstamos/Operar/AbonaraCuenta.component';
import { ActualizarInformacionAdicionalComponent1750258525550 } from './api-doc-page/Préstamos/Operar/ActualizarInformacionAdicional.component';
import { ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750258525551 } from './api-doc-page/Préstamos/Operar/ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1.component';
import { AgregarCuentadeCobroComponent1750258525552 } from './api-doc-page/Préstamos/Operar/AgregarCuentadeCobro.component';
import { AgregarInformacionAdicionalComponent1750258525552 } from './api-doc-page/Préstamos/Operar/AgregarInformacionAdicional.component';
import { EliminarCuentadeCobroComponent1750258525553 } from './api-doc-page/Préstamos/Operar/EliminarCuentadeCobro.component';
import { EliminarInformacionAdicionalComponent1750258525554 } from './api-doc-page/Préstamos/Operar/EliminarInformacionAdicional.component';
import { SolicitarPrecancelacionComponent1750258525555 } from './api-doc-page/Préstamos/Operar/SolicitarPrecancelacion.component';
import { AdelantarCapitalConReduccionDeCuotaComponent1750258525556 } from './api-doc-page/Préstamos/Pagar/AdelantarCapitalConReduccionDeCuota.component';
import { AdelantarCapitalConReduccionDePlazoComponent1750258525556 } from './api-doc-page/Préstamos/Pagar/AdelantarCapitalConReduccionDePlazo.component';
import { PagarCuotaComponent1750258525557 } from './api-doc-page/Préstamos/Pagar/PagarCuota.component';
import { PagarCuotaaFechaComponent1750258525558 } from './api-doc-page/Préstamos/Pagar/PagarCuotaaFecha.component';
import { PagarCuotaaFechaTercerosComponent1750258525559 } from './api-doc-page/Préstamos/Pagar/PagarCuotaaFechaTerceros.component';
import { PagarCuotaTercerosComponent1750258525559 } from './api-doc-page/Préstamos/Pagar/PagarCuotaTerceros.component';
import { ResimularAmortizableComponent1750258525561 } from './api-doc-page/Préstamos/Simular/ResimularAmortizable.component';
import { ResimularAmpliacionComponent1750258525563 } from './api-doc-page/Préstamos/Simular/ResimularAmpliacion.component';
import { ResimularRefinanciacionComponent1750258525565 } from './api-doc-page/Préstamos/Simular/ResimularRefinanciacion.component';
import { SimularComponent1750258525567 } from './api-doc-page/Préstamos/Simular/Simular.component';
import { SimularAmortizableComponent1750258525569 } from './api-doc-page/Préstamos/Simular/SimularAmortizable.component';
import { SimularAmortizableSinClienteComponent1750258525570 } from './api-doc-page/Préstamos/Simular/SimularAmortizableSinCliente.component';
import { SimularAmpliacionComponent1750258525571 } from './api-doc-page/Préstamos/Simular/SimularAmpliacion.component';
import { SimularAmpliacionIngresandoSegurosComponent1750258525573 } from './api-doc-page/Préstamos/Simular/SimularAmpliacionIngresandoSeguros.component';
import { SimularDespejandoCapitalyCantidaddeCuotasComponent1750258525574 } from './api-doc-page/Préstamos/Simular/SimularDespejandoCapitalyCantidaddeCuotas.component';
import { SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750258525575 } from './api-doc-page/Préstamos/Simular/SimularDespejandoCapitalyCantidaddeCuotasSinCliente.component';
import { SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750258525576 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyCantidaddeCuotas.component';
import { SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750258525577 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinCliente.component';
import { SimularDespejandoFechadeVencimientoyTasaComponent1750258525578 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyTasa.component';
import { SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750258525580 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyTasaSinCliente.component';
import { SimularIngresandoBalloonComponent1750258525582 } from './api-doc-page/Préstamos/Simular/SimularIngresandoBalloon.component';
import { SimularIngresandoBalloonSinClienteComponent1750258525583 } from './api-doc-page/Préstamos/Simular/SimularIngresandoBalloonSinCliente.component';
import { SimularIngresandoSegurosComponent1750258525585 } from './api-doc-page/Préstamos/Simular/SimularIngresandoSeguros.component';
import { SimularIngresandoSegurosSinClienteComponent1750258525586 } from './api-doc-page/Préstamos/Simular/SimularIngresandoSegurosSinCliente.component';
import { SimularLibreAmortizacionComponent1750258525587 } from './api-doc-page/Préstamos/Simular/SimularLibreAmortizacion.component';
import { SimularLibreAmortizacionSinClienteComponent1750258525588 } from './api-doc-page/Préstamos/Simular/SimularLibreAmortizacionSinCliente.component';
import { SimularOfertasComponent1750258525589 } from './api-doc-page/Préstamos/Simular/SimularOfertas.component';
import { SimularPlazoFijoComponent1750258525590 } from './api-doc-page/Préstamos/Simular/SimularPlazoFijo.component';
import { SimularRefinanciacionComponent1750258525591 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacion.component';
import { SimularRefinanciacionporDeudaTotalComponent1750258525593 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacionporDeudaTotal.component';
import { SimularRefinanciacionporSaldoCapitalComponent1750258525594 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacionporSaldoCapital.component';
import { ActualizarTextosComponent1750258525595 } from './api-doc-page/Préstamos/Textos/ActualizarTextos.component';
import { AgregarTextosComponent1750258525597 } from './api-doc-page/Préstamos/Textos/AgregarTextos.component';
import { EliminarTextosComponent1750258525599 } from './api-doc-page/Préstamos/Textos/EliminarTextos.component';
import { ObtenerTextosComponent1750258525600 } from './api-doc-page/Préstamos/Textos/ObtenerTextos.component';
import { EvaluarRegladeNegocioComponent1750258525603 } from './api-doc-page/Reglas-de-Negocio/EvaluarRegladeNegocio.component';
import { ObtenerReglasdeNegocioComponent1750258525604 } from './api-doc-page/Reglas-de-Negocio/ObtenerReglasdeNegocio.component';
import { ObtenerVariablesReglaComponent1750258525606 } from './api-doc-page/Reglas-de-Negocio/ObtenerVariablesRegla.component';
import { ValidarDatosRegladeNegocioComponent1750258525607 } from './api-doc-page/Reglas-de-Negocio/ValidarDatosRegladeNegocio.component';
import { AutorizarExcepcionComponent1750258525608 } from './api-doc-page/Seguridad/AutorizarExcepcion.component';
import { ObtenerDetalledeExcepcionComponent1750258525609 } from './api-doc-page/Seguridad/ObtenerDetalledeExcepcion.component';
import { ObtenerExcepcionesComponent1750258525611 } from './api-doc-page/Seguridad/ObtenerExcepciones.component';
import { RechazarExcepcionComponent1750258525613 } from './api-doc-page/Seguridad/RechazarExcepcion.component';
import { RegistrarDispositivoComponent1750258525615 } from './api-doc-page/Seguridad/RegistrarDispositivo.component';
import { ContratarSeguroComponent1750258525617 } from './api-doc-page/Seguros-Voluntarios/ContratarSeguro.component';
import { ObtenerMontosDeUnSeguroComponent1750258525619 } from './api-doc-page/Seguros-Voluntarios/ObtenerMontosDeUnSeguro.component';
import { ObtenerSegurosComponent1750258525620 } from './api-doc-page/Seguros-Voluntarios/ObtenerSeguros.component';
import { ObtenerSegurosAPagarComponent1750258525622 } from './api-doc-page/Seguros-Voluntarios/ObtenerSegurosAPagar.component';
import { PagarSeguroComponent1750258525624 } from './api-doc-page/Seguros-Voluntarios/PagarSeguro.component';
import { ObtenerCodigosdeLimitesComponent1750258525633 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCodigosdeLimites.component';
import { ObtenerCuentaPreferencialComponent1750258525626 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentaPreferencial.component';
import { ObtenerCuentasaAsociarComponent1750258525628 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasaAsociar.component';
import { ObtenerCuentasAsociadasComponent1750258525629 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasAsociadas.component';
import { ObtenerCuentasAsociadasPorTipoComponent1750258525631 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasAsociadasPorTipo.component';
import { ObtenerDatosComponent1750258525634 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerDatos.component';
import { ObtenerDatosContactoComponent1750258525635 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerDatosContacto.component';
import { ObtenerIdentificadorUnicoComponent1750258525636 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerLimitesComponent1750258525637 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerLimites.component';
import { ObtenerMovimientosComponent1750258525638 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerMovimientos.component';
import { ObtenerTarjetaComponent1750258525638 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjeta.component';
import { ObtenerTarjetaHabienteComponent1750258525639 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjetaHabiente.component';
import { ObtenerTarjetasAdicionalesComponent1750258525640 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjetasAdicionales.component';
import { ObtenerTiposdeCuentaComponent1750258525641 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTiposdeCuenta.component';
import { ActivarComponent1750258525642 } from './api-doc-page/Tarjetas-de-Débito/Operar/Activar.component';
import { ActualizarCuentaPreferencialComponent1750258525643 } from './api-doc-page/Tarjetas-de-Débito/Operar/ActualizarCuentaPreferencial.component';
import { ActualizarDatosContactoComponent1750258525644 } from './api-doc-page/Tarjetas-de-Débito/Operar/ActualizarDatosContacto.component';
import { AsociarCuentaComponent1750258525645 } from './api-doc-page/Tarjetas-de-Débito/Operar/AsociarCuenta.component';
import { BlanquearPinComponent1750258525646 } from './api-doc-page/Tarjetas-de-Débito/Operar/BlanquearPin.component';
import { BloquearComponent1750258525648 } from './api-doc-page/Tarjetas-de-Débito/Operar/Bloquear.component';
import { BloquearDesdeREDComponent1750258525649 } from './api-doc-page/Tarjetas-de-Débito/Operar/BloquearDesdeRED.component';
import { CrearComponent1750258525650 } from './api-doc-page/Tarjetas-de-Débito/Operar/Crear.component';
import { CrearConCuentasAsociadasComponent1750258525651 } from './api-doc-page/Tarjetas-de-Débito/Operar/CrearConCuentasAsociadas.component';
import { DenunciarComponent1750258525653 } from './api-doc-page/Tarjetas-de-Débito/Operar/Denunciar.component';
import { DenunciarDesdeREDComponent1750258525654 } from './api-doc-page/Tarjetas-de-Débito/Operar/DenunciarDesdeRED.component';
import { DesbloquearComponent1750258525655 } from './api-doc-page/Tarjetas-de-Débito/Operar/Desbloquear.component';
import { DesbloquearDesdeREDComponent1750258525656 } from './api-doc-page/Tarjetas-de-Débito/Operar/DesbloquearDesdeRED.component';
import { EliminarCuentaAsociadaComponent1750258525657 } from './api-doc-page/Tarjetas-de-Débito/Operar/EliminarCuentaAsociada.component';
import { ModificarLimiteComponent1750258525658 } from './api-doc-page/Tarjetas-de-Débito/Operar/ModificarLimite.component';
import { ComprarComponent1750258525659 } from './api-doc-page/Títulos/Comprar.component';
import { ObtenerEstadoCompraComponent1750258525660 } from './api-doc-page/Títulos/ObtenerEstadoCompra.component';
import { ObtenerGruposComponent1750258525661 } from './api-doc-page/Títulos/ObtenerGrupos.component';
import { ObtenerValoresComponent1750258525662 } from './api-doc-page/Títulos/ObtenerValores.component';
import { AgregarPerfilComponent1750258525665 } from './api-doc-page/Usuarios/AgregarPerfil.component';
import { CrearComponent1750258525666 } from './api-doc-page/Usuarios/Crear.component';
import { EliminarPerfilComponent1750258525667 } from './api-doc-page/Usuarios/EliminarPerfil.component';
import { EliminarUsuarioComponent1750258525668 } from './api-doc-page/Usuarios/EliminarUsuario.component';
import { HabilitarEnCanalComponent1750258525669 } from './api-doc-page/Usuarios/HabilitarEnCanal.component';
import { HabilitarUsuarioComponent1750258525670 } from './api-doc-page/Usuarios/HabilitarUsuario.component';
import { InhabilitarUsuarioComponent1750258525671 } from './api-doc-page/Usuarios/InhabilitarUsuario.component';
import { ModificarComponent1750258525672 } from './api-doc-page/Usuarios/Modificar.component';
import { ObtenerComponent1750258525673 } from './api-doc-page/Usuarios/Obtener.component';
import { ObtenerPerfilesComponent1750258525674 } from './api-doc-page/Usuarios/ObtenerPerfiles.component';
import { ObtenerUsuariosComponent1750258525675 } from './api-doc-page/Usuarios/ObtenerUsuarios.component';
import { ObtenerUsuariosParaPerfilComponent1750258525676 } from './api-doc-page/Usuarios/ObtenerUsuariosParaPerfil.component';
import { ObtenerMetadataDeTareaComponent1750258525677 } from './api-doc-page/Workflow/ObtenerMetadataDeTarea.component';
import { ObtenerProcesosHabilitadosComponent1750258525678 } from './api-doc-page/Workflow/ObtenerProcesosHabilitados.component';
import { ObtenerRolesComponent1750258525680 } from './api-doc-page/Workflow/ObtenerRoles.component';
import { ObtenerRolesdeTareaComponent1750258525682 } from './api-doc-page/Workflow/ObtenerRolesdeTarea.component';
import { ObtenerTareasdeProcesoComponent1750258525684 } from './api-doc-page/Workflow/ObtenerTareasdeProceso.component';
//import End page components

@NgModule({
  declarations: [
    //declarations Page components
    ContratarSimulacionComponent1750258524551,
    CrearComponent1750258524560,
    SimularComponent1750258524563,
    ActualizarDocumentoDigitalComponent1750258524576,
    AsociarDocumentoDigitalComponent1750258524577,
    EliminarDocumentoDigitalComponent1750258524579,
    ObtenerDocumentoDigitalComponent1750258524581,
    ObtenerDocumentosDigitalesComponent1750258524583,
    ModificarCuentaDestinoComponent1750258524587,
    ModificarCuentaOrigenComponent1750258524590,
    ModificarFechadeAbonoComponent1750258524591,
    ModificarMetadeAhorroComponent1750258524593,
    ModificarMontodeAbonoComponent1750258524595,
    ObtenerComponent1750258524597,
    ObtenerCronogramaAbonosComponent1750258524599,
    ObtenerCuentasDestinoHabilitadasComponent1750258524601,
    ObtenerCuentasOrigenHabilitadasComponent1750258524603,
    ObtenerEstadodeCuentaComponent1750258524605,
    ObtenerPeriodosHabilitadosComponent1750258524607,
    ObtenerPlazosHabilitadosComponent1750258524608,
    ObtenerProductosComponent1750258524609,
    AnularChequeElectronicoComponent1750258524611,
    AsignarIdaChequeElectronicoComponent1750258524613,
    CrearChequeraElectronicaComponent1750258524615,
    DepositarChequeElectronicodeBancoPropioComponent1750258524619,
    DepositarChequeElectronicodeOtroBancoComponent1750258524621,
    DepositarChequeElectronicoenCustodiaComponent1750258524622,
    EmitirChequeElectronicoComponent1750258524624,
    EmitirChequeElectronicodeChequeraComponent1750258524626,
    HabilitarChequeElectronicoComponent1750258524627,
    CrearAdhesionComponent1750258524629,
    CrearStopDebitComponent1750258524632,
    CrearStopDebitparaAdhesionconImporteComponent1750258524635,
    EliminarStopDebitComponent1750258524636,
    ObtenerAdhesionesComponent1750258524638,
    ObtenerDebitosComponent1750258524640,
    ObtenerEmpresasOriginantesComponent1750258524641,
    ObtenerStopDebitsComponent1750258524643,
    ReversarDebitosComponent1750258524644,
    SolicitarBajadeAdhesionComponent1750258524645,
    AutenticacionComponent1750258524647,
    ObtenerDetalledeEjecucionComponent1750258524649,
    ObtenerDetalledeProcesoComponent1750258524652,
    ObtenerProcesosconErrorComponent1750258524653,
    ObtenerProcesosCriticosComponent1750258524655,
    ObtenerProcesosDiariosComponent1750258524656,
    ObtenerProcesosMensualesComponent1750258524658,
    ObtenerProcesosReprocesablesComponent1750258524659,
    VerificarEstadoServidorComponent1750258524660,
    CalcularFechadeVencimientoComponent1750258524661,
    CalcularFechadeVencimientoenDiasHabilesComponent1750258524663,
    CalcularPlazoComponent1750258524665,
    CalcularPlazoenDiasHabilesComponent1750258524667,
    ObtenerFechaHabilComponent1750258524669,
    ObtenerFechaHabilAnteriorComponent1750258524670,
    ObtenerFechaHabilAnteriordeSucursalComponent1750258524672,
    ObtenerFechaHabildeSucursalComponent1750258524674,
    ObtenerInicioyFindeMesComponent1750258524675,
    ObtenerInicioyFindeMesdeSucursalComponent1750258524676,
    ObtenerProximaFechaHabilComponent1750258524677,
    ObtenerProximaFechaHabildeSucursalComponent1750258524678,
    AutorizarArchivoComponent1750258524680,
    CargarArchivoComponent1750258524682,
    CargarArchivoRecibidoComoDatoComponent1750258524684,
    DetenerArchivoComponent1750258524686,
    RechazarArchivoComponent1750258524687,
    CargarBeneficiariosComponent1750258524688,
    IngresarBeneficiarioComponent1750258524690,
    ObtenerBeneficiarioSegunFiltroComponent1750258524691,
    AltaAutomaticaContratoComponent1750258524693,
    CargarServiciosDisponiblesComponent1750258524694,
    ContratarDebitoAutomaticoComponent1750258524695,
    ObtenerDetalledeOrdendeCuentaComponent1750258524697,
    ObtenerDetalledePagoComponent1750258524699,
    ObtenerDetalleOrdenSegunCampoComponent1750258524701,
    ObtenerDetallePagoOrdenComponent1750258524703,
    ObtenerDeudaComponent1750258524704,
    ObtenerResumenOrdenComponent1750258524705,
    ObtenerServiciosComponent1750258524706,
    ObtenerValoresOrdenComponent1750258524707,
    ObtenerValoresOrdenSegunCampoComponent1750258524709,
    AutorizarOrdenComponent1750258524710,
    DetenerOrdenComponent1750258524711,
    IngresarOrdenPagoComponent1750258524712,
    ProcesarOrdenComponent1750258524713,
    RechazarOrdenComponent1750258524715,
    AnularPagoDeudaComponent1750258524717,
    PagarDeudaDesdeCuentaComponent1750258524718,
    RegistrarPagoDeudaComponent1750258524719,
    RegistrarPagoEnLineaComponent1750258524723,
    RegistrarPagoEnLineaDesdeCuentaComponent1750258524724,
    VisualizarListaResumenCabezalComponent1750258524725,
    VisualizarListaResumenCabezalOrdenComponent1750258524727,
    VisualizarOrdendeArchivoParaCuentaComponent1750258524728,
    VisualizarResultadoProcesamientoComponent1750258524729,
    VisualizarResumenCabezalComponent1750258524731,
    VisualizarSituacionArchivosComponent1750258524733,
    VisualizarSituacionLineasComponent1750258524735,
    CHATComponent1750258524737,
    ActualizarComponent1750258524739,
    ActualizarDocumentoDigitalComponent1750258524740,
    ActualizarDomicilioComponent1750258524741,
    ActualizarInformacionAdicionalComponent1750258524742,
    ActualizarRegistroEmpleadoComponent1750258524743,
    ActualizarTelefonoComponent1750258524744,
    AgregarDomicilioComponent1750258524745,
    AgregarInformacionAdicionalComponent1750258524748,
    AgregarIntegranteComponent1750258524749,
    AgregarTelefonoComponent1750258524751,
    AsociarDocumentoDigitalComponent1750258524752,
    EliminarDocumentoDigitalComponent1750258524753,
    EliminarDomicilioComponent1750258524755,
    EliminarInformacionAdicionalComponent1750258524756,
    EliminarIntegranteComponent1750258524757,
    HabilitarComponent1750258524758,
    InhabilitarComponent1750258524760,
    ModificarEjecutivoComponent1750258524761,
    CrearComponent1750258524763,
    CrearconPersonaExistenteComponent1750258524765,
    CrearParaPersonaJuridicaComponent1750258524766,
    ObtenerComponent1750258524768,
    ObtenerAhorrosProgramadosComponent1750258524771,
    ObtenerBolsillosComponent1750258524773,
    ObtenerClasificacionesInternasComponent1750258524774,
    ObtenerCuentaClienteComponent1750258524775,
    ObtenerCuentasCorrientesSaldoContableComponent1750258524777,
    ObtenerCuentasCorrientesSaldoDisponibleComponent1750258524778,
    ObtenerCuentasdeAhorroSaldoContableComponent1750258524779,
    ObtenerCuentasdeAhorroSaldoDisponibleComponent1750258524781,
    ObtenerDatosComponent1750258524784,
    ObtenerDetallePosicionComponent1750258524785,
    ObtenerDocumentoDigitalComponent1750258524787,
    ObtenerDocumentosDigitalesComponent1750258524789,
    ObtenerDomiciliosComponent1750258524790,
    ObtenerFacultadesComponent1750258524791,
    ObtenerIdentificadorUnicoComponent1750258524793,
    ObtenerInformacionAdicionalComponent1750258524794,
    ObtenerIntegrantesComponent1750258524796,
    ObtenerLimitesComponent1750258524798,
    ObtenerMotivosInhabilitacionComponent1750258524800,
    ObtenerPerfilComponent1750258524802,
    ObtenerPlazosFijosComponent1750258524803,
    ObtenerPlazosFijosCanceladosComponent1750258524805,
    ObtenerPlazosFijosconAvanceComponent1750258524806,
    ObtenerPosicionComponent1750258524807,
    ObtenerPrestamosComponent1750258524808,
    ObtenerPrestamosCanceladosComponent1750258524809,
    ObtenerPrestamosCastigadosComponent1750258524810,
    ObtenerPrestamosconAvanceComponent1750258524811,
    ObtenerResumendeProductosCierredeanoComponent1750258524814,
    ObtenerResumendeProductosSaldosContablesComponent1750258524816,
    ObtenerResumendeProductosSaldosDisponiblesComponent1750258524818,
    ObtenerResumenporProductoaCierreAnoComponent1750258524819,
    ObtenerRiesgodeCreditoComponent1750258524820,
    ObtenerSaldosdeOtrosProductosComponent1750258524821,
    ObtenerSectoresComponent1750258524823,
    ObtenerSegmentosComponent1750258524824,
    ObtenerTarjetasdeDebitoComponent1750258524825,
    ObtenerTelefonosComponent1750258524827,
    ObtenerTiposdeIntegracionComponent1750258524828,
    ObtenerTitularRepresentativoComponent1750258524829,
    ObtenerTitulosComponent1750258524830,
    ValidarExistenciaComponent1750258524832,
    VerificarEmpleadoComponent1750258524834,
    ObtenerAgenciasBancoComponent1750258524835,
    ObtenerBancosComponent1750258524836,
    ObtenerDetalleSucursalComponent1750258524837,
    ObtenerSucursalesPrincipalesComponent1750258524838,
    ObtenerActividadesComponent1750258524840,
    ObtenerActividadesporTipoComponent1750258524841,
    ObtenerEjecutivosComponent1750258524842,
    ObtenerTiposdeActividadComponent1750258524843,
    ObtenerTiposdeTarjetaComponent1750258524844,
    ObtenerImpuestosComponent1750258524845,
    ObtenerTiposdeDocumentoDigitalComponent1750258524846,
    ObtenerEstadosComponent1750258524848,
    ObtenerInstruccionesComponent1750258524852,
    ObtenerPaquetesComponent1750258524853,
    ObtenerTiposdeTextoComponent1750258524912,
    ObtenerCalendariodeSucursalComponent1750258524914,
    ObtenerCalendariosComponent1750258524916,
    ObtenerDetalledeCalendarioComponent1750258524917,
    ObtenerDetalledeCalendariodeSucursalComponent1750258524936,
    ObtenerDolarUSAComponent1750258524940,
    ObtenerEmpresaComponent1750258524942,
    ObtenerFechadeSistemaComponent1750258524943,
    ObtenerMonedaNacionalComponent1750258524944,
    ObtenerMonedasComponent1750258524945,
    ObtenerSucursalesComponent1750258524946,
    ObtenerAgrupadoresDomicilioComponent1750258524948,
    ObtenerBarriosyColoniasComponent1750258524949,
    ObtenerCiudadesyLocalidadesComponent1750258524950,
    ObtenerCodigosdeDomicilioComponent1750258524951,
    ObtenerEstadosProvinciasyDepartamentosComponent1750258524952,
    ObtenerPaisesComponent1750258524953,
    ObtenerTiposdeListasNegrasComponent1750258524954,
    ObtenerTiposdeTelefonoComponent1750258524955,
    ObtenerTiposdeViviendaComponent1750258524955,
    ObtenerPizarraporModuloComponent1750258524956,
    ObtenerPizarrasComponent1750258524957,
    ObtenerMenusComponent1750258524958,
    ObtenerPerfilesComponent1750258524959,
    AgregarTextoAsientoComponent1750258524960,
    AgregarTextoOrdinalComponent1750258524961,
    AnularMovimientoComponent1750258524962,
    ActualizarCondicionImpositivaComponent1750258524964,
    CrearCondicionImpositivaComponent1750258524966,
    ObtenerIdBantotalMovimientoComponent1750258524967,
    ObtenerIdBantotalOperacionComponent1750258524968,
    ObtenerIdBantotalProductoComponent1750258524969,
    ObtenerIdentificadorUnicodeMovimientoComponent1750258524970,
    ObtenerIdentificadorUnicodeOperacionComponent1750258524971,
    ObtenerIdentificadorUnicodeProductoComponent1750258524971,
    ObtenerClientedeunaOperacionComponent1750258524972,
    ObtenerCondicionImpositivaComponent1750258524973,
    ObtenerDetalledeMovimientoComponent1750258524974,
    ObtenerDetalledeOrdinalComponent1750258524975,
    ObtenerIntegrantesdeOperacionComponent1750258524976,
    ObtenerTextosdeMovimientoComponent1750258524977,
    RegistrarAsientoComponent1750258524978,
    RegistrarAsientoFechaValorComponent1750258524979,
    CancelarComponent1750258524981,
    CashInComponent1750258524983,
    CashOutComponent1750258524984,
    ContratarComponent1750258524985,
    ObtenerDatosComponent1750258524986,
    ObtenerMovimientosComponent1750258524986,
    ObtenerProductosComponent1750258524987,
    ObtenerProductosCVComponent1750258524988,
    ObtenerChequeraComponent1750258524989,
    ObtenerChequerasComponent1750258524990,
    ObtenerChequesdeChequeraComponent1750258524991,
    ObtenerComisionChequeraComponent1750258524992,
    ObtenerEstadodeChequeraComponent1750258524992,
    ObtenerSolicitudesdeChequerasComponent1750258524993,
    ObtenerTiposdeChequeraComponent1750258524994,
    ObtenerTiposdeChequeraporProductoComponent1750258524994,
    EliminarChequeraComponent1750258524996,
    RegistrarOrdendeNoPagodeChequeraComponent1750258524997,
    RegistrarOrdendeNoPagodeChequesComponent1750258524999,
    SolicitarChequeraComponent1750258525001,
    ContratarconPeriodicidadComponent1750258525002,
    ContratarProductoComponent1750258525003,
    ContratarProductoconAltadeFacultadesComponent1750258525003,
    ObtenerAcuerdosComponent1750258525004,
    ObtenerDatosComponent1750258525005,
    ObtenerEstadodeCuentaComponent1750258525006,
    ObtenerEvoluciondeSaldosComponent1750258525007,
    ObtenerProductosComponent1750258525008,
    ContratarconPeriodicidadComponent1750258525009,
    ContratarProductoComponent1750258525010,
    ContratarProductoconAltadeFacultadesComponent1750258525011,
    ObtenerDatosComponent1750258525013,
    ObtenerEstadodeCuentaComponent1750258525015,
    ObtenerEvoluciondeSaldosComponent1750258525017,
    ObtenerProductosComponent1750258525018,
    ActualizarBeneficiariosComponent1750258525019,
    ObtenerBeneficiariosComponent1750258525020,
    ActualizarDocumentoDigitalComponent1750258525021,
    AsociarDocumentoDigitalComponent1750258525022,
    EliminarDocumentoDigitalComponent1750258525023,
    ObtenerDocumentoDigitalComponent1750258525024,
    ObtenerDocumentosDigitalesComponent1750258525025,
    ObtenerBolsillosComponent1750258525026,
    ObtenerCBUdeCuentaVistaComponent1750258525027,
    ObtenerCuentaVistadeCBUComponent1750258525028,
    ObtenerDetalleBloqueoComponent1750258525029,
    ObtenerEstadodeCuentaporPeriodoComponent1750258525031,
    ObtenerEstadoDeOperacionComponent1750258525033,
    ObtenerFacultadesComponent1750258525035,
    ObtenerPaqueteComponent1750258525036,
    ObtenerPeriododeAcreditacionComponent1750258525038,
    ObtenerPeriodosdeAcreditacionComponent1750258525037,
    ObtenerSaldoBloqueadoComponent1750258525039,
    ObtenerSaldoDisponibleComponent1750258525039,
    ObtenerSaldosBloqueadosComponent1750258525040,
    AcreditarEnCuentaComponent1750258525042,
    ActivarComponent1750258525042,
    ActualizarPeriododeAcreditacionComponent1750258525043,
    BloquearSaldoComponent1750258525044,
    CancelarComponent1750258525045,
    DebitarEnCuentaComponent1750258525047,
    DesbloquearSaldoComponent1750258525049,
    ActualizarPerfilTransaccionalComponent1750258525050,
    AgregarPerfilTransaccionalComponent1750258525051,
    ObtenerPerfilTransaccionalComponent1750258525053,
    TraspasarConTipoDeCambioEspecialComponent1750258525054,
    TraspasarEntreCuentasdelaMismaPersonaComponent1750258525056,
    TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750258525057,
    TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750258525059,
    TraspasarEntreCuentasPropiasComponent1750258525061,
    TraspasarEntreCuentasPropiascontipodecambioComponent1750258525060,
    TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750258525060,
    TraspasarEntreCuentasTercerosComponent1750258525067,
    TraspasarEntreCuentasTerceroscontipodecambioComponent1750258525064,
    TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750258525066,
    ActualizarBeneficiariosComponent1750258525068,
    ObtenerBeneficiariosComponent1750258525070,
    ContratarComponent1750258525071,
    ContratarConFacultadesComponent1750258525072,
    ContratarSimulacionComponent1750258525073,
    ActualizarDocumentoDigitalComponent1750258525075,
    AsociarDocumentoDigitalComponent1750258525076,
    EliminarDocumentoDigitalComponent1750258525077,
    ObtenerDocumentoDigitalComponent1750258525080,
    ModificarCuentaDestinoalVencimientoComponent1750258525082,
    ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750258525083,
    ModificarInstruccionComponent1750258525086,
    ObtenerAvanceComponent1750258525087,
    ObtenerDatosComponent1750258525088,
    ObtenerDatosPrecancelacionComponent1750258525089,
    ObtenerDocumentosDigitalesComponent1750258525091,
    ObtenerInstruccionComponent1750258525093,
    ObtenerInstruccionesHabilitadosComponent1750258525092,
    ObtenerMovimientosComponent1750258525096,
    ObtenerPeriodosHabilitadosComponent1750258525099,
    ObtenerProductosComponent1750258525100,
    ObtenerProductosHabilitadosComponent1750258525101,
    ObtenerTasadePrecancelacionComponent1750258525102,
    PrecancelarComponent1750258525103,
    SimularComponent1750258525104,
    SimularConCronogramaComponent1750258525106,
    ConfirmarListaComponent1750258525108,
    CrearListaComponent1750258525109,
    CrearListaChequesComponent1750258525110,
    ObtenerProductosComponent1750258525112,
    ObtenerTiposDeDesembolsoComponent1750258525114,
    SeleccionarOpcionDesembolsoComponent1750258525115,
    ObtenerAgrupadoresComponent1750258525116,
    ObtenerCierredeSaldosporMonedaComponent1750258525117,
    ObtenerCondicionesGeneralesComponent1750258525118,
    ObtenerIndicadoresComponent1750258525119,
    ObtenerMetodosMasEjecutadosComponent1750258525120,
    ObtenerMonedasIndicesComponent1750258525122,
    ObtenerRubrosBolsaComponent1750258525123,
    ObtenerServiciosMasEjecutadosComponent1750258525125,
    ObtenerSesionesPorUsuarioComponent1750258525126,
    ObtenerSucursalesCajasComponent1750258525127,
    ObtenerTransaccionesporEstadosComponent1750258525128,
    BuscarClienteComponent1750258525130,
    CompletarTareaComponent1750258525131,
    CrearSolicitudAmpliacionComponent1750258525133,
    CrearSolicitudIndividualComponent1750258525134,
    CrearSolicitudRenovacionComponent1750258525135,
    AgregarFiadorComponent1750258525136,
    EliminarFiadorComponent1750258525137,
    ActualizarGrupoComponent1750258525138,
    ActualizarIntegrantedeGrupoComponent1750258525140,
    AgregarGrupoComponent1750258525142,
    AgregarIntegranteaGrupoComponent1750258525145,
    CrearSolicitudGrupalComponent1750258525148,
    HabilitarIntegrantedeunGrupoComponent1750258525150,
    InhabilitarIntegrantedeunGrupoComponent1750258525151,
    ObtenerDetalleGrupoComponent1750258525152,
    ObtenerGruposComponent1750258525153,
    ObtenerIntegrantesdeGrupoComponent1750258525155,
    ObtenerTiposdeGrupoComponent1750258525157,
    ObtenerTiposdeIntegranteComponent1750258525158,
    SimularPrestamoAmortizableGrupalComponent1750258525160,
    ObtenerAsesoresComponent1750258525161,
    ObtenerCampanasComponent1750258525166,
    ObtenerDestinosCreditoComponent1750258525168,
    ObtenerOperacionesClienteComponent1750258525169,
    ObtenerOrigenesdeCaptacionComponent1750258525171,
    ObtenerProductosComponent1750258525173,
    ObtenerSolicitudesClienteComponent1750258525174,
    ObtenerTiposAvalComponent1750258525175,
    AgregarOperacionesaCancelarComponent1750258525177,
    ObtenerOperacionesaCancelarComponent1750258525178,
    QuitarOperacionesaCancelarComponent1750258525180,
    SimularLibreAmortizacionComponent1750258525182,
    SimularPrestamoAmortizableComponent1750258525185,
    SimularPrestamoPlazoFijoComponent1750258525188,
    ValidarPoliticasComponent1750258525191,
    ObtenerCantidadCuotasComponent1750258525192,
    ObtenerCapitalComponent1750258525193,
    ObtenerComisionesComponent1750258525195,
    ObtenerComisionesporCuotaComponent1750258525197,
    ObtenerDiasPrimerPeriodoComponent1750258525199,
    ObtenerPeriodoEntreCuotasComponent1750258525202,
    ObtenerPermiteSegurosdelMismoTipoComponent1750258525201,
    ObtenerPlazoComponent1750258525204,
    ObtenerRequiereSegurodeVidaObligatorioComponent1750258525205,
    ObtenerSegurosComponent1750258525206,
    ObtenerItemsModeloComponent1750258525218,
    ObtenerModelosPAEComponent1750258525220,
    ObtenerScoresComponent1750258525221,
    ObtenerTiposDeModelosComponent1750258525223,
    ContratarPrestamoComponent1750258525225,
    ContratarVehicularComponent1750258525226,
    CrearClienteComponent1750258525227,
    CrearPersonaClienteComponent1750258525230,
    ObtenerDatosdeUsuarioComponent1750258525233,
    ObtenerDetalledeOfertaAmortizableComponent1750258525237,
    ObtenerDetalleOfertaVehicularComponent1750258525239,
    ObtenerMarcasComponent1750258525241,
    ObtenerModelosComponent1750258525242,
    ObtenerPartnersComponent1750258525243,
    ObtenerPrestamosdeClienteComponent1750258525248,
    ObtenerProductosComponent1750258525244,
    ObtenerProductosdelPartnerComponent1750258525246,
    ObtenerPuntosdeVentaComponent1750258525250,
    ObtenerVendedoresComponent1750258525252,
    ObtenerVersionesComponent1750258525253,
    SimularOfertasComponent1750258525255,
    SimularOfertasVehicularComponent1750258525257,
    SimularPrestamoComponent1750258525259,
    SimularVehicularComponent1750258525261,
    ObtenerCorrelativoGuiaComponent1750258525262,
    ObtenerCorrelativoGuiaEspecialComponent1750258525265,
    ObtenerGuiadeProcesoComponent1750258525267,
    ObtenerGuiaEspecialdeProcesoComponent1750258525269,
    ObtenerOpcionGeneraldeProcesoComponent1750258525270,
    ObtenerOpcionGeneralPorModuloComponent1750258525271,
    ObtenerProgramaParticularComponent1750258525272,
    ActualizarComponent1750258525275,
    ActualizarCelularComponent1750258525276,
    ActualizarContactoComponent1750258525278,
    ActualizarConyugeComponent1750258525284,
    ActualizarCorreoElectronicoComponent1750258525279,
    ActualizarDomicilioComponent1750258525285,
    ActualizarFATCAComponent1750258525286,
    ActualizarInformacionAdicionalComponent1750258525287,
    ActualizarInformacionFinancieraComponent1750258525289,
    ActualizarIntegrantedePersonaJuridicaComponent1750258525291,
    ActualizarPersonaJuridicaComponent1750258525293,
    ActualizarProfesionComponent1750258525294,
    ActualizarReferenciaComponent1750258525297,
    ActualizarRegistroEmpleadoComponent1750258525299,
    ActualizarTelefonoComponent1750258525301,
    ActualizarVictimaHechoViolentoComponent1750258525302,
    ModificarDocumentoAdicionalComponent1750258525304,
    AgregaraListaNegraComponent1750258525305,
    AgregarContactoComponent1750258525306,
    AgregarCorreoElectronicoComponent1750258525307,
    AgregarDatosPEPComponent1750258525309,
    AgregarDocumentoAdicionalComponent1750258525310,
    AgregarDomicilioComponent1750258525311,
    AgregarEstadoFinancieroComponent1750258525314,
    AgregarFATCAComponent1750258525316,
    AgregarInformacionAdicionalComponent1750258525317,
    AgregarInformacionFinancieraComponent1750258525318,
    AgregarIntegranteaPersonaJuridicaComponent1750258525319,
    AgregarPersonaVinculadaComponent1750258525320,
    AgregarReferenciaComponent1750258525321,
    AgregarTelefonoComponent1750258525322,
    AgregarVictimaHechoViolentoComponent1750258525323,
    CrearComponent1750258525324,
    CrearConyugeComponent1750258525325,
    CrearPersonaJuridicaComponent1750258525326,
    CrearReducidoComponent1750258525327,
    ActualizarDocumentoDigitalComponent1750258525329,
    AsociarDocumentoDigitalComponent1750258525331,
    EliminarDocumentoDigitalComponent1750258525333,
    ObtenerDocumentoDigitalComponent1750258525334,
    ObtenerDocumentosDigitalesComponent1750258525336,
    EliminarConyugeComponent1750258525338,
    EliminarDocumentoAdicionalComponent1750258525339,
    EliminarDomicilioComponent1750258525341,
    EliminarInformacionAdicionalComponent1750258525343,
    EliminarIntegrantedePersonaJuridicaComponent1750258525347,
    EliminarPersonaVinculadaComponent1750258525349,
    EliminarProfesionComponent1750258525350,
    ObtenerComponent1750258525354,
    ObtenerConceptoComponent1750258525355,
    ObtenerContactosComponent1750258525357,
    ObtenerConyugeComponent1750258525360,
    ObtenerCorreosElectronicosComponent1750258525358,
    ObtenerCuentasClienteComponent1750258525359,
    ObtenerDatosPEPComponent1750258525361,
    ObtenerDocumentosAdicionalesComponent1750258525363,
    ObtenerDomiciliosComponent1750258525365,
    ObtenerEstadosCivilesComponent1750258525367,
    ObtenerFacultadesComponent1750258525369,
    ObtenerFATCAComponent1750258525370,
    ObtenerHobbiesComponent1750258525371,
    ObtenerHobbyComponent1750258525372,
    ObtenerIdBantotalComponent1750258525373,
    ObtenerIdentidadesdeGeneroComponent1750258525374,
    ObtenerIdentificadorUnicoComponent1750258525375,
    ObtenerInformacionAdicionalComponent1750258525376,
    ObtenerInformacionFinancieraComponent1750258525377,
    ObtenerIntegrantesPersonaJuridicaComponent1750258525378,
    ObtenerLimitesComponent1750258525382,
    ObtenerNaturalezasJuridicasComponent1750258525384,
    ObtenerNivelesEducativosComponent1750258525385,
    ObtenerOcupacionesComponent1750258525386,
    ObtenerPersonaJuridicaComponent1750258525387,
    ObtenerPersonasComponent1750258525388,
    ObtenerPersonasJuridicasComponent1750258525389,
    ObtenerPersonasVinculadasComponent1750258525391,
    ObtenerProfesionComponent1750258525393,
    ObtenerProfesionesComponent1750258525392,
    ObtenerReferenciasComponent1750258525394,
    ObtenerTarjetasdeDebitoComponent1750258525397,
    ObtenerTelefonosComponent1750258525400,
    ObtenerTipodePersonaComponent1750258525401,
    ObtenerTiposdeDocumentoComponent1750258525403,
    ObtenerTiposDeFuncionarioPublicoComponent1750258525404,
    ObtenerTiposDePEPComponent1750258525406,
    ObtenerTitularesDelTelefonoComponent1750258525407,
    ObtenerVictimaHechoViolentoComponent1750258525408,
    ObtenerVinculosComponent1750258525409,
    ObtenerVinculosdeAfinidadComponent1750258525410,
    ObtenerVinculosdeConsanguinidadComponent1750258525410,
    ObtenerVinculosJuridicosComponent1750258525411,
    EvaluarPAEComponent1750258525413,
    ValidarCorreoElectronicoComponent1750258525415,
    ValidarDocumentoComponent1750258525417,
    ValidarenListasNegrasComponent1750258525418,
    ValidarExistenciaComponent1750258525419,
    ValidarListasInhabilitadosComponent1750258525421,
    VerificarEmpleadoComponent1750258525422,
    ConvertirTasaAnualEfectivaaLinealComponent1750258525423,
    ConvertirTasaAnualLinealaEfectivaComponent1750258525424,
    ConvertirTasaMensualEfectivaaLinealComponent1750258525425,
    ConvertirTasaMensualLinealaEfectivaComponent1750258525426,
    ObtenerCotizacionComponent1750258525428,
    ObtenerCotizacionaFechaComponent1750258525429,
    ObtenerCotizacionCierreComponent1750258525431,
    ObtenerPizarraEspecialporTransaccionComponent1750258525432,
    ObtenerPrecioaFechaComponent1750258525433,
    ObtenerPrecioEspecieComponent1750258525434,
    ObtenerTasadeOperacionComponent1750258525435,
    ObtenerTasaParaClienteComponent1750258525436,
    ObtenerTasaParaProductoComponent1750258525437,
    ObtenerTipodeCambioComponent1750258525439,
    ObtenerTiposDeCambioEspecialesComponent1750258525440,
    CancelarComponent1750258525441,
    CancelaraFechaComponent1750258525442,
    CancelaraFechaTercerosComponent1750258525443,
    CancelarTercerosComponent1750258525445,
    ContratarComponent1750258525449,
    ContratarAmpliacionComponent1750258525491,
    ContratarRefinanciacionComponent1750258525493,
    ContratarRefinanciacionporDeudaTotalComponent1750258525494,
    ContratarRefinanciacionporSaldoCapitalComponent1750258525495,
    ActualizarDocumentoDigitalComponent1750258525498,
    AsociarDocumentoDigitalComponent1750258525499,
    EliminarDocumentoDigitalComponent1750258525500,
    ObtenerDocumentoDigitalComponent1750258525501,
    ObtenerDocumentosDigitalesComponent1750258525503,
    ObtenerCronogramaComponent1750258525504,
    ObtenerCronogramaaFechaComponent1750258525506,
    ObtenerCronogramaconPagosaFechaComponent1750258525507,
    ObtenerCronogramaenEspecieComponent1750258525508,
    ObtenerCronogramaOriginalComponent1750258525509,
    ObtenerCuentadeCobroComponent1750258525510,
    ObtenerDatosdelProximoVencimientoComponent1750258525511,
    ObtenerDetalleComponent1750258525512,
    ObtenerDetalleaFechaComponent1750258525514,
    ObtenerDetalledeCancelacionTotalComponent1750258525515,
    ObtenerDetalledeOfertaComponent1750258525517,
    ObtenerDetalledeOfertaAmortizableComponent1750258525518,
    ObtenerDetalledeOperacionesaRefinanciarComponent1750258525519,
    ObtenerDetalledePrestamoCanceladoComponent1750258525520,
    ObtenerDetallePagoPrestamoComponent1750258525521,
    ObtenerDetalleReducidoComponent1750258525522,
    ObtenerDetalleSimulacionComponent1750258525523,
    ObtenerDeudaComponent1750258525524,
    ObtenerDeudaPrestamoCastigadoComponent1750258525525,
    ObtenerDeudaVencidaComponent1750258525527,
    ObtenerFechadeIncumplimientoComponent1750258525531,
    ObtenerFechadeUltimoPagoComponent1750258525534,
    ObtenerFechasdePagoComponent1750258525536,
    ObtenerInformacionAdicionalComponent1750258525537,
    ObtenerMontodeCancelacionComponent1750258525538,
    ObtenerMotivosPrecancelacionComponent1750258525539,
    ObtenerPagosdeCuotaComponent1750258525540,
    ObtenerPagosdeunPrestamoComponent1750258525541,
    ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750258525542,
    ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750258525543,
    ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750258525544,
    ObtenerProductosComponent1750258525545,
    ObtenerProductosRefinanciacionComponent1750258525546,
    ObtenerRefinanciacionSimuladaComponent1750258525548,
    AbonaraCuentaComponent1750258525549,
    ActualizarInformacionAdicionalComponent1750258525550,
    ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750258525551,
    AgregarCuentadeCobroComponent1750258525552,
    AgregarInformacionAdicionalComponent1750258525552,
    EliminarCuentadeCobroComponent1750258525553,
    EliminarInformacionAdicionalComponent1750258525554,
    SolicitarPrecancelacionComponent1750258525555,
    AdelantarCapitalConReduccionDeCuotaComponent1750258525556,
    AdelantarCapitalConReduccionDePlazoComponent1750258525556,
    PagarCuotaComponent1750258525557,
    PagarCuotaaFechaComponent1750258525558,
    PagarCuotaaFechaTercerosComponent1750258525559,
    PagarCuotaTercerosComponent1750258525559,
    ResimularAmortizableComponent1750258525561,
    ResimularAmpliacionComponent1750258525563,
    ResimularRefinanciacionComponent1750258525565,
    SimularComponent1750258525567,
    SimularAmortizableComponent1750258525569,
    SimularAmortizableSinClienteComponent1750258525570,
    SimularAmpliacionComponent1750258525571,
    SimularAmpliacionIngresandoSegurosComponent1750258525573,
    SimularDespejandoCapitalyCantidaddeCuotasComponent1750258525574,
    SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750258525575,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750258525576,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750258525577,
    SimularDespejandoFechadeVencimientoyTasaComponent1750258525578,
    SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750258525580,
    SimularIngresandoBalloonComponent1750258525582,
    SimularIngresandoBalloonSinClienteComponent1750258525583,
    SimularIngresandoSegurosComponent1750258525585,
    SimularIngresandoSegurosSinClienteComponent1750258525586,
    SimularLibreAmortizacionComponent1750258525587,
    SimularLibreAmortizacionSinClienteComponent1750258525588,
    SimularOfertasComponent1750258525589,
    SimularPlazoFijoComponent1750258525590,
    SimularRefinanciacionComponent1750258525591,
    SimularRefinanciacionporDeudaTotalComponent1750258525593,
    SimularRefinanciacionporSaldoCapitalComponent1750258525594,
    ActualizarTextosComponent1750258525595,
    AgregarTextosComponent1750258525597,
    EliminarTextosComponent1750258525599,
    ObtenerTextosComponent1750258525600,
    EvaluarRegladeNegocioComponent1750258525603,
    ObtenerReglasdeNegocioComponent1750258525604,
    ObtenerVariablesReglaComponent1750258525606,
    ValidarDatosRegladeNegocioComponent1750258525607,
    AutorizarExcepcionComponent1750258525608,
    ObtenerDetalledeExcepcionComponent1750258525609,
    ObtenerExcepcionesComponent1750258525611,
    RechazarExcepcionComponent1750258525613,
    RegistrarDispositivoComponent1750258525615,
    ContratarSeguroComponent1750258525617,
    ObtenerMontosDeUnSeguroComponent1750258525619,
    ObtenerSegurosComponent1750258525620,
    ObtenerSegurosAPagarComponent1750258525622,
    PagarSeguroComponent1750258525624,
    ObtenerCodigosdeLimitesComponent1750258525633,
    ObtenerCuentaPreferencialComponent1750258525626,
    ObtenerCuentasaAsociarComponent1750258525628,
    ObtenerCuentasAsociadasComponent1750258525629,
    ObtenerCuentasAsociadasPorTipoComponent1750258525631,
    ObtenerDatosComponent1750258525634,
    ObtenerDatosContactoComponent1750258525635,
    ObtenerIdentificadorUnicoComponent1750258525636,
    ObtenerLimitesComponent1750258525637,
    ObtenerMovimientosComponent1750258525638,
    ObtenerTarjetaComponent1750258525638,
    ObtenerTarjetaHabienteComponent1750258525639,
    ObtenerTarjetasAdicionalesComponent1750258525640,
    ObtenerTiposdeCuentaComponent1750258525641,
    ActivarComponent1750258525642,
    ActualizarCuentaPreferencialComponent1750258525643,
    ActualizarDatosContactoComponent1750258525644,
    AsociarCuentaComponent1750258525645,
    BlanquearPinComponent1750258525646,
    BloquearComponent1750258525648,
    BloquearDesdeREDComponent1750258525649,
    CrearComponent1750258525650,
    CrearConCuentasAsociadasComponent1750258525651,
    DenunciarComponent1750258525653,
    DenunciarDesdeREDComponent1750258525654,
    DesbloquearComponent1750258525655,
    DesbloquearDesdeREDComponent1750258525656,
    EliminarCuentaAsociadaComponent1750258525657,
    ModificarLimiteComponent1750258525658,
    ComprarComponent1750258525659,
    ObtenerEstadoCompraComponent1750258525660,
    ObtenerGruposComponent1750258525661,
    ObtenerValoresComponent1750258525662,
    AgregarPerfilComponent1750258525665,
    CrearComponent1750258525666,
    EliminarPerfilComponent1750258525667,
    EliminarUsuarioComponent1750258525668,
    HabilitarEnCanalComponent1750258525669,
    HabilitarUsuarioComponent1750258525670,
    InhabilitarUsuarioComponent1750258525671,
    ModificarComponent1750258525672,
    ObtenerComponent1750258525673,
    ObtenerPerfilesComponent1750258525674,
    ObtenerUsuariosComponent1750258525675,
    ObtenerUsuariosParaPerfilComponent1750258525676,
    ObtenerMetadataDeTareaComponent1750258525677,
    ObtenerProcesosHabilitadosComponent1750258525678,
    ObtenerRolesComponent1750258525680,
    ObtenerRolesdeTareaComponent1750258525682,
    ObtenerTareasdeProcesoComponent1750258525684,
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
    ContratarSimulacionComponent1750258524551,
    CrearComponent1750258524560,
    SimularComponent1750258524563,
    ActualizarDocumentoDigitalComponent1750258524576,
    AsociarDocumentoDigitalComponent1750258524577,
    EliminarDocumentoDigitalComponent1750258524579,
    ObtenerDocumentoDigitalComponent1750258524581,
    ObtenerDocumentosDigitalesComponent1750258524583,
    ModificarCuentaDestinoComponent1750258524587,
    ModificarCuentaOrigenComponent1750258524590,
    ModificarFechadeAbonoComponent1750258524591,
    ModificarMetadeAhorroComponent1750258524593,
    ModificarMontodeAbonoComponent1750258524595,
    ObtenerComponent1750258524597,
    ObtenerCronogramaAbonosComponent1750258524599,
    ObtenerCuentasDestinoHabilitadasComponent1750258524601,
    ObtenerCuentasOrigenHabilitadasComponent1750258524603,
    ObtenerEstadodeCuentaComponent1750258524605,
    ObtenerPeriodosHabilitadosComponent1750258524607,
    ObtenerPlazosHabilitadosComponent1750258524608,
    ObtenerProductosComponent1750258524609,
    AnularChequeElectronicoComponent1750258524611,
    AsignarIdaChequeElectronicoComponent1750258524613,
    CrearChequeraElectronicaComponent1750258524615,
    DepositarChequeElectronicodeBancoPropioComponent1750258524619,
    DepositarChequeElectronicodeOtroBancoComponent1750258524621,
    DepositarChequeElectronicoenCustodiaComponent1750258524622,
    EmitirChequeElectronicoComponent1750258524624,
    EmitirChequeElectronicodeChequeraComponent1750258524626,
    HabilitarChequeElectronicoComponent1750258524627,
    CrearAdhesionComponent1750258524629,
    CrearStopDebitComponent1750258524632,
    CrearStopDebitparaAdhesionconImporteComponent1750258524635,
    EliminarStopDebitComponent1750258524636,
    ObtenerAdhesionesComponent1750258524638,
    ObtenerDebitosComponent1750258524640,
    ObtenerEmpresasOriginantesComponent1750258524641,
    ObtenerStopDebitsComponent1750258524643,
    ReversarDebitosComponent1750258524644,
    SolicitarBajadeAdhesionComponent1750258524645,
    AutenticacionComponent1750258524647,
    ObtenerDetalledeEjecucionComponent1750258524649,
    ObtenerDetalledeProcesoComponent1750258524652,
    ObtenerProcesosconErrorComponent1750258524653,
    ObtenerProcesosCriticosComponent1750258524655,
    ObtenerProcesosDiariosComponent1750258524656,
    ObtenerProcesosMensualesComponent1750258524658,
    ObtenerProcesosReprocesablesComponent1750258524659,
    VerificarEstadoServidorComponent1750258524660,
    CalcularFechadeVencimientoComponent1750258524661,
    CalcularFechadeVencimientoenDiasHabilesComponent1750258524663,
    CalcularPlazoComponent1750258524665,
    CalcularPlazoenDiasHabilesComponent1750258524667,
    ObtenerFechaHabilComponent1750258524669,
    ObtenerFechaHabilAnteriorComponent1750258524670,
    ObtenerFechaHabilAnteriordeSucursalComponent1750258524672,
    ObtenerFechaHabildeSucursalComponent1750258524674,
    ObtenerInicioyFindeMesComponent1750258524675,
    ObtenerInicioyFindeMesdeSucursalComponent1750258524676,
    ObtenerProximaFechaHabilComponent1750258524677,
    ObtenerProximaFechaHabildeSucursalComponent1750258524678,
    AutorizarArchivoComponent1750258524680,
    CargarArchivoComponent1750258524682,
    CargarArchivoRecibidoComoDatoComponent1750258524684,
    DetenerArchivoComponent1750258524686,
    RechazarArchivoComponent1750258524687,
    CargarBeneficiariosComponent1750258524688,
    IngresarBeneficiarioComponent1750258524690,
    ObtenerBeneficiarioSegunFiltroComponent1750258524691,
    AltaAutomaticaContratoComponent1750258524693,
    CargarServiciosDisponiblesComponent1750258524694,
    ContratarDebitoAutomaticoComponent1750258524695,
    ObtenerDetalledeOrdendeCuentaComponent1750258524697,
    ObtenerDetalledePagoComponent1750258524699,
    ObtenerDetalleOrdenSegunCampoComponent1750258524701,
    ObtenerDetallePagoOrdenComponent1750258524703,
    ObtenerDeudaComponent1750258524704,
    ObtenerResumenOrdenComponent1750258524705,
    ObtenerServiciosComponent1750258524706,
    ObtenerValoresOrdenComponent1750258524707,
    ObtenerValoresOrdenSegunCampoComponent1750258524709,
    AutorizarOrdenComponent1750258524710,
    DetenerOrdenComponent1750258524711,
    IngresarOrdenPagoComponent1750258524712,
    ProcesarOrdenComponent1750258524713,
    RechazarOrdenComponent1750258524715,
    AnularPagoDeudaComponent1750258524717,
    PagarDeudaDesdeCuentaComponent1750258524718,
    RegistrarPagoDeudaComponent1750258524719,
    RegistrarPagoEnLineaComponent1750258524723,
    RegistrarPagoEnLineaDesdeCuentaComponent1750258524724,
    VisualizarListaResumenCabezalComponent1750258524725,
    VisualizarListaResumenCabezalOrdenComponent1750258524727,
    VisualizarOrdendeArchivoParaCuentaComponent1750258524728,
    VisualizarResultadoProcesamientoComponent1750258524729,
    VisualizarResumenCabezalComponent1750258524731,
    VisualizarSituacionArchivosComponent1750258524733,
    VisualizarSituacionLineasComponent1750258524735,
    CHATComponent1750258524737,
    ActualizarComponent1750258524739,
    ActualizarDocumentoDigitalComponent1750258524740,
    ActualizarDomicilioComponent1750258524741,
    ActualizarInformacionAdicionalComponent1750258524742,
    ActualizarRegistroEmpleadoComponent1750258524743,
    ActualizarTelefonoComponent1750258524744,
    AgregarDomicilioComponent1750258524745,
    AgregarInformacionAdicionalComponent1750258524748,
    AgregarIntegranteComponent1750258524749,
    AgregarTelefonoComponent1750258524751,
    AsociarDocumentoDigitalComponent1750258524752,
    EliminarDocumentoDigitalComponent1750258524753,
    EliminarDomicilioComponent1750258524755,
    EliminarInformacionAdicionalComponent1750258524756,
    EliminarIntegranteComponent1750258524757,
    HabilitarComponent1750258524758,
    InhabilitarComponent1750258524760,
    ModificarEjecutivoComponent1750258524761,
    CrearComponent1750258524763,
    CrearconPersonaExistenteComponent1750258524765,
    CrearParaPersonaJuridicaComponent1750258524766,
    ObtenerComponent1750258524768,
    ObtenerAhorrosProgramadosComponent1750258524771,
    ObtenerBolsillosComponent1750258524773,
    ObtenerClasificacionesInternasComponent1750258524774,
    ObtenerCuentaClienteComponent1750258524775,
    ObtenerCuentasCorrientesSaldoContableComponent1750258524777,
    ObtenerCuentasCorrientesSaldoDisponibleComponent1750258524778,
    ObtenerCuentasdeAhorroSaldoContableComponent1750258524779,
    ObtenerCuentasdeAhorroSaldoDisponibleComponent1750258524781,
    ObtenerDatosComponent1750258524784,
    ObtenerDetallePosicionComponent1750258524785,
    ObtenerDocumentoDigitalComponent1750258524787,
    ObtenerDocumentosDigitalesComponent1750258524789,
    ObtenerDomiciliosComponent1750258524790,
    ObtenerFacultadesComponent1750258524791,
    ObtenerIdentificadorUnicoComponent1750258524793,
    ObtenerInformacionAdicionalComponent1750258524794,
    ObtenerIntegrantesComponent1750258524796,
    ObtenerLimitesComponent1750258524798,
    ObtenerMotivosInhabilitacionComponent1750258524800,
    ObtenerPerfilComponent1750258524802,
    ObtenerPlazosFijosComponent1750258524803,
    ObtenerPlazosFijosCanceladosComponent1750258524805,
    ObtenerPlazosFijosconAvanceComponent1750258524806,
    ObtenerPosicionComponent1750258524807,
    ObtenerPrestamosComponent1750258524808,
    ObtenerPrestamosCanceladosComponent1750258524809,
    ObtenerPrestamosCastigadosComponent1750258524810,
    ObtenerPrestamosconAvanceComponent1750258524811,
    ObtenerResumendeProductosCierredeanoComponent1750258524814,
    ObtenerResumendeProductosSaldosContablesComponent1750258524816,
    ObtenerResumendeProductosSaldosDisponiblesComponent1750258524818,
    ObtenerResumenporProductoaCierreAnoComponent1750258524819,
    ObtenerRiesgodeCreditoComponent1750258524820,
    ObtenerSaldosdeOtrosProductosComponent1750258524821,
    ObtenerSectoresComponent1750258524823,
    ObtenerSegmentosComponent1750258524824,
    ObtenerTarjetasdeDebitoComponent1750258524825,
    ObtenerTelefonosComponent1750258524827,
    ObtenerTiposdeIntegracionComponent1750258524828,
    ObtenerTitularRepresentativoComponent1750258524829,
    ObtenerTitulosComponent1750258524830,
    ValidarExistenciaComponent1750258524832,
    VerificarEmpleadoComponent1750258524834,
    ObtenerAgenciasBancoComponent1750258524835,
    ObtenerBancosComponent1750258524836,
    ObtenerDetalleSucursalComponent1750258524837,
    ObtenerSucursalesPrincipalesComponent1750258524838,
    ObtenerActividadesComponent1750258524840,
    ObtenerActividadesporTipoComponent1750258524841,
    ObtenerEjecutivosComponent1750258524842,
    ObtenerTiposdeActividadComponent1750258524843,
    ObtenerTiposdeTarjetaComponent1750258524844,
    ObtenerImpuestosComponent1750258524845,
    ObtenerTiposdeDocumentoDigitalComponent1750258524846,
    ObtenerEstadosComponent1750258524848,
    ObtenerInstruccionesComponent1750258524852,
    ObtenerPaquetesComponent1750258524853,
    ObtenerTiposdeTextoComponent1750258524912,
    ObtenerCalendariodeSucursalComponent1750258524914,
    ObtenerCalendariosComponent1750258524916,
    ObtenerDetalledeCalendarioComponent1750258524917,
    ObtenerDetalledeCalendariodeSucursalComponent1750258524936,
    ObtenerDolarUSAComponent1750258524940,
    ObtenerEmpresaComponent1750258524942,
    ObtenerFechadeSistemaComponent1750258524943,
    ObtenerMonedaNacionalComponent1750258524944,
    ObtenerMonedasComponent1750258524945,
    ObtenerSucursalesComponent1750258524946,
    ObtenerAgrupadoresDomicilioComponent1750258524948,
    ObtenerBarriosyColoniasComponent1750258524949,
    ObtenerCiudadesyLocalidadesComponent1750258524950,
    ObtenerCodigosdeDomicilioComponent1750258524951,
    ObtenerEstadosProvinciasyDepartamentosComponent1750258524952,
    ObtenerPaisesComponent1750258524953,
    ObtenerTiposdeListasNegrasComponent1750258524954,
    ObtenerTiposdeTelefonoComponent1750258524955,
    ObtenerTiposdeViviendaComponent1750258524955,
    ObtenerPizarraporModuloComponent1750258524956,
    ObtenerPizarrasComponent1750258524957,
    ObtenerMenusComponent1750258524958,
    ObtenerPerfilesComponent1750258524959,
    AgregarTextoAsientoComponent1750258524960,
    AgregarTextoOrdinalComponent1750258524961,
    AnularMovimientoComponent1750258524962,
    ActualizarCondicionImpositivaComponent1750258524964,
    CrearCondicionImpositivaComponent1750258524966,
    ObtenerIdBantotalMovimientoComponent1750258524967,
    ObtenerIdBantotalOperacionComponent1750258524968,
    ObtenerIdBantotalProductoComponent1750258524969,
    ObtenerIdentificadorUnicodeMovimientoComponent1750258524970,
    ObtenerIdentificadorUnicodeOperacionComponent1750258524971,
    ObtenerIdentificadorUnicodeProductoComponent1750258524971,
    ObtenerClientedeunaOperacionComponent1750258524972,
    ObtenerCondicionImpositivaComponent1750258524973,
    ObtenerDetalledeMovimientoComponent1750258524974,
    ObtenerDetalledeOrdinalComponent1750258524975,
    ObtenerIntegrantesdeOperacionComponent1750258524976,
    ObtenerTextosdeMovimientoComponent1750258524977,
    RegistrarAsientoComponent1750258524978,
    RegistrarAsientoFechaValorComponent1750258524979,
    CancelarComponent1750258524981,
    CashInComponent1750258524983,
    CashOutComponent1750258524984,
    ContratarComponent1750258524985,
    ObtenerDatosComponent1750258524986,
    ObtenerMovimientosComponent1750258524986,
    ObtenerProductosComponent1750258524987,
    ObtenerProductosCVComponent1750258524988,
    ObtenerChequeraComponent1750258524989,
    ObtenerChequerasComponent1750258524990,
    ObtenerChequesdeChequeraComponent1750258524991,
    ObtenerComisionChequeraComponent1750258524992,
    ObtenerEstadodeChequeraComponent1750258524992,
    ObtenerSolicitudesdeChequerasComponent1750258524993,
    ObtenerTiposdeChequeraComponent1750258524994,
    ObtenerTiposdeChequeraporProductoComponent1750258524994,
    EliminarChequeraComponent1750258524996,
    RegistrarOrdendeNoPagodeChequeraComponent1750258524997,
    RegistrarOrdendeNoPagodeChequesComponent1750258524999,
    SolicitarChequeraComponent1750258525001,
    ContratarconPeriodicidadComponent1750258525002,
    ContratarProductoComponent1750258525003,
    ContratarProductoconAltadeFacultadesComponent1750258525003,
    ObtenerAcuerdosComponent1750258525004,
    ObtenerDatosComponent1750258525005,
    ObtenerEstadodeCuentaComponent1750258525006,
    ObtenerEvoluciondeSaldosComponent1750258525007,
    ObtenerProductosComponent1750258525008,
    ContratarconPeriodicidadComponent1750258525009,
    ContratarProductoComponent1750258525010,
    ContratarProductoconAltadeFacultadesComponent1750258525011,
    ObtenerDatosComponent1750258525013,
    ObtenerEstadodeCuentaComponent1750258525015,
    ObtenerEvoluciondeSaldosComponent1750258525017,
    ObtenerProductosComponent1750258525018,
    ActualizarBeneficiariosComponent1750258525019,
    ObtenerBeneficiariosComponent1750258525020,
    ActualizarDocumentoDigitalComponent1750258525021,
    AsociarDocumentoDigitalComponent1750258525022,
    EliminarDocumentoDigitalComponent1750258525023,
    ObtenerDocumentoDigitalComponent1750258525024,
    ObtenerDocumentosDigitalesComponent1750258525025,
    ObtenerBolsillosComponent1750258525026,
    ObtenerCBUdeCuentaVistaComponent1750258525027,
    ObtenerCuentaVistadeCBUComponent1750258525028,
    ObtenerDetalleBloqueoComponent1750258525029,
    ObtenerEstadodeCuentaporPeriodoComponent1750258525031,
    ObtenerEstadoDeOperacionComponent1750258525033,
    ObtenerFacultadesComponent1750258525035,
    ObtenerPaqueteComponent1750258525036,
    ObtenerPeriododeAcreditacionComponent1750258525038,
    ObtenerPeriodosdeAcreditacionComponent1750258525037,
    ObtenerSaldoBloqueadoComponent1750258525039,
    ObtenerSaldoDisponibleComponent1750258525039,
    ObtenerSaldosBloqueadosComponent1750258525040,
    AcreditarEnCuentaComponent1750258525042,
    ActivarComponent1750258525042,
    ActualizarPeriododeAcreditacionComponent1750258525043,
    BloquearSaldoComponent1750258525044,
    CancelarComponent1750258525045,
    DebitarEnCuentaComponent1750258525047,
    DesbloquearSaldoComponent1750258525049,
    ActualizarPerfilTransaccionalComponent1750258525050,
    AgregarPerfilTransaccionalComponent1750258525051,
    ObtenerPerfilTransaccionalComponent1750258525053,
    TraspasarConTipoDeCambioEspecialComponent1750258525054,
    TraspasarEntreCuentasdelaMismaPersonaComponent1750258525056,
    TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750258525057,
    TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750258525059,
    TraspasarEntreCuentasPropiasComponent1750258525061,
    TraspasarEntreCuentasPropiascontipodecambioComponent1750258525060,
    TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750258525060,
    TraspasarEntreCuentasTercerosComponent1750258525067,
    TraspasarEntreCuentasTerceroscontipodecambioComponent1750258525064,
    TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750258525066,
    ActualizarBeneficiariosComponent1750258525068,
    ObtenerBeneficiariosComponent1750258525070,
    ContratarComponent1750258525071,
    ContratarConFacultadesComponent1750258525072,
    ContratarSimulacionComponent1750258525073,
    ActualizarDocumentoDigitalComponent1750258525075,
    AsociarDocumentoDigitalComponent1750258525076,
    EliminarDocumentoDigitalComponent1750258525077,
    ObtenerDocumentoDigitalComponent1750258525080,
    ModificarCuentaDestinoalVencimientoComponent1750258525082,
    ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750258525083,
    ModificarInstruccionComponent1750258525086,
    ObtenerAvanceComponent1750258525087,
    ObtenerDatosComponent1750258525088,
    ObtenerDatosPrecancelacionComponent1750258525089,
    ObtenerDocumentosDigitalesComponent1750258525091,
    ObtenerInstruccionComponent1750258525093,
    ObtenerInstruccionesHabilitadosComponent1750258525092,
    ObtenerMovimientosComponent1750258525096,
    ObtenerPeriodosHabilitadosComponent1750258525099,
    ObtenerProductosComponent1750258525100,
    ObtenerProductosHabilitadosComponent1750258525101,
    ObtenerTasadePrecancelacionComponent1750258525102,
    PrecancelarComponent1750258525103,
    SimularComponent1750258525104,
    SimularConCronogramaComponent1750258525106,
    ConfirmarListaComponent1750258525108,
    CrearListaComponent1750258525109,
    CrearListaChequesComponent1750258525110,
    ObtenerProductosComponent1750258525112,
    ObtenerTiposDeDesembolsoComponent1750258525114,
    SeleccionarOpcionDesembolsoComponent1750258525115,
    ObtenerAgrupadoresComponent1750258525116,
    ObtenerCierredeSaldosporMonedaComponent1750258525117,
    ObtenerCondicionesGeneralesComponent1750258525118,
    ObtenerIndicadoresComponent1750258525119,
    ObtenerMetodosMasEjecutadosComponent1750258525120,
    ObtenerMonedasIndicesComponent1750258525122,
    ObtenerRubrosBolsaComponent1750258525123,
    ObtenerServiciosMasEjecutadosComponent1750258525125,
    ObtenerSesionesPorUsuarioComponent1750258525126,
    ObtenerSucursalesCajasComponent1750258525127,
    ObtenerTransaccionesporEstadosComponent1750258525128,
    BuscarClienteComponent1750258525130,
    CompletarTareaComponent1750258525131,
    CrearSolicitudAmpliacionComponent1750258525133,
    CrearSolicitudIndividualComponent1750258525134,
    CrearSolicitudRenovacionComponent1750258525135,
    AgregarFiadorComponent1750258525136,
    EliminarFiadorComponent1750258525137,
    ActualizarGrupoComponent1750258525138,
    ActualizarIntegrantedeGrupoComponent1750258525140,
    AgregarGrupoComponent1750258525142,
    AgregarIntegranteaGrupoComponent1750258525145,
    CrearSolicitudGrupalComponent1750258525148,
    HabilitarIntegrantedeunGrupoComponent1750258525150,
    InhabilitarIntegrantedeunGrupoComponent1750258525151,
    ObtenerDetalleGrupoComponent1750258525152,
    ObtenerGruposComponent1750258525153,
    ObtenerIntegrantesdeGrupoComponent1750258525155,
    ObtenerTiposdeGrupoComponent1750258525157,
    ObtenerTiposdeIntegranteComponent1750258525158,
    SimularPrestamoAmortizableGrupalComponent1750258525160,
    ObtenerAsesoresComponent1750258525161,
    ObtenerCampanasComponent1750258525166,
    ObtenerDestinosCreditoComponent1750258525168,
    ObtenerOperacionesClienteComponent1750258525169,
    ObtenerOrigenesdeCaptacionComponent1750258525171,
    ObtenerProductosComponent1750258525173,
    ObtenerSolicitudesClienteComponent1750258525174,
    ObtenerTiposAvalComponent1750258525175,
    AgregarOperacionesaCancelarComponent1750258525177,
    ObtenerOperacionesaCancelarComponent1750258525178,
    QuitarOperacionesaCancelarComponent1750258525180,
    SimularLibreAmortizacionComponent1750258525182,
    SimularPrestamoAmortizableComponent1750258525185,
    SimularPrestamoPlazoFijoComponent1750258525188,
    ValidarPoliticasComponent1750258525191,
    ObtenerCantidadCuotasComponent1750258525192,
    ObtenerCapitalComponent1750258525193,
    ObtenerComisionesComponent1750258525195,
    ObtenerComisionesporCuotaComponent1750258525197,
    ObtenerDiasPrimerPeriodoComponent1750258525199,
    ObtenerPeriodoEntreCuotasComponent1750258525202,
    ObtenerPermiteSegurosdelMismoTipoComponent1750258525201,
    ObtenerPlazoComponent1750258525204,
    ObtenerRequiereSegurodeVidaObligatorioComponent1750258525205,
    ObtenerSegurosComponent1750258525206,
    ObtenerItemsModeloComponent1750258525218,
    ObtenerModelosPAEComponent1750258525220,
    ObtenerScoresComponent1750258525221,
    ObtenerTiposDeModelosComponent1750258525223,
    ContratarPrestamoComponent1750258525225,
    ContratarVehicularComponent1750258525226,
    CrearClienteComponent1750258525227,
    CrearPersonaClienteComponent1750258525230,
    ObtenerDatosdeUsuarioComponent1750258525233,
    ObtenerDetalledeOfertaAmortizableComponent1750258525237,
    ObtenerDetalleOfertaVehicularComponent1750258525239,
    ObtenerMarcasComponent1750258525241,
    ObtenerModelosComponent1750258525242,
    ObtenerPartnersComponent1750258525243,
    ObtenerPrestamosdeClienteComponent1750258525248,
    ObtenerProductosComponent1750258525244,
    ObtenerProductosdelPartnerComponent1750258525246,
    ObtenerPuntosdeVentaComponent1750258525250,
    ObtenerVendedoresComponent1750258525252,
    ObtenerVersionesComponent1750258525253,
    SimularOfertasComponent1750258525255,
    SimularOfertasVehicularComponent1750258525257,
    SimularPrestamoComponent1750258525259,
    SimularVehicularComponent1750258525261,
    ObtenerCorrelativoGuiaComponent1750258525262,
    ObtenerCorrelativoGuiaEspecialComponent1750258525265,
    ObtenerGuiadeProcesoComponent1750258525267,
    ObtenerGuiaEspecialdeProcesoComponent1750258525269,
    ObtenerOpcionGeneraldeProcesoComponent1750258525270,
    ObtenerOpcionGeneralPorModuloComponent1750258525271,
    ObtenerProgramaParticularComponent1750258525272,
    ActualizarComponent1750258525275,
    ActualizarCelularComponent1750258525276,
    ActualizarContactoComponent1750258525278,
    ActualizarConyugeComponent1750258525284,
    ActualizarCorreoElectronicoComponent1750258525279,
    ActualizarDomicilioComponent1750258525285,
    ActualizarFATCAComponent1750258525286,
    ActualizarInformacionAdicionalComponent1750258525287,
    ActualizarInformacionFinancieraComponent1750258525289,
    ActualizarIntegrantedePersonaJuridicaComponent1750258525291,
    ActualizarPersonaJuridicaComponent1750258525293,
    ActualizarProfesionComponent1750258525294,
    ActualizarReferenciaComponent1750258525297,
    ActualizarRegistroEmpleadoComponent1750258525299,
    ActualizarTelefonoComponent1750258525301,
    ActualizarVictimaHechoViolentoComponent1750258525302,
    ModificarDocumentoAdicionalComponent1750258525304,
    AgregaraListaNegraComponent1750258525305,
    AgregarContactoComponent1750258525306,
    AgregarCorreoElectronicoComponent1750258525307,
    AgregarDatosPEPComponent1750258525309,
    AgregarDocumentoAdicionalComponent1750258525310,
    AgregarDomicilioComponent1750258525311,
    AgregarEstadoFinancieroComponent1750258525314,
    AgregarFATCAComponent1750258525316,
    AgregarInformacionAdicionalComponent1750258525317,
    AgregarInformacionFinancieraComponent1750258525318,
    AgregarIntegranteaPersonaJuridicaComponent1750258525319,
    AgregarPersonaVinculadaComponent1750258525320,
    AgregarReferenciaComponent1750258525321,
    AgregarTelefonoComponent1750258525322,
    AgregarVictimaHechoViolentoComponent1750258525323,
    CrearComponent1750258525324,
    CrearConyugeComponent1750258525325,
    CrearPersonaJuridicaComponent1750258525326,
    CrearReducidoComponent1750258525327,
    ActualizarDocumentoDigitalComponent1750258525329,
    AsociarDocumentoDigitalComponent1750258525331,
    EliminarDocumentoDigitalComponent1750258525333,
    ObtenerDocumentoDigitalComponent1750258525334,
    ObtenerDocumentosDigitalesComponent1750258525336,
    EliminarConyugeComponent1750258525338,
    EliminarDocumentoAdicionalComponent1750258525339,
    EliminarDomicilioComponent1750258525341,
    EliminarInformacionAdicionalComponent1750258525343,
    EliminarIntegrantedePersonaJuridicaComponent1750258525347,
    EliminarPersonaVinculadaComponent1750258525349,
    EliminarProfesionComponent1750258525350,
    ObtenerComponent1750258525354,
    ObtenerConceptoComponent1750258525355,
    ObtenerContactosComponent1750258525357,
    ObtenerConyugeComponent1750258525360,
    ObtenerCorreosElectronicosComponent1750258525358,
    ObtenerCuentasClienteComponent1750258525359,
    ObtenerDatosPEPComponent1750258525361,
    ObtenerDocumentosAdicionalesComponent1750258525363,
    ObtenerDomiciliosComponent1750258525365,
    ObtenerEstadosCivilesComponent1750258525367,
    ObtenerFacultadesComponent1750258525369,
    ObtenerFATCAComponent1750258525370,
    ObtenerHobbiesComponent1750258525371,
    ObtenerHobbyComponent1750258525372,
    ObtenerIdBantotalComponent1750258525373,
    ObtenerIdentidadesdeGeneroComponent1750258525374,
    ObtenerIdentificadorUnicoComponent1750258525375,
    ObtenerInformacionAdicionalComponent1750258525376,
    ObtenerInformacionFinancieraComponent1750258525377,
    ObtenerIntegrantesPersonaJuridicaComponent1750258525378,
    ObtenerLimitesComponent1750258525382,
    ObtenerNaturalezasJuridicasComponent1750258525384,
    ObtenerNivelesEducativosComponent1750258525385,
    ObtenerOcupacionesComponent1750258525386,
    ObtenerPersonaJuridicaComponent1750258525387,
    ObtenerPersonasComponent1750258525388,
    ObtenerPersonasJuridicasComponent1750258525389,
    ObtenerPersonasVinculadasComponent1750258525391,
    ObtenerProfesionComponent1750258525393,
    ObtenerProfesionesComponent1750258525392,
    ObtenerReferenciasComponent1750258525394,
    ObtenerTarjetasdeDebitoComponent1750258525397,
    ObtenerTelefonosComponent1750258525400,
    ObtenerTipodePersonaComponent1750258525401,
    ObtenerTiposdeDocumentoComponent1750258525403,
    ObtenerTiposDeFuncionarioPublicoComponent1750258525404,
    ObtenerTiposDePEPComponent1750258525406,
    ObtenerTitularesDelTelefonoComponent1750258525407,
    ObtenerVictimaHechoViolentoComponent1750258525408,
    ObtenerVinculosComponent1750258525409,
    ObtenerVinculosdeAfinidadComponent1750258525410,
    ObtenerVinculosdeConsanguinidadComponent1750258525410,
    ObtenerVinculosJuridicosComponent1750258525411,
    EvaluarPAEComponent1750258525413,
    ValidarCorreoElectronicoComponent1750258525415,
    ValidarDocumentoComponent1750258525417,
    ValidarenListasNegrasComponent1750258525418,
    ValidarExistenciaComponent1750258525419,
    ValidarListasInhabilitadosComponent1750258525421,
    VerificarEmpleadoComponent1750258525422,
    ConvertirTasaAnualEfectivaaLinealComponent1750258525423,
    ConvertirTasaAnualLinealaEfectivaComponent1750258525424,
    ConvertirTasaMensualEfectivaaLinealComponent1750258525425,
    ConvertirTasaMensualLinealaEfectivaComponent1750258525426,
    ObtenerCotizacionComponent1750258525428,
    ObtenerCotizacionaFechaComponent1750258525429,
    ObtenerCotizacionCierreComponent1750258525431,
    ObtenerPizarraEspecialporTransaccionComponent1750258525432,
    ObtenerPrecioaFechaComponent1750258525433,
    ObtenerPrecioEspecieComponent1750258525434,
    ObtenerTasadeOperacionComponent1750258525435,
    ObtenerTasaParaClienteComponent1750258525436,
    ObtenerTasaParaProductoComponent1750258525437,
    ObtenerTipodeCambioComponent1750258525439,
    ObtenerTiposDeCambioEspecialesComponent1750258525440,
    CancelarComponent1750258525441,
    CancelaraFechaComponent1750258525442,
    CancelaraFechaTercerosComponent1750258525443,
    CancelarTercerosComponent1750258525445,
    ContratarComponent1750258525449,
    ContratarAmpliacionComponent1750258525491,
    ContratarRefinanciacionComponent1750258525493,
    ContratarRefinanciacionporDeudaTotalComponent1750258525494,
    ContratarRefinanciacionporSaldoCapitalComponent1750258525495,
    ActualizarDocumentoDigitalComponent1750258525498,
    AsociarDocumentoDigitalComponent1750258525499,
    EliminarDocumentoDigitalComponent1750258525500,
    ObtenerDocumentoDigitalComponent1750258525501,
    ObtenerDocumentosDigitalesComponent1750258525503,
    ObtenerCronogramaComponent1750258525504,
    ObtenerCronogramaaFechaComponent1750258525506,
    ObtenerCronogramaconPagosaFechaComponent1750258525507,
    ObtenerCronogramaenEspecieComponent1750258525508,
    ObtenerCronogramaOriginalComponent1750258525509,
    ObtenerCuentadeCobroComponent1750258525510,
    ObtenerDatosdelProximoVencimientoComponent1750258525511,
    ObtenerDetalleComponent1750258525512,
    ObtenerDetalleaFechaComponent1750258525514,
    ObtenerDetalledeCancelacionTotalComponent1750258525515,
    ObtenerDetalledeOfertaComponent1750258525517,
    ObtenerDetalledeOfertaAmortizableComponent1750258525518,
    ObtenerDetalledeOperacionesaRefinanciarComponent1750258525519,
    ObtenerDetalledePrestamoCanceladoComponent1750258525520,
    ObtenerDetallePagoPrestamoComponent1750258525521,
    ObtenerDetalleReducidoComponent1750258525522,
    ObtenerDetalleSimulacionComponent1750258525523,
    ObtenerDeudaComponent1750258525524,
    ObtenerDeudaPrestamoCastigadoComponent1750258525525,
    ObtenerDeudaVencidaComponent1750258525527,
    ObtenerFechadeIncumplimientoComponent1750258525531,
    ObtenerFechadeUltimoPagoComponent1750258525534,
    ObtenerFechasdePagoComponent1750258525536,
    ObtenerInformacionAdicionalComponent1750258525537,
    ObtenerMontodeCancelacionComponent1750258525538,
    ObtenerMotivosPrecancelacionComponent1750258525539,
    ObtenerPagosdeCuotaComponent1750258525540,
    ObtenerPagosdeunPrestamoComponent1750258525541,
    ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750258525542,
    ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750258525543,
    ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750258525544,
    ObtenerProductosComponent1750258525545,
    ObtenerProductosRefinanciacionComponent1750258525546,
    ObtenerRefinanciacionSimuladaComponent1750258525548,
    AbonaraCuentaComponent1750258525549,
    ActualizarInformacionAdicionalComponent1750258525550,
    ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750258525551,
    AgregarCuentadeCobroComponent1750258525552,
    AgregarInformacionAdicionalComponent1750258525552,
    EliminarCuentadeCobroComponent1750258525553,
    EliminarInformacionAdicionalComponent1750258525554,
    SolicitarPrecancelacionComponent1750258525555,
    AdelantarCapitalConReduccionDeCuotaComponent1750258525556,
    AdelantarCapitalConReduccionDePlazoComponent1750258525556,
    PagarCuotaComponent1750258525557,
    PagarCuotaaFechaComponent1750258525558,
    PagarCuotaaFechaTercerosComponent1750258525559,
    PagarCuotaTercerosComponent1750258525559,
    ResimularAmortizableComponent1750258525561,
    ResimularAmpliacionComponent1750258525563,
    ResimularRefinanciacionComponent1750258525565,
    SimularComponent1750258525567,
    SimularAmortizableComponent1750258525569,
    SimularAmortizableSinClienteComponent1750258525570,
    SimularAmpliacionComponent1750258525571,
    SimularAmpliacionIngresandoSegurosComponent1750258525573,
    SimularDespejandoCapitalyCantidaddeCuotasComponent1750258525574,
    SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750258525575,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750258525576,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750258525577,
    SimularDespejandoFechadeVencimientoyTasaComponent1750258525578,
    SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750258525580,
    SimularIngresandoBalloonComponent1750258525582,
    SimularIngresandoBalloonSinClienteComponent1750258525583,
    SimularIngresandoSegurosComponent1750258525585,
    SimularIngresandoSegurosSinClienteComponent1750258525586,
    SimularLibreAmortizacionComponent1750258525587,
    SimularLibreAmortizacionSinClienteComponent1750258525588,
    SimularOfertasComponent1750258525589,
    SimularPlazoFijoComponent1750258525590,
    SimularRefinanciacionComponent1750258525591,
    SimularRefinanciacionporDeudaTotalComponent1750258525593,
    SimularRefinanciacionporSaldoCapitalComponent1750258525594,
    ActualizarTextosComponent1750258525595,
    AgregarTextosComponent1750258525597,
    EliminarTextosComponent1750258525599,
    ObtenerTextosComponent1750258525600,
    EvaluarRegladeNegocioComponent1750258525603,
    ObtenerReglasdeNegocioComponent1750258525604,
    ObtenerVariablesReglaComponent1750258525606,
    ValidarDatosRegladeNegocioComponent1750258525607,
    AutorizarExcepcionComponent1750258525608,
    ObtenerDetalledeExcepcionComponent1750258525609,
    ObtenerExcepcionesComponent1750258525611,
    RechazarExcepcionComponent1750258525613,
    RegistrarDispositivoComponent1750258525615,
    ContratarSeguroComponent1750258525617,
    ObtenerMontosDeUnSeguroComponent1750258525619,
    ObtenerSegurosComponent1750258525620,
    ObtenerSegurosAPagarComponent1750258525622,
    PagarSeguroComponent1750258525624,
    ObtenerCodigosdeLimitesComponent1750258525633,
    ObtenerCuentaPreferencialComponent1750258525626,
    ObtenerCuentasaAsociarComponent1750258525628,
    ObtenerCuentasAsociadasComponent1750258525629,
    ObtenerCuentasAsociadasPorTipoComponent1750258525631,
    ObtenerDatosComponent1750258525634,
    ObtenerDatosContactoComponent1750258525635,
    ObtenerIdentificadorUnicoComponent1750258525636,
    ObtenerLimitesComponent1750258525637,
    ObtenerMovimientosComponent1750258525638,
    ObtenerTarjetaComponent1750258525638,
    ObtenerTarjetaHabienteComponent1750258525639,
    ObtenerTarjetasAdicionalesComponent1750258525640,
    ObtenerTiposdeCuentaComponent1750258525641,
    ActivarComponent1750258525642,
    ActualizarCuentaPreferencialComponent1750258525643,
    ActualizarDatosContactoComponent1750258525644,
    AsociarCuentaComponent1750258525645,
    BlanquearPinComponent1750258525646,
    BloquearComponent1750258525648,
    BloquearDesdeREDComponent1750258525649,
    CrearComponent1750258525650,
    CrearConCuentasAsociadasComponent1750258525651,
    DenunciarComponent1750258525653,
    DenunciarDesdeREDComponent1750258525654,
    DesbloquearComponent1750258525655,
    DesbloquearDesdeREDComponent1750258525656,
    EliminarCuentaAsociadaComponent1750258525657,
    ModificarLimiteComponent1750258525658,
    ComprarComponent1750258525659,
    ObtenerEstadoCompraComponent1750258525660,
    ObtenerGruposComponent1750258525661,
    ObtenerValoresComponent1750258525662,
    AgregarPerfilComponent1750258525665,
    CrearComponent1750258525666,
    EliminarPerfilComponent1750258525667,
    EliminarUsuarioComponent1750258525668,
    HabilitarEnCanalComponent1750258525669,
    HabilitarUsuarioComponent1750258525670,
    InhabilitarUsuarioComponent1750258525671,
    ModificarComponent1750258525672,
    ObtenerComponent1750258525673,
    ObtenerPerfilesComponent1750258525674,
    ObtenerUsuariosComponent1750258525675,
    ObtenerUsuariosParaPerfilComponent1750258525676,
    ObtenerMetadataDeTareaComponent1750258525677,
    ObtenerProcesosHabilitadosComponent1750258525678,
    ObtenerRolesComponent1750258525680,
    ObtenerRolesdeTareaComponent1750258525682,
    ObtenerTareasdeProcesoComponent1750258525684,
    //exports End page components
    SidebarComponent    // exporta sólo lo que necesites fuera del módulo
  ]
})
export class ApiDocsModule {}