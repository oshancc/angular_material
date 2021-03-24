import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private server_url = "https://reqres.in/api/users";


  getPageUser(page){
    let prm = new HttpParams().set('page', page);
    return this.http.get(this.server_url , {params: prm});
  }

  postUser(data){
    return this.http.post(this.server_url, data);
  }

  deleteUser(id){
    return this.http.delete(this.server_url+"/"+id);
  }
  editUser(id, user){
    return this.http.put(this.server_url+"/"+id, user);
  }

  getSingleUser(id){
    return this.http.get(this.server_url + "/" + id);
  }
}
