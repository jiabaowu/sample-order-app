import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EditResolver implements Resolve<any> {

    constructor(
        private http: Http
        ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        console.log('resolving');
        const id = route.params['id'];
        return this.http.get('https://fierce-plains-25599.herokuapp.com/api/orders/' + id);
    }

}