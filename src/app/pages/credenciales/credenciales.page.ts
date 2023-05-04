import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { error } from 'console';
import { MysqlService } from 'src/app/servicies/mysql.service';
import { HttpClient } from '@angular/common/http';

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

  dni: number | undefined;

  constructor(
    private router : Router,
    private alertController : AlertController,
    private toastController : ToastController,
    private mysqlService : MysqlService,
    private http : HttpClient
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

  // --- Veificardor de DNI ---

  generar(){
    if(this.validarDNI()){
      this.mostrarAlerta('Validando los datos ingresados, por favor espere un momento ..');
    }
  }

  validarDNI() {
    if(!this.dni){
      //  --- Si el campo del DNI esta VACIO ---
      this.mostrarAlerta('Por favor, ingrese su DNI');
      return false;
    }else if(!/^\d{6,8}$/.test(this.dni.toString())){
      // --- Si el DNI ingresado no tiene entre 6 y  8 digitos
      this.mostrarAlerta('Por favor,  ingrese un DNI valido');
      return false;
    }else{
      this.mostrarAlerta('Validando los datos ingresados, por favor espere un momento ..')

      // --- Realizar Consulta SQL
      // const url = 'http://localhost/Ajps-conexion/consulta.php?dni=' + this.dni;
      // this.http.get(url).subscribe(
      //   (data :any) => {
      //   console.log(data);
      //   if(data.length === 0){
      //     this.mostrarAlerta('El DNI ingresado no esta registrado en nuestra base de datos');
      //   } else {
      //     this.mostrarAlerta('Los datos del usuario son: ' + JSON.stringify(data[0]));
      //   }
      //   },
      //   error => {
      //     console.log('Error al realizar la consulta' , error);
      //     this.mostrarAlerta('Ocurrio un error al validar los datos. Intente nuevamente mas tarde.');
      //   }
      // );
      return true;
    }
  }

  async mostrarAlerta(mensaje : string){

    try{
      const toast = await this.toastController.create({
      message : mensaje,
      duration : 1500,
      position : "bottom",
      
      });

      await toast.present();
    }catch (error) {
      console.log('Error al mostrar la alerta', error)
    }
  }


}
