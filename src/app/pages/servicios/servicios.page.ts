import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

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
      window.open("https://www.asocdejubsalta.com.ar/#section-6", "-blank");
    }
    goToElSauce(){
      window.open("https://www.elsaucesalta.com.ar/es/", "-blank");
    }
    goToContactos(){
      this.router.navigate(['/contactos'])
    }

}
