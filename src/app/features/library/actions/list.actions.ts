import { Action } from '@ngrx/store';
import { LibraryItemEntity } from '../reducers/list.reducer';

let currentFakeId = 1;

export const REMOVED_ITEM = '[library] removed item';
export class ItemRemoved implements Action {
  readonly type = REMOVED_ITEM;
  constructor(public payload: LibraryItemEntity) { }
}

export const ADD_ITEM = '[library] add item';
export class ItemAdded implements Action {
  readonly type = ADD_ITEM;
  payload: LibraryItemEntity;
  constructor(title: string, author: string, type: string) {
    this.payload = {
      id: 'TEMP' + (currentFakeId++).toString(),
      title,
      author,
      type
    };
  }
}


export type All =
  ItemAdded
  | ItemRemoved;


