import { Component } from '@angular/core';
// import * as mysql from 'mysql';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
  ) {}
}

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'c2390548_appajps',
//   password: 'gifole46GI',
//   database : 'c2390548_appajps',
// })

// connection.connect((err)=> {
//   if (err) {
//     console.error("Error de Conexion : ", err);
//     return;
//   }

//   console.log("Conectado a base de datos");
// })


// connection.query('SELECT * FROM credenciales', (error , results , flieds) => {
//   if(error) throw error;
//   console.log(results)
// })

// connection.end();