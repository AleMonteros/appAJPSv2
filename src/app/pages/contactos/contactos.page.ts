import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  // ---- Navegacion ----

  goToHome(){
    this.router.navigate(["/home"])
  }

  goToNosotros(){
    this.router.navigate(["/nosotros"])
  }

  goToServicios(){
    this.router.navigate(["/servicios"])
  }

  goToCredenciales(){
    this.router.navigate(["/credenciales"])
  }

  goToComercios(){
    window.open("https://www.asocdejubsalta.com.ar/#section-6", "-blank");
  }

  goToContactos(){
    this.router.navigate(["/contactos"])
  }

  goToElSauce(){
    window.open("https://www.elsaucesalta.com.ar/es/", "-blank");
  }
}
