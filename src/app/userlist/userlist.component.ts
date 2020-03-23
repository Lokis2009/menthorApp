import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  public userList;
  displayedColumns: string[] = ['position', 'name', 'weight'];
  constructor(private dataSource: DataServiceService) {
  }

  ngOnInit() {
    this.dataSource.getUserList().subscribe((userlist) => {
        this.userList = userlist;
      }
    );
  }
}
