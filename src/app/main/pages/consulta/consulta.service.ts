import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
    providedIn: 'root'
})
export class ConsultaService {
    public biva_docs: any[];

    constructor(private afdb: AngularFireDatabase) {
        this.afdb.list<any[]>('biva_docs').valueChanges().subscribe(data => {
            this.biva_docs = data
        })
    }
}
