import { Injectable } from '@angular/core';
import { getEnabledCategories } from 'trace_events';
import { CategoriesComponent } from '../veiwes/categories/categories.component';

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {

  constructor() { }
}
getEnabledCategories(); CategoriesComponent