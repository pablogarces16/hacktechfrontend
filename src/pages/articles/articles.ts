import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html'
})
export class ArticlesPage {

  public user = "adam";
  public articleName;
  public articleBody;
  public articlePic;
  public articleCategory;

  constructor(public navCtrl: NavController) {

    if (this.user == "adam") {
      


  } else if (this.user == "melissa") {



  }

  }



}
