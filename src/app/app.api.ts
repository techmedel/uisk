import { Injectable, Inject } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class Api {
    headers: any;

    constructor(
        @Inject('ur_api_htsk') public baseUrlCan: string,
        public http: HttpClient,
        private router: Router) {
        this.setHeaders();
    }

    setHeaders() {
        this.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    }

    public login(_data): Promise<any> {
        return new Promise((resolve) => {
            Swal.fire({
                title: 'Iniciando Sesión',
                onBeforeOpen: () => {
                    Swal.showLoading();
                    this.http.post<any>(
                        this.baseUrlCan + "/Account/V1/Login",
                        _data,
                        { headers: this.headers }
                    ).subscribe(_data => {
                        if (_data.token) {
                            sessionStorage.setItem("token", _data.token)
                            this.setHeaders();
                            Swal.close();
                            resolve(true);
                        }
                    }, error => {
                        Swal.fire({
                            type: 'error',
                            title: error.statusText,
                            text: error.message,
                            onClose: () => resolve(false)
                        })
                    });
                }
            })
        });
    }

    public logOut(){
        sessionStorage.clear();
        this.getStatusSession()
    }

    public getStatusSession() {
        this.setHeaders();
        this.http.get(
            this.baseUrlCan + "/Account/V1/GetStatusSession",
            { headers: this.headers }
        ).subscribe(_data => {
            return;
        }, error => {
            this.router.navigate(['/login'])
        });
    }

}
