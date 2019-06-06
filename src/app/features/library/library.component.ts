import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LibraryListItem } from './models';
import { selectLibraryListItems, State } from './reducers';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  stuff$: Observable<LibraryListItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.stuff$ = this.store.select(selectLibraryListItems);
  }

}
