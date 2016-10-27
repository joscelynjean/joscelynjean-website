import { Injectable } from '@angular/core';
import { Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export class Project {
  name: string;
  description: string;
  html_url: string;
}

@Injectable()
export class ProjectService {

  constructor(private jsonp: Jsonp) { }

  getProjects() {
    var url = "http://api.github.com/users/joscelynjean/repos?callback=JSONP_CALLBACK";
    return this.jsonp
      .get(url)
      .toPromise()
      .then((response) => response.json().data)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
