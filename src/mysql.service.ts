import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable ({
    providedIn : 'root'
})
    export class MysqlService {

        private usuario = 'c2390548_appajps';
        private password = 'gifole46GI';
        private servidor = 'localhost';
        private basededatos = 'c2390548_appajps'

        constructor(
            private http : HttpClient
        ){}

        getConnection(){
            return this.http.get(`http://${this.servidor}/mysql-connection.php?username=${this.usuario}&password=${this.password}&database=${this.basededatos}`);
        }
    }