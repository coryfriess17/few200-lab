import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectCurrentCount } from '../../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.count$ = this.store.select(selectCurrentCount);
  }

  increment() {
    // this.count = this.count + 1;
    this.store.dispatch({ type: 'increment' });
  }

  decrement() {
    this.store.dispatch({ type: 'decrement' });
  }
  reset() {
    this.store.dispatch({ type: 'reset' });
  }

}
