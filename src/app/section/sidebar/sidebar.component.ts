import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  panelOpenState = false;

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;
  }

  menuCrue = [
    {
      id: 2, name: 'RECURSOS', Icon: '', color: '#1795c5', path: '', expanded: false, mostrar: false,
      childrens: [
        { id: 11, name: 'Ocupación', Icon: 'fa fa-procedures text-indigo', color: 'nav-link-text', path: '/admin/ocupacion', mostrar: false },
        { id: 12, name: 'Capacidad', Icon: 'fa fa-bed text-success', color: 'nav-link-text', path: '/admin/capacidad', mostrar: false },

      ]
    },
    {
      id: 3, name: 'CENSO', Icon: '', color: '#1795c5', path: '', expanded: false, mostrar: false,
      childrens: [
        { id: 9, name: 'Censo ocupación', Icon: 'fa fa-cloud-upload-alt text-info', color: 'nav-link-text', path: '/admin/censo', mostrar: false },
        { id: 18, name: 'Censo servicio', Icon: 'fa fa-cloud-upload-alt text-info', color: 'nav-link-text', path: '/admin/censo-ocupacion', mostrar: false },
        { id: 10, name: 'Gestión Aseguradoras', Icon: 'fa fa-user-shield text-primary', color: 'nav-link-text', path: '/admin/ocupacion-servicio-sede', mostrar: false },
        //{id: 19,name: 'Censo servicio', Icon: 'fa fa-cloud-upload-alt text-info', color: 'nav-link-text', path: '/admin/censo-ocupacion', mostrar: false},

      ]
    },
    {
      id: 8, name: 'PATOLOGÍA', Icon: '', color: '#1795c5', path: '', expanded: false, mostrar: false,
      childrens: [
        { id: 30, name: 'Reporte patología', Icon: 'fa fa-file-medical text-danger', color: 'nav-link-text', path: '/admin/reporte-enfermedad', mostrar: false },

      ]
    },
    {
      id: 5, name: 'REPORTES', Icon: '', color: '#1795c5', path: '', expanded: false, mostrar: false,
      childrens: [
        { id: 22, name: 'Capacidad-Ocupación', Icon: 'fa fa-file-alt text-info', color: 'nav-link-text', path: '/admin/reporte-capacidad-ocupacion', mostrar: false },
        { id: 21, name: 'Seguimiento notificación', Icon: 'fa fa-file-alt text-info', color: 'nav-link-text', path: '/admin/reporteseguimientoregistro', mostrar: false },
        { id: 23, name: 'Sabana remisiones', Icon: 'fas fa-scroll text-info', color: 'nav-link-text', path: '/admin/sabana-remisiones', mostrar: false },
        { id: 24, name: 'Censo ocupación', Icon: 'fa fa-file-alt text-info', color: 'nav-link-text', path: '/admin/reporte-censo-ocupacion', mostrar: false },
        { id: 25, name: 'Censo servicio', Icon: 'fa fa-file-alt text-info', color: 'nav-link-text', path: '/admin/reporte-censo-servicio', mostrar: false },
        { id: 35, name: 'Reporteador', Icon: 'fa fa-file-alt text-info', color: 'nav-link-text', path: '/admin/reporteador', mostrar: false },

      ]
    },
    {
      id: 6, name: 'REMISIONES', Icon: '', color: '#1795c5', path: '', expanded: false, mostrar: false,
      childrens: [
        { id: 17, name: 'Registrar Remisión', Icon: 'fa fa-book-open text-purple', color: 'nav-link-text', path: '/admin/censo', mostrar: false },
        { id: 16, name: 'Solicitudes Pendientes', Icon: 'fas fa-th-list text-purple', color: 'nav-link-text', path: '/admin/solicitudes', mostrar: false },
        { id: -1, name: 'Solicitudes Gestionadas', Icon: 'fas fa-calendar-check text-purple', color: 'nav-link-text', path: '/admin/solicitudes-gestionadas', mostrar: true },

      ]
    },
    {
      id: 10, name: 'NOVEDADES', Icon: '', color: '#1795c5', path: '', expanded: false, mostrar: false,
      childrens: [
        { id: 39, name: 'Novedad', Icon: 'fa fa-book-open text-purple', color: 'nav-link-text', path: '/admin/novedad-registro', mostrar: false },
      ]
    },
    {
      id: 7, name: 'TUTELAS', Icon: '', color: '#1795c5', path: '', expanded: false, mostrar: false,
      childrens: [
        { id: 36, name: 'Consultar paciente', Icon: 'fa fa-search text-primary', color: 'nav-link-text', path: '/admin/tutela-consultar-paciente', mostrar: false },
        { id: 29, name: 'Registrar', Icon: 'fa fa-balance-scale text-primary', color: 'nav-link-text', path: '/admin/tutela-registro', mostrar: false },
        { id: 31, name: 'Jurídica', Icon: 'fa fa-gavel text-primary', color: 'nav-link-text', path: '/admin/tutela-pendientes-Juridica', mostrar: false },
        { id: 32, name: 'Auditoria', Icon: 'fas fa-laptop-medical text-primary', color: 'nav-link-text', path: '/admin/tutela-auditoria', mostrar: false },
        { id: 34, name: 'Gestionadas', Icon: 'fas fa-calendar-check text-primary', color: 'nav-link-text', path: '/admin/tutelas-gestionadas', mostrar: false },
      ]
    },
    {
      id: 9, name: 'RESOLUCIÓN 3047', Icon: '', color: '#1795c5', path: '', expanded: false, mostrar: false,
      childrens: [
        { id: 37, name: 'Registrar solicitud', Icon: 'fa fa-book-open text-purple', color: 'nav-link-text', path: '/admin/resolucion3047-registro', mostrar: false },
        { id: 38, name: 'Solicitudes registradas', Icon: 'fas fa-calendar-check text-primary', color: 'nav-link-text', path: '/admin/resolucion3047-solicitudes', mostrar: false },
      ]
    },
    {
      id: 1, name: 'PARAMETRIZACIÓN', Icon: '', color: '#1795c5', path: '', expanded: false, mostrar: false,
      childrens: [
        { id: 1, name: 'Instituciones', Icon: 'fa fa-hospital text-primary', color: 'nav-link-text', path: '/admin/sedes', mostrar: false },
        { id: 2, name: 'Servicios', Icon: 'fa fa-hand-holding-medical text-primary', color: 'nav-link-text', path: '/admin/servicios', mostrar: false },
        { id: 3, name: 'Detalle Servicios', Icon: 'fas fa-clipboard-list text-primary', color: 'nav-link-text', path: '/admin/detalle-servicio', mostrar: false },
        { id: 4, name: 'Detalle Servicios IPS', Icon: 'fas fa-paste text-primary', color: 'nav-link-text', path: '/admin/detalle-servicio-sede', mostrar: false },
        { id: 5, name: 'Patologías', Icon: 'fa fa-viruses text-primary', color: 'nav-link-text', path: '/admin/patologias', mostrar: false },
        { id: 6, name: 'Aseguradoras', Icon: 'fa fa-user-shield text-primary', color: 'nav-link-text', path: '/admin/aseguradora', mostrar: false },
        { id: 19, name: 'Actividades', Icon: 'fa fa-sync-alt text-primary', color: 'nav-link-text', path: '/admin/actividad', mostrar: false },
        { id: 20, name: 'Diagnósticos', Icon: 'fa fa-address-book text-primary', color: 'nav-link-text', path: '/admin/informacion-diagnostico', mostrar: false },
        { id: 26, name: 'Juzgados', Icon: 'fa fa-balance-scale text-primary', color: 'nav-link-text', path: '/admin/juzgados', mostrar: false },
        { id: 27, name: 'Tipo auto', Icon: 'fa fa-university text-primary', color: 'nav-link-text', path: '/admin/tipo-auto', mostrar: false },
        { id: 28, name: 'Causa tutela', Icon: 'fa fa-file-archive text-primary', color: 'nav-link-text', path: '/admin/causa-tutela', mostrar: false },
        { id: 40, name: 'Envío automático', Icon: 'fa fa-arrow-up text-primary', color: 'nav-link-text', path: '/admin/tutelas-envio-automatico', mostrar: false },
        { id: 43, name: 'Clasificación eventos', Icon: 'fa fa-exclamation-triangle text-primary', color: 'nav-link-text', path: '/admin/clasificacion-eventos', mostrar: false },
        { id: 43, name: 'Tipo eventos', Icon: 'fa fa-exclamation-circle text-primary', color: 'nav-link-text', path: '/admin/tipo-eventos', mostrar: false },
      ]
    },
    {
      id: 4, name: 'ADMINISTRACIÓN', Icon: '', color: '#1795c5', path: '', expanded: false, mostrar: false,
      childrens: [
        { id: 7, name: 'Auditorías', Icon: 'fa fa-layer-group text-warning', color: 'nav-link-text', path: '/admin/auditorias', mostrar: false },
        { id: 14, name: 'Modulos', Icon: 'fa fa-box-open text-warning', color: 'nav-link-text', path: '/admin/modulos', mostrar: false },
        { id: 13, name: 'Roles', Icon: 'fa fa-id-card-alt text-warning', color: 'nav-link-text', path: '/admin/roles', mostrar: false },
        { id: 8, name: 'Usuarios', Icon: 'fa fa-users text-warning', color: 'nav-link-text', path: '/admin/usuarios', mostrar: false },

      ]
    },

  ];
  constructor(
    private router: Router
    ) {
  }

  routerTo(path:string){
    this.router.navigate([path]);
  }

  cerrarMenuMovil() {
    let menu: any = document.getElementById("menu-lateral-app");
    let btn: any = document.getElementById("cerrar-menu-movil");
    menu.classList.remove("open-movil");
    btn.classList.remove("open");
  }

  ngOnInit(): void {
  }

}
