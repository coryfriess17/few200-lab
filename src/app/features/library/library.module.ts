import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './reducers';

@NgModule({
  declarations: [LibraryComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, reducers)
  ],
  exports: [LibraryComponent]
})
export class LibraryModule { }
