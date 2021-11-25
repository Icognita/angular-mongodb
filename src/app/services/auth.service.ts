 import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AuthData } from "../components/auth/Interface/auth-data.model";

//cliente HTTP injetado e importado
@Injectable({providedIn:"root"})
export class AuthService {
    private isAuthenticated=false
private token:string;
private authStatusListener =new Subject<boolean>()

    constructor(private http:HttpClient){}


    getToken(){
        return this.token;
    }
    getIsAuth(){
        return this.isAuthenticated;

    }

    getauthStatusListener(){
        return this.authStatusListener.asObservable();
    }


    createUser(email:string, password:string){
        const authData:AuthData ={email:email,password:password}
     this.http.post("http://localhost:3000/api/user/signup",authData)
     .subscribe(response =>{
         console.log(response);

     });
    }
     login(email:string,password:string){
         const authData:AuthData={email:email,password:password}
         this.http.post<{token:string}>("http://localhost:3000/api/user/login",authData)
         
         .subscribe(response =>{
             const token=response.token;
             this.token=  response.token;
             if(token){
                    //  this.token;
             this.isAuthenticated =true;
             this.authStatusListener.next(true);

             }
          })
     }
     logout(){
        this.token=null;
        this.isAuthenticated=false;
        this.authStatusListener.next(false)
    }

}