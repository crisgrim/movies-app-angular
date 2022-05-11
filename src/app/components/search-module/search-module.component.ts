import { Search } from './../../models/search';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-module',
  templateUrl: './search-module.component.html',
  styleUrls: ['./search-module.component.css']
})
export class SearchModuleComponent {
  searchModel: Search = {
    year: '',
    title: ''
  }

  @Output() search = new EventEmitter<Search>();

  handleSubmit() {
    if (this.searchModel.title || this.searchModel.year) {
      this.search.emit(this.searchModel);
    }
  }
}
