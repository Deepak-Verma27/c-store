import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuModule, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  returnUrl: string;
  items: MenuItem[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,

  ) { }


  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  goSearch(): void {
    this.router.navigate(['/department']);

  }
}
