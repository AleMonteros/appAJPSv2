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

  // Navgacion de los Medios Contactos

  contWhatsApp(){
    window.open("https://api.whatsapp.com/send?phone=543876856999&text=Hola%2C%20he%20entrado%20a%20%20su%20web%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20", "-blank");
  }

  contFacebook(){
    window.open("https://www.facebook.com/AsocdeJubSalta","-blank");
  }

  contInstagram(){
    window.open("https://instagram.com/asocdejubsalta?igshid=YmMyMTA2M2Y=", "-blank");
  }

  contUbicacion(){
    window.open("https://goo.gl/maps/ThFoZtNa53JedA9N8", "-blank");
  }

  contEmail(){
    window.open("mailto:info@asocdejubsalta.com.ar", "-blank");
  }

  contTelefono(){
    window.open("tel:3876856999", "-blank");
  }
}
