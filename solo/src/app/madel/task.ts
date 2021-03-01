import { CategoriesComponent } from "../veiwes/categories/categories.component";
import { Categories } from "./categories";
import { priority } from "./priority";

export class task {
    id: number;
    title: string;
    completed: boolean;
    priority: priority;
    categories: Categories;
    date: date;
    constructor(id: number,
        title: string,
        completed: boolean,
        priority: priority,
        categories: Categories,
        date: date)
    this.id = id;
    this.title = title;
    this.priority = priority;
        this.date = date;
        this.categories = categories;

}