import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-padre-main',
  templateUrl: './padre-main.component.html',
  styleUrls: ['./padre-main.component.css']
})
export class PadreMainComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav)
  sideNav!:MatSidenav;

  constructor(private obs:BreakpointObserver, private authService: AuthService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.obs
    .observe(['max-width: 800px'])
    .pipe(delay(2))
    .subscribe((res)=> {
      if(res.matches){
        this.sideNav.mode = 'over';
          this.sideNav.close();
      } else{
        this.sideNav.mode = 'side';
          this.sideNav.open();
      }
    });

    
  }

  LogOut(){
  this.authService.logOut();
  }

}
