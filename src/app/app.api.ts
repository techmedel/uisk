import { Injectable, Inject } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class Api {

    public headers = new HttpHeaders();

    constructor(
        @Inject('ur_api_htsk') public baseUrlCan: string,
        public http: HttpClient
        ){
        this.headers.set('Content-Type', 'application/json');
    }

    setBarrerToken() {
        this.headers.set('Authorization', 'Bearrer ' + sessionStorage.getItem('token'));
    }

    public login(_data):Promise<any> {
        this.setBarrerToken();
        return new Promise((resolve) => {
            Swal.fire({
                title: 'Iniciando Sesión',
                onBeforeOpen: () => {
                    Swal.showLoading();
                    this.http.post<any>(
                        this.baseUrlCan+"/Account/V1/Login",
                        _data,
                        { headers: this.headers }
                    ).subscribe(_data => {
                        if (_data.token) {
                            sessionStorage.setItem("token",_data.token)
                            this.setBarrerToken();
                            Swal.close();
                            resolve(true);
                        }
                    }, error => {
                        Swal.fire({
                            type: 'error',
                            title: error.statusText,
                            text: error.message,
                            onClose:() => resolve(false)
                        })
                    });
                }
            })
        });
    }

    public getStatusSession() {
        this.headers.set('Authorization', 'Bearrer ' + sessionStorage.getItem('token'));
        this.http.get(
            this.baseUrlCan+"/Account/V1/GetStatusSession",
            { headers: this.headers }
        ).subscribe(_data => {
            return _data;
        }, error => {
            console.log(sessionStorage.getItem('token'));
        });
    }

}
