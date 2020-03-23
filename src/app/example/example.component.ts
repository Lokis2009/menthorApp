import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  public userList;
  displayedColumns: string[] = ['position', 'name', 'weight'];
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return [
          {title: 'Card 1', cols: 1, rows: 1},
          {title: 'Card 2', cols: 1, rows: 1},
          {title: 'Card 3', cols: 1, rows: 1},
          {title: 'Card 4', cols: 1, rows: 1}
        ];
      }

      return [
        {title: 'Card 1', cols: 2, rows: 1},
        {title: 'Card 2', cols: 1, rows: 1},
        {title: 'Card 3', cols: 1, rows: 2},
        {title: 'Card 4', cols: 1, rows: 1}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private dataSource: DataServiceService) {
  }

  ngOnInit() {
    this.dataSource.getUserList().subscribe((userlist) => {
        this.userList = userlist;
      }
    );
  }
}
