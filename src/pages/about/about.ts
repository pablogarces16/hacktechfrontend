import { Component } from '@angular/core';

import {ArticlesPage} from '../articles/articles';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  articlesPage = ArticlesPage;
  
  posts: any;
  

  constructor(public http: Http) {
    this.http.get('https://stemy-160517.appspot.com/getNews').map(res => res.json()).subscribe(data => {
      this.posts = data.children;
      console.log(this.posts);
    });
  }

}
