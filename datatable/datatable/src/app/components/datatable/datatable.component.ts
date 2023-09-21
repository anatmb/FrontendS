import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})

export class DatatableComponent implements OnDestroy, OnInit{
  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  data:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.http.get('https://dummy.restapiexample.com/api/v1/employees')
      .subscribe((res:any) => {
        this.data=res.data;
        this.dtTrigger.next(null);
      });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
