import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  users= new BehaviorSubject<any[]>([])

  constructor(private http: HttpClient) { }

  fetchData(){
    return this.http.post(environment.api+"login",{login:'adminbudget',pwd:'adminbudget',client_db:'cbbc_final'})
  }
}
