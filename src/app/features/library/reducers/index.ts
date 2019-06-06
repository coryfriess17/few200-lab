export const FEATURE_NAME = 'libraryFeature';
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LibraryListItem } from '../models';

export interface State {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};


// selectors

// 1. "Feature Selector"

export const selectFeature = createFeatureSelector<State>(FEATURE_NAME);

// 2. A selector for each "branch" of the features state.
export const selectListBranch = createSelector(selectFeature, f => f.list);

// export const { selectAll: selectAllLibraryItems } = fromList.adapter.getSelectors(selectListBranch);

export const selectAllLibraryItems = fromList.adapter.getSelectors(selectListBranch).selectAll;

// 3. The selectors for the actual components


export const selectLibraryListItems =
  createSelector(selectAllLibraryItems, items => items as LibraryListItem[]);
