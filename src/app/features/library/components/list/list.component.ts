import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { LibraryListItem } from '../../models';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { ItemRemoved } from '../../actions/list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() list: LibraryListItem[];
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  remove(item: LibraryListItem) {
    this.store.dispatch(new ItemRemoved(item));
  }

}
