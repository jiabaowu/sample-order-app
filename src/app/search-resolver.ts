import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchResolver implements Resolve<any> {

    constructor(
        private http: Http
        ) {}

    resolve(): Observable<any> {
        console.log('resolving');
        return this.http.get('https://fierce-plains-25599.herokuapp.com/api/users');
    }

}
