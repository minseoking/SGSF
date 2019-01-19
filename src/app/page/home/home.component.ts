import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../share/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService) {
    console.log(this.authService);
  }

  ngOnInit() {
  }

}
