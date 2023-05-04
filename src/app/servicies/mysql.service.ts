import { Injectable } from '@angular/core';
import { createConnection } from 'mysql2/promise';


@Injectable({
  providedIn: 'root'
})
export class MysqlService {
  [x: string]: any;

  // private config = {
  //   host : 'localhost',
  //   user : 'c2390548_appajps',
  //   password : 'gifole46GI',
  //   databse : 'c2390548_appajps'
  // };

  // async consultarPorDni(dni : number): Promise<any> {
  //   const conn = await createConnection(this.config);
  //   const [rows, fields] = await conn.execute('SELECT DNI , NomAsociado * FROM credenciales WHERE DNI = ${dni}');
  //   await conn.end();
  // }

  constructor() { }
}
