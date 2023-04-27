import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

   // ---- Navegacion de Home ----

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
    this.router.navigate(["/comercios"])
  }

  goToContactos(){
    this.router.navigate(["/contactos"])
  }

}
