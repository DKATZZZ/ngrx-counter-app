import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autologout } from 'src/app/auth/state/auth.action';
import { isAuthenticated } from 'src/app/auth/state/auth.selector';
import { AuthService } from 'src/app/services/auth.service';
import { AppState } from 'src/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated:Observable<boolean>;
  constructor(
    private store:Store<AppState>,
    private router:Router,
    private authservice:AuthService
  ){

  }
  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated);
  }
  onlogout(e:Event){
    e.preventDefault();
    this.store.dispatch(autologout());
  }

}
