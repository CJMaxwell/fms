import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.route.navigate(['/dashboard']);
    }, 1000);
  }

}
