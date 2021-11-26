import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
 userisAuthenticated = false;
 private authListenerSubs:Subscription;

  constructor(private authService:AuthService) { }

  ngOnInit(){
    this.authListenerSubs =this.authService
    .getauthStatusListener()
    .subscribe(isAuthenticated =>{
      this.userisAuthenticated =isAuthenticated;

    });

    
 }
 onLogout(){
  this.authService.logout();
 }

ngOnDestroy(){
  this.authListenerSubs.unsubscribe();

}
}
