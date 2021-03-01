import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from 'src/app/service/datahandler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
categories: CategoriesComponent[];
  constructor(private datahandler: DatahandlerService) {}

  ngOnInit(): void {
 this.categories = this.datahandler.getEnabledCategories;
  }

}
