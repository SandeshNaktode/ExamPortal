import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //current user which is logged in
  public getCurrentUser(){
    return this.http.get('http://localhost:8080/current-user');
  }

  //Generate Token

  public generateToken(loginData: any){

    return this.http.post('http://localhost:8080/generate-token', loginData);

  }
  
   //Login User: set token on localStorage

   public loginUser(token: any) {
    localStorage.setItem('token' , token);
    return true;
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  //logout-> remove userdata
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }
  
  //get token
  public getToken(){
    return localStorage.getItem('token');
  }

  //set userDetails
  public setUser(user: any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  //getUser
  public getUser(){
    let userStr = localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  //getUSerRoll
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
