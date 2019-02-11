import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(searchKey) {
    if (location.pathname === '/' || location.pathname.search('/home') === 0) {
      this.router.navigate(['home', {search : searchKey}]);
    } else if (location.pathname.search('/playlist') === 0) {
      this.router.navigate(['playlist', {search : searchKey}]);
    }
  }

}
