import { Component, OnInit, Output } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../share/service/auth.service';

@Component({
  selector: 'app-default-top',
  templateUrl: './default-top.component.html',
  styleUrls: ['./default-top.component.css']
})
export class DefaultTopComponent implements OnInit {
// @Output() isLogin: boolean;
constructor(public authService: AuthService, private router: Router) {
  console.log(this.authService);
}

  ngOnInit() {

  }
  logout() {
    this.authService.logout();
    // this.router.navigate(['/login']);
    // this.setMessage();
  }
}
