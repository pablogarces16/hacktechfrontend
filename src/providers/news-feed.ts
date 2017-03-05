import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class NewsFeed {
    static get parameters() {
        return [[Http]];
    }

    constructor(private http:Http) {

    }

    getFeed() {
        var url ='https://stemy-160517.appspot.com/getNews';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
};
