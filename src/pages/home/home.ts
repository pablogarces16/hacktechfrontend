import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user = "christina";
  public articleName;
  public articleBody;
  public articlePic;
  public articleCategory;
  public technology;
  public science;
  public mathematics;
  public engineering;

  constructor(public navCtrl: NavController) {

    if (this.user == "christina") {
      this.science = 80;
      this.technology = 88;
      this.engineering = 72;
      this.mathematics = 64;




  } else if (this.user == "adam") {
      this.science = 92;
      this.technology = 80;
      this.engineering = 64;
      this.mathematics = 76;


  }

  }


}
