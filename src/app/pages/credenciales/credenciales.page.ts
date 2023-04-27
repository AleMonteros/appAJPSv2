import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MysqlService } from 'src/mysql.service';

@Component({
  selector: 'app-credenciales',
  templateUrl: './credenciales.page.html',
  styleUrls: ['./credenciales.page.scss'],
})

// export class AppComponent { 
//   constructor(
//     private mysqlService : MysqlService){}
// }

export class CredencialesPage implements OnInit {

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
