import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  title = 'SaleRanger';

  searchText: string = "";

  search(searchText: string) {
    console.log(searchText);
  }
}
