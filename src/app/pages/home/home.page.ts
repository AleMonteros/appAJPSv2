import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
https: any;

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
    window.open("https://www.asocdejubsalta.com.ar/#section-6", "-blank");
  }

  goToContactos(){
    this.router.navigate(["/contactos"])
  }

  goToElSauce(){
    window.open("https://www.elsaucesalta.com.ar/es/", "-blank");
  }

}
