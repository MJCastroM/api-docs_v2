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
import { ContratarSimulacionComponent1750713393003 } from './api-doc-page/Ahorro-Programado/Contratar/ContratarSimulacion.component';
import { CrearComponent1750713393010 } from './api-doc-page/Ahorro-Programado/Contratar/Crear.component';
import { SimularComponent1750713393014 } from './api-doc-page/Ahorro-Programado/Contratar/Simular.component';
import { ActualizarDocumentoDigitalComponent1750713393017 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750713393020 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750713393024 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750713393027 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750713393030 } from './api-doc-page/Ahorro-Programado/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ModificarCuentaDestinoComponent1750713393033 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarCuentaDestino.component';
import { ModificarCuentaOrigenComponent1750713393036 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarCuentaOrigen.component';
import { ModificarFechadeAbonoComponent1750713393039 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarFechadeAbono.component';
import { ModificarMetadeAhorroComponent1750713393042 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarMetadeAhorro.component';
import { ModificarMontodeAbonoComponent1750713393046 } from './api-doc-page/Ahorro-Programado/Modificar/ModificarMontodeAbono.component';
import { ObtenerComponent1750713393049 } from './api-doc-page/Ahorro-Programado/Obtener/Obtener.component';
import { ObtenerCronogramaAbonosComponent1750713393053 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCronogramaAbonos.component';
import { ObtenerCuentasDestinoHabilitadasComponent1750713393055 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCuentasDestinoHabilitadas.component';
import { ObtenerCuentasOrigenHabilitadasComponent1750713393057 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerCuentasOrigenHabilitadas.component';
import { ObtenerEstadodeCuentaComponent1750713393059 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerPeriodosHabilitadosComponent1750713393062 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerPeriodosHabilitados.component';
import { ObtenerPlazosHabilitadosComponent1750713393065 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerPlazosHabilitados.component';
import { ObtenerProductosComponent1750713393068 } from './api-doc-page/Ahorro-Programado/Obtener/ObtenerProductos.component';
import { AnularChequeElectronicoComponent1750713393071 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/AnularChequeElectronico.component';
import { AsignarIdaChequeElectronicoComponent1750713393074 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/AsignarIdaChequeElectronico.component';
import { CrearChequeraElectronicaComponent1750713393075 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/CrearChequeraElectronica.component';
import { DepositarChequeElectronicodeBancoPropioComponent1750713393078 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicodeBancoPropio.component';
import { DepositarChequeElectronicodeOtroBancoComponent1750713393082 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicodeOtroBanco.component';
import { DepositarChequeElectronicoenCustodiaComponent1750713393085 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/DepositarChequeElectronicoenCustodia.component';
import { EmitirChequeElectronicoComponent1750713393087 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/EmitirChequeElectronico.component';
import { EmitirChequeElectronicodeChequeraComponent1750713393090 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/EmitirChequeElectronicodeChequera.component';
import { HabilitarChequeElectronicoComponent1750713393092 } from './api-doc-page/AR - Argentina/Cuentas-Corrientes/Cheque-Electrónico/HabilitarChequeElectronico.component';
import { CrearAdhesionComponent1750713393095 } from './api-doc-page/AR - Argentina/SNP/CrearAdhesion.component';
import { CrearStopDebitComponent1750713393100 } from './api-doc-page/AR - Argentina/SNP/CrearStopDebit.component';
import { CrearStopDebitparaAdhesionconImporteComponent1750713393104 } from './api-doc-page/AR - Argentina/SNP/CrearStopDebitparaAdhesionconImporte.component';
import { EliminarStopDebitComponent1750713393106 } from './api-doc-page/AR - Argentina/SNP/EliminarStopDebit.component';
import { ObtenerAdhesionesComponent1750713393108 } from './api-doc-page/AR - Argentina/SNP/ObtenerAdhesiones.component';
import { ObtenerDebitosComponent1750713393112 } from './api-doc-page/AR - Argentina/SNP/ObtenerDebitos.component';
import { ObtenerEmpresasOriginantesComponent1750713393116 } from './api-doc-page/AR - Argentina/SNP/ObtenerEmpresasOriginantes.component';
import { ObtenerStopDebitsComponent1750713393119 } from './api-doc-page/AR - Argentina/SNP/ObtenerStopDebits.component';
import { ReversarDebitosComponent1750713393121 } from './api-doc-page/AR - Argentina/SNP/ReversarDebitos.component';
import { SolicitarBajadeAdhesionComponent1750713393123 } from './api-doc-page/AR - Argentina/SNP/SolicitarBajadeAdhesion.component';
import { AutenticacionComponent1750713393125 } from './api-doc-page/Autenticación/Autenticacion.component';
import { ObtenerDetalledeEjecucionComponent1750713393127 } from './api-doc-page/Cadena-de-Cierre/ObtenerDetalledeEjecucion.component';
import { ObtenerDetalledeProcesoComponent1750713393131 } from './api-doc-page/Cadena-de-Cierre/ObtenerDetalledeProceso.component';
import { ObtenerProcesosconErrorComponent1750713393133 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosconError.component';
import { ObtenerProcesosCriticosComponent1750713393136 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosCriticos.component';
import { ObtenerProcesosDiariosComponent1750713393138 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosDiarios.component';
import { ObtenerProcesosMensualesComponent1750713393140 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosMensuales.component';
import { ObtenerProcesosReprocesablesComponent1750713393141 } from './api-doc-page/Cadena-de-Cierre/ObtenerProcesosReprocesables.component';
import { VerificarEstadoServidorComponent1750713393144 } from './api-doc-page/Cadena-de-Cierre/VerificarEstadoServidor.component';
import { CalcularFechadeVencimientoComponent1750713393147 } from './api-doc-page/Calendarios/Calcular/CalcularFechadeVencimiento.component';
import { CalcularFechadeVencimientoenDiasHabilesComponent1750713393150 } from './api-doc-page/Calendarios/Calcular/CalcularFechadeVencimientoenDiasHabiles.component';
import { CalcularPlazoComponent1750713393152 } from './api-doc-page/Calendarios/Calcular/CalcularPlazo.component';
import { CalcularPlazoenDiasHabilesComponent1750713393154 } from './api-doc-page/Calendarios/Calcular/CalcularPlazoenDiasHabiles.component';
import { ObtenerFechaHabilComponent1750713393156 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabil.component';
import { ObtenerFechaHabilAnteriorComponent1750713393158 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabilAnterior.component';
import { ObtenerFechaHabilAnteriordeSucursalComponent1750713393161 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabilAnteriordeSucursal.component';
import { ObtenerFechaHabildeSucursalComponent1750713393165 } from './api-doc-page/Calendarios/Obtener/ObtenerFechaHabildeSucursal.component';
import { ObtenerInicioyFindeMesComponent1750713393168 } from './api-doc-page/Calendarios/Obtener/ObtenerInicioyFindeMes.component';
import { ObtenerInicioyFindeMesdeSucursalComponent1750713393171 } from './api-doc-page/Calendarios/Obtener/ObtenerInicioyFindeMesdeSucursal.component';
import { ObtenerProximaFechaHabilComponent1750713393173 } from './api-doc-page/Calendarios/Obtener/ObtenerProximaFechaHabil.component';
import { ObtenerProximaFechaHabildeSucursalComponent1750713393175 } from './api-doc-page/Calendarios/Obtener/ObtenerProximaFechaHabildeSucursal.component';
import { AutorizarArchivoComponent1750713393178 } from './api-doc-page/CASH-Management/Archivo/AutorizarArchivo.component';
import { CargarArchivoComponent1750713393181 } from './api-doc-page/CASH-Management/Archivo/CargarArchivo.component';
import { CargarArchivoRecibidoComoDatoComponent1750713393183 } from './api-doc-page/CASH-Management/Archivo/CargarArchivoRecibidoComoDato.component';
import { DetenerArchivoComponent1750713393185 } from './api-doc-page/CASH-Management/Archivo/DetenerArchivo.component';
import { RechazarArchivoComponent1750713393187 } from './api-doc-page/CASH-Management/Archivo/RechazarArchivo.component';
import { CargarBeneficiariosComponent1750713393189 } from './api-doc-page/CASH-Management/Beneficiarios/CargarBeneficiarios.component';
import { IngresarBeneficiarioComponent1750713393191 } from './api-doc-page/CASH-Management/Beneficiarios/IngresarBeneficiario.component';
import { ObtenerBeneficiarioSegunFiltroComponent1750713393194 } from './api-doc-page/CASH-Management/Beneficiarios/ObtenerBeneficiarioSegunFiltro.component';
import { AltaAutomaticaContratoComponent1750713393198 } from './api-doc-page/CASH-Management/Contratar/AltaAutomaticaContrato.component';
import { CargarServiciosDisponiblesComponent1750713393201 } from './api-doc-page/CASH-Management/Contratar/CargarServiciosDisponibles.component';
import { ContratarDebitoAutomaticoComponent1750713393204 } from './api-doc-page/CASH-Management/Contratar/ContratarDebitoAutomatico.component';
import { ObtenerDetalledeOrdendeCuentaComponent1750713393206 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalledeOrdendeCuenta.component';
import { ObtenerDetalledePagoComponent1750713393208 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalledePago.component';
import { ObtenerDetalleOrdenSegunCampoComponent1750713393212 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetalleOrdenSegunCampo.component';
import { ObtenerDetallePagoOrdenComponent1750713393216 } from './api-doc-page/CASH-Management/Obtener/ObtenerDetallePagoOrden.component';
import { ObtenerDeudaComponent1750713393219 } from './api-doc-page/CASH-Management/Obtener/ObtenerDeuda.component';
import { ObtenerResumenOrdenComponent1750713393221 } from './api-doc-page/CASH-Management/Obtener/ObtenerResumenOrden.component';
import { ObtenerServiciosComponent1750713393223 } from './api-doc-page/CASH-Management/Obtener/ObtenerServicios.component';
import { ObtenerValoresOrdenComponent1750713393226 } from './api-doc-page/CASH-Management/Obtener/ObtenerValoresOrden.component';
import { ObtenerValoresOrdenSegunCampoComponent1750713393228 } from './api-doc-page/CASH-Management/Obtener/ObtenerValoresOrdenSegunCampo.component';
import { AutorizarOrdenComponent1750713393231 } from './api-doc-page/CASH-Management/Orden/AutorizarOrden.component';
import { DetenerOrdenComponent1750713393233 } from './api-doc-page/CASH-Management/Orden/DetenerOrden.component';
import { IngresarOrdenPagoComponent1750713393236 } from './api-doc-page/CASH-Management/Orden/IngresarOrdenPago.component';
import { ProcesarOrdenComponent1750713393240 } from './api-doc-page/CASH-Management/Orden/ProcesarOrden.component';
import { RechazarOrdenComponent1750713393242 } from './api-doc-page/CASH-Management/Orden/RechazarOrden.component';
import { AnularPagoDeudaComponent1750713393245 } from './api-doc-page/CASH-Management/Pagos/AnularPagoDeuda.component';
import { PagarDeudaDesdeCuentaComponent1750713393248 } from './api-doc-page/CASH-Management/Pagos/PagarDeudaDesdeCuenta.component';
import { RegistrarPagoDeudaComponent1750713393251 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoDeuda.component';
import { RegistrarPagoEnLineaComponent1750713393255 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoEnLinea.component';
import { RegistrarPagoEnLineaDesdeCuentaComponent1750713393258 } from './api-doc-page/CASH-Management/Pagos/RegistrarPagoEnLineaDesdeCuenta.component';
import { VisualizarListaResumenCabezalComponent1750713393264 } from './api-doc-page/CASH-Management/Visualizar/VisualizarListaResumenCabezal.component';
import { VisualizarListaResumenCabezalOrdenComponent1750713393267 } from './api-doc-page/CASH-Management/Visualizar/VisualizarListaResumenCabezalOrden.component';
import { VisualizarOrdendeArchivoParaCuentaComponent1750713393270 } from './api-doc-page/CASH-Management/Visualizar/VisualizarOrdendeArchivoParaCuenta.component';
import { VisualizarResultadoProcesamientoComponent1750713393273 } from './api-doc-page/CASH-Management/Visualizar/VisualizarResultadoProcesamiento.component';
import { VisualizarResumenCabezalComponent1750713393277 } from './api-doc-page/CASH-Management/Visualizar/VisualizarResumenCabezal.component';
import { VisualizarSituacionArchivosComponent1750713393283 } from './api-doc-page/CASH-Management/Visualizar/VisualizarSituacionArchivos.component';
import { VisualizarSituacionLineasComponent1750713393291 } from './api-doc-page/CASH-Management/Visualizar/VisualizarSituacionLineas.component';
import { CHATComponent1750713393295 } from './api-doc-page/CHAT/CHAT.component';
import { ActualizarComponent1750713393300 } from './api-doc-page/Clientes/Actualizar/Actualizar.component';
import { ActualizarDocumentoDigitalComponent1750713393304 } from './api-doc-page/Clientes/Actualizar/ActualizarDocumentoDigital.component';
import { ActualizarDomicilioComponent1750713393308 } from './api-doc-page/Clientes/Actualizar/ActualizarDomicilio.component';
import { ActualizarInformacionAdicionalComponent1750713393312 } from './api-doc-page/Clientes/Actualizar/ActualizarInformacionAdicional.component';
import { ActualizarRegistroEmpleadoComponent1750713393318 } from './api-doc-page/Clientes/Actualizar/ActualizarRegistroEmpleado.component';
import { ActualizarTelefonoComponent1750713393324 } from './api-doc-page/Clientes/Actualizar/ActualizarTelefono.component';
import { AgregarDomicilioComponent1750713393328 } from './api-doc-page/Clientes/Actualizar/AgregarDomicilio.component';
import { AgregarInformacionAdicionalComponent1750713393337 } from './api-doc-page/Clientes/Actualizar/AgregarInformacionAdicional.component';
import { AgregarIntegranteComponent1750713393340 } from './api-doc-page/Clientes/Actualizar/AgregarIntegrante.component';
import { AgregarTelefonoComponent1750713393344 } from './api-doc-page/Clientes/Actualizar/AgregarTelefono.component';
import { AsociarDocumentoDigitalComponent1750713393351 } from './api-doc-page/Clientes/Actualizar/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750713393355 } from './api-doc-page/Clientes/Actualizar/EliminarDocumentoDigital.component';
import { EliminarDomicilioComponent1750713393358 } from './api-doc-page/Clientes/Actualizar/EliminarDomicilio.component';
import { EliminarInformacionAdicionalComponent1750713393361 } from './api-doc-page/Clientes/Actualizar/EliminarInformacionAdicional.component';
import { EliminarIntegranteComponent1750713393365 } from './api-doc-page/Clientes/Actualizar/EliminarIntegrante.component';
import { HabilitarComponent1750713393367 } from './api-doc-page/Clientes/Actualizar/Habilitar.component';
import { InhabilitarComponent1750713393370 } from './api-doc-page/Clientes/Actualizar/Inhabilitar.component';
import { ModificarEjecutivoComponent1750713393372 } from './api-doc-page/Clientes/Actualizar/ModificarEjecutivo.component';
import { CrearComponent1750713393374 } from './api-doc-page/Clientes/Crear/Crear.component';
import { CrearconPersonaExistenteComponent1750713393376 } from './api-doc-page/Clientes/Crear/CrearconPersonaExistente.component';
import { CrearParaPersonaJuridicaComponent1750713393379 } from './api-doc-page/Clientes/Crear/CrearParaPersonaJuridica.component';
import { ObtenerComponent1750713393382 } from './api-doc-page/Clientes/Obtener/Obtener.component';
import { ObtenerAhorrosProgramadosComponent1750713393388 } from './api-doc-page/Clientes/Obtener/ObtenerAhorrosProgramados.component';
import { ObtenerBolsillosComponent1750713393391 } from './api-doc-page/Clientes/Obtener/ObtenerBolsillos.component';
import { ObtenerClasificacionesInternasComponent1750713393394 } from './api-doc-page/Clientes/Obtener/ObtenerClasificacionesInternas.component';
import { ObtenerCuentaClienteComponent1750713393398 } from './api-doc-page/Clientes/Obtener/ObtenerCuentaCliente.component';
import { ObtenerCuentasCorrientesSaldoContableComponent1750713393401 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasCorrientesSaldoContable.component';
import { ObtenerCuentasCorrientesSaldoDisponibleComponent1750713393403 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasCorrientesSaldoDisponible.component';
import { ObtenerCuentasdeAhorroSaldoContableComponent1750713393406 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasdeAhorroSaldoContable.component';
import { ObtenerCuentasdeAhorroSaldoDisponibleComponent1750713393410 } from './api-doc-page/Clientes/Obtener/ObtenerCuentasdeAhorroSaldoDisponible.component';
import { ObtenerDatosComponent1750713393415 } from './api-doc-page/Clientes/Obtener/ObtenerDatos.component';
import { ObtenerDetallePosicionComponent1750713393418 } from './api-doc-page/Clientes/Obtener/ObtenerDetallePosicion.component';
import { ObtenerDocumentoDigitalComponent1750713393420 } from './api-doc-page/Clientes/Obtener/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750713393422 } from './api-doc-page/Clientes/Obtener/ObtenerDocumentosDigitales.component';
import { ObtenerDomiciliosComponent1750713393425 } from './api-doc-page/Clientes/Obtener/ObtenerDomicilios.component';
import { ObtenerFacultadesComponent1750713393428 } from './api-doc-page/Clientes/Obtener/ObtenerFacultades.component';
import { ObtenerIdentificadorUnicoComponent1750713393431 } from './api-doc-page/Clientes/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerInformacionAdicionalComponent1750713393434 } from './api-doc-page/Clientes/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerIntegrantesComponent1750713393436 } from './api-doc-page/Clientes/Obtener/ObtenerIntegrantes.component';
import { ObtenerLimitesComponent1750713393438 } from './api-doc-page/Clientes/Obtener/ObtenerLimites.component';
import { ObtenerMotivosInhabilitacionComponent1750713393440 } from './api-doc-page/Clientes/Obtener/ObtenerMotivosInhabilitacion.component';
import { ObtenerPerfilComponent1750713393442 } from './api-doc-page/Clientes/Obtener/ObtenerPerfil.component';
import { ObtenerPlazosFijosComponent1750713393444 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijos.component';
import { ObtenerPlazosFijosCanceladosComponent1750713393448 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijosCancelados.component';
import { ObtenerPlazosFijosconAvanceComponent1750713393450 } from './api-doc-page/Clientes/Obtener/ObtenerPlazosFijosconAvance.component';
import { ObtenerPosicionComponent1750713393454 } from './api-doc-page/Clientes/Obtener/ObtenerPosicion.component';
import { ObtenerPrestamosComponent1750713393457 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamos.component';
import { ObtenerPrestamosCanceladosComponent1750713393461 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosCancelados.component';
import { ObtenerPrestamosCastigadosComponent1750713393467 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosCastigados.component';
import { ObtenerPrestamosconAvanceComponent1750713393470 } from './api-doc-page/Clientes/Obtener/ObtenerPrestamosconAvance.component';
import { ObtenerResumendeProductosCierredeanoComponent1750713393473 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosCierredeano.component';
import { ObtenerResumendeProductosSaldosContablesComponent1750713393475 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosSaldosContables.component';
import { ObtenerResumendeProductosSaldosDisponiblesComponent1750713393478 } from './api-doc-page/Clientes/Obtener/ObtenerResumendeProductosSaldosDisponibles.component';
import { ObtenerResumenporProductoaCierreAnoComponent1750713393482 } from './api-doc-page/Clientes/Obtener/ObtenerResumenporProductoaCierreAno.component';
import { ObtenerRiesgodeCreditoComponent1750713393485 } from './api-doc-page/Clientes/Obtener/ObtenerRiesgodeCredito.component';
import { ObtenerSaldosdeOtrosProductosComponent1750713393488 } from './api-doc-page/Clientes/Obtener/ObtenerSaldosdeOtrosProductos.component';
import { ObtenerSectoresComponent1750713393491 } from './api-doc-page/Clientes/Obtener/ObtenerSectores.component';
import { ObtenerSegmentosComponent1750713393494 } from './api-doc-page/Clientes/Obtener/ObtenerSegmentos.component';
import { ObtenerTarjetasdeDebitoComponent1750713393498 } from './api-doc-page/Clientes/Obtener/ObtenerTarjetasdeDebito.component';
import { ObtenerTelefonosComponent1750713393500 } from './api-doc-page/Clientes/Obtener/ObtenerTelefonos.component';
import { ObtenerTiposdeIntegracionComponent1750713393503 } from './api-doc-page/Clientes/Obtener/ObtenerTiposdeIntegracion.component';
import { ObtenerTitularRepresentativoComponent1750713393505 } from './api-doc-page/Clientes/Obtener/ObtenerTitularRepresentativo.component';
import { ObtenerTitulosComponent1750713393507 } from './api-doc-page/Clientes/Obtener/ObtenerTitulos.component';
import { ValidarExistenciaComponent1750713393510 } from './api-doc-page/Clientes/Validar/ValidarExistencia.component';
import { VerificarEmpleadoComponent1750713393515 } from './api-doc-page/Clientes/Validar/VerificarEmpleado.component';
import { ObtenerAgenciasBancoComponent1750713393519 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerAgenciasBanco.component';
import { ObtenerBancosComponent1750713393523 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerBancos.component';
import { ObtenerDetalleSucursalComponent1750713393525 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerDetalleSucursal.component';
import { ObtenerSucursalesPrincipalesComponent1750713393528 } from './api-doc-page/Configuración-Bantotal/Bancos/ObtenerSucursalesPrincipales.component';
import { ObtenerActividadesComponent1750713393532 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerActividades.component';
import { ObtenerActividadesporTipoComponent1750713393535 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerActividadesporTipo.component';
import { ObtenerEjecutivosComponent1750713393538 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerEjecutivos.component';
import { ObtenerTiposdeActividadComponent1750713393540 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerTiposdeActividad.component';
import { ObtenerTiposdeTarjetaComponent1750713393542 } from './api-doc-page/Configuración-Bantotal/Clientes/ObtenerTiposdeTarjeta.component';
import { ObtenerImpuestosComponent1750713393546 } from './api-doc-page/Configuración-Bantotal/ObtenerImpuestos.component';
import { ObtenerTiposdeDocumentoDigitalComponent1750713393549 } from './api-doc-page/Configuración-Bantotal/ObtenerTiposdeDocumentoDigital.component';
import { ObtenerEstadosComponent1750713393552 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerEstados.component';
import { ObtenerInstruccionesComponent1750713393554 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerInstrucciones.component';
import { ObtenerPaquetesComponent1750713393557 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerPaquetes.component';
import { ObtenerTiposdeTextoComponent1750713393560 } from './api-doc-page/Configuración-Bantotal/Operaciones/ObtenerTiposdeTexto.component';
import { ObtenerCalendariodeSucursalComponent1750713393564 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerCalendariodeSucursal.component';
import { ObtenerCalendariosComponent1750713393567 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerCalendarios.component';
import { ObtenerDetalledeCalendarioComponent1750713393569 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDetalledeCalendario.component';
import { ObtenerDetalledeCalendariodeSucursalComponent1750713393572 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDetalledeCalendariodeSucursal.component';
import { ObtenerDolarUSAComponent1750713393574 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerDolarUSA.component';
import { ObtenerEmpresaComponent1750713393577 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerEmpresa.component';
import { ObtenerFechadeSistemaComponent1750713393581 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerFechadeSistema.component';
import { ObtenerMonedaNacionalComponent1750713393584 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerMonedaNacional.component';
import { ObtenerMonedasComponent1750713393586 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerMonedas.component';
import { ObtenerSucursalesComponent1750713393590 } from './api-doc-page/Configuración-Bantotal/Parámetros Generales/ObtenerSucursales.component';
import { ObtenerAgrupadoresDomicilioComponent1750713393593 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerAgrupadoresDomicilio.component';
import { ObtenerBarriosyColoniasComponent1750713393600 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerBarriosyColonias.component';
import { ObtenerCiudadesyLocalidadesComponent1750713393602 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerCiudadesyLocalidades.component';
import { ObtenerCodigosdeDomicilioComponent1750713393605 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerCodigosdeDomicilio.component';
import { ObtenerEstadosProvinciasyDepartamentosComponent1750713393608 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerEstadosProvinciasyDepartamentos.component';
import { ObtenerPaisesComponent1750713393612 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerPaises.component';
import { ObtenerTiposdeListasNegrasComponent1750713393615 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeListasNegras.component';
import { ObtenerTiposdeTelefonoComponent1750713393618 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeTelefono.component';
import { ObtenerTiposdeViviendaComponent1750713393620 } from './api-doc-page/Configuración-Bantotal/Personas/ObtenerTiposdeVivienda.component';
import { ObtenerPizarraporModuloComponent1750713393623 } from './api-doc-page/Configuración-Bantotal/Precios/ObtenerPizarraporModulo.component';
import { ObtenerPizarrasComponent1750713393626 } from './api-doc-page/Configuración-Bantotal/Precios/ObtenerPizarras.component';
import { ObtenerMenusComponent1750713393629 } from './api-doc-page/Configuración-Bantotal/Seguridad/ObtenerMenus.component';
import { ObtenerPerfilesComponent1750713393632 } from './api-doc-page/Configuración-Bantotal/Seguridad/ObtenerPerfiles.component';
import { AgregarTextoAsientoComponent1750713393634 } from './api-doc-page/Contabilidad/Agregar-Texto/AgregarTextoAsiento.component';
import { AgregarTextoOrdinalComponent1750713393639 } from './api-doc-page/Contabilidad/Agregar-Texto/AgregarTextoOrdinal.component';
import { AnularMovimientoComponent1750713393642 } from './api-doc-page/Contabilidad/AnularMovimiento.component';
import { ActualizarCondicionImpositivaComponent1750713393644 } from './api-doc-page/Contabilidad/Condición-Impositiva/ActualizarCondicionImpositiva.component';
import { CrearCondicionImpositivaComponent1750713393649 } from './api-doc-page/Contabilidad/Condición-Impositiva/CrearCondicionImpositiva.component';
import { ObtenerIdBantotalMovimientoComponent1750713393651 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalMovimiento.component';
import { ObtenerIdBantotalOperacionComponent1750713393654 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalOperacion.component';
import { ObtenerIdBantotalProductoComponent1750713393657 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdBantotalProducto.component';
import { ObtenerIdentificadorUnicodeMovimientoComponent1750713393659 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeMovimiento.component';
import { ObtenerIdentificadorUnicodeOperacionComponent1750713393663 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeOperacion.component';
import { ObtenerIdentificadorUnicodeProductoComponent1750713393666 } from './api-doc-page/Contabilidad/Obtener/Identificadores/ObtenerIdentificadorUnicodeProducto.component';
import { ObtenerClientedeunaOperacionComponent1750713393670 } from './api-doc-page/Contabilidad/Obtener/ObtenerClientedeunaOperacion.component';
import { ObtenerCondicionImpositivaComponent1750713393673 } from './api-doc-page/Contabilidad/Obtener/ObtenerCondicionImpositiva.component';
import { ObtenerDetalledeMovimientoComponent1750713393676 } from './api-doc-page/Contabilidad/Obtener/ObtenerDetalledeMovimiento.component';
import { ObtenerDetalledeOrdinalComponent1750713393679 } from './api-doc-page/Contabilidad/Obtener/ObtenerDetalledeOrdinal.component';
import { ObtenerIntegrantesdeOperacionComponent1750713393682 } from './api-doc-page/Contabilidad/Obtener/ObtenerIntegrantesdeOperacion.component';
import { ObtenerTextosdeMovimientoComponent1750713393685 } from './api-doc-page/Contabilidad/Obtener/ObtenerTextosdeMovimiento.component';
import { RegistrarAsientoComponent1750713393688 } from './api-doc-page/Contabilidad/Registrar-Asiento/RegistrarAsiento.component';
import { RegistrarAsientoFechaValorComponent1750713393690 } from './api-doc-page/Contabilidad/Registrar-Asiento/RegistrarAsientoFechaValor.component';
import { CancelarComponent1750713393692 } from './api-doc-page/Cuentas-Bolsillo/Cancelar.component';
import { CashInComponent1750713393695 } from './api-doc-page/Cuentas-Bolsillo/CashIn.component';
import { CashOutComponent1750713393698 } from './api-doc-page/Cuentas-Bolsillo/CashOut.component';
import { ContratarComponent1750713393701 } from './api-doc-page/Cuentas-Bolsillo/Contratar.component';
import { ObtenerDatosComponent1750713393704 } from './api-doc-page/Cuentas-Bolsillo/ObtenerDatos.component';
import { ObtenerMovimientosComponent1750713393707 } from './api-doc-page/Cuentas-Bolsillo/ObtenerMovimientos.component';
import { ObtenerProductosComponent1750713393709 } from './api-doc-page/Cuentas-Bolsillo/ObtenerProductos.component';
import { ObtenerProductosCVComponent1750713393712 } from './api-doc-page/Cuentas-Bolsillo/ObtenerProductosCV.component';
import { ObtenerChequeraComponent1750713393715 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequera.component';
import { ObtenerChequerasComponent1750713393719 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequeras.component';
import { ObtenerChequesdeChequeraComponent1750713393721 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerChequesdeChequera.component';
import { ObtenerComisionChequeraComponent1750713393723 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerComisionChequera.component';
import { ObtenerEstadodeChequeraComponent1750713393726 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerEstadodeChequera.component';
import { ObtenerSolicitudesdeChequerasComponent1750713393728 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerSolicitudesdeChequeras.component';
import { ObtenerTiposdeChequeraComponent1750713393732 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerTiposdeChequera.component';
import { ObtenerTiposdeChequeraporProductoComponent1750713393734 } from './api-doc-page/Cuentas-Corrientes/Chequera/Obtener/ObtenerTiposdeChequeraporProducto.component';
import { EliminarChequeraComponent1750713393736 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/EliminarChequera.component';
import { RegistrarOrdendeNoPagodeChequeraComponent1750713393738 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/RegistrarOrdendeNoPagodeChequera.component';
import { RegistrarOrdendeNoPagodeChequesComponent1750713393740 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/RegistrarOrdendeNoPagodeCheques.component';
import { SolicitarChequeraComponent1750713393742 } from './api-doc-page/Cuentas-Corrientes/Chequera/Operar/SolicitarChequera.component';
import { ContratarconPeriodicidadComponent1750713393744 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarconPeriodicidad.component';
import { ContratarProductoComponent1750713393748 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarProducto.component';
import { ContratarProductoconAltadeFacultadesComponent1750713393752 } from './api-doc-page/Cuentas-Corrientes/Contratar/ContratarProductoconAltadeFacultades.component';
import { ObtenerAcuerdosComponent1750713393755 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerAcuerdos.component';
import { ObtenerDatosComponent1750713393758 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerDatos.component';
import { ObtenerEstadodeCuentaComponent1750713393761 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerEvoluciondeSaldosComponent1750713393765 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerEvoluciondeSaldos.component';
import { ObtenerProductosComponent1750713393768 } from './api-doc-page/Cuentas-Corrientes/Obtener/ObtenerProductos.component';
import { ContratarconPeriodicidadComponent1750713393770 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarconPeriodicidad.component';
import { ContratarProductoComponent1750713393772 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarProducto.component';
import { ContratarProductoconAltadeFacultadesComponent1750713393774 } from './api-doc-page/Cuentas-de-Ahorro/Contratar/ContratarProductoconAltadeFacultades.component';
import { ObtenerDatosComponent1750713393776 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerDatos.component';
import { ObtenerEstadodeCuentaComponent1750713393778 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerEstadodeCuenta.component';
import { ObtenerEvoluciondeSaldosComponent1750713393781 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerEvoluciondeSaldos.component';
import { ObtenerProductosComponent1750713393783 } from './api-doc-page/Cuentas-de-Ahorro/Obtener/ObtenerProductos.component';
import { ActualizarBeneficiariosComponent1750713393788 } from './api-doc-page/Cuentas-Vista/Beneficiarios/ActualizarBeneficiarios.component';
import { ObtenerBeneficiariosComponent1750713393790 } from './api-doc-page/Cuentas-Vista/Beneficiarios/ObtenerBeneficiarios.component';
import { ActualizarDocumentoDigitalComponent1750713393792 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750713393795 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750713393798 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750713393800 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750713393802 } from './api-doc-page/Cuentas-Vista/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ObtenerBolsillosComponent1750713393804 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerBolsillos.component';
import { ObtenerCBUdeCuentaVistaComponent1750713393806 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerCBUdeCuentaVista.component';
import { ObtenerCuentaVistadeCBUComponent1750713393808 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerCuentaVistadeCBU.component';
import { ObtenerDetalleBloqueoComponent1750713393809 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerDetalleBloqueo.component';
import { ObtenerEstadodeCuentaporPeriodoComponent1750713393812 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerEstadodeCuentaporPeriodo.component';
import { ObtenerEstadoDeOperacionComponent1750713393815 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerEstadoDeOperacion.component';
import { ObtenerFacultadesComponent1750713393817 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerFacultades.component';
import { ObtenerPaqueteComponent1750713393819 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPaquete.component';
import { ObtenerPeriododeAcreditacionComponent1750713393823 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPeriododeAcreditacion.component';
import { ObtenerPeriodosdeAcreditacionComponent1750713393821 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerPeriodosdeAcreditacion.component';
import { ObtenerSaldoBloqueadoComponent1750713393825 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldoBloqueado.component';
import { ObtenerSaldoDisponibleComponent1750713393827 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldoDisponible.component';
import { ObtenerSaldosBloqueadosComponent1750713393833 } from './api-doc-page/Cuentas-Vista/Obtener/ObtenerSaldosBloqueados.component';
import { AcreditarEnCuentaComponent1750713393835 } from './api-doc-page/Cuentas-Vista/Operar/AcreditarEnCuenta.component';
import { ActivarComponent1750713393837 } from './api-doc-page/Cuentas-Vista/Operar/Activar.component';
import { ActualizarPeriododeAcreditacionComponent1750713393839 } from './api-doc-page/Cuentas-Vista/Operar/ActualizarPeriododeAcreditacion.component';
import { BloquearSaldoComponent1750713393840 } from './api-doc-page/Cuentas-Vista/Operar/BloquearSaldo.component';
import { CancelarComponent1750713393843 } from './api-doc-page/Cuentas-Vista/Operar/Cancelar.component';
import { DebitarEnCuentaComponent1750713393845 } from './api-doc-page/Cuentas-Vista/Operar/DebitarEnCuenta.component';
import { DesbloquearSaldoComponent1750713393848 } from './api-doc-page/Cuentas-Vista/Operar/DesbloquearSaldo.component';
import { ActualizarPerfilTransaccionalComponent1750713393850 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/ActualizarPerfilTransaccional.component';
import { AgregarPerfilTransaccionalComponent1750713393852 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/AgregarPerfilTransaccional.component';
import { ObtenerPerfilTransaccionalComponent1750713393854 } from './api-doc-page/Cuentas-Vista/Perfil-Transaccional/ObtenerPerfilTransaccional.component';
import { TraspasarConTipoDeCambioEspecialComponent1750713393856 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarConTipoDeCambioEspecial.component';
import { TraspasarEntreCuentasdelaMismaPersonaComponent1750713393858 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasdelaMismaPersona.component';
import { TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750713393860 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasMismoTitularcontipodecambio.component';
import { TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750713393864 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasMismoTitulardiferentesmonedas.component';
import { TraspasarEntreCuentasPropiasComponent1750713393871 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropias.component';
import { TraspasarEntreCuentasPropiascontipodecambioComponent1750713393867 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropiascontipodecambio.component';
import { TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750713393869 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasPropiasdiferentesmonedas.component';
import { TraspasarEntreCuentasTercerosComponent1750713393878 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTerceros.component';
import { TraspasarEntreCuentasTerceroscontipodecambioComponent1750713393873 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTerceroscontipodecambio.component';
import { TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750713393875 } from './api-doc-page/Cuentas-Vista/Traspasar/TraspasarEntreCuentasTercerosdiferentesmonedas.component';
import { ActualizarBeneficiariosComponent1750713393882 } from './api-doc-page/Depósitos-a-Plazo/Beneficiarios/ActualizarBeneficiarios.component';
import { ObtenerBeneficiariosComponent1750713393885 } from './api-doc-page/Depósitos-a-Plazo/Beneficiarios/ObtenerBeneficiarios.component';
import { ContratarComponent1750713393888 } from './api-doc-page/Depósitos-a-Plazo/Contratar/Contratar.component';
import { ContratarConFacultadesComponent1750713393890 } from './api-doc-page/Depósitos-a-Plazo/Contratar/ContratarConFacultades.component';
import { ContratarSimulacionComponent1750713393894 } from './api-doc-page/Depósitos-a-Plazo/Contratar/ContratarSimulacion.component';
import { ActualizarDocumentoDigitalComponent1750713393900 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750713393902 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750713393905 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750713393908 } from './api-doc-page/Depósitos-a-Plazo/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ModificarCuentaDestinoalVencimientoComponent1750713393910 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarCuentaDestinoalVencimiento.component';
import { ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750713393913 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarCuentaDestinodeAcreditacionPeriodica.component';
import { ModificarInstruccionComponent1750713393916 } from './api-doc-page/Depósitos-a-Plazo/Modificar/ModificarInstruccion.component';
import { ObtenerAvanceComponent1750713393919 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerAvance.component';
import { ObtenerDatosComponent1750713393921 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDatos.component';
import { ObtenerDatosPrecancelacionComponent1750713393924 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDatosPrecancelacion.component';
import { ObtenerDocumentosDigitalesComponent1750713393926 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerDocumentosDigitales.component';
import { ObtenerInstruccionComponent1750713393934 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerInstruccion.component';
import { ObtenerInstruccionesHabilitadosComponent1750713393931 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerInstruccionesHabilitados.component';
import { ObtenerMovimientosComponent1750713393936 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerMovimientos.component';
import { ObtenerPeriodosHabilitadosComponent1750713393939 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerPeriodosHabilitados.component';
import { ObtenerProductosComponent1750713393941 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerProductos.component';
import { ObtenerProductosHabilitadosComponent1750713393944 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerProductosHabilitados.component';
import { ObtenerTasadePrecancelacionComponent1750713393948 } from './api-doc-page/Depósitos-a-Plazo/Obtener/ObtenerTasadePrecancelacion.component';
import { PrecancelarComponent1750713393951 } from './api-doc-page/Depósitos-a-Plazo/Precancelar.component';
import { SimularComponent1750713393954 } from './api-doc-page/Depósitos-a-Plazo/Simular/Simular.component';
import { SimularConCronogramaComponent1750713393957 } from './api-doc-page/Depósitos-a-Plazo/Simular/SimularConCronograma.component';
import { ConfirmarListaComponent1750713393959 } from './api-doc-page/Descuento-de-Documentos/ConfirmarLista.component';
import { CrearListaComponent1750713393962 } from './api-doc-page/Descuento-de-Documentos/CrearLista.component';
import { CrearListaChequesComponent1750713393965 } from './api-doc-page/Descuento-de-Documentos/CrearListaCheques.component';
import { ObtenerProductosComponent1750713393967 } from './api-doc-page/Descuento-de-Documentos/ObtenerProductos.component';
import { ObtenerTiposDeDesembolsoComponent1750713393971 } from './api-doc-page/Descuento-de-Documentos/ObtenerTiposDeDesembolso.component';
import { SeleccionarOpcionDesembolsoComponent1750713393973 } from './api-doc-page/Descuento-de-Documentos/SeleccionarOpcionDesembolso.component';
import { ObtenerAgrupadoresComponent1750713393975 } from './api-doc-page/Indicadores/ObtenerAgrupadores.component';
import { ObtenerCierredeSaldosporMonedaComponent1750713393978 } from './api-doc-page/Indicadores/ObtenerCierredeSaldosporMoneda.component';
import { ObtenerCondicionesGeneralesComponent1750713393981 } from './api-doc-page/Indicadores/ObtenerCondicionesGenerales.component';
import { ObtenerIndicadoresComponent1750713393984 } from './api-doc-page/Indicadores/ObtenerIndicadores.component';
import { ObtenerMetodosMasEjecutadosComponent1750713393986 } from './api-doc-page/Indicadores/ObtenerMetodosMasEjecutados.component';
import { ObtenerMonedasIndicesComponent1750713393988 } from './api-doc-page/Indicadores/ObtenerMonedasIndices.component';
import { ObtenerRubrosBolsaComponent1750713393991 } from './api-doc-page/Indicadores/ObtenerRubrosBolsa.component';
import { ObtenerServiciosMasEjecutadosComponent1750713393993 } from './api-doc-page/Indicadores/ObtenerServiciosMasEjecutados.component';
import { ObtenerSesionesPorUsuarioComponent1750713393997 } from './api-doc-page/Indicadores/ObtenerSesionesPorUsuario.component';
import { ObtenerSucursalesCajasComponent1750713394001 } from './api-doc-page/Indicadores/ObtenerSucursalesCajas.component';
import { ObtenerTransaccionesporEstadosComponent1750713394003 } from './api-doc-page/Indicadores/ObtenerTransaccionesporEstados.component';
import { BuscarClienteComponent1750713394005 } from './api-doc-page/Microfinanzas/BuscarCliente.component';
import { CompletarTareaComponent1750713394007 } from './api-doc-page/Microfinanzas/CompletarTarea.component';
import { CrearSolicitudAmpliacionComponent1750713394010 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudAmpliacion.component';
import { CrearSolicitudIndividualComponent1750713394013 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudIndividual.component';
import { CrearSolicitudRenovacionComponent1750713394017 } from './api-doc-page/Microfinanzas/Crear-Solicitud/CrearSolicitudRenovacion.component';
import { AgregarFiadorComponent1750713394021 } from './api-doc-page/Microfinanzas/Fiadores/AgregarFiador.component';
import { EliminarFiadorComponent1750713394023 } from './api-doc-page/Microfinanzas/Fiadores/EliminarFiador.component';
import { ActualizarGrupoComponent1750713394026 } from './api-doc-page/Microfinanzas/Grupales/ActualizarGrupo.component';
import { ActualizarIntegrantedeGrupoComponent1750713394029 } from './api-doc-page/Microfinanzas/Grupales/ActualizarIntegrantedeGrupo.component';
import { AgregarGrupoComponent1750713394032 } from './api-doc-page/Microfinanzas/Grupales/AgregarGrupo.component';
import { AgregarIntegranteaGrupoComponent1750713394036 } from './api-doc-page/Microfinanzas/Grupales/AgregarIntegranteaGrupo.component';
import { CrearSolicitudGrupalComponent1750713394038 } from './api-doc-page/Microfinanzas/Grupales/CrearSolicitudGrupal.component';
import { HabilitarIntegrantedeunGrupoComponent1750713394041 } from './api-doc-page/Microfinanzas/Grupales/HabilitarIntegrantedeunGrupo.component';
import { InhabilitarIntegrantedeunGrupoComponent1750713394044 } from './api-doc-page/Microfinanzas/Grupales/InhabilitarIntegrantedeunGrupo.component';
import { ObtenerDetalleGrupoComponent1750713394048 } from './api-doc-page/Microfinanzas/Grupales/ObtenerDetalleGrupo.component';
import { ObtenerGruposComponent1750713394051 } from './api-doc-page/Microfinanzas/Grupales/ObtenerGrupos.component';
import { ObtenerIntegrantesdeGrupoComponent1750713394054 } from './api-doc-page/Microfinanzas/Grupales/ObtenerIntegrantesdeGrupo.component';
import { ObtenerTiposdeGrupoComponent1750713394056 } from './api-doc-page/Microfinanzas/Grupales/ObtenerTiposdeGrupo.component';
import { ObtenerTiposdeIntegranteComponent1750713394058 } from './api-doc-page/Microfinanzas/Grupales/ObtenerTiposdeIntegrante.component';
import { SimularPrestamoAmortizableGrupalComponent1750713394061 } from './api-doc-page/Microfinanzas/Grupales/SimularPrestamoAmortizableGrupal.component';
import { ObtenerAsesoresComponent1750713394066 } from './api-doc-page/Microfinanzas/Obtener/ObtenerAsesores.component';
import { ObtenerCampanasComponent1750713394068 } from './api-doc-page/Microfinanzas/Obtener/ObtenerCampanas.component';
import { ObtenerDestinosCreditoComponent1750713394071 } from './api-doc-page/Microfinanzas/Obtener/ObtenerDestinosCredito.component';
import { ObtenerOperacionesClienteComponent1750713394074 } from './api-doc-page/Microfinanzas/Obtener/ObtenerOperacionesCliente.component';
import { ObtenerOrigenesdeCaptacionComponent1750713394076 } from './api-doc-page/Microfinanzas/Obtener/ObtenerOrigenesdeCaptacion.component';
import { ObtenerProductosComponent1750713394080 } from './api-doc-page/Microfinanzas/Obtener/ObtenerProductos.component';
import { ObtenerSolicitudesClienteComponent1750713394082 } from './api-doc-page/Microfinanzas/Obtener/ObtenerSolicitudesCliente.component';
import { ObtenerTiposAvalComponent1750713394085 } from './api-doc-page/Microfinanzas/Obtener/ObtenerTiposAval.component';
import { AgregarOperacionesaCancelarComponent1750713394087 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/AgregarOperacionesaCancelar.component';
import { ObtenerOperacionesaCancelarComponent1750713394089 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/ObtenerOperacionesaCancelar.component';
import { QuitarOperacionesaCancelarComponent1750713394092 } from './api-doc-page/Microfinanzas/Operaciones-a-Cancelar/QuitarOperacionesaCancelar.component';
import { SimularLibreAmortizacionComponent1750713394095 } from './api-doc-page/Microfinanzas/Simular/SimularLibreAmortizacion.component';
import { SimularPrestamoAmortizableComponent1750713394099 } from './api-doc-page/Microfinanzas/Simular/SimularPrestamoAmortizable.component';
import { SimularPrestamoPlazoFijoComponent1750713394103 } from './api-doc-page/Microfinanzas/Simular/SimularPrestamoPlazoFijo.component';
import { ValidarPoliticasComponent1750713394105 } from './api-doc-page/Microfinanzas/ValidarPoliticas.component';
import { ObtenerCantidadCuotasComponent1750713394107 } from './api-doc-page/Modelador-de-Préstamos/ObtenerCantidadCuotas.component';
import { ObtenerCapitalComponent1750713394110 } from './api-doc-page/Modelador-de-Préstamos/ObtenerCapital.component';
import { ObtenerComisionesComponent1750713394114 } from './api-doc-page/Modelador-de-Préstamos/ObtenerComisiones.component';
import { ObtenerComisionesporCuotaComponent1750713394116 } from './api-doc-page/Modelador-de-Préstamos/ObtenerComisionesporCuota.component';
import { ObtenerDiasPrimerPeriodoComponent1750713394123 } from './api-doc-page/Modelador-de-Préstamos/ObtenerDiasPrimerPeriodo.component';
import { ObtenerPeriodoEntreCuotasComponent1750713394129 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPeriodoEntreCuotas.component';
import { ObtenerPermiteSegurosdelMismoTipoComponent1750713394126 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPermiteSegurosdelMismoTipo.component';
import { ObtenerPlazoComponent1750713394132 } from './api-doc-page/Modelador-de-Préstamos/ObtenerPlazo.component';
import { ObtenerRequiereSegurodeVidaObligatorioComponent1750713394137 } from './api-doc-page/Modelador-de-Préstamos/ObtenerRequiereSegurodeVidaObligatorio.component';
import { ObtenerSegurosComponent1750713394140 } from './api-doc-page/Modelador-de-Préstamos/ObtenerSeguros.component';
import { ObtenerItemsModeloComponent1750713394142 } from './api-doc-page/PAE/ObtenerItemsModelo.component';
import { ObtenerModelosPAEComponent1750713394147 } from './api-doc-page/PAE/ObtenerModelosPAE.component';
import { ObtenerScoresComponent1750713394150 } from './api-doc-page/PAE/ObtenerScores.component';
import { ObtenerTiposDeModelosComponent1750713394154 } from './api-doc-page/PAE/ObtenerTiposDeModelos.component';
import { ContratarPrestamoComponent1750713394157 } from './api-doc-page/Partners/Contratar/ContratarPrestamo.component';
import { ContratarVehicularComponent1750713394160 } from './api-doc-page/Partners/Contratar/ContratarVehicular.component';
import { CrearClienteComponent1750713394163 } from './api-doc-page/Partners/Crear/CrearCliente.component';
import { CrearPersonaClienteComponent1750713394167 } from './api-doc-page/Partners/Crear/CrearPersonaCliente.component';
import { ObtenerDatosdeUsuarioComponent1750713394173 } from './api-doc-page/Partners/Obtener/ObtenerDatosdeUsuario.component';
import { ObtenerDetalledeOfertaAmortizableComponent1750713394176 } from './api-doc-page/Partners/Obtener/ObtenerDetalledeOfertaAmortizable.component';
import { ObtenerDetalleOfertaVehicularComponent1750713394181 } from './api-doc-page/Partners/Obtener/ObtenerDetalleOfertaVehicular.component';
import { ObtenerMarcasComponent1750713394187 } from './api-doc-page/Partners/Obtener/ObtenerMarcas.component';
import { ObtenerModelosComponent1750713394190 } from './api-doc-page/Partners/Obtener/ObtenerModelos.component';
import { ObtenerPartnersComponent1750713394193 } from './api-doc-page/Partners/Obtener/ObtenerPartners.component';
import { ObtenerPrestamosdeClienteComponent1750713394205 } from './api-doc-page/Partners/Obtener/ObtenerPrestamosdeCliente.component';
import { ObtenerProductosComponent1750713394199 } from './api-doc-page/Partners/Obtener/ObtenerProductos.component';
import { ObtenerProductosdelPartnerComponent1750713394202 } from './api-doc-page/Partners/Obtener/ObtenerProductosdelPartner.component';
import { ObtenerPuntosdeVentaComponent1750713394207 } from './api-doc-page/Partners/Obtener/ObtenerPuntosdeVenta.component';
import { ObtenerVendedoresComponent1750713394210 } from './api-doc-page/Partners/Obtener/ObtenerVendedores.component';
import { ObtenerVersionesComponent1750713394213 } from './api-doc-page/Partners/Obtener/ObtenerVersiones.component';
import { SimularOfertasComponent1750713394216 } from './api-doc-page/Partners/Simular/SimularOfertas.component';
import { SimularOfertasVehicularComponent1750713394222 } from './api-doc-page/Partners/Simular/SimularOfertasVehicular.component';
import { SimularPrestamoComponent1750713394225 } from './api-doc-page/Partners/Simular/SimularPrestamo.component';
import { SimularVehicularComponent1750713394229 } from './api-doc-page/Partners/Simular/SimularVehicular.component';
import { ObtenerCorrelativoGuiaComponent1750713394232 } from './api-doc-page/Parámetros-Base/ObtenerCorrelativoGuia.component';
import { ObtenerCorrelativoGuiaEspecialComponent1750713394234 } from './api-doc-page/Parámetros-Base/ObtenerCorrelativoGuiaEspecial.component';
import { ObtenerGuiadeProcesoComponent1750713394237 } from './api-doc-page/Parámetros-Base/ObtenerGuiadeProceso.component';
import { ObtenerGuiaEspecialdeProcesoComponent1750713394239 } from './api-doc-page/Parámetros-Base/ObtenerGuiaEspecialdeProceso.component';
import { ObtenerOpcionGeneraldeProcesoComponent1750713394242 } from './api-doc-page/Parámetros-Base/ObtenerOpcionGeneraldeProceso.component';
import { ObtenerOpcionGeneralPorModuloComponent1750713394247 } from './api-doc-page/Parámetros-Base/ObtenerOpcionGeneralPorModulo.component';
import { ObtenerProgramaParticularComponent1750713394252 } from './api-doc-page/Parámetros-Base/ObtenerProgramaParticular.component';
import { ActualizarComponent1750713394254 } from './api-doc-page/Personas/Actualizar/Actualizar.component';
import { ActualizarCelularComponent1750713394257 } from './api-doc-page/Personas/Actualizar/ActualizarCelular.component';
import { ActualizarContactoComponent1750713394259 } from './api-doc-page/Personas/Actualizar/ActualizarContacto.component';
import { ActualizarConyugeComponent1750713394264 } from './api-doc-page/Personas/Actualizar/ActualizarConyuge.component';
import { ActualizarCorreoElectronicoComponent1750713394262 } from './api-doc-page/Personas/Actualizar/ActualizarCorreoElectronico.component';
import { ActualizarDomicilioComponent1750713394267 } from './api-doc-page/Personas/Actualizar/ActualizarDomicilio.component';
import { ActualizarFATCAComponent1750713394270 } from './api-doc-page/Personas/Actualizar/ActualizarFATCA.component';
import { ActualizarInformacionAdicionalComponent1750713394273 } from './api-doc-page/Personas/Actualizar/ActualizarInformacionAdicional.component';
import { ActualizarInformacionFinancieraComponent1750713394275 } from './api-doc-page/Personas/Actualizar/ActualizarInformacionFinanciera.component';
import { ActualizarIntegrantedePersonaJuridicaComponent1750713394278 } from './api-doc-page/Personas/Actualizar/ActualizarIntegrantedePersonaJuridica.component';
import { ActualizarPersonaJuridicaComponent1750713394281 } from './api-doc-page/Personas/Actualizar/ActualizarPersonaJuridica.component';
import { ActualizarProfesionComponent1750713394285 } from './api-doc-page/Personas/Actualizar/ActualizarProfesion.component';
import { ActualizarReferenciaComponent1750713394288 } from './api-doc-page/Personas/Actualizar/ActualizarReferencia.component';
import { ActualizarRegistroEmpleadoComponent1750713394290 } from './api-doc-page/Personas/Actualizar/ActualizarRegistroEmpleado.component';
import { ActualizarTelefonoComponent1750713394293 } from './api-doc-page/Personas/Actualizar/ActualizarTelefono.component';
import { ActualizarVictimaHechoViolentoComponent1750713394297 } from './api-doc-page/Personas/Actualizar/ActualizarVictimaHechoViolento.component';
import { ModificarDocumentoAdicionalComponent1750713394300 } from './api-doc-page/Personas/Actualizar/ModificarDocumentoAdicional.component';
import { AgregaraListaNegraComponent1750713394303 } from './api-doc-page/Personas/Agregar/AgregaraListaNegra.component';
import { AgregarContactoComponent1750713394323 } from './api-doc-page/Personas/Agregar/AgregarContacto.component';
import { AgregarCorreoElectronicoComponent1750713394327 } from './api-doc-page/Personas/Agregar/AgregarCorreoElectronico.component';
import { AgregarDatosPEPComponent1750713394332 } from './api-doc-page/Personas/Agregar/AgregarDatosPEP.component';
import { AgregarDocumentoAdicionalComponent1750713394335 } from './api-doc-page/Personas/Agregar/AgregarDocumentoAdicional.component';
import { AgregarDomicilioComponent1750713394338 } from './api-doc-page/Personas/Agregar/AgregarDomicilio.component';
import { AgregarEstadoFinancieroComponent1750713394340 } from './api-doc-page/Personas/Agregar/AgregarEstadoFinanciero.component';
import { AgregarFATCAComponent1750713394343 } from './api-doc-page/Personas/Agregar/AgregarFATCA.component';
import { AgregarInformacionAdicionalComponent1750713394347 } from './api-doc-page/Personas/Agregar/AgregarInformacionAdicional.component';
import { AgregarInformacionFinancieraComponent1750713394350 } from './api-doc-page/Personas/Agregar/AgregarInformacionFinanciera.component';
import { AgregarIntegranteaPersonaJuridicaComponent1750713394353 } from './api-doc-page/Personas/Agregar/AgregarIntegranteaPersonaJuridica.component';
import { AgregarPersonaVinculadaComponent1750713394357 } from './api-doc-page/Personas/Agregar/AgregarPersonaVinculada.component';
import { AgregarReferenciaComponent1750713394360 } from './api-doc-page/Personas/Agregar/AgregarReferencia.component';
import { AgregarTelefonoComponent1750713394366 } from './api-doc-page/Personas/Agregar/AgregarTelefono.component';
import { AgregarVictimaHechoViolentoComponent1750713394371 } from './api-doc-page/Personas/Agregar/AgregarVictimaHechoViolento.component';
import { CrearComponent1750713394374 } from './api-doc-page/Personas/Crear/Crear.component';
import { CrearConyugeComponent1750713394377 } from './api-doc-page/Personas/Crear/CrearConyuge.component';
import { CrearPersonaJuridicaComponent1750713394381 } from './api-doc-page/Personas/Crear/CrearPersonaJuridica.component';
import { CrearReducidoComponent1750713394384 } from './api-doc-page/Personas/Crear/CrearReducido.component';
import { ActualizarDocumentoDigitalComponent1750713394387 } from './api-doc-page/Personas/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750713394390 } from './api-doc-page/Personas/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750713394392 } from './api-doc-page/Personas/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750713394396 } from './api-doc-page/Personas/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750713394399 } from './api-doc-page/Personas/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { EliminarConyugeComponent1750713394402 } from './api-doc-page/Personas/Eliminar/EliminarConyuge.component';
import { EliminarDocumentoAdicionalComponent1750713394406 } from './api-doc-page/Personas/Eliminar/EliminarDocumentoAdicional.component';
import { EliminarDomicilioComponent1750713394410 } from './api-doc-page/Personas/Eliminar/EliminarDomicilio.component';
import { EliminarInformacionAdicionalComponent1750713394418 } from './api-doc-page/Personas/Eliminar/EliminarInformacionAdicional.component';
import { EliminarIntegrantedePersonaJuridicaComponent1750713394422 } from './api-doc-page/Personas/Eliminar/EliminarIntegrantedePersonaJuridica.component';
import { EliminarPersonaVinculadaComponent1750713394424 } from './api-doc-page/Personas/Eliminar/EliminarPersonaVinculada.component';
import { EliminarProfesionComponent1750713394426 } from './api-doc-page/Personas/Eliminar/EliminarProfesion.component';
import { ObtenerComponent1750713394432 } from './api-doc-page/Personas/Obtener/Obtener.component';
import { ObtenerConceptoComponent1750713394435 } from './api-doc-page/Personas/Obtener/ObtenerConcepto.component';
import { ObtenerContactosComponent1750713394442 } from './api-doc-page/Personas/Obtener/ObtenerContactos.component';
import { ObtenerConyugeComponent1750713394450 } from './api-doc-page/Personas/Obtener/ObtenerConyuge.component';
import { ObtenerCorreosElectronicosComponent1750713394444 } from './api-doc-page/Personas/Obtener/ObtenerCorreosElectronicos.component';
import { ObtenerCuentasClienteComponent1750713394447 } from './api-doc-page/Personas/Obtener/ObtenerCuentasCliente.component';
import { ObtenerDatosPEPComponent1750713394453 } from './api-doc-page/Personas/Obtener/ObtenerDatosPEP.component';
import { ObtenerDocumentosAdicionalesComponent1750713394455 } from './api-doc-page/Personas/Obtener/ObtenerDocumentosAdicionales.component';
import { ObtenerDomiciliosComponent1750713394497 } from './api-doc-page/Personas/Obtener/ObtenerDomicilios.component';
import { ObtenerEstadosCivilesComponent1750713394500 } from './api-doc-page/Personas/Obtener/ObtenerEstadosCiviles.component';
import { ObtenerFacultadesComponent1750713394504 } from './api-doc-page/Personas/Obtener/ObtenerFacultades.component';
import { ObtenerFATCAComponent1750713394507 } from './api-doc-page/Personas/Obtener/ObtenerFATCA.component';
import { ObtenerHobbiesComponent1750713394519 } from './api-doc-page/Personas/Obtener/ObtenerHobbies.component';
import { ObtenerHobbyComponent1750713394522 } from './api-doc-page/Personas/Obtener/ObtenerHobby.component';
import { ObtenerIdBantotalComponent1750713394525 } from './api-doc-page/Personas/Obtener/ObtenerIdBantotal.component';
import { ObtenerIdentidadesdeGeneroComponent1750713394527 } from './api-doc-page/Personas/Obtener/ObtenerIdentidadesdeGenero.component';
import { ObtenerIdentificadorUnicoComponent1750713394531 } from './api-doc-page/Personas/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerInformacionAdicionalComponent1750713394533 } from './api-doc-page/Personas/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerInformacionFinancieraComponent1750713394536 } from './api-doc-page/Personas/Obtener/ObtenerInformacionFinanciera.component';
import { ObtenerIntegrantesPersonaJuridicaComponent1750713394538 } from './api-doc-page/Personas/Obtener/ObtenerIntegrantesPersonaJuridica.component';
import { ObtenerLimitesComponent1750713394541 } from './api-doc-page/Personas/Obtener/ObtenerLimites.component';
import { ObtenerNaturalezasJuridicasComponent1750713394544 } from './api-doc-page/Personas/Obtener/ObtenerNaturalezasJuridicas.component';
import { ObtenerNivelesEducativosComponent1750713394549 } from './api-doc-page/Personas/Obtener/ObtenerNivelesEducativos.component';
import { ObtenerOcupacionesComponent1750713394552 } from './api-doc-page/Personas/Obtener/ObtenerOcupaciones.component';
import { ObtenerPersonaJuridicaComponent1750713394554 } from './api-doc-page/Personas/Obtener/ObtenerPersonaJuridica.component';
import { ObtenerPersonasComponent1750713394557 } from './api-doc-page/Personas/Obtener/ObtenerPersonas.component';
import { ObtenerPersonasJuridicasComponent1750713394559 } from './api-doc-page/Personas/Obtener/ObtenerPersonasJuridicas.component';
import { ObtenerPersonasVinculadasComponent1750713394565 } from './api-doc-page/Personas/Obtener/ObtenerPersonasVinculadas.component';
import { ObtenerProfesionComponent1750713394570 } from './api-doc-page/Personas/Obtener/ObtenerProfesion.component';
import { ObtenerProfesionesComponent1750713394567 } from './api-doc-page/Personas/Obtener/ObtenerProfesiones.component';
import { ObtenerReferenciasComponent1750713394573 } from './api-doc-page/Personas/Obtener/ObtenerReferencias.component';
import { ObtenerTarjetasdeDebitoComponent1750713394575 } from './api-doc-page/Personas/Obtener/ObtenerTarjetasdeDebito.component';
import { ObtenerTelefonosComponent1750713394578 } from './api-doc-page/Personas/Obtener/ObtenerTelefonos.component';
import { ObtenerTipodePersonaComponent1750713394582 } from './api-doc-page/Personas/Obtener/ObtenerTipodePersona.component';
import { ObtenerTiposdeDocumentoComponent1750713394584 } from './api-doc-page/Personas/Obtener/ObtenerTiposdeDocumento.component';
import { ObtenerTiposDeFuncionarioPublicoComponent1750713394586 } from './api-doc-page/Personas/Obtener/ObtenerTiposDeFuncionarioPublico.component';
import { ObtenerTiposDePEPComponent1750713394589 } from './api-doc-page/Personas/Obtener/ObtenerTiposDePEP.component';
import { ObtenerTitularesDelTelefonoComponent1750713394591 } from './api-doc-page/Personas/Obtener/ObtenerTitularesDelTelefono.component';
import { ObtenerVictimaHechoViolentoComponent1750713394594 } from './api-doc-page/Personas/Obtener/ObtenerVictimaHechoViolento.component';
import { ObtenerVinculosComponent1750713394597 } from './api-doc-page/Personas/Obtener/ObtenerVinculos.component';
import { ObtenerVinculosdeAfinidadComponent1750713394599 } from './api-doc-page/Personas/Obtener/ObtenerVinculosdeAfinidad.component';
import { ObtenerVinculosdeConsanguinidadComponent1750713394602 } from './api-doc-page/Personas/Obtener/ObtenerVinculosdeConsanguinidad.component';
import { ObtenerVinculosJuridicosComponent1750713394605 } from './api-doc-page/Personas/Obtener/ObtenerVinculosJuridicos.component';
import { EvaluarPAEComponent1750713394609 } from './api-doc-page/Personas/Validar/EvaluarPAE.component';
import { ValidarCorreoElectronicoComponent1750713394612 } from './api-doc-page/Personas/Validar/ValidarCorreoElectronico.component';
import { ValidarDocumentoComponent1750713394615 } from './api-doc-page/Personas/Validar/ValidarDocumento.component';
import { ValidarenListasNegrasComponent1750713394618 } from './api-doc-page/Personas/Validar/ValidarenListasNegras.component';
import { ValidarExistenciaComponent1750713394620 } from './api-doc-page/Personas/Validar/ValidarExistencia.component';
import { ValidarListasInhabilitadosComponent1750713394623 } from './api-doc-page/Personas/Validar/ValidarListasInhabilitados.component';
import { VerificarEmpleadoComponent1750713394625 } from './api-doc-page/Personas/Validar/VerificarEmpleado.component';
import { ConvertirTasaAnualEfectivaaLinealComponent1750713394627 } from './api-doc-page/Precios/Convertir/ConvertirTasaAnualEfectivaaLineal.component';
import { ConvertirTasaAnualLinealaEfectivaComponent1750713394630 } from './api-doc-page/Precios/Convertir/ConvertirTasaAnualLinealaEfectiva.component';
import { ConvertirTasaMensualEfectivaaLinealComponent1750713394633 } from './api-doc-page/Precios/Convertir/ConvertirTasaMensualEfectivaaLineal.component';
import { ConvertirTasaMensualLinealaEfectivaComponent1750713394640 } from './api-doc-page/Precios/Convertir/ConvertirTasaMensualLinealaEfectiva.component';
import { ObtenerCotizacionComponent1750713394642 } from './api-doc-page/Precios/Obtener/ObtenerCotizacion.component';
import { ObtenerCotizacionaFechaComponent1750713394645 } from './api-doc-page/Precios/Obtener/ObtenerCotizacionaFecha.component';
import { ObtenerCotizacionCierreComponent1750713394648 } from './api-doc-page/Precios/Obtener/ObtenerCotizacionCierre.component';
import { ObtenerPizarraEspecialporTransaccionComponent1750713394650 } from './api-doc-page/Precios/Obtener/ObtenerPizarraEspecialporTransaccion.component';
import { ObtenerPrecioaFechaComponent1750713394654 } from './api-doc-page/Precios/Obtener/ObtenerPrecioaFecha.component';
import { ObtenerPrecioEspecieComponent1750713394657 } from './api-doc-page/Precios/Obtener/ObtenerPrecioEspecie.component';
import { ObtenerTasadeOperacionComponent1750713394659 } from './api-doc-page/Precios/Obtener/ObtenerTasadeOperacion.component';
import { ObtenerTasaParaClienteComponent1750713394662 } from './api-doc-page/Precios/Obtener/ObtenerTasaParaCliente.component';
import { ObtenerTasaParaProductoComponent1750713394665 } from './api-doc-page/Precios/Obtener/ObtenerTasaParaProducto.component';
import { ObtenerTipodeCambioComponent1750713394668 } from './api-doc-page/Precios/Obtener/ObtenerTipodeCambio.component';
import { ObtenerTiposDeCambioEspecialesComponent1750713394671 } from './api-doc-page/Precios/Obtener/ObtenerTiposDeCambioEspeciales.component';
import { CancelarComponent1750713394674 } from './api-doc-page/Préstamos/Cancelar/Cancelar.component';
import { CancelaraFechaComponent1750713394677 } from './api-doc-page/Préstamos/Cancelar/CancelaraFecha.component';
import { CancelaraFechaTercerosComponent1750713394680 } from './api-doc-page/Préstamos/Cancelar/CancelaraFechaTerceros.component';
import { CancelarTercerosComponent1750713394684 } from './api-doc-page/Préstamos/Cancelar/CancelarTerceros.component';
import { ContratarComponent1750713394686 } from './api-doc-page/Préstamos/Contratar/Contratar.component';
import { ContratarAmpliacionComponent1750713394689 } from './api-doc-page/Préstamos/Contratar/ContratarAmpliacion.component';
import { ContratarRefinanciacionComponent1750713394691 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacion.component';
import { ContratarRefinanciacionporDeudaTotalComponent1750713394694 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacionporDeudaTotal.component';
import { ContratarRefinanciacionporSaldoCapitalComponent1750713394697 } from './api-doc-page/Préstamos/Contratar/ContratarRefinanciacionporSaldoCapital.component';
import { ActualizarDocumentoDigitalComponent1750713394700 } from './api-doc-page/Préstamos/Documentos-Digitales/ActualizarDocumentoDigital.component';
import { AsociarDocumentoDigitalComponent1750713394703 } from './api-doc-page/Préstamos/Documentos-Digitales/AsociarDocumentoDigital.component';
import { EliminarDocumentoDigitalComponent1750713394705 } from './api-doc-page/Préstamos/Documentos-Digitales/EliminarDocumentoDigital.component';
import { ObtenerDocumentoDigitalComponent1750713394708 } from './api-doc-page/Préstamos/Documentos-Digitales/ObtenerDocumentoDigital.component';
import { ObtenerDocumentosDigitalesComponent1750713394710 } from './api-doc-page/Préstamos/Documentos-Digitales/ObtenerDocumentosDigitales.component';
import { ObtenerCronogramaComponent1750713394714 } from './api-doc-page/Préstamos/Obtener/ObtenerCronograma.component';
import { ObtenerCronogramaaFechaComponent1750713394719 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaaFecha.component';
import { ObtenerCronogramaconPagosaFechaComponent1750713394721 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaconPagosaFecha.component';
import { ObtenerCronogramaenEspecieComponent1750713394724 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaenEspecie.component';
import { ObtenerCronogramaOriginalComponent1750713394727 } from './api-doc-page/Préstamos/Obtener/ObtenerCronogramaOriginal.component';
import { ObtenerCuentadeCobroComponent1750713394730 } from './api-doc-page/Préstamos/Obtener/ObtenerCuentadeCobro.component';
import { ObtenerDatosdelProximoVencimientoComponent1750713394733 } from './api-doc-page/Préstamos/Obtener/ObtenerDatosdelProximoVencimiento.component';
import { ObtenerDetalleComponent1750713394736 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalle.component';
import { ObtenerDetalleaFechaComponent1750713394738 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleaFecha.component';
import { ObtenerDetalledeCancelacionTotalComponent1750713394741 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeCancelacionTotal.component';
import { ObtenerDetalledeOfertaComponent1750713394744 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOferta.component';
import { ObtenerDetalledeOfertaAmortizableComponent1750713394749 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOfertaAmortizable.component';
import { ObtenerDetalledeOperacionesaRefinanciarComponent1750713394752 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledeOperacionesaRefinanciar.component';
import { ObtenerDetalledePrestamoCanceladoComponent1750713394754 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalledePrestamoCancelado.component';
import { ObtenerDetallePagoPrestamoComponent1750713394757 } from './api-doc-page/Préstamos/Obtener/ObtenerDetallePagoPrestamo.component';
import { ObtenerDetalleReducidoComponent1750713394760 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleReducido.component';
import { ObtenerDetalleSimulacionComponent1750713394764 } from './api-doc-page/Préstamos/Obtener/ObtenerDetalleSimulacion.component';
import { ObtenerDeudaComponent1750713394767 } from './api-doc-page/Préstamos/Obtener/ObtenerDeuda.component';
import { ObtenerDeudaPrestamoCastigadoComponent1750713394769 } from './api-doc-page/Préstamos/Obtener/ObtenerDeudaPrestamoCastigado.component';
import { ObtenerDeudaVencidaComponent1750713394771 } from './api-doc-page/Préstamos/Obtener/ObtenerDeudaVencida.component';
import { ObtenerFechadeIncumplimientoComponent1750713394773 } from './api-doc-page/Préstamos/Obtener/ObtenerFechadeIncumplimiento.component';
import { ObtenerFechadeUltimoPagoComponent1750713394776 } from './api-doc-page/Préstamos/Obtener/ObtenerFechadeUltimoPago.component';
import { ObtenerFechasdePagoComponent1750713394779 } from './api-doc-page/Préstamos/Obtener/ObtenerFechasdePago.component';
import { ObtenerInformacionAdicionalComponent1750713394782 } from './api-doc-page/Préstamos/Obtener/ObtenerInformacionAdicional.component';
import { ObtenerMontodeCancelacionComponent1750713394785 } from './api-doc-page/Préstamos/Obtener/ObtenerMontodeCancelacion.component';
import { ObtenerMotivosPrecancelacionComponent1750713394787 } from './api-doc-page/Préstamos/Obtener/ObtenerMotivosPrecancelacion.component';
import { ObtenerPagosdeCuotaComponent1750713394790 } from './api-doc-page/Préstamos/Obtener/ObtenerPagosdeCuota.component';
import { ObtenerPagosdeunPrestamoComponent1750713394792 } from './api-doc-page/Préstamos/Obtener/ObtenerPagosdeunPrestamo.component';
import { ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750713394796 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1.component';
import { ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750713394800 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1.component';
import { ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750713394802 } from './api-doc-page/Préstamos/Obtener/ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1.component';
import { ObtenerProductosComponent1750713394805 } from './api-doc-page/Préstamos/Obtener/ObtenerProductos.component';
import { ObtenerProductosRefinanciacionComponent1750713394807 } from './api-doc-page/Préstamos/Obtener/ObtenerProductosRefinanciacion.component';
import { ObtenerRefinanciacionSimuladaComponent1750713394810 } from './api-doc-page/Préstamos/Obtener/ObtenerRefinanciacionSimulada.component';
import { AbonaraCuentaComponent1750713394813 } from './api-doc-page/Préstamos/Operar/AbonaraCuenta.component';
import { ActualizarInformacionAdicionalComponent1750713394815 } from './api-doc-page/Préstamos/Operar/ActualizarInformacionAdicional.component';
import { ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750713394819 } from './api-doc-page/Préstamos/Operar/ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1.component';
import { AgregarCuentadeCobroComponent1750713394821 } from './api-doc-page/Préstamos/Operar/AgregarCuentadeCobro.component';
import { AgregarInformacionAdicionalComponent1750713394824 } from './api-doc-page/Préstamos/Operar/AgregarInformacionAdicional.component';
import { EliminarCuentadeCobroComponent1750713394826 } from './api-doc-page/Préstamos/Operar/EliminarCuentadeCobro.component';
import { EliminarInformacionAdicionalComponent1750713394830 } from './api-doc-page/Préstamos/Operar/EliminarInformacionAdicional.component';
import { SolicitarPrecancelacionComponent1750713394832 } from './api-doc-page/Préstamos/Operar/SolicitarPrecancelacion.component';
import { AdelantarCapitalConReduccionDeCuotaComponent1750713394836 } from './api-doc-page/Préstamos/Pagar/AdelantarCapitalConReduccionDeCuota.component';
import { AdelantarCapitalConReduccionDePlazoComponent1750713394839 } from './api-doc-page/Préstamos/Pagar/AdelantarCapitalConReduccionDePlazo.component';
import { PagarCuotaComponent1750713394842 } from './api-doc-page/Préstamos/Pagar/PagarCuota.component';
import { PagarCuotaaFechaComponent1750713394844 } from './api-doc-page/Préstamos/Pagar/PagarCuotaaFecha.component';
import { PagarCuotaaFechaTercerosComponent1750713394848 } from './api-doc-page/Préstamos/Pagar/PagarCuotaaFechaTerceros.component';
import { PagarCuotaTercerosComponent1750713394851 } from './api-doc-page/Préstamos/Pagar/PagarCuotaTerceros.component';
import { ResimularAmortizableComponent1750713394854 } from './api-doc-page/Préstamos/Simular/ResimularAmortizable.component';
import { ResimularAmpliacionComponent1750713394858 } from './api-doc-page/Préstamos/Simular/ResimularAmpliacion.component';
import { ResimularRefinanciacionComponent1750713394862 } from './api-doc-page/Préstamos/Simular/ResimularRefinanciacion.component';
import { SimularComponent1750713394866 } from './api-doc-page/Préstamos/Simular/Simular.component';
import { SimularAmortizableComponent1750713394868 } from './api-doc-page/Préstamos/Simular/SimularAmortizable.component';
import { SimularAmortizableSinClienteComponent1750713394871 } from './api-doc-page/Préstamos/Simular/SimularAmortizableSinCliente.component';
import { SimularAmpliacionComponent1750713394874 } from './api-doc-page/Préstamos/Simular/SimularAmpliacion.component';
import { SimularAmpliacionIngresandoSegurosComponent1750713394877 } from './api-doc-page/Préstamos/Simular/SimularAmpliacionIngresandoSeguros.component';
import { SimularDespejandoCapitalyCantidaddeCuotasComponent1750713394881 } from './api-doc-page/Préstamos/Simular/SimularDespejandoCapitalyCantidaddeCuotas.component';
import { SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750713394885 } from './api-doc-page/Préstamos/Simular/SimularDespejandoCapitalyCantidaddeCuotasSinCliente.component';
import { SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750713394888 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyCantidaddeCuotas.component';
import { SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750713394890 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinCliente.component';
import { SimularDespejandoFechadeVencimientoyTasaComponent1750713394893 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyTasa.component';
import { SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750713394901 } from './api-doc-page/Préstamos/Simular/SimularDespejandoFechadeVencimientoyTasaSinCliente.component';
import { SimularIngresandoBalloonComponent1750713394904 } from './api-doc-page/Préstamos/Simular/SimularIngresandoBalloon.component';
import { SimularIngresandoBalloonSinClienteComponent1750713394907 } from './api-doc-page/Préstamos/Simular/SimularIngresandoBalloonSinCliente.component';
import { SimularIngresandoSegurosComponent1750713394910 } from './api-doc-page/Préstamos/Simular/SimularIngresandoSeguros.component';
import { SimularIngresandoSegurosSinClienteComponent1750713394916 } from './api-doc-page/Préstamos/Simular/SimularIngresandoSegurosSinCliente.component';
import { SimularLibreAmortizacionComponent1750713394921 } from './api-doc-page/Préstamos/Simular/SimularLibreAmortizacion.component';
import { SimularLibreAmortizacionSinClienteComponent1750713394925 } from './api-doc-page/Préstamos/Simular/SimularLibreAmortizacionSinCliente.component';
import { SimularOfertasComponent1750713394928 } from './api-doc-page/Préstamos/Simular/SimularOfertas.component';
import { SimularPlazoFijoComponent1750713394931 } from './api-doc-page/Préstamos/Simular/SimularPlazoFijo.component';
import { SimularRefinanciacionComponent1750713394936 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacion.component';
import { SimularRefinanciacionporDeudaTotalComponent1750713394939 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacionporDeudaTotal.component';
import { SimularRefinanciacionporSaldoCapitalComponent1750713394941 } from './api-doc-page/Préstamos/Simular/SimularRefinanciacionporSaldoCapital.component';
import { ActualizarTextosComponent1750713394944 } from './api-doc-page/Préstamos/Textos/ActualizarTextos.component';
import { AgregarTextosComponent1750713394950 } from './api-doc-page/Préstamos/Textos/AgregarTextos.component';
import { EliminarTextosComponent1750713394952 } from './api-doc-page/Préstamos/Textos/EliminarTextos.component';
import { ObtenerTextosComponent1750713394954 } from './api-doc-page/Préstamos/Textos/ObtenerTextos.component';
import { EvaluarRegladeNegocioComponent1750713394960 } from './api-doc-page/Reglas-de-Negocio/EvaluarRegladeNegocio.component';
import { ObtenerReglasdeNegocioComponent1750713394964 } from './api-doc-page/Reglas-de-Negocio/ObtenerReglasdeNegocio.component';
import { ObtenerVariablesReglaComponent1750713394967 } from './api-doc-page/Reglas-de-Negocio/ObtenerVariablesRegla.component';
import { ValidarDatosRegladeNegocioComponent1750713394969 } from './api-doc-page/Reglas-de-Negocio/ValidarDatosRegladeNegocio.component';
import { AutorizarExcepcionComponent1750713394971 } from './api-doc-page/Seguridad/AutorizarExcepcion.component';
import { ObtenerDetalledeExcepcionComponent1750713394974 } from './api-doc-page/Seguridad/ObtenerDetalledeExcepcion.component';
import { ObtenerExcepcionesComponent1750713394976 } from './api-doc-page/Seguridad/ObtenerExcepciones.component';
import { RechazarExcepcionComponent1750713394982 } from './api-doc-page/Seguridad/RechazarExcepcion.component';
import { RegistrarDispositivoComponent1750713394984 } from './api-doc-page/Seguridad/RegistrarDispositivo.component';
import { ContratarSeguroComponent1750713394987 } from './api-doc-page/Seguros-Voluntarios/ContratarSeguro.component';
import { ObtenerMontosDeUnSeguroComponent1750713394990 } from './api-doc-page/Seguros-Voluntarios/ObtenerMontosDeUnSeguro.component';
import { ObtenerSegurosComponent1750713394992 } from './api-doc-page/Seguros-Voluntarios/ObtenerSeguros.component';
import { ObtenerSegurosAPagarComponent1750713394995 } from './api-doc-page/Seguros-Voluntarios/ObtenerSegurosAPagar.component';
import { PagarSeguroComponent1750713394997 } from './api-doc-page/Seguros-Voluntarios/PagarSeguro.component';
import { ObtenerCodigosdeLimitesComponent1750713395010 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCodigosdeLimites.component';
import { ObtenerCuentaPreferencialComponent1750713395000 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentaPreferencial.component';
import { ObtenerCuentasaAsociarComponent1750713395003 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasaAsociar.component';
import { ObtenerCuentasAsociadasComponent1750713395005 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasAsociadas.component';
import { ObtenerCuentasAsociadasPorTipoComponent1750713395008 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerCuentasAsociadasPorTipo.component';
import { ObtenerDatosComponent1750713395013 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerDatos.component';
import { ObtenerDatosContactoComponent1750713395016 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerDatosContacto.component';
import { ObtenerIdentificadorUnicoComponent1750713395020 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerIdentificadorUnico.component';
import { ObtenerLimitesComponent1750713395024 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerLimites.component';
import { ObtenerMovimientosComponent1750713395028 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerMovimientos.component';
import { ObtenerTarjetaComponent1750713395032 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjeta.component';
import { ObtenerTarjetaHabienteComponent1750713395035 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjetaHabiente.component';
import { ObtenerTarjetasAdicionalesComponent1750713395037 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTarjetasAdicionales.component';
import { ObtenerTiposdeCuentaComponent1750713395040 } from './api-doc-page/Tarjetas-de-Débito/Obtener/ObtenerTiposdeCuenta.component';
import { ActivarComponent1750713395042 } from './api-doc-page/Tarjetas-de-Débito/Operar/Activar.component';
import { ActualizarCuentaPreferencialComponent1750713395045 } from './api-doc-page/Tarjetas-de-Débito/Operar/ActualizarCuentaPreferencial.component';
import { ActualizarDatosContactoComponent1750713395048 } from './api-doc-page/Tarjetas-de-Débito/Operar/ActualizarDatosContacto.component';
import { AsociarCuentaComponent1750713395051 } from './api-doc-page/Tarjetas-de-Débito/Operar/AsociarCuenta.component';
import { BlanquearPinComponent1750713395053 } from './api-doc-page/Tarjetas-de-Débito/Operar/BlanquearPin.component';
import { BloquearComponent1750713395055 } from './api-doc-page/Tarjetas-de-Débito/Operar/Bloquear.component';
import { BloquearDesdeREDComponent1750713395058 } from './api-doc-page/Tarjetas-de-Débito/Operar/BloquearDesdeRED.component';
import { CrearComponent1750713395060 } from './api-doc-page/Tarjetas-de-Débito/Operar/Crear.component';
import { CrearConCuentasAsociadasComponent1750713395064 } from './api-doc-page/Tarjetas-de-Débito/Operar/CrearConCuentasAsociadas.component';
import { DenunciarComponent1750713395067 } from './api-doc-page/Tarjetas-de-Débito/Operar/Denunciar.component';
import { DenunciarDesdeREDComponent1750713395069 } from './api-doc-page/Tarjetas-de-Débito/Operar/DenunciarDesdeRED.component';
import { DesbloquearComponent1750713395071 } from './api-doc-page/Tarjetas-de-Débito/Operar/Desbloquear.component';
import { DesbloquearDesdeREDComponent1750713395074 } from './api-doc-page/Tarjetas-de-Débito/Operar/DesbloquearDesdeRED.component';
import { EliminarCuentaAsociadaComponent1750713395076 } from './api-doc-page/Tarjetas-de-Débito/Operar/EliminarCuentaAsociada.component';
import { ModificarLimiteComponent1750713395079 } from './api-doc-page/Tarjetas-de-Débito/Operar/ModificarLimite.component';
import { ComprarComponent1750713395082 } from './api-doc-page/Títulos/Comprar.component';
import { ObtenerEstadoCompraComponent1750713395084 } from './api-doc-page/Títulos/ObtenerEstadoCompra.component';
import { ObtenerGruposComponent1750713395088 } from './api-doc-page/Títulos/ObtenerGrupos.component';
import { ObtenerValoresComponent1750713395091 } from './api-doc-page/Títulos/ObtenerValores.component';
import { AgregarPerfilComponent1750713395093 } from './api-doc-page/Usuarios/AgregarPerfil.component';
import { CrearComponent1750713395096 } from './api-doc-page/Usuarios/Crear.component';
import { EliminarPerfilComponent1750713395100 } from './api-doc-page/Usuarios/EliminarPerfil.component';
import { EliminarUsuarioComponent1750713395103 } from './api-doc-page/Usuarios/EliminarUsuario.component';
import { HabilitarEnCanalComponent1750713395105 } from './api-doc-page/Usuarios/HabilitarEnCanal.component';
import { HabilitarUsuarioComponent1750713395107 } from './api-doc-page/Usuarios/HabilitarUsuario.component';
import { InhabilitarUsuarioComponent1750713395111 } from './api-doc-page/Usuarios/InhabilitarUsuario.component';
import { ModificarComponent1750713395116 } from './api-doc-page/Usuarios/Modificar.component';
import { ObtenerComponent1750713395120 } from './api-doc-page/Usuarios/Obtener.component';
import { ObtenerPerfilesComponent1750713395123 } from './api-doc-page/Usuarios/ObtenerPerfiles.component';
import { ObtenerUsuariosComponent1750713395125 } from './api-doc-page/Usuarios/ObtenerUsuarios.component';
import { ObtenerUsuariosParaPerfilComponent1750713395128 } from './api-doc-page/Usuarios/ObtenerUsuariosParaPerfil.component';
import { ObtenerMetadataDeTareaComponent1750713395131 } from './api-doc-page/Workflow/ObtenerMetadataDeTarea.component';
import { ObtenerProcesosHabilitadosComponent1750713395135 } from './api-doc-page/Workflow/ObtenerProcesosHabilitados.component';
import { ObtenerRolesComponent1750713395137 } from './api-doc-page/Workflow/ObtenerRoles.component';
import { ObtenerRolesdeTareaComponent1750713395139 } from './api-doc-page/Workflow/ObtenerRolesdeTarea.component';
import { ObtenerTareasdeProcesoComponent1750713395141 } from './api-doc-page/Workflow/ObtenerTareasdeProceso.component';
//import End page components

@NgModule({
  declarations: [
    ChatPopupComponent,
    //declarations Page components
    ContratarSimulacionComponent1750713393003,
    CrearComponent1750713393010,
    SimularComponent1750713393014,
    ActualizarDocumentoDigitalComponent1750713393017,
    AsociarDocumentoDigitalComponent1750713393020,
    EliminarDocumentoDigitalComponent1750713393024,
    ObtenerDocumentoDigitalComponent1750713393027,
    ObtenerDocumentosDigitalesComponent1750713393030,
    ModificarCuentaDestinoComponent1750713393033,
    ModificarCuentaOrigenComponent1750713393036,
    ModificarFechadeAbonoComponent1750713393039,
    ModificarMetadeAhorroComponent1750713393042,
    ModificarMontodeAbonoComponent1750713393046,
    ObtenerComponent1750713393049,
    ObtenerCronogramaAbonosComponent1750713393053,
    ObtenerCuentasDestinoHabilitadasComponent1750713393055,
    ObtenerCuentasOrigenHabilitadasComponent1750713393057,
    ObtenerEstadodeCuentaComponent1750713393059,
    ObtenerPeriodosHabilitadosComponent1750713393062,
    ObtenerPlazosHabilitadosComponent1750713393065,
    ObtenerProductosComponent1750713393068,
    AnularChequeElectronicoComponent1750713393071,
    AsignarIdaChequeElectronicoComponent1750713393074,
    CrearChequeraElectronicaComponent1750713393075,
    DepositarChequeElectronicodeBancoPropioComponent1750713393078,
    DepositarChequeElectronicodeOtroBancoComponent1750713393082,
    DepositarChequeElectronicoenCustodiaComponent1750713393085,
    EmitirChequeElectronicoComponent1750713393087,
    EmitirChequeElectronicodeChequeraComponent1750713393090,
    HabilitarChequeElectronicoComponent1750713393092,
    CrearAdhesionComponent1750713393095,
    CrearStopDebitComponent1750713393100,
    CrearStopDebitparaAdhesionconImporteComponent1750713393104,
    EliminarStopDebitComponent1750713393106,
    ObtenerAdhesionesComponent1750713393108,
    ObtenerDebitosComponent1750713393112,
    ObtenerEmpresasOriginantesComponent1750713393116,
    ObtenerStopDebitsComponent1750713393119,
    ReversarDebitosComponent1750713393121,
    SolicitarBajadeAdhesionComponent1750713393123,
    AutenticacionComponent1750713393125,
    ObtenerDetalledeEjecucionComponent1750713393127,
    ObtenerDetalledeProcesoComponent1750713393131,
    ObtenerProcesosconErrorComponent1750713393133,
    ObtenerProcesosCriticosComponent1750713393136,
    ObtenerProcesosDiariosComponent1750713393138,
    ObtenerProcesosMensualesComponent1750713393140,
    ObtenerProcesosReprocesablesComponent1750713393141,
    VerificarEstadoServidorComponent1750713393144,
    CalcularFechadeVencimientoComponent1750713393147,
    CalcularFechadeVencimientoenDiasHabilesComponent1750713393150,
    CalcularPlazoComponent1750713393152,
    CalcularPlazoenDiasHabilesComponent1750713393154,
    ObtenerFechaHabilComponent1750713393156,
    ObtenerFechaHabilAnteriorComponent1750713393158,
    ObtenerFechaHabilAnteriordeSucursalComponent1750713393161,
    ObtenerFechaHabildeSucursalComponent1750713393165,
    ObtenerInicioyFindeMesComponent1750713393168,
    ObtenerInicioyFindeMesdeSucursalComponent1750713393171,
    ObtenerProximaFechaHabilComponent1750713393173,
    ObtenerProximaFechaHabildeSucursalComponent1750713393175,
    AutorizarArchivoComponent1750713393178,
    CargarArchivoComponent1750713393181,
    CargarArchivoRecibidoComoDatoComponent1750713393183,
    DetenerArchivoComponent1750713393185,
    RechazarArchivoComponent1750713393187,
    CargarBeneficiariosComponent1750713393189,
    IngresarBeneficiarioComponent1750713393191,
    ObtenerBeneficiarioSegunFiltroComponent1750713393194,
    AltaAutomaticaContratoComponent1750713393198,
    CargarServiciosDisponiblesComponent1750713393201,
    ContratarDebitoAutomaticoComponent1750713393204,
    ObtenerDetalledeOrdendeCuentaComponent1750713393206,
    ObtenerDetalledePagoComponent1750713393208,
    ObtenerDetalleOrdenSegunCampoComponent1750713393212,
    ObtenerDetallePagoOrdenComponent1750713393216,
    ObtenerDeudaComponent1750713393219,
    ObtenerResumenOrdenComponent1750713393221,
    ObtenerServiciosComponent1750713393223,
    ObtenerValoresOrdenComponent1750713393226,
    ObtenerValoresOrdenSegunCampoComponent1750713393228,
    AutorizarOrdenComponent1750713393231,
    DetenerOrdenComponent1750713393233,
    IngresarOrdenPagoComponent1750713393236,
    ProcesarOrdenComponent1750713393240,
    RechazarOrdenComponent1750713393242,
    AnularPagoDeudaComponent1750713393245,
    PagarDeudaDesdeCuentaComponent1750713393248,
    RegistrarPagoDeudaComponent1750713393251,
    RegistrarPagoEnLineaComponent1750713393255,
    RegistrarPagoEnLineaDesdeCuentaComponent1750713393258,
    VisualizarListaResumenCabezalComponent1750713393264,
    VisualizarListaResumenCabezalOrdenComponent1750713393267,
    VisualizarOrdendeArchivoParaCuentaComponent1750713393270,
    VisualizarResultadoProcesamientoComponent1750713393273,
    VisualizarResumenCabezalComponent1750713393277,
    VisualizarSituacionArchivosComponent1750713393283,
    VisualizarSituacionLineasComponent1750713393291,
    CHATComponent1750713393295,
    ActualizarComponent1750713393300,
    ActualizarDocumentoDigitalComponent1750713393304,
    ActualizarDomicilioComponent1750713393308,
    ActualizarInformacionAdicionalComponent1750713393312,
    ActualizarRegistroEmpleadoComponent1750713393318,
    ActualizarTelefonoComponent1750713393324,
    AgregarDomicilioComponent1750713393328,
    AgregarInformacionAdicionalComponent1750713393337,
    AgregarIntegranteComponent1750713393340,
    AgregarTelefonoComponent1750713393344,
    AsociarDocumentoDigitalComponent1750713393351,
    EliminarDocumentoDigitalComponent1750713393355,
    EliminarDomicilioComponent1750713393358,
    EliminarInformacionAdicionalComponent1750713393361,
    EliminarIntegranteComponent1750713393365,
    HabilitarComponent1750713393367,
    InhabilitarComponent1750713393370,
    ModificarEjecutivoComponent1750713393372,
    CrearComponent1750713393374,
    CrearconPersonaExistenteComponent1750713393376,
    CrearParaPersonaJuridicaComponent1750713393379,
    ObtenerComponent1750713393382,
    ObtenerAhorrosProgramadosComponent1750713393388,
    ObtenerBolsillosComponent1750713393391,
    ObtenerClasificacionesInternasComponent1750713393394,
    ObtenerCuentaClienteComponent1750713393398,
    ObtenerCuentasCorrientesSaldoContableComponent1750713393401,
    ObtenerCuentasCorrientesSaldoDisponibleComponent1750713393403,
    ObtenerCuentasdeAhorroSaldoContableComponent1750713393406,
    ObtenerCuentasdeAhorroSaldoDisponibleComponent1750713393410,
    ObtenerDatosComponent1750713393415,
    ObtenerDetallePosicionComponent1750713393418,
    ObtenerDocumentoDigitalComponent1750713393420,
    ObtenerDocumentosDigitalesComponent1750713393422,
    ObtenerDomiciliosComponent1750713393425,
    ObtenerFacultadesComponent1750713393428,
    ObtenerIdentificadorUnicoComponent1750713393431,
    ObtenerInformacionAdicionalComponent1750713393434,
    ObtenerIntegrantesComponent1750713393436,
    ObtenerLimitesComponent1750713393438,
    ObtenerMotivosInhabilitacionComponent1750713393440,
    ObtenerPerfilComponent1750713393442,
    ObtenerPlazosFijosComponent1750713393444,
    ObtenerPlazosFijosCanceladosComponent1750713393448,
    ObtenerPlazosFijosconAvanceComponent1750713393450,
    ObtenerPosicionComponent1750713393454,
    ObtenerPrestamosComponent1750713393457,
    ObtenerPrestamosCanceladosComponent1750713393461,
    ObtenerPrestamosCastigadosComponent1750713393467,
    ObtenerPrestamosconAvanceComponent1750713393470,
    ObtenerResumendeProductosCierredeanoComponent1750713393473,
    ObtenerResumendeProductosSaldosContablesComponent1750713393475,
    ObtenerResumendeProductosSaldosDisponiblesComponent1750713393478,
    ObtenerResumenporProductoaCierreAnoComponent1750713393482,
    ObtenerRiesgodeCreditoComponent1750713393485,
    ObtenerSaldosdeOtrosProductosComponent1750713393488,
    ObtenerSectoresComponent1750713393491,
    ObtenerSegmentosComponent1750713393494,
    ObtenerTarjetasdeDebitoComponent1750713393498,
    ObtenerTelefonosComponent1750713393500,
    ObtenerTiposdeIntegracionComponent1750713393503,
    ObtenerTitularRepresentativoComponent1750713393505,
    ObtenerTitulosComponent1750713393507,
    ValidarExistenciaComponent1750713393510,
    VerificarEmpleadoComponent1750713393515,
    ObtenerAgenciasBancoComponent1750713393519,
    ObtenerBancosComponent1750713393523,
    ObtenerDetalleSucursalComponent1750713393525,
    ObtenerSucursalesPrincipalesComponent1750713393528,
    ObtenerActividadesComponent1750713393532,
    ObtenerActividadesporTipoComponent1750713393535,
    ObtenerEjecutivosComponent1750713393538,
    ObtenerTiposdeActividadComponent1750713393540,
    ObtenerTiposdeTarjetaComponent1750713393542,
    ObtenerImpuestosComponent1750713393546,
    ObtenerTiposdeDocumentoDigitalComponent1750713393549,
    ObtenerEstadosComponent1750713393552,
    ObtenerInstruccionesComponent1750713393554,
    ObtenerPaquetesComponent1750713393557,
    ObtenerTiposdeTextoComponent1750713393560,
    ObtenerCalendariodeSucursalComponent1750713393564,
    ObtenerCalendariosComponent1750713393567,
    ObtenerDetalledeCalendarioComponent1750713393569,
    ObtenerDetalledeCalendariodeSucursalComponent1750713393572,
    ObtenerDolarUSAComponent1750713393574,
    ObtenerEmpresaComponent1750713393577,
    ObtenerFechadeSistemaComponent1750713393581,
    ObtenerMonedaNacionalComponent1750713393584,
    ObtenerMonedasComponent1750713393586,
    ObtenerSucursalesComponent1750713393590,
    ObtenerAgrupadoresDomicilioComponent1750713393593,
    ObtenerBarriosyColoniasComponent1750713393600,
    ObtenerCiudadesyLocalidadesComponent1750713393602,
    ObtenerCodigosdeDomicilioComponent1750713393605,
    ObtenerEstadosProvinciasyDepartamentosComponent1750713393608,
    ObtenerPaisesComponent1750713393612,
    ObtenerTiposdeListasNegrasComponent1750713393615,
    ObtenerTiposdeTelefonoComponent1750713393618,
    ObtenerTiposdeViviendaComponent1750713393620,
    ObtenerPizarraporModuloComponent1750713393623,
    ObtenerPizarrasComponent1750713393626,
    ObtenerMenusComponent1750713393629,
    ObtenerPerfilesComponent1750713393632,
    AgregarTextoAsientoComponent1750713393634,
    AgregarTextoOrdinalComponent1750713393639,
    AnularMovimientoComponent1750713393642,
    ActualizarCondicionImpositivaComponent1750713393644,
    CrearCondicionImpositivaComponent1750713393649,
    ObtenerIdBantotalMovimientoComponent1750713393651,
    ObtenerIdBantotalOperacionComponent1750713393654,
    ObtenerIdBantotalProductoComponent1750713393657,
    ObtenerIdentificadorUnicodeMovimientoComponent1750713393659,
    ObtenerIdentificadorUnicodeOperacionComponent1750713393663,
    ObtenerIdentificadorUnicodeProductoComponent1750713393666,
    ObtenerClientedeunaOperacionComponent1750713393670,
    ObtenerCondicionImpositivaComponent1750713393673,
    ObtenerDetalledeMovimientoComponent1750713393676,
    ObtenerDetalledeOrdinalComponent1750713393679,
    ObtenerIntegrantesdeOperacionComponent1750713393682,
    ObtenerTextosdeMovimientoComponent1750713393685,
    RegistrarAsientoComponent1750713393688,
    RegistrarAsientoFechaValorComponent1750713393690,
    CancelarComponent1750713393692,
    CashInComponent1750713393695,
    CashOutComponent1750713393698,
    ContratarComponent1750713393701,
    ObtenerDatosComponent1750713393704,
    ObtenerMovimientosComponent1750713393707,
    ObtenerProductosComponent1750713393709,
    ObtenerProductosCVComponent1750713393712,
    ObtenerChequeraComponent1750713393715,
    ObtenerChequerasComponent1750713393719,
    ObtenerChequesdeChequeraComponent1750713393721,
    ObtenerComisionChequeraComponent1750713393723,
    ObtenerEstadodeChequeraComponent1750713393726,
    ObtenerSolicitudesdeChequerasComponent1750713393728,
    ObtenerTiposdeChequeraComponent1750713393732,
    ObtenerTiposdeChequeraporProductoComponent1750713393734,
    EliminarChequeraComponent1750713393736,
    RegistrarOrdendeNoPagodeChequeraComponent1750713393738,
    RegistrarOrdendeNoPagodeChequesComponent1750713393740,
    SolicitarChequeraComponent1750713393742,
    ContratarconPeriodicidadComponent1750713393744,
    ContratarProductoComponent1750713393748,
    ContratarProductoconAltadeFacultadesComponent1750713393752,
    ObtenerAcuerdosComponent1750713393755,
    ObtenerDatosComponent1750713393758,
    ObtenerEstadodeCuentaComponent1750713393761,
    ObtenerEvoluciondeSaldosComponent1750713393765,
    ObtenerProductosComponent1750713393768,
    ContratarconPeriodicidadComponent1750713393770,
    ContratarProductoComponent1750713393772,
    ContratarProductoconAltadeFacultadesComponent1750713393774,
    ObtenerDatosComponent1750713393776,
    ObtenerEstadodeCuentaComponent1750713393778,
    ObtenerEvoluciondeSaldosComponent1750713393781,
    ObtenerProductosComponent1750713393783,
    ActualizarBeneficiariosComponent1750713393788,
    ObtenerBeneficiariosComponent1750713393790,
    ActualizarDocumentoDigitalComponent1750713393792,
    AsociarDocumentoDigitalComponent1750713393795,
    EliminarDocumentoDigitalComponent1750713393798,
    ObtenerDocumentoDigitalComponent1750713393800,
    ObtenerDocumentosDigitalesComponent1750713393802,
    ObtenerBolsillosComponent1750713393804,
    ObtenerCBUdeCuentaVistaComponent1750713393806,
    ObtenerCuentaVistadeCBUComponent1750713393808,
    ObtenerDetalleBloqueoComponent1750713393809,
    ObtenerEstadodeCuentaporPeriodoComponent1750713393812,
    ObtenerEstadoDeOperacionComponent1750713393815,
    ObtenerFacultadesComponent1750713393817,
    ObtenerPaqueteComponent1750713393819,
    ObtenerPeriododeAcreditacionComponent1750713393823,
    ObtenerPeriodosdeAcreditacionComponent1750713393821,
    ObtenerSaldoBloqueadoComponent1750713393825,
    ObtenerSaldoDisponibleComponent1750713393827,
    ObtenerSaldosBloqueadosComponent1750713393833,
    AcreditarEnCuentaComponent1750713393835,
    ActivarComponent1750713393837,
    ActualizarPeriododeAcreditacionComponent1750713393839,
    BloquearSaldoComponent1750713393840,
    CancelarComponent1750713393843,
    DebitarEnCuentaComponent1750713393845,
    DesbloquearSaldoComponent1750713393848,
    ActualizarPerfilTransaccionalComponent1750713393850,
    AgregarPerfilTransaccionalComponent1750713393852,
    ObtenerPerfilTransaccionalComponent1750713393854,
    TraspasarConTipoDeCambioEspecialComponent1750713393856,
    TraspasarEntreCuentasdelaMismaPersonaComponent1750713393858,
    TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750713393860,
    TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750713393864,
    TraspasarEntreCuentasPropiasComponent1750713393871,
    TraspasarEntreCuentasPropiascontipodecambioComponent1750713393867,
    TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750713393869,
    TraspasarEntreCuentasTercerosComponent1750713393878,
    TraspasarEntreCuentasTerceroscontipodecambioComponent1750713393873,
    TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750713393875,
    ActualizarBeneficiariosComponent1750713393882,
    ObtenerBeneficiariosComponent1750713393885,
    ContratarComponent1750713393888,
    ContratarConFacultadesComponent1750713393890,
    ContratarSimulacionComponent1750713393894,
    ActualizarDocumentoDigitalComponent1750713393900,
    AsociarDocumentoDigitalComponent1750713393902,
    EliminarDocumentoDigitalComponent1750713393905,
    ObtenerDocumentoDigitalComponent1750713393908,
    ModificarCuentaDestinoalVencimientoComponent1750713393910,
    ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750713393913,
    ModificarInstruccionComponent1750713393916,
    ObtenerAvanceComponent1750713393919,
    ObtenerDatosComponent1750713393921,
    ObtenerDatosPrecancelacionComponent1750713393924,
    ObtenerDocumentosDigitalesComponent1750713393926,
    ObtenerInstruccionComponent1750713393934,
    ObtenerInstruccionesHabilitadosComponent1750713393931,
    ObtenerMovimientosComponent1750713393936,
    ObtenerPeriodosHabilitadosComponent1750713393939,
    ObtenerProductosComponent1750713393941,
    ObtenerProductosHabilitadosComponent1750713393944,
    ObtenerTasadePrecancelacionComponent1750713393948,
    PrecancelarComponent1750713393951,
    SimularComponent1750713393954,
    SimularConCronogramaComponent1750713393957,
    ConfirmarListaComponent1750713393959,
    CrearListaComponent1750713393962,
    CrearListaChequesComponent1750713393965,
    ObtenerProductosComponent1750713393967,
    ObtenerTiposDeDesembolsoComponent1750713393971,
    SeleccionarOpcionDesembolsoComponent1750713393973,
    ObtenerAgrupadoresComponent1750713393975,
    ObtenerCierredeSaldosporMonedaComponent1750713393978,
    ObtenerCondicionesGeneralesComponent1750713393981,
    ObtenerIndicadoresComponent1750713393984,
    ObtenerMetodosMasEjecutadosComponent1750713393986,
    ObtenerMonedasIndicesComponent1750713393988,
    ObtenerRubrosBolsaComponent1750713393991,
    ObtenerServiciosMasEjecutadosComponent1750713393993,
    ObtenerSesionesPorUsuarioComponent1750713393997,
    ObtenerSucursalesCajasComponent1750713394001,
    ObtenerTransaccionesporEstadosComponent1750713394003,
    BuscarClienteComponent1750713394005,
    CompletarTareaComponent1750713394007,
    CrearSolicitudAmpliacionComponent1750713394010,
    CrearSolicitudIndividualComponent1750713394013,
    CrearSolicitudRenovacionComponent1750713394017,
    AgregarFiadorComponent1750713394021,
    EliminarFiadorComponent1750713394023,
    ActualizarGrupoComponent1750713394026,
    ActualizarIntegrantedeGrupoComponent1750713394029,
    AgregarGrupoComponent1750713394032,
    AgregarIntegranteaGrupoComponent1750713394036,
    CrearSolicitudGrupalComponent1750713394038,
    HabilitarIntegrantedeunGrupoComponent1750713394041,
    InhabilitarIntegrantedeunGrupoComponent1750713394044,
    ObtenerDetalleGrupoComponent1750713394048,
    ObtenerGruposComponent1750713394051,
    ObtenerIntegrantesdeGrupoComponent1750713394054,
    ObtenerTiposdeGrupoComponent1750713394056,
    ObtenerTiposdeIntegranteComponent1750713394058,
    SimularPrestamoAmortizableGrupalComponent1750713394061,
    ObtenerAsesoresComponent1750713394066,
    ObtenerCampanasComponent1750713394068,
    ObtenerDestinosCreditoComponent1750713394071,
    ObtenerOperacionesClienteComponent1750713394074,
    ObtenerOrigenesdeCaptacionComponent1750713394076,
    ObtenerProductosComponent1750713394080,
    ObtenerSolicitudesClienteComponent1750713394082,
    ObtenerTiposAvalComponent1750713394085,
    AgregarOperacionesaCancelarComponent1750713394087,
    ObtenerOperacionesaCancelarComponent1750713394089,
    QuitarOperacionesaCancelarComponent1750713394092,
    SimularLibreAmortizacionComponent1750713394095,
    SimularPrestamoAmortizableComponent1750713394099,
    SimularPrestamoPlazoFijoComponent1750713394103,
    ValidarPoliticasComponent1750713394105,
    ObtenerCantidadCuotasComponent1750713394107,
    ObtenerCapitalComponent1750713394110,
    ObtenerComisionesComponent1750713394114,
    ObtenerComisionesporCuotaComponent1750713394116,
    ObtenerDiasPrimerPeriodoComponent1750713394123,
    ObtenerPeriodoEntreCuotasComponent1750713394129,
    ObtenerPermiteSegurosdelMismoTipoComponent1750713394126,
    ObtenerPlazoComponent1750713394132,
    ObtenerRequiereSegurodeVidaObligatorioComponent1750713394137,
    ObtenerSegurosComponent1750713394140,
    ObtenerItemsModeloComponent1750713394142,
    ObtenerModelosPAEComponent1750713394147,
    ObtenerScoresComponent1750713394150,
    ObtenerTiposDeModelosComponent1750713394154,
    ContratarPrestamoComponent1750713394157,
    ContratarVehicularComponent1750713394160,
    CrearClienteComponent1750713394163,
    CrearPersonaClienteComponent1750713394167,
    ObtenerDatosdeUsuarioComponent1750713394173,
    ObtenerDetalledeOfertaAmortizableComponent1750713394176,
    ObtenerDetalleOfertaVehicularComponent1750713394181,
    ObtenerMarcasComponent1750713394187,
    ObtenerModelosComponent1750713394190,
    ObtenerPartnersComponent1750713394193,
    ObtenerPrestamosdeClienteComponent1750713394205,
    ObtenerProductosComponent1750713394199,
    ObtenerProductosdelPartnerComponent1750713394202,
    ObtenerPuntosdeVentaComponent1750713394207,
    ObtenerVendedoresComponent1750713394210,
    ObtenerVersionesComponent1750713394213,
    SimularOfertasComponent1750713394216,
    SimularOfertasVehicularComponent1750713394222,
    SimularPrestamoComponent1750713394225,
    SimularVehicularComponent1750713394229,
    ObtenerCorrelativoGuiaComponent1750713394232,
    ObtenerCorrelativoGuiaEspecialComponent1750713394234,
    ObtenerGuiadeProcesoComponent1750713394237,
    ObtenerGuiaEspecialdeProcesoComponent1750713394239,
    ObtenerOpcionGeneraldeProcesoComponent1750713394242,
    ObtenerOpcionGeneralPorModuloComponent1750713394247,
    ObtenerProgramaParticularComponent1750713394252,
    ActualizarComponent1750713394254,
    ActualizarCelularComponent1750713394257,
    ActualizarContactoComponent1750713394259,
    ActualizarConyugeComponent1750713394264,
    ActualizarCorreoElectronicoComponent1750713394262,
    ActualizarDomicilioComponent1750713394267,
    ActualizarFATCAComponent1750713394270,
    ActualizarInformacionAdicionalComponent1750713394273,
    ActualizarInformacionFinancieraComponent1750713394275,
    ActualizarIntegrantedePersonaJuridicaComponent1750713394278,
    ActualizarPersonaJuridicaComponent1750713394281,
    ActualizarProfesionComponent1750713394285,
    ActualizarReferenciaComponent1750713394288,
    ActualizarRegistroEmpleadoComponent1750713394290,
    ActualizarTelefonoComponent1750713394293,
    ActualizarVictimaHechoViolentoComponent1750713394297,
    ModificarDocumentoAdicionalComponent1750713394300,
    AgregaraListaNegraComponent1750713394303,
    AgregarContactoComponent1750713394323,
    AgregarCorreoElectronicoComponent1750713394327,
    AgregarDatosPEPComponent1750713394332,
    AgregarDocumentoAdicionalComponent1750713394335,
    AgregarDomicilioComponent1750713394338,
    AgregarEstadoFinancieroComponent1750713394340,
    AgregarFATCAComponent1750713394343,
    AgregarInformacionAdicionalComponent1750713394347,
    AgregarInformacionFinancieraComponent1750713394350,
    AgregarIntegranteaPersonaJuridicaComponent1750713394353,
    AgregarPersonaVinculadaComponent1750713394357,
    AgregarReferenciaComponent1750713394360,
    AgregarTelefonoComponent1750713394366,
    AgregarVictimaHechoViolentoComponent1750713394371,
    CrearComponent1750713394374,
    CrearConyugeComponent1750713394377,
    CrearPersonaJuridicaComponent1750713394381,
    CrearReducidoComponent1750713394384,
    ActualizarDocumentoDigitalComponent1750713394387,
    AsociarDocumentoDigitalComponent1750713394390,
    EliminarDocumentoDigitalComponent1750713394392,
    ObtenerDocumentoDigitalComponent1750713394396,
    ObtenerDocumentosDigitalesComponent1750713394399,
    EliminarConyugeComponent1750713394402,
    EliminarDocumentoAdicionalComponent1750713394406,
    EliminarDomicilioComponent1750713394410,
    EliminarInformacionAdicionalComponent1750713394418,
    EliminarIntegrantedePersonaJuridicaComponent1750713394422,
    EliminarPersonaVinculadaComponent1750713394424,
    EliminarProfesionComponent1750713394426,
    ObtenerComponent1750713394432,
    ObtenerConceptoComponent1750713394435,
    ObtenerContactosComponent1750713394442,
    ObtenerConyugeComponent1750713394450,
    ObtenerCorreosElectronicosComponent1750713394444,
    ObtenerCuentasClienteComponent1750713394447,
    ObtenerDatosPEPComponent1750713394453,
    ObtenerDocumentosAdicionalesComponent1750713394455,
    ObtenerDomiciliosComponent1750713394497,
    ObtenerEstadosCivilesComponent1750713394500,
    ObtenerFacultadesComponent1750713394504,
    ObtenerFATCAComponent1750713394507,
    ObtenerHobbiesComponent1750713394519,
    ObtenerHobbyComponent1750713394522,
    ObtenerIdBantotalComponent1750713394525,
    ObtenerIdentidadesdeGeneroComponent1750713394527,
    ObtenerIdentificadorUnicoComponent1750713394531,
    ObtenerInformacionAdicionalComponent1750713394533,
    ObtenerInformacionFinancieraComponent1750713394536,
    ObtenerIntegrantesPersonaJuridicaComponent1750713394538,
    ObtenerLimitesComponent1750713394541,
    ObtenerNaturalezasJuridicasComponent1750713394544,
    ObtenerNivelesEducativosComponent1750713394549,
    ObtenerOcupacionesComponent1750713394552,
    ObtenerPersonaJuridicaComponent1750713394554,
    ObtenerPersonasComponent1750713394557,
    ObtenerPersonasJuridicasComponent1750713394559,
    ObtenerPersonasVinculadasComponent1750713394565,
    ObtenerProfesionComponent1750713394570,
    ObtenerProfesionesComponent1750713394567,
    ObtenerReferenciasComponent1750713394573,
    ObtenerTarjetasdeDebitoComponent1750713394575,
    ObtenerTelefonosComponent1750713394578,
    ObtenerTipodePersonaComponent1750713394582,
    ObtenerTiposdeDocumentoComponent1750713394584,
    ObtenerTiposDeFuncionarioPublicoComponent1750713394586,
    ObtenerTiposDePEPComponent1750713394589,
    ObtenerTitularesDelTelefonoComponent1750713394591,
    ObtenerVictimaHechoViolentoComponent1750713394594,
    ObtenerVinculosComponent1750713394597,
    ObtenerVinculosdeAfinidadComponent1750713394599,
    ObtenerVinculosdeConsanguinidadComponent1750713394602,
    ObtenerVinculosJuridicosComponent1750713394605,
    EvaluarPAEComponent1750713394609,
    ValidarCorreoElectronicoComponent1750713394612,
    ValidarDocumentoComponent1750713394615,
    ValidarenListasNegrasComponent1750713394618,
    ValidarExistenciaComponent1750713394620,
    ValidarListasInhabilitadosComponent1750713394623,
    VerificarEmpleadoComponent1750713394625,
    ConvertirTasaAnualEfectivaaLinealComponent1750713394627,
    ConvertirTasaAnualLinealaEfectivaComponent1750713394630,
    ConvertirTasaMensualEfectivaaLinealComponent1750713394633,
    ConvertirTasaMensualLinealaEfectivaComponent1750713394640,
    ObtenerCotizacionComponent1750713394642,
    ObtenerCotizacionaFechaComponent1750713394645,
    ObtenerCotizacionCierreComponent1750713394648,
    ObtenerPizarraEspecialporTransaccionComponent1750713394650,
    ObtenerPrecioaFechaComponent1750713394654,
    ObtenerPrecioEspecieComponent1750713394657,
    ObtenerTasadeOperacionComponent1750713394659,
    ObtenerTasaParaClienteComponent1750713394662,
    ObtenerTasaParaProductoComponent1750713394665,
    ObtenerTipodeCambioComponent1750713394668,
    ObtenerTiposDeCambioEspecialesComponent1750713394671,
    CancelarComponent1750713394674,
    CancelaraFechaComponent1750713394677,
    CancelaraFechaTercerosComponent1750713394680,
    CancelarTercerosComponent1750713394684,
    ContratarComponent1750713394686,
    ContratarAmpliacionComponent1750713394689,
    ContratarRefinanciacionComponent1750713394691,
    ContratarRefinanciacionporDeudaTotalComponent1750713394694,
    ContratarRefinanciacionporSaldoCapitalComponent1750713394697,
    ActualizarDocumentoDigitalComponent1750713394700,
    AsociarDocumentoDigitalComponent1750713394703,
    EliminarDocumentoDigitalComponent1750713394705,
    ObtenerDocumentoDigitalComponent1750713394708,
    ObtenerDocumentosDigitalesComponent1750713394710,
    ObtenerCronogramaComponent1750713394714,
    ObtenerCronogramaaFechaComponent1750713394719,
    ObtenerCronogramaconPagosaFechaComponent1750713394721,
    ObtenerCronogramaenEspecieComponent1750713394724,
    ObtenerCronogramaOriginalComponent1750713394727,
    ObtenerCuentadeCobroComponent1750713394730,
    ObtenerDatosdelProximoVencimientoComponent1750713394733,
    ObtenerDetalleComponent1750713394736,
    ObtenerDetalleaFechaComponent1750713394738,
    ObtenerDetalledeCancelacionTotalComponent1750713394741,
    ObtenerDetalledeOfertaComponent1750713394744,
    ObtenerDetalledeOfertaAmortizableComponent1750713394749,
    ObtenerDetalledeOperacionesaRefinanciarComponent1750713394752,
    ObtenerDetalledePrestamoCanceladoComponent1750713394754,
    ObtenerDetallePagoPrestamoComponent1750713394757,
    ObtenerDetalleReducidoComponent1750713394760,
    ObtenerDetalleSimulacionComponent1750713394764,
    ObtenerDeudaComponent1750713394767,
    ObtenerDeudaPrestamoCastigadoComponent1750713394769,
    ObtenerDeudaVencidaComponent1750713394771,
    ObtenerFechadeIncumplimientoComponent1750713394773,
    ObtenerFechadeUltimoPagoComponent1750713394776,
    ObtenerFechasdePagoComponent1750713394779,
    ObtenerInformacionAdicionalComponent1750713394782,
    ObtenerMontodeCancelacionComponent1750713394785,
    ObtenerMotivosPrecancelacionComponent1750713394787,
    ObtenerPagosdeCuotaComponent1750713394790,
    ObtenerPagosdeunPrestamoComponent1750713394792,
    ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750713394796,
    ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750713394800,
    ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750713394802,
    ObtenerProductosComponent1750713394805,
    ObtenerProductosRefinanciacionComponent1750713394807,
    ObtenerRefinanciacionSimuladaComponent1750713394810,
    AbonaraCuentaComponent1750713394813,
    ActualizarInformacionAdicionalComponent1750713394815,
    ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750713394819,
    AgregarCuentadeCobroComponent1750713394821,
    AgregarInformacionAdicionalComponent1750713394824,
    EliminarCuentadeCobroComponent1750713394826,
    EliminarInformacionAdicionalComponent1750713394830,
    SolicitarPrecancelacionComponent1750713394832,
    AdelantarCapitalConReduccionDeCuotaComponent1750713394836,
    AdelantarCapitalConReduccionDePlazoComponent1750713394839,
    PagarCuotaComponent1750713394842,
    PagarCuotaaFechaComponent1750713394844,
    PagarCuotaaFechaTercerosComponent1750713394848,
    PagarCuotaTercerosComponent1750713394851,
    ResimularAmortizableComponent1750713394854,
    ResimularAmpliacionComponent1750713394858,
    ResimularRefinanciacionComponent1750713394862,
    SimularComponent1750713394866,
    SimularAmortizableComponent1750713394868,
    SimularAmortizableSinClienteComponent1750713394871,
    SimularAmpliacionComponent1750713394874,
    SimularAmpliacionIngresandoSegurosComponent1750713394877,
    SimularDespejandoCapitalyCantidaddeCuotasComponent1750713394881,
    SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750713394885,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750713394888,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750713394890,
    SimularDespejandoFechadeVencimientoyTasaComponent1750713394893,
    SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750713394901,
    SimularIngresandoBalloonComponent1750713394904,
    SimularIngresandoBalloonSinClienteComponent1750713394907,
    SimularIngresandoSegurosComponent1750713394910,
    SimularIngresandoSegurosSinClienteComponent1750713394916,
    SimularLibreAmortizacionComponent1750713394921,
    SimularLibreAmortizacionSinClienteComponent1750713394925,
    SimularOfertasComponent1750713394928,
    SimularPlazoFijoComponent1750713394931,
    SimularRefinanciacionComponent1750713394936,
    SimularRefinanciacionporDeudaTotalComponent1750713394939,
    SimularRefinanciacionporSaldoCapitalComponent1750713394941,
    ActualizarTextosComponent1750713394944,
    AgregarTextosComponent1750713394950,
    EliminarTextosComponent1750713394952,
    ObtenerTextosComponent1750713394954,
    EvaluarRegladeNegocioComponent1750713394960,
    ObtenerReglasdeNegocioComponent1750713394964,
    ObtenerVariablesReglaComponent1750713394967,
    ValidarDatosRegladeNegocioComponent1750713394969,
    AutorizarExcepcionComponent1750713394971,
    ObtenerDetalledeExcepcionComponent1750713394974,
    ObtenerExcepcionesComponent1750713394976,
    RechazarExcepcionComponent1750713394982,
    RegistrarDispositivoComponent1750713394984,
    ContratarSeguroComponent1750713394987,
    ObtenerMontosDeUnSeguroComponent1750713394990,
    ObtenerSegurosComponent1750713394992,
    ObtenerSegurosAPagarComponent1750713394995,
    PagarSeguroComponent1750713394997,
    ObtenerCodigosdeLimitesComponent1750713395010,
    ObtenerCuentaPreferencialComponent1750713395000,
    ObtenerCuentasaAsociarComponent1750713395003,
    ObtenerCuentasAsociadasComponent1750713395005,
    ObtenerCuentasAsociadasPorTipoComponent1750713395008,
    ObtenerDatosComponent1750713395013,
    ObtenerDatosContactoComponent1750713395016,
    ObtenerIdentificadorUnicoComponent1750713395020,
    ObtenerLimitesComponent1750713395024,
    ObtenerMovimientosComponent1750713395028,
    ObtenerTarjetaComponent1750713395032,
    ObtenerTarjetaHabienteComponent1750713395035,
    ObtenerTarjetasAdicionalesComponent1750713395037,
    ObtenerTiposdeCuentaComponent1750713395040,
    ActivarComponent1750713395042,
    ActualizarCuentaPreferencialComponent1750713395045,
    ActualizarDatosContactoComponent1750713395048,
    AsociarCuentaComponent1750713395051,
    BlanquearPinComponent1750713395053,
    BloquearComponent1750713395055,
    BloquearDesdeREDComponent1750713395058,
    CrearComponent1750713395060,
    CrearConCuentasAsociadasComponent1750713395064,
    DenunciarComponent1750713395067,
    DenunciarDesdeREDComponent1750713395069,
    DesbloquearComponent1750713395071,
    DesbloquearDesdeREDComponent1750713395074,
    EliminarCuentaAsociadaComponent1750713395076,
    ModificarLimiteComponent1750713395079,
    ComprarComponent1750713395082,
    ObtenerEstadoCompraComponent1750713395084,
    ObtenerGruposComponent1750713395088,
    ObtenerValoresComponent1750713395091,
    AgregarPerfilComponent1750713395093,
    CrearComponent1750713395096,
    EliminarPerfilComponent1750713395100,
    EliminarUsuarioComponent1750713395103,
    HabilitarEnCanalComponent1750713395105,
    HabilitarUsuarioComponent1750713395107,
    InhabilitarUsuarioComponent1750713395111,
    ModificarComponent1750713395116,
    ObtenerComponent1750713395120,
    ObtenerPerfilesComponent1750713395123,
    ObtenerUsuariosComponent1750713395125,
    ObtenerUsuariosParaPerfilComponent1750713395128,
    ObtenerMetadataDeTareaComponent1750713395131,
    ObtenerProcesosHabilitadosComponent1750713395135,
    ObtenerRolesComponent1750713395137,
    ObtenerRolesdeTareaComponent1750713395139,
    ObtenerTareasdeProcesoComponent1750713395141,
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
    ContratarSimulacionComponent1750713393003,
    CrearComponent1750713393010,
    SimularComponent1750713393014,
    ActualizarDocumentoDigitalComponent1750713393017,
    AsociarDocumentoDigitalComponent1750713393020,
    EliminarDocumentoDigitalComponent1750713393024,
    ObtenerDocumentoDigitalComponent1750713393027,
    ObtenerDocumentosDigitalesComponent1750713393030,
    ModificarCuentaDestinoComponent1750713393033,
    ModificarCuentaOrigenComponent1750713393036,
    ModificarFechadeAbonoComponent1750713393039,
    ModificarMetadeAhorroComponent1750713393042,
    ModificarMontodeAbonoComponent1750713393046,
    ObtenerComponent1750713393049,
    ObtenerCronogramaAbonosComponent1750713393053,
    ObtenerCuentasDestinoHabilitadasComponent1750713393055,
    ObtenerCuentasOrigenHabilitadasComponent1750713393057,
    ObtenerEstadodeCuentaComponent1750713393059,
    ObtenerPeriodosHabilitadosComponent1750713393062,
    ObtenerPlazosHabilitadosComponent1750713393065,
    ObtenerProductosComponent1750713393068,
    AnularChequeElectronicoComponent1750713393071,
    AsignarIdaChequeElectronicoComponent1750713393074,
    CrearChequeraElectronicaComponent1750713393075,
    DepositarChequeElectronicodeBancoPropioComponent1750713393078,
    DepositarChequeElectronicodeOtroBancoComponent1750713393082,
    DepositarChequeElectronicoenCustodiaComponent1750713393085,
    EmitirChequeElectronicoComponent1750713393087,
    EmitirChequeElectronicodeChequeraComponent1750713393090,
    HabilitarChequeElectronicoComponent1750713393092,
    CrearAdhesionComponent1750713393095,
    CrearStopDebitComponent1750713393100,
    CrearStopDebitparaAdhesionconImporteComponent1750713393104,
    EliminarStopDebitComponent1750713393106,
    ObtenerAdhesionesComponent1750713393108,
    ObtenerDebitosComponent1750713393112,
    ObtenerEmpresasOriginantesComponent1750713393116,
    ObtenerStopDebitsComponent1750713393119,
    ReversarDebitosComponent1750713393121,
    SolicitarBajadeAdhesionComponent1750713393123,
    AutenticacionComponent1750713393125,
    ObtenerDetalledeEjecucionComponent1750713393127,
    ObtenerDetalledeProcesoComponent1750713393131,
    ObtenerProcesosconErrorComponent1750713393133,
    ObtenerProcesosCriticosComponent1750713393136,
    ObtenerProcesosDiariosComponent1750713393138,
    ObtenerProcesosMensualesComponent1750713393140,
    ObtenerProcesosReprocesablesComponent1750713393141,
    VerificarEstadoServidorComponent1750713393144,
    CalcularFechadeVencimientoComponent1750713393147,
    CalcularFechadeVencimientoenDiasHabilesComponent1750713393150,
    CalcularPlazoComponent1750713393152,
    CalcularPlazoenDiasHabilesComponent1750713393154,
    ObtenerFechaHabilComponent1750713393156,
    ObtenerFechaHabilAnteriorComponent1750713393158,
    ObtenerFechaHabilAnteriordeSucursalComponent1750713393161,
    ObtenerFechaHabildeSucursalComponent1750713393165,
    ObtenerInicioyFindeMesComponent1750713393168,
    ObtenerInicioyFindeMesdeSucursalComponent1750713393171,
    ObtenerProximaFechaHabilComponent1750713393173,
    ObtenerProximaFechaHabildeSucursalComponent1750713393175,
    AutorizarArchivoComponent1750713393178,
    CargarArchivoComponent1750713393181,
    CargarArchivoRecibidoComoDatoComponent1750713393183,
    DetenerArchivoComponent1750713393185,
    RechazarArchivoComponent1750713393187,
    CargarBeneficiariosComponent1750713393189,
    IngresarBeneficiarioComponent1750713393191,
    ObtenerBeneficiarioSegunFiltroComponent1750713393194,
    AltaAutomaticaContratoComponent1750713393198,
    CargarServiciosDisponiblesComponent1750713393201,
    ContratarDebitoAutomaticoComponent1750713393204,
    ObtenerDetalledeOrdendeCuentaComponent1750713393206,
    ObtenerDetalledePagoComponent1750713393208,
    ObtenerDetalleOrdenSegunCampoComponent1750713393212,
    ObtenerDetallePagoOrdenComponent1750713393216,
    ObtenerDeudaComponent1750713393219,
    ObtenerResumenOrdenComponent1750713393221,
    ObtenerServiciosComponent1750713393223,
    ObtenerValoresOrdenComponent1750713393226,
    ObtenerValoresOrdenSegunCampoComponent1750713393228,
    AutorizarOrdenComponent1750713393231,
    DetenerOrdenComponent1750713393233,
    IngresarOrdenPagoComponent1750713393236,
    ProcesarOrdenComponent1750713393240,
    RechazarOrdenComponent1750713393242,
    AnularPagoDeudaComponent1750713393245,
    PagarDeudaDesdeCuentaComponent1750713393248,
    RegistrarPagoDeudaComponent1750713393251,
    RegistrarPagoEnLineaComponent1750713393255,
    RegistrarPagoEnLineaDesdeCuentaComponent1750713393258,
    VisualizarListaResumenCabezalComponent1750713393264,
    VisualizarListaResumenCabezalOrdenComponent1750713393267,
    VisualizarOrdendeArchivoParaCuentaComponent1750713393270,
    VisualizarResultadoProcesamientoComponent1750713393273,
    VisualizarResumenCabezalComponent1750713393277,
    VisualizarSituacionArchivosComponent1750713393283,
    VisualizarSituacionLineasComponent1750713393291,
    CHATComponent1750713393295,
    ActualizarComponent1750713393300,
    ActualizarDocumentoDigitalComponent1750713393304,
    ActualizarDomicilioComponent1750713393308,
    ActualizarInformacionAdicionalComponent1750713393312,
    ActualizarRegistroEmpleadoComponent1750713393318,
    ActualizarTelefonoComponent1750713393324,
    AgregarDomicilioComponent1750713393328,
    AgregarInformacionAdicionalComponent1750713393337,
    AgregarIntegranteComponent1750713393340,
    AgregarTelefonoComponent1750713393344,
    AsociarDocumentoDigitalComponent1750713393351,
    EliminarDocumentoDigitalComponent1750713393355,
    EliminarDomicilioComponent1750713393358,
    EliminarInformacionAdicionalComponent1750713393361,
    EliminarIntegranteComponent1750713393365,
    HabilitarComponent1750713393367,
    InhabilitarComponent1750713393370,
    ModificarEjecutivoComponent1750713393372,
    CrearComponent1750713393374,
    CrearconPersonaExistenteComponent1750713393376,
    CrearParaPersonaJuridicaComponent1750713393379,
    ObtenerComponent1750713393382,
    ObtenerAhorrosProgramadosComponent1750713393388,
    ObtenerBolsillosComponent1750713393391,
    ObtenerClasificacionesInternasComponent1750713393394,
    ObtenerCuentaClienteComponent1750713393398,
    ObtenerCuentasCorrientesSaldoContableComponent1750713393401,
    ObtenerCuentasCorrientesSaldoDisponibleComponent1750713393403,
    ObtenerCuentasdeAhorroSaldoContableComponent1750713393406,
    ObtenerCuentasdeAhorroSaldoDisponibleComponent1750713393410,
    ObtenerDatosComponent1750713393415,
    ObtenerDetallePosicionComponent1750713393418,
    ObtenerDocumentoDigitalComponent1750713393420,
    ObtenerDocumentosDigitalesComponent1750713393422,
    ObtenerDomiciliosComponent1750713393425,
    ObtenerFacultadesComponent1750713393428,
    ObtenerIdentificadorUnicoComponent1750713393431,
    ObtenerInformacionAdicionalComponent1750713393434,
    ObtenerIntegrantesComponent1750713393436,
    ObtenerLimitesComponent1750713393438,
    ObtenerMotivosInhabilitacionComponent1750713393440,
    ObtenerPerfilComponent1750713393442,
    ObtenerPlazosFijosComponent1750713393444,
    ObtenerPlazosFijosCanceladosComponent1750713393448,
    ObtenerPlazosFijosconAvanceComponent1750713393450,
    ObtenerPosicionComponent1750713393454,
    ObtenerPrestamosComponent1750713393457,
    ObtenerPrestamosCanceladosComponent1750713393461,
    ObtenerPrestamosCastigadosComponent1750713393467,
    ObtenerPrestamosconAvanceComponent1750713393470,
    ObtenerResumendeProductosCierredeanoComponent1750713393473,
    ObtenerResumendeProductosSaldosContablesComponent1750713393475,
    ObtenerResumendeProductosSaldosDisponiblesComponent1750713393478,
    ObtenerResumenporProductoaCierreAnoComponent1750713393482,
    ObtenerRiesgodeCreditoComponent1750713393485,
    ObtenerSaldosdeOtrosProductosComponent1750713393488,
    ObtenerSectoresComponent1750713393491,
    ObtenerSegmentosComponent1750713393494,
    ObtenerTarjetasdeDebitoComponent1750713393498,
    ObtenerTelefonosComponent1750713393500,
    ObtenerTiposdeIntegracionComponent1750713393503,
    ObtenerTitularRepresentativoComponent1750713393505,
    ObtenerTitulosComponent1750713393507,
    ValidarExistenciaComponent1750713393510,
    VerificarEmpleadoComponent1750713393515,
    ObtenerAgenciasBancoComponent1750713393519,
    ObtenerBancosComponent1750713393523,
    ObtenerDetalleSucursalComponent1750713393525,
    ObtenerSucursalesPrincipalesComponent1750713393528,
    ObtenerActividadesComponent1750713393532,
    ObtenerActividadesporTipoComponent1750713393535,
    ObtenerEjecutivosComponent1750713393538,
    ObtenerTiposdeActividadComponent1750713393540,
    ObtenerTiposdeTarjetaComponent1750713393542,
    ObtenerImpuestosComponent1750713393546,
    ObtenerTiposdeDocumentoDigitalComponent1750713393549,
    ObtenerEstadosComponent1750713393552,
    ObtenerInstruccionesComponent1750713393554,
    ObtenerPaquetesComponent1750713393557,
    ObtenerTiposdeTextoComponent1750713393560,
    ObtenerCalendariodeSucursalComponent1750713393564,
    ObtenerCalendariosComponent1750713393567,
    ObtenerDetalledeCalendarioComponent1750713393569,
    ObtenerDetalledeCalendariodeSucursalComponent1750713393572,
    ObtenerDolarUSAComponent1750713393574,
    ObtenerEmpresaComponent1750713393577,
    ObtenerFechadeSistemaComponent1750713393581,
    ObtenerMonedaNacionalComponent1750713393584,
    ObtenerMonedasComponent1750713393586,
    ObtenerSucursalesComponent1750713393590,
    ObtenerAgrupadoresDomicilioComponent1750713393593,
    ObtenerBarriosyColoniasComponent1750713393600,
    ObtenerCiudadesyLocalidadesComponent1750713393602,
    ObtenerCodigosdeDomicilioComponent1750713393605,
    ObtenerEstadosProvinciasyDepartamentosComponent1750713393608,
    ObtenerPaisesComponent1750713393612,
    ObtenerTiposdeListasNegrasComponent1750713393615,
    ObtenerTiposdeTelefonoComponent1750713393618,
    ObtenerTiposdeViviendaComponent1750713393620,
    ObtenerPizarraporModuloComponent1750713393623,
    ObtenerPizarrasComponent1750713393626,
    ObtenerMenusComponent1750713393629,
    ObtenerPerfilesComponent1750713393632,
    AgregarTextoAsientoComponent1750713393634,
    AgregarTextoOrdinalComponent1750713393639,
    AnularMovimientoComponent1750713393642,
    ActualizarCondicionImpositivaComponent1750713393644,
    CrearCondicionImpositivaComponent1750713393649,
    ObtenerIdBantotalMovimientoComponent1750713393651,
    ObtenerIdBantotalOperacionComponent1750713393654,
    ObtenerIdBantotalProductoComponent1750713393657,
    ObtenerIdentificadorUnicodeMovimientoComponent1750713393659,
    ObtenerIdentificadorUnicodeOperacionComponent1750713393663,
    ObtenerIdentificadorUnicodeProductoComponent1750713393666,
    ObtenerClientedeunaOperacionComponent1750713393670,
    ObtenerCondicionImpositivaComponent1750713393673,
    ObtenerDetalledeMovimientoComponent1750713393676,
    ObtenerDetalledeOrdinalComponent1750713393679,
    ObtenerIntegrantesdeOperacionComponent1750713393682,
    ObtenerTextosdeMovimientoComponent1750713393685,
    RegistrarAsientoComponent1750713393688,
    RegistrarAsientoFechaValorComponent1750713393690,
    CancelarComponent1750713393692,
    CashInComponent1750713393695,
    CashOutComponent1750713393698,
    ContratarComponent1750713393701,
    ObtenerDatosComponent1750713393704,
    ObtenerMovimientosComponent1750713393707,
    ObtenerProductosComponent1750713393709,
    ObtenerProductosCVComponent1750713393712,
    ObtenerChequeraComponent1750713393715,
    ObtenerChequerasComponent1750713393719,
    ObtenerChequesdeChequeraComponent1750713393721,
    ObtenerComisionChequeraComponent1750713393723,
    ObtenerEstadodeChequeraComponent1750713393726,
    ObtenerSolicitudesdeChequerasComponent1750713393728,
    ObtenerTiposdeChequeraComponent1750713393732,
    ObtenerTiposdeChequeraporProductoComponent1750713393734,
    EliminarChequeraComponent1750713393736,
    RegistrarOrdendeNoPagodeChequeraComponent1750713393738,
    RegistrarOrdendeNoPagodeChequesComponent1750713393740,
    SolicitarChequeraComponent1750713393742,
    ContratarconPeriodicidadComponent1750713393744,
    ContratarProductoComponent1750713393748,
    ContratarProductoconAltadeFacultadesComponent1750713393752,
    ObtenerAcuerdosComponent1750713393755,
    ObtenerDatosComponent1750713393758,
    ObtenerEstadodeCuentaComponent1750713393761,
    ObtenerEvoluciondeSaldosComponent1750713393765,
    ObtenerProductosComponent1750713393768,
    ContratarconPeriodicidadComponent1750713393770,
    ContratarProductoComponent1750713393772,
    ContratarProductoconAltadeFacultadesComponent1750713393774,
    ObtenerDatosComponent1750713393776,
    ObtenerEstadodeCuentaComponent1750713393778,
    ObtenerEvoluciondeSaldosComponent1750713393781,
    ObtenerProductosComponent1750713393783,
    ActualizarBeneficiariosComponent1750713393788,
    ObtenerBeneficiariosComponent1750713393790,
    ActualizarDocumentoDigitalComponent1750713393792,
    AsociarDocumentoDigitalComponent1750713393795,
    EliminarDocumentoDigitalComponent1750713393798,
    ObtenerDocumentoDigitalComponent1750713393800,
    ObtenerDocumentosDigitalesComponent1750713393802,
    ObtenerBolsillosComponent1750713393804,
    ObtenerCBUdeCuentaVistaComponent1750713393806,
    ObtenerCuentaVistadeCBUComponent1750713393808,
    ObtenerDetalleBloqueoComponent1750713393809,
    ObtenerEstadodeCuentaporPeriodoComponent1750713393812,
    ObtenerEstadoDeOperacionComponent1750713393815,
    ObtenerFacultadesComponent1750713393817,
    ObtenerPaqueteComponent1750713393819,
    ObtenerPeriododeAcreditacionComponent1750713393823,
    ObtenerPeriodosdeAcreditacionComponent1750713393821,
    ObtenerSaldoBloqueadoComponent1750713393825,
    ObtenerSaldoDisponibleComponent1750713393827,
    ObtenerSaldosBloqueadosComponent1750713393833,
    AcreditarEnCuentaComponent1750713393835,
    ActivarComponent1750713393837,
    ActualizarPeriododeAcreditacionComponent1750713393839,
    BloquearSaldoComponent1750713393840,
    CancelarComponent1750713393843,
    DebitarEnCuentaComponent1750713393845,
    DesbloquearSaldoComponent1750713393848,
    ActualizarPerfilTransaccionalComponent1750713393850,
    AgregarPerfilTransaccionalComponent1750713393852,
    ObtenerPerfilTransaccionalComponent1750713393854,
    TraspasarConTipoDeCambioEspecialComponent1750713393856,
    TraspasarEntreCuentasdelaMismaPersonaComponent1750713393858,
    TraspasarEntreCuentasMismoTitularcontipodecambioComponent1750713393860,
    TraspasarEntreCuentasMismoTitulardiferentesmonedasComponent1750713393864,
    TraspasarEntreCuentasPropiasComponent1750713393871,
    TraspasarEntreCuentasPropiascontipodecambioComponent1750713393867,
    TraspasarEntreCuentasPropiasdiferentesmonedasComponent1750713393869,
    TraspasarEntreCuentasTercerosComponent1750713393878,
    TraspasarEntreCuentasTerceroscontipodecambioComponent1750713393873,
    TraspasarEntreCuentasTercerosdiferentesmonedasComponent1750713393875,
    ActualizarBeneficiariosComponent1750713393882,
    ObtenerBeneficiariosComponent1750713393885,
    ContratarComponent1750713393888,
    ContratarConFacultadesComponent1750713393890,
    ContratarSimulacionComponent1750713393894,
    ActualizarDocumentoDigitalComponent1750713393900,
    AsociarDocumentoDigitalComponent1750713393902,
    EliminarDocumentoDigitalComponent1750713393905,
    ObtenerDocumentoDigitalComponent1750713393908,
    ModificarCuentaDestinoalVencimientoComponent1750713393910,
    ModificarCuentaDestinodeAcreditacionPeriodicaComponent1750713393913,
    ModificarInstruccionComponent1750713393916,
    ObtenerAvanceComponent1750713393919,
    ObtenerDatosComponent1750713393921,
    ObtenerDatosPrecancelacionComponent1750713393924,
    ObtenerDocumentosDigitalesComponent1750713393926,
    ObtenerInstruccionComponent1750713393934,
    ObtenerInstruccionesHabilitadosComponent1750713393931,
    ObtenerMovimientosComponent1750713393936,
    ObtenerPeriodosHabilitadosComponent1750713393939,
    ObtenerProductosComponent1750713393941,
    ObtenerProductosHabilitadosComponent1750713393944,
    ObtenerTasadePrecancelacionComponent1750713393948,
    PrecancelarComponent1750713393951,
    SimularComponent1750713393954,
    SimularConCronogramaComponent1750713393957,
    ConfirmarListaComponent1750713393959,
    CrearListaComponent1750713393962,
    CrearListaChequesComponent1750713393965,
    ObtenerProductosComponent1750713393967,
    ObtenerTiposDeDesembolsoComponent1750713393971,
    SeleccionarOpcionDesembolsoComponent1750713393973,
    ObtenerAgrupadoresComponent1750713393975,
    ObtenerCierredeSaldosporMonedaComponent1750713393978,
    ObtenerCondicionesGeneralesComponent1750713393981,
    ObtenerIndicadoresComponent1750713393984,
    ObtenerMetodosMasEjecutadosComponent1750713393986,
    ObtenerMonedasIndicesComponent1750713393988,
    ObtenerRubrosBolsaComponent1750713393991,
    ObtenerServiciosMasEjecutadosComponent1750713393993,
    ObtenerSesionesPorUsuarioComponent1750713393997,
    ObtenerSucursalesCajasComponent1750713394001,
    ObtenerTransaccionesporEstadosComponent1750713394003,
    BuscarClienteComponent1750713394005,
    CompletarTareaComponent1750713394007,
    CrearSolicitudAmpliacionComponent1750713394010,
    CrearSolicitudIndividualComponent1750713394013,
    CrearSolicitudRenovacionComponent1750713394017,
    AgregarFiadorComponent1750713394021,
    EliminarFiadorComponent1750713394023,
    ActualizarGrupoComponent1750713394026,
    ActualizarIntegrantedeGrupoComponent1750713394029,
    AgregarGrupoComponent1750713394032,
    AgregarIntegranteaGrupoComponent1750713394036,
    CrearSolicitudGrupalComponent1750713394038,
    HabilitarIntegrantedeunGrupoComponent1750713394041,
    InhabilitarIntegrantedeunGrupoComponent1750713394044,
    ObtenerDetalleGrupoComponent1750713394048,
    ObtenerGruposComponent1750713394051,
    ObtenerIntegrantesdeGrupoComponent1750713394054,
    ObtenerTiposdeGrupoComponent1750713394056,
    ObtenerTiposdeIntegranteComponent1750713394058,
    SimularPrestamoAmortizableGrupalComponent1750713394061,
    ObtenerAsesoresComponent1750713394066,
    ObtenerCampanasComponent1750713394068,
    ObtenerDestinosCreditoComponent1750713394071,
    ObtenerOperacionesClienteComponent1750713394074,
    ObtenerOrigenesdeCaptacionComponent1750713394076,
    ObtenerProductosComponent1750713394080,
    ObtenerSolicitudesClienteComponent1750713394082,
    ObtenerTiposAvalComponent1750713394085,
    AgregarOperacionesaCancelarComponent1750713394087,
    ObtenerOperacionesaCancelarComponent1750713394089,
    QuitarOperacionesaCancelarComponent1750713394092,
    SimularLibreAmortizacionComponent1750713394095,
    SimularPrestamoAmortizableComponent1750713394099,
    SimularPrestamoPlazoFijoComponent1750713394103,
    ValidarPoliticasComponent1750713394105,
    ObtenerCantidadCuotasComponent1750713394107,
    ObtenerCapitalComponent1750713394110,
    ObtenerComisionesComponent1750713394114,
    ObtenerComisionesporCuotaComponent1750713394116,
    ObtenerDiasPrimerPeriodoComponent1750713394123,
    ObtenerPeriodoEntreCuotasComponent1750713394129,
    ObtenerPermiteSegurosdelMismoTipoComponent1750713394126,
    ObtenerPlazoComponent1750713394132,
    ObtenerRequiereSegurodeVidaObligatorioComponent1750713394137,
    ObtenerSegurosComponent1750713394140,
    ObtenerItemsModeloComponent1750713394142,
    ObtenerModelosPAEComponent1750713394147,
    ObtenerScoresComponent1750713394150,
    ObtenerTiposDeModelosComponent1750713394154,
    ContratarPrestamoComponent1750713394157,
    ContratarVehicularComponent1750713394160,
    CrearClienteComponent1750713394163,
    CrearPersonaClienteComponent1750713394167,
    ObtenerDatosdeUsuarioComponent1750713394173,
    ObtenerDetalledeOfertaAmortizableComponent1750713394176,
    ObtenerDetalleOfertaVehicularComponent1750713394181,
    ObtenerMarcasComponent1750713394187,
    ObtenerModelosComponent1750713394190,
    ObtenerPartnersComponent1750713394193,
    ObtenerPrestamosdeClienteComponent1750713394205,
    ObtenerProductosComponent1750713394199,
    ObtenerProductosdelPartnerComponent1750713394202,
    ObtenerPuntosdeVentaComponent1750713394207,
    ObtenerVendedoresComponent1750713394210,
    ObtenerVersionesComponent1750713394213,
    SimularOfertasComponent1750713394216,
    SimularOfertasVehicularComponent1750713394222,
    SimularPrestamoComponent1750713394225,
    SimularVehicularComponent1750713394229,
    ObtenerCorrelativoGuiaComponent1750713394232,
    ObtenerCorrelativoGuiaEspecialComponent1750713394234,
    ObtenerGuiadeProcesoComponent1750713394237,
    ObtenerGuiaEspecialdeProcesoComponent1750713394239,
    ObtenerOpcionGeneraldeProcesoComponent1750713394242,
    ObtenerOpcionGeneralPorModuloComponent1750713394247,
    ObtenerProgramaParticularComponent1750713394252,
    ActualizarComponent1750713394254,
    ActualizarCelularComponent1750713394257,
    ActualizarContactoComponent1750713394259,
    ActualizarConyugeComponent1750713394264,
    ActualizarCorreoElectronicoComponent1750713394262,
    ActualizarDomicilioComponent1750713394267,
    ActualizarFATCAComponent1750713394270,
    ActualizarInformacionAdicionalComponent1750713394273,
    ActualizarInformacionFinancieraComponent1750713394275,
    ActualizarIntegrantedePersonaJuridicaComponent1750713394278,
    ActualizarPersonaJuridicaComponent1750713394281,
    ActualizarProfesionComponent1750713394285,
    ActualizarReferenciaComponent1750713394288,
    ActualizarRegistroEmpleadoComponent1750713394290,
    ActualizarTelefonoComponent1750713394293,
    ActualizarVictimaHechoViolentoComponent1750713394297,
    ModificarDocumentoAdicionalComponent1750713394300,
    AgregaraListaNegraComponent1750713394303,
    AgregarContactoComponent1750713394323,
    AgregarCorreoElectronicoComponent1750713394327,
    AgregarDatosPEPComponent1750713394332,
    AgregarDocumentoAdicionalComponent1750713394335,
    AgregarDomicilioComponent1750713394338,
    AgregarEstadoFinancieroComponent1750713394340,
    AgregarFATCAComponent1750713394343,
    AgregarInformacionAdicionalComponent1750713394347,
    AgregarInformacionFinancieraComponent1750713394350,
    AgregarIntegranteaPersonaJuridicaComponent1750713394353,
    AgregarPersonaVinculadaComponent1750713394357,
    AgregarReferenciaComponent1750713394360,
    AgregarTelefonoComponent1750713394366,
    AgregarVictimaHechoViolentoComponent1750713394371,
    CrearComponent1750713394374,
    CrearConyugeComponent1750713394377,
    CrearPersonaJuridicaComponent1750713394381,
    CrearReducidoComponent1750713394384,
    ActualizarDocumentoDigitalComponent1750713394387,
    AsociarDocumentoDigitalComponent1750713394390,
    EliminarDocumentoDigitalComponent1750713394392,
    ObtenerDocumentoDigitalComponent1750713394396,
    ObtenerDocumentosDigitalesComponent1750713394399,
    EliminarConyugeComponent1750713394402,
    EliminarDocumentoAdicionalComponent1750713394406,
    EliminarDomicilioComponent1750713394410,
    EliminarInformacionAdicionalComponent1750713394418,
    EliminarIntegrantedePersonaJuridicaComponent1750713394422,
    EliminarPersonaVinculadaComponent1750713394424,
    EliminarProfesionComponent1750713394426,
    ObtenerComponent1750713394432,
    ObtenerConceptoComponent1750713394435,
    ObtenerContactosComponent1750713394442,
    ObtenerConyugeComponent1750713394450,
    ObtenerCorreosElectronicosComponent1750713394444,
    ObtenerCuentasClienteComponent1750713394447,
    ObtenerDatosPEPComponent1750713394453,
    ObtenerDocumentosAdicionalesComponent1750713394455,
    ObtenerDomiciliosComponent1750713394497,
    ObtenerEstadosCivilesComponent1750713394500,
    ObtenerFacultadesComponent1750713394504,
    ObtenerFATCAComponent1750713394507,
    ObtenerHobbiesComponent1750713394519,
    ObtenerHobbyComponent1750713394522,
    ObtenerIdBantotalComponent1750713394525,
    ObtenerIdentidadesdeGeneroComponent1750713394527,
    ObtenerIdentificadorUnicoComponent1750713394531,
    ObtenerInformacionAdicionalComponent1750713394533,
    ObtenerInformacionFinancieraComponent1750713394536,
    ObtenerIntegrantesPersonaJuridicaComponent1750713394538,
    ObtenerLimitesComponent1750713394541,
    ObtenerNaturalezasJuridicasComponent1750713394544,
    ObtenerNivelesEducativosComponent1750713394549,
    ObtenerOcupacionesComponent1750713394552,
    ObtenerPersonaJuridicaComponent1750713394554,
    ObtenerPersonasComponent1750713394557,
    ObtenerPersonasJuridicasComponent1750713394559,
    ObtenerPersonasVinculadasComponent1750713394565,
    ObtenerProfesionComponent1750713394570,
    ObtenerProfesionesComponent1750713394567,
    ObtenerReferenciasComponent1750713394573,
    ObtenerTarjetasdeDebitoComponent1750713394575,
    ObtenerTelefonosComponent1750713394578,
    ObtenerTipodePersonaComponent1750713394582,
    ObtenerTiposdeDocumentoComponent1750713394584,
    ObtenerTiposDeFuncionarioPublicoComponent1750713394586,
    ObtenerTiposDePEPComponent1750713394589,
    ObtenerTitularesDelTelefonoComponent1750713394591,
    ObtenerVictimaHechoViolentoComponent1750713394594,
    ObtenerVinculosComponent1750713394597,
    ObtenerVinculosdeAfinidadComponent1750713394599,
    ObtenerVinculosdeConsanguinidadComponent1750713394602,
    ObtenerVinculosJuridicosComponent1750713394605,
    EvaluarPAEComponent1750713394609,
    ValidarCorreoElectronicoComponent1750713394612,
    ValidarDocumentoComponent1750713394615,
    ValidarenListasNegrasComponent1750713394618,
    ValidarExistenciaComponent1750713394620,
    ValidarListasInhabilitadosComponent1750713394623,
    VerificarEmpleadoComponent1750713394625,
    ConvertirTasaAnualEfectivaaLinealComponent1750713394627,
    ConvertirTasaAnualLinealaEfectivaComponent1750713394630,
    ConvertirTasaMensualEfectivaaLinealComponent1750713394633,
    ConvertirTasaMensualLinealaEfectivaComponent1750713394640,
    ObtenerCotizacionComponent1750713394642,
    ObtenerCotizacionaFechaComponent1750713394645,
    ObtenerCotizacionCierreComponent1750713394648,
    ObtenerPizarraEspecialporTransaccionComponent1750713394650,
    ObtenerPrecioaFechaComponent1750713394654,
    ObtenerPrecioEspecieComponent1750713394657,
    ObtenerTasadeOperacionComponent1750713394659,
    ObtenerTasaParaClienteComponent1750713394662,
    ObtenerTasaParaProductoComponent1750713394665,
    ObtenerTipodeCambioComponent1750713394668,
    ObtenerTiposDeCambioEspecialesComponent1750713394671,
    CancelarComponent1750713394674,
    CancelaraFechaComponent1750713394677,
    CancelaraFechaTercerosComponent1750713394680,
    CancelarTercerosComponent1750713394684,
    ContratarComponent1750713394686,
    ContratarAmpliacionComponent1750713394689,
    ContratarRefinanciacionComponent1750713394691,
    ContratarRefinanciacionporDeudaTotalComponent1750713394694,
    ContratarRefinanciacionporSaldoCapitalComponent1750713394697,
    ActualizarDocumentoDigitalComponent1750713394700,
    AsociarDocumentoDigitalComponent1750713394703,
    EliminarDocumentoDigitalComponent1750713394705,
    ObtenerDocumentoDigitalComponent1750713394708,
    ObtenerDocumentosDigitalesComponent1750713394710,
    ObtenerCronogramaComponent1750713394714,
    ObtenerCronogramaaFechaComponent1750713394719,
    ObtenerCronogramaconPagosaFechaComponent1750713394721,
    ObtenerCronogramaenEspecieComponent1750713394724,
    ObtenerCronogramaOriginalComponent1750713394727,
    ObtenerCuentadeCobroComponent1750713394730,
    ObtenerDatosdelProximoVencimientoComponent1750713394733,
    ObtenerDetalleComponent1750713394736,
    ObtenerDetalleaFechaComponent1750713394738,
    ObtenerDetalledeCancelacionTotalComponent1750713394741,
    ObtenerDetalledeOfertaComponent1750713394744,
    ObtenerDetalledeOfertaAmortizableComponent1750713394749,
    ObtenerDetalledeOperacionesaRefinanciarComponent1750713394752,
    ObtenerDetalledePrestamoCanceladoComponent1750713394754,
    ObtenerDetallePagoPrestamoComponent1750713394757,
    ObtenerDetalleReducidoComponent1750713394760,
    ObtenerDetalleSimulacionComponent1750713394764,
    ObtenerDeudaComponent1750713394767,
    ObtenerDeudaPrestamoCastigadoComponent1750713394769,
    ObtenerDeudaVencidaComponent1750713394771,
    ObtenerFechadeIncumplimientoComponent1750713394773,
    ObtenerFechadeUltimoPagoComponent1750713394776,
    ObtenerFechasdePagoComponent1750713394779,
    ObtenerInformacionAdicionalComponent1750713394782,
    ObtenerMontodeCancelacionComponent1750713394785,
    ObtenerMotivosPrecancelacionComponent1750713394787,
    ObtenerPagosdeCuotaComponent1750713394790,
    ObtenerPagosdeunPrestamoComponent1750713394792,
    ObtenerPrestamosaVencerDisponibleunicamenteparaV3R1Component1750713394796,
    ObtenerPrestamosporRangoMoraDisponibleunicamenteparaV3R1Component1750713394800,
    ObtenerPrestamossinMoraDisponibleunicamenteparaV3R1Component1750713394802,
    ObtenerProductosComponent1750713394805,
    ObtenerProductosRefinanciacionComponent1750713394807,
    ObtenerRefinanciacionSimuladaComponent1750713394810,
    AbonaraCuentaComponent1750713394813,
    ActualizarInformacionAdicionalComponent1750713394815,
    ActualizarPrestamosconEventoDisponibleunicamenteparaV3R1Component1750713394819,
    AgregarCuentadeCobroComponent1750713394821,
    AgregarInformacionAdicionalComponent1750713394824,
    EliminarCuentadeCobroComponent1750713394826,
    EliminarInformacionAdicionalComponent1750713394830,
    SolicitarPrecancelacionComponent1750713394832,
    AdelantarCapitalConReduccionDeCuotaComponent1750713394836,
    AdelantarCapitalConReduccionDePlazoComponent1750713394839,
    PagarCuotaComponent1750713394842,
    PagarCuotaaFechaComponent1750713394844,
    PagarCuotaaFechaTercerosComponent1750713394848,
    PagarCuotaTercerosComponent1750713394851,
    ResimularAmortizableComponent1750713394854,
    ResimularAmpliacionComponent1750713394858,
    ResimularRefinanciacionComponent1750713394862,
    SimularComponent1750713394866,
    SimularAmortizableComponent1750713394868,
    SimularAmortizableSinClienteComponent1750713394871,
    SimularAmpliacionComponent1750713394874,
    SimularAmpliacionIngresandoSegurosComponent1750713394877,
    SimularDespejandoCapitalyCantidaddeCuotasComponent1750713394881,
    SimularDespejandoCapitalyCantidaddeCuotasSinClienteComponent1750713394885,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasComponent1750713394888,
    SimularDespejandoFechadeVencimientoyCantidaddeCuotasSinClienteComponent1750713394890,
    SimularDespejandoFechadeVencimientoyTasaComponent1750713394893,
    SimularDespejandoFechadeVencimientoyTasaSinClienteComponent1750713394901,
    SimularIngresandoBalloonComponent1750713394904,
    SimularIngresandoBalloonSinClienteComponent1750713394907,
    SimularIngresandoSegurosComponent1750713394910,
    SimularIngresandoSegurosSinClienteComponent1750713394916,
    SimularLibreAmortizacionComponent1750713394921,
    SimularLibreAmortizacionSinClienteComponent1750713394925,
    SimularOfertasComponent1750713394928,
    SimularPlazoFijoComponent1750713394931,
    SimularRefinanciacionComponent1750713394936,
    SimularRefinanciacionporDeudaTotalComponent1750713394939,
    SimularRefinanciacionporSaldoCapitalComponent1750713394941,
    ActualizarTextosComponent1750713394944,
    AgregarTextosComponent1750713394950,
    EliminarTextosComponent1750713394952,
    ObtenerTextosComponent1750713394954,
    EvaluarRegladeNegocioComponent1750713394960,
    ObtenerReglasdeNegocioComponent1750713394964,
    ObtenerVariablesReglaComponent1750713394967,
    ValidarDatosRegladeNegocioComponent1750713394969,
    AutorizarExcepcionComponent1750713394971,
    ObtenerDetalledeExcepcionComponent1750713394974,
    ObtenerExcepcionesComponent1750713394976,
    RechazarExcepcionComponent1750713394982,
    RegistrarDispositivoComponent1750713394984,
    ContratarSeguroComponent1750713394987,
    ObtenerMontosDeUnSeguroComponent1750713394990,
    ObtenerSegurosComponent1750713394992,
    ObtenerSegurosAPagarComponent1750713394995,
    PagarSeguroComponent1750713394997,
    ObtenerCodigosdeLimitesComponent1750713395010,
    ObtenerCuentaPreferencialComponent1750713395000,
    ObtenerCuentasaAsociarComponent1750713395003,
    ObtenerCuentasAsociadasComponent1750713395005,
    ObtenerCuentasAsociadasPorTipoComponent1750713395008,
    ObtenerDatosComponent1750713395013,
    ObtenerDatosContactoComponent1750713395016,
    ObtenerIdentificadorUnicoComponent1750713395020,
    ObtenerLimitesComponent1750713395024,
    ObtenerMovimientosComponent1750713395028,
    ObtenerTarjetaComponent1750713395032,
    ObtenerTarjetaHabienteComponent1750713395035,
    ObtenerTarjetasAdicionalesComponent1750713395037,
    ObtenerTiposdeCuentaComponent1750713395040,
    ActivarComponent1750713395042,
    ActualizarCuentaPreferencialComponent1750713395045,
    ActualizarDatosContactoComponent1750713395048,
    AsociarCuentaComponent1750713395051,
    BlanquearPinComponent1750713395053,
    BloquearComponent1750713395055,
    BloquearDesdeREDComponent1750713395058,
    CrearComponent1750713395060,
    CrearConCuentasAsociadasComponent1750713395064,
    DenunciarComponent1750713395067,
    DenunciarDesdeREDComponent1750713395069,
    DesbloquearComponent1750713395071,
    DesbloquearDesdeREDComponent1750713395074,
    EliminarCuentaAsociadaComponent1750713395076,
    ModificarLimiteComponent1750713395079,
    ComprarComponent1750713395082,
    ObtenerEstadoCompraComponent1750713395084,
    ObtenerGruposComponent1750713395088,
    ObtenerValoresComponent1750713395091,
    AgregarPerfilComponent1750713395093,
    CrearComponent1750713395096,
    EliminarPerfilComponent1750713395100,
    EliminarUsuarioComponent1750713395103,
    HabilitarEnCanalComponent1750713395105,
    HabilitarUsuarioComponent1750713395107,
    InhabilitarUsuarioComponent1750713395111,
    ModificarComponent1750713395116,
    ObtenerComponent1750713395120,
    ObtenerPerfilesComponent1750713395123,
    ObtenerUsuariosComponent1750713395125,
    ObtenerUsuariosParaPerfilComponent1750713395128,
    ObtenerMetadataDeTareaComponent1750713395131,
    ObtenerProcesosHabilitadosComponent1750713395135,
    ObtenerRolesComponent1750713395137,
    ObtenerRolesdeTareaComponent1750713395139,
    ObtenerTareasdeProcesoComponent1750713395141,
    //exports End page components
  ],

  providers: [SearchService],
})
export class ApiDocsModule {}
