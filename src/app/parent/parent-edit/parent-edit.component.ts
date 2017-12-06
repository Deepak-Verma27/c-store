import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuModule, MenuItem } from 'primeng/primeng';
@Component({
  selector: 'app-edit',
  templateUrl: './parent-edit.component.html',
  styleUrls: ['./parent-edit.component.css'],
})
export class ParentEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goSearch(): void {
    this.router.navigate(['/edit/Parent/child_1']);

  }
}
