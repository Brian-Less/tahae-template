
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { TestApiService } from "app/modules/example/test-api/test-api.service";
import { environment } from "environments/environment";

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss']
})
export class TestApiComponent implements OnInit {

  loading: boolean = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  pathName: string = environment.api + '/users';
  
  dataSource?: any | null = null;

  constructor(
    private _testApiService: TestApiService
  ) { }
  
  ngOnInit(): void {

  }

  getUsers()
  {
    if (this.loading)
    {
      return;
    }

    this.loading = true;
    
    this.dataSource = new MatTableDataSource();

    this._testApiService.get().subscribe((users: any[]) => {
        this.dataSource = new MatTableDataSource(users);
        this.loading = false;
    });
  }
}
