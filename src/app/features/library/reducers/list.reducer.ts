
import * as listActions from '../actions/list.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
export interface LibraryItemEntity {
  title: string;
  author: string;
  type: string;
}

export interface State extends EntityState<LibraryItemEntity> {

}
export const adapter = createEntityAdapter<LibraryItemEntity>();

const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: {
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      type: 'Hardcover'
    },
    2: {
      title: 'Lord of the Rings',
      author: 'J. R. R. Tolkien',
      type: 'E-Book'
    }
  }
};

export function reducer(state: State = initialState, action: listActions.All): State {
  switch (action.type) {
    case listActions.REMOVED_ITEM: {
      return adapter.removeOne(action.payload.title, state);
    }
    case listActions.ADD_ITEM: {
      return adapter.addOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
