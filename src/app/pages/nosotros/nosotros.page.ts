import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  //--- Navegacion ---
  goToHome(){
    this.router.navigate(['/home'])
  }
  goToNosotros(){
    this.router.navigate(['/nosotros'])
  }
  goToServicios(){
    this.router.navigate(['/servicios'])
  }
  goToCredenciales(){
    this.router.navigate(['/credenciales'])
  }
  goToComercios(){
    this.router.navigate(['/comercios'])
  }
  goToElSauce(){
    this.router.navigate(['/home'])
  }
  goToContactos(){
    this.router.navigate(['/contactos'])
  }


}
