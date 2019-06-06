import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { ItemAdded } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  add(title: HTMLInputElement, author: HTMLInputElement, type: HTMLInputElement) {
    this.store.dispatch(new ItemAdded(title.value, author.value, type.value));
    title.value = '';
    author.value = '';
    type.value = '';
    title.focus();
  }

}
