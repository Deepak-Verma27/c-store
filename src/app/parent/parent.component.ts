import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharedService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  returnUrl: string;
  cars: any[];
  DataTable: any = [];
  brands: any[];
  EditRowID: any = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataSharedService
  ) {
    this.DataTable = [
      { id: 1, Name: 'Ravi', Mobile: 8010452134, Email_ID: 'ravi.chauhan@conqsys.com', City: 'Etawah' },
      { id: 2, Name: 'Debanjan', Mobile: 1111111, Email_ID: 'debanjan@conqsys.com', City: 'Kolkata' },
      { id: 3, Name: 'Hemant', Mobile: 2222222, Email_ID: 'hemant@conqsys.com', City: 'Jalandhar' },
      { id: 4, Name: 'Shashi', Mobile: 3333333, Email_ID: 'shashi@conqsys.com', City: 'Patna' }
    ];

    this.dataService.notifyObservable$.subscribe(
      data => {
        this.DataTable.splice(this.DataTable, -1, data);
        console.log(data);
        // this.DataTable = data;
      }
    );
  }

  ngOnInit() {
  }


  Edit(id): void {
    this.EditRowID = id;
  }

  // myFunc(): void {
  //   this.router.navigate(['/parent/child_1']);

  // }

  myFunc(): void {
    this.router.navigate(['edit/Parent']);

  }

  check(): void {

  }

  goBack() {
    this.router.navigate(['']);
  }
}
