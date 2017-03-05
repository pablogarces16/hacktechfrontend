import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {ArticlesPage} from '../articles/articles';

/*import {NewsFeed} from '../../providers/news-feed/news-feed'*/

@Component({
  selector: 'page-about',
  /*providers: [NewsFeed],*/
  templateUrl: 'about.html'
})
export class AboutPage {

  articlesPage = ArticlesPage;

  console.log(this.NewsFeed.getFeed());

  constructor(public navCtrl: NavController) {

  }

}
